window.BENCHMARK_DATA = {
  "lastUpdate": 1718885456528,
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
          "id": "091a179db827473fcd860fd53c6e1564c0d3f024",
          "message": "Remove concept indeterminate",
          "timestamp": "2024-06-13T11:56:15+02:00",
          "tree_id": "ed4a7665ec272c15af170bd8c2ba5a5d81dc37eb",
          "url": "https://github.com/equinor/ert/commit/091a179db827473fcd860fd53c6e1564c0d3f024"
        },
        "date": 1718272762556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16591789106529586,
            "unit": "iter/sec",
            "range": "stddev: 0.02261912524369543",
            "extra": "mean: 6.027077571799998 sec\nrounds: 5"
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
          "id": "634792cb7e7bf865fae26fdd8464f6edff9f5d82",
          "message": "Fix the snake_oil mpl test",
          "timestamp": "2024-06-13T12:29:43+02:00",
          "tree_id": "53acb8fd3a3233b236566e169333b0349421fb0b",
          "url": "https://github.com/equinor/ert/commit/634792cb7e7bf865fae26fdd8464f6edff9f5d82"
        },
        "date": 1718274777931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1637608309592987,
            "unit": "iter/sec",
            "range": "stddev: 0.042339359618573956",
            "extra": "mean: 6.106466327399994 sec\nrounds: 5"
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
          "id": "b844a0550388c9a44078976e45e245c1d1f4f6c5",
          "message": "Type check ert.gui.plottery",
          "timestamp": "2024-06-13T12:40:28+02:00",
          "tree_id": "95d1e92f914051c3cc4ab1ccd0c758a3768c26f5",
          "url": "https://github.com/equinor/ert/commit/b844a0550388c9a44078976e45e245c1d1f4f6c5"
        },
        "date": 1718275421348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1648087824263823,
            "unit": "iter/sec",
            "range": "stddev: 0.025255450505610462",
            "extra": "mean: 6.06763781200001 sec\nrounds: 5"
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
          "id": "2b214021f128d81045780321b7e6923a692a9f78",
          "message": "Remove the RMS forward model",
          "timestamp": "2024-06-13T13:44:51+02:00",
          "tree_id": "22f0692b75ccb00394801781881dc08d92a68f85",
          "url": "https://github.com/equinor/ert/commit/2b214021f128d81045780321b7e6923a692a9f78"
        },
        "date": 1718279289313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1610473841653496,
            "unit": "iter/sec",
            "range": "stddev: 0.02256866121695675",
            "extra": "mean: 6.209352639800011 sec\nrounds: 5"
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
          "id": "77fa511421ef1a08aa71272a80674562d8067236",
          "message": "Fix signature of overrides from QAbstractItemModel\n\nAlso fixes some typing issues in ert.gui.model so that type checking can\r\nbe turned on for parts of it.",
          "timestamp": "2024-06-14T10:26:08+02:00",
          "tree_id": "97b89665c8224810e072763e5e7335252e842aff",
          "url": "https://github.com/equinor/ert/commit/77fa511421ef1a08aa71272a80674562d8067236"
        },
        "date": 1718353771561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16909622953479816,
            "unit": "iter/sec",
            "range": "stddev: 0.01315950920077687",
            "extra": "mean: 5.9137924172 sec\nrounds: 5"
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
          "id": "c24268bdaae518c731d1dd09f53438beb7bef2da",
          "message": "Show more info for experiment observations",
          "timestamp": "2024-06-14T10:36:36+02:00",
          "tree_id": "88efa48e798098942cfa0dce6288714c5965d80e",
          "url": "https://github.com/equinor/ert/commit/c24268bdaae518c731d1dd09f53438beb7bef2da"
        },
        "date": 1718354387780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16764793757869514,
            "unit": "iter/sec",
            "range": "stddev: 0.047228815132849614",
            "extra": "mean: 5.964881014599973 sec\nrounds: 5"
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
          "id": "b6977ce8c0b9332773d4a64d7ad1933817cb50d5",
          "message": "Drop nans along name dim for single obs datasets",
          "timestamp": "2024-06-14T11:38:54+02:00",
          "tree_id": "2b579594cca6ba5baf6730910d7d9d2207667404",
          "url": "https://github.com/equinor/ert/commit/b6977ce8c0b9332773d4a64d7ad1933817cb50d5"
        },
        "date": 1718358140063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16337530275811288,
            "unit": "iter/sec",
            "range": "stddev: 0.05887327125315794",
            "extra": "mean: 6.120876185800012 sec\nrounds: 5"
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
          "id": "658f45e69478911c40ec42f38739f659e09f8f35",
          "message": "Fix typing",
          "timestamp": "2024-06-14T11:55:10+02:00",
          "tree_id": "cd9a421a17cb39a9b3f08feb60e2c7443c939a0a",
          "url": "https://github.com/equinor/ert/commit/658f45e69478911c40ec42f38739f659e09f8f35"
        },
        "date": 1718359100771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1687913173760657,
            "unit": "iter/sec",
            "range": "stddev: 0.015552686252868844",
            "extra": "mean: 5.924475355399994 sec\nrounds: 5"
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
          "id": "f29176bfdecbb2584e1e461b4f000f915ea7da6a",
          "message": "Bugfix: unswap key_index and obs_name",
          "timestamp": "2024-06-14T14:06:14+02:00",
          "tree_id": "b089c4f3fb6cd45aaff4b40bef977e42ef728162",
          "url": "https://github.com/equinor/ert/commit/f29176bfdecbb2584e1e461b4f000f915ea7da6a"
        },
        "date": 1718366969473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16497958596502116,
            "unit": "iter/sec",
            "range": "stddev: 0.028035655220886215",
            "extra": "mean: 6.061355980199994 sec\nrounds: 5"
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
          "id": "90998f2feeca8c1a41793fe4dfddbb9142b8268e",
          "message": "Combine error and warning boxes that have the same message",
          "timestamp": "2024-06-17T09:54:17+02:00",
          "tree_id": "eef87fd353c77df67a6a2f54929695295cabf631",
          "url": "https://github.com/equinor/ert/commit/90998f2feeca8c1a41793fe4dfddbb9142b8268e"
        },
        "date": 1718611051882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16521293488971855,
            "unit": "iter/sec",
            "range": "stddev: 0.03305332677102909",
            "extra": "mean: 6.0527948412 sec\nrounds: 5"
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
          "id": "03b296d48682fb41cdbcbfc0604d2fd9e34c8d63",
          "message": "Remove websocket DEBUG logging\n\nBy going from logging DEBUG messages to INFO and above, we shave 95% off the log\nsize when doing the poly-example. Logging has been proven to be a bottleneck\nso this change could actually improve perceived application speed.\n\nNot opting to filter out INFO as well for the moment, meaning we will still log\nwhenever the connection is closed and reopened (which we don't want to happen\nso it makes sense to log it).",
          "timestamp": "2024-06-17T13:44:09+02:00",
          "tree_id": "e83bc204dd7ba4eb00c8cb33010466120eea4735",
          "url": "https://github.com/equinor/ert/commit/03b296d48682fb41cdbcbfc0604d2fd9e34c8d63"
        },
        "date": 1718624845142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16899579075363294,
            "unit": "iter/sec",
            "range": "stddev: 0.024331987344029932",
            "extra": "mean: 5.917307144400001 sec\nrounds: 5"
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
          "id": "e6c455c5bf2e2e847a4cf2e8c24875a8dd817917",
          "message": "Ignore SIGNAL_OFFSET when asserting LSF exit_code\n\nIt is not guaranteed that LSF will always add SIGNAL_OFFSET (128) to the exit code\nfrom the job, it depends at least on shell types (csh vs bash) and you can also\nhave a mix of these when bash encapsulates csh. This is not something we want\nto track.",
          "timestamp": "2024-06-17T13:54:43+02:00",
          "tree_id": "4b760329f392e9aca91d4d24bc8264850e05b581",
          "url": "https://github.com/equinor/ert/commit/e6c455c5bf2e2e847a4cf2e8c24875a8dd817917"
        },
        "date": 1718625485518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16637150884173724,
            "unit": "iter/sec",
            "range": "stddev: 0.0374783418684659",
            "extra": "mean: 6.010644532599997 sec\nrounds: 5"
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
          "id": "054d9aaf5fc8a206f83e7fb0213bd9f18e1b3d9c",
          "message": "Change order of data vars in test to reflect reality\n\nThis is the order we get when interacting with storage.",
          "timestamp": "2024-06-17T14:04:28+02:00",
          "tree_id": "581bdfeead4eafe98a7e1fbf8e1472126cf3562b",
          "url": "https://github.com/equinor/ert/commit/054d9aaf5fc8a206f83e7fb0213bd9f18e1b3d9c"
        },
        "date": 1718626088303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16700260532771793,
            "unit": "iter/sec",
            "range": "stddev: 0.026522485724710894",
            "extra": "mean: 5.987930535800013 sec\nrounds: 5"
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
          "id": "c38f6c620eb5717096dea3ab6c759248ceaa449a",
          "message": "Simplify alignment check in get_observations_and_responses",
          "timestamp": "2024-06-17T15:28:28+02:00",
          "tree_id": "65e898ed1980df82cb8b2361d66070dbc2c5cbfe",
          "url": "https://github.com/equinor/ert/commit/c38f6c620eb5717096dea3ab6c759248ceaa449a"
        },
        "date": 1718631117829,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16538904281621342,
            "unit": "iter/sec",
            "range": "stddev: 0.035746120193221285",
            "extra": "mean: 6.046349764000013 sec\nrounds: 5"
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
          "id": "14dcf00dac38cd4b7441c82c57818a61d7860a7c",
          "message": "Replacing progress view with progress widget",
          "timestamp": "2024-06-18T08:29:50+02:00",
          "tree_id": "c8710bc98e9514c1e3b98099f345eb2c5fef6e18",
          "url": "https://github.com/equinor/ert/commit/14dcf00dac38cd4b7441c82c57818a61d7860a7c"
        },
        "date": 1718692382143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16484800920511097,
            "unit": "iter/sec",
            "range": "stddev: 0.04786365116828981",
            "extra": "mean: 6.066193973599991 sec\nrounds: 5"
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
          "id": "d73eb5ec0abf07bc3fefa4f0c98a3275f16c277c",
          "message": "Fix bug where uninitialized ensemble crashes gui",
          "timestamp": "2024-06-18T08:52:37+02:00",
          "tree_id": "0008f8d44fab3f684f428829a964915c1ba5e777",
          "url": "https://github.com/equinor/ert/commit/d73eb5ec0abf07bc3fefa4f0c98a3275f16c277c"
        },
        "date": 1718693747803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16519169592134875,
            "unit": "iter/sec",
            "range": "stddev: 0.02505850197173178",
            "extra": "mean: 6.053573059000018 sec\nrounds: 5"
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
          "id": "e10fdc1511ef0ae6a902fb461deb88dec55de224",
          "message": "Pin netCDF4",
          "timestamp": "2024-06-18T09:51:00+02:00",
          "tree_id": "6babdc4a8009c0d4b2b7472a75bb606744fb15de",
          "url": "https://github.com/equinor/ert/commit/e10fdc1511ef0ae6a902fb461deb88dec55de224"
        },
        "date": 1718697267261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1675213606599221,
            "unit": "iter/sec",
            "range": "stddev: 0.06558822446922219",
            "extra": "mean: 5.969387999599985 sec\nrounds: 5"
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
          "id": "94d69118da346e2d2fe1fc77a92a4a96f5c41315",
          "message": "Fix typo reviced -> received",
          "timestamp": "2024-06-18T14:39:37+02:00",
          "tree_id": "65124026b9458e0e393a41e625391e340da85df3",
          "url": "https://github.com/equinor/ert/commit/94d69118da346e2d2fe1fc77a92a4a96f5c41315"
        },
        "date": 1718714585585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1674556157205094,
            "unit": "iter/sec",
            "range": "stddev: 0.019465330462990007",
            "extra": "mean: 5.971731647799993 sec\nrounds: 5"
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
          "id": "f458eeccd9905fb02eeba6f11180ac90f415b5ea",
          "message": "Enable ruff preview checks\n\nThis extends the number of checks to pass for the ruff linter\nconsiderably, by including rules that are currently only marked\nfor preview in ruff. These rules are in preview due to the automatic\nfix not being ready, but it does not mean that the rule is not\nvalid.\n\nAll existing issues found by enabling this are currently marked\nas exceptions, to be solved one by one. At least, enabling this\nat least ensure that no new issues can be introduced unknowingly\ninto the code base",
          "timestamp": "2024-06-18T15:04:20+02:00",
          "tree_id": "d6bb4878eb0ec42f6b7b0c4fd6f4b078ceef1cf8",
          "url": "https://github.com/equinor/ert/commit/f458eeccd9905fb02eeba6f11180ac90f415b5ea"
        },
        "date": 1718716103761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16371175282472014,
            "unit": "iter/sec",
            "range": "stddev: 0.01733763701663877",
            "extra": "mean: 6.108296947200006 sec\nrounds: 5"
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
          "id": "1da8a7114468667e0f7fd39766fac9d679b05572",
          "message": "Test NUM_CPU from config to built ensemble\n\nThis added test will ensure that a NUM_CPU setting in the configuration\nfile will propagate to the built ensemble inside the BaseRunModel.\n\nThe num_cpu number in the Ensemble object is what is used by\nscheduler/job.py to set the correct CPU count for the compute cluster.",
          "timestamp": "2024-06-18T15:34:29+02:00",
          "tree_id": "0e7f4739cadfc88e5df9390fb0a790fc13e9794e",
          "url": "https://github.com/equinor/ert/commit/1da8a7114468667e0f7fd39766fac9d679b05572"
        },
        "date": 1718717896799,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16813962716426184,
            "unit": "iter/sec",
            "range": "stddev: 0.04532946053324322",
            "extra": "mean: 5.947437952999996 sec\nrounds: 5"
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
          "id": "dd858fad2bb8095084379648cae19149dd53d80c",
          "message": "Use qtpy for qt imports",
          "timestamp": "2024-06-19T07:34:11+02:00",
          "tree_id": "c215f4e9bcb071f25cfd668ffe908339f184ac8d",
          "url": "https://github.com/equinor/ert/commit/dd858fad2bb8095084379648cae19149dd53d80c"
        },
        "date": 1718775459939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16832869585430857,
            "unit": "iter/sec",
            "range": "stddev: 0.017961634553308656",
            "extra": "mean: 5.940757723600006 sec\nrounds: 5"
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
          "id": "390c62b5488efe30c6db9f69573cb811a78abb67",
          "message": "Add migration check for newer storage",
          "timestamp": "2024-06-19T08:10:35+02:00",
          "tree_id": "c7f0235d6482e6d1c32cdd92c0b3b49ba7ab7f64",
          "url": "https://github.com/equinor/ert/commit/390c62b5488efe30c6db9f69573cb811a78abb67"
        },
        "date": 1718777655043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16749414697306023,
            "unit": "iter/sec",
            "range": "stddev: 0.02420562733132496",
            "extra": "mean: 5.970357878600021 sec\nrounds: 5"
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
          "id": "098d07f4e953036d16ef98c8935e179644ec2606",
          "message": "Add ctrl+c copy in update report",
          "timestamp": "2024-06-19T09:21:53+02:00",
          "tree_id": "4cc7aee2493db630764c98b7a9da6f4088950af3",
          "url": "https://github.com/equinor/ert/commit/098d07f4e953036d16ef98c8935e179644ec2606"
        },
        "date": 1718781899432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1721133242793814,
            "unit": "iter/sec",
            "range": "stddev: 0.031087034726152617",
            "extra": "mean: 5.810125417000018 sec\nrounds: 5"
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
          "id": "383d3cc338b885281dd11a6e97430989949954cf",
          "message": "Move model factory to run models\n\nModel factory is used by both cli and gui.",
          "timestamp": "2024-06-19T09:34:53+02:00",
          "tree_id": "0c4a2d4fc09a80814c3fcd7b09e495af9f0c9be9",
          "url": "https://github.com/equinor/ert/commit/383d3cc338b885281dd11a6e97430989949954cf"
        },
        "date": 1718782708891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1659678529914811,
            "unit": "iter/sec",
            "range": "stddev: 0.03995248587779266",
            "extra": "mean: 6.025263217999987 sec\nrounds: 5"
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
          "id": "047ee468b992b25257d3984eaa9a596752993b58",
          "message": "Use pandas for getting obs and responses (#8156)\n\nMainly for readability\r\nSmall diff likely due to removal of conversion from string to float.",
          "timestamp": "2024-06-19T10:54:01+02:00",
          "tree_id": "4a48b866e88d10c5488442f5399eff269cf6e2e0",
          "url": "https://github.com/equinor/ert/commit/047ee468b992b25257d3984eaa9a596752993b58"
        },
        "date": 1718787449942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1675774240926562,
            "unit": "iter/sec",
            "range": "stddev: 0.05153747297927566",
            "extra": "mean: 5.967390926399991 sec\nrounds: 5"
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
          "id": "3f3e682156516d15ccded659adefb3730da43e83",
          "message": "Remove EnKFMain and replace usage with fixtures\n\nThis removes the EnKFMain class, and replaces the remaning\nusage with pytest style fixtures. The current usage was mostly\nas a facade to ErtConfig, and it held state for the workflows.",
          "timestamp": "2024-06-19T14:43:11+02:00",
          "tree_id": "e90ffaeea561b86ac3c60022160ecc77c62a348e",
          "url": "https://github.com/equinor/ert/commit/3f3e682156516d15ccded659adefb3730da43e83"
        },
        "date": 1718801200732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16345156331250027,
            "unit": "iter/sec",
            "range": "stddev: 0.0347770280804156",
            "extra": "mean: 6.1180204075999995 sec\nrounds: 5"
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
          "id": "4f363cc0257b658d01c71125118fca6b654a578d",
          "message": "Add handling for docs to plugin manager",
          "timestamp": "2024-06-20T09:50:59+02:00",
          "tree_id": "6e976b785ab581b148249bc22d3c43d31babc47b",
          "url": "https://github.com/equinor/ert/commit/4f363cc0257b658d01c71125118fca6b654a578d"
        },
        "date": 1718870064643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16771824254884468,
            "unit": "iter/sec",
            "range": "stddev: 0.00965672836152631",
            "extra": "mean: 5.962380625999998 sec\nrounds: 5"
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
          "id": "399136cedc6ac82bbc7388502eec8187b7afb5ae",
          "message": "Use gen data config for gen data (#8196)\n\nCo-authored-by: Yngve S. Kristiansen <yngve.s.kristiansen@webstep.no>",
          "timestamp": "2024-06-20T11:41:54+02:00",
          "tree_id": "a3dd1a4dfee44671c04ab425c8ea3baf6371c1f8",
          "url": "https://github.com/equinor/ert/commit/399136cedc6ac82bbc7388502eec8187b7afb5ae"
        },
        "date": 1718876719940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16733683999011384,
            "unit": "iter/sec",
            "range": "stddev: 0.02440937587280698",
            "extra": "mean: 5.9759703843999885 sec\nrounds: 5"
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
          "id": "d3859627b9dd66b714826c280e2e6efd070bee78",
          "message": "Reset endtime when restarting simulations",
          "timestamp": "2024-06-20T11:43:53+02:00",
          "tree_id": "769323b6efc0f569602583103377466d8db7d396",
          "url": "https://github.com/equinor/ert/commit/d3859627b9dd66b714826c280e2e6efd070bee78"
        },
        "date": 1718876834724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16960101255321328,
            "unit": "iter/sec",
            "range": "stddev: 0.02142578678456297",
            "extra": "mean: 5.896191213400004 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "05addf9ed41308889c8d9e1f25c6b2eeeff19ddf",
          "message": "Refactor Lsf driver to use dataclasses\n\nThis commit refactors lsf driver from using pydantic classes to dataclasses,\nas pydantic was overkill for our usage.\nWe will not be getting any pydantic validation, so invalid job_states\nsuch as `QueuedJob(job_state=bogus_state)` will not be caught.",
          "timestamp": "2024-06-20T14:07:25+02:00",
          "tree_id": "30694b9fa0d7af2f88fba774b13e530b28d6446f",
          "url": "https://github.com/equinor/ert/commit/05addf9ed41308889c8d9e1f25c6b2eeeff19ddf"
        },
        "date": 1718885456004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16834606384073483,
            "unit": "iter/sec",
            "range": "stddev: 0.03075955675432799",
            "extra": "mean: 5.940144825400006 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}