import logging


def execute_workflow(ert, workflow_name):
    logger = logging.getLogger(__name__)
    workflow_list = ert.getWorkflowList()
    try:
        workflow = workflow_list[workflow_name]
    except KeyError:
        msg = "Workflow {} is not in the list of available workflows"
        logger.error(msg.format(workflow_name))
        return
    context = ert.get_context()
    workflow.run(ert=ert, verbose=True, context=context)
    if not all(v["completed"] for v in workflow.getJobsReport().values()):
        logger.error(f"Workflow {workflow_name} failed!")
