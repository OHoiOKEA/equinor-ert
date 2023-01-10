import argparse
import os
import shutil
from pathlib import Path
from unittest.mock import Mock, PropertyMock

import pytest
from qtpy.QtCore import Qt, QTimer
from qtpy.QtWidgets import QComboBox, QDialog, QMessageBox, QWidget

import ert.gui
from ert._c_wrappers.enkf import EnKFMain, ResConfig
from ert.gui.ertwidgets.message_box import ErtMessageBox
from ert.gui.main import GUILogHandler, _setup_main_window, run_gui
from ert.gui.tools.event_viewer import add_gui_log_handler
from ert.shared.models import BaseRunModel


@pytest.mark.usefixtures("use_tmpdir")
def test_gui_load(qtbot):
    config_file = Path("config.ert")
    config_file.write_text("NUM_REALIZATIONS 1\n", encoding="utf-8")

    args = Mock()
    args.config = str(config_file)
    gui = _setup_main_window(
        EnKFMain(ResConfig(str(config_file))), args, GUILogHandler()
    )
    qtbot.addWidget(gui)

    sim_panel = gui.findChild(QWidget, name="Simulation_panel")
    single_run_panel = gui.findChild(QWidget, name="Single_test_run_panel")
    assert (
        sim_panel.getCurrentSimulationModel() == single_run_panel.getSimulationModel()
    )

    sim_mode = gui.findChild(QWidget, name="Simulation_mode")
    qtbot.keyClick(sim_mode, Qt.Key_Down)

    ensemble_panel = gui.findChild(QWidget, name="Ensemble_experiment_panel")
    assert sim_panel.getCurrentSimulationModel() == ensemble_panel.getSimulationModel()


@pytest.mark.requires_window_manager
def test_gui_full(monkeypatch, tmp_path, qapp, mock_start_server, source_root):
    shutil.copytree(
        os.path.join(source_root, "test-data", "poly_example"),
        os.path.join(tmp_path, "poly_example"),
    )

    args = argparse.Namespace(config="poly_example/poly.ert", read_only=True)

    monkeypatch.chdir(tmp_path)

    qapp.exec_ = lambda: None  # exec_ starts the event loop, and will stall the test.
    monkeypatch.setattr(ert.gui.main, "QApplication", Mock(return_value=qapp))
    run_gui(args)
    mock_start_server.assert_called_once_with(
        project=str(tmp_path / "poly_example" / "storage"),
        res_config="poly.ert",
    )


@pytest.mark.requires_window_manager
def test_that_loading_gui_creates_no_storage_in_read_only_mode(
    monkeypatch, tmp_path, qapp, source_root
):
    shutil.copytree(
        os.path.join(source_root, "test-data", "poly_example"),
        os.path.join(tmp_path, "poly_example"),
    )

    monkeypatch.chdir(tmp_path)

    args = argparse.Namespace(config="poly_example/poly.ert", read_only=True)

    qapp.exec_ = lambda: None  # exec_ starts the event loop, and will stall the test.
    monkeypatch.setattr(ert.gui.main, "QApplication", Mock(return_value=qapp))
    monkeypatch.setattr(ert.gui.main.LibresFacade, "enspath", tmp_path)
    run_gui(args)
    assert [p.stem for p in tmp_path.glob("**/*")].count("storage") == 0


@pytest.mark.usefixtures("use_tmpdir")
def test_gui_iter_num(monkeypatch, qtbot):
    config_file = Path("config.ert")
    config_file.write_text("NUM_REALIZATIONS 1\n", encoding="utf-8")

    args_mock = Mock()
    args_mock.config = str(config_file)

    # won't run simulations so we mock it and test whether "iter_num" is in arguments
    def _assert_iter_in_args(panel):
        assert panel.getSimulationArguments().iter_num == 10

    args_mock = Mock()
    args_mock.config = "poly.ert"
    type(args_mock).config = PropertyMock(return_value="config.ert")

    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel.SimulationPanel,
        "runSimulation",
        _assert_iter_in_args,
    )

    gui = _setup_main_window(
        EnKFMain(ResConfig(str(config_file))), args_mock, GUILogHandler()
    )
    qtbot.addWidget(gui)

    sim_mode = gui.findChild(QWidget, name="Simulation_mode")
    qtbot.keyClick(sim_mode, Qt.Key_Down)

    sim_panel = gui.findChild(QWidget, name="Simulation_panel")

    ensemble_panel = gui.findChild(QWidget, name="Ensemble_experiment_panel")
    # simulate entering number 10 as iter_num
    qtbot.keyClick(ensemble_panel._iter_field, Qt.Key_Backspace)
    qtbot.keyClicks(ensemble_panel._iter_field, "10")
    qtbot.keyClick(ensemble_panel._iter_field, Qt.Key_Enter)

    start_simulation = gui.findChild(QWidget, name="start_simulation")
    qtbot.mouseClick(start_simulation, Qt.LeftButton)
    assert sim_panel.getSimulationArguments().iter_num == 10


