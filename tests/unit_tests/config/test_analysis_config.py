import warnings
from textwrap import dedent

import hypothesis.strategies as st
import pytest
from hypothesis import given

from ert.config import (
    AnalysisConfig,
    ConfigValidationError,
    ErtConfig,
    ESSettings,
    IESSettings,
)
from ert.config.parsing import ConfigKeys, ConfigWarning


@pytest.mark.usefixtures("use_tmpdir")
def test_analysis_config_from_file_is_same_as_from_dict():
    with open("analysis_config", "w", encoding="utf-8") as fout:
        fout.write(
            dedent(
                """
                NUM_REALIZATIONS 10
                MIN_REALIZATIONS 10
                ANALYSIS_SET_VAR STD_ENKF ENKF_TRUNCATION 0.8
                """
            )
        )
    analysis_config = ErtConfig.from_file("analysis_config").analysis_config
    assert analysis_config == AnalysisConfig.from_dict(
        {
            ConfigKeys.NUM_REALIZATIONS: 10,
            ConfigKeys.MIN_REALIZATIONS: "10",
            ConfigKeys.ANALYSIS_SET_VAR: [
                ("STD_ENKF", "ENKF_TRUNCATION", 0.8),
            ],
        }
    )


@pytest.mark.filterwarnings(
    "ignore:.*MIN_REALIZATIONS set to more than NUM_REALIZATIONS.*:ert.config.ConfigWarning"
)
@pytest.mark.parametrize(
    "num_realization, min_realizations, expected_min_real",
    [
        (80, "10%", 8),
        (5, "2%", 1),
        (8, "50%", 4),
        (8, "100%", 8),
        (8, "100%", 8),
        (8, "10%", 1),
        (80, "0", 80),
        (80, "0", 80),
        (900, "10", 10),
        (80, "50", 50),
        (80, "80", 80),
        (80, "100", 80),
    ],
)
def test_analysis_config_min_realizations(
    num_realization, min_realizations, expected_min_real
):
    assert (
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: num_realization,
                ConfigKeys.MIN_REALIZATIONS: min_realizations,
            }
        ).minimum_required_realizations
        == expected_min_real
    )


def test_invalid_min_realization_raises_config_validation_error():
    with pytest.raises(
        ConfigValidationError, match="MIN_REALIZATIONS value is not integer"
    ):
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: 1,
                ConfigKeys.MIN_REALIZATIONS: "1s",
            }
        )


def test_invalid_min_realization_percentage_raises_config_validation_error():
    with pytest.raises(
        ConfigValidationError,
        match="MIN_REALIZATIONS 'd%s' contained % but was not a valid percentage",
    ):
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: 1,
                ConfigKeys.MIN_REALIZATIONS: "d%s",
            }
        )


@pytest.mark.parametrize(
    "value, expected", [("100%", 50), ("+34", 34), ("-1", -1), ("50.5%", 26)]
)
def test_valid_min_realization(value, expected):
    assert (
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: 50,
                ConfigKeys.MIN_REALIZATIONS: value,
            }
        ).minimum_required_realizations
        == expected
    )


@pytest.mark.parametrize(
    "analysis_config", [AnalysisConfig(), AnalysisConfig.from_dict({})]
)
def test_analysis_config_modules(analysis_config):
    assert isinstance(analysis_config.es_module, ESSettings)
    assert isinstance(analysis_config.ies_module, IESSettings)


def test_analysis_config_iter_config_dict_initialisation():
    expected_ensemble_format = "case_%d"
    analysis_config = AnalysisConfig.from_dict(
        {
            ConfigKeys.NUM_REALIZATIONS: 10,
            ConfigKeys.ITER_CASE: expected_ensemble_format,
            ConfigKeys.ITER_COUNT: 42,
            ConfigKeys.ITER_RETRY_COUNT: 24,
        }
    )

    assert analysis_config.ensemble_format_is_set() is True
    assert analysis_config.ensemble_format == expected_ensemble_format
    assert analysis_config.num_iterations == 42
    assert analysis_config.num_retries_per_iter == 24


@pytest.mark.parametrize(
    "analysis_config", [AnalysisConfig(), AnalysisConfig.from_dict({})]
)
def test_analysis_config_iter_config_default_initialisation(analysis_config):
    assert analysis_config.num_iterations == 4
    assert analysis_config.num_retries_per_iter == 4
    analysis_config.set_num_iterations(42)
    assert analysis_config.num_iterations == 42


@pytest.mark.parametrize(
    "analysis_config", [AnalysisConfig(), AnalysisConfig.from_dict({})]
)
def test_setting_ensemble_format(analysis_config):
    assert analysis_config.ensemble_format is None
    assert not analysis_config.ensemble_format_is_set()
    expected_ensemble_format = "case_%d"
    analysis_config.set_ensemble_format(expected_ensemble_format)
    assert analysis_config.ensemble_format == expected_ensemble_format
    assert analysis_config.ensemble_format_is_set()


def test_incorrect_variable_raises_validation_error():
    with pytest.raises(
        ConfigValidationError, match="Input should be 'exact' or 'subspace'"
    ):
        _ = AnalysisConfig.from_dict(
            {
                ConfigKeys.ANALYSIS_SET_VAR: [["STD_ENKF", "IES_INVERSION", "FOO"]],
            }
        )


def test_unknown_variable_raises_validation_error():
    with pytest.raises(ConfigValidationError, match="Extra inputs are not permitted"):
        _ = AnalysisConfig.from_dict(
            {
                ConfigKeys.ANALYSIS_SET_VAR: [["STD_ENKF", "BAR", "1"]],
            }
        )


