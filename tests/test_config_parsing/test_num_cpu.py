import os

import pytest

from ert._c_wrappers.enkf import ConfigKeys, EnKFMain, ResConfig


@pytest.mark.usefixtures("use_tmpdir")
def test_default_num_cpu():
    with open("file.ert", "w") as f:
        f.write(f"{ConfigKeys.NUM_REALIZATIONS} 1")
    res_config = ResConfig(user_config_file="file.ert")
    enkf_main = EnKFMain(res_config)
    assert enkf_main.get_num_cpu() == 1


@pytest.mark.usefixtures("use_tmpdir")
def test_num_cpu_from_config_preferred():
    data_file = "dfile"
    config_num_cpu = 17
    data_file_num_cpu = 4
    with open(file=data_file, mode="w", encoding="utf-8") as data_file_hander:
        data_file_hander.write(
            f"""PARALLEL
 {data_file_num_cpu} DISTRIBUTED/
"""
        )
    config_dict = {
        ConfigKeys.NUM_REALIZATIONS: 1,
        ConfigKeys.NUM_CPU: config_num_cpu,
        ConfigKeys.DATA_FILE: os.path.join(os.getcwd(), data_file),
        ConfigKeys.ENSPATH: ".",
    }
    res_config = ResConfig(config_dict=config_dict)
    enkf_main: EnKFMain = EnKFMain(res_config)
    assert enkf_main.resConfig().num_cpu_from_config == config_num_cpu
    assert enkf_main.resConfig().num_cpu_from_data_file == data_file_num_cpu
    assert enkf_main.get_num_cpu() == config_num_cpu


@pytest.mark.usefixtures("use_tmpdir")
def test_num_cpu_from_data_file_used_if_config_num_cpu_not_set():
    data_file = "dfile"
    data_file_num_cpu = 4
    with open(file=data_file, mode="w", encoding="utf-8") as data_file_hander:
        data_file_hander.write(
            f"""
PARALLEL
 {data_file_num_cpu} DISTRIBUTED/
"""
        )
    config_dict = {
        ConfigKeys.NUM_REALIZATIONS: 1,
        ConfigKeys.DATA_FILE: data_file,
        ConfigKeys.ENSPATH: ".",
    }
    res_config = ResConfig(config_dict=config_dict)
    enkf_main: EnKFMain = EnKFMain(res_config)
    assert enkf_main.resConfig().num_cpu_from_config is None
    assert enkf_main.resConfig().num_cpu_from_data_file == data_file_num_cpu
    assert enkf_main.get_num_cpu() == data_file_num_cpu
