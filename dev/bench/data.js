window.BENCHMARK_DATA = {
  "lastUpdate": 1722853566669,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "147c2e67a2db5b426eaf73a414e05c66bf5195f4",
          "message": "Adjust logger config for new plugin_manager location",
          "timestamp": "2024-07-24T10:47:32+02:00",
          "tree_id": "7bf19a5c5c9b06d1cfabd61db36c806d792984f8",
          "url": "https://github.com/equinor/ert/commit/147c2e67a2db5b426eaf73a414e05c66bf5195f4"
        },
        "date": 1721811051470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1869186169111875,
            "unit": "iter/sec",
            "range": "stddev: 0.008752148339800299",
            "extra": "mean: 5.349921888599999 sec\nrounds: 5"
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
          "id": "6b7b21839ac89814da99e8e651b0271a3383e162",
          "message": "Remove job_queue",
          "timestamp": "2024-07-24T12:40:30+02:00",
          "tree_id": "da36cc103106f89a362a7e48a46d3ba2f2e31918",
          "url": "https://github.com/equinor/ert/commit/6b7b21839ac89814da99e8e651b0271a3383e162"
        },
        "date": 1721817785021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19267109979924027,
            "unit": "iter/sec",
            "range": "stddev: 0.02648470784868745",
            "extra": "mean: 5.190191995800001 sec\nrounds: 5"
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
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "distinct": true,
          "id": "10b9104bc9b8ba8c202ade0b621ddd54604af43a",
          "message": "Due to compatibility in testing we re-export ErtPluginManager",
          "timestamp": "2024-07-24T15:49:39+02:00",
          "tree_id": "c9866c2c70fd579c16f950afbd7e08911ef3022b",
          "url": "https://github.com/equinor/ert/commit/10b9104bc9b8ba8c202ade0b621ddd54604af43a"
        },
        "date": 1721829140750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1945683867865208,
            "unit": "iter/sec",
            "range": "stddev: 0.034356584787478016",
            "extra": "mean: 5.139581082599989 sec\nrounds: 5"
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
          "id": "a51790cf893de69bac5440a69791248981f60951",
          "message": "Remove unneeded build dependencies and run_ert_ctest.sh",
          "timestamp": "2024-07-24T16:44:17+02:00",
          "tree_id": "93ddfcf58375773be0ebf764e2c155447c93b06b",
          "url": "https://github.com/equinor/ert/commit/a51790cf893de69bac5440a69791248981f60951"
        },
        "date": 1721832417563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18902366786897892,
            "unit": "iter/sec",
            "range": "stddev: 0.0745125762121717",
            "extra": "mean: 5.290342798199992 sec\nrounds: 5"
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
          "id": "1fecbdbecd957afc81a0ef94964556a40155563d",
          "message": "Simplify openpbs job states",
          "timestamp": "2024-07-25T12:33:09+02:00",
          "tree_id": "0568259ed0ac74840c28db65214e458b4a4693f0",
          "url": "https://github.com/equinor/ert/commit/1fecbdbecd957afc81a0ef94964556a40155563d"
        },
        "date": 1721903732794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1901980495220069,
            "unit": "iter/sec",
            "range": "stddev: 0.09153870938033008",
            "extra": "mean: 5.257677471000011 sec\nrounds: 5"
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
          "id": "509c224a99b0cedb785fac6eaed9b05e020ad71d",
          "message": "Implement async version of EnsembleEvaluator\n\nThere are two functions in base_run_model (run_ensemble_evaluator_async and run_ensemble_evaluator). run_ensemble_evaluator is a sync vrapper for EnsembleEvaluatorAsync.\nAsync ensemble evaluator follows a similar pattern to Scheduler; ie. uses a set of background tasks responsible for running the ee server, processing events, sending snapshots updates, etc.\nAsync evaluator does not use BatchingDispatcher, although the events are still processed in batches.",
          "timestamp": "2024-07-25T15:57:36+02:00",
          "tree_id": "f91b3f034ea4e939525473fc22436b029d5803b2",
          "url": "https://github.com/equinor/ert/commit/509c224a99b0cedb785fac6eaed9b05e020ad71d"
        },
        "date": 1721916003967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19240069186091285,
            "unit": "iter/sec",
            "range": "stddev: 0.016818304528414547",
            "extra": "mean: 5.197486507600002 sec\nrounds: 5"
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
          "id": "08f449e102128a7248a85a033713e77253d4c543",
          "message": "Fix invalid grid file raising uncaught exception",
          "timestamp": "2024-07-26T13:10:34+02:00",
          "tree_id": "407d0059eb657c32d1f841282b60091828450888",
          "url": "https://github.com/equinor/ert/commit/08f449e102128a7248a85a033713e77253d4c543"
        },
        "date": 1721992390949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19602987155232504,
            "unit": "iter/sec",
            "range": "stddev: 0.018912078871834142",
            "extra": "mean: 5.101263353800016 sec\nrounds: 5"
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
          "id": "708f38a0677e80fe0b70fe4a42207032f5047a83",
          "message": "Fix GUILogHandler lifetime\n\nseparates out the logging.Handler part as the logging module\nkeeps around a weak reference until application exit.",
          "timestamp": "2024-07-26T13:31:11+02:00",
          "tree_id": "0611af0837e530fe261a38dbf1b848e208c780a7",
          "url": "https://github.com/equinor/ert/commit/708f38a0677e80fe0b70fe4a42207032f5047a83"
        },
        "date": 1721993621766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1925498117504744,
            "unit": "iter/sec",
            "range": "stddev: 0.022145480219506828",
            "extra": "mean: 5.193461322600001 sec\nrounds: 5"
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
          "id": "7d073f230d0794f24efae3b2d12f86e997fb5d11",
          "message": "Test that no ee config will raise when running evaluator",
          "timestamp": "2024-07-29T13:16:16+02:00",
          "tree_id": "04ef279318c9ec94eb6dec04cfa8a94c4318238f",
          "url": "https://github.com/equinor/ert/commit/7d073f230d0794f24efae3b2d12f86e997fb5d11"
        },
        "date": 1722251923702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19372647598411571,
            "unit": "iter/sec",
            "range": "stddev: 0.02589785799995746",
            "extra": "mean: 5.161917052999991 sec\nrounds: 5"
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
          "id": "257ecf0de363e1900ebe479fe7085d14b542cdbe",
          "message": "Rename EnsembleEvaluator._stop -> stop and remove async\n\nThis renames EnsembleEvaluator._stop to EnsembleEvaluator.stop. Function stop() is part of the pubic API.\nAdditionally, it removes async keyword as the function does not need to be async now. The same goes for the _signal_cancel().",
          "timestamp": "2024-07-29T15:20:33+02:00",
          "tree_id": "2931dbea878ef33d1cebc1b96cd9d817f6d8e045",
          "url": "https://github.com/equinor/ert/commit/257ecf0de363e1900ebe479fe7085d14b542cdbe"
        },
        "date": 1722259390120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1936170339262147,
            "unit": "iter/sec",
            "range": "stddev: 0.04078945913370897",
            "extra": "mean: 5.164834827399995 sec\nrounds: 5"
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
      }
    ]
  }
}