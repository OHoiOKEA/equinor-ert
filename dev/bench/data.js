window.BENCHMARK_DATA = {
  "lastUpdate": 1719481378049,
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
          "id": "383d3cc338b885281dd11a6e97430989949954cf",
          "message": "Move model factory to run models\n\nModel factory is used by both cli and gui.",
          "timestamp": "2024-06-19T09:34:53+02:00",
          "tree_id": "0c4a2d4fc09a80814c3fcd7b09e495af9f0c9be9",
          "url": "https://github.com/equinor/ert/commit/383d3cc338b885281dd11a6e97430989949954cf"
        },
        "date": 1718782708891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1659678529914811,
            "unit": "iter/sec",
            "range": "stddev: 0.03995248587779266",
            "extra": "mean: 6.025263217999987 sec\nrounds: 5"
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
          "id": "047ee468b992b25257d3984eaa9a596752993b58",
          "message": "Use pandas for getting obs and responses (#8156)\n\nMainly for readability\r\nSmall diff likely due to removal of conversion from string to float.",
          "timestamp": "2024-06-19T10:54:01+02:00",
          "tree_id": "4a48b866e88d10c5488442f5399eff269cf6e2e0",
          "url": "https://github.com/equinor/ert/commit/047ee468b992b25257d3984eaa9a596752993b58"
        },
        "date": 1718787449942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1675774240926562,
            "unit": "iter/sec",
            "range": "stddev: 0.05153747297927566",
            "extra": "mean: 5.967390926399991 sec\nrounds: 5"
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
          "id": "3f3e682156516d15ccded659adefb3730da43e83",
          "message": "Remove EnKFMain and replace usage with fixtures\n\nThis removes the EnKFMain class, and replaces the remaning\nusage with pytest style fixtures. The current usage was mostly\nas a facade to ErtConfig, and it held state for the workflows.",
          "timestamp": "2024-06-19T14:43:11+02:00",
          "tree_id": "e90ffaeea561b86ac3c60022160ecc77c62a348e",
          "url": "https://github.com/equinor/ert/commit/3f3e682156516d15ccded659adefb3730da43e83"
        },
        "date": 1718801200732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16345156331250027,
            "unit": "iter/sec",
            "range": "stddev: 0.0347770280804156",
            "extra": "mean: 6.1180204075999995 sec\nrounds: 5"
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
          "id": "4f363cc0257b658d01c71125118fca6b654a578d",
          "message": "Add handling for docs to plugin manager",
          "timestamp": "2024-06-20T09:50:59+02:00",
          "tree_id": "6e976b785ab581b148249bc22d3c43d31babc47b",
          "url": "https://github.com/equinor/ert/commit/4f363cc0257b658d01c71125118fca6b654a578d"
        },
        "date": 1718870064643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16771824254884468,
            "unit": "iter/sec",
            "range": "stddev: 0.00965672836152631",
            "extra": "mean: 5.962380625999998 sec\nrounds: 5"
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
          "id": "399136cedc6ac82bbc7388502eec8187b7afb5ae",
          "message": "Use gen data config for gen data (#8196)\n\nCo-authored-by: Yngve S. Kristiansen <yngve.s.kristiansen@webstep.no>",
          "timestamp": "2024-06-20T11:41:54+02:00",
          "tree_id": "a3dd1a4dfee44671c04ab425c8ea3baf6371c1f8",
          "url": "https://github.com/equinor/ert/commit/399136cedc6ac82bbc7388502eec8187b7afb5ae"
        },
        "date": 1718876719940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16733683999011384,
            "unit": "iter/sec",
            "range": "stddev: 0.02440937587280698",
            "extra": "mean: 5.9759703843999885 sec\nrounds: 5"
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
          "id": "d3859627b9dd66b714826c280e2e6efd070bee78",
          "message": "Reset endtime when restarting simulations",
          "timestamp": "2024-06-20T11:43:53+02:00",
          "tree_id": "769323b6efc0f569602583103377466d8db7d396",
          "url": "https://github.com/equinor/ert/commit/d3859627b9dd66b714826c280e2e6efd070bee78"
        },
        "date": 1718876834724,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16960101255321328,
            "unit": "iter/sec",
            "range": "stddev: 0.02142578678456297",
            "extra": "mean: 5.896191213400004 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "05addf9ed41308889c8d9e1f25c6b2eeeff19ddf",
          "message": "Refactor Lsf driver to use dataclasses\n\nThis commit refactors lsf driver from using pydantic classes to dataclasses,\nas pydantic was overkill for our usage.\nWe will not be getting any pydantic validation, so invalid job_states\nsuch as `QueuedJob(job_state=bogus_state)` will not be caught.",
          "timestamp": "2024-06-20T14:07:25+02:00",
          "tree_id": "30694b9fa0d7af2f88fba774b13e530b28d6446f",
          "url": "https://github.com/equinor/ert/commit/05addf9ed41308889c8d9e1f25c6b2eeeff19ddf"
        },
        "date": 1718885456004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16834606384073483,
            "unit": "iter/sec",
            "range": "stddev: 0.03075955675432799",
            "extra": "mean: 5.940144825400006 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "761b07012717abe6d567cd9cb7d75130f03b122c",
          "message": "Refactor OpenPBS driver to use dataclasses\n\nThis commit refactors the OpenPBS driver from using pydantic classes to\ndataclasses, as pydantic was overkill for our usage.",
          "timestamp": "2024-06-20T14:46:47+02:00",
          "tree_id": "e4ebc8d3d232c530956253740a8d72424ad0aa8c",
          "url": "https://github.com/equinor/ert/commit/761b07012717abe6d567cd9cb7d75130f03b122c"
        },
        "date": 1718887851081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1672855122912538,
            "unit": "iter/sec",
            "range": "stddev: 0.02274126162684763",
            "extra": "mean: 5.977803973000016 sec\nrounds: 5"
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
          "id": "b1d3a4aec9694a0f70e049b3fd24b42555a6b6a0",
          "message": "Add more tests for the ensemble tool GUI",
          "timestamp": "2024-06-21T07:31:39+02:00",
          "tree_id": "f38f26e77cfaa79be3ebbf47c2d5d65f73bd5097",
          "url": "https://github.com/equinor/ert/commit/b1d3a4aec9694a0f70e049b3fd24b42555a6b6a0"
        },
        "date": 1718948096703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1683976220005847,
            "unit": "iter/sec",
            "range": "stddev: 0.030857522069539383",
            "extra": "mean: 5.938326136199999 sec\nrounds: 5"
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
          "id": "6ece58fc5dab6577f88bf51bd92c8fd2a1b3ba44",
          "message": "Put expected value to the right in assert\n\nAvoiding yoda-conditions.",
          "timestamp": "2024-06-21T10:30:24+02:00",
          "tree_id": "3fdf44525ceb9a209b3fd89f90cc7bdbfc817b56",
          "url": "https://github.com/equinor/ert/commit/6ece58fc5dab6577f88bf51bd92c8fd2a1b3ba44"
        },
        "date": 1718958829619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16987970936457844,
            "unit": "iter/sec",
            "range": "stddev: 0.033481158124732534",
            "extra": "mean: 5.886518194200005 sec\nrounds: 5"
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
          "id": "4404e4bdf360ca38724fbb27c9307b370d315cff",
          "message": "Fix bug where number of iterations were wrong",
          "timestamp": "2024-06-21T10:33:28+02:00",
          "tree_id": "554de62ef3459b202a91c826eaf4f7d8f6a0742f",
          "url": "https://github.com/equinor/ert/commit/4404e4bdf360ca38724fbb27c9307b370d315cff"
        },
        "date": 1718959037073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16452564859211263,
            "unit": "iter/sec",
            "range": "stddev: 0.017770484058972292",
            "extra": "mean: 6.078079670600005 sec\nrounds: 5"
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
          "id": "29a067c803f48262110ccca5d63dc578ca148b19",
          "message": "Set max_submit to 1 in job.py\n\nThis has been changed from 2 to 1 in all (?) other places\nin Ert already, so this particular place has just been forgotten.",
          "timestamp": "2024-06-21T10:38:34+02:00",
          "tree_id": "d5808d9d3a44241e54c675f9cbb17927d7678c7a",
          "url": "https://github.com/equinor/ert/commit/29a067c803f48262110ccca5d63dc578ca148b19"
        },
        "date": 1718959307727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17097259770241993,
            "unit": "iter/sec",
            "range": "stddev: 0.015927984232167892",
            "extra": "mean: 5.8488904855999975 sec\nrounds: 5"
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
          "id": "216a6e5402db7edf604ea1aeab9f8744a808200a",
          "message": "Deprecate NUM_NODES and NUM_CPUS_PER_NODE\n\nNUM_NODES is for submitting multi-machine jobs, which is out of scope\nfor Ert. This feature is to be removed. Following that NUM_CPUS_PER_NODE\nbecomes equivalent to NUM_CPU which is what the users should migrate to.",
          "timestamp": "2024-06-21T13:48:08+02:00",
          "tree_id": "e3227e6c436a667a6501e173b1cea55bce8ebfd7",
          "url": "https://github.com/equinor/ert/commit/216a6e5402db7edf604ea1aeab9f8744a808200a"
        },
        "date": 1718970679439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16993132511829634,
            "unit": "iter/sec",
            "range": "stddev: 0.06308192517426102",
            "extra": "mean: 5.884730194999998 sec\nrounds: 5"
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
          "id": "d577b9bfe74ebe8db2fe3f80782f259574098f74",
          "message": "Remove type spec for run models",
          "timestamp": "2024-06-21T13:55:11+02:00",
          "tree_id": "27a29141f413df4e535720475f90429ce0a9edc0",
          "url": "https://github.com/equinor/ert/commit/d577b9bfe74ebe8db2fe3f80782f259574098f74"
        },
        "date": 1718971105113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16738146175620064,
            "unit": "iter/sec",
            "range": "stddev: 0.05418120660540095",
            "extra": "mean: 5.9743772668000075 sec\nrounds: 5"
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
          "id": "56899c1c59725d23ffbace8ba4810f5d8dc6c797",
          "message": "Remove EnsembleBuilder",
          "timestamp": "2024-06-21T15:20:57+02:00",
          "tree_id": "c0b5d8bab58c5b256cf29576e62f28b1e6a106d0",
          "url": "https://github.com/equinor/ert/commit/56899c1c59725d23ffbace8ba4810f5d8dc6c797"
        },
        "date": 1718976262014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16718833913582934,
            "unit": "iter/sec",
            "range": "stddev: 0.029413495762882748",
            "extra": "mean: 5.981278390399984 sec\nrounds: 5"
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
          "id": "67b0e46b4a467bf12292112dd04ba0e593538320",
          "message": "Convert dict access of ForwardModel to get to avoid segfaults",
          "timestamp": "2024-06-21T19:06:22+02:00",
          "tree_id": "8d17bca9b22dd1617a15f115446764318d43739c",
          "url": "https://github.com/equinor/ert/commit/67b0e46b4a467bf12292112dd04ba0e593538320"
        },
        "date": 1718989782449,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16270349563787181,
            "unit": "iter/sec",
            "range": "stddev: 0.03384127830535646",
            "extra": "mean: 6.146149448600011 sec\nrounds: 5"
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
          "id": "06412db9ffe4a54a0ce81751ebea7da0f24f8cf2",
          "message": "Create unique experiment names for GUI",
          "timestamp": "2024-06-24T07:48:20+02:00",
          "tree_id": "3040e2ff7c814ce21a4cf832f735b2b031789a7e",
          "url": "https://github.com/equinor/ert/commit/06412db9ffe4a54a0ce81751ebea7da0f24f8cf2"
        },
        "date": 1719208307586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16899320656837444,
            "unit": "iter/sec",
            "range": "stddev: 0.019695774394983486",
            "extra": "mean: 5.9173976297999955 sec\nrounds: 5"
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
          "id": "50552e5e6b92e13607da1b65ef57ff85d24aca01",
          "message": "Add slurm driver for scheduler",
          "timestamp": "2024-06-24T14:10:16+02:00",
          "tree_id": "09cab0ca70569a03992ad7dbd891195672eae4fa",
          "url": "https://github.com/equinor/ert/commit/50552e5e6b92e13607da1b65ef57ff85d24aca01"
        },
        "date": 1719231212199,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16937501826817544,
            "unit": "iter/sec",
            "range": "stddev: 0.025426155558969477",
            "extra": "mean: 5.904058403800002 sec\nrounds: 5"
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
          "id": "839a23ba0ad6796d2985617f2a091adb1f870712",
          "message": "Type check ert.gui",
          "timestamp": "2024-06-24T12:24:21Z",
          "tree_id": "7dcf4784616c4cee4852ccb05bfe7543ddf6237e",
          "url": "https://github.com/equinor/ert/commit/839a23ba0ad6796d2985617f2a091adb1f870712"
        },
        "date": 1719232056631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1691621117084615,
            "unit": "iter/sec",
            "range": "stddev: 0.005382480128510347",
            "extra": "mean: 5.911489221199997 sec\nrounds: 5"
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
          "id": "621423d7e4e9d7ce06a187f43c10a922683959c7",
          "message": "Use existing fns to check if params/responses exist",
          "timestamp": "2024-06-24T15:16:17+02:00",
          "tree_id": "51d6376eb95d4e3ec5a6aa3dbc44b70f6ae877dd",
          "url": "https://github.com/equinor/ert/commit/621423d7e4e9d7ce06a187f43c10a922683959c7"
        },
        "date": 1719235178426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16961910185527876,
            "unit": "iter/sec",
            "range": "stddev: 0.013268229965529468",
            "extra": "mean: 5.895562404600002 sec\nrounds: 5"
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
          "id": "68a360f7da2eae0f90996c5a9970bfdaeaaced5f",
          "message": "Restructure ensemble evaluator",
          "timestamp": "2024-06-25T09:20:30+02:00",
          "tree_id": "ce9aba91e8f98ef12aecfcd4187c14d1154789b8",
          "url": "https://github.com/equinor/ert/commit/68a360f7da2eae0f90996c5a9970bfdaeaaced5f"
        },
        "date": 1719300225720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17109835638953788,
            "unit": "iter/sec",
            "range": "stddev: 0.022721392345337082",
            "extra": "mean: 5.844591503400011 sec\nrounds: 5"
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
          "id": "e1e3281197d57a0c540ecb1a3a219c8b25a45524",
          "message": "Update docs of FIELD keyword",
          "timestamp": "2024-06-25T09:20:52+02:00",
          "tree_id": "6dcb66736d61c9c8f6e3d723ad3f95f016b2881e",
          "url": "https://github.com/equinor/ert/commit/e1e3281197d57a0c540ecb1a3a219c8b25a45524"
        },
        "date": 1719300249462,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.165900123377002,
            "unit": "iter/sec",
            "range": "stddev: 0.022057538856138502",
            "extra": "mean: 6.027723063999997 sec\nrounds: 5"
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
          "id": "930dbcde0db295a27cfb533d72d0a8aaad55bacb",
          "message": "Remove dead test utility code\n\nThis class is not used, looks like a remnant from Slurm testing",
          "timestamp": "2024-06-25T09:21:10+02:00",
          "tree_id": "f27023669954480437d10d5ec7d2eefd44e723c9",
          "url": "https://github.com/equinor/ert/commit/930dbcde0db295a27cfb533d72d0a8aaad55bacb"
        },
        "date": 1719300282405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1675347597742083,
            "unit": "iter/sec",
            "range": "stddev: 0.025490262380036387",
            "extra": "mean: 5.968910579199985 sec\nrounds: 5"
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
          "id": "204b3f0eecdacd3df7a710d90ebbe4724af319ab",
          "message": "Move driver option names to queue_config\n\nThe drivers should not be responsible for defining how the drivers should\nbe configured in the config system, they should only expose an API",
          "timestamp": "2024-06-25T09:53:45+02:00",
          "tree_id": "03ec051e95ad80022ab3d767c257be49c3194a53",
          "url": "https://github.com/equinor/ert/commit/204b3f0eecdacd3df7a710d90ebbe4724af319ab"
        },
        "date": 1719302219916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16756251024280144,
            "unit": "iter/sec",
            "range": "stddev: 0.043873882986427984",
            "extra": "mean: 5.967922052199981 sec\nrounds: 5"
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
          "id": "d5edb15b22192ece78f6c803786ea0b8a1c94fa8",
          "message": "Sort output of expand wildards and add tests",
          "timestamp": "2024-06-25T10:05:22+02:00",
          "tree_id": "1bb2fb6f42839c75f751fb50e4e30050e1d34193",
          "url": "https://github.com/equinor/ert/commit/d5edb15b22192ece78f6c803786ea0b8a1c94fa8"
        },
        "date": 1719302918509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16900245058971575,
            "unit": "iter/sec",
            "range": "stddev: 0.04536608043902957",
            "extra": "mean: 5.9170739626 sec\nrounds: 5"
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
          "id": "7281a9340f7d31a1835b11af849d98740bdfa2de",
          "message": "Refactor realization delegate\n\nUse circular delegate, with queue color in middle and progress for fm-steps",
          "timestamp": "2024-06-25T11:52:37+02:00",
          "tree_id": "49c1a2a8521414648392e93e9c1c2184dcd1c4a2",
          "url": "https://github.com/equinor/ert/commit/7281a9340f7d31a1835b11af849d98740bdfa2de"
        },
        "date": 1719309362029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16421107428461795,
            "unit": "iter/sec",
            "range": "stddev: 0.02652365600001236",
            "extra": "mean: 6.089723268400007 sec\nrounds: 5"
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
          "id": "51c751ab9b2445520e87097f67fdeaf4056c8228",
          "message": "Add NPY to ruff rules with some numpy 2 support",
          "timestamp": "2024-06-25T16:44:19+02:00",
          "tree_id": "ce41b95b53a57be71e703575ac0efea67b1b9ab2",
          "url": "https://github.com/equinor/ert/commit/51c751ab9b2445520e87097f67fdeaf4056c8228"
        },
        "date": 1719326850340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1699616952143663,
            "unit": "iter/sec",
            "range": "stddev: 0.022927937456007175",
            "extra": "mean: 5.883678665000002 sec\nrounds: 5"
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
          "id": "abb9957f5e05c33cc606e3bb5bec448a36d9ee97",
          "message": "Fix issue with netCDF4",
          "timestamp": "2024-06-26T10:20:42+02:00",
          "tree_id": "1b22af1a72cd757e1e4d636831c3fe8e439da4fb",
          "url": "https://github.com/equinor/ert/commit/abb9957f5e05c33cc606e3bb5bec448a36d9ee97"
        },
        "date": 1719390251128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16961007515043786,
            "unit": "iter/sec",
            "range": "stddev: 0.02631761339656019",
            "extra": "mean: 5.895876168400003 sec\nrounds: 5"
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
          "id": "8a2fa40d366b85ff1650c7b9d9ebf749f1f59670",
          "message": "Fix max_memory updated correctly",
          "timestamp": "2024-06-27T09:13:52+02:00",
          "tree_id": "43c178b2a8604b5e9aa215977629a32bcc3124c0",
          "url": "https://github.com/equinor/ert/commit/8a2fa40d366b85ff1650c7b9d9ebf749f1f59670"
        },
        "date": 1719472650517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1664705423880731,
            "unit": "iter/sec",
            "range": "stddev: 0.0900404626342827",
            "extra": "mean: 6.007068792199993 sec\nrounds: 5"
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
          "id": "20fbc2bde52e11196925e90bd7f64bb4e8a6583e",
          "message": "Set default exit code to 1 in LocalDriver\n\nSince the exceptions are handled only in the driver.finish, this has\ncaused realizations to be flagged as completed ragardless. Here we\nadditionally log the exception if it happens.\nAdditionally this moves driver finish to try section in monitoring the jobs in order to allow for background tasks to finish if exception happens.",
          "timestamp": "2024-06-27T11:39:39+02:00",
          "tree_id": "a56a4342713fab155794aacd2e5d119593e1ba5b",
          "url": "https://github.com/equinor/ert/commit/20fbc2bde52e11196925e90bd7f64bb4e8a6583e"
        },
        "date": 1719481377632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16574523814766154,
            "unit": "iter/sec",
            "range": "stddev: 0.0288007683355679",
            "extra": "mean: 6.033355836800001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}