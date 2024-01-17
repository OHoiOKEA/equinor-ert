import asyncio
import contextlib
import os
from contextlib import asynccontextmanager
from typing import Any, Callable, Coroutine
from unittest.mock import MagicMock, patch

import pytest
from websockets.exceptions import ConnectionClosed

from _ert.async_utils import new_event_loop
from ert.config import QueueConfig
from ert.ensemble_evaluator import (
    EnsembleEvaluator,
    EnsembleEvaluatorAsync,
    Monitor,
    identifiers,
    state,
)
from ert.ensemble_evaluator.config import EvaluatorServerConfig
from ert.job_queue.queue import JobQueue
from ert.scheduler import Scheduler
from ert.shared.feature_toggling import FeatureScheduler


def run_monitor_in_loop(monitor_func: Callable[[], Coroutine[Any, Any, None]]) -> bool:
    loop = new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(monitor_func())
    finally:
        loop.close()


@pytest.fixture
def evaluator_to_use(using_scheduler):
    @asynccontextmanager
    async def run_evaluator(ensemble, ee_config):
        if not using_scheduler:
            evaluator = EnsembleEvaluator(ensemble, ee_config, 0)
            evaluator.start_running()
            try:
                yield evaluator
            finally:
                evaluator.stop()

        else:
            ee_async = EnsembleEvaluatorAsync(ensemble, ee_config, 0)
            run_task = asyncio.create_task(
                ee_async.run_and_get_successful_realizations()
            )
            await ee_async._server_started.wait()
            try:
                yield ee_async
            finally:
                await ee_async._stop()
                await run_task

    return run_evaluator


@pytest.mark.timeout(60)
@pytest.mark.asyncio
async def test_run_legacy_ensemble(
    tmpdir, make_ensemble_builder, monkeypatch, evaluator_to_use
):
    num_reals = 2
    custom_port_range = range(1024, 65535)
    with tmpdir.as_cwd():
        ensemble = make_ensemble_builder(monkeypatch, tmpdir, num_reals, 2).build()
        config = EvaluatorServerConfig(
            custom_port_range=custom_port_range,
            custom_host="127.0.0.1",
            use_token=False,
            generate_cert=False,
        )
        async with evaluator_to_use(ensemble, config) as evaluator:
            async with Monitor(config) as monitor:
                async for e in monitor.track():
                    if e["type"] in (
                        identifiers.EVTYPE_EE_SNAPSHOT_UPDATE,
                        identifiers.EVTYPE_EE_SNAPSHOT,
                    ) and e.data.get(identifiers.STATUS) in [
                        state.ENSEMBLE_STATE_FAILED,
                        state.ENSEMBLE_STATE_STOPPED,
                    ]:
                        await monitor.signal_done()

            assert evaluator._ensemble.status == state.ENSEMBLE_STATE_STOPPED
            assert len(evaluator._ensemble.get_successful_realizations()) == num_reals

        # realisations should finish, each creating a status-file
        for i in range(num_reals):
            assert os.path.isfile(f"real_{i}/status.txt")


@pytest.mark.timeout(60)
async def test_run_and_cancel_legacy_ensemble(
    tmpdir, make_ensemble_builder, monkeypatch, evaluator_to_use
):
    num_reals = 2
    custom_port_range = range(1024, 65535)
    with tmpdir.as_cwd():
        ensemble = make_ensemble_builder(
            monkeypatch, tmpdir, num_reals, 2, job_sleep=40
        ).build()
        config = EvaluatorServerConfig(
            custom_port_range=custom_port_range,
            custom_host="127.0.0.1",
            use_token=False,
            generate_cert=False,
        )

        terminated_event = False

        async with evaluator_to_use(ensemble, config) as evaluator:
            async with Monitor(config) as monitor:
                # on lesser hardware the realizations might be killed by max_runtime
                # and the ensemble is set to STOPPED
                monitor._receiver_timeout = 10.0
                cancel = True
                with contextlib.suppress(
                    ConnectionClosed
                ):  # monitor throws some variant of CC if dispatcher dies
                    async for event in monitor.track(heartbeat_interval=0.1):
                        # Cancel the ensemble upon the arrival of the first event
                        if cancel:
                            await monitor.signal_cancel()
                            cancel = False
                        if event["type"] == identifiers.EVTYPE_EE_TERMINATED:
                            terminated_event = True

        if terminated_event:
            assert evaluator._ensemble.status == state.ENSEMBLE_STATE_CANCELLED
        else:
            assert evaluator._ensemble.status == state.ENSEMBLE_STATE_STOPPED

        # realisations should not finish, thus not creating a status-file
        for i in range(num_reals):
            assert not os.path.isfile(f"real_{i}/status.txt")


@pytest.mark.timeout(10)
def test_run_legacy_ensemble_with_bare_exception(
    tmpdir,
    make_ensemble_builder,
    monkeypatch,
):
    """This test function is not ported to Scheduler, as it will not
    catch general exceptions."""
    monkeypatch.setattr(FeatureScheduler, "_value", False)
    num_reals = 2
    custom_port_range = range(1024, 65535)
    with tmpdir.as_cwd():
        ensemble = make_ensemble_builder(monkeypatch, tmpdir, num_reals, 2).build()
        config = EvaluatorServerConfig(
            custom_port_range=custom_port_range,
            custom_host="127.0.0.1",
            use_token=False,
            generate_cert=False,
        )
        evaluator = EnsembleEvaluator(ensemble, config, 0)

        with patch.object(JobQueue, "add_realization") as faulty_queue:
            faulty_queue.side_effect = RuntimeError()
            evaluator.start_running()

            async def _run_monitor():
                async with Monitor(config) as monitor:
                    async for e in monitor.track():
                        if e.data is not None and e.data.get(identifiers.STATUS) in [
                            state.ENSEMBLE_STATE_FAILED,
                            state.ENSEMBLE_STATE_STOPPED,
                        ]:
                            await monitor.signal_done()
                return True

            run_monitor_in_loop(_run_monitor)
            assert evaluator._ensemble.status == state.ENSEMBLE_STATE_FAILED

        # realisations should not finish, thus not creating a status-file
        for i in range(num_reals):
            assert not os.path.isfile(f"real_{i}/status.txt")


async def test_queue_config_properties_propagated_to_scheduler(
    tmpdir, make_ensemble_builder, monkeypatch
):
    num_reals = 1
    monkeypatch.setattr(FeatureScheduler, "_value", True)
    mocked_scheduler = MagicMock()
    mocked_scheduler.__class__ = Scheduler
    monkeypatch.setattr(Scheduler, "__init__", mocked_scheduler)
    ensemble = make_ensemble_builder(monkeypatch, tmpdir, num_reals, 2).build()
    ensemble._config = MagicMock()
    ensemble._job_queue = mocked_scheduler

    # The properties we want to propagate from QueueConfig to the Scheduler object:
    ensemble._queue_config.submit_sleep = 33
    monkeypatch.setattr(QueueConfig, "max_running", 44)
    ensemble._queue_config.max_submit = 55

    async def dummy_unary_send(_):
        return

    # The function under test:
    await ensemble._evaluate_inner(dummy_unary_send)

    # Assert properties successfully propagated:
    assert Scheduler.__init__.call_args.kwargs["submit_sleep"] == 33
    assert Scheduler.__init__.call_args.kwargs["max_running"] == 44
    assert Scheduler.__init__.call_args.kwargs["max_submit"] == 55
