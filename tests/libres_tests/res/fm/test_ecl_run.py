#  Copyright (C) 2018  Equinor ASA, Norway.
#
#  The file 'test_ecl.py' is part of ERT - Ensemble based Reservoir Tool.
#
#  ERT is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#
#  ERT is distributed in the hope that it will be useful, but WITHOUT ANY
#  WARRANTY; without even the implied warranty of MERCHANTABILITY or
#  FITNESS FOR A PARTICULAR PURPOSE.
#
#  See the GNU General Public License at <http://www.gnu.org/licenses/gpl.html>
#  for more details.
import os
import re
import shutil
import stat
from distutils.spawn import find_executable
from subprocess import PIPE, Popen

import pytest
import yaml
from ecl.summary import EclSum

from ert._c_wrappers.fm.ecl import Ecl100Config, EclRun, FlowConfig, ecl_run, run
from ert._c_wrappers.fm.ecl.ecl_run import make_SLURM_machine_list


def flow_install():
    try:
        Popen(["flow"])
        return True
    except OSError:
        pass
    return False


flow_installed = pytest.mark.skipif(not flow_install(), reason="Requires flow")


def find_version(output):
    return re.search(r"flow\s*([\d.]+)", output).group(1)


@pytest.fixture()
def init_ecl100_config(monkeypatch, tmpdir):
    ecl14_prefix = "/prog/ecl/grid/2014.2/bin/linux_x86_64/"
    ecl19_prefix = "/prog/res/ecl/grid/2019.3/bin/linux_x86_64/"
    mpi_prefix = "/prog/ecl/grid/tools/linux_x86_64/intel/mpi/5.0.2.044/"
    conf = {
        "env": {
            "F_UFMTENDIAN": "big",
            "LM_LICENSE_FILE": "7321@eclipse-lic-no.statoil.no",
            "ARCH": "x86_64",
        },
        "versions": {
            "2014.2": {
                "scalar": {"executable": ecl14_prefix + "eclipse.exe"},
                "mpi": {
                    "executable": ecl14_prefix + "eclipse_ilmpi.exe",
                    "mpirun": mpi_prefix + "bin64/mpirun",
                    "env": {
                        "I_MPI_ROOT": mpi_prefix,
                        "P4_RSHCOMMAND": "ssh",
                        "LD_LIBRARY_PATH": mpi_prefix + "lib64:$LD_LIBRARY_PATH",
                        "PATH": mpi_prefix + "bin64:$PATH",
                    },
                },
            },
            "2019.3": {
                "scalar": {"executable": ecl19_prefix + "eclipse.exe"},
                "mpi": {
                    "executable": ecl19_prefix + "eclipse_ilmpi.exe",
                    "mpirun": mpi_prefix + "bin64/mpirun",
                    "env": {
                        "I_MPI_ROOT": mpi_prefix,
                        "P4_RSHCOMMAND": "ssh",
                        "LD_LIBRARY_PATH": mpi_prefix + "lib64:$LD_LIBRARY_PATH",
                        "PATH": mpi_prefix + "bin64:$PATH",
                    },
                },
            },
        },
    }
    with tmpdir.as_cwd():
        with open("ecl100_config.yml", "w") as f:
            f.write(yaml.dump(conf))
        monkeypatch.setenv("ECL100_SITE_CONFIG", "ecl100_config.yml")
        yield


@pytest.fixture
def init_flow_config(monkeypatch, tmpdir):
    version = "2018.10"

    p = Popen(["flow", "--version"], stdin=PIPE, stdout=PIPE, stderr=PIPE)
    output, err = p.communicate()
    rc = p.returncode
    if rc == 0:
        version = find_version(output)
    path_to_exe = find_executable("flow")

    conf = {
        "default_version": version,
        "versions": {
            version: {
                "scalar": {"executable": path_to_exe},
            }
        },
    }
    with tmpdir.as_cwd():
        with open("flow_config.yml", "w") as f:
            f.write(yaml.dump(conf))
        monkeypatch.setenv("FLOW_SITE_CONFIG", "flow_config.yml")
        yield


