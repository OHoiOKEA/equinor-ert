#  Copyright (C) 2016  Equinor ASA, Norway.
#
#  The file 'run_analysis_tool.py' is part of ERT - Ensemble based Reservoir Tool.
#
#  ERT is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#
#  ERT is distributed in the hope that it will be useful, but WITHOUT ANY
#  WARRANTY; without even the implied warranty of MERCHANTABILITY or
#  FITNESS FOR A PARTICULAR PURPOSE.
#
#  See the GNU General Public License at <http://www.gnu.org/licenses/gpl.html>
#  for more details.

from qtpy.QtWidgets import QMessageBox

from res.enkf import ErtRunContext
from res.enkf import ESUpdate, ErtAnalysisError

from ert_gui.ertwidgets import resourceIcon
from ert_gui.ertwidgets.closabledialog import ClosableDialog
from ert_gui.tools import Tool
from ert_gui.tools.run_analysis import RunAnalysisPanel


def analyse(ert, target, source):
    """Runs analysis using target and source cases. Returns whether or not
    the analysis was successful."""
    fs_manager = ert.getEnkfFsManager()
    es_update = ESUpdate(ert)

    target_fs = fs_manager.getFileSystem(target)
    source_fs = fs_manager.getFileSystem(source)
    run_context = ErtRunContext.ensemble_smoother_update(
        source_fs,
        target_fs,
    )
    es_update.smootherUpdate(run_context)


class RunAnalysisTool(Tool):
    def __init__(self, ert, notifier):
        self.ert = ert
        self.notifier = notifier
        super().__init__(
            "Run analysis", "tools/run_analysis", resourceIcon("formula.svg")
        )
        self._run_widget = None
        self._dialog = None
        self._selected_case_name = None

    def trigger(self):
        if self._run_widget is None:
            self._run_widget = RunAnalysisPanel(self.ert, self.notifier)
        self._dialog = ClosableDialog("Run analysis", self._run_widget, self.parent())
        self._dialog.addButton("Run", self.run)
        self._dialog.exec_()

    def run(self):
        target = self._run_widget.target_case()
        source = self._run_widget.source_case()

        if len(target) == 0:
            self._report_empty_target()
            return

        try:
            analyse(self.ert, target, source)
            error = None
        except ErtAnalysisError as e:
            error = str(e)
        except Exception as e:
            error = f"Uknown exception occured with error: {str(e)}"

        msg = QMessageBox()
        msg.setWindowTitle("Run analysis")
        msg.setStandardButtons(QMessageBox.Ok)

        if not error:
            msg.setIcon(QMessageBox.Information)
            msg.setText(f"Successfully ran analysis for case '{source}'.")
            msg.exec_()
        else:
            msg.setIcon(QMessageBox.Warning)
            msg.setText(
                f"Unable to run analysis for case '{source}'.\n"
                f"The following error occured: {error}"
            )
            msg.exec_()
            return

        self.notifier.ertChanged.emit()
        self._dialog.accept()

    def _report_empty_target(self):
        msg = QMessageBox()
        msg.setWindowTitle("Invalid target")
        msg.setIcon(QMessageBox.Warning)
        msg.setText("Target case can not be empty")
        msg.setStandardButtons(QMessageBox.Ok)
        msg.exec_()
