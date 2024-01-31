import math
from pathlib import Path
from textwrap import dedent

import cwrap
import numpy as np
import numpy.testing
import pytest
import xtgeo
from resdata import ResDataType
from resdata.geometry import Surface
from resdata.grid import GridGenerator
from resdata.resfile import ResdataKW

from ert.config import Field, SummaryConfig
from ert.field_utils import Shape
from ert.storage import StorageAccessor, open_storage

from .create_runpath import create_runpath, load_from_forward_model


def write_grid_property(name, grid, filename, file_format, shape, buffer):
    arr = np.ndarray(shape=shape, buffer=buffer, dtype=buffer.dtype)
    prop = xtgeo.GridProperty(
        ncol=shape[0], nrow=shape[1], nlay=shape[2], values=arr, grid=grid, name=name
    )
    prop.to_file(filename, fformat=file_format)
    return arr


@pytest.fixture
def storage(tmp_path):
    with open_storage(tmp_path / "storage", mode="w") as storage:
        yield storage


def test_load_two_parameters_forward_init(storage, tmpdir):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        FIELD PARAM_A PARAMETER param_a.grdecl INIT_FILES:../../../param_a.grdecl FORWARD_INIT:True
        FIELD PARAM_B PARAMETER param_b.GRDECL INIT_FILES:../../../param_b.GRDECL FORWARD_INIT:True
        GRID MY_EGRID.EGRID
        """
        )
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        param_a = write_grid_property(
            "PARAM_A", grid, "param_a.grdecl", "grdecl", (10, 10, 1), np.full((100), 22)
        )
        param_b = write_grid_property(
            "PARAM_B", grid, "param_b.GRDECL", "grdecl", (10, 10, 1), np.full((100), 77)
        )

        ensemble_config, fs = create_runpath(storage, "config.ert", iteration=0)
        assert ensemble_config["PARAM_A"].forward_init
        assert ensemble_config["PARAM_B"].forward_init
        assert not Path("simulations/realization-0/iter-0/param_a.grdecl").exists()
        assert not Path("simulations/realization-0/iter-0/param_b.GRDECL").exists()

        # should not be loaded yet
        with pytest.raises(
            KeyError, match="No dataset 'PARAM_A' in storage for realization 0"
        ):
            _ = fs.load_parameters("PARAM_A", [0])["values"]

        with pytest.raises(
            KeyError, match="No dataset 'PARAM_B' in storage for realization 0"
        ):
            _ = fs.load_parameters("PARAM_B", [0])["values"]

        assert load_from_forward_model("config.ert", fs) == 1

        create_runpath(storage, "config.ert", ensemble=fs, iteration=1)

        prop_a = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-1/param_a.grdecl",
            name="PARAM_A",
            grid=grid,
        )
        numpy.testing.assert_equal(prop_a.values.data, param_a)

        prop_b = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-1/param_b.GRDECL",
            name="PARAM_B",
            grid=grid,
        )
        numpy.testing.assert_equal(prop_b.values.data, param_b)

        # should be loaded now
        loaded_a = fs.load_parameters("PARAM_A", [0])["values"]
        assert (loaded_a.values == 22).all()

        loaded_b = fs.load_parameters("PARAM_B", [0])["values"]
        assert (loaded_b.values == 77).all()


def test_load_two_parameters_roff(storage, tmpdir):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        FIELD PARAM_A PARAMETER param_a.roff INIT_FILES:param_a_%d.roff
        FIELD PARAM_B PARAMETER param_b.roff INIT_FILES:param_b_%d.roff
        GRID MY_EGRID.EGRID
        """
        )
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        param_a = write_grid_property(
            "PARAM_A", grid, "param_a_0.roff", "roff", (10, 10, 1), np.full((100), 22)
        )
        param_b = write_grid_property(
            "PARAM_B", grid, "param_b_0.roff", "roff", (10, 10, 1), np.full((100), 77)
        )

        ensemble_config, fs = create_runpath(storage, "config.ert")
        assert not ensemble_config["PARAM_A"].forward_init
        assert not ensemble_config["PARAM_B"].forward_init

        loaded_a = fs.load_parameters("PARAM_A", [0])["values"]
        assert (loaded_a.values == 22).all()

        loaded_b = fs.load_parameters("PARAM_B", [0])["values"]
        assert (loaded_b.values == 77).all()

        prop_a = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/param_a.roff",
            name="PARAM_A",
        )
        numpy.testing.assert_equal(prop_a.values.data, param_a)

        prop_b = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/param_b.roff",
            name="PARAM_B",
        )
        numpy.testing.assert_equal(prop_b.values.data, param_b)


