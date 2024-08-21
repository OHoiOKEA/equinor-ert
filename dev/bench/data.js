window.BENCHMARK_DATA = {
  "lastUpdate": 1724238818825,
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
          "id": "f09843abd34dfe3c762d97f3d917dcf4232146ae",
          "message": "Copy parts of grdecl_io to heat-eq for speed\n\nDon't import ert in heat-eq forward model\r\n\r\nImporting ert increases runtime of ES-MDA from 50s to 2min 30s.",
          "timestamp": "2024-08-16T09:50:15+02:00",
          "tree_id": "d7855253a4704d541161cbe35b80e5a37e37df38",
          "url": "https://github.com/equinor/ert/commit/f09843abd34dfe3c762d97f3d917dcf4232146ae"
        },
        "date": 1723794763436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19508436979347613,
            "unit": "iter/sec",
            "range": "stddev: 0.05142387113676318",
            "extra": "mean: 5.125987289799991 sec\nrounds: 5"
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
          "id": "0da5c9c07cfe7932084ce4e59e73e50d5beaf42d",
          "message": "Fix bug where std dev plots were clipped to 0-1 range\n\nDelete unused ImageOut schema\r\n---------\r\n\r\nCo-authored-by: Eivind Jahren <ejah@equinor.com>",
          "timestamp": "2024-08-16T10:08:11+02:00",
          "tree_id": "c46c10d261b1a363847939e0a2d22eaa82f7f755",
          "url": "https://github.com/equinor/ert/commit/0da5c9c07cfe7932084ce4e59e73e50d5beaf42d"
        },
        "date": 1723795834372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.195160780766407,
            "unit": "iter/sec",
            "range": "stddev: 0.05684919878035646",
            "extra": "mean: 5.123980320599998 sec\nrounds: 5"
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
          "id": "7e64413521646f6b6731abe25db0dc15c615d721",
          "message": "Remove translation between JobState and JobStatus\n\nThis commit moves and renames the legacy jobstatus to\nDeprecatedJobStatus to stay compatible with everest. This should later\nbe removed after everest changes to using the new states from scheduler.",
          "timestamp": "2024-08-16T10:34:18+02:00",
          "tree_id": "2bb22ef3a6fb1ea511f6ed0e0170de6fe800352a",
          "url": "https://github.com/equinor/ert/commit/7e64413521646f6b6731abe25db0dc15c615d721"
        },
        "date": 1723797408353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19073379946942076,
            "unit": "iter/sec",
            "range": "stddev: 0.03688515540061629",
            "extra": "mean: 5.242909241999996 sec\nrounds: 5"
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
          "id": "40ef8c690ad34105fa95d943352ee0b6584e040f",
          "message": "Remove duplicate property",
          "timestamp": "2024-08-16T12:16:28+02:00",
          "tree_id": "882213a2634d1c547f00215bfd42fc949334c7b6",
          "url": "https://github.com/equinor/ert/commit/40ef8c690ad34105fa95d943352ee0b6584e040f"
        },
        "date": 1723803541524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18954576739163972,
            "unit": "iter/sec",
            "range": "stddev: 0.03372304465176374",
            "extra": "mean: 5.275770668799998 sec\nrounds: 5"
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
          "id": "46119ce3cb3fb2ba6c3287d449be78296fc2adeb",
          "message": "Allow user to inhibit tab changes during simulation",
          "timestamp": "2024-08-16T13:01:39+02:00",
          "tree_id": "83d1c933b0f8cadfc303048c21aed35d0644371a",
          "url": "https://github.com/equinor/ert/commit/46119ce3cb3fb2ba6c3287d449be78296fc2adeb"
        },
        "date": 1723806243131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1879867865271316,
            "unit": "iter/sec",
            "range": "stddev: 0.07542440018194917",
            "extra": "mean: 5.3195228157999965 sec\nrounds: 5"
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
          "id": "5b268b413e6adac434938aec2abc1acd4ef3725e",
          "message": "Reverse ensemble order for plotting (#8486)\n\n* Reverse ensemble order for plotting\r\n* update_snapshot\r\n\r\n---------\r\n\r\nCo-authored-by: Eivind Jahren <ejah@equinor.com>",
          "timestamp": "2024-08-16T11:03:10Z",
          "tree_id": "be24100d2a0846050702d2b3f0d2f4d2b94e032d",
          "url": "https://github.com/equinor/ert/commit/5b268b413e6adac434938aec2abc1acd4ef3725e"
        },
        "date": 1723806329365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1928743043071339,
            "unit": "iter/sec",
            "range": "stddev: 0.0424217562717542",
            "extra": "mean: 5.184723821 sec\nrounds: 5"
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
          "id": "24d9d2d844d36ee99f539a1cf4465f940f4b620f",
          "message": "Enforce minimum size on update report widget",
          "timestamp": "2024-08-16T13:29:11+02:00",
          "tree_id": "0b5245da7cda3aef3196a95b898d9cd792644044",
          "url": "https://github.com/equinor/ert/commit/24d9d2d844d36ee99f539a1cf4465f940f4b620f"
        },
        "date": 1723807895468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1925941602468562,
            "unit": "iter/sec",
            "range": "stddev: 0.04496319125843844",
            "extra": "mean: 5.192265428600001 sec\nrounds: 5"
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
          "id": "5d016d9f2f6b9be425e590890f84ff6ff04ae095",
          "message": "Have GUI output callback error  on realization hover",
          "timestamp": "2024-08-16T14:46:41+02:00",
          "tree_id": "f0fb095e95d02c61422533fb22eeed4c7ad6a84f",
          "url": "https://github.com/equinor/ert/commit/5d016d9f2f6b9be425e590890f84ff6ff04ae095"
        },
        "date": 1723812545006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18996671920235547,
            "unit": "iter/sec",
            "range": "stddev: 0.033584059351694874",
            "extra": "mean: 5.264079961999999 sec\nrounds: 5"
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
          "id": "22f5f71aa63e3ad3842027442136dae1990dca01",
          "message": "Remove repr and eq\n\nThese are provided by dataclass",
          "timestamp": "2024-08-16T15:37:40+02:00",
          "tree_id": "a9476dbf7752ba1e4295f58c361ba8ed7e810e6a",
          "url": "https://github.com/equinor/ert/commit/22f5f71aa63e3ad3842027442136dae1990dca01"
        },
        "date": 1723815626417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18950582834392632,
            "unit": "iter/sec",
            "range": "stddev: 0.024956801855298676",
            "extra": "mean: 5.276882556800001 sec\nrounds: 5"
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
          "id": "6b6ef5c5e1a31bca23be6ad6443c0b49e9ef524d",
          "message": "Remove hide details button in rundialog\n\n* Remove hide details button in rundialog\r\n* Remove test_that_gui_runs_a_minimal_example",
          "timestamp": "2024-08-19T08:38:05+02:00",
          "tree_id": "1c780bba0ecdc02617c990f64bdc0d2c1f4c2327",
          "url": "https://github.com/equinor/ert/commit/6b6ef5c5e1a31bca23be6ad6443c0b49e9ef524d"
        },
        "date": 1724049635571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19352482532693335,
            "unit": "iter/sec",
            "range": "stddev: 0.012595093869435562",
            "extra": "mean: 5.167295711599991 sec\nrounds: 5"
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
          "id": "050498ea76a63fb7085d49f19690df2e936bf20c",
          "message": "Use CSV_EXPORT instead of 2 for export tool",
          "timestamp": "2024-08-19T08:58:23+02:00",
          "tree_id": "215579f712d87db47a0a628219bd7f0abedc4c8a",
          "url": "https://github.com/equinor/ert/commit/050498ea76a63fb7085d49f19690df2e936bf20c"
        },
        "date": 1724050844927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1925660238725768,
            "unit": "iter/sec",
            "range": "stddev: 0.03985177011057388",
            "extra": "mean: 5.193024085399986 sec\nrounds: 5"
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
          "id": "9354a00a3cb2ca29e595739d50b871e376857d7e",
          "message": "Fix flaky config generator",
          "timestamp": "2024-08-19T13:04:09+02:00",
          "tree_id": "9f8203b6d7cd4f1eb15b2bb9eb56d70c1dcc1868",
          "url": "https://github.com/equinor/ert/commit/9354a00a3cb2ca29e595739d50b871e376857d7e"
        },
        "date": 1724065594144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19391363309286283,
            "unit": "iter/sec",
            "range": "stddev: 0.041951187449714614",
            "extra": "mean: 5.156934992400005 sec\nrounds: 5"
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
          "id": "ccc2479f40c20761aad5fb854f51ba2107e7f34a",
          "message": "Upgrade pre-commits, ruff 0.5.0 -> 0.6.1",
          "timestamp": "2024-08-19T13:06:47+02:00",
          "tree_id": "e82754f9272cbf2143f86d70b8cfaa49ddd7e583",
          "url": "https://github.com/equinor/ert/commit/ccc2479f40c20761aad5fb854f51ba2107e7f34a"
        },
        "date": 1724065748304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1936534039184268,
            "unit": "iter/sec",
            "range": "stddev: 0.007871007668487823",
            "extra": "mean: 5.163864821200008 sec\nrounds: 5"
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
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "distinct": true,
          "id": "cd8d5c9be623582ba077ac47b9f3eb26000cf70b",
          "message": "Remove use of root logger",
          "timestamp": "2024-08-19T16:33:47+02:00",
          "tree_id": "06c2f1e6fecb9b192a373518fa204d41afde9b49",
          "url": "https://github.com/equinor/ert/commit/cd8d5c9be623582ba077ac47b9f3eb26000cf70b"
        },
        "date": 1724078180196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1912002742547668,
            "unit": "iter/sec",
            "range": "stddev: 0.018172054721082354",
            "extra": "mean: 5.23011802100001 sec\nrounds: 5"
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
          "id": "02f996b70594a9af4debda386efae8f8735cc54e",
          "message": "Fix job label not updating when selecting same index\n\n* Fix job label not updating when same index\r\n* Place job_label with job_overview\r\n* Update tests accordingly",
          "timestamp": "2024-08-20T08:27:36+02:00",
          "tree_id": "ca246b748ed0b81124436456e897c8f80c1dd46f",
          "url": "https://github.com/equinor/ert/commit/02f996b70594a9af4debda386efae8f8735cc54e"
        },
        "date": 1724135409166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.196034723824157,
            "unit": "iter/sec",
            "range": "stddev: 0.008699792571930456",
            "extra": "mean: 5.1011370867999855 sec\nrounds: 5"
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
          "id": "96c6d320ce40cbd3c71141ab032900bc539d322d",
          "message": "Fix bug where template file was interpreted as parameters file",
          "timestamp": "2024-08-20T10:14:26+02:00",
          "tree_id": "f0eb998ca138ff8764f2f2269dc1b3df7d1bdb4e",
          "url": "https://github.com/equinor/ert/commit/96c6d320ce40cbd3c71141ab032900bc539d322d"
        },
        "date": 1724141828086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19543517938766294,
            "unit": "iter/sec",
            "range": "stddev: 0.02127247516730854",
            "extra": "mean: 5.116786052200007 sec\nrounds: 5"
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
          "id": "7f0d9b8090b7d4c1c1c962a08205fad4cd21ce5e",
          "message": "Simplify creating deprecation warnings",
          "timestamp": "2024-08-20T09:40:53Z",
          "tree_id": "f1e0a86dc8bb314c828f3def9de3b3b1e1d30800",
          "url": "https://github.com/equinor/ert/commit/7f0d9b8090b7d4c1c1c962a08205fad4cd21ce5e"
        },
        "date": 1724146998508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19153088942957391,
            "unit": "iter/sec",
            "range": "stddev: 0.018247041324481135",
            "extra": "mean: 5.221089939999996 sec\nrounds: 5"
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
          "id": "7aeb428888741a0c172183aa04cd561f6f5fa12e",
          "message": "Remove facade from base run model",
          "timestamp": "2024-08-20T14:57:02+02:00",
          "tree_id": "a07a0699f5a7b2002264f11e24facd846efedfc8",
          "url": "https://github.com/equinor/ert/commit/7aeb428888741a0c172183aa04cd561f6f5fa12e"
        },
        "date": 1724158764744,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19261128648414047,
            "unit": "iter/sec",
            "range": "stddev: 0.02581026528619214",
            "extra": "mean: 5.191803752800018 sec\nrounds: 5"
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
          "id": "a36ddf3986c71bb7518b8cd26f969163502665de",
          "message": "Add suggestion on empty template file",
          "timestamp": "2024-08-20T15:05:03+02:00",
          "tree_id": "5f443a6f0b7f5344aa83723a4c3fabbd38a5f1be",
          "url": "https://github.com/equinor/ert/commit/a36ddf3986c71bb7518b8cd26f969163502665de"
        },
        "date": 1724159250133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19063884230909828,
            "unit": "iter/sec",
            "range": "stddev: 0.03160374953173058",
            "extra": "mean: 5.245520733799981 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.sava42@gmail.com",
            "name": "Dan Sava",
            "username": "DanSava"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf23d1210fce1ecce771bd3be49cdd18acce389",
          "message": "Allow users without ert-configuration to run ert with FLOW simulator.",
          "timestamp": "2024-08-20T16:30:33+03:00",
          "tree_id": "74b716c015f7bdf08a3ad5ccdb939a319f2c760d",
          "url": "https://github.com/equinor/ert/commit/ddf23d1210fce1ecce771bd3be49cdd18acce389"
        },
        "date": 1724160780851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1860551035452831,
            "unit": "iter/sec",
            "range": "stddev: 0.010912232128954709",
            "extra": "mean: 5.374751785599983 sec\nrounds: 5"
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
          "id": "37f08712d6cac2ff997674848664498603ba1388",
          "message": "Remove skipped out-of-memory test\n\nThis test has been moved elsewhere where it is run regularly. Should\nnot keep a test in the repository that is skipped by default, as it is likely\nto not be able to catch regressions",
          "timestamp": "2024-08-20T15:39:54+02:00",
          "tree_id": "5a7fe4c3a0d5799b724172c077ee72a0090154b2",
          "url": "https://github.com/equinor/ert/commit/37f08712d6cac2ff997674848664498603ba1388"
        },
        "date": 1724161337009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19440999580754972,
            "unit": "iter/sec",
            "range": "stddev: 0.029318460219096443",
            "extra": "mean: 5.143768435599986 sec\nrounds: 5"
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
          "id": "e79cd87c55530fd9f452083adfb66f2d9500cca4",
          "message": "Remove websockets communication between scheduler and ensemble evaluator\n\nIt is replaced by two message queues, which are provided in LegacyEnsemble.evaluate function\nby the ensemble evaluator and passed over to scheduler:\n- ensemble_evaluator_queue: responsible for providing CloudEvent (representing realization and driver events) for evaluator\n- manifest_queue: responsible for providing CloudEvent (representing notification manifest checksum Event) for scheduler",
          "timestamp": "2024-08-20T15:45:06+02:00",
          "tree_id": "ebc432f7dbd2aaf76ee15a548ea30868895950f2",
          "url": "https://github.com/equinor/ert/commit/e79cd87c55530fd9f452083adfb66f2d9500cca4"
        },
        "date": 1724161645824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19685168066127498,
            "unit": "iter/sec",
            "range": "stddev: 0.03693948324977196",
            "extra": "mean: 5.079966788400003 sec\nrounds: 5"
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
          "id": "4013764fbfffbad4acbdd8e4893476ecc23467c9",
          "message": "Refactor queue options to use Pydantic dataclasses\n\nThis offloads the validation of the queue option objects\nto a (pretty) standard library. This gives us a single point\nof definition for which arguments each queue system can take, with\nstrict typing. The translation of queue-options to driver\narguments are is also the responsibility of the dataclass.\n\nMinor changes to queue options incurred in this:\n* If a string option has a nonempty string as default, it\n  will not be possible to set it empty. This is not a problem\n  as of now, as the need is not there. To be solved later\n  should the problem occur.\n* Some error messages are altered, but they still convey the\n  same meaning. Eg. when a string with characters is submitted\n  for a float, we don't need to say that it is not positive.\n\nA test integrating QueueOptions with driver initialization\nhas been added. This should have been present before, but testing\nrevealed it was not.\n\nType changes in driver arguments (these were inproperly typed due to\nreasons..)\n* squeue_timeout and max_runtime in the Slurm driver are now floats.\n* keep_qsub_output in the OpenPBSDriver is now a bool",
          "timestamp": "2024-08-20T16:04:26+02:00",
          "tree_id": "790131008b77df27ea31e8aa92b5126970bd25ec",
          "url": "https://github.com/equinor/ert/commit/4013764fbfffbad4acbdd8e4893476ecc23467c9"
        },
        "date": 1724162808489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18864668300753976,
            "unit": "iter/sec",
            "range": "stddev: 0.022322628574559463",
            "extra": "mean: 5.300914832200005 sec\nrounds: 5"
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
          "id": "e32805c6fb334d5015273e21fcdf336aded8d5a2",
          "message": "Allow empty field for target ensemble format",
          "timestamp": "2024-08-21T08:24:03+02:00",
          "tree_id": "6d658133806dd2cbe007cb580606c8cc6607c7f6",
          "url": "https://github.com/equinor/ert/commit/e32805c6fb334d5015273e21fcdf336aded8d5a2"
        },
        "date": 1724221592381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19177695402043884,
            "unit": "iter/sec",
            "range": "stddev: 0.045694413664982135",
            "extra": "mean: 5.214390879799998 sec\nrounds: 5"
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
          "id": "b1c50621bb722b39d9ca6b4381b76d52ec2477be",
          "message": "Sort exports through __all__\n\nSorting done with archived tool asort, which is getting into ruff",
          "timestamp": "2024-08-21T10:27:17+02:00",
          "tree_id": "6e3197970b55f1bedb4561e334e351e6e3506be5",
          "url": "https://github.com/equinor/ert/commit/b1c50621bb722b39d9ca6b4381b76d52ec2477be"
        },
        "date": 1724228983668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19072577579579778,
            "unit": "iter/sec",
            "range": "stddev: 0.02240892795639569",
            "extra": "mean: 5.243129806799994 sec\nrounds: 5"
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
          "id": "a8f681abb8ae2a8cc6b33e7324339218ff20cd66",
          "message": "Disallow QUEUE_SYSTEM GENERIC\n\nThis was previously accepted by the config system\nbecause GENERIC was a QueueSystem, again because it is a valid\nQueueSystem for usage together with QUEUE_OPTION.\n\nIf a user requested the GENERIC queue system, it would return\na LOCAL queue system. Not a very bad thing, but this was previously\na hard error so it should be kept like that.\n\nThus, QueueSystem is separated between the QueueSystem values\nthat are valid for QUEUE_SYSTEM and those that are valid\nfor QUEUE_OPTION.",
          "timestamp": "2024-08-21T12:06:20+02:00",
          "tree_id": "f68f13dbcdda35b9d449f6eff17f59e9673f05be",
          "url": "https://github.com/equinor/ert/commit/a8f681abb8ae2a8cc6b33e7324339218ff20cd66"
        },
        "date": 1724234936288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1899096511656133,
            "unit": "iter/sec",
            "range": "stddev: 0.046707604298810664",
            "extra": "mean: 5.265661823200003 sec\nrounds: 5"
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
          "id": "784c5d638d4794f48930a630cc1baca69de9c712",
          "message": "Mitigate specific LSF test flakyness\n\nTesting that it is always possible to kill a submitted realization\ninvolves some flakyness, and we hereby give up to make a perfect\nsolution for this on a busy system.\n\nTo provoke flakyness, add @pytest.mark.repeat(100) to the\nfunction changed in this PR and then run all integration_tests on\nall available cpu cores. With this change, that procedure will pass,\nwithout, it seems to always fail.\n\nIf the system is not busy, this test should never be flaky, but that\ncondition is hard to add programmatically.",
          "timestamp": "2024-08-21T12:09:20+02:00",
          "tree_id": "00ff6d7cd30afb2b5e13a894d8b519f9bc8451f1",
          "url": "https://github.com/equinor/ert/commit/784c5d638d4794f48930a630cc1baca69de9c712"
        },
        "date": 1724235106562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.195497666890512,
            "unit": "iter/sec",
            "range": "stddev: 0.03268915047981502",
            "extra": "mean: 5.115150558600004 sec\nrounds: 5"
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
          "id": "749835abb317826d3b5f78497e172a8bdf32863d",
          "message": "Clarify docs on gen data RESULT_FILE",
          "timestamp": "2024-08-21T12:27:00+02:00",
          "tree_id": "9383892477058e4f92b4b6bcf09888f968d0991e",
          "url": "https://github.com/equinor/ert/commit/749835abb317826d3b5f78497e172a8bdf32863d"
        },
        "date": 1724236175835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1848200498483121,
            "unit": "iter/sec",
            "range": "stddev: 0.26100865955485103",
            "extra": "mean: 5.41066838160001 sec\nrounds: 5"
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
          "id": "9050ca58fe0e152924e247b216d7bea209249ac8",
          "message": "Write eclbase to runpath_list if present",
          "timestamp": "2024-08-21T13:01:58+02:00",
          "tree_id": "3f5053cecf134ab2d23a03ae57407492cd6c3891",
          "url": "https://github.com/equinor/ert/commit/9050ca58fe0e152924e247b216d7bea209249ac8"
        },
        "date": 1724238266161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19485359908618008,
            "unit": "iter/sec",
            "range": "stddev: 0.04599446738247961",
            "extra": "mean: 5.1320581436 sec\nrounds: 5"
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
          "id": "e41d78cfb2e6b1b7bc641a03a9a522740cbc7961",
          "message": "Rename test_migrate_gen_kw->test_migrate_responses\n\nRename test_migrate_gen_kw->test_migrate_responses",
          "timestamp": "2024-08-21T13:11:13+02:00",
          "tree_id": "f69f3e3a30bc6be624dca88d059160e8a717b808",
          "url": "https://github.com/equinor/ert/commit/e41d78cfb2e6b1b7bc641a03a9a522740cbc7961"
        },
        "date": 1724238818389,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1905854943428658,
            "unit": "iter/sec",
            "range": "stddev: 0.026432136861438",
            "extra": "mean: 5.246989040000005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}