import sys
import ert.experiment_server
import pytest

try:
    from unittest.mock import AsyncMock
except ImportError:
    from mock import AsyncMock
from ert.experiment_server._experiment_protocol import Experiment
from typing import AsyncContextManager, Awaitable, Callable

from cloudevents.http import CloudEvent, to_json
from websockets.client import WebSocketClientProtocol

# All test coroutines will be treated as marked.
pytestmark = pytest.mark.asyncio
minversion = pytest.mark.skipif(
    sys.version_info <= (3, 6), reason="requires python3.7 or higher"
)


@minversion
async def test_receiving_event_from_cluster(
    experiment_server_ctx: AsyncContextManager[ert.experiment_server.ExperimentServer],
    dispatcher_factory: AsyncContextManager[
        Callable[
            [ert.experiment_server.ExperimentServer], Awaitable[WebSocketClientProtocol]
        ]
    ],
):
    async with experiment_server_ctx as experiment_server:
        experiment = AsyncMock(Experiment)
        experiment_server.add_experiment(experiment)

        async with dispatcher_factory as make_dispatcher:
            dispatcher = await make_dispatcher(experiment_server)
            assert experiment_server._dispatchers_connected.qsize() == 1

            event = CloudEvent(
                {
                    "type": "test.event",
                    "source": "test_receiving_event_from_cluster",
                }
            )
            await dispatcher.send(to_json(event))

    experiment.dispatch.assert_awaited_once_with(event, 0)


@minversion
async def test_successful_run(
    experiment_server_ctx: AsyncContextManager[ert.experiment_server.ExperimentServer],
    capsys,
):
    async with experiment_server_ctx as experiment_server:
        experiment = AsyncMock(Experiment)
        experiment.successful_realizations.return_value = 5
        id_ = experiment_server.add_experiment(experiment)
        await experiment_server.run_experiment(id_)

    captured = capsys.readouterr()
    assert captured.out == "Successful realizations: 5\n"


@minversion
async def test_failed_run(
    experiment_server_ctx: AsyncContextManager[ert.experiment_server.ExperimentServer],
    capsys,
):
    async with experiment_server_ctx as experiment_server:
        experiment = AsyncMock(Experiment)
        experiment.run.side_effect = RuntimeError("boom")
        id_ = experiment_server.add_experiment(experiment)

        with pytest.raises(RuntimeError, match="boom"):
            await experiment_server.run_experiment(id_)

    captured = capsys.readouterr()
    assert captured.out == "Experiment failed: boom\n"
