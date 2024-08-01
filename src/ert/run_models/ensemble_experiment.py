from __future__ import annotations

from queue import SimpleQueue
from typing import TYPE_CHECKING

import numpy as np

from ert.enkf_main import sample_prior
from ert.ensemble_evaluator import EvaluatorServerConfig
from ert.storage import Ensemble, Experiment, Storage

from ..run_arg import create_run_arguments
from .base_run_model import BaseRunModel, StatusEvents

if TYPE_CHECKING:
    from ert.config import ErtConfig, QueueConfig
    from ert.run_models.run_arguments import (
        EnsembleExperimentRunArguments,
    )


class EnsembleExperiment(BaseRunModel):
    """
    This workflow will create a new experiment and a new ensemble from
    the user configuration. It will never overwrite existing ensembles, and
    will always sample parameters.
    """

    def __init__(
        self,
        simulation_arguments: EnsembleExperimentRunArguments,
        config: ErtConfig,
        storage: Storage,
        queue_config: QueueConfig,
        status_queue: SimpleQueue[StatusEvents],
    ):
        self.ensemble_name = simulation_arguments.ensemble_name
        self.experiment_name = simulation_arguments.experiment_name
        self.ensemble_size = simulation_arguments.ensemble_size
        self.experiment: Experiment | None = None
        self.ensemble: Ensemble | None = None

        super().__init__(
            config,
            storage,
            queue_config,
            status_queue,
            total_iterations=1,
            active_realizations=simulation_arguments.active_realizations,
            random_seed=simulation_arguments.random_seed,
            minimum_required_realizations=simulation_arguments.minimum_required_realizations,
        )

    def run_experiment(
        self,
        evaluator_server_config: EvaluatorServerConfig,
        restart: bool = False,
    ) -> None:
        self._current_iteration_label = self.run_message()
        if not restart:
            self.experiment = self._storage.create_experiment(
                name=self.experiment_name,
                parameters=self.ert_config.ensemble_config.parameter_configuration,
                observations=self.ert_config.observations,
                responses=self.ert_config.ensemble_config.response_configuration,
            )
            self.ensemble = self._storage.create_ensemble(
                self.experiment,
                name=self.ensemble_name,
                ensemble_size=self.ensemble_size,
            )
        else:
            self.active_realizations = self._create_mask_from_failed_realizations()

        assert self.experiment
        assert self.ensemble

        self.set_env_key("_ERT_EXPERIMENT_ID", str(self.experiment.id))
        self.set_env_key("_ERT_ENSEMBLE_ID", str(self.ensemble.id))

        run_args = create_run_arguments(
            self.run_paths,
            np.array(self.active_realizations, dtype=bool),
            ensemble=self.ensemble,
        )
        sample_prior(
            self.ensemble,
            np.where(self.active_realizations)[0],
            random_seed=self.random_seed,
        )

        self._evaluate_and_postprocess(
            run_args,
            self.ensemble,
            evaluator_server_config,
        )

        self._current_iteration_label = "Experiment completed."
        self.current_iteration = 1

    @classmethod
    def run_message(cls) -> str:
        return "Running ensemble experiment..."

    @classmethod
    def name(cls) -> str:
        return "Ensemble experiment"
