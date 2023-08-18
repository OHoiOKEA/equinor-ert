import os
from datetime import datetime
from pathlib import Path
from textwrap import dedent

import pytest
import xtgeo
from ecl.summary import EclSum
from hypothesis import assume, given
from lark import Token

from ert.config import ConfigValidationError, ConfigWarning, EnsembleConfig, ErtConfig
from ert.config.parsing import ConfigKeys, ContextString
from ert.config.parsing.file_context_token import FileContextToken

from .config_dict_generator import config_generators


def test_create():
    empty_ens_conf = EnsembleConfig()
    conf_from_dict = EnsembleConfig.from_dict({})

    assert empty_ens_conf == conf_from_dict
    assert conf_from_dict.grid_file is None
    assert not conf_from_dict.parameters

    assert "XYZ" not in conf_from_dict

    with pytest.raises(KeyError):
        _ = conf_from_dict["KEY"]


@pytest.mark.usefixtures("use_tmpdir")
def test_ensemble_config_fails_on_non_sensical_refcase_file():
    refcase_file = "CEST_PAS_UNE_REFCASE"
    refcase_file_content = """
_________________________________________     _____    ____________________
\\______   \\_   _____/\\_   _____/\\_   ___ \\   /  _  \\  /   _____/\\_   _____/
 |       _/|    __)_  |    __)  /    \\  \\/  /  /_\\  \\ \\_____  \\  |    __)_
 |    |   \\|        \\ |     \\   \\     \\____/    |    \\/        \\ |        \\
 |____|_  /_______  / \\___  /    \\______  /\\____|__  /_______  //_______  /
        \\/        \\/      \\/            \\/         \\/        \\/         \\/
"""
    with open(refcase_file + ".UNSMRY", "w+", encoding="utf-8") as refcase_file_handler:
        refcase_file_handler.write(refcase_file_content)
    with open(refcase_file + ".SMSPEC", "w+", encoding="utf-8") as refcase_file_handler:
        refcase_file_handler.write(refcase_file_content)
    with pytest.raises(expected_exception=IOError, match=refcase_file):
        config_dict = {ConfigKeys.REFCASE: refcase_file}
        EnsembleConfig.from_dict(config_dict=config_dict)


@pytest.mark.usefixtures("use_tmpdir")
def test_ensemble_config_construct_refcase_and_grid():
    grid_file = "CASE.EGRID"
    refcase_file = "REFCASE_NAME"
    xtgeo.create_box_grid(dimension=(10, 10, 1)).to_file("CASE.EGRID", "egrid")
    ecl_sum = EclSum.writer("REFCASE_NAME", datetime(2014, 9, 10), 3, 3, 3)
    ecl_sum.addVariable("FOPR", unit="SM3/DAY")
    t_step = ecl_sum.addTStep(1, sim_days=10)
    t_step["FOPR"] = 10
    ecl_sum.fwrite()
    ec = EnsembleConfig.from_dict(
        config_dict={
            ConfigKeys.GRID: grid_file,
            ConfigKeys.REFCASE: refcase_file,
        },
    )

    assert isinstance(ec, EnsembleConfig)
    assert isinstance(ec.refcase, EclSum)

    assert ec._grid_file == os.path.realpath(grid_file)
    assert ec._refcase_file == os.path.realpath(refcase_file)


def test_that_refcase_gets_correct_name(tmpdir):
    refcase_name = "MY_REFCASE"
    config_dict = {
        ConfigKeys.REFCASE: refcase_name,
    }

    with tmpdir.as_cwd():
        ecl_sum = EclSum.writer(refcase_name, datetime(2014, 9, 10), 10, 10, 10)
        ecl_sum.addVariable("FOPR", unit="SM3/DAY")
        t_step = ecl_sum.addTStep(2, sim_days=1)
        t_step["FOPR"] = 1
        ecl_sum.fwrite()

        ec = EnsembleConfig.from_dict(config_dict=config_dict)
        assert os.path.realpath(refcase_name) == ec.refcase.case


@pytest.mark.usefixtures("use_tmpdir")
@pytest.mark.parametrize(
    "existing_suffix, expected_suffix",
    [
        pytest.param(
            "UNSMRY",
            "SMSPEC",
        ),
        pytest.param(
            "SMSPEC",
            "UNSMRY",
        ),
    ],
)
def test_that_files_for_refcase_exists(existing_suffix, expected_suffix):
    refcase_file = "missing_refcase_file"

    with open(
        refcase_file + "." + existing_suffix, "w+", encoding="utf-8"
    ) as refcase_writer:
        refcase_writer.write("")

    with pytest.raises(
        ConfigValidationError,
        match="Cannot find " + expected_suffix + " file for refcase provided!",
    ):
        _ = EnsembleConfig.from_dict(
            config_dict={
                ConfigKeys.REFCASE: refcase_file,
            },
        )


