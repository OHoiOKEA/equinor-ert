import asyncio
import os
import stat
from argparse import ArgumentParser
from pathlib import Path
from textwrap import dedent
from threading import BoundedSemaphore
from typing import Any, Dict, List
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from ert.__main__ import ert_parser
from ert.cli import ENSEMBLE_EXPERIMENT_MODE
from ert.cli.main import run_cli
from ert.config import QueueConfig, QueueSystem
from ert.run_arg import RunArg
from ert.scheduler import Driver, QueueableRealization, RealizationState
from ert.storage import EnsembleAccessor

DUMMY_CONFIG: Dict[str, Any] = {
    "job_script": "job_script.py",
    "num_cpu": 1,
    "job_name": "dummy_job_{}",
    "run_path": "dummy_path_{}",
}
MOCK_BSUB = """#!/bin/sh
echo "$@" > test.out
"""
"""A dummy bsub script that instead of submitting a job to an LSF cluster
writes the arguments it got to a file called test.out, mimicking what
an actual cluster node might have done."""


@pytest.fixture
def mock_bjobs(tmp_path):
    script = "#!/usr/bin/env python3" + dedent(
        """
           import datetime
           import json
           import os.path
           import sys

           timestamp = str(datetime.datetime.now())

           # File written from the mocked bsub command which provides us with
           # the path to where the job actually runs and where we can find i.e
           # the job_id and status
           with open("job_paths", encoding="utf-8") as job_paths_file:
               job_paths = job_paths_file.read().splitlines()

           print("JOBID USER STAT QUEUE FROM_HOST EXEC_HOST JOB_NAME SUBMIT_TIME")
           for line in job_paths:
               if not os.path.isfile(line + "/lsf_info.json"):
                   continue

               # ERT has picked up the mocked response from mock_bsub and
               # written the id to file
               with open(line + "/lsf_info.json") as id_file:
                   _id = json.load(id_file)["job_id"]

               # Statuses LSF can give us
               # "PEND"
               # "SSUSP"
               # "PSUSP"
               # "USUSP"
               # "RUN"
               # "EXIT"
               # "ZOMBI" : does not seem to be available from the api.
               # "DONE"
               # "PDONE" : Post-processor is done.
               # "UNKWN"
               status = "RUN"
               if os.path.isfile(f"{line}/OK"):
                   status = "DONE"

               # Together with the headerline this is actually how LSF is
               # providing its statuses on the job and how we are picking these
               # up. In this mocked version i just check if the job is done
               # with the OK file and then print that status for the job_id
               # retrieved from the same runpath.
               print(
                   f"{_id} pytest {status} normal"
                   f" mock_host mock_exec_host poly_0 {timestamp}"
               )

           # Just to have a log for test purposes what is actually thrown
           # towards the bjobs command
           with open("bjobs_log", "a+", encoding="utf-8") as f:
               f.write(f"{str(sys.argv)}\\n")
           """
    )
    script_path = tmp_path / "mock_bjobs"
    with open(script_path, "w", encoding="utf-8") as fh:
        fh.write(script)

    os.chmod(script_path, 0o755)


def make_mock_bsub(script_path):
    script_path.write_text(
        "#!/usr/bin/env python3"
        + dedent(
            """
           import random
           import subprocess
           import sys

           job_dispatch_path = sys.argv[-2]
           run_path = sys.argv[-1]

           # Write a file with the runpaths to where the jobs are running and
           # writing information we later need when providing statuses for the
           # jobs through the mocked bjobs command
           with open("job_paths", "a+", encoding="utf-8") as jobs_file:
               jobs_file.write(f"{run_path}\\n")

           # Just a log for testpurposes showing what is thrown against the
           # bsub command
           with open("bsub_log", "a+", encoding="utf-8") as f:
               f.write(f"{str(sys.argv)}\\n")

           # Assigning a "unique" job id for each submitted job and print. This
           # is how LSF provide response to ERT with the ID of the job.
           _id = str(random.randint(0, 10000000))
           print(f"Job <{_id}> is submitted to default queue <normal>.")

           # Launch job-dispatch
           #subprocess.Popen([job_dispatch_path, run_path])
           """
        )
    )
    os.chmod(script_path, 0o755)


def make_failing_bsub(script_path, success_script):
    """
    Approx 3/10 of the submits will fail due to the random generator in the
    created mocked bsub script. By using the retry functionality towards
    queue-errors in job_queue.cpp we should still manage to finalize all our runs
    before exhausting the limits
    """
    script_path.write_text(
        "#!/usr/bin/env python3"
        + dedent(
            f"""
            import random
            import sys
            import subprocess

            num = random.random()
            if num > 0.7:
                exit(1)
            subprocess.call(["python", "{success_script}"] + sys.argv)
            """
        )
    )

    os.chmod(script_path, 0o755)


