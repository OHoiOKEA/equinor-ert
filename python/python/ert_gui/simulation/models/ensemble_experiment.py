from res.enkf.enums import HookRuntime
from res.enkf import ErtRunContext
from res.util import ResLog
from ert_gui.simulation.models import BaseRunModel, ErtRunError

class EnsembleExperiment(BaseRunModel):

    def __init__(self, queue_config):
        super(EnsembleExperiment, self).__init__("Ensemble Experiment" , queue_config)

    def runSimulations__(self, arguments, run_msg):

        self._job_queue = self._queue_config.create_job_queue( )
        run_context = self.create_context( arguments )

        self.setPhase(0, "Running simulations...", indeterminate=False)

        self.setPhaseName("Pre processing...", indeterminate=True)
        self.ert().getEnkfSimulationRunner().createRunPath( run_context )
        self.ert().getEnkfSimulationRunner().runWorkflows( HookRuntime.PRE_SIMULATION )

        self.setPhaseName( run_msg, indeterminate=False)

        num_successful_realizations = self.ert().getEnkfSimulationRunner().runEnsembleExperiment(self._job_queue, run_context)
        self.checkHaveSufficientRealizations(num_successful_realizations)

        self.setPhaseName("Post processing...", indeterminate=True)
        self.ert().getEnkfSimulationRunner().runWorkflows( HookRuntime.POST_SIMULATION )
        self.setPhase(1, "Simulations completed.") # done...
        self._job_queue = None

        return run_context


    def runSimulations(self, arguments ):
        return self.runSimulations__(  arguments , "Running ensemble experiment...")


    def create_context(self, arguments):
        fs_manager = self.ert().getEnkfFsManager()
        result_fs = fs_manager.getCurrentFileSystem( )

        model_config = self.ert().getModelConfig( )
        runpath_fmt = model_config.getRunpathFormat( )
        jobname_fmt = model_config.getJobnameFormat( )
        subst_list = self.ert().getDataKW( )
        itr = 0
        mask = arguments["active_realizations"]
        run_context = ErtRunContext.ensemble_experiment(result_fs,
                                                        mask,
                                                        runpath_fmt,
                                                        jobname_fmt,
                                                        subst_list,
                                                        itr)
        return run_context
