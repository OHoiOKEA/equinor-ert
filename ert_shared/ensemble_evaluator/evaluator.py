import asyncio
import json
import logging
import pickle
import sys
import threading
from contextlib import contextmanager
from http import HTTPStatus
from typing import Optional, Set
import uuid

import cloudevents.exceptions
import cloudpickle
from ert_shared.ensemble_evaluator.entity import identifiers
import ert_shared.ensemble_evaluator.monitor as ee_monitor
from ert_shared.ensemble_evaluator.config import EvaluatorServerConfig
import websockets
from cloudevents.http import from_json, to_json
from cloudevents.http.event import CloudEvent
from ert_shared.ensemble_evaluator.dispatch import Batcher, Dispatcher
from ert_shared.ensemble_evaluator.entity import serialization
from ert_shared.ensemble_evaluator.ensemble.base import _Ensemble
from ert_shared.ensemble_evaluator.entity.tool import get_evaluation_id
from websockets.legacy.server import WebSocketServerProtocol

if sys.version_info < (3, 7):
    from async_generator import asynccontextmanager
else:
    from contextlib import asynccontextmanager

logger = logging.getLogger(__name__)


def _create_cloud_event(
    event_type,
    iter_,
    evaluation_id,
    data={},
    extra_attrs={},
    data_marshaller=serialization.evaluator_marshaller,
):
    if isinstance(data, dict):
        data["iter"] = iter_
    attrs = {
        "type": event_type,
        "source": f"/ert/ee/{evaluation_id}",
    }
    attrs.update(extra_attrs)
    out_cloudevent = CloudEvent(
        attrs,
        data,
    )
    return to_json(out_cloudevent, data_marshaller=data_marshaller).decode()


class EnsembleEvaluation:
    def __init__(self, ensemble: _Ensemble, iter_, evaluation_id, loop) -> None:
        # Without information on the iteration, the events emitted from the
        # evaluator are ambiguous. In the future, an experiment authority* will
        # "own" the evaluators and can add iteration information to events they
        # emit. In the mean time, it is added here.
        # * https://github.com/equinor/ert/issues/1250
        self._ensemble = ensemble
        self.iter = iter_
        self.evaluation_id = evaluation_id

        self._clients: Set[WebSocketServerProtocol] = set()
        self._dispatchers_connected: asyncio.Queue = asyncio.Queue(loop=loop)

        self._batcher = Batcher(timeout=2, loop=loop)
        self._dispatcher = Dispatcher(
            ensemble=self._ensemble,
            evaluator_callback=self.dispatcher_callback,
            batcher=self._batcher,
        )

        self._result = None

    async def dispatcher_callback(self, event_type, snapshot_update_event, result=None):
        if event_type == identifiers.EVTYPE_ENSEMBLE_STOPPED:
            self._result = result

        await self._send_snapshot_update(snapshot_update_event)

    async def _send_snapshot_update(self, snapshot_update_event):
        event = _create_cloud_event(
            event_type=identifiers.EVTYPE_EE_SNAPSHOT_UPDATE,
            iter_=self.iter,
            evaluation_id=self.evaluation_id,
            data=snapshot_update_event.to_dict(),
        )
        if event and self._clients:
            await asyncio.gather(*[client.send(event) for client in self._clients])

    @contextmanager
    def connect_client(self, websocket: WebSocketServerProtocol):
        self._clients.add(websocket)
        yield
        self._clients.remove(websocket)

    @asynccontextmanager
    async def connect_dispatcher(self):
        await self._dispatchers_connected.put(None)
        yield
        await self._dispatchers_connected.get()
        self._dispatchers_connected.task_done()

    async def finalize(self):
        try:
            await asyncio.wait_for(self._dispatchers_connected.join(), timeout=20)
        except asyncio.TimeoutError:
            logger.debug("Timed out waiting for dispatchers to disconnect")
        await self._batcher.join()

        terminated_attrs = {}
        terminated_data = None
        if self._result:
            terminated_attrs["datacontenttype"] = "application/octet-stream"
            terminated_data = cloudpickle.dumps(self._result)
        message = _create_cloud_event(
            event_type=identifiers.EVTYPE_EE_TERMINATED,
            iter_=self.iter,
            evaluation_id=self.evaluation_id,
            data=terminated_data,
            extra_attrs=terminated_attrs,
            data_marshaller=cloudpickle.dumps,
        )
        if self._clients:
            await asyncio.wait([client.send(message) for client in self._clients])

    def start(self, config):
        self._ensemble.evaluate(config=config, ee_id=self.evaluation_id)

    def snapshot(self):
        return _create_cloud_event(
            event_type=identifiers.EVTYPE_EE_SNAPSHOT,
            iter_=self.iter,
            evaluation_id=self.evaluation_id,
            data=self._ensemble.snapshot.to_dict(),
        )

    async def handle_event(self, event: CloudEvent) -> None:
        await self._dispatcher.handle_event(event=event)

    def is_cancellable(self):
        return self._ensemble.is_cancellable()

    def cancel(self):
        self._ensemble.cancel()

    def get_successful_realizations(self):
        return self._ensemble.get_successful_realizations()