@pytest.mark.usefixtures("use_tmpdir")
def test_get_surface_node():
    surface_str = "TOP"
    with pytest.raises(ConfigValidationError, match="Missing required OUTPUT_FILE"):
        EnsembleConfig.get_surface_node(surface_str.split(" "))

    surface_in = "small_%d.irap"
    base_surface = "small.irap"
    surface_out = "small_out.irap"
    xtgeo.RegularSurface(ncol=2, nrow=3, xinc=1, yinc=1).to_file(
        base_surface, fformat="irap_ascii"
    )
    # add init file
    surface_str += f" INIT_FILES:{surface_in}"

    with pytest.raises(ConfigValidationError, match="Missing required OUTPUT_FILE"):
        EnsembleConfig.get_surface_node(surface_str.split(" "))

    # add output file
    surface_str += f" OUTPUT_FILE:{surface_out}"
    with pytest.raises(ConfigValidationError, match="Missing required BASE_SURFACE"):
        EnsembleConfig.get_surface_node(surface_str.split(" "))

    # add base surface
    surface_str += f" BASE_SURFACE:{base_surface}"

    surface_node = EnsembleConfig.get_surface_node(surface_str.split(" "))

    assert surface_node is not None

    surface_str += " FORWARD_INIT:TRUE"
    surface_node = EnsembleConfig.get_surface_node(surface_str.split(" "))


def test_surface_bad_init_values(setup_case):
    surface_in = "path/surf.irap"
    base_surface = "path/not_surface"
    surface_out = "surface/small_out.irap"
    surface_str = (
        f"TOP INIT_FILES:{surface_in}"
        f" OUTPUT_FILE:{surface_out}"
        f" BASE_SURFACE:{base_surface}"
    )
    error = (
        "Must give file name with %d with FORWARD_INIT:FALSE;"
        f"BASE_SURFACE:{base_surface} not found"
    )
    with pytest.raises(ConfigValidationError, match=error):
        EnsembleConfig.get_surface_node(surface_str.split(" "))


def test_ensemble_config_duplicate_node_names(setup_case):
    duplicate_name = "Test_name"
    Path("MULTFLT.TXT").write_text("", encoding="utf-8")
    Path("FAULT_TEMPLATE").write_text("", encoding="utf-8")
    config_dict = {
        ConfigKeys.GEN_DATA: [
            [
                duplicate_name,
                "INPUT_FORMAT:ASCII",
                "RESULT_FILE:snake_oil_opr_diff_%d.txt",
                "REPORT_STEPS:0,1,2,199",
            ],
        ],
        ConfigKeys.GEN_KW: [
            [
                duplicate_name,
                "FAULT_TEMPLATE",
                "MULTFLT.INC",
                "MULTFLT.TXT",
                "FORWARD_INIT:FALSE",
            ]
        ],
    }
    error_match = f"key {duplicate_name!r} already present in ensemble config"

    with pytest.raises(ConfigValidationError, match=error_match):
        EnsembleConfig.from_dict(config_dict=config_dict)


@pytest.mark.parametrize(
    "result_file, fail",
    [
        pytest.param(
            "RESULT_FILE:",
            True,
            id="RESULT_FILE key but no file",
        ),
        pytest.param(
            "",
            True,
            id="No RESULT_FILE key",
        ),
        pytest.param(
            'RESULT_FILE:"file_in_quotes_%d.out"',
            True,
            id="File in quotes",
        ),
        pytest.param(
            "RESULT_FILE:poly_%d.out",
            False,
            id="This should not fail",
        ),
    ],
)
def test_malformed_or_missing_gen_data_result_file(setup_case, result_file, fail):
    _ = setup_case("poly_example", "poly.ert")
    # Add extra GEN_DATA key to config file
    config_line = f"""
    GEN_DATA POLY_RES_2 {result_file} REPORT_STEPS:0 INPUT_FORMAT:ASCII
    """
    with open("poly.ert", "a", encoding="utf-8") as f:
        f.write(config_line)

    if fail:
        with pytest.raises(
            ConfigValidationError,
            match="poly.ert.* Missing or unsupported RESULT_FILE for GEN_DATA",
        ):
            ErtConfig.from_file("poly.ert")
    else:
        ErtConfig.from_file("poly.ert")


