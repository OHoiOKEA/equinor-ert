window.BENCHMARK_DATA = {
  "lastUpdate": 1724160781227,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "fb702fbb11e5b9290d0e568bc90979f83828c985",
          "message": "Add splitter to run_dialog to facilitate adjustments",
          "timestamp": "2024-08-14T20:56:07+02:00",
          "tree_id": "910a563e1bacbb52276ca035365fae5ce27ed7c4",
          "url": "https://github.com/equinor/ert/commit/fb702fbb11e5b9290d0e568bc90979f83828c985"
        },
        "date": 1723661934080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18730266539682,
            "unit": "iter/sec",
            "range": "stddev: 0.07909525382225101",
            "extra": "mean: 5.338952320200019 sec\nrounds: 5"
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
          "id": "aad5994b713fde7291fb3250eb35ee880fb80fe7",
          "message": "Remove ITER_RETRY_COUNT",
          "timestamp": "2024-08-15T13:25:42+02:00",
          "tree_id": "847c5164e0405bd848f1c3f1de1fcc6c2104f9f5",
          "url": "https://github.com/equinor/ert/commit/aad5994b713fde7291fb3250eb35ee880fb80fe7"
        },
        "date": 1723721284657,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19192428512638643,
            "unit": "iter/sec",
            "range": "stddev: 0.02128875218679238",
            "extra": "mean: 5.2103880410000105 sec\nrounds: 5"
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
          "id": "bb5b4fc1919ee4ad62a80bf1765b88be6d52f901",
          "message": "Fix bug in heat equation example\n\nOnly write grdecl file for iteration 0,\r\notherwise the updated field will be overwritten.\r\nChange seed to create prior that makes the problem easier to solve.",
          "timestamp": "2024-08-15T15:03:55+02:00",
          "tree_id": "d55520f21988cd8de1d6c01a7284065067175039",
          "url": "https://github.com/equinor/ert/commit/bb5b4fc1919ee4ad62a80bf1765b88be6d52f901"
        },
        "date": 1723727182209,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19529145061016712,
            "unit": "iter/sec",
            "range": "stddev: 0.030513076933549207",
            "extra": "mean: 5.120551856600008 sec\nrounds: 5"
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
          "id": "1819a8e6d01d5785550015bfac43db392c434b46",
          "message": "Use load_parameters when calculating std",
          "timestamp": "2024-08-15T15:39:36+02:00",
          "tree_id": "97eaa93daed974bfa594a4cabb7999f2bb2b066d",
          "url": "https://github.com/equinor/ert/commit/1819a8e6d01d5785550015bfac43db392c434b46"
        },
        "date": 1723729320583,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19228601685904645,
            "unit": "iter/sec",
            "range": "stddev: 0.022476243522145518",
            "extra": "mean: 5.200586170199995 sec\nrounds: 5"
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
          "id": "17360a2f6ac61f37d9440c4e407bb5d3a304bf44",
          "message": "Resize columns to content and guarantee min size",
          "timestamp": "2024-08-16T08:23:41+02:00",
          "tree_id": "2bb66ec6df56eb8dd1e5a31b733d4c44e8066b08",
          "url": "https://github.com/equinor/ert/commit/17360a2f6ac61f37d9440c4e407bb5d3a304bf44"
        },
        "date": 1723789563506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19821246990959965,
            "unit": "iter/sec",
            "range": "stddev: 0.0470384657364428",
            "extra": "mean: 5.045091262199992 sec\nrounds: 5"
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
          "id": "5bdb0ab985940ef30e78a81b87a1f26d9138eaec",
          "message": "Hide suggestor location if location not specified",
          "timestamp": "2024-08-16T08:24:12+02:00",
          "tree_id": "2e5abc685d2f9b6bb519c876af04d02aa999fe08",
          "url": "https://github.com/equinor/ert/commit/5bdb0ab985940ef30e78a81b87a1f26d9138eaec"
        },
        "date": 1723789599201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19369500558595298,
            "unit": "iter/sec",
            "range": "stddev: 0.03619927292463398",
            "extra": "mean: 5.162755730200002 sec\nrounds: 5"
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
          "id": "73b2710fd0341b1d99b12f9106b5a5ca97f6fe93",
          "message": "Remove unused and deprecated queue_options",
          "timestamp": "2024-08-16T08:35:55+02:00",
          "tree_id": "2b38133f6de0c2f582cd86d3933049cb91943455",
          "url": "https://github.com/equinor/ert/commit/73b2710fd0341b1d99b12f9106b5a5ca97f6fe93"
        },
        "date": 1723790308493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19103738537087744,
            "unit": "iter/sec",
            "range": "stddev: 0.04022274206295612",
            "extra": "mean: 5.23457750460002 sec\nrounds: 5"
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
          "id": "1336b7c34ccd195abd167d3b7f1f4db5ff4b1c5d",
          "message": "Remove the UI elements that show current memory usage",
          "timestamp": "2024-08-16T08:52:16+02:00",
          "tree_id": "81278d9069a2574d60414031eebbc49b98ffa2af",
          "url": "https://github.com/equinor/ert/commit/1336b7c34ccd195abd167d3b7f1f4db5ff4b1c5d"
        },
        "date": 1723791279564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1905134366731752,
            "unit": "iter/sec",
            "range": "stddev: 0.04400704741524055",
            "extra": "mean: 5.248973602399997 sec\nrounds: 5"
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
          "id": "78e3450ecaf87a2004e7fbed430ec44c57213075",
          "message": "Fix crash in ClosableDialog on pressing esc",
          "timestamp": "2024-08-16T09:26:18+02:00",
          "tree_id": "e507cedb3fb64be485545ff07159a4e98ad00a9a",
          "url": "https://github.com/equinor/ert/commit/78e3450ecaf87a2004e7fbed430ec44c57213075"
        },
        "date": 1723793329222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1922992517462199,
            "unit": "iter/sec",
            "range": "stddev: 0.03448609315183564",
            "extra": "mean: 5.2002282428 sec\nrounds: 5"
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
          "id": "d9d98b103b5532fd3da8faedc3e1ca10737f4cfd",
          "message": "Rename jobqueue_file -> scheduler_file",
          "timestamp": "2024-08-16T09:27:43+02:00",
          "tree_id": "5c8a3b91264d04f2faa56bb7d007d9cb6db7dec1",
          "url": "https://github.com/equinor/ert/commit/d9d98b103b5532fd3da8faedc3e1ca10737f4cfd"
        },
        "date": 1723793403653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1935740144679523,
            "unit": "iter/sec",
            "range": "stddev: 0.057962378801618905",
            "extra": "mean: 5.165982648799991 sec\nrounds: 5"
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
      }
    ]
  }
}