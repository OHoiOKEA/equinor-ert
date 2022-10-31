from argparse import ArgumentParser
from pathlib import Path

import numpy as np
import pytest
from iterative_ensemble_smoother import IterativeEnsembleSmoother

from ert import LibresFacade
from ert.__main__ import ert_parser
from ert._c_wrappers.enkf import EnKFMain, EnkfNode, NodeId, ResConfig, RunContext
from ert.analysis import ErtAnalysisError, ESUpdate
from ert.analysis._es_update import _create_temporary_parameter_storage
from ert.cli import ENSEMBLE_EXPERIMENT_MODE, ENSEMBLE_SMOOTHER_MODE
from ert.cli.main import run_cli


def test_update_report(setup_case, snapshot):
    """
    Note that this is now a snapshot test, so there is no guarantee that the
    snapshots are correct, they are just documenting the current behavior.
    """
    res_config = setup_case("snake_oil", "snake_oil.ert")

    ert = EnKFMain(res_config)
    es_update = ESUpdate(ert)
    fsm = ert.getEnkfFsManager()
    sim_fs = fsm.getFileSystem("default")
    target_fs = fsm.getFileSystem("target")
    run_context = RunContext(sim_fs, target_fs)
    es_update.smootherUpdate(run_context)
    log_file = Path(ert.analysisConfig().get_log_path()) / "deprecated"
    snapshot.assert_match(log_file.read_text("utf-8"), "update_log")


@pytest.mark.parametrize(
    "module, expected_gen_kw",
    [
        (
            "IES_ENKF",
            [
                0.1354320975256126,
                -0.9008090947883539,
                2.269934798484141,
                1.0398838817698344,
                -2.500592496273497,
                1.3552524895821088,
                1.1147880613170447,
                -0.3921659741429975,
                -0.5367979155326622,
                -0.44941925776980124,
            ],
        ),
        (
            "STD_ENKF",
            [
                0.5108986295767448,
                -1.4866364705014095,
                2.8936470430140155,
                1.4932659263584276,
                -4.34014782425466,
                2.411909353882357,
                1.4771893414880648,
                -1.0296350447095624,
                -0.592614391703779,
                -2.0291671399762294,
            ],
        ),
    ],
)
def test_update_snapshot(setup_case, module, expected_gen_kw):
    """
    Note that this is now a snapshot test, so there is no guarantee that the
    snapshots are correct, they are just documenting the current behavior.
    """
    res_config = setup_case("snake_oil", "snake_oil.ert")

    ert = EnKFMain(res_config)
    es_update = ESUpdate(ert)
    ert.analysisConfig().select_module(module)
    fsm = ert.getEnkfFsManager()
    sim_fs = fsm.getFileSystem("default")
    target_fs = fsm.getFileSystem("target")
    run_context = RunContext(sim_fs, target_fs)

    if module == "IES_ENKF":
        w_container = IterativeEnsembleSmoother(ert.getEnsembleSize())
        es_update.iterative_smoother_update(run_context, w_container)
    else:
        es_update.smootherUpdate(run_context)

    conf = ert.ensembleConfig()["SNAKE_OIL_PARAM"]
    sim_node = EnkfNode(conf)
    target_node = EnkfNode(conf)

    node_id = NodeId(0, 0)
    sim_node.load(sim_fs, node_id)
    target_node.load(target_fs, node_id)

    sim_gen_kw = list(sim_node.asGenKw())
    target_gen_kw = list(target_node.asGenKw())

    assert sim_gen_kw != target_gen_kw

    assert sim_gen_kw == pytest.approx(
        [
            -0.4277677005510859,
            -0.022068031218771135,
            1.3343664316893276,
            0.359810814886946,
            0.258740495698248,
            -0.22973280686826203,
            0.5711861410605145,
            0.5640376317068494,
            -0.453073201275987,
            1.9202025655398407,
        ]
    )

    assert target_gen_kw == pytest.approx(expected_gen_kw)


@pytest.mark.integration_test
def test_that_posterior_has_lower_variance_than_prior(copy_case):
    copy_case("poly_example")

    parser = ArgumentParser(prog="test_main")
    parsed = ert_parser(
        parser,
        [
            ENSEMBLE_SMOOTHER_MODE,
            "--current-case",
            "default",
            "--target-case",
            "target",
            "poly.ert",
            "--port-range",
            "1024-65535",
        ],
    )

    run_cli(parsed)
    facade = LibresFacade.from_config_file("poly.ert")
    df_default = facade.load_all_gen_kw_data("default")
    df_target = facade.load_all_gen_kw_data("target")

    # We expect that ERT's update step lowers the
    # generalized variance for the parameters.
    assert (
        0
        < np.linalg.det(df_target.cov().to_numpy())
        < np.linalg.det(df_default.cov().to_numpy())
    )


