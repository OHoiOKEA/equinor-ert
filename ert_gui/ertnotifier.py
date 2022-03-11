from qtpy.QtCore import QObject, Signal, Slot

from res.enkf import EnKFMain


class ErtNotifier(QObject):
    ertChanged = Signal()

    def __init__(self, config_file, parent=None):
        QObject.__init__(self, parent)
        self._config_file = config_file

    @property
    def config_file(self):
        """@rtype: str"""
        return self._config_file

    @Slot()
    def emitErtChange(self):
        self.ertChanged.emit()

    def reloadERT(self, config_file):
        import sys
        import os

        python_executable = sys.executable
        ert_gui_main = sys.argv[0]

        os.execl(python_executable, python_executable, ert_gui_main, "gui", config_file)
