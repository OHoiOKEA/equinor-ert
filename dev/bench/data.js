window.BENCHMARK_DATA = {
  "lastUpdate": 1713263632591,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "e5aa0f340607c4266ed34f2d84d1389c7b9386dc",
          "message": "Fix memory being reported without units in GUI",
          "timestamp": "2024-04-12T15:27:57+02:00",
          "tree_id": "c41bbf6570601a0ce90faf44d532826bca2944c9",
          "url": "https://github.com/equinor/ert/commit/e5aa0f340607c4266ed34f2d84d1389c7b9386dc"
        },
        "date": 1712928657377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18250648283869267,
            "unit": "iter/sec",
            "range": "stddev: 0.13468240307683138",
            "extra": "mean: 5.479257418400005 sec\nrounds: 5"
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
          "id": "bb9b46bd31a9df05afe7fb12312454b98fe34828",
          "message": "Fix GUI RunDialog not expanding details header\n\nThis commit fixes an issue where the RunDialog show details section\nwould not expand the header to fill the width, without having a\nrealization set.",
          "timestamp": "2024-04-15T08:39:07+02:00",
          "tree_id": "3d5ca35cb61764431b060f922e17854a0593cb79",
          "url": "https://github.com/equinor/ert/commit/bb9b46bd31a9df05afe7fb12312454b98fe34828"
        },
        "date": 1713163334117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.188191714556108,
            "unit": "iter/sec",
            "range": "stddev: 0.012598388813570203",
            "extra": "mean: 5.3137302158000015 sec\nrounds: 5"
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
          "id": "9e5fb7165f62fbdcc2d6d5db679ee268df81a5f8",
          "message": "Ignore stderr for parsing bsub output",
          "timestamp": "2024-04-15T15:51:03+02:00",
          "tree_id": "5b3f3cac320f4041dacf269e4fa29447f3abd42b",
          "url": "https://github.com/equinor/ert/commit/9e5fb7165f62fbdcc2d6d5db679ee268df81a5f8"
        },
        "date": 1713189253897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18981404746990943,
            "unit": "iter/sec",
            "range": "stddev: 0.014098104080526603",
            "extra": "mean: 5.268313980600022 sec\nrounds: 5"
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
          "id": "8336e5142db31c940a6abc0e9e775f7c0fdd96fa",
          "message": "Fix runtime-error string in lsf_driver",
          "timestamp": "2024-04-15T15:51:35+02:00",
          "tree_id": "ccaf6b2619d0502c3f866c13690be58ef3b59caa",
          "url": "https://github.com/equinor/ert/commit/8336e5142db31c940a6abc0e9e775f7c0fdd96fa"
        },
        "date": 1713189288904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18758616377439946,
            "unit": "iter/sec",
            "range": "stddev: 0.01461169908602252",
            "extra": "mean: 5.330883578400005 sec\nrounds: 5"
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
          "id": "4e7300ec70b2b83ddcdea7268a33fe7da7bd69bd",
          "message": "Fix LSF driver logging wrong message when killing\n\nThis commit fixes some minor logging issues in scheduler lsf driver:\n* sigkill fire-and-forget process logged to terminal instead of devnull after sleeping 30s.\n* stdout and stderr from bkill was missing `strip()` so logs were split\n  over multiple lines.\n* bkill can output `Job <id> is being signaled`, but it should not be\n  interpreted as an error.",
          "timestamp": "2024-04-16T09:03:08+02:00",
          "tree_id": "1e4bd6d0650ecfa8bfc91f22975a5a577d6e59d2",
          "url": "https://github.com/equinor/ert/commit/4e7300ec70b2b83ddcdea7268a33fe7da7bd69bd"
        },
        "date": 1713251173237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18711036593012403,
            "unit": "iter/sec",
            "range": "stddev: 0.032764764297997684",
            "extra": "mean: 5.344439336800013 sec\nrounds: 5"
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
          "id": "decf4ba65c38902839011d23549c9850e0241ddf",
          "message": "Fix bug where single_test_run could not run after anything else",
          "timestamp": "2024-04-16T09:26:31+02:00",
          "tree_id": "e1a22bfee97236c3b0d1598a4891f6dde5ddcc61",
          "url": "https://github.com/equinor/ert/commit/decf4ba65c38902839011d23549c9850e0241ddf"
        },
        "date": 1713252571799,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18912394285091305,
            "unit": "iter/sec",
            "range": "stddev: 0.03047163846102089",
            "extra": "mean: 5.287537817400005 sec\nrounds: 5"
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
          "id": "1eaed7c83af9159c693f07554bb688d21d99f7ed",
          "message": "Have async functions use async_utils eventloop\n\nThis commit:\n* Moves async_utils.py to _ert\n* Makes async functions use event loop created by function in\n  async_utils rather than asyncio.",
          "timestamp": "2024-04-16T09:38:45+02:00",
          "tree_id": "e688bf69844d22d2f893d9c09cce4d66053f79ce",
          "url": "https://github.com/equinor/ert/commit/1eaed7c83af9159c693f07554bb688d21d99f7ed"
        },
        "date": 1713253312997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18537634290816052,
            "unit": "iter/sec",
            "range": "stddev: 0.06312224583461751",
            "extra": "mean: 5.394431588799989 sec\nrounds: 5"
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
          "id": "57b4398186f3c28e62c75df37c8e6ff4e282f01e",
          "message": "Reduce timeout in order to speed up tests\n\nFor the test id's that are expected to timeout (5 of them), the\ntest runtime will indeed be the timeout. 0.2 has been proven to\nbe too small (the initial commit) for MacOS runners. 5 seconds\nis proven to be sufficient, but is probably overkill. Try 1 second\nas a middle ground.",
          "timestamp": "2024-04-16T09:50:37+02:00",
          "tree_id": "66ccd55422aafd36258f41b80f7f13d6da245b0c",
          "url": "https://github.com/equinor/ert/commit/57b4398186f3c28e62c75df37c8e6ff4e282f01e"
        },
        "date": 1713254034860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19355265821703932,
            "unit": "iter/sec",
            "range": "stddev: 0.02440732353078574",
            "extra": "mean: 5.166552654000003 sec\nrounds: 5"
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
          "id": "907f0b8f2f628416edfbe66ef94ffd3d86ed4ab7",
          "message": "Fix documentation for LSF memory booking\n\nThis commit updates the documentation for the LSF queue option `LSF_RESOURCE`. The old example used units in the resource string, but that is not supported by LSF9.",
          "timestamp": "2024-04-16T10:21:18+02:00",
          "tree_id": "7e4e4dc172fcf2025cf2487a9a5c03ee7712932e",
          "url": "https://github.com/equinor/ert/commit/907f0b8f2f628416edfbe66ef94ffd3d86ed4ab7"
        },
        "date": 1713255863332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18930089929979224,
            "unit": "iter/sec",
            "range": "stddev: 0.04367563270093218",
            "extra": "mean: 5.282595083799992 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "330fd7fa7cfcc182e92b56b904f8ac801bf83492",
          "message": "Add some more logging to auto_scaling",
          "timestamp": "2024-04-16T11:33:25+02:00",
          "tree_id": "b81ebbefb518a4e629093bd97c690e67028a920c",
          "url": "https://github.com/equinor/ert/commit/330fd7fa7cfcc182e92b56b904f8ac801bf83492"
        },
        "date": 1713260189304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18863842377862622,
            "unit": "iter/sec",
            "range": "stddev: 0.027594473226397787",
            "extra": "mean: 5.301146924199998 sec\nrounds: 5"
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
          "id": "66baedd6d8ee18eb9b45bd80e4deffb0938a6d01",
          "message": "Make sure to not cancel the job when job is done\n\n- Test that failed realization will not be cancelled",
          "timestamp": "2024-04-16T12:30:44+02:00",
          "tree_id": "2d5d804de77b9c3fc01d5a5a76b05c57bd1666a4",
          "url": "https://github.com/equinor/ert/commit/66baedd6d8ee18eb9b45bd80e4deffb0938a6d01"
        },
        "date": 1713263631920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1878698949766965,
            "unit": "iter/sec",
            "range": "stddev: 0.020065089207427406",
            "extra": "mean: 5.322832591799982 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}