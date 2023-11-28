import asyncio
import json
import os
import stat
import time
from pathlib import Path
from threading import BoundedSemaphore
from typing import Any, Callable, Dict, List, Optional
from unittest.mock import AsyncMock, MagicMock, patch

import pytest

import ert.callbacks
from ert.callbacks import forward_model_ok
from ert.config import QueueConfig, QueueSystem
from ert.load_status import LoadStatus
from ert.run_arg import RunArg
from ert.scheduler import Driver, QueueableRealization, RealizationState, Scheduler
from ert.storage import EnsembleAccessor

DUMMY_CONFIG: Dict[str, Any] = {
    "job_script": "job_script.py",
    "num_cpu": 1,
    "job_name": "dummy_job_{}",
    "run_path": "dummy_path_{}",
}


@pytest.fixture
def never_ending_script(tmp_path):
    NEVER_ENDING_SCRIPT = """#!/usr/bin/env python
import time
while True:
    time.sleep(0.5)
    """
    fout = Path(tmp_path / "never_ending_job_script")
    fout.write_text(NEVER_ENDING_SCRIPT, encoding="utf-8")
    fout.chmod(stat.S_IRWXU | stat.S_IRWXO | stat.S_IRWXG)
    yield str(fout)


def create_local_queue(
    executable_script: str,
    max_submit: int = 1,
    num_realizations: int = 10,
    max_runtime: Optional[int] = None,
    callback_timeout: Optional["Callable[[int], None]"] = None,
):
    scheduler = Scheduler(
        QueueConfig.from_dict(
            {"driver_type": QueueSystem.LOCAL, "MAX_SUBMIT": max_submit}
        )
    )

    for iens in range(num_realizations):
        Path(DUMMY_CONFIG["run_path"].format(iens)).mkdir(exist_ok=False)
        qreal = QueueableRealization(
            job_script=executable_script,
            num_cpu=DUMMY_CONFIG["num_cpu"],
            run_arg=RunArg(
                str(iens),
                MagicMock(spec=EnsembleAccessor),
                0,
                0,
                DUMMY_CONFIG["run_path"].format(iens),
                DUMMY_CONFIG["job_name"].format(iens),
            ),
            max_runtime=max_runtime,
            callback_timeout=callback_timeout,
        )
        scheduler._add_realization(qreal)
    return scheduler