def test_load_two_parameters(storage, tmpdir):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        FIELD PARAM_A PARAMETER param_a.grdecl INIT_FILES:param_a_%d.grdecl
        FIELD PARAM_B PARAMETER param_b.grdecl INIT_FILES:param_b_%d.grdecl
        GRID MY_EGRID.EGRID
        """
        )
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        param_a = write_grid_property(
            "PARAM_A",
            grid,
            "param_a_0.grdecl",
            "grdecl",
            (10, 10, 1),
            np.full((100), 22),
        )
        param_b = write_grid_property(
            "PARAM_B",
            grid,
            "param_b_0.grdecl",
            "grdecl",
            (10, 10, 1),
            np.full((100), 77),
        )

        ensemble_config, fs = create_runpath(storage, "config.ert")
        assert not ensemble_config["PARAM_A"].forward_init
        assert not ensemble_config["PARAM_B"].forward_init

        loaded_a = fs.load_parameters("PARAM_A", [0])["values"]
        assert (loaded_a.values == 22).all()

        loaded_b = fs.load_parameters("PARAM_B", [0])["values"]
        assert (loaded_b.values == 77).all()

        prop_a = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/param_a.grdecl",
            name="PARAM_A",
            grid=grid,
        )
        numpy.testing.assert_equal(prop_a.values.data, param_a)

        prop_b = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/param_b.grdecl",
            name="PARAM_B",
            grid=grid,
        )
        numpy.testing.assert_equal(prop_b.values.data, param_b)


@pytest.mark.parametrize(
    "min_, max_, field_config",
    [
        (
            0.5,
            None,
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl MIN:0.5",
        ),
        (
            None,
            0.8,
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl MAX:0.8",
        ),
        (
            0.5,
            0.8,
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl MIN:0.5 MAX:0.8",
        ),
    ],
)
def test_min_max(storage, tmpdir, min_: int, max_: int, field_config: str):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        GRID MY_EGRID.EGRID
        """
        )
        config += field_config
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        buffer = np.random.random_sample(100)
        buffer[56] = 0.001
        buffer[34] = 1.001
        write_grid_property(
            "MY_PARAM", grid, "my_param_0.grdecl", "grdecl", (10, 10, 1), buffer
        )

        create_runpath(storage, "config.ert", [True])

        my_prop = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/my_param.grdecl",
            name="MY_PARAM",
            grid=grid,
        )
        if min_ and max_:
            vfunc = np.vectorize(
                lambda x: ((x + 0.0001) >= min_) and ((x - 0.0001) <= max_)
            )
            assert vfunc(my_prop.values.data).all()
        elif min_:
            vfunc = np.vectorize(lambda x: (x + 0.0001) >= min_)
            assert vfunc(my_prop.values.data).all()
        elif max_:
            vfunc = np.vectorize(lambda x: (x - 0.0001) <= max_)
            assert vfunc(my_prop.values.data).all()


