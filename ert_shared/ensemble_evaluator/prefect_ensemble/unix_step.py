import subprocess
import json
from pathlib import Path
from prefect import Task
from typing import Callable
import os
from contextlib import contextmanager
from ert_shared.ensemble_evaluator.prefect_ensemble.client import Client
from ert_shared.ensemble_evaluator.prefect_ensemble.storage_driver import (
    storage_driver_factory,
)
from cloudevents.http import to_json, CloudEvent
from ert_shared.ensemble_evaluator.entity import identifiers as ids


@contextmanager
def working_directory(path):
    """A context manager which changes the working directory to the given
    path, and then changes it back to its previous value on exit.
    """
    prev_wd = os.getcwd()
    os.chdir(path)
    try:
        yield
    finally:
        os.chdir(prev_wd)


class UnixStep(Task):
    def __init__(
        self,
        resources,
        outputs,
        job_list,
        iens,
        cmd,
        url,
        step_id,
        stage_id,
        ee_id,
        run_path,
        storage_config,
        *args,
        **kwargs,
    ):
        super().__init__(*args, **kwargs)
        self._resources = resources
        self._outputs = outputs
        self._job_list = job_list
        self._iens = iens
        self._cmd = cmd
        self._url = url
        self._step_id = step_id
        self._stage_id = stage_id
        self._ee_id = ee_id
        self._run_path = Path(run_path)
        self._storage_config = storage_config

    def get_iens(self):
        return self._iens

    def get_stage_id(self):
        return self._stage_id

    def get_step_id(self):
        return self._step_id

    def get_ee_id(self):
        return self._ee_id

    def retrieve_resources(self, expected_res, storage):
        if not expected_res:
            resources = self._resources
        else:
            resources = [
                item for sublist in expected_res for item in sublist
            ] + self._resources
        for resource in resources:
            storage.retrieve(resource)

    def storage_driver(self, run_path):
        Path(run_path).mkdir(parents=True, exist_ok=True)
        return storage_driver_factory(self._storage_config, run_path)

    def run_script_job(self, client, job, run_path):
        shell_cmd = [self._cmd, job["executable"], *job["args"]]
        cmd_exec = subprocess.run(
            shell_cmd,
            universal_newlines=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            cwd=run_path,
        )
        self.logger.info(cmd_exec.stdout)

        if cmd_exec.returncode != 0:
            self.logger.error(cmd_exec.stderr)
            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_JOB_FAILURE,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}/job/{job['id']}",
                    "datacontenttype": "application/json",
                },
                {"stderr": cmd_exec.stderr, "stdout": cmd_exec.stdout},
            )
            client.send(to_json(event).decode())
            raise RuntimeError(
                f"Script {job['name']} failed with exception {cmd_exec.stderr}"
            )

    def run_function_job(self, client, job, run_path):
        try:
            with working_directory(run_path):
                with open(job["args"]) as f:
                    inputs = json.load(f)
                job["executable"](**inputs)
        except Exception as e:
            self.logger.error(str(e))
            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_JOB_FAILURE,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}/job/{fun['id']}",
                    "datacontenttype": "application/json",
                },
                {"stderr": str(e)},
            )
            client.send(to_json(event).decode())
            raise e

    def run_jobs(self, client, run_path):
        for job in self._job_list:
            self.logger.info(f"Running command {self._cmd}  {job['name']}")
            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_JOB_START,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}/job/{job['id']}",
                    "datacontenttype": "application/json",
                },
            )
            client.send(to_json(event).decode())

            if isinstance(job["executable"], Callable):
                self.run_function_job(client, job, run_path)
            else:
                self.run_script_job(client, job, run_path)

            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_JOB_SUCCESS,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}/job/{job['id']}",
                    "datacontenttype": "application/json",
                },
                # TODO capture output form function execution also return output from script execution
                # {"stdout": cmd_exec.stdout},
            )

            client.send(to_json(event).decode())

    def run(self, expected_res=None):
        run_path = self._run_path / str(self._iens)
        storage = self.storage_driver(run_path)
        self.retrieve_resources(expected_res, storage)

        with Client(self._url) as ee_client:
            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_STEP_START,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}",
                    "datacontenttype": "application/json",
                },
            )
            ee_client.send(to_json(event).decode())

            outputs = []
            self.run_jobs(ee_client, run_path)

            for output in self._outputs:
                if not (run_path / output).exists():
                    raise FileNotFoundError(f"Output file {output} was not generated!")

                outputs.append(storage.store(output, self._iens))

            event = CloudEvent(
                {
                    "type": ids.EVTYPE_FM_STEP_SUCCESS,
                    "source": f"/ert/ee/{self._ee_id}/real/{self._iens}/stage/{self._stage_id}/step/{self._step_id}",
                    "datacontenttype": "application/json",
                },
            )
            ee_client.send(to_json(event).decode())
        return {"iens": self._iens, "outputs": outputs}
