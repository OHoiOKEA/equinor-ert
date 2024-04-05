from __future__ import annotations

import asyncio
import itertools
import json
import logging
import re
import shlex
import shutil
import stat
import subprocess
import tempfile
import time
from pathlib import Path
from typing import (
    Dict,
    Iterable,
    List,
    Literal,
    Mapping,
    MutableMapping,
    Optional,
    Tuple,
    Union,
    get_args,
)

from pydantic import BaseModel, Field
from typing_extensions import Annotated

from ert.scheduler.driver import SIGNAL_OFFSET, Driver
from ert.scheduler.event import Event, FinishedEvent, StartedEvent

_POLL_PERIOD = 2.0  # seconds
LSF_FAILED_JOB = SIGNAL_OFFSET + 65  # first non signal returncode
"""Return code we use when lsf reports failed jobs"""

logger = logging.getLogger(__name__)

JobState = Literal[
    "EXIT", "DONE", "PEND", "RUN", "ZOMBI", "PDONE", "SSUSP", "USUSP", "PSUSP", "UNKWN"
]


class IgnoredJobstates(BaseModel):
    job_state: Literal["UNKWN"]


class FinishedJobSuccess(BaseModel):
    job_state: Literal["DONE", "PDONE"]


class FinishedJobFailure(BaseModel):
    job_state: Literal["EXIT", "ZOMBI"]


class QueuedJob(BaseModel):
    job_state: Literal["PEND"]


class RunningJob(BaseModel):
    job_state: Literal["RUN", "SSUSP", "USUSP", "PSUSP"]


AnyJob = Annotated[
    Union[
        FinishedJobSuccess, FinishedJobFailure, QueuedJob, RunningJob, IgnoredJobstates
    ],
    Field(discriminator="job_state"),
]

_STATE_ORDER: dict[type[BaseModel], int] = {
    IgnoredJobstates: -1,
    QueuedJob: 0,
    RunningJob: 1,
    FinishedJobSuccess: 2,
    FinishedJobFailure: 2,
}

LSF_INFO_JSON_FILENAME = "lsf_info.json"
BSUB_FLAKY_SSH = 255


class _Stat(BaseModel):
    jobs: Mapping[str, AnyJob]


def parse_bjobs(bjobs_output: str) -> Dict[str, Dict[str, Dict[str, str]]]:
    data: Dict[str, Dict[str, str]] = {}
    for line in bjobs_output.splitlines():
        if not line or not line[0].isdigit():
            continue
        tokens = line.split(maxsplit=3)
        if len(tokens) >= 3 and tokens[0] and tokens[2]:
            if tokens[2] not in get_args(JobState):
                logger.error(
                    f"Unknown state {tokens[2]} obtained from "
                    f"LSF for jobid {tokens[0]}, ignored."
                )
                continue
            data[tokens[0]] = {"job_state": tokens[2]}
    return {"jobs": data}


def parse_bhist(bhist_output: str) -> Dict[str, Dict[str, int]]:
    data: Dict[str, Dict[str, int]] = {}
    for line in bhist_output.splitlines():
        if line.startswith("Summary of time"):
            assert "in seconds" in line
        if not line or not line[0].isdigit():
            continue
        tokens = line.split()
        try:
            # The bhist output has data in 10 columns in fixed positions,
            # with spaces possible in field 3. Since `split()` is used
            # to parse the output, we branch on the number of tokens found.
            if len(tokens) > 10:
                data[tokens[0]] = {
                    "pending_seconds": int(tokens[-7]),
                    "running_seconds": int(tokens[-5]),
                }
            elif len(tokens) >= 6 and tokens[0] and tokens[3] and tokens[5]:
                data[tokens[0]] = {
                    "pending_seconds": int(tokens[3]),
                    "running_seconds": int(tokens[5]),
                }
            else:
                logger.warning(f'bhist parser could not parse "{line}"')
        except ValueError as err:
            logger.warning(f'bhist parser could not parse "{line}", "{err}"')
            continue
    return data