def test_transformation(storage, tmpdir):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 2
        FIELD PARAM_A PARAMETER param_a.grdecl INIT_FILES:param_a_%d.grdecl INIT_TRANSFORM:LN OUTPUT_TRANSFORM:EXP
        GRID MY_EGRID.EGRID
        """
        )
        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        param_a_1 = write_grid_property(
            "PARAM_A",
            grid,
            "param_a_0.grdecl",
            "grdecl",
            (10, 10, 1),
            np.full((100), math.exp(2.5), dtype=float),
        )
        param_a_2 = write_grid_property(
            "PARAM_A",
            grid,
            "param_a_1.grdecl",
            "grdecl",
            (10, 10, 1),
            np.full((100), math.exp(1.5), dtype=float),
        )

        _, fs = create_runpath(storage, "config.ert", [True, True])

        # stored internally as 2.5, 1.5
        loaded_a = fs.load_parameters("PARAM_A", [0, 1])["values"]
        assert np.isclose(loaded_a.values[0], 2.5).all()
        assert np.isclose(loaded_a.values[1], 1.5).all()

        prop_a_1 = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-0/iter-0/param_a.grdecl",
            name="PARAM_A",
            grid=grid,
        )
        numpy.testing.assert_almost_equal(prop_a_1.values.data, param_a_1, decimal=5)

        prop_a_2 = xtgeo.gridproperty_from_file(
            pfile="simulations/realization-1/iter-0/param_a.grdecl",
            name="PARAM_A",
            grid=grid,
        )
        numpy.testing.assert_almost_equal(prop_a_2.values.data, param_a_2, decimal=5)


@pytest.mark.parametrize(
    "config_str, expect_forward_init",
    [
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl "
            "INIT_FILES:../../../my_param_0.grdecl FORWARD_INIT:True",
            True,
        ),
        (
            "FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl",
            False,
        ),
    ],
)
def test_forward_init(storage, tmpdir, config_str, expect_forward_init):
    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        GRID MY_EGRID.EGRID
        """
        )
        config += config_str
        with open("config.ert", mode="w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(4, 4, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        expect_param = write_grid_property(
            "MY_PARAM",
            grid,
            "my_param_0.grdecl",
            "grdecl",
            (4, 4, 1),
            np.arange(start=0, stop=4 * 4),
        )

        ensemble_config, fs = create_runpath(storage, "config.ert")
        assert ensemble_config["MY_PARAM"].forward_init is expect_forward_init

        # Assert that the data has been written to runpath
        if expect_forward_init:
            # FORWARD_INIT: True means that ERT waits until the end of the
            # forward model to internalise the data
            assert not Path("simulations/realization-0/iter-0/my_param.grdecl").exists()

            with pytest.raises(
                KeyError, match="No dataset 'MY_PARAM' in storage for realization 0"
            ):
                fs.load_parameters("MY_PARAM", [0])["values"]

            # We try to load the parameters from the forward model, this would fail if
            # forward init was not set correctly
            assert load_from_forward_model("config.ert", fs) == 1

            # Once data has been internalised, ERT will generate the
            # parameter files
            create_runpath(storage, "config.ert", ensemble=fs, iteration=1)
        expected_iter = 1 if expect_forward_init else 0
        prop = xtgeo.gridproperty_from_file(
            pfile=f"simulations/realization-0/iter-{expected_iter}/my_param.grdecl",
            name="MY_PARAM",
            grid=grid,
        )
        numpy.testing.assert_equal(prop.values.data, expect_param)

        if expect_forward_init:
            arr = fs.load_parameters("MY_PARAM", [0])["values"]
            assert len(arr.values.ravel()) == 16


