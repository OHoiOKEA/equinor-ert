import logging
import os
from pathlib import Path
from textwrap import dedent

import pytest
from ecl.summary import EclSum

from ert._c_wrappers.enkf import (
    AnalysisConfig,
    EnkfFs,
    EnKFMain,
    EnkfObs,
    EnsembleConfig,
    ModelConfig,
    ObsVector,
    ResConfig,
    RunArg,
    TimeMap,
)
from ert._c_wrappers.enkf.config import EnkfConfigNode
from ert._c_wrappers.enkf.enums import (
    EnkfObservationImplementationType,
    LoadFailTypeEnum,
)
from ert._c_wrappers.enkf.observations.summary_observation import SummaryObservation


@pytest.mark.unstable
def test_ecl_config_creation(minimum_case):
    assert isinstance(minimum_case.analysisConfig(), AnalysisConfig)
    assert isinstance(minimum_case.ensembleConfig(), EnsembleConfig)

    with pytest.raises(AssertionError):  # Null pointer!
        assert isinstance(minimum_case.ensembleConfig().refcase, EclSum)

    file_system = minimum_case.storage_manager.current_case
    assert file_system.getCaseName() == "default"
    time_map = file_system.getTimeMap()
    assert isinstance(time_map, TimeMap)


@pytest.fixture
def enkf_main(tmp_path, monkeypatch):
    (tmp_path / "test.ert").write_text("NUM_REALIZATIONS 1\nJOBNAME name%d")
    monkeypatch.chdir(tmp_path)
    yield EnKFMain(ResConfig("test.ert"))


def test_create_run_context(monkeypatch, enkf_main):

    iteration = 0
    ensemble_size = 10

    run_context = enkf_main.create_ensemble_context(
        "prior", [True] * ensemble_size, iteration=iteration
    )
    assert run_context.sim_fs.case_name == "prior"
    assert run_context.mask == [True] * ensemble_size
    assert [real.runpath for real in run_context] == [
        f"{Path().absolute()}/simulations/realization-{i}/iter-0"
        for i in range(ensemble_size)
    ]
    assert [real.job_name for real in run_context] == [
        f"name{i}" for i in range(ensemble_size)
    ]

    substitutions = run_context.substituter
    assert "<RUNPATH>" in substitutions
    assert substitutions.get("<ECL_BASE>") == "name9"
    assert substitutions.get("<ECLBASE>") == "name9"


@pytest.mark.usefixtures("use_tmpdir")
def test_that_current_case_file_is_written():
    config_text = dedent(
        """
        NUM_REALIZATIONS 1
        JOBNAME my_case%d
        """
    )
    Path("config.ert").write_text(config_text)
    res_config = ResConfig("config.ert")
    EnKFMain(res_config)
    assert (Path("storage") / "current_case").read_text() == "default"


@pytest.mark.usefixtures("use_tmpdir")
def test_that_current_case_file_can_have_newline():
    config_text = dedent(
        """
        NUM_REALIZATIONS 1
        JOBNAME my_case%d
        """
    )
    Path("config.ert").write_text(config_text)
    res_config = ResConfig("config.ert")
    EnKFMain(res_config)
    assert (Path("storage") / "current_case").read_text() == "default"
    del res_config
    (Path("storage") / "current_case").write_text("default\n")
    res_config = ResConfig("config.ert")
    EnKFMain(res_config)


def test_assert_symlink_deleted(snake_oil_field_example):
    ert = snake_oil_field_example

    # create directory structure
    run_context = ert.create_ensemble_context(
        "prior", [True] * (ert.getEnsembleSize()), iteration=0
    )
    ert.sample_prior(run_context.sim_fs, run_context.active_realizations)
    ert.createRunPath(run_context)

    # replace field file with symlink
    linkpath = f"{run_context[0].runpath}/permx.grdcel"
    targetpath = f"{run_context[0].runpath}/permx.grdcel.target"
    with open(targetpath, "a", encoding="utf-8"):
        pass
    os.remove(linkpath)
    os.symlink(targetpath, linkpath)

    # recreate directory structure
    ert.createRunPath(run_context)

    # ensure field symlink is replaced by file
    assert not os.path.islink(linkpath)


def test_repr(minimum_case):
    assert repr(minimum_case).startswith("EnKFMain(size: 10, config")


def test_bootstrap(minimum_case):
    assert bool(minimum_case)


def test_site_bootstrap():
    with pytest.raises(TypeError):
        EnKFMain(None)


def test_invalid_res_config():
    with pytest.raises(TypeError):
        # pylint: disable=unexpected-keyword-arg, no-value-for-parameter
        EnKFMain(res_config="This is not a ResConfig instance")


