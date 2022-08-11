import sys
from pathlib import Path
from textwrap import dedent
from contextlib import ExitStack as does_not_raise

import cwrap
import pytest
from ecl import EclDataType
from ecl.eclfile import EclKW
from ecl.grid import EclGrid
from ecl.util.geometry import Surface
from ecl.util.util import BoolVector
from ert.libres_facade import LibresFacade
from res.enkf import EnKFMain, ResConfig


def write_file(fname, contents):
    with open(fname, "w") as fout:
        fout.writelines(contents)


@pytest.fixture
def create_runpath():
    def func(config):
        res_config = ResConfig(config)
        ert = EnKFMain(res_config)

        run_context = ert.create_ensemble_experiment_run_context(
            active_mask=[True],
            iteration=0,
        )
        ert.createRunPath(run_context)
        return ert

    yield func


@pytest.fixture
def load_from_forward_model():
    def func(ert):
        facade = LibresFacade(ert)
        realizations = BoolVector(
            default_value=True, initial_size=facade.get_ensemble_size()
        )
        return facade.load_from_forward_model("default_0", realizations, 0)

    yield func


@pytest.mark.integration_test
@pytest.mark.parametrize(
    "config_str, expected, extra_files, expectation",
    [
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt\nRANDOM_SEED 1234",
            "MY_KEYWORD -0.996621"
            if sys.platform == "darwin"
            else "MY_KEYWORD 1.85656",
            [],
            does_not_raise(),
        ),
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt INIT_FILES:custom_param%d",
            "MY_KEYWORD 1.31",
            [("custom_param0", "MY_KEYWORD 1.31")],
            does_not_raise(),
        ),
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt INIT_FILES:custom_param%d",
            "MY_KEYWORD 1.31",
            [("custom_param0", "1.31")],
            does_not_raise(),
        ),
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt FORWARD_INIT:True INIT_FILES:custom_param0",  # noqa
            "Not expecting a file",
            [],
            pytest.raises(FileNotFoundError, match="kw.txt"),
        ),
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt FORWARD_INIT=True INIT_FILES:custom_param0",  # noqa
            "MY_KEYWORD 1.31",
            [("custom_param0", "MY_KEYWORD 1.31")],
            does_not_raise(),  # This really should not work, spot the mistake?
        ),
    ],
)
def test_gen_kw(tmpdir, config_str, expected, extra_files, expectation, create_runpath):
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        """
        )
        config += config_str
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        with open("template.txt", "w") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", "w") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1")
        for fname, contents in extra_files:
            write_file(fname, contents)
        create_runpath("config.ert")
        with expectation:
            assert (
                Path("simulations/realization0/kw.txt").read_text("utf-8") == expected
            )


@pytest.mark.parametrize(
    "config_str, expected",
    [
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:../../my_param_0.grdecl FORWARD_INIT:True",  # noqa
            True,
        ),
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl",
            False,
        ),
    ],
)
def test_field_param(
    tmpdir, create_runpath, config_str, expected, load_from_forward_model
):
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        GRID MY_GRID.GRID
        """
        )
        config += config_str
        grid = EclGrid.create_rectangular(
            (4, 4, 1), (1, 1, 1)  # This is minimum size, any smaller will util_abort
        )
        grid.save_GRID("MY_GRID.GRID")

        poro = EclKW("MY_PARAM", grid.getGlobalSize(), EclDataType.ECL_FLOAT)
        for i in range(grid.getGlobalSize()):
            poro[i] = i

        with cwrap.open("my_param_0.grdecl", mode="w") as f:
            grid.write_grdecl(poro, f)
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        ert = create_runpath("config.ert")
        assert ert.ensembleConfig()["MY_PARAM"].getUseForwardInit() is expected
        # We try to load the parameters from the forward model, this would fail if
        # forward init was not set correctly
        assert load_from_forward_model(ert) == 1


