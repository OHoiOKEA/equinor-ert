from collections import defaultdict
from typing import Any, Dict, List, Optional, Union, overload

from qtpy.QtCore import QAbstractItemModel, QModelIndex, QObject, QSize, Qt, QVariant
from qtpy.QtGui import QColor, QFont
from typing_extensions import override

from ert.gui.model.snapshot import IsEnsembleRole, ProgressRole, StatusRole


class ProgressProxyModel(QAbstractItemModel):
    def __init__(
        self, source_model: QAbstractItemModel, parent: Optional[QModelIndex] = None
    ) -> None:
        QAbstractItemModel.__init__(self, parent)
        self._source_model: QAbstractItemModel = source_model
        self._progress: Optional[Dict[str, Union[dict[Any, Any], int]]] = None
        self._connect()

    def _connect(self) -> None:
        self._source_model.dataChanged.connect(self._source_data_changed)
        self._source_model.rowsInserted.connect(self._source_rows_inserted)
        self._source_model.modelAboutToBeReset.connect(self.modelAboutToBeReset)
        self._source_model.modelReset.connect(self._source_reset)

        # rowCount-1 of the top index in the underlying, will be the last/most
        # recent iteration. If it's -1, then there are no iterations yet.
        last_iter: int = self._source_model.rowCount(QModelIndex()) - 1
        if last_iter >= 0:
            self._recalculate_progress(last_iter)

    @override
    def columnCount(self, parent: Optional[QModelIndex] = None) -> int:
        if parent is None:
            parent = QModelIndex()
        if parent.isValid():
            return 0
        return 1

    @override
    def rowCount(self, parent: Optional[QModelIndex] = None) -> int:
        if parent is None:
            parent = QModelIndex()
        if parent.isValid():
            return 0
        return 1

    @override
    def index(
        self, row: int, column: int, parent: Optional[QModelIndex] = None
    ) -> QModelIndex:
        if parent is None:
            parent = QModelIndex()
        if parent.isValid():
            return QModelIndex()
        return self.createIndex(row, column, None)

    @overload
    def parent(self, child: QModelIndex) -> QModelIndex: ...
    @overload
    def parent(self) -> Optional[QObject]: ...
    @override
    def parent(self, child: Optional[QModelIndex] = None) -> Optional[QObject]:
        return QModelIndex()

    @override
    def hasChildren(self, parent: Optional[QModelIndex] = None) -> bool:
        if parent is None:
            return QModelIndex().isValid()
        return not parent.isValid()

    @override
    def data(self, index: QModelIndex, role: int = Qt.ItemDataRole.DisplayRole) -> Any:
        if not index.isValid():
            return QVariant()

        if role == Qt.ItemDataRole.TextAlignmentRole:
            return Qt.AlignmentFlag.AlignCenter

        if role == ProgressRole:
            return self._progress

        if role in (
            Qt.ItemDataRole.StatusTipRole,
            Qt.ItemDataRole.WhatsThisRole,
            Qt.ItemDataRole.ToolTipRole,
        ):
            return ""

        if role == Qt.ItemDataRole.SizeHintRole:
            return QSize(30, 30)

        if role == Qt.ItemDataRole.FontRole:
            return QFont()

        if role in (
            Qt.ItemDataRole.BackgroundRole,
            Qt.ItemDataRole.ForegroundRole,
            Qt.ItemDataRole.DecorationRole,
        ):
            return QColor()

        if role == Qt.ItemDataRole.DisplayRole:
            return ""

        return QVariant()

    def _recalculate_progress(self, iter_: int) -> None:
        status_counts: Dict[Any, int] = defaultdict(int)
        nr_reals: int = 0
        current_iter_index = self._source_model.index(iter_, 0, QModelIndex())
        if current_iter_index.internalPointer() is None:
            self._progress = None
            return
        for row in range(0, self._source_model.rowCount(current_iter_index)):
            real_index = self._source_model.index(row, 0, current_iter_index)
            status = real_index.data(StatusRole)
            nr_reals += 1
            status_counts[status] += 1
        self._progress = {"status": status_counts, "nr_reals": nr_reals}

    def _source_data_changed(
        self,
        top_left: QModelIndex,
        _bottom_right: QModelIndex,
        _roles: List[int],
    ) -> None:
        if top_left.internalPointer() is None:
            return
        if not top_left.data(IsEnsembleRole):
            return
        self._recalculate_progress(top_left.row())
        index = self.index(0, 0, QModelIndex())
        self.dataChanged.emit(index, index, [ProgressRole])

    def _source_rows_inserted(
        self, _parent: QModelIndex, start: int, _end: int
    ) -> None:
        self._recalculate_progress(start)
        index = self.index(0, 0, QModelIndex())
        self.dataChanged.emit(index, index, [ProgressRole])

    def _source_reset(self) -> None:
        self._recalculate_progress(0)
        self.modelReset.emit()
