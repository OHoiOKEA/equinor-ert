import shutil
import uuid
import json
from abc import abstractmethod
from enum import Enum, auto
from pathlib import Path
from typing import Callable, Dict, List, Optional, Union, Any
import aiofiles

# Type hinting for wrap must be turned off until (1) is resolved.
# (1) https://github.com/Tinche/aiofiles/issues/8
from aiofiles.os import wrap  # type: ignore
from pydantic import (
    StrictBytes,
    StrictFloat,
    StrictInt,
    StrictStr,
)
from ert.serialization import get_serializer

from ._record import (
    Record,
    RecordType,
    NumericalRecord,
    BlobRecord,
    NumericalRecordTree,
    BlobRecordTree,
)

_copy = wrap(shutil.copy)

strict_number = Union[StrictInt, StrictFloat]
numerical_record_data = Union[
    List[strict_number],
    Dict[StrictStr, strict_number],
    Dict[StrictInt, strict_number],
]
blob_record_data = StrictBytes
record_data = Union[numerical_record_data, blob_record_data]
transmitter_factory = Callable[..., "RecordTransmitter"]


class RecordTransmitterState(Enum):
    transmitted = auto()
    not_transmitted = auto()


class RecordTransmitterType(Enum):
    in_memory = auto()
    ert_storage = auto()
    shared_disk = auto()


def _unflatten_record_dict(
    flat_record_dict: Union[Dict[str, BlobRecord], Dict[str, NumericalRecord]]
) -> Dict[str, Any]:
    record_dict: Dict[str, Any] = {}
    for rec_path, rec in flat_record_dict.items():
        keys = rec_path.split("/")
        sub_rec_name = keys[-1]
        branch = record_dict
        for key in keys[:-1]:
            if key not in branch:
                branch[key] = {}
            branch = branch[key]
        branch[sub_rec_name] = rec
    return record_dict


