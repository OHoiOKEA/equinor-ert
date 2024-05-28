window.BENCHMARK_DATA = {
  "lastUpdate": 1716907537791,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "0eabeee78361494aded5b3a36cc3a4e45341cd35",
          "message": "Show parameter and response status",
          "timestamp": "2024-05-22T09:49:29+02:00",
          "tree_id": "de48e1d2a41fdde78165493cbf60bee2088f5cc6",
          "url": "https://github.com/equinor/ert/commit/0eabeee78361494aded5b3a36cc3a4e45341cd35"
        },
        "date": 1716364360287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18674062590207263,
            "unit": "iter/sec",
            "range": "stddev: 0.020073809687723123",
            "extra": "mean: 5.355021143199997 sec\nrounds: 5"
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
          "id": "1ff5826dc7ba63b19822e048e6768340c93fefdd",
          "message": "Dynamically load ert.gui in workflows\n\nert.gui modifies matplotlib backend so loading these workflows would\nmake `ErtConfig.from_file` change matplotlib settings.",
          "timestamp": "2024-05-22T11:32:54+02:00",
          "tree_id": "4d223e5008418ffd3dfbd72c0967581d49841140",
          "url": "https://github.com/equinor/ert/commit/1ff5826dc7ba63b19822e048e6768340c93fefdd"
        },
        "date": 1716370562960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18836977073141944,
            "unit": "iter/sec",
            "range": "stddev: 0.04085978758645089",
            "extra": "mean: 5.308707422200007 sec\nrounds: 5"
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
          "id": "51bfb3ca7684a98cb8151321b4f2235637722ec3",
          "message": "Fix `_get_oom_score_for_processtree(...)` not ignoring `ProcessLookupError` in `_ert_forward_model_runner/job.py`",
          "timestamp": "2024-05-22T12:25:33+02:00",
          "tree_id": "37ee6f1b040c3da29f81202d5fa3ab993e39189b",
          "url": "https://github.com/equinor/ert/commit/51bfb3ca7684a98cb8151321b4f2235637722ec3"
        },
        "date": 1716373726205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18606657117589354,
            "unit": "iter/sec",
            "range": "stddev: 0.03173656213193764",
            "extra": "mean: 5.37442052959999 sec\nrounds: 5"
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
          "id": "0ec73be5edd7a606bd0fb5d3adeebffb19ecf488",
          "message": "Pattern match correct casing of analysis module algorithm",
          "timestamp": "2024-05-22T13:35:02+02:00",
          "tree_id": "eb5ded44fb9f74f42078a3b20f85303f7174ae21",
          "url": "https://github.com/equinor/ert/commit/0ec73be5edd7a606bd0fb5d3adeebffb19ecf488"
        },
        "date": 1716377888568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18934853954564265,
            "unit": "iter/sec",
            "range": "stddev: 0.02601750173722124",
            "extra": "mean: 5.281265978600004 sec\nrounds: 5"
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
          "id": "b63ebb1767feb9dd51018bd668934047e0b61f07",
          "message": "Add an index column to the update log table",
          "timestamp": "2024-05-22T14:39:11+02:00",
          "tree_id": "718607ec3960c129369fabb710376f0e08b043e8",
          "url": "https://github.com/equinor/ert/commit/b63ebb1767feb9dd51018bd668934047e0b61f07"
        },
        "date": 1716381740255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1830265481671458,
            "unit": "iter/sec",
            "range": "stddev: 0.1066166499800446",
            "extra": "mean: 5.463688246400011 sec\nrounds: 5"
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
          "id": "2c5831e574cf72697ea36dddfbcbeebec8ac1410",
          "message": "Fix restart enabling logic",
          "timestamp": "2024-05-23T08:20:11+02:00",
          "tree_id": "1ea288d106400a93aaced9fdabd30f3dbb4d4f66",
          "url": "https://github.com/equinor/ert/commit/2c5831e574cf72697ea36dddfbcbeebec8ac1410"
        },
        "date": 1716445423965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1910367351804347,
            "unit": "iter/sec",
            "range": "stddev: 0.02548414476803908",
            "extra": "mean: 5.234595320400013 sec\nrounds: 5"
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
          "id": "2589eb39cb4c3cc0f6c0a74191082208a9c8475a",
          "message": "Plot observation if found",
          "timestamp": "2024-05-23T08:59:28+02:00",
          "tree_id": "6e3b168516fc1a11e50379e11ccae8767c64c4ed",
          "url": "https://github.com/equinor/ert/commit/2589eb39cb4c3cc0f6c0a74191082208a9c8475a"
        },
        "date": 1716447764727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18688268373685948,
            "unit": "iter/sec",
            "range": "stddev: 0.038088784100511246",
            "extra": "mean: 5.350950553599989 sec\nrounds: 5"
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
          "id": "bf6d58c0eb3286244fd6393c754e1746904b88ee",
          "message": "Allow larger columns for treeview in manage experiments",
          "timestamp": "2024-05-23T09:27:12+02:00",
          "tree_id": "72cc880f5565d5f9786921bdd0f51020902cc8ab",
          "url": "https://github.com/equinor/ert/commit/bf6d58c0eb3286244fd6393c754e1746904b88ee"
        },
        "date": 1716449421386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19072265070629196,
            "unit": "iter/sec",
            "range": "stddev: 0.02705144004464792",
            "extra": "mean: 5.243215718200008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oyveid@equinor.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "committer": {
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "4acd828598dd76d5a9e7fd2e5ae72a29bd64f8d6",
          "message": "Update docs for GEN_KW",
          "timestamp": "2024-05-24T10:21:52+02:00",
          "tree_id": "2bfbc2e4c6c4f4fded993d04055e88c3000eeaa8",
          "url": "https://github.com/equinor/ert/commit/4acd828598dd76d5a9e7fd2e5ae72a29bd64f8d6"
        },
        "date": 1716539145469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18801107915793464,
            "unit": "iter/sec",
            "range": "stddev: 0.03282934732803246",
            "extra": "mean: 5.318835488199989 sec\nrounds: 5"
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
          "id": "7203e03adab656a5465f6e37e1b0cb426ee70338",
          "message": "Update block_storage hash",
          "timestamp": "2024-05-24T12:53:30+02:00",
          "tree_id": "2e2849196c12efd998e99fdfb4ee975cec3553d8",
          "url": "https://github.com/equinor/ert/commit/7203e03adab656a5465f6e37e1b0cb426ee70338"
        },
        "date": 1716548194652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18960196696623852,
            "unit": "iter/sec",
            "range": "stddev: 0.10436338026735494",
            "extra": "mean: 5.274206887199989 sec\nrounds: 5"
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
          "id": "9a9713ba9793bba70567053455844e1a4fa16c9d",
          "message": "Fix typo parmeter -> parameter",
          "timestamp": "2024-05-24T14:42:14+02:00",
          "tree_id": "179b8d9819e6b90035ba518de5d4791bffb0689e",
          "url": "https://github.com/equinor/ert/commit/9a9713ba9793bba70567053455844e1a4fa16c9d"
        },
        "date": 1716554763330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18636211403387404,
            "unit": "iter/sec",
            "range": "stddev: 0.07899567312985205",
            "extra": "mean: 5.365897490399982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "parulek@gmail.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "distinct": true,
          "id": "11196173684c072e31437f50f0df614869721f4c",
          "message": "Add driver status message when job fails\n\nThis includes a log from the actual submit command and the output of the\njob files; ie. append logging information from the LSF-out and LSF-err\nfiles into the logging.",
          "timestamp": "2024-05-24T16:01:48+02:00",
          "tree_id": "8be4f3229890971754aacc65b7d41f76796e52dd",
          "url": "https://github.com/equinor/ert/commit/11196173684c072e31437f50f0df614869721f4c"
        },
        "date": 1716559489472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18723856859796786,
            "unit": "iter/sec",
            "range": "stddev: 0.02348117473376272",
            "extra": "mean: 5.340779987199994 sec\nrounds: 5"
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
          "id": "23fc482bb2366576fc0b154f3df2406bdde40108",
          "message": "Change default MAX_SUBMIT to 1\n\nWe do not want resubmission to happen by default for realizations that\nfail. Forward model setups may or may not be compatible with\nresubmissions, and flakyness should not be assumed by default.",
          "timestamp": "2024-05-25T23:10:13+02:00",
          "tree_id": "c16a95ce046a11a6e6c5e6a849bc6dfbffd40c2e",
          "url": "https://github.com/equinor/ert/commit/23fc482bb2366576fc0b154f3df2406bdde40108"
        },
        "date": 1716671592663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1924993703646856,
            "unit": "iter/sec",
            "range": "stddev: 0.023383957460333626",
            "extra": "mean: 5.194822186200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oyveid@equinor.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "committer": {
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "a073b78526304f885e7d2429c86300afaa5584b6",
          "message": "Propagate debug logs from callbacks",
          "timestamp": "2024-05-27T09:11:58+02:00",
          "tree_id": "4ca1b6865d22f1e1735e7ce735c053c324d62487",
          "url": "https://github.com/equinor/ert/commit/a073b78526304f885e7d2429c86300afaa5584b6"
        },
        "date": 1716794115604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18584075851098575,
            "unit": "iter/sec",
            "range": "stddev: 0.11830389249444241",
            "extra": "mean: 5.380950917399997 sec\nrounds: 5"
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
          "id": "fd5ee1928ccc8c83d33f407e76afb82980c728af",
          "message": "Add migration feedback",
          "timestamp": "2024-05-27T11:55:25+02:00",
          "tree_id": "9d9dc76cd67eec2650772eea34dbd8b27dbed7a9",
          "url": "https://github.com/equinor/ert/commit/fd5ee1928ccc8c83d33f407e76afb82980c728af"
        },
        "date": 1716803909453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1904537127589862,
            "unit": "iter/sec",
            "range": "stddev: 0.014595440938869038",
            "extra": "mean: 5.250619615200003 sec\nrounds: 5"
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
          "id": "706806d3f1d14a55aab73608a5b57c43ce228d3a",
          "message": "Add created at for experiment in GUI",
          "timestamp": "2024-05-27T13:29:16+02:00",
          "tree_id": "27bb02dccca4160279e6f62a000ce96317cabdf0",
          "url": "https://github.com/equinor/ert/commit/706806d3f1d14a55aab73608a5b57c43ce228d3a"
        },
        "date": 1716809540830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18735262057857777,
            "unit": "iter/sec",
            "range": "stddev: 0.015201454741138628",
            "extra": "mean: 5.337528756800009 sec\nrounds: 5"
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
          "id": "a5e3d53aa6bdafa0e5ded7377a9bd8439e130da0",
          "message": "Change which lines are ignored in coverage",
          "timestamp": "2024-05-27T15:07:47+02:00",
          "tree_id": "e353f196fb582fd29584b63cdbdbe92a41b4f2a5",
          "url": "https://github.com/equinor/ert/commit/a5e3d53aa6bdafa0e5ded7377a9bd8439e130da0"
        },
        "date": 1716815456310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18863994753152794,
            "unit": "iter/sec",
            "range": "stddev: 0.02281427511570736",
            "extra": "mean: 5.301104103800003 sec\nrounds: 5"
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
          "id": "e6997464dc8a43a99b67615d521ee7f2edef303d",
          "message": "Simplify onKeyPress logic",
          "timestamp": "2024-05-27T15:10:58+02:00",
          "tree_id": "2df4da057d50368c5ccb328678f6d88349f2c5f3",
          "url": "https://github.com/equinor/ert/commit/e6997464dc8a43a99b67615d521ee7f2edef303d"
        },
        "date": 1716815672144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18573150135393912,
            "unit": "iter/sec",
            "range": "stddev: 0.04062006256907303",
            "extra": "mean: 5.384116279199998 sec\nrounds: 5"
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
          "id": "9e4fb6aed0d2650f90fa59a24ba2e7e7cac19a0c",
          "message": "Avoid using abspath for commands\n\nIf the user specifies a command we would like to avoid\nhardcoding the path to it in case job_dispatch.py runs\nin a different environment.",
          "timestamp": "2024-05-27T15:32:05+02:00",
          "tree_id": "3481ea712376b969cb2ba3537be08181bb675f27",
          "url": "https://github.com/equinor/ert/commit/9e4fb6aed0d2650f90fa59a24ba2e7e7cac19a0c"
        },
        "date": 1716816909453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19013073600262534,
            "unit": "iter/sec",
            "range": "stddev: 0.0399643459484822",
            "extra": "mean: 5.259538888999998 sec\nrounds: 5"
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
          "id": "0a55f0a194b6f3cf1aa1de46ffe6ca8bfc5167d2",
          "message": "Let monitor emit optional heartbeats\n\nThis allows the base_run_model to also being able to\ncheck regularly if there are other tasks at hand, like terminating\nthe experiment.",
          "timestamp": "2024-05-27T17:57:29+02:00",
          "tree_id": "36df374dfd1c9d01edef85672a36967697f0b52d",
          "url": "https://github.com/equinor/ert/commit/0a55f0a194b6f3cf1aa1de46ffe6ca8bfc5167d2"
        },
        "date": 1716825633986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18531944954506518,
            "unit": "iter/sec",
            "range": "stddev: 0.21576818155222338",
            "extra": "mean: 5.396087687800002 sec\nrounds: 5"
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
          "id": "53503e1a238b08536036d3d2b9377ada1c70aa0b",
          "message": "Move get_machine_name to a more public place\n\nAs this function is used outside of ert, it should not be hidden below\nensemble_evalutor.config.\n\nport_handler.py serves as a placeholder for the code, but the function\nbut exposed and should be used as ert.shared.get_machine.name()",
          "timestamp": "2024-05-27T20:44:01+02:00",
          "tree_id": "0c94da6711cbafe0509af9063e5513f3f477f054",
          "url": "https://github.com/equinor/ert/commit/53503e1a238b08536036d3d2b9377ada1c70aa0b"
        },
        "date": 1716835638210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18820287299590832,
            "unit": "iter/sec",
            "range": "stddev: 0.027588123933779244",
            "extra": "mean: 5.313415167800019 sec\nrounds: 5"
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
          "id": "a5273b53fcd5869e42b4b5df7c7fc79acd82a028",
          "message": "Combine obs & ds",
          "timestamp": "2024-05-28T09:19:47+02:00",
          "tree_id": "a6b4debbf7b837282d021702b06a2637082dc9b1",
          "url": "https://github.com/equinor/ert/commit/a5273b53fcd5869e42b4b5df7c7fc79acd82a028"
        },
        "date": 1716881013217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16593640890068945,
            "unit": "iter/sec",
            "range": "stddev: 0.0184637985756995",
            "extra": "mean: 6.0264049742 sec\nrounds: 5"
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
          "id": "9f9307b7eec9e7db8ed38218c37aad6570ab097f",
          "message": "Log queue system used when logging orchestrator",
          "timestamp": "2024-05-28T09:22:50+02:00",
          "tree_id": "edc5a8242b3ee852e171f9114d433603fac6a3e3",
          "url": "https://github.com/equinor/ert/commit/9f9307b7eec9e7db8ed38218c37aad6570ab097f"
        },
        "date": 1716881179245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16615404285242097,
            "unit": "iter/sec",
            "range": "stddev: 0.02789107777258859",
            "extra": "mean: 6.0185113936000105 sec\nrounds: 5"
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
          "id": "59d9933a856f2f9a921e66c139667d429833d151",
          "message": "Be explicit when checking the the content for stdout and stderr files",
          "timestamp": "2024-05-28T09:24:38+02:00",
          "tree_id": "5ecab739818103ef567b005d25c5f360c71c028e",
          "url": "https://github.com/equinor/ert/commit/59d9933a856f2f9a921e66c139667d429833d151"
        },
        "date": 1716881274346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16533383996312942,
            "unit": "iter/sec",
            "range": "stddev: 0.02449556846425206",
            "extra": "mean: 6.04836856280001 sec\nrounds: 5"
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
          "id": "24f69370232dc86110502c5e8fd1d076c7560768",
          "message": "Simplify calculation of weights to run in ES-MDA",
          "timestamp": "2024-05-28T09:31:06+02:00",
          "tree_id": "b171b5bd41f59ccbdfff62e71ab951863b12fe7a",
          "url": "https://github.com/equinor/ert/commit/24f69370232dc86110502c5e8fd1d076c7560768"
        },
        "date": 1716881675482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16561984072603428,
            "unit": "iter/sec",
            "range": "stddev: 0.03292258098446924",
            "extra": "mean: 6.037923932400008 sec\nrounds: 5"
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
          "id": "d8f401241d02893e2e5ec03ca4d1d8eca7c8e219",
          "message": "Add test for new cmd behavior",
          "timestamp": "2024-05-28T09:52:27+02:00",
          "tree_id": "cb3a62556dd9b3967fccdbc98d9513f5b51835ac",
          "url": "https://github.com/equinor/ert/commit/d8f401241d02893e2e5ec03ca4d1d8eca7c8e219"
        },
        "date": 1716882947447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16456132595671227,
            "unit": "iter/sec",
            "range": "stddev: 0.012013310259034226",
            "extra": "mean: 6.076761925599999 sec\nrounds: 5"
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
          "id": "c4df16ac0b3838ba21dd0f5d9497e26f36f28506",
          "message": "Add icon to ert",
          "timestamp": "2024-05-28T11:46:56+02:00",
          "tree_id": "be292ced5c773971046ddbf307973c5c8270884c",
          "url": "https://github.com/equinor/ert/commit/c4df16ac0b3838ba21dd0f5d9497e26f36f28506"
        },
        "date": 1716889834689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1630561914472726,
            "unit": "iter/sec",
            "range": "stddev: 0.05309656711778124",
            "extra": "mean: 6.1328551287999975 sec\nrounds: 5"
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
          "id": "5fdde19cfc17ce41f5e357f278d9c89c8efcefc0",
          "message": "Fix logic in _get_response_name_for_obs_name",
          "timestamp": "2024-05-28T13:16:58+02:00",
          "tree_id": "44edb460c4ab10ab679d96cc5c01de4f201addcf",
          "url": "https://github.com/equinor/ert/commit/5fdde19cfc17ce41f5e357f278d9c89c8efcefc0"
        },
        "date": 1716895217960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16641753303512588,
            "unit": "iter/sec",
            "range": "stddev: 0.0139784009324507",
            "extra": "mean: 6.008982237400005 sec\nrounds: 5"
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
          "id": "c2dcf4027c743284114bb16a85eac247bc958693",
          "message": "Significant correlations\n\nSave cross correlations for genkw",
          "timestamp": "2024-05-28T13:22:58+02:00",
          "tree_id": "c06da354172a50900da0c8c75df2160e4db8dcc2",
          "url": "https://github.com/equinor/ert/commit/c2dcf4027c743284114bb16a85eac247bc958693"
        },
        "date": 1716895586081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16536975521579753,
            "unit": "iter/sec",
            "range": "stddev: 0.06171677007115376",
            "extra": "mean: 6.047054968999987 sec\nrounds: 5"
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
          "id": "b134a136bc787e2c34d8aa6cfbfacf81349716bb",
          "message": "Use split over rsplit to handle comments in gen_kw_config",
          "timestamp": "2024-05-28T16:42:14+02:00",
          "tree_id": "566438c7b3557a8337dab6f330d72f2f8a325afa",
          "url": "https://github.com/equinor/ert/commit/b134a136bc787e2c34d8aa6cfbfacf81349716bb"
        },
        "date": 1716907537133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16411504698861334,
            "unit": "iter/sec",
            "range": "stddev: 0.05656193015030776",
            "extra": "mean: 6.093286498400005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}