import asyncio
import concurrent
import logging
from typing import Any, Dict, List, Optional, Tuple
import functools

import _ert_com_protocol
from ert._c_wrappers.enkf import RunContext
from ert._c_wrappers.enkf.enkf_main import EnKFMain, QueueConfig
from ert._c_wrappers.enkf.enums import HookRuntime, RealizationStateEnum
from ert.analysis import ErtAnalysisError
from ert.ensemble_evaluator import EvaluatorServerConfig
from ert.shared.feature_toggling import FeatureToggling
from ert.shared.models import BaseRunModel, ErtRunError

logger = logging.getLogger(__file__)
experiment_logger = logging.getLogger("ert.experiment_server.ensemble_experiment")


class MultipleDataAssimilation(BaseRunModel):
    """
    Run multiple data assimilation (MDA) ensemble smoother with custom weights.
    """

    default_weights = "4, 2, 1"

    def __init__(
        self,
        simulation_arguments: Dict[str, Any],
        ert: EnKFMain,
        queue_config: QueueConfig,
        id_: str,
    ):
        super().__init__(simulation_arguments, ert, queue_config, id_, phase_count=2)
        self.weights = MultipleDataAssimilation.default_weights

    def setAnalysisModule(self, module_name: str) -> None:
        module_load_success = self.ert().analysisConfig().select_module(module_name)

        if not module_load_success:
            raise ErtRunError(f"Unable to load analysis module '{module_name}'!")

    async def run(
        self, evaluator_server_config: EvaluatorServerConfig, model_name: str
    ) -> RunContext:
        loop = asyncio.get_running_loop()
        threadpool = concurrent.futures.ThreadPoolExecutor()

        experiment_logger.debug("starting es-mda experiment")
        event = _ert_com_protocol.node_status_builder(
            status="EXPERIMENT_STARTED", experiment_id=self.id_
        )
        await self.dispatch(event)
        self._checkMinimumActiveRealizations(
            self._simulation_arguments["active_realizations"].count(True)
        )

        weights = self.parseWeights(self._simulation_arguments["weights"])
        iteration_count = len(weights)
        logger.info(
            f"Running MDA ES for {iteration_count}  "
            f'iterations\t{", ".join(str(weight) for weight in weights)}'
        )

        self.setAnalysisModule(self._simulation_arguments["analysis_module"])

        weights = self.normalizeWeights(weights)

        self.setPhaseCount(iteration_count + 1)  # weights + post
        phase_string = (
            f"Running MDA ES {iteration_count} "
            f'iteration{"s" if (iteration_count != 1) else ""}.'
        )
        self.setPhaseName(phase_string, indeterminate=True)

        starting_iteration = self._simulation_arguments["start_iteration"]
        case_format = self._simulation_arguments["target_case"]
        storage_manager = self.ert().storage_manager
        if starting_iteration > 0:
            if case_format % starting_iteration not in storage_manager:
                raise ErtRunError(
                    f"Source case {case_format % starting_iteration} for iteration "
                    f"{starting_iteration} does not exists in {storage_manager.cases}."
                    " If you are attempting to restart ESMDA from a iteration other "
                    "than 0, make sure the target case format is the same as for the "
                    f"original run.(Current target case format: {case_format})"
                )
        else:
            prior_fs = storage_manager.add_case(case_format % starting_iteration)
            active_realizations = [
                i
                for i, val in enumerate(
                    self._simulation_arguments["active_realizations"]
                )
                if val
            ]
            self.ert().sample_prior(prior_fs, active_realizations)

        update_id = None
        enumerated_weights = list(enumerate(weights))
        weights_to_run = enumerated_weights[
            min(self._simulation_arguments["start_iteration"], len(weights)) :
        ]
        for iteration, weight in weights_to_run:
            is_first_iteration = iteration == 0
            if is_first_iteration:
                mask = self._simulation_arguments["active_realizations"]
            else:
                mask = None

            run_context = await loop.run_in_executor(
                threadpool,
                self.create_context,
                iteration,
                mask,
            )
            _, ensemble_id = await self._simulateAndPostProcess(
                run_context,
                evaluator_server_config,
                update_id=update_id,
                loop=loop,
                threadpool=threadpool,
            )
            if is_first_iteration:
                await self._run_hook(
                    HookRuntime.PRE_FIRST_UPDATE, iteration, loop, threadpool
                )
            await self._run_hook(HookRuntime.PRE_UPDATE, iteration, loop, threadpool)
            update_id = await loop.run_in_executor(
                threadpool,
                self.update,
                run_context,
                weight,
                ensemble_id,
            )
            await self._run_hook(HookRuntime.POST_UPDATE, iteration, loop, threadpool)

        self.setPhaseName("Post processing...", indeterminate=True)

        run_context = await loop.run_in_executor(
            threadpool,
            functools.partial(self.create_context, itr=len(weights), update=False),
        )

        event = _ert_com_protocol.node_status_builder(
            status="EXPERIMENT_ANALYSIS_ENDED", experiment_id=self.id_
        )
        await self.dispatch(event)

        await self._simulateAndPostProcess(
            run_context,
            evaluator_server_config,
            update_id=update_id,
            loop=loop,
            threadpool=threadpool,
        )

        self.setPhase(iteration_count + 1, "Simulations completed.")

        return run_context

    def runSimulations(
        self, evaluator_server_config: EvaluatorServerConfig
    ) -> RunContext:
        return asyncio.run(
            self.run(evaluator_server_config, model_name="ES-MDA"), debug=True
        )

    def _count_active_realizations(self, run_context: RunContext) -> int:
        return sum(run_context.mask)

    def update(self, run_context: RunContext, weight: float, ensemble_id: str) -> str:
        next_iteration = run_context.iteration + 1

        phase_string = f"Analyzing iteration: {next_iteration} with weight {weight}"
        self.setPhase(self.currentPhase() + 1, phase_string, indeterminate=True)

        self.facade.set_global_std_scaling(weight)
        try:
            self.facade.smoother_update(run_context)
        except ErtAnalysisError as e:
            raise ErtRunError(
                "Analysis of simulation failed for iteration:"
                f"{next_iteration}. The following error occured {e}"
            ) from e
        # Push update data to new storage
        analysis_module_name = self.ert().analysisConfig().active_module_name()
        update_id = self._post_update_data(
            parent_ensemble_id=ensemble_id, algorithm=analysis_module_name
        )

        return update_id

    async def _simulateAndPostProcess(
        self,
        run_context: RunContext,
        evaluator_server_config: EvaluatorServerConfig,
        update_id: Optional[str],
        loop: asyncio.AbstractEventLoop,
        threadpool: Any,
    ) -> Any:
        iteration = run_context.iteration

        phase_string = f"Running simulation for iteration: {iteration}"
        self.setPhaseName(phase_string, indeterminate=True)

        await loop.run_in_executor(
            threadpool,
            self.ert().createRunPath,
            run_context,
        )

        phase_string = f"Pre processing for iteration: {iteration}"
        self.setPhaseName(phase_string)
        await self._run_hook(HookRuntime.PRE_SIMULATION, iteration, loop, threadpool)

        ensemble_id = await loop.run_in_executor(
            threadpool, self._post_ensemble_data, update_id
        )

        phase_string = f"Running forecast for iteration: {iteration}"
        self.setPhaseName(phase_string, indeterminate=False)

        num_successful_realizations = await self._evaluate(
            run_context, evaluator_server_config
        )

        if FeatureToggling.is_enabled("experiment-server"):
            num_successful_realizations = await self.successful_realizations(
                run_context.iteration
            )

        # Push simulation results to storage
        await loop.run_in_executor(threadpool, self._post_ensemble_results, ensemble_id)

        num_successful_realizations += self._simulation_arguments.get(
            "prev_successful_realizations", 0
        )

        try:
            self.checkHaveSufficientRealizations(num_successful_realizations)
        except ErtRunError as e:
            event = _ert_com_protocol.node_status_builder(
                status="EXPERIMENT_FAILED", experiment_id=self.id_
            )
            event.experiment.message = str(e)
            await self.dispatch(event)
            return run_context

        phase_string = f"Post processing for iteration: {iteration}"
        self.setPhaseName(phase_string, indeterminate=True)

        await self._run_hook(HookRuntime.POST_SIMULATION, iteration, loop, threadpool)

        return num_successful_realizations, ensemble_id

    @staticmethod
    def normalizeWeights(weights: List[float]) -> List[float]:
        """Scale weights such that their reciprocals sum to 1.0,
        i.e., sum(1.0 / x for x in weights) == 1.0.
        See for example Equation 38 of evensen2018 - Analysis of iterative
        ensemble smoothers for solving inverse problems.
        """
        if not weights:
            return []
        weights = [weight for weight in weights if abs(weight) != 0.0]

        length = sum(1.0 / x for x in weights)
        return [x * length for x in weights]

    @staticmethod
    def parseWeights(weights: str) -> List:
        if not weights:
            return []

        elements = weights.split(",")
        elements = [
            element.strip() for element in elements if not element.strip() == ""
        ]

        result = []
        for element in elements:
            try:
                f = float(element)
                if f == 0:
                    logger.info("Warning: 0 weight, will ignore")
                else:
                    result.append(f)
            except ValueError:
                raise ValueError(f"Warning: cannot parse weight {element}")

        return result

    def create_context(
        self,
        itr: int,
        mask: Optional[List[bool]] = None,
        update: bool = True,
    ) -> RunContext:
        target_case_format = self._simulation_arguments["target_case"]
        fs_manager = self.ert().storage_manager

        source_case_name = target_case_format % itr
        sim_fs = fs_manager[source_case_name]
        if update:
            target_fs = fs_manager.add_case(target_case_format % (itr + 1))
        else:
            target_fs = None

        if mask is None:
            initialized_and_has_data: RealizationStateEnum = (
                RealizationStateEnum.STATE_HAS_DATA  # type: ignore
                | RealizationStateEnum.STATE_INITIALIZED
            )
            mask = sim_fs.getStateMap().createMask(initialized_and_has_data)
            # Make sure to only run the realizations which was passed in as argument
            for idx, (valid_state, run_realization) in enumerate(
                zip(mask, self._initial_realizations_mask)
            ):
                mask[idx] = valid_state and run_realization

        run_context = self.ert().create_ensemble_smoother_run_context(
            source_filesystem=sim_fs,
            target_filesystem=target_fs,
            active_mask=mask,
            iteration=itr,
        )
        self._run_context = run_context
        self._last_run_iteration = run_context.iteration
        self.ert().getEnkfFsManager().switchFileSystem(sim_fs.case_name)
        return run_context

    @classmethod
    def name(cls) -> str:
        return "Multiple Data Assimilation (ES MDA) - Recommended"
