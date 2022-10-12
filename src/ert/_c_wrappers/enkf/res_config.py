import logging
import os
import warnings
from collections import defaultdict
from os.path import isfile
from typing import Any, Dict, Optional

from ecl.util.util import StringList

from ert._c_wrappers.config import ConfigContent, ConfigParser
from ert._c_wrappers.enkf.analysis_config import AnalysisConfig
from ert._c_wrappers.enkf.config_keys import ConfigKeys
from ert._c_wrappers.enkf.ecl_config import EclConfig
from ert._c_wrappers.enkf.ensemble_config import EnsembleConfig
from ert._c_wrappers.enkf.enums import ErtImplType
from ert._c_wrappers.enkf.ert_workflow_list import ErtWorkflowList
from ert._c_wrappers.enkf.model_config import ModelConfig
from ert._c_wrappers.enkf.queue_config import QueueConfig
from ert._c_wrappers.enkf.site_config import SiteConfig
from ert._c_wrappers.enkf.subst_config import SubstConfig
from ert._c_wrappers.job_queue import QueueDriverEnum
from ert._clib.config_keywords import init_site_config_parser, init_user_config_parser


def format_warning_message(message, category, *args, **kwargs):
    return f"{category.__name__}: {message}\n"


warnings.formatwarning = format_warning_message

logger = logging.getLogger(__name__)


