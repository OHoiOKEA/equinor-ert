import os
import shlex
import stat
from pathlib import Path
from typing import Dict, List

import pytest
from hypothesis import given
from hypothesis import strategies as st

from ert.scheduler import OpenPBSDriver
from ert.scheduler.openpbs_driver import (
    JOBSTATE_INITIAL,
    FinishedEvent,
    StartedEvent,
    _Stat,
)


@given(st.lists(st.sampled_from(["H", "Q", "R", "F"])))
async def test_events_produced_from_jobstate_updates(jobstate_sequence: List[str]):
    # Determine what to expect from the sequence:
    started = False
    finished = False
    if "R" in jobstate_sequence:
        started = True
    if "F" in jobstate_sequence:
        finished = True

    driver = OpenPBSDriver()

    async def mocked_submit(self, iens, *_args, **_kwargs):
        """A mocked submit is speedier than going through a command on disk"""
        self._jobs["1"] = (iens, JOBSTATE_INITIAL)
        self._iens2jobid[iens] = "1"

    driver.submit = mocked_submit.__get__(driver)
    await driver.submit(0, "_")

    for statestr in jobstate_sequence:
        jobstate = _Stat(
            **{"Jobs": {"1": {"job_state": statestr, "Exit_status": 0}}}
        ).jobs["1"]
        await driver._process_job_update("1", jobstate)

    events = []
    while not driver.event_queue.empty():
        events.append(await driver.event_queue.get())

    if started is False and finished is False:
        assert len(events) == 0
        assert driver._jobs["1"] in [(0, "Q"), (0, "H")]
    elif started is True and finished is False:
        assert len(events) == 1
        assert events[0] == StartedEvent(iens=0)
        assert driver._jobs["1"] == (0, "R")
    elif started is True and finished is True:
        assert len(events) <= 2  # The StartedEvent is not required
        assert events[-1] == FinishedEvent(iens=0, returncode=0)
        assert "1" not in driver._jobs


words = st.text(
    min_size=0, max_size=8, alphabet=st.characters(min_codepoint=65, max_codepoint=90)
)


@pytest.fixture
def capturing_qsub(monkeypatch, tmp_path):
    os.chdir(tmp_path)
    bin_path = tmp_path / "bin"
    bin_path.mkdir()
    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    qsub_path = bin_path / "qsub"
    qsub_path.write_text(
        "#!/bin/sh\necho $@ > captured_qsub_args; echo '1'", encoding="utf-8"
    )
    qsub_path.chmod(qsub_path.stat().st_mode | stat.S_IEXEC)


def parse_resource_string(qsub_args: str) -> Dict[str, str]:
    if " -l " not in qsub_args:
        return {}
    args = shlex.split(qsub_args)
    resource_string = args[args.index("-l") + 1]
    resources = {}
    for key_value in resource_string.split(":"):
        key, value = key_value.split("=")
        resources[key] = value
    return resources


@pytest.mark.usefixtures("capturing_qsub")
async def test_memory_per_job():
    driver = OpenPBSDriver(memory_per_job="10gb")
    await driver.submit(0, "sleep")
    assert " -l mem=10gb " in Path("captured_qsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_qsub")
async def test_no_default_memory_per_job():
    driver = OpenPBSDriver()
    await driver.submit(0, "sleep")
    assert " -l " not in Path("captured_qsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_qsub")
async def test_no_validation_of_memory_per_job():
    # Validation will happen during config parsing
    driver = OpenPBSDriver(memory_per_job="a_lot")
    await driver.submit(0, "sleep")
    assert " -l mem=a_lot " in Path("captured_qsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_qsub")
async def test_job_name():
    driver = OpenPBSDriver()
    await driver.submit(0, "sleep", name="sleepy")
    assert " -Nsleepy " in Path("captured_qsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_qsub")
async def test_job_name_with_prefix():
    driver = OpenPBSDriver(job_prefix="pre_")
    await driver.submit(0, "sleep", name="sleepy")
    assert " -Npre_sleepy " in Path("captured_qsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_qsub")
async def test_num_nodes():
    driver = OpenPBSDriver(num_nodes=2)
    await driver.submit(0, "sleep")
    resources = parse_resource_string(
        Path("captured_qsub_args").read_text(encoding="utf-8")
    )
    assert resources["nodes"] == "2"


@pytest.mark.usefixtures("capturing_qsub")
async def test_num_nodes_default():
    # This is the driver default, Ert can fancy a different default
    driver = OpenPBSDriver()
    await driver.submit(0, "sleep")
    resources = parse_resource_string(
        Path("captured_qsub_args").read_text(encoding="utf-8")
    )
    assert "nodes" not in resources


@pytest.mark.usefixtures("capturing_qsub")
async def test_num_cpus_per_node():
    driver = OpenPBSDriver(num_cpus_per_node=2)
    await driver.submit(0, "sleep")
    resources = parse_resource_string(
        Path("captured_qsub_args").read_text(encoding="utf-8")
    )
    assert resources["ppn"] == "2"


@pytest.mark.usefixtures("capturing_qsub")
async def test_num_cpus_per_node_default():
    driver = OpenPBSDriver()
    await driver.submit(0, "sleep")
    resources = parse_resource_string(
        Path("captured_qsub_args").read_text(encoding="utf-8")
    )
    assert "ppn" not in resources


@given(words, st.integers(min_value=0), st.integers(min_value=0))
@pytest.mark.usefixtures("capturing_qsub")
async def test_full_resource_string(memory_per_job, num_nodes, num_cpus_per_node):
    driver = OpenPBSDriver(
        memory_per_job=memory_per_job if memory_per_job else None,
        num_nodes=num_nodes if num_nodes > 0 else None,
        num_cpus_per_node=num_cpus_per_node if num_cpus_per_node > 0 else None,
    )
    await driver.submit(0, "sleep")
    resources = parse_resource_string(
        Path("captured_qsub_args").read_text(encoding="utf-8")
    )
    assert resources.get("mem", "") == memory_per_job
    assert resources.get("nodes", "0") == str(num_nodes)
    assert resources.get("ppn", "0") == str(num_cpus_per_node)
    # "0" here is a test implementation detail, not related to driver

    assert len(resources) == sum(
        [bool(memory_per_job), bool(num_cpus_per_node), bool(num_nodes)]
    ), "Unknown resources injected in resource string"
