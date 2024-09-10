window.BENCHMARK_DATA = {
  "lastUpdate": 1725973102477,
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
          "id": "0303a8ae343994cde6d0a949c3777643569862c5",
          "message": "Add proper validation to load results manually tool",
          "timestamp": "2024-09-04T13:57:58+02:00",
          "tree_id": "b23cadd03dd801616217344174cb5fef6e0573bf",
          "url": "https://github.com/equinor/ert/commit/0303a8ae343994cde6d0a949c3777643569862c5"
        },
        "date": 1725451224183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19332835025283113,
            "unit": "iter/sec",
            "range": "stddev: 0.04794355201067079",
            "extra": "mean: 5.172547113199999 sec\nrounds: 5"
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
          "id": "cb5ea322fb6fc8a2577f6bd9e903df40f5e00ff3",
          "message": "Use plot() instead of deprecated plot_date()\n\nplot_date() has been discouraged since matplotlib 3.5, and deprecated from 3.9. Instead\nwe use plot() directly, and the datatype of the first argument (the x-data) will\ndetermine the kind of plot.",
          "timestamp": "2024-09-04T14:35:47+02:00",
          "tree_id": "ded5cccca730804eed26c2a6da17007ace709e52",
          "url": "https://github.com/equinor/ert/commit/cb5ea322fb6fc8a2577f6bd9e903df40f5e00ff3"
        },
        "date": 1725453492324,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18508683718288718,
            "unit": "iter/sec",
            "range": "stddev: 0.04161998789890466",
            "extra": "mean: 5.402869351599998 sec\nrounds: 5"
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
          "id": "e5140388547d6a2842555000cbf1846236dc13e1",
          "message": "Add default value for ERROR_MIN to docs",
          "timestamp": "2024-09-05T12:03:41+02:00",
          "tree_id": "e4c02023e430381d53dc841ba385bddc0d938276",
          "url": "https://github.com/equinor/ert/commit/e5140388547d6a2842555000cbf1846236dc13e1"
        },
        "date": 1725530769705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19281593610807116,
            "unit": "iter/sec",
            "range": "stddev: 0.0723848096866378",
            "extra": "mean: 5.186293312600009 sec\nrounds: 5"
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
          "id": "0c23813e9e19962053afecaf6fac293fda5c40d7",
          "message": "Avoid stack trace in ecl_run errors",
          "timestamp": "2024-09-05T12:03:07Z",
          "tree_id": "78b977855025f1c94393a4275e96fa12ade4e635",
          "url": "https://github.com/equinor/ert/commit/0c23813e9e19962053afecaf6fac293fda5c40d7"
        },
        "date": 1725537938533,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.194085121175011,
            "unit": "iter/sec",
            "range": "stddev: 0.05516166019526279",
            "extra": "mean: 5.152378471599979 sec\nrounds: 5"
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
          "id": "e33136f1c94adf04749590561a89d7a5158c5317",
          "message": "Get ensembles by id in dark storage\n\n Get ensembles by id in dark storage",
          "timestamp": "2024-09-05T14:26:50+02:00",
          "tree_id": "5a8d1025f477c53e0ca6c6eddf2946c6642def4d",
          "url": "https://github.com/equinor/ert/commit/e33136f1c94adf04749590561a89d7a5158c5317"
        },
        "date": 1725539357630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19422728056218924,
            "unit": "iter/sec",
            "range": "stddev: 0.05259578635276615",
            "extra": "mean: 5.148607328000002 sec\nrounds: 5"
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
          "id": "63c6c9a2b3e044db49595e9bad8ee46f53c89f4d",
          "message": "Delete get_ensemble_by_name from `LocalStorage`\n\nEnsemble names are only unique within a single experiment.",
          "timestamp": "2024-09-05T14:55:23+02:00",
          "tree_id": "49645f2932fd228f2a43f463c33b2ba181cbb0a9",
          "url": "https://github.com/equinor/ert/commit/63c6c9a2b3e044db49595e9bad8ee46f53c89f4d"
        },
        "date": 1725541076081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18484162627742487,
            "unit": "iter/sec",
            "range": "stddev: 0.05188494379158667",
            "extra": "mean: 5.410036798199997 sec\nrounds: 5"
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
          "id": "f60497ead0cf78938d2d0556c3b59605f6eaefee",
          "message": "Use continuous update for target ensemble",
          "timestamp": "2024-09-05T15:16:01+02:00",
          "tree_id": "1f17d875cebdbdf8c0ad52be43191bb8a8d0af7d",
          "url": "https://github.com/equinor/ert/commit/f60497ead0cf78938d2d0556c3b59605f6eaefee"
        },
        "date": 1725542312319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1946394235375652,
            "unit": "iter/sec",
            "range": "stddev: 0.0436176399777298",
            "extra": "mean: 5.137705310800004 sec\nrounds: 5"
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
          "id": "2d21583bae5f52a367c3ea492b2b76bbf07608cc",
          "message": "Fix bug manual update step does not stop progress bar indicator",
          "timestamp": "2024-09-05T15:53:58+02:00",
          "tree_id": "074f6db4883ed5f6d1500a554a9711c96156c8a0",
          "url": "https://github.com/equinor/ert/commit/2d21583bae5f52a367c3ea492b2b76bbf07608cc"
        },
        "date": 1725544588341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18885615548848841,
            "unit": "iter/sec",
            "range": "stddev: 0.04821946818053506",
            "extra": "mean: 5.295035247399994 sec\nrounds: 5"
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
          "id": "0e8f31e12d80a7c8abe47a25f4ad1433c22860f0",
          "message": "Remove unreachable code in test",
          "timestamp": "2024-09-06T13:53:22+02:00",
          "tree_id": "ac1ac0c5b00d1d853b5ccca2b358f25ff3abf790",
          "url": "https://github.com/equinor/ert/commit/0e8f31e12d80a7c8abe47a25f4ad1433c22860f0"
        },
        "date": 1725623755940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1918202593737818,
            "unit": "iter/sec",
            "range": "stddev: 0.11295037800848402",
            "extra": "mean: 5.213213678600004 sec\nrounds: 5"
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
          "id": "56c5ffa6c40b60952e6bab94ed6d49caf5dba8d7",
          "message": "Make event validation stricter\n\nAdd extra=\"forbid\" and strict=True to all the events\nAdd missing ensemble field for EESnapshot and EESnapshotUpdate",
          "timestamp": "2024-09-06T13:53:37+02:00",
          "tree_id": "1fa7751a442ad36f4bd103b8414e375c4c2964c0",
          "url": "https://github.com/equinor/ert/commit/56c5ffa6c40b60952e6bab94ed6d49caf5dba8d7"
        },
        "date": 1725623772631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1894550044807494,
            "unit": "iter/sec",
            "range": "stddev: 0.03202817922393435",
            "extra": "mean: 5.278298151799999 sec\nrounds: 5"
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
          "id": "eb8410d0b7cc66de864f77ff4893d701efd803d0",
          "message": "Only disable weights when weights have been found in storage",
          "timestamp": "2024-09-06T14:11:15+02:00",
          "tree_id": "bff562dbeda6abca0cb0aa8c788355218279f889",
          "url": "https://github.com/equinor/ert/commit/eb8410d0b7cc66de864f77ff4893d701efd803d0"
        },
        "date": 1725624820998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1951669469381839,
            "unit": "iter/sec",
            "range": "stddev: 0.007301565015716859",
            "extra": "mean: 5.123818431800004 sec\nrounds: 5"
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
          "id": "2392288535d38356e3ee2b119782307357ca5667",
          "message": "Assert that last event in status_queue is an EndEvent",
          "timestamp": "2024-09-06T14:33:13+02:00",
          "tree_id": "59f172d541f65b794fde425a76ebc5f45e2f09d4",
          "url": "https://github.com/equinor/ert/commit/2392288535d38356e3ee2b119782307357ca5667"
        },
        "date": 1725626138865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19319533726089025,
            "unit": "iter/sec",
            "range": "stddev: 0.03811742102473588",
            "extra": "mean: 5.176108358399995 sec\nrounds: 5"
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
          "id": "fe1af87d2e08ed86179c18b739a03ec1cbc258d1",
          "message": "Refactor snapshots\n\nThis commit removes some of the excess classes (SnapshotBuilder,\nSnapshotDict) from snapshot.py. It also changes the pydantic classes to\nbe TypedDicts instead.",
          "timestamp": "2024-09-09T10:52:17+02:00",
          "tree_id": "ea082e7656cb8717e6dba8f057c2eecce7872ba9",
          "url": "https://github.com/equinor/ert/commit/fe1af87d2e08ed86179c18b739a03ec1cbc258d1"
        },
        "date": 1725872084338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1904577952206856,
            "unit": "iter/sec",
            "range": "stddev: 0.026167212911803298",
            "extra": "mean: 5.250507068200011 sec\nrounds: 5"
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
          "id": "ee02327ccaa8a3803777bc20ec77f3e50e792106",
          "message": "Generate Ert manifest file using ensemble Experiment content",
          "timestamp": "2024-09-09T11:25:36+02:00",
          "tree_id": "81c1f0d8d8670b471538745bb536afe83b9c008d",
          "url": "https://github.com/equinor/ert/commit/ee02327ccaa8a3803777bc20ec77f3e50e792106"
        },
        "date": 1725874085577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1871587111795876,
            "unit": "iter/sec",
            "range": "stddev: 0.030819401486568154",
            "extra": "mean: 5.343058806599993 sec\nrounds: 5"
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
          "id": "72bf09088eb96b1b43814da09d69604ba3280adf",
          "message": "Everest remove report step from results gendata\n\nRemove report step from results gen data",
          "timestamp": "2024-09-09T12:44:14+02:00",
          "tree_id": "f82fdd9fba8cc91169c379a72d0ffa10e9274fe8",
          "url": "https://github.com/equinor/ert/commit/72bf09088eb96b1b43814da09d69604ba3280adf"
        },
        "date": 1725878802364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1925327284261417,
            "unit": "iter/sec",
            "range": "stddev: 0.027473048584949245",
            "extra": "mean: 5.193922135599996 sec\nrounds: 5"
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
          "id": "7224861efaad777fecaac9724ceb0d69c849c1ea",
          "message": "Propagate errors in opening storage to Suggestor",
          "timestamp": "2024-09-09T12:45:22+02:00",
          "tree_id": "ba50e4f009ac114e7d4765aafd0af4b35f8af7af",
          "url": "https://github.com/equinor/ert/commit/7224861efaad777fecaac9724ceb0d69c849c1ea"
        },
        "date": 1725878869820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1887382669583308,
            "unit": "iter/sec",
            "range": "stddev: 0.0173876618326775",
            "extra": "mean: 5.2983425995999935 sec\nrounds: 5"
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
          "id": "225d6555cffdaa9d0a737f965a61b2e416153bb2",
          "message": "Store & plot scaling factors\n\nSave & plot scaling factors",
          "timestamp": "2024-09-09T13:48:14+02:00",
          "tree_id": "db08bb673524932273025643e7168da8f03acdd8",
          "url": "https://github.com/equinor/ert/commit/225d6555cffdaa9d0a737f965a61b2e416153bb2"
        },
        "date": 1725882649727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19176436156271864,
            "unit": "iter/sec",
            "range": "stddev: 0.033529034717994795",
            "extra": "mean: 5.2147332896000025 sec\nrounds: 5"
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
          "id": "fd5fa70e0fbc7875e0dd7d802f8121d10e491645",
          "message": "Fix deprecation warning second argument of ws_handler",
          "timestamp": "2024-09-09T15:02:46+02:00",
          "tree_id": "84dfd72bfa7c8e54635e25405340f5a333b79cc0",
          "url": "https://github.com/equinor/ert/commit/fd5fa70e0fbc7875e0dd7d802f8121d10e491645"
        },
        "date": 1725887172333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.186177311230498,
            "unit": "iter/sec",
            "range": "stddev: 0.025243677886965108",
            "extra": "mean: 5.371223772600001 sec\nrounds: 5"
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
          "id": "e0e9d9760baa32b971121a5e1f0e149c810e1c7c",
          "message": "Refactor Slurm error-handling",
          "timestamp": "2024-09-10T11:53:00+02:00",
          "tree_id": "c0b6336a7a589849cd8ef46f660935a535d08ce0",
          "url": "https://github.com/equinor/ert/commit/e0e9d9760baa32b971121a5e1f0e149c810e1c7c"
        },
        "date": 1725962134777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1931673207263527,
            "unit": "iter/sec",
            "range": "stddev: 0.02056831507904121",
            "extra": "mean: 5.176859089000016 sec\nrounds: 5"
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
          "id": "54e339cf257800aae33c4e23f995ec5241f74bbe",
          "message": "Cleanup SETENV documentation\n\nLSF is not related to this.",
          "timestamp": "2024-09-10T14:55:47+02:00",
          "tree_id": "771e997167f1148a10493b6636bc35c09d7dc287",
          "url": "https://github.com/equinor/ert/commit/54e339cf257800aae33c4e23f995ec5241f74bbe"
        },
        "date": 1725973102042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19270266016400708,
            "unit": "iter/sec",
            "range": "stddev: 0.04782572253017489",
            "extra": "mean: 5.189341959000001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}