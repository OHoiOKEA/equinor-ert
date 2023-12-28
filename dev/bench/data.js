window.BENCHMARK_DATA = {
  "lastUpdate": 1703765811577,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050d02afefd02427c0558ead4916c8a527a989f6",
          "message": "Add GitHub workflow for benchmarking",
          "timestamp": "2023-12-12T09:52:58+01:00",
          "tree_id": "9bf332bde5e48fdd3036fec8c8285e856458d6a7",
          "url": "https://github.com/equinor/ert/commit/050d02afefd02427c0558ead4916c8a527a989f6"
        },
        "date": 1702371332232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.182927578442731,
            "unit": "iter/sec",
            "range": "stddev: 0.0012028127090517138",
            "extra": "mean: 161.7356806000089 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "374c4b70cd77f7571377976e5a42c84bd108a9a5",
          "message": "Document adaptive localization",
          "timestamp": "2023-12-12T13:29:24+01:00",
          "tree_id": "f5c0efa981595a52c4401ffa5269e3a8f07f21af",
          "url": "https://github.com/equinor/ert/commit/374c4b70cd77f7571377976e5a42c84bd108a9a5"
        },
        "date": 1702384327684,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.217316824460933,
            "unit": "iter/sec",
            "range": "stddev: 0.0015043269760327653",
            "extra": "mean: 160.841087599988 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lundeberent@gmail.com",
            "name": "Berent Å. S. Lunde",
            "username": "Blunde1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd4b90279ad6ee09c3c196b7f9c6ac096510bfe6",
          "message": "Use new API from iterative_ensemble_smoother (#6634)\n\n* Use v.0.2.0 of iterative_ensemble_smoother\r\n\r\n* Update analysis module to use new API from iterative_ensemble_smoother.\r\nThis affects ES, ES-MDA, IES, adaptive localization, and row-scaling.\r\n\r\nCo-authored-by: Tommy Odland <tommy.odland>",
          "timestamp": "2023-12-13T02:39:30-08:00",
          "tree_id": "afcad5a4a98add12dcbd213083bf7ffd5c445eda",
          "url": "https://github.com/equinor/ert/commit/fd4b90279ad6ee09c3c196b7f9c6ac096510bfe6"
        },
        "date": 1702464143378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.287644257160445,
            "unit": "iter/sec",
            "range": "stddev: 0.024250420786383328",
            "extra": "mean: 159.04207666666062 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "c3d9e34d463d263875b3d21fb1ed0ee5dbf6e9fa",
          "message": "Let the Scheduler ensemble be stoppable from evaluator.py\n\nFor some reason, kill_all_jobs() was not able to kill tasks,\nseemingly the await self.returncode call was blocking. Solved\nby \"busy waiting\" with asyncio.sleep to let the async code accept\nthe cancellation.",
          "timestamp": "2023-12-13T14:10:57+01:00",
          "tree_id": "039b0c5d842c2508095f088c17ff15f7487a08f3",
          "url": "https://github.com/equinor/ert/commit/c3d9e34d463d263875b3d21fb1ed0ee5dbf6e9fa"
        },
        "date": 1702473209899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.49684861587087,
            "unit": "iter/sec",
            "range": "stddev: 0.00208765481828311",
            "extra": "mean: 153.9207790000129 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ZOM@equinor.com",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "committer": {
            "email": "git@wah.pink",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "distinct": true,
          "id": "b2b2e4876731da03aaf5491bf9cbeae3bf689b26",
          "message": "Add \"done_callback\" to every task for debugging\n\nCurrently, tasks that throw exceptions silently stop. This commit makes\nit so that all tasks are created with a done_callback that checks\nwhether they stopped due to an exception.",
          "timestamp": "2023-12-13T14:30:41+01:00",
          "tree_id": "d067a7926baea28dfc141c61331a11642c503636",
          "url": "https://github.com/equinor/ert/commit/b2b2e4876731da03aaf5491bf9cbeae3bf689b26"
        },
        "date": 1702474403771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.639348653516157,
            "unit": "iter/sec",
            "range": "stddev: 0.0013389145468599459",
            "extra": "mean: 150.61718433334667 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "225a1e8ea6ba5d990ccd161674388467423a7607",
          "message": "Let publisher_task exit gracefully when nothing to do",
          "timestamp": "2023-12-13T15:21:22+01:00",
          "tree_id": "338f7bc3f1d49d1a197318e9ba35c548b3633893",
          "url": "https://github.com/equinor/ert/commit/225a1e8ea6ba5d990ccd161674388467423a7607"
        },
        "date": 1702477427173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.224977477486739,
            "unit": "iter/sec",
            "range": "stddev: 0.02677738237736511",
            "extra": "mean: 160.6431515000016 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "f3063c40a32d824013017a8c34d19dde71e401c2",
          "message": "Raise if params not registered are saved",
          "timestamp": "2023-12-14T12:20:32+01:00",
          "tree_id": "6f495fff2fdb0b992ad1b9f74e40809a54d53f41",
          "url": "https://github.com/equinor/ert/commit/f3063c40a32d824013017a8c34d19dde71e401c2"
        },
        "date": 1702553010170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.33603552822918,
            "unit": "iter/sec",
            "range": "stddev: 0.019759675605222914",
            "extra": "mean: 157.82739783333946 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "174f548964fdf6a481587c40afb5c257999e85bb",
          "message": "Only perturb observations once\n\nNo need to perturb per parameter batch",
          "timestamp": "2023-12-14T12:33:25+01:00",
          "tree_id": "cc71b61115538f42ba43bf722b73f047083d9865",
          "url": "https://github.com/equinor/ert/commit/174f548964fdf6a481587c40afb5c257999e85bb"
        },
        "date": 1702553781807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.594515638755547,
            "unit": "iter/sec",
            "range": "stddev: 0.0006281092751751284",
            "extra": "mean: 151.6411598333415 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "JONAK@equinor.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "07818cfda2559facd01b183528efb4b2696c4504",
          "message": "Add fixture for running tests with scheduler and job queue",
          "timestamp": "2023-12-14T12:54:38+01:00",
          "tree_id": "95e3eb8975a991332f5d31790dc6591b73eea3d7",
          "url": "https://github.com/equinor/ert/commit/07818cfda2559facd01b183528efb4b2696c4504"
        },
        "date": 1702555032199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.563279079685446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009047371190215223",
            "extra": "mean: 152.36286433334575 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ZOM@equinor.com",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "committer": {
            "email": "git@wah.pink",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "distinct": true,
          "id": "65c62c60284a9e9e18c5790e6782f3d7aaac3117",
          "message": "Add `background_tasks` for canceling tasks\n\nThis contextmanager makes it simpler to ensure that infinitely-running\ntasks get canceled when appropriate, even when an exception occurs.",
          "timestamp": "2023-12-14T13:33:36+01:00",
          "tree_id": "e9e461dc7e37f261951569b359ed35d43b32f0f9",
          "url": "https://github.com/equinor/ert/commit/65c62c60284a9e9e18c5790e6782f3d7aaac3117"
        },
        "date": 1702557370024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.607344940034548,
            "unit": "iter/sec",
            "range": "stddev: 0.001156330428637273",
            "extra": "mean: 151.34672233333882 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ZOM@equinor.com",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "committer": {
            "email": "git@wah.pink",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "distinct": true,
          "id": "f284e11d80f133602b0882dccae06a7a7a4c9c0d",
          "message": "Change BaseRunModel to throw an exception with stacktrace\n\nPreviously, if an exception occurred during ensemble evaluation, ERT\nwould throw an exception but with no stack trace. Instead, we save the\nexception instead of just the message.",
          "timestamp": "2023-12-14T14:02:35+01:00",
          "tree_id": "d37f93ae7c9fd82c60125ba54db85905febf77f1",
          "url": "https://github.com/equinor/ert/commit/f284e11d80f133602b0882dccae06a7a7a4c9c0d"
        },
        "date": 1702559127475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.600243292228393,
            "unit": "iter/sec",
            "range": "stddev: 0.0008775778164274408",
            "extra": "mean: 151.5095664999914 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "frodeaarstad@gmail.com",
            "name": "Frode Aarstad",
            "username": "frode-aarstad"
          },
          "committer": {
            "email": "frodeaarstad@gmail.com",
            "name": "Frode Aarstad",
            "username": "frode-aarstad"
          },
          "distinct": true,
          "id": "25bd4392f15f6f7710cdd3fdf1f9f77574a53497",
          "message": "Fix bug in run analysis tool",
          "timestamp": "2023-12-15T09:38:17+01:00",
          "tree_id": "6f74c6795cb94156b16ce2c070e537517647ab40",
          "url": "https://github.com/equinor/ert/commit/25bd4392f15f6f7710cdd3fdf1f9f77574a53497"
        },
        "date": 1702629660658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.671598215701105,
            "unit": "iter/sec",
            "range": "stddev: 0.0010295834053440922",
            "extra": "mean: 149.88912216664593 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parulek@gmail.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "distinct": true,
          "id": "38348cd7749ec4d5a4bd2a4ed161c5c720c9e1a6",
          "message": "Add basic retry loop to account for max_submit functionality\n\nUse while retry to iterate from running to waiting states. It includes a\nsimple test to check if job has started several times. Max_submit is a function\nparameter of job.__call__ that is passed on from scheduler.\n\nAdditionally, function driver.finish will implement the basic clean up\nfunctionally. For the local driver it makes sure that all tasks have\nbeen awaited correctly.",
          "timestamp": "2023-12-15T12:48:33+01:00",
          "tree_id": "625db6daa516d7b31360308612619a8aa5f72808",
          "url": "https://github.com/equinor/ert/commit/38348cd7749ec4d5a4bd2a4ed161c5c720c9e1a6"
        },
        "date": 1702641060518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.601358059765836,
            "unit": "iter/sec",
            "range": "stddev: 0.000626513292410273",
            "extra": "mean: 151.48398116666803 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve.s.kristiansen@webstep.no",
            "name": "Yngve S. Kristiansen"
          },
          "committer": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "distinct": true,
          "id": "e4230ffb017ba286e262f34e289558044daeaeba",
          "message": "Build wheels for ARM arch for python>=3.10",
          "timestamp": "2023-12-15T14:44:32+01:00",
          "tree_id": "1ad34cd882ad9aefadd6f02240d3a440c0147205",
          "url": "https://github.com/equinor/ert/commit/e4230ffb017ba286e262f34e289558044daeaeba"
        },
        "date": 1702648019776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.6160495577127785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003148438163942655",
            "extra": "mean: 151.1475981666782 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "e867409e33ece8937a81eb5ca8f0209ab4faee98",
          "message": "Fix off-by-one error in split_by_batchsize\n\nIf the batch size is equal to the number of parameters,\nwe want _split_by_batchsize to return a single batch and\nnot two.\n\nUpdate batch_size calculation to make sure the new\n_split_by_batchsize works when the number of parameters\nis less than the hard-coded batch_size of 1000.",
          "timestamp": "2023-12-18T09:46:25+01:00",
          "tree_id": "a42efadd18b8564f728b3dc3fabcd1945febc9ba",
          "url": "https://github.com/equinor/ert/commit/e867409e33ece8937a81eb5ca8f0209ab4faee98"
        },
        "date": 1702889370000,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.561175137785723,
            "unit": "iter/sec",
            "range": "stddev: 0.0033144453040387543",
            "extra": "mean: 152.41172183333637 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ZOM@equinor.com",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "committer": {
            "email": "git@wah.pink",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "distinct": true,
          "id": "af717e21b46234306117e9e8693e81b3a84cf60c",
          "message": "Implement MockDriver\n\nLocalDriver differs from the HPC drivers in that it is made of three\nparts that are run in sequence. `init` the subprocess, `wait` for the\nprocess to complete and `kill` when the user wants to cancel. Between\nthe three parts the driver needs to send `JobEvent`s to the `Scheduler`.\n\nThis commit implements a `MockDriver`, where the user can optionally\nspecify a simplified version of each of `init`, `wait` or `kill`,\ndepending on what they wish to do.",
          "timestamp": "2023-12-18T10:43:09+01:00",
          "tree_id": "46cb1e2df4a761b6424f0d3fad9d0d7e6335faca",
          "url": "https://github.com/equinor/ert/commit/af717e21b46234306117e9e8693e81b3a84cf60c"
        },
        "date": 1702892740830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.790263749088456,
            "unit": "iter/sec",
            "range": "stddev: 0.001985247527485196",
            "extra": "mean: 147.26968449999353 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "6e051611e085ed9e64573264faab06a2af3e9ab0",
          "message": "Test unit_tests/cli with queue and scheduler",
          "timestamp": "2023-12-18T15:37:35+01:00",
          "tree_id": "207d2b5017ceebaf5cb1420ec581c27ab6120d28",
          "url": "https://github.com/equinor/ert/commit/6e051611e085ed9e64573264faab06a2af3e9ab0"
        },
        "date": 1702910406165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.72271180103249,
            "unit": "iter/sec",
            "range": "stddev: 0.0025389817122266865",
            "extra": "mean: 148.74949716666683 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "47e0d096e43b87d0adc2313c8cd0bc70c27b83f6",
          "message": "Raise error when loading param via response api",
          "timestamp": "2023-12-19T08:39:17+01:00",
          "tree_id": "6f021b97fc97ae5f1e5f82b2eef041d84990fe57",
          "url": "https://github.com/equinor/ert/commit/47e0d096e43b87d0adc2313c8cd0bc70c27b83f6"
        },
        "date": 1702971701627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.800498119712296,
            "unit": "iter/sec",
            "range": "stddev: 0.002500172696027081",
            "extra": "mean: 147.0480518333422 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eide.oyvind87@gmail.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "committer": {
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "d3b6ae4540c8a6fa12acfbe5cd584428510373a7",
          "message": "Remove global enkf_main",
          "timestamp": "2023-12-19T09:35:07+01:00",
          "tree_id": "58e1ec285850ec6b528340f396858a285bcf3d72",
          "url": "https://github.com/equinor/ert/commit/d3b6ae4540c8a6fa12acfbe5cd584428510373a7"
        },
        "date": 1702975076579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.284767443480779,
            "unit": "iter/sec",
            "range": "stddev: 0.029019840798108605",
            "extra": "mean: 159.11487719999968 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "e128f9b88592e81382d167c07e06eba4a1f4dd6b",
          "message": "Implement adaptive batch size",
          "timestamp": "2023-12-19T09:36:05+01:00",
          "tree_id": "fea306c3770ea4837e96d322fb582729ccc322a4",
          "url": "https://github.com/equinor/ert/commit/e128f9b88592e81382d167c07e06eba4a1f4dd6b"
        },
        "date": 1702975133527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.731935102244441,
            "unit": "iter/sec",
            "range": "stddev: 0.002567391926066828",
            "extra": "mean: 148.54569820000165 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "f30d83aac913093238b4e1bcc6bf7e3e6c3efa37",
          "message": "Make sure some, but not all parameters were updated.",
          "timestamp": "2023-12-19T12:03:29+01:00",
          "tree_id": "070107ec6bf2e42c40d8393258187b0322fd7d60",
          "url": "https://github.com/equinor/ert/commit/f30d83aac913093238b4e1bcc6bf7e3e6c3efa37"
        },
        "date": 1702983959713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.713222741062488,
            "unit": "iter/sec",
            "range": "stddev: 0.0037110105627922952",
            "extra": "mean: 148.95975279999902 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eide.oyvind87@gmail.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "committer": {
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "distinct": true,
          "id": "6e5930e4e97867ab4935ca489151d4962ca641c1",
          "message": "Upgrade publish job",
          "timestamp": "2023-12-19T13:44:51+01:00",
          "tree_id": "dc4d05f2b2070b407fe9e42332f9bfa9bc60119e",
          "url": "https://github.com/equinor/ert/commit/6e5930e4e97867ab4935ca489151d4962ca641c1"
        },
        "date": 1702990054596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.798538572007576,
            "unit": "iter/sec",
            "range": "stddev: 0.0022856371662869756",
            "extra": "mean: 147.09043560000055 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "levje@equinor.com",
            "name": "larsevj",
            "username": "larsevj"
          },
          "committer": {
            "email": "60844986+larsevj@users.noreply.github.com",
            "name": "Lars Evje",
            "username": "larsevj"
          },
          "distinct": true,
          "id": "eb8b6f21cdcc92430ffebf71b22fbd1080c083a2",
          "message": "Rename deprecated keywords for pydantic",
          "timestamp": "2023-12-19T14:51:11+01:00",
          "tree_id": "b00f2d2b2a1504253ceb4cc29a8bd13d3bb4d8e7",
          "url": "https://github.com/equinor/ert/commit/eb8b6f21cdcc92430ffebf71b22fbd1080c083a2"
        },
        "date": 1702994017245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.729442459070285,
            "unit": "iter/sec",
            "range": "stddev: 0.00020069095082197552",
            "extra": "mean: 148.60072080000464 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kvashchuka@users.noreply.github.com",
            "name": "Anna Kvashchuk",
            "username": "kvashchuka"
          },
          "committer": {
            "email": "kvashchuka@users.noreply.github.com",
            "name": "Anna Kvashchuk",
            "username": "kvashchuka"
          },
          "distinct": true,
          "id": "dac9cfa7f12b8d53006ca594335485bce8959470",
          "message": "Create SECURITY.md",
          "timestamp": "2023-12-20T12:14:21+01:00",
          "tree_id": "a262bf77b869c89c70e0502f86475934dcfacb94",
          "url": "https://github.com/equinor/ert/commit/dac9cfa7f12b8d53006ca594335485bce8959470"
        },
        "date": 1703071008951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.809088957692596,
            "unit": "iter/sec",
            "range": "stddev: 0.0024842306974140788",
            "extra": "mean: 146.8625254000017 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kvashchuk.anna@gmail.com",
            "name": "Anna Kvashchuk",
            "username": "kvashchuka"
          },
          "committer": {
            "email": "kvashchuka@users.noreply.github.com",
            "name": "Anna Kvashchuk",
            "username": "kvashchuka"
          },
          "distinct": true,
          "id": "a84b86a5c57429d273f1566a9f7800226ae7f000",
          "message": "Change load_parameters function to return only Dataset",
          "timestamp": "2023-12-20T12:47:18+01:00",
          "tree_id": "3d338e00fd35306db439d1cd1d48db4df5600479",
          "url": "https://github.com/equinor/ert/commit/a84b86a5c57429d273f1566a9f7800226ae7f000"
        },
        "date": 1703072991404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.729887797951373,
            "unit": "iter/sec",
            "range": "stddev: 0.0019277257841359646",
            "extra": "mean: 148.59088739999606 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "1221607e659505f8ad5a8e07713c20d91797c445",
          "message": "Remove recalculation of mean and std in misfit\n\nThis has already been calculated",
          "timestamp": "2023-12-20T13:24:00+01:00",
          "tree_id": "e5b6ffb7d2a1328fbc1cc8dd395d8853086f6bff",
          "url": "https://github.com/equinor/ert/commit/1221607e659505f8ad5a8e07713c20d91797c445"
        },
        "date": 1703075207154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.760872072177851,
            "unit": "iter/sec",
            "range": "stddev: 0.0019873871285374474",
            "extra": "mean: 147.90991300000655 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87da99a10f09bc3780b1b512e46bafff4da0c23d",
          "message": "Add scheduler unit test for propagation of dispatch information to jobs file (#6807)\n\nAdd scheduler unit test for propagation of dispatch info to jobs file",
          "timestamp": "2023-12-20T14:48:29+01:00",
          "tree_id": "e936d67ec7bb861344147e354dfd61d258fa26ea",
          "url": "https://github.com/equinor/ert/commit/87da99a10f09bc3780b1b512e46bafff4da0c23d"
        },
        "date": 1703080302508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.731549260690385,
            "unit": "iter/sec",
            "range": "stddev: 0.00175672996616134",
            "extra": "mean: 148.55421260000412 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "5d32855a9ea2583879062fadd8e0a8449ecede00",
          "message": "Mark status tests for testing with Scheduler\n\nThese are currently skipped",
          "timestamp": "2023-12-20T15:01:08+01:00",
          "tree_id": "7af992558158dd2d12bd63a744bdf5c3b7baeb0a",
          "url": "https://github.com/equinor/ert/commit/5d32855a9ea2583879062fadd8e0a8449ecede00"
        },
        "date": 1703081049278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 5.523329346807727,
            "unit": "iter/sec",
            "range": "stddev: 0.07822314191719226",
            "extra": "mean: 181.05022120000172 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a810eb0f8715e182d4e1b1dc1636356b97023711",
          "message": "Have integration tests run with both scheduler and job queue (#6787)\n\n* Move integration tests to separate directory\r\n\r\nThis commit moves all integration tests (the ones marked with pytest.mark.integration_tests atleast) to a new directory tests/integration_tests.\r\n\r\n* Have integration tests run with both queue and scheduler\r\n\r\nThis commits adds the pytest.mark.scheduler mark and scheduler fixture to some of the integration tests, so that they will be ran with both the scheduler and job queue.\r\n\r\n* Move pytest snapshots down one level",
          "timestamp": "2023-12-20T14:20:16Z",
          "tree_id": "c953b06e68ed328b2f2f2319feb5c07256162be1",
          "url": "https://github.com/equinor/ert/commit/a810eb0f8715e182d4e1b1dc1636356b97023711"
        },
        "date": 1703082179075,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.755590512084656,
            "unit": "iter/sec",
            "range": "stddev: 0.0022812211443854944",
            "extra": "mean: 148.0255498333065 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "f874da8f9e5cfef5780803d2d2be1dd33e31d7e9",
          "message": "Rewrite doc for MAX_RUNNING\n\nThere is no need to expose any implementation detail on how\nert achieves no limit on submissions.",
          "timestamp": "2023-12-21T08:53:59+01:00",
          "tree_id": "3b6f0f48f23eaf1d3b2fe9763317c6fea40d821b",
          "url": "https://github.com/equinor/ert/commit/f874da8f9e5cfef5780803d2d2be1dd33e31d7e9"
        },
        "date": 1703145409749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.298495978366696,
            "unit": "iter/sec",
            "range": "stddev: 0.02478852850824606",
            "extra": "mean: 158.7680619999882 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "86a702b4ca626295b5f56eebd49ff685326fcf09",
          "message": "Remove try-except around loading responses\n\nFunction should raise if errors are encountered",
          "timestamp": "2023-12-21T10:22:05+01:00",
          "tree_id": "6d6929adede278a591cb8ab81dfbc679fa9f06be",
          "url": "https://github.com/equinor/ert/commit/86a702b4ca626295b5f56eebd49ff685326fcf09"
        },
        "date": 1703150674435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.339217031133024,
            "unit": "iter/sec",
            "range": "stddev: 0.01950900357310038",
            "extra": "mean: 157.7481880000041 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lundeberent@gmail.com",
            "name": "Berent Å. S. Lunde",
            "username": "Blunde1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1678f9292bdc60ae52e74daec11bad49e71737a8",
          "message": "Bug minus one sqrt (#6839)\n\n* Minus one in sqrt in SIES\r\n\r\n* Update snapshot\r\n\r\n---------\r\n\r\nCo-authored-by: tommyod <tommy.odland>",
          "timestamp": "2023-12-21T12:05:15+01:00",
          "tree_id": "3f17156792a7d87bd00aa8ca0f371a26f958f66b",
          "url": "https://github.com/equinor/ert/commit/1678f9292bdc60ae52e74daec11bad49e71737a8"
        },
        "date": 1703156864032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.166164766033405,
            "unit": "iter/sec",
            "range": "stddev: 0.03216053629670604",
            "extra": "mean: 162.1753614999951 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "00394784009219d680505ac71af71c71374b0e76",
          "message": "Move check for obs in to loading function\n\nThis way the test is done both in ES and IES",
          "timestamp": "2023-12-21T13:27:20+01:00",
          "tree_id": "0a4b48556d68692faf7fa60121f2402213880829",
          "url": "https://github.com/equinor/ert/commit/00394784009219d680505ac71af71c71374b0e76"
        },
        "date": 1703161790741,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.691295727764728,
            "unit": "iter/sec",
            "range": "stddev: 0.006596687997785363",
            "extra": "mean: 149.44788583332524 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ZOM@equinor.com",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "committer": {
            "email": "git@wah.pink",
            "name": "Zohar Malamant",
            "username": "pinkwah"
          },
          "distinct": true,
          "id": "4a3723b8d777dca674046d46f5becfa9faedb11e",
          "message": "Refactor JobQueue and Scheduler\n\nInitialisation of `JobQueue` and `Scheduler` is moved to where they are\nused. This means that the current event loop is the same during\ninitialisation and use.\n\nChanges:\n- `add_realization`: We can simply pass realisations as a list to the\n  given executor.\n- `set_ee_info`: We can simply pass this information to the queues.\n- `CONCURRENT_INITIALIZATION`: No longer passed to the queue as it's a\n  constant.\n- `timeout_callback`: Now passed to the queue, rather than with each realisation.\n- `queue_evaluators`: Concept removed. Only used for\n  \"min_required_realizations\", which we can call directly.",
          "timestamp": "2023-12-21T13:37:20+01:00",
          "tree_id": "d80fad27f20458a0c96be559b450def16a1bb852",
          "url": "https://github.com/equinor/ert/commit/4a3723b8d777dca674046d46f5becfa9faedb11e"
        },
        "date": 1703162390466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.772759750778998,
            "unit": "iter/sec",
            "range": "stddev: 0.0024027769421100854",
            "extra": "mean: 147.65029866665222 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "f4312e2874e1880ddeda4450fbd3f01a93323672",
          "message": "Remove global scaling from IES",
          "timestamp": "2023-12-22T11:48:27+01:00",
          "tree_id": "a39fa82f5e6ace948f8aa554ed6aecb0613f218f",
          "url": "https://github.com/equinor/ert/commit/f4312e2874e1880ddeda4450fbd3f01a93323672"
        },
        "date": 1703242262021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.768170416423508,
            "unit": "iter/sec",
            "range": "stddev: 0.005786941386529705",
            "extra": "mean: 147.75041679999958 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "0140cccd28484152be6bf2407389407d5aafe089",
          "message": "Rename ensemble_evaluator identifiers, FM_JOB to FORWARD_MODEL",
          "timestamp": "2023-12-22T12:30:19+01:00",
          "tree_id": "1518b0ff577c1ab91c770b107b03b9f02343490e",
          "url": "https://github.com/equinor/ert/commit/0140cccd28484152be6bf2407389407d5aafe089"
        },
        "date": 1703244793981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.739303163709242,
            "unit": "iter/sec",
            "range": "stddev: 0.0028755486564522644",
            "extra": "mean: 148.38329359998852 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "e9ff2393a85936ac47f2e4bde63b4a11f5256595",
          "message": "Test ensemble_evaluator with new scheduler\n\nThis highlights a behavioural change in the new LocalDriver, it will\nnot send the same events as the legacy local driver, see\ntest_async_queue_execution.py::test_happy_path\n\nThe new scheduler will not catch bare exceptions for now, and\nthus the test for that situation is only applied for the legacy\nJobQueue.",
          "timestamp": "2023-12-22T14:38:59+01:00",
          "tree_id": "4973c78098382eb9d2f02bf783375a8f047fdb23",
          "url": "https://github.com/equinor/ert/commit/e9ff2393a85936ac47f2e4bde63b4a11f5256595"
        },
        "date": 1703252486698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.804928764720235,
            "unit": "iter/sec",
            "range": "stddev: 0.002665666100044726",
            "extra": "mean: 146.95230979998541 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "cf03ba623cf8fc74a75a09a00055c3c616ddddc0",
          "message": "Support max_runtime in Scheduler",
          "timestamp": "2023-12-22T14:59:14+01:00",
          "tree_id": "965ae804e75ea8dd4ba58bf0583d7325c8eab4c5",
          "url": "https://github.com/equinor/ert/commit/cf03ba623cf8fc74a75a09a00055c3c616ddddc0"
        },
        "date": 1703253716943,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 5.639008565349448,
            "unit": "iter/sec",
            "range": "stddev: 0.06379149479435567",
            "extra": "mean: 177.3361377999663 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "508fa719c9340705633b92a1abc0b93c4026ccee",
          "message": "New design for the \"Some problems detected\" window (#6835)",
          "timestamp": "2023-12-23T05:55:59+01:00",
          "tree_id": "1d4d47885f1cb0370a73ec11f9e583a6fc3a8859",
          "url": "https://github.com/equinor/ert/commit/508fa719c9340705633b92a1abc0b93c4026ccee"
        },
        "date": 1703307555880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.059166678020232,
            "unit": "iter/sec",
            "range": "stddev: 0.036119844612481335",
            "extra": "mean: 165.03919649999452 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "c3791529383790795c6b29477b80f0c20f34222e",
          "message": "Avoid wrong log statements about Schedulers intention\n\nShould not say it will resubmit if max_submit=1\n\nAlso tune the error message for improved readability",
          "timestamp": "2023-12-27T14:10:04+01:00",
          "tree_id": "de943bee8acaa454a794b1788021f081d33079a1",
          "url": "https://github.com/equinor/ert/commit/c3791529383790795c6b29477b80f0c20f34222e"
        },
        "date": 1703682761889,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.71339764302766,
            "unit": "iter/sec",
            "range": "stddev: 0.002992636073222105",
            "extra": "mean: 148.95587200001046 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "havb@equinor.com",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "211888d7bdfc1e600db1126d9fa3ad186330a269",
          "message": "Test es_update with Scheduler",
          "timestamp": "2023-12-28T10:57:32+01:00",
          "tree_id": "43b82ab4a593e8ca5ee0017f4fbab53d97515467",
          "url": "https://github.com/equinor/ert/commit/211888d7bdfc1e600db1126d9fa3ad186330a269"
        },
        "date": 1703757605228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.838372305130332,
            "unit": "iter/sec",
            "range": "stddev: 0.0025260381453688723",
            "extra": "mean: 146.23362920000318 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "committer": {
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "45f42a28e050a4699ef5e55ee79e78b65b7e196d",
          "message": "Update adloc docs\n\nState the adloc will be run for every iteration",
          "timestamp": "2023-12-28T13:13:20+01:00",
          "tree_id": "ccd465a974392489bf4fb354e915df3e9fb34b87",
          "url": "https://github.com/equinor/ert/commit/45f42a28e050a4699ef5e55ee79e78b65b7e196d"
        },
        "date": 1703765811178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.700486344080509,
            "unit": "iter/sec",
            "range": "stddev: 0.0024999093950025587",
            "extra": "mean: 149.24289799999997 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}