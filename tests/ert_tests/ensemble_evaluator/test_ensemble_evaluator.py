from typing import Tuple
from ert_shared.ensemble_evaluator.utils import wait_for_evaluator
from unittest.mock import MagicMock, patch

import pytest
from websockets.exceptions import ConnectionClosedError
from websockets.version import version as websockets_version
from ensemble_evaluator_utils import (
    TestEnsemble,
    AutorunTestEnsemble,
    send_dispatch_event,
)

from ert_shared.ensemble_evaluator.monitor import _Monitor


import ert_shared.ensemble_evaluator.entity.identifiers as identifiers
from ert_shared.ensemble_evaluator.client import Client
from ert_shared.ensemble_evaluator.entity.snapshot import Snapshot
from ert_shared.ensemble_evaluator.evaluator import EnsembleEvaluatorSession, ee_monitor
from ert_shared.ensemble_evaluator.narratives import (
    dispatch_failing_job,
    monitor_failing_ensemble,
    monitor_failing_evaluation,
    monitor_successful_ensemble,
)
from ert_shared.status.entity.state import (
    ENSEMBLE_STATE_FAILED,
    ENSEMBLE_STATE_STOPPED,
    ENSEMBLE_STATE_STARTED,
    ENSEMBLE_STATE_UNKNOWN,
    JOB_STATE_FAILURE,
    JOB_STATE_FINISHED,
    JOB_STATE_RUNNING,
)