class ResConfig:
    def __init__(
        self,
        user_config_file: Optional[str] = None,
        config: Optional[Dict[ConfigKeys, Any]] = None,
        config_dict: Optional[Dict[ConfigKeys, Any]] = None,
    ):

        self._assert_input(user_config_file, config, config_dict)
        self.user_config_file = user_config_file

        self._errors, self._failed_keys = None, None
        self._templates = []
        if user_config_file or config:
            self._alloc_from_content(
                user_config_file=user_config_file,
                config=config,
            )
        else:
            self._alloc_from_dict(config_dict=config_dict)

    def _assert_input(self, user_config_file, config, config_dict):
        configs = sum(
            1 for x in [user_config_file, config, config_dict] if x is not None
        )

        if configs > 1:
            raise ValueError(
                "Attempting to create ResConfig object with multiple config objects"
            )

        if configs == 0:
            raise ValueError(
                "Error trying to create ResConfig without any configuration"
            )

        if config and not isinstance(config, dict):
            raise ValueError(f"Expected config to be a dictionary, was {type(config)}")

        if user_config_file and not isinstance(user_config_file, str):
            raise ValueError("Expected user_config_file to be a string.")

        if user_config_file is not None and not isfile(user_config_file):
            raise IOError(f'No such configuration file "{user_config_file}".')

    def _log_config_file(self, config_file: str) -> None:
        """
        Logs what configuration was used to start ert. Because the config
        parsing is quite convoluted we are not able to remove all the comments,
        but the easy ones are filtered out.
        """
        if config_file is not None and os.path.isfile(config_file):
            config_context = ""
            with open(config_file, "r", encoding="utf-8") as file_obj:
                for line in file_obj:
                    line = line.strip()
                    if not line or line.startswith("--"):
                        continue
                    if "--" in line and not any(x in line for x in ['"', "'"]):
                        # There might be a comment in this line, but it could
                        # also be an argument to a job, so we do a quick check
                        line = line.split("--")[0].rstrip()
                    config_context += line + "\n"
            logger.info(
                f"Content of the configuration file ({config_file}):\n" + config_context
            )

    def _log_config_content(self, config_content: ConfigContent) -> None:
        tmp_dict = config_content.as_dict().copy()
        tmp_dict.pop("FORWARD_MODEL", None)
        tmp_dict.pop("LOAD_WORKFLOW", None)
        tmp_dict.pop("LOAD_WORKFLOW_JOB", None)
        tmp_dict.pop("HOOK_WORKFLOW", None)
        tmp_dict.pop("WORKFLOW_JOB_DIRECTORY", None)

        logger.info("Content of the config_content:")
        logger.info(tmp_dict)

    # build configs from config file or everest dict
    def _alloc_from_content(self, user_config_file=None, config=None):
        site_config_parser = ConfigParser()
        init_site_config_parser(site_config_parser)
        site_config_content = site_config_parser.parse(SiteConfig.getLocation())
        if user_config_file is not None:
            # initialize configcontent if user_file provided
            config_parser = ConfigParser()
            init_user_config_parser(config_parser)
            self.config_path = os.path.abspath(os.path.dirname(user_config_file))
            user_config_content = config_parser.parse(
                user_config_file,
                pre_defined_kw_map={
                    "<CWD>": self.config_path,
                    "<CONFIG_PATH>": self.config_path,
                    "<CONFIG_FILE>": os.path.basename(user_config_file),
                    "<CONFIG_FILE_BASE>": os.path.basename(user_config_file).split(".")[
                        0
                    ],
                },
            )
        else:
            self.config_path = os.getcwd()
            user_config_content = self._build_config_content(config)

        self._log_config_file(user_config_file)
        self._log_config_content(user_config_content)

        if self.errors:
            raise ValueError("Error loading configuration: " + str(self._errors))

        self.subst_config = SubstConfig(config_content=user_config_content)
        self.site_config = SiteConfig(config_content=user_config_content)
        if user_config_content.hasKey(ConfigKeys.RANDOM_SEED):
            self.random_seed = user_config_content.getValue(ConfigKeys.RANDOM_SEED)
        else:
            self.random_seed = None
        self.analysis_config = AnalysisConfig(config_content=user_config_content)

        user_config_content_as_dict = user_config_content.as_dict()
        user_config_content_as_dict_simplified = {
            key: value[0][0] if len(value[0]) == 1 else value[0]
            for key, value in user_config_content_as_dict.items()
        }
        self.ecl_config = EclConfig.from_dict(user_config_content_as_dict_simplified)

        queue_config_args = {}

        def set_value(argname, key, transform=lambda x: x):
            if key in site_config_content:
                queue_config_args[argname] = transform(
                    site_config_content.getValue(key)
                )
            if key in user_config_content:
                queue_config_args[argname] = transform(
                    user_config_content.getValue(key)
                )

        set_value("job_script", ConfigKeys.JOB_SCRIPT)
        set_value("max_submit", ConfigKeys.MAX_SUBMIT)
        set_value("num_cpu", ConfigKeys.NUM_CPU)
        set_value(
            "queue_system",
            ConfigKeys.QUEUE_SYSTEM,
            lambda x: QueueDriverEnum.from_string(x + "_DRIVER"),
        )

        queue_config_args["queue_options"] = defaultdict(list)

        def set_options(content):
            if ConfigKeys.QUEUE_OPTION in content:
                for setting in iter(content[ConfigKeys.QUEUE_OPTION]):
                    queue_driver_type = QueueDriverEnum.from_string(
                        setting[0] + "_DRIVER"
                    )
                    option_name = setting[1]
                    if len(setting) == 2:
                        queue_config_args["queue_options"][queue_driver_type].append(
                            setting[1]
                        )
                    else:
                        option_value = " ".join(list(setting)[2:])
                        queue_config_args["queue_options"][queue_driver_type].append(
                            (option_name, option_value)
                        )

        set_options(site_config_content)
        set_options(user_config_content)
        self.queue_config = QueueConfig(**queue_config_args)

        self.ert_workflow_list = ErtWorkflowList(
            subst_list=self.subst_config.subst_list,
            config_content=user_config_content,
            site_config_content=site_config_content,
        )

        if user_config_content.hasKey(ConfigKeys.RUNPATH_FILE):
            self.runpath_file = user_config_content.getValue(ConfigKeys.RUNPATH_FILE)
        else:
            self.runpath_file = ".ert_runpath_list"

        if user_config_content.hasKey(
            ConfigKeys.DATA_FILE
        ) and user_config_content.hasKey(ConfigKeys.ECLBASE):
            # This replicates the behavior of the DATA_FILE implementation
            # in C, it adds the .DATA extension and facilitates magic string
            # replacement in the data file
            warning = (
                "DATA_FILE is deprecated and will be removed, use: "
                "RUN_TEMPLATE MY_DATA_FILE.DATA <ECLBASE>.DATA instead if you "
                "want to template magic strings into the data file"
            )
            warnings.warn(warning, DeprecationWarning)
            source_file = user_config_content[ConfigKeys.DATA_FILE]
            target_file = user_config_content[ConfigKeys.ECLBASE]
            target_file = target_file.getValue(0).replace("%d", "<IENS>")
            self._templates.append([source_file.getValue(0), target_file + ".DATA"])

        if user_config_content.hasKey(ConfigKeys.RUN_TEMPLATE):
            for template in user_config_content[ConfigKeys.RUN_TEMPLATE]:
                self._templates.append(list(template))

        self.ensemble_config = EnsembleConfig(
            config_content=user_config_content,
            grid=self.ecl_config.grid,
            refcase=self.ecl_config.refcase,
        )

        for key in self.ensemble_config.getKeylistFromImplType(ErtImplType.GEN_KW):
            if self.ensemble_config.getNode(key).get_init_file_fmt() != None:
                raise KeyError(
                    "Loading GEN_KW from files created by the forward model "
                    "is not supported."
                )

        self.model_config = ModelConfig(
            data_root=self.config_path,
            joblist=self.site_config.get_installed_jobs(),
            refcase=self.ecl_config.refcase,
            config_content=user_config_content,
        )

    # build configs from config dict
    def _alloc_from_dict(self, config_dict):
        # treat the default config dir
        self.config_path = os.getcwd()
        if ConfigKeys.CONFIG_DIRECTORY in config_dict:
            self.config_path = config_dict[ConfigKeys.CONFIG_DIRECTORY]
        config_dict[ConfigKeys.CONFIG_DIRECTORY] = self.config_path

        self.subst_config = SubstConfig(config_dict=config_dict)
        self.site_config = SiteConfig.from_config_dict(config_dict=config_dict)
        self.random_seed = config_dict.get(ConfigKeys.RANDOM_SEED, None)
        self.analysis_config = AnalysisConfig(config_dict=config_dict)
        self.ecl_config = EclConfig.from_dict(config_dict=config_dict)
        queue_config_args = {}
        if ConfigKeys.JOB_SCRIPT in config_dict:
            queue_config_args["job_script"] = config_dict[ConfigKeys.JOB_SCRIPT]
        if ConfigKeys.MAX_SUBMIT in config_dict:
            queue_config_args["max_submit"] = config_dict[ConfigKeys.MAX_SUBMIT]
        if ConfigKeys.NUM_CPU in config_dict:
            queue_config_args["num_cpu"] = config_dict[ConfigKeys.NUM_CPU]
        if ConfigKeys.QUEUE_SYSTEM in config_dict:
            queue_config_args["queue_system"] = config_dict[ConfigKeys.QUEUE_SYSTEM]
        queue_config_args["queue_options"] = defaultdict(list)
        for setting in config_dict.get(ConfigKeys.QUEUE_OPTION, []):
            queue_config_args["queue_options"][setting[ConfigKeys.DRIVER_NAME]].append(
                setting[ConfigKeys.OPTION]
                if len(setting) == 2
                else (setting[ConfigKeys.OPTION], setting[ConfigKeys.VALUE])
            )
        self.queue_config = QueueConfig(**queue_config_args)

        self.ert_workflow_list = ErtWorkflowList(
            subst_list=self.subst_config.subst_list, config_dict=config_dict
        )

        if ConfigKeys.DATA_FILE in config_dict and ConfigKeys.ECLBASE in config_dict:
            # This replicates the behavior of the DATA_FILE implementation
            # in C, it adds the .DATA extension and facilitates magic string
            # replacement in the data file
            warning = (
                "DATA_FILE is deprecated and will be removed, use: "
                "RUN_TEMPLATE MY_DATA_FILE.DATA <ECLBASE>.DATA instead if you "
                "want to template magic strings into the data file"
            )
            warnings.warn(warning, DeprecationWarning)
            source_file = config_dict[ConfigKeys.DATA_FILE]
            target_file = config_dict[ConfigKeys.ECLBASE].replace("%d", "<IENS>")
            self._templates.append(
                [os.path.abspath(source_file), target_file + ".DATA"]
            )

        self.runpath_file = config_dict.get(
            ConfigKeys.RUNPATH_FILE, ".ert_runpath_list"
        )
        templates = config_dict.get(ConfigKeys.RUN_TEMPLATE, [])
        for source_file, target_file, *_ in templates:
            self._templates.append([os.path.abspath(source_file), target_file])

        self.ensemble_config = EnsembleConfig(
            grid=self.ecl_config.grid,
            refcase=self.ecl_config.refcase,
            config_dict=config_dict,
        )

        for key in self.ensemble_config.getKeylistFromImplType(ErtImplType.GEN_KW):
            if self.ensemble_config.getNode(key).get_init_file_fmt() != None:
                raise KeyError(
                    "Loading GEN_KW from files created by the forward model "
                    "is not supported."
                )

        self.model_config = ModelConfig(
            data_root=self.config_path,
            joblist=self.site_config.get_installed_jobs(),
            refcase=self.ecl_config.refcase,
            config_dict=config_dict,
        )

    def _extract_defines(self, config):
        defines = {}
        if ConfigKeys.DEFINES in config:
            for key in config[ConfigKeys.DEFINES]:
                defines[key] = str(config[ConfigKeys.DEFINES][key])

        return defines

    def _parse_value(self, value):
        if isinstance(value, str):
            return value
        elif isinstance(value, list):
            return [str(elem) for elem in value]
        else:
            return str(value)

    def _assert_keys(self, mother_key, exp_keys, keys):
        if set(exp_keys) != set(keys):
            err_msg = "Did expect the keys %r in %s, received %r."
            raise ValueError(err_msg % (exp_keys, mother_key, keys))

    def _extract_internals(self, config):
        internal_config = []
        config_dir = os.getcwd()

        if ConfigKeys.INTERNALS in config:
            intercon = config[ConfigKeys.INTERNALS]

            dir_key = ConfigKeys.CONFIG_DIRECTORY
            if dir_key in intercon:
                config_dir = os.path.realpath(intercon[dir_key])

            internal_filter = [dir_key]
            for key, value in intercon.items():
                if key not in internal_filter:
                    internal_config.append((key, self._parse_value(value)))

        internal_config.append((ConfigKeys.CONFIG_DIRECTORY, config_dir))
        return config_dir, internal_config

    def _extract_queue_system(self, config):
        if ConfigKeys.QUEUE_SYSTEM not in config:
            return []

        qc = config[ConfigKeys.QUEUE_SYSTEM]
        queue_config = []
        if ConfigKeys.QUEUE_OPTION in qc:
            for qo in qc[ConfigKeys.QUEUE_OPTION]:
                queue_options = [
                    ConfigKeys.DRIVER_NAME,
                    ConfigKeys.OPTION,
                    ConfigKeys.VALUE,
                ]

                self._assert_keys(ConfigKeys.QUEUE_OPTION, queue_options, qo.keys())

                value = [str(qo[item]) for item in queue_options]
                queue_config.append((ConfigKeys.QUEUE_OPTION, value))

        queue_system_filter = [ConfigKeys.QUEUE_OPTION]
        for key, value in qc.items():
            if key not in queue_system_filter:
                queue_config.append((key, self._parse_value(value)))

        return queue_config

    def _extract_install_job(self, config):
        if ConfigKeys.INSTALL_JOB not in config:
            return []

        ic = config[ConfigKeys.INSTALL_JOB]
        job_config = []
        for job in ic:
            job_options = [ConfigKeys.NAME, ConfigKeys.PATH]

            self._assert_keys(ConfigKeys.INSTALL_JOB, job_options, job.keys())
            value = [str(job[item]) for item in job_options]
            job_config.append((ConfigKeys.INSTALL_JOB, value))

        return job_config

    def _extract_simulation_job(self, config):
        if ConfigKeys.SIMULATION_JOB not in config:
            return []

        ic = config[ConfigKeys.SIMULATION_JOB]
        simulation_job = []
        for job in ic:
            arglist = [job[ConfigKeys.NAME]]
            if ConfigKeys.ARGLIST in job:
                for arg in job[ConfigKeys.ARGLIST]:
                    arglist.append(str(arg))
            simulation_job.append((ConfigKeys.SIMULATION_JOB, arglist))

        return simulation_job

    def _extract_forward_model(self, config):
        if ConfigKeys.FORWARD_MODEL not in config:
            return []

        ic = config[ConfigKeys.FORWARD_MODEL]
        forward_model_job = []
        for job in ic:
            forward_model_job.append((ConfigKeys.FORWARD_MODEL, job))

        return forward_model_job

    def _extract_logging(self, config):
        if ConfigKeys.LOGGING not in config:
            return []

        logging_config = []
        for key, value in config[ConfigKeys.LOGGING].items():
            logging_config.append((key, self._parse_value(value)))

        return logging_config

    def _extract_seed(self, config):
        if ConfigKeys.SEED not in config:
            return []

        seed_config = []
        for key, value in config[ConfigKeys.SEED].items():
            seed_config.append((key, self._parse_value(value)))

        return seed_config

    def _extract_gen_kw(self, config):
        if ConfigKeys.GEN_KW not in config:
            return []

        gen_kw_config = []
        for gk in config[ConfigKeys.GEN_KW]:
            gen_kw_options = [
                ConfigKeys.NAME,
                ConfigKeys.TEMPLATE,
                ConfigKeys.OUT_FILE,
                ConfigKeys.PARAMETER_FILE,
            ]

            self._assert_keys(ConfigKeys.GEN_KW, gen_kw_options, gk.keys())

            value = [gk[item] for item in gen_kw_options]
            gen_kw_config.append((ConfigKeys.GEN_KW, value))

        return gen_kw_config

    def _extract_gen_data(self, config):
        if ConfigKeys.GEN_DATA not in config:
            return []

        gen_data_config = []
        for gd in config[ConfigKeys.GEN_DATA]:
            req_keys = [
                ConfigKeys.NAME,
                ConfigKeys.RESULT_FILE,
                ConfigKeys.REPORT_STEPS,
            ]

            default_opt = {ConfigKeys.INPUT_FORMAT: "ASCII"}

            if not sorted(req_keys) == sorted(gd.keys()):
                err_msg = "Expected keys %r when creating GEN_DATA, received %r"
                raise KeyError(err_msg % (req_keys, gd))

            value = [gd[ConfigKeys.NAME]]
            value += [f"{key}:{gd[key]}" for key in req_keys[1:]]
            value += [f"{key}:{val}" for key, val in default_opt.items()]
            gen_data_config.append((ConfigKeys.GEN_DATA, value))

        return gen_data_config

    def _extract_simulation(self, config):
        if ConfigKeys.SIMULATION not in config:
            return []

        simulation_config = []
        sc = config[ConfigKeys.SIMULATION]
        sim_filter = []

        # Extract queue system
        sim_filter.append(ConfigKeys.QUEUE_SYSTEM)
        simulation_config += self._extract_queue_system(sc)

        # Extract install job
        sim_filter.append(ConfigKeys.INSTALL_JOB)
        simulation_config += self._extract_install_job(sc)

        # Extract forward_model
        sim_filter.append(ConfigKeys.FORWARD_MODEL)
        simulation_config += self._extract_forward_model(sc)

        # Extract simulation_job
        sim_filter.append(ConfigKeys.SIMULATION_JOB)
        simulation_config += self._extract_simulation_job(sc)

        # Extract logging
        sim_filter.append(ConfigKeys.LOGGING)
        simulation_config += self._extract_logging(sc)

        # Extract seed
        sim_filter.append(ConfigKeys.SEED)
        simulation_config += self._extract_seed(sc)

        # Extract GEN_KW
        sim_filter.append(ConfigKeys.GEN_KW)
        simulation_config += self._extract_gen_kw(sc)

        # Extract GEN_DATA
        sim_filter.append(ConfigKeys.GEN_DATA)
        simulation_config += self._extract_gen_data(sc)

        # Others
        for key, value in sc.items():
            if key not in sim_filter:
                simulation_config.append((key, self._parse_value(value)))

        return simulation_config

    def _extract_config(self, config):
        defines = self._extract_defines(config)
        key_filter = [ConfigKeys.DEFINES]

        new_config = []

        # Extract internals
        key_filter.append(ConfigKeys.INTERNALS)
        config_dir, internal_config = self._extract_internals(config)
        new_config += internal_config

        # Extract simulation
        key_filter.append(ConfigKeys.SIMULATION)
        new_config += self._extract_simulation(config)

        # Unrecognized keys
        for key, value in config.items():
            if key not in key_filter:
                self._failed_keys[key] = value

        return defines, config_dir, new_config

    def _build_config_content(self, config):
        self._failed_keys = {}
        defines, config_dir, config_list = self._extract_config(config)

        config_parser = ConfigParser()
        init_user_config_parser(config_parser)
        config_content = ConfigContent(None)
        config_content.setParser(config_parser)

        # Insert defines
        for key, value in defines.items():
            config_content.add_define(key, value)

        # Insert key values
        if not os.path.exists(config_dir):
            raise IOError(f"The configuration directory: {config_dir} does not exist")

        path_elm = config_content.create_path_elm(config_dir)

        def add_key_value(key, value):
            return config_parser.add_key_value(
                config_content, key, StringList([key] + value), path_elm=path_elm
            )

        for key, value in config_list:
            if isinstance(value, str):
                value = [value]
            if not isinstance(value, list):
                raise ValueError(f"Expected value to be str or list, was {type(value)}")

            ok = add_key_value(key, value)
            if not ok:
                self._failed_keys[key] = value

        config_parser.validate(config_content)
        self._errors = list(config_content.getErrors())

        return config_content

    def free(self):
        self._free()  # pylint: disable=no-member

    @property
    def errors(self):
        return self._errors

    @property
    def failed_keys(self):
        return self._failed_keys

    @property
    def site_config_file(self):
        return self.site_config.config_file

    @property
    def ert_templates(self):
        return self._templates

    def get_num_cpu(self) -> Optional[int]:
        queue_num_cpu = self.queue_config.num_cpu
        if queue_num_cpu == 0:
            return None
        return queue_num_cpu

    def __eq__(self, other):
        # compare each config separatelly
        config_eqs = (
            (self.subst_config == other.subst_config),
            (self.site_config == other.site_config),
            (self.random_seed == other.random_seed),
            (self.analysis_config == other.analysis_config),
            (self.ert_workflow_list == other.ert_workflow_list),
            (self.ert_templates == other.ert_templates),
            (self.ecl_config == other.ecl_config),
            (self.ensemble_config == other.ensemble_config),
            (self.model_config == other.model_config),
            (self.queue_config == other.queue_config),
        )

        if not all(config_eqs):
            return False

        return True

    def __ne__(self, other):
        return not self == other

    def __repr__(self):
        return f"<ResConfig(\n{str(self)}\n)>"

    def __str__(self):
        return (
            f"SubstConfig: {self.subst_config},\n"
            f"SiteConfig: {self.site_config},\n"
            f"RandomSeed: {self.random_seed},\n"
            f"AnalysisConfig: {self.analysis_config},\n"
            f"ErtWorkflowList: {self.ert_workflow_list},\n"
            f"ErtTemplates: {self.ert_templates},\n"
            f"EclConfig: {self.ecl_config},\n"
            f"EnsembleConfig: {self.ensemble_config},\n"
            f"ModelConfig: {self.model_config},\n"
            f"QueueConfig: {self.queue_config}"
        )
