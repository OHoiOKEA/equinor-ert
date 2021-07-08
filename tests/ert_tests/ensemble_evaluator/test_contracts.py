import pytest
import websockets
from cloudevents.http import CloudEvent, from_json, to_json

from ert_shared.ensemble_evaluator.narratives.narrative import (
    Consumer,
    EventDescription,
    Provider,
)

pytestmark = pytest.mark.asyncio


@pytest.mark.consumer_driven_contract_test
async def test_interaction(unused_tcp_port):
    narrative = (
        Consumer("Consumer")
        .forms_narrative_with(Provider("Provider"))
        .given("some data exists")
        .receives("a request")
        .cloudevents_in_order([EventDescription(type_="start", source="/consumer")])
        .responds_with("an end response")
        .cloudevents_in_order([EventDescription(type_="end", source="/provider")])
        .on_uri(f"ws://localhost:{unused_tcp_port}")
    )
    async with narrative:
        async with websockets.connect(narrative.uri) as websocket:
            await websocket.send(
                to_json(CloudEvent({"id": "0", "source": "/consumer", "type": "start"}))
            )
            end = await websocket.recv()
            assert from_json(end)["type"] == "end"
