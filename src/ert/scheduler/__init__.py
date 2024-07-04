from __future__ import annotations

from os import getuid
from pwd import getpwuid
from typing import TYPE_CHECKING, Optional

from ert.config.parsing.queue_system import QueueSystem

from .driver import Driver
from .local_driver import LocalDriver
from .lsf_driver import LsfDriver
from .openpbs_driver import OpenPBSDriver
from .scheduler import Scheduler
from .slurm_driver import SlurmDriver

if TYPE_CHECKING:
    from ert.config.queue_config import QueueConfig


def create_driver(config: QueueConfig) -> Driver:
    if config.queue_system == QueueSystem.LOCAL:
        return LocalDriver()
    elif config.queue_system == QueueSystem.TORQUE:
        queue_config = dict(config.queue_options.get(QueueSystem.TORQUE, []))
        num_nodes: Optional[str] = queue_config.get("NUM_NODES")
        num_cpus_per_node: Optional[str] = queue_config.get("NUM_CPUS_PER_NODE")
        return OpenPBSDriver(
            qsub_cmd=queue_config.get("QSUB_CMD"),
            qstat_cmd=queue_config.get("QSTAT_CMD"),
            qdel_cmd=queue_config.get("QDEL_CMD"),
            queue_name=queue_config.get("QUEUE"),
            keep_qsub_output=queue_config.get("KEEP_QSUB_OUTPUT", "0"),
            memory_per_job=queue_config.get("MEMORY_PER_JOB"),
            num_nodes=int(num_nodes) if num_nodes else None,
            num_cpus_per_node=int(num_cpus_per_node) if num_cpus_per_node else None,
            cluster_label=queue_config.get("CLUSTER_LABEL"),
            job_prefix=queue_config.get("JOB_PREFIX"),
        )
    elif config.queue_system == QueueSystem.LSF:
        queue_config = dict(config.queue_options.get(QueueSystem.LSF, []))
        return LsfDriver(
            bsub_cmd=queue_config.get("BSUB_CMD"),
            bkill_cmd=queue_config.get("BKILL_CMD"),
            bjobs_cmd=queue_config.get("BJOBS_CMD"),
            bhist_cmd=queue_config.get("BHIST_CMD"),
            exclude_hosts=queue_config.get("EXCLUDE_HOST"),
            queue_name=queue_config.get("LSF_QUEUE"),
            resource_requirement=queue_config.get("LSF_RESOURCE"),
        )
    elif config.queue_system == QueueSystem.SLURM:
        queue_config = dict(config.queue_options.get(QueueSystem.SLURM, []))
        return SlurmDriver(
            sbatch_cmd=queue_config.get("SBATCH", "sbatch"),
            scancel_cmd=queue_config.get("SCANCEL", "scancel"),
            scontrol_cmd=queue_config.get("SCONTROL", "scontrol"),
            squeue_cmd=queue_config.get("SQUEUE", "squeue"),
            exclude_hosts=queue_config.get("EXCLUDE_HOST", ""),
            include_hosts=queue_config.get("INCLUDE_HOST", ""),
            memory_per_cpu=queue_config.get("MEMORY_PER_CPU"),
            memory=queue_config.get("MEMORY", ""),
            max_runtime=queue_config.get("MAX_RUNTIME"),
            queue_name=queue_config.get("PARTITION"),
            squeue_timeout=queue_config.get("SQUEUE_TIMEOUT"),
            user=getpwuid(getuid()).pw_name,
        )
    else:
        raise NotImplementedError(
            "Only LOCAL, SLURM, TORQUE and LSF drivers are implemented"
        )


__all__ = [
    "Scheduler",
    "Driver",
    "create_driver",
]
