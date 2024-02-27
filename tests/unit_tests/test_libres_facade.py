import logging
from datetime import datetime, timedelta
from textwrap import dedent

import pytest
from pandas.core.base import PandasObject
from resdata.summary import Summary

from ert.config import ErtConfig
from ert.enkf_main import sample_prior
from ert.libres_facade import LibresFacade
from ert.storage import open_storage


@pytest.fixture
def facade(snake_oil_case):
    return LibresFacade(snake_oil_case)


@pytest.fixture
def storage(facade):
    with open_storage(facade.enspath, mode="w") as storage:
        yield storage


@pytest.fixture
def empty_case(facade, storage):
    experiment_id = storage.create_experiment()
    return storage.create_ensemble(
        experiment_id, name="new_case", ensemble_size=facade.get_ensemble_size()
    )


@pytest.fixture
def get_ensemble(storage):
    def getter(name):
        storage.refresh()
        ensemble_id = storage.get_ensemble_by_name(name)
        return storage.get_ensemble(ensemble_id)

    return getter


def test_keyword_type_checks(snake_oil_default_storage):
    assert "BPR:1,3,8" in snake_oil_default_storage.get_summary_keyset()


def test_keyword_type_checks_missing_key(snake_oil_default_storage):
    assert "nokey" not in snake_oil_default_storage.get_summary_keyset()


@pytest.mark.filterwarnings("ignore:.*Use load_responses.*:DeprecationWarning")
def test_data_fetching_missing_key(empty_case):
    data = [
        empty_case.load_all_summary_data(["nokey"]),
        empty_case.load_all_gen_kw_data("nokey", None),
    ]

    for dataframe in data:
        assert isinstance(dataframe, PandasObject)
        assert dataframe.empty


def test_all_data_type_keys(facade):
    keys = facade.all_data_type_keys()

    expected = [
        "BPR:1,3,8",
        "BPR:5,5,5",
        "FGIP",
        "FGIPH",
        "FGOR",
        "FGORH",
        "FGPR",
        "FGPRH",
        "FGPT",
        "FGPTH",
        "FOIP",
        "FOIPH",
        "FOPR",
        "FOPRH",
        "FOPT",
        "FOPTH",
        "FWCT",
        "FWCTH",
        "FWIP",
        "FWIPH",
        "FWPR",
        "FWPRH",
        "FWPT",
        "FWPTH",
        "WGOR:OP1",
        "WGOR:OP2",
        "WGORH:OP1",
        "WGORH:OP2",
        "WGPR:OP1",
        "WGPR:OP2",
        "WGPRH:OP1",
        "WGPRH:OP2",
        "WOPR:OP1",
        "WOPR:OP2",
        "WOPRH:OP1",
        "WOPRH:OP2",
        "WWCT:OP1",
        "WWCT:OP2",
        "WWCTH:OP1",
        "WWCTH:OP2",
        "WWPR:OP1",
        "WWPR:OP2",
        "WWPRH:OP1",
        "WWPRH:OP2",
        "SNAKE_OIL_PARAM:BPR_138_PERSISTENCE",
        "SNAKE_OIL_PARAM:BPR_555_PERSISTENCE",
        "SNAKE_OIL_PARAM:OP1_DIVERGENCE_SCALE",
        "SNAKE_OIL_PARAM:OP1_OCTAVES",
        "SNAKE_OIL_PARAM:OP1_OFFSET",
        "SNAKE_OIL_PARAM:OP1_PERSISTENCE",
        "SNAKE_OIL_PARAM:OP2_DIVERGENCE_SCALE",
        "SNAKE_OIL_PARAM:OP2_OCTAVES",
        "SNAKE_OIL_PARAM:OP2_OFFSET",
        "SNAKE_OIL_PARAM:OP2_PERSISTENCE",
        "SNAKE_OIL_GPR_DIFF@199",
        "SNAKE_OIL_OPR_DIFF@199",
        "SNAKE_OIL_WPR_DIFF@199",
    ]

    assert expected == keys


