window.BENCHMARK_DATA = {
  "lastUpdate": 1729759568579,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10a02f64439fb1daf8bbeae020dc9b30e2c17885",
          "message": "Remove remnant ext param in ert config dicts",
          "timestamp": "2024-10-15T12:47:53+02:00",
          "tree_id": "47ea7b97d85b6d5e2adc8c262c63ca1b42c5c59b",
          "url": "https://github.com/equinor/ert/commit/10a02f64439fb1daf8bbeae020dc9b30e2c17885"
        },
        "date": 1728989384378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19870741368675712,
            "unit": "iter/sec",
            "range": "stddev: 0.0424418825080372",
            "extra": "mean: 5.0325248638000115 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jholba@equinor.com",
            "name": "Jon Holba",
            "username": "JHolba"
          },
          "committer": {
            "email": "jon.holba@gmail.com",
            "name": "Jon Holba",
            "username": "JHolba"
          },
          "distinct": true,
          "id": "353edda58fe965573ecc59f84cd51c7511edfe4f",
          "message": "Close Evaluator server for new connections earlier\n\nEnsemble evaluator accepted new connections while shutting down before\nthis commit",
          "timestamp": "2024-10-15T16:07:53+02:00",
          "tree_id": "40143c7b3bf527702e5a9028b074969c49e21917",
          "url": "https://github.com/equinor/ert/commit/353edda58fe965573ecc59f84cd51c7511edfe4f"
        },
        "date": 1729001378947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19282491738921737,
            "unit": "iter/sec",
            "range": "stddev: 0.016432556984370544",
            "extra": "mean: 5.1860517485999935 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d4421beaf0b63cc2f7aa3fd04552b533d6634a7",
          "message": "Initialize ert storage outside Simulator.start",
          "timestamp": "2024-10-16T09:02:04+02:00",
          "tree_id": "6fb411b8cd32d775b0b59f1af3df851d41aa4123",
          "url": "https://github.com/equinor/ert/commit/2d4421beaf0b63cc2f7aa3fd04552b533d6634a7"
        },
        "date": 1729062258448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19638801178142665,
            "unit": "iter/sec",
            "range": "stddev: 0.014422120604439747",
            "extra": "mean: 5.091960506800012 sec\nrounds: 5"
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
          "id": "ace090c44568b92682a14d74780fe4d35889cd33",
          "message": "Shift doc and plugins test up one level\n\nCategorizing these tests in an all directory seems pointless, was\nprobably an intention earlier but that is not valid anymore",
          "timestamp": "2024-10-16T12:32:32+02:00",
          "tree_id": "e222b0a7ceba499504962194bf6112dd46985ce0",
          "url": "https://github.com/equinor/ert/commit/ace090c44568b92682a14d74780fe4d35889cd33"
        },
        "date": 1729074860094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.198998635918877,
            "unit": "iter/sec",
            "range": "stddev: 0.03669609296555343",
            "extra": "mean: 5.025160073999984 sec\nrounds: 5"
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
          "id": "5d02e9a5059ba5b6a511d81cf596d317d2e54329",
          "message": "Give hint on REALIZATION_MEMORY on oom kills",
          "timestamp": "2024-10-16T12:32:54+02:00",
          "tree_id": "219bd798b72c51dcabbadc776909cc9d95d6dcd3",
          "url": "https://github.com/equinor/ert/commit/5d02e9a5059ba5b6a511d81cf596d317d2e54329"
        },
        "date": 1729074885514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19070203987550335,
            "unit": "iter/sec",
            "range": "stddev: 0.017921919017907583",
            "extra": "mean: 5.243782398200006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "stephan.dehoop@tno.nl",
            "name": "Stephan de Hoop",
            "username": "StephanDeHoop"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45b9a36fb89ad839795830f1e7d37665ffbffd02",
          "message": "Remove redundant/superseded Everest tests (#8954)\n\nRemove redundant Everest math_func tests and associated (unused) config files",
          "timestamp": "2024-10-16T14:47:49+02:00",
          "tree_id": "3008f6a4d1f6ddf0a846a1526956f7dcda871159",
          "url": "https://github.com/equinor/ert/commit/45b9a36fb89ad839795830f1e7d37665ffbffd02"
        },
        "date": 1729082982738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1976233120979619,
            "unit": "iter/sec",
            "range": "stddev: 0.01287492253495804",
            "extra": "mean: 5.0601317698000114 sec\nrounds: 5"
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
          "id": "74e401e4e9fe06b61c8a4cf7ce2be067f89f8145",
          "message": "Add runpath validation in gui load_results_manually\n\nThis commit adds runpath validation so the load button in\n`load_results_manually` will be disabled until the runpath exists, and\nthe user has the read/execute permissions.",
          "timestamp": "2024-10-17T09:55:58+02:00",
          "tree_id": "2a55f81587479d69319d527c2a68a4ae5c15d1ad",
          "url": "https://github.com/equinor/ert/commit/74e401e4e9fe06b61c8a4cf7ce2be067f89f8145"
        },
        "date": 1729151873006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19377980092784855,
            "unit": "iter/sec",
            "range": "stddev: 0.030118471940152946",
            "extra": "mean: 5.160496580200004 sec\nrounds: 5"
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
          "id": "96b8fe11da8fdeaf83cd3608f80d86b993d67212",
          "message": "Update type of usecols in _read_excel\n\nusecols takes str, list-like or callable\r\nUpdate outdated docstring.",
          "timestamp": "2024-10-17T11:39:33+02:00",
          "tree_id": "c8ce1ed81bb6d3241ae88a8adf0ef11890eba6ee",
          "url": "https://github.com/equinor/ert/commit/96b8fe11da8fdeaf83cd3608f80d86b993d67212"
        },
        "date": 1729158081974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1944061915561054,
            "unit": "iter/sec",
            "range": "stddev: 0.045912425825283924",
            "extra": "mean: 5.1438690917999965 sec\nrounds: 5"
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
          "id": "da9495dd4160acec5f89fc08de74980245b2db89",
          "message": "Remove unused constants in tests",
          "timestamp": "2024-10-17T12:35:25+02:00",
          "tree_id": "a4a7e65dad9bab82d7142351bbc611bd3809328e",
          "url": "https://github.com/equinor/ert/commit/da9495dd4160acec5f89fc08de74980245b2db89"
        },
        "date": 1729161432179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19515692280696764,
            "unit": "iter/sec",
            "range": "stddev: 0.027192462215222535",
            "extra": "mean: 5.124081614 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ca8b0b178568e3f9a4e4ccafc241689bf0dc6c8",
          "message": "Add torque support to Everest",
          "timestamp": "2024-10-18T11:51:34+02:00",
          "tree_id": "2622c1b24f81df13b638f98d09f1c2a409cbdd21",
          "url": "https://github.com/equinor/ert/commit/0ca8b0b178568e3f9a4e4ccafc241689bf0dc6c8"
        },
        "date": 1729245201701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19630230421221798,
            "unit": "iter/sec",
            "range": "stddev: 0.04015064515022084",
            "extra": "mean: 5.094183708199995 sec\nrounds: 5"
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
          "id": "e5a183d4c29aa2d48534d6f06c1d5311c2046500",
          "message": "Fix flaky ensemble_evaluator unit test\n\nThis commit sets the `evaluator._max_batching_size` to the number of events we send, and `evaluator._batching_interval` to 10. This should fix the flaky test, which was caused by the batching putting the events in two different batches.",
          "timestamp": "2024-10-18T12:39:41+02:00",
          "tree_id": "57c43f6e96ad0c8909b41f7439cabc226caf21fe",
          "url": "https://github.com/equinor/ert/commit/e5a183d4c29aa2d48534d6f06c1d5311c2046500"
        },
        "date": 1729248091112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19499207335714192,
            "unit": "iter/sec",
            "range": "stddev: 0.028100333542908845",
            "extra": "mean: 5.128413595399996 sec\nrounds: 5"
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
          "id": "e2ba5be4aafcccb1a4e2916986cb655a2e7fb6be",
          "message": "Move template_render.py up two levels\n\nThe subdirectories serve no real purpose. There is not going\nto be a lot of other forward models in here.",
          "timestamp": "2024-10-18T13:08:47+02:00",
          "tree_id": "294bf4c17157d75942778a835df5bfc85159715c",
          "url": "https://github.com/equinor/ert/commit/e2ba5be4aafcccb1a4e2916986cb655a2e7fb6be"
        },
        "date": 1729249886322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19204070132624054,
            "unit": "iter/sec",
            "range": "stddev: 0.03200357272658424",
            "extra": "mean: 5.207229473200011 sec\nrounds: 5"
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
          "id": "90efa9ad01be18da6169ba0c6d7ba7a7754bc35d",
          "message": "Attempt to mitigate flaky cpu polling test",
          "timestamp": "2024-10-18T13:20:13+02:00",
          "tree_id": "9be9d3970fae129c7a080fe9816f6dc3bd13f332",
          "url": "https://github.com/equinor/ert/commit/90efa9ad01be18da6169ba0c6d7ba7a7754bc35d"
        },
        "date": 1729250526129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19468542130753305,
            "unit": "iter/sec",
            "range": "stddev: 0.03301591048669666",
            "extra": "mean: 5.1364914397999994 sec\nrounds: 5"
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
          "id": "2a0fc2cea2fc21d3fca86674b4efb07409eb5d47",
          "message": "Add validation for uninitialized ensembles in manual update and evaluate\nexperiment\n\nThis commit adds validation for the realizations specified by the user\nwhen trying to run `manual_update` or `evaluate_experiment`. The\nvalidator checks the selected ensemble if the specified realization(s)\nexists. If not, the field becomes red and a warning is displayed.\nThe commit also disables the realization field until an ensemble is\nselected.",
          "timestamp": "2024-10-18T13:20:53+02:00",
          "tree_id": "fd14dee002e7f72ce75758c45469f271183e9819",
          "url": "https://github.com/equinor/ert/commit/2a0fc2cea2fc21d3fca86674b4efb07409eb5d47"
        },
        "date": 1729250564574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1883622886711612,
            "unit": "iter/sec",
            "range": "stddev: 0.0556866402866877",
            "extra": "mean: 5.30891829279999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9493b3ee4d5b1154d042b89a0152ab2e2fd9fc14",
          "message": "Move everest workflow logic over to a baserunmodel",
          "timestamp": "2024-10-18T13:27:36+02:00",
          "tree_id": "dcd892ad83fab056c8111e5147cff344724e26b8",
          "url": "https://github.com/equinor/ert/commit/9493b3ee4d5b1154d042b89a0152ab2e2fd9fc14"
        },
        "date": 1729250968649,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18870987926271138,
            "unit": "iter/sec",
            "range": "stddev: 0.0165444202097893",
            "extra": "mean: 5.299139631199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d59ed13cf07d2e547d0a7be2399c2583510dae4d",
          "message": "Use a concat instead of vstack in _es_update",
          "timestamp": "2024-10-21T12:14:46Z",
          "tree_id": "29f31e0d3465b64dce21ea3b65068b9e4bc4db2b",
          "url": "https://github.com/equinor/ert/commit/d59ed13cf07d2e547d0a7be2399c2583510dae4d"
        },
        "date": 1729512994915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18769809057957476,
            "unit": "iter/sec",
            "range": "stddev: 0.04125128482700362",
            "extra": "mean: 5.327704703400002 sec\nrounds: 5"
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
          "id": "ebc4d03badcf734a93f896ca1d4094121e0e4572",
          "message": "Remove testing of execute bit of plugin-scripts\n\nThis test file became irrelevant after 173ba862ab7e58c0abf1b56b5d50add9aca8b316\nwhere no built-in forward models need the extra text file with the line\n\n  EXECUTABLE somescript.xx\n\nThe scripts in here still needs to be executable, but the responsibility\nfor verifying that is now on each forward model's integration test.",
          "timestamp": "2024-10-21T14:40:45+02:00",
          "tree_id": "809997a9d25c8e1b9e5e890cf7feeb479c37a3d4",
          "url": "https://github.com/equinor/ert/commit/ebc4d03badcf734a93f896ca1d4094121e0e4572"
        },
        "date": 1729514552328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19392590427860618,
            "unit": "iter/sec",
            "range": "stddev: 0.032901396673173613",
            "extra": "mean: 5.156608673400006 sec\nrounds: 5"
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
          "id": "3b1587a2d6666ea323014cf7a529d481ea1581ca",
          "message": "Adjust histogram boundaries when having constant distribution: min==max\n\n- Add test for plot histogram when having a constant distribution",
          "timestamp": "2024-10-21T15:29:56+02:00",
          "tree_id": "2416cde07a178faafac29d61aee6ef6bb51dcb7b",
          "url": "https://github.com/equinor/ert/commit/3b1587a2d6666ea323014cf7a529d481ea1581ca"
        },
        "date": 1729517519329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19433716121703978,
            "unit": "iter/sec",
            "range": "stddev: 0.030288368164369764",
            "extra": "mean: 5.1456962412 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25088a75a2281cbf35c1534cb7c20a6bbe5127cb",
          "message": "Update polars import to avoid warning",
          "timestamp": "2024-10-21T14:12:00Z",
          "tree_id": "37cd579009b9e1fddd45b40872906c69f136f081",
          "url": "https://github.com/equinor/ert/commit/25088a75a2281cbf35c1534cb7c20a6bbe5127cb"
        },
        "date": 1729520043454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19363018821352046,
            "unit": "iter/sec",
            "range": "stddev: 0.02713754146325517",
            "extra": "mean: 5.164483953799999 sec\nrounds: 5"
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
          "id": "b17e43949ce97c3f06994cc4080027af35e730dd",
          "message": "Use plugin functionality to document forward models in Everest",
          "timestamp": "2024-10-22T11:48:41+01:00",
          "tree_id": "ac6cb378095883f5f9d3d3d56dfebdc9d01ab0ce",
          "url": "https://github.com/equinor/ert/commit/b17e43949ce97c3f06994cc4080027af35e730dd"
        },
        "date": 1729594226170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19277709457530473,
            "unit": "iter/sec",
            "range": "stddev: 0.03552516271295124",
            "extra": "mean: 5.187338268600001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac3dada674fa4abb76583f464bb653da3d7b8afd",
          "message": "Fix read_from_file error propagation",
          "timestamp": "2024-10-22T13:02:50+02:00",
          "tree_id": "6d92349e6ef3b6d04cfeb066d337b2a8b8b6c7de",
          "url": "https://github.com/equinor/ert/commit/ac3dada674fa4abb76583f464bb653da3d7b8afd"
        },
        "date": 1729595081855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19482874035186354,
            "unit": "iter/sec",
            "range": "stddev: 0.032170723283778686",
            "extra": "mean: 5.132712957000007 sec\nrounds: 5"
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
          "id": "e741d4bd5630808b64515d3b80eecf3fd5986ac6",
          "message": "Use more realistic values in example in doc\n\nMin and max are applied after the output-transformation. For a permeability field this implies that\nhas some implications on what is a realistic value interval.",
          "timestamp": "2024-10-22T13:13:56+02:00",
          "tree_id": "fd0a56ece227de438f95cda7ee07f0b7eca96f6b",
          "url": "https://github.com/equinor/ert/commit/e741d4bd5630808b64515d3b80eecf3fd5986ac6"
        },
        "date": 1729595743482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19151760924554168,
            "unit": "iter/sec",
            "range": "stddev: 0.038190962221120194",
            "extra": "mean: 5.22145198 sec\nrounds: 5"
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
          "id": "67e1ffced403c809c364f8d2d912b76a54b84afa",
          "message": "Fix bug with time format for Slurms max_runtime\n\nErt provided the number of seconds as a float to Slurms sbatch command,\nwhich is wrong.  Add a helper function to format the timedelta properly.\n\nFloating point part is ignored by rounding down to nearest second.",
          "timestamp": "2024-10-22T13:41:39+02:00",
          "tree_id": "704ebec26ef7a440ca9d3ecbf928a251e64312db",
          "url": "https://github.com/equinor/ert/commit/67e1ffced403c809c364f8d2d912b76a54b84afa"
        },
        "date": 1729597414510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1953942877593406,
            "unit": "iter/sec",
            "range": "stddev: 0.02079041411306449",
            "extra": "mean: 5.117856880400007 sec\nrounds: 5"
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
          "id": "12ffdba9baa36707b83e67af9d8b72533010f7ab",
          "message": "Remove duplicate eclbase",
          "timestamp": "2024-10-22T13:48:10+02:00",
          "tree_id": "3c376e4766eb1190fb62b7069a1097b437948a5b",
          "url": "https://github.com/equinor/ert/commit/12ffdba9baa36707b83e67af9d8b72533010f7ab"
        },
        "date": 1729597793408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19724796818871085,
            "unit": "iter/sec",
            "range": "stddev: 0.0253880903021815",
            "extra": "mean: 5.069760713800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49289030+HakonSohoel@users.noreply.github.com",
            "name": "Håkon Steinkopf Søhoel",
            "username": "HakonSohoel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e55b1f9f0699ddd10f9980015c3976d6a7c074ff",
          "message": "Improve error messages on test komodo failures (#9008)",
          "timestamp": "2024-10-22T14:07:47+02:00",
          "tree_id": "c2d427d09fefd04ccc90ba256ea2bf21df39b0ca",
          "url": "https://github.com/equinor/ert/commit/e55b1f9f0699ddd10f9980015c3976d6a7c074ff"
        },
        "date": 1729598970229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19401624917051807,
            "unit": "iter/sec",
            "range": "stddev: 0.06932245215309367",
            "extra": "mean: 5.154207465999997 sec\nrounds: 5"
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
          "id": "933b009a38778e6e3f9e2eda7bed3d4e7e26a05c",
          "message": "Use pathlib and jobs are forward_models in test_shell",
          "timestamp": "2024-10-23T10:37:26+02:00",
          "tree_id": "416f3b64f5656bef53e7134685dad494c8695c9c",
          "url": "https://github.com/equinor/ert/commit/933b009a38778e6e3f9e2eda7bed3d4e7e26a05c"
        },
        "date": 1729672755868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1918227462557748,
            "unit": "iter/sec",
            "range": "stddev: 0.044983638261839966",
            "extra": "mean: 5.213146092 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sted@equinor.com",
            "name": "StephanDeHoop",
            "username": "StephanDeHoop"
          },
          "committer": {
            "email": "stephan.dehoop@tno.nl",
            "name": "Stephan de Hoop",
            "username": "StephanDeHoop"
          },
          "distinct": true,
          "id": "ca44e00531609e31384be0bf860cec5a53fe354f",
          "message": "Index ert config dictionary with Ert ConfigKeys instead of hardcoded strings",
          "timestamp": "2024-10-23T11:25:53+02:00",
          "tree_id": "f77a78827ec63b655000afbb8a36f38987974016",
          "url": "https://github.com/equinor/ert/commit/ca44e00531609e31384be0bf860cec5a53fe354f"
        },
        "date": 1729675673897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19670298595451333,
            "unit": "iter/sec",
            "range": "stddev: 0.022488232962698966",
            "extra": "mean: 5.083806914000002 sec\nrounds: 5"
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
          "id": "2c94d3998d836c4d8cdbaadd3bfcb69687824344",
          "message": "Combine dicts instead of mutating user environment variables",
          "timestamp": "2024-10-23T14:53:19+02:00",
          "tree_id": "0f3d47dc6ea9003ae2e600fee01ab1643ddaee89",
          "url": "https://github.com/equinor/ert/commit/2c94d3998d836c4d8cdbaadd3bfcb69687824344"
        },
        "date": 1729688106617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1939357410306562,
            "unit": "iter/sec",
            "range": "stddev: 0.05402769067520159",
            "extra": "mean: 5.1563471214000005 sec\nrounds: 5"
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
          "id": "a867d6299a55d8c723f197270c4ac77478ffecc6",
          "message": "Rename substitution_list",
          "timestamp": "2024-10-23T14:58:38+02:00",
          "tree_id": "83454b8da9b7fe21b93d27997c85a4c2b3e7dbcb",
          "url": "https://github.com/equinor/ert/commit/a867d6299a55d8c723f197270c4ac77478ffecc6"
        },
        "date": 1729688422807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19411612255803504,
            "unit": "iter/sec",
            "range": "stddev: 0.043336876267412866",
            "extra": "mean: 5.1515556092 sec\nrounds: 5"
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
          "id": "a6301093b809a062bb57897708e7f25890a0a2e8",
          "message": "Rename Job to ForwardModelStep\n\nPlus follow-up in test code and filenames",
          "timestamp": "2024-10-24T10:44:20+02:00",
          "tree_id": "f6f72ff4e2d0c2b699be80906ae2051c620baeab",
          "url": "https://github.com/equinor/ert/commit/a6301093b809a062bb57897708e7f25890a0a2e8"
        },
        "date": 1729759568083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19201714321435348,
            "unit": "iter/sec",
            "range": "stddev: 0.02264973751484774",
            "extra": "mean: 5.207868335400008 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}