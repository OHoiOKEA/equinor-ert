from PyQt5.QtCore import QModelIndex
from tests.gui.models.conftest import partial_snapshot
from ert_gui.model.snapshot import NodeRole, SnapshotModel
from pytestqt.qt_compat import qt_api


def test_using_qt_model_tester(qtmodeltester, full_snapshot):
    model = SnapshotModel()

    reporting_mode = qt_api.QtTest.QAbstractItemModelTester.FailureReportingMode.Warning
    tester = qt_api.QtTest.QAbstractItemModelTester(  # noqa, prevent GC
        model, reporting_mode
    )

    model._add_snapshot(full_snapshot, 0)
    model._add_snapshot(full_snapshot, 1)

    partial = partial_snapshot(full_snapshot)
    model._add_partial_snapshot(partial, 0)
    model._add_partial_snapshot(partial, 1)

    qtmodeltester.check(model, force_py=True)


def test_realization_sort_order(full_snapshot):
    model = SnapshotModel()

    model._add_snapshot(full_snapshot, 0)

    for i in range(0, 100):
        iter_index = model.index(i, 0, model.index(0, 0, QModelIndex()))

        assert str(i) == iter_index.internalPointer().id, print(
            i, iter_index.internalPointer()
        )