def test_observation_keys(facade):
    expected_obs = {
        "FOPR": ["FOPR"],
        "WOPR:OP1": [
            "WOPR_OP1_108",
            "WOPR_OP1_144",
            "WOPR_OP1_190",
            "WOPR_OP1_36",
            "WOPR_OP1_72",
            "WOPR_OP1_9",
        ],
        "SNAKE_OIL_WPR_DIFF@199": ["WPR_DIFF_1"],
    }

    for key in facade.all_data_type_keys():
        obs_keys = facade.observation_keys(key)
        assert expected_obs.get(key, []) == obs_keys


def test_observation_keys_missing_key(facade):
    obs_keys = facade.observation_keys("nokey")
    assert [] == obs_keys


@pytest.mark.filterwarnings("ignore:.*Use load_responses.*:DeprecationWarning")
def test_summary_data_verify_indices_and_values(
    caplog, snake_oil_default_storage, snapshot
):
    with caplog.at_level(logging.WARNING):
        data = snake_oil_default_storage.load_all_summary_data(["FOPR"])
        data = data.unstack(level="Realization")
        snapshot.assert_match(
            data.iloc[:5].to_csv(),
            "summary_head.csv",
        )
        snapshot.assert_match(
            data.iloc[-5:].to_csv(),
            "summary_tail.csv",
        )

        assert data.shape == (200, 5)
        assert "contains duplicate timestamps" not in caplog.text


def test_summary_keys(facade):
    assert facade.get_summary_keys() == [
        "BPR:1,3,8",
        "BPR:5,5,5",
        "FGIP",
        "FGIPH",
        "FGOR",
        "FGORH",
        "FGPR",
        "FGPRH",
        "FGPT",
        "FGPTH",
        "FOIP",
        "FOIPH",
        "FOPR",
        "FOPRH",
        "FOPT",
        "FOPTH",
        "FWCT",
        "FWCTH",
        "FWIP",
        "FWIPH",
        "FWPR",
        "FWPRH",
        "FWPT",
        "FWPTH",
        "WGOR:OP1",
        "WGOR:OP2",
        "WGORH:OP1",
        "WGORH:OP2",
        "WGPR:OP1",
        "WGPR:OP2",
        "WGPRH:OP1",
        "WGPRH:OP2",
        "WOPR:OP1",
        "WOPR:OP2",
        "WOPRH:OP1",
        "WOPRH:OP2",
        "WWCT:OP1",
        "WWCT:OP2",
        "WWCTH:OP1",
        "WWCTH:OP2",
        "WWPR:OP1",
        "WWPR:OP2",
        "WWPRH:OP1",
        "WWPRH:OP2",
    ]


def test_gen_data_keys(facade):
    assert len(facade.get_gen_data_keys()) == 3
    assert "SNAKE_OIL_WPR_DIFF@199" in facade.get_gen_data_keys()


def test_gen_kw_keys(facade):
    assert len(facade.gen_kw_keys()) == 10
    assert "SNAKE_OIL_PARAM:BPR_555_PERSISTENCE" in facade.gen_kw_keys()


@pytest.mark.usefixtures("use_tmpdir")
def test_gen_kw_log_appended_extra():
    with open("config_file.ert", "w", encoding="utf-8") as fout:
        fout.write(
            dedent(
                """
        NUM_REALIZATIONS 1
        GEN_KW KW_NAME template.txt kw.txt prior.txt
        """
            )
        )
    with open("template.txt", "w", encoding="utf-8") as fh:
        fh.writelines("MY_KEYWORD <MY_KEYWORD>")
    with open("prior.txt", "w", encoding="utf-8") as fh:
        fh.writelines("MY_KEYWORD LOGNORMAL 1 2")

    facade = LibresFacade.from_config_file("config_file.ert")
    assert len(facade.gen_kw_keys()) == 2


