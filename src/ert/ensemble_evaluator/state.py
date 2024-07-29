from typing import Final

ENSEMBLE_STATE_STARTED: Final = "Starting"
ENSEMBLE_STATE_STOPPED: Final = "Stopped"
ENSEMBLE_STATE_CANCELLED: Final = "Cancelled"
ENSEMBLE_STATE_FAILED: Final = "Failed"
ENSEMBLE_STATE_UNKNOWN: Final = "Unknown"

REALIZATION_STATE_WAITING: Final = "Waiting"
REALIZATION_STATE_PENDING: Final = "Pending"
REALIZATION_STATE_RUNNING: Final = "Running"
REALIZATION_STATE_FAILED: Final = "Failed"
REALIZATION_STATE_FINISHED: Final = "Finished"
REALIZATION_STATE_UNKNOWN: Final = "Unknown"

ALL_REALIZATION_STATES: Final = (
    REALIZATION_STATE_WAITING,
    REALIZATION_STATE_PENDING,
    REALIZATION_STATE_RUNNING,
    REALIZATION_STATE_FAILED,
    REALIZATION_STATE_FINISHED,
    REALIZATION_STATE_UNKNOWN,
)

FORWARD_MODEL_STATE_START: Final = "Pending"
FORWARD_MODEL_STATE_RUNNING: Final = "Running"
FORWARD_MODEL_STATE_FINISHED: Final = "Finished"
FORWARD_MODEL_STATE_FAILURE: Final = "Failed"

COLOR_WAITING: Final = (164, 200, 255)
COLOR_PENDING: Final = (190, 174, 212)
COLOR_RUNNING: Final = (255, 255, 153)
COLOR_FAILED: Final = (255, 200, 200)
COLOR_UNKNOWN: Final = (128, 128, 128)
COLOR_FINISHED: Final = (127, 201, 127)
COLOR_NOT_ACTIVE: Final = (255, 255, 255)


REAL_STATE_TO_COLOR: Final = {
    str(REALIZATION_STATE_FINISHED): COLOR_FINISHED,
    str(REALIZATION_STATE_FAILED): COLOR_FAILED,
    str(REALIZATION_STATE_RUNNING): COLOR_RUNNING,
    str(REALIZATION_STATE_PENDING): COLOR_PENDING,
    str(REALIZATION_STATE_WAITING): COLOR_WAITING,
    str(REALIZATION_STATE_UNKNOWN): COLOR_UNKNOWN,
}

FORWARD_MODEL_STATE_TO_COLOR: Final = {
    str(FORWARD_MODEL_STATE_START): COLOR_PENDING,
    str(FORWARD_MODEL_STATE_RUNNING): COLOR_RUNNING,
    str(FORWARD_MODEL_STATE_FINISHED): COLOR_FINISHED,
    str(FORWARD_MODEL_STATE_FAILURE): COLOR_FAILED,
}
