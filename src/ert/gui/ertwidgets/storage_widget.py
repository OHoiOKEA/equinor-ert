from qtpy.QtCore import (
    QItemSelectionModel,
    QModelIndex,
    QSortFilterProxyModel,
    Qt,
    Signal,
)
from qtpy.QtWidgets import (
    QLineEdit,
    QTreeView,
    QVBoxLayout,
    QWidget,
)

from ert.config import ErtConfig
from ert.gui.ertnotifier import ErtNotifier
from ert.gui.ertwidgets.create_experiment_dialog import CreateExperimentDialog
from ert.gui.ertwidgets.ensemblelist import AddWidget
from ert.gui.ertwidgets.models.storage_model import (
    EnsembleModel,
    ExperimentModel,
    RealizationModel,
    StorageModel,
)
from ert.storage import Ensemble, Experiment
from ert.storage.realization_storage_state import RealizationStorageState


class StorageWidget(QWidget):
    onSelectEnsemble = Signal(Ensemble)
    onSelectExperiment = Signal(Experiment)
    onSelectRealization = Signal(RealizationStorageState)

    def __init__(
        self, notifier: ErtNotifier, ert_config: ErtConfig, ensemble_size: int
    ):
        QWidget.__init__(self)

        self._notifier = notifier
        self._ert_config = ert_config
        self._ensemble_size = ensemble_size
        self.setMinimumWidth(450)
        self.setMaximumWidth(450)

        self._tree_view = QTreeView(self)
        storage_model = StorageModel(self._notifier.storage)
        notifier.storage_changed.connect(storage_model.reloadStorage)
        notifier.ertChanged.connect(
            lambda: storage_model.reloadStorage(self._notifier.storage)
        )

        search_bar = QLineEdit(self)
        search_bar.setPlaceholderText("Filter")
        proxy_model = QSortFilterProxyModel()
        proxy_model.setFilterKeyColumn(-1)  # Search all columns.
        proxy_model.setSourceModel(storage_model)
        proxy_model.sort(0, Qt.SortOrder.AscendingOrder)

        self._tree_view.setModel(proxy_model)
        search_bar.textChanged.connect(proxy_model.setFilterFixedString)

        selection_model = QItemSelectionModel(proxy_model)
        self._tree_view.setSelectionModel(selection_model)
        self._tree_view.selectionModel().currentChanged.connect(self._currentChanged)
        self._tree_view.setColumnWidth(0, 200)

        self._create_experiment_button = AddWidget(self._addItem)

        layout = QVBoxLayout()
        layout.addWidget(search_bar)
        layout.addWidget(self._tree_view)
        layout.addWidget(self._create_experiment_button)

        self.setLayout(layout)

    def _currentChanged(self, selected: QModelIndex, previous: QModelIndex) -> None:
        idx = self._tree_view.model().mapToSource(selected)
        cls = idx.internalPointer()

        if isinstance(cls, EnsembleModel):
            ensemble = self._notifier.storage.get_ensemble(cls._id)
            self.onSelectEnsemble.emit(ensemble)
        elif isinstance(cls, ExperimentModel):
            experiment = self._notifier.storage.get_experiment(cls._id)
            self.onSelectExperiment.emit(experiment)
        elif isinstance(cls, RealizationModel):
            realization_state = self._notifier.storage.get_ensemble(
                cls.ensemble
            ).get_ensemble_state()[cls.realization]
            self.onSelectRealization.emit(realization_state)

    def _addItem(self) -> None:
        create_experiment_dialog = CreateExperimentDialog(parent=self)
        create_experiment_dialog.show()
        if create_experiment_dialog.exec_():
            ensemble = self._notifier.storage.create_experiment(
                parameters=self._ert_config.ensemble_config.parameter_configuration,
                responses=self._ert_config.ensemble_config.response_configuration,
                observations=self._ert_config.observations,
                name=create_experiment_dialog.experiment_name,
            ).create_ensemble(
                name=create_experiment_dialog.ensemble_name,
                ensemble_size=self._ensemble_size,
            )
            self._notifier.set_current_ensemble(ensemble)
            self._notifier.ertChanged.emit()
