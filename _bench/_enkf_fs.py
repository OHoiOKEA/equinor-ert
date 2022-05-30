import argparse
import numpy as np
import numpy.typing as npt
from concurrent.futures import Executor, ThreadPoolExecutor
from typing import Tuple

from res.enkf.enkf_fs import EnkfFs as _EnkfFs
from res._lib.enkf_fs import (
    write_param_vector_raw,
    write_resp_vector_raw,
)
from ._base import BaseStorage


class EnkfFs(BaseStorage[npt.NDArray[np.float64]]):
    __use_threads__ = True

    def __init__(self, args: argparse.Namespace) -> None:
        super().__init__(args)
        self._fs = _EnkfFs.createFileSystem(str(self.path), mount=True)

    def from_numpy(self, array: npt.NDArray[np.float64]) -> npt.NDArray[np.float64]:
        return array

    def save_parameter(self, name: str, array: npt.NDArray[np.float64]) -> None:
        for iens, data in enumerate(array):
            write_param_vector_raw(self._fs, data, name, iens)

    def save_parameter_mt(
        self, name: str, array: npt.NDArray[np.float64], executor: Executor
    ) -> None:
        def fn(x: Tuple[int, npt.NDArray[np.float64]]) -> None:
            iens = x[0]
            data = x[1]
            write_param_vector_raw(self._fs, data, name, iens)

        executor.map(fn, enumerate(array))

    def save_response(
        self, name: str, array: npt.NDArray[np.float64], iens: int
    ) -> None:
        write_resp_vector_raw(self._fs, array, name, iens)

    def save_response_mt(
        self, name: str, array: npt.NDArray[np.float64], iens: int, executor: Executor
    ) -> None:
        executor.submit(write_resp_vector_raw, self._fs, array, name, iens)


class EnkfFsMt(EnkfFs):
    def save_parameter(self, name: str, array: npt.NDArray[np.float64]) -> None:
        def fn(x: Tuple[int, npt.NDArray[np.float64]]) -> None:
            iens = x[0]
            data = x[1]
            write_param_vector_raw(self._fs, data, name, iens)

        with ThreadPoolExecutor() as exec:
            list(exec.map(fn, enumerate(array)))

    def save_response(
        self, name: str, array: npt.NDArray[np.float64], iens: int
    ) -> None:
        self.skip()
