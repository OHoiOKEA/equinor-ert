window.BENCHMARK_DATA = {
  "lastUpdate": 1726559012321,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "fd5fa70e0fbc7875e0dd7d802f8121d10e491645",
          "message": "Fix deprecation warning second argument of ws_handler",
          "timestamp": "2024-09-09T15:02:46+02:00",
          "tree_id": "84dfd72bfa7c8e54635e25405340f5a333b79cc0",
          "url": "https://github.com/equinor/ert/commit/fd5fa70e0fbc7875e0dd7d802f8121d10e491645"
        },
        "date": 1725887172333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.186177311230498,
            "unit": "iter/sec",
            "range": "stddev: 0.025243677886965108",
            "extra": "mean: 5.371223772600001 sec\nrounds: 5"
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
          "id": "e0e9d9760baa32b971121a5e1f0e149c810e1c7c",
          "message": "Refactor Slurm error-handling",
          "timestamp": "2024-09-10T11:53:00+02:00",
          "tree_id": "c0b6336a7a589849cd8ef46f660935a535d08ce0",
          "url": "https://github.com/equinor/ert/commit/e0e9d9760baa32b971121a5e1f0e149c810e1c7c"
        },
        "date": 1725962134777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1931673207263527,
            "unit": "iter/sec",
            "range": "stddev: 0.02056831507904121",
            "extra": "mean: 5.176859089000016 sec\nrounds: 5"
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
          "id": "54e339cf257800aae33c4e23f995ec5241f74bbe",
          "message": "Cleanup SETENV documentation\n\nLSF is not related to this.",
          "timestamp": "2024-09-10T14:55:47+02:00",
          "tree_id": "771e997167f1148a10493b6636bc35c09d7dc287",
          "url": "https://github.com/equinor/ert/commit/54e339cf257800aae33c4e23f995ec5241f74bbe"
        },
        "date": 1725973102042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19270266016400708,
            "unit": "iter/sec",
            "range": "stddev: 0.04782572253017489",
            "extra": "mean: 5.189341959000001 sec\nrounds: 5"
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
          "id": "6d0a6af761a4fba52b4bd0bbd7560599653bb3fd",
          "message": "Include experiment name in ensemble selector",
          "timestamp": "2024-09-10T15:12:33+02:00",
          "tree_id": "776f033faf1365a77233e4319628c2baf4e127d7",
          "url": "https://github.com/equinor/ert/commit/6d0a6af761a4fba52b4bd0bbd7560599653bb3fd"
        },
        "date": 1725974104414,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18921705561352062,
            "unit": "iter/sec",
            "range": "stddev: 0.030964671571169482",
            "extra": "mean: 5.284935846599995 sec\nrounds: 5"
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
          "id": "b85f6cfca78d2469ddde5df55c27287e5f53f73a",
          "message": "Fix error in job dispatch's memory reporting\n\nUpdated the test so that it will not work if process is counted number\nof child processes times.",
          "timestamp": "2024-09-10T16:04:04+02:00",
          "tree_id": "99e643283e852eeac43db6b81ac6e7f3bdee4874",
          "url": "https://github.com/equinor/ert/commit/b85f6cfca78d2469ddde5df55c27287e5f53f73a"
        },
        "date": 1725977210413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18657445090693955,
            "unit": "iter/sec",
            "range": "stddev: 0.04006369241290473",
            "extra": "mean: 5.35979066340002 sec\nrounds: 5"
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
      }
    ]
  }
}