class Experiment:
    def __init__(self, experiment_id, name) -> None:
        self.experiment_id = experiment_id
        self.name = name
        self._clients: Set[WebSocketServerProtocol] = set()
        self.evaluations = set()
        self.state = identifiers.EVTYPE_EXPERIMENT_SUBMITTED

    @contextmanager
    def connect_client(self, websocket: WebSocketServerProtocol):
        self._clients.add(websocket)
        yield
        self._clients.remove(websocket)

    async def stop(self):
        self.state = identifiers.EVTYPE_EXPERIMENT_SUCCESS
        await self.broadcast(self.to_cloud_event())
        await self.broadcast(self.end_cloud_event())

    async def add_evaluation(self, evaluation_id):
        self.evaluations.add(evaluation_id)
        await self.broadcast(self.to_cloud_event())

    async def start(self):
        self.state = identifiers.EVTYPE_EXPERIMENT_RUNNING
        await self.broadcast(self.to_cloud_event())

    def to_cloud_event(
        self,
        extra_attrs={},
        data_marshaller=serialization.evaluator_marshaller,
    ):
        attrs = {
            "type": identifiers.EVTYPE_EE_EXPERIMENT_UPDATE,
            "source": f"/ert/experiment/{self.experiment_id}",
        }
        attrs.update(extra_attrs)

        data = {
            "state": self.state,
            "evaluations": list(self.evaluations),
            "name": self.name,
        }
        out_cloudevent = CloudEvent(
            attrs,
            data,
        )
        return to_json(out_cloudevent, data_marshaller=data_marshaller).decode()

    def end_cloud_event(
        self,
        extra_attrs={},
        data_marshaller=serialization.evaluator_marshaller,
    ):
        attrs = {
            "type": identifiers.EVTYPE_EE_EXPERIMENT_TERMINATED,
            "source": f"/ert/experiment/{self.experiment_id}",
        }
        attrs.update(extra_attrs)

        out_cloudevent = CloudEvent(
            attrs,
        )
        return to_json(out_cloudevent, data_marshaller=data_marshaller).decode()

    async def broadcast(self, message):
        if self._clients:
            await asyncio.wait([client.send(message) for client in self._clients])


class EnsembleEvaluator:
    def __init__(self, config):

        self._config = config

        self._loop = asyncio.new_event_loop()
        self._server_done = self._loop.create_future()

        self.experiments = dict()
        self.ensemble_evaluations = dict()

        self._ws_thread = threading.Thread(
            name="ert_ee_run_server", target=self._run_server, args=(self._loop,)
        )
        self._ws_thread.start()

    def get_evaluation_from_id(
        self, evaluation_id: str
    ) -> Optional[EnsembleEvaluation]:
        if evaluation_id not in self.ensemble_evaluations:
            print("Requested evaluation ID does not match any evaluation")
            return None
        return self.ensemble_evaluations[evaluation_id]

    def get_experiment_from_id(self, experiment_id: str) -> Optional[Experiment]:
        if experiment_id not in self.experiments:
            print("Requested experiment ID does not match any experiments")
            return None
        return self.experiments[experiment_id]

    async def handle_client(self, websocket: WebSocketServerProtocol, path: str):
        evaluation_id = path.split("/")[2]

        evaluation = self.get_evaluation_from_id(evaluation_id)

        with evaluation.connect_client(websocket):
            event = evaluation.snapshot()
            await websocket.send(event)

            async for message in websocket:
                client_event = from_json(
                    message, data_unmarshaller=serialization.evaluator_unmarshaller
                )
                logger.debug(f"got message from client: {client_event}")
                if client_event["type"] == identifiers.EVTYPE_EE_USER_CANCEL:
                    logger.debug(f"Client {websocket.remote_address} asked to cancel.")
                    if evaluation.is_cancellable():
                        # The evaluator will stop after the ensemble has
                        # indicated it has been cancelled.
                        evaluation.cancel()
                    else:
                        evaluation.stop()

                if client_event["type"] == identifiers.EVTYPE_EE_USER_DONE:
                    logger.debug(f"Client {websocket.remote_address} signalled done.")
                    await evaluation.finalize()
                    logger.debug("Sent terminated to clients.")

    async def handle_dispatch(self, websocket: WebSocketServerProtocol, path: str):
        evaluation_id = path.split("/")[2]

        evaluation = self.get_evaluation_from_id(evaluation_id)

        async with evaluation.connect_dispatcher():
            async for msg in websocket:
                try:
                    event = from_json(
                        msg, data_unmarshaller=serialization.evaluator_unmarshaller
                    )
                except cloudevents.exceptions.DataUnmarshallerError:
                    event = from_json(msg, data_unmarshaller=pickle.loads)
                msg_evaluation_id = get_evaluation_id(event["source"])
                if msg_evaluation_id != evaluation_id:
                    logger.info(
                        f"Got event from evaluator {msg_evaluation_id} with source {event['source']}, ignoring since I am {evaluation_id}"
                    )
                    continue
                await evaluation.handle_event(event)
                if event["type"] in [
                    identifiers.EVTYPE_ENSEMBLE_STOPPED,
                    identifiers.EVTYPE_ENSEMBLE_FAILED,
                ]:
                    return

    async def handle_experiment(self, websocket: WebSocketServerProtocol, path: str):
        experiment_id = path.split("/")[2]

        experiment = self.get_experiment_from_id(experiment_id)

        with experiment.connect_client(websocket):
            event = experiment.to_cloud_event()
            await websocket.send(event)
            async for _ in websocket:
                pass

    async def connection_handler(self, websocket: WebSocketServerProtocol, path: str):
        elements = path.split("/")
        if elements[1] == "client":
            await self.handle_client(websocket, path)
        elif elements[1] == "dispatch":
            await self.handle_dispatch(websocket, path)
        elif elements[1] == "experiment":
            await self.handle_experiment(websocket, path)
        else:
            logger.info("Connection attempt to unknown path: %s.", path)

    async def process_request(self, path: str, request_headers):
        if request_headers.get("token") != self._config.token:
            return HTTPStatus.UNAUTHORIZED, {}, b""
        if path == "/healthcheck":
            return HTTPStatus.OK, {}, b""
        if path == "/evaluations":
            return (
                HTTPStatus.OK,
                {},
                json.dumps({"evaluations": list(self.ensemble_evaluations)}).encode(),
            )

    async def evaluator_server(self):
        async with websockets.serve(
            self.connection_handler,
            sock=self._config.get_socket(),
            ssl=self._config.get_server_ssl_context(),
            process_request=self.process_request,
            max_queue=None,
            max_size=2 ** 26,
        ):
            await self._server_done
            logger.debug("Got done signal.")

        logger.debug("Async server exiting.")

    def _run_server(self, loop):
        loop.run_until_complete(self.evaluator_server())
        logger.debug("Server thread exiting.")

    def _stop_server(self):
        if not self._server_done.done():
            self._server_done.set_result(None)

    def stop(self):
        self._loop.call_soon_threadsafe(self._stop_server)
        self._ws_thread.join()


