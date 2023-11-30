import numpy as np
import pytest
import xarray as xr
import xtgeo
from resdata.grid import GridGenerator

from ert.storage import open_storage


def test_that_egrid_files_are_saved_and_loaded_correctly(tmp_path):
    with open_storage(tmp_path, mode="w") as storage:
        grid = xtgeo.create_box_grid(dimension=(4, 5, 1))
        mask = grid.get_actnum()
        mask_values = [True] * 3 + [False] * 16 + [True]
        mask.values = mask_values

        experiment = storage.create_experiment()
        ensemble = storage.create_ensemble(experiment, name="foo", ensemble_size=2)
        ensemble_dir = tmp_path / "ensembles" / str(ensemble.id)
        assert ensemble_dir.exists()

        data = np.full_like(mask_values, np.nan, dtype=np.float32)
        np.place(data, mask_values, np.array([1.2, 1.1, 4.3, 3.1], dtype=np.float32))
        da = xr.DataArray(
            data.reshape((4, 5, 1)),
            name="values",
            dims=["x", "y", "z"],  # type: ignore
        )
        ds = da.to_dataset()
        ensemble.save_parameters("MY_PARAM", 1, ds)
        assert (ensemble_dir / "realization-1" / "MY_PARAM.nc").exists()
        loaded_data = ensemble.load_parameters("MY_PARAM", 1)
        np.testing.assert_array_equal(loaded_data.values, data.reshape((4, 5, 1)))


def test_that_grid_files_are_saved_and_loaded_correctly(tmp_path):
    with open_storage(tmp_path, mode="w") as storage:
        experiment = storage.create_experiment()
        ensemble = storage.create_ensemble(experiment, name="foo", ensemble_size=2)
        ensemble_dir = tmp_path / "ensembles" / str(ensemble.id)
        assert ensemble_dir.exists()

        mask = [True] * 3 + [False] * 16 + [True]
        grid = GridGenerator.create_rectangular((4, 5, 1), (1, 1, 1), actnum=mask)
        grid.save_GRID(f"{experiment.mount_point}/grid.GRID")

        data = np.full_like(mask, np.nan, dtype=np.float32)
        np.place(data, mask, np.array([1.2, 1.1, 4.3, 3.1], dtype=np.float32))
        da = xr.DataArray(
            data.reshape((4, 5, 1)),
            name="values",
            dims=["x", "y", "z"],  # type: ignore
        )
        ds = da.to_dataset()
        ensemble.save_parameters("MY_PARAM", 1, ds)

        saved_file = ensemble_dir / "realization-1" / "MY_PARAM.nc"
        assert saved_file.exists()

        loaded_data = ensemble.load_parameters("MY_PARAM", 1)
        np.testing.assert_array_equal(loaded_data.values, data.reshape((4, 5, 1)))


def test_that_load_responses_throws_exception(tmp_path):
    with open_storage(tmp_path, mode="w") as storage:
        experiment = storage.create_experiment()
        ensemble = storage.create_ensemble(experiment, name="foo", ensemble_size=1)

        with pytest.raises(expected_exception=KeyError):
            ensemble.load_responses("I_DONT_EXIST", (1,))


def test_that_load_parameters_throws_exception(tmp_path):
    with open_storage(tmp_path, mode="w") as storage:
        experiment = storage.create_experiment()
        ensemble = storage.create_ensemble(experiment, name="foo", ensemble_size=1)

        with pytest.raises(expected_exception=KeyError):
            ensemble.load_parameters("I_DONT_EXIST", 1)