def test_that_gui_gives_suggestions_when_you_have_umask_in_config(
    monkeypatch, qapp, tmp_path
):
    config_file = tmp_path / "config.ert"
    config_file.write_text("NUM_REALIZATIONS 1\n UMASK 0222\n")

    args = Mock()
    args.config = str(config_file)
    with add_gui_log_handler() as log_handler:
        gui, _ = ert.gui.main._start_initial_gui_window(args, log_handler)
        assert gui.windowTitle() == "Some problems detected"


def test_that_errors_are_shown_in_the_suggester_window_when_present(
    monkeypatch, qapp, tmp_path
):
    config_file = tmp_path / "config.ert"
    config_file.write_text("NUM_REALIZATIONS 1 you_cant_do_this\n")

    args = Mock()
    args.config = str(config_file)
    with add_gui_log_handler() as log_handler:
        gui, _ = ert.gui.main._start_initial_gui_window(args, log_handler)
        assert gui.windowTitle() == "Some problems detected"


@pytest.mark.usefixtures("copy_poly_case")
def test_that_the_ui_show_no_warnings_when_observations_found(qapp):
    args = Mock()
    args.config = "poly.ert"
    with add_gui_log_handler() as log_handler:
        gui, _ = ert.gui.main._start_initial_gui_window(args, log_handler)
        combo_box = gui.findChild(QComboBox, name="Simulation_mode")
        assert combo_box.count() == 5

        for i in range(combo_box.count()):
            assert combo_box.model().item(i).isEnabled()

        assert gui.windowTitle() == "ERT - poly.ert"


def test_that_the_ui_show_warnings_when_there_are_no_observations(qapp, tmp_path):
    config_file = tmp_path / "config.ert"
    config_file.write_text("NUM_REALIZATIONS 1\n")

    args = Mock()
    args.config = str(config_file)
    with add_gui_log_handler() as log_handler:
        gui, _ = ert.gui.main._start_initial_gui_window(args, log_handler)
        combo_box = gui.findChild(QComboBox, name="Simulation_mode")
        assert combo_box.count() == 5

        for i in range(2):
            assert combo_box.model().item(i).isEnabled()
        for i in range(2, 5):
            assert not combo_box.model().item(i).isEnabled()

        assert gui.windowTitle() == "ERT - config.ert"


@pytest.mark.usefixtures("copy_poly_case")
def test_that_ert_starts_when_there_are_no_problems(monkeypatch, qapp, tmp_path):
    args = Mock()
    args.config = "poly.ert"
    with add_gui_log_handler() as log_handler:
        gui, _ = ert.gui.main._start_initial_gui_window(args, log_handler)
        assert gui.windowTitle() == "ERT - poly.ert"


@pytest.mark.usefixtures("use_tmpdir")
def test_that_start_simulation_is_disabled_until_dialog_is_accepted(
    monkeypatch, qtbot, storage
):
    config_file = Path("config.ert")
    config_file.write_text("NUM_REALIZATIONS 1\n", encoding="utf-8")

    args_mock = Mock()
    args_mock.config = str(config_file)

    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel.QMessageBox,
        "question",
        lambda *args: QMessageBox.Yes,
    )

    dummy_run_dialog = QDialog(None)
    dummy_run_dialog.startSimulation = lambda *args: None
    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel, "RunDialog", lambda *args: dummy_run_dialog
    )

    dummy_model = BaseRunModel(None, None, None, None, None)
    dummy_model.check_if_runpath_exists = lambda *args: False
    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel, "create_model", lambda *args: dummy_model
    )

    gui = _setup_main_window(
        EnKFMain(ResConfig(str(config_file))), args_mock, GUILogHandler()
    )
    gui.notifier.set_storage(storage)
    qtbot.addWidget(gui)

    start_simulation = gui.findChild(QWidget, name="start_simulation")

    def handle_dialog():
        assert not start_simulation.isEnabled()
        dummy_run_dialog.accept()

    QTimer.singleShot(10, handle_dialog)
    qtbot.mouseClick(start_simulation, Qt.LeftButton)
    assert start_simulation.isEnabled()


def test_dialog(qtbot):
    msg = ErtMessageBox("Simulations failed!", "failed_msg\nwith two lines")
    qtbot.addWidget(msg)
    assert msg.label_text.text() == "Simulations failed!"
    assert msg.details_text.toPlainText() == "failed_msg\nwith two lines"