@pytest.mark.parametrize(
    "config_str, expected, expect_loaded, error",
    [
        (
            "SURFACE MY_PARAM OUTPUT_FILE:surf.irap   INIT_FILES:surf%d.irap   BASE_SURFACE:surf0.irap",  # noqa
            False,
            1,
            "",
        ),
        (
            "SURFACE MY_PARAM OUTPUT_FILE:surf.irap INIT_FILES:../../surf%d.irap BASE_SURFACE:surf0.irap FORWARD_INIT:True",  # noqa
            True,
            1,
            "",
        ),
        (
            "SURFACE MY_PARAM OUTPUT_FILE:surf.irap INIT_FILES:surf%d.irap BASE_SURFACE:surf0.irap FORWARD_INIT:True",  # noqa
            True,
            0,
            "surf0.irap - failed to initialize node: MY_PARAM",
        ),
    ],
)
def test_surface_param(
    tmpdir,
    create_runpath,
    config_str,
    expected,
    expect_loaded,
    error,
    caplog,
    load_from_forward_model,
):
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        """
        )
        config += config_str
        s0 = Surface(nx=2, ny=2, xinc=1, yinc=1, xstart=1, ystart=1, angle=0)
        s0.write("surf.irap")
        s0.write("surf0.irap")

        with open("config.ert", "w") as fh:
            fh.writelines(config)
        ert = create_runpath("config.ert")
        assert ert.ensembleConfig()["MY_PARAM"].getUseForwardInit() is expected
        # We try to load the parameters from the forward model, this would fail if
        # forward init was not set correctly
        assert load_from_forward_model(ert) == expect_loaded
        assert error in "".join(caplog.messages)


@pytest.mark.integration_test
@pytest.mark.parametrize(
    "config_str, expected, extra_files, expectation",
    [
        (
            "GEN_PARAM  MY_PARAM kw.txt INPUT_FORMAT:ASCII OUTPUT_FORMAT:ASCII INIT_FILES:files%d",  # noqa
            "1.01\n",
            [("files0", "1.01")],
            does_not_raise(),
        ),
        (
            "GEN_PARAM  MY_PARAM kw.txt INPUT_FORMAT:ASCII OUTPUT_FORMAT:ASCII_TEMPLATE INIT_FILES:files%d TEMPLATE:template_file KEY:Magic123",  # noqa
            "Header line\n==\n1.01\n\n==",
            [("files0", "1.01"), ("template_file", "Header line\n==\nMagic123\n==")],
            does_not_raise(),
        ),
        (
            "GEN_PARAM  MY_PARAM kw.txt INPUT_FORMAT:ASCII OUTPUT_FORMAT:ASCII INIT_FILES:files%d FORWARD_INIT:True",  # noqa
            "Not expecting a file",
            [],
            pytest.raises(FileNotFoundError, match="kw.txt"),
        ),
    ],
)
def test_gen_param(
    tmpdir, config_str, expected, extra_files, expectation, create_runpath
):
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        """
        )
        config += config_str
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        for fname, contents in extra_files:
            write_file(fname, contents)
        create_runpath("config.ert")
        with expectation:
            assert (
                Path("simulations/realization0/kw.txt").read_text("utf-8") == expected
            )


@pytest.mark.integration_test
@pytest.mark.parametrize("load_forward_init", [True, False])
def test_gen_param_forward_init(
    tmpdir, create_runpath, load_from_forward_model, load_forward_init
):
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        GEN_PARAM  MY_PARAM kw.txt INPUT_FORMAT:ASCII OUTPUT_FORMAT:ASCII INIT_FILES:files%d FORWARD_INIT:{str(load_forward_init)}
        """  # noqa
        )
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        if not load_forward_init:
            write_file("files0", "1.01")
        ert = create_runpath("config.ert")

        if load_forward_init:
            assert not Path("simulations/realization0/kw.txt").exists()
            param_file = Path("simulations/realization0/files0")
            param_file.write_text("1.01")
        else:
            assert Path("simulations/realization0/kw.txt").exists()
        assert load_from_forward_model(ert) == 1


@pytest.mark.integration_test
@pytest.mark.parametrize("load_forward_init", [True, False])
def test_gen_kw_forward_init(
    tmpdir, create_runpath, load_from_forward_model, load_forward_init
):
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        GEN_KW KW_NAME template.txt kw.txt prior.txt FORWARD_INIT:{str(load_forward_init)} INIT_FILES:custom_param0
        """  # noqa
        )
        with open("config.ert", "w") as fh:
            fh.writelines(config)

        with open("template.txt", "w") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", "w") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1")
        if not load_forward_init:
            write_file("custom_param0", "MY_KEYWORD 1.31")
        ert = create_runpath("config.ert")

        if load_forward_init:
            assert not Path("simulations/realization0/kw.txt").exists()
            param_file = Path("simulations/realization0/custom_param0")
            param_file.write_text("1.01")
        else:
            assert Path("simulations/realization0/kw.txt").exists()
        assert load_from_forward_model(ert) == 1
