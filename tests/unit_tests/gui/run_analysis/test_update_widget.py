import numpy as np
from pytestqt.qtbot import QtBot
from qtpy.QtWidgets import QTableWidget

from ert.gui.simulation.view import UpdateWidget
from ert.run_models.event import RunModelCSVEvent


def test_update_widget(qtbot: QtBot):
    event = RunModelCSVEvent(
        iteration=0, name="test", header=["a", "b"], data=np.array([[42, 2], [3, 4]])
    )
    widget = UpdateWidget(event.iteration)
    widget.show()
    qtbot.addWidget(widget)
    widget.add_csv(event)
    table = widget.findChild(QTableWidget, "CSV_test")

    assert table is not None
    assert (table.columnCount(), table.rowCount()) == (2, 2)
    assert table.item(1, 1).text() == "4"
