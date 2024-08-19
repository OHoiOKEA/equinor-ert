window.BENCHMARK_DATA = {
  "lastUpdate": 1724065594614,
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
          "id": "68271c492cf7d0409c7671ff9a3243d04366dcbb",
          "message": "Add descriptions to experiment types",
          "timestamp": "2024-08-13T12:34:07+02:00",
          "tree_id": "f85746c2343243adc333fbb6012f25682638f9ed",
          "url": "https://github.com/equinor/ert/commit/68271c492cf7d0409c7671ff9a3243d04366dcbb"
        },
        "date": 1723545401878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19602581673649808,
            "unit": "iter/sec",
            "range": "stddev: 0.058215244127022066",
            "extra": "mean: 5.101368874000002 sec\nrounds: 5"
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
          "id": "6e4454d42f0f1a320b354c5287844a6899780a28",
          "message": "Change focus to active tab",
          "timestamp": "2024-08-13T13:56:56+02:00",
          "tree_id": "73de3d774fa2eca922f6e28b4b36f6c5e20cc5f4",
          "url": "https://github.com/equinor/ert/commit/6e4454d42f0f1a320b354c5287844a6899780a28"
        },
        "date": 1723550367869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19127015965620597,
            "unit": "iter/sec",
            "range": "stddev: 0.025512951517897408",
            "extra": "mean: 5.2282070648 sec\nrounds: 5"
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
          "id": "acfc8c9d675e5625bd9aaaa44156cd01d2ace63a",
          "message": "Merge Snapshot and PartialSnapshot",
          "timestamp": "2024-08-13T14:36:59+02:00",
          "tree_id": "2fb3cd1a38ce0419a7e337a36931cb4b1e418ad0",
          "url": "https://github.com/equinor/ert/commit/acfc8c9d675e5625bd9aaaa44156cd01d2ace63a"
        },
        "date": 1723552765410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19038331337290604,
            "unit": "iter/sec",
            "range": "stddev: 0.01785987406493105",
            "extra": "mean: 5.252561173999993 sec\nrounds: 5"
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
          "id": "c132f70c8a854c94ebfcd32c1a90532c2114c378",
          "message": "Remove RunArguments",
          "timestamp": "2024-08-13T14:53:16+02:00",
          "tree_id": "942ae65d3f6e06ee8eb6c86f8fc8ac63890ff24e",
          "url": "https://github.com/equinor/ert/commit/c132f70c8a854c94ebfcd32c1a90532c2114c378"
        },
        "date": 1723553743796,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19132919129601356,
            "unit": "iter/sec",
            "range": "stddev: 0.04266253416669997",
            "extra": "mean: 5.226593982999998 sec\nrounds: 5"
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
          "id": "e0611cf0837016d356897c4f0ff01d195321f773",
          "message": "Remove iteration label\n\nThis had very little effect, as only the last one set before\nthe ensemble evaluater started was actully propagated to the gui",
          "timestamp": "2024-08-13T15:43:43+02:00",
          "tree_id": "4e6b940978e8df89bfc5a2905814efe3a960ca39",
          "url": "https://github.com/equinor/ert/commit/e0611cf0837016d356897c4f0ff01d195321f773"
        },
        "date": 1723556768237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19061477682986933,
            "unit": "iter/sec",
            "range": "stddev: 0.0425535245934838",
            "extra": "mean: 5.246182990800008 sec\nrounds: 5"
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
          "id": "0ffc8ddf47d64cbfc76ac893625d27f55f63ca00",
          "message": "Fix bug where iteration was hard coded",
          "timestamp": "2024-08-14T09:50:52+02:00",
          "tree_id": "07057ed641f8055de1ef87577a01c159055a3297",
          "url": "https://github.com/equinor/ert/commit/0ffc8ddf47d64cbfc76ac893625d27f55f63ca00"
        },
        "date": 1723621996512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1945756728613658,
            "unit": "iter/sec",
            "range": "stddev: 0.0513384116777423",
            "extra": "mean: 5.139388625999999 sec\nrounds: 5"
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
          "id": "83ec3c4bceb70fd99cf7c6ad5a1aee51276d2873",
          "message": "Fix source folder for performance_utils.py",
          "timestamp": "2024-08-14T10:20:06+02:00",
          "tree_id": "3aea4d558f47e5b23ffb9d3757cef9171318e5ed",
          "url": "https://github.com/equinor/ert/commit/83ec3c4bceb70fd99cf7c6ad5a1aee51276d2873"
        },
        "date": 1723623808555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19183841233582744,
            "unit": "iter/sec",
            "range": "stddev: 0.027322348651253738",
            "extra": "mean: 5.212720371399996 sec\nrounds: 5"
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
          "id": "c27d36869bd070706f9aec7d3392e3b0b6d7944f",
          "message": "Change look&feel of simulation mode combobox",
          "timestamp": "2024-08-14T14:34:16+02:00",
          "tree_id": "04f23e639fdb68fef7cb84b53902a26fd59a0771",
          "url": "https://github.com/equinor/ert/commit/c27d36869bd070706f9aec7d3392e3b0b6d7944f"
        },
        "date": 1723639008214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19155012020204867,
            "unit": "iter/sec",
            "range": "stddev: 0.01833807418026119",
            "extra": "mean: 5.220565765999998 sec\nrounds: 5"
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
      }
    ]
  }
}