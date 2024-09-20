window.BENCHMARK_DATA = {
  "lastUpdate": 1726815240775,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "e1cda91a39a5da97045cfffa8a0e205cb07bcd42",
          "message": "Fix typo existant -> existent\n\nexistant is French.",
          "timestamp": "2024-09-16T09:16:54+02:00",
          "tree_id": "8fd4ce39cc4fa2d4179d3cc87b7f15d2604847a9",
          "url": "https://github.com/equinor/ert/commit/e1cda91a39a5da97045cfffa8a0e205cb07bcd42"
        },
        "date": 1726471163684,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19373920315032825,
            "unit": "iter/sec",
            "range": "stddev: 0.010347847376169044",
            "extra": "mean: 5.161577954999996 sec\nrounds: 5"
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
          "id": "dbf2ae633f0416b7e935e79c483ae05aeb72d279",
          "message": "Improve experiment name validation",
          "timestamp": "2024-09-16T09:30:22+02:00",
          "tree_id": "55d39328afec7aae572aa5e00d86762a50ba0089",
          "url": "https://github.com/equinor/ert/commit/dbf2ae633f0416b7e935e79c483ae05aeb72d279"
        },
        "date": 1726471968899,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19039023434069988,
            "unit": "iter/sec",
            "range": "stddev: 0.030097739903150934",
            "extra": "mean: 5.252370235599995 sec\nrounds: 5"
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
          "id": "47c7f5f388140baa948cd33809c28024af1e5297",
          "message": "Remove unused index_lists",
          "timestamp": "2024-09-16T13:11:48+02:00",
          "tree_id": "2cbe95133937c78e1287265f2d0d3f23138649d7",
          "url": "https://github.com/equinor/ert/commit/47c7f5f388140baa948cd33809c28024af1e5297"
        },
        "date": 1726485263250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1901107013998294,
            "unit": "iter/sec",
            "range": "stddev: 0.023415417192334278",
            "extra": "mean: 5.260093159599995 sec\nrounds: 5"
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
          "id": "29a790fc6f3c8fadd2ca29e88c5b5b9c938992fd",
          "message": "Add COV_CORE_CONTEXT to env_save exception",
          "timestamp": "2024-09-16T13:17:23+02:00",
          "tree_id": "eea4e70ec189d6b28dbbb484e69bf5b85c104053",
          "url": "https://github.com/equinor/ert/commit/29a790fc6f3c8fadd2ca29e88c5b5b9c938992fd"
        },
        "date": 1726485601923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1896194449940588,
            "unit": "iter/sec",
            "range": "stddev: 0.014655083543314096",
            "extra": "mean: 5.273720741199997 sec\nrounds: 5"
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
          "id": "9128cd2c29a3e03ef2c0de73e383288cf7ef23d7",
          "message": "Improve pytest skip message for missing git-lfs",
          "timestamp": "2024-09-16T13:36:02+02:00",
          "tree_id": "9f30a2ffbd7b1b7bc8e127317c8f025ffe2b0d5a",
          "url": "https://github.com/equinor/ert/commit/9128cd2c29a3e03ef2c0de73e383288cf7ef23d7"
        },
        "date": 1726486718868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18672005252982402,
            "unit": "iter/sec",
            "range": "stddev: 0.04512125597231378",
            "extra": "mean: 5.355611175399997 sec\nrounds: 5"
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
          "id": "9169dd3c485dfbe4d7b324c8a3df5e5eefc34613",
          "message": "Remove unused flake8-matcher.json\n\n- removes unused flake8-matcher.json\n- change from pip to uv pip in github benchmark",
          "timestamp": "2024-09-16T13:41:49+02:00",
          "tree_id": "fa485e351a89d07b7598470a4ef179c1469dfd10",
          "url": "https://github.com/equinor/ert/commit/9169dd3c485dfbe4d7b324c8a3df5e5eefc34613"
        },
        "date": 1726487015233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19220978221188245,
            "unit": "iter/sec",
            "range": "stddev: 0.03929731666290262",
            "extra": "mean: 5.2026488376000035 sec\nrounds: 5"
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
          "id": "3173016f0e0c98b60e6afb9f805cdce21cbea9ed",
          "message": "Move _ert_forward_model_runner to _ert.forward_model_runner\n\nThis should not be a problem as _ert does not autoimport anything in\n__init__.py",
          "timestamp": "2024-09-16T13:59:27+02:00",
          "tree_id": "94d696aa79bf403b9cd4dc4d1b171fbe406d21e4",
          "url": "https://github.com/equinor/ert/commit/3173016f0e0c98b60e6afb9f805cdce21cbea9ed"
        },
        "date": 1726488079831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1915556906102528,
            "unit": "iter/sec",
            "range": "stddev: 0.017429352810660218",
            "extra": "mean: 5.220413952799982 sec\nrounds: 5"
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
          "id": "284be7cfdee069971814cabb9d8d775299c3f2a0",
          "message": "Fix pull request template",
          "timestamp": "2024-09-16T14:11:37+02:00",
          "tree_id": "e4079af85c9cd8a6677f4c8ce9b4e7397a7172f4",
          "url": "https://github.com/equinor/ert/commit/284be7cfdee069971814cabb9d8d775299c3f2a0"
        },
        "date": 1726488799005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1891003928444592,
            "unit": "iter/sec",
            "range": "stddev: 0.03555438575818033",
            "extra": "mean: 5.288196311799998 sec\nrounds: 5"
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
          "id": "0e48fbe49a977958207baf9114b4644c21b38a61",
          "message": "Send codecov upload token secret to our own workflow",
          "timestamp": "2024-09-16T14:18:10+02:00",
          "tree_id": "1a20376f7b339287dd78db22f0fa318426d84db0",
          "url": "https://github.com/equinor/ert/commit/0e48fbe49a977958207baf9114b4644c21b38a61"
        },
        "date": 1726489213539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1907402483404097,
            "unit": "iter/sec",
            "range": "stddev: 0.04215706264739716",
            "extra": "mean: 5.2427319807999995 sec\nrounds: 5"
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
          "id": "a24c64ad70fa843beadea40c7f32a309cc59c2da",
          "message": "Log contents of custom forward model steps",
          "timestamp": "2024-09-16T14:41:46+02:00",
          "tree_id": "9350fca6b749957b24ce2a1029390f88363645f9",
          "url": "https://github.com/equinor/ert/commit/a24c64ad70fa843beadea40c7f32a309cc59c2da"
        },
        "date": 1726490607242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18843333086232553,
            "unit": "iter/sec",
            "range": "stddev: 0.014824416998436344",
            "extra": "mean: 5.3069167509999975 sec\nrounds: 5"
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
          "id": "d69bbe3de066954925f28dece0d67c3ae1946020",
          "message": "Replace selected usage of SIMULATION_JOB with FORWARD_MODEL\n\nWherever there are no arguments passed directly from the config\nline, FORWARD_MODEL is used instead of SIMULATION_JOB.",
          "timestamp": "2024-09-16T15:07:21+02:00",
          "tree_id": "62b9d14623a154a09623ac0728f702aa3554fed9",
          "url": "https://github.com/equinor/ert/commit/d69bbe3de066954925f28dece0d67c3ae1946020"
        },
        "date": 1726492142035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19301247886640804,
            "unit": "iter/sec",
            "range": "stddev: 0.044412722157283605",
            "extra": "mean: 5.181012159799996 sec\nrounds: 5"
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
          "id": "092a8618558ee7604bcb9023d674a97ce3184437",
          "message": "Add RUF (ruff specific rules) to linting rules",
          "timestamp": "2024-09-16T20:11:49+02:00",
          "tree_id": "907f7c3ae7169f4d411a63396ea8d06c410a4213",
          "url": "https://github.com/equinor/ert/commit/092a8618558ee7604bcb9023d674a97ce3184437"
        },
        "date": 1726510421776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1881593226049552,
            "unit": "iter/sec",
            "range": "stddev: 0.039522254827142736",
            "extra": "mean: 5.3146449836000045 sec\nrounds: 5"
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
          "id": "864047670708208ece2ccd7246ee4916e587abb0",
          "message": "Implement a one-time retry of opening JOBS_FILE",
          "timestamp": "2024-09-17T09:28:04+02:00",
          "tree_id": "417721caeab3395a01f9c99d94ec318c6f38ec0e",
          "url": "https://github.com/equinor/ert/commit/864047670708208ece2ccd7246ee4916e587abb0"
        },
        "date": 1726558188076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19085880142182834,
            "unit": "iter/sec",
            "range": "stddev: 0.036928349386395026",
            "extra": "mean: 5.2394754266000065 sec\nrounds: 5"
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
          "id": "8401331cfa6a4a9ce0efdb941d217354986913fd",
          "message": "Move run_args and run_paths fixtures to unit_tests",
          "timestamp": "2024-09-17T09:41:47+02:00",
          "tree_id": "9d3e0bde625e01a68cce9724d85a4e01287c13bc",
          "url": "https://github.com/equinor/ert/commit/8401331cfa6a4a9ce0efdb941d217354986913fd"
        },
        "date": 1726559011522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19013745732921597,
            "unit": "iter/sec",
            "range": "stddev: 0.03133209014212453",
            "extra": "mean: 5.259352965199997 sec\nrounds: 5"
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
          "id": "b125e02f87dea084bea94cbb0223715555cd2f72",
          "message": "Combine _SummaryType and SummaryKeyType",
          "timestamp": "2024-09-17T10:17:24+02:00",
          "tree_id": "7a1cc4aacac19a89f8924968077697b6316d4c86",
          "url": "https://github.com/equinor/ert/commit/b125e02f87dea084bea94cbb0223715555cd2f72"
        },
        "date": 1726561150204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19095128596851005,
            "unit": "iter/sec",
            "range": "stddev: 0.05817766511695838",
            "extra": "mean: 5.236937761000002 sec\nrounds: 5"
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
          "id": "eb3ce0053f4614e84eb9927f555fe6cdf15785bd",
          "message": "Update README to include `git lfs install` step for testing",
          "timestamp": "2024-09-17T11:39:30+02:00",
          "tree_id": "152446e165b56df8ebb207fa552e448c96b9d3b0",
          "url": "https://github.com/equinor/ert/commit/eb3ce0053f4614e84eb9927f555fe6cdf15785bd"
        },
        "date": 1726566078679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18876634902163422,
            "unit": "iter/sec",
            "range": "stddev: 0.029872387022947193",
            "extra": "mean: 5.297554385000007 sec\nrounds: 5"
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
          "id": "13d3afaec888a0682bddc97d76c6f77f2ff5a0c9",
          "message": "Strip newlines from strings read from disk\n\nOn poly case this would otherwise yield an empty line in the logs.",
          "timestamp": "2024-09-17T13:09:26+02:00",
          "tree_id": "69535c4754217a6b820d1e3fcf24a354bef19a15",
          "url": "https://github.com/equinor/ert/commit/13d3afaec888a0682bddc97d76c6f77f2ff5a0c9"
        },
        "date": 1726571472978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18913800721350685,
            "unit": "iter/sec",
            "range": "stddev: 0.04365400418875253",
            "extra": "mean: 5.2871446343999935 sec\nrounds: 5"
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
          "id": "ab512a641a5d52160e7a77466bc700572dfa932a",
          "message": "Call the name() function when logging\n\nself.name is not a property (and due to deprecation in 3.11\nnot adding the @property decorator).\n\nWithout this patch, the log emitted looks like:\n  2024-09-17 12:48:31,555 - ert.run_models.ensemble_experiment - ert_gui_simulation_thread - INFO - Running <bound method EnsembleExperiment.name of <class 'ert.run_models.ensemble_experiment.EnsembleExperiment'>>",
          "timestamp": "2024-09-17T13:10:08+02:00",
          "tree_id": "e9c62c79389abeabb6830d3468bd165cdaec8e04",
          "url": "https://github.com/equinor/ert/commit/ab512a641a5d52160e7a77466bc700572dfa932a"
        },
        "date": 1726571509945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19083023683317452,
            "unit": "iter/sec",
            "range": "stddev: 0.0741787715204856",
            "extra": "mean: 5.240259701999998 sec\nrounds: 5"
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
          "id": "2fd710c32e89aad9fe0b42c74996e033324add7a",
          "message": "Log all settings for run-models",
          "timestamp": "2024-09-18T10:23:04+02:00",
          "tree_id": "09ab47c77271abb76edd69da4729c4cd6eb70780",
          "url": "https://github.com/equinor/ert/commit/2fd710c32e89aad9fe0b42c74996e033324add7a"
        },
        "date": 1726647898342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18482303125965754,
            "unit": "iter/sec",
            "range": "stddev: 0.10031683230607473",
            "extra": "mean: 5.4105811012 sec\nrounds: 5"
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
          "id": "c2dbbd881ffacb6d5519460f39bc716c4d8b80e2",
          "message": "Remove unused mypy config",
          "timestamp": "2024-09-18T13:47:24+02:00",
          "tree_id": "62819bb284825d0dc9848f342cb09be7759002cf",
          "url": "https://github.com/equinor/ert/commit/c2dbbd881ffacb6d5519460f39bc716c4d8b80e2"
        },
        "date": 1726660161366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19105786346305448,
            "unit": "iter/sec",
            "range": "stddev: 0.0338400079828528",
            "extra": "mean: 5.234016448599999 sec\nrounds: 5"
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
          "id": "2e5aa92a7b3916aee3b99c0b8700545ac1408368",
          "message": "Make pyproject.toml pretty again",
          "timestamp": "2024-09-18T16:03:22+02:00",
          "tree_id": "5774108d0cb712b382012bf6a2b5fd847cf08ca9",
          "url": "https://github.com/equinor/ert/commit/2e5aa92a7b3916aee3b99c0b8700545ac1408368"
        },
        "date": 1726668308162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18772948743388462,
            "unit": "iter/sec",
            "range": "stddev: 0.027122602989860047",
            "extra": "mean: 5.326813670399991 sec\nrounds: 5"
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
          "id": "27c4530764d044798fb53e9905c4cdb26491f8ee",
          "message": "Improve logging of errors in callback",
          "timestamp": "2024-09-19T11:52:45+02:00",
          "tree_id": "f84de7ea6e88ffe370fbab005bf0720927f138db",
          "url": "https://github.com/equinor/ert/commit/27c4530764d044798fb53e9905c4cdb26491f8ee"
        },
        "date": 1726739674972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19015915885066437,
            "unit": "iter/sec",
            "range": "stddev: 0.038527372494432326",
            "extra": "mean: 5.2587527523999995 sec\nrounds: 5"
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
          "id": "6c602be0850531429dac8ebd2e549775c39b431f",
          "message": "Add pyright settings\n\nThis will also turn on pyright/pylance for vscode users by default",
          "timestamp": "2024-09-19T12:30:08+02:00",
          "tree_id": "9ee811928dbcd13810ccef3fcbee3d071f64c95f",
          "url": "https://github.com/equinor/ert/commit/6c602be0850531429dac8ebd2e549775c39b431f"
        },
        "date": 1726741914365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18527167896658694,
            "unit": "iter/sec",
            "range": "stddev: 0.11034560031456579",
            "extra": "mean: 5.397479018799987 sec\nrounds: 5"
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
          "id": "82a563cc9806d491cc15d252a027933d509aaa87",
          "message": "Sync obs counts with poly templates",
          "timestamp": "2024-09-19T13:01:55+02:00",
          "tree_id": "fd7e0a2674e6ac7de145b32ab429c8e928b5fd46",
          "url": "https://github.com/equinor/ert/commit/82a563cc9806d491cc15d252a027933d509aaa87"
        },
        "date": 1726743817841,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18752175541615146,
            "unit": "iter/sec",
            "range": "stddev: 0.04018870904827772",
            "extra": "mean: 5.332714584399997 sec\nrounds: 5"
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
          "id": "6ba0e7875aab0d8808504b22326f15c844f92d24",
          "message": "Add ForwardModelStepWarning class",
          "timestamp": "2024-09-19T13:04:34+02:00",
          "tree_id": "9e1caa37ef0942f022c5e6321432297caa73a3c9",
          "url": "https://github.com/equinor/ert/commit/6ba0e7875aab0d8808504b22326f15c844f92d24"
        },
        "date": 1726743981792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18390398874555386,
            "unit": "iter/sec",
            "range": "stddev: 0.029670179240674895",
            "extra": "mean: 5.437619960399997 sec\nrounds: 5"
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
          "id": "8fea58cbc5744950b737324ff286a8e4ee81aa55",
          "message": "Compresss ecl-files",
          "timestamp": "2024-09-19T14:29:04+02:00",
          "tree_id": "23cca97611899e53274dcc663f3de7f518959d7f",
          "url": "https://github.com/equinor/ert/commit/8fea58cbc5744950b737324ff286a8e4ee81aa55"
        },
        "date": 1726749053369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18596356355431395,
            "unit": "iter/sec",
            "range": "stddev: 0.021227801788652717",
            "extra": "mean: 5.377397490599992 sec\nrounds: 5"
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
          "id": "7bf375480e5d1af6ed8dced264d0f0e3d4f87123",
          "message": "Add cpu_seconds to MemoryStatus report sent from the runner",
          "timestamp": "2024-09-19T15:20:35+02:00",
          "tree_id": "7d0a3f6ee5de32d98fb6a62639419a1b02361555",
          "url": "https://github.com/equinor/ert/commit/7bf375480e5d1af6ed8dced264d0f0e3d4f87123"
        },
        "date": 1726752142677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1851814783663811,
            "unit": "iter/sec",
            "range": "stddev: 0.03185179798827049",
            "extra": "mean: 5.400108093000005 sec\nrounds: 5"
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
          "id": "13e9a1c9ae416fafefb697a7158629f59f5ba2c0",
          "message": "Add test for not mistaking E100 crashes for license",
          "timestamp": "2024-09-19T15:59:24+02:00",
          "tree_id": "67a9d0721ba75e308379b0d32b8bbdeb307a1786",
          "url": "https://github.com/equinor/ert/commit/13e9a1c9ae416fafefb697a7158629f59f5ba2c0"
        },
        "date": 1726754478067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18566429969469475,
            "unit": "iter/sec",
            "range": "stddev: 0.030363240431631404",
            "extra": "mean: 5.386065073600008 sec\nrounds: 5"
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
          "id": "ce4149b7ddd27dedc635ae8be6c48b83b48b8ad9",
          "message": "Change default experiment/ensemble to new_experiment/ensemble",
          "timestamp": "2024-09-19T16:51:51+02:00",
          "tree_id": "c23c59733c8bf5e2b44fed5f434d5e946425c8f7",
          "url": "https://github.com/equinor/ert/commit/ce4149b7ddd27dedc635ae8be6c48b83b48b8ad9"
        },
        "date": 1726757615865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18969895535984,
            "unit": "iter/sec",
            "range": "stddev: 0.036525157554994025",
            "extra": "mean: 5.271510315399996 sec\nrounds: 5"
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
          "id": "27648a79b38656a1baaefcd70622bf561377e0a8",
          "message": "Add dark storage test for summary response",
          "timestamp": "2024-09-20T08:52:14+02:00",
          "tree_id": "30fca7e40d305a3bc93aa0dfd5af808b07eb5a58",
          "url": "https://github.com/equinor/ert/commit/27648a79b38656a1baaefcd70622bf561377e0a8"
        },
        "date": 1726815240283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18586072143326968,
            "unit": "iter/sec",
            "range": "stddev: 0.0252466397722053",
            "extra": "mean: 5.3803729603999955 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}