import asyncio
import os
import signal
import sys
from typing import Set

import pytest

from ert.cli import ENSEMBLE_EXPERIMENT_MODE
from ert.cli.main import ErtCliError
from ert.scheduler.event import FinishedEvent, StartedEvent
from ert.scheduler.openpbs_driver import Driver, OpenPBSDriver
from tests.integration_tests.run_cli import run_cli


@pytest.fixture(autouse=True)
def mock_torque(pytestconfig, monkeypatch, tmp_path):
    if pytestconfig.getoption("torque"):
        # User provided --torque, which means we should use the actual TORQUE
        # cluster without mocking anything.
        return

    bin_path = os.path.join(os.path.dirname(__file__), "bin")

    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    monkeypatch.setenv("PYTEST_TMP_PATH", str(tmp_path))
    monkeypatch.setenv("PYTHON", sys.executable)


async def poll(driver: Driver, expected: Set[int], *, started=None, finished=None):
    poll_task = asyncio.create_task(driver.poll())
    completed = set()
    try:
        while True:
            event = await driver.event_queue.get()
            if isinstance(event, StartedEvent):
                if started:
                    await started(event.iens)

            elif isinstance(event, FinishedEvent):
                if finished is not None:
                    await finished(event.iens, event.returncode, event.aborted)

                completed.add(event.iens)
                if completed == expected:
                    break
    finally:
        poll_task.cancel()


@pytest.mark.integration_test
async def test_submit(tmp_path):
    driver = OpenPBSDriver()
    await driver.submit(0, f"echo test > {tmp_path}/test")
    await poll(driver, {0})

    assert (tmp_path / "test").read_text() == "test\n"


@pytest.mark.integration_test
async def test_returncode():
    driver = OpenPBSDriver()
    finished_called = False

    async def finished(iens, returncode, aborted):
        assert iens == 0
        assert returncode == 42
        assert aborted is False

        nonlocal finished_called
        finished_called = True

    await driver.submit(0, "exit 42")
    await poll(driver, {0}, finished=finished)
    assert finished_called


@pytest.mark.integration_test
async def test_kill():
    driver = OpenPBSDriver()
    aborted_called = False

    async def started(iens):
        nonlocal driver
        await driver.kill(iens)

    async def finished(iens, returncode, aborted):
        assert iens == 0
        assert returncode == 256 + signal.SIGTERM
        assert aborted is True

        nonlocal aborted_called
        aborted_called = True

    await driver.submit(0, "sleep 60; exit 2")
    await poll(driver, {0}, started=started, finished=finished)
    assert aborted_called


@pytest.mark.timeout(180)
@pytest.mark.integration_test
@pytest.mark.usefixtures("copy_poly_case")
def test_openpbs_driver_with_poly_example():
    with open("poly.ert", mode="a+", encoding="utf-8") as f:
        f.write("QUEUE_SYSTEM TORQUE\nNUM_REALIZATIONS 2")
    run_cli(
        ENSEMBLE_EXPERIMENT_MODE,
        "--enable-scheduler",
        "poly.ert",
    )


@pytest.mark.timeout(180)
@pytest.mark.integration_test
@pytest.mark.usefixtures("copy_poly_case")
def test_openpbs_driver_with_poly_example_failing_submit_fails_ert_and_propagates_exception_to_user(
    monkeypatch, caplog
):
    monkeypatch.setattr(OpenPBSDriver, "submit", lambda *args, **kwargs: 1 / 0)
    with open("poly.ert", mode="a+", encoding="utf-8") as f:
        f.write("QUEUE_SYSTEM TORQUE\nNUM_REALIZATIONS 2")
    with pytest.raises(ErtCliError):
        run_cli(
            ENSEMBLE_EXPERIMENT_MODE,
            "--enable-scheduler",
            "poly.ert",
        )
    assert "ZeroDivisionError" in caplog.text


@pytest.mark.timeout(60)
@pytest.mark.integration_test
@pytest.mark.usefixtures("copy_poly_case")
def test_openpbs_driver_with_poly_example_failing_poll_fails_ert_and_propagates_exception_to_user(
    monkeypatch, caplog
):
    async def mock_poll(*args, **kwargs):
        import random

        await asyncio.sleep(0.5)
        while True:
            if random.random() > 0.9:
                raise ZeroDivisionError("Somewhere in galaxy far away")
            await asyncio.sleep(0.1)

    monkeypatch.setattr(OpenPBSDriver, "poll", mock_poll)
    with open("poly.ert", mode="a+", encoding="utf-8") as f:
        f.write("QUEUE_SYSTEM TORQUE\nNUM_REALIZATIONS 2")
    with pytest.raises(ErtCliError):
        run_cli(
            ENSEMBLE_EXPERIMENT_MODE,
            "--enable-scheduler",
            "poly.ert",
        )
    assert "ZeroDivisionError" in caplog.text
