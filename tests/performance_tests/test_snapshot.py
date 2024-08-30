from typing import Dict

import pytest

from _ert.events import (
    EnsembleStarted,
    ForwardModelStepRunning,
    ForwardModelStepStart,
    ForwardModelStepSuccess,
    RealizationSuccess,
    RealizationWaiting,
)
from ert.ensemble_evaluator import state
from ert.ensemble_evaluator.snapshot import (
    ForwardModel,
    RealizationSnapshot,
    Snapshot,
    SnapshotDict,
)

from ..unit_tests.gui.conftest import (  # noqa: F401
    active_realizations_fixture,
    large_snapshot,
)
from ..unit_tests.gui.simulation.test_run_dialog import (  # noqa: F401
    event_queue,
    notifier,
    run_dialog,
    run_model,
    test_large_snapshot,
)


@pytest.mark.parametrize(
    "ensemble_size, forward_models, memory_reports",
    [
        (10, 10, 1),
        (100, 10, 1),
        (10, 100, 1),
        (10, 10, 10),
    ],
)
def test_snapshot_handling_of_forward_model_events(
    benchmark, ensemble_size, forward_models, memory_reports
):
    benchmark(
        simulate_forward_model_event_handling,
        ensemble_size,
        forward_models,
        memory_reports,
    )


def test_gui_snapshot(
    benchmark,
    large_snapshot,  # noqa: F811
    qtbot,
    run_dialog,  # noqa: F811
    event_queue,  # noqa: F811
):
    infinite_timeout = 100000
    benchmark(
        test_large_snapshot,
        large_snapshot,
        qtbot,
        run_dialog,
        event_queue,
        timeout_per_iter=infinite_timeout,
    )


def simulate_forward_model_event_handling(
    ensemble_size, forward_models, memory_reports
):
    reals: Dict[str, RealizationSnapshot] = {}
    for real in range(ensemble_size):
        reals[str(real)] = RealizationSnapshot(
            active=True,
            status=state.REALIZATION_STATE_WAITING,
        )
        for fm_idx in range(forward_models):
            reals[f"{real}"].forward_models[str(fm_idx)] = ForwardModel(
                status=state.FORWARD_MODEL_STATE_START,
                index=str(fm_idx),
                name=f"FM_{fm_idx}",
            )
    top = SnapshotDict(
        reals=reals, status=state.ENSEMBLE_STATE_UNKNOWN, metadata={"foo": "bar"}
    )

    snapshot = Snapshot.from_nested_dict(top.model_dump())

    ens_id = "A"
    snapshot.update_from_event(EnsembleStarted(ensemble=ens_id))

    for real in range(ensemble_size):
        snapshot.update_from_event(RealizationWaiting(ensemble=ens_id, real=str(real)))

    for fm_idx in range(forward_models):
        for real in range(ensemble_size):
            snapshot.update_from_event(
                ForwardModelStepStart(
                    ensemble=ens_id,
                    real=str(real),
                    fm_step=str(fm_idx),
                    stderr="foo",
                    stdout="bar",
                )
            )
        for current_memory_usage in range(memory_reports):
            for real in range(ensemble_size):
                snapshot.update_from_event(
                    ForwardModelStepRunning(
                        ensemble=ens_id,
                        real=str(real),
                        fm_step=str(fm_idx),
                        max_memory_usage=current_memory_usage,
                        current_memory_usage=current_memory_usage,
                    )
                )
        for real in range(ensemble_size):
            snapshot.update_from_event(
                ForwardModelStepSuccess(
                    ensemble=ens_id, real=str(real), fm_step=str(fm_idx)
                ),
            )

    for real in range(ensemble_size):
        snapshot.update_from_event(RealizationSuccess(ensemble=ens_id, real=str(real)))