@pytest.mark.parametrize(
    "actnum",
    [
        [True] * 24,
        [True] * 12 + [False] * 12,
        [False] * 12 + [True] * 12,
    ],
)
def test_inactive_grdecl_ecl(tmpdir, storage, actnum):
    fformat = "grdecl"
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        NUM_REALIZATIONS 1
        GRID MY_GRID.GRID
        FIELD MY_PARAM PARAMETER my_param.{fformat} INIT_FILES:my_param_%d.{fformat}
        """
        )
        missing_value = np.nan
        expected_result = [
            float(i) if mask else missing_value for (i, mask) in enumerate(actnum)
        ]

        grid = GridGenerator.create_rectangular((4, 3, 2), (1, 1, 1), actnum=actnum)
        grid.save_GRID("MY_GRID.GRID")

        expect_param = ResdataKW(
            "MY_PARAM", grid.get_global_size(), ResDataType.RD_FLOAT
        )
        for i in range(grid.get_global_size()):
            expect_param[i] = i

        with cwrap.open(f"my_param_0.{fformat}", mode="w") as f:
            grid.write_grdecl(expect_param, f, default_value=missing_value)

        with open("config.ert", mode="w", encoding="utf-8") as fh:
            fh.writelines(config)
        create_runpath(storage, "config.ert")

        # # Assert that the data has been written to runpath
        with cwrap.open(
            f"simulations/realization-0/iter-0/my_param.{fformat}", "rb"
        ) as f:
            actual_param = ResdataKW.read_grdecl(f, "MY_PARAM")

        read_result = list(actual_param.numpy_view())
        numpy.testing.assert_array_equal(read_result, expected_result)


@pytest.mark.parametrize(
    "actnum",
    [
        [True] * 24,
        [True] * 12 + [False] * 12,
        [False] * 12 + [True] * 12,
    ],
)
def test_inactive_grdecl_xtgeo(tmpdir, storage, actnum):
    fformat = "grdecl"
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        NUM_REALIZATIONS 1
        GRID MY_GRID.EGRID
        FIELD MY_PARAM PARAMETER my_param.{fformat} INIT_FILES:my_param_%d.{fformat}
        """
        )
        missing_value = np.nan
        expected_result = [
            float(i) if mask else missing_value for (i, mask) in enumerate(actnum)
        ]

        grid = xtgeo.create_box_grid(dimension=(2, 3, 4))
        mask = grid.get_actnum()
        mask.values = [int(mask) for mask in actnum]
        grid.set_actnum(mask)

        grid.to_file("MY_GRID.EGRID", "egrid")

        prop = xtgeo.GridProperty(
            ncol=grid.ncol,
            nrow=grid.nrow,
            nlay=grid.nlay,
            name="MY_PARAM",
            grid=grid,
            values=np.arange(24),
        )
        prop.to_file(f"my_param_0.{fformat}", fformat=fformat)

        with open("config.ert", mode="w", encoding="utf-8") as fh:
            fh.writelines(config)
        create_runpath(storage, "config.ert")

        read_prop = xtgeo.grid_property.gridproperty_from_file(
            f"simulations/realization-0/iter-0/my_param.{fformat}",
            fformat=fformat,
            grid=grid,
            name="MY_PARAM",
        )
        read_result = list(read_prop.get_npvalues1d(fill_value=missing_value))
        numpy.testing.assert_array_equal(read_result, expected_result)


@pytest.mark.parametrize(
    "actnum",
    [
        [True] * 24,
        [True] * 12 + [False] * 12,
        [False] * 12 + [True] * 12,
    ],
)
def test_inactive_roff_xtgeo(tmpdir, storage, actnum):
    fformat = "roff"
    with tmpdir.as_cwd():
        config = dedent(
            f"""
        NUM_REALIZATIONS 1
        GRID MY_GRID.EGRID
        FIELD MY_PARAM PARAMETER my_param.{fformat} INIT_FILES:my_param_%d.{fformat}
        """
        )
        missing_value = np.nan
        expected_result = [
            float(i) if mask else missing_value for (i, mask) in enumerate(actnum)
        ]

        grid = xtgeo.create_box_grid(dimension=(4, 2, 3))
        mask = grid.get_actnum()
        mask.values = [int(mask) for mask in actnum]
        grid.set_actnum(mask)

        grid.to_file("MY_GRID.EGRID", "egrid")

        prop = xtgeo.GridProperty(
            ncol=grid.ncol,
            nrow=grid.nrow,
            nlay=grid.nlay,
            name="MY_PARAM",
            values=np.arange(24),
        )
        prop.to_file(f"my_param_0.{fformat}", fformat=fformat)

        with open("config.ert", mode="w", encoding="utf-8") as fh:
            fh.writelines(config)
        create_runpath(storage, "config.ert")

        read_prop = xtgeo.grid_property.gridproperty_from_file(
            f"simulations/realization-0/iter-0/my_param.{fformat}", fformat=fformat
        )
        read_result = list(read_prop.get_npvalues1d(fill_value=missing_value))
        numpy.testing.assert_array_equal(read_result, expected_result)


