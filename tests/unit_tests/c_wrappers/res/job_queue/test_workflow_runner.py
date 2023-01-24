import os.path
from unittest.mock import patch

import pytest

from ert._c_wrappers.job_queue import Workflow, WorkflowJob, WorkflowRunner
from ert._c_wrappers.util.substitution_list import SubstitutionList
from tests.utils import wait_until

from .workflow_common import WorkflowCommon


@pytest.mark.usefixtures("use_tmpdir")
def test_workflow_thread_cancel_ert_script():
    WorkflowCommon.createWaitJob()

    wait_job = WorkflowJob.fromFile("wait_job", name="WAIT")

    workflow = Workflow("wait_workflow", {"WAIT": wait_job})

    assert len(workflow) == 3

    workflow_runner = WorkflowRunner(workflow)

    assert not workflow_runner.isRunning()

    with workflow_runner:
        assert workflow_runner.workflowResult() is None

        wait_until(workflow_runner.isRunning)
        wait_until(lambda: os.path.exists("wait_started_0"))

        wait_until(lambda: os.path.exists("wait_finished_0"))

        wait_until(lambda: os.path.exists("wait_started_1"))

        workflow_runner.cancel()

        wait_until(lambda: os.path.exists("wait_cancelled_1"))

        assert workflow_runner.isCancelled()

    assert not os.path.exists("wait_finished_1")
    assert not os.path.exists("wait_started_2")
    assert not os.path.exists("wait_cancelled_2")
    assert not os.path.exists("wait_finished_2")


@pytest.mark.usefixtures("use_tmpdir")
def test_workflow_thread_cancel_external():
    WorkflowCommon.createWaitJob()

    wait_job = WorkflowJob.fromFile(
        name="WAIT",
        config_file="wait_job",
    )
    workflow = Workflow("wait_workflow", {"WAIT": wait_job})

    assert len(workflow) == 3

    workflow_runner = WorkflowRunner(workflow, ert=None, context=SubstitutionList())

    assert not workflow_runner.isRunning()

    with workflow_runner:
        wait_until(workflow_runner.isRunning)
        wait_until(lambda: os.path.exists("wait_started_0"))
        wait_until(lambda: os.path.exists("wait_finished_0"))
        wait_until(lambda: os.path.exists("wait_started_1"))
        workflow_runner.cancel()
        assert workflow_runner.isCancelled()

    assert not os.path.exists("wait_finished_1")
    assert not os.path.exists("wait_started_2")
    assert not os.path.exists("wait_cancelled_2")
    assert not os.path.exists("wait_finished_2")


@pytest.mark.usefixtures("use_tmpdir")
def test_workflow_failed_job():
    WorkflowCommon.createExternalDumpJob()

    dump_job = WorkflowJob.fromFile(
        name="DUMP",
        config_file="dump_job",
    )
    workflow = Workflow("dump_workflow", {"DUMP": dump_job})
    assert len(workflow) == 2

    workflow_runner = WorkflowRunner(workflow, ert=None, context=SubstitutionList())

    assert not workflow_runner.isRunning()
    with patch.object(
        Workflow, "run", side_effect=Exception("mocked workflow error")
    ), workflow_runner:
        workflow_runner.wait()
        assert workflow_runner.exception() is not None


@pytest.mark.usefixtures("use_tmpdir")
def test_workflow_success():
    WorkflowCommon.createWaitJob()

    external_job = WorkflowJob.fromFile(
        name="EXTERNAL_WAIT", config_file="external_wait_job"
    )
    wait_job = WorkflowJob.fromFile(
        name="WAIT",
        config_file="wait_job",
    )
    workflow = Workflow(
        "fast_wait_workflow", {"WAIT": wait_job, "EXTERNAL_WAIT": external_job}
    )

    assert len(workflow) == 2

    workflow_runner = WorkflowRunner(workflow, ert=None, context=SubstitutionList())

    assert not workflow_runner.isRunning()
    with workflow_runner:
        workflow_runner.wait()
    assert os.path.exists("wait_started_0")
    assert not os.path.exists("wait_cancelled_0")
    assert os.path.exists("wait_finished_0")

    assert os.path.exists("wait_started_1")
    assert not os.path.exists("wait_cancelled_1")
    assert os.path.exists("wait_finished_1")

    assert workflow_runner.workflowResult()
