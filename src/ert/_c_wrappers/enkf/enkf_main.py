import json
import logging
import os
from datetime import datetime
from pathlib import Path
from typing import TYPE_CHECKING, Any, List, Mapping, Sequence, Union

import numpy as np
from jinja2 import Template

from ert import _clib
from ert._c_wrappers.analysis.configuration import UpdateConfiguration
from ert._c_wrappers.config.config_parser import ConfigValidationError
from ert._c_wrappers.enkf import EnkfFs
from ert._c_wrappers.enkf.analysis_config import AnalysisConfig
from ert._c_wrappers.enkf.data import EnkfNode
from ert._c_wrappers.enkf.enkf_fs_manager import FileSystemManager
from ert._c_wrappers.enkf.enkf_obs import EnkfObs
from ert._c_wrappers.enkf.ensemble_config import EnsembleConfig
from ert._c_wrappers.enkf.enums import RealizationStateEnum
from ert._c_wrappers.enkf.enums.enkf_var_type_enum import EnkfVarType
from ert._c_wrappers.enkf.enums.ert_impl_type_enum import ErtImplType
from ert._c_wrappers.enkf.ert_run_context import RunContext
from ert._c_wrappers.enkf.model_config import ModelConfig
from ert._c_wrappers.enkf.node_id import NodeId
from ert._c_wrappers.enkf.queue_config import QueueConfig
from ert._c_wrappers.enkf.runpaths import Runpaths
from ert._c_wrappers.util.substitution_list import SubstitutionList
from ert._clib.state_map import STATE_LOAD_FAILURE, STATE_UNDEFINED

if TYPE_CHECKING:
    from ert._c_wrappers.enkf.ert_config import ErtConfig
    from ert._c_wrappers.enkf.config import GenKwConfig

logger = logging.getLogger(__name__)


def _backup_if_existing(path: Path) -> None:
    if not path.exists():
        return
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%SZ")
    new_path = path.parent / f"{path.name}_backup_{timestamp}"
    path.rename(new_path)


def _value_export_txt(
    run_path: str, export_base_name: str, values: Mapping[str, Mapping[str, float]]
) -> None:
    path = Path(run_path) / f"{export_base_name}.txt"
    _backup_if_existing(path)

    if len(values) == 0:
        return

    with path.open("w") as f:
        for key, param_map in values.items():
            for param, value in param_map.items():
                print(f"{key}:{param} {value:g}", file=f)


def _value_export_json(
    run_path: str, export_base_name: str, values: Mapping[str, Mapping[str, float]]
) -> None:
    path = Path(run_path) / f"{export_base_name}.json"
    _backup_if_existing(path)

    if len(values) == 0:
        return

    # Hierarchical
    json_out = {key: dict(param_map.items()) for key, param_map in values.items()}

    # Composite
    json_out.update(
        {
            f"{key}:{param}": value
            for key, param_map in values.items()
            for param, value in param_map.items()
        }
    )

    # Disallow NaN from being written: ERT produces the parameters and the only
    # way for the output to be NaN is if the input is invalid or if the sampling
    # function is buggy. Either way, that would be a bug and we can report it by
    # having json throw an error.
    json.dump(
        json_out, path.open("w"), allow_nan=False, indent=0, separators=(", ", " : ")
    )


def _generate_gen_kw_parameter_file(
    fs: "EnkfFs",
    realization: int,
    config: "GenKwConfig",
    target_file: str,
    run_path: Path,
    exports: dict,
) -> None:
    key = config.getKey()
    gen_kw_dict = fs.load_gen_kw_as_dict(key, realization, config)
    transformed = gen_kw_dict[key]
    if not len(transformed) == len(config):
        raise ValueError(
            f"The configuration of GEN_KW parameter {key}"
            f" is of size {len(config)}, expected {len(transformed)}"
        )

    with open(config.getTemplateFile(), "r", encoding="utf-8") as f:
        template = Template(
            f.read(), variable_start_string="<", variable_end_string=">"
        )
    with open(run_path / target_file, "w", encoding="utf-8") as f:
        f.write(
            template.render({key: f"{value:.6g}" for key, value in transformed.items()})
        )

    exports.update(gen_kw_dict)


