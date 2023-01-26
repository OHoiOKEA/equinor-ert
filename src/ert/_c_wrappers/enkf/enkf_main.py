from __future__ import annotations

import json
import logging
import os
from datetime import datetime
from pathlib import Path
from typing import TYPE_CHECKING, Any, Dict, List, Mapping, Optional, Sequence, Union

import numpy as np
import xtgeo
from jinja2 import Template

from ert._c_wrappers.analysis.configuration import UpdateConfiguration
from ert._c_wrappers.enkf import EnkfFs
from ert._c_wrappers.enkf.analysis_config import AnalysisConfig
from ert._c_wrappers.enkf.enkf_fs_manager import FileSystemManager
from ert._c_wrappers.enkf.enkf_obs import EnkfObs
from ert._c_wrappers.enkf.ensemble_config import EnsembleConfig
from ert._c_wrappers.enkf.enums import RealizationStateEnum
from ert._c_wrappers.enkf.enums.enkf_var_type_enum import EnkfVarType
from ert._c_wrappers.enkf.enums.ert_impl_type_enum import ErtImplType
from ert._c_wrappers.enkf.ert_run_context import RunContext
from ert._c_wrappers.enkf.model_config import ModelConfig
from ert._c_wrappers.enkf.queue_config import QueueConfig
from ert._c_wrappers.enkf.runpaths import Runpaths
from ert._c_wrappers.util.substitution_list import SubstitutionList

if TYPE_CHECKING:
    from ert._c_wrappers.enkf.config import FieldConfig, GenKwConfig
    from ert._c_wrappers.enkf.enums import HookRuntime
    from ert._c_wrappers.enkf.res_config import ResConfig

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
    json_out: Dict[str, Union[float, Dict[str, float]]] = {
        key: dict(param_map.items()) for key, param_map in values.items()
    }

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
    exports: Dict[str, Dict[str, float]],
) -> None:
    key = config.getKey()
    gen_kw_dict = fs.load_gen_kw_as_dict(key, realization)
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


def _generate_ext_parameter_file(
    fs: "EnkfFs",
    realization: int,
    key: str,
    target_file: str,
    run_path: Path,
) -> None:
    file_path = run_path / target_file
    Path.mkdir(file_path.parent, exist_ok=True, parents=True)
    data = fs.load_ext_param(key, realization)
    data = fs.load_ext_param(key, realization)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f)


def _generate_surface_file(
    fs: "EnkfFs",
    realization: int,
    key: str,
    target_file: str,
    run_path: Path,
) -> None:
    file_path = run_path / target_file
    Path.mkdir(file_path.parent, exist_ok=True, parents=True)
    surf = fs.load_surface_file(key, realization)
    surf.to_file(run_path / target_file, fformat="irap_ascii")


def _generate_field_parameter_file(
    fs: "EnkfFs",
    realization: int,
    config: "FieldConfig",
    target_file: str,
    run_path: Path,
) -> None:
    key = config.get_key()
    grid = config.get_grid()
    x = config.get_nx()
    y = config.get_ny()
    z = config.get_nz()

    data = fs.load_field(key, [realization])
    transform_name = config.get_output_transform_name()
    data_transformed = config.transform(transform_name, data)
    data_truncated = config.truncate(data_transformed)

    gp = xtgeo.GridProperty(
        ncol=x,
        nrow=y,
        nlay=z,
        values=data_truncated,
        grid=grid,
        name=key,
    )

    target_path = Path(run_path) / target_file
    if os.path.islink(target_path):
        os.unlink(target_path)

    file_out = run_path.joinpath(target_file)
    gp.to_file(file_out, fformat="grdecl")


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
    exports: Dict[str, Dict[str, float]] = {}
    for key in ens_config.getKeylistFromVarType(
        EnkfVarType.PARAMETER + EnkfVarType.EXT_PARAMETER  # type: ignore
    ):

        node = ens_config[key]
        type_ = node.getImplementationType()

        if type_ == ErtImplType.FIELD:
            if node.getUseForwardInit() and not fs.field_has_data(key, iens):
                continue
            _generate_field_parameter_file(
                fs,
                iens,
                node.getFieldModelConfig(),
                node.get_enkf_outfile(),
                Path(run_path),
            )
            continue

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

        if type_ == ErtImplType.EXT_PARAM:
            _generate_ext_parameter_file(
                fs, iens, node.getKey(), node.get_enkf_outfile(), Path(run_path)
            )
            continue
        if type_ == ErtImplType.SURFACE:
            if node.getUseForwardInit() and not fs.has_surface(node.getKey(), iens):
                continue
            _generate_surface_file(
                fs, iens, node.getKey(), node.get_enkf_outfile(), Path(run_path)
            )
            continue

        raise NotImplementedError

    _value_export_txt(run_path, export_base_name, exports)
    _value_export_json(run_path, export_base_name, exports)


