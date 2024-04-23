window.BENCHMARK_DATA = {
  "lastUpdate": 1713860344265,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "120de548ff20f21eb0a5d7f1a658b5b0bb7a34f8",
          "message": "Let jobs failing in LSF be resubmitted\n\nIf the return_code is larger than SIGNAL_OFFSET the associated\njob_task will be cancelled, and the job cannot be resubmitted.\n\nErt will resubmit LSF jobs are killed by users and the bkill\ncommand, in line with the C-driver.",
          "timestamp": "2024-04-17T09:57:39+02:00",
          "tree_id": "24e26174b574f61ca9fc92499cb95684f6e49f0c",
          "url": "https://github.com/equinor/ert/commit/120de548ff20f21eb0a5d7f1a658b5b0bb7a34f8"
        },
        "date": 1713340843898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18694853556429608,
            "unit": "iter/sec",
            "range": "stddev: 0.035891239268949465",
            "extra": "mean: 5.349065703999997 sec\nrounds: 5"
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
          "id": "5ba5b091377fd5d5695597a43594c1d231b0dc53",
          "message": "Allow reruns on flaky test_update_report",
          "timestamp": "2024-04-17T12:06:08+02:00",
          "tree_id": "1f9acf927b6362b3d8e54f73649406362e1af237",
          "url": "https://github.com/equinor/ert/commit/5ba5b091377fd5d5695597a43594c1d231b0dc53"
        },
        "date": 1713348682236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18315523365910577,
            "unit": "iter/sec",
            "range": "stddev: 0.3475576418342753",
            "extra": "mean: 5.459849440400001 sec\nrounds: 5"
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
          "id": "29d0fe49a2403af01ada62e271aab04927631ede",
          "message": "Move duplicate ev_types to ert/event_type_constants.py\n\nThis commit moves duplicate event type constants found in `job_queue/queue.py` and `ensemble_evaluator/identifiers.py` into a common module `ert/event_type_constants.py`",
          "timestamp": "2024-04-17T20:56:57+02:00",
          "tree_id": "77b3dcddf4e07835df397fd970d7245163db4cb1",
          "url": "https://github.com/equinor/ert/commit/29d0fe49a2403af01ada62e271aab04927631ede"
        },
        "date": 1713380422260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18617740767407262,
            "unit": "iter/sec",
            "range": "stddev: 0.03583106570607512",
            "extra": "mean: 5.371220990199992 sec\nrounds: 5"
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
          "id": "e4d8f7f3902013976f54f324e1bf9dd6d08363c4",
          "message": "Rename JobRunner to ForwardModelRunner\n\nWe no longer call the individual steps in each realization forward model for `Jobs`, and the class name should be changed to reflect that. This commit fixes that.",
          "timestamp": "2024-04-17T20:57:38+02:00",
          "tree_id": "19c421e41abaf61febd359dd60275b0a1adf2a3f",
          "url": "https://github.com/equinor/ert/commit/e4d8f7f3902013976f54f324e1bf9dd6d08363c4"
        },
        "date": 1713380452164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1875997070306097,
            "unit": "iter/sec",
            "range": "stddev: 0.04576336559383231",
            "extra": "mean: 5.330498729600015 sec\nrounds: 5"
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
          "id": "9e04517a999f7147cbc29dae286018b8d955e70c",
          "message": "Reflect failed realizations after ert restart",
          "timestamp": "2024-04-18T08:55:27+02:00",
          "tree_id": "b22500f4c9c8502e825ac859f95d3eed7d8784fc",
          "url": "https://github.com/equinor/ert/commit/9e04517a999f7147cbc29dae286018b8d955e70c"
        },
        "date": 1713423513604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1875984570590297,
            "unit": "iter/sec",
            "range": "stddev: 0.08243900238278273",
            "extra": "mean: 5.330534246800016 sec\nrounds: 5"
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
          "id": "c86ab2db125d49f7e40d4c22413e1d534b5f3e66",
          "message": "Write reponse as yaml",
          "timestamp": "2024-04-18T09:20:26+02:00",
          "tree_id": "86d01a99efa5bba4beaede303df14de7ae359a7b",
          "url": "https://github.com/equinor/ert/commit/c86ab2db125d49f7e40d4c22413e1d534b5f3e66"
        },
        "date": 1713425005611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19194813060296148,
            "unit": "iter/sec",
            "range": "stddev: 0.020629457481501506",
            "extra": "mean: 5.209740761000001 sec\nrounds: 5"
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
          "id": "fc699f6df4148f8194f814892a3b1cb512879f63",
          "message": "Check for selected ensemble in evaluate ensemble panel",
          "timestamp": "2024-04-18T09:33:30+02:00",
          "tree_id": "e2b9491e3f83fc9be210cb49a130465a9aab0fce",
          "url": "https://github.com/equinor/ert/commit/fc699f6df4148f8194f814892a3b1cb512879f63"
        },
        "date": 1713425792252,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18883605487124983,
            "unit": "iter/sec",
            "range": "stddev: 0.02269250750936567",
            "extra": "mean: 5.295598876400004 sec\nrounds: 5"
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
          "id": "d6da82165aaa5444608e8ddeb6f7edba6ed2b3ac",
          "message": "Make flakiness test for qstat faster\n\nDelete the integration test, the unit test is sufficient. The\nintegration test only asserted the presence of logging statements, this\nis now accomplished in the unit test. Remove the mocked started() and\nfunction supplied to the conftest poll() function, it is not used.\n\nLet the polling period be configurable for tests, in line with lsf_driver\n\nThis cuts the test time from 46 seconds to 1 second",
          "timestamp": "2024-04-18T09:56:42+02:00",
          "tree_id": "629d167711345738b6880037996f6e89ea0ede0b",
          "url": "https://github.com/equinor/ert/commit/d6da82165aaa5444608e8ddeb6f7edba6ed2b3ac"
        },
        "date": 1713427189348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1872822912027141,
            "unit": "iter/sec",
            "range": "stddev: 0.017696566814278135",
            "extra": "mean: 5.339533137799992 sec\nrounds: 5"
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
          "id": "0eb422f5bcd6fa63ecc10d5fff09d812515fc0ed",
          "message": "Log stdout when bhist fails\n\nThis log message has been observed with returncode 255 and empty stderr.\nNeed to see what stdout is, maybe 255 can be ignored.",
          "timestamp": "2024-04-18T13:02:27+02:00",
          "tree_id": "d0b6bd0e823da0e96542c42ce1d9929a165f6292",
          "url": "https://github.com/equinor/ert/commit/0eb422f5bcd6fa63ecc10d5fff09d812515fc0ed"
        },
        "date": 1713438339086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18599913433674117,
            "unit": "iter/sec",
            "range": "stddev: 0.1994743825719553",
            "extra": "mean: 5.376369108200015 sec\nrounds: 5"
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
          "id": "108a888514e3edd8ad0f18c853348860edf2aba2",
          "message": "Remove unused code ensemble_evaluator_utils",
          "timestamp": "2024-04-18T13:41:25+02:00",
          "tree_id": "259435415984809a1855d7a12cfa07be8cea6d56",
          "url": "https://github.com/equinor/ert/commit/108a888514e3edd8ad0f18c853348860edf2aba2"
        },
        "date": 1713440676518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18931998933521313,
            "unit": "iter/sec",
            "range": "stddev: 0.017553725427597935",
            "extra": "mean: 5.282062414599989 sec\nrounds: 5"
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
          "id": "9bd744ef70dfe87ee38c8a0049162f63b630241c",
          "message": "Fix plotter filter lookup",
          "timestamp": "2024-04-18T13:57:27+02:00",
          "tree_id": "5fb40ecf45ab4485b4ef6b9dc7985977ccd2b508",
          "url": "https://github.com/equinor/ert/commit/9bd744ef70dfe87ee38c8a0049162f63b630241c"
        },
        "date": 1713441634587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1861023397815375,
            "unit": "iter/sec",
            "range": "stddev: 0.035976968265574394",
            "extra": "mean: 5.373387573600008 sec\nrounds: 5"
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
          "id": "13f44c369e5e2fb82796f7997c5ba6470e0acd3a",
          "message": "Do not cancel the returncode in scheduler\n\nCancellation based on return_code can lead to jobs being able to circumvent resubmission\nbased on return code. This is not functionality we want.",
          "timestamp": "2024-04-18T14:30:57+02:00",
          "tree_id": "ba349b8f4cc8dbc7e20ab675ce872904b93bae96",
          "url": "https://github.com/equinor/ert/commit/13f44c369e5e2fb82796f7997c5ba6470e0acd3a"
        },
        "date": 1713443653481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1849254329838553,
            "unit": "iter/sec",
            "range": "stddev: 0.03701176788571505",
            "extra": "mean: 5.40758501339999 sec\nrounds: 5"
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
          "id": "8548bcd685e05bed0b5b6464fca5595c48ce6bea",
          "message": "Retry bkill on intermittent ssh failures\n\nUse common functionality for retrying shell commands.\n\nRemove artificial test checking logged output on successes, this is not\nneeded as a special case logging for bkill unless the need is proven",
          "timestamp": "2024-04-18T15:14:52+02:00",
          "tree_id": "a7af6884c743c2fb5178b23f098db41b5e18127a",
          "url": "https://github.com/equinor/ert/commit/8548bcd685e05bed0b5b6464fca5595c48ce6bea"
        },
        "date": 1713446302281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18437834938655717,
            "unit": "iter/sec",
            "range": "stddev: 0.018461433996161396",
            "extra": "mean: 5.4236302870000035 sec\nrounds: 5"
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
          "id": "dfabfeaf3c4a76122635260010104d0dd76a322d",
          "message": "Make sure that rerun jobs do not show an error message in the GUI.",
          "timestamp": "2024-04-19T13:31:40+03:00",
          "tree_id": "4a4469e4a67622ec5318a9aa10955f05d2e12626",
          "url": "https://github.com/equinor/ert/commit/dfabfeaf3c4a76122635260010104d0dd76a322d"
        },
        "date": 1713522895882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18402448362016105,
            "unit": "iter/sec",
            "range": "stddev: 0.14348611018282958",
            "extra": "mean: 5.434059535599988 sec\nrounds: 5"
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
      }
    ]
  }
}