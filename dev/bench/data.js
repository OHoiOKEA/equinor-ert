window.BENCHMARK_DATA = {
  "lastUpdate": 1712923266275,
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
          "id": "118697112ec5893510d377441e89e5fb52b3cc6f",
          "message": "Refactor _get_obs_and_measure_data\n\nRename to _get_observations_and_responses\r\nImprove variable names and add docstring.",
          "timestamp": "2024-04-09T09:50:54+02:00",
          "tree_id": "62bff5ca90b9c1603b1e1af32aa7c3a1cc7758e9",
          "url": "https://github.com/equinor/ert/commit/118697112ec5893510d377441e89e5fb52b3cc6f"
        },
        "date": 1712649245494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19114854672193807,
            "unit": "iter/sec",
            "range": "stddev: 0.025405954694112134",
            "extra": "mean: 5.231533365800004 sec\nrounds: 5"
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
          "id": "5428155b98bf2878eb9d5148633a74a54c295e43",
          "message": "Make resdata a dev-dependency",
          "timestamp": "2024-04-09T10:07:37+02:00",
          "tree_id": "dcd1e7e293c93e7170d1c8646e1d32a5b8d7941d",
          "url": "https://github.com/equinor/ert/commit/5428155b98bf2878eb9d5148633a74a54c295e43"
        },
        "date": 1712650249571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18916709688236483,
            "unit": "iter/sec",
            "range": "stddev: 0.0489005906447136",
            "extra": "mean: 5.286331589799988 sec\nrounds: 5"
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
          "id": "0e3f9b5ad606814d1098f0092e1efbfd71cefbaa",
          "message": "Use macOS-14 runners for ert",
          "timestamp": "2024-04-09T10:19:17+02:00",
          "tree_id": "02e631265bda21e993eb37a0ff686ac0b79cabd6",
          "url": "https://github.com/equinor/ert/commit/0e3f9b5ad606814d1098f0092e1efbfd71cefbaa"
        },
        "date": 1712650953968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18548268382950203,
            "unit": "iter/sec",
            "range": "stddev: 0.057163452338775594",
            "extra": "mean: 5.391338853600007 sec\nrounds: 5"
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
          "id": "414bea772d1f89c95fe82211d3e621e446950dc3",
          "message": "Fix storage instance used outside of storage context",
          "timestamp": "2024-04-09T10:33:54+02:00",
          "tree_id": "df64668eef0c81d1de2e8c9668dcd799040a32bc",
          "url": "https://github.com/equinor/ert/commit/414bea772d1f89c95fe82211d3e621e446950dc3"
        },
        "date": 1712651813552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19103738386727237,
            "unit": "iter/sec",
            "range": "stddev: 0.026816160991506643",
            "extra": "mean: 5.234577545800005 sec\nrounds: 5"
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
          "id": "8082875060e07e8a9e64bad774bc7300f88349f9",
          "message": "Implement EXCLUDE_HOST for scheduler lsf driver\n\nThis commit implements the EXCLUDE_HOST keyword for the scheduler LSF\ndriver, the same way it was implemented in C.",
          "timestamp": "2024-04-09T10:34:50+02:00",
          "tree_id": "ea33183e9dc047b94f4025cc83959bb22b95965c",
          "url": "https://github.com/equinor/ert/commit/8082875060e07e8a9e64bad774bc7300f88349f9"
        },
        "date": 1712651895739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18997784896352687,
            "unit": "iter/sec",
            "range": "stddev: 0.04542360794685416",
            "extra": "mean: 5.263771568399989 sec\nrounds: 5"
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
          "id": "27a906029e3287634630fd0ff871dc395625ccd2",
          "message": "Increase timeout in unresponsiveness test",
          "timestamp": "2024-04-09T12:20:18+02:00",
          "tree_id": "cae354a1907f5fb2446a95241b3fcd567dbf0fe9",
          "url": "https://github.com/equinor/ert/commit/27a906029e3287634630fd0ff871dc395625ccd2"
        },
        "date": 1712658201855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19236001899746916,
            "unit": "iter/sec",
            "range": "stddev: 0.028431693121145494",
            "extra": "mean: 5.198585471200005 sec\nrounds: 5"
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
          "id": "7ba3fb551d7f18fb43b8a4e9500b28a72d364f7c",
          "message": "Solve deprecation warning from datetime on UTC",
          "timestamp": "2024-04-09T12:32:32+02:00",
          "tree_id": "eb89a6d3c76fb305ef0ed8bc5994c5a7bd6ef57a",
          "url": "https://github.com/equinor/ert/commit/7ba3fb551d7f18fb43b8a4e9500b28a72d364f7c"
        },
        "date": 1712658941227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1877402414315077,
            "unit": "iter/sec",
            "range": "stddev: 0.05062910166876855",
            "extra": "mean: 5.3265085437999975 sec\nrounds: 5"
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
          "id": "b4dc96d54f3c2eaa0a8a60f539545887599182e6",
          "message": "Solve py312 warning on pkgutil.get_loader\n\nUsing importlib instead",
          "timestamp": "2024-04-09T12:38:39+02:00",
          "tree_id": "f25be9eab05bdb63cb1e3b4444ef132f3db8a22a",
          "url": "https://github.com/equinor/ert/commit/b4dc96d54f3c2eaa0a8a60f539545887599182e6"
        },
        "date": 1712659316040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19124730636191803,
            "unit": "iter/sec",
            "range": "stddev: 0.03452675131481622",
            "extra": "mean: 5.228831814800003 sec\nrounds: 5"
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
          "id": "cfad65e85d01a10fe8c57b4e391caefa2868d4dd",
          "message": "Let mocked bkill support specific kill signal\n\nThe tests sent a -s option to the mock that failed the mock.\nAnother error (missing timeout) let the kill test pass when\nit should not.",
          "timestamp": "2024-04-09T12:44:28+02:00",
          "tree_id": "dd1bae833cef7022083bf6ab0918e8aec24994b8",
          "url": "https://github.com/equinor/ert/commit/cfad65e85d01a10fe8c57b4e391caefa2868d4dd"
        },
        "date": 1712659659376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18662364048283964,
            "unit": "iter/sec",
            "range": "stddev: 0.0438916424227959",
            "extra": "mean: 5.358377949399994 sec\nrounds: 5"
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
          "id": "f4b0b2448f91a9907f329dd174d51ad37844657d",
          "message": "Fix hanging cli integration test\n\nThis commit fixes `tests/integration_tests/test_cli.py::test_that_stop_on_workflow_jobs_stop_ert` hanging after finishing tests.\nIt seems like ErtThread with exceptions had some issues with pytest in this case, but it was fixed by monkeypatching `_ert_threading.can_raise = False`",
          "timestamp": "2024-04-09T12:48:40+02:00",
          "tree_id": "c84710a7de3c7442935f040b61f567d8b922e162",
          "url": "https://github.com/equinor/ert/commit/f4b0b2448f91a9907f329dd174d51ad37844657d"
        },
        "date": 1712659919509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19048675917504074,
            "unit": "iter/sec",
            "range": "stddev: 0.032543055003195376",
            "extra": "mean: 5.249708716400005 sec\nrounds: 5"
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
          "id": "6f49e28aa529c7d18de9513954ee848fa04d7b1b",
          "message": "Protect main branch from git commit with pre-commit\n\nDevelopers should never commit when main branch is checked out.\nCommits must happen on a branch, and then pull requests to main\nbranch.",
          "timestamp": "2024-04-09T17:39:22+02:00",
          "tree_id": "fc62283b41438e24895584835c451ea049d75a5b",
          "url": "https://github.com/equinor/ert/commit/6f49e28aa529c7d18de9513954ee848fa04d7b1b"
        },
        "date": 1712677354007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19040393968843392,
            "unit": "iter/sec",
            "range": "stddev: 0.05512972039226968",
            "extra": "mean: 5.251992168000004 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "076b6d83342ff505f224e70a1e8ba9c0d18f54e0",
          "message": "Fix test_small_time_mismatches_are_ignored",
          "timestamp": "2024-04-10T08:31:28+02:00",
          "tree_id": "a763030e52ffb45241a901c6bd0f3f35bba0227b",
          "url": "https://github.com/equinor/ert/commit/076b6d83342ff505f224e70a1e8ba9c0d18f54e0"
        },
        "date": 1712730877723,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19370552917516984,
            "unit": "iter/sec",
            "range": "stddev: 0.024778720333060125",
            "extra": "mean: 5.162475249199986 sec\nrounds: 5"
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
          "id": "c3ee77f07228d2f43d8b3f7a815903c65cdbcee5",
          "message": "Guard against cancellation errors when cancelling",
          "timestamp": "2024-04-10T08:55:00+02:00",
          "tree_id": "d80df876d29a8eb08413c1ca1389a331e9725b1b",
          "url": "https://github.com/equinor/ert/commit/c3ee77f07228d2f43d8b3f7a815903c65cdbcee5"
        },
        "date": 1712732285834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19074476604626014,
            "unit": "iter/sec",
            "range": "stddev: 0.0439954412157879",
            "extra": "mean: 5.242607808999992 sec\nrounds: 5"
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
          "id": "afd2437d33cb404892141b35c14193a350599b09",
          "message": "Remove pass statement\n\nLeftover after b4dc96d54f3c2eaa0a8a60f539545887599182e6",
          "timestamp": "2024-04-10T08:58:10+02:00",
          "tree_id": "79518becfe70b7d5f500a58fde188e7369a509ab",
          "url": "https://github.com/equinor/ert/commit/afd2437d33cb404892141b35c14193a350599b09"
        },
        "date": 1712732477786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1912863758543016,
            "unit": "iter/sec",
            "range": "stddev: 0.06023930596930995",
            "extra": "mean: 5.2277638464 sec\nrounds: 5"
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
          "id": "880886ef8de3f8c066f862d1c478bb6f63bc9c0e",
          "message": "Fix storage instance used outside of storage context",
          "timestamp": "2024-04-10T09:33:02+02:00",
          "tree_id": "f1504368b8b0913cb0094516c2fee6c15897eb7b",
          "url": "https://github.com/equinor/ert/commit/880886ef8de3f8c066f862d1c478bb6f63bc9c0e"
        },
        "date": 1712734562913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1888486650120892,
            "unit": "iter/sec",
            "range": "stddev: 0.030239981593202202",
            "extra": "mean: 5.295245269199995 sec\nrounds: 5"
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
          "id": "bc992ec461a612af8c31fe630cad4887f41fc3a7",
          "message": "Rename Job.__call__ to job.run in scheduler",
          "timestamp": "2024-04-10T09:35:41+02:00",
          "tree_id": "a3975cdb8f7bca2bdae2002b74dbbd8916d68ac5",
          "url": "https://github.com/equinor/ert/commit/bc992ec461a612af8c31fe630cad4887f41fc3a7"
        },
        "date": 1712734734314,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19155547419174623,
            "unit": "iter/sec",
            "range": "stddev: 0.020745902598190133",
            "extra": "mean: 5.220419850800004 sec\nrounds: 5"
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
          "id": "20768faedd3de45a7e1f73b609de28884dbbd3ac",
          "message": "Fix py3.12 asyncio warning in async_utils\n\nThis commit fixes the `DeprecationWarning: There is no current event loop` warning for Python3.12 in the `get_event_loop` function in `async_utils.py`. Prior to this commit, the function used `asyncio.get_event_loop()` which creates a new event loop directly. `asyncio.get_running_loop()` does however raise a RuntimeError when there is no event loop, which is what we want.",
          "timestamp": "2024-04-10T09:38:39+02:00",
          "tree_id": "1c73be36b037d7c6bc0ff10133ca2c89e5bf8bda",
          "url": "https://github.com/equinor/ert/commit/20768faedd3de45a7e1f73b609de28884dbbd3ac"
        },
        "date": 1712734906479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1868711073297286,
            "unit": "iter/sec",
            "range": "stddev: 0.026854166737749072",
            "extra": "mean: 5.35128203760001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aron@hoyer.com",
            "name": "Aron Høyer",
            "username": "aronhoyer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2600d207bd3d77507ef78340a0b62c2f7cbc851d",
          "message": "Document storage (#7254)",
          "timestamp": "2024-04-10T10:31:31+02:00",
          "tree_id": "d9bd10ba9aa650f0e1ba2d55185911fd4915bae6",
          "url": "https://github.com/equinor/ert/commit/2600d207bd3d77507ef78340a0b62c2f7cbc851d"
        },
        "date": 1712738104665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18807850872898343,
            "unit": "iter/sec",
            "range": "stddev: 0.055838342566440255",
            "extra": "mean: 5.316928588799987 sec\nrounds: 5"
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
          "id": "82db76d96cbb5f43ab20c2c567ba88e730bee1be",
          "message": "Remove duplicate data",
          "timestamp": "2024-04-10T13:27:24+02:00",
          "tree_id": "e204dd592a10d48818f3c768c1bf5d2ac3347f88",
          "url": "https://github.com/equinor/ert/commit/82db76d96cbb5f43ab20c2c567ba88e730bee1be"
        },
        "date": 1712748631543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1862738407429832,
            "unit": "iter/sec",
            "range": "stddev: 0.060928940177324274",
            "extra": "mean: 5.368440335000014 sec\nrounds: 5"
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
          "id": "61046df67fa516164388276c2483d89114c78fe8",
          "message": "Increase timeout for cluster integration tests\n\nThe default timeout at 10 minutes can be too low if the compute cluster\nhas low availability of compute resources, as the time spent waiting in the\nqueue for a compute job is counted. Increasing the timeout to 1 hour only\nwhen running the tests against the real compute cluster.\n\nThe timeout for the test_kill had to be removed, as that test can also\nsuffer the same problem. Note that this can then hide a bug for the LSF\ndriver as the driver cannot distuingish between  which will\nhappen when the job is not killed and the exit code when it is killed.",
          "timestamp": "2024-04-10T13:27:48+02:00",
          "tree_id": "d9744e6de3bfaa0e53affd58b29d177e3422f9a0",
          "url": "https://github.com/equinor/ert/commit/61046df67fa516164388276c2483d89114c78fe8"
        },
        "date": 1712748653976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19243808449017824,
            "unit": "iter/sec",
            "range": "stddev: 0.0318388371629208",
            "extra": "mean: 5.1964765844 sec\nrounds: 5"
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
          "id": "d55e0ef9870dc95aefd8cdaeaccc12c044391b26",
          "message": "Rename async_utils get_event_loop() to get_running_loop()\n\nThe function has been updated and now uses `asyncio.get_running_loop` instead of `asyncio.get_event_loop`, so this commit changes the function name to reflect this change.",
          "timestamp": "2024-04-10T15:01:24+02:00",
          "tree_id": "1fba8844f361d3682a7ddee7666b7c2a6d3c03dd",
          "url": "https://github.com/equinor/ert/commit/d55e0ef9870dc95aefd8cdaeaccc12c044391b26"
        },
        "date": 1712754289989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18057947696652207,
            "unit": "iter/sec",
            "range": "stddev: 0.04903257277708546",
            "extra": "mean: 5.537727857000005 sec\nrounds: 5"
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
          "id": "c600efbbe3b15f441ffdbaae86a2201d1e270828",
          "message": "Remove start sync event from scheduler job.__call__\n\nThe scheduler job has a synchronization event (`start = asyncio.Event()`) with the purpose of executing job-group start,  and was passed as a parameter to `job.__call__`. It does not seems to be that necessary in the end as `asyncio.BoundedSemaphore` will handle job execution regardless. This commit removes this redundant event.",
          "timestamp": "2024-04-10T15:37:45+02:00",
          "tree_id": "84a87c5e94f45dc6bff4658bac5c90fb59a4b65f",
          "url": "https://github.com/equinor/ert/commit/c600efbbe3b15f441ffdbaae86a2201d1e270828"
        },
        "date": 1712756465927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1882319403896077,
            "unit": "iter/sec",
            "range": "stddev: 0.019181098153772037",
            "extra": "mean: 5.31259465280001 sec\nrounds: 5"
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
          "id": "9d4c966443e39a23eca3239602819d793f05d2d4",
          "message": "Use the -E flag for qstat to increase performance\n\nThis flag causes qstat to group job status calls going to the same server\ntogether. That makes qstat orders of magnitude faster for calls with many job\nids.",
          "timestamp": "2024-04-10T16:37:56+02:00",
          "tree_id": "6687e9c9117f9042aecc76080373ba47038f090c",
          "url": "https://github.com/equinor/ert/commit/9d4c966443e39a23eca3239602819d793f05d2d4"
        },
        "date": 1712760076076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18234273621164118,
            "unit": "iter/sec",
            "range": "stddev: 0.038434112169812344",
            "extra": "mean: 5.484177877200011 sec\nrounds: 5"
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
          "id": "dbafb2cb1fbfbadd974b43e75cddc0f750291a99",
          "message": "Add test to confirm that the job does not retry when activelly cancelled",
          "timestamp": "2024-04-11T08:45:11+02:00",
          "tree_id": "0d39fe12da478ac1edd78ff4f824774e502f34a9",
          "url": "https://github.com/equinor/ert/commit/dbafb2cb1fbfbadd974b43e75cddc0f750291a99"
        },
        "date": 1712818105887,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18690324917327675,
            "unit": "iter/sec",
            "range": "stddev: 0.25934157562041293",
            "extra": "mean: 5.350361774999999 sec\nrounds: 5"
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
          "id": "21387c147a433e3099d0b7957cefaa142016b95d",
          "message": "Allow pre-commit to run without failure in CI after merge",
          "timestamp": "2024-04-11T10:06:20+02:00",
          "tree_id": "bb9f416c063e04462c8273647115115a41cc3b68",
          "url": "https://github.com/equinor/ert/commit/21387c147a433e3099d0b7957cefaa142016b95d"
        },
        "date": 1712822981868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1890818633095075,
            "unit": "iter/sec",
            "range": "stddev: 0.029321400484380034",
            "extra": "mean: 5.288714541400003 sec\nrounds: 5"
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
          "id": "01c1f9a9ffcbe663e2e9c79052ba4ff18e74562e",
          "message": "Change cwd to tmpdir in some tests currently polluting working dir",
          "timestamp": "2024-04-11T10:58:14+02:00",
          "tree_id": "82fa676f3f33ac6e457a5961a97e6d06475c1487",
          "url": "https://github.com/equinor/ert/commit/01c1f9a9ffcbe663e2e9c79052ba4ff18e74562e"
        },
        "date": 1712826083034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18494926117449198,
            "unit": "iter/sec",
            "range": "stddev: 0.005445938983244739",
            "extra": "mean: 5.406888319799998 sec\nrounds: 5"
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
          "id": "a15736792c89c69f6d6cb88726eb89af22a3648c",
          "message": "Missing exception in async_utils",
          "timestamp": "2024-04-11T12:42:35+02:00",
          "tree_id": "e2a57e978cca4136f050d464ed8d2063c1e9d03f",
          "url": "https://github.com/equinor/ert/commit/a15736792c89c69f6d6cb88726eb89af22a3648c"
        },
        "date": 1712832344388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18808660140784975,
            "unit": "iter/sec",
            "range": "stddev: 0.0409944119036988",
            "extra": "mean: 5.3166998208000225 sec\nrounds: 5"
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
          "id": "4496033be04dab7622780034a19d7ace9902a514",
          "message": "Replace plot selection buttons with qlistwidget items\n\nAdd swap icon from Equinor Design System\nItems are now dragable, and cursor changes to reflect click/drag\nPlotting and colors are still dependant on order top-down",
          "timestamp": "2024-04-11T15:07:34+02:00",
          "tree_id": "e6907e5b60b5a5765083032fcf801f1a0c4a4d8c",
          "url": "https://github.com/equinor/ert/commit/4496033be04dab7622780034a19d7ace9902a514"
        },
        "date": 1712841084812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18598183143057248,
            "unit": "iter/sec",
            "range": "stddev: 0.02049272376012959",
            "extra": "mean: 5.376869301200008 sec\nrounds: 5"
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
          "id": "413dec5ebadfb19821e9c01a4d88483687bc3346",
          "message": "Remove timout on setup steps for Run ert tests github workflow",
          "timestamp": "2024-04-12T13:52:52+02:00",
          "tree_id": "518a88cde938f6abe33481600235155c0b8e992f",
          "url": "https://github.com/equinor/ert/commit/413dec5ebadfb19821e9c01a4d88483687bc3346"
        },
        "date": 1712922966257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19233585599530328,
            "unit": "iter/sec",
            "range": "stddev: 0.05691507681946953",
            "extra": "mean: 5.199238565399992 sec\nrounds: 5"
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
          "id": "1065153f210cd65623165f62c0de0c39493a2ab5",
          "message": "Rename Jobs to Forward Model in GUI",
          "timestamp": "2024-04-12T13:58:06+02:00",
          "tree_id": "66e22d3751e46c17a2ac11ffa858671f3877296d",
          "url": "https://github.com/equinor/ert/commit/1065153f210cd65623165f62c0de0c39493a2ab5"
        },
        "date": 1712923265592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1924678447791252,
            "unit": "iter/sec",
            "range": "stddev: 0.04075748043924909",
            "extra": "mean: 5.1956730806 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}