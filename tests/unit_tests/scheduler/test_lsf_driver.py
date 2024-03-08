import asyncio
import os
import stat
from contextlib import ExitStack as does_not_raise
from pathlib import Path
from typing import Collection, get_args

import pytest
from hypothesis import given
from hypothesis import strategies as st
from tests.utils import poll

from ert.scheduler import LsfDriver
from ert.scheduler.lsf_driver import JobState, parse_bjobs

valid_jobstates: Collection[str] = list(get_args(JobState))


def nonempty_string_without_whitespace():
    return st.text(
        st.characters(whitelist_categories=("Lu", "Ll", "Nd", "P")), min_size=1
    )


@pytest.fixture
def capturing_bsub(monkeypatch, tmp_path):
    os.chdir(tmp_path)
    bin_path = tmp_path / "bin"
    bin_path.mkdir()
    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    bsub_path = bin_path / "bsub"
    bsub_path.write_text(
        "#!/bin/sh\n"
        "echo $@ > captured_bsub_args\n"
        "echo 'Job <1>' is submitted to normal queue",
        encoding="utf-8",
    )
    bsub_path.chmod(bsub_path.stat().st_mode | stat.S_IEXEC)


@pytest.mark.usefixtures("capturing_bsub")
async def test_submit_with_named_queue():
    driver = LsfDriver(queue_name="foo")
    await driver.submit(0, "sleep")
    assert "-q foo" in Path("captured_bsub_args").read_text(encoding="utf-8")


@pytest.mark.usefixtures("capturing_bsub")
async def test_submit_with_default_queue():
    driver = LsfDriver()
    await driver.submit(0, "sleep")
    assert "-q" not in Path("captured_bsub_args").read_text(encoding="utf-8")


@pytest.mark.parametrize(
    "bsub_script, expectation",
    [
        pytest.param(
            "echo 'Job <444> is submitted to default queue'",
            does_not_raise(),
            id="all-good",
        ),
        pytest.param(
            "echo 'Job <444> is subtted to default queue'",
            pytest.raises(RuntimeError, match="subtte"),
            id="typo_from_bsub",
        ),
        pytest.param(
            "echo 'Job <0> is submitted to default queue'",
            does_not_raise(),
            id="zero_job_id",
        ),
        pytest.param(
            "echo 'Job <-1> is submitted to default queue'",
            pytest.raises(RuntimeError, match="Could not understand"),
            id="negative_job_id",
        ),
        pytest.param(
            "echo 'Job <fuzz> is submitted to default queue'",
            pytest.raises(RuntimeError, match="Could not understand"),
            id="non_number_job_id",
        ),
        pytest.param(
            "echo 'Job <1.4> is submitted to default queue'",
            pytest.raises(RuntimeError, match="Could not understand"),
            id="floating_job_id",
        ),
        pytest.param("exit 1", pytest.raises(RuntimeError), id="plain_exit_1"),
        pytest.param(
            "echo no_go >&2; exit 1",
            pytest.raises(RuntimeError, match="no_go"),
            id="exit_with_stderr",
        ),
        pytest.param(
            "exit 0", pytest.raises(RuntimeError), id="exit_0_but_empty_stdout"
        ),
    ],
)
async def test_faulty_bsub(monkeypatch, tmp_path, bsub_script, expectation):
    bin_path = tmp_path / "bin"
    bin_path.mkdir()
    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    bsub_path = bin_path / "bsub"
    bsub_path.write_text(f"#!/bin/sh\n{bsub_script}")
    bsub_path.chmod(bsub_path.stat().st_mode | stat.S_IEXEC)
    driver = LsfDriver()
    with expectation:
        await driver.submit(0, "sleep")


@pytest.mark.parametrize(
    "mocked_iens2jobid, iens_to_kill, bkill_returncode, bkill_stdout, bkill_stderr, expected_logged_error",
    [
        pytest.param(
            {"1": "11"},
            "1",
            0,
            "Job <11> is being terminated",
            "",
            None,
            id="happy_path",
        ),
        pytest.param(
            {"1": "11"},
            "2",
            1,
            "",
            "",
            "LSF kill failed due to missing",
            id="internal_ert_error",
        ),
        pytest.param(
            {"1": "11"},
            "1",
            255,
            "",
            "Job <22>: No matching job found",
            "No matching job found",
            id="inconsistency_ert_vs_lsf",
        ),
        pytest.param(
            {"1": "11"},
            "1",
            0,
            "wrong_stdout...",
            "",
            "wrong_stdout...",
            id="artifical_bkill_stdout_giving_logged_error",
        ),
        pytest.param(
            {"1": "11"},
            "1",
            0,
            "",
            "wrong_on_stderr",
            "wrong_on_stderr",
            id="artifical_bkill_stderr_giving_logged_error",
        ),
        pytest.param(
            {"1": "11"},
            "1",
            1,
            "",
            "wrong_on_stderr",
            "wrong_on_stderr",
            id="artifical_bkill_stderr_and_returncode_giving_logged_error",
        ),
    ],
)
async def test_kill(
    monkeypatch,
    tmp_path,
    mocked_iens2jobid,
    iens_to_kill,
    bkill_returncode,
    bkill_stdout,
    bkill_stderr,
    expected_logged_error,
    caplog,
):
    os.chdir(tmp_path)
    bin_path = tmp_path / "bin"
    bin_path.mkdir()
    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    bkill_path = bin_path / "bkill"
    bkill_path.write_text(
        f"#!/bin/sh\necho '{bkill_stdout}'\n"
        f"echo '{bkill_stderr}' >&2\n"
        f"echo $@ > 'bkill_args'\n"
        f"exit {bkill_returncode}",
        encoding="utf-8",
    )
    bkill_path.chmod(bkill_path.stat().st_mode | stat.S_IEXEC)

    driver = LsfDriver()

    driver._iens2jobid = mocked_iens2jobid
    await driver.kill(iens_to_kill)
    if expected_logged_error:
        assert expected_logged_error in caplog.text
    else:
        assert (
            mocked_iens2jobid[iens_to_kill]
            == Path("bkill_args").read_text(encoding="utf-8").strip()
        )