class RecordTransmitter:
    def __init__(self, transmitter_type: RecordTransmitterType) -> None:
        self._state = RecordTransmitterState.not_transmitted
        self._uri: str = ""
        self._record_type: Optional[RecordType] = None
        self._transmitter_type: RecordTransmitterType = transmitter_type

    def _set_transmitted_state(
        self, uri: str, record_type: Optional[RecordType]
    ) -> None:
        self._state = RecordTransmitterState.transmitted
        self._uri = uri
        self._record_type = record_type

    def is_transmitted(self) -> bool:
        return self._state == RecordTransmitterState.transmitted

    @property
    def transmitter_type(self) -> RecordTransmitterType:
        return self._transmitter_type

    @abstractmethod
    async def _load_numerical_record(self) -> NumericalRecord:
        raise NotImplementedError("not implemented")

    @abstractmethod
    async def _load_blob_record(self) -> BlobRecord:
        raise NotImplementedError("not implemented")

    @abstractmethod
    async def _get_recordtree_transmitters(
        self,
        trans_records: Dict[str, str],
        record_type: RecordType,
        path: Optional[str] = None,
    ) -> Dict[str, "RecordTransmitter"]:
        raise NotImplementedError("not implemented")

    async def _load_numerical_recordtree(
        self,
        transmitters: Dict[str, "RecordTransmitter"],
    ) -> NumericalRecordTree:
        flat_record_dict = {
            rec_path: await transmitter._load_numerical_record()
            for rec_path, transmitter in transmitters.items()
        }
        record_dict = _unflatten_record_dict(flat_record_dict)
        return NumericalRecordTree(record_dict=record_dict)

    async def _load_blob_recordtree(
        self,
        transmitters: Dict[str, "RecordTransmitter"],
    ) -> BlobRecordTree:
        record_path_dict = {
            rec_path: await transmitter._load_blob_record()
            for rec_path, transmitter in transmitters.items()
        }
        record_dict = _unflatten_record_dict(record_path_dict)
        return BlobRecordTree(record_dict=record_dict)

    async def load(self) -> Record:
        if not self.is_transmitted():
            raise RuntimeError("cannot load untransmitted record")
        if self._record_type == RecordType.NUMERICAL_TREE:
            record = await self._load_blob_record()
            sub_records = json.loads(record.data.decode("utf-8"))
            transmitters = await self._get_recordtree_transmitters(
                sub_records, RecordType.MAPPING_STR_FLOAT
            )
            return await self._load_numerical_recordtree(transmitters)
        elif self._record_type == RecordType.BLOB_TREE:
            record = await self._load_blob_record()
            sub_records = json.loads(record.data.decode("utf-8"))
            transmitters = await self._get_recordtree_transmitters(
                sub_records, RecordType.BYTES
            )
            return await self._load_blob_recordtree(transmitters)
        elif self._record_type != RecordType.BYTES:
            return await self._load_numerical_record()
        return await self._load_blob_record()

    @abstractmethod
    async def _transmit_recordtree(
        self, record: Union[NumericalRecordTree, BlobRecordTree]
    ) -> str:
        raise NotImplementedError("not implemented")

    @abstractmethod
    async def _transmit_numerical_record(self, record: NumericalRecord) -> str:
        raise NotImplementedError("not implemented")

    @abstractmethod
    async def _transmit_blob_record(self, record: BlobRecord) -> str:
        raise NotImplementedError("not implemented")

    async def transmit_record(self, record: Record) -> None:
        if self.is_transmitted():
            raise RuntimeError("Record already transmitted")
        if isinstance(record, NumericalRecord):
            uri = await self._transmit_numerical_record(record)
        elif isinstance(record, BlobRecord):
            uri = await self._transmit_blob_record(record)
        elif isinstance(record, (NumericalRecordTree, BlobRecordTree)):
            uri = await self._transmit_recordtree(record)
        else:
            raise TypeError(f"Record type not supported {type(record)}")
        self._set_transmitted_state(uri, record_type=record.record_type)

    async def transmit_file(
        self,
        file: Path,
        mime: str,
    ) -> None:
        if self.is_transmitted():
            raise RuntimeError("Record already transmitted")
        if mime == "application/octet-stream":
            async with aiofiles.open(str(file), mode="rb") as fb:
                contents_b: bytes = await fb.read()
                blob_record = BlobRecord(data=contents_b)
            uri = await self._transmit_blob_record(blob_record)
            self._set_transmitted_state(uri, blob_record.record_type)
        else:
            serializer = get_serializer(mime)
            _record_data = await serializer.decode_from_path(file)
            num_record = NumericalRecord(data=_record_data)
            uri = await self._transmit_numerical_record(num_record)
            self._set_transmitted_state(uri, num_record.record_type)

    async def dump(self, location: Path, mime: str) -> None:
        if not self.is_transmitted():
            raise RuntimeError("cannot dump untransmitted record")
        if self._record_type in (RecordType.NUMERICAL_TREE, RecordType.BLOB_TREE):
            record_blob = await self._load_blob_record()
            async with aiofiles.open(str(location), mode="wb") as fb:
                await fb.write(record_blob.data)
                return
        record = await self.load()
        if isinstance(record, NumericalRecord):
            async with aiofiles.open(str(location), mode="wt", encoding="utf-8") as ft:
                await ft.write(get_serializer(mime).encode(record.data))
        else:
            async with aiofiles.open(str(location), mode="wb") as fb:
                await fb.write(record.data)  # type: ignore