def test_invalid_parameter_count_2_res_config():
    with pytest.raises(ValueError):
        ResConfig(user_config_file="a", config="b")


def test_invalid_parameter_count_3_res_config():
    with pytest.raises(ValueError):
        ResConfig(user_config_file="a", config="b", config_dict="c")


def test_observations(minimum_case):
    count = 10
    summary_key = "test_key"
    observation_key = "test_obs_key"
    summary_observation_node = EnkfConfigNode.createSummaryConfigNode(
        summary_key, LoadFailTypeEnum.LOAD_FAIL_EXIT
    )
    observation_vector = ObsVector(
        EnkfObservationImplementationType.SUMMARY_OBS,
        observation_key,
        summary_observation_node,
        count,
    )

    minimum_case.getObservations().addObservationVector(observation_vector)

    values = []
    for index in range(0, count):
        value = index * 10.5
        std = index / 10.0
        summary_observation_node = SummaryObservation(
            summary_key, observation_key, value, std
        )
        observation_vector.installNode(index, summary_observation_node)
        assert observation_vector.getNode(index) == summary_observation_node
        assert summary_observation_node.getValue() == value
        values.append((index, value, std))

    observations = minimum_case.getObservations()
    test_vector = observations[observation_key]
    index = 0
    for node in test_vector:
        assert isinstance(node, SummaryObservation)
        assert node.getValue() == index * 10.5
        index += 1

    assert observation_vector == test_vector
    for index, value, std in values:
        assert test_vector.isActive(index)

        summary_observation_node = test_vector.getNode(index)

        assert summary_observation_node.getValue() == value
        assert summary_observation_node.getStandardDeviation() == std
        assert summary_observation_node.getSummaryKey() == summary_key


def test_config(minimum_case):

    assert isinstance(minimum_case.ensembleConfig(), EnsembleConfig)
    assert isinstance(minimum_case.analysisConfig(), AnalysisConfig)
    assert isinstance(minimum_case.getModelConfig(), ModelConfig)

    assert isinstance(minimum_case.getObservations(), EnkfObs)
    assert isinstance(minimum_case.storage_manager.current_case, EnkfFs)

    assert minimum_case.storage_manager.storage_path.stem == "Ensemble"


def test_run_context(minimum_case):
    iactive = [True] * 10
    iactive[0] = False
    iactive[1] = False
    run_context = minimum_case.load_ensemble_context("default", iactive, iteration=0)

    assert len(run_context) == 10

    with pytest.raises(IndexError):
        _ = run_context[10]

    with pytest.raises(TypeError):
        _ = run_context["String"]

    assert not run_context.is_active(0)
    run_arg = run_context[2]
    assert isinstance(run_arg, RunArg)


@pytest.mark.parametrize(
    "random_seed", ["0", "1234", "123ABC", "123456789ABCDEFGHIJKLMNOPGRST", "123456"]
)
def test_random_seed_initialization_of_rngs(random_seed, tmpdir):
    """
    This is a regression test to make sure the seed can be sampled correctly,
    and that it wraps on int32 overflow.
    """
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        JOBNAME my_name%d
        NUM_REALIZATIONS 10
        RANDOM_SEED {random_seed}
        """
        )
        with open("config.ert", "w") as fh:
            fh.writelines(config)

        res_config = ResConfig("config.ert")
        EnKFMain(res_config)
        assert res_config.random_seed == str(random_seed)


@pytest.mark.usefixtures("use_tmpdir")
def test_ert_context():
    # Write a minimal config file with DEFINE
    with open("config_file.ert", "w") as fout:
        fout.write("NUM_REALIZATIONS 1\nDEFINE MY_PATH <CONFIG_PATH>")
    res_config = ResConfig("config_file.ert")
    ert = EnKFMain(res_config)
    context = ert.get_context()
    my_path = context["MY_PATH"]
    assert my_path == os.getcwd()


@pytest.mark.skip
@pytest.mark.parametrize("lazy_load", [True, False])
def test_load_results_manually2(setup_case, caplog, monkeypatch, lazy_load):
    if lazy_load:
        monkeypatch.setenv("ERT_LAZY_LOAD_SUMMARYDATA", str(lazy_load))
    res_config = setup_case("snake_oil", "snake_oil.ert")
    ert = EnKFMain(res_config)
    load_from = ert.storage_manager.add_case("default_0")
    realisations = [False] * 25
    realisations[0] = True  # only need one to test what we want
    with caplog.at_level(logging.INFO):
        loaded = ert.loadFromForwardModel(realisations, 0, load_from)
        assert loaded == 0  # they will in fact all fail, but that's ok
        assert f"lazy={lazy_load}".lower() in caplog.text