class EnsembleEvaluatorSession:
    def __init__(self, evaluator, config) -> None:
        self._evaluator = evaluator
        self._config = config

    def run(self, evaluation_id) -> ee_monitor._Monitor:
        self._evaluator.ensemble_evaluations[evaluation_id].start(self._config)
        return ee_monitor.create(
            evaluation_id,
            self._config.host,
            self._config.port,
            self._config.protocol,
            self._config.cert,
            self._config.token,
        )

    def run_and_get_successful_realizations(self, evaluation_id):
        try:
            with self.run(evaluation_id=evaluation_id) as mon:
                for _ in mon.track():
                    pass
        except ConnectionRefusedError as e:
            logger.debug(
                "run_and_get_successful_realizations caught %s, cancelling or stopping ensemble...",
                e,
            )
            if self._evaluator.ensemble_evaluations[evaluation_id].is_cancellable():
                self._evaluator.ensemble_evaluations[evaluation_id].cancel()
        return self._evaluator.ensemble_evaluations[
            evaluation_id
        ].get_successful_realizations()

    def start_experiment(self, name: str):
        experiment_id = str(uuid.uuid1()).split("-")[0]
        self._evaluator.experiments[experiment_id] = Experiment(experiment_id, name)
        self._evaluator._loop.create_task(
            self._evaluator.experiments[experiment_id].start()
        )
        return experiment_id

    def add_evaluation(self, experiment_id, evaluation_id):
        self._evaluator._loop.create_task(
            self._evaluator.experiments[experiment_id].add_evaluation(evaluation_id)
        )

    def stop_experiment(self, experiment_id):
        self._evaluator._loop.create_task(
            self._evaluator.experiments[experiment_id].stop()
        )

    def submit_ensemble(self, ensemble, iter_, experiment_id):
        evaluation_id = str(uuid.uuid1()).split("-")[0]
        self._evaluator.ensemble_evaluations[evaluation_id] = EnsembleEvaluation(
            ensemble=ensemble,
            iter_=iter_,
            evaluation_id=evaluation_id,
            loop=self._evaluator._loop,
        )
        self.add_evaluation(experiment_id, evaluation_id)
        return evaluation_id


class EnsembleEvaluatorService:

    _instance: EnsembleEvaluator = None
    _config: EvaluatorServerConfig = None

    @classmethod
    def get_evaluator_session(cls) -> EnsembleEvaluatorSession:
        return EnsembleEvaluatorSession(cls._instance, cls._config)

    @classmethod
    def get_config(cls) -> EvaluatorServerConfig:
        return cls._config

    @classmethod
    def start(cls, config: EvaluatorServerConfig) -> None:
        cls._config = config
        cls._instance = EnsembleEvaluator(config)

    @classmethod
    def stop(cls) -> None:
        cls._instance.stop()