class SharedDiskRecordTransmitter(RecordTransmitter):
    _INTERNAL_MIME_TYPE = "application/x-yaml"

    def __init__(self, name: str, storage_path: Path):
        super().__init__(RecordTransmitterType.shared_disk)
        self._storage_path = storage_path
        self._storage_path.mkdir(parents=True, exist_ok=True)
        self._concrete_key = f"{name}_{uuid.uuid4()}"
        self._storage_uri = self._storage_path / self._concrete_key

    async def _get_recordtree_transmitters(
        self,
        trans_records: Dict[str, str],
        record_type: RecordType,
        path: Optional[str] = None,
    ) -> Dict[str, RecordTransmitter]:
        transmitters: Dict[str, RecordTransmitter] = {}
        for record_path, record_uri in trans_records.items():
            if path is None or path in record_path:
                record_name = record_path.split("/")[-1]
                transmitter = SharedDiskRecordTransmitter(
                    record_name, self._storage_path
                )
                transmitter._set_transmitted_state(record_uri, record_type)
                transmitters[record_path] = transmitter
        return transmitters

    async def _transmit_recordtree(
        self, record: Union[NumericalRecordTree, BlobRecordTree]
    ) -> str:
        data = {}
        for rec_path in record.flat_record_dict:
            rec_key = rec_path.split("/")[-1]
            transmitter = SharedDiskRecordTransmitter(
                name=rec_key,
                storage_path=self._storage_path,
            )
            await transmitter.transmit_record(record.flat_record_dict[rec_path])
            data[rec_path] = transmitter._uri
        await self._transmit_blob_record(
            BlobRecord(data=json.dumps(data).encode("utf-8"))
        )
        return str(self._storage_uri)

    async def _transmit_numerical_record(self, record: NumericalRecord) -> str:
        contents = get_serializer(
            SharedDiskRecordTransmitter._INTERNAL_MIME_TYPE
        ).encode(record.data)
        async with aiofiles.open(self._storage_uri, mode="wt", encoding="utf-8") as f:
            await f.write(contents)
        return str(self._storage_uri)

    async def _transmit_blob_record(self, record: BlobRecord) -> str:
        async with aiofiles.open(self._storage_uri, mode="wb") as f:
            await f.write(record.data)
        return str(self._storage_uri)

    async def _load_numerical_record(self) -> NumericalRecord:
        async with aiofiles.open(str(self._uri), mode="rt", encoding="utf-8") as f:
            contents = await f.read()
        serializer = get_serializer(SharedDiskRecordTransmitter._INTERNAL_MIME_TYPE)
        data = serializer.decode(contents)
        return NumericalRecord(data=data)

    async def _load_blob_record(self) -> BlobRecord:
        async with aiofiles.open(str(self._uri), mode="rb") as f:
            data = await f.read()
        return BlobRecord(data=data)

    async def dump(self, location: Path, mime: str) -> None:
        if not self.is_transmitted():
            raise RuntimeError("cannot dump untransmitted record")
        if (
            self._record_type == RecordType.BYTES
            or mime == SharedDiskRecordTransmitter._INTERNAL_MIME_TYPE
        ):
            await _copy(self._uri, str(location))
        else:
            record = await self._load_numerical_record()
            contents = get_serializer(mime).encode(record.data)
            async with aiofiles.open(location, mode="wt", encoding="utf-8") as f:
                await f.write(contents)


class InMemoryRecordTransmitter(RecordTransmitter):
    def __init__(self, name: str):
        super().__init__(RecordTransmitterType.in_memory)
        self._name = name
        self._record: Record
        self._sub_transmitters: Dict[str, RecordTransmitter] = {}

    async def _get_recordtree_transmitters(
        self,
        trans_records: Dict[str, str],
        record_type: RecordType,
        path: Optional[str] = None,
    ) -> Dict[str, RecordTransmitter]:
        transmitters = {
            record_path: self._sub_transmitters[record_path]
            for record_path in trans_records
            if path is None or path in record_path
        }
        return transmitters

    async def _transmit_numerical_record(self, record: NumericalRecord) -> str:
        self._record = record
        return "in_memory"

    async def _transmit_blob_record(self, record: BlobRecord) -> str:
        self._record = record
        return "in_memory"

    async def _transmit_recordtree(
        self, record: Union[NumericalRecordTree, BlobRecordTree]
    ) -> str:
        data = {}
        for rec_path in record.flat_record_dict:
            rec_key = rec_path.split("/")[-1]
            transmitter = InMemoryRecordTransmitter(name=rec_key)
            await transmitter.transmit_record(record.flat_record_dict[rec_path])
            data[rec_path] = transmitter._uri
            self._sub_transmitters[rec_path] = transmitter
        self._record = BlobRecord(data=json.dumps(data).encode("utf-8"))
        return "in_memory"

    async def _load_numerical_record(self) -> NumericalRecord:
        if not isinstance(self._record, NumericalRecord):
            raise TypeError("loading numerical from blob record")
        return self._record

    async def _load_blob_record(self) -> BlobRecord:
        if not isinstance(self._record, BlobRecord):
            raise TypeError("loading blob from numerical record")
        return self._record
