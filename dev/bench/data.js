window.BENCHMARK_DATA = {
  "lastUpdate": 1714040385727,
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
          "id": "ba3c68aa8026b35beabfef6175cb2ffd2be9ae4e",
          "message": "Bump ruff to v0.4.0",
          "timestamp": "2024-04-19T12:35:05+02:00",
          "tree_id": "1bf624cba9ef2db261b50ee273791aaf2a496893",
          "url": "https://github.com/equinor/ert/commit/ba3c68aa8026b35beabfef6175cb2ffd2be9ae4e"
        },
        "date": 1713523110940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1902298777360922,
            "unit": "iter/sec",
            "range": "stddev: 0.055858853152746746",
            "extra": "mean: 5.256797785399987 sec\nrounds: 5"
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
          "id": "ea34ecce24b2f65b02e5fbaceb841a444ce60bac",
          "message": "Increase scheduler cancel_job_tasks timeout",
          "timestamp": "2024-04-19T13:36:36+02:00",
          "tree_id": "79ae74941e14ea2470381bdcc418a6cda423c002",
          "url": "https://github.com/equinor/ert/commit/ea34ecce24b2f65b02e5fbaceb841a444ce60bac"
        },
        "date": 1713526776576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18488205687864154,
            "unit": "iter/sec",
            "range": "stddev: 0.029162099168085355",
            "extra": "mean: 5.408853714000003 sec\nrounds: 5"
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
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "8c16ed9f6455692f9a5e4db2a20b80aa1038ecf1",
          "message": "Remove tracker and tracker_worker",
          "timestamp": "2024-04-22T13:35:13+02:00",
          "tree_id": "0a77ae2cdcca4daee14427b05c838b9c4c864374",
          "url": "https://github.com/equinor/ert/commit/8c16ed9f6455692f9a5e4db2a20b80aa1038ecf1"
        },
        "date": 1713785909178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18333912221478213,
            "unit": "iter/sec",
            "range": "stddev: 0.03713687254863267",
            "extra": "mean: 5.454373228800006 sec\nrounds: 5"
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
          "id": "544caea887f9ca985787e5e81d3d90a6c63eddd2",
          "message": "Have ert handle UserWarning from ert_script",
          "timestamp": "2024-04-22T14:55:27+02:00",
          "tree_id": "533019d74d52b2daee9e96211a6cfc47d1730a74",
          "url": "https://github.com/equinor/ert/commit/544caea887f9ca985787e5e81d3d90a6c63eddd2"
        },
        "date": 1713790714050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18944847431880021,
            "unit": "iter/sec",
            "range": "stddev: 0.04250155178621867",
            "extra": "mean: 5.2784800911999925 sec\nrounds: 5"
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
          "id": "49159d60b1a161dcd16efd92be092d357e63de17",
          "message": "Increase tolerance in truncated_normal test",
          "timestamp": "2024-04-23T10:15:28+02:00",
          "tree_id": "c8d4449c7e4c218e098467687934457473c58978",
          "url": "https://github.com/equinor/ert/commit/49159d60b1a161dcd16efd92be092d357e63de17"
        },
        "date": 1713860343329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18209970096987452,
            "unit": "iter/sec",
            "range": "stddev: 0.18095137167047828",
            "extra": "mean: 5.491497211 sec\nrounds: 5"
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
          "id": "6645716e1abca3ee73f3f1a26456b0a444d9df8d",
          "message": "Have scheduler LSF driver not bhist jobs newer than POLL_PERIOD\n\nThis commit makes lsf driver not bhist jobs submitted after previous polling. This fixes the issue where we would bhist for jobs recently submitted, because sometimes LSF takes a couple of milliseconds to process a submission before answering for it in bjobs.",
          "timestamp": "2024-04-23T10:18:35+02:00",
          "tree_id": "d6c428145df0847c26677108d4ebb760599b65f6",
          "url": "https://github.com/equinor/ert/commit/6645716e1abca3ee73f3f1a26456b0a444d9df8d"
        },
        "date": 1713860499168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18608518794034612,
            "unit": "iter/sec",
            "range": "stddev: 0.054325025273765676",
            "extra": "mean: 5.37388284939999 sec\nrounds: 5"
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
          "id": "50d1d18e94103020e07c466ce2e753b7ced41e14",
          "message": "Fix a lifetime issue of GUILogHandler",
          "timestamp": "2024-04-23T10:28:42+02:00",
          "tree_id": "d36cdb55399801efcc29f8591a280ff18b0cfe00",
          "url": "https://github.com/equinor/ert/commit/50d1d18e94103020e07c466ce2e753b7ced41e14"
        },
        "date": 1713861105700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1876047221331133,
            "unit": "iter/sec",
            "range": "stddev: 0.05485394315617746",
            "extra": "mean: 5.33035623320003 sec\nrounds: 5"
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
          "id": "bcb3093c92ff8f4fc401f2248c2b95931fd17ffa",
          "message": "Remove TempStorage",
          "timestamp": "2024-04-23T11:34:51+02:00",
          "tree_id": "d284fdb955e0995f7a3c7f1e7a34ace979981471",
          "url": "https://github.com/equinor/ert/commit/bcb3093c92ff8f4fc401f2248c2b95931fd17ffa"
        },
        "date": 1713865078672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18431754951222917,
            "unit": "iter/sec",
            "range": "stddev: 0.14544577411531778",
            "extra": "mean: 5.425419351799985 sec\nrounds: 5"
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
          "id": "7e80e17334b967b9d09fa82acb9919b525b9b152",
          "message": "Add correct return types to MagicMock",
          "timestamp": "2024-04-23T11:59:05+02:00",
          "tree_id": "150f0023284562b979279dfb30851c0c84720077",
          "url": "https://github.com/equinor/ert/commit/7e80e17334b967b9d09fa82acb9919b525b9b152"
        },
        "date": 1713866528555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18879793805827186,
            "unit": "iter/sec",
            "range": "stddev: 0.020074826351616015",
            "extra": "mean: 5.296668016000012 sec\nrounds: 5"
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
          "id": "012c396a3527e4111bfd68cfe26ef1291e170534",
          "message": "Add -o option to bsub for stdout from LSF\n\nReplicating behaviour in legacy C driver",
          "timestamp": "2024-04-23T12:25:31+02:00",
          "tree_id": "841c824f027c2d257b2ef44a0084c72ec776d5ac",
          "url": "https://github.com/equinor/ert/commit/012c396a3527e4111bfd68cfe26ef1291e170534"
        },
        "date": 1713868120612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1874055083295523,
            "unit": "iter/sec",
            "range": "stddev: 0.029537407259873607",
            "extra": "mean: 5.33602245159999 sec\nrounds: 5"
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
          "id": "fc932a7242f4056120d334773003316c8bee9e1d",
          "message": "Disable experiment name editing in restart mode",
          "timestamp": "2024-04-23T12:38:43+02:00",
          "tree_id": "bd4cca4662fdd7bd9229fc6471c74a0386c329d8",
          "url": "https://github.com/equinor/ert/commit/fc932a7242f4056120d334773003316c8bee9e1d"
        },
        "date": 1713868916467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18878249932961358,
            "unit": "iter/sec",
            "range": "stddev: 0.018638371650420343",
            "extra": "mean: 5.2971011801999905 sec\nrounds: 5"
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
          "id": "890fc3296deb83b68bb3fc3227aea22259e3c64a",
          "message": "Add check for newer storages",
          "timestamp": "2024-04-23T12:39:22+02:00",
          "tree_id": "14d09fb8721122ba998b43b737f5a11539d71bcd",
          "url": "https://github.com/equinor/ert/commit/890fc3296deb83b68bb3fc3227aea22259e3c64a"
        },
        "date": 1713868953799,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18262271916820186,
            "unit": "iter/sec",
            "range": "stddev: 0.20328595392139795",
            "extra": "mean: 5.475769961999992 sec\nrounds: 5"
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
          "id": "778db29b0e61e2a60b06a20c08fde81dad190910",
          "message": "Have scheduler bkill not retry on error `Job already finished`",
          "timestamp": "2024-04-23T13:21:57+02:00",
          "tree_id": "7632252a17a72dd78252e88dc05373f71d95d54a",
          "url": "https://github.com/equinor/ert/commit/778db29b0e61e2a60b06a20c08fde81dad190910"
        },
        "date": 1713871510500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18858192144820615,
            "unit": "iter/sec",
            "range": "stddev: 0.06410225763019838",
            "extra": "mean: 5.302735237399991 sec\nrounds: 5"
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
          "id": "e55275480cd0911fe7c18728c9d8bd8434ca9644",
          "message": "Make local_driver kill() robust wrt timing\n\nIf the kill() instruction to the local driver happened before the subprocess\nhad actually started, the driver would raise an exception.\n\nThis commit makes sure that one FinishedEvent is always sent no matter when\nthe kill() instruction is sent.\n\nkill() can happen before the _run() function is started, it can happen when run() is started and\nthe try block is entered, but _init() is not started, and it can happen after the process has been\nstarted.",
          "timestamp": "2024-04-23T13:28:44+02:00",
          "tree_id": "d5523fe8e5f0a2a9df566a1b7b91bf655042666f",
          "url": "https://github.com/equinor/ert/commit/e55275480cd0911fe7c18728c9d8bd8434ca9644"
        },
        "date": 1713871906774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1878120583202574,
            "unit": "iter/sec",
            "range": "stddev: 0.03500628310721317",
            "extra": "mean: 5.324471756200012 sec\nrounds: 5"
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
          "id": "d6ed42713a240ac4fbd5eb7180ce3e5419db460f",
          "message": "Fix dark storage performance benchmark test not compatible with async_utils event loop",
          "timestamp": "2024-04-23T13:36:42+02:00",
          "tree_id": "0870bb6962217fc4eeb8aa1563cc1e2a188b5b4c",
          "url": "https://github.com/equinor/ert/commit/d6ed42713a240ac4fbd5eb7180ce3e5419db460f"
        },
        "date": 1713872396749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18591631046831775,
            "unit": "iter/sec",
            "range": "stddev: 0.010517520308682977",
            "extra": "mean: 5.37876422720002 sec\nrounds: 5"
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
          "id": "50a44210a148234c08baa85bcb1ca34f0581d5e0",
          "message": "Improve scheduler driver execute_with_retries method to log exit code, stdout, and stderr",
          "timestamp": "2024-04-24T07:12:26+02:00",
          "tree_id": "f8a2f283f205ab5a508fae0d1450a512a245c6fe",
          "url": "https://github.com/equinor/ert/commit/50a44210a148234c08baa85bcb1ca34f0581d5e0"
        },
        "date": 1713935738878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18902272394565997,
            "unit": "iter/sec",
            "range": "stddev: 0.04102923239067562",
            "extra": "mean: 5.290369216600004 sec\nrounds: 5"
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
          "id": "0720112c9a8420c4e918403d794fbe94c4c9c20c",
          "message": "Have integration tests running towards cluster set job names\n\nThis commit makes the integration tests for the scheduler drivers use the test names as job names when doing `driver.submit`, making it easier to debug.",
          "timestamp": "2024-04-24T08:48:36+02:00",
          "tree_id": "013648c085f47c07f683a1609b4c6eeb9831e231",
          "url": "https://github.com/equinor/ert/commit/0720112c9a8420c4e918403d794fbe94c4c9c20c"
        },
        "date": 1713941523409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18857746150192198,
            "unit": "iter/sec",
            "range": "stddev: 0.09606500741733304",
            "extra": "mean: 5.302860649599995 sec\nrounds: 5"
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
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "distinct": true,
          "id": "f3f0b85fd0df1eb75eb7ccb9b1cf7970c640d10a",
          "message": "Improve codecov coverage lsf_driver polling",
          "timestamp": "2024-04-24T10:18:42+02:00",
          "tree_id": "7e69f240c39f0c07a8e5ce8b5715898cbe832ce1",
          "url": "https://github.com/equinor/ert/commit/f3f0b85fd0df1eb75eb7ccb9b1cf7970c640d10a"
        },
        "date": 1713946985073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18366542540586273,
            "unit": "iter/sec",
            "range": "stddev: 0.12723027768390555",
            "extra": "mean: 5.4446828944000005 sec\nrounds: 5"
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
          "id": "cbe777b8fc459bbdb9b4142f98d7843e40938e50",
          "message": "Add DeprecationWarning for TORQUE OPTION `QUEUE_QUERY_TIMEOUT`\n\nThis commit adds a deprecation warning for using `TORQUE QUEUE_OPTION QUEUE_QUERY_TIMEOUT`, stating it will be ignored when using the scheduler.",
          "timestamp": "2024-04-24T10:36:42+02:00",
          "tree_id": "d934c465c59b436470ed8380832ed34ebdbc3323",
          "url": "https://github.com/equinor/ert/commit/cbe777b8fc459bbdb9b4142f98d7843e40938e50"
        },
        "date": 1713948031714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18472024339527468,
            "unit": "iter/sec",
            "range": "stddev: 0.1866264551241095",
            "extra": "mean: 5.413591827400012 sec\nrounds: 5"
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
          "id": "cb949eff6b8d9f5211577540f9a2b19af3b44e75",
          "message": "Replace swap_vertical icon with reorder for plotter selection",
          "timestamp": "2024-04-24T11:36:31+02:00",
          "tree_id": "5ef42b8688fb02c3ed89eb596213366dabc2abc0",
          "url": "https://github.com/equinor/ert/commit/cb949eff6b8d9f5211577540f9a2b19af3b44e75"
        },
        "date": 1713951609958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18859590099668425,
            "unit": "iter/sec",
            "range": "stddev: 0.03903537319567945",
            "extra": "mean: 5.302342175599994 sec\nrounds: 5"
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
          "id": "a2f405b7b7eb2c47c5fd0d782078701e3c4a8132",
          "message": "Add plot for observations",
          "timestamp": "2024-04-24T11:43:51+02:00",
          "tree_id": "e48577b98a8bde09f389217191c348e0c710f1ed",
          "url": "https://github.com/equinor/ert/commit/a2f405b7b7eb2c47c5fd0d782078701e3c4a8132"
        },
        "date": 1713952030682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18517764180248544,
            "unit": "iter/sec",
            "range": "stddev: 0.06418164777609005",
            "extra": "mean: 5.400219974000004 sec\nrounds: 5"
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
          "id": "941d4c915a92a08ed6c31d68b0bc922756cef241",
          "message": "Rely on komodo to setup integration tests for queues",
          "timestamp": "2024-04-24T12:40:03+02:00",
          "tree_id": "3a6f02f89e1d1551e72f28811597c3213406fdbe",
          "url": "https://github.com/equinor/ert/commit/941d4c915a92a08ed6c31d68b0bc922756cef241"
        },
        "date": 1713956382765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18842676521385907,
            "unit": "iter/sec",
            "range": "stddev: 0.023355582847702012",
            "extra": "mean: 5.307101668199993 sec\nrounds: 5"
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
          "id": "0e3209a6bf443dc1f3ec40804eacf63e3c4ab572",
          "message": "Add DeprecationWarning for TORQUE OPTION `QSTAT_OPTIONS`",
          "timestamp": "2024-04-24T16:27:53+02:00",
          "tree_id": "f979b7dc474f2269192777e5c4c410fd57804d62",
          "url": "https://github.com/equinor/ert/commit/0e3209a6bf443dc1f3ec40804eacf63e3c4ab572"
        },
        "date": 1713969069909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18777296222691262,
            "unit": "iter/sec",
            "range": "stddev: 0.04416834660298527",
            "extra": "mean: 5.325580361200025 sec\nrounds: 5"
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
          "id": "2e253f48cffbed4a341a30e823e7f74f94db05bc",
          "message": "Avoid possibility for negative duration in GUI\n\nThere is an underlying problem with the snapshot model not being\nproperly reset when realizations are resubmitted upon failure. This\ncommit makes sure that when invalid end times are picked up from\nprevious runs, they are ignored.",
          "timestamp": "2024-04-25T09:06:26+02:00",
          "tree_id": "7cf68d959c341ccd978eb82d9277f537b732b27f",
          "url": "https://github.com/equinor/ert/commit/2e253f48cffbed4a341a30e823e7f74f94db05bc"
        },
        "date": 1714028976897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1835977775237721,
            "unit": "iter/sec",
            "range": "stddev: 0.28936476451728044",
            "extra": "mean: 5.446689025800003 sec\nrounds: 5"
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
          "id": "de3646cf0b571a21b5ea18ef3985b2bb778688f9",
          "message": "Reverse ensemble order for plotting",
          "timestamp": "2024-04-25T09:11:16+02:00",
          "tree_id": "6768b18abbe780067f08ad735f94d64d7e5c9068",
          "url": "https://github.com/equinor/ert/commit/de3646cf0b571a21b5ea18ef3985b2bb778688f9"
        },
        "date": 1714029275337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18680086261806478,
            "unit": "iter/sec",
            "range": "stddev: 0.03594386755613418",
            "extra": "mean: 5.353294336999994 sec\nrounds: 5"
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
          "id": "06ba43effe5ea807aec02c3059c0db1b9f5691ca",
          "message": "Update error message for GEN_KW PRED",
          "timestamp": "2024-04-25T09:33:41+02:00",
          "tree_id": "165c0bf0434e522ae92d5b131c39e131c90aeea2",
          "url": "https://github.com/equinor/ert/commit/06ba43effe5ea807aec02c3059c0db1b9f5691ca"
        },
        "date": 1714030620528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18674938904157698,
            "unit": "iter/sec",
            "range": "stddev: 0.04907596370168726",
            "extra": "mean: 5.354769860999999 sec\nrounds: 5"
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
          "id": "10faf6a57fee9e4f4f4d0962e4f6f0a4bbbeeb30",
          "message": "Silence INFO logs from azure.core",
          "timestamp": "2024-04-25T10:15:13+02:00",
          "tree_id": "c866b0f2787895a66c41e9665203d90b675c0718",
          "url": "https://github.com/equinor/ert/commit/10faf6a57fee9e4f4f4d0962e4f6f0a4bbbeeb30"
        },
        "date": 1714033105077,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1899929963504932,
            "unit": "iter/sec",
            "range": "stddev: 0.016560132932042816",
            "extra": "mean: 5.263351908800002 sec\nrounds: 5"
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
          "id": "74e85734cc8d241cb7b01360221f4693ea5d228f",
          "message": "Hardcode `-x` qstat option in `torque_driver.cpp`\n\nThis commit makes the legacy torque driver better match the scheduler OpenPBSDriver.",
          "timestamp": "2024-04-25T10:25:08+02:00",
          "tree_id": "e0665c0dd3462512c3dca0762efd20e44ab4b3f0",
          "url": "https://github.com/equinor/ert/commit/74e85734cc8d241cb7b01360221f4693ea5d228f"
        },
        "date": 1714033704241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18908854974712433,
            "unit": "iter/sec",
            "range": "stddev: 0.03568434517067402",
            "extra": "mean: 5.288527525000006 sec\nrounds: 5"
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
          "id": "4dc12ab8292eba9ebf28be201d41a72abf59914e",
          "message": "Remove parts of LSF example in docs\n\nThese settings are seldom relevant for users.",
          "timestamp": "2024-04-25T10:42:25+02:00",
          "tree_id": "6bc67f69bebb4ab8c04fe3b4deb0ae830f8fdd07",
          "url": "https://github.com/equinor/ert/commit/4dc12ab8292eba9ebf28be201d41a72abf59914e"
        },
        "date": 1714034755828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18641282958919386,
            "unit": "iter/sec",
            "range": "stddev: 0.022835478774535758",
            "extra": "mean: 5.364437641999984 sec\nrounds: 5"
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
          "id": "000ebc9b901e1c6392b7c1538b4cf6efb101f09d",
          "message": "Ensure forward models after running ones are pending\n\nWhen realizations are resubmitted after failures, the snapshot shows\ninformation from the previous run. This commit modifies the forward\nmodel state of forward models following any Running state for a\nrealization to make sure they are set to Start/Pending.\n\nThe GUI will thus show correct colors for these forward models, but\nerror messages from the failed previous run are still available from the\nGUI.",
          "timestamp": "2024-04-25T12:16:04+02:00",
          "tree_id": "af649e71272453a805f9c9237d9ff32ac1ad38b7",
          "url": "https://github.com/equinor/ert/commit/000ebc9b901e1c6392b7c1538b4cf6efb101f09d"
        },
        "date": 1714040384302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1868723641451448,
            "unit": "iter/sec",
            "range": "stddev: 0.04179079341681593",
            "extra": "mean: 5.351246047400002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}