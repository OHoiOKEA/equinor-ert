from ert_shared.status.utils import byte_with_unit
import logging

from ert_gui.model.node import Node, NodeType, snapshot_to_tree
from ert_shared.ensemble_evaluator.entity.snapshot import (
    PartialSnapshot,
    Snapshot,
)
from ert_shared.ensemble_evaluator.entity import identifiers as ids

from qtpy.QtCore import QAbstractItemModel, QModelIndex, Qt, QVariant
from qtpy.QtGui import QColor

from ert_shared.status.entity.state import JOB_STATE_FINISHED, REAL_STATE_TO_COLOR


logger = logging.getLogger(__name__)


NodeRole = Qt.UserRole + 1
RealJobColorHint = Qt.UserRole + 2
RealStatusColorHint = Qt.UserRole + 3
RealLabelHint = Qt.UserRole + 4
ProgressRole = Qt.UserRole + 5
FileRole = Qt.UserRole + 6


COLUMNS = {
    NodeType.ROOT: ["Name", "Status"],
    NodeType.ITER: ["Name", "Status", "Active"],
    NodeType.REAL: ["Name", "Status"],
    NodeType.STAGE: ["Name", "Status"],
    NodeType.STEP: [
        "Name",
        "Status",
        "Start time",
        "End time",
        "STDOUT",
        "STDERR",
        "Current Memory Usage",
        "Max Memory Usage",
    ],
    NodeType.JOB: [],
}


