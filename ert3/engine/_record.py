import json
from typing import Optional
from pathlib import Path

import ert
import ert3


def load_record(
    workspace: Path, record_name: str, record_file: Path, record_type: str = "normal"
) -> None:

    if record_type == "blob":
        with open(record_file, "rb") as f:
            raw_ensrecord = f.read()
        ensrecord = ert.data.EnsembleRecord(
            records=[ert.data.Record(data=[raw_ensrecord])]
        )
    else:
        with open(record_file, "r") as f:
            raw_ensrecord = json.load(f)
        ensrecord = ert.data.EnsembleRecord(
            records=[ert.data.Record(data=raw_record) for raw_record in raw_ensrecord]
        )

    ## TODO fix
    ensrecord = ert.data.EnsembleRecord(
        records=[
            ert.data.NumericalRecord(data=raw_record) for raw_record in raw_ensrecord
        ]
    )
    ert3.storage.add_ensemble_record(
        workspace=workspace,
        record_name=record_name,
        ensemble_record=ensrecord,
    )


# pylint: disable=too-many-arguments
def sample_record(
    workspace: Path,
    parameters_config: ert3.config.ParametersConfig,
    parameter_group_name: str,
    record_name: str,
    ensemble_size: int,
    experiment_name: Optional[str] = None,
) -> None:
    distribution = parameters_config[parameter_group_name].as_distribution()
    ensrecord = ert.data.EnsembleRecord(
        records=[distribution.sample() for _ in range(ensemble_size)]
    )
    ert3.storage.add_ensemble_record(
        workspace=workspace,
        record_name=record_name,
        ensemble_record=ensrecord,
        experiment_name=experiment_name,
    )
