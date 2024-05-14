window.BENCHMARK_DATA = {
  "lastUpdate": 1715669131067,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "3a418a7e13ca2bf4f50df55394faa205ace01f38",
          "message": "Replace Monitor with async Monitor\n\nMain features:\n- removal of sync_ws_duplexer!\n- Reconnections are handled in monitor directly\n- using asyncio.Queue to store events and provide them in await fashion\n- Add test_monitor with basic unit tests",
          "timestamp": "2024-05-02T15:58:54+02:00",
          "tree_id": "8d8c6674c8b8b08c18a5f933f564abc26376ca64",
          "url": "https://github.com/equinor/ert/commit/3a418a7e13ca2bf4f50df55394faa205ace01f38"
        },
        "date": 1714658527134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18800208893031378,
            "unit": "iter/sec",
            "range": "stddev: 0.05960508603218225",
            "extra": "mean: 5.319089834000022 sec\nrounds: 5"
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
          "id": "1e7789ee956b1d484d55f2f56946c80b264f65b2",
          "message": "Move snapshot headerData logic for realizations to job_list.py",
          "timestamp": "2024-05-03T07:10:19+02:00",
          "tree_id": "2f3c7818d30a738d5d0b8b1bca17e6f63ab0f8a3",
          "url": "https://github.com/equinor/ert/commit/1e7789ee956b1d484d55f2f56946c80b264f65b2"
        },
        "date": 1714713227839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18905274515596196,
            "unit": "iter/sec",
            "range": "stddev: 0.04900614616348158",
            "extra": "mean: 5.289529116200003 sec\nrounds: 5"
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
          "id": "672aeb2bf0378e92ce795384ec240638cab2e7ba",
          "message": "Set max-worker-restart to zero",
          "timestamp": "2024-05-03T09:44:10+02:00",
          "tree_id": "10a14f476bb639de133ce677c634914eab192c05",
          "url": "https://github.com/equinor/ert/commit/672aeb2bf0378e92ce795384ec240638cab2e7ba"
        },
        "date": 1714722437207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19162282350708795,
            "unit": "iter/sec",
            "range": "stddev: 0.023299774338900018",
            "extra": "mean: 5.218585039599998 sec\nrounds: 5"
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
          "id": "d79aed50ad8c718ffd30a62cd3bd7a8fd003fa32",
          "message": "Fix an issue with finding smspec files",
          "timestamp": "2024-05-03T10:07:06+02:00",
          "tree_id": "989ff9aeccfabe68e0a558946d8cd78d83db3e70",
          "url": "https://github.com/equinor/ert/commit/d79aed50ad8c718ffd30a62cd3bd7a8fd003fa32"
        },
        "date": 1714723815434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18653407009089423,
            "unit": "iter/sec",
            "range": "stddev: 0.06370359144565205",
            "extra": "mean: 5.360950948600009 sec\nrounds: 5"
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
          "id": "993e03a64d5ebbd80752674208172a6bf9fd7b61",
          "message": "Add workflow to test against everest",
          "timestamp": "2024-05-03T10:39:00+02:00",
          "tree_id": "a453e37ae78eead083c1a12fbee2d61582e66efc",
          "url": "https://github.com/equinor/ert/commit/993e03a64d5ebbd80752674208172a6bf9fd7b61"
        },
        "date": 1714725733236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1884711181208225,
            "unit": "iter/sec",
            "range": "stddev: 0.044346795205026844",
            "extra": "mean: 5.305852748000007 sec\nrounds: 5"
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
          "id": "089de2e869a4a88f977418a7fd5b59099fe18594",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-05-03T10:46:58+02:00",
          "tree_id": "35b10ea55c800e5eb516b20e2007e621d3a22c8e",
          "url": "https://github.com/equinor/ert/commit/089de2e869a4a88f977418a7fd5b59099fe18594"
        },
        "date": 1714726215623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1917610386133882,
            "unit": "iter/sec",
            "range": "stddev: 0.03889253880220726",
            "extra": "mean: 5.214823653600002 sec\nrounds: 5"
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
          "id": "81d52193faf1da2187b22bec904192b2fa2ba59c",
          "message": "Add seaborn to dependencies",
          "timestamp": "2024-05-03T13:10:25+02:00",
          "tree_id": "6745b175eed46e063c908b2d912b63db54389aa3",
          "url": "https://github.com/equinor/ert/commit/81d52193faf1da2187b22bec904192b2fa2ba59c"
        },
        "date": 1714734822432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18989210700845338,
            "unit": "iter/sec",
            "range": "stddev: 0.043455274508863356",
            "extra": "mean: 5.266148318400002 sec\nrounds: 5"
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
          "id": "2156c899f2d2f0aead5da756fdf4ced6a4b33b27",
          "message": "Mark test_ensemble_evaluator as flaky",
          "timestamp": "2024-05-06T07:44:49+02:00",
          "tree_id": "320d8eb67a151779388a7b536d01ae962efd8fad",
          "url": "https://github.com/equinor/ert/commit/2156c899f2d2f0aead5da756fdf4ced6a4b33b27"
        },
        "date": 1714974483982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18812202715708143,
            "unit": "iter/sec",
            "range": "stddev: 0.05097960814872291",
            "extra": "mean: 5.315698619199987 sec\nrounds: 5"
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
          "id": "47f0580ff9b1ed3cb8dbd2f58c14434a19621496",
          "message": "Revert skipping test",
          "timestamp": "2024-05-06T08:25:54+02:00",
          "tree_id": "4a3d510f6250c40225b7b4fa9a41f6db4b429569",
          "url": "https://github.com/equinor/ert/commit/47f0580ff9b1ed3cb8dbd2f58c14434a19621496"
        },
        "date": 1714976951901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18393859751672564,
            "unit": "iter/sec",
            "range": "stddev: 0.036837294679070626",
            "extra": "mean: 5.4365968508000035 sec\nrounds: 5"
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
          "id": "e5350a67d30eaa70ac6490d85ff2b9f1ff45be9b",
          "message": "Pin git for linux in workflows",
          "timestamp": "2024-05-06T13:24:37+02:00",
          "tree_id": "84f80f39ab5de7942ef66b927866d58741c22749",
          "url": "https://github.com/equinor/ert/commit/e5350a67d30eaa70ac6490d85ff2b9f1ff45be9b"
        },
        "date": 1714994863646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1856772839716614,
            "unit": "iter/sec",
            "range": "stddev: 0.021692134666189227",
            "extra": "mean: 5.385688429999993 sec\nrounds: 5"
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
          "id": "966cfc9db3fd5b5fc6dfc22e4f2a6832146b998e",
          "message": "Simplify how we call and parse bjobs\n\nUse the -o option to specify which columns we are interested in.\nAdd the -noheader option to remove the header from output.",
          "timestamp": "2024-05-06T13:59:31+02:00",
          "tree_id": "608cb67349afa53ab8ac0db83e5255a29410405b",
          "url": "https://github.com/equinor/ert/commit/966cfc9db3fd5b5fc6dfc22e4f2a6832146b998e"
        },
        "date": 1714996981924,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1854526854906219,
            "unit": "iter/sec",
            "range": "stddev: 0.0468397987982307",
            "extra": "mean: 5.392210942400015 sec\nrounds: 5"
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
          "id": "aa01aa9f6d32878676952742cd5f3e0df1645552",
          "message": "Pin linux docker image",
          "timestamp": "2024-05-06T15:23:19+02:00",
          "tree_id": "fb12c4bb7bf1222e610145cf36dc8f55032dbbaf",
          "url": "https://github.com/equinor/ert/commit/aa01aa9f6d32878676952742cd5f3e0df1645552"
        },
        "date": 1715002022437,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18479159754105073,
            "unit": "iter/sec",
            "range": "stddev: 0.08909549379311876",
            "extra": "mean: 5.411501460599982 sec\nrounds: 5"
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
          "id": "698b81447f46a67985175c50cd2779aa3cf4be09",
          "message": "Avoid redundant plot update when refreshing tabs in gui plots",
          "timestamp": "2024-05-07T09:31:54+02:00",
          "tree_id": "3ac7c70cc20ebc3cd3cd434e07938982b955eddc",
          "url": "https://github.com/equinor/ert/commit/698b81447f46a67985175c50cd2779aa3cf4be09"
        },
        "date": 1715067300769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18643326846655614,
            "unit": "iter/sec",
            "range": "stddev: 0.05182414467248908",
            "extra": "mean: 5.363849532999995 sec\nrounds: 5"
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
          "id": "0249f3fa2c5f65a55735a952eea2cbe74fcc8dae",
          "message": "Simplify test_check_if_runpath_exists\n\nEnsembleExperiment no longer uses facade",
          "timestamp": "2024-05-07T10:01:05+02:00",
          "tree_id": "6b6f49a0ee9306e6d8e52cd851044882f6caeaef",
          "url": "https://github.com/equinor/ert/commit/0249f3fa2c5f65a55735a952eea2cbe74fcc8dae"
        },
        "date": 1715069082548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18885187610136372,
            "unit": "iter/sec",
            "range": "stddev: 0.0671621370643921",
            "extra": "mean: 5.29515523299998 sec\nrounds: 5"
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
          "id": "6a40702e50b30b5810008ea65e1fa74de6d188c7",
          "message": "Unpin linux docker image",
          "timestamp": "2024-05-07T12:07:02+02:00",
          "tree_id": "71e759d99fac1064942e1d217c66e88e8820b0f0",
          "url": "https://github.com/equinor/ert/commit/6a40702e50b30b5810008ea65e1fa74de6d188c7"
        },
        "date": 1715076627506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18394946816311386,
            "unit": "iter/sec",
            "range": "stddev: 0.0851457795549432",
            "extra": "mean: 5.436275570600008 sec\nrounds: 5"
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
          "id": "b95fea52dae0455759d8d7073f612d0e10a0264c",
          "message": "Fix flaky test_new_monitor_can_pick_up_where_we_left_off",
          "timestamp": "2024-05-07T13:26:11+02:00",
          "tree_id": "af4b611c833f616dc1dfc9c9db3f3f50ac31d5d3",
          "url": "https://github.com/equinor/ert/commit/b95fea52dae0455759d8d7073f612d0e10a0264c"
        },
        "date": 1715081355443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1899366194105223,
            "unit": "iter/sec",
            "range": "stddev: 0.08309212044359801",
            "extra": "mean: 5.264914175599995 sec\nrounds: 5"
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
          "id": "1fed69081ea569337eb5710216a01802d49f8ec7",
          "message": "Increase tolerance in test_parameter_example",
          "timestamp": "2024-05-07T15:29:33+02:00",
          "tree_id": "4059a2e1e85696cba489abcf05010e6d916b6684",
          "url": "https://github.com/equinor/ert/commit/1fed69081ea569337eb5710216a01802d49f8ec7"
        },
        "date": 1715088775158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18662372200218963,
            "unit": "iter/sec",
            "range": "stddev: 0.024978438985606147",
            "extra": "mean: 5.3583756087999745 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aron@hoyer.com",
            "name": "Aron Høyer",
            "username": "aronhoyer"
          },
          "committer": {
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "5371acb914ef34680f0879cca36b99e2adcb8d71",
          "message": "Add realizations to Ensemble manager tree view",
          "timestamp": "2024-05-08T13:47:19+02:00",
          "tree_id": "b2c2eaa6148dab9d1ab7d9358f81b2315eb07d26",
          "url": "https://github.com/equinor/ert/commit/5371acb914ef34680f0879cca36b99e2adcb8d71"
        },
        "date": 1715169027527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18532097113739326,
            "unit": "iter/sec",
            "range": "stddev: 0.03932294520084003",
            "extra": "mean: 5.396043382799997 sec\nrounds: 5"
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
          "id": "19f8c4693e8287a8d7de074a3385a0b1db086f20",
          "message": "Fix problem with bjobs command",
          "timestamp": "2024-05-08T15:21:50+02:00",
          "tree_id": "eb8ec9772097c6c2374571b6928424a61bc7af4d",
          "url": "https://github.com/equinor/ert/commit/19f8c4693e8287a8d7de074a3385a0b1db086f20"
        },
        "date": 1715174706151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18914857261276377,
            "unit": "iter/sec",
            "range": "stddev: 0.06582596016655345",
            "extra": "mean: 5.286849306800002 sec\nrounds: 5"
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
          "id": "4b9f66d7bb55c96b4986e4152c39a336b5331af6",
          "message": "Fix flaky test_restarted_jobs_do_not_have_error_msgs",
          "timestamp": "2024-05-08T18:13:14+02:00",
          "tree_id": "14f5c9e73b32d332d93a73e73e2a88ef6b5efd2e",
          "url": "https://github.com/equinor/ert/commit/4b9f66d7bb55c96b4986e4152c39a336b5331af6"
        },
        "date": 1715184987757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19108036721266897,
            "unit": "iter/sec",
            "range": "stddev: 0.06478147929431237",
            "extra": "mean: 5.233400032599991 sec\nrounds: 5"
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
          "id": "9b2c5669697557e21f04926a15ef7a0d8118f4f2",
          "message": "Monitor track should exit without evaluator terminated message\n\n - Add explicit sentinel to stop receiver either when signalling cancel or done to EE\n - Test that monitor tracker can exit without the terminated event",
          "timestamp": "2024-05-08T23:55:13+02:00",
          "tree_id": "ab7a95c2c469612fef5a5a3bb5f01a932efd5eaf",
          "url": "https://github.com/equinor/ert/commit/9b2c5669697557e21f04926a15ef7a0d8118f4f2"
        },
        "date": 1715205503848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18722478064431528,
            "unit": "iter/sec",
            "range": "stddev: 0.06873507059059794",
            "extra": "mean: 5.341173302799985 sec\nrounds: 5"
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
          "id": "e55f0d35a3c80934ea993d140daec131c1e05433",
          "message": "Add a CSV logger for memory time profiling pr. realization\n\nLogs rss, oom_score and free memory on the compute side throughout the\ncourse of a forward model run into \"logs\" directory in runpath.\n\nrss is summed over all the subprocesses, and oom_score is max.",
          "timestamp": "2024-05-10T15:25:37+02:00",
          "tree_id": "d55e0aa9f8218eda259b25deaa0f1432a05e4fce",
          "url": "https://github.com/equinor/ert/commit/e55f0d35a3c80934ea993d140daec131c1e05433"
        },
        "date": 1715347744213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18913407431969803,
            "unit": "iter/sec",
            "range": "stddev: 0.02661190813535818",
            "extra": "mean: 5.287254576399993 sec\nrounds: 5"
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
          "id": "a451a46d8d96e225a83edff0aaadb800b6fbef8b",
          "message": "Pin xarray",
          "timestamp": "2024-05-13T09:39:20+02:00",
          "tree_id": "95551dfe13041fdb90f619df9e99a2a2bb370b23",
          "url": "https://github.com/equinor/ert/commit/a451a46d8d96e225a83edff0aaadb800b6fbef8b"
        },
        "date": 1715586153959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1932392881091307,
            "unit": "iter/sec",
            "range": "stddev: 0.025550184789223027",
            "extra": "mean: 5.174931090800004 sec\nrounds: 5"
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
          "id": "73ec3615f0b4b712b9c5c3e64547470b1e26d615",
          "message": "Migrate summary data as 32 bit float",
          "timestamp": "2024-05-13T09:50:06+02:00",
          "tree_id": "3c6f6322091eb97b057de97a8bc445561745ca70",
          "url": "https://github.com/equinor/ert/commit/73ec3615f0b4b712b9c5c3e64547470b1e26d615"
        },
        "date": 1715586792139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18747223439191846,
            "unit": "iter/sec",
            "range": "stddev: 0.011307503354466545",
            "extra": "mean: 5.33412322759998 sec\nrounds: 5"
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
          "id": "160077a0534c04a2a9aae192b44a9836863d73e0",
          "message": "Avoid (unlikely) chance of all success\n\nMake gui tests more predictable by avoiding a random chance of no\nrealizations failing where the tests expect at least one failure.",
          "timestamp": "2024-05-13T10:13:51+02:00",
          "tree_id": "5a7bf64c7b7b6bc595505ce3014550b0ca36a7c3",
          "url": "https://github.com/equinor/ert/commit/160077a0534c04a2a9aae192b44a9836863d73e0"
        },
        "date": 1715588227904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18918558184555617,
            "unit": "iter/sec",
            "range": "stddev: 0.04675555537103975",
            "extra": "mean: 5.285815072399975 sec\nrounds: 5"
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
          "id": "bd52a3785cfbc8e677e6834b86975c2ab3d2786f",
          "message": "Move mode definitions to separate module",
          "timestamp": "2024-05-13T12:08:06+02:00",
          "tree_id": "c1d73104b7075b8cef1df5b36c1cd1aeceb9b727",
          "url": "https://github.com/equinor/ert/commit/bd52a3785cfbc8e677e6834b86975c2ab3d2786f"
        },
        "date": 1715595073872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19019455256365195,
            "unit": "iter/sec",
            "range": "stddev: 0.03141349633314996",
            "extra": "mean: 5.257774139799994 sec\nrounds: 5"
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
          "id": "624224511be382ef68d868911679105e2bdab038",
          "message": "Log more from scheduler when killing jobs",
          "timestamp": "2024-05-13T13:48:29+02:00",
          "tree_id": "851fcd380811b0ac7a7f0a56ff9004f8084aa477",
          "url": "https://github.com/equinor/ert/commit/624224511be382ef68d868911679105e2bdab038"
        },
        "date": 1715601096878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18957605011872758,
            "unit": "iter/sec",
            "range": "stddev: 0.04401007260116538",
            "extra": "mean: 5.27492792139999 sec\nrounds: 5"
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
          "id": "2f77b62a54f71976f928106796578e3bdc40ee67",
          "message": "Deprecate LSF QUEUE_OPTION LSF_SERVER",
          "timestamp": "2024-05-13T13:58:38+02:00",
          "tree_id": "c632154aa105cdee701f83d35e4cac22de815851",
          "url": "https://github.com/equinor/ert/commit/2f77b62a54f71976f928106796578e3bdc40ee67"
        },
        "date": 1715601708086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19145075500237507,
            "unit": "iter/sec",
            "range": "stddev: 0.025240166167938474",
            "extra": "mean: 5.22327530120001 sec\nrounds: 5"
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
          "id": "a02d71d91e48b8df1ebdcf4326c3ad68f1a1a19a",
          "message": "Enable Scheduler for LSF Queue by default\n\n- Explicitly disable scheduler for job_queue test",
          "timestamp": "2024-05-13T15:56:29+02:00",
          "tree_id": "018900a552c6d66bbc1a528689709132f924aeec",
          "url": "https://github.com/equinor/ert/commit/a02d71d91e48b8df1ebdcf4326c3ad68f1a1a19a"
        },
        "date": 1715608789227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18692836079383596,
            "unit": "iter/sec",
            "range": "stddev: 0.04865654359230059",
            "extra": "mean: 5.349643016999994 sec\nrounds: 5"
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
          "id": "13975dbbc479a02262262c97cf3e4a8898e96958",
          "message": "Instruct LSF to dump stderr of submitted job to runpath\n\nThis information should not be lost, can be crucial for debugging",
          "timestamp": "2024-05-14T08:42:08+02:00",
          "tree_id": "be17ff96f67f71d460897e943885a2edc578760f",
          "url": "https://github.com/equinor/ert/commit/13975dbbc479a02262262c97cf3e4a8898e96958"
        },
        "date": 1715669130190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18445137077885237,
            "unit": "iter/sec",
            "range": "stddev: 0.041797717841137554",
            "extra": "mean: 5.421483157199998 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}