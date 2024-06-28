import os
from pathlib import Path
from unittest.mock import MagicMock

import pytest

from ert.config import ErtConfig, ModelConfig
from ert.run_context import RunContext
from ert.run_models import BaseRunModel
from ert.runpaths import Runpaths
from ert.substitution_list import SubstitutionList


def test_base_run_model_supports_restart(minimum_case):
    BaseRunModel.validate = MagicMock()
    brm = BaseRunModel(minimum_case, None, None, minimum_case.queue_config, [True])
    assert brm.support_restart


class MockJob:
    def __init__(self, status):
        self.status = status


@pytest.mark.parametrize(
    "initials",
    [
        ([]),
        ([True]),
        ([False]),
        ([False, True]),
        ([True, True]),
        ([False, True]),
    ],
)
def test_active_realizations(initials):
    BaseRunModel.validate = MagicMock()
    brm = BaseRunModel(MagicMock(), None, None, None, initials)
    brm._initial_realizations_mask = initials
    assert brm._ensemble_size == len(initials)


@pytest.mark.parametrize(
    "initials, completed, any_failed, failures",
    [
        ([True], [False], True, [True]),
        ([False], [False], False, [False]),
        ([False, True], [True, False], True, [False, True]),
        ([False, True], [False, True], False, [False, False]),
        ([False, False], [False, False], False, [False, False]),
        ([False, False], [True, True], False, [False, False]),
        ([True, True], [False, True], True, [True, False]),
        ([False, False], [], True, [True, True]),
    ],
)
def test_failed_realizations(initials, completed, any_failed, failures):
    BaseRunModel.validate = MagicMock()
    brm = BaseRunModel(MagicMock(), None, None, None, initials)
    brm._initial_realizations_mask = initials
    brm._completed_realizations_mask = completed

    assert brm._create_mask_from_failed_realizations() == failures
    assert brm.has_failed_realizations() == any_failed


@pytest.mark.parametrize(
    "run_path, number_of_iterations, start_iteration, active_mask, expected",
    [
        ("out/realization-%d/iter-%d", 4, 2, [True, True, True, True], False),
        ("out/realization-%d/iter-%d", 4, 1, [True, True, True, True], True),
        ("out/realization-%d/iter-%d", 4, 1, [False, False, True, False], False),
        ("out/realization-%d/iter-%d", 4, 0, [False, False, False, False], False),
        ("out/realization-%d/iter-%d", 4, 0, [], False),
        ("out/realization-%d", 2, 1, [False, True, True], True),
        ("out/realization-%d", 2, 0, [False, False, True], False),
    ],
)
def test_check_if_runpath_exists(
    create_dummy_run_path,
    run_path: str,
    number_of_iterations: int,
    start_iteration: int,
    active_mask: list,
    expected: bool,
):
    model_config = ModelConfig(runpath_format_string=run_path)
    subs_list = SubstitutionList()
    config = MagicMock()
    config.model_config = model_config
    config.substitution_list = subs_list

    brm = BaseRunModel(
        config,
        None,
        None,
        None,
        active_realizations=active_mask,
        start_iteration=start_iteration,
        number_of_iterations=number_of_iterations,
    )
    brm.facade = MagicMock(
        run_path=run_path,
    )
    assert brm.check_if_runpath_exists() == expected


@pytest.mark.parametrize(
    "run_path, number_of_iterations, start_iteration, active_mask, expected_number",
    [
        ("out/realization-%d/iter-%d", 2, 0, [True, True, True, True], 3),
        ("out/realization-%d/iter-%d", 2, 1, [True, True], 1),
        ("out/realization-%d/iter-%d", 4, 3, [True, True, False, True], 0),
    ],
)
def test_get_number_of_existing_runpaths(
    create_dummy_run_path,
    run_path: str,
    number_of_iterations: int,
    start_iteration: int,
    active_mask: list,
    expected_number: int,
):
    model_config = ModelConfig(runpath_format_string=run_path)
    subs_list = SubstitutionList()
    config = MagicMock()
    config.model_config = model_config
    config.substitution_list = subs_list

    brm = BaseRunModel(
        config,
        MagicMock(),
        MagicMock(),
        MagicMock(),
        active_realizations=active_mask,
        start_iteration=start_iteration,
        number_of_iterations=number_of_iterations,
    )
    brm.facade = MagicMock(
        run_path=run_path,
    )
    assert brm.get_number_of_existing_runpaths() == expected_number


@pytest.mark.usefixtures("use_tmpdir")
@pytest.mark.parametrize(
    "run_path_format",
    ["<ERTCASE>/realization-<IENS>/iter-<ITER>", "<ERTCASE>/realization-<IENS>"],
)
@pytest.mark.parametrize(
    "active_realizations", [[True], [True, True], [True, False], [False], [False, True]]
)
def test_delete_run_path(run_path_format, active_realizations):
    expected_remaining = []
    expected_removed = []
    for iens, mask in enumerate(active_realizations):
        run_path = Path(
            run_path_format.replace("<IENS>", str(iens))
            .replace("<ITER>", "0")
            .replace("<ERTCASE>", "Case_Name")
        )
        os.makedirs(run_path)
        assert run_path.exists()
        if not mask:
            expected_remaining.append(run_path)
        else:
            expected_removed.append(run_path)
    share_path = Path("share")
    os.makedirs(share_path)
    model_config = ModelConfig(runpath_format_string=run_path_format)
    subs_list = SubstitutionList({"<ITER>": "0", "<ERTCASE>": "Case_Name"})
    config = MagicMock()
    config.model_config = model_config
    config.substitution_list = subs_list

    brm = BaseRunModel(
        config, MagicMock(), MagicMock(), MagicMock(), active_realizations
    )
    brm.rm_run_path()
    assert not any(path.exists() for path in expected_removed)
    assert all(path.parent.exists() for path in expected_removed)
    assert all(path.exists() for path in expected_remaining)
    assert share_path.exists()


@pytest.mark.usefixtures("use_tmpdir")
def test_num_cpu_is_propagated_from_config_to_ensemble(storage):
    # Given NUM_CPU in the config file has a special value
    Path("num_cpu_config.ert").write_text(
        "NUM_REALIZATIONS 2\nNUM_CPU 42", encoding="utf-8"
    )

    # Set up a BaseRunModel object from the config file above:
    config = ErtConfig.from_file("num_cpu_config.ert")
    BaseRunModel.validate = MagicMock()
    brm = BaseRunModel(
        config=config,
        storage=storage,
        queue_config=config.queue_config,
        status_queue=None,
        active_realizations=[True],
    )
    run_context = RunContext(
        storage.create_experiment().create_ensemble(name="test", ensemble_size=2),
        Runpaths("real-%d", "", ""),
        initial_mask=[True, True],
    )

    # Instead of running the BaseRunModel, we only test its implementation detail which is to
    # use _build_ensemble() just prior to running
    ensemble = brm._build_ensemble(run_context)

    # Assert the built ensemble has the correct NUM_CPU information
    assert ensemble.reals[0].num_cpu == 42
    assert ensemble.reals[1].num_cpu == 42