def test_dispatchers_can_connect_and_monitor_can_shut_down_evaluator(
    test_evaluation: Tuple[EnsembleEvaluatorSession, str]
):
    evaluator, evaluation_id = test_evaluation
    with evaluator.run(evaluation_id) as monitor:
        events = monitor.track()
        host = evaluator._config.host
        port = evaluator._config.port
        protocol = evaluator._config.protocol
        token = evaluator._config.token
        cert = evaluator._config.cert

        url = evaluator._config.url
        # first snapshot before any event occurs
        snapshot_event = next(events)
        snapshot = Snapshot(snapshot_event.data)
        assert snapshot.get_status() == ENSEMBLE_STATE_UNKNOWN
        # two dispatchers connect
        with Client(
            url + f"/dispatch/{evaluation_id}",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch1, Client(
            url + f"/dispatch/{evaluation_id}",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch2:

            # first dispatcher informs that job 0 is running
            send_dispatch_event(
                dispatch1,
                identifiers.EVTYPE_FM_JOB_RUNNING,
                f"/ert/ee/{evaluation_id}/real/0/step/0/job/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatcher informs that job 0 is running
            send_dispatch_event(
                dispatch2,
                identifiers.EVTYPE_FM_JOB_RUNNING,
                f"/ert/ee/{evaluation_id}/real/1/step/0/job/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatcher informs that job 0 is done
            send_dispatch_event(
                dispatch2,
                identifiers.EVTYPE_FM_JOB_SUCCESS,
                f"/ert/ee/{evaluation_id}/real/1/step/0/job/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatcher informs that job 1 is failed
            send_dispatch_event(
                dispatch2,
                identifiers.EVTYPE_FM_JOB_FAILURE,
                f"/ert/ee/{evaluation_id}/real/1/step/0/job/1",
                "event_job_1_fail",
                {identifiers.ERROR_MSG: "error"},
            )
            snapshot = Snapshot(next(events).data)
            assert snapshot.get_job("1", "0", "0").status == JOB_STATE_FINISHED
            assert snapshot.get_job("0", "0", "0").status == JOB_STATE_RUNNING
            assert snapshot.get_job("1", "0", "1").status == JOB_STATE_FAILURE

        # a second monitor connects
        with ee_monitor.create(
            evaluation_id, evaluator._config.get_connection_info()
        ) as monitor2:
            events2 = monitor2.track()
            full_snapshot_event = next(events2)
            print(full_snapshot_event)
            assert full_snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
            snapshot = Snapshot(full_snapshot_event.data)
            assert snapshot.get_status() == ENSEMBLE_STATE_UNKNOWN
            assert snapshot.get_job("0", "0", "0").status == JOB_STATE_RUNNING
            assert snapshot.get_job("1", "0", "0").status == JOB_STATE_FINISHED

            # one monitor requests that server exit
            monitor.signal_cancel()

            # both monitors should get a terminated event
            # terminated = next(events)
            terminated2 = next(events2)
            print(terminated2)
            # assert terminated["type"] == identifiers.EVTYPE_EE_TERMINATED
            assert terminated2["type"] == identifiers.EVTYPE_EE_TERMINATED

            for e in [events, events2]:
                for undexpected_event in e:
                    assert (
                        False
                    ), f"got unexpected event {undexpected_event} from monitor"


def test_ensure_multi_level_events_in_order(
    test_evaluation: Tuple[EnsembleEvaluatorSession, str]
):
    evaluator, evaluation_id = test_evaluation
    with evaluator.run(evaluation_id=evaluation_id) as monitor:
        events = monitor.track()

        token = evaluator._config.token
        cert = evaluator._config.cert
        url = evaluator._config.url

        snapshot_event = next(events)
        assert snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
        with Client(url + "/dispatch", cert=cert, token=token) as dispatch1:
            send_dispatch_event(
                dispatch1,
                identifiers.EVTYPE_ENSEMBLE_STARTED,
                f"/ert/ee/{evaluation_id}/ensemble",
                "event0",
                {},
            )
            send_dispatch_event(
                dispatch1,
                identifiers.EVTYPE_FM_STEP_SUCCESS,
                f"/ert/ee/{evaluation_id}/real/0/step/0",
                "event1",
                {},
            )
            send_dispatch_event(
                dispatch1,
                identifiers.EVTYPE_FM_STEP_SUCCESS,
                f"/ert/ee/{evaluation_id}/real/1/step/0",
                "event2",
                {},
            )
            send_dispatch_event(
                dispatch1,
                identifiers.EVTYPE_ENSEMBLE_STOPPED,
                f"/ert/ee/{evaluation_id}/ensemble",
                "event3",
                {},
            )
        monitor.signal_done()
        events = list(events)

        # Without making too many assumptions about what events to expect, it
        # should be reasonable to expect that if an event contains information
        # about realizations, the state of the ensemble up until that point
        # should be not final (i.e. not cancelled, stopped, failed).
        ensemble_state = snapshot_event.data.get("status")
        for event in events:
            if event.data:
                if "reals" in event.data:
                    assert ensemble_state == ENSEMBLE_STATE_STARTED
                ensemble_state = event.data.get("status", ensemble_state)


def wait_until_done(monitor, event):
    """Manually close monitor if event-data both exists and state indicates done"""
    if isinstance(event.data, dict) and event.data.get("status") in [
        ENSEMBLE_STATE_FAILED,
        ENSEMBLE_STATE_STOPPED,
    ]:
        monitor.signal_done()


@pytest.mark.consumer_driven_contract_verification
def test_verify_monitor_failing_ensemble(
    evaluator_experiment_session: Tuple[EnsembleEvaluatorSession, str], event_loop
):
    evaluator, experiment_id = evaluator_experiment_session
    ensemble = TestEnsemble(iter=1, reals=2, steps=1, jobs=2)
    ensemble.addFailJob(real=1, step=0, job=1)

    evaluation_id = evaluator.submit_ensemble(
        ensemble=ensemble, iter_=0, experiment_id=experiment_id
    )
    monitor = evaluator.run(evaluation_id)

    monitor_failing_ensemble().verify(evaluator._config.url, on_connect=ensemble.start)
    for event in monitor.track():
        print(event)
        wait_until_done(monitor, event)
    print("Events done")
    ensemble.join()
    print("Test done")


@pytest.mark.consumer_driven_contract_verification
def test_verify_monitor_failing_evaluation(make_ee_config, event_loop):
    ee_config = make_ee_config(use_token=False, generate_cert=False)
    ensemble = TestEnsemble(iter=1, reals=2, steps=1, jobs=2)
    ensemble.with_failure()
    ee = EnsembleEvaluator(
        ensemble,
        ee_config,
        0,
        ee_id="ee-0",
    )
    ee.run()
    event_loop.run_until_complete(wait_for_evaluator(ee_config.url))
    monitor_failing_evaluation().verify(ee_config.client_uri, on_connect=ensemble.start)
    ensemble.join()


@pytest.mark.consumer_driven_contract_verification
def test_verify_monitor_successful_ensemble(make_ee_config, event_loop):
    ensemble = TestEnsemble(iter=1, reals=2, steps=2, jobs=2).with_result(
        b"\x80\x04\x95\x0f\x00\x00\x00\x00\x00\x00\x00\x8c\x0bhello world\x94.",
        "application/octet-stream",
    )
    ee_config = make_ee_config(use_token=False, generate_cert=False)
    ee = EnsembleEvaluator(
        ensemble,
        ee_config,
        0,
        ee_id="ee-0",
    )
    ee.run()
    event_loop.run_until_complete(wait_for_evaluator(ee_config.url))
    monitor_successful_ensemble().verify(
        ee_config.client_uri, on_connect=ensemble.start
    )
    ensemble.join()


@pytest.mark.consumer_driven_contract_verification
def test_verify_dispatch_failing_job(make_ee_config, event_loop):
    ee_config = make_ee_config(use_token=False, generate_cert=False)
    mock_ensemble = MagicMock()
    mock_ensemble.snapshot.to_dict.return_value = {}
    ee = EnsembleEvaluator(
        mock_ensemble,
        ee_config,
        0,
        ee_id="0",
    )
    ee.run()
    event_loop.run_until_complete(wait_for_evaluator(ee_config.url))
    dispatch_failing_job().verify(ee_config.client_uri, on_connect=lambda: None)
    ee.stop()


@pytest.mark.parametrize("num_realizations, num_failing", [(10, 5), (10, 10)])
def test_ensemble_evaluator_run_and_get_successful_realizations_connection_refused_no_recover(
    make_ee_config, num_realizations, num_failing
):

    ee_config = make_ee_config(use_token=False, generate_cert=False)
    ensemble = AutorunTestEnsemble(iter=1, reals=num_realizations, steps=1, jobs=2)
    for i in range(num_failing):
        ensemble.addFailJob(real=i, step=0, job=1)
    ee = EnsembleEvaluator(ensemble, ee_config, 0, ee_id="0")

    with patch.object(
        _Monitor, "track", side_effect=ConnectionRefusedError("Connection error")
    ) as mock:
        num_successful = ee.run_and_get_successful_realizations()
        assert mock.call_count == 3
    assert num_successful == num_realizations - num_failing


def get_connection_closed_excpetion():
    # The API of the websockets exception was changed in version 10,
    # and are not backwards compatible. However, we still need to
    # support version 9, as this is the latest version that also supports
    # Python 3.6
    if int(websockets_version.split(".")[0]) < 10:
        return ConnectionClosedError(1006, "Connection closed")
    else:
        return ConnectionClosedError(None, None)


def dummy_iterator(dummy_str: str):
    for c in dummy_str:
        yield c
    raise get_connection_closed_excpetion()


@pytest.mark.parametrize("num_realizations, num_failing", [(10, 5), (10, 10)])
def test_ensemble_evaluator_run_and_get_successful_realizations_connection_closed_recover(
    make_ee_config, num_realizations, num_failing
):
    ee_config = make_ee_config(use_token=False, generate_cert=False)
    ensemble = AutorunTestEnsemble(iter=1, reals=num_realizations, steps=1, jobs=2)
    for i in range(num_failing):
        ensemble.addFailJob(real=i, step=0, job=1)
    ee = EnsembleEvaluator(ensemble, ee_config, 0, ee_id="0")
    with patch.object(
        _Monitor,
        "track",
        side_effect=[get_connection_closed_excpetion()] * 2
        + [ConnectionRefusedError("Connection error")]
        + [dummy_iterator("DUMMY TRACKING ITERATOR")]
        + [get_connection_closed_excpetion()] * 2
        + [ConnectionRefusedError("Connection error")] * 2
        + ["DUMMY TRACKING ITERATOR2"],
    ) as mock:
        num_successful = ee.run_and_get_successful_realizations()
        assert mock.call_count == 9
    assert num_successful == num_realizations - num_failing


@pytest.mark.parametrize("num_realizations, num_failing", [(10, 5), (10, 10)])
def test_ensemble_evaluator_run_and_get_successful_realizations_connection_closed_no_recover(
    make_ee_config, num_realizations, num_failing
):
    ee_config = make_ee_config(use_token=False, generate_cert=False)
    ensemble = AutorunTestEnsemble(iter=1, reals=num_realizations, steps=1, jobs=2)
    for i in range(num_failing):
        ensemble.addFailJob(real=i, step=0, job=1)
    ee = EnsembleEvaluator(ensemble, ee_config, 0, ee_id="0")
    with patch.object(
        _Monitor,
        "track",
        side_effect=[get_connection_closed_excpetion()] * 2
        + [ConnectionRefusedError("Connection error")]
        + [dummy_iterator("DUMMY TRACKING ITERATOR")]
        + [get_connection_closed_excpetion()] * 2
        + [ConnectionRefusedError("Connection error")] * 3
        + [
            "DUMMY TRACKING ITERATOR2"
        ],  # This should not be reached, hence we assert call_count == 9
    ) as mock:
        num_successful = ee.run_and_get_successful_realizations()
        assert mock.call_count == 9
    assert num_successful == num_realizations - num_failing