class SnapshotModel(QAbstractItemModel):
    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.root = Node(None, {}, NodeType.ROOT)

    def _add_partial_snapshot(self, partial: PartialSnapshot, iter_: int):
        partial_d = partial.to_dict()
        if iter_ not in self.root.children:
            logger.debug("no full snapshot yet, bailing")
            return
        iter_index = self.index(iter_, 0, QModelIndex())
        iter_node = self.root.children[iter_]
        if ids.REALS not in partial_d:
            logger.debug(f"no realizations in partial for iter {iter_}")
            return
        for real_id in sorted(partial_d[ids.REALS], key=int):
            real = partial_d[ids.REALS][real_id]
            real_node = iter_node.children[real_id]
            if real.get(ids.STATUS):
                real_node.data[ids.STATUS] = real.get(ids.STATUS)

            real_index = self.index(real_node.row(), 0, iter_index)
            real_index_bottom_right = self.index(
                real_node.row(), self.columnCount(iter_index) - 1, iter_index
            )

            if ids.STAGES not in real:
                continue

            # TODO: sort stages, but wait till after https://github.com/equinor/ert/issues/1220 ?
            for stage_id, stage in real[ids.STAGES].items():
                stage_node = real_node.children[stage_id]

                if stage.get(ids.STATUS):
                    stage_node.data[ids.STATUS] = stage.get(ids.STATUS)

                stage_index = self.index(stage_node.row(), 0, real_index)
                stage_index_bottom_right = self.index(
                    stage_node.row(), self.columnCount(real_index) - 1, real_index
                )

                if ids.STEPS not in stage:
                    continue

                # TODO: sort steps, but wait till after https://github.com/equinor/ert/issues/1220 ?
                for step_id, step in stage[ids.STEPS].items():
                    step_node = stage_node.children[step_id]
                    if step.get(ids.STATUS):
                        step_node.data[ids.STATUS] = step.get(ids.STATUS)

                    step_index = self.index(step_node.row(), 0, stage_index)
                    step_index_bottom_right = self.index(
                        step_node.row(), self.columnCount(stage_index) - 1, stage_index
                    )

                    if ids.JOBS not in step:
                        continue

                    for job_id in sorted(step[ids.JOBS], key=int):
                        job = step[ids.JOBS][job_id]
                        job_node = step_node.children[job_id]
                        for attr in (
                            ids.STATUS,
                            ids.START_TIME,
                            ids.END_TIME,
                            ids.STDOUT,
                            ids.STDERR,
                        ):
                            if attr in job:
                                job_node.data[attr] = job[attr]

                        # TODO: this is ugly
                        if job.get(ids.DATA, {}).get(ids.CURRENT_MEMORY_USAGE):
                            job_node.data[ids.DATA][ids.CURRENT_MEMORY_USAGE] = job[
                                ids.DATA
                            ][ids.CURRENT_MEMORY_USAGE]
                        if job.get(ids.DATA, {}).get(ids.MAX_MEMORY_USAGE):
                            job_node.data[ids.DATA][ids.MAX_MEMORY_USAGE] = job[
                                ids.DATA
                            ][ids.MAX_MEMORY_USAGE]

                        job_index = self.index(job_node.row(), 0, step_index)
                        job_index_bottom_right = self.index(
                            job_node.row(), self.columnCount() - 1, step_index
                        )
                        self.dataChanged.emit(job_index, job_index_bottom_right)
                    self.dataChanged.emit(step_index, step_index_bottom_right)
                self.dataChanged.emit(stage_index, stage_index_bottom_right)
            self.dataChanged.emit(real_index, real_index_bottom_right)
            # TODO: there is no check that any of the data *actually* changed
            # https://github.com/equinor/ert/issues/1374

        top_left = self.index(0, 0, iter_index)
        bottom_right = self.index(0, 1, iter_index)
        self.dataChanged.emit(top_left, bottom_right)

    def _add_snapshot(self, snapshot: Snapshot, iter_: int):
        snapshot_tree = snapshot_to_tree(snapshot, iter_)
        if iter_ in self.root.children:
            self.modelAboutToBeReset.emit()
            self.root.children[iter_] = snapshot_tree
            snapshot_tree.parent = self.root
            self.modelReset.emit()
            return

        parent = QModelIndex()
        next_iter = len(self.root.children)
        self.beginInsertRows(parent, next_iter, next_iter)
        self.root.add_child(snapshot_tree)
        self.root.children[iter_] = snapshot_tree
        self.rowsInserted.emit(parent, snapshot_tree.row(), snapshot_tree.row())

    def columnCount(self, parent=QModelIndex()):
        parent_node = parent.internalPointer()
        if parent_node is None:
            return len(COLUMNS[NodeType.ROOT])
        return len(COLUMNS[parent_node.type])

    def rowCount(self, parent=QModelIndex()):
        if not parent.isValid():
            parentItem = self.root
        else:
            parentItem = parent.internalPointer()

        if parent.column() > 0:
            return 0

        return len(parentItem.children)

    def parent(self, index: QModelIndex):
        if not index.isValid():
            return QModelIndex()

        child_item = index.internalPointer()
        # if child_item is root? might be misbehaving proxy model...
        if not hasattr(child_item, "parent"):
            print(
                "index pointed to parent-less item",
                child_item,
                index.row(),
                index.column(),
                index.parent(),
                index.parent().isValid(),
            )
            return QModelIndex()
        parentItem = child_item.parent

        if parentItem == self.root:
            return QModelIndex()

        return self.createIndex(parentItem.row(), 0, parentItem)

    def data(self, index: QModelIndex, role=Qt.DisplayRole):
        if not index.isValid():
            return QVariant()

        if role == Qt.TextAlignmentRole:
            return Qt.AlignCenter

        node = index.internalPointer()

        if role == NodeRole:
            return node

        if node.type == NodeType.JOB:
            return self._job_data(index, node, role)
        elif node.type == NodeType.REAL:
            return self._real_data(index, node, role)

        if role == Qt.DisplayRole:
            if index.column() == 0:
                return f"{node.type}:{node.id}"
            if index.column() == 1:
                return f"{node.data['status']}"

        return QVariant()

    def _real_data(self, index: QModelIndex, node: Node, role: int):
        if role == RealJobColorHint:
            # TODO: make nicer + make sure it works with thare more than 1 job
            for _, stage in node.children.items():
                # print("1: ", stage)
                for _, step in stage.children.items():
                    # print("node2: ", step)
                    for _, job in step.children.items():
                        # print("node3: ", job.data)
                        status = job.data[ids.STATUS]
                        # print("job ", s)
                        return QColor(*REAL_STATE_TO_COLOR[status])

        elif role == RealLabelHint:
            return f"{node.id}"
        elif role == RealStatusColorHint:
            return QColor(*REAL_STATE_TO_COLOR[node.data[ids.STATUS]])
        else:
            return QVariant()

    def _job_data(self, index: QModelIndex, node: Node, role: int):
        if role == Qt.BackgroundRole:
            return QColor(*REAL_STATE_TO_COLOR[node.data.get(ids.STATUS)])
        if role == Qt.DisplayRole:
            if index.column() == 0:
                return node.data.get(ids.NAME)
            elif index.column() == 1:
                return node.data.get(ids.STATUS)
            elif index.column() == 2:
                return node.data.get(ids.START_TIME)
            elif index.column() == 3:
                return node.data.get(ids.END_TIME)
            elif index.column() == 4:
                return "OPEN" if node.data.get(ids.STDOUT) else QVariant()
            elif index.column() == 5:
                return "OPEN" if node.data.get(ids.STDERR) else QVariant()
            elif index.column() == 6:
                data = node.data.get(ids.DATA)
                bytes = data.get(ids.CURRENT_MEMORY_USAGE) if data else None
                if bytes:
                    return byte_with_unit(bytes)
            elif index.column() == 7:
                data = node.data.get(ids.DATA)
                bytes = data.get(ids.MAX_MEMORY_USAGE) if data else None
                if bytes:
                    return byte_with_unit(bytes)
        if role == FileRole:
            if index.column() == 4:
                return (
                    node.data.get(ids.STDOUT)
                    if node.data.get(ids.STDOUT)
                    else QVariant()
                )
            if index.column() == 5:
                return (
                    node.data.get(ids.STDERR)
                    if node.data.get(ids.STDERR)
                    else QVariant()
                )

        return QVariant()

    def index(self, row: int, column: int, parent=QModelIndex()) -> QModelIndex:
        if not self.hasIndex(row, column, parent):
            return QModelIndex()

        if not parent.isValid():
            parentItem = self.root
        else:
            parentItem = parent.internalPointer()

        childItem = None
        try:
            childItem = list(parentItem.children.values())[row]
        except KeyError:
            return QModelIndex()
        else:
            return self.createIndex(row, column, childItem)

    def reset(self):
        self.modelAboutToBeReset.emit()
        self.root = Node(None, {}, NodeType.ROOT)
        self.modelReset.emit()