def test_gen_kw_priors(facade):
    priors = facade.gen_kw_priors()
    assert len(priors["SNAKE_OIL_PARAM"]) == 10
    assert {
        "key": "OP1_PERSISTENCE",
        "function": "UNIFORM",
        "parameters": {"MIN": 0.01, "MAX": 0.4},
    } in priors["SNAKE_OIL_PARAM"]


@pytest.mark.filterwarnings("ignore:.*Use load_responses.*:DeprecationWarning")
def test_summary_collector(
    monkeypatch, snake_oil_case_storage, snake_oil_default_storage, snapshot
):
    monkeypatch.setenv("TZ", "CET")  # The ert_statoil case was generated in CET

    data = snake_oil_default_storage.load_all_summary_data()
    snapshot.assert_match(
        data.iloc[:4].round(4).to_csv(),
        "summary_collector_1.csv",
    )
    assert data.shape == (1000, 44)
    with pytest.raises(KeyError):
        # realization 60:
        _ = data.loc[60]

    data = snake_oil_default_storage.load_all_summary_data(["WWCT:OP1", "WWCT:OP2"])
    snapshot.assert_match(data.iloc[:4].to_csv(), "summary_collector_2.csv")
    assert data.shape == (1000, 2)
    with pytest.raises(KeyError):
        _ = data["FOPR"]

    realization_index = 4
    data = snake_oil_default_storage.load_all_summary_data(
        ["WWCT:OP1", "WWCT:OP2"],
        realization_index=realization_index,
    )
    snapshot.assert_match(data.iloc[:4].to_csv(), "summary_collector_3.csv")
    assert data.shape == (200, 2)
    non_existing_realization_index = 150
    with pytest.raises(IndexError):
        _ = snake_oil_default_storage.load_all_summary_data(
            ["WWCT:OP1", "WWCT:OP2"],
            realization_index=non_existing_realization_index,
        )


def test_misfit_collector(snake_oil_case_storage, snake_oil_default_storage, snapshot):
    facade = LibresFacade(snake_oil_case_storage)
    data = facade.load_all_misfit_data(snake_oil_default_storage)
    snapshot.assert_match(data.to_csv(), "misfit_collector.csv")

    with pytest.raises(KeyError):
        # realization 60:
        _ = data.loc[60]


def test_gen_kw_collector(snake_oil_default_storage, snapshot):
    data = snake_oil_default_storage.load_all_gen_kw_data()
    snapshot.assert_match(data.round(6).to_csv(), "gen_kw_collector.csv")

    with pytest.raises(KeyError):
        # realization 60:
        _ = data.loc[60]

    data = snake_oil_default_storage.load_all_gen_kw_data(
        "SNAKE_OIL_PARAM",
    )[["SNAKE_OIL_PARAM:OP1_PERSISTENCE", "SNAKE_OIL_PARAM:OP1_OFFSET"]]
    snapshot.assert_match(data.round(6).to_csv(), "gen_kw_collector_2.csv")

    with pytest.raises(KeyError):
        _ = data["SNAKE_OIL_PARAM:OP1_DIVERGENCE_SCALE"]

    realization_index = 3
    data = snake_oil_default_storage.load_all_gen_kw_data(
        "SNAKE_OIL_PARAM",
        realization_index=realization_index,
    )["SNAKE_OIL_PARAM:OP1_PERSISTENCE"]
    snapshot.assert_match(data.round(6).to_csv(), "gen_kw_collector_3.csv")

    non_existing_realization_index = 150
    with pytest.raises(tuple([IndexError, KeyError])):
        _ = snake_oil_default_storage.load_all_gen_kw_data(
            "SNAKE_OIL_PARAM",
            realization_index=non_existing_realization_index,
        )["SNAKE_OIL_PARAM:OP1_PERSISTENCE"]


