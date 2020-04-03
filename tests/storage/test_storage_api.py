import json
import pprint

import pytest
from ert_shared.storage.blob_api import BlobApi
from ert_shared.storage.rdb_api import RdbApi
from ert_shared.storage.storage_api import StorageApi

from tests.storage import populated_db


def test_response(populated_db):
    with StorageApi(rdb_url=populated_db, blob_url=populated_db) as api:
        schema = api.response(1, "response_one", None)
        assert len(schema["realizations"]) == 2
        assert len(schema["observations"]) == 1
        assert len(schema["observations"][0]["data"]) == 4
        print("############### RESPONSE ###############")
        pprint.pprint(schema)


def test_ensembles(populated_db):
    with StorageApi(rdb_url=populated_db, blob_url=populated_db) as api:
        schema = api.ensembles()
        print("############### ENSEBMLES ###############")
        pprint.pprint(schema)


def test_ensemble(populated_db):
    with StorageApi(rdb_url=populated_db, blob_url=populated_db) as api:
        schema = api.ensemble_schema(1)
        print("############### ENSEMBLE ###############")
        pprint.pprint(schema)


def test_realization(populated_db):
    with StorageApi(rdb_url=populated_db, blob_url=populated_db) as api:
        schema = api.realization(ensemble_id=1, realization_idx=0, filter=None)
        print("############### REALIZATION ###############")
        pprint.pprint(schema)


def test_priors(populated_db):
    with StorageApi(rdb_url=populated_db, blob_url=populated_db) as api:
        schema = api.ensemble_schema(1)
        prior1 = schema["priors"][0]
        assert prior1["group"] == "group"
        assert prior1["key"] == "key1"
        assert prior1["function"] == "function"
        assert prior1["parameter_names"] == ["paramA", "paramB"]
        assert prior1["parameter_values"] == [0.1, 0.2]
