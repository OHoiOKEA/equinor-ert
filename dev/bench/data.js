window.BENCHMARK_DATA = {
  "lastUpdate": 1723789563940,
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
          "id": "ee9b68d50a9eaa17dbe428b5f32ce75646d52913",
          "message": "Add heat equation to test-data\n\nThe heat equation provides a natural way to test ert with fields and surfaces.",
          "timestamp": "2024-08-08T07:24:26+02:00",
          "tree_id": "5568c6b4e2ab26be22422d5d2cb88c4504778efd",
          "url": "https://github.com/equinor/ert/commit/ee9b68d50a9eaa17dbe428b5f32ce75646d52913"
        },
        "date": 1723094813375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19225207534249553,
            "unit": "iter/sec",
            "range": "stddev: 0.05192898574071544",
            "extra": "mean: 5.2015043177999924 sec\nrounds: 5"
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
          "id": "33de7d282b05f3a0de75c59794239733569190bb",
          "message": "Make forward_model_ok an async function\n\nforward_model_ok() is in any case called in an async context, but it\ntakes a long time to complete, too long to be sensible in an async\ncontext making the async loop non-responsive as long as it runs.\n\nBy making it async, and including some asyncio.sleep(0) we will\neffectively split up its sync part into smaller parts and make the\nasync loop more responsive than before.\n\nThis commit only mitigates the problem, it does not solve it. A better\nsolution would to run the IO-bound loading parts into async IO, and the\nCPU-bound tasks should be offloaded to different processes to avoid\nPythons GIL.",
          "timestamp": "2024-08-08T08:21:20+02:00",
          "tree_id": "7121ae779967e2f20bef1a97262132c3536ecaf8",
          "url": "https://github.com/equinor/ert/commit/33de7d282b05f3a0de75c59794239733569190bb"
        },
        "date": 1723098239171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19653239617488028,
            "unit": "iter/sec",
            "range": "stddev: 0.04345406426177972",
            "extra": "mean: 5.088219649600012 sec\nrounds: 5"
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
          "id": "17e01cc0acafba5ac4e72015b1c2c74775a08c68",
          "message": "Deprecate slurm queue option MEMORY_PER_CPU",
          "timestamp": "2024-08-08T08:47:51+02:00",
          "tree_id": "3305d54db392f5f5c8cab590016086a9eb8087e2",
          "url": "https://github.com/equinor/ert/commit/17e01cc0acafba5ac4e72015b1c2c74775a08c68"
        },
        "date": 1723099829876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19132799267780184,
            "unit": "iter/sec",
            "range": "stddev: 0.05933445462127801",
            "extra": "mean: 5.226626726200015 sec\nrounds: 5"
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
          "id": "e589a508626ffe46befade475d03ce251d97a365",
          "message": "Remove unused function",
          "timestamp": "2024-08-08T10:44:26+02:00",
          "tree_id": "2ea4f4632ded35459ca35d3f4a91f0883270e3f1",
          "url": "https://github.com/equinor/ert/commit/e589a508626ffe46befade475d03ce251d97a365"
        },
        "date": 1723106820932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1904141050178733,
            "unit": "iter/sec",
            "range": "stddev: 0.03991016885160019",
            "extra": "mean: 5.251711788399996 sec\nrounds: 5"
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
          "id": "9cd683ba9114a52618a08e968a1f094fe86e0792",
          "message": "Try to mitigate flakiness in driver test\n\nIf the echo command takes more than 0.1 sec, this could yield flakiness, so change the\nlogic to avoid that pitfall.",
          "timestamp": "2024-08-08T13:07:00+02:00",
          "tree_id": "3f78bb0be7451ef63d8e76021a8c278b409be351",
          "url": "https://github.com/equinor/ert/commit/9cd683ba9114a52618a08e968a1f094fe86e0792"
        },
        "date": 1723115369916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1912737542676981,
            "unit": "iter/sec",
            "range": "stddev: 0.04586396467454097",
            "extra": "mean: 5.228108810999993 sec\nrounds: 5"
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
          "id": "45b839b26c1a634db44dc0549af9f7a61b587e4b",
          "message": "Fix waiting cursor in load results manually panel",
          "timestamp": "2024-08-09T08:45:52+02:00",
          "tree_id": "fa85dc63a0d712e900a120e00da2f6ab45273f9d",
          "url": "https://github.com/equinor/ert/commit/45b839b26c1a634db44dc0549af9f7a61b587e4b"
        },
        "date": 1723186115237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19295172790607443,
            "unit": "iter/sec",
            "range": "stddev: 0.08390540876332278",
            "extra": "mean: 5.182643404399999 sec\nrounds: 5"
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
          "id": "e5468950b6adbc925113fad1fbe58f33879665f0",
          "message": "Remove unused properties",
          "timestamp": "2024-08-09T09:34:04+02:00",
          "tree_id": "253024e86ec0be9a88e707a5dc32d11a18083f92",
          "url": "https://github.com/equinor/ert/commit/e5468950b6adbc925113fad1fbe58f33879665f0"
        },
        "date": 1723188993125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19505916243252572,
            "unit": "iter/sec",
            "range": "stddev: 0.025058530067766788",
            "extra": "mean: 5.126649717599998 sec\nrounds: 5"
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
          "id": "9ccd528fd7b5013b5f7a67563e317ca5c92e7b59",
          "message": "Fix type error",
          "timestamp": "2024-08-09T14:56:41+02:00",
          "tree_id": "2626b21d0f7f75c40faf58f8a500cce2e0ed19fb",
          "url": "https://github.com/equinor/ert/commit/9ccd528fd7b5013b5f7a67563e317ca5c92e7b59"
        },
        "date": 1723208345863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1904108167051033,
            "unit": "iter/sec",
            "range": "stddev: 0.036705964199265674",
            "extra": "mean: 5.2518024831999925 sec\nrounds: 5"
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
          "id": "ef5f5e28edaac002698fb6e0686dcd0926e1afb6",
          "message": "Limit numpy to one thread in heat equation",
          "timestamp": "2024-08-12T11:53:25+02:00",
          "tree_id": "2589862504f08671de15115c02e3554965eee938",
          "url": "https://github.com/equinor/ert/commit/ef5f5e28edaac002698fb6e0686dcd0926e1afb6"
        },
        "date": 1723456552464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19412861099581968,
            "unit": "iter/sec",
            "range": "stddev: 0.031683792251080985",
            "extra": "mean: 5.151224205800008 sec\nrounds: 5"
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
          "id": "10f9df62b53d679a0b07f1b9d01ae93865f5770a",
          "message": "Fix indentation in docs",
          "timestamp": "2024-08-12T13:10:11+02:00",
          "tree_id": "2651c70027c13f447310c82e9c20ce7cfe7594f6",
          "url": "https://github.com/equinor/ert/commit/10f9df62b53d679a0b07f1b9d01ae93865f5770a"
        },
        "date": 1723461164425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19152716759367233,
            "unit": "iter/sec",
            "range": "stddev: 0.03299084992607",
            "extra": "mean: 5.2211913984000144 sec\nrounds: 5"
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
          "id": "ebc4b0411cd55cc58286ff123dc7af4dd6b2c9d3",
          "message": "Reformat starting_iteration in model_factory by ruff suggestion",
          "timestamp": "2024-08-12T15:44:19+02:00",
          "tree_id": "a6ec85ed0cf58534badd9eb72c02ab9fddaff955",
          "url": "https://github.com/equinor/ert/commit/ebc4b0411cd55cc58286ff123dc7af4dd6b2c9d3"
        },
        "date": 1723470409427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1913541285540428,
            "unit": "iter/sec",
            "range": "stddev: 0.01972413278625882",
            "extra": "mean: 5.225912853600005 sec\nrounds: 5"
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
          "id": "0ecb7e30c5a45cfb13f5c3b001dc1da618f16fca",
          "message": "Do not wait for wheel builds in github workflows\n\n- Due to removal of c code we do not need to build individual\nwheels for each os, so we only build and store wheels once per\npython version.",
          "timestamp": "2024-08-12T15:52:37+02:00",
          "tree_id": "a238591669a4e34d4a7abf83fbe2773786db8d53",
          "url": "https://github.com/equinor/ert/commit/0ecb7e30c5a45cfb13f5c3b001dc1da618f16fca"
        },
        "date": 1723470910168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19020294986731087,
            "unit": "iter/sec",
            "range": "stddev: 0.04074696913732038",
            "extra": "mean: 5.257542013399996 sec\nrounds: 5"
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
          "id": "c4de0c5f1a9ec8b1f2704637f77997a402d05cd7",
          "message": "Run snake oil field storage in same xdist group",
          "timestamp": "2024-08-13T09:54:10+02:00",
          "tree_id": "62be5876c44f4a1d70b7ce8d9bcd0ca9a8343022",
          "url": "https://github.com/equinor/ert/commit/c4de0c5f1a9ec8b1f2704637f77997a402d05cd7"
        },
        "date": 1723535794392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.191350906525987,
            "unit": "iter/sec",
            "range": "stddev: 0.04659270361549354",
            "extra": "mean: 5.226000849200011 sec\nrounds: 5"
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
          "id": "a564d28b3fb1fff24947f25dbcc4f0f3e176eeab",
          "message": "Remove unused filters",
          "timestamp": "2024-08-13T10:05:36+02:00",
          "tree_id": "58d1591831e3d9ee3ed26d59800f7cc634039133",
          "url": "https://github.com/equinor/ert/commit/a564d28b3fb1fff24947f25dbcc4f0f3e176eeab"
        },
        "date": 1723536486978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19615754575698274,
            "unit": "iter/sec",
            "range": "stddev: 0.03100114944531122",
            "extra": "mean: 5.097943064800006 sec\nrounds: 5"
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
          "id": "425d45807f7aaed7261b810b4c02729b178518b4",
          "message": "Remove check locale function",
          "timestamp": "2024-08-13T10:06:16+02:00",
          "tree_id": "81cee963c3011581f40a5180a607f283be2a6060",
          "url": "https://github.com/equinor/ert/commit/425d45807f7aaed7261b810b4c02729b178518b4"
        },
        "date": 1723536525417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18837347223108666,
            "unit": "iter/sec",
            "range": "stddev: 0.03384199249509492",
            "extra": "mean: 5.308603107200002 sec\nrounds: 5"
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
          "id": "2b6b2f60d778b6c96267e35547610cbf9c410169",
          "message": "Use a plain dict for queue system options\n\nThis was previously a list of 2-tuples of strings, owing to compatibility with the C drivers which are now purged",
          "timestamp": "2024-08-13T10:15:29+02:00",
          "tree_id": "e09f38720aa72d0478ba82fe05981b75fb505c23",
          "url": "https://github.com/equinor/ert/commit/2b6b2f60d778b6c96267e35547610cbf9c410169"
        },
        "date": 1723537069122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19624406703696654,
            "unit": "iter/sec",
            "range": "stddev: 0.02110598102578341",
            "extra": "mean: 5.0956954526 sec\nrounds: 5"
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
          "id": "7751ee0282d3858f4af147eac2689b85556e6d2f",
          "message": "Concatenate observations for selected ensembles\n\n* Do not unset observations if found\r\n* Concatenate observations from ensembles",
          "timestamp": "2024-08-13T10:31:17+02:00",
          "tree_id": "20d3a45cf8cd74ba7cea0b3ee9292e930c83438a",
          "url": "https://github.com/equinor/ert/commit/7751ee0282d3858f4af147eac2689b85556e6d2f"
        },
        "date": 1723538027333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19366818462315263,
            "unit": "iter/sec",
            "range": "stddev: 0.03252500457091845",
            "extra": "mean: 5.163470716400013 sec\nrounds: 5"
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
      }
    ]
  }
}