def test_make_LSB_MCPU_machine_list():
    assert ecl_run.make_LSB_MCPU_machine_list("host1 4 host2 4") == [
        "host1",
        "host1",
        "host1",
        "host1",
        "host2",
        "host2",
        "host2",
        "host2",
    ]


@pytest.mark.usefixtures("use_tmpdir")
def test_create(monkeypatch):
    # This test can make do with a mock simulator; - just something executable

    conf = {
        "versions": {
            "2014.2": {
                "scalar": {"executable": "bin/scalar_exe"},
                "mpi": {"executable": "bin/mpi_exe", "mpirun": "bin/mpirun"},
            }
        }
    }
    with open("ecl100_config.yml", "w") as f:
        f.write(yaml.dump(conf))

    os.mkdir("bin")
    monkeypatch.setenv("ECL100_SITE_CONFIG", "ecl100_config.yml")
    for f in ["scalar_exe", "mpi_exe", "mpirun"]:
        fname = os.path.join("bin", f)
        with open(fname, "w") as fh:
            fh.write("This is an exectable ...")

        os.chmod(fname, stat.S_IEXEC)

    with open("ECLIPSE.DATA", "w") as f:
        f.write("Mock eclipse data file")

    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2014.2")
    mpi_sim = ecl_config.mpi_sim("2014.2")
    ecl_run = EclRun("ECLIPSE.DATA", sim)
    assert ecl_run.runPath() == os.getcwd()

    os.mkdir("path")
    with open("path/ECLIPSE.DATA", "w") as f:
        f.write("Mock eclipse data file")

    ecl_run = EclRun("path/ECLIPSE.DATA", sim)
    assert ecl_run.runPath() == os.path.join(os.getcwd(), "path")
    assert ecl_run.baseName() == "ECLIPSE"
    assert ecl_run.numCpu() == 1

    # invalid number of CPU
    with pytest.raises(ValueError):
        EclRun("path/ECLIPSE.DATA", sim, num_cpu="xxx")

    ecl_run = EclRun("path/ECLIPSE.DATA", mpi_sim, num_cpu="10")
    assert ecl_run.numCpu() == 10

    # Missing datafile
    with pytest.raises(IOError):
        EclRun("DOES/NOT/EXIST", mpi_sim, num_cpu="10")


@pytest.mark.xfail(reason="Finding a version on Komodo of flow that is not OPM-flow")
@flow_installed
def test_flow(init_flow_config, source_root):
    shutil.copy(source_root / "test-data/local/eclipse/SPE1.DATA", "SPE1.DATA")
    shutil.copy(source_root / "local/eclipse/SPE1_ERROR.DATA", "SPE1_ERROR.DATA")
    flow_config = FlowConfig()
    sim = flow_config.sim()
    flow_run = EclRun("SPE1.DATA", sim)
    flow_run.runEclipse()

    run(flow_config, ["SPE1.DATA"])

    flow_run = EclRun("SPE1_ERROR.DATA", sim)
    with pytest.raises(Exception):
        flow_run.runEclipse()

    run(flow_config, ["SPE1_ERROR.DATA", "--ignore-errors"])

    # Invalid version
    with pytest.raises(Exception):
        run(flow_config, ["SPE1.DATA", "--version=no/such/version"])


