window.BENCHMARK_DATA = {
  "lastUpdate": 1726647898757,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "committer": {
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "distinct": true,
          "id": "27b73d74ea4588de11009e4a5aa9e3905e569240",
          "message": "Update install instructions after c code removal",
          "timestamp": "2024-09-10T16:31:36+02:00",
          "tree_id": "7dfcb8c4df00024bcaf78449f748e25820ea2379",
          "url": "https://github.com/equinor/ert/commit/27b73d74ea4588de11009e4a5aa9e3905e569240"
        },
        "date": 1725978851514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18815655636658118,
            "unit": "iter/sec",
            "range": "stddev: 0.03467182717563992",
            "extra": "mean: 5.314723118399991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "committer": {
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "distinct": true,
          "id": "5a83805c3c4b258abf43e95f153c4bd714d2bf4b",
          "message": "Fix ert logo on PyPi",
          "timestamp": "2024-09-10T16:37:54+02:00",
          "tree_id": "72e6f89b6ff5de43cccdff8ac07325d9e2dfe5af",
          "url": "https://github.com/equinor/ert/commit/5a83805c3c4b258abf43e95f153c4bd714d2bf4b"
        },
        "date": 1725979223141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19015894527972554,
            "unit": "iter/sec",
            "range": "stddev: 0.04030817900503131",
            "extra": "mean: 5.258758658599999 sec\nrounds: 5"
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
          "id": "30b9246111296a591b9942e3f836122fc872b01c",
          "message": "Avoid crashing while cleaning up tmp-directory",
          "timestamp": "2024-09-10T17:32:36+02:00",
          "tree_id": "eab23bc231e73deeaf72de6bde916b4d4dfeada7",
          "url": "https://github.com/equinor/ert/commit/30b9246111296a591b9942e3f836122fc872b01c"
        },
        "date": 1725982513204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19078430587281553,
            "unit": "iter/sec",
            "range": "stddev: 0.05813957669161882",
            "extra": "mean: 5.241521284600003 sec\nrounds: 5"
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
          "id": "c00cadd0ad9ccdd385745ea700dc79696e996fc5",
          "message": "Rename Snapshot to EnsembleSnapshot\n\nRename ForwardModel to FMStepSnapshot\nFix references to job and forward model where it should be forward model step.",
          "timestamp": "2024-09-11T08:45:25+02:00",
          "tree_id": "dcca8ed058c22b261d3f686b285c82b1702199c4",
          "url": "https://github.com/equinor/ert/commit/c00cadd0ad9ccdd385745ea700dc79696e996fc5"
        },
        "date": 1726037280609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19482345633644774,
            "unit": "iter/sec",
            "range": "stddev: 0.062166852036857276",
            "extra": "mean: 5.132852166799995 sec\nrounds: 5"
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
          "id": "22e95fc95cc6fb37e779775de94009b4e2b1fefa",
          "message": "Add 10.3.1 and 10.2.8 storages to migration tests",
          "timestamp": "2024-09-11T11:39:37+02:00",
          "tree_id": "e4e30bd2f99e3e203afe0e99d0ae651a925d9367",
          "url": "https://github.com/equinor/ert/commit/22e95fc95cc6fb37e779775de94009b4e2b1fefa"
        },
        "date": 1726047729483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19009742468872914,
            "unit": "iter/sec",
            "range": "stddev: 0.03402074528502555",
            "extra": "mean: 5.2604605330000025 sec\nrounds: 5"
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
          "id": "1cd56d483001008b51df169c61d469cce932dd28",
          "message": "Remove excess check_response call in std_dev_for_parameter\n\nThe `std_dev_for_parameter` method manually checks if the response's status_code is\n200 OK and decides what to do if it is not. Calling the `check_response`\nmethod raises an exception if it is not 200 OK, which is a valid\nresponse in this case.",
          "timestamp": "2024-09-11T13:49:42+02:00",
          "tree_id": "2527f6012a722365cea10bda02b7282f4c3f9b8f",
          "url": "https://github.com/equinor/ert/commit/1cd56d483001008b51df169c61d469cce932dd28"
        },
        "date": 1726055543371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1876858624708561,
            "unit": "iter/sec",
            "range": "stddev: 0.020536324697251893",
            "extra": "mean: 5.328051814000003 sec\nrounds: 5"
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
          "id": "a7b09b714f18c1b224fb89e1e843f34548c94fd4",
          "message": "Remove unused function from local_ensemble",
          "timestamp": "2024-09-12T08:57:58+02:00",
          "tree_id": "df54d6ade4167bc821203dace2e4e65856aaaab7",
          "url": "https://github.com/equinor/ert/commit/a7b09b714f18c1b224fb89e1e843f34548c94fd4"
        },
        "date": 1726124426843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18874232833940313,
            "unit": "iter/sec",
            "range": "stddev: 0.035508072033931457",
            "extra": "mean: 5.298228589200005 sec\nrounds: 5"
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
          "id": "c241244fb40d796f42b626788820831005ca9faf",
          "message": "Make copy_directories error message readable",
          "timestamp": "2024-09-13T09:28:36+02:00",
          "tree_id": "c85b31325c356ad9c851127ea0adbd5af6ab1509",
          "url": "https://github.com/equinor/ert/commit/c241244fb40d796f42b626788820831005ca9faf"
        },
        "date": 1726212666909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18888153453407996,
            "unit": "iter/sec",
            "range": "stddev: 0.04428449788065644",
            "extra": "mean: 5.294323780600001 sec\nrounds: 5"
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
          "id": "d8b17e4c7d1211cea135341501856028b77cccce",
          "message": "Add EnsemblePlot support for rate plotting drawing\n\n - exploits \"steps-pre\" drawing style\n - tests that draw_style is set correctly",
          "timestamp": "2024-09-13T10:29:20+02:00",
          "tree_id": "55cf0db5988b46734daa406b57329ec3a807c2f8",
          "url": "https://github.com/equinor/ert/commit/d8b17e4c7d1211cea135341501856028b77cccce"
        },
        "date": 1726216316361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19154372052463203,
            "unit": "iter/sec",
            "range": "stddev: 0.050246017748829475",
            "extra": "mean: 5.220740190599997 sec\nrounds: 5"
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
          "id": "d347cb41773f4ac621067578af377034d700662f",
          "message": "Use FORWARD_MODEL in poly-example\n\nNo need to use the keyword SIMULATION_JOB that no users use.",
          "timestamp": "2024-09-13T15:55:11+02:00",
          "tree_id": "cadbbd7e0e9c91daee1fefd9735187fef6a2cea8",
          "url": "https://github.com/equinor/ert/commit/d347cb41773f4ac621067578af377034d700662f"
        },
        "date": 1726235864637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1896100708718222,
            "unit": "iter/sec",
            "range": "stddev: 0.03518910957376801",
            "extra": "mean: 5.273981468399995 sec\nrounds: 5"
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
          "id": "aea8e671938e256d53f8186c86866553062c0ed3",
          "message": "Fix general options overwriting queue options\n\nThis commit fixes the issue where the general options `MAX_RUNNING` and\n`SUBMIT_SLEEP` would have priority over the equivalent QUEUE_OPTIONS.\nIt also makes the options set in user config for those keywords take\nprecedence over what is set in site config.",
          "timestamp": "2024-09-16T08:43:19+02:00",
          "tree_id": "256b92c3ecba837e99f1ece25fcdaf7e77857131",
          "url": "https://github.com/equinor/ert/commit/aea8e671938e256d53f8186c86866553062c0ed3"
        },
        "date": 1726469153888,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1910784648402455,
            "unit": "iter/sec",
            "range": "stddev: 0.026816969860805704",
            "extra": "mean: 5.233452136200003 sec\nrounds: 5"
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
      }
    ]
  }
}