def test_default_alpha_is_set():
    default_alpha = 3.0
    assert AnalysisConfig.from_dict({}).enkf_alpha == default_alpha
    assert AnalysisConfig().enkf_alpha == default_alpha


@given(st.floats(allow_nan=False, allow_infinity=False))
def test_alpha_is_set_from_corresponding_key(value):
    assert AnalysisConfig.from_dict({ConfigKeys.ENKF_ALPHA: value}).enkf_alpha == value
    assert AnalysisConfig(alpha=value).enkf_alpha == value


@given(st.floats(allow_nan=False, allow_infinity=False))
def test_analysis_config_alpha_set_and_get(value):
    analysis_config = AnalysisConfig()
    analysis_config.enkf_alpha = value
    assert analysis_config.enkf_alpha == value


def test_default_std_cutoff_is_set():
    default_std_cutoff = 1e-6
    assert AnalysisConfig.from_dict({}).std_cutoff == default_std_cutoff
    assert AnalysisConfig().std_cutoff == default_std_cutoff


@given(st.floats(allow_nan=False, allow_infinity=False))
def test_std_cutoff_is_set_from_corresponding_key(value):
    assert AnalysisConfig.from_dict({ConfigKeys.STD_CUTOFF: value}).std_cutoff == value
    assert AnalysisConfig(std_cutoff=value).observation_settings.std_cutoff == value


def test_default_max_runtime_is_unlimited():
    assert AnalysisConfig.from_dict({}).max_runtime is None
    assert AnalysisConfig().max_runtime is None


@given(st.integers(min_value=1))
def test_max_runtime_is_set_from_corresponding_keyword(value):
    assert (
        AnalysisConfig.from_dict({ConfigKeys.MAX_RUNTIME: value}).max_runtime == value
    )
    assert AnalysisConfig(max_runtime=value).max_runtime == value


@given(st.integers(min_value=1))
def test_default_min_realization_is_all_realizations(value):
    assert (
        AnalysisConfig.from_dict(
            {ConfigKeys.NUM_REALIZATIONS: value}
        ).minimum_required_realizations
        == value
    )


@given(st.integers(min_value=1))
def test_min_realization_is_set_from_corresponding_keyword(value):
    assert (
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: value + 1,
                ConfigKeys.MIN_REALIZATIONS: str(value),
            }
        ).minimum_required_realizations
        == value
    )
    assert AnalysisConfig(min_realization=value).minimum_required_realizations == value


def test_giving_larger_min_than_num_realizations_warns():
    with pytest.warns(
        ConfigWarning, match="MIN_REALIZATIONS set to more than NUM_REALIZATIONS"
    ):
        _ = AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: 1,
                ConfigKeys.MIN_REALIZATIONS: "2",
            }
        )


def test_num_realizations_0_means_all():
    """For legacy reasons, `NUM_REALIZATIONS 0` means all must pass."""
    assert (
        AnalysisConfig.from_dict(
            {
                ConfigKeys.NUM_REALIZATIONS: 100,
                ConfigKeys.MIN_REALIZATIONS: "0",
            }
        ).minimum_required_realizations
        == 100
    )


@pytest.mark.parametrize(
    "config, expected",
    [
        (
            ["STD_ENKF", "INVERSION", "1"],
            "Using 1 is deprecated, use:\nANALYSIS_SET_VAR STD_ENKF INVERSION SUBSPACE",
        ),
        (
            ["STD_ENKF", "IES_INVERSION", "1"],
            dedent(
                """IES_INVERSION is deprecated, please use INVERSION instead:
ANALYSIS_SET_VAR STD_ENKF INVERSION SUBSPACE"""
            ),
        ),
    ],
)
def test_incorrect_variable_deprecation_warning(config, expected):
    with warnings.catch_warnings(record=True) as all_warnings:
        _ = AnalysisConfig.from_dict(
            {
                ConfigKeys.ANALYSIS_SET_VAR: [config],
            }
        )
    assert expected in [str(warning.message) for warning in all_warnings]


@pytest.mark.parametrize(
    "config, expected",
    [
        ([["OBSERVATIONS", "AUTO_SCALE", "OBS_*"]], [["OBS_*"]]),
        ([["OBSERVATIONS", "AUTO_SCALE", "ONE,TWO"]], [["ONE", "TWO"]]),
        (
            [
                ["OBSERVATIONS", "AUTO_SCALE", "OBS_*"],
                ["OBSERVATIONS", "AUTO_SCALE", "SINGLE"],
            ],
            [["OBS_*"], ["SINGLE"]],
        ),
    ],
)
def test_misfit_configuration(config, expected):
    analysis_config = AnalysisConfig.from_dict(
        {
            ConfigKeys.ANALYSIS_SET_VAR: config,
        }
    )
    assert analysis_config.observation_settings.auto_scale_observations == expected


@pytest.mark.parametrize(
    "config, expectation",
    [
        (
            [["OBSERVATIONS", "SAUTO_SCALE", "OBS_*"]],
            pytest.raises(ConfigValidationError, match="Unknown variable"),
        ),
        (
            [["NOT_A_THING", "AUTO_SCALE", "OBS_*"]],
            pytest.raises(ConfigValidationError, match="ANALYSIS_SET_VAR NOT_A_THING"),
        ),
    ],
)
def test_config_wrong_module(config, expectation):
    with expectation:
        AnalysisConfig.from_dict(
            {
                ConfigKeys.ANALYSIS_SET_VAR: config,
            }
        )
