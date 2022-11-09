#include <ert/enkf/config_keys.hpp>
#include <ert/python.hpp>
#include <pybind11/pytypes.h>

ERT_CLIB_SUBMODULE("config_keys", m) {
    struct ConfigKeys {};

    py::class_<ConfigKeys> cls(m, "ConfigKeys");

    cls.attr("ALPHA_KEY") = ENKF_ALPHA_KEY;
    cls.attr("ANALYSIS_COPY") = ANALYSIS_COPY_KEY;
    cls.attr("ANALYSIS_SELECT") = ANALYSIS_SELECT_KEY;
    cls.attr("ANALYSIS_SET_VAR") = ANALYSIS_SET_VAR_KEY;
    cls.attr("ARGLIST") = "ARGLIST";
    cls.attr("BASE_SURFACE_KEY") = BASE_SURFACE_KEY;
    cls.attr("CONFIG_DIRECTORY") = CONFIG_DIRECTORY_KEY;
    cls.attr("DATAROOT") = DATA_ROOT_KEY;
    cls.attr("DATA_FILE") = DATA_FILE_KEY;
    cls.attr("DATA_KW_KEY") = DATA_KW_KEY;
    cls.attr("DEFINES") = "DEFINES";
    cls.attr("DEFINE_KEY") = DEFINE_KEY;
    cls.attr("DRIVER_NAME") = "DRIVER_NAME";
    cls.attr("DST_NAME") = "DST_NAME";
    cls.attr("ECLBASE") = ECLBASE_KEY;
    cls.attr("ENKF_INFILE") = "ENKF_INFILE";
    cls.attr("ENSPATH") = ENSPATH_KEY;
    cls.attr("EXPORT") = "EXPORT";
    cls.attr("FIELD_KEY") = FIELD_KEY;
    cls.attr("FORWARD_INIT") = FORWARD_INIT_KEY;
    cls.attr("FORWARD_MODEL") = FORWARD_MODEL_KEY;
    cls.attr("GENERAL_KEY") = GENERAL_KEY;
    cls.attr("GEN_DATA") = GEN_DATA_KEY;
    cls.attr("GEN_KW") = GEN_KW_KEY;
    cls.attr("GEN_KW_EXPORT_NAME") = GEN_KW_EXPORT_NAME_KEY;
    cls.attr("GEN_KW_TAG_FORMAT") = GEN_KW_TAG_FORMAT_KEY;
    cls.attr("GLOBAL_STD_SCALING") = "GLOBAL_STD_SCALING";
    cls.attr("GRID") = GRID_KEY;
    cls.attr("HISTORY_SOURCE") = HISTORY_SOURCE_KEY;
    cls.attr("HOOK_WORKFLOW_KEY") = HOOK_WORKFLOW_KEY;
    cls.attr("INIT_FILES") = INIT_FILES_KEY;
    cls.attr("INIT_TRANSFORM") = INIT_TRANSFORM_KEY;
    cls.attr("INPUT_FORMAT") = INPUT_FORMAT_KEY;
    cls.attr("INPUT_TRANSFORM") = INPUT_TRANSFORM_KEY;
    cls.attr("INSTALL_JOB") = INSTALL_JOB_KEY;
    cls.attr("INSTALL_JOB_DIRECTORY") = INSTALL_JOB_DIRECTORY_KEY;
    cls.attr("INTERNALS") = "INTERNALS";
    cls.attr("ITER_CASE") = ITER_CASE_KEY;
    cls.attr("ITER_COUNT") = ITER_COUNT_KEY;
    cls.attr("ITER_RETRY_COUNT") = ITER_RETRY_COUNT_KEY;
    cls.attr("JOBNAME") = JOBNAME_KEY;
    cls.attr("JOB_SCRIPT") = JOB_SCRIPT_KEY;
    cls.attr("LIB_NAME") = "LIB_NAME";
    cls.attr("LICENSE_PATH") = LICENSE_PATH_KEY;
    cls.attr("LOAD_WORKFLOW") = LOAD_WORKFLOW_KEY;
    cls.attr("LOAD_WORKFLOW_JOB") = LOAD_WORKFLOW_JOB_KEY;
    cls.attr("LOGGING") = "LOGGING";
    cls.attr("MAX_KEY") = MAX_KEY;
    cls.attr("MAX_RUNNING") = "MAX_RUNNING";
    cls.attr("MAX_RUNTIME") = MAX_RUNTIME_KEY;
    cls.attr("MAX_SUBMIT") = MAX_SUBMIT_KEY;
    cls.attr("MIN_KEY") = MIN_KEY;
    cls.attr("MIN_REALIZATIONS") = MIN_REALIZATIONS_KEY;
    cls.attr("MODULE_NAME") = "MODULE_NAME";
    cls.attr("NAME") = "NAME";
    cls.attr("NUM_CPU") = NUM_CPU_KEY;
    cls.attr("NUM_REALIZATIONS") = NUM_REALIZATIONS_KEY;
    cls.attr("OBS_CONFIG") = OBS_CONFIG_KEY;
    cls.attr("OPTION") = "OPTION";
    cls.attr("OUTPUT_TRANSFORM") = OUTPUT_TRANSFORM_KEY;
    cls.attr("OUT_FILE") = "OUT_FILE";
    cls.attr("PARAMETER_FILE") = "PARAMETER_FILE";
    cls.attr("PARAMETER_KEY") = PARAMETER_KEY;
    cls.attr("PATH") = "PATH";
    cls.attr("PRED_KEY") = PRED_KEY;
    cls.attr("QUEUE_OPTION") = QUEUE_OPTION_KEY;
    cls.attr("QUEUE_SYSTEM") = QUEUE_SYSTEM_KEY;
    cls.attr("RANDOM_SEED") = RANDOM_SEED_KEY;
    cls.attr("REFCASE") = REFCASE_KEY;
    cls.attr("REPORT_STEPS") = REPORT_STEPS_KEY;
    cls.attr("RERUN_KEY") = ENKF_RERUN_KEY;
    cls.attr("RERUN_START_KEY") = RERUN_START_KEY;
    cls.attr("RESULT_FILE") = RESULT_FILE_KEY;
    cls.attr("RUNMODE") = RUNMODE_KEY;
    cls.attr("RUNPATH") = RUNPATH_KEY;
    cls.attr("RUNPATH_FILE") = RUNPATH_FILE_KEY;
    cls.attr("RUNPATH_LIST_FILE") = ".ert_runpath_list";
    cls.attr("RUN_TEMPLATE") = RUN_TEMPLATE_KEY;
    cls.attr("SCHEDULE_PREDICTION_FILE") = SCHEDULE_PREDICTION_FILE_KEY;
    cls.attr("SEED") = "SEED";
    cls.attr("SETENV") = SETENV_KEY;
    cls.attr("SIMULATION") = "SIMULATION";
    // SIMULATION_JOB is a lightweight version of FORWARD_MODEL that allows passing
    // raw command line arguments to executable.
    // It is heavily used in Everest as the Everest configuration transpiles all jobs
    // into SIMULATION_JOB.
    cls.attr("SIMULATION_JOB") = SIMULATION_JOB_KEY;
    cls.attr("SLURM_EXCLUDE_HOST_OPTION") = SLURM_EXCLUDE_HOST_OPTION;
    cls.attr("SLURM_INCLUDE_HOST_OPTION") = SLURM_INCLUDE_HOST_OPTION;
    cls.attr("SLURM_MAX_RUNTIME_OPTION") = SLURM_MAX_RUNTIME_OPTION;
    cls.attr("SLURM_MEMORY_OPTION") = SLURM_MEMORY_OPTION;
    cls.attr("SLURM_MEMORY_PER_CPU_OPTION") = SLURM_MEMORY_PER_CPU_OPTION;
    cls.attr("SLURM_PARTITION_OPTION") = SLURM_PARTITION_OPTION;
    cls.attr("SLURM_SBATCH_OPTION") = SLURM_SBATCH_OPTION;
    cls.attr("SLURM_SCANCEL_OPTION") = SLURM_SCANCEL_OPTION;
    cls.attr("SLURM_SCONTROL_OPTION") = SLURM_SCONTROL_OPTION;
    cls.attr("SLURM_SQUEUE_OPTION") = SLURM_SQUEUE_OPTION;
    cls.attr("SLURM_SQUEUE_TIMEOUT_OPTION") = SLURM_SQUEUE_TIMEOUT_OPTION;
    cls.attr("SRC_NAME") = "SRC_NAME";
    cls.attr("STD_CUTOFF_KEY") = STD_CUTOFF_KEY;
    cls.attr("STOP_LONG_RUNNING") = STOP_LONG_RUNNING_KEY;
    cls.attr("SUMMARY") = SUMMARY_KEY;
    cls.attr("SURFACE_KEY") = SURFACE_KEY;
    cls.attr("TEMPLATE") = TEMPLATE_KEY;
    cls.attr("TIME_MAP") = TIME_MAP_KEY;
    cls.attr("UPDATE_LOG_PATH") = UPDATE_LOG_PATH_KEY;
    cls.attr("USER_NAME") = "USER_NAME";
    cls.attr("VALUE") = "VALUE";
    cls.attr("VAR_NAME") = "VAR_NAME";
    cls.attr("VAR_TYPE") = "VAR_TYPE";
    cls.attr("WORKFLOW_JOB_DIRECTORY") = WORKFLOW_JOB_DIRECTORY_KEY;
}