@pytest.mark.usefixtures("use_tmpdir")
def test_running_flow_given_env_config_can_still_read_parent_env(monkeypatch):
    version = "1111.11"

    # create a script that prints env vars ENV1 and ENV2 to a file
    with open("flow", "w") as f:
        f.write("#!/bin/bash\n")
        f.write("echo $ENV1 > out.txt\n")
        f.write("echo $ENV2 >> out.txt\n")
    executable = os.path.join(os.getcwd(), "flow")
    os.chmod(executable, 0o777)

    # create a flow_config.yml with environment extension ENV2
    conf = {
        "default_version": version,
        "versions": {
            version: {
                "scalar": {"executable": executable, "env": {"ENV2": "VAL2"}},
            }
        },
    }

    with open("flow_config.yml", "w") as f:
        f.write(yaml.dump(conf))

    # set the environment variable ENV1
    monkeypatch.setenv("ENV1", "VAL1")
    monkeypatch.setenv("FLOW_SITE_CONFIG", "flow_config.yml")

    with open("DUMMY.DATA", "w") as f:
        f.write("dummy")

    with open("DUMMY.PRT", "w") as f:
        f.write("Errors 0\n")
        f.write("Bugs 0\n")

    # run the script
    flow_config = FlowConfig()
    sim = flow_config.sim()
    flow_run = EclRun("DUMMY.DATA", sim)
    flow_run.runEclipse()

    # assert that the script was able to read both the variables correctly
    with open("out.txt") as f:
        lines = f.readlines()

    assert lines == ["VAL1\n", "VAL2\n"]


@pytest.mark.usefixtures("use_tmpdir")
def test_running_flow_given_no_env_config_can_still_read_parent_env(monkeypatch):
    version = "1111.11"

    # create a script that prints env vars ENV1 and ENV2 to a file
    with open("flow", "w") as f:
        f.write("#!/bin/bash\n")
        f.write("echo $ENV1 > out.txt\n")
        f.write("echo $ENV2 >> out.txt\n")
    executable = os.path.join(os.getcwd(), "flow")
    os.chmod(executable, 0o777)

    # create a flow_config.yml with environment extension ENV2
    conf = {
        "default_version": version,
        "versions": {
            version: {
                "scalar": {"executable": executable},
            }
        },
    }

    with open("flow_config.yml", "w") as f:
        f.write(yaml.dump(conf))

    # set the environment variable ENV1
    monkeypatch.setenv("ENV1", "VAL1")
    monkeypatch.setenv("ENV2", "VAL2")
    monkeypatch.setenv("FLOW_SITE_CONFIG", "flow_config.yml")

    with open("DUMMY.DATA", "w") as f:
        f.write("dummy")

    with open("DUMMY.PRT", "w") as f:
        f.write("Errors 0\n")
        f.write("Bugs 0\n")

    # run the script
    flow_config = FlowConfig()
    sim = flow_config.sim()
    flow_run = EclRun("DUMMY.DATA", sim)
    flow_run.runEclipse()

    # assert that the script was able to read both the variables correctly
    with open("out.txt") as f:
        lines = f.readlines()

    assert lines == ["VAL1\n", "VAL2\n"]


@pytest.mark.usefixtures("use_tmpdir")
def test_running_flow_given_env_variables_with_same_name_as_parent_env_variables_will_overwrite(  # noqa
    monkeypatch,
):
    version = "1111.11"

    # create a script that prints env vars ENV1 and ENV2 to a file
    with open("flow", "w") as f:
        f.write("#!/bin/bash\n")
        f.write("echo $ENV1 > out.txt\n")
        f.write("echo $ENV2 >> out.txt\n")
    executable = os.path.join(os.getcwd(), "flow")
    os.chmod(executable, 0o777)

    # create a flow_config.yml with environment extension ENV2
    conf = {
        "default_version": version,
        "versions": {
            version: {
                "scalar": {
                    "executable": executable,
                    "env": {"ENV1": "OVERWRITTEN1", "ENV2": "OVERWRITTEN2"},
                },
            }
        },
    }

    with open("flow_config.yml", "w") as f:
        f.write(yaml.dump(conf))

    # set the environment variable ENV1
    monkeypatch.setenv("ENV1", "VAL1")
    monkeypatch.setenv("ENV2", "VAL2")
    monkeypatch.setenv("FLOW_SITE_CONFIG", "flow_config.yml")

    with open("DUMMY.DATA", "w") as f:
        f.write("dummy")

    with open("DUMMY.PRT", "w") as f:
        f.write("Errors 0\n")
        f.write("Bugs 0\n")

    # run the script
    flow_config = FlowConfig()
    sim = flow_config.sim()
    flow_run = EclRun("DUMMY.DATA", sim)
    flow_run.runEclipse()

    # assert that the script was able to read both the variables correctly
    with open("out.txt") as f:
        lines = f.readlines()

    assert lines == ["OVERWRITTEN1\n", "OVERWRITTEN2\n"]


