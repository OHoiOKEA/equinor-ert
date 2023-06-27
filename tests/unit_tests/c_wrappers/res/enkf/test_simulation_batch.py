import pytest

from ert._c_wrappers.enkf import EnKFMain
from ert._c_wrappers.enkf.config.ext_param_config import ExtParamConfig
from ert._c_wrappers.enkf.config.gen_data_config import GenDataConfig
from ert._c_wrappers.enkf.enums import RealizationStateEnum
from ert.simulator.simulation_context import _run_forward_model


@pytest.mark.integration_test
def test_run_simulation_batch(setup_case, prior_ensemble):
    ert = EnKFMain(setup_case("config/simulation_batch", "config.ert"))
    ens_size = 4
    ens_config = ert.ensembleConfig()

    # Observe that a significant amount of hardcoding
    # regarding the GEN_DATA and EXT_PARAM nodes is assumed
    # between this test, the config file and the forward model.

    # Add control nodes
    order_control = ExtParamConfig(
        "WELL_ORDER", ["W1", "W2", "W3"], output_file="WELL_ORDER.json"
    )
    injection_control = ExtParamConfig(
        "WELL_INJECTION", ["W1", "W4"], output_file="WELL_INJECTION.json"
    )
    ens_config.addNode(order_control)
    ens_config.addNode(injection_control)

    # Add result nodes
    order_result = GenDataConfig(
        name="ORDER",
        input_file="order_%d",
    )
    injection_result = GenDataConfig(
        name="INJECTION",
        input_file="injection_%d",
    )
    ens_config.addNode(order_result)
    ens_config.addNode(injection_result)

    batch_size = ens_size
    order_node_ext = {}
    injection_node_ext = {}
    for iens in range(batch_size):
        order_node_ext["W1"] = iens
        order_node_ext["W2"] = iens * 10
        order_node_ext["W3"] = iens * 100
        prior_ensemble.save_parameters(
            "WELL_ORDER", iens, ExtParamConfig.to_dataset(order_node_ext)
        )

        injection_node_ext["W1"] = iens + 1
        injection_node_ext["W4"] = 3 * (iens + 1)
        prior_ensemble.save_parameters(
            "WELL_INJECTION", iens, ExtParamConfig.to_dataset(injection_node_ext)
        )
        prior_ensemble.state_map[iens] = RealizationStateEnum.STATE_INITIALIZED

    mask = [True] * batch_size
    run_context = ert.ensemble_context(prior_ensemble, mask, iteration=0)
    ert.createRunPath(run_context)
    job_queue = ert.get_queue_config().create_job_queue()

    ert.createRunPath(run_context)
    num = _run_forward_model(ert, job_queue, run_context)
    assert num == batch_size

    for iens in range(batch_size):
        data = prior_ensemble.load_response("ORDER", (iens,))
        data = data["values"].values.ravel()

        order_node_ext = prior_ensemble.load_parameters("WELL_ORDER", iens)
        assert order_node_ext.sel(names="W1") == data[0]
        assert order_node_ext.sel(names="W2") == data[1]
        assert order_node_ext.sel(names="W3") == data[2]
