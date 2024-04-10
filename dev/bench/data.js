window.BENCHMARK_DATA = {
  "lastUpdate": 1712732478542,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "b21fab1a816b7bc64d88006e122c3d5f443e7a0a",
          "message": "Use ruff also as formatter",
          "timestamp": "2024-04-05T09:18:35+02:00",
          "tree_id": "ee36f6bd5fd9f23e0d4544ca8170ca4cf412fc8e",
          "url": "https://github.com/equinor/ert/commit/b21fab1a816b7bc64d88006e122c3d5f443e7a0a"
        },
        "date": 1712301708767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19301884770597844,
            "unit": "iter/sec",
            "range": "stddev: 0.03130834653736943",
            "extra": "mean: 5.18084120740001 sec\nrounds: 5"
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
          "id": "a1f9feb7d4783d510c28a692417dfa13ac191bfe",
          "message": "Add back webviz-ert kwargs",
          "timestamp": "2024-04-05T09:49:29+02:00",
          "tree_id": "d3dd15286026e60dae970238fb89576cae91471d",
          "url": "https://github.com/equinor/ert/commit/a1f9feb7d4783d510c28a692417dfa13ac191bfe"
        },
        "date": 1712303548443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1907729062416019,
            "unit": "iter/sec",
            "range": "stddev: 0.031495152516441416",
            "extra": "mean: 5.241834491599991 sec\nrounds: 5"
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
          "id": "e2bd7c1e7974a7a6f51400b4cfaa864dbbac04dd",
          "message": "Add new implementation of get_num_cpu\n\n\r\n\r\nCo-authored-by: Øyvind Eide <44577479+oyvindeide@users.noreply.github.com>",
          "timestamp": "2024-04-05T13:05:51+02:00",
          "tree_id": "de2a92fb024a30363284289411ed442b94a43e6a",
          "url": "https://github.com/equinor/ert/commit/e2bd7c1e7974a7a6f51400b4cfaa864dbbac04dd"
        },
        "date": 1712315354250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19131015908676907,
            "unit": "iter/sec",
            "range": "stddev: 0.039822087707115095",
            "extra": "mean: 5.227113943000006 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "b0905379911924f0a08d96890ea50b9d47057439",
          "message": "Remove deprecated function libres_facade.grid",
          "timestamp": "2024-04-05T13:06:19+02:00",
          "tree_id": "5116c5e6335fc272cc20682594f36975438f6a25",
          "url": "https://github.com/equinor/ert/commit/b0905379911924f0a08d96890ea50b9d47057439"
        },
        "date": 1712315371674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18690918315604518,
            "unit": "iter/sec",
            "range": "stddev: 0.027658425508035527",
            "extra": "mean: 5.350191912000002 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "9c51f1c14a34fc301fac86b6916baf74e04f1454",
          "message": "Ensure no underflow in parameter_example_test",
          "timestamp": "2024-04-05T15:31:32+02:00",
          "tree_id": "9f625cce77f18cd62c2c8836ee3fe827504f701a",
          "url": "https://github.com/equinor/ert/commit/9c51f1c14a34fc301fac86b6916baf74e04f1454"
        },
        "date": 1712324099940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18562410902464907,
            "unit": "iter/sec",
            "range": "stddev: 0.06566112961142546",
            "extra": "mean: 5.387231245199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.sava42@gmail.com",
            "name": "DanSava",
            "username": "DanSava"
          },
          "committer": {
            "email": "dan.sava42@gmail.com",
            "name": "Dan Sava",
            "username": "DanSava"
          },
          "distinct": true,
          "id": "07c2fe041339bb080623cc30b090395ff7c1ca2f",
          "message": "Display possible error when removing existing runpath\n\nAllow user to continue without deleting the runpath.",
          "timestamp": "2024-04-08T09:16:04+03:00",
          "tree_id": "241cfa428438e9dbb229b89cdcf13915652b4ffd",
          "url": "https://github.com/equinor/ert/commit/07c2fe041339bb080623cc30b090395ff7c1ca2f"
        },
        "date": 1712557180065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18669837689210217,
            "unit": "iter/sec",
            "range": "stddev: 0.06300278666258832",
            "extra": "mean: 5.356232960600005 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "12d4d3df0bb97398497a33ff8fc20a54dedf86de",
          "message": "Fix two overflow issues in parameter_example_test",
          "timestamp": "2024-04-08T10:30:50+02:00",
          "tree_id": "9c4dca2aeff9e8589aeff5f47cadb03b2ea8b558",
          "url": "https://github.com/equinor/ert/commit/12d4d3df0bb97398497a33ff8fc20a54dedf86de"
        },
        "date": 1712565249695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1900242676902475,
            "unit": "iter/sec",
            "range": "stddev: 0.02180521324240851",
            "extra": "mean: 5.262485745399994 sec\nrounds: 5"
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
          "id": "4ec192af30000cf49ba253f81c7dddd2c7091dc2",
          "message": "Add SIGKILL to possible returncodes from kill\n\nObserved on PBS",
          "timestamp": "2024-04-08T12:18:55+02:00",
          "tree_id": "e7caf9add10b94476ea336ac8411f90bb097eecb",
          "url": "https://github.com/equinor/ert/commit/4ec192af30000cf49ba253f81c7dddd2c7091dc2"
        },
        "date": 1712571720709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18545104782107888,
            "unit": "iter/sec",
            "range": "stddev: 0.09158622431868414",
            "extra": "mean: 5.392258559599992 sec\nrounds: 5"
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
          "id": "70122c96c38d5ac4db324de14ca3f23c9ec9dd05",
          "message": "Solve race condition in lsf_driver for job_ids\n\nIt is possible for self._jobs to be changed throughout the poll() function,\nwe must be sure to compare to the original set before we employ the\nbhist fallback",
          "timestamp": "2024-04-08T12:27:29+02:00",
          "tree_id": "9d4d4f4d5b689cf258d969b92e076dd9a75ff9b0",
          "url": "https://github.com/equinor/ert/commit/70122c96c38d5ac4db324de14ca3f23c9ec9dd05"
        },
        "date": 1712572248520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18303727071634365,
            "unit": "iter/sec",
            "range": "stddev: 0.04406758239402076",
            "extra": "mean: 5.463368176800008 sec\nrounds: 5"
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
          "id": "7145a2924ebd5b9d7f051f42880f54cbfc1f4229",
          "message": "Test that pbs driver ignores qstat flakiness (#7414)\n\n* Move QSTAT_HEADER stub constants to tests/conftest.py\r\n\r\n* Add tests for PBSDriver ignoring qstat flakiness\r\n\r\nThis commit adds tests that verifies that the OpenPBS driver ignores\r\nqstat flakiness related to \"pbs_iff\" and \"qstat: Invalid credential\"\r\n\r\n* Have qstat mocked binary use wide option\r\n\r\n* Have OpenPBS tests use common QSTAT fixture",
          "timestamp": "2024-04-08T13:24:25+02:00",
          "tree_id": "cb0358e9d7adb820f2df982e88007900c0770155",
          "url": "https://github.com/equinor/ert/commit/7145a2924ebd5b9d7f051f42880f54cbfc1f4229"
        },
        "date": 1712575649617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19472366354448356,
            "unit": "iter/sec",
            "range": "stddev: 0.03382066653874906",
            "extra": "mean: 5.13548267220001 sec\nrounds: 5"
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
          "id": "3fdff884848078484828219bf7623f77294515a2",
          "message": "Split release notes in highlighted changes and change log\n\nWe have previously written highlighted changes and change log per\nrelease. This means each version is split in two, but it will\nbe easier to read the highlighted section, which most users are\ninterested in.",
          "timestamp": "2024-04-08T14:24:33+02:00",
          "tree_id": "47660988316bc0e7e9dfc677df61d8573027ccb8",
          "url": "https://github.com/equinor/ert/commit/3fdff884848078484828219bf7623f77294515a2"
        },
        "date": 1712579283539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19229310940473818,
            "unit": "iter/sec",
            "range": "stddev: 0.03457452005655197",
            "extra": "mean: 5.200394351599994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jparu@equinor.com",
            "name": "xjules",
            "username": "xjules"
          },
          "committer": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "distinct": true,
          "id": "4ababea024d3d136039bf627212b8433c726be54",
          "message": "Eestablish connection and empty the event queue before cancelling tasks\n\n- Add _publisher_done event and CLOSE_PUBLISHER_SENTINEL to make sure that the connection was established and all events were sent before the cancellation happens.\n- Supress CancelledError when task gets cancelled for long running jobs\n- Ignore cancellation in job task\n- Add test for scheduler publishings its events to a websocket with\npublisher_done set Event.\n\nCo-authored-by: Håvard Berland <havb@equinor.com>",
          "timestamp": "2024-04-08T15:27:54+02:00",
          "tree_id": "a4ba1a07ed6ccf264237aa2e10370f8086b4196c",
          "url": "https://github.com/equinor/ert/commit/4ababea024d3d136039bf627212b8433c726be54"
        },
        "date": 1712583067611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19324840004002852,
            "unit": "iter/sec",
            "range": "stddev: 0.022966654203154063",
            "extra": "mean: 5.17468708560001 sec\nrounds: 5"
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
          "id": "b4eedfc04f3135826e4aad4b140f31821fb1f9d4",
          "message": "Increase timeout for testing of faulty bjobs\n\nThe existing timeout at 0.2 is too small on MacOS when\npytest is run concurrently with -n auto",
          "timestamp": "2024-04-08T15:30:02+02:00",
          "tree_id": "2332b3d27fce03ef4eee7e09cb43ed0350ef4f5f",
          "url": "https://github.com/equinor/ert/commit/b4eedfc04f3135826e4aad4b140f31821fb1f9d4"
        },
        "date": 1712583182965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18881360459517066,
            "unit": "iter/sec",
            "range": "stddev: 0.04170398877195173",
            "extra": "mean: 5.296228532600014 sec\nrounds: 5"
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
          "id": "85fd3cd47501fd888e8448b279f164e3e7c4794e",
          "message": "Move ignore check one level higher",
          "timestamp": "2024-04-08T16:01:24+02:00",
          "tree_id": "8fc3d341ec9f2f894c3e7c403eac94b8bd6e0e29",
          "url": "https://github.com/equinor/ert/commit/85fd3cd47501fd888e8448b279f164e3e7c4794e"
        },
        "date": 1712585071854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1863550368247847,
            "unit": "iter/sec",
            "range": "stddev: 0.02986028082253115",
            "extra": "mean: 5.3661012712 sec\nrounds: 5"
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
          "id": "aea1d7cb0ac8fe07102f910c756924174ab41904",
          "message": "Remove unused endpoint",
          "timestamp": "2024-04-08T16:34:58+02:00",
          "tree_id": "b5e9967ff8a960f8ec793ca6dfc01e7bbb7503ed",
          "url": "https://github.com/equinor/ert/commit/aea1d7cb0ac8fe07102f910c756924174ab41904"
        },
        "date": 1712587096883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1836289265033132,
            "unit": "iter/sec",
            "range": "stddev: 0.2132922930371747",
            "extra": "mean: 5.445765103800011 sec\nrounds: 5"
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
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "distinct": true,
          "id": "3469d56535315391a5e4424bca3b52e8d9855cf7",
          "message": "Fix OpenPBS driver logging error when killing finished jobs\n\nThis commit fixes the bug where OpenPBS driver would log `PBS kill failed due to missing jobid for realization` when killing jobs that had already finished successfully or with a failure.",
          "timestamp": "2024-04-09T06:46:39+02:00",
          "tree_id": "b37e2982de61ed4dda1bfc9203779f208377796c",
          "url": "https://github.com/equinor/ert/commit/3469d56535315391a5e4424bca3b52e8d9855cf7"
        },
        "date": 1712638189301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18992473427161657,
            "unit": "iter/sec",
            "range": "stddev: 0.021500516442135468",
            "extra": "mean: 5.265243644199984 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "118697112ec5893510d377441e89e5fb52b3cc6f",
          "message": "Refactor _get_obs_and_measure_data\n\nRename to _get_observations_and_responses\r\nImprove variable names and add docstring.",
          "timestamp": "2024-04-09T09:50:54+02:00",
          "tree_id": "62bff5ca90b9c1603b1e1af32aa7c3a1cc7758e9",
          "url": "https://github.com/equinor/ert/commit/118697112ec5893510d377441e89e5fb52b3cc6f"
        },
        "date": 1712649245494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19114854672193807,
            "unit": "iter/sec",
            "range": "stddev: 0.025405954694112134",
            "extra": "mean: 5.231533365800004 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "5428155b98bf2878eb9d5148633a74a54c295e43",
          "message": "Make resdata a dev-dependency",
          "timestamp": "2024-04-09T10:07:37+02:00",
          "tree_id": "dcd1e7e293c93e7170d1c8646e1d32a5b8d7941d",
          "url": "https://github.com/equinor/ert/commit/5428155b98bf2878eb9d5148633a74a54c295e43"
        },
        "date": 1712650249571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18916709688236483,
            "unit": "iter/sec",
            "range": "stddev: 0.0489005906447136",
            "extra": "mean: 5.286331589799988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrli@equinor.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "committer": {
            "email": "114403625+andreas-el@users.noreply.github.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "distinct": true,
          "id": "0e3f9b5ad606814d1098f0092e1efbfd71cefbaa",
          "message": "Use macOS-14 runners for ert",
          "timestamp": "2024-04-09T10:19:17+02:00",
          "tree_id": "02e631265bda21e993eb37a0ff686ac0b79cabd6",
          "url": "https://github.com/equinor/ert/commit/0e3f9b5ad606814d1098f0092e1efbfd71cefbaa"
        },
        "date": 1712650953968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18548268382950203,
            "unit": "iter/sec",
            "range": "stddev: 0.057163452338775594",
            "extra": "mean: 5.391338853600007 sec\nrounds: 5"
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
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "distinct": true,
          "id": "414bea772d1f89c95fe82211d3e621e446950dc3",
          "message": "Fix storage instance used outside of storage context",
          "timestamp": "2024-04-09T10:33:54+02:00",
          "tree_id": "df64668eef0c81d1de2e8c9668dcd799040a32bc",
          "url": "https://github.com/equinor/ert/commit/414bea772d1f89c95fe82211d3e621e446950dc3"
        },
        "date": 1712651813552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19103738386727237,
            "unit": "iter/sec",
            "range": "stddev: 0.026816160991506643",
            "extra": "mean: 5.234577545800005 sec\nrounds: 5"
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
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "distinct": true,
          "id": "8082875060e07e8a9e64bad774bc7300f88349f9",
          "message": "Implement EXCLUDE_HOST for scheduler lsf driver\n\nThis commit implements the EXCLUDE_HOST keyword for the scheduler LSF\ndriver, the same way it was implemented in C.",
          "timestamp": "2024-04-09T10:34:50+02:00",
          "tree_id": "ea33183e9dc047b94f4025cc83959bb22b95965c",
          "url": "https://github.com/equinor/ert/commit/8082875060e07e8a9e64bad774bc7300f88349f9"
        },
        "date": 1712651895739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18997784896352687,
            "unit": "iter/sec",
            "range": "stddev: 0.04542360794685416",
            "extra": "mean: 5.263771568399989 sec\nrounds: 5"
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
          "id": "27a906029e3287634630fd0ff871dc395625ccd2",
          "message": "Increase timeout in unresponsiveness test",
          "timestamp": "2024-04-09T12:20:18+02:00",
          "tree_id": "cae354a1907f5fb2446a95241b3fcd567dbf0fe9",
          "url": "https://github.com/equinor/ert/commit/27a906029e3287634630fd0ff871dc395625ccd2"
        },
        "date": 1712658201855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19236001899746916,
            "unit": "iter/sec",
            "range": "stddev: 0.028431693121145494",
            "extra": "mean: 5.198585471200005 sec\nrounds: 5"
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
          "id": "7ba3fb551d7f18fb43b8a4e9500b28a72d364f7c",
          "message": "Solve deprecation warning from datetime on UTC",
          "timestamp": "2024-04-09T12:32:32+02:00",
          "tree_id": "eb89a6d3c76fb305ef0ed8bc5994c5a7bd6ef57a",
          "url": "https://github.com/equinor/ert/commit/7ba3fb551d7f18fb43b8a4e9500b28a72d364f7c"
        },
        "date": 1712658941227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1877402414315077,
            "unit": "iter/sec",
            "range": "stddev: 0.05062910166876855",
            "extra": "mean: 5.3265085437999975 sec\nrounds: 5"
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
          "id": "b4dc96d54f3c2eaa0a8a60f539545887599182e6",
          "message": "Solve py312 warning on pkgutil.get_loader\n\nUsing importlib instead",
          "timestamp": "2024-04-09T12:38:39+02:00",
          "tree_id": "f25be9eab05bdb63cb1e3b4444ef132f3db8a22a",
          "url": "https://github.com/equinor/ert/commit/b4dc96d54f3c2eaa0a8a60f539545887599182e6"
        },
        "date": 1712659316040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19124730636191803,
            "unit": "iter/sec",
            "range": "stddev: 0.03452675131481622",
            "extra": "mean: 5.228831814800003 sec\nrounds: 5"
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
          "id": "cfad65e85d01a10fe8c57b4e391caefa2868d4dd",
          "message": "Let mocked bkill support specific kill signal\n\nThe tests sent a -s option to the mock that failed the mock.\nAnother error (missing timeout) let the kill test pass when\nit should not.",
          "timestamp": "2024-04-09T12:44:28+02:00",
          "tree_id": "dd1bae833cef7022083bf6ab0918e8aec24994b8",
          "url": "https://github.com/equinor/ert/commit/cfad65e85d01a10fe8c57b4e391caefa2868d4dd"
        },
        "date": 1712659659376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18662364048283964,
            "unit": "iter/sec",
            "range": "stddev: 0.0438916424227959",
            "extra": "mean: 5.358377949399994 sec\nrounds: 5"
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
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "distinct": true,
          "id": "f4b0b2448f91a9907f329dd174d51ad37844657d",
          "message": "Fix hanging cli integration test\n\nThis commit fixes `tests/integration_tests/test_cli.py::test_that_stop_on_workflow_jobs_stop_ert` hanging after finishing tests.\nIt seems like ErtThread with exceptions had some issues with pytest in this case, but it was fixed by monkeypatching `_ert_threading.can_raise = False`",
          "timestamp": "2024-04-09T12:48:40+02:00",
          "tree_id": "c84710a7de3c7442935f040b61f567d8b922e162",
          "url": "https://github.com/equinor/ert/commit/f4b0b2448f91a9907f329dd174d51ad37844657d"
        },
        "date": 1712659919509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19048675917504074,
            "unit": "iter/sec",
            "range": "stddev: 0.032543055003195376",
            "extra": "mean: 5.249708716400005 sec\nrounds: 5"
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
          "id": "6f49e28aa529c7d18de9513954ee848fa04d7b1b",
          "message": "Protect main branch from git commit with pre-commit\n\nDevelopers should never commit when main branch is checked out.\nCommits must happen on a branch, and then pull requests to main\nbranch.",
          "timestamp": "2024-04-09T17:39:22+02:00",
          "tree_id": "fc62283b41438e24895584835c451ea049d75a5b",
          "url": "https://github.com/equinor/ert/commit/6f49e28aa529c7d18de9513954ee848fa04d7b1b"
        },
        "date": 1712677354007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19040393968843392,
            "unit": "iter/sec",
            "range": "stddev: 0.05512972039226968",
            "extra": "mean: 5.251992168000004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sonso@equinor.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "076b6d83342ff505f224e70a1e8ba9c0d18f54e0",
          "message": "Fix test_small_time_mismatches_are_ignored",
          "timestamp": "2024-04-10T08:31:28+02:00",
          "tree_id": "a763030e52ffb45241a901c6bd0f3f35bba0227b",
          "url": "https://github.com/equinor/ert/commit/076b6d83342ff505f224e70a1e8ba9c0d18f54e0"
        },
        "date": 1712730877723,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19370552917516984,
            "unit": "iter/sec",
            "range": "stddev: 0.024778720333060125",
            "extra": "mean: 5.162475249199986 sec\nrounds: 5"
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
          "id": "c3ee77f07228d2f43d8b3f7a815903c65cdbcee5",
          "message": "Guard against cancellation errors when cancelling",
          "timestamp": "2024-04-10T08:55:00+02:00",
          "tree_id": "d80df876d29a8eb08413c1ca1389a331e9725b1b",
          "url": "https://github.com/equinor/ert/commit/c3ee77f07228d2f43d8b3f7a815903c65cdbcee5"
        },
        "date": 1712732285834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19074476604626014,
            "unit": "iter/sec",
            "range": "stddev: 0.0439954412157879",
            "extra": "mean: 5.242607808999992 sec\nrounds: 5"
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
          "id": "afd2437d33cb404892141b35c14193a350599b09",
          "message": "Remove pass statement\n\nLeftover after b4dc96d54f3c2eaa0a8a60f539545887599182e6",
          "timestamp": "2024-04-10T08:58:10+02:00",
          "tree_id": "79518becfe70b7d5f500a58fde188e7369a509ab",
          "url": "https://github.com/equinor/ert/commit/afd2437d33cb404892141b35c14193a350599b09"
        },
        "date": 1712732477786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1912863758543016,
            "unit": "iter/sec",
            "range": "stddev: 0.06023930596930995",
            "extra": "mean: 5.2277638464 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}