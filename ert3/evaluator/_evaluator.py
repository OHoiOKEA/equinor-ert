import asyncio
import pathlib
import pickle
import shutil
from collections import defaultdict
from pathlib import Path
from typing import Coroutine, Dict, Any, Tuple, List


import cloudpickle

import ert3
from ert_shared.ensemble_evaluator.config import EvaluatorServerConfig
from ert_shared.ensemble_evaluator.entity.identifiers import EVTYPE_EE_TERMINATED
from ert_shared.ensemble_evaluator.evaluator import EnsembleEvaluator
from ert_shared.ensemble_evaluator.prefect_ensemble import PrefectEnsemble
from ert3.config import (
    EnsembleConfig,
    StagesConfig,
    TransportableCommand,
    Unix,
    Function,
    Step,
)
from ert3.data import (
    EnsembleRecord,
    MultiEnsembleRecord,
    RealisationsToRecordToTransmitter,
    RecordTransmitter,
    Record,
    SharedDiskRecordTransmitter,
    record_data,
)

_EVTYPE_SNAPSHOT_STOPPED = "Stopped"
_EVTYPE_SNAPSHOT_FAILED = "Failed"
_MY_STORAGE_DIRECTORY = ".my_storage"

CoroutineTransmitters = List[Coroutine[Any, Any, None]]


# scafflting function. this will be removed later
# with ert3.evaluator._evaluator._ee_config
def _add_storage(path: Path) -> Path:
    if path.name != _MY_STORAGE_DIRECTORY:
        return path / _MY_STORAGE_DIRECTORY
    return path


def _create_input_transmitter(
    name: str,
    path: Path,
    data: record_data,
    futures: CoroutineTransmitters,
) -> Dict[str, RecordTransmitter]:
    transmitter = SharedDiskRecordTransmitter(name, _add_storage(path))
    futures.append(transmitter.transmit_data(data))
    return {name: transmitter}


def _create_command_transmitter(
    command: TransportableCommand,
    path: Path,
) -> RecordTransmitter:
    transmitter = SharedDiskRecordTransmitter(command.name, _add_storage(path))
    with open(command.path, "rb") as f:
        asyncio.get_event_loop().run_until_complete(
            transmitter.transmit_data([f.read()])
        )
    return transmitter


def prepare_input(
    step: Step,
    evaluation_tmp_dir: Path,
    ensemble_size: int,
    inputs: MultiEnsembleRecord,
) -> RealisationsToRecordToTransmitter:
    (evaluation_tmp_dir / "prep_input_files").mkdir(parents=True, exist_ok=True)
    futures: CoroutineTransmitters = []
    transmitters = {
        iens: _create_input_transmitter(
            input_.name, evaluation_tmp_dir, record.data, futures
        )
        for input_ in step.inputs
        for iens, record in enumerate(inputs.ensemble_records[input_.name].records)
    }
    asyncio.get_event_loop().run_until_complete(asyncio.gather(*futures))
    if isinstance(step, Unix):
        for iens in range(ensemble_size):
            for command in step.transportable_commands:
                transmitters[iens][command.name] = _create_command_transmitter(
                    command, evaluation_tmp_dir
                )
    return transmitters


def prepare_output(
    step: Step,
    evaluation_tmp_dir: Path,
    ensemble_size: int,
) -> RealisationsToRecordToTransmitter:
    (evaluation_tmp_dir / "output_files").mkdir(parents=True, exist_ok=True)
    return {
        iens: {
            output.name: SharedDiskRecordTransmitter(
                output.name, _add_storage(evaluation_tmp_dir)
            )
        }
        for output in step.outputs
        for iens in range(ensemble_size)
    }


def _create_evaluator_tmp_dir(workspace_root: Path, evaluation_name: str) -> Path:
    return (
        pathlib.Path(workspace_root)
        / ert3._WORKSPACE_DATA_ROOT
        / "tmp"
        / evaluation_name
    )


TupleDictStrAny = Tuple[Dict[str, Any], ...]


def _function_jobs(step: Function) -> TupleDictStrAny:
    return (
        {
            "name": step.function.__name__,
            "executable": cloudpickle.dumps(step.function),
        },
    )


def _unix_jobs(step: Unix) -> TupleDictStrAny:
    def job(script: str) -> Dict[str, Any]:
        name, *args = script.split()
        return {
            "name": name,
            "executable": next(
                (cmd.path for cmd in step.transportable_commands if cmd.name == name),
                pathlib.Path(name),
            ),
            "args": tuple(args),
        }

    return tuple(map(job, step.script))


def _name_to_record_key(
    command: TransportableCommand,
) -> Dict[str, Any]:
    cmd: Dict[str, Any] = command.dict(exclude={"name"}, by_alias=True)
    cmd["record"] = command.name
    return cmd


