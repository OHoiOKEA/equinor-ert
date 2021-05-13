import pytest

import ert3


@pytest.mark.parametrize(
    ("mean", "std"),
    ((0, 1), (10, 2), (3.1, 0.001), (-1.5, 45)),
)
def test_valid_gauss(mean, std):
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "gaussian",
                "input": {
                    "mean": mean,
                    "std": std,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]
    parameters_config = ert3.config.load_parameters_config(raw_config)

    assert len(parameters_config) == 1
    param = parameters_config[0]

    assert param.name == "my_parameter_group"
    assert param.type == "stochastic"
    assert param.distribution.type == "gaussian"
    assert param.distribution.input.mean == mean
    assert param.distribution.input.std == std
    assert tuple(param.variables) == ("x", "y", "z")

    distribution = param.as_distribution()
    assert isinstance(distribution, ert3.stats.Gaussian)
    assert tuple(param.variables) == tuple(distribution.index)
    assert param.distribution.input.mean == distribution._mean
    assert param.distribution.input.std == distribution._std


@pytest.mark.parametrize(
    "input_",
    (
        {"mean": 0, "std": 0},
        {"mean": 0, "std": -1},
        {"mean": 1},
        {"std": 1},
        {"mean": 0, "std": 1, "upper_bound": 10},
    ),
)
def test_invalid_gauss(input_):
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "gaussian",
                "input": input_,
            },
            "variables": ["x", "y", "z"],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError):
        ert3.config.load_parameters_config(raw_config)


@pytest.mark.parametrize(
    ("lower_bound", "upper_bound"), ((-10.1, -5.3), (-1, 2), (0, 100), (1, 1))
)
def test_valid_uniform(lower_bound, upper_bound):
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": lower_bound,
                    "upper_bound": upper_bound,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]
    parameters_config = ert3.config.load_parameters_config(raw_config)
    assert len(parameters_config) == 1
    param = parameters_config[0]

    assert param.name == "my_parameter_group"
    assert param.type == "stochastic"
    assert param.distribution.type == "uniform"
    assert param.distribution.input.lower_bound == lower_bound
    assert param.distribution.input.upper_bound == upper_bound
    assert tuple(param.variables) == ("x", "y", "z")

    distribution = param.as_distribution()
    assert isinstance(distribution, ert3.stats.Uniform)
    assert tuple(param.variables) == tuple(distribution.index)
    assert param.distribution.input.lower_bound == distribution._lower_bound
    assert param.distribution.input.upper_bound == distribution._upper_bound


@pytest.mark.parametrize(
    "input_",
    (
        {"lower_bound": 2, "upper_bound": 1},
        {"lower_bound": 0},
        {"upper_bound": 0},
        {"lower_bound": 2, "upper_bound": 1, "mean": 0},
    ),
)
def test_invalid_uniform(input_):
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": input_,
            },
            "variables": ["x", "y", "z"],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError):
        ert3.config.load_parameters_config(raw_config)


