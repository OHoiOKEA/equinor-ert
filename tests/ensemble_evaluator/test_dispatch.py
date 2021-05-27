import pytest

from unittest.mock import Mock
from ert_shared.ensemble_evaluator.dispatch import Dispatcher, Batcher
from ert_shared.ensemble_evaluator.entity import identifiers as ids
from collections import defaultdict


class DummyEventHandler:
    def __init__(self, batching=False):

        self.batcher = Batcher(timeout=1) if batching else None
        self.dispatcher = Dispatcher(
            snapshot=None,
            ee_id="ee_id",
            iter="1",
            clients={},
            result_cb=lambda x: None,
            stop_cb=lambda x: None,
            batcher=self.batcher,
        )
        self.dispatcher._LOOKUP_MAP.clear()
        # self.dispatcher.clear_handlers()
        self.mock_all = Mock()
        self.mock_step = Mock()
        self.mock_none = Mock()

        self.dispatcher.register_event_handler(ids.EVGROUP_FM_ALL, batching=batching)(
            self.all
        )
        self.dispatcher.register_event_handler(ids.EVGROUP_FM_STEP, batching=batching)(
            self.step
        )

    async def join(self):
        await self.batcher.join()

    async def all(self, event):
        self.mock_all(event)

    async def step(self, event):
        self.mock_step(event)


def _create_dummy_event(event_type):
    return {"type": event_type, "source": "/ert/ee/1"}


@pytest.mark.asyncio
async def test_event_dispatcher_one_handler():
    event_handler = DummyEventHandler()

    event = _create_dummy_event(ids.EVTYPE_FM_JOB_SUCCESS)
    await event_handler.dispatcher.handle_event(event)

    event_handler.mock_all.assert_called_with(event)
    event_handler.mock_step.assert_not_called()
    event_handler.mock_none.assert_not_called()


@pytest.mark.asyncio
async def test_event_dispatcher_two_handlers():
    event_handler = DummyEventHandler()

    event = _create_dummy_event(ids.EVTYPE_FM_STEP_UNKNOWN)
    await event_handler.dispatcher.handle_event(event)

    event_handler.mock_all.assert_called_with(event)
    event_handler.mock_step.assert_called_with(event)
    event_handler.mock_none.assert_not_called()


@pytest.mark.asyncio
async def test_event_dispatcher_no_handlers():
    event_handler = DummyEventHandler()

    event = _create_dummy_event("SOME_UNKNOWN_EVENT_TYPE")
    await event_handler.dispatcher.handle_event(event)

    event_handler.mock_all.assert_not_called()
    event_handler.mock_step.assert_not_called()
    event_handler.mock_none.assert_not_called()


@pytest.mark.asyncio
async def test_event_dispatcher_batching_two_handlers():
    event_handler = DummyEventHandler(batching=True)

    event1 = _create_dummy_event(ids.EVTYPE_FM_STEP_UNKNOWN)
    event2 = _create_dummy_event(ids.EVTYPE_FM_STEP_UNKNOWN)
    await event_handler.dispatcher.handle_event(event1)
    await event_handler.dispatcher.handle_event(event2)

    await event_handler.join()

    event_handler.mock_all.assert_called_with([event1, event2])
    event_handler.mock_step.assert_called_with([event1, event2])
    event_handler.mock_none.assert_not_called()