@pytest.mark.usefixtures("use_tmpdir")
def test_gen_data_report_steps():
    with open("config_file.ert", "w", encoding="utf-8") as fout:
        # Write a minimal config file
        fout.write(
            dedent(
                """
        NUM_REALIZATIONS 1
        OBS_CONFIG observations
        GEN_DATA RESPONSE RESULT_FILE:result_%d.out REPORT_STEPS:0,1 INPUT_FORMAT:ASCII
        """
            )
        )
    with open("obs_data_0.txt", "w", encoding="utf-8") as fout:
        fout.write("1.0 0.1")
    with open("obs_data_1.txt", "w", encoding="utf-8") as fout:
        fout.write("2.0 0.1")

    with open("observations", "w", encoding="utf-8") as fout:
        fout.write(
            dedent(
                """
        GENERAL_OBSERVATION OBS_0 {
            DATA       = RESPONSE;
            INDEX_LIST = 0;
            RESTART    = 0;
            OBS_FILE   = obs_data_0.txt;
        };

        GENERAL_OBSERVATION OBS_1 {
            DATA       = RESPONSE;
            INDEX_LIST = 0;
            RESTART    = 1;
            OBS_FILE   = obs_data_1.txt;
        };
        """
            )
        )
    facade = LibresFacade.from_config_file("config_file.ert")
    obs_key = facade.observation_keys("RESPONSE@0")
    assert obs_key == ["OBS_0"]

    obs_key = facade.observation_keys("RESPONSE@1")
    assert obs_key == ["OBS_1"]

    obs_key = facade.observation_keys("RESPONSE@2")
    assert obs_key == []

    obs_key = facade.observation_keys("NOT_A_KEY")
    assert obs_key == []


def test_get_observations(tmpdir):
    date = datetime(2014, 9, 10)
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 2

        ECLBASE ECLIPSE_CASE
        REFCASE ECLIPSE_CASE
        OBS_CONFIG observations
        """
        )
        observations = dedent(
            f"""
        SUMMARY_OBSERVATION FOPR_1
        {{
        VALUE   = 0.1;
        ERROR   = 0.05;
        DATE    = {(date + timedelta(days=1)).isoformat()};
        KEY     = FOPR;
        }};
        """
        )

        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)
        with open("observations", "w", encoding="utf-8") as fh:
            fh.writelines(observations)

        summary = Summary.writer("ECLIPSE_CASE", date, 3, 3, 3)
        summary.add_variable("FOPR", unit="SM3/DAY")
        t_step = summary.add_t_step(1, sim_days=1)
        t_step["FOPR"] = 1
        summary.fwrite()

        facade = LibresFacade.from_config_file("config.ert")
        assert "FOPR_1" in facade.get_observations()


def test_load_gen_kw_not_sorted(storage, tmpdir, snapshot):
    """
    This test checks two things, loading multiple parameters and
    loading log parameters.
    """
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 10
        GEN_KW PARAM_2 template.txt kw.txt prior.txt
        GEN_KW PARAM_1 template.txt kw.txt prior.txt
        RANDOM_SEED 1234
        """
        )
        with open("config.ert", mode="w", encoding="utf-8") as fh:
            fh.writelines(config)
        with open("template.txt", mode="w", encoding="utf-8") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", mode="w", encoding="utf-8") as fh:
            fh.writelines("MY_KEYWORD LOGUNIF 0.1 1")

        ert_config = ErtConfig.from_file("config.ert")

        experiment_id = storage.create_experiment(
            parameters=ert_config.ensemble_config.parameter_configuration
        )
        ensemble_size = 10
        ensemble = storage.create_ensemble(
            experiment_id, name="default", ensemble_size=ensemble_size
        )

        sample_prior(ensemble, range(ensemble_size), random_seed=1234)

        data = ensemble.load_all_gen_kw_data()
        snapshot.assert_match(data.round(12).to_csv(), "gen_kw_unsorted")