@pytest.mark.requires_eclipse
def test_run(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1.DATA",
        "SPE1.DATA",
    )
    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2014.2")
    ecl_run = EclRun("SPE1.DATA", sim)
    ecl_run.runEclipse()

    ok_path = os.path.join(ecl_run.runPath(), f"{ecl_run.baseName()}.OK")
    log_path = os.path.join(ecl_run.runPath(), f"{ecl_run.baseName()}.LOG")

    assert os.path.isfile(ok_path)
    assert os.path.isfile(log_path)
    assert os.path.getsize(log_path) > 0

    assert not ecl_run.parseErrors()

    # Monkey patching the ecl_run to use an executable which
    # will fail with exit(1); don't think Eclipse actually
    # fails with exit(1) - but let us at least be prepared
    # when/if it does.
    ecl_run.sim.executable = source_root / "tests/libres_tests/res/fm/ecl_run_fail"

    with pytest.raises(Exception):
        ecl_run.runEclipse()


@pytest.mark.requires_eclipse
def test_run_new_log_file(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1.DATA",
        "SPE1.DATA",
    )
    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2019.3")
    ecl_run = EclRun("SPE1.DATA", sim)
    ecl_run.runEclipse()

    ok_path = os.path.join(ecl_run.runPath(), f"{ecl_run.baseName()}.OK")
    log_path = os.path.join(ecl_run.runPath(), f"{ecl_run.baseName()}.OUT")

    assert os.path.isfile(ok_path)
    assert os.path.isfile(log_path)
    assert os.path.getsize(log_path) > 0

    assert not ecl_run.parseErrors()

    # Monkey patching the ecl_run to use an executable which
    # will fail with exit(1); don't think Eclipse actually
    # fails with exit(1) - but let us at least be prepared
    # when/if it does.
    ecl_run.sim.executable = source_root / "tests/libres_tests/res/fm/ecl_run_fail"
    with pytest.raises(Exception):
        ecl_run.runEclipse()


@pytest.mark.requires_eclipse
def test_run_api(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1.DATA",
        "SPE1.DATA",
    )
    ecl_config = Ecl100Config()
    run(ecl_config, ["SPE1.DATA", "--version=2014.2"])

    assert os.path.isfile("SPE1.DATA")


@pytest.mark.requires_eclipse
def test_failed_run(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1_ERROR.DATA",
        "SPE1_ERROR.DATA",
    )
    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2014.2")
    ecl_run = EclRun("SPE1_ERROR", sim)
    with pytest.raises(Exception, match="ERROR"):
        ecl_run.runEclipse()


@pytest.mark.requires_eclipse
def test_failed_run_OK(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1_ERROR.DATA",
        "SPE1_ERROR.DATA",
    )
    ecl_config = Ecl100Config()
    run(ecl_config, ["SPE1_ERROR", "--version=2014.2", "--ignore-errors"])

    # Monkey patching the ecl_run to use an executable which will fail with exit(1),
    # in the nocheck mode that should also be OK.
    sim = ecl_config.sim("2014.2")
    ecl_run = EclRun("SPE1_ERROR", sim, check_status=False)
    ecl_run.sim.executable = source_root / "tests/libres_tests/res/fm/ecl_run_fail"
    ecl_run.runEclipse()