@pytest.fixture(params=["success", "fail"])
def mock_bsub(request, tmp_path):
    if request.param == "success":
        return make_mock_bsub(tmp_path / "mock_bsub")
    else:
        make_mock_bsub(tmp_path / "success_bsub")
        return make_failing_bsub(tmp_path / "mock_bsub", tmp_path / "success_bsub")


@pytest.fixture
def copy_lsf_poly_case(copy_poly_case, tmp_path):
    # Overwriting the "poly.ert" config file in tmpdir runpath
    # with our own customized config with at least sets queue option to LSF and
    # introducing the mocked jobs.

    config = [
        "JOBNAME poly_%d\n",
        "QUEUE_SYSTEM  LSF\n",
        "QUEUE_OPTION LSF MAX_RUNNING 10\n",
        f"QUEUE_OPTION LSF BJOBS_CMD {tmp_path}/mock_bjobs\n",
        f"QUEUE_OPTION LSF BSUB_CMD {tmp_path}/mock_bsub\n",
        "RUNPATH poly_out/realization-<IENS>/iter-<ITER>\n",
        "OBS_CONFIG observations\n",
        "NUM_REALIZATIONS 10\n",
        "MIN_REALIZATIONS 1\n",
        "GEN_KW COEFFS coeff_priors\n",
        "GEN_DATA POLY_RES RESULT_FILE:poly.out\n",
        "INSTALL_JOB poly_eval POLY_EVAL\n",
        "SIMULATION_JOB poly_eval\n",
    ]
    with open("poly.ert", "w", encoding="utf-8") as fh:
        fh.writelines(config)


@pytest.mark.skip(reason="Needs reimplementation")
@pytest.mark.usefixtures(
    "copy_lsf_poly_case",
    "mock_bsub",
    "mock_bjobs",
    "mock_start_server",
)
@pytest.mark.integration_test
def test_run_mocked_lsf_queue():
    run_cli(
        ert_parser(
            ArgumentParser(prog="test_main"),
            [
                ENSEMBLE_EXPERIMENT_MODE,
                "poly.ert",
            ],
        )
    )
    log = Path("bsub_log").read_text(encoding="utf-8")
    for i in range(10):
        assert f"'-J', 'poly_{i}'" in log


@pytest.mark.skip(reason="Needs reimplementation")
@pytest.mark.usefixtures("use_tmpdir", "mock_fm_ok")
def test_num_cpu_submitted_correctly_lsf(tmpdir, simple_script):
    """Assert that num_cpu from the ERT configuration is passed on to the bsub
    command used to submit jobs to LSF"""
    os.putenv("PATH", os.getcwd() + ":" + os.getenv("PATH"))
    driver = Driver(driver_type=QueueSystem.LSF)

    bsub = Path("bsub")
    bsub.write_text(MOCK_BSUB, encoding="utf-8")
    bsub.chmod(stat.S_IRWXU)

    job_id = 0
    num_cpus = 4
    os.mkdir(DUMMY_CONFIG["run_path"].format(job_id))

    job = QueueableRealization(
        job_script=simple_script,
        num_cpu=4,
        run_arg=RunArg(
            str(job_id),
            MagicMock(spec=EnsembleAccessor),
            0,
            0,
            os.path.realpath(DUMMY_CONFIG["run_path"].format(job_id)),
            DUMMY_CONFIG["job_name"].format(job_id),
        ),
    )

    pool_sema = BoundedSemaphore(value=2)
    job.run(driver, pool_sema)
    job.stop()
    job.wait_for()

    bsub_argv: List[str] = Path("test.out").read_text(encoding="utf-8").split()

    found_cpu_arg = False
    for arg_i, arg in enumerate(bsub_argv):
        if arg == "-n":
            # Check that the driver submitted the correct number
            # of cpus:
            assert bsub_argv[arg_i + 1] == str(num_cpus)
            found_cpu_arg = True

    assert found_cpu_arg is True


@pytest.mark.usefixtures(mock_bsub)
async def test_submit(tmpdir):
    os.chdir(tmpdir)
    print(tmpdir)
    config = QueueConfig.from_dict(
        {
            "QUEUE_SYSTEM": QueueSystem.LSF,
            "QUEUE_OPTION": [(QueueSystem.LSF, "BSUB_CMD", str(tmpdir) + "/mock_bsub")],
        }
    )

    class MockedQueue:
        _statechanges_to_publish = None
        driver = Driver.create_driver(config)

    runarg = RunArg(
        run_id=1, ensemble_storage=None, iens=1, itr=0, runpath=".", job_name="foo"
    )
    real0 = RealizationState(MockedQueue, QueueableRealization("script.sh", runarg))
    real0.activate()
    real0.submit()
    while not Path("bsub_log").exists():
        await asyncio.sleep(0.001)
    assert len(Path("bsub_log").read_text(encoding="utf-8").splitlines()) == 1
