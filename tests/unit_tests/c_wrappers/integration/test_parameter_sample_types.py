import logging
import os
from contextlib import ExitStack as does_not_raise
from pathlib import Path
from textwrap import dedent

import cwrap
import numpy as np
import pytest
from ecl import EclDataType
from ecl.eclfile import EclKW
from ecl.grid import EclGrid
from ecl.util.geometry import Surface

from ert._c_wrappers.config.config_parser import ConfigValidationError
from ert._c_wrappers.enkf import EnKFMain, ResConfig
from ert._clib import update
from ert._clib.update import Parameter
from ert.libres_facade import LibresFacade


def write_file(fname, contents):
    with open(fname, "w") as fout:
        fout.writelines(contents)


def create_runpath(config, active_mask=None):
    active_mask = [True] if active_mask is None else active_mask
    res_config = ResConfig(config)
    ert = EnKFMain(res_config)

    run_context = ert.create_ensemble_experiment_run_context(
        active_mask=active_mask,
        iteration=0,
    )
    ert.sample_prior(run_context.sim_fs, run_context.active_realizations)
    ert.createRunPath(run_context)
    return ert


def load_from_forward_model(ert):
    facade = LibresFacade(ert)
    realizations = [True] * facade.get_ensemble_size()
    return facade.load_from_forward_model("default", realizations, 0)


@pytest.mark.integration_test
@pytest.mark.parametrize(
    "config_str, expected, extra_files, expectation",
    [
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt\nRANDOM_SEED 1234",
            "MY_KEYWORD 0.379773",
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
            "GEN_KW KW_NAME template.txt kw.txt prior.txt INIT_FILES:custom_param0",  # noqa
            "Not expecting a file",
            [],
            pytest.raises(
                ConfigValidationError, match="Loading GEN_KW from files requires %d"
            ),
        ),
    ],
)
def test_gen_kw(tmpdir, config_str, expected, extra_files, expectation):
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

        with expectation:
            create_runpath("config.ert")
            assert (
                Path("simulations/realization-0/iter-0/kw.txt").read_text("utf-8")
                == expected
            )


@pytest.mark.integration_test
@pytest.mark.parametrize(
    "config_str, expected, extra_files",
    [
        (
            "GEN_KW KW_NAME template.txt kw.txt prior.txt INIT_FILES:custom_param%d",
            "MY_KEYWORD 1.31\nMY_SECOND_KEYWORD 1.01",
            [("custom_param0", "MY_SECOND_KEYWORD 1.01\nMY_KEYWORD 1.31")],
        ),
    ],
)
def test_that_order_of_input_in_user_input_is_abritrary_for_gen_kw_init_files(
    tmpdir, config_str, expected, extra_files
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
        with open("template.txt", "w") as fh:
            fh.writelines(
                "MY_KEYWORD <MY_KEYWORD>\nMY_SECOND_KEYWORD <MY_SECOND_KEYWORD>"
            )
        with open("prior.txt", "w") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1\nMY_SECOND_KEYWORD NORMAL 0 1")
        for fname, contents in extra_files:
            write_file(fname, contents)

        create_runpath("config.ert")
        assert (
            Path("simulations/realization-0/iter-0/kw.txt").read_text("utf-8")
            == expected
        )


@pytest.mark.parametrize(
    "config_str, expect_forward_init",
    [
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:../../../my_param_0.grdecl FORWARD_INIT:True",  # noqa
            True,
        ),
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl",
            False,
        ),
    ],
)
def test_field_param(tmpdir, config_str, expect_forward_init):
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

        expect_param = EclKW("MY_PARAM", grid.getGlobalSize(), EclDataType.ECL_FLOAT)
        for i in range(grid.getGlobalSize()):
            expect_param[i] = i

        with cwrap.open("my_param_0.grdecl", mode="w") as f:
            grid.write_grdecl(expect_param, f)
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        ert = create_runpath("config.ert")
        assert (
            ert.ensembleConfig()["MY_PARAM"].getUseForwardInit() is expect_forward_init
        )

        fs = ert.getEnkfFsManager().getFileSystem("default")
        # Assert that the data has been written to runpath
        if expect_forward_init:
            # FORWARD_INIT: True means that ERT waits until the end of the
            # forward model to internalise the data
            assert not Path("simulations/realization-0/iter-0/my_param.grdecl").exists()

            with pytest.raises(KeyError, match="No parameter: MY_PARAM in storage"):
                fs.load_parameter(
                    ert.ensembleConfig(), [0], update.Parameter("MY_PARAM")
                )

            # We try to load the parameters from the forward model, this would fail if
            # forward init was not set correctly
            assert load_from_forward_model(ert) == 1

            # Once data has been internalised, ERT will generate the
            # parameter files
            create_runpath("config.ert")

        with cwrap.open("simulations/realization-0/iter-0/my_param.grdecl", "rb") as f:
            actual_param = EclKW.read_grdecl(f, "MY_PARAM")
        assert actual_param == expect_param

        if expect_forward_init:
            arr = fs.load_parameter(
                ert.ensembleConfig(), [0], update.Parameter("MY_PARAM")
            )
            assert len(arr) == 16


