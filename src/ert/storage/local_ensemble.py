from __future__ import annotations

import json
import logging
import shutil
from contextlib import ExitStack
from datetime import datetime
from functools import lru_cache
from multiprocessing.pool import ThreadPool
from pathlib import Path
from typing import TYPE_CHECKING, Any, Dict, List, Optional, Sequence, Tuple, Union
from uuid import UUID

import numpy as np
import xarray as xr
from pydantic import BaseModel

from ert._c_wrappers.enkf.config.field_config import field_transform
from ert._c_wrappers.enkf.enums import RealizationStateEnum
from ert._c_wrappers.enkf.time_map import TimeMap
from ert.callbacks import forward_model_ok
from ert.load_status import LoadResult, LoadStatus
from ert.parsing import ConfigValidationError
from ert.storage.field_utils.field_utils import Shape, read_mask, save_field

if TYPE_CHECKING:
    import numpy.typing as npt
    from ecl.summary import EclSum

    from ert._c_wrappers.enkf.ensemble_config import EnsembleConfig
    from ert._c_wrappers.enkf.run_arg import RunArg
    from ert.storage.local_experiment import (
        LocalExperimentAccessor,
        LocalExperimentReader,
    )
    from ert.storage.local_storage import LocalStorageAccessor, LocalStorageReader

logger = logging.getLogger(__name__)


def _load_realization(
    sim_fs: LocalEnsembleAccessor,
    realisation: int,
    ensemble_config: EnsembleConfig,
    run_args: List[RunArg],
) -> Tuple[LoadResult, int]:
    sim_fs.update_realization_state(
        realisation,
        [RealizationStateEnum.STATE_UNDEFINED],
        RealizationStateEnum.STATE_INITIALIZED,
    )
    result = forward_model_ok(run_args[realisation], ensemble_config)
    sim_fs.state_map[realisation] = (
        RealizationStateEnum.STATE_HAS_DATA
        if result.status == LoadStatus.LOAD_SUCCESSFUL
        else RealizationStateEnum.STATE_LOAD_FAILURE
    )
    return result, realisation


def _field_truncate(data: npt.ArrayLike, min_: float, max_: float) -> Any:
    if min_ is not None and max_ is not None:
        vfunc = np.vectorize(lambda x: max(min(x, max_), min_))
        return vfunc(data)
    elif min_ is not None:
        vfunc = np.vectorize(lambda x: max(x, min_))
        return vfunc(data)
    elif max_ is not None:
        vfunc = np.vectorize(lambda x: min(x, max_))
        return vfunc(data)
    return data


class _Index(BaseModel):
    id: UUID
    experiment_id: UUID
    prior_ensemble_id: Optional[UUID]
    based_on_ensemble_id: Optional[UUID]
    dirty: bool = True
    ensemble_size: int
    iteration: int
    name: str
    started_at: datetime
    stopped_at: Optional[datetime]


