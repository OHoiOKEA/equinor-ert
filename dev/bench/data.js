window.BENCHMARK_DATA = {
  "lastUpdate": 1725449120241,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "c6c77d185831eae8351d5bb683c427485a08a15d",
          "message": "Expose run information as env variables in the forward-model step environment",
          "timestamp": "2024-08-28T10:40:11+02:00",
          "tree_id": "a65290933b39edcfeb1977693b7dfbb833a50563",
          "url": "https://github.com/equinor/ert/commit/c6c77d185831eae8351d5bb683c427485a08a15d"
        },
        "date": 1724834562754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19571807942003977,
            "unit": "iter/sec",
            "range": "stddev: 0.03950920264409892",
            "extra": "mean: 5.109390011200003 sec\nrounds: 5"
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
          "id": "26d537642ccd35e1711e757ddd4b48303cc66ef0",
          "message": "Replace json with orjson\n\nstdlibs json is really slow.\nIt is especially noticable in _ert_forward_model_runner as the status file is\nupdated quite often.",
          "timestamp": "2024-08-28T15:43:15+02:00",
          "tree_id": "b9b20e99e597b3960529e86e5d59a8fe06988539",
          "url": "https://github.com/equinor/ert/commit/26d537642ccd35e1711e757ddd4b48303cc66ef0"
        },
        "date": 1724852751531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1906112857130125,
            "unit": "iter/sec",
            "range": "stddev: 0.07462418355309468",
            "extra": "mean: 5.24627907659999 sec\nrounds: 5"
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
          "id": "51f40c739b60dc8ca479fa1f3b4dbb46e7a7ed2d",
          "message": "Combine rss and oom_score checker in fm_runner\n\nCalling process.children is noticeably slow when the running quick\nforward model steps.\nCombined the two so that children only gets called once.",
          "timestamp": "2024-08-29T09:30:52+02:00",
          "tree_id": "460ea3615de64d712f001af9800c632137ced259",
          "url": "https://github.com/equinor/ert/commit/51f40c739b60dc8ca479fa1f3b4dbb46e7a7ed2d"
        },
        "date": 1724916801996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19319147184023888,
            "unit": "iter/sec",
            "range": "stddev: 0.034117845452463866",
            "extra": "mean: 5.1762119231999915 sec\nrounds: 5"
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
          "id": "3bbf85147c2a6271b9f915ac52809c6ce384c055",
          "message": "Fix test that could give false positive\n\nAdded the expected memory increase to the asserts in the test.\nWithout the increase the test would randomly pass due to variance in\nmemory used in each run even if we did not manage to read the rss of the\nprocess' grandchildren.",
          "timestamp": "2024-08-29T16:09:29+02:00",
          "tree_id": "fd3abb0555c6dc36bf41dda7f6e6584d59d9846d",
          "url": "https://github.com/equinor/ert/commit/3bbf85147c2a6271b9f915ac52809c6ce384c055"
        },
        "date": 1724940717122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18888197500102855,
            "unit": "iter/sec",
            "range": "stddev: 0.025456053523523578",
            "extra": "mean: 5.294311434399998 sec\nrounds: 5"
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
          "id": "24488753f27cab17336be634f8e31f58209dab5c",
          "message": "Remove children_list as it shadows children\n\nRemove unused RealStatusColorHint\nFix get_successful_realizations",
          "timestamp": "2024-08-29T22:09:23+02:00",
          "tree_id": "9415a5cea9b64921f5c9b2758ec507f26848d9fe",
          "url": "https://github.com/equinor/ert/commit/24488753f27cab17336be634f8e31f58209dab5c"
        },
        "date": 1724962319118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1887764592540372,
            "unit": "iter/sec",
            "range": "stddev: 0.24204838787617938",
            "extra": "mean: 5.297270665799999 sec\nrounds: 5"
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
          "id": "cc2f1a87cb9a4955be55213df3c39a9a0e59859e",
          "message": "Add get_experiment_by_name to storage\n\nExperiment names are unique and its easier to get by name than by uuid.\r\nAlso adding get_ensemble_by_name to experiment class because ensembles names\r\nare unique within an experiment.",
          "timestamp": "2024-08-30T09:41:34+02:00",
          "tree_id": "7aee0275ac5ced2fa089b8b62c7fb1d4de2733e5",
          "url": "https://github.com/equinor/ert/commit/cc2f1a87cb9a4955be55213df3c39a9a0e59859e"
        },
        "date": 1725003851576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1950281867970171,
            "unit": "iter/sec",
            "range": "stddev: 0.033610311756791376",
            "extra": "mean: 5.127463965200002 sec\nrounds: 5"
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
          "id": "09cdd6b536775b52347904a4d97fd090a29695fb",
          "message": "Migrate from websockets legacy functionality",
          "timestamp": "2024-08-30T11:56:06+02:00",
          "tree_id": "e483bdaabbc6b0887624c1f80fc5f78461e32b6e",
          "url": "https://github.com/equinor/ert/commit/09cdd6b536775b52347904a4d97fd090a29695fb"
        },
        "date": 1725011914989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19422496097940256,
            "unit": "iter/sec",
            "range": "stddev: 0.03465455722941815",
            "extra": "mean: 5.148668816599991 sec\nrounds: 5"
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
          "id": "f4ffb68e3bf0c4f645bb254d64f79b2143ee2d59",
          "message": "Create and provide asyncio.Lock directly in scheduler.execute\n\nTo make sure that the forward_model_ok_lock is assigned to the correct running loop, this creates and provide the lock to the job directly.",
          "timestamp": "2024-08-30T13:15:48+02:00",
          "tree_id": "1f9a156c4a300c1c2f0f74299f8b191844e1d9e3",
          "url": "https://github.com/equinor/ert/commit/f4ffb68e3bf0c4f645bb254d64f79b2143ee2d59"
        },
        "date": 1725016694296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19242727673468923,
            "unit": "iter/sec",
            "range": "stddev: 0.01360115239727486",
            "extra": "mean: 5.196768446600004 sec\nrounds: 5"
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
          "id": "e68b3be8adc927961d124ab193d6324dfc2a35b3",
          "message": "Change driver `retries` param to `total_attempts`",
          "timestamp": "2024-08-30T13:16:20+02:00",
          "tree_id": "4a7eca5a50413202f959b2b8b7530f208a31f7bf",
          "url": "https://github.com/equinor/ert/commit/e68b3be8adc927961d124ab193d6324dfc2a35b3"
        },
        "date": 1725016728582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19064716788216976,
            "unit": "iter/sec",
            "range": "stddev: 0.03349155904741177",
            "extra": "mean: 5.245291661599998 sec\nrounds: 5"
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
          "id": "c158c6a660e5ff730b2dd9b344fef7119aa6c3af",
          "message": "Increase reruns for flaky test_repeated_submit_same_iens to 10",
          "timestamp": "2024-08-30T14:56:13+02:00",
          "tree_id": "1c1ea45846068dd72def370d45fe25c8677d9011",
          "url": "https://github.com/equinor/ert/commit/c158c6a660e5ff730b2dd9b344fef7119aa6c3af"
        },
        "date": 1725022718316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18941171870428314,
            "unit": "iter/sec",
            "range": "stddev: 0.037374244479541595",
            "extra": "mean: 5.279504387799989 sec\nrounds: 5"
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
          "id": "26b93a2a9299aee6d552c9f614550f62fae9b9a0",
          "message": "Use pydantic for messages sent over websockets\n\nThis replaces the cloudevents library we used before.\nThis was done both because cloudevents does not give any benefit to us\nand because the python cloudevents library is quite slow.",
          "timestamp": "2024-08-30T15:56:44+02:00",
          "tree_id": "febd025adb61c6188d02940802d35b21ffa18813",
          "url": "https://github.com/equinor/ert/commit/26b93a2a9299aee6d552c9f614550f62fae9b9a0"
        },
        "date": 1725026347516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19779383298362974,
            "unit": "iter/sec",
            "range": "stddev: 0.09753597187148991",
            "extra": "mean: 5.055769357999975 sec\nrounds: 5"
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
          "id": "e9c4a9247782ec13197cf7581e68598bfc88fdea",
          "message": "Add test for autoscaling",
          "timestamp": "2024-09-02T08:45:38+02:00",
          "tree_id": "7af47da2b2b8ba3b6a8a15c6d85e446e823345bb",
          "url": "https://github.com/equinor/ert/commit/e9c4a9247782ec13197cf7581e68598bfc88fdea"
        },
        "date": 1725259683186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19339122017320384,
            "unit": "iter/sec",
            "range": "stddev: 0.04582009257908865",
            "extra": "mean: 5.170865560000015 sec\nrounds: 5"
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
          "id": "fde81ca904a087fef7aa93827de682c15289a2b1",
          "message": "Remove false positiv runpath check",
          "timestamp": "2024-09-02T12:43:13+02:00",
          "tree_id": "2922acf417ce81beeb0ed43be76bf07b057e9384",
          "url": "https://github.com/equinor/ert/commit/fde81ca904a087fef7aa93827de682c15289a2b1"
        },
        "date": 1725273941792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19129256685611518,
            "unit": "iter/sec",
            "range": "stddev: 0.048609591483407606",
            "extra": "mean: 5.227594654800003 sec\nrounds: 5"
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
          "id": "6d2094ebbc132d3618cd48f186c5638bc6a8d332",
          "message": "Have restart weights stored in metadata json\n\nUpdate relative weights if restart toggled\r\nStore relative weights in metadata.json file",
          "timestamp": "2024-09-02T14:24:09+02:00",
          "tree_id": "422de6eb1218cc33fcdffc22db04a44531408cd8",
          "url": "https://github.com/equinor/ert/commit/6d2094ebbc132d3618cd48f186c5638bc6a8d332"
        },
        "date": 1725279999285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1882077836415455,
            "unit": "iter/sec",
            "range": "stddev: 0.043642575014206264",
            "extra": "mean: 5.313276532200007 sec\nrounds: 5"
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
          "id": "3e21e15bb10cc82af5f5d32697624be4656204f1",
          "message": "Fix incorrect varname in test",
          "timestamp": "2024-09-02T15:21:49+02:00",
          "tree_id": "a0ebdcb1dd947f39bfe9d165fa9abb1051d5769f",
          "url": "https://github.com/equinor/ert/commit/3e21e15bb10cc82af5f5d32697624be4656204f1"
        },
        "date": 1725283462354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1931596818122975,
            "unit": "iter/sec",
            "range": "stddev: 0.034715315897166324",
            "extra": "mean: 5.177063819000011 sec\nrounds: 5"
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
          "id": "266007da8db36ccb4b987916d291a159ed2e4626",
          "message": "Make tests runnable from git worktree",
          "timestamp": "2024-09-02T15:38:17+02:00",
          "tree_id": "b48efe89eaaef717574bdcfa733df69c23745b54",
          "url": "https://github.com/equinor/ert/commit/266007da8db36ccb4b987916d291a159ed2e4626"
        },
        "date": 1725284444706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1889624970355442,
            "unit": "iter/sec",
            "range": "stddev: 0.06552830614688263",
            "extra": "mean: 5.292055385000009 sec\nrounds: 5"
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
          "id": "de9d63ade2561186bae96854a82260346596884d",
          "message": "Rename and refactor ert.shared.port_handler\n\nThis commit changes `port_handler.py` -> `net_utils.py` and cleans up\nthe functions in the file. `find_available_port` is now called\n`find_available_socket`, and only returns the socket. The caller can use\nthe socket object to get the attached hostname and port, so this is no\nlonger explicitly returned.",
          "timestamp": "2024-09-03T08:31:27+02:00",
          "tree_id": "1c07d95ce540223390020db61dd52dc90f11d708",
          "url": "https://github.com/equinor/ert/commit/de9d63ade2561186bae96854a82260346596884d"
        },
        "date": 1725345240874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18491892627216272,
            "unit": "iter/sec",
            "range": "stddev: 0.09763555061607619",
            "extra": "mean: 5.407775289200009 sec\nrounds: 5"
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
          "id": "fc846ba125bf1ba3baaac96800ae109e4d93dc39",
          "message": "Fix issues highlighted by pyright\n\nAdded one if that is actually needed and made a change to make pyright\nhappy even though it was not a real problem.",
          "timestamp": "2024-09-03T12:36:54+02:00",
          "tree_id": "1cf1ac0e39b661ff7311fe1b9a978332557acad9",
          "url": "https://github.com/equinor/ert/commit/fc846ba125bf1ba3baaac96800ae109e4d93dc39"
        },
        "date": 1725359959901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19095848690646863,
            "unit": "iter/sec",
            "range": "stddev: 0.05292303776340517",
            "extra": "mean: 5.236740279000008 sec\nrounds: 5"
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
          "id": "e1b0f3ea46791347c9d52810a20d7f206004d29b",
          "message": "Don't return duplicate data from export tool\n\nHappens when there are multiple experiments that have ensembles with same names.",
          "timestamp": "2024-09-03T13:06:53+02:00",
          "tree_id": "94eb05b8a5fc242d93232da25b07d2c09cc958d3",
          "url": "https://github.com/equinor/ert/commit/e1b0f3ea46791347c9d52810a20d7f206004d29b"
        },
        "date": 1725361764347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1920436053976892,
            "unit": "iter/sec",
            "range": "stddev: 0.04275056803361811",
            "extra": "mean: 5.207150729799997 sec\nrounds: 5"
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
          "id": "89d13ad5e607d5dc452c8d650b1ca863b93ca9f5",
          "message": "Fix bug checksum failures\n\nThis commit fixes the bug where multiple realizations try to read checksum\nat the same time, leading it to grind to a halt.\nThe issue was fixed by moving the forward_model_ok_lock up a level, so\nthat only one realization can call `verify_checksum` at a time. This\nalso solved the issue where jobs would be shown as stuck in pending even though\nall forward model steps had completed. This was probably due to\nchecksums all being checked and verified at the same time, which can be\nIO intensive.",
          "timestamp": "2024-09-03T13:15:41+02:00",
          "tree_id": "9b10364c5f0b04055c7b8784441beeb522e1df59",
          "url": "https://github.com/equinor/ert/commit/89d13ad5e607d5dc452c8d650b1ca863b93ca9f5"
        },
        "date": 1725362296271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18907019714521503,
            "unit": "iter/sec",
            "range": "stddev: 0.05300772271942814",
            "extra": "mean: 5.289040870000003 sec\nrounds: 5"
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
          "id": "d71be2ae0bf53055b00a785d0194f40659390330",
          "message": "Delete unused fixture `default_ensemble`\n\nDelete unused fixture",
          "timestamp": "2024-09-03T14:24:38+02:00",
          "tree_id": "2524c3299814aff2929402c4c3deaffe4a91262a",
          "url": "https://github.com/equinor/ert/commit/d71be2ae0bf53055b00a785d0194f40659390330"
        },
        "date": 1725366432074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19072821192006684,
            "unit": "iter/sec",
            "range": "stddev: 0.07107997850810462",
            "extra": "mean: 5.243062837600002 sec\nrounds: 5"
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
          "id": "f2c5ca08adfb78e232dd3d7cdbafa17a25691ea9",
          "message": "Catch FileNotFoundError in driver._execute_with_retry\n\nThis commit makes the drivers handle FileNotFound exceptions in `driver._execute_with_retry(...)` and `driver.poll()` for the various drivers. The driver will now return early and avoid retrying invalid shell commands.",
          "timestamp": "2024-09-03T14:44:32+02:00",
          "tree_id": "02792f6aebc7fdfc35720c10a66fa81c48e7cdb8",
          "url": "https://github.com/equinor/ert/commit/f2c5ca08adfb78e232dd3d7cdbafa17a25691ea9"
        },
        "date": 1725367617161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19214501530227393,
            "unit": "iter/sec",
            "range": "stddev: 0.04321687666801048",
            "extra": "mean: 5.204402510399996 sec\nrounds: 5"
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
          "id": "8395bbf017a16e3eab024badf84dd907cf1eef78",
          "message": "Delete unused fixture get_ensemble",
          "timestamp": "2024-09-03T14:56:51+02:00",
          "tree_id": "de84d5976d0d00e42d17118da2944a716a730228",
          "url": "https://github.com/equinor/ert/commit/8395bbf017a16e3eab024badf84dd907cf1eef78"
        },
        "date": 1725368355025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19467792518865204,
            "unit": "iter/sec",
            "range": "stddev: 0.030571635833279327",
            "extra": "mean: 5.136689221599999 sec\nrounds: 5"
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
          "id": "6cac4c0ef502a1468138515834120edecb62afe6",
          "message": "Avoid deprecation warning from pytest-asyncio\n\nThis deprecation warning pops up from pytest-asyncio==0.24",
          "timestamp": "2024-09-03T15:36:28+02:00",
          "tree_id": "20df283c1d7c830d853bf9c5ee0f1017e44d2069",
          "url": "https://github.com/equinor/ert/commit/6cac4c0ef502a1468138515834120edecb62afe6"
        },
        "date": 1725370739357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19175925222453966,
            "unit": "iter/sec",
            "range": "stddev: 0.04668515751125608",
            "extra": "mean: 5.214872233799985 sec\nrounds: 5"
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
          "id": "a96c6f295768bd45694d74a59697fb29d347daa9",
          "message": "Remove unused progress fixture",
          "timestamp": "2024-09-03T15:47:06+02:00",
          "tree_id": "689bc328bca8c27bfd700cf863f6dadf4606fd61",
          "url": "https://github.com/equinor/ert/commit/a96c6f295768bd45694d74a59697fb29d347daa9"
        },
        "date": 1725371377526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19295477038259673,
            "unit": "iter/sec",
            "range": "stddev: 0.05631412951521444",
            "extra": "mean: 5.182561685399998 sec\nrounds: 5"
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
          "id": "8e62a2d136c858073b06ca119c78cfbac84a63ce",
          "message": "Log more usage statistics\n\nSince the string 'Peak memory use' is kept, this should be ok'ish with\nrespect to backwards compatible search statements in the log",
          "timestamp": "2024-09-04T07:22:43+02:00",
          "tree_id": "cec8810192384827f8bf020b21bb9c9ed3149380",
          "url": "https://github.com/equinor/ert/commit/8e62a2d136c858073b06ca119c78cfbac84a63ce"
        },
        "date": 1725427508407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19352092542370383,
            "unit": "iter/sec",
            "range": "stddev: 0.04148932620199354",
            "extra": "mean: 5.167399844800002 sec\nrounds: 5"
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
          "id": "2351645dacf17bcae872f450f2d76a0c379f0a8a",
          "message": "Standardize logging from run_experiment",
          "timestamp": "2024-09-04T09:22:47+02:00",
          "tree_id": "e608cf56836edc543837b751c053e5ab01098ead",
          "url": "https://github.com/equinor/ert/commit/2351645dacf17bcae872f450f2d76a0c379f0a8a"
        },
        "date": 1725434720618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18924919470653367,
            "unit": "iter/sec",
            "range": "stddev: 0.04039352141588251",
            "extra": "mean: 5.284038336599991 sec\nrounds: 5"
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
          "id": "1a93470b4aec334bfbf17d3a8bbf2554ae1193af",
          "message": "Make figure snapshot tests faster",
          "timestamp": "2024-09-04T12:26:49+02:00",
          "tree_id": "1cb55d381c774f3a332d48ef0b10c3c54d2d9b5d",
          "url": "https://github.com/equinor/ert/commit/1a93470b4aec334bfbf17d3a8bbf2554ae1193af"
        },
        "date": 1725445752369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1923369544593418,
            "unit": "iter/sec",
            "range": "stddev: 0.0413552417329648",
            "extra": "mean: 5.199208871799987 sec\nrounds: 5"
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
          "id": "be9a54a85cd5326cb8e239f064564ad437c27da4",
          "message": "Fix typo fligure -> figure",
          "timestamp": "2024-09-04T12:41:27+02:00",
          "tree_id": "493704233598ed41714323a94dcd3e0f470e6544",
          "url": "https://github.com/equinor/ert/commit/be9a54a85cd5326cb8e239f064564ad437c27da4"
        },
        "date": 1725446632701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1883610128205445,
            "unit": "iter/sec",
            "range": "stddev: 0.04787970305199948",
            "extra": "mean: 5.308954252399997 sec\nrounds: 5"
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
          "id": "08c3f6cfd6334dbe8bed2b84bdb1423b3971893c",
          "message": "Only install hdf5 for python<3.10 on mac in github workflows",
          "timestamp": "2024-09-04T13:22:50+02:00",
          "tree_id": "7329444944c17155761b0a69d9527a0a794bfce6",
          "url": "https://github.com/equinor/ert/commit/08c3f6cfd6334dbe8bed2b84bdb1423b3971893c"
        },
        "date": 1725449119773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18889170659025373,
            "unit": "iter/sec",
            "range": "stddev: 0.06508753217179183",
            "extra": "mean: 5.294038674600006 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}