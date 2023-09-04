from __future__ import annotations

import logging
from dataclasses import dataclass
from datetime import datetime
from typing import TYPE_CHECKING, Set

import xarray as xr
from ecl.summary import EclSum

from ert._clib._read_summary import read_summary  # pylint: disable=import-error

from .response_config import ResponseConfig

if TYPE_CHECKING:
    from typing import List, Optional


logger = logging.getLogger(__name__)


@dataclass
class SummaryConfig(ResponseConfig):
    input_file: str
    keys: List[str]
    refcase: Optional[Set[datetime]] = None

    def read_from_file(self, run_path: str, iens: int) -> xr.Dataset:
        filename = self.input_file.replace("<IENS>", str(iens))
        try:
            summary = EclSum(
                f"{run_path}/{filename}",
                include_restart=False,
                lazy_load=False,
            )
        except IOError as e:
            raise ValueError(
                "Could not find SUMMARY file or using non unified SUMMARY "
                f"file from: {run_path}/{filename}.UNSMRY",
            ) from e

        c_time = summary.alloc_time_vector(True)
        time_map = [t.datetime() for t in c_time]
        if self.refcase:
            missing = self.refcase.difference(time_map)
            if missing:
                first, last = min(missing), max(missing)
                logger.warning(
                    f"Realization: {iens}, load warning: {len(missing)} "
                    f"inconsistencies in time map, first: Time mismatch for response "
                    f"time: {first}, last: Time mismatch for response time: "
                    f"{last} from: {run_path}/{filename}.UNSMRY"
                )

        summary_data = read_summary(summary, self.keys)
        summary_data.sort(key=lambda x: x[0])
        data = [d for _, d in summary_data]
        keys = [k for k, _ in summary_data]

        return xr.Dataset(
            {"values": (["name", "time"], data)},
            coords={"time": time_map, "name": keys},
        )
