from __future__ import annotations

import logging
import os
import time
from dataclasses import dataclass
from functools import cached_property
from pathlib import Path
from typing import TYPE_CHECKING, Any, Optional

import numpy as np
import xarray as xr

from ert.config.parameter_config import ParameterConfig
from ert.field_utils import Shape, get_mask, read_field, save_field

if TYPE_CHECKING:
    import numpy.typing as npt

    from ert.storage import EnsembleReader

_logger = logging.getLogger(__name__)


# pylint: disable=too-many-instance-attributes
@dataclass
class Field(ParameterConfig):
    nx: int
    ny: int
    nz: int
    file_format: str
    output_transformation: Optional[str]
    input_transformation: Optional[str]
    truncation_min: Optional[float]
    truncation_max: Optional[float]
    forward_init_file: str
    output_file: Path
    grid_file: str
    mask_file: Path = None

    def read_from_runpath(self, run_path: Path, real_nr: int) -> xr.Dataset:
        t = time.perf_counter()
        file_name = self.forward_init_file
        if "%d" in file_name:
            file_name = file_name % real_nr
        file_path = run_path / file_name

        key = self.name
        data = read_field(file_path, key, self.mask, Shape(self.nx, self.ny, self.nz))

        trans = self.input_transformation
        data_transformed = field_transform(data, trans)
        ds = xr.Dataset({"values": (["x", "y", "z"], data_transformed)})
        _logger.debug(f"load() time_used {(time.perf_counter() - t):.4f}s")
        return ds

    def write_to_runpath(
        self, run_path: Path, real_nr: int, ensemble: EnsembleReader
    ) -> None:
        t = time.perf_counter()
        file_out = run_path.joinpath(self.output_file)
        if os.path.islink(file_out):
            os.unlink(file_out)

        data = ensemble.load_parameters(self.name, real_nr)
        data = field_transform(data, transform_name=self.output_transformation)
        data = _field_truncate(
            data,
            self.truncation_min,
            self.truncation_max,
        )
        data = np.ma.MaskedArray(data, self.mask, fill_value=np.nan)
        save_field(
            data,
            self.name,
            file_out,
            self.file_format,
        )

        _logger.debug(f"save() time_used {(time.perf_counter() - t):.4f}s")

    def save_experiment_data(self, experiment_path) -> None:
        mask_path = experiment_path / "grid_mask.npy"
        if not mask_path.exists():
            mask, _ = get_mask(self.grid_file)
            np.save(mask_path, mask)
        self.mask_file = mask_path

    @cached_property
    def mask(self) -> Any:
        return np.load(self.mask_file)


# pylint: disable=unnecessary-lambda
TRANSFORM_FUNCTIONS = {
    "LN": np.log,
    "LOG": np.log,
    "LN0": lambda v: np.log(v + 0.000001),
    "LOG10": np.log10,
    "EXP": np.exp,
    "EXP0": lambda v: np.exp(v) - 0.000001,
    "POW10": lambda v: np.power(10.0, v),
    "TRUNC_POW10": lambda v: np.maximum(np.power(10, v), 0.001),
}


def field_transform(
    data: npt.NDArray[np.double], transform_name: Optional[str]
) -> npt.NDArray[np.double]:
    if transform_name is None:
        return data
    return TRANSFORM_FUNCTIONS[transform_name](data)


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