def test_config_node_meta_information(storage, tmpdir):
    """
    Populate nodes GEN_DATA, GEN_KW, FIELD, SURFACE & SUMMARY in configuration
    Verify that properties stored for these nodes are correct
    """

    with tmpdir.as_cwd():
        config = dedent(
            """
        NUM_REALIZATIONS 1
        GRID MY_EGRID.EGRID
        SURFACE TOP     OUTPUT_FILE:surf.irap   INIT_FILES:Surfaces/surf%d.irap   BASE_SURFACE:Surfaces/surf0.irap
        SURFACE BOTTOM  OUTPUT_FILE:surf.wrap   INIT_FILES:surf.wrap   BASE_SURFACE:Surfaces/surf0.wrap  FORWARD_INIT:True

        GEN_DATA ABC  RESULT_FILE:SimulatedABC_%d.txt  INPUT_FORMAT:ASCII   REPORT_STEPS:0
        GEN_DATA DEF  RESULT_FILE:SimulatedDEF_%d.txt  INPUT_FORMAT:ASCII   REPORT_STEPS:0

        GEN_KW KW_NAME  template.txt kw.txt prior.txt INIT_FILES:custom_param%d.txt

        ECLBASE eclipse/model/MY_VERY_OWN_OIL_FIELD-<IENS>
        SUMMARY WOPR:MY_WELL
        SUMMARY WOPR:MY_BASIN

        FIELD MY_PARAM PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl MIN:0.5 MAX:0.8
        FIELD MY_PARAM2 PARAMETER my_param.grdecl INIT_FILES:my_param_%d.grdecl MIN:0.5 MAX:0.8 FORWARD_INIT:True
        """
        )

        expect_surface = Surface(
            nx=1, ny=3, xinc=1, yinc=1, xstart=1, ystart=1, angle=0
        )
        expect_surface.write("Surfaces/surf0.irap")
        expect_surface_top = Surface(
            nx=1, ny=3, xinc=1, yinc=1, xstart=1, ystart=1, angle=0
        )
        expect_surface_top.write("Surfaces/surf0.wrap")

        with open("template.txt", mode="w", encoding="utf-8") as fh:
            fh.writelines("MY_KEYWORD <MY_KEYWORD>")
        with open("prior.txt", mode="w", encoding="utf-8") as fh:
            fh.writelines("MY_KEYWORD NORMAL 0 1")
        with open("custom_param0.txt", mode="w", encoding="utf-8") as fh:
            fh.writelines("MY_KEYWORD 1.31")

        with open("config.ert", "w", encoding="utf-8") as fh:
            fh.writelines(config)

        grid = xtgeo.create_box_grid(dimension=(10, 10, 1))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        buffer = np.random.random_sample(100)
        buffer[56] = 0.001
        buffer[34] = 1.001
        write_grid_property(
            "MY_PARAM", grid, "my_param_0.grdecl", "grdecl", (10, 10, 1), buffer
        )

        ensemble_config, _ = create_runpath(storage, "config.ert", [True])

        # invalid object
        with pytest.raises(KeyError, match="The key:X is not in"):
            _ = ensemble_config["X"]

        # surface
        assert ensemble_config["TOP"].forward_init is False
        assert str(ensemble_config["TOP"].forward_init_file) == "Surfaces/surf%d.irap"
        assert str(ensemble_config["TOP"].output_file) == "surf.irap"

        assert ensemble_config["BOTTOM"].forward_init is True

        # gen_data
        assert ensemble_config["ABC"].input_file == "SimulatedABC_%d.txt"

        # gen_kw
        assert ensemble_config["KW_NAME"].forward_init is False
        assert ensemble_config["KW_NAME"].forward_init_file == str(
            Path().cwd() / "custom_param%d.txt"
        )
        assert ensemble_config["KW_NAME"].output_file == "kw.txt"

        # summary
        assert isinstance(ensemble_config["summary"], SummaryConfig)

        # field
        assert ensemble_config["MY_PARAM2"].forward_init is True

        assert ensemble_config["MY_PARAM"].forward_init is False
        assert ensemble_config["MY_PARAM"].forward_init_file == "my_param_%d.grdecl"
        assert ensemble_config["MY_PARAM"].output_file == Path("my_param.grdecl")


def test_field_parameter_size(tmpdir, storage: StorageAccessor):
    with tmpdir.as_cwd():
        shape = Shape(8, 10, 2)
        grid = xtgeo.create_box_grid(dimension=(shape.nx, shape.ny, shape.nz))
        grid.to_file("MY_EGRID.EGRID", "egrid")

        config = Field.from_config_list(
            "MY_EGRID.EGRID",
            shape,
            [
                "PARAM",
                "PARAMETER",
                "param.GRDECL",
                "INIT_FILES:param_%d.GRDECL",
                "FORWARD_INIT:False",
            ],
        )
        experiment = storage.create_experiment(parameters=[config])
        assert len(config) == len(experiment.parameter_configuration["PARAM"]) == 160
