import argparse
import os
import shutil
from unittest.mock import MagicMock, Mock, PropertyMock

import pytest
from qtpy.QtCore import Qt, QTimer
from qtpy.QtWidgets import QComboBox, QDialog, QMessageBox, QWidget

import ert.gui
from ert.gui.ertwidgets.message_box import ErtMessageBox
from ert.gui.main import GUILogHandler, _setup_main_window, run_gui
from ert.gui.tools.event_viewer import add_gui_log_handler
from ert.shared.models import BaseRunModel


@pytest.fixture(name="patch_enkf_main")
def fixture_patch_enkf_main(monkeypatch, tmp_path):
    mocked_enkf_main = Mock()
    mocked_enkf_main.getEnsembleSize.return_value = 10
    mocked_enkf_main.storage_manager = MagicMock()

    mocked_enkf_main.getWorkflowList.return_value.getWorkflowNames.return_value = [
        "my_workflow"
    ]

    res_config_mock = Mock()
    res_config_mock.workflow_jobs = {}
    type(res_config_mock).config_path = PropertyMock(return_value=tmp_path)
    mocked_enkf_main.resConfig.return_value = res_config_mock
    analysis_mock = Mock()
    analysis_mock.case_format_is_set.return_value = False
    facade_mock = Mock()
    facade_mock.get_ensemble_size.return_value = 1
    facade_mock.get_number_of_iterations.return_value = 1
    facade_mock.get_current_case_name.return_value = "default"
    facade_mock.get_analysis_config.return_value = analysis_mock
    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel,
        "LibresFacade",
        Mock(return_value=facade_mock),
    )

    monkeypatch.setattr(
        ert.gui.simulation.ensemble_smoother_panel,
        "LibresFacade",
        Mock(return_value=facade_mock),
    )
    monkeypatch.setattr(
        ert.gui.ertwidgets.caseselector.CaseSelector,
        "_getAllCases",
        Mock(return_value=["test"]),
    )

    def patched_mask_to_rangestring(mask):
        return ""

    monkeypatch.setattr(
        "ert._c_wrappers.config.rangestring.mask_to_rangestring.__code__",
        patched_mask_to_rangestring.__code__,
    )

    monkeypatch.setattr(
        ert.gui.ertwidgets.summarypanel.ErtSummary,
        "getForwardModels",
        Mock(return_value=[]),
    )
    monkeypatch.setattr(
        ert.gui.ertwidgets.summarypanel.ErtSummary,
        "getParameters",
        Mock(return_value=[]),
    )
    monkeypatch.setattr(
        ert.gui.ertwidgets.summarypanel.ErtSummary,
        "getObservations",
        Mock(return_value=[]),
    )

    yield mocked_enkf_main


def test_gui_load(qtbot, patch_enkf_main):
    args = argparse.Namespace(config="does_not_matter.ert")
    gui = _setup_main_window(patch_enkf_main, args, GUILogHandler())
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

    args = argparse.Namespace(config="poly_example/poly.ert")

    monkeypatch.chdir(tmp_path)

    qapp.exec_ = lambda: None  # exec_ starts the event loop, and will stall the test.
    monkeypatch.setattr(ert.gui.main, "QApplication", Mock(return_value=qapp))
    run_gui(args)
    mock_start_server.assert_called_once_with(
        project=str(tmp_path / "poly_example" / "storage"), res_config="poly.ert"
    )


@pytest.mark.requires_window_manager
def test_that_loading_gui_creates_a_single_storage_folder(
    monkeypatch, tmp_path, qapp, source_root
):
    shutil.copytree(
        os.path.join(source_root, "test-data", "poly_example"),
        os.path.join(tmp_path, "poly_example"),
    )

    monkeypatch.chdir(tmp_path)

    args = argparse.Namespace(config="poly_example/poly.ert")

    qapp.exec_ = lambda: None  # exec_ starts the event loop, and will stall the test.
    monkeypatch.setattr(ert.gui.main, "QApplication", Mock(return_value=qapp))
    monkeypatch.setattr(ert.gui.main.LibresFacade, "enspath", tmp_path)
    run_gui(args)
    assert [p.stem for p in tmp_path.glob("**/*")].count("storage") == 1


def test_gui_iter_num(monkeypatch, qtbot, patch_enkf_main):
    # won't run simulations so we mock it and test whether "iter_num" is in arguments
    def _assert_iter_in_args(panel):
        assert panel.getSimulationArguments().iter_num == 10

    args_mock = Mock()
    type(args_mock).config = PropertyMock(return_value="config.ert")

    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel.SimulationPanel,
        "runSimulation",
        _assert_iter_in_args,
    )

    gui = _setup_main_window(patch_enkf_main, args_mock, GUILogHandler())
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


def test_start_simulation_disabled(monkeypatch, qtbot, patch_enkf_main):
    args_mock = Mock()
    type(args_mock).config = PropertyMock(return_value="config.ert")

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

    dummy_model = BaseRunModel(None, None, None, None)
    dummy_model.check_if_runpath_exists = lambda *args: False
    monkeypatch.setattr(
        ert.gui.simulation.simulation_panel, "create_model", lambda *args: dummy_model
    )

    gui = _setup_main_window(patch_enkf_main, args_mock, GUILogHandler())
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
