window.BENCHMARK_DATA = {
  "lastUpdate": 1722259390576,
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
          "id": "9ac8a3373cc45fcc25092658b36aba0ab2dfd7ff",
          "message": "Fix and enforce usage of encoding when writing text files",
          "timestamp": "2024-07-08T12:18:32+02:00",
          "tree_id": "1c1b82520d867d65915e9bb98775e9395e0b4298",
          "url": "https://github.com/equinor/ert/commit/9ac8a3373cc45fcc25092658b36aba0ab2dfd7ff"
        },
        "date": 1720434136782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18445757417966452,
            "unit": "iter/sec",
            "range": "stddev: 0.028832970921317636",
            "extra": "mean: 5.42130082999999 sec\nrounds: 5"
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
          "id": "6ad5642ca5ab3b2ce01f3db759212dd04b5b9a5a",
          "message": "Cache result of row in _Node\n\nrow() used a significant amount of time when profiling",
          "timestamp": "2024-07-08T12:59:17+02:00",
          "tree_id": "0808bb72be36d191abbfa61293942745cf65cff2",
          "url": "https://github.com/equinor/ert/commit/6ad5642ca5ab3b2ce01f3db759212dd04b5b9a5a"
        },
        "date": 1720436552024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1903624156103766,
            "unit": "iter/sec",
            "range": "stddev: 0.012969286165811568",
            "extra": "mean: 5.253137793999974 sec\nrounds: 5"
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
          "id": "9ade4e58a131e1082cc38bc0c30f2b9086c2da5d",
          "message": "Simplify _estimate_duration in snapshot.py",
          "timestamp": "2024-07-08T14:50:03+02:00",
          "tree_id": "86903a1c182c68631e7dfd9a7327b8d0ffae2835",
          "url": "https://github.com/equinor/ert/commit/9ade4e58a131e1082cc38bc0c30f2b9086c2da5d"
        },
        "date": 1720443266151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18661634276611583,
            "unit": "iter/sec",
            "range": "stddev: 0.05248126583588658",
            "extra": "mean: 5.358587491200001 sec\nrounds: 5"
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
          "id": "f41fb0cd2eed28bbe5b3fcff45bc26412a1412a5",
          "message": "Solve ruff collapsible-else-if\n\nThis reduces indentation.",
          "timestamp": "2024-07-08T22:32:54+02:00",
          "tree_id": "714c5550d3ff051565c0eee05a95980e21380e73",
          "url": "https://github.com/equinor/ert/commit/f41fb0cd2eed28bbe5b3fcff45bc26412a1412a5"
        },
        "date": 1720470956778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19225330728543713,
            "unit": "iter/sec",
            "range": "stddev: 0.02465825697968032",
            "extra": "mean: 5.201470987000016 sec\nrounds: 5"
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
          "id": "2b05c45b93ae4f65056ac1b70eac3038ef8efe0c",
          "message": "Fix typing errors\n\nAdd Final annotation to states\nChange literal to str in lookup tables\nAdd None checks to satisfy mypy\nRemove mypy ignores that are not needed",
          "timestamp": "2024-07-09T11:22:33+02:00",
          "tree_id": "e617035355776df8116545a1a2410deed691446d",
          "url": "https://github.com/equinor/ert/commit/2b05c45b93ae4f65056ac1b70eac3038ef8efe0c"
        },
        "date": 1720517143622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18633830718308322,
            "unit": "iter/sec",
            "range": "stddev: 0.023904049625589934",
            "extra": "mean: 5.366583045199979 sec\nrounds: 5"
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
          "id": "ed3ba44d5e46142fd4900b0b50037cbd7b0a8573",
          "message": "Increase timeout",
          "timestamp": "2024-07-10T12:53:44+02:00",
          "tree_id": "60c7703c012d606e39500cb7dbd82384443f89bc",
          "url": "https://github.com/equinor/ert/commit/ed3ba44d5e46142fd4900b0b50037cbd7b0a8573"
        },
        "date": 1720609010276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1856776765857917,
            "unit": "iter/sec",
            "range": "stddev: 0.021373913542607963",
            "extra": "mean: 5.385677042000003 sec\nrounds: 5"
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
          "id": "3b2f306bb6cd6401752e7a7706825693d86a1262",
          "message": "Make ErtConfig fetch its own plugins",
          "timestamp": "2024-07-10T12:54:15+02:00",
          "tree_id": "28badcd265f81ad96847f8668803ff231f4fb0f8",
          "url": "https://github.com/equinor/ert/commit/3b2f306bb6cd6401752e7a7706825693d86a1262"
        },
        "date": 1720609037009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1885014826515884,
            "unit": "iter/sec",
            "range": "stddev: 0.030838037746676806",
            "extra": "mean: 5.30499806119999 sec\nrounds: 5"
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
          "id": "dc3687047defb4e365fb53f5e789c331e9cd1180",
          "message": "Fix typing issues in remaining gui code\n\nAdded casts where needed\nChanged method params to match overridden method\nAdded None check\nTyping added to function signatures\nRemoved the rest of the mypy ignores for gui",
          "timestamp": "2024-07-12T10:34:49+02:00",
          "tree_id": "83a07782e3d4ae403471bff1074afce15e0938ae",
          "url": "https://github.com/equinor/ert/commit/dc3687047defb4e365fb53f5e789c331e9cd1180"
        },
        "date": 1720773469593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18875513174088304,
            "unit": "iter/sec",
            "range": "stddev: 0.028525443704025266",
            "extra": "mean: 5.297869206400003 sec\nrounds: 5"
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
          "id": "9987504293d8fc26582820e3ee4f4550f1f3277d",
          "message": "Have driver.__init__(...) exceptions propagate",
          "timestamp": "2024-07-12T20:37:49+02:00",
          "tree_id": "9ba435b9f3dd6ec1f04e6265443ccb1cb0a1a2d1",
          "url": "https://github.com/equinor/ert/commit/9987504293d8fc26582820e3ee4f4550f1f3277d"
        },
        "date": 1720809654938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18884558849439392,
            "unit": "iter/sec",
            "range": "stddev: 0.035741181233151766",
            "extra": "mean: 5.295331535000014 sec\nrounds: 5"
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
          "id": "99cd99b214e6075af772cdec1c42f7d15f6cc0b5",
          "message": "Remove LOCAL driver as option in hanging job_queue tests\n\n- Also removes dead test code for job queue TORQUE driver",
          "timestamp": "2024-07-16T10:11:08+02:00",
          "tree_id": "a4cef97ca6a1ef0af69b80eb2d73c686aa87ce1f",
          "url": "https://github.com/equinor/ert/commit/99cd99b214e6075af772cdec1c42f7d15f6cc0b5"
        },
        "date": 1721117680205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1844631247655288,
            "unit": "iter/sec",
            "range": "stddev: 0.013140607704144863",
            "extra": "mean: 5.421137700400015 sec\nrounds: 5"
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
          "id": "a22daa8069c1a281bb873ae4699d38b44a1134d4",
          "message": "Use from datetime import datetime\n\nJust a small fix to shorten datetime.datetime type to datetime.",
          "timestamp": "2024-07-16T12:48:13+02:00",
          "tree_id": "2f6b98216a1453a7bfe49332a168afa6a04de06c",
          "url": "https://github.com/equinor/ert/commit/a22daa8069c1a281bb873ae4699d38b44a1134d4"
        },
        "date": 1721127108496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1890196903234726,
            "unit": "iter/sec",
            "range": "stddev: 0.045434076327474725",
            "extra": "mean: 5.290454123000006 sec\nrounds: 5"
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
          "id": "9e03dbd3fb59fdee015451c18896554d72682e65",
          "message": "Only install backport.datetime for python < 3.11",
          "timestamp": "2024-07-18T15:42:48+02:00",
          "tree_id": "10f3356f2dd39977aaac3e8e06cc423301a57a3b",
          "url": "https://github.com/equinor/ert/commit/9e03dbd3fb59fdee015451c18896554d72682e65"
        },
        "date": 1721310374722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1832028607571958,
            "unit": "iter/sec",
            "range": "stddev: 0.0608449468117058",
            "extra": "mean: 5.458430047800016 sec\nrounds: 5"
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
          "id": "a21015db7a89e01ea6a2ed69ff10cdc87da4eea6",
          "message": "Clean up running child process in test",
          "timestamp": "2024-07-22T13:14:33+02:00",
          "tree_id": "d2d10f610971011dc824604c89031d1ed30097e3",
          "url": "https://github.com/equinor/ert/commit/a21015db7a89e01ea6a2ed69ff10cdc87da4eea6"
        },
        "date": 1721647060076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18827082631742423,
            "unit": "iter/sec",
            "range": "stddev: 0.02627320969076109",
            "extra": "mean: 5.311497376199975 sec\nrounds: 5"
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
          "id": "5dea0fc5295d7f0c71342f7a8b39c1843a24f03e",
          "message": "Make sure that scheduler send all events when jobs are finished\n\nWe include scheduler._events.join() and SENTINEL object to make\nsure that the events left in the qeueu will be proccessed once the\njobs are done. To makes sure we won't wait for the queue and\nSENTINEL indefinitely this introduces self._queue_timeout attribute.",
          "timestamp": "2024-07-22T14:45:41+02:00",
          "tree_id": "aaec094e1232426ad48eb4a536b616bc5b2adeec",
          "url": "https://github.com/equinor/ert/commit/5dea0fc5295d7f0c71342f7a8b39c1843a24f03e"
        },
        "date": 1721652528821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1876443445629644,
            "unit": "iter/sec",
            "range": "stddev: 0.044874088223317336",
            "extra": "mean: 5.3292306908 sec\nrounds: 5"
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
          "id": "245f4f5aaf6a3ef3d7f2b7e19a73f5c981a18bf0",
          "message": "Fix missed renames from Simulations -> Experiment in phase strings",
          "timestamp": "2024-07-22T15:44:48+02:00",
          "tree_id": "005531e1ab2e63277ba046ab6ab529ac7edc57e4",
          "url": "https://github.com/equinor/ert/commit/245f4f5aaf6a3ef3d7f2b7e19a73f5c981a18bf0"
        },
        "date": 1721656078388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1876788378484879,
            "unit": "iter/sec",
            "range": "stddev: 0.02802803768216247",
            "extra": "mean: 5.328251237400002 sec\nrounds: 5"
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
          "id": "7c829fbd936e61afdf5216098157443e295cfb19",
          "message": "Add traceback information to ErtThreadError",
          "timestamp": "2024-07-23T11:09:36+03:00",
          "tree_id": "032130c3a7660103c70b42cd4b274dae305ef253",
          "url": "https://github.com/equinor/ert/commit/7c829fbd936e61afdf5216098157443e295cfb19"
        },
        "date": 1721722380105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18342805361876532,
            "unit": "iter/sec",
            "range": "stddev: 0.044611591121604156",
            "extra": "mean: 5.4517287855999825 sec\nrounds: 5"
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
          "id": "20a237ab0109c024a86cacdc97357ddbfec5f2ae",
          "message": "Remove test_run_analysis\n\nThe test mocks a lot of objects which ends up creating unexpected\nfailures in some environments.",
          "timestamp": "2024-07-23T10:22:26+02:00",
          "tree_id": "6a565f2a9f23f0a5b8ee5e250cea06baea47395f",
          "url": "https://github.com/equinor/ert/commit/20a237ab0109c024a86cacdc97357ddbfec5f2ae"
        },
        "date": 1721723139933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19107648585610795,
            "unit": "iter/sec",
            "range": "stddev: 0.024402108634873083",
            "extra": "mean: 5.2335063392 sec\nrounds: 5"
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
          "id": "a27ea66224bb8861405681095c19dc8b96a93e9d",
          "message": "Remove unnecessary mypy ignore",
          "timestamp": "2024-07-23T13:09:42+02:00",
          "tree_id": "21a9a9fb928cff61d0ccf6059189f8fa8b41f1c4",
          "url": "https://github.com/equinor/ert/commit/a27ea66224bb8861405681095c19dc8b96a93e9d"
        },
        "date": 1721733165441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1914197055700464,
            "unit": "iter/sec",
            "range": "stddev: 0.028533925976381522",
            "extra": "mean: 5.224122547999997 sec\nrounds: 5"
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
          "id": "7ad5dc0f8829975c85e7fb61c9c394fda30d480b",
          "message": "Warn on duplicate workflows jobs",
          "timestamp": "2024-07-23T20:26:53+02:00",
          "tree_id": "96c772c08aac4f7c1298bf3d501f4c4c083df10a",
          "url": "https://github.com/equinor/ert/commit/7ad5dc0f8829975c85e7fb61c9c394fda30d480b"
        },
        "date": 1721759416869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18913331643492212,
            "unit": "iter/sec",
            "range": "stddev: 0.12804214127365068",
            "extra": "mean: 5.2872757632 sec\nrounds: 5"
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
          "id": "42d6fc3d06eca9ebea6f45e852f9bbd09f020bbb",
          "message": "Move ert.shared.plugins to ert.plugins",
          "timestamp": "2024-07-24T09:58:41+02:00",
          "tree_id": "e4fc281c5302c23e92f9f133f8d36cebb6787e16",
          "url": "https://github.com/equinor/ert/commit/42d6fc3d06eca9ebea6f45e852f9bbd09f020bbb"
        },
        "date": 1721808106927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1900465147598416,
            "unit": "iter/sec",
            "range": "stddev: 0.11681503112291718",
            "extra": "mean: 5.261869712600003 sec\nrounds: 5"
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
          "id": "147c2e67a2db5b426eaf73a414e05c66bf5195f4",
          "message": "Adjust logger config for new plugin_manager location",
          "timestamp": "2024-07-24T10:47:32+02:00",
          "tree_id": "7bf19a5c5c9b06d1cfabd61db36c806d792984f8",
          "url": "https://github.com/equinor/ert/commit/147c2e67a2db5b426eaf73a414e05c66bf5195f4"
        },
        "date": 1721811051470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1869186169111875,
            "unit": "iter/sec",
            "range": "stddev: 0.008752148339800299",
            "extra": "mean: 5.349921888599999 sec\nrounds: 5"
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
          "id": "6b7b21839ac89814da99e8e651b0271a3383e162",
          "message": "Remove job_queue",
          "timestamp": "2024-07-24T12:40:30+02:00",
          "tree_id": "da36cc103106f89a362a7e48a46d3ba2f2e31918",
          "url": "https://github.com/equinor/ert/commit/6b7b21839ac89814da99e8e651b0271a3383e162"
        },
        "date": 1721817785021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19267109979924027,
            "unit": "iter/sec",
            "range": "stddev: 0.02648470784868745",
            "extra": "mean: 5.190191995800001 sec\nrounds: 5"
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
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "distinct": true,
          "id": "10b9104bc9b8ba8c202ade0b621ddd54604af43a",
          "message": "Due to compatibility in testing we re-export ErtPluginManager",
          "timestamp": "2024-07-24T15:49:39+02:00",
          "tree_id": "c9866c2c70fd579c16f950afbd7e08911ef3022b",
          "url": "https://github.com/equinor/ert/commit/10b9104bc9b8ba8c202ade0b621ddd54604af43a"
        },
        "date": 1721829140750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1945683867865208,
            "unit": "iter/sec",
            "range": "stddev: 0.034356584787478016",
            "extra": "mean: 5.139581082599989 sec\nrounds: 5"
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
          "id": "a51790cf893de69bac5440a69791248981f60951",
          "message": "Remove unneeded build dependencies and run_ert_ctest.sh",
          "timestamp": "2024-07-24T16:44:17+02:00",
          "tree_id": "93ddfcf58375773be0ebf764e2c155447c93b06b",
          "url": "https://github.com/equinor/ert/commit/a51790cf893de69bac5440a69791248981f60951"
        },
        "date": 1721832417563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18902366786897892,
            "unit": "iter/sec",
            "range": "stddev: 0.0745125762121717",
            "extra": "mean: 5.290342798199992 sec\nrounds: 5"
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
          "id": "1fecbdbecd957afc81a0ef94964556a40155563d",
          "message": "Simplify openpbs job states",
          "timestamp": "2024-07-25T12:33:09+02:00",
          "tree_id": "0568259ed0ac74840c28db65214e458b4a4693f0",
          "url": "https://github.com/equinor/ert/commit/1fecbdbecd957afc81a0ef94964556a40155563d"
        },
        "date": 1721903732794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1901980495220069,
            "unit": "iter/sec",
            "range": "stddev: 0.09153870938033008",
            "extra": "mean: 5.257677471000011 sec\nrounds: 5"
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
          "id": "509c224a99b0cedb785fac6eaed9b05e020ad71d",
          "message": "Implement async version of EnsembleEvaluator\n\nThere are two functions in base_run_model (run_ensemble_evaluator_async and run_ensemble_evaluator). run_ensemble_evaluator is a sync vrapper for EnsembleEvaluatorAsync.\nAsync ensemble evaluator follows a similar pattern to Scheduler; ie. uses a set of background tasks responsible for running the ee server, processing events, sending snapshots updates, etc.\nAsync evaluator does not use BatchingDispatcher, although the events are still processed in batches.",
          "timestamp": "2024-07-25T15:57:36+02:00",
          "tree_id": "f91b3f034ea4e939525473fc22436b029d5803b2",
          "url": "https://github.com/equinor/ert/commit/509c224a99b0cedb785fac6eaed9b05e020ad71d"
        },
        "date": 1721916003967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19240069186091285,
            "unit": "iter/sec",
            "range": "stddev: 0.016818304528414547",
            "extra": "mean: 5.197486507600002 sec\nrounds: 5"
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
          "id": "08f449e102128a7248a85a033713e77253d4c543",
          "message": "Fix invalid grid file raising uncaught exception",
          "timestamp": "2024-07-26T13:10:34+02:00",
          "tree_id": "407d0059eb657c32d1f841282b60091828450888",
          "url": "https://github.com/equinor/ert/commit/08f449e102128a7248a85a033713e77253d4c543"
        },
        "date": 1721992390949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19602987155232504,
            "unit": "iter/sec",
            "range": "stddev: 0.018912078871834142",
            "extra": "mean: 5.101263353800016 sec\nrounds: 5"
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
          "id": "708f38a0677e80fe0b70fe4a42207032f5047a83",
          "message": "Fix GUILogHandler lifetime\n\nseparates out the logging.Handler part as the logging module\nkeeps around a weak reference until application exit.",
          "timestamp": "2024-07-26T13:31:11+02:00",
          "tree_id": "0611af0837e530fe261a38dbf1b848e208c780a7",
          "url": "https://github.com/equinor/ert/commit/708f38a0677e80fe0b70fe4a42207032f5047a83"
        },
        "date": 1721993621766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1925498117504744,
            "unit": "iter/sec",
            "range": "stddev: 0.022145480219506828",
            "extra": "mean: 5.193461322600001 sec\nrounds: 5"
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
          "id": "7d073f230d0794f24efae3b2d12f86e997fb5d11",
          "message": "Test that no ee config will raise when running evaluator",
          "timestamp": "2024-07-29T13:16:16+02:00",
          "tree_id": "04ef279318c9ec94eb6dec04cfa8a94c4318238f",
          "url": "https://github.com/equinor/ert/commit/7d073f230d0794f24efae3b2d12f86e997fb5d11"
        },
        "date": 1722251923702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19372647598411571,
            "unit": "iter/sec",
            "range": "stddev: 0.02589785799995746",
            "extra": "mean: 5.161917052999991 sec\nrounds: 5"
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
          "id": "257ecf0de363e1900ebe479fe7085d14b542cdbe",
          "message": "Rename EnsembleEvaluator._stop -> stop and remove async\n\nThis renames EnsembleEvaluator._stop to EnsembleEvaluator.stop. Function stop() is part of the pubic API.\nAdditionally, it removes async keyword as the function does not need to be async now. The same goes for the _signal_cancel().",
          "timestamp": "2024-07-29T15:20:33+02:00",
          "tree_id": "2931dbea878ef33d1cebc1b96cd9d817f6d8e045",
          "url": "https://github.com/equinor/ert/commit/257ecf0de363e1900ebe479fe7085d14b542cdbe"
        },
        "date": 1722259390120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1936170339262147,
            "unit": "iter/sec",
            "range": "stddev: 0.04078945913370897",
            "extra": "mean: 5.164834827399995 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}