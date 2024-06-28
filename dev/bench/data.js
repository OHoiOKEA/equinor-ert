window.BENCHMARK_DATA = {
  "lastUpdate": 1719580559484,
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
          "id": "216a6e5402db7edf604ea1aeab9f8744a808200a",
          "message": "Deprecate NUM_NODES and NUM_CPUS_PER_NODE\n\nNUM_NODES is for submitting multi-machine jobs, which is out of scope\nfor Ert. This feature is to be removed. Following that NUM_CPUS_PER_NODE\nbecomes equivalent to NUM_CPU which is what the users should migrate to.",
          "timestamp": "2024-06-21T13:48:08+02:00",
          "tree_id": "e3227e6c436a667a6501e173b1cea55bce8ebfd7",
          "url": "https://github.com/equinor/ert/commit/216a6e5402db7edf604ea1aeab9f8744a808200a"
        },
        "date": 1718970679439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16993132511829634,
            "unit": "iter/sec",
            "range": "stddev: 0.06308192517426102",
            "extra": "mean: 5.884730194999998 sec\nrounds: 5"
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
          "id": "d577b9bfe74ebe8db2fe3f80782f259574098f74",
          "message": "Remove type spec for run models",
          "timestamp": "2024-06-21T13:55:11+02:00",
          "tree_id": "27a29141f413df4e535720475f90429ce0a9edc0",
          "url": "https://github.com/equinor/ert/commit/d577b9bfe74ebe8db2fe3f80782f259574098f74"
        },
        "date": 1718971105113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16738146175620064,
            "unit": "iter/sec",
            "range": "stddev: 0.05418120660540095",
            "extra": "mean: 5.9743772668000075 sec\nrounds: 5"
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
          "id": "56899c1c59725d23ffbace8ba4810f5d8dc6c797",
          "message": "Remove EnsembleBuilder",
          "timestamp": "2024-06-21T15:20:57+02:00",
          "tree_id": "c0b5d8bab58c5b256cf29576e62f28b1e6a106d0",
          "url": "https://github.com/equinor/ert/commit/56899c1c59725d23ffbace8ba4810f5d8dc6c797"
        },
        "date": 1718976262014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16718833913582934,
            "unit": "iter/sec",
            "range": "stddev: 0.029413495762882748",
            "extra": "mean: 5.981278390399984 sec\nrounds: 5"
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
          "id": "67b0e46b4a467bf12292112dd04ba0e593538320",
          "message": "Convert dict access of ForwardModel to get to avoid segfaults",
          "timestamp": "2024-06-21T19:06:22+02:00",
          "tree_id": "8d17bca9b22dd1617a15f115446764318d43739c",
          "url": "https://github.com/equinor/ert/commit/67b0e46b4a467bf12292112dd04ba0e593538320"
        },
        "date": 1718989782449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16270349563787181,
            "unit": "iter/sec",
            "range": "stddev: 0.03384127830535646",
            "extra": "mean: 6.146149448600011 sec\nrounds: 5"
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
          "id": "06412db9ffe4a54a0ce81751ebea7da0f24f8cf2",
          "message": "Create unique experiment names for GUI",
          "timestamp": "2024-06-24T07:48:20+02:00",
          "tree_id": "3040e2ff7c814ce21a4cf832f735b2b031789a7e",
          "url": "https://github.com/equinor/ert/commit/06412db9ffe4a54a0ce81751ebea7da0f24f8cf2"
        },
        "date": 1719208307586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16899320656837444,
            "unit": "iter/sec",
            "range": "stddev: 0.019695774394983486",
            "extra": "mean: 5.9173976297999955 sec\nrounds: 5"
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
          "id": "50552e5e6b92e13607da1b65ef57ff85d24aca01",
          "message": "Add slurm driver for scheduler",
          "timestamp": "2024-06-24T14:10:16+02:00",
          "tree_id": "09cab0ca70569a03992ad7dbd891195672eae4fa",
          "url": "https://github.com/equinor/ert/commit/50552e5e6b92e13607da1b65ef57ff85d24aca01"
        },
        "date": 1719231212199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16937501826817544,
            "unit": "iter/sec",
            "range": "stddev: 0.025426155558969477",
            "extra": "mean: 5.904058403800002 sec\nrounds: 5"
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
          "id": "839a23ba0ad6796d2985617f2a091adb1f870712",
          "message": "Type check ert.gui",
          "timestamp": "2024-06-24T12:24:21Z",
          "tree_id": "7dcf4784616c4cee4852ccb05bfe7543ddf6237e",
          "url": "https://github.com/equinor/ert/commit/839a23ba0ad6796d2985617f2a091adb1f870712"
        },
        "date": 1719232056631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1691621117084615,
            "unit": "iter/sec",
            "range": "stddev: 0.005382480128510347",
            "extra": "mean: 5.911489221199997 sec\nrounds: 5"
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
          "id": "621423d7e4e9d7ce06a187f43c10a922683959c7",
          "message": "Use existing fns to check if params/responses exist",
          "timestamp": "2024-06-24T15:16:17+02:00",
          "tree_id": "51d6376eb95d4e3ec5a6aa3dbc44b70f6ae877dd",
          "url": "https://github.com/equinor/ert/commit/621423d7e4e9d7ce06a187f43c10a922683959c7"
        },
        "date": 1719235178426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16961910185527876,
            "unit": "iter/sec",
            "range": "stddev: 0.013268229965529468",
            "extra": "mean: 5.895562404600002 sec\nrounds: 5"
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
          "id": "68a360f7da2eae0f90996c5a9970bfdaeaaced5f",
          "message": "Restructure ensemble evaluator",
          "timestamp": "2024-06-25T09:20:30+02:00",
          "tree_id": "ce9aba91e8f98ef12aecfcd4187c14d1154789b8",
          "url": "https://github.com/equinor/ert/commit/68a360f7da2eae0f90996c5a9970bfdaeaaced5f"
        },
        "date": 1719300225720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17109835638953788,
            "unit": "iter/sec",
            "range": "stddev: 0.022721392345337082",
            "extra": "mean: 5.844591503400011 sec\nrounds: 5"
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
          "id": "e1e3281197d57a0c540ecb1a3a219c8b25a45524",
          "message": "Update docs of FIELD keyword",
          "timestamp": "2024-06-25T09:20:52+02:00",
          "tree_id": "6dcb66736d61c9c8f6e3d723ad3f95f016b2881e",
          "url": "https://github.com/equinor/ert/commit/e1e3281197d57a0c540ecb1a3a219c8b25a45524"
        },
        "date": 1719300249462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.165900123377002,
            "unit": "iter/sec",
            "range": "stddev: 0.022057538856138502",
            "extra": "mean: 6.027723063999997 sec\nrounds: 5"
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
          "id": "930dbcde0db295a27cfb533d72d0a8aaad55bacb",
          "message": "Remove dead test utility code\n\nThis class is not used, looks like a remnant from Slurm testing",
          "timestamp": "2024-06-25T09:21:10+02:00",
          "tree_id": "f27023669954480437d10d5ec7d2eefd44e723c9",
          "url": "https://github.com/equinor/ert/commit/930dbcde0db295a27cfb533d72d0a8aaad55bacb"
        },
        "date": 1719300282405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1675347597742083,
            "unit": "iter/sec",
            "range": "stddev: 0.025490262380036387",
            "extra": "mean: 5.968910579199985 sec\nrounds: 5"
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
          "id": "204b3f0eecdacd3df7a710d90ebbe4724af319ab",
          "message": "Move driver option names to queue_config\n\nThe drivers should not be responsible for defining how the drivers should\nbe configured in the config system, they should only expose an API",
          "timestamp": "2024-06-25T09:53:45+02:00",
          "tree_id": "03ec051e95ad80022ab3d767c257be49c3194a53",
          "url": "https://github.com/equinor/ert/commit/204b3f0eecdacd3df7a710d90ebbe4724af319ab"
        },
        "date": 1719302219916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16756251024280144,
            "unit": "iter/sec",
            "range": "stddev: 0.043873882986427984",
            "extra": "mean: 5.967922052199981 sec\nrounds: 5"
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
          "id": "d5edb15b22192ece78f6c803786ea0b8a1c94fa8",
          "message": "Sort output of expand wildards and add tests",
          "timestamp": "2024-06-25T10:05:22+02:00",
          "tree_id": "1bb2fb6f42839c75f751fb50e4e30050e1d34193",
          "url": "https://github.com/equinor/ert/commit/d5edb15b22192ece78f6c803786ea0b8a1c94fa8"
        },
        "date": 1719302918509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16900245058971575,
            "unit": "iter/sec",
            "range": "stddev: 0.04536608043902957",
            "extra": "mean: 5.9170739626 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "114403625+andreas-el@users.noreply.github.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7281a9340f7d31a1835b11af849d98740bdfa2de",
          "message": "Refactor realization delegate\n\nUse circular delegate, with queue color in middle and progress for fm-steps",
          "timestamp": "2024-06-25T11:52:37+02:00",
          "tree_id": "49c1a2a8521414648392e93e9c1c2184dcd1c4a2",
          "url": "https://github.com/equinor/ert/commit/7281a9340f7d31a1835b11af849d98740bdfa2de"
        },
        "date": 1719309362029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16421107428461795,
            "unit": "iter/sec",
            "range": "stddev: 0.02652365600001236",
            "extra": "mean: 6.089723268400007 sec\nrounds: 5"
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
          "id": "51c751ab9b2445520e87097f67fdeaf4056c8228",
          "message": "Add NPY to ruff rules with some numpy 2 support",
          "timestamp": "2024-06-25T16:44:19+02:00",
          "tree_id": "ce41b95b53a57be71e703575ac0efea67b1b9ab2",
          "url": "https://github.com/equinor/ert/commit/51c751ab9b2445520e87097f67fdeaf4056c8228"
        },
        "date": 1719326850340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1699616952143663,
            "unit": "iter/sec",
            "range": "stddev: 0.022927937456007175",
            "extra": "mean: 5.883678665000002 sec\nrounds: 5"
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
          "id": "abb9957f5e05c33cc606e3bb5bec448a36d9ee97",
          "message": "Fix issue with netCDF4",
          "timestamp": "2024-06-26T10:20:42+02:00",
          "tree_id": "1b22af1a72cd757e1e4d636831c3fe8e439da4fb",
          "url": "https://github.com/equinor/ert/commit/abb9957f5e05c33cc606e3bb5bec448a36d9ee97"
        },
        "date": 1719390251128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16961007515043786,
            "unit": "iter/sec",
            "range": "stddev: 0.02631761339656019",
            "extra": "mean: 5.895876168400003 sec\nrounds: 5"
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
          "id": "8a2fa40d366b85ff1650c7b9d9ebf749f1f59670",
          "message": "Fix max_memory updated correctly",
          "timestamp": "2024-06-27T09:13:52+02:00",
          "tree_id": "43c178b2a8604b5e9aa215977629a32bcc3124c0",
          "url": "https://github.com/equinor/ert/commit/8a2fa40d366b85ff1650c7b9d9ebf749f1f59670"
        },
        "date": 1719472650517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1664705423880731,
            "unit": "iter/sec",
            "range": "stddev: 0.0900404626342827",
            "extra": "mean: 6.007068792199993 sec\nrounds: 5"
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
          "id": "20fbc2bde52e11196925e90bd7f64bb4e8a6583e",
          "message": "Set default exit code to 1 in LocalDriver\n\nSince the exceptions are handled only in the driver.finish, this has\ncaused realizations to be flagged as completed ragardless. Here we\nadditionally log the exception if it happens.\nAdditionally this moves driver finish to try section in monitoring the jobs in order to allow for background tasks to finish if exception happens.",
          "timestamp": "2024-06-27T11:39:39+02:00",
          "tree_id": "a56a4342713fab155794aacd2e5d119593e1ba5b",
          "url": "https://github.com/equinor/ert/commit/20fbc2bde52e11196925e90bd7f64bb4e8a6583e"
        },
        "date": 1719481377632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16574523814766154,
            "unit": "iter/sec",
            "range": "stddev: 0.0288007683355679",
            "extra": "mean: 6.033355836800001 sec\nrounds: 5"
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
          "id": "1703a30a0dbfaf2f627259f9c2659373e3f451c4",
          "message": "Remove function only called in test",
          "timestamp": "2024-06-27T11:59:00+02:00",
          "tree_id": "9a8b0e6db71cb2b843aff6f22cf08cf59b16ff98",
          "url": "https://github.com/equinor/ert/commit/1703a30a0dbfaf2f627259f9c2659373e3f451c4"
        },
        "date": 1719482536680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16887131189392207,
            "unit": "iter/sec",
            "range": "stddev: 0.01963591057403041",
            "extra": "mean: 5.921668925200026 sec\nrounds: 5"
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
          "id": "ff9cf1844f07b3a6b7d403d505e06eead90b0b0d",
          "message": "Fix phase count for es_mda",
          "timestamp": "2024-06-27T13:56:23+02:00",
          "tree_id": "d84994c3cc81a696fab1cc457afa18dc5171d0d8",
          "url": "https://github.com/equinor/ert/commit/ff9cf1844f07b3a6b7d403d505e06eead90b0b0d"
        },
        "date": 1719489579892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16827289933848588,
            "unit": "iter/sec",
            "range": "stddev: 0.01606521519919624",
            "extra": "mean: 5.942727580799987 sec\nrounds: 5"
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
          "id": "2ce20800e12006202828c3e7e657c13fb96e0c6f",
          "message": "Add blue color and underscore to STDOUT and STDERR in job view",
          "timestamp": "2024-06-27T13:58:11+02:00",
          "tree_id": "585ff1dae84ea555c2a5e3b07aa43f296a1a8c22",
          "url": "https://github.com/equinor/ert/commit/2ce20800e12006202828c3e7e657c13fb96e0c6f"
        },
        "date": 1719489681638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16861260493384803,
            "unit": "iter/sec",
            "range": "stddev: 0.031629463909139524",
            "extra": "mean: 5.930754704799983 sec\nrounds: 5"
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
          "id": "ae913f7cf9da08c3632ea347f29e94bda53fa354",
          "message": "Add top-level exports for everest & semeio",
          "timestamp": "2024-06-28T08:36:33+02:00",
          "tree_id": "9ba318d5ad8550f81f7852504b3a0eadde2da384",
          "url": "https://github.com/equinor/ert/commit/ae913f7cf9da08c3632ea347f29e94bda53fa354"
        },
        "date": 1719556784227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1695841805230881,
            "unit": "iter/sec",
            "range": "stddev: 0.034855123510583806",
            "extra": "mean: 5.896776438199993 sec\nrounds: 5"
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
          "id": "4633f65c312c4558271436a42a53290c458219ab",
          "message": "Fix bug in LSF driver resource manipulation\n\nIf both select and rusage was part of the existing resource string,\nand some hosts were attempted excluded, the previous code would inject\nthe exclusion string at the wrong spot, failing to locate the correct\nend of the select statement.\n\nAdded tests that triggers the original bug.",
          "timestamp": "2024-06-28T09:02:04+02:00",
          "tree_id": "dbbd101945169baaf2e239db8c7eb56445d51bc0",
          "url": "https://github.com/equinor/ert/commit/4633f65c312c4558271436a42a53290c458219ab"
        },
        "date": 1719558312101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1689290982040032,
            "unit": "iter/sec",
            "range": "stddev: 0.04456094428427689",
            "extra": "mean: 5.919643274200007 sec\nrounds: 5"
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
          "id": "2193e75abd1f72a620f16d0edd73049dbda0c42c",
          "message": "Fix pydantic warning in snapshot test",
          "timestamp": "2024-06-28T09:39:51+02:00",
          "tree_id": "6f5f2f8d8313d9257c900af82301b8c6933c133d",
          "url": "https://github.com/equinor/ert/commit/2193e75abd1f72a620f16d0edd73049dbda0c42c"
        },
        "date": 1719560584858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16897790138611304,
            "unit": "iter/sec",
            "range": "stddev: 0.040274184331937836",
            "extra": "mean: 5.917933598399998 sec\nrounds: 5"
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
          "id": "b3b595022862b4131a2357053e307368ff507494",
          "message": "Align Slurm polling period with LSF, 2 seconds\n\n10 seconds is quite conservative, and makes integration tests go slow",
          "timestamp": "2024-06-28T12:34:31+02:00",
          "tree_id": "5de7fb223e6d944160b3e4543989c612d5b547a0",
          "url": "https://github.com/equinor/ert/commit/b3b595022862b4131a2357053e307368ff507494"
        },
        "date": 1719571062085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16495510740615596,
            "unit": "iter/sec",
            "range": "stddev: 0.01889182208777844",
            "extra": "mean: 6.062255456800005 sec\nrounds: 5"
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
          "id": "01edfa95385ba4420ba9f9116562cca242bf4224",
          "message": "Catch XML errors when logging error file\n\nIt is not critical that this ERROR file is valid XML, it just means the user\nparsing the log must decipher XML manually.",
          "timestamp": "2024-06-28T13:08:07+02:00",
          "tree_id": "ce3c63c4fa869f696e26dfb2b210b905d5f150f7",
          "url": "https://github.com/equinor/ert/commit/01edfa95385ba4420ba9f9116562cca242bf4224"
        },
        "date": 1719573068645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16367552078110428,
            "unit": "iter/sec",
            "range": "stddev: 0.0545871176727262",
            "extra": "mean: 6.109649110799995 sec\nrounds: 5"
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
          "id": "98c9b5dd84907f6413bed7472ccbf24ae56f1a3a",
          "message": "Ensure unique parameter & response names in test",
          "timestamp": "2024-06-28T13:45:59+02:00",
          "tree_id": "dbdc1fae74de5fa19029c7faa9ffcb0dbba63839",
          "url": "https://github.com/equinor/ert/commit/98c9b5dd84907f6413bed7472ccbf24ae56f1a3a"
        },
        "date": 1719575347519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16603960392818484,
            "unit": "iter/sec",
            "range": "stddev: 0.037562846534819276",
            "extra": "mean: 6.022659512199982 sec\nrounds: 5"
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
          "id": "892f91e327eabc5356689d51d11c6c21262924fd",
          "message": "Add validation for FIELD parameter name",
          "timestamp": "2024-06-28T14:39:59+02:00",
          "tree_id": "b274cbb0df34cba82c9c513f6f2b0a400cb2f63e",
          "url": "https://github.com/equinor/ert/commit/892f91e327eabc5356689d51d11c6c21262924fd"
        },
        "date": 1719578731654,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16587614934156575,
            "unit": "iter/sec",
            "range": "stddev: 0.02781107773699959",
            "extra": "mean: 6.028594249199978 sec\nrounds: 5"
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
          "id": "251537eb58f3fe4617b898f69456cd6c1d5a51f7",
          "message": "Make circles more antialiased and allow dark mode",
          "timestamp": "2024-06-28T14:54:10+02:00",
          "tree_id": "c45143d0059f7742e712d57e7ab97d44a965cb82",
          "url": "https://github.com/equinor/ert/commit/251537eb58f3fe4617b898f69456cd6c1d5a51f7"
        },
        "date": 1719579436131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17198593127179168,
            "unit": "iter/sec",
            "range": "stddev: 0.015037742398529152",
            "extra": "mean: 5.814429079200011 sec\nrounds: 5"
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
          "id": "a9db74173eabd8b897129811f86048d02b48e478",
          "message": "Mitigate flakyness in test_slurm_driver\n\nThe flakyness was easily reproducible with --count=100 -n 16, but after\nadding reruns the flakyness cannot be reproduced, so assuming reruns is\nsufficient (this was with mocked Slurm system, not with the --slurm\noption to pytest).\n\nSince we have added reruns, we can reduce the job_kill_window when doing\nreal integration tests also.",
          "timestamp": "2024-06-28T15:12:40+02:00",
          "tree_id": "0bc5363297843636fa590bdae82709e1c939453b",
          "url": "https://github.com/equinor/ert/commit/a9db74173eabd8b897129811f86048d02b48e478"
        },
        "date": 1719580558921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16751443025067705,
            "unit": "iter/sec",
            "range": "stddev: 0.047306154960501064",
            "extra": "mean: 5.96963496520001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}