@pytest.mark.requires_eclipse
def test_mpi_run(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1_PARALLELL.DATA",
        "SPE1_PARALLELL.DATA",
    )
    ecl_config = Ecl100Config()
    run(ecl_config, ["SPE1_PARALLELL.DATA", "--version=2014.2", "--num-cpu=2"])
    assert os.path.isfile("SPE1_PARALLELL.LOG")
    assert os.path.getsize("SPE1_PARALLELL.LOG") > 0


@pytest.mark.requires_eclipse
def test_summary_block(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1.DATA",
        "SPE1.DATA",
    )
    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2014.2")
    ecl_run = EclRun("SPE1.DATA", sim)
    ret_value = ecl_run.summary_block()
    assert ret_value is None

    ecl_run.runEclipse()
    assert isinstance(ecl_run.summary_block(), EclSum)


@pytest.mark.requires_eclipse
def test_error_parse(init_ecl100_config, source_root):
    shutil.copy(
        source_root / "test-data/local/eclipse/SPE1.DATA",
        "SPE1.DATA",
    )
    prt_file = source_root / "test-data/local/eclipse/parse/ERROR.PRT"
    shutil.copy(prt_file, "SPE1.PRT")

    ecl_config = Ecl100Config()
    sim = ecl_config.sim("2014.2")
    ecl_run = EclRun("SPE1.DATA", sim)

    # NB: The ugly white space in the error0 literal is actually part of
    #     the string we are matching; i.e. it must be retained.
    error0 = """ @--  ERROR  AT TIME        0.0   DAYS    ( 1-JAN-0):
 @           UNABLE TO OPEN INCLUDED FILE                                    
 @           /private/joaho/ERT/git/Gurbat/XXexample_grid_sim.GRDECL         
 @           SYSTEM ERROR CODE IS       29                                   """  # noqa

    error1 = """ @--  ERROR  AT TIME        0.0   DAYS    ( 1-JAN-0):
 @           INCLUDE FILES MISSING.                                          """  # noqa

    assert ecl_run.parseErrors() == [error0, error1]


def test_slurm_env_parsing():
    host_list = make_SLURM_machine_list("ws", "2")
    assert host_list == ["ws", "ws"]

    host_list = make_SLURM_machine_list("ws1,ws2", "2,3")
    assert host_list == ["ws1", "ws1", "ws2", "ws2", "ws2"]

    host_list = make_SLURM_machine_list("ws[1-3]", "1,2,3")
    assert host_list == ["ws1", "ws2", "ws2", "ws3", "ws3", "ws3"]

    host_list = make_SLURM_machine_list("ws[1,3]", "1,3")
    assert host_list == ["ws1", "ws3", "ws3", "ws3"]

    host_list = make_SLURM_machine_list("ws[1-3,6-8]", "1,2,3,1,2,3")
    assert host_list == [
        "ws1",
        "ws2",
        "ws2",
        "ws3",
        "ws3",
        "ws3",
        "ws6",
        "ws7",
        "ws7",
        "ws8",
        "ws8",
        "ws8",
    ]

    host_list = make_SLURM_machine_list("ws[1-3,6-8]", "2(x2),3,1,2(x2)")
    assert host_list == [
        "ws1",
        "ws1",
        "ws2",
        "ws2",
        "ws3",
        "ws3",
        "ws3",
        "ws6",
        "ws7",
        "ws7",
        "ws8",
        "ws8",
    ]

    host_list = make_SLURM_machine_list("ws[1-3,6],ws[7-8]", "2(x2),3,1,2(x2)")
    assert host_list == [
        "ws1",
        "ws1",
        "ws2",
        "ws2",
        "ws3",
        "ws3",
        "ws3",
        "ws6",
        "ws7",
        "ws7",
        "ws8",
        "ws8",
    ]
