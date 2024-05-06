window.BENCHMARK_DATA = {
  "lastUpdate": 1714996982904,
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
          "id": "000ebc9b901e1c6392b7c1538b4cf6efb101f09d",
          "message": "Ensure forward models after running ones are pending\n\nWhen realizations are resubmitted after failures, the snapshot shows\ninformation from the previous run. This commit modifies the forward\nmodel state of forward models following any Running state for a\nrealization to make sure they are set to Start/Pending.\n\nThe GUI will thus show correct colors for these forward models, but\nerror messages from the failed previous run are still available from the\nGUI.",
          "timestamp": "2024-04-25T12:16:04+02:00",
          "tree_id": "af649e71272453a805f9c9237d9ff32ac1ad38b7",
          "url": "https://github.com/equinor/ert/commit/000ebc9b901e1c6392b7c1538b4cf6efb101f09d"
        },
        "date": 1714040384302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1868723641451448,
            "unit": "iter/sec",
            "range": "stddev: 0.04179079341681593",
            "extra": "mean: 5.351246047400002 sec\nrounds: 5"
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
          "id": "8004c59ca6f8ac0a2bcddadc5c37a16a3b95ff8b",
          "message": "Replace temp_storage dict with array",
          "timestamp": "2024-04-26T09:34:12+02:00",
          "tree_id": "e7f5fb0e449f0b84e724c462e421d53fd7a96da2",
          "url": "https://github.com/equinor/ert/commit/8004c59ca6f8ac0a2bcddadc5c37a16a3b95ff8b"
        },
        "date": 1714117052116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1894401058042086,
            "unit": "iter/sec",
            "range": "stddev: 0.013721466865766821",
            "extra": "mean: 5.2787132680000015 sec\nrounds: 5"
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
          "id": "56902de5ff705f99fa13cba4ad8e779d5ad6f411",
          "message": "Refer to jobs/forward model as forward model step in ert config \n\nRefer to jobs/forward model as forward model step in ert config(internally only)",
          "timestamp": "2024-04-26T15:04:50+02:00",
          "tree_id": "afc34b078acd0d6f6d7c40480b2e1680cdbcdbba",
          "url": "https://github.com/equinor/ert/commit/56902de5ff705f99fa13cba4ad8e779d5ad6f411"
        },
        "date": 1714136891471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18725917538197395,
            "unit": "iter/sec",
            "range": "stddev: 0.1920147620004339",
            "extra": "mean: 5.340192265400003 sec\nrounds: 5"
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
          "id": "ddcc6bb5396aca29889c16b954434ac79eb941f6",
          "message": "Add use_tmpdir to test that pollutes cwd when running tests",
          "timestamp": "2024-04-26T16:45:22+02:00",
          "tree_id": "dea85783b303dcebdaae9a2e491f72b69b1b5472",
          "url": "https://github.com/equinor/ert/commit/ddcc6bb5396aca29889c16b954434ac79eb941f6"
        },
        "date": 1714142929804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18794315275504855,
            "unit": "iter/sec",
            "range": "stddev: 0.026778127815274826",
            "extra": "mean: 5.320757821400003 sec\nrounds: 5"
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
          "id": "d30a2143ecaa00525fc45690eed7852be873d118",
          "message": "Rename get_all_ensembles_not_running\n\nIt returns all ensembles whether they are running or not.",
          "timestamp": "2024-04-29T08:40:13+02:00",
          "tree_id": "01da52cfbb149b2273241aa2a3c7802eeda312fe",
          "url": "https://github.com/equinor/ert/commit/d30a2143ecaa00525fc45690eed7852be873d118"
        },
        "date": 1714373026145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18983124752687644,
            "unit": "iter/sec",
            "range": "stddev: 0.012662444466058981",
            "extra": "mean: 5.267836633999991 sec\nrounds: 5"
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
          "id": "79e79020d0c1007472e4579a94c7629de50d24a3",
          "message": "Fix metadata bug",
          "timestamp": "2024-04-29T14:50:23+02:00",
          "tree_id": "aa59911bf342314898fe44d6b33dfac47bf581ed",
          "url": "https://github.com/equinor/ert/commit/79e79020d0c1007472e4579a94c7629de50d24a3"
        },
        "date": 1714395217441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18567010799635442,
            "unit": "iter/sec",
            "range": "stddev: 0.026513928175772042",
            "extra": "mean: 5.385896581799988 sec\nrounds: 5"
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
          "id": "af9a21094fc3d1a13ef9e70cea28439148329ba6",
          "message": "Increase number and duration of license retry",
          "timestamp": "2024-04-29T16:16:44+02:00",
          "tree_id": "a4d18ef690d27e8d6a35eb882e858ef074ac2ff8",
          "url": "https://github.com/equinor/ert/commit/af9a21094fc3d1a13ef9e70cea28439148329ba6"
        },
        "date": 1714400395129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1885887579275202,
            "unit": "iter/sec",
            "range": "stddev: 0.016721634358593435",
            "extra": "mean: 5.302543009399995 sec\nrounds: 5"
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
          "id": "805be6db18fa3362e48abaac37151e2aa8690f7f",
          "message": "Implement exit codes in lsf driver",
          "timestamp": "2024-04-29T16:19:46+02:00",
          "tree_id": "13ec793703553077b3fcece3380b0060de98ecb1",
          "url": "https://github.com/equinor/ert/commit/805be6db18fa3362e48abaac37151e2aa8690f7f"
        },
        "date": 1714400575219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18730396006851052,
            "unit": "iter/sec",
            "range": "stddev: 0.034670769178769774",
            "extra": "mean: 5.338915416599991 sec\nrounds: 5"
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
          "id": "ed89624ab6d4bfa51d1ad211f2c4c8f2a28c3f3e",
          "message": "Remove dead code in plotter",
          "timestamp": "2024-04-29T16:39:39+02:00",
          "tree_id": "0baf88b675a6a80c788f5d0fc04ba58f4d144b3f",
          "url": "https://github.com/equinor/ert/commit/ed89624ab6d4bfa51d1ad211f2c4c8f2a28c3f3e"
        },
        "date": 1714401767979,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19068932698072197,
            "unit": "iter/sec",
            "range": "stddev: 0.04502763781844777",
            "extra": "mean: 5.244131991199993 sec\nrounds: 5"
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
          "id": "22e03328570738c404a3b4c8ffbeafc2abe679b5",
          "message": "Fix CSV export",
          "timestamp": "2024-04-30T08:31:08+02:00",
          "tree_id": "ac9bb43a941af90f2148d0b8881f5b96f6a6a114",
          "url": "https://github.com/equinor/ert/commit/22e03328570738c404a3b4c8ffbeafc2abe679b5"
        },
        "date": 1714458852460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.189876039303941,
            "unit": "iter/sec",
            "range": "stddev: 0.025145285781001638",
            "extra": "mean: 5.266593950800006 sec\nrounds: 5"
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
          "id": "586d6ca2f36536a8f48070096d1be93f621af195",
          "message": "Add a tab for std_dev image in plotter",
          "timestamp": "2024-04-30T09:15:39+02:00",
          "tree_id": "e2d3bc3df6c4dfa9a43578268e87d0022aa7c2e0",
          "url": "https://github.com/equinor/ert/commit/586d6ca2f36536a8f48070096d1be93f621af195"
        },
        "date": 1714461521994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18922799790097605,
            "unit": "iter/sec",
            "range": "stddev: 0.07287134970200071",
            "extra": "mean: 5.284630240199999 sec\nrounds: 5"
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
          "id": "69707616bd0b491ebf5fd8d88e13f54cba7829a2",
          "message": "Remove unused fields from EnsembleOut",
          "timestamp": "2024-04-30T10:23:11+02:00",
          "tree_id": "fa11f31b18504d5f44a57c619b6ee6c1b93b5717",
          "url": "https://github.com/equinor/ert/commit/69707616bd0b491ebf5fd8d88e13f54cba7829a2"
        },
        "date": 1714465574622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19039857365263443,
            "unit": "iter/sec",
            "range": "stddev: 0.01615813787536445",
            "extra": "mean: 5.252140185799988 sec\nrounds: 5"
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
          "id": "288530ffc881b96a61ad536fd1207bb3845bc293",
          "message": "Set default state of ensemble to INITIALIZED if no parameters",
          "timestamp": "2024-04-30T12:38:59+02:00",
          "tree_id": "d6385106675e46c4b7191bb394cdbffccea87ed5",
          "url": "https://github.com/equinor/ert/commit/288530ffc881b96a61ad536fd1207bb3845bc293"
        },
        "date": 1714473753463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18490514210150275,
            "unit": "iter/sec",
            "range": "stddev: 0.0767011760243102",
            "extra": "mean: 5.408178423999994 sec\nrounds: 5"
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
          "id": "5ebcdba65d9bf79069e0fce2e8692716f488e96f",
          "message": "Allow empty active realizations",
          "timestamp": "2024-04-30T12:59:23+02:00",
          "tree_id": "1c03e9cbe9cfaa8c2c80c882db6b685ad6b8bab2",
          "url": "https://github.com/equinor/ert/commit/5ebcdba65d9bf79069e0fce2e8692716f488e96f"
        },
        "date": 1714474951552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19015469083338765,
            "unit": "iter/sec",
            "range": "stddev: 0.04782107027061702",
            "extra": "mean: 5.258876315999975 sec\nrounds: 5"
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
          "id": "181ab29bd0829f4318134c10bb204ead1e6e905c",
          "message": "Fix flaky csv-export test",
          "timestamp": "2024-04-30T17:14:56+02:00",
          "tree_id": "aec0edc164d20581acbf3c086a66f746f3926577",
          "url": "https://github.com/equinor/ert/commit/181ab29bd0829f4318134c10bb204ead1e6e905c"
        },
        "date": 1714490279487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18841894490879535,
            "unit": "iter/sec",
            "range": "stddev: 0.03566230071821977",
            "extra": "mean: 5.30732193880001 sec\nrounds: 5"
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
          "id": "a4c5d858bf81110beecaae50e1cfd923452d9be8",
          "message": "Add timeout to test",
          "timestamp": "2024-05-02T09:50:42+02:00",
          "tree_id": "6c930136e2cae04fc6541d7053d5eeb30045df23",
          "url": "https://github.com/equinor/ert/commit/a4c5d858bf81110beecaae50e1cfd923452d9be8"
        },
        "date": 1714636448788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19017735872124525,
            "unit": "iter/sec",
            "range": "stddev: 0.04092621949468263",
            "extra": "mean: 5.2582494926000205 sec\nrounds: 5"
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
          "id": "0b7e5901b22ad1c8f409cbb4d3c9eac6f8ec2937",
          "message": "Move log statement to addNode",
          "timestamp": "2024-05-02T11:53:44+02:00",
          "tree_id": "801b5ea5e3c41cd43de907d219d577f673566231",
          "url": "https://github.com/equinor/ert/commit/0b7e5901b22ad1c8f409cbb4d3c9eac6f8ec2937"
        },
        "date": 1714643813695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19122963277429697,
            "unit": "iter/sec",
            "range": "stddev: 0.036138843279390945",
            "extra": "mean: 5.2293150674 sec\nrounds: 5"
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
          "id": "2b32f0b6fa965e094347462340bebedbee96dce5",
          "message": "Skip snapshot test",
          "timestamp": "2024-05-02T13:32:45+02:00",
          "tree_id": "a91618b2ef819f838ec3b68b32edce699c48f17e",
          "url": "https://github.com/equinor/ert/commit/2b32f0b6fa965e094347462340bebedbee96dce5"
        },
        "date": 1714649747543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19053173212375005,
            "unit": "iter/sec",
            "range": "stddev: 0.07880871613494933",
            "extra": "mean: 5.24846957960001 sec\nrounds: 5"
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
          "id": "92ff4bae808cf2b958557a6d0d4c54ed4455f686",
          "message": "Iterate ensembles to look for history to plot",
          "timestamp": "2024-05-02T15:05:02+02:00",
          "tree_id": "875cf5b3a2545a6ae5722628c690481ef7fdd8f4",
          "url": "https://github.com/equinor/ert/commit/92ff4bae808cf2b958557a6d0d4c54ed4455f686"
        },
        "date": 1714655310739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18911219209169056,
            "unit": "iter/sec",
            "range": "stddev: 0.09958879961654699",
            "extra": "mean: 5.287866366199978 sec\nrounds: 5"
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
      }
    ]
  }
}