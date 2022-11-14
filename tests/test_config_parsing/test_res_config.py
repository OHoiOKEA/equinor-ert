import os
from datetime import date
from textwrap import dedent

import pytest
from hypothesis import given

from ert._c_wrappers.config.config_parser import ConfigValidationError
from ert._c_wrappers.enkf import ResConfig
from ert._c_wrappers.enkf.config_keys import ConfigKeys

from .config_dict_generator import config_dicts, to_config_file


def touch(filename):
    with open(filename, "w") as fh:
        fh.write(" ")


@pytest.mark.skip(reason="https://github.com/equinor/ert/issues/2554")
def test_res_config_simple_config_parsing(tmpdir):
    touch(tmpdir + "/rpfile")
    touch(tmpdir + "/datafile")
    os.mkdir(tmpdir + "/license")
    with open(tmpdir + "/test.ert", "w") as fh:
        fh.write(
            """
JOBNAME  Job%d
NUM_REALIZATIONS  1
RUNPATH_FILE rpfile
DATA_FILE datafile
LICENSE_PATH license
"""
        )
    assert (
        ResConfig(str(tmpdir + "/test.ert")).site_config
        == ResConfig(
            config_dict={
                "CONFIG_DIRECTORY": str(tmpdir),
                "DATA_FILE": "datafile",
                "LICENSE_PATH": "license",
                "RES_CONFIG_FILE": "test.ert",
                "RUNPATH_FILE": "rpfile",
            }
        ).site_config
    )


def test_res_config_minimal_dict_init(tmpdir):
    with tmpdir.as_cwd():
        config_dict = {ConfigKeys.NUM_REALIZATIONS: 1}
        res_config = ResConfig(config_dict=config_dict)
        assert res_config is not None


def test_bad_user_config_file_error_message(tmp_path):
    (tmp_path / "test.ert").write_text("NUM_REL 10\n")

    rconfig = None
    with pytest.raises(ConfigValidationError, match=r"Parsing.*failed"):
        rconfig = ResConfig(user_config_file=str(tmp_path / "test.ert"))

    assert rconfig is None


def test_bad_config_provide_error_message(tmp_path):
    rconfig = None
    with pytest.raises(ConfigValidationError, match=r"Error loading configuration.*"):
        testDict = {"GEN_KW": "a"}
        rconfig = ResConfig(config=testDict)

    assert rconfig is None


@pytest.mark.usefixtures("use_tmpdir")
def test_res_config_parses_date():
    test_config_file_base = "test"
    test_config_file_name = f"{test_config_file_base}.ert"
    test_config_contents = dedent(
        """
        NUM_REALIZATIONS  1
        DEFINE <STORAGE> storage/<CONFIG_FILE_BASE>-<DATE>
        RUNPATH <STORAGE>/runpath/realization-%d/iter-%d
        ENSPATH <STORAGE>/ensemble
        """
    )
    with open(test_config_file_name, "w") as fh:
        fh.write(test_config_contents)
    res_config = ResConfig(user_config_file=test_config_file_name)

    date_string = date.today().isoformat()
    expected_storage = os.path.abspath(f"storage/{test_config_file_base}-{date_string}")
    expected_run_path = f"{expected_storage}/runpath/realization-%d/iter-%d"
    expected_ens_path = f"{expected_storage}/ensemble"
    assert res_config.model_config.getEnspath() == expected_ens_path
    assert res_config.model_config.getRunpathAsString() == expected_run_path


@pytest.mark.usefixtures("use_tmpdir")
@given(config_dicts())
def test_res_config_throws_on_missing_forward_model_job(config_dict):
    filename = "config.ert"
    config_dict.pop(ConfigKeys.INSTALL_JOB)
    config_dict.pop(ConfigKeys.INSTALL_JOB_DIRECTORY)
    config_dict[ConfigKeys.FORWARD_MODEL].append(
        {
            ConfigKeys.NAME: "this-is-not-the-job-you-are-looking-for",
            ConfigKeys.ARGLIST: "<WAVE-HAND>=casually",
        }
    )

    to_config_file(filename, config_dict)

    with pytest.raises(expected_exception=ValueError, match="Could not find job"):
        ResConfig(user_config_file=filename)
    with pytest.raises(expected_exception=ValueError, match="Could not find job"):
        ResConfig(config_dict=config_dict)
