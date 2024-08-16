window.BENCHMARK_DATA = {
  "lastUpdate": 1723797409271,
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
          "id": "5bdb0ab985940ef30e78a81b87a1f26d9138eaec",
          "message": "Hide suggestor location if location not specified",
          "timestamp": "2024-08-16T08:24:12+02:00",
          "tree_id": "2e5abc685d2f9b6bb519c876af04d02aa999fe08",
          "url": "https://github.com/equinor/ert/commit/5bdb0ab985940ef30e78a81b87a1f26d9138eaec"
        },
        "date": 1723789599201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19369500558595298,
            "unit": "iter/sec",
            "range": "stddev: 0.03619927292463398",
            "extra": "mean: 5.162755730200002 sec\nrounds: 5"
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
          "id": "73b2710fd0341b1d99b12f9106b5a5ca97f6fe93",
          "message": "Remove unused and deprecated queue_options",
          "timestamp": "2024-08-16T08:35:55+02:00",
          "tree_id": "2b38133f6de0c2f582cd86d3933049cb91943455",
          "url": "https://github.com/equinor/ert/commit/73b2710fd0341b1d99b12f9106b5a5ca97f6fe93"
        },
        "date": 1723790308493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19103738537087744,
            "unit": "iter/sec",
            "range": "stddev: 0.04022274206295612",
            "extra": "mean: 5.23457750460002 sec\nrounds: 5"
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
          "id": "1336b7c34ccd195abd167d3b7f1f4db5ff4b1c5d",
          "message": "Remove the UI elements that show current memory usage",
          "timestamp": "2024-08-16T08:52:16+02:00",
          "tree_id": "81278d9069a2574d60414031eebbc49b98ffa2af",
          "url": "https://github.com/equinor/ert/commit/1336b7c34ccd195abd167d3b7f1f4db5ff4b1c5d"
        },
        "date": 1723791279564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1905134366731752,
            "unit": "iter/sec",
            "range": "stddev: 0.04400704741524055",
            "extra": "mean: 5.248973602399997 sec\nrounds: 5"
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
          "id": "78e3450ecaf87a2004e7fbed430ec44c57213075",
          "message": "Fix crash in ClosableDialog on pressing esc",
          "timestamp": "2024-08-16T09:26:18+02:00",
          "tree_id": "e507cedb3fb64be485545ff07159a4e98ad00a9a",
          "url": "https://github.com/equinor/ert/commit/78e3450ecaf87a2004e7fbed430ec44c57213075"
        },
        "date": 1723793329222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1922992517462199,
            "unit": "iter/sec",
            "range": "stddev: 0.03448609315183564",
            "extra": "mean: 5.2002282428 sec\nrounds: 5"
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
          "id": "d9d98b103b5532fd3da8faedc3e1ca10737f4cfd",
          "message": "Rename jobqueue_file -> scheduler_file",
          "timestamp": "2024-08-16T09:27:43+02:00",
          "tree_id": "5c8a3b91264d04f2faa56bb7d007d9cb6db7dec1",
          "url": "https://github.com/equinor/ert/commit/d9d98b103b5532fd3da8faedc3e1ca10737f4cfd"
        },
        "date": 1723793403653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1935740144679523,
            "unit": "iter/sec",
            "range": "stddev: 0.057962378801618905",
            "extra": "mean: 5.165982648799991 sec\nrounds: 5"
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
          "id": "f09843abd34dfe3c762d97f3d917dcf4232146ae",
          "message": "Copy parts of grdecl_io to heat-eq for speed\n\nDon't import ert in heat-eq forward model\r\n\r\nImporting ert increases runtime of ES-MDA from 50s to 2min 30s.",
          "timestamp": "2024-08-16T09:50:15+02:00",
          "tree_id": "d7855253a4704d541161cbe35b80e5a37e37df38",
          "url": "https://github.com/equinor/ert/commit/f09843abd34dfe3c762d97f3d917dcf4232146ae"
        },
        "date": 1723794763436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19508436979347613,
            "unit": "iter/sec",
            "range": "stddev: 0.05142387113676318",
            "extra": "mean: 5.125987289799991 sec\nrounds: 5"
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
          "id": "0da5c9c07cfe7932084ce4e59e73e50d5beaf42d",
          "message": "Fix bug where std dev plots were clipped to 0-1 range\n\nDelete unused ImageOut schema\r\n---------\r\n\r\nCo-authored-by: Eivind Jahren <ejah@equinor.com>",
          "timestamp": "2024-08-16T10:08:11+02:00",
          "tree_id": "c46c10d261b1a363847939e0a2d22eaa82f7f755",
          "url": "https://github.com/equinor/ert/commit/0da5c9c07cfe7932084ce4e59e73e50d5beaf42d"
        },
        "date": 1723795834372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.195160780766407,
            "unit": "iter/sec",
            "range": "stddev: 0.05684919878035646",
            "extra": "mean: 5.123980320599998 sec\nrounds: 5"
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
          "id": "7e64413521646f6b6731abe25db0dc15c615d721",
          "message": "Remove translation between JobState and JobStatus\n\nThis commit moves and renames the legacy jobstatus to\nDeprecatedJobStatus to stay compatible with everest. This should later\nbe removed after everest changes to using the new states from scheduler.",
          "timestamp": "2024-08-16T10:34:18+02:00",
          "tree_id": "2bb22ef3a6fb1ea511f6ed0e0170de6fe800352a",
          "url": "https://github.com/equinor/ert/commit/7e64413521646f6b6731abe25db0dc15c615d721"
        },
        "date": 1723797408353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19073379946942076,
            "unit": "iter/sec",
            "range": "stddev: 0.03688515540061629",
            "extra": "mean: 5.242909241999996 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}