# pylint: disable=R0904
class LocalEnsembleReader:
    def __init__(
        self,
        storage: LocalStorageReader,
        path: Path,
        refcase: Optional[EclSum],
    ):
        self._storage: Union[LocalStorageReader, LocalStorageAccessor] = storage
        self._path = path
        self._index = _Index.parse_file(path / "index.json")
        self._experiment_path = self._path / "experiment"

        self._time_map = TimeMap()
        self._time_map.read(self._path / "time_map")
        if refcase:
            self._time_map.attach_refcase(refcase)
        self._state_map = self._load_state_map()

    @property
    def mount_point(self) -> Path:
        return self._path

    @property
    def name(self) -> str:
        return self._index.name

    @property
    def id(self) -> UUID:
        return self._index.id

    @property
    def experiment_id(self) -> UUID:
        return self._index.experiment_id

    @property
    def ensemble_size(self) -> int:
        return self._index.ensemble_size

    @property
    def started_at(self) -> datetime:
        return self._index.started_at

    @property
    def stopped_at(self) -> Optional[datetime]:
        return self._index.stopped_at

    @property
    def iteration(self) -> int:
        return self._index.iteration

    @property
    def dirty(self) -> bool:
        return self._index.dirty

    @property
    def time_map(self) -> TimeMap:
        return self._time_map

    @property
    def state_map(self) -> List[RealizationStateEnum]:
        return self._state_map

    @property
    def experiment(self) -> Union[LocalExperimentReader, LocalExperimentAccessor]:
        return self._storage.get_experiment(self.experiment_id)

    def close(self) -> None:
        self.sync()

    def sync(self) -> None:
        pass

    def get_realization_mask_from_state(
        self, states: List[RealizationStateEnum]
    ) -> List[bool]:
        return [s in states for s in self._state_map]

    def _load_state_map(self) -> List[RealizationStateEnum]:
        state_map_file = self._experiment_path / "state_map.json"
        if state_map_file.exists():
            with open(state_map_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                return [RealizationStateEnum(v) for v in data["state_map"]]
        else:
            return [
                RealizationStateEnum.STATE_UNDEFINED for _ in range(self.ensemble_size)
            ]

    @property
    def is_initalized(self) -> bool:
        return RealizationStateEnum.STATE_INITIALIZED in self.state_map or self.has_data

    @property
    def has_data(self) -> bool:
        return RealizationStateEnum.STATE_HAS_DATA in self.state_map

    def realizations_initialized(self, realizations: List[int]) -> bool:
        initialized_realizations = set(
            self.realization_list(RealizationStateEnum.STATE_INITIALIZED)
        )
        return all(real in initialized_realizations for real in realizations)

    def get_summary_keyset(self) -> List[str]:
        realization_folders = list(self.mount_point.glob("realization-*"))
        if not realization_folders:
            return []
        summary_path = realization_folders[0] / "summary.nc"
        if not summary_path.exists():
            return []
        realization_nr = int(str(realization_folders[0])[-1])
        response = self.load_responses("summary", realization_nr)
        keys = sorted(response["name"].values)
        return keys

    def realization_list(self, state: RealizationStateEnum) -> List[int]:
        """
        Will return list of realizations with state == the specified state.
        """
        return [i for i, s in enumerate(self._state_map) if s == state]

    def load_ext_param(self, key: str, realization: int) -> Any:
        input_path = self.mount_point / f"realization-{realization}" / f"{key}.json"
        if not input_path.exists():
            raise KeyError(f"No parameter: {key} in storage")

        with open(input_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data

    def _load_single_dataset(
        self,
        group: str,
        realization: int,
    ) -> xr.Dataset:
        try:
            return xr.open_dataset(
                self.mount_point / f"realization-{realization}" / group, engine="scipy"
            )
        except FileNotFoundError:
            raise KeyError(
                f"No dataset '{group}' in storage for realization {realization}"
            )

    @lru_cache
    def _load_final_dataset(self, group) -> xr.Dataset:
        return xr.open_dataset(self.mount_point / "final" / group, engine="scipy")

    def _load_dataset(
        self,
        group: str,
        realizations: Union[int, Sequence[int], None],
    ) -> xr.Dataset:
        if self.dirty:
            if isinstance(realizations, int):
                return self._load_single_dataset(group, realizations).isel(
                    realizations=0, drop=True
                )

            try:
                dataset = self._load_final_dataset(group)
            except KeyError:
                dataset = xr.Dataset()

            if realizations is None:
                datasets = [
                    xr.open_dataset(p, engine="scipy")
                    for p in sorted(self.mount_point.glob(f"realization-*/{group}"))
                ]
            else:
                datasets = [self._load_single_dataset(group, i) for i in realizations]
            return xr.combine_nested(datasets, "realizations")
        else:
            dataset = self._load_final_dataset(group)
            if isinstance(realizations, int):
                return dataset.sel(realizations=realizations, drop=True)
            elif realizations is None:
                return dataset
            if not (
                set(realizations)
                <= set(dataset["realizations"].values.ravel().tolist())
            ):
                raise RuntimeError(
                    f"{set(realizations)} not in {set(dataset['realizations'].values.ravel().tolist())}"
                )
            return dataset.sel(realizations=list(realizations))

    def load_parameters(
        self,
        group: str,
        realizations: Union[int, Sequence[int], None] = None,
        *,
        var: str = "values",
    ) -> xr.DataArray:
        return self._load_dataset(group, realizations)[var]

    def load_responses(
        self, group: str, realizations: Union[int, Sequence[int], None] = None
    ) -> xr.DataArray:
        return self._load_dataset(group, realizations)["values"]

    def load_field(self, key: str, realizations: List[int]) -> npt.NDArray[np.double]:
        result: Optional[npt.NDArray[np.double]] = None
        for index, realization in enumerate(realizations):
            input_path = self.mount_point / f"realization-{realization}"
            if not input_path.exists():
                raise KeyError(
                    f"Unable to load FIELD for key: {key}, realization: {realization}"
                )
            data = np.load(input_path / f"{key}.npy", mmap_mode="r")
            data = data[np.isfinite(data)]

            if result is None:
                result = np.empty((len(realizations), data.size), dtype=np.double)
            elif data.size != result.shape[1]:
                raise ValueError(f"Data size mismatch for realization {realization}")

            result[index] = data

        if result is None:
            raise ConfigValidationError(
                "No realizations found when trying to load field"
            )
        return result.T

    def field_has_data(self, key: str, realization: int) -> bool:
        path = self.mount_point / f"realization-{realization}/{key}.npy"
        return path.exists()

    def field_has_info(self, key: str) -> bool:
        return key in self.experiment.parameter_info

    def export_field(
        self,
        key: str,
        realization: int,
        output_path: Path,
        fformat: Optional[str] = None,
    ) -> None:
        info = self.experiment.parameter_info[key]
        if fformat is None:
            fformat = info["file_format"]

        data_path = self.mount_point / f"realization-{realization}"

        if not data_path.exists():
            raise KeyError(
                f"Unable to load FIELD for key: {key}, realization: {realization} "
            )
        data = np.load(data_path / f"{key}.npy")
        data = field_transform(data, transform_name=info["output_transformation"])
        data = _field_truncate(
            data,
            info["truncation_min"],
            info["truncation_max"],
        )

        save_field(
            data,
            key,
            self.experiment.grid_path,
            Shape(info["nx"], info["ny"], info["nz"]),
            output_path,
            fformat,
        )


class LocalEnsembleAccessor(LocalEnsembleReader):
    def __init__(
        self,
        storage: LocalStorageAccessor,
        path: Path,
        refcase: Optional[EclSum],
    ):
        super().__init__(storage, path, refcase)
        self._storage: LocalStorageAccessor = storage

    @classmethod
    def create(
        cls,
        storage: LocalStorageAccessor,
        path: Path,
        uuid: UUID,
        *,
        ensemble_size: int,
        experiment_id: UUID,
        iteration: int = 0,
        name: str,
        prior_ensemble_id: Optional[UUID],
        based_on_ensemble_id: Optional[UUID],
        refcase: Optional[EclSum],
    ) -> LocalEnsembleAccessor:
        (path / "experiment").mkdir(parents=True, exist_ok=False)

        index = _Index(
            id=uuid,
            ensemble_size=ensemble_size,
            experiment_id=experiment_id,
            prior_ensemble_id=prior_ensemble_id,
            based_on_ensemble_id=based_on_ensemble_id,
            iteration=iteration,
            name=name,
            started_at=datetime.now(),
        )

        with open(path / "index.json", mode="w", encoding="utf-8") as f:
            print(index.json(), file=f)

        return cls(storage, path, refcase=refcase)

    def _save_state_map(self) -> None:
        state_map_file = self._experiment_path / "state_map.json"
        with open(state_map_file, "w", encoding="utf-8") as f:
            data = {"state_map": [v.value for v in self._state_map]}
            f.write(json.dumps(data))

    def update_realization_state(
        self,
        realization: int,
        old_states: List[RealizationStateEnum],
        new_state: RealizationStateEnum,
    ) -> None:
        assert self.stopped_at is None
        if self._state_map[realization] in old_states:
            self._state_map[realization] = new_state

    def sync(self) -> None:
        self._save_state_map()
        self.time_map.write(str(self._experiment_path / "time_map"))

    def save_ext_param(
        self, key: str, realization: int, data: Dict[str, Dict[str, Any]]
    ) -> None:
        assert self.stopped_at is None
        output_path = self.mount_point / f"realization-{realization}"
        Path.mkdir(output_path, exist_ok=True)
        with open(output_path / f"{key}.json", "w", encoding="utf-8") as f:
            json.dump(data, f)

    def load_from_run_path(
        self,
        ensemble_size: int,
        ensemble_config: EnsembleConfig,
        run_args: List[RunArg],
        active_realizations: List[bool],
    ) -> int:
        assert self.stopped_at is None
        """Returns the number of loaded realizations"""
        pool = ThreadPool(processes=8)

        async_result = [
            pool.apply_async(
                _load_realization,
                (self, iens, ensemble_config, run_args),
            )
            for iens in range(ensemble_size)
            if active_realizations[iens]
        ]

        loaded = 0
        for t in async_result:
            ((status, message), iens) = t.get()

            if status == LoadStatus.LOAD_SUCCESSFUL:
                loaded += 1
                self.state_map[iens] = RealizationStateEnum.STATE_HAS_DATA
            else:
                logger.error(f"Realization: {iens}, load failure: {message}")

        return loaded

    def save_parameters(
        self, group: str, realization: int, dataset: Union[xr.DataArray, xr.Dataset]
    ) -> None:
        assert self.stopped_at is None
        """Create a parameter group

        Args:
            name: Name of the parameter group

            realization_index: Which realization index this group belongs to

            dataset: Dataset to save. One of the variables must be named
                'value'. This will be used when flattening out the parameters
                into a 1d-vector.

        """
        if isinstance(dataset, xr.DataArray):
            dataset = dataset.to_dataset()

        if "values" not in dataset.variables:
            raise ValueError(
                f"Dataset for parameter group '{group}' "
                f"must contain a 'values' variable"
            )

        path = self.mount_point / f"realization-{realization}" / group
        path.parent.mkdir(exist_ok=True)
        dataset.expand_dims(realizations=[realization]).to_netcdf(path, engine="scipy")
        self.update_realization_state(
            realization,
            [
                RealizationStateEnum.STATE_UNDEFINED,
                RealizationStateEnum.STATE_LOAD_FAILURE,
            ],
            RealizationStateEnum.STATE_INITIALIZED,
        )

    def save_responses(self, group: str, realization: int, data: xr.Dataset) -> None:
        assert self.stopped_at is None
        path = self.mount_point / f"realization-{realization}" / group
        path.parent.mkdir(exist_ok=True)
        data.expand_dims(realizations=[realization]).to_netcdf(path, engine="scipy")
        self.update_realization_state(
            realization,
            [
                RealizationStateEnum.STATE_UNDEFINED,
                RealizationStateEnum.STATE_INITIALIZED,
                RealizationStateEnum.STATE_LOAD_FAILURE,
            ],
            RealizationStateEnum.STATE_HAS_DATA,
        )

    def save_field(
        self,
        parameter_name: str,
        realization: int,
        data: Union[
            npt.NDArray[np.double], np.ma.MaskedArray[Any, np.dtype[np.double]]
        ],
    ) -> None:
        assert self.stopped_at is None
        output_path = self.mount_point / f"realization-{realization}"
        Path.mkdir(output_path, exist_ok=True)
        if not np.ma.isMaskedArray(data):  # type: ignore
            grid_path = self.experiment.grid_path
            if grid_path is None:
                raise ConfigValidationError(
                    f"Missing path to grid file for realization-{realization}"
                )
            mask, shape = read_mask(grid_path)
            if mask is not None:
                data_full = np.full_like(mask, np.nan, dtype=np.double)
                np.place(data_full, np.logical_not(mask), data)
                data = np.ma.MaskedArray(
                    data_full, mask, fill_value=np.nan
                )  # type: ignore
            else:
                data = np.ma.MaskedArray(data.reshape(shape))  # type: ignore

        np.save(f"{output_path}/{parameter_name}", data.filled(np.nan))  # type: ignore
        self.update_realization_state(
            realization,
            [RealizationStateEnum.STATE_UNDEFINED],
            RealizationStateEnum.STATE_INITIALIZED,
        )

    def finalize(self) -> None:
        """Finalize the ensemble evaluation."""
        assert self.stopped_at is None
        self._index.stopped_at = datetime.now()
        self._save_index()

        (self.mount_point / "final").mkdir()
        for name in {path.name for path in self.mount_point.glob("realization-*/*")}:
            with ExitStack() as stack:
                datasets = [
                    stack.enter_context(xr.open_dataset(x, engine="scipy"))
                    for x in sorted(self.mount_point.glob(f"realization-*/{name}"))
                ]
                dataset = xr.combine_nested(datasets, "realizations")
                dataset.to_netcdf(self.mount_point / "final" / name, engine="scipy")

        for path in self.mount_point.glob("realization-*"):
            shutil.rmtree(path)

    def ensure_dirty_set(self, dirty: bool) -> None:
        if self._index.dirty == dirty:
            return
        self._index.dirty = dirty
        self._save_index()

    def _save_index(self) -> None:
        with open(self.mount_point / "index.json", mode="w", encoding="utf-8") as f:
            print(self._index.json(), file=f)