def _generate_parameter_files(
    ens_config: "EnsembleConfig",
    export_base_name: str,
    run_path: str,
    iens: int,
    fs: "EnkfFs",
) -> None:
    """
    Generate parameter files that are placed in each runtime directory for
    forward-model jobs to consume.

    Args:
        ens_config: Configuration which contains the parameter nodes for this
            ensemble run.
        export_base_name: Base name for the GEN_KW parameters file. Ie. the
            `parameters` in `parameters.json`.
        run_path: Path to the runtime directory
        iens: Realisation index
        fs: EnkfFs from which to load parameter data
    """
    exports = {}
    for key in ens_config.getKeylistFromVarType(
        EnkfVarType.PARAMETER + EnkfVarType.EXT_PARAMETER
    ):
        node = ens_config[key]
        type_ = node.getImplementationType()
        if type_ == ErtImplType.GEN_KW:
            _generate_gen_kw_parameter_file(
                fs,
                iens,
                node.getKeywordModelConfig(),
                node.get_enkf_outfile(),
                Path(run_path),
                exports,
            )
            continue
        enkf_node = EnkfNode(node)
        node_id = NodeId(report_step=0, iens=iens)

        if node.getUseForwardInit() and not enkf_node.has_data(fs, node_id):
            continue
        enkf_node.load(fs, node_id)

        node_eclfile = node.get_enkf_outfile()

        type_ = enkf_node.getImplType()
        if type_ == ErtImplType.FIELD:
            _clib.field.generate_parameter_file(enkf_node, run_path, node_eclfile)
        elif type_ == ErtImplType.SURFACE:
            _clib.surface.generate_parameter_file(enkf_node, run_path, node_eclfile)
        elif type_ == ErtImplType.EXT_PARAM:
            _clib.ext_param.generate_parameter_file(enkf_node, run_path, node_eclfile)
        else:
            raise NotImplementedError

    _value_export_txt(run_path, export_base_name, exports)
    _value_export_json(run_path, export_base_name, exports)


class ObservationConfigError(ConfigValidationError):
    def __init__(self, errors, config_file=None):
        self.config_file = config_file
        self.errors = errors
        super().__init__(
            (
                f"Parsing observations config file `{self.config_file}` "
                f"resulted in the errors: {self.errors}"
            )
            if self.config_file
            else f"{self.errors}"
        )