@pytest.mark.parametrize(
    "expected_target_gen_kw, update_step",
    [
        (
            [
                -0.4277677005510859,
                -1.248448474837954,
                0.8481398331588765,
                0.359810814886946,
                0.258740495698248,
                -0.22973280686826203,
                0.5711861410605145,
                0.5640376317068494,
                -0.453073201275987,
                1.9202025655398407,
            ],
            [
                {
                    "name": "update_step_LOCA",
                    "observations": ["WOPR_OP1_72"],
                    "parameters": [("SNAKE_OIL_PARAM", [1, 2])],
                }
            ],
        ),
        (
            [
                -0.24905813433661067,
                -1.248448474837954,
                2.096944337841518,
                0.359810814886946,
                0.258740495698248,
                -0.22973280686826203,
                0.5711861410605145,
                0.5640376317068494,
                -0.453073201275987,
                1.9202025655398407,
            ],
            [
                {
                    "name": "update_step_LOCA",
                    "observations": ["WOPR_OP1_72"],
                    "parameters": [("SNAKE_OIL_PARAM", [1, 2])],
                },
                {
                    "name": "update_step_LOCA",
                    "observations": ["WOPR_OP1_108"],
                    "parameters": [("SNAKE_OIL_PARAM", [0, 2])],
                },
            ],
        ),
    ],
)
def test_localization(setup_case, expected_target_gen_kw, update_step):
    """
    Note that this is now a snapshot test, so there is no guarantee that the
    snapshots are correct, they are just documenting the current behavior.
    """

    res_config = setup_case("snake_oil", "snake_oil.ert")
    ert = EnKFMain(res_config)
    es_update = ESUpdate(ert)
    fsm = ert.getEnkfFsManager()
    sim_fs = fsm.getFileSystem("default")
    target_fs = fsm.getFileSystem("target")
    # perform localization

    ert.update_configuration = update_step

    run_context = ert.create_ensemble_smoother_run_context(
        source_filesystem=sim_fs, target_filesystem=target_fs, iteration=0
    )
    es_update.smootherUpdate(run_context)

    conf = ert.ensembleConfig()["SNAKE_OIL_PARAM"]
    sim_node = EnkfNode(conf)
    target_node = EnkfNode(conf)

    node_id = NodeId(0, 0)
    sim_node.load(sim_fs, node_id)
    target_node.load(target_fs, node_id)

    sim_gen_kw = list(sim_node.asGenKw())
    target_gen_kw = list(target_node.asGenKw())

    # Test that the localized values has been updated
    assert sim_gen_kw[1:3] != target_gen_kw[1:3]

    # test that all the other values are left unchanged
    assert sim_gen_kw[3:] == target_gen_kw[3:]

    assert target_gen_kw == pytest.approx(expected_target_gen_kw)


@pytest.mark.parametrize(
    "alpha, expected",
    [
        pytest.param(
            0.1,
            [],
            id="Low alpha, no active observations",
            marks=pytest.mark.xfail(raises=ErtAnalysisError),
        ),
        (1, ["ACTIVE", "DEACTIVATED", "DEACTIVATED"]),
        (2, ["ACTIVE", "DEACTIVATED", "DEACTIVATED"]),
        (3, ["ACTIVE", "DEACTIVATED", "DEACTIVATED"]),
        (10, ["ACTIVE", "DEACTIVATED", "ACTIVE"]),
        (100, ["ACTIVE", "ACTIVE", "ACTIVE"]),
    ],
)
def test_snapshot_alpha(setup_case, alpha, expected):
    """
    Note that this is now a snapshot test, so there is no guarantee that the
    snapshots are correct, they are just documenting the current behavior.
    """
    res_config = setup_case("snake_oil", "snake_oil.ert")

    obs_file = Path("observations") / "observations.txt"
    with obs_file.open(mode="w") as fin:
        fin.write(
            """
SUMMARY_OBSERVATION LOW_STD
{
   VALUE   = 10;
   ERROR   = 0.1;
   DATE    = 2015-06-23;
   KEY     = FOPR;
};
SUMMARY_OBSERVATION HIGH_STD
{
   VALUE   = 10;
   ERROR   = 1.0;
   DATE    = 2015-06-23;
   KEY     = FOPR;
};
SUMMARY_OBSERVATION EXTREMELY_HIGH_STD
{
   VALUE   = 10;
   ERROR   = 10.0;
   DATE    = 2015-06-23;
   KEY     = FOPR;
};
"""
        )

    ert = EnKFMain(res_config)
    es_update = ESUpdate(ert)
    ert.analysisConfig().select_module("IES_ENKF")
    fsm = ert.getEnkfFsManager()
    sim_fs = fsm.getFileSystem("default")
    target_fs = fsm.getFileSystem("target")
    run_context = RunContext(sim_fs, target_fs)
    ert.analysisConfig().set_enkf_alpha(alpha)
    w_container = IterativeEnsembleSmoother(ert.getEnsembleSize())
    es_update.iterative_smoother_update(run_context, w_container)
    result_snapshot = es_update.update_snapshots[run_context.run_id]
    assert result_snapshot.alpha == alpha
    assert result_snapshot.update_step_snapshots["ALL_ACTIVE"].obs_status == expected


@pytest.mark.integration_test
def test_update_multiple_param(copy_case):
    copy_case("snake_oil_field")
    parser = ArgumentParser(prog="test_main")
    parsed = ert_parser(
        parser,
        [
            ENSEMBLE_EXPERIMENT_MODE,
            "snake_oil.ert",
            "--port-range",
            "1024-65535",
        ],
    )
    run_cli(parsed)

    res_config = ResConfig("snake_oil.ert")
    ert = EnKFMain(res_config)
    es_update = ESUpdate(ert)
    fsm = ert.getEnkfFsManager()
    sim_fs = fsm.getFileSystem("default")
    target_fs = fsm.getFileSystem("target")

    run_context = ert.create_ensemble_smoother_run_context(
        source_filesystem=sim_fs, target_filesystem=target_fs, iteration=0
    )
    es_update.smootherUpdate(run_context)

    prior = _create_temporary_parameter_storage(
        sim_fs, ert.ensembleConfig(), list(range(10))
    )
    posterior = _create_temporary_parameter_storage(
        target_fs, ert.ensembleConfig(), list(range(10))
    )

    # We expect that ERT's update step lowers the
    # generalized variance for the parameters.
    # https://en.wikipedia.org/wiki/Variance#For_vector-valued_random_variables
    for prior_name, prior_data in prior.items():
        assert np.trace(np.cov(posterior[prior_name])) < np.trace(np.cov(prior_data))
