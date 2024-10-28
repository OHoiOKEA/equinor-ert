from __future__ import annotations

from qtpy.QtCore import Qt, Signal
from qtpy.QtWidgets import QFormLayout, QMessageBox, QWidget

from ert.gui.ertnotifier import ErtNotifier
from ert.gui.ertwidgets import (
    ActiveRealizationsModel,
    EnsembleSelector,
    ErtMessageBox,
    QApplication,
    StringBox,
    TextBox,
    TextModel,
)
from ert.libres_facade import LibresFacade
from ert.run_models.base_run_model import captured_logs
from ert.validation import RangeStringArgument, StringDefinition


class LoadResultsPanel(QWidget):
    panelConfigurationChanged = Signal()

    def __init__(self, facade: LibresFacade, notifier: ErtNotifier):
        self._facade = facade
        QWidget.__init__(self)

        self.setMinimumWidth(500)
        self.setMinimumHeight(200)
        self._dynamic = False
        self._notifier = notifier

        self.setWindowTitle("Load results manually")
        self.activateWindow()

        layout = QFormLayout()

        self._run_path_text = TextBox(TextModel(self.readCurrentRunPath()))
        self._run_path_text.setFixedHeight(80)
        self._run_path_text.setValidator(StringDefinition(required=["<IENS>"]))
        self._run_path_text.setObjectName("run_path_edit_lrm")
        self._run_path_text.getValidationSupport().validationChanged.connect(
            self.panelConfigurationChanged
        )

        layout.addRow("Load data from run path: ", self._run_path_text)
        ensemble_selector = EnsembleSelector(self._notifier)
        layout.addRow("Load into ensemble:", ensemble_selector)
        self._ensemble_selector = ensemble_selector

        ensemble_size = self._facade.get_ensemble_size()
        self._active_realizations_model = ActiveRealizationsModel(ensemble_size)
        self._active_realizations_field = StringBox(
            self._active_realizations_model,  # type: ignore
            "load_results_manually/Realizations",
        )
        self._active_realizations_field.setValidator(RangeStringArgument(ensemble_size))
        self._active_realizations_field.setObjectName("active_realizations_lrm")
        layout.addRow("Realizations to load:", self._active_realizations_field)

        self._active_realizations_field.getValidationSupport().validationChanged.connect(
            self.panelConfigurationChanged
        )
        self.setLayout(layout)

    def readCurrentRunPath(self) -> str:
        current_ensemble = self._notifier.current_ensemble_name
        run_path = self._facade.resolved_run_path
        run_path = run_path.replace("<ERTCASE>", current_ensemble)
        run_path = run_path.replace("<ERT-CASE>", current_ensemble)
        return run_path

    def isConfigurationValid(self) -> bool:
        return (
            self._active_realizations_field.isValid() and self._run_path_text.isValid()
        )

    def load(self) -> int:
        realizations = self._active_realizations_model.getActiveRealizationsMask()
        active_realizations = [
            iens for iens, active in enumerate(realizations) if active
        ]
        QApplication.setOverrideCursor(Qt.CursorShape.WaitCursor)
        messages: list[str] = []
        with captured_logs(messages):
            loaded = self._facade.load_from_run_path(
                run_path_format=self._run_path_text.get_text,
                ensemble=self._notifier.current_ensemble,  # type: ignore
                active_realizations=active_realizations,
            )
        QApplication.restoreOverrideCursor()

        if loaded == realizations.count(True):
            QMessageBox.information(
                self, "Success", "Successfully loaded all realisations"
            )
        elif loaded > 0:
            msg = ErtMessageBox(
                f"Successfully loaded {loaded} realizations", "\n".join(messages)
            )
            msg.exec_()
        else:
            msg = ErtMessageBox("No realizations loaded", "\n".join(messages))
            msg.exec_()
        return loaded

    def refresh(self) -> None:
        self._run_path_text.setText(self.readCurrentRunPath())
        self._run_path_text.refresh()
