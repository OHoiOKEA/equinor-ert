import shutil
import sys
from pathlib import Path
from unittest.mock import MagicMock, call

import pytest
from utils import SOURCE_DIR
from ert_utils import tmpdir

from ert_shared import ERT
from ert_shared.cli.notifier import ErtCliNotifier
from ert_shared.exporter import Exporter
from ert_shared.plugins.plugin_manager import ErtPluginContext
from res.enkf import EnKFMain, ResConfig


@pytest.mark.skipif(sys.version_info.major < 3, reason="requires python3")
@tmpdir(SOURCE_DIR / "test-data/local/snake_oil")
def test_exporter_is_valid():
    with ErtPluginContext():
        config_file = "snake_oil.ert"
        rc = ResConfig(user_config_file=config_file)
        rc.convertToCReference(None)
        ert = EnKFMain(rc)
        notifier = ErtCliNotifier(ert, config_file)
        ERT.adapt(notifier)
        ex = Exporter()
        assert ex.is_valid(), "Missing CSV_EXPORT2 or EXPORT_RUNPATH jobs"


@pytest.mark.skipif(sys.version_info.major < 3, reason="requires python3")
@tmpdir(SOURCE_DIR / "test-data/local/snake_oil")
def test_exporter_is_not_valid():
    config_file = "snake_oil.ert"
    rc = ResConfig(user_config_file=config_file)
    rc.convertToCReference(None)
    ert = EnKFMain(rc)
    notifier = ErtCliNotifier(ert, config_file)
    ERT.adapt(notifier)
    ex = Exporter()
    assert not ex.is_valid()


@pytest.mark.skipif(sys.version_info.major < 3, reason="requires python3")
@tmpdir(SOURCE_DIR / "test-data/local/snake_oil")
def test_run_export():
    with ErtPluginContext():
        config_file = "snake_oil.ert"
        rc = ResConfig(user_config_file=config_file)
        rc.convertToCReference(None)
        ert = EnKFMain(rc)
        notifier = ErtCliNotifier(ert, config_file)
        ERT.adapt(notifier)
        ex = Exporter()
        parameters = {
            "output_file": "export.csv",
            "time_index": "raw",
            "column_keys": "FOPR",
        }
        ex.run_export(parameters)

        shutil.rmtree("storage")
        with pytest.raises(UserWarning) as warn:
            ex.run_export(parameters)
        assert ex._export_job in str(warn)


@tmpdir(SOURCE_DIR / "test-data/local/snake_oil")
def test_run_export_pathfile(monkeypatch):
    with ErtPluginContext():
        run_path_file = Path("output/run_path_file/.some_new_name")
        config_file = "snake_oil.ert"
        with open(config_file, encoding="utf-8", mode="a") as fout:
            fout.write(f"RUNPATH_FILE {run_path_file}\n")
        rc = ResConfig(user_config_file=config_file)
        ert = EnKFMain(rc)
        notifier = ErtCliNotifier(ert, config_file)
        ERT.adapt(notifier)
        run_mock = MagicMock()
        run_mock.hasFailed.return_value = False
        export_mock = MagicMock()
        export_mock.hasFailed.return_value = False

        monkeypatch.setattr(
            ERT.enkf_facade,
            "get_workflow_job",
            MagicMock(side_effect=[export_mock, run_mock]),
        )
        ex = Exporter()
        parameters = {
            "output_file": "export.csv",
            "time_index": "raw",
            "column_keys": "FOPR",
        }
        ex.run_export(parameters)
        expected_call = call(
            arguments=[f"{run_path_file.absolute()}", "export.csv", "raw", "FOPR"],
            ert=ERT.ert,
            verbose=True,
        )
        assert export_mock.run.call_args == expected_call
