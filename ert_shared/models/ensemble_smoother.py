from typing import Optional

from res.enkf.enums import HookRuntime, RealizationStateEnum
from res.enkf.enums import HookRuntime
from res.enkf.enums import RealizationStateEnum
from res.enkf import ErtRunContext, EnkfSimulationRunner
from res.enkf.enkf_main import EnKFMain, QueueConfig

from ert_shared.models import BaseRunModel, ErtRunError
from ert_shared.models.types import Argument
from ert_shared.ensemble_evaluator.config import EvaluatorServerConfig


class EnsembleSmoother(BaseRunModel):
    def __init__(self, ert: EnKFMain, queue_config: QueueConfig):
        super().__init__(ert, queue_config, phase_count=2)
        self.support_restart = False

    def setAnalysisModule(self, module_name: str) -> None:
        module_load_success = self.ert().analysisConfig().selectModule(module_name)

        if not module_load_success:
            raise ErtRunError("Unable to load analysis module '%s'!" % module_name)

    def runSimulations(self, arguments: Argument, evaluator) -> ErtRunContext:
        prior_context = self.create_context(arguments)

        self.checkMinimumActiveRealizations(prior_context)
        self.setPhase(0, "Running simulations...", indeterminate=False)

        # self.setAnalysisModule(arguments["analysis_module"])

        self.setPhaseName("Pre processing...", indeterminate=True)
        self.ert().getEnkfSimulationRunner().createRunPath(prior_context)

        EnkfSimulationRunner.runWorkflows(HookRuntime.PRE_SIMULATION, ert=self.ert())

        # Push ensemble, parameters, observations to new storage
        ensemble_id = self._post_ensemble_data()

        self.setPhaseName("Running forecast...", indeterminate=False)

        num_successful_realizations = self.run_ensemble_evaluator(
            prior_context, evaluator
        )

        # Push simulation results to storage
        self._post_ensemble_results(ensemble_id)

        self.checkHaveSufficientRealizations(num_successful_realizations)

        self.setPhaseName("Post processing...", indeterminate=True)
        EnkfSimulationRunner.runWorkflows(HookRuntime.POST_SIMULATION, ert=self.ert())

        self.setPhaseName("Analyzing...")
        EnkfSimulationRunner.runWorkflows(HookRuntime.PRE_FIRST_UPDATE, ert=self.ert())
        EnkfSimulationRunner.runWorkflows(HookRuntime.PRE_UPDATE, ert=self.ert())
        es_update = self.ert().getESUpdate()
        success = es_update.smootherUpdate(prior_context)
        if not success:
            raise ErtRunError("Analysis of simulation failed!")
        EnkfSimulationRunner.runWorkflows(HookRuntime.POST_UPDATE, ert=self.ert())

        # Create an update object in storage
        analysis_module_name = self.ert().analysisConfig().activeModuleName()
        update_id = self._post_update_data(ensemble_id, analysis_module_name)

        self.setPhase(1, "Running simulations...")
        self.ert().getEnkfFsManager().switchFileSystem(prior_context.get_target_fs())

        self.setPhaseName("Pre processing...")

        rerun_context = self.create_context(arguments, prior_context=prior_context)

        self.ert().getEnkfSimulationRunner().createRunPath(rerun_context)

        EnkfSimulationRunner.runWorkflows(HookRuntime.PRE_SIMULATION, ert=self.ert())
        # Push ensemble, parameters, observations to new storage
        ensemble_id = self._post_ensemble_data(update_id=update_id)

        self.setPhaseName("Running forecast...", indeterminate=False)

        num_successful_realizations = self.run_ensemble_evaluator(
            rerun_context, evaluator
        )

        self.checkHaveSufficientRealizations(num_successful_realizations)

        self.setPhaseName("Post processing...", indeterminate=True)
        EnkfSimulationRunner.runWorkflows(HookRuntime.POST_SIMULATION, ert=self.ert())

        # Push simulation results to storage
        self._post_ensemble_results(ensemble_id)

        self.setPhase(2, "Simulations completed.")

        return prior_context

    def create_context(
        self, arguments: Argument, prior_context: Optional[ErtRunContext] = None
    ) -> ErtRunContext:

        model_config = self.ert().getModelConfig()
        runpath_fmt = model_config.getRunpathFormat()
        jobname_fmt = model_config.getJobnameFormat()
        subst_list = self.ert().getDataKW()
        fs_manager = self.ert().getEnkfFsManager()
        if prior_context is None:
            sim_fs = fs_manager.getCurrentFileSystem()
            target_fs = fs_manager.getFileSystem(arguments["target_case"])
            itr = 0
            mask = arguments["active_realizations"]
        else:
            itr = 1
            sim_fs = prior_context.get_target_fs()
            target_fs = None
            state = (
                RealizationStateEnum.STATE_HAS_DATA
                | RealizationStateEnum.STATE_INITIALIZED
            )
            mask = sim_fs.getStateMap().createMask(state)

        run_context = ErtRunContext.ensemble_smoother(
            sim_fs, target_fs, mask, runpath_fmt, jobname_fmt, subst_list, itr
        )
        self._run_context = run_context
        self._last_run_iteration = run_context.get_iter()
        return run_context

    @classmethod
    def name(cls) -> str:
        return "Ensemble Smoother"
