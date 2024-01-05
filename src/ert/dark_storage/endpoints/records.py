from itertools import chain
from typing import Any, Dict, List, Mapping, Union
from uuid import UUID, uuid4

from fastapi import APIRouter, Body, Depends, File, Header, status
from typing_extensions import Annotated

from ert.dark_storage import json_schema as js
from ert.dark_storage.common import (
    data_for_key,
    ensemble_parameters,
    get_observation_keys_for_response,
    format_dataframe,
    get_observation_name,
    get_observations_for_obs_keys,
)
from ert.dark_storage.enkf import get_storage
from ert.storage import StorageReader

router = APIRouter(tags=["record"])

DEFAULT_STORAGE = Depends(get_storage)
DEFAULT_BODY = Body(...)
DEFAULT_FILE = File(...)
DEFAULT_HEADER = Header("application/json")


@router.get("/ensembles/{ensemble_id}/records/{response_name}/observations")
async def get_record_observations(
    *,
    storage: StorageReader = DEFAULT_STORAGE,
    ensemble_id: UUID,
    response_name: str,
) -> List[js.ObservationOut]:
    ensemble = storage.get_ensemble(ensemble_id)
    obs_keys = get_observation_keys_for_response(ensemble, response_name)
    obss = get_observations_for_obs_keys(ensemble, obs_keys)

    if not obss:
        return []

    return [
        js.ObservationOut(
            id=uuid4(),
            userdata={},
            errors=list(chain.from_iterable([obs["errors"] for obs in obss])),
            values=list(chain.from_iterable([obs["values"] for obs in obss])),
            x_axis=list(chain.from_iterable([obs["x_axis"] for obs in obss])),
            name=get_observation_name(ensemble, obs_keys),
        )
    ]


@router.get(
    "/ensembles/{ensemble_id}/records/{name}",
    responses={
        status.HTTP_200_OK: {
            "content": {
                "application/json": {},
                "text/csv": {},
                "application/x-parquet": {},
            }
        }
    },
)
async def get_ensemble_record(
    *,
    storage: StorageReader = DEFAULT_STORAGE,
    name: str,
    ensemble_id: UUID,
    accept: Annotated[Union[str, None], Header()] = None,
) -> Any:
    dataframe = data_for_key(storage.get_ensemble(ensemble_id), name)

    media_type = accept if accept is not None else "text/csv"
    return format_dataframe(dataframe, media_type)


@router.get("/ensembles/{ensemble_id}/parameters", response_model=List[Dict[str, Any]])
async def get_ensemble_parameters(
    *, storage: StorageReader = DEFAULT_STORAGE, ensemble_id: UUID
) -> List[Dict[str, Any]]:
    return ensemble_parameters(storage, ensemble_id)


@router.get(
    "/ensembles/{ensemble_id}/responses", response_model=Mapping[str, js.RecordOut]
)
def get_ensemble_responses(
    *,
    storage: StorageReader = DEFAULT_STORAGE,
    ensemble_id: UUID,
) -> Mapping[str, js.RecordOut]:
    response_map: Dict[str, js.RecordOut] = {}
    ensemble = storage.get_ensemble(ensemble_id)

    for name in ensemble.get_summary_keyset():
        obs_keys = get_observation_keys_for_response(ensemble, name)
        response_map[str(name)] = js.RecordOut(
            id=UUID(int=0),
            name=name,
            userdata={"data_origin": "Summary"},
            has_observations=len(obs_keys) != 0,
        )

    for name in ensemble.get_gen_data_keyset():
        obs_keys = get_observation_keys_for_response(ensemble, name)
        response_map[str(name)] = js.RecordOut(
            id=UUID(int=0),
            name=name,
            userdata={"data_origin": "GEN_DATA"},
            has_observations=len(obs_keys) != 0,
        )

    return response_map
