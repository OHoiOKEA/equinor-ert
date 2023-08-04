from __future__ import annotations

from typing import TYPE_CHECKING, Any, Callable, Dict, List, Optional, Tuple, Union

from ert.config import ErtConfig, ExtParamConfig, GenDataConfig
from ert.enkf_main import EnKFMain

from .batch_simulator_context import BatchContext

if TYPE_CHECKING:
    from ert.storage import EnsembleAccessor, StorageAccessor


def _slug(entity: str) -> str:
    entity = " ".join(str(entity).split())
    return "".join([x if x.isalnum() else "_" for x in entity.strip()])


class BatchSimulator:
    def __init__(
        self,
        ert_config: ErtConfig,
        controls: Dict[str, List[str]],
        results: List[str],
        callback: Optional[Callable[[BatchContext], None]] = None,
    ):
        """Will create simulator which can be used to run multiple simulations.

        The @ert_config argument should be a ErtConfig object.


        The @controls argument configures which parameters the simulator should
        get when actually simulating. The @controls argument should be a
        dictionary like this :

            controls = {
                "cmode": ["Well", "Group"],
                "order":
                    "W" : ["01", "02", "03"]
                }

        In this example, the first group of controls "cmode" includes two
        controls, called "Well" and "Group". The second group of controls
        "order" has one control "W" with three suffixes.
        Note that:
        - Either no variable in a group has suffixes or all the variables in
          the group have suffixes.
        - Suffixes must be specified as non-empty collections of strings.
        - No duplicate groups/controls/suffixes are allowed

        When actually simulating, these values will be written to json files
        looking like this:

            cmode.json = {"Well": 1.0, "Group": 2.0}
            order.json = {
                "W":
                    "01": 0.3,
                    "02": 1.0,
                    "03": 4.2
                }

        When later invoking the start() method the simulator expects to get
        values for all parameters configured with the @controls argument,
        otherwise an exception will be raised.
        Internally in ert the controls will be implemented as
        'ext_param' instances.


        The @results argument is a list of keys of results which the simulator
        expects to be generated by the forward model. If argument @results
        looks like:

             results = ["CMODE", "order"]

        The simulator will look for the files 'CMODE_0' and 'order_0' in the
        simulation folder. If those files are not produced by the simulator an
        exception will be raised.

        The optional argument callback can be used to provide a callable
        which will be called as:

              callback(run_context)

        When the simulator has started. For the callable passed as
        callback you are encouraged to use the future proof signature:

             def callback(*args, **kwargs):
                 ....

        """
        if not isinstance(ert_config, ErtConfig):
            raise ValueError("The first argument must be valid ErtConfig instance")

        self.ert_config = ert_config
        self.ert = EnKFMain(self.ert_config)
        self.control_keys = set(controls.keys())
        self.result_keys = set(results)
        self.callback = callback

        ens_config = self.ert_config.ensemble_config
        for control_name, variables in controls.items():
            ens_config.addNode(
                ExtParamConfig(
                    name=control_name,
                    input_keys=variables,
                    output_file=control_name + ".json",
                )
            )

        for key in results:
            ens_config.addNode(GenDataConfig(name=key, input_file=f"{key}_%d"))

    def _setup_sim(
        self,
        sim_id: int,
        controls: Dict[str, Dict[str, Any]],
        file_system: EnsembleAccessor,
    ) -> None:
        def _check_suffix(
            ext_config: "ExtParamConfig",
            key: str,
            assignment: Union[Dict[str, Any], Tuple[str, str], str, int],
        ) -> None:
            if key not in ext_config:
                raise KeyError(f"No such key: {key}")
            if isinstance(assignment, dict):  # handle suffixes
                suffixes = ext_config[key]
                if len(assignment) != len(suffixes):
                    missingsuffixes = set(suffixes).difference(set(assignment.keys()))
                    raise KeyError(
                        f"Key {key} is missing values for "
                        f"these suffixes: {missingsuffixes}"
                    )
                for suffix in assignment:
                    if suffix not in suffixes:  # type: ignore[comparison-overlap]
                        raise KeyError(
                            f"Key {key} has suffixes {suffixes}. "
                            f"Can't find the requested suffix {suffix}"
                        )
            else:
                suffixes = ext_config[key]
                if suffixes:
                    raise KeyError(
                        f"Key {key} has suffixes, a suffix must be specified"
                    )

        if set(controls.keys()) != self.control_keys:
            err_msg = "Mismatch between initialized and provided control names."
            raise KeyError(err_msg)

        for control_name, control in controls.items():
            ext_config = self.ert_config.ensemble_config[control_name]
            if isinstance(ext_config, ExtParamConfig):
                if len(ext_config) != len(control.keys()):
                    raise KeyError(
                        (
                            f"Expected {len(ext_config)} variables for "
                            f"control {control_name}, "
                            f"received {len(control.keys())}."
                        )
                    )
                for var_name, var_setting in control.items():
                    _check_suffix(ext_config, var_name, var_setting)

                file_system.save_parameters(
                    control_name, sim_id, ExtParamConfig.to_dataset(control)
                )

    def start(
        self,
        case_name: str,
        case_data: List[Tuple[int, Dict[str, Dict[str, Any]]]],
        storage: StorageAccessor,
    ) -> BatchContext:
        """Start batch simulation, return a simulation context

        The start method will submit simulations to the queue system and then
        return a BatchContext handle which can be used to query for simulation
        status and results. The @case_name argument should just be string which
        will be used as name for the storage of these simulations in the
        system. The @controls argument is the set of control values, and the
        corresponding ID of the external realisation used for the simulations.
        The @control argument must match the control argument used when the
        simulator was instantiated. Assuming the following @control argument
        was passed to simulator construction:

            controls = {
                "cmode": ["Well", "Group"],
                "order":
                    "W" : ["01", "02", "03"]
                }

        Then the following @case_data argument can be used in the start method
        to simulate four simulations:

              [
                  (1,
                   {
                       "cmode": {"Well": 2, "Group": 2},
                       "order": {
                            "W":
                                "01": 2,
                                "02": 2,
                                "03": 5},
                   }),
                  (1,
                   {
                       "cmode": {"Well": 1, "Group": 3},
                       "order": {"W": ...},
                   }),
                  (1,
                   {
                       "cmode": {"Well": 1, "Group": 7},
                       "order": {"W": ...},
                   }),
                  (2,
                   {
                       "cmode": {"Well": 1, "Group": -1},
                       "order": {"W": ...},
                   }),
              ]

        The first integer argument in the tuple is the realisation id, so this
        simulation batch will consist of a total of four simulations, where the
        first three are based on realisation 1, and the last is based on
        realisation 2.

        Observe that only one BatchSimulator should actually be running at a
        time, so when you have called the 'start' method you need to let that
        batch complete before you start a new batch.
        """
        experiment = storage.create_experiment(
            self.ert_config.ensemble_config.parameter_configuration
        )
        ensemble = storage.create_ensemble(
            experiment.id, name=case_name, ensemble_size=self.ert.getEnsembleSize()
        )
        self.ert.addDataKW("<CASE_NAME>", _slug(ensemble.name))
        for sim_id, (geo_id, controls) in enumerate(case_data):
            assert isinstance(geo_id, int)
            self._setup_sim(sim_id, controls, ensemble)

        # The input should be validated before we instantiate the BatchContext
        # object, at that stage a job_queue object with multiple threads is
        # started, and things will typically be in a quite sorry state if an
        # exception occurs.
        itr = 0
        mask = [True] * len(case_data)
        sim_context = BatchContext(
            self.result_keys, self.ert, ensemble, mask, itr, case_data
        )

        if self.callback:
            self.callback(sim_context)
        return sim_context