class EnKFMain:
    def __init__(self, config: "ErtConfig", read_only: bool = False) -> None:
        self.res_config = config
        self._update_configuration = None

        self._observations = EnkfObs(
            config.model_config.history_source,
            config.model_config.time_map,
            config.ensemble_config.refcase,
            config.ensemble_config,
        )
        if config.model_config.obs_config_file:
            if (
                os.path.isfile(config.model_config.obs_config_file)
                and os.path.getsize(config.model_config.obs_config_file) == 0
            ):
                raise ObservationConfigError(
                    f"Empty observations file: "
                    f"{config.model_config.obs_config_file}"
                )

            if self._observations.error:
                raise ObservationConfigError(
                    f"Incorrect observations file: "
                    f"{config.model_config.obs_config_file}"
                    f": {self._observations.error}",
                    config_file=config.model_config.obs_config_file,
                )
            try:
                self._observations.load(
                    config.model_config.obs_config_file,
                    config.analysis_config.get_std_cutoff(),
                )
            except (ValueError, IndexError) as err:
                raise ObservationConfigError(
                    str(err),
                    config_file=config.model_config.obs_config_file,
                ) from err

        self._ensemble_size = self.res_config.model_config.num_realizations
        self._runpaths = Runpaths(
            jobname_format=self.getModelConfig().jobname_format_string,
            runpath_format=self.getModelConfig().runpath_format_string,
            filename=self.getModelConfig().runpath_file,
            substitute=self.get_context().substitute_real_iter,
        )

        # Initialize storage
        ens_path = Path(config.ens_path)
        self.storage_manager = FileSystemManager(
            5,
            ens_path,
            config.ensemble_config,
            self.getEnsembleSize(),
            read_only=read_only,
            refcase=self.res_config.ensemble_config.refcase,
        )
        self.switchFileSystem(self.storage_manager.active_case)

        # Set up RNG
        config_seed = self.resConfig().random_seed
        if config_seed is None:
            seed_seq = np.random.SeedSequence()
            logger.info(
                "To repeat this experiment, "
                "add the following random seed to your config file:"
            )
            logger.info(f"RANDOM_SEED {seed_seq.entropy}")
        else:
            seed: Union[int, Sequence[int]]
            try:
                seed = int(config_seed)
            except ValueError:
                seed = [ord(x) for x in config_seed]
            seed_seq = np.random.SeedSequence(seed)
        self._global_seed = seed_seq
        self._shared_rng = np.random.default_rng(seed_seq)

    @property
    def update_configuration(self) -> UpdateConfiguration:
        if not self._update_configuration:
            global_update_step = [
                {
                    "name": "ALL_ACTIVE",
                    "observations": self._observation_keys,
                    "parameters": self._parameter_keys,
                }
            ]
            self._update_configuration = UpdateConfiguration(
                update_steps=global_update_step
            )
        return self._update_configuration

    @update_configuration.setter
    def update_configuration(self, user_config: Any):
        config = UpdateConfiguration(update_steps=user_config)
        config.context_validate(self._observation_keys, self._parameter_keys)
        self._update_configuration = config

    @property
    def _observation_keys(self):
        return list(self._observations.getMatchingKeys("*"))

    @property
    def _parameter_keys(self):
        return self.ensembleConfig().parameters

    @property
    def runpaths(self):
        return self._runpaths

    @property
    def runpath_list_filename(self):
        return self._runpaths.runpath_list_filename

    def getLocalConfig(self) -> "UpdateConfiguration":
        return self.update_configuration

    def loadFromForwardModel(
        self, realization: List[bool], iteration: int, fs: "EnkfFs"
    ) -> int:
        """Returns the number of loaded realizations"""
        run_context = self.load_ensemble_context(fs.case_name, realization, iteration)
        nr_loaded = fs.load_from_run_path(
            self.getEnsembleSize(),
            self.ensembleConfig(),
            self.getHistoryLength(),
            run_context.run_args,
            run_context.mask,
        )
        fs.sync()
        return nr_loaded

    def create_ensemble_context(
        self, case_name, active_realizations, iteration
    ) -> RunContext:
        """This creates a new case in storage
        and returns the run information for that case"""
        return RunContext(
            sim_fs=self.storage_manager.add_case(case_name),
            path_format=self.getModelConfig().jobname_format_string,
            format_string=self.getModelConfig().runpath_format_string,
            runpath_file=self.getModelConfig().runpath_file,
            initial_mask=active_realizations,
            global_substitutions=dict(self.get_context()),
            iteration=iteration,
        )

    def load_ensemble_context(
        self, case_name, active_realizations, iteration
    ) -> RunContext:
        """This loads an existing case from storage
        and creates run information for that case"""
        return RunContext(
            sim_fs=self.storage_manager[case_name],
            path_format=self.getModelConfig().jobname_format_string,
            format_string=self.getModelConfig().runpath_format_string,
            runpath_file=self.getModelConfig().runpath_file,
            initial_mask=active_realizations,
            global_substitutions=dict(self.get_context()),
            iteration=iteration,
        )

    def write_runpath_list(self, iterations: List[int], realizations: List[int]):
        self.runpaths.write_runpath_list(iterations, realizations)

    def get_queue_config(self) -> QueueConfig:
        return self.resConfig().queue_config

    def get_num_cpu(self) -> int:
        return self.res_config.preferred_num_cpu()

    def __repr__(self):
        return f"EnKFMain(size: {self.getEnsembleSize()}, config: {self.res_config})"

    def getEnsembleSize(self) -> int:
        return self._ensemble_size

    def ensembleConfig(self) -> EnsembleConfig:
        return self.resConfig().ensemble_config

    def analysisConfig(self) -> AnalysisConfig:
        return self.resConfig().analysis_config

    def getModelConfig(self) -> ModelConfig:
        return self.res_config.model_config

    def resConfig(self) -> "ErtConfig":
        return self.res_config

    def get_context(self) -> SubstitutionList:
        return self.res_config.substitution_list

    def addDataKW(self, key: str, value: str) -> None:
        self.get_context().addItem(key, value)

    def getObservations(self) -> EnkfObs:
        return self._observations

    def have_observations(self) -> bool:
        return len(self._observations) > 0

    def getHistoryLength(self) -> int:
        return self.resConfig().model_config.get_history_num_steps()

    def sample_prior(
        self,
        storage: "EnkfFs",
        active_realizations: List[int],
        parameters: List[str] = None,
    ) -> None:
        """This function is responsible for getting the prior into storage,
        in the case of GEN_KW we sample the data and store it, and if INIT_FILES
        are used without FORWARD_INIT we load files and store them. If FORWARD_INIT
        is set the state is set to INITIALIZED, but no parameters are saved to storage
        until after the forward model has completed.
        """
        # pylint: disable=too-many-nested-blocks
        # (this is a real code smell that we mute for now)
        if parameters is None:
            parameters = self._parameter_keys
        state_map = storage.getStateMap()

        for parameter in parameters:
            config_node = self.ensembleConfig().getNode(parameter)
            if config_node.getUseForwardInit():
                continue
            impl_type = config_node.getImplementationType()
            if impl_type == ErtImplType.GEN_KW:
                gen_kw_config = config_node.getKeywordModelConfig()
                keys = list(gen_kw_config)
                if config_node.get_init_file_fmt():
                    parameter_values = gen_kw_config.values_from_files(
                        active_realizations,
                        config_node.get_init_file_fmt(),
                        keys,
                    )
                else:
                    parameter_values = gen_kw_config.sample_values(
                        parameter,
                        keys,
                        str(self._global_seed.entropy),
                        active_realizations,
                        self.getEnsembleSize(),
                    )
                for index, real in enumerate(active_realizations):
                    storage.save_gen_kw(
                        parameter_name=parameter,
                        parameter_keys=keys,
                        realization=real,
                        data=parameter_values[:, index],
                    )
            else:
                enkf_node = EnkfNode(config_node)
                for realization_nr in active_realizations:
                    _clib.enkf_state.state_initialize(
                        enkf_node,
                        storage,
                        realization_nr,
                    )
        for realization_nr in active_realizations:
            if state_map[realization_nr] in [STATE_UNDEFINED, STATE_LOAD_FAILURE]:
                state_map[realization_nr] = RealizationStateEnum.STATE_INITIALIZED
        storage.sync()

    def rng(self) -> np.random.Generator:
        "Will return the random number generator used for updates."
        return self._shared_rng

    def switchFileSystem(self, case_name: str) -> None:
        if isinstance(case_name, EnkfFs):
            case_name = case_name.case_name
        if case_name not in self.storage_manager.cases:
            raise KeyError(
                f"Unknown case: {case_name}, valid: {self.storage_manager.cases}"
            )
        self.addDataKW("<ERT-CASE>", case_name)
        self.addDataKW("<ERTCASE>", case_name)
        self.storage_manager.active_case = case_name
        (Path(self.res_config.ens_path) / "current_case").write_text(case_name)

    def createRunPath(self, run_context: RunContext) -> None:
        for iens, run_arg in enumerate(run_context):
            if run_context.is_active(iens):
                os.makedirs(
                    run_arg.runpath,
                    exist_ok=True,
                )

                for source_file, target_file in self.res_config.ert_templates:
                    target_file = run_context.substituter.substitute_real_iter(
                        target_file, run_arg.iens, run_context.iteration
                    )
                    result = run_context.substituter.substitute_real_iter(
                        Path(source_file).read_text("utf-8"),
                        run_arg.iens,
                        run_context.iteration,
                    )
                    target = Path(run_arg.runpath) / target_file
                    if not target.parent.exists():
                        os.makedirs(
                            target.parent,
                            exist_ok=True,
                        )
                    target.write_text(result)

                res_config = self.resConfig()
                model_config = res_config.model_config
                _generate_parameter_files(
                    res_config.ensemble_config,
                    model_config.gen_kw_export_name,
                    run_arg.runpath,
                    run_arg.iens,
                    run_context.sim_fs,
                )

                with open(
                    Path(run_arg.runpath) / "jobs.json", mode="w", encoding="utf-8"
                ) as fptr:
                    forward_model_output = res_config.forward_model_data_to_json(
                        res_config.forward_model_list,
                        run_arg.get_run_id(),
                        run_arg.iens,
                        run_context.iteration,
                        run_context.substituter,
                        res_config.env_vars,
                    )

                    json.dump(forward_model_output, fptr)

        run_context.runpaths.write_runpath_list(
            [run_context.iteration], run_context.active_realizations
        )

    def runWorkflows(self, runtime: int) -> None:
        for workflow in self.res_config.hooked_workflows[runtime]:
            workflow.run(self)
