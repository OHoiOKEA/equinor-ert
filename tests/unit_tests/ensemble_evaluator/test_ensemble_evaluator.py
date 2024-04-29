import asyncio

from _ert_forward_model_runner.client import Client
from ert.ensemble_evaluator import Monitor, Snapshot, identifiers
from ert.ensemble_evaluator.state import (
    ENSEMBLE_STATE_FAILED,
    ENSEMBLE_STATE_STARTED,
    ENSEMBLE_STATE_UNKNOWN,
    FORWARD_MODEL_STATE_FAILURE,
    FORWARD_MODEL_STATE_FINISHED,
    FORWARD_MODEL_STATE_RUNNING,
)

from .ensemble_evaluator_utils import send_dispatch_event_async


async def test_restarted_jobs_do_not_have_error_msgs(evaluator):
    evaluator.start_running()
    token = evaluator._config.token
    cert = evaluator._config.cert
    url = evaluator._config.url

    config_info = evaluator._config.get_connection_info()
    async with Monitor(config_info) as monitor:
        events = monitor.track()
        # first snapshot before any event occurs
        snapshot_event = await events.__anext__()
        snapshot = Snapshot(snapshot_event.data)
        assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
        # two dispatch endpoint clients connect
        async with Client(
            url + "/dispatch",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch:
            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_FORWARD_MODEL_FAILURE,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event_job_0_fail",
                {identifiers.ERROR_MSG: "error"},
            )

        evt = await events.__anext__()
        snapshot = Snapshot(evt.data)
        assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_FAILURE
        assert snapshot.get_job("0", "0").error == "error"

    async with Client(
        url + "/dispatch",
        cert=cert,
        token=token,
        max_retries=1,
        timeout_multiplier=1,
    ) as dispatch:
        await send_dispatch_event_async(
            dispatch,
            identifiers.EVTYPE_FORWARD_MODEL_SUCCESS,
            f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
            "event_job_0_rerun_success",
            None,
        )

    # we have to wait for the batching dispatcher to process the events, and for the
    # internal ensemble state to get updated before connecting and getting a full
    # ensemble snapshot
    await asyncio.sleep(2)
    # reconnect new monitor
    async with Monitor(config_info) as new_monitor:
        new_events = new_monitor.track()
        full_snapshot_event = await new_events.__anext__()

        assert full_snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
        snapshot = Snapshot(full_snapshot_event.data)
        assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
        assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_FINISHED
        assert snapshot.get_job("0", "0").error == ""


