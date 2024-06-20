from ert.enum_shim import StrEnum


class ConfigKeys(StrEnum):
    """
    Keywords that are the first word of each statement in the user config file.
    """

    DEFINE = "DEFINE"
    INCLUDE = "INCLUDE"
    ANALYSIS_SET_VAR = "ANALYSIS_SET_VAR"
    DATA_ROOT = "DATA_ROOT"
    DATA_FILE = "DATA_FILE"
    DATA_KW = "DATA_KW"
    ECLBASE = "ECLBASE"
    ENKF_ALPHA = "ENKF_ALPHA"
    ENSPATH = "ENSPATH"
    ITER_CASE = "ITER_CASE"
    ITER_COUNT = "ITER_COUNT"
    ITER_RETRY_COUNT = "ITER_RETRY_COUNT"
    FIELD = "FIELD"
    FORWARD_MODEL = "FORWARD_MODEL"
    GEN_DATA = "GEN_DATA"
    GEN_KW = "GEN_KW"
    GEN_KW_EXPORT_NAME = "GEN_KW_EXPORT_NAME"
    GRID = "GRID"
    HISTORY_SOURCE = "HISTORY_SOURCE"
    INSTALL_JOB = "INSTALL_JOB"
    INSTALL_JOB_DIRECTORY = "INSTALL_JOB_DIRECTORY"
    JOB_SCRIPT = "JOB_SCRIPT"
    JOBNAME = "JOBNAME"
    MAX_SUBMIT = "MAX_SUBMIT"
    NUM_REALIZATIONS = "NUM_REALIZATIONS"
    MIN_REALIZATIONS = "MIN_REALIZATIONS"
    OBS_CONFIG = "OBS_CONFIG"
    QUEUE_SYSTEM = "QUEUE_SYSTEM"
    QUEUE_OPTION = "QUEUE_OPTION"
    HOOK_WORKFLOW = "HOOK_WORKFLOW"
    REFCASE = "REFCASE"
    RUNPATH_FILE = "RUNPATH_FILE"
    RUNPATH = "RUNPATH"
    RUN_TEMPLATE = "RUN_TEMPLATE"
    SCHEDULE_PREDICTION_FILE = "SCHEDULE_PREDICTION_FILE"
    SETENV = "SETENV"
    SIMULATION_JOB = "SIMULATION_JOB"
    STD_CUTOFF = "STD_CUTOFF"
    SUMMARY = "SUMMARY"
    SURFACE = "SURFACE"
    UPDATE_LOG_PATH = "UPDATE_LOG_PATH"
    RANDOM_SEED = "RANDOM_SEED"
    WORKFLOW_JOB_DIRECTORY = "WORKFLOW_JOB_DIRECTORY"
    LOAD_WORKFLOW = "LOAD_WORKFLOW"
    LOAD_WORKFLOW_JOB = "LOAD_WORKFLOW_JOB"
    STOP_LONG_RUNNING = "STOP_LONG_RUNNING"
    MAX_RUNTIME = "MAX_RUNTIME"
    TIME_MAP = "TIME_MAP"
    NUM_CPU = "NUM_CPU"
    CONFIG_DIRECTORY = "CONFIG_DIRECTORY"
    SUBMIT_SLEEP = "SUBMIT_SLEEP"
