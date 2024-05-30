import dataclasses
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional, Tuple

import xarray as xr

from ert.config.commons import Refcase
from ert.config.parameter_config import CustomDict
from ert.config.responses.observation_vector import ObsVector


@dataclasses.dataclass
class ObsArgs:
    obs_name: str
    refcase: Optional[Refcase]
    values: Any
    std_cutoff: Any
    history: Optional[Any]
    obs_time_list: Any
    config_for_response: Optional["ResponseConfig"] = None


class ResponseConfigWithLifecycleHooks(ABC):
    name: str

    @classmethod
    @abstractmethod
    def ert_config_response_keyword(cls) -> str:
        """Denotes the keyword to be used in the ert config to give responses
            of the implemented type. For example CSV_RESPONSE.
        :return: The ert config keyword for specifying responses for this type.
        """

    @classmethod
    @abstractmethod
    def ert_config_observation_keyword(cls) -> str:
        """Denotes the keyword to be used in the ert config to give observations
            on responses of this type. For example CSV_OBSERVATION.
        :return: The ert config keyword for specifying observations
                 on this response type.
        """

    @abstractmethod
    def parse_response_from_config(self, config_list: List[Tuple[str, str]]) -> None:
        """ """

    @abstractmethod
    def parse_observation_from_config(self, config_list: List[Tuple[str, str]]) -> None:
        pass

    @abstractmethod
    def parse_response_from_runpath(self, run_path: str) -> str:
        pass


@dataclasses.dataclass
class ResponseConfig(ABC):
    name: str

    @staticmethod
    @abstractmethod
    def parse_observation(args: ObsArgs) -> Dict[str, ObsVector]: ...

    @abstractmethod
    def read_from_file(self, run_path: str, iens: int) -> xr.Dataset: ...

    def to_dict(self) -> Dict[str, Any]:
        data = dataclasses.asdict(self, dict_factory=CustomDict)
        data["_ert_kind"] = self.__class__.__name__
        return data