@pytest.mark.asyncio
async def test_execute(tmpdir, monkeypatch, mock_fm_ok, simple_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(simple_script)
    await scheduler.execute()
    assert len(mock_fm_ok.mock_calls) == scheduler.queue_size


@pytest.mark.asyncio
@pytest.mark.timeout(20)
async def test_that_all_jobs_can_be_killed(tmpdir, monkeypatch, never_ending_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(never_ending_script)
    execute_task = asyncio.create_task(scheduler.execute())
    while (
        scheduler.count_realization_state(RealizationState.RUNNING)
        != scheduler.queue_size
    ):
        await asyncio.sleep(0.001)
    await scheduler.stop_jobs_async()
    while scheduler.count_realization_state(RealizationState.RUNNING) > 0:
        await asyncio.sleep(0.001)
    await asyncio.gather(execute_task)


@pytest.mark.asyncio
@pytest.mark.timeout(5)
async def test_all_realizations_are_failing(tmpdir, monkeypatch, failing_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(failing_script, max_submit=1)
    execute_task = asyncio.create_task(scheduler.execute())
    while (
        scheduler.count_realization_state(RealizationState.FAILED)
        != scheduler.queue_size
    ):
        await asyncio.sleep(0.001)
    await asyncio.gather(execute_task)


@pytest.mark.asyncio
@pytest.mark.timeout(5)
@pytest.mark.parametrize("max_submit_num", [1, 3])
async def test_max_submit(tmpdir, monkeypatch, failing_script, max_submit_num):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(
        failing_script, num_realizations=1, max_submit=max_submit_num
    )
    execute_task = asyncio.create_task(scheduler.execute())
    await asyncio.sleep(0.5)
    assert Path("dummy_path_0/one_byte_pr_invocation").stat().st_size == max_submit_num
    await scheduler.stop_jobs_async()
    await asyncio.gather(execute_task)


@pytest.mark.asyncio
@pytest.mark.parametrize("max_submit_num", [1, 3])
async def test_that_kill_queue_disregards_max_submit(
    tmpdir, max_submit_num, monkeypatch, simple_script
):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(simple_script, max_submit=max_submit_num)
    await scheduler.stop_jobs_async()
    execute_task = asyncio.create_task(scheduler.execute())
    await asyncio.gather(execute_task)
    print(tmpdir)
    for iens in range(scheduler.queue_size):
        assert not Path(f"dummy_path_{iens}/STATUS").exists()
    assert (
        scheduler.count_realization_state(RealizationState.IS_KILLED)
        == scheduler.queue_size
    )


@pytest.mark.asyncio
@pytest.mark.timeout(5)
async def test_submit_sleep(tmpdir, monkeypatch, never_ending_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(never_ending_script)
    scheduler._queue_config.submit_sleep = 0.2
    execute_task = asyncio.create_task(scheduler.execute())
    await asyncio.sleep(0.1)
    assert scheduler.count_realization_state(RealizationState.RUNNING) == 1
    await asyncio.sleep(0.3)
    assert scheduler.count_realization_state(RealizationState.RUNNING) == 2
    await scheduler.stop_jobs_async()
    await asyncio.gather(execute_task)


@pytest.mark.asyncio
@pytest.mark.timeout(5)
async def test_max_runtime(tmpdir, monkeypatch, never_ending_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(never_ending_script, max_runtime=1)
    execute_task = asyncio.create_task(scheduler.execute())
    await asyncio.sleep(3)  # Queue operates slowly..
    assert (
        scheduler.count_realization_state(RealizationState.IS_KILLED)
        == scheduler.queue_size
    )
    await asyncio.gather(execute_task)


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "loadstatus, expected_state",
    [
        (LoadStatus.TIME_MAP_FAILURE, RealizationState.FAILED),
        (LoadStatus.LOAD_SUCCESSFUL, RealizationState.SUCCESS),
        (LoadStatus.LOAD_FAILURE, RealizationState.FAILED),
    ],
)
async def test_run_done_callback(
    tmpdir, monkeypatch, simple_script, loadstatus, expected_state
):
    monkeypatch.chdir(tmpdir)
    monkeypatch.setattr(
        "ert.scheduler.scheduler.forward_model_ok",
        AsyncMock(return_value=(loadstatus, "foo")),
    )
    scheduler = create_local_queue(simple_script)
    execute_task = asyncio.create_task(scheduler.execute())
    await asyncio.gather(execute_task)
    assert scheduler.count_realization_state(expected_state) == scheduler.queue_size
    for realstate in scheduler._realizations:
        assert realstate._callback_status_msg == "foo"


def test_add_dispatch_info(tmpdir, monkeypatch, simple_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(simple_script)
    ens_id = "some_id"
    cert = "My very nice cert"
    token = "my_super_secret_token"
    dispatch_url = "wss://example.org"
    cert_file = ".ee.pem"
    runpaths = [Path(DUMMY_CONFIG["run_path"].format(iens)) for iens in range(10)]
    for runpath in runpaths:
        (runpath / "jobs.json").write_text(json.dumps({}), encoding="utf-8")
    scheduler.set_ee_info(
        ee_uri=dispatch_url,
        ens_id=ens_id,
        ee_cert=cert,
        ee_token=token,
        verify_context=False,
    )
    scheduler.add_dispatch_information_to_jobs_file(
        experiment_id="experiment_id",
    )

    for runpath in runpaths:
        job_file_path = runpath / "jobs.json"
        content: dict = json.loads(job_file_path.read_text(encoding="utf-8"))
        assert content["dispatch_url"] == dispatch_url
        assert content["ee_token"] == token
        assert content["experiment_id"] == "experiment_id"

        assert content["ee_cert_path"] == str(runpath / cert_file)
        assert (runpath / cert_file).read_text(encoding="utf-8") == cert


def test_add_dispatch_info_cert_none(tmpdir, monkeypatch, simple_script):
    monkeypatch.chdir(tmpdir)
    scheduler = create_local_queue(simple_script)
    ens_id = "some_id"
    dispatch_url = "wss://example.org"
    cert = None
    token = None
    cert_file = ".ee.pem"
    runpaths = [Path(DUMMY_CONFIG["run_path"].format(iens)) for iens in range(10)]
    for runpath in runpaths:
        (runpath / "jobs.json").write_text(json.dumps({}), encoding="utf-8")
    scheduler.set_ee_info(
        ee_uri=dispatch_url, ens_id=ens_id, ee_cert=cert, ee_token=token
    )
    scheduler.add_dispatch_information_to_jobs_file()

    for runpath in runpaths:
        job_file_path = runpath / "jobs.json"
        content: dict = json.loads(job_file_path.read_text(encoding="utf-8"))
        assert content["dispatch_url"] == dispatch_url
        assert content["ee_token"] == token
        assert content["experiment_id"] is None

        assert content["ee_cert_path"] is None
        assert not (runpath / cert_file).exists()


@pytest.mark.skip(reason="Needs reimplementation")
def test_stop_long_running():
    """
    This test should verify that only the jobs that have a runtime
    25% longer than the average completed are stopped when
    stop_long_running_jobs is called.
    """
    MockedJob = None  # silencing ruff
    JobStatus = None  # silencing ruff
    job_list = [MockedJob(JobStatus.WAITING) for _ in range(10)]

    for i in range(5):
        job_list[i].queue_status = JobStatus.DONE
        job_list[i]._start_time = 0
        job_list[i]._end_time = 10

    for i in range(5, 8):
        job_list[i].queue_status = JobStatus.RUNNING
        job_list[i]._start_time = 0
        job_list[i]._end_time = 20

    for i in range(8, 10):
        job_list[i].queue_status = JobStatus.RUNNING
        job_list[i]._start_time = 0
        job_list[i]._end_time = 5

    queue = Scheduler(QueueConfig.from_dict({"driver_type": QueueSystem.LOCAL}))

    with patch("ert.scheduler.Scheduler._add_job") as _add_job:
        for idx, job in enumerate(job_list):
            _add_job.return_value = idx
            queue.add_job(job, idx)

    queue.stop_long_running_jobs(5)
    queue._differ.transition(queue.job_list)

    for i in range(5):
        assert job_list[i].queue_status == JobStatus.DONE
        assert queue.snapshot()[i] == str(JobStatus.DONE)

    for i in range(5, 8):
        assert job_list[i].queue_status == JobStatus.FAILED
        assert queue.snapshot()[i] == str(JobStatus.FAILED)

    for i in range(8, 10):
        assert job_list[i].queue_status == JobStatus.RUNNING
        assert queue.snapshot()[i] == str(JobStatus.RUNNING)