@pytest.mark.parametrize(
    ("name", "err_msg"),
    (
        ("no.go", "Names are expected to only contain characters"),
        ("no-go", "Names are expected to only contain characters"),
        ("no???", "Names are expected to only contain characters"),
        ("no:go", "Names are expected to only contain characters"),
        ("", "Names cannot be of zero length"),
    ),
)
def test_invalid_name(name, err_msg):
    raw_config = [
        {
            "name": name,
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError, match=err_msg):
        ert3.config.load_parameters_config(raw_config)


@pytest.mark.parametrize(
    "variables",
    (
        ["aaa", "bbb", "ccc"],
        ["one"],
        ["CamelCalse", "snake_case", "ALLCAPS", "stayinglow"],
        [name_len * "x" for name_len in range(1, 1000)],
    ),
)
def test_valid_variables(variables):
    raw_config = [
        {
            "name": "name",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": variables,
        }
    ]

    parameters_config = ert3.config.load_parameters_config(raw_config)
    assert len(parameters_config) == 1

    param = parameters_config[0]
    assert tuple(param.variables) == tuple(variables)


@pytest.mark.parametrize(
    ("name", "err_msg"),
    (
        ("no.go", "Names are expected to only contain characters"),
        ("no-go", "Names are expected to only contain characters"),
        ("no???", "Names are expected to only contain characters"),
        ("no:go", "Names are expected to only contain characters"),
        ("", "Names cannot be of zero length"),
    ),
)
def test_invalid_variable_names(name, err_msg):
    raw_config = [
        {
            "name": name,
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": [name],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError, match=err_msg):
        ert3.config.load_parameters_config(raw_config)


def test_no_variables():
    raw_config = [
        {
            "name": "a_name",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": [],
        }
    ]

    err_msg = "Parameter group cannot have no variables"
    with pytest.raises(ert3.exceptions.ConfigValidationError, match=err_msg):
        ert3.config.load_parameters_config(raw_config)


def test_invalid_type():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "unknown_type",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError, match="unexpected value"):
        ert3.config.load_parameters_config(raw_config)


def test_invalid_distribution():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "unknown_distribution",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    with pytest.raises(ert3.exceptions.ConfigValidationError):
        ert3.config.load_parameters_config(raw_config)


def test_unknown_keyword():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
            "extra_data": "all them good stuff",
        }
    ]

    with pytest.raises(
        ert3.exceptions.ConfigValidationError, match="extra fields not permitted"
    ):
        ert3.config.load_parameters_config(raw_config)


def test_immutable_name():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    parameters_config = ert3.config.load_parameters_config(raw_config)
    with pytest.raises(TypeError, match="is immutable"):
        parameters_config[0].name = "something new"


def test_immutable_distribution():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    parameters_config = ert3.config.load_parameters_config(raw_config)
    with pytest.raises(TypeError, match="is immutable"):
        parameters_config[0].distribution.type = "something new"

    with pytest.raises(TypeError, match="does not support item assignment"):
        parameters_config[0].distribution.input["new_arg"] = "something new"


def test_immutable_variables():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    parameters_config = ert3.config.load_parameters_config(raw_config)
    with pytest.raises(TypeError, match="does not support item assignment"):
        parameters_config[0].variables[0] = "something new"


def test_immutable_parameters():
    raw_config = [
        {
            "name": "my_parameter_group",
            "type": "stochastic",
            "distribution": {
                "type": "uniform",
                "input": {
                    "lower_bound": 0,
                    "upper_bound": 1,
                },
            },
            "variables": ["x", "y", "z"],
        }
    ]

    parameters_config = ert3.config.load_parameters_config(raw_config)
    extra_parameter_config = ert3.config.load_parameters_config(raw_config)[0]

    with pytest.raises(TypeError, match="does not support item assignment"):
        parameters_config[0] = extra_parameter_config


def test_multi_parameter_group():
    raw_config = [
        {
            "name": "name" * (idx + 1),
            "type": "stochastic",
            "distribution": (
                {
                    "type": "gaussian",
                    "input": {
                        "mean": 0,
                        "std": 1,
                    },
                }
                if idx % 2 == 0
                else {
                    "type": "uniform",
                    "input": {
                        "lower_bound": 0,
                        "upper_bound": 1,
                    },
                }
            ),
            "variables": ["x", "y", "z"],
        }
        for idx in range(10)
    ]
    parameters_config = ert3.config.load_parameters_config(raw_config)
    assert len(parameters_config) == 10

    for idx, param in enumerate(parameters_config):
        assert param.name == (idx + 1) * "name"
        assert param.type == "stochastic"
        assert tuple(param.variables) == ("x", "y", "z")

        if idx % 2 == 0:
            assert param.distribution.type == "gaussian"
            assert param.distribution.input.mean == 0
            assert param.distribution.input.std == 1
        else:
            assert param.distribution.type == "uniform"
            assert param.distribution.input.lower_bound == 0
            assert param.distribution.input.upper_bound == 1