async def test_new_monitor_can_pick_up_where_we_left_off(evaluator):
    evaluator.start_running()
    token = evaluator._config.token
    cert = evaluator._config.cert
    url = evaluator._config.url

    config_info = evaluator._config.get_connection_info()
    async with Monitor(config_info) as monitor:
        events = monitor.track()
        # first snapshot before any event occurs
        snapshot_event = await events.__anext__()
        snapshot = Snapshot(snapshot_event.data)
        assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
        # two dispatch endpoint clients connect
        async with Client(
            url + "/dispatch",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch1, Client(
            url + "/dispatch",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch2:
            # first dispatch endpoint client informs that forward model 0 is running
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatch endpoint client informs that forward model 0 is running
            await send_dispatch_event_async(
                dispatch2,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )
            # second dispatch endpoint client informs that forward model 1 is running
            await send_dispatch_event_async(
                dispatch2,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/1",
                "event1",
                {"current_memory_usage": 1000},
            )

        evt = await events.__anext__()
        snapshot = Snapshot(evt.data)
        assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_RUNNING
        assert snapshot.get_job("1", "0").status == FORWARD_MODEL_STATE_RUNNING
        assert snapshot.get_job("1", "1").status == FORWARD_MODEL_STATE_RUNNING
        # take down first monitor by leaving context

    async with Client(
        url + "/dispatch",
        cert=cert,
        token=token,
        max_retries=1,
        timeout_multiplier=1,
    ) as dispatch2:
        # second dispatch endpoint client informs that job 0 is done
        await send_dispatch_event_async(
            dispatch2,
            identifiers.EVTYPE_FORWARD_MODEL_SUCCESS,
            f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/0",
            "event1",
            {"current_memory_usage": 1000},
        )

        # second dispatch endpoint client informs that job 1 is failed
        await send_dispatch_event_async(
            dispatch2,
            identifiers.EVTYPE_FORWARD_MODEL_FAILURE,
            f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/1",
            "event_job_1_fail",
            {identifiers.ERROR_MSG: "error"},
        )

    # we have to wait for the batching dispatcher to process the events, and for the
    # internal ensemble state to get updated before connecting and getting a full
    # ensemble snapshot
    await asyncio.sleep(2)
    # reconnect new monitor
    async with Monitor(config_info) as new_monitor:
        new_events = new_monitor.track()
        full_snapshot_event = await new_events.__anext__()

        assert full_snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
        snapshot = Snapshot(full_snapshot_event.data)
        assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
        assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_RUNNING
        assert snapshot.get_job("1", "0").status == FORWARD_MODEL_STATE_FINISHED
        assert snapshot.get_job("1", "1").status == FORWARD_MODEL_STATE_FAILURE


async def test_dispatch_endpoint_clients_can_connect_and_monitor_can_shut_down_evaluator(
    evaluator,
):
    evaluator.start_running()
    conn_info = evaluator._config.get_connection_info()
    async with Monitor(conn_info) as monitor:
        events = monitor.track()
        token = evaluator._config.token
        cert = evaluator._config.cert

        url = evaluator._config.url
        # first snapshot before any event occurs
        snapshot_event = await events.__anext__()
        snapshot = Snapshot(snapshot_event.data)
        assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
        # two dispatch endpoint clients connect
        async with Client(
            url + "/dispatch",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch1, Client(
            url + "/dispatch",
            cert=cert,
            token=token,
            max_retries=1,
            timeout_multiplier=1,
        ) as dispatch2:
            # first dispatch endpoint client informs that job 0 is running
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatch endpoint client informs that job 0 is running
            await send_dispatch_event_async(
                dispatch2,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatch endpoint client informs that job 0 is done
            await send_dispatch_event_async(
                dispatch2,
                identifiers.EVTYPE_FORWARD_MODEL_SUCCESS,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )

            # second dispatch endpoint client informs that job 1 is failed
            await send_dispatch_event_async(
                dispatch2,
                identifiers.EVTYPE_FORWARD_MODEL_FAILURE,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1/forward_model/1",
                "event_job_1_fail",
                {identifiers.ERROR_MSG: "error"},
            )
            evt = await events.__anext__()
            snapshot = Snapshot(evt.data)
            assert snapshot.get_job("1", "0").status == FORWARD_MODEL_STATE_FINISHED
            assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_RUNNING
            assert snapshot.get_job("1", "1").status == FORWARD_MODEL_STATE_FAILURE

        # a second monitor connects
        async with Monitor(evaluator._config.get_connection_info()) as monitor2:
            events2 = monitor2.track()
            full_snapshot_event = await events2.__anext__()
            assert full_snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
            snapshot = Snapshot(full_snapshot_event.data)
            assert snapshot.status == ENSEMBLE_STATE_UNKNOWN
            assert snapshot.get_job("1", "0").status == FORWARD_MODEL_STATE_FINISHED
            assert snapshot.get_job("0", "0").status == FORWARD_MODEL_STATE_RUNNING
            assert snapshot.get_job("1", "1").status == FORWARD_MODEL_STATE_FAILURE

            # one monitor requests that server exit
            await monitor.signal_cancel()

            # both monitors should get a terminated event
            terminated = await events.__anext__()
            terminated2 = await events2.__anext__()
            assert terminated["type"] == identifiers.EVTYPE_EE_TERMINATED
            assert terminated2["type"] == identifiers.EVTYPE_EE_TERMINATED

            # async for e in [events, events2]:
            #     for undexpected_event in e:
            #         raise AssertionError(
            #             f"got unexpected event {undexpected_event} from monitor"
            #         )


async def test_ensure_multi_level_events_in_order(evaluator):
    evaluator.start_running()
    config_info = evaluator._config.get_connection_info()
    async with Monitor(config_info) as monitor:
        events = monitor.track()

        token = evaluator._config.token
        cert = evaluator._config.cert
        url = evaluator._config.url

        snapshot_event = await events.__anext__()
        assert snapshot_event["type"] == identifiers.EVTYPE_EE_SNAPSHOT
        async with Client(url + "/dispatch", cert=cert, token=token) as dispatch1:
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_ENSEMBLE_STARTED,
                f"/ert/ensemble/{evaluator.ensemble.id_}",
                "event0",
                {},
            )
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_REALIZATION_SUCCESS,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0",
                "event1",
                {},
            )
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_REALIZATION_SUCCESS,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1",
                "event2",
                {},
            )
            await send_dispatch_event_async(
                dispatch1,
                identifiers.EVTYPE_ENSEMBLE_STOPPED,
                f"/ert/ensemble/{evaluator.ensemble.id_}",
                "event3",
                {},
            )
        await monitor.signal_done()
        # events = list(events)

        # Without making too many assumptions about what events to expect, it
        # should be reasonable to expect that if an event contains information
        # about realizations, the state of the ensemble up until that point
        # should be not final (i.e. not cancelled, stopped, failed).
        ensemble_state = snapshot_event.data.get("status")
        async for event in monitor.track():
            if event.data:
                if "reals" in event.data:
                    assert ensemble_state == ENSEMBLE_STATE_STARTED
                ensemble_state = event.data.get("status", ensemble_state)


async def test_dying_batcher(evaluator):
    def exploding_handler(events):
        raise ValueError("Boom!")

    evaluator._dispatcher.set_event_handler({"EXPLODING"}, exploding_handler)

    evaluator.start_running()
    config_info = evaluator._config.get_connection_info()

    async with Monitor(config_info) as monitor:
        token = evaluator._config.token
        cert = evaluator._config.cert
        url = evaluator._config.url

        async with Client(url + "/dispatch", cert=cert, token=token) as dispatch:
            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_ENSEMBLE_STARTED,
                f"/ert/ensemble/{evaluator.ensemble.id_}",
                "event0",
                {},
            )
            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event1",
                {"current_memory_usage": 1000},
            )
            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_FORWARD_MODEL_RUNNING,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event2",
                {},
            )
            await send_dispatch_event_async(
                dispatch,
                "EXPLODING",
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/1",
                "event3",
                {},
            )
            await send_dispatch_event_async(
                dispatch,
                identifiers.EVTYPE_REALIZATION_SUCCESS,
                f"/ert/ensemble/{evaluator.ensemble.id_}/real/0/forward_model/0",
                "event4",
                {},
            )

        # drain the monitor
        async for _ in monitor.track():
            pass

        assert evaluator.ensemble.snapshot.status == ENSEMBLE_STATE_FAILED
