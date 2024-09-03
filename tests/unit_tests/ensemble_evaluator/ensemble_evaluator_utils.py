import asyncio

import websockets

from _ert.async_utils import new_event_loop
from _ert.events import (
    EnsembleStarted,
    EnsembleSucceeded,
    ForwardModelStepRunning,
    ForwardModelStepSuccess,
    RealizationFailed,
    RealizationSuccess,
    RealizationUnknown,
    event_to_json,
)
from _ert_forward_model_runner.client import Client
from ert.config import QueueConfig
from ert.ensemble_evaluator import Ensemble
from ert.ensemble_evaluator._ensemble import ForwardModelStep, Realization
from ert.ensemble_evaluator._wait_for_evaluator import wait_for_evaluator


def _mock_ws(host, port, messages, delay_startup=0):
    loop = new_event_loop()
    done = loop.create_future()

    async def _handler(websocket, path):
        while True:
            msg = await websocket.recv()
            messages.append(msg)
            if msg == "stop":
                done.set_result(None)
                break

    async def _run_server():
        await asyncio.sleep(delay_startup)
        async with websockets.server.serve(
            _handler, host, port, ping_timeout=1, ping_interval=1
        ):
            await done

    loop.run_until_complete(_run_server())
    loop.close()


class TestEnsemble(Ensemble):
    __test__ = False

    def __init__(self, _iter, reals, jobs, id_):
        self.iter = _iter
        self.test_reals = reals
        self.jobs = jobs

        the_reals = [
            Realization(
                real_no,
                forward_models=[
                    ForwardModelStep(str(fm_idx), "") for fm_idx in range(0, jobs)
                ],
                active=True,
                max_runtime=0,
                num_cpu=0,
                run_arg=None,
                job_script=None,
                realization_memory=0,
            )
            for real_no in range(0, reals)
        ]
        super().__init__(the_reals, {}, QueueConfig(), 0, id_)

    async def evaluate(self, config, _, __):
        event_id = 0
        await wait_for_evaluator(
            base_url=config.url,
            token=config.token,
            cert=config.cert,
        )
        async with Client(config.url + "/dispatch") as dispatch:
            event = EnsembleStarted(ensemble=self.id_)
            await dispatch._send(event_to_json(event))

            event_id += 1
            for real in range(0, self.test_reals):
                real = str(real)
                job_failed = False

                event = (RealizationUnknown(ensemble=self.id_, real=real),)
                await dispatch._send(event_to_json(event))

                event_id += 1
                for job in range(0, self.jobs):
                    job = str(job)

                    event = ForwardModelStepRunning(
                        ensemble=self.id_,
                        real=real,
                        fm_step=job,
                        current_memory_usage=1000,
                    )
                    await dispatch._send(event_to_json(event))
                    event_id += 1

                    event = ForwardModelStepSuccess(
                        ensemble=self.id_,
                        real=real,
                        fm_step=job,
                        current_memory_usage=1000,
                    )
                    await dispatch._send(event_to_json(event))
                    event_id += 1
                if job_failed:
                    event = RealizationFailed(
                        ensemble=self.id_,
                        real=real,
                        fm_step=job,
                        callback_status_message="",
                    )
                    await dispatch._send(event_to_json(event))
                    event_id += 1
                else:
                    event = RealizationSuccess(
                        ensemble=self.id_, real=real, fm_step=job
                    )
                    await dispatch._send(event_to_json(event))
                    event_id += 1

            event = EnsembleSucceeded(ensemble=self.id_)
            await dispatch._send(event_to_json(event))

    @property
    def cancellable(self) -> bool:
        return False