@pytest.mark.parametrize(
    "config_str, expect_forward_init, expect_num_loaded, error",
    [
        (
            "SURFACE MY_PARAM OUTPUT_FILE:surf.irap   INIT_FILES:surf%d.irap   BASE_SURFACE:surf0.irap",  # noqa
            False,
            1,
            "",
        ),
        (
            "SURFACE MY_PARAM OUTPUT_FILE:surf.irap INIT_FILES:../../../surf%d.irap BASE_SURFACE:surf0.irap FORWARD_INIT:True",  # noqa
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
    config_str,
    expect_forward_init,
    expect_num_loaded,
    error,
    caplog,
):
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        """
        )
        config += config_str
        expect_surface = Surface(
            nx=2, ny=2, xinc=1, yinc=1, xstart=1, ystart=1, angle=0
        )
        expect_surface.write("surf.irap")
        expect_surface.write("surf0.irap")

        with open("config.ert", "w") as fh:
            fh.writelines(config)
        ert = create_runpath("config.ert")
        assert (
            ert.ensembleConfig()["MY_PARAM"].getUseForwardInit() is expect_forward_init
        )
        # We try to load the parameters from the forward model, this would fail if
        # forward init was not set correctly
        assert load_from_forward_model(ert) == expect_num_loaded
        assert error in "".join(caplog.messages)

        # Assert that the data has been written to runpath
        if expect_num_loaded > 0:
            if expect_forward_init:
                # FORWARD_INIT: True means that ERT waits until the end of the
                # forward model to internalise the data
                assert not Path("simulations/realization-0/iter-0/surf.irap").exists()

                # Once data has been internalised, ERT will generate the
                # parameter files
                create_runpath("config.ert")

            actual_surface = Surface("simulations/realization-0/iter-0/surf.irap")
            assert actual_surface == expect_surface

        # Assert that the data has been internalised to storage
        fs = ert.getEnkfFsManager().getFileSystem("default")
        if expect_num_loaded > 0:
            arr = fs.load_parameter(
                ert.ensembleConfig(), [0], update.Parameter("MY_PARAM")
            )
            assert len(arr) == 4
        else:
            with pytest.raises(KeyError, match="No parameter: MY_PARAM in storage"):
                fs.load_parameter(
                    ert.ensembleConfig(), [0], update.Parameter("MY_PARAM")
                )


@pytest.mark.integration_test
@pytest.mark.parametrize("load_forward_init", [True, False])
def test_gen_kw_forward_init(tmpdir, load_forward_init):
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        JOBNAME my_name%d
        NUM_REALIZATIONS 1
        GEN_KW KW_NAME template.txt kw.txt prior.txt FORWARD_INIT:{str(load_forward_init)} INIT_FILES:custom_param%d
        """  # noqa
        )
        with open("config.ert", "w") as fh:
            fh.writelines(config)

        with open("template.txt", "w") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", "w") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1")
        if not load_forward_init:
            write_file("custom_param0", "1.31")

        if load_forward_init:
            with pytest.raises(
                KeyError,
                match=(
                    "Loading GEN_KW from files created by "
                    "the forward model is not supported."
                ),
            ):
                create_runpath("config.ert")
        else:
            ert = create_runpath("config.ert")
            assert Path("simulations/realization-0/iter-0/kw.txt").exists()
            facade = LibresFacade(ert)
            df = facade.load_all_gen_kw_data("default")
            assert df["KW_NAME:MY_KEYWORD"][0] == 1.31


