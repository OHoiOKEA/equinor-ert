import os
import stat
from dataclasses import dataclass
from pathlib import Path
from threading import BoundedSemaphore
from typing import Callable, List, TypedDict

import pytest

import ert.callbacks
from ert.config import QueueSystem
from ert.job_queue import Driver, JobQueue, JobQueueManager, JobQueueNode, JobStatus
from ert.load_status import LoadStatus


@dataclass
class RunArg:
    iens: int


class Config(TypedDict):
    job_script: str
    num_cpu: int
    job_name: str
    run_path: str
    ok_callback: Callable
    exit_callback: Callable


def dummy_ok_callback(runarg, path):
    (Path(path) / "OK").write_text("success", encoding="utf-8")
    return (LoadStatus.LOAD_SUCCESSFUL, "")


def dummy_exit_callback(self):
    Path("ERROR").write_text("failure", encoding="utf-8")


DUMMY_CONFIG: Config = {
    "job_script": "job_script.py",
    "num_cpu": 1,
    "job_name": "dummy_job_{}",
    "run_path": "dummy_path_{}",
    "ok_callback": dummy_ok_callback,
    "exit_callback": dummy_exit_callback,
}

SIMPLE_SCRIPT = """#!/bin/sh
echo "finished successfully" > STATUS
"""

# This script is susceptible to race conditions. Python works
# better than sh.
FAILING_SCRIPT = """#!/usr/bin/env python
import sys
with open("one_byte_pr_invocation", "a") as f:
    f.write(".")
sys.exit(1)
"""

MOCK_BSUB = """#!/bin/sh
echo "$@" > test.out
"""
"""A dummy bsub script that instead of submitting a job to an LSF cluster
writes the arguments it got to a file called test.out, mimicking what
an actual cluster node might have done."""


def create_local_queue(
    monkeypatch, executable_script: str, max_submit: int = 2, num_realizations: int = 10
):
    monkeypatch.setattr(
        ert.job_queue.job_queue_node, "forward_model_ok", DUMMY_CONFIG["ok_callback"]
    )
    monkeypatch.setattr(
        JobQueueNode, "run_exit_callback", DUMMY_CONFIG["exit_callback"]
    )

    driver = Driver(driver_type=QueueSystem.LOCAL)
    job_queue = JobQueue(driver, max_submit=max_submit)

    scriptpath = Path(DUMMY_CONFIG["job_script"])
    scriptpath.write_text(executable_script, encoding="utf-8")
    scriptpath.chmod(stat.S_IRWXU | stat.S_IRWXO | stat.S_IRWXG)

    for iens in range(num_realizations):
        Path(DUMMY_CONFIG["run_path"].format(iens)).mkdir()
        job = JobQueueNode(
            job_script=DUMMY_CONFIG["job_script"],
            job_name=DUMMY_CONFIG["job_name"].format(iens),
            run_path=os.path.realpath(DUMMY_CONFIG["run_path"].format(iens)),
            num_cpu=DUMMY_CONFIG["num_cpu"],
            status_file=job_queue.status_file,
            exit_file=job_queue.exit_file,
            run_arg=RunArg(iens),
            ensemble_config=Path(DUMMY_CONFIG["run_path"].format(iens)).resolve(),
        )
        job_queue.add_job(job, iens)
    return job_queue


def test_num_cpu_submitted_correctly_lsf(tmpdir, monkeypatch):
    """Assert that num_cpu from the ERT configuration is passed on to the bsub
    command used to submit jobs to LSF"""
    monkeypatch.setattr(
        ert.job_queue.job_queue_node, "forward_model_ok", DUMMY_CONFIG["ok_callback"]
    )
    monkeypatch.setattr(
        JobQueueNode, "run_exit_callback", DUMMY_CONFIG["exit_callback"]
    )
    monkeypatch.chdir(tmpdir)
    os.putenv("PATH", os.getcwd() + ":" + os.getenv("PATH"))
    driver = Driver(driver_type=QueueSystem.LSF)

    script = Path(DUMMY_CONFIG["job_script"])
    script.write_text(SIMPLE_SCRIPT, encoding="utf-8")
    script.chmod(stat.S_IRWXU)

    bsub = Path("bsub")
    bsub.write_text(MOCK_BSUB, encoding="utf-8")
    bsub.chmod(stat.S_IRWXU)

    job_id = 0
    num_cpus = 4
    os.mkdir(DUMMY_CONFIG["run_path"].format(job_id))

    job = JobQueueNode(
        job_script=DUMMY_CONFIG["job_script"],
        job_name=DUMMY_CONFIG["job_name"].format(job_id),
        run_path=os.path.realpath(DUMMY_CONFIG["run_path"].format(job_id)),
        num_cpu=4,
        status_file="STATUS",
        exit_file="ERROR",
        run_arg=RunArg(iens=job_id),
        ensemble_config=Path(DUMMY_CONFIG["run_path"].format(job_id)).resolve(),
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


def test_execute_queue(tmpdir, monkeypatch):
    monkeypatch.chdir(tmpdir)
    job_queue = create_local_queue(monkeypatch, SIMPLE_SCRIPT)
    manager = JobQueueManager(job_queue)
    manager.execute_queue()

    for job in job_queue.job_list:
        assert (Path(job.run_path) / "OK").read_text(encoding="utf-8") == "success"


@pytest.mark.parametrize("max_submit_num", [1, 2, 3])
def test_max_submit_reached(tmpdir, max_submit_num, monkeypatch):
    """Check that the JobQueueManager will submit exactly the maximum number of
    resubmissions in the case of scripts that fail."""
    monkeypatch.chdir(tmpdir)
    num_realizations = 2
    job_queue = create_local_queue(
        monkeypatch,
        FAILING_SCRIPT,
        max_submit=max_submit_num,
        num_realizations=num_realizations,
    )

    manager = JobQueueManager(job_queue)
    manager.execute_queue()

    assert (
        Path("one_byte_pr_invocation").stat().st_size
        == max_submit_num * num_realizations
    )

    assert manager.isRunning() is False

    for job in job_queue.job_list:
        # one for every realization
        assert job.status == JobStatus.FAILED
        assert job.submit_attempt == job_queue.max_submit


@pytest.mark.parametrize("max_submit_num", [1, 2, 3])
def test_kill_queue(tmpdir, max_submit_num, monkeypatch):
    monkeypatch.chdir(tmpdir)
    job_queue = create_local_queue(
        monkeypatch, SIMPLE_SCRIPT, max_submit=max_submit_num
    )
    manager = JobQueueManager(job_queue)
    job_queue.kill_all_jobs()
    manager.execute_queue()

    assert not Path("STATUS").exists()
    for job in job_queue.job_list:
        assert job.status == JobStatus.FAILED