@given(st.text())
def test_parse_bjobs_gives_empty_result_on_random_input(some_text):
    assert parse_bjobs(some_text) == {"jobs": {}}


@pytest.mark.parametrize(
    "bjobs_output, expected",
    [
        pytest.param(
            "JOBID   USER   STAT\n1 foobart RUN",
            {"1": {"job_state": "RUN"}},
            id="basic",
        ),
        pytest.param(
            "1 foobart RUN", {"1": {"job_state": "RUN"}}, id="header_missing_ok"
        ),
        pytest.param(
            "1 _ RUN asdf asdf asdf",
            {"1": {"job_state": "RUN"}},
            id="line_remainder_ignored",
        ),
        pytest.param("1 _ DONE", {"1": {"job_state": "DONE"}}, id="done"),
        pytest.param(
            "1 _ DONE\n2 _ RUN",
            {"1": {"job_state": "DONE"}, "2": {"job_state": "RUN"}},
            id="two_jobs",
        ),
    ],
)
def test_parse_bjobs_happy_path(bjobs_output, expected):
    assert parse_bjobs(bjobs_output) == {"jobs": expected}


@given(
    st.integers(min_value=1),
    nonempty_string_without_whitespace(),
    st.from_type(JobState),
)
def test_parse_bjobs(job_id, username, job_state):
    assert parse_bjobs(f"{job_id} {username} {job_state}") == {
        "jobs": {str(job_id): {"job_state": job_state}}
    }


@given(nonempty_string_without_whitespace().filter(lambda x: x not in valid_jobstates))
def test_parse_bjobs_invalid_state_is_ignored(random_state):
    assert parse_bjobs(f"1 _ {random_state}") == {"jobs": {}}


def test_parse_bjobs_invalid_state_is_logged(caplog):
    # (cannot combine caplog with hypothesis)
    parse_bjobs("1 _ FOO")
    assert "Unknown state FOO" in caplog.text


BJOBS_HEADER = (
    "JOBID   USER    STAT  QUEUE      FROM_HOST   EXEC_HOST   JOB_NAME   SUBMIT_TIME"
)


@pytest.mark.parametrize(
    "bjobs_script, expectation",
    [
        pytest.param(
            f"echo '{BJOBS_HEADER}\n1 someuser DONE foo'; exit 0",
            does_not_raise(),
            id="all-good",
        ),
        pytest.param(
            "echo 'No unfinished job found'; exit 0",
            pytest.raises(asyncio.TimeoutError),
            id="empty_cluster",
        ),
        pytest.param(
            "echo 'Job <1> is not found' >&2; exit 0",
            # Actual command is seen to return zero in such a scenario
            pytest.raises(asyncio.TimeoutError),
            id="empty_cluster_specific_id",
        ),
        pytest.param(
            "echo '1 someuser DONE foo'",
            does_not_raise(),
            id="missing_header_is_accepted",  # (debatable)
        ),
        pytest.param(
            f"echo '{BJOBS_HEADER}\n1 someuser DONE foo'; "
            "echo 'Job <2> is not found' >&2 ; exit 255",
            # If we have some success and some failures, actual command returns 255
            does_not_raise(),
            id="error_for_irrelevant_job_id",
        ),
        pytest.param(
            f"echo '{BJOBS_HEADER}\n2 someuser DONE foo'",
            pytest.raises(asyncio.TimeoutError),
            id="wrong-job-id",
        ),
        pytest.param(
            "exit 1",
            pytest.raises(asyncio.TimeoutError),
            id="exit-1",
        ),
        pytest.param(
            f"echo '{BJOBS_HEADER}\n1 someuser DONE foo'; exit 1",
            # (this is not observed in reality)
            does_not_raise(),
            id="correct_output_but_exitcode_1",
        ),
        pytest.param(
            f"echo '{BJOBS_HEADER}\n1 someuser'; exit 0",
            pytest.raises(asyncio.TimeoutError),
            id="unparsable_output",
        ),
    ],
)
async def test_faulty_bjobs(monkeypatch, tmp_path, bjobs_script, expectation):
    bin_path = tmp_path / "bin"
    bin_path.mkdir()
    monkeypatch.setenv("PATH", f"{bin_path}:{os.environ['PATH']}")
    bsub_path = bin_path / "bsub"
    bsub_path.write_text("#!/bin/sh\necho 'Job <1> is submitted to default queue'")
    bsub_path.chmod(bsub_path.stat().st_mode | stat.S_IEXEC)
    bjobs_path = bin_path / "bjobs"
    bjobs_path.write_text(f"#!/bin/sh\n{bjobs_script}")
    bjobs_path.chmod(bjobs_path.stat().st_mode | stat.S_IEXEC)
    driver = LsfDriver()
    with expectation:
        await driver.submit(0, "sleep")
        await asyncio.wait_for(poll(driver, {0}), timeout=0.2)
