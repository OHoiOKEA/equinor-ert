import logging
import pickle
import uuid
from contextlib import ExitStack
from typing import Optional

import ert_shared.ensemble_evaluator.entity.identifiers as identifiers
from cloudevents.exceptions import DataUnmarshallerError
from cloudevents.http import from_json, to_json
from cloudevents.http.event import CloudEvent
from ert_shared.ensemble_evaluator.entity import serialization
from ert_shared.ensemble_evaluator.sync_ws_duplexer import SyncWebsocketDuplexer


logger = logging.getLogger(__name__)


class _BaseMonitor:
    def __init__(
        self,
        host,
        port,
        endpoint,
        end_event_type,
        protocol="wss",
        cert=None,
        token=None,
    ):
        self._base_uri = f"{protocol}://{host}:{port}"
        self._client_uri = f"{self._base_uri}/{endpoint}"

        self._end_event_type = end_event_type

        self._cert = cert
        self._token = token
        self._ws_duplexer: Optional[SyncWebsocketDuplexer] = None
        self._id = str(uuid.uuid1()).split("-")[0]

    def __enter__(self):
        self._ws_duplexer = SyncWebsocketDuplexer(
            self._client_uri, self._base_uri, self._cert, self._token
        )
        return self

    def __exit__(self, *args):
        self._ws_duplexer.stop()

    def get_base_uri(self):
        return self._base_uri

    def _send_event(self, cloud_event: CloudEvent) -> None:
        with ExitStack() as stack:
            duplexer = self._ws_duplexer
            if not duplexer:
                duplexer = SyncWebsocketDuplexer(
                    self._client_uri, self._base_uri, self._cert, self._token
                )
                stack.callback(duplexer.stop)
            duplexer.send(
                to_json(cloud_event, data_marshaller=serialization.evaluator_marshaller)
            )

    def track(self):
        with ExitStack() as stack:
            duplexer = self._ws_duplexer
            if not duplexer:
                duplexer = SyncWebsocketDuplexer(
                    self._client_uri, self._base_uri, self._cert, self._token
                )
                stack.callback(duplexer.stop)
            for message in duplexer.receive():
                try:
                    event = from_json(
                        message, data_unmarshaller=serialization.evaluator_unmarshaller
                    )
                except DataUnmarshallerError:
                    event = from_json(message, data_unmarshaller=pickle.loads)
                yield event
                if event["type"] == self._end_event_type:
                    logger.debug(
                        f"monitor-{self._id} client received {self._end_event_type}"
                    )
                    break


class _Monitor(_BaseMonitor):
    def __init__(
        self, evaluation_id, host, port, protocol="wss", cert=None, token=None
    ):
        self._evaluation_id = evaluation_id
        super().__init__(
            host=host,
            port=port,
            endpoint=f"client/{self._evaluation_id}",
            end_event_type=identifiers.EVTYPE_EE_TERMINATED,
            protocol=protocol,
            cert=cert,
            token=token,
        )

    def signal_cancel(self):
        logger.debug(f"monitor-{self._id} asking server to cancel...")

        out_cloudevent = CloudEvent(
            {
                "type": identifiers.EVTYPE_EE_USER_CANCEL,
                "source": f"/ert/monitor/{self._id}",
                "id": str(uuid.uuid1()),
            }
        )
        self._send_event(out_cloudevent)
        logger.debug(f"monitor-{self._id} asked server to cancel")

    def signal_done(self):
        logger.debug(f"monitor-{self._id} informing server monitor is done...")

        out_cloudevent = CloudEvent(
            {
                "type": identifiers.EVTYPE_EE_USER_DONE,
                "source": f"/ert/monitor/{self._id}",
                "id": str(uuid.uuid1()),
            }
        )
        self._send_event(out_cloudevent)
        logger.debug(f"monitor-{self._id} informed server monitor is done")


class _ExperimentMonitor(_BaseMonitor):
    def __init__(
        self, experiment_id, host, port, protocol="wss", cert=None, token=None
    ):
        self._experiment_id = experiment_id
        super().__init__(
            host=host,
            port=port,
            endpoint=f"experiment/{self._experiment_id}",
            end_event_type=identifiers.EVTYPE_EE_EXPERIMENT_TERMINATED,
            protocol=protocol,
            cert=cert,
            token=token,
        )


def create(evaluation_id, host, port, protocol, cert, token):
    return _Monitor(evaluation_id, host, port, protocol, cert, token)


def create_experiment(experiment_id, host, port, protocol, cert, token):
    return _ExperimentMonitor(experiment_id, host, port, protocol, cert, token)