class EnKFMain:
    def __init__(self, config: "ResConfig", read_only: bool = False):
        self.res_config = config
        self._update_configuration: Optional[UpdateConfiguration] = None

        self._observations = EnkfObs(  # type: ignore
            config.model_config.history_source,
            config.model_config.time_map,
            config.ensemble_config.grid,
            config.ensemble_config.refcase,
            config.ensemble_config,
        )
        if config.model_config.obs_config_file:
            if (
                os.path.isfile(config.model_config.obs_config_file)
                and os.path.getsize(config.model_config.obs_config_file) == 0
            ):
                raise ValueError(
                    f"Empty observations file: "
                    f"{config.model_config.obs_config_file}"
                )

            if self._observations.error:
                raise ValueError(
                    f"Incorrect observations file: "
                    f"{config.model_config.obs_config_file}"
                    f": {self._observations.error}"
                )
            self._observations.load(
                config.model_config.obs_config_file,
                config.analysis_config.get_std_cutoff(),
            )
        self._ensemble_size = self.res_config.model_config.num_realizations
        self._runpaths = Runpaths(
            self.resConfig().preferred_job_fmt(),
            self.getModelConfig().runpath_format_string,
            Path(config.runpath_file),
            self.get_context().substitute_real_iter,
        )
        run_path = self.runpaths.format_runpath()
        jobname = self.runpaths.format_job_name()
        self.addDataKW("<RUNPATH>", run_path)
        self.addDataKW("<ECL_BASE>", jobname)
        self.addDataKW("<ECLBASE>", jobname)

        # Initialize storage
        ens_path = Path(config.ens_path)
        self.storage_manager = FileSystemManager(
            5,
            ens_path,
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
    def update_configuration(self, user_config: Any) -> None:
        config = UpdateConfiguration(update_steps=user_config)
        config.context_validate(self._observation_keys, self._parameter_keys)
        self._update_configuration = config

    @property
    def _observation_keys(self) -> List[str]:
        return list(self._observations.getMatchingKeys("*"))

    @property
    def _parameter_keys(self) -> List[str]:
        return self.ensembleConfig().parameters

    @property
    def runpaths(self) -> Runpaths:
        return self._runpaths

    @property
    def runpath_list_filename(self) -> os.PathLike[str]:
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
            run_context.run_args,
            run_context.mask,
        )
        fs.sync()
        return nr_loaded

    def create_ensemble_context(
        self, case_name: str, active_realizations: List[bool], iteration: int
    ) -> RunContext:
        """This creates a new case in storage
        and returns the run information for that case"""
        return RunContext(
            sim_fs=self.storage_manager.add_case(case_name),
            path_format=self.resConfig().preferred_job_fmt(),
            format_string=self.getModelConfig().runpath_format_string,
            runpath_file=self.resConfig().runpath_file,
            initial_mask=active_realizations,
            global_substitutions=dict(self.get_context()),
            iteration=iteration,
        )

    def load_ensemble_context(
        self, case_name: str, active_realizations: List[bool], iteration: int
    ) -> RunContext:
        """This loads an existing case from storage
        and creates run information for that case"""
        return RunContext(
            sim_fs=self.storage_manager[case_name],
            path_format=self.resConfig().preferred_job_fmt(),
            format_string=self.getModelConfig().runpath_format_string,
            runpath_file=self.resConfig().runpath_file,
            initial_mask=active_realizations,
            global_substitutions=dict(self.get_context()),
            iteration=iteration,
        )

    def write_runpath_list(
        self, iterations: List[int], realizations: List[int]
    ) -> None:
        self.runpaths.write_runpath_list(iterations, realizations)

    def get_queue_config(self) -> QueueConfig:
        return self.resConfig().queue_config

    def get_num_cpu(self) -> int:
        return self.res_config.preferred_num_cpu()

    def __repr__(self) -> str:
        return f"EnKFMain(size: {self.getEnsembleSize()}, config: {self.res_config})"

    def getEnsembleSize(self) -> int:
        return self._ensemble_size

    def ensembleConfig(self) -> EnsembleConfig:
        return self.resConfig().ensemble_config

    def analysisConfig(self) -> AnalysisConfig:
        return self.resConfig().analysis_config

    def getModelConfig(self) -> ModelConfig:
        return self.res_config.model_config

    def resConfig(self) -> "ResConfig":
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
        parameters: Optional[List[str]] = None,
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

        for parameter in parameters:
            config_node = self.ensembleConfig().getNode(parameter)
            if config_node.getUseForwardInit():
                continue
            impl_type = config_node.getImplementationType()
            if impl_type == ErtImplType.FIELD:
                for _, realization_nr in enumerate(active_realizations):
                    init_file = config_node.get_init_file_fmt()
                    if "%d" in init_file:
                        init_file = init_file % realization_nr
                    grid = xtgeo.grid_from_file(self.ensembleConfig().grid_file)
                    props = xtgeo.gridproperty_from_file(
                        init_file, name=parameter, grid=grid
                    )

                    data = props.values1d.data
                    field_config = config_node.getFieldModelConfig()
                    trans = field_config.get_init_transform_name()
                    data_transformed = field_config.transform(trans, data)

                    storage.save_field_data(parameter, realization_nr, data_transformed)

            elif impl_type == ErtImplType.GEN_KW:
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

                storage.save_gen_kw(
                    parameter_name=parameter,
                    parameter_keys=keys,
                    parameter_transfer_functions=gen_kw_config.get_priors(),
                    realizations=active_realizations,
                    data=parameter_values,
                )
            elif impl_type == ErtImplType.SURFACE:
                for realization_nr in active_realizations:
                    init_file = config_node.get_init_file_fmt()
                    if "%d" in init_file:
                        init_file = init_file % realization_nr
                    storage.save_surface_file(
                        config_node.getKey(), realization_nr, init_file
                    )
            else:
                raise NotImplementedError(f"{impl_type} is not supported")
        for realization_nr in active_realizations:
            storage.update_realization_state(
                realization_nr,
                [
                    RealizationStateEnum.STATE_UNDEFINED,
                    RealizationStateEnum.STATE_LOAD_FAILURE,
                ],
                RealizationStateEnum.STATE_INITIALIZED,
            )

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
                res_config.forward_model.formatted_fprintf(
                    run_arg.get_run_id(),
                    run_arg.runpath,
                    model_config.data_root,
                    run_arg.iens,
                    run_context.iteration,
                    run_context.substituter,
                    res_config.env_vars,
                )

        run_context.runpaths.write_runpath_list(
            [run_context.iteration], run_context.active_realizations
        )

    def runWorkflows(self, runtime: Union[int, HookRuntime]) -> None:
        for workflow in self.res_config.hooked_workflows[runtime]:
            workflow.run(self)
