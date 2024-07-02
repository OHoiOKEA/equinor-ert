window.BENCHMARK_DATA = {
  "lastUpdate": 1719928124648,
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
          "id": "3838267b629f9c0b0ff741bc72f967efa60886d3",
          "message": "Document auto scaling",
          "timestamp": "2024-07-01T08:23:37+02:00",
          "tree_id": "033875f7223eb1fa1dc7b8a867020c744c02b4ff",
          "url": "https://github.com/equinor/ert/commit/3838267b629f9c0b0ff741bc72f967efa60886d3"
        },
        "date": 1719815223761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16645086424194644,
            "unit": "iter/sec",
            "range": "stddev: 0.03370597068134903",
            "extra": "mean: 6.007778959599989 sec\nrounds: 5"
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
          "id": "f9dc451d9dc4348d36b99abfca11fd0470bb95cf",
          "message": "Add C4 and ASYNC to ruff rules\n\n- Also updates the pre-commit hooks",
          "timestamp": "2024-07-01T13:23:52+02:00",
          "tree_id": "b3e8de1957c51ef4189240678bd9e60ce88afb21",
          "url": "https://github.com/equinor/ert/commit/f9dc451d9dc4348d36b99abfca11fd0470bb95cf"
        },
        "date": 1719833228223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1686595672334705,
            "unit": "iter/sec",
            "range": "stddev: 0.01877289409120892",
            "extra": "mean: 5.929103319799992 sec\nrounds: 5"
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
          "id": "7c532dcd1d0a5f21087394d68aab67a338f9fe21",
          "message": "Output the number of reals running in existing runpaths",
          "timestamp": "2024-07-01T15:21:09+02:00",
          "tree_id": "71329b9795b9ab13ca717691e1150c97a4408a9c",
          "url": "https://github.com/equinor/ert/commit/7c532dcd1d0a5f21087394d68aab67a338f9fe21"
        },
        "date": 1719840267446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16862149072423022,
            "unit": "iter/sec",
            "range": "stddev: 0.03306761816989064",
            "extra": "mean: 5.930442173799998 sec\nrounds: 5"
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
          "id": "a22774ececbf2ab3edaa2065d3ea3f8d1562fec9",
          "message": "Make sure adaptive localization works with single observation\n\nMake sure adaptive localization works with single observation",
          "timestamp": "2024-07-02T08:29:08+02:00",
          "tree_id": "4dc04c12b3ced29d5200367c3a203655d3a1e0a8",
          "url": "https://github.com/equinor/ert/commit/a22774ececbf2ab3edaa2065d3ea3f8d1562fec9"
        },
        "date": 1719901934187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16925498171835124,
            "unit": "iter/sec",
            "range": "stddev: 0.05394041582656107",
            "extra": "mean: 5.908245594000005 sec\nrounds: 5"
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
          "id": "f529971b9dcaf19c7f786ffa3e39c5d4eebda853",
          "message": "Fix restart for ensemble experiment",
          "timestamp": "2024-07-02T10:08:52+02:00",
          "tree_id": "04ac9255656284347a6ef976a0f2121183cced59",
          "url": "https://github.com/equinor/ert/commit/f529971b9dcaf19c7f786ffa3e39c5d4eebda853"
        },
        "date": 1719907939909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.166826130398474,
            "unit": "iter/sec",
            "range": "stddev: 0.022699518320138504",
            "extra": "mean: 5.994264793000002 sec\nrounds: 5"
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
          "id": "3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5",
          "message": "Avoid imports from job_queue\n\njob_queue module is going away soon.",
          "timestamp": "2024-07-02T15:38:47+02:00",
          "tree_id": "90ec4d50078277140d8d81a08ea8d8c7f3569c65",
          "url": "https://github.com/equinor/ert/commit/3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5"
        },
        "date": 1719927731939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1715129349503157,
            "unit": "iter/sec",
            "range": "stddev: 0.028807641455352834",
            "extra": "mean: 5.8304640421999805 sec\nrounds: 5"
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
          "id": "939e661f6b4b011fd90c30d5da16cb379241af8e",
          "message": "Avoid unused varibles in test_slurm_driver",
          "timestamp": "2024-07-02T15:45:25+02:00",
          "tree_id": "68d011736ea73ccc0745764bd956e5624c298647",
          "url": "https://github.com/equinor/ert/commit/939e661f6b4b011fd90c30d5da16cb379241af8e"
        },
        "date": 1719928123785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16724514252789935,
            "unit": "iter/sec",
            "range": "stddev: 0.0430715670160223",
            "extra": "mean: 5.979246899999998 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}