window.BENCHMARK_DATA = {
  "lastUpdate": 1723208346331,
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
          "id": "033559527b95f384001ea0259f0ce830fdca6ffd",
          "message": "Add generic driver test for num_cpu\n\nTest all drivers that there are remnants in the compute\nenvironment from the number of cpus requested.",
          "timestamp": "2024-08-05T14:11:20+02:00",
          "tree_id": "51284b30a5e420d113353e96c0cb26e0af32be6f",
          "url": "https://github.com/equinor/ert/commit/033559527b95f384001ea0259f0ce830fdca6ffd"
        },
        "date": 1722860024387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19040517430758905,
            "unit": "iter/sec",
            "range": "stddev: 0.016572337636702163",
            "extra": "mean: 5.251958113199987 sec\nrounds: 5"
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
          "id": "7f39d51338d324f5cf1378cb10c76ef910ca3972",
          "message": "Log only once per unique forward model job name",
          "timestamp": "2024-08-05T14:53:41+02:00",
          "tree_id": "93d4218727ad7a2ca89c8bc2fb1bc76330625375",
          "url": "https://github.com/equinor/ert/commit/7f39d51338d324f5cf1378cb10c76ef910ca3972"
        },
        "date": 1722862565422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19650634431230019,
            "unit": "iter/sec",
            "range": "stddev: 0.019231680894035492",
            "extra": "mean: 5.088894221199991 sec\nrounds: 5"
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
          "id": "840f483535c4d53d22902e584970ffb85329c546",
          "message": "Fix typo",
          "timestamp": "2024-08-06T08:33:53+02:00",
          "tree_id": "130a8216c28a0dd9f1ab91d2e5370833f855b1d7",
          "url": "https://github.com/equinor/ert/commit/840f483535c4d53d22902e584970ffb85329c546"
        },
        "date": 1722926178279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1862234125058284,
            "unit": "iter/sec",
            "range": "stddev: 0.033834191597869163",
            "extra": "mean: 5.369894078000004 sec\nrounds: 5"
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
          "id": "727394424905033838c9ded7117e7904dd0c0cdc",
          "message": "Fix filter popup not closing",
          "timestamp": "2024-08-06T11:46:32+02:00",
          "tree_id": "462fd6be517f735b89b099892c5f3813d4b6d832",
          "url": "https://github.com/equinor/ert/commit/727394424905033838c9ded7117e7904dd0c0cdc"
        },
        "date": 1722937738604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19420267782694128,
            "unit": "iter/sec",
            "range": "stddev: 0.04053382314384006",
            "extra": "mean: 5.149259583799994 sec\nrounds: 5"
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
          "id": "5652b191c7af550df1af9c21ff801c377a4d625a",
          "message": "Disable validation of experiment name on restart",
          "timestamp": "2024-08-06T11:47:54+02:00",
          "tree_id": "cdde93fe067030a07e216ef535666a956eebe895",
          "url": "https://github.com/equinor/ert/commit/5652b191c7af550df1af9c21ff801c377a4d625a"
        },
        "date": 1722937819137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19264239834627392,
            "unit": "iter/sec",
            "range": "stddev: 0.022742662921874365",
            "extra": "mean: 5.190965273400013 sec\nrounds: 5"
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
          "id": "ac458b703f97842753281473664a8b913fe3d475",
          "message": "Fix get_number_of_existing_runpaths()",
          "timestamp": "2024-08-06T12:15:11+02:00",
          "tree_id": "f07c00ed773441a3da9e9ebe26345ce785c70b46",
          "url": "https://github.com/equinor/ert/commit/ac458b703f97842753281473664a8b913fe3d475"
        },
        "date": 1722939464700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19097147336273396,
            "unit": "iter/sec",
            "range": "stddev: 0.046633820677518846",
            "extra": "mean: 5.2363841697999876 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62240435+hnformentin@users.noreply.github.com",
            "name": "Helena Nandi Formentin",
            "username": "hnformentin"
          },
          "committer": {
            "email": "114403625+andreas-el@users.noreply.github.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "distinct": true,
          "id": "99012eabed0acd48f9d4066bc16d7f4f78f7d83b",
          "message": "Fix typos in RUNPATH_FILE description",
          "timestamp": "2024-08-06T12:29:44+02:00",
          "tree_id": "c77e898472859f0097b8a4513ff6db2e5dcb559f",
          "url": "https://github.com/equinor/ert/commit/99012eabed0acd48f9d4066bc16d7f4f78f7d83b"
        },
        "date": 1722940331598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1910569388511247,
            "unit": "iter/sec",
            "range": "stddev: 0.022445418237246387",
            "extra": "mean: 5.2340417783999955 sec\nrounds: 5"
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
          "id": "b46c893e411d3f128be577c629298cb0b4c3a802",
          "message": "Inline delete run path check",
          "timestamp": "2024-08-06T14:22:55+02:00",
          "tree_id": "462fb4b08ad3afeebf8ed41782412d0786d9e405",
          "url": "https://github.com/equinor/ert/commit/b46c893e411d3f128be577c629298cb0b4c3a802"
        },
        "date": 1722947128919,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19124669991225562,
            "unit": "iter/sec",
            "range": "stddev: 0.06340562521421057",
            "extra": "mean: 5.228848395600039 sec\nrounds: 5"
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
          "id": "7cdbbd79eaea2d4eb254bbc9cd9ffc3226db482e",
          "message": "Avoid unneeded lambda functions",
          "timestamp": "2024-08-06T15:03:47+02:00",
          "tree_id": "522c75acb003c9a11b0077b1a584753ae235c8ef",
          "url": "https://github.com/equinor/ert/commit/7cdbbd79eaea2d4eb254bbc9cd9ffc3226db482e"
        },
        "date": 1722949575686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19142096862566907,
            "unit": "iter/sec",
            "range": "stddev: 0.039226059006524934",
            "extra": "mean: 5.224088077599992 sec\nrounds: 5"
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
          "id": "b09469648d1153f5e9b270db8ecd2e570cd6db25",
          "message": "Allow a lambda to satisfy mypy",
          "timestamp": "2024-08-06T15:28:45+02:00",
          "tree_id": "e754a334cef2c79c7fe6abb99acf65c9d33e449b",
          "url": "https://github.com/equinor/ert/commit/b09469648d1153f5e9b270db8ecd2e570cd6db25"
        },
        "date": 1722951070069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1895125277985933,
            "unit": "iter/sec",
            "range": "stddev: 0.055240868477332235",
            "extra": "mean: 5.276696013800006 sec\nrounds: 5"
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
          "id": "cfd7535df991d83c2cf67293ad78022964280f30",
          "message": "Fix flaky test test_memory_profile_in_running_events",
          "timestamp": "2024-08-07T07:15:05+02:00",
          "tree_id": "dea2a0adfaa8cf455f0f562b8e3d0fc9c6814443",
          "url": "https://github.com/equinor/ert/commit/cfd7535df991d83c2cf67293ad78022964280f30"
        },
        "date": 1723007857749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19066437260930674,
            "unit": "iter/sec",
            "range": "stddev: 0.010266061890367831",
            "extra": "mean: 5.2448183492000116 sec\nrounds: 5"
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
          "id": "d02e9ba18311d7a0474a7ce9007c4941659deaa1",
          "message": "Improve bug template",
          "timestamp": "2024-08-07T08:43:42+02:00",
          "tree_id": "1cae4fdf1189c3ce0f88e5f75add3f1a9b294336",
          "url": "https://github.com/equinor/ert/commit/d02e9ba18311d7a0474a7ce9007c4941659deaa1"
        },
        "date": 1723013181015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1923632122149945,
            "unit": "iter/sec",
            "range": "stddev: 0.028464491204694065",
            "extra": "mean: 5.1984991750000065 sec\nrounds: 5"
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
          "id": "f760d4cd65b852275af22a499a59dcc959b5fef4",
          "message": "Avoid unused variable names\n\nFrom now on enforced using ruff.",
          "timestamp": "2024-08-07T08:44:38+02:00",
          "tree_id": "80c0bd1257ea0ff350898493fed54ee065cd06c7",
          "url": "https://github.com/equinor/ert/commit/f760d4cd65b852275af22a499a59dcc959b5fef4"
        },
        "date": 1723013227014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19303703623460314,
            "unit": "iter/sec",
            "range": "stddev: 0.04427972498748978",
            "extra": "mean: 5.18035305300001 sec\nrounds: 5"
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
          "id": "4b4875391e8ba88db3473c6139aff2964a6e638f",
          "message": "Fix bug in std dev plot\n\nFixed a bug in std dev plot where color gradiant range was always 0 to 1 & two corner cells where always white \r\n\r\n---------\r\n\r\nCo-authored-by: Feda Curic <feda.curic@gmail.com>",
          "timestamp": "2024-08-07T10:33:53+02:00",
          "tree_id": "a0eb97f26a80636221d11039779adffe98eb89fa",
          "url": "https://github.com/equinor/ert/commit/4b4875391e8ba88db3473c6139aff2964a6e638f"
        },
        "date": 1723019786229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19024336320525476,
            "unit": "iter/sec",
            "range": "stddev: 0.03523397339992019",
            "extra": "mean: 5.2564251554000005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.sava42@gmail.com",
            "name": "Dan Sava",
            "username": "DanSava"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2c02b2f71efab5a071534702076fc43085e82f5",
          "message": "Start Run Dialog with open details view by default",
          "timestamp": "2024-08-07T11:58:45+03:00",
          "tree_id": "223b57041e45ca5844d93097b760e6f72e014b2e",
          "url": "https://github.com/equinor/ert/commit/c2c02b2f71efab5a071534702076fc43085e82f5"
        },
        "date": 1723021278711,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1917887650791346,
            "unit": "iter/sec",
            "range": "stddev: 0.021786954810923673",
            "extra": "mean: 5.214069758400012 sec\nrounds: 5"
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
          "id": "2209088fec70b851366b527d48caa2e36f9db9fa",
          "message": "Add description to single test run",
          "timestamp": "2024-08-07T12:04:40+02:00",
          "tree_id": "0d29a10e14e0eb3e1192315dbcf903c4d81f6525",
          "url": "https://github.com/equinor/ert/commit/2209088fec70b851366b527d48caa2e36f9db9fa"
        },
        "date": 1723025229928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19288938932873304,
            "unit": "iter/sec",
            "range": "stddev: 0.10295691301253929",
            "extra": "mean: 5.184318346800007 sec\nrounds: 5"
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
          "id": "df363f750d8bf0e9809d5858e1423803afe01e98",
          "message": "Avoid asyncio.get_event_loop\n\nThis function change behaviour in the future (after Python 3.12), and in order to\navoid a possible deprecation warning, we just return the loop we just created",
          "timestamp": "2024-08-07T12:23:03+02:00",
          "tree_id": "01ce99c99bef54bd7a24cb3d9fac18005bc2f052",
          "url": "https://github.com/equinor/ert/commit/df363f750d8bf0e9809d5858e1423803afe01e98"
        },
        "date": 1723026329807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19000325230961015,
            "unit": "iter/sec",
            "range": "stddev: 0.034474766748856564",
            "extra": "mean: 5.263067804600001 sec\nrounds: 5"
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
          "id": "104e1ee05ac69051d5f4a86466ed8ed6aa51c611",
          "message": "Improve documentation for NUM_CPU\n\nDon't mention any longer requirements for Torque, which\nare now deprecated.",
          "timestamp": "2024-08-07T12:42:30+02:00",
          "tree_id": "16b0868af7e538ac638285e8d39907491f9dd976",
          "url": "https://github.com/equinor/ert/commit/104e1ee05ac69051d5f4a86466ed8ed6aa51c611"
        },
        "date": 1723027504308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19078364371084852,
            "unit": "iter/sec",
            "range": "stddev: 0.02428798085378905",
            "extra": "mean: 5.241539476599991 sec\nrounds: 5"
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
          "id": "8cba19d21bfa058b4769aa1663c5014685f21e7e",
          "message": "Add new keyword REALIZATION_MEMORY\n\nThis keyword instructs Ert to supply the associated value to the chosen\nqueuing system as the amount of memory to reserve each realization\n\nFor OpenPBS, this is already supported through MEMORY_PER_JOB and we\nmust raise an exception is both are specified. For Slurm, this\noverlaps with the queue option MEMORY, and an exception is raised\nif both are specified.",
          "timestamp": "2024-08-07T12:43:17+02:00",
          "tree_id": "f35bce7c719ef684b10ff634660bf256381fa7c6",
          "url": "https://github.com/equinor/ert/commit/8cba19d21bfa058b4769aa1663c5014685f21e7e"
        },
        "date": 1723027539518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19214467395803836,
            "unit": "iter/sec",
            "range": "stddev: 0.0272999371746833",
            "extra": "mean: 5.20441175599999 sec\nrounds: 5"
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
          "id": "c8a76a0c2a05459049d698673efde2ec3f76604d",
          "message": "Fix focus for color selector",
          "timestamp": "2024-08-07T13:46:29+02:00",
          "tree_id": "2f5f23d806d77b9d7961982b78ab8fc22d3909d0",
          "url": "https://github.com/equinor/ert/commit/c8a76a0c2a05459049d698673efde2ec3f76604d"
        },
        "date": 1723031339831,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19392570742738363,
            "unit": "iter/sec",
            "range": "stddev: 0.027438541177719027",
            "extra": "mean: 5.156613907799999 sec\nrounds: 5"
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
          "id": "1a50d1322d32d190623a2cf494fbb25b58599f72",
          "message": "Use codecov flags feature\n\nThis can group the coverage reports by the test categorization\nthat is already in place.",
          "timestamp": "2024-08-07T14:56:15+02:00",
          "tree_id": "cd8bd99ce33a31f4985bd08ecc76907e142b2307",
          "url": "https://github.com/equinor/ert/commit/1a50d1322d32d190623a2cf494fbb25b58599f72"
        },
        "date": 1723035529802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19183085332371455,
            "unit": "iter/sec",
            "range": "stddev: 0.03145879262165235",
            "extra": "mean: 5.212925776400004 sec\nrounds: 5"
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
          "id": "2fa9ec17a8a2d73d4487534d67450cff9ba9f8d0",
          "message": "Remove irrelevant comment on job_queue\n\njob_queue with multiple threads is now replaced with async scheduler.",
          "timestamp": "2024-08-07T15:47:03+02:00",
          "tree_id": "0eb07887cf36f7bae01b1b9ffb09a2b4f4c90694",
          "url": "https://github.com/equinor/ert/commit/2fa9ec17a8a2d73d4487534d67450cff9ba9f8d0"
        },
        "date": 1723038584762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1900594252795338,
            "unit": "iter/sec",
            "range": "stddev: 0.0635079984332986",
            "extra": "mean: 5.261512279800013 sec\nrounds: 5"
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
      }
    ]
  }
}