import logging
from textwrap import dedent
from typing import List

import pytest

from ert._c_wrappers.enkf import EnKFMain, ResConfig


def valid_args(arg_types, arg_list: List[str], runtime: bool = False):
    return all(
        arg_type.valid_string(arg, runtime)
        for arg, arg_type in zip(arg_list, arg_types)
    )


@pytest.mark.usefixtures("use_tmpdir")
@pytest.mark.parametrize(
    "job, forward_model, expected_args",
    [
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST WORD_A
            """
            ),
            "FORWARD_MODEL job_name",
            ["WORD_A"],
            id="No argument",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ARGUMENTA>
            """
            ),
            dedent(
                """
            DEFINE <ARGUMENTA> foo
            FORWARD_MODEL job_name
            """
            ),
            ["foo"],
            id="Global arguments are used inside job definition",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ARGUMENT>
            """
            ),
            "FORWARD_MODEL job_name(<ARGUMENT>=yy)",
            ["yy"],
            id="With argument",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            DEFAULT <ARGUMENTA> DEFAULT_ARGA_VALUE
            ARGLIST <ARGUMENTA> <ARGUMENTB> <ARGUMENTC>
                """
            ),
            "DEFINE <TO_BE_DEFINED> <ARGUMENTB>\n"
            "FORWARD_MODEL job_name(<ARGUMENTA>=configured_argumentA,"
            " <TO_BE_DEFINED>=configured_argumentB)",
            [
                "configured_argumentA",
                "<ARGUMENTB>",
                "<ARGUMENTC>",
            ],
            id="Keywords in argument list are not substituted, "
            "so argument B gets no value",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            DEFAULT <ARGUMENTA> DEFAULT_ARGA_VALUE
            ARGLIST <ARGUMENTA> <ARGUMENTB> <ARGUMENTC>
                """
            ),
            dedent(
                """
            DEFINE <ARGUMENTB> DEFINED_ARGUMENTB_VALUE
            FORWARD_MODEL job_name(<ARGUMENTB>=configured_argumentB)
            """
            ),
            ["DEFAULT_ARGA_VALUE", "configured_argumentB", "<ARGUMENTC>"],
            id="Resolved argument given by argument list, not overridden by global",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            DEFAULT <ARGUMENTA> DEFAULT_ARGA_VALUE
            ARGLIST <ARGUMENTA> <ARGUMENTB> <ARGUMENTC>
            """
            ),
            "FORWARD_MODEL job_name()",
            ["DEFAULT_ARGA_VALUE", "<ARGUMENTB>", "<ARGUMENTC>"],
            id="No args, parenthesis, gives default argument A",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            DEFAULT <ARGUMENTA> DEFAULT_ARGA_VALUE
            ARGLIST <ARGUMENTA> <ARGUMENTB> <ARGUMENTC>
            """
            ),
            "FORWARD_MODEL job_name",
            ["DEFAULT_ARGA_VALUE", "<ARGUMENTB>", "<ARGUMENTC>"],
            id="No args, gives default argument A",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ITER>
            """
            ),
            "FORWARD_MODEL job_name(<ITER>=<ITER>)",
            ["0"],
            id="This style of args works without infinite substitution loop.",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ECLBASE>
            """
            ),
            "FORWARD_MODEL job_name(<ECLBASE>=A/<ECLBASE>)",
            ["A/JOB0"],
            id="The NOSIM job takes <ECLBASE> as args. Expect no infinite loop.",
        ),
    ],
)
def test_forward_model_job(job, forward_model, expected_args):
    with open("job_file", "w", encoding="utf-8") as fout:
        fout.write(job)

    with open("config_file.ert", "w", encoding="utf-8") as fout:
        # Write a minimal config file
        fout.write(
            dedent(
                """
        NUM_REALIZATIONS 1
        """
            )
        )
        fout.write("INSTALL_JOB job_name job_file\n")
        fout.write(forward_model)

    res_config = ResConfig("config_file.ert")
    ert = EnKFMain(res_config)

    forward_model = ert.resConfig().forward_model
    assert len(forward_model.jobs) == 1
    assert (
        forward_model.get_job_data(
            "", "", 0, 0, ert.get_context(), res_config.env_vars
        )["jobList"][0]["argList"]
        == expected_args
    )


@pytest.mark.usefixtures("use_tmpdir")
@pytest.mark.parametrize(
    "job, forward_model, expected_args",
    [
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            MIN_ARG    1
            MAX_ARG    6
            ARG_TYPE 0 STRING
            ARG_TYPE 1 BOOL
            ARG_TYPE 2 FLOAT
            ARG_TYPE 3 INT
            """
            ),
            "SIMULATION_JOB job_name Hello True 3.14 4",
            ["Hello", "True", "3.14", "4"],
            id="Not all args",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            MIN_ARG    1
            MAX_ARG    2
            ARG_TYPE 0 STRING
            ARG_TYPE 0 STRING
                    """
            ),
            "SIMULATION_JOB job_name word <E42>",
            ["word", "<E42>"],
            id="Some args",
        ),
        pytest.param(
            dedent(
                """
            EXECUTABLE echo
            MIN_ARG    1
            MAX_ARG    2
            ARG_TYPE 0 STRING
            ARG_TYPE 0 STRING
            ARGLIST <ARGUMENTA> <ARGUMENTB>
                    """
            ),
            "SIMULATION_JOB job_name arga argb",
            ["arga", "argb"],
            id="simulation job with arglist",
        ),
    ],
)
def test_simulation_job(job, forward_model, expected_args):
    with open("job_file", "w", encoding="utf-8") as fout:
        fout.write(job)

    with open("config_file.ert", "w", encoding="utf-8") as fout:
        # Write a minimal config file
        fout.write("NUM_REALIZATIONS 1\n")
        fout.write("INSTALL_JOB job_name job_file\n")
        fout.write(forward_model)

    res_config = ResConfig("config_file.ert")
    ert = EnKFMain(res_config)

    forward_model = ert.resConfig().forward_model
    forward_model_job = forward_model.jobs[0]
    job_data = forward_model.get_job_data(
        "", "", 0, 0, ert.get_context(), res_config.env_vars
    )["jobList"][0]
    assert len(forward_model.jobs) == 1
    assert job_data["argList"] == expected_args
    assert valid_args(forward_model_job.arg_types, job_data["argList"])


@pytest.mark.usefixtures("use_tmpdir")
def test_that_private_over_global_args_gives_logging_message(caplog):
    caplog.set_level(logging.INFO)
    with open("job_file", "w", encoding="utf-8") as fout:
        fout.write(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ARG>
            ARG_TYPE 0 STRING
            """
            )
        )

    with open("config_file.ert", "w", encoding="utf-8") as fout:
        # Write a minimal config file
        fout.write("NUM_REALIZATIONS 1\n")
        fout.write("DEFINE <ARG> A\n")
        fout.write("INSTALL_JOB job_name job_file\n")
        fout.write("FORWARD_MODEL job_name(<ARG>=B)")

    res_config = ResConfig("config_file.ert")
    ert = EnKFMain(res_config)

    forward_model = ert.resConfig().forward_model
    job_data = forward_model.get_job_data(
        "", "", 0, 0, ert.get_context(), res_config.env_vars
    )["jobList"][0]
    assert len(forward_model.jobs) == 1
    assert job_data["argList"] == ["B"]
    assert "Private arg '<ARG>':'B' chosen over global 'A'" in caplog.text


@pytest.mark.usefixtures("use_tmpdir")
def test_that_private_over_global_args_does_not_give_logging_message_for_argpassing(
    caplog,
):
    caplog.set_level(logging.INFO)
    with open("job_file", "w", encoding="utf-8") as fout:
        fout.write(
            dedent(
                """
            EXECUTABLE echo
            ARGLIST <ARG>
            ARG_TYPE 0 STRING
            """
            )
        )

    with open("config_file.ert", "w", encoding="utf-8") as fout:
        # Write a minimal config file
        fout.write("NUM_REALIZATIONS 1\n")
        fout.write("DEFINE <ARG> A\n")
        fout.write("INSTALL_JOB job_name job_file\n")
        fout.write("FORWARD_MODEL job_name(<ARG>=<ARG>)")

    res_config = ResConfig("config_file.ert")
    ert = EnKFMain(res_config)

    forward_model = ert.resConfig().forward_model
    job_data = forward_model.get_job_data(
        "", "", 0, 0, ert.get_context(), res_config.env_vars
    )["jobList"][0]
    assert len(forward_model.jobs) == 1
    assert job_data["argList"] == ["A"]
    assert "Private arg '<ARG>':'<ARG>' chosen over global 'A'" not in caplog.text
