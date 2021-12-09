import pytest
from qtpy import QtCore
from qtpy.QtCore import QModelIndex, QSize
from qtpy.QtWidgets import QStyledItemDelegate, QStyleOptionViewItem

from ert_gui.model.node import Node
from ert_gui.model.snapshot import SnapshotModel
from ert_gui.simulation.view.realization import RealizationWidget


class MockDelegate(QStyledItemDelegate):
    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self._size = QSize(50, 50)
        self._max_id = 0

    def paint(self, painter, option: QStyleOptionViewItem, index: QModelIndex) -> None:
        self._max_id = max(int(index.internalPointer().id), self._max_id)

    def sizeHint(self, option, index) -> QSize:
        return self._size


@pytest.mark.requires_window_manager
def test_delegate_drawing_count(small_snapshot, qtbot):
    iter = 0
    widget = RealizationWidget(iter)

    qtbot.addWidget(widget)

    with qtbot.waitActive(widget, timeout=30000):
        model = SnapshotModel()
        model._add_snapshot(SnapshotModel.prerender(small_snapshot), iter)

        widget.setSnapshotModel(model)

        widget.move(0, 0)
        widget.resize(640, 480)

        # mock delegate for counting how many times we draw delegates
        mock_delegate = MockDelegate()
        widget._real_view.setItemDelegate(mock_delegate)

        widget.show()
        qtbot.wait(1000)
        print(mock_delegate._max_id)
        qtbot.waitUntil(
            lambda: mock_delegate._max_id == len(small_snapshot.get_reals()) - 1,
            timeout=30000,
        )


@pytest.mark.requires_window_manager
def test_selection_success(large_snapshot, qtbot):
    iter = 0
    widget = RealizationWidget(iter)

    qtbot.addWidget(widget)

    model = SnapshotModel()
    model._add_snapshot(SnapshotModel.prerender(large_snapshot), iter)

    widget.setSnapshotModel(model)

    widget.resize(800, 600)
    widget.move(0, 0)

    with qtbot.waitActive(widget, timeout=30000):
        widget.show()

    selection_id = 22
    selection_rect = widget._real_view.rectForIndex(
        widget._real_list_model.index(selection_id, 0, QModelIndex())
    )

    def check_selection_cb(index):
        node = index.internalPointer()
        return isinstance(node, Node) and str(node.id) == str(selection_id)

    with qtbot.waitSignal(
        widget.currentChanged, timeout=30000, check_params_cb=check_selection_cb
    ):
        qtbot.mouseClick(
            widget._real_view.viewport(),
            QtCore.Qt.LeftButton,
            pos=selection_rect.center(),
        )