@pytest.mark.parametrize(
    "check_random_seed, expectation",
    [
        pytest.param(
            True,
            does_not_raise(),
            id=(
                "The second initialization we extract the random seed from the first "
                "case and set that in the second case to make sure the sampling can "
                "be reproduced"
            ),
        ),
    ],
)
def test_initialize_random_seed(tmpdir, caplog, check_random_seed, expectation):
    """
    This test initializes a case twice, the first time without a random
    seed.
    """
    with caplog.at_level(logging.INFO):
        with tmpdir.as_cwd():
            config = dedent(
                """
            JOBNAME my_name%d
            NUM_REALIZATIONS 1
            GEN_KW KW_NAME template.txt kw.txt prior.txt
            """
            )
            with open("config.ert", "w") as fh:
                fh.writelines(config)
            with open("template.txt", "w") as fh:
                fh.writelines("MY_KEYWORD <MY_KEYWORD>")
            with open("prior.txt", "w") as fh:
                fh.writelines("MY_KEYWORD NORMAL 0 1")
            create_runpath("config.ert")
            # We read the first parameter value as a reference value
            expected = Path("simulations/realization-0/iter-0/kw.txt").read_text(
                "utf-8"
            )

            # Make a clean directory for the second case, which is identical
            # to the first, except that it uses the random seed from the first
            os.makedirs("second")
            os.chdir("second")
            random_seed = next(
                message
                for message in caplog.messages
                if message.startswith("RANDOM_SEED")
            ).split()[1]
            if check_random_seed:
                config += f"RANDOM_SEED {random_seed}"
            with open("config_2.ert", "w") as fh:
                fh.writelines(config)
            with open("template.txt", "w") as fh:
                fh.writelines("MY_KEYWORD <MY_KEYWORD>")
            with open("prior.txt", "w") as fh:
                fh.writelines("MY_KEYWORD NORMAL 0 1")

            create_runpath("config_2.ert")
            with expectation:
                assert (
                    Path("simulations/realization-0/iter-0/kw.txt").read_text("utf-8")
                    == expected
                )


def test_that_first_three_parameters_sampled_snapshot(tmpdir):
    """
    Nothing special about the first three, but there was a regression
    in nr. 2, so added one extra.
    """
    with tmpdir.as_cwd():
        config = dedent(
            """
        JOBNAME my_name%d
        NUM_REALIZATIONS 10
        GEN_KW KW_NAME template.txt kw.txt prior.txt
        RANDOM_SEED 1234
        """
        )
        with open("config.ert", "w") as fh:
            fh.writelines(config)
        with open("template.txt", "w") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", "w") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1")
        ert = create_runpath("config.ert", [True] * 3)
        fs = ert.getCurrentFileSystem()
        prior = fs.load_parameter(
            ert.ensembleConfig(), list(range(3)), Parameter("KW_NAME")
        )
        expected = [0.3797727, 0.7943204, 2.2610954]
        np.testing.assert_almost_equal(prior, np.array([expected]))
