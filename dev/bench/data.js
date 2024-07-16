window.BENCHMARK_DATA = {
  "lastUpdate": 1721117680637,
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
          "id": "f529971b9dcaf19c7f786ffa3e39c5d4eebda853",
          "message": "Fix restart for ensemble experiment",
          "timestamp": "2024-07-02T10:08:52+02:00",
          "tree_id": "04ac9255656284347a6ef976a0f2121183cced59",
          "url": "https://github.com/equinor/ert/commit/f529971b9dcaf19c7f786ffa3e39c5d4eebda853"
        },
        "date": 1719907939909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.166826130398474,
            "unit": "iter/sec",
            "range": "stddev: 0.022699518320138504",
            "extra": "mean: 5.994264793000002 sec\nrounds: 5"
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
          "id": "3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5",
          "message": "Avoid imports from job_queue\n\njob_queue module is going away soon.",
          "timestamp": "2024-07-02T15:38:47+02:00",
          "tree_id": "90ec4d50078277140d8d81a08ea8d8c7f3569c65",
          "url": "https://github.com/equinor/ert/commit/3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5"
        },
        "date": 1719927731939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1715129349503157,
            "unit": "iter/sec",
            "range": "stddev: 0.028807641455352834",
            "extra": "mean: 5.8304640421999805 sec\nrounds: 5"
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
          "id": "939e661f6b4b011fd90c30d5da16cb379241af8e",
          "message": "Avoid unused varibles in test_slurm_driver",
          "timestamp": "2024-07-02T15:45:25+02:00",
          "tree_id": "68d011736ea73ccc0745764bd956e5624c298647",
          "url": "https://github.com/equinor/ert/commit/939e661f6b4b011fd90c30d5da16cb379241af8e"
        },
        "date": 1719928123785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16724514252789935,
            "unit": "iter/sec",
            "range": "stddev: 0.0430715670160223",
            "extra": "mean: 5.979246899999998 sec\nrounds: 5"
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
          "id": "b27fda40833a99645b47389a056d74b79020691c",
          "message": "Have ensemble evaluator methods return early instead of if-else",
          "timestamp": "2024-07-03T07:38:37+02:00",
          "tree_id": "281db1ed2d31f9fd81188188be3b78995a218cb3",
          "url": "https://github.com/equinor/ert/commit/b27fda40833a99645b47389a056d74b79020691c"
        },
        "date": 1719985327164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16738035552428426,
            "unit": "iter/sec",
            "range": "stddev: 0.055433575318829954",
            "extra": "mean: 5.9744167520000016 sec\nrounds: 5"
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
          "id": "41774aabdeda39c4f3215fbae5b668e4e99fc1ea",
          "message": "Remove validator for ensemble name",
          "timestamp": "2024-07-03T09:45:39+02:00",
          "tree_id": "62cb2d6b8f73e2ecd05ac715684604896c6cb777",
          "url": "https://github.com/equinor/ert/commit/41774aabdeda39c4f3215fbae5b668e4e99fc1ea"
        },
        "date": 1719992939201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16443150395445866,
            "unit": "iter/sec",
            "range": "stddev: 0.0411642085969246",
            "extra": "mean: 6.081559652199997 sec\nrounds: 5"
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
          "id": "5105f4a1fa315b15aefe850c1246ebf9a88ae458",
          "message": "Revert \"Add validation for FIELD parameter name\"\n\nThis reverts commit 892f91e327eabc5356689d51d11c6c21262924fd.\r\n\r\nNot everyone is using Eclipse.\r\nFor example, Intersert does not have a limitation of 8 characters.",
          "timestamp": "2024-07-03T10:02:54+02:00",
          "tree_id": "a10ad1bfdba005d214bbaef5c1e1049ade68b86e",
          "url": "https://github.com/equinor/ert/commit/5105f4a1fa315b15aefe850c1246ebf9a88ae458"
        },
        "date": 1719993965690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16317157895556283,
            "unit": "iter/sec",
            "range": "stddev: 0.03577879132714757",
            "extra": "mean: 6.128518253000015 sec\nrounds: 5"
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
          "id": "225bd6df2b27fab16dc15b0fe8ab5be3226c9028",
          "message": "Revert combine datasets\n\nThis is being reverted because the checking of the state takes\ntoo long, causing the start up time for ert to become too slow.\n\nThis blocks stable releases, so will be reverted to unblock that,\nand can be reinstated at a later time.\n\nThis revert commit will slow down the plotting significantly, as\nthat was the main benefit of having unified datasets.",
          "timestamp": "2024-07-03T11:35:08+02:00",
          "tree_id": "ebc6de162547a05e3f4b5c3d21cc7c3df36a1903",
          "url": "https://github.com/equinor/ert/commit/225bd6df2b27fab16dc15b0fe8ab5be3226c9028"
        },
        "date": 1719999500056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1860367105425329,
            "unit": "iter/sec",
            "range": "stddev: 0.04225792375605515",
            "extra": "mean: 5.375283174399999 sec\nrounds: 5"
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
          "id": "0529b5ca0ba1b88e7cd7dcdd35c2fa1cb31c6845",
          "message": "Simplify Snapshot model\n\n* Remove unused memory variables\r\n* Remove concept JOB\r\n* Remove NodeTypes and reduce COLUMN\r\n* Remove sorted_forward_model_step_ids_by_realization_id\r\n* Remove sorted_realization_ids\r\n* Combine RootNodeData with RootNode\r\n* Remove meaningless emit\r\n* Only redraw altered realizations in the view\r\n* Fix incorrect inheritance in _Node for data\r\n* Remove unused code from row() and deduplicate\r\n* Simplify add_child in _Node\r\n\r\nCo-authored-by: Jon Holba <jholba@equinor.com>",
          "timestamp": "2024-07-03T12:22:11+02:00",
          "tree_id": "519b2a3ee72dd04c9c01e694a72c0e1c90389807",
          "url": "https://github.com/equinor/ert/commit/0529b5ca0ba1b88e7cd7dcdd35c2fa1cb31c6845"
        },
        "date": 1720002319412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18473240207883856,
            "unit": "iter/sec",
            "range": "stddev: 0.032696424716454696",
            "extra": "mean: 5.413235516599997 sec\nrounds: 5"
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
          "id": "3d4a430ea43b1d6a3711822b8f591ce7e1247024",
          "message": "Add PROJECT_CODE to queue options when jobs forward model contain known simulators\n\nAdd PROJECT_CODE support for LSF,OpenPBS and TORQUE Drivers.",
          "timestamp": "2024-07-03T13:02:10+02:00",
          "tree_id": "f075fe1094e423979ffac7f9a3764a4aaeab7ca9",
          "url": "https://github.com/equinor/ert/commit/3d4a430ea43b1d6a3711822b8f591ce7e1247024"
        },
        "date": 1720004710133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18694151235335668,
            "unit": "iter/sec",
            "range": "stddev: 0.020851279125997997",
            "extra": "mean: 5.349266663199989 sec\nrounds: 5"
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
          "id": "ab33f3d47e7be3e3433b307fb5bd602de1305c76",
          "message": "Remove unused dependencies\n\n-beartype\n-deprecated\n-sortedcontainers",
          "timestamp": "2024-07-03T15:33:49+02:00",
          "tree_id": "a161d5d5fc53e529799ef78be393f4216b2e05e7",
          "url": "https://github.com/equinor/ert/commit/ab33f3d47e7be3e3433b307fb5bd602de1305c76"
        },
        "date": 1720013814567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1877076502412766,
            "unit": "iter/sec",
            "range": "stddev: 0.01627305559063679",
            "extra": "mean: 5.327433371600011 sec\nrounds: 5"
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
          "id": "6be9385517e08fcad77868c56f6454493f3b351b",
          "message": "Avoid false positive ruff issue by noqa\n\n__setattr__ should be used here as variable_name is an incoming parameter",
          "timestamp": "2024-07-03T16:21:23+02:00",
          "tree_id": "e09a4f176c273f3096a11b80e2b26f2f47c89f71",
          "url": "https://github.com/equinor/ert/commit/6be9385517e08fcad77868c56f6454493f3b351b"
        },
        "date": 1720016675513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1861735039312572,
            "unit": "iter/sec",
            "range": "stddev: 0.026040568414246183",
            "extra": "mean: 5.371333615599997 sec\nrounds: 5"
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
          "id": "c8d52b98da4959a8e09fd8abb40a2e4091b1a994",
          "message": "Allow adjustable size for job overview header",
          "timestamp": "2024-07-04T09:02:56+02:00",
          "tree_id": "e2503c057eb0a4b49d1474697a210dad66acbe4e",
          "url": "https://github.com/equinor/ert/commit/c8d52b98da4959a8e09fd8abb40a2e4091b1a994"
        },
        "date": 1720076797439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1820534530373093,
            "unit": "iter/sec",
            "range": "stddev: 0.10137371064473158",
            "extra": "mean: 5.492892242999995 sec\nrounds: 5"
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
          "id": "fe09197b5a992466b382b134ef8ad22a9b6de2f7",
          "message": "Show ert filename in eventviewer windowtitle",
          "timestamp": "2024-07-04T09:10:41+02:00",
          "tree_id": "e09faa4b8caf3b61100486610d256edf7b1b1a25",
          "url": "https://github.com/equinor/ert/commit/fe09197b5a992466b382b134ef8ad22a9b6de2f7"
        },
        "date": 1720077226017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18398053323113567,
            "unit": "iter/sec",
            "range": "stddev: 0.042840876429896806",
            "extra": "mean: 5.435357656799999 sec\nrounds: 5"
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
          "id": "153d739de1d5dd12818303396291e4d86ae47e4c",
          "message": "Fix small GUI error in create_experiment",
          "timestamp": "2024-07-04T09:39:29+02:00",
          "tree_id": "a6ac640fbac2d203766d2ecaccee9d354afa2e86",
          "url": "https://github.com/equinor/ert/commit/153d739de1d5dd12818303396291e4d86ae47e4c"
        },
        "date": 1720078957129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18962272982629164,
            "unit": "iter/sec",
            "range": "stddev: 0.022858283825285968",
            "extra": "mean: 5.273629384600008 sec\nrounds: 5"
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
          "id": "bbabc28acbd46abd7401477bccb31b9fa42bdcb1",
          "message": "Fix the 'initialize from scratch' tab",
          "timestamp": "2024-07-04T10:09:48+02:00",
          "tree_id": "678c943f711f72e359d186a55ff480f71bb3da88",
          "url": "https://github.com/equinor/ert/commit/bbabc28acbd46abd7401477bccb31b9fa42bdcb1"
        },
        "date": 1720080789553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1882308279253752,
            "unit": "iter/sec",
            "range": "stddev: 0.01494027174517906",
            "extra": "mean: 5.312626050799997 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "665a2558e14719b66502944f3729e61f32f52e92",
          "message": "Fix color selection in plotter (#8302)\n\n* Fix saving of observation alpha in plot\r\n\r\n* Fix saving of ensemble alpha in plot",
          "timestamp": "2024-07-05T10:35:28+02:00",
          "tree_id": "50c24809555a33d92fa48f905fb3b44a0cdf362f",
          "url": "https://github.com/equinor/ert/commit/665a2558e14719b66502944f3729e61f32f52e92"
        },
        "date": 1720168719797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18821527810216698,
            "unit": "iter/sec",
            "range": "stddev: 0.051157267040871306",
            "extra": "mean: 5.31306496520001 sec\nrounds: 5"
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
          "id": "5c8d1e24bc0bcad4cde239ac9f1f98e39c74ecbc",
          "message": "Rename EnsembleInitializationConfigurationPanel",
          "timestamp": "2024-07-05T11:49:41+02:00",
          "tree_id": "9f9d87c6f89deb787d04a2ae330ce2652238379a",
          "url": "https://github.com/equinor/ert/commit/5c8d1e24bc0bcad4cde239ac9f1f98e39c74ecbc"
        },
        "date": 1720173193686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16403168187754386,
            "unit": "iter/sec",
            "range": "stddev: 0.0935173025194353",
            "extra": "mean: 6.096383263000007 sec\nrounds: 5"
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
          "id": "a76e74db907e295da6d054d495e3099b1283539d",
          "message": "Refactor JobList & RealList ProxyModels\n\n* Refactor real_list rowCount\r\n* Refactor real_list index\r\n* Refactor real_list hasChildren\r\n* Refactor real_list mapToSource\r\n* Refactor real_list _accept_index\r\n* Refactor real_list connect & disconnect\r\n* Remove real_list unused signal iter_changed\r\n* Refactor real_list _source_data_changed\r\n* Refactor real_list _source_rows_about_to_be_inserted\r\n* Refactor real_list _source_rows_inserted\r\n* Refactor real_list mapFromSource\r\n* Have real_list ColumnCount return one\r\n* Refactor job_list rowCount\r\n* Refactor job_list _accept_index\r\n* Refactor job_list _source_data_changed\r\n* Refactor job_list mapFromSource\r\n* Refactor job_list mapToSource\r\n* Refactor job_list index\r\n* Refactor job_list headerData\r\n* Rename job_list real variable for consistency\r\n* Refactor __init__ signatures",
          "timestamp": "2024-07-05T13:00:09+02:00",
          "tree_id": "a159d6d36a4cc65f5732a14a376f640557dfc4fe",
          "url": "https://github.com/equinor/ert/commit/a76e74db907e295da6d054d495e3099b1283539d"
        },
        "date": 1720177407815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18878524430088156,
            "unit": "iter/sec",
            "range": "stddev: 0.054180609484872355",
            "extra": "mean: 5.297024159399996 sec\nrounds: 5"
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
          "id": "f0d6e531b457817841a7688bc932273321071075",
          "message": "Elevate generic queue options to global keyword",
          "timestamp": "2024-07-05T17:41:22+03:00",
          "tree_id": "d8870551216576f2ae1dcb87bf528e94252826e1",
          "url": "https://github.com/equinor/ert/commit/f0d6e531b457817841a7688bc932273321071075"
        },
        "date": 1720190671185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18458167605526396,
            "unit": "iter/sec",
            "range": "stddev: 0.026135964731252143",
            "extra": "mean: 5.41765586580002 sec\nrounds: 5"
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
          "id": "d5a06b2e27c8951f6dd9841cc3322e2f893e8cbf",
          "message": "Reduce restart wait to 20sec",
          "timestamp": "2024-07-08T08:55:58+02:00",
          "tree_id": "63abbdcd27b5ca6d900152c5fdfdda256aec0e9c",
          "url": "https://github.com/equinor/ert/commit/d5a06b2e27c8951f6dd9841cc3322e2f893e8cbf"
        },
        "date": 1720421960155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18635195027518772,
            "unit": "iter/sec",
            "range": "stddev: 0.19112138016557814",
            "extra": "mean: 5.366190149999989 sec\nrounds: 5"
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
          "id": "9ac8a3373cc45fcc25092658b36aba0ab2dfd7ff",
          "message": "Fix and enforce usage of encoding when writing text files",
          "timestamp": "2024-07-08T12:18:32+02:00",
          "tree_id": "1c1b82520d867d65915e9bb98775e9395e0b4298",
          "url": "https://github.com/equinor/ert/commit/9ac8a3373cc45fcc25092658b36aba0ab2dfd7ff"
        },
        "date": 1720434136782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18445757417966452,
            "unit": "iter/sec",
            "range": "stddev: 0.028832970921317636",
            "extra": "mean: 5.42130082999999 sec\nrounds: 5"
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
          "id": "6ad5642ca5ab3b2ce01f3db759212dd04b5b9a5a",
          "message": "Cache result of row in _Node\n\nrow() used a significant amount of time when profiling",
          "timestamp": "2024-07-08T12:59:17+02:00",
          "tree_id": "0808bb72be36d191abbfa61293942745cf65cff2",
          "url": "https://github.com/equinor/ert/commit/6ad5642ca5ab3b2ce01f3db759212dd04b5b9a5a"
        },
        "date": 1720436552024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1903624156103766,
            "unit": "iter/sec",
            "range": "stddev: 0.012969286165811568",
            "extra": "mean: 5.253137793999974 sec\nrounds: 5"
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
          "id": "9ade4e58a131e1082cc38bc0c30f2b9086c2da5d",
          "message": "Simplify _estimate_duration in snapshot.py",
          "timestamp": "2024-07-08T14:50:03+02:00",
          "tree_id": "86903a1c182c68631e7dfd9a7327b8d0ffae2835",
          "url": "https://github.com/equinor/ert/commit/9ade4e58a131e1082cc38bc0c30f2b9086c2da5d"
        },
        "date": 1720443266151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18661634276611583,
            "unit": "iter/sec",
            "range": "stddev: 0.05248126583588658",
            "extra": "mean: 5.358587491200001 sec\nrounds: 5"
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
          "id": "f41fb0cd2eed28bbe5b3fcff45bc26412a1412a5",
          "message": "Solve ruff collapsible-else-if\n\nThis reduces indentation.",
          "timestamp": "2024-07-08T22:32:54+02:00",
          "tree_id": "714c5550d3ff051565c0eee05a95980e21380e73",
          "url": "https://github.com/equinor/ert/commit/f41fb0cd2eed28bbe5b3fcff45bc26412a1412a5"
        },
        "date": 1720470956778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19225330728543713,
            "unit": "iter/sec",
            "range": "stddev: 0.02465825697968032",
            "extra": "mean: 5.201470987000016 sec\nrounds: 5"
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
          "id": "2b05c45b93ae4f65056ac1b70eac3038ef8efe0c",
          "message": "Fix typing errors\n\nAdd Final annotation to states\nChange literal to str in lookup tables\nAdd None checks to satisfy mypy\nRemove mypy ignores that are not needed",
          "timestamp": "2024-07-09T11:22:33+02:00",
          "tree_id": "e617035355776df8116545a1a2410deed691446d",
          "url": "https://github.com/equinor/ert/commit/2b05c45b93ae4f65056ac1b70eac3038ef8efe0c"
        },
        "date": 1720517143622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18633830718308322,
            "unit": "iter/sec",
            "range": "stddev: 0.023904049625589934",
            "extra": "mean: 5.366583045199979 sec\nrounds: 5"
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
          "id": "ed3ba44d5e46142fd4900b0b50037cbd7b0a8573",
          "message": "Increase timeout",
          "timestamp": "2024-07-10T12:53:44+02:00",
          "tree_id": "60c7703c012d606e39500cb7dbd82384443f89bc",
          "url": "https://github.com/equinor/ert/commit/ed3ba44d5e46142fd4900b0b50037cbd7b0a8573"
        },
        "date": 1720609010276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1856776765857917,
            "unit": "iter/sec",
            "range": "stddev: 0.021373913542607963",
            "extra": "mean: 5.385677042000003 sec\nrounds: 5"
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
          "id": "3b2f306bb6cd6401752e7a7706825693d86a1262",
          "message": "Make ErtConfig fetch its own plugins",
          "timestamp": "2024-07-10T12:54:15+02:00",
          "tree_id": "28badcd265f81ad96847f8668803ff231f4fb0f8",
          "url": "https://github.com/equinor/ert/commit/3b2f306bb6cd6401752e7a7706825693d86a1262"
        },
        "date": 1720609037009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1885014826515884,
            "unit": "iter/sec",
            "range": "stddev: 0.030838037746676806",
            "extra": "mean: 5.30499806119999 sec\nrounds: 5"
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
          "id": "dc3687047defb4e365fb53f5e789c331e9cd1180",
          "message": "Fix typing issues in remaining gui code\n\nAdded casts where needed\nChanged method params to match overridden method\nAdded None check\nTyping added to function signatures\nRemoved the rest of the mypy ignores for gui",
          "timestamp": "2024-07-12T10:34:49+02:00",
          "tree_id": "83a07782e3d4ae403471bff1074afce15e0938ae",
          "url": "https://github.com/equinor/ert/commit/dc3687047defb4e365fb53f5e789c331e9cd1180"
        },
        "date": 1720773469593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18875513174088304,
            "unit": "iter/sec",
            "range": "stddev: 0.028525443704025266",
            "extra": "mean: 5.297869206400003 sec\nrounds: 5"
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
          "id": "9987504293d8fc26582820e3ee4f4550f1f3277d",
          "message": "Have driver.__init__(...) exceptions propagate",
          "timestamp": "2024-07-12T20:37:49+02:00",
          "tree_id": "9ba435b9f3dd6ec1f04e6265443ccb1cb0a1a2d1",
          "url": "https://github.com/equinor/ert/commit/9987504293d8fc26582820e3ee4f4550f1f3277d"
        },
        "date": 1720809654938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18884558849439392,
            "unit": "iter/sec",
            "range": "stddev: 0.035741181233151766",
            "extra": "mean: 5.295331535000014 sec\nrounds: 5"
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
          "id": "99cd99b214e6075af772cdec1c42f7d15f6cc0b5",
          "message": "Remove LOCAL driver as option in hanging job_queue tests\n\n- Also removes dead test code for job queue TORQUE driver",
          "timestamp": "2024-07-16T10:11:08+02:00",
          "tree_id": "a4cef97ca6a1ef0af69b80eb2d73c686aa87ce1f",
          "url": "https://github.com/equinor/ert/commit/99cd99b214e6075af772cdec1c42f7d15f6cc0b5"
        },
        "date": 1721117680205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1844631247655288,
            "unit": "iter/sec",
            "range": "stddev: 0.013140607704144863",
            "extra": "mean: 5.421137700400015 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}