class LsfDriver(Driver):
    def __init__(
        self,
        queue_name: Optional[str] = None,
        resource_requirement: Optional[str] = None,
        bsub_cmd: Optional[str] = None,
        bjobs_cmd: Optional[str] = None,
        bkill_cmd: Optional[str] = None,
        bhist_cmd: Optional[str] = None,
    ) -> None:
        super().__init__()

        self._queue_name = queue_name
        self._resource_requirement = resource_requirement or ""

        self._bsub_cmd = Path(bsub_cmd or shutil.which("bsub") or "bsub")
        self._bjobs_cmd = Path(bjobs_cmd or shutil.which("bjobs") or "bjobs")
        self._bkill_cmd = Path(bkill_cmd or shutil.which("bkill") or "bkill")

        self._jobs: MutableMapping[str, Tuple[int, AnyJob]] = {}
        self._iens2jobid: MutableMapping[int, str] = {}
        self._max_attempt: int = 100
        self._sleep_time_between_bkills = 30
        self._sleep_time_between_cmd_retries = 3
        self._bsub_retries = 10

        self._poll_period = _POLL_PERIOD

        self._bhist_cmd = Path(bhist_cmd or shutil.which("bhist") or "bhist")
        self._bhist_cache: Optional[Dict[str, Dict[str, int]]] = None
        self._bhist_required_cache_age: float = 4
        self._bhist_cache_timestamp: float = time.time()

    async def submit(
        self,
        iens: int,
        executable: str,
        /,
        *args: str,
        name: str = "dummy",
        runpath: Optional[Path] = None,
    ) -> None:
        if runpath is None:
            runpath = Path.cwd()

        arg_queue_name = ["-q", self._queue_name] if self._queue_name else []

        script = (
            "#!/usr/bin/env bash\n"
            f"cd {shlex.quote(str(runpath))}\n"
            f"exec -a {shlex.quote(executable)} {executable} {shlex.join(args)}\n"
        )
        script_path: Optional[Path] = None
        with tempfile.NamedTemporaryFile(
            dir=runpath,
            prefix=".lsf_submit_",
            suffix=".sh",
            mode="w",
            encoding="utf-8",
            delete=False,
        ) as script_handle:
            script_handle.write(script)
            script_path = Path(script_handle.name)
        assert script_path is not None
        script_path.chmod(script_path.stat().st_mode | stat.S_IEXEC)
        arg_resource_requirement = (
            ["-R", self._resource_requirement] if self._resource_requirement else []
        )

        bsub_with_args: List[str] = (
            [str(self._bsub_cmd)]
            + arg_queue_name
            + arg_resource_requirement
            + ["-J", name, str(script_path), str(runpath)]
        )
        logger.debug(f"Submitting to LSF with command {shlex.join(bsub_with_args)}")
        process_success, process_message = await self._execute_with_retry(
            bsub_with_args,
            retry_codes=(BSUB_FLAKY_SSH,),
            retries=self._bsub_retries,
            retry_interval=self._sleep_time_between_cmd_retries,
        )
        if not process_success:
            raise RuntimeError(process_message)

        match = re.search("Job <([0-9]+)> is submitted to .*queue", process_message)
        if match is None:
            raise RuntimeError(f"Could not understand '{process_message}' from bsub")
        job_id = match[1]
        logger.info(f"Realization {iens} accepted by LSF, got id {job_id}")

        (Path(runpath) / LSF_INFO_JSON_FILENAME).write_text(
            json.dumps({"job_id": job_id}), encoding="utf-8"
        )
        self._jobs[job_id] = (iens, QueuedJob(job_state="PEND"))
        self._iens2jobid[iens] = job_id

    async def kill(self, iens: int) -> None:
        if iens not in self._iens2jobid:
            logger.error(f"LSF kill failed due to missing jobid for realization {iens}")
            return

        job_id = self._iens2jobid[iens]

        logger.debug(f"Killing realization {iens} with LSF-id {job_id}")
        process = await asyncio.create_subprocess_exec(
            self._bkill_cmd,
            "-s",
            "SIGTERM",
            job_id,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        stdout, stderr = await process.communicate()
        _sigkill_process = subprocess.Popen(
            f"sleep {self._sleep_time_between_bkills}; {self._bkill_cmd} -s SIGKILL {job_id}",
            shell=True,
            start_new_session=True,
        )
        if process.returncode:
            logger.error(
                f"LSF kill failed with returncode {process.returncode} "
                f"and error message {stderr.decode(errors='ignore')}"
            )
            return

        if not re.match(
            f"Job <{job_id}> is being terminated", stdout.decode(errors="ignore")
        ):
            logger.error(
                "LSF kill failed with stdout: "
                + stdout.decode(errors="ignore")
                + " and stderr: "
                + stderr.decode(errors="ignore")
            )
            return

    async def poll(self) -> None:
        while True:
            if not self._jobs.keys():
                await asyncio.sleep(self._poll_period)
                continue
            current_jobids = list(self._jobs.keys())
            process = await asyncio.create_subprocess_exec(
                self._bjobs_cmd,
                *current_jobids,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )

            stdout, stderr = await process.communicate()
            if process.returncode:
                # bjobs may give nonzero return code even when it is providing
                # at least some correct information
                logger.warning(
                    f"bjobs gave returncode {process.returncode} and error {stderr.decode()}"
                )
            bjobs_states = _Stat(**parse_bjobs(stdout.decode(errors="ignore")))

            if missing_in_bjobs_output := set(current_jobids) - set(
                bjobs_states.jobs.keys()
            ):
                logger.debug(f"bhist is used for job ids: {missing_in_bjobs_output}")
                bhist_states = await self._poll_once_by_bhist(missing_in_bjobs_output)
                missing_in_bhist_and_bjobs = missing_in_bjobs_output - set(
                    bhist_states.jobs.keys()
                )
            else:
                bhist_states = _Stat(**{"jobs": {}})
                missing_in_bhist_and_bjobs = set()

            for job_id, job in itertools.chain(
                bjobs_states.jobs.items(), bhist_states.jobs.items()
            ):
                await self._process_job_update(job_id, job)

            if missing_in_bhist_and_bjobs and self._bhist_cache is not None:
                logger.debug(
                    f"bhist did not give status for job_ids {missing_in_bhist_and_bjobs}, giving up for now."
                )
            await asyncio.sleep(self._poll_period)

    async def _process_job_update(self, job_id: str, new_state: AnyJob) -> None:
        if job_id not in self._jobs:
            return

        iens, old_state = self._jobs[job_id]
        if isinstance(new_state, IgnoredJobstates):
            logger.debug(
                f"Job ID '{job_id}' for {iens=} is of unknown job state '{new_state.job_state}'"
            )
            return

        if _STATE_ORDER[type(new_state)] <= _STATE_ORDER[type(old_state)]:
            return

        self._jobs[job_id] = (iens, new_state)
        event: Optional[Event] = None
        if isinstance(new_state, RunningJob):
            logger.debug(f"Realization {iens} is running")
            event = StartedEvent(iens=iens)
        elif isinstance(new_state, FinishedJobFailure):
            logger.debug(
                f"Realization {iens} (LSF-id: {self._iens2jobid[iens]}) failed"
            )
            event = FinishedEvent(iens=iens, returncode=LSF_FAILED_JOB)

        elif isinstance(new_state, FinishedJobSuccess):
            logger.debug(
                f"Realization {iens} (LSF-id: {self._iens2jobid[iens]}) succeeded"
            )
            event = FinishedEvent(iens=iens, returncode=0)

        if event:
            if isinstance(event, FinishedEvent):
                del self._jobs[job_id]
                del self._iens2jobid[iens]
            await self.event_queue.put(event)

    async def _poll_once_by_bhist(self, missing_job_ids: Iterable[str]) -> _Stat:
        if time.time() - self._bhist_cache_timestamp < self._bhist_required_cache_age:
            return _Stat(**{"jobs": {}})

        process = await asyncio.create_subprocess_exec(
            self._bhist_cmd,
            *[str(job_id) for job_id in missing_job_ids],
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
        )
        stdout, stderr = await process.communicate()
        if process.returncode:
            logger.error(
                f"bhist gave returncode {process.returncode} and error {stderr.decode()}"
            )
            return _Stat(**{"jobs": {}})

        data: Dict[str, Dict[str, int]] = parse_bhist(stdout.decode())

        if not self._bhist_cache:
            # Boot-strapping. We can't give any data until we have run again.
            self._bhist_cache = data
            return _Stat(**{"jobs": {}})

        jobs = {}
        for job_id, job_stat in data.items():
            if job_id not in self._bhist_cache:
                continue
            if (
                job_stat["pending_seconds"]
                == self._bhist_cache[job_id]["pending_seconds"]
                and job_stat["running_seconds"]
                == self._bhist_cache[job_id]["running_seconds"]
            ):
                jobs[job_id] = {"job_state": "DONE"}  # or EXIT, we can't tell
            elif (
                job_stat["running_seconds"]
                > self._bhist_cache[job_id]["running_seconds"]
            ):
                jobs[job_id] = {"job_state": "RUN"}
            elif (
                job_stat["pending_seconds"]
                > self._bhist_cache[job_id]["pending_seconds"]
            ):
                jobs[job_id] = {"job_state": "PEND"}
        self._bhist_cache = data
        self._bhist_cache_timestamp = time.time()
        return _Stat(**{"jobs": jobs})

    async def finish(self) -> None:
        pass
