window.BENCHMARK_DATA = {
  "lastUpdate": 1727697941721,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "6e125871a686a20c270565cf0923fea94cae557f",
          "message": "Use default eq in ErtConfig",
          "timestamp": "2024-09-23T11:45:36+02:00",
          "tree_id": "2a4d37a82500dc022ce8e46e08fdb53f1064b785",
          "url": "https://github.com/equinor/ert/commit/6e125871a686a20c270565cf0923fea94cae557f"
        },
        "date": 1727084848276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18538580522000475,
            "unit": "iter/sec",
            "range": "stddev: 0.052172172669777445",
            "extra": "mean: 5.394156250599986 sec\nrounds: 5"
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
          "id": "cf230fb4503c7b6a1a9548d076a8764aef74c638",
          "message": "Upload test results to codecov",
          "timestamp": "2024-09-23T11:46:12+02:00",
          "tree_id": "31cd1fad6d2c9d8e46824bac8bd5b4f12ae182a6",
          "url": "https://github.com/equinor/ert/commit/cf230fb4503c7b6a1a9548d076a8764aef74c638"
        },
        "date": 1727084879441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18794283172235418,
            "unit": "iter/sec",
            "range": "stddev: 0.045694601942696866",
            "extra": "mean: 5.320766909999998 sec\nrounds: 5"
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
          "id": "5ec387a39f7c016ee892d3172cad13e037f7a4b1",
          "message": "Use ord in codepoints for text generators",
          "timestamp": "2024-09-23T11:47:18+02:00",
          "tree_id": "3dbca0df965f87ba12aa5f54650fbd8dfdd62a36",
          "url": "https://github.com/equinor/ert/commit/5ec387a39f7c016ee892d3172cad13e037f7a4b1"
        },
        "date": 1727084943061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18778330450741545,
            "unit": "iter/sec",
            "range": "stddev: 0.03597261223724212",
            "extra": "mean: 5.325287051600003 sec\nrounds: 5"
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
          "id": "d7268158192229564523926a5e69707f48042aa5",
          "message": "Remove python 3.12 x86-64 MacOS 14 build",
          "timestamp": "2024-09-23T12:13:25+02:00",
          "tree_id": "ef643b81256fd066e28c385516e62f0ce75c6024",
          "url": "https://github.com/equinor/ert/commit/d7268158192229564523926a5e69707f48042aa5"
        },
        "date": 1727086514004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18612536378544314,
            "unit": "iter/sec",
            "range": "stddev: 0.022182686869532786",
            "extra": "mean: 5.372722877000013 sec\nrounds: 5"
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
          "id": "1ec2537ca53699e44c972d79bc430af7f42dfc76",
          "message": "Fix broken benchmark",
          "timestamp": "2024-09-23T17:42:57+02:00",
          "tree_id": "68eb67af513223eb6a65f0a47da3d17895215272",
          "url": "https://github.com/equinor/ert/commit/1ec2537ca53699e44c972d79bc430af7f42dfc76"
        },
        "date": 1727106290019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18361998503143026,
            "unit": "iter/sec",
            "range": "stddev: 0.10043640925477887",
            "extra": "mean: 5.446030288200001 sec\nrounds: 5"
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
          "id": "ba1ef0800026ce8745ed88a9152552155161fb8e",
          "message": "Include tail of PRT file when ecl_run detect error count inconsistency",
          "timestamp": "2024-09-24T08:45:54+02:00",
          "tree_id": "e2a1dc9dca1fb670cf0fd57f8a0ff136a0333cca",
          "url": "https://github.com/equinor/ert/commit/ba1ef0800026ce8745ed88a9152552155161fb8e"
        },
        "date": 1727160460563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18555436282596585,
            "unit": "iter/sec",
            "range": "stddev: 0.013684588776505609",
            "extra": "mean: 5.389256198400005 sec\nrounds: 5"
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
          "id": "a36efc5980f4b9d5d818e91b79905271ae267ace",
          "message": "Remove blockfs support",
          "timestamp": "2024-09-24T08:49:41+02:00",
          "tree_id": "9e3380c2730e970877b46ff2ee11c12d03e16df8",
          "url": "https://github.com/equinor/ert/commit/a36efc5980f4b9d5d818e91b79905271ae267ace"
        },
        "date": 1727160688777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18105157427602223,
            "unit": "iter/sec",
            "range": "stddev: 0.0742594665432399",
            "extra": "mean: 5.5232880685999985 sec\nrounds: 5"
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
          "id": "484381b9ae41242665f0615b71052a26c9546db7",
          "message": "Fix flaky stateful storage test",
          "timestamp": "2024-09-24T08:50:34+02:00",
          "tree_id": "e57ba3630dd09a7e1388b77bff3e0b0d49c4d632",
          "url": "https://github.com/equinor/ert/commit/484381b9ae41242665f0615b71052a26c9546db7"
        },
        "date": 1727160741953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18553246693888809,
            "unit": "iter/sec",
            "range": "stddev: 0.026220831153749426",
            "extra": "mean: 5.3898922193999965 sec\nrounds: 5"
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
          "id": "b9b23de63990b357248f631f95815a09fc44e7ec",
          "message": "Refactor reading from contents\n\nMerges the code paths to avoid differing results. Also enables injecting site_config into `from_file_contents`.",
          "timestamp": "2024-09-24T10:41:41+02:00",
          "tree_id": "011a5d69bce3b6abb5cd438b8bf91851d85b16d0",
          "url": "https://github.com/equinor/ert/commit/b9b23de63990b357248f631f95815a09fc44e7ec"
        },
        "date": 1727167418179,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18411163883827134,
            "unit": "iter/sec",
            "range": "stddev: 0.11794920608802988",
            "extra": "mean: 5.431487147200005 sec\nrounds: 5"
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
          "id": "46b6781c5cf2ad0f6986c76c5ab4ed66e25e37c4",
          "message": "Backup blockfs and print migration instructions",
          "timestamp": "2024-09-24T11:15:24Z",
          "tree_id": "7dd3ef85f34fd0b35f94a7169cc1331eb647f68d",
          "url": "https://github.com/equinor/ert/commit/46b6781c5cf2ad0f6986c76c5ab4ed66e25e37c4"
        },
        "date": 1727176635916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18487926677031008,
            "unit": "iter/sec",
            "range": "stddev: 0.029807242820583675",
            "extra": "mean: 5.408935341799998 sec\nrounds: 5"
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
          "id": "e01e6289835330b11624e5869e23685de474575f",
          "message": "Update ert tests path\n\nFix komodo ert tests",
          "timestamp": "2024-09-24T13:46:02+02:00",
          "tree_id": "06245ed2ab2bce2555ce4db029e638c6293b1567",
          "url": "https://github.com/equinor/ert/commit/e01e6289835330b11624e5869e23685de474575f"
        },
        "date": 1727178472035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1830512512843246,
            "unit": "iter/sec",
            "range": "stddev: 0.016565256255565416",
            "extra": "mean: 5.462950911199994 sec\nrounds: 5"
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
          "id": "819a0f8ece03dff0f28158ade847c8949d832731",
          "message": "Let ensemble evaluator evaluate NUM_CPU inconsistencies\n\nIf the forward model runner reports a cpu-time that exceeds\nduration times NUM_CPU, it implies that the user has misconfigured\nsomething, typically NUM_CPU, or that the forward model does not\nrespect NUM_CPU.",
          "timestamp": "2024-09-24T14:49:30+02:00",
          "tree_id": "9f3b0ad09e680b480d5b4f6fb7555e9502773719",
          "url": "https://github.com/equinor/ert/commit/819a0f8ece03dff0f28158ade847c8949d832731"
        },
        "date": 1727182284139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18433066859447916,
            "unit": "iter/sec",
            "range": "stddev: 0.020744399884304286",
            "extra": "mean: 5.425033216799989 sec\nrounds: 5"
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
          "id": "b3a4ec773b88a4e8e302c7e245d377f433d7e4b3",
          "message": "Fix flaky storage test",
          "timestamp": "2024-09-24T13:26:42Z",
          "tree_id": "86890435f8ecbb6f30809e8737bff4b2f1d46228",
          "url": "https://github.com/equinor/ert/commit/b3a4ec773b88a4e8e302c7e245d377f433d7e4b3"
        },
        "date": 1727184515459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1850497257223555,
            "unit": "iter/sec",
            "range": "stddev: 0.054600387251204044",
            "extra": "mean: 5.4039528893999975 sec\nrounds: 5"
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
          "id": "9a5ab894476062b1f4c3d3b13620b827dad8e431",
          "message": "Avoid bsub retrying on known error messages\n\nContrary to earlier belief in the codebase, returncode 255\ndoes not only mean flaky ssh connection. In order to no retry\non known error scenarios, we must detect them explicitly by string\nmatcing.",
          "timestamp": "2024-09-25T07:33:56+02:00",
          "tree_id": "480d6ee7b1b49a8e25bfa449ddcb3c48341b99d5",
          "url": "https://github.com/equinor/ert/commit/9a5ab894476062b1f4c3d3b13620b827dad8e431"
        },
        "date": 1727242541064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18873613517583462,
            "unit": "iter/sec",
            "range": "stddev: 0.045284710480755185",
            "extra": "mean: 5.2984024446000095 sec\nrounds: 5"
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
          "id": "535e314d1494f1a26469e0f4671d85be91e64d3a",
          "message": "Have ForwardModelRunner validate executable_file earlier\n\nThis commit fixes the issue where the ForwardModelRunner on the job_runner side would crash when validating the existence of a ForwardModelStep executable; causing the drivers to hang while waiting for a never coming return code from JobRunner.",
          "timestamp": "2024-09-25T07:46:08+02:00",
          "tree_id": "1fc742b9bc719e9ee752e3d0b29cfdda41e282e9",
          "url": "https://github.com/equinor/ert/commit/535e314d1494f1a26469e0f4671d85be91e64d3a"
        },
        "date": 1727243272812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18474458195406832,
            "unit": "iter/sec",
            "range": "stddev: 0.028010005736406343",
            "extra": "mean: 5.412878631799998 sec\nrounds: 5"
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
          "id": "21af32915792c103bab4bb6708e1cf861719aea8",
          "message": "Remove redudant slot",
          "timestamp": "2024-09-25T09:25:47+02:00",
          "tree_id": "ad03729eac4dbff1e75cb86e871094df023c62ab",
          "url": "https://github.com/equinor/ert/commit/21af32915792c103bab4bb6708e1cf861719aea8"
        },
        "date": 1727249251061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18859853350153588,
            "unit": "iter/sec",
            "range": "stddev: 0.03419744887548824",
            "extra": "mean: 5.302268164199996 sec\nrounds: 5"
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
          "id": "5731434c730519bf525c1e9a0fb5736e07d9d965",
          "message": "Mark all flaky tests as integration_tests",
          "timestamp": "2024-09-25T08:08:03Z",
          "tree_id": "b6a5475062f208958f467179506de445ee47f38a",
          "url": "https://github.com/equinor/ert/commit/5731434c730519bf525c1e9a0fb5736e07d9d965"
        },
        "date": 1727251789896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18750720258760564,
            "unit": "iter/sec",
            "range": "stddev: 0.024300322687147824",
            "extra": "mean: 5.3331284676 sec\nrounds: 5"
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
          "id": "8ca2b4e06b4113e142d3f4e5370be01412bd9b23",
          "message": "Fix flaky test\n\nIncrease the sleep time in the script to give us more time to register\nthe memory usage",
          "timestamp": "2024-09-25T10:45:37+02:00",
          "tree_id": "401740e3f0523014137759b8cb605e9651d26970",
          "url": "https://github.com/equinor/ert/commit/8ca2b4e06b4113e142d3f4e5370be01412bd9b23"
        },
        "date": 1727254047220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18940947510346795,
            "unit": "iter/sec",
            "range": "stddev: 0.024242202898337277",
            "extra": "mean: 5.279566924800008 sec\nrounds: 5"
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
          "id": "e581b2e673e3a451d0acc650934feaadfd95dd79",
          "message": "Extract common code paths in constructors",
          "timestamp": "2024-09-25T12:05:09+02:00",
          "tree_id": "80d5e92dd26b76134ed1bfdf571e6148fd5a5e89",
          "url": "https://github.com/equinor/ert/commit/e581b2e673e3a451d0acc650934feaadfd95dd79"
        },
        "date": 1727258817609,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18746554608924518,
            "unit": "iter/sec",
            "range": "stddev: 0.027950117261676018",
            "extra": "mean: 5.334313535800004 sec\nrounds: 5"
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
          "id": "e2d3a907bd26be7ddf36e88e9764f9cf648df85a",
          "message": "Run all tests in test_komodo before returning error",
          "timestamp": "2024-09-25T15:00:52+02:00",
          "tree_id": "2185fc0cded82c5a253dd782f096c205db69ecdc",
          "url": "https://github.com/equinor/ert/commit/e2d3a907bd26be7ddf36e88e9764f9cf648df85a"
        },
        "date": 1727269364420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18611216722910903,
            "unit": "iter/sec",
            "range": "stddev: 0.020482692868052658",
            "extra": "mean: 5.373103837799993 sec\nrounds: 5"
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
          "id": "53fe7c0e98290ca4480690d074eee754dbaa3be4",
          "message": "Update erts .readthedocs.yml to point to new locations",
          "timestamp": "2024-09-26T16:19:18+02:00",
          "tree_id": "4ae8cdc395d66f39deda6c5051b7fec7681ed721",
          "url": "https://github.com/equinor/ert/commit/53fe7c0e98290ca4480690d074eee754dbaa3be4"
        },
        "date": 1727360482030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18611791337787142,
            "unit": "iter/sec",
            "range": "stddev: 0.03053005201432209",
            "extra": "mean: 5.372937950199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "committer": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "distinct": true,
          "id": "7843b2f116fa39d42106269a9299a7f17197b541",
          "message": "Update everest dependencies",
          "timestamp": "2024-09-27T10:22:49+02:00",
          "tree_id": "d006d7bddd6ef62e2a5ca92ed36bab9199c7813f",
          "url": "https://github.com/equinor/ert/commit/7843b2f116fa39d42106269a9299a7f17197b541"
        },
        "date": 1727425482950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18181480196696212,
            "unit": "iter/sec",
            "range": "stddev: 0.010901361723764685",
            "extra": "mean: 5.500102242399999 sec\nrounds: 5"
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
          "id": "321767c2c6ec212eb5eb715a2312555cf02d68a6",
          "message": "Fix an issue where aborted processes could corrupt storage",
          "timestamp": "2024-09-27T13:15:01+02:00",
          "tree_id": "3040e5a3e80f3adff717e7eaff95224b001a09c7",
          "url": "https://github.com/equinor/ert/commit/321767c2c6ec212eb5eb715a2312555cf02d68a6"
        },
        "date": 1727435810359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1870688128706058,
            "unit": "iter/sec",
            "range": "stddev: 0.04039507474932694",
            "extra": "mean: 5.345626481800005 sec\nrounds: 5"
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
          "id": "3bc3a8890b65a6157e8ba6726d48f7d44e9e7b19",
          "message": "Fix flaky memory test\n\nRegister only the memory allocations of the function we are trying to\ntest.",
          "timestamp": "2024-09-27T14:59:56+02:00",
          "tree_id": "b1df5d8ad00178c947c3f4b417600aa505772b82",
          "url": "https://github.com/equinor/ert/commit/3bc3a8890b65a6157e8ba6726d48f7d44e9e7b19"
        },
        "date": 1727442110949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18509989989214368,
            "unit": "iter/sec",
            "range": "stddev: 0.02768088612784317",
            "extra": "mean: 5.402488064999995 sec\nrounds: 5"
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
          "id": "30dba519abfa9bf1c375fdebd13ebd65bde8be45",
          "message": "Use iens = 0 to avoid error with ensemble_size=1",
          "timestamp": "2024-09-27T16:51:32+02:00",
          "tree_id": "4d5fb5915c08ef38bfab3855f5941ec894565703",
          "url": "https://github.com/equinor/ert/commit/30dba519abfa9bf1c375fdebd13ebd65bde8be45"
        },
        "date": 1727448804406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18823510483728387,
            "unit": "iter/sec",
            "range": "stddev: 0.019859863436263135",
            "extra": "mean: 5.312505341999997 sec\nrounds: 5"
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
          "id": "d6862e57d1b7bc23c6584ae137de4fb702a525fc",
          "message": "Use one experiment per optimization",
          "timestamp": "2024-09-30T08:29:25+02:00",
          "tree_id": "9fd09e297613e984ab7024ca5881dcb1ab099bcd",
          "url": "https://github.com/equinor/ert/commit/d6862e57d1b7bc23c6584ae137de4fb702a525fc"
        },
        "date": 1727677873319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18594022256486195,
            "unit": "iter/sec",
            "range": "stddev: 0.02992270539839856",
            "extra": "mean: 5.378072512800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "committer": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "distinct": true,
          "id": "03d3f9bc091770472ddacdda112a86d8cca8ceb4",
          "message": "Remove the everest restart functionality\n\nThe restart functionality was added to support a research project.\nHowever it turned out to be unnecessary for that project. Since\nfunctionality should not be added for such a purpose only and the\ngeneral usefulness of the feature is unclear it should be removed.",
          "timestamp": "2024-09-30T08:42:12+02:00",
          "tree_id": "398682fe90ee0cecf0cdf43f5755acc5a706ef85",
          "url": "https://github.com/equinor/ert/commit/03d3f9bc091770472ddacdda112a86d8cca8ceb4"
        },
        "date": 1727678652064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18688883203459838,
            "unit": "iter/sec",
            "range": "stddev: 0.02042839279381016",
            "extra": "mean: 5.3507745172 sec\nrounds: 5"
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
          "id": "0e88cbd943bb30e40cac28392f4441896916fb75",
          "message": "Add formatting to simulation mode helptext\n\n* Add formatting to simulation mode helptext\r\n* Emphasize realization-0 executed only",
          "timestamp": "2024-09-30T06:46:27Z",
          "tree_id": "852e905581016103fdf745e445d3fdcde4a120ce",
          "url": "https://github.com/equinor/ert/commit/0e88cbd943bb30e40cac28392f4441896916fb75"
        },
        "date": 1727678888921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18683055197265036,
            "unit": "iter/sec",
            "range": "stddev: 0.03443220017896775",
            "extra": "mean: 5.352443641800017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "86219529+AugustoMagalhaes@users.noreply.github.com",
            "name": "AugustoMagalhaes",
            "username": "AugustoMagalhaes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e607feb6e67d877d346ee1ff67c2248acb4e8e26",
          "message": "Group items in Experiment Panel's drop-down",
          "timestamp": "2024-09-30T11:44:06+02:00",
          "tree_id": "f048006e748fb092b78fda6b0ea979d5b2a734aa",
          "url": "https://github.com/equinor/ert/commit/e607feb6e67d877d346ee1ff67c2248acb4e8e26"
        },
        "date": 1727689559509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1872148217628717,
            "unit": "iter/sec",
            "range": "stddev: 0.02208857042815493",
            "extra": "mean: 5.341457426199997 sec\nrounds: 5"
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
          "id": "ca33dcaf3df559e0afa25f947b91f2382f2102f7",
          "message": "Use wait_for_child for getting RunDialog in test",
          "timestamp": "2024-09-30T14:03:44+02:00",
          "tree_id": "76f4b8ea4d1ff94c304dd53d2e830a933ce4310b",
          "url": "https://github.com/equinor/ert/commit/ca33dcaf3df559e0afa25f947b91f2382f2102f7"
        },
        "date": 1727697940771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17950119623206917,
            "unit": "iter/sec",
            "range": "stddev: 0.03832964405473186",
            "extra": "mean: 5.570993514200007 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}