window.BENCHMARK_DATA = {
  "lastUpdate": 1717054863183,
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
          "id": "58fa26453a3149b0cfe607700d02d333768cb1aa",
          "message": "Reduce size of storage test data",
          "timestamp": "2024-05-29T07:19:19+02:00",
          "tree_id": "5342b05275024df5fbdcb07d57f5567927febbff",
          "url": "https://github.com/equinor/ert/commit/58fa26453a3149b0cfe607700d02d333768cb1aa"
        },
        "date": 1716960154909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16842196695224337,
            "unit": "iter/sec",
            "range": "stddev: 0.020591306895854117",
            "extra": "mean: 5.9374677668 sec\nrounds: 5"
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
          "id": "36979af6117b59ea33af2b6e26f83f029cab73ac",
          "message": "Round export misfit snapshot to 10 decimals \n\nOlder pandas version produces slightly different results, this nullifies that difference",
          "timestamp": "2024-05-29T10:35:52+02:00",
          "tree_id": "549f7f5ce7f86a7397b2a286b107a424b9934702",
          "url": "https://github.com/equinor/ert/commit/36979af6117b59ea33af2b6e26f83f029cab73ac"
        },
        "date": 1716971946172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16544046211387867,
            "unit": "iter/sec",
            "range": "stddev: 0.03260041906627047",
            "extra": "mean: 6.044470543800003 sec\nrounds: 5"
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
          "id": "70a8272d3579a4bb496d0c85bcc7b3262fd9e82d",
          "message": "Add heartbeat to test_run_and_cancel_legacy_ensemble",
          "timestamp": "2024-05-29T11:49:27+02:00",
          "tree_id": "6ff4bd1d7668fedc5594233643134bc1310d906b",
          "url": "https://github.com/equinor/ert/commit/70a8272d3579a4bb496d0c85bcc7b3262fd9e82d"
        },
        "date": 1716976355013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16749169771793035,
            "unit": "iter/sec",
            "range": "stddev: 0.011759748362695456",
            "extra": "mean: 5.970445183999994 sec\nrounds: 5"
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
          "id": "976f5b2f537284d407ffc86b5ff6c812a400b710",
          "message": "Add application name to gui initialization",
          "timestamp": "2024-05-29T11:53:44+02:00",
          "tree_id": "cb39611fa5e8fb87b71c6aaeec7cb61a73ff117e",
          "url": "https://github.com/equinor/ert/commit/976f5b2f537284d407ffc86b5ff6c812a400b710"
        },
        "date": 1716976622901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16265825689810443,
            "unit": "iter/sec",
            "range": "stddev: 0.03015486474888436",
            "extra": "mean: 6.1478588241999885 sec\nrounds: 5"
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
          "id": "7051849dd1824542dd1180f0c53b0374b8d21881",
          "message": "Add out-of-memory detection\n\nWhenever a realization fails the output of dmesg is checked to see if there\nare any signs of known pids having been killed by the operating system\n\nAdd an integration test that will exhaust all available memory (by\ndefault, this test is not active) and assert that Ert picks up the cause\nof the realization failing.",
          "timestamp": "2024-05-29T12:59:56+02:00",
          "tree_id": "fcfd0e07cfefe4b8c9fdc057954f10c7c4571fd0",
          "url": "https://github.com/equinor/ert/commit/7051849dd1824542dd1180f0c53b0374b8d21881"
        },
        "date": 1716980592944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16761853883056493,
            "unit": "iter/sec",
            "range": "stddev: 0.06406676983223913",
            "extra": "mean: 5.965927199800001 sec\nrounds: 5"
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
          "id": "31a0d55e6d4765db2f935a051bee5d0f67749fe9",
          "message": "Remove extra character from the output message",
          "timestamp": "2024-05-29T15:17:42+02:00",
          "tree_id": "9777ef0f23403fd001ef6a0d55eaab1740dd0368",
          "url": "https://github.com/equinor/ert/commit/31a0d55e6d4765db2f935a051bee5d0f67749fe9"
        },
        "date": 1716988868988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16537504563219257,
            "unit": "iter/sec",
            "range": "stddev: 0.044761461029902014",
            "extra": "mean: 6.046861521200003 sec\nrounds: 5"
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
          "id": "863208e04734bb183677981ae393216ae70a9717",
          "message": "Close websocket connection once the receiver task was cancelled\n\nMonitor should cancel the receiver task before closing the websockets.",
          "timestamp": "2024-05-29T15:18:36+02:00",
          "tree_id": "58a70ce2a8569b1d9e297730ab9cc6ce407abe42",
          "url": "https://github.com/equinor/ert/commit/863208e04734bb183677981ae393216ae70a9717"
        },
        "date": 1716988914288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16522993582199513,
            "unit": "iter/sec",
            "range": "stddev: 0.0028119159219041835",
            "extra": "mean: 6.052172053599998 sec\nrounds: 5"
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
          "id": "a7ccaf7eaf9448b0cfffcbf467b8425b62da3bc7",
          "message": "Rename simulation mode to experiment type",
          "timestamp": "2024-05-30T07:59:40+02:00",
          "tree_id": "afdea5fca8cc6eee6996535d578a55ca0aa5b9f0",
          "url": "https://github.com/equinor/ert/commit/a7ccaf7eaf9448b0cfffcbf467b8425b62da3bc7"
        },
        "date": 1717048990057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16318646599566314,
            "unit": "iter/sec",
            "range": "stddev: 0.01610068224747549",
            "extra": "mean: 6.1279591656000205 sec\nrounds: 5"
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
          "id": "0bb4839507367b1947ace78409c36678708b73ca",
          "message": "Reduce the use of ensemble_by_name()",
          "timestamp": "2024-05-30T08:48:01+02:00",
          "tree_id": "c27f79f0ffec7e8daa9e59f0ac32a67c55f033b4",
          "url": "https://github.com/equinor/ert/commit/0bb4839507367b1947ace78409c36678708b73ca"
        },
        "date": 1717051875048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16487304422683777,
            "unit": "iter/sec",
            "range": "stddev: 0.029110740862462608",
            "extra": "mean: 6.065272857000002 sec\nrounds: 5"
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
          "id": "2c8bf9267a53ac9919de7253200a740beadd0d0a",
          "message": "Raise error if no gen kws specified",
          "timestamp": "2024-05-30T09:37:39+02:00",
          "tree_id": "d2d44a46d9515bf56d35cecb01d5935dc2b9cc68",
          "url": "https://github.com/equinor/ert/commit/2c8bf9267a53ac9919de7253200a740beadd0d0a"
        },
        "date": 1717054862190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16489378075992378,
            "unit": "iter/sec",
            "range": "stddev: 0.021833650404586274",
            "extra": "mean: 6.064510107000001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}