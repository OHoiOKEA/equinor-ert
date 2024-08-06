window.BENCHMARK_DATA = {
  "lastUpdate": 1722947129392,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "b5ce0939f9294c73f4acd559f98f39c23480f161",
          "message": "Fix copy button crashing in plot error window",
          "timestamp": "2024-07-30T09:32:57+02:00",
          "tree_id": "4add61cbb3df59ef10e42172eb48b4cad2ea82fd",
          "url": "https://github.com/equinor/ert/commit/b5ce0939f9294c73f4acd559f98f39c23480f161"
        },
        "date": 1722324927049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19324484228257907,
            "unit": "iter/sec",
            "range": "stddev: 0.03977326505669294",
            "extra": "mean: 5.174782354800004 sec\nrounds: 5"
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
          "id": "d098d7dd2f909bb39e752aaf9431054adaada7ad",
          "message": "Add test of about dialog",
          "timestamp": "2024-07-30T10:20:57+02:00",
          "tree_id": "7c81e88e6b55f667a996533cf8e24cd21544a019",
          "url": "https://github.com/equinor/ert/commit/d098d7dd2f909bb39e752aaf9431054adaada7ad"
        },
        "date": 1722327813312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1918236564377485,
            "unit": "iter/sec",
            "range": "stddev: 0.0136806681979455",
            "extra": "mean: 5.213121356200008 sec\nrounds: 5"
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
          "id": "90fcc8186f0b35f1197e35d40bc068bba42ab864",
          "message": "Fix unused ignore",
          "timestamp": "2024-07-30T13:34:12+02:00",
          "tree_id": "2925b99177fb737ecde03115d55a38ee8bf77e12",
          "url": "https://github.com/equinor/ert/commit/90fcc8186f0b35f1197e35d40bc068bba42ab864"
        },
        "date": 1722339401339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19367344532412262,
            "unit": "iter/sec",
            "range": "stddev: 0.026394351307507526",
            "extra": "mean: 5.163330462399983 sec\nrounds: 5"
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
          "id": "7fc572d2f803656f6e1a9dd4d03677862e909b42",
          "message": "Remove unused variable",
          "timestamp": "2024-07-31T12:29:17+02:00",
          "tree_id": "fa54b7c9526b360eea661828bb526b92ea91f034",
          "url": "https://github.com/equinor/ert/commit/7fc572d2f803656f6e1a9dd4d03677862e909b42"
        },
        "date": 1722421906696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19015696545201005,
            "unit": "iter/sec",
            "range": "stddev: 0.02528045803326657",
            "extra": "mean: 5.2588134104 sec\nrounds: 5"
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
          "id": "23b7c9bc2cfa44ac88874f317e43e2a80f0e59ac",
          "message": "Wait for socket to be closed before trying to send done signal\n\nThis test has been flaky and this is an attempt to fix that.\nWith the new event we are sure that the websocket is closed before we\nsend signal_done from test.",
          "timestamp": "2024-07-31T13:45:26+02:00",
          "tree_id": "9df63924c4515cee45d39f646e70722f3d4b4d5d",
          "url": "https://github.com/equinor/ert/commit/23b7c9bc2cfa44ac88874f317e43e2a80f0e59ac"
        },
        "date": 1722426483618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19122901969347897,
            "unit": "iter/sec",
            "range": "stddev: 0.041367644008016",
            "extra": "mean: 5.229331832599991 sec\nrounds: 5"
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
          "id": "121970a497d60006242686adcb93b879cdf5cc36",
          "message": "Mark empty stdout/stderr files in simulation",
          "timestamp": "2024-08-01T09:11:56+02:00",
          "tree_id": "68706c0d2e7291e270346f483c5f7f43a24a12f3",
          "url": "https://github.com/equinor/ert/commit/121970a497d60006242686adcb93b879cdf5cc36"
        },
        "date": 1722496476965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19337936258735341,
            "unit": "iter/sec",
            "range": "stddev: 0.049128102354384626",
            "extra": "mean: 5.1711826257999975 sec\nrounds: 5"
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
          "id": "d99779f70bc886c6371270787044e86369ec814b",
          "message": "Remove unused timeout_queue varuable",
          "timestamp": "2024-08-01T09:40:45+02:00",
          "tree_id": "284dd282abc714f69ab75edebf35fa46ddf3da67",
          "url": "https://github.com/equinor/ert/commit/d99779f70bc886c6371270787044e86369ec814b"
        },
        "date": 1722498198769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19018740331534248,
            "unit": "iter/sec",
            "range": "stddev: 0.02768264062558892",
            "extra": "mean: 5.257971782400006 sec\nrounds: 5"
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
          "id": "5f21614897abc650122f77c07fe124e9df365891",
          "message": "Add test of export tool",
          "timestamp": "2024-08-01T13:49:02+02:00",
          "tree_id": "cf78652d2164bed1864a169fb4fbe2b1c9d0b47e",
          "url": "https://github.com/equinor/ert/commit/5f21614897abc650122f77c07fe124e9df365891"
        },
        "date": 1722513098672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18982417905951463,
            "unit": "iter/sec",
            "range": "stddev: 0.0199691197236878",
            "extra": "mean: 5.268032791999985 sec\nrounds: 5"
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
          "id": "e27780afa13e4dfd209e177fcb4cab19d116c222",
          "message": "Display experiment and ensemble name next to drag icon.",
          "timestamp": "2024-08-01T20:37:46+02:00",
          "tree_id": "f2cad1967fe97cdc69ab428ecc76af8de11476c9",
          "url": "https://github.com/equinor/ert/commit/e27780afa13e4dfd209e177fcb4cab19d116c222"
        },
        "date": 1722537613382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19212131192786103,
            "unit": "iter/sec",
            "range": "stddev: 0.04266250327657179",
            "extra": "mean: 5.205044614600001 sec\nrounds: 5"
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
          "id": "78549a34ca4f439bdd775677af60e37c4acd8c58",
          "message": "Fix user warning about to_datetime conversion",
          "timestamp": "2024-08-01T20:37:22+02:00",
          "tree_id": "222a9a88b52b715ed8efba9b4fede5511e0bbc5c",
          "url": "https://github.com/equinor/ert/commit/78549a34ca4f439bdd775677af60e37c4acd8c58"
        },
        "date": 1722537716183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18956234097695798,
            "unit": "iter/sec",
            "range": "stddev: 0.048867049343616416",
            "extra": "mean: 5.275309403999995 sec\nrounds: 5"
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
          "id": "bc8cf11ef4a89a854452ec3953c6aee190d152bc",
          "message": "Add SearchBar to the event viewer",
          "timestamp": "2024-08-02T10:15:08+02:00",
          "tree_id": "d0b7b18bb2fab2ed4ad3c8033502523e5de38eb2",
          "url": "https://github.com/equinor/ert/commit/bc8cf11ef4a89a854452ec3953c6aee190d152bc"
        },
        "date": 1722586689985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19360905356688413,
            "unit": "iter/sec",
            "range": "stddev: 0.0246922091551914",
            "extra": "mean: 5.165047716399999 sec\nrounds: 5"
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
          "id": "8928cd8488885f0445e2ed3be543589cf3c777a3",
          "message": "Move information about iteration",
          "timestamp": "2024-08-02T11:31:33+02:00",
          "tree_id": "97ef497b020bb3d96719f4434f76d477fcffa51a",
          "url": "https://github.com/equinor/ert/commit/8928cd8488885f0445e2ed3be543589cf3c777a3"
        },
        "date": 1722591238239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19243220032283423,
            "unit": "iter/sec",
            "range": "stddev: 0.01783867971514269",
            "extra": "mean: 5.196635481600003 sec\nrounds: 5"
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
          "id": "36d5af7fb6e087515f3cd414ef5885cc57b11987",
          "message": "Set experiment complete in EndEvent based on fail status",
          "timestamp": "2024-08-02T13:50:01+02:00",
          "tree_id": "565f5817a87f319b295eed536dba138d6b7d1ea8",
          "url": "https://github.com/equinor/ert/commit/36d5af7fb6e087515f3cd414ef5885cc57b11987"
        },
        "date": 1722599542266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1902682409881039,
            "unit": "iter/sec",
            "range": "stddev: 0.02394858375921118",
            "extra": "mean: 5.255737871999997 sec\nrounds: 5"
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
          "id": "7bb49a6ee21062f579bf7049d025cf2403d940ff",
          "message": "Add plot testing of STD_DEV",
          "timestamp": "2024-08-02T14:42:04+02:00",
          "tree_id": "483e5c76fa4f6d8bed727e438533e548d2447656",
          "url": "https://github.com/equinor/ert/commit/7bb49a6ee21062f579bf7049d025cf2403d940ff"
        },
        "date": 1722602673093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19338074635330188,
            "unit": "iter/sec",
            "range": "stddev: 0.020405540186098754",
            "extra": "mean: 5.171145622600011 sec\nrounds: 5"
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
          "id": "cf02f45022a6add4dda27befdc9ae97440d99ab4",
          "message": "Add MOVE_DIRECTORY forward model job (#8374)",
          "timestamp": "2024-08-02T16:27:21+03:00",
          "tree_id": "52824e26a4c5d63bfb9e1db8c58761b89ee18a9a",
          "url": "https://github.com/equinor/ert/commit/cf02f45022a6add4dda27befdc9ae97440d99ab4"
        },
        "date": 1722605389041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19031111081244934,
            "unit": "iter/sec",
            "range": "stddev: 0.022528567030774344",
            "extra": "mean: 5.254553955000006 sec\nrounds: 5"
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
          "id": "e831d2a7a8fa98c295020fdcc9945a2a722d8606",
          "message": "Avoid import outside top-level\n\nKeeping as exception at one spot due to circular dependency and\none spot due to measurable time-loss to do top-level import.",
          "timestamp": "2024-08-05T11:34:10+02:00",
          "tree_id": "2c29c0ade0080249c495a69b76e491986124a416",
          "url": "https://github.com/equinor/ert/commit/e831d2a7a8fa98c295020fdcc9945a2a722d8606"
        },
        "date": 1722850626977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18692402933879462,
            "unit": "iter/sec",
            "range": "stddev: 0.04222647651338398",
            "extra": "mean: 5.349766980399977 sec\nrounds: 5"
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
          "id": "936ef6b70c182d5bb26eed6e5f7a2d95da8465f0",
          "message": "Fix test_search_bar running onprem and azure.",
          "timestamp": "2024-08-05T11:45:56+02:00",
          "tree_id": "6f3f8c13b294a79138860e621f7f708b52fdd308",
          "url": "https://github.com/equinor/ert/commit/936ef6b70c182d5bb26eed6e5f7a2d95da8465f0"
        },
        "date": 1722851309416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18907043581038865,
            "unit": "iter/sec",
            "range": "stddev: 0.04101448846050413",
            "extra": "mean: 5.289034193600003 sec\nrounds: 5"
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
          "id": "50a9869ef4a1971f39c8ced2f3c97b97ec79e34a",
          "message": "Update kalman smoother innovation term",
          "timestamp": "2024-08-05T12:02:01+02:00",
          "tree_id": "2a87074c16a30d69ada5c2ebd9c72098fbec910c",
          "url": "https://github.com/equinor/ert/commit/50a9869ef4a1971f39c8ced2f3c97b97ec79e34a"
        },
        "date": 1722852273567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1857093318223516,
            "unit": "iter/sec",
            "range": "stddev: 0.07676021151935446",
            "extra": "mean: 5.384759022000003 sec\nrounds: 5"
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
          "id": "52af2629f312e72f3398fa8e0d6738941adb34f6",
          "message": "Solve ruff issue non-augmented assignment",
          "timestamp": "2024-08-05T12:22:58+02:00",
          "tree_id": "f40b083a94fddf8939fcb6378412391f35654689",
          "url": "https://github.com/equinor/ert/commit/52af2629f312e72f3398fa8e0d6738941adb34f6"
        },
        "date": 1722853526272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18956788447923606,
            "unit": "iter/sec",
            "range": "stddev: 0.027148344158851125",
            "extra": "mean: 5.275155138999997 sec\nrounds: 5"
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
          "id": "7c5022e2f1e1f09282cc98729f0d1938131a5704",
          "message": "Add list of children in snapshotnodes to index faster\n\nCreating a list of the \"children\" dict every time we call index is\nreally slow.",
          "timestamp": "2024-08-05T12:23:43+02:00",
          "tree_id": "5fe05b95c6ed306e94d494d30140fc85111249b0",
          "url": "https://github.com/equinor/ert/commit/7c5022e2f1e1f09282cc98729f0d1938131a5704"
        },
        "date": 1722853566187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19158389659918518,
            "unit": "iter/sec",
            "range": "stddev: 0.030612131365154366",
            "extra": "mean: 5.219645376000005 sec\nrounds: 5"
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
          "id": "110b4668a0432a7cbfdee1a868f772dc1a77a5f0",
          "message": "Remove statement with no effect",
          "timestamp": "2024-08-05T13:15:49+02:00",
          "tree_id": "ef93cd950235caaff0633571de0f30e89b76b3f7",
          "url": "https://github.com/equinor/ert/commit/110b4668a0432a7cbfdee1a868f772dc1a77a5f0"
        },
        "date": 1722856691683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1928812266380976,
            "unit": "iter/sec",
            "range": "stddev: 0.02812611183094862",
            "extra": "mean: 5.184537746000013 sec\nrounds: 5"
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
          "id": "b591dab552ef393ab8cb32eecccdb5081c492ca5",
          "message": "Fix typos in comment",
          "timestamp": "2024-08-05T13:26:46+02:00",
          "tree_id": "956fef905458e518ca14defd4889a004303393a4",
          "url": "https://github.com/equinor/ert/commit/b591dab552ef393ab8cb32eecccdb5081c492ca5"
        },
        "date": 1722857347838,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19183337390220398,
            "unit": "iter/sec",
            "range": "stddev: 0.021988225592438296",
            "extra": "mean: 5.212857281600003 sec\nrounds: 5"
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
      }
    ]
  }
}