def _job_specific_fields(step: Step) -> Tuple[TupleDictStrAny, TupleDictStrAny]:
    return (
        (_unix_jobs(step), tuple(map(_name_to_record_key, step.transportable_commands)))
        if isinstance(step, Unix)
        else (_function_jobs(step), ())
    )


def _step(step: Step) -> TupleDictStrAny:
    jobs, input_commands = _job_specific_fields(step)
    return (
        {
            "name": step.name + "-only_step",
            "inputs": tuple(input_.dict(by_alias=True) for input_ in step.inputs)
            + input_commands,
            "outputs": [output.dict(by_alias=True) for output in step.outputs],
            "jobs": jobs,
            "type": type(step).__name__.lower(),
        },
    )


def _build_ee_config(
    evaluation_tmp_dir: Path,
    ensemble: EnsembleConfig,
    stages_config: StagesConfig,
    input_records: MultiEnsembleRecord,
    dispatch_uri: str,
) -> Dict[str, Any]:
    ensemble_size = (
        ensemble.size if ensemble.size != None else input_records.ensemble_size
    ) or 0  # SMELL: ensemble_size is still optional since both option can be None

    step = stages_config.step_from_key(ensemble.forward_model.stage)
    assert step is not None

    return {
        "steps": _step(step),  # Why is steps a list of one dict object?
        "realizations": ensemble_size,
        "max_running": 10000,
        "max_retries": 0,
        "run_path": evaluation_tmp_dir / "my_output",
        "executor": ensemble.forward_model.driver,
        "storage": {
            "type": "shared_disk",
            "storage_path": evaluation_tmp_dir / _MY_STORAGE_DIRECTORY,
        },
        "dispatch_uri": dispatch_uri,
        "inputs": prepare_input(step, evaluation_tmp_dir, ensemble_size, input_records),
        "outputs": prepare_output(step, evaluation_tmp_dir, ensemble_size),
    }


def _run(
    ensemble_evaluator: EnsembleEvaluator,
) -> Dict[int, Dict[str, RecordTransmitter]]:
    result = {}
    with ensemble_evaluator.run() as monitor:
        for event in monitor.track():
            if isinstance(event.data, dict) and event.data.get("status") in [
                _EVTYPE_SNAPSHOT_STOPPED,
                _EVTYPE_SNAPSHOT_FAILED,
            ]:
                monitor.signal_done()
            if event["type"] == EVTYPE_EE_TERMINATED and isinstance(event.data, bytes):
                result = pickle.loads(event.data)

    return result


def _prepare_responses(
    raw_responses: Dict[int, Dict[str, RecordTransmitter]]
) -> MultiEnsembleRecord:
    async def _load(
        iens: int, record_key: str, transmitter: RecordTransmitter
    ) -> Tuple[int, str, Record]:
        record = await transmitter.load()
        return (iens, record_key, record)

    futures = []
    for iens in sorted(raw_responses.keys(), key=int):
        for record, transmitter in raw_responses[iens].items():
            futures.append(_load(iens, record, transmitter))
    results = asyncio.get_event_loop().run_until_complete(asyncio.gather(*futures))

    data_results: Dict[int, Dict[str, Record]] = defaultdict(dict)
    for res in results:
        data_results[res[0]][res[1]] = res[2]

    responses: Dict[str, List[Record]] = {
        response_name: [] for response_name in data_results[0]
    }
    for realization in data_results.values():
        assert responses.keys() == realization.keys()
        for key in realization:
            responses[key].append(realization[key])

    ensemble_records: Dict[str, EnsembleRecord] = {}
    for key in responses:
        ensemble_records[key] = EnsembleRecord(records=responses[key])

    return MultiEnsembleRecord(ensemble_records=ensemble_records)


def evaluate(
    workspace_root: Path,
    evaluation_name: str,
    input_records: MultiEnsembleRecord,
    ensemble_config: EnsembleConfig,
    stages_config: StagesConfig,
) -> MultiEnsembleRecord:
    evaluation_tmp_dir = _create_evaluator_tmp_dir(workspace_root, evaluation_name)
    config = EvaluatorServerConfig()
    ee_config = _build_ee_config(
        evaluation_tmp_dir,
        ensemble_config,
        stages_config,
        input_records,
        config.dispatch_uri,
    )
    ensemble = PrefectEnsemble(ee_config)  # type: ignore

    ee = EnsembleEvaluator(ensemble=ensemble, config=config, iter_=0)
    result = _run(ee)
    return _prepare_responses(result)


def cleanup(workspace_root: Path, evaluation_name: str) -> None:
    tmp_dir = _create_evaluator_tmp_dir(workspace_root, evaluation_name)
    if tmp_dir.exists():
        shutil.rmtree(tmp_dir)
