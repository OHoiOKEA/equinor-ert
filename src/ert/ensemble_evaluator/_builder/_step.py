from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import TYPE_CHECKING, Optional, Sequence

from ert.config.ext_job import ExtJob

SOURCE_TEMPLATE_STEP = "/step/{step_id}"
if TYPE_CHECKING:
    from ert.run_arg import RunArg
    from forward_model_io.callbacks import Callback, CallbackArgs


@dataclass
class LegacyJob:
    id_: str
    index: str
    name: str
    ext_job: ExtJob


@dataclass
class LegacyStep:
    id_: str
    jobs: Sequence[LegacyJob]
    name: str
    max_runtime: Optional[int]
    callback_arguments: CallbackArgs
    done_callback: Callback
    exit_callback: Callback
    num_cpu: int
    run_path: Path
    job_script: str
    job_name: str
    run_arg: RunArg
