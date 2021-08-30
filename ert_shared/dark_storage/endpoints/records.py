from uuid import UUID
from typing import Any, Mapping, Optional, List

from fastapi import APIRouter, Body, Depends, File, Header, Request, UploadFile, status
from ert_storage import json_schema as js

from ert_shared.dark_storage.enkf import LibresFacade, get_res


router = APIRouter(tags=["record"])


@router.post("/ensembles/{ensemble_id}/records/{name}/file")
async def post_ensemble_record_file(
    *,
    res: LibresFacade = Depends(get_res),
    name: str,
    ensemble_id: UUID,
    realization_index: Optional[int] = None,
    file: UploadFile = File(...),
) -> None:
    raise NotImplementedError


@router.put("/ensembles/{ensemble_id}/records/{name}/blob")
async def add_block(
    *,
    res: LibresFacade = Depends(get_res),
    name: str,
    ensemble_id: UUID,
    block_index: int,
    realization_index: Optional[int] = None,
    request: Request,
) -> None:
    raise NotImplementedError


@router.post("/ensembles/{ensemble_id}/records/{name}/blob")
async def create_blob(
    *,
    res: LibresFacade = Depends(get_res),
    name: str,
    ensemble_id: UUID,
    realization_index: Optional[int] = None,
) -> None:
    raise NotImplementedError


@router.patch("/ensembles/{ensemble_id}/records/{name}/blob")
async def finalize_blob(
    *,
    res: LibresFacade = Depends(get_res),
    name: str,
    ensemble_id: UUID,
    realization_index: Optional[int] = None,
) -> None:
    raise NotImplementedError


@router.post(
    "/ensembles/{ensemble_id}/records/{name}/matrix", response_model=js.RecordOut
)
async def post_ensemble_record_matrix(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    prior: Optional[str] = None,
    realization_index: Optional[int] = None,
    content_type: str = Header("application/json"),
    request: Request,
) -> js.RecordOut:
    raise NotImplementedError


@router.put("/ensembles/{ensemble_id}/records/{name}/userdata")
async def replace_record_userdata(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    realization_index: Optional[int] = None,
    body: Any = Body(...),
) -> None:
    raise NotImplementedError


@router.patch("/ensembles/{ensemble_id}/records/{name}/userdata")
async def patch_record_userdata(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    realization_index: Optional[int] = None,
    body: Any = Body(...),
) -> None:
    raise NotImplementedError


@router.get(
    "/ensembles/{ensemble_id}/records/{name}/userdata", response_model=Mapping[str, Any]
)
async def get_record_userdata(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    realization_index: Optional[int] = None,
) -> Mapping[str, Any]:
    raise NotImplementedError


@router.post("/ensembles/{ensemble_id}/records/{name}/observations")
async def post_record_observations(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    realization_index: Optional[int] = None,
    observation_ids: List[UUID] = Body(...),
) -> None:
    raise NotImplementedError


@router.get("/ensembles/{ensemble_id}/records/{name}/observations")
async def get_record_observations(
    *,
    res: LibresFacade = Depends(get_res),
    ensemble_id: UUID,
    name: str,
    realization_index: Optional[int] = None,
) -> List[js.ObservationOut]:
    raise NotImplementedError


@router.get(
    "/ensembles/{ensemble_id}/records/{name}",
    responses={
        status.HTTP_200_OK: {
            "content": {
                "application/json": {},
                "text/csv": {},
                "application/x-numpy": {},
            }
        }
    },
)
async def get_ensemble_record(
    *,
    res: LibresFacade = Depends(get_res),
    name: str,
    ensemble_id: UUID,
    accept: str = Header("application/json"),
    realization_index: Optional[int] = None,
) -> Any:
    raise NotImplementedError


@router.get("/ensembles/{ensemble_id}/parameters", response_model=List[str])
async def get_ensemble_parameters(
    *, res: LibresFacade = Depends(get_res), ensemble_id: UUID
) -> List[str]:
    raise NotImplementedError


@router.get(
    "/ensembles/{ensemble_id}/records", response_model=Mapping[str, js.RecordOut]
)
async def get_ensemble_records(
    *, res: LibresFacade = Depends(get_res), ensemble_id: UUID
) -> Mapping[str, js.RecordOut]:
    raise NotImplementedError


@router.get("/records/{record_id}", response_model=js.RecordOut)
async def get_record(
    *, res: LibresFacade = Depends(get_res), record_id: UUID
) -> js.RecordOut:
    raise NotImplementedError


@router.get("/records/{record_id}/data")
async def get_record_data(
    *,
    res: LibresFacade = Depends(get_res),
    record_id: UUID,
    accept: Optional[str] = Header(default="application/json"),
) -> Any:
    raise NotImplementedError


@router.get(
    "/ensembles/{ensemble_id}/responses", response_model=Mapping[str, js.RecordOut]
)
def get_ensemble_responses(
    *, res: LibresFacade = Depends(get_res), ensemble_id: UUID
) -> Mapping[str, js.RecordOut]:
    raise NotImplementedError