@pytest.mark.usefixtures("use_tmpdir")
def test_gen_kw_pred_special_suggested_removal():
    with open("empty_file.txt", "a", encoding="utf-8") as f:
        f.write("")
    with open("config.ert", "a", encoding="utf-8") as f:
        f.write(
            "NUM_REALIZATIONS 1\n"
            "GEN_KW PRED empty_file.txt empty_file.txt empty_file.txt\n"
        )
    with pytest.warns(
        ConfigWarning,
        match="GEN_KW PRED used to hold a special meaning and be excluded.*",
    ) as warn_log:
        ErtConfig.from_file("config.ert")
    assert any("config.ert: Line 2" in str(w.message) for w in warn_log)


def make_context_string(msg: str, filename: str) -> ContextString:
    return ContextString.from_token(FileContextToken(Token("UNQUOTED", msg), filename))


@pytest.mark.usefixtures("use_tmpdir")
def test_gen_kw_config():
    with open("template.txt", "w", encoding="utf-8") as f:
        f.write("Hello")

    with open("parameters.txt", "w", encoding="utf-8") as f:
        f.write("KEY  UNIFORM 0 1 \n")

    with open("parameters_with_comments.txt", "w", encoding="utf-8") as f:
        f.write("KEY1  UNIFORM 0 1 -- COMMENT\n")
        f.write("\n\n")  # Two blank lines
        f.write("KEY2  UNIFORM 0 1\n")
        f.write("--KEY3  \n")
        f.write("KEY3  UNIFORM 0 1\n")

    EnsembleConfig.from_dict(
        config_dict={
            ConfigKeys.GEN_KW: [
                [
                    "KEY",
                    "template.txt",
                    "nothing_here.txt",
                    "parameters.txt",
                ]
            ],
        }
    )

    EnsembleConfig.from_dict(
        config_dict={
            ConfigKeys.GEN_KW: [
                [
                    "KEY",
                    "template.txt",
                    "nothing_here.txt",
                    "parameters_with_comments.txt",
                ]
            ],
        }
    )

    with pytest.raises(
        ConfigValidationError, match="config.ert.* No such template file"
    ):
        EnsembleConfig.from_dict(
            config_dict={
                ConfigKeys.GEN_KW: [
                    [
                        "KEY",
                        make_context_string("no_template_here.txt", "config.ert"),
                        "nothing_here.txt",
                        "parameters.txt",
                    ]
                ],
            }
        )

    with pytest.raises(
        ConfigValidationError, match="config.ert.* No such parameter file"
    ):
        EnsembleConfig.from_dict(
            config_dict={
                ConfigKeys.GEN_KW: [
                    [
                        "KEY",
                        "template.txt",
                        "nothing_here.txt",
                        make_context_string("no_parameter_here.txt", "config.ert"),
                    ]
                ],
            }
        )


@given(config_generators())
def test_ensemble_config_errors_on_unknown_function_in_field(
    tmp_path_factory, config_generator
):
    with config_generator(tmp_path_factory) as config_values:
        assume(len(config_values.field) > 0)

        silly_function_name = "NORMALIZE_EGGS"
        fieldlist = list(config_values.field[0])
        alteredfieldlist = []

        for val in fieldlist:
            if "INIT_TRANSFORM" in val:
                alteredfieldlist.append("INIT_TRANSFORM:" + silly_function_name)
            else:
                alteredfieldlist.append(val)

        mylist = []
        mylist.append(tuple(alteredfieldlist))

        config_values.field = mylist

        with pytest.raises(
            expected_exception=ValueError,
            match=f"FIELD INIT_TRANSFORM:{silly_function_name} is an invalid function",
        ):
            _ = ErtConfig.from_dict(
                config_values.to_config_dict("test.ert", os.getcwd())
            )


def test_that_empty_grid_file_raises(tmpdir):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 10
        FIELD foo bar
        GRID grid.GRDECL
        """
        )
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)
        with open("grid.GRDECL", "w", encoding="utf-8") as fh:
            fh.writelines("")

        with pytest.raises(
            expected_exception=ConfigValidationError,
            match="did not contain dimensions",
        ):
            _ = ErtConfig.from_file("config.ert")
