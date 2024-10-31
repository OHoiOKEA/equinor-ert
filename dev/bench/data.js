window.BENCHMARK_DATA = {
  "lastUpdate": 1730359980568,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "sted@equinor.com",
            "name": "StephanDeHoop",
            "username": "StephanDeHoop"
          },
          "committer": {
            "email": "stephan.dehoop@tno.nl",
            "name": "Stephan de Hoop",
            "username": "StephanDeHoop"
          },
          "distinct": true,
          "id": "ca44e00531609e31384be0bf860cec5a53fe354f",
          "message": "Index ert config dictionary with Ert ConfigKeys instead of hardcoded strings",
          "timestamp": "2024-10-23T11:25:53+02:00",
          "tree_id": "f77a78827ec63b655000afbb8a36f38987974016",
          "url": "https://github.com/equinor/ert/commit/ca44e00531609e31384be0bf860cec5a53fe354f"
        },
        "date": 1729675673897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19670298595451333,
            "unit": "iter/sec",
            "range": "stddev: 0.022488232962698966",
            "extra": "mean: 5.083806914000002 sec\nrounds: 5"
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
          "id": "2c94d3998d836c4d8cdbaadd3bfcb69687824344",
          "message": "Combine dicts instead of mutating user environment variables",
          "timestamp": "2024-10-23T14:53:19+02:00",
          "tree_id": "0f3d47dc6ea9003ae2e600fee01ab1643ddaee89",
          "url": "https://github.com/equinor/ert/commit/2c94d3998d836c4d8cdbaadd3bfcb69687824344"
        },
        "date": 1729688106617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1939357410306562,
            "unit": "iter/sec",
            "range": "stddev: 0.05402769067520159",
            "extra": "mean: 5.1563471214000005 sec\nrounds: 5"
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
          "id": "a867d6299a55d8c723f197270c4ac77478ffecc6",
          "message": "Rename substitution_list",
          "timestamp": "2024-10-23T14:58:38+02:00",
          "tree_id": "83454b8da9b7fe21b93d27997c85a4c2b3e7dbcb",
          "url": "https://github.com/equinor/ert/commit/a867d6299a55d8c723f197270c4ac77478ffecc6"
        },
        "date": 1729688422807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19411612255803504,
            "unit": "iter/sec",
            "range": "stddev: 0.043336876267412866",
            "extra": "mean: 5.1515556092 sec\nrounds: 5"
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
          "id": "a6301093b809a062bb57897708e7f25890a0a2e8",
          "message": "Rename Job to ForwardModelStep\n\nPlus follow-up in test code and filenames",
          "timestamp": "2024-10-24T10:44:20+02:00",
          "tree_id": "f6f72ff4e2d0c2b699be80906ae2051c620baeab",
          "url": "https://github.com/equinor/ert/commit/a6301093b809a062bb57897708e7f25890a0a2e8"
        },
        "date": 1729759568083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19201714321435348,
            "unit": "iter/sec",
            "range": "stddev: 0.02264973751484774",
            "extra": "mean: 5.207868335400008 sec\nrounds: 5"
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
          "id": "64bbc7e9a6d8523c4f1fbf7b85cd62f4fdcdc8bc",
          "message": "Explain why we read from excel twice (#8985)",
          "timestamp": "2024-10-24T14:03:47+02:00",
          "tree_id": "d26ba923e436139efc8f37cd19d7eb182f276f06",
          "url": "https://github.com/equinor/ert/commit/64bbc7e9a6d8523c4f1fbf7b85cd62f4fdcdc8bc"
        },
        "date": 1729771536697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1931968652160416,
            "unit": "iter/sec",
            "range": "stddev: 0.017827173489572357",
            "extra": "mean: 5.176067421600004 sec\nrounds: 5"
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
          "id": "e4445c29418280245c488b76f2eb77905d423a84",
          "message": "Remove src/everest/suite.py\n\nMove all suite.py logic to runmodel",
          "timestamp": "2024-10-24T14:56:25Z",
          "tree_id": "75b46c3ac88798841e33472708127811bc86bd55",
          "url": "https://github.com/equinor/ert/commit/e4445c29418280245c488b76f2eb77905d423a84"
        },
        "date": 1729781895492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19011233607673825,
            "unit": "iter/sec",
            "range": "stddev: 0.05330463844037119",
            "extra": "mean: 5.260047930799994 sec\nrounds: 5"
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
          "id": "cbaaca9ef2d832056cf7d52837e33f5025a5cc32",
          "message": "Relax requirement for flaky cpu multiprocess test",
          "timestamp": "2024-10-25T07:38:49+02:00",
          "tree_id": "191c4f89459b87192ffeb3161235c9f42a287cd4",
          "url": "https://github.com/equinor/ert/commit/cbaaca9ef2d832056cf7d52837e33f5025a5cc32"
        },
        "date": 1729834836189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1962221030109983,
            "unit": "iter/sec",
            "range": "stddev: 0.035813684194860675",
            "extra": "mean: 5.096265836799995 sec\nrounds: 5"
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
          "id": "2cb3ea0602eb34b551f7712447aa846310ab1beb",
          "message": "Fix run_dialog second progress bar hanging\n\nThis commit fixes the issue where an immediate experiment failure would leave the second progress bar stuck in indeterminate state.\nThe commit also makes the total progress bar turn red on immediate\nfailures.",
          "timestamp": "2024-10-25T09:31:30+02:00",
          "tree_id": "95b4c80a7796a4f5ddef906fe93237951b7cec6e",
          "url": "https://github.com/equinor/ert/commit/2cb3ea0602eb34b551f7712447aa846310ab1beb"
        },
        "date": 1729841599594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1959099531919678,
            "unit": "iter/sec",
            "range": "stddev: 0.03581412812085479",
            "extra": "mean: 5.104385885999994 sec\nrounds: 5"
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
          "id": "e8bc17637567d732fd9953f1219459f5979a14cb",
          "message": "Add _verify_checksum lock in job.py\n\nThis removes the usage of `forward_model_ok_lock` when sleeping until\nchecksum_path exists.",
          "timestamp": "2024-10-25T10:38:23+02:00",
          "tree_id": "aea816ae1be430bb5b7fc0832059354c1335658e",
          "url": "https://github.com/equinor/ert/commit/e8bc17637567d732fd9953f1219459f5979a14cb"
        },
        "date": 1729845615523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19340771605481585,
            "unit": "iter/sec",
            "range": "stddev: 0.020332726045675133",
            "extra": "mean: 5.170424533200003 sec\nrounds: 5"
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
          "id": "d24eb135b2b5c0b6fcd6f76ae3e69fc863cbed70",
          "message": "Fix <= .to3 migrations causing .to7 gendata migration failure",
          "timestamp": "2024-10-25T11:31:46+02:00",
          "tree_id": "6356c2d18aea9d75b460603cdeeb0f776e59fc77",
          "url": "https://github.com/equinor/ert/commit/d24eb135b2b5c0b6fcd6f76ae3e69fc863cbed70"
        },
        "date": 1729848813877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19049615784803603,
            "unit": "iter/sec",
            "range": "stddev: 0.017640519150798045",
            "extra": "mean: 5.249449707000008 sec\nrounds: 5"
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
          "id": "f1edebb09f43790ad06b60630d22e08b0e314e6b",
          "message": "Change job to forward model step\n\nStill many like these to go. Not changing the string job in the outputted\nXML file.",
          "timestamp": "2024-10-25T11:47:56+02:00",
          "tree_id": "8e35c5b10680a91d753369c90cfda8cd60817032",
          "url": "https://github.com/equinor/ert/commit/f1edebb09f43790ad06b60630d22e08b0e314e6b"
        },
        "date": 1729849779231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19386792041583306,
            "unit": "iter/sec",
            "range": "stddev: 0.02303164856804989",
            "extra": "mean: 5.158150960999995 sec\nrounds: 5"
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
          "id": "cdee9290d42d9fb11ccc6fc4d0efdd6e6d71069f",
          "message": "Handle empty responses in MeasuredData\n\nreturn empty df for measureddata w/o responses",
          "timestamp": "2024-10-25T10:32:56Z",
          "tree_id": "c7e14aeb0418c9056c888620b1c51c8ccff6e6f3",
          "url": "https://github.com/equinor/ert/commit/cdee9290d42d9fb11ccc6fc4d0efdd6e6d71069f"
        },
        "date": 1729852486911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19067178404012128,
            "unit": "iter/sec",
            "range": "stddev: 0.02336097942772396",
            "extra": "mean: 5.244614482600002 sec\nrounds: 5"
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
          "id": "78890c9669bcfa33a35e1f8b4806cec7ce78989f",
          "message": "Move tool buttons to side pane",
          "timestamp": "2024-10-25T13:34:32+02:00",
          "tree_id": "1937cd11f6c4ea5fa03c95f1238a91a40ccfb9a2",
          "url": "https://github.com/equinor/ert/commit/78890c9669bcfa33a35e1f8b4806cec7ce78989f"
        },
        "date": 1729856185429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1935761095710312,
            "unit": "iter/sec",
            "range": "stddev: 0.03662637749407317",
            "extra": "mean: 5.165926736599994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ynk@equinor.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "committer": {
            "email": "114403625+andreas-el@users.noreply.github.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "distinct": true,
          "id": "da45b440fc623d1b08344d4025404b9cf4649a17",
          "message": "Use baserunmodel in test_egg_simulation",
          "timestamp": "2024-10-25T13:36:28+02:00",
          "tree_id": "0106657564e1f3a965ecb07c1982add52ffaa050",
          "url": "https://github.com/equinor/ert/commit/da45b440fc623d1b08344d4025404b9cf4649a17"
        },
        "date": 1729856299191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19197012101599906,
            "unit": "iter/sec",
            "range": "stddev: 0.012601071653031523",
            "extra": "mean: 5.209143978800006 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "6153918c77dafc202ee06dc480e13247e524d5fc",
          "message": "Add REALIZATION_MEMORY to init_site_config_schema",
          "timestamp": "2024-10-25T15:41:23+02:00",
          "tree_id": "90fc273273560fa96b3d993764cb49f5da95fec9",
          "url": "https://github.com/equinor/ert/commit/6153918c77dafc202ee06dc480e13247e524d5fc"
        },
        "date": 1729863793431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1941259824763436,
            "unit": "iter/sec",
            "range": "stddev: 0.009284204484327508",
            "extra": "mean: 5.151293954800002 sec\nrounds: 5"
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
            "email": "sondreso@users.noreply.github.com",
            "name": "Sondre Sortland",
            "username": "sondreso"
          },
          "distinct": true,
          "id": "9817d757bb1fca85a57bc7e41e82ee77480060c4",
          "message": "Fix missing realization type in Simulation label",
          "timestamp": "2024-10-28T08:02:38+01:00",
          "tree_id": "8d53645c2dab19b5f2aa9f45f6183231026bb856",
          "url": "https://github.com/equinor/ert/commit/9817d757bb1fca85a57bc7e41e82ee77480060c4"
        },
        "date": 1730099073237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19199768515057153,
            "unit": "iter/sec",
            "range": "stddev: 0.024688980666410815",
            "extra": "mean: 5.208396128400006 sec\nrounds: 5"
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
          "id": "9b5c9332f6b494fd499872ef73c0012aead5dbdc",
          "message": "Add some detached <-> scheduler edge cases",
          "timestamp": "2024-10-28T12:19:55+01:00",
          "tree_id": "b3e621c703106dc9ac97ff439eca4695e2e6bbd4",
          "url": "https://github.com/equinor/ert/commit/9b5c9332f6b494fd499872ef73c0012aead5dbdc"
        },
        "date": 1730114522518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1900035844054597,
            "unit": "iter/sec",
            "range": "stddev: 0.007437132816061756",
            "extra": "mean: 5.263058605599997 sec\nrounds: 5"
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
          "id": "be7944328a24ca610c257400d061f0b07ddc2e82",
          "message": "Document and rename parameter example test",
          "timestamp": "2024-10-28T12:59:11+01:00",
          "tree_id": "5339beced9e70677448956b9357fbb21f2062ed3",
          "url": "https://github.com/equinor/ert/commit/be7944328a24ca610c257400d061f0b07ddc2e82"
        },
        "date": 1730116864640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19476859788683057,
            "unit": "iter/sec",
            "range": "stddev: 0.025877925974135355",
            "extra": "mean: 5.134297883999994 sec\nrounds: 5"
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
          "id": "4e71f3909396a1dcf1461a58c7c89e66f526c005",
          "message": "Remove unused function get_response_names",
          "timestamp": "2024-10-28T14:02:15+01:00",
          "tree_id": "caa9d3ba7aa8c165d23d08937d95e9d5c68e10d0",
          "url": "https://github.com/equinor/ert/commit/4e71f3909396a1dcf1461a58c7c89e66f526c005"
        },
        "date": 1730120645184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1943314539023445,
            "unit": "iter/sec",
            "range": "stddev: 0.0294680785811469",
            "extra": "mean: 5.145847365000009 sec\nrounds: 5"
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
          "id": "5f07ccbac6954f27c8f63b51b56799512f05dbe2",
          "message": "Add reference to refcase section in summary keyword",
          "timestamp": "2024-10-28T14:15:12+01:00",
          "tree_id": "22b8d17c2de7a3154aa5321bf2bffe35cc147812",
          "url": "https://github.com/equinor/ert/commit/5f07ccbac6954f27c8f63b51b56799512f05dbe2"
        },
        "date": 1730121426770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19377256946819402,
            "unit": "iter/sec",
            "range": "stddev: 0.027442864283646434",
            "extra": "mean: 5.160689166399999 sec\nrounds: 5"
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
          "id": "35415b90a37933a4d775e58de8952efec6bbef7a",
          "message": "Fix issue where progress_widget was indeterminate on fail",
          "timestamp": "2024-10-28T15:57:04+01:00",
          "tree_id": "ed4dd0927c0f9585c149acf5083be679bf6cecae",
          "url": "https://github.com/equinor/ert/commit/35415b90a37933a4d775e58de8952efec6bbef7a"
        },
        "date": 1730127533804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19392976601901643,
            "unit": "iter/sec",
            "range": "stddev: 0.06309643027021318",
            "extra": "mean: 5.156505989400006 sec\nrounds: 5"
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
          "id": "97478fa435c02f85dad9c08d2c8093ea2095ec45",
          "message": "Rename job to step in runner\n\n(many more of these to go)",
          "timestamp": "2024-10-29T11:48:52+01:00",
          "tree_id": "21db265927b3d4ee87c56c5863da8229403fe914",
          "url": "https://github.com/equinor/ert/commit/97478fa435c02f85dad9c08d2c8093ea2095ec45"
        },
        "date": 1730199043049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19343216531706073,
            "unit": "iter/sec",
            "range": "stddev: 0.0163780745251296",
            "extra": "mean: 5.169771006600007 sec\nrounds: 5"
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
          "id": "d63756369c15bcdf9b14d1f167d7f01320d816c3",
          "message": "Fix typo in variable name in testkomodo.sh",
          "timestamp": "2024-10-29T11:55:48+01:00",
          "tree_id": "9e0005a4a649b5bb2d1b6e7484b0dc61ac0d7341",
          "url": "https://github.com/equinor/ert/commit/d63756369c15bcdf9b14d1f167d7f01320d816c3"
        },
        "date": 1730199456443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1952473238806674,
            "unit": "iter/sec",
            "range": "stddev: 0.041276735662446135",
            "extra": "mean: 5.121709123200003 sec\nrounds: 5"
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
          "id": "132ca3c741bc8f22f75d5d7cabb58a281150a3d4",
          "message": "Brush up test_ert_config\n\nTest code should not be changed by this commit, this is only cleanup\nlike:\n* String whitespace formatting for ert config files\n* Usage of pathlib\n* Expand some test names\n* Use fixture for changing to tmp_path",
          "timestamp": "2024-10-29T13:27:59+01:00",
          "tree_id": "a6d300e35fdb7981f5f05bcf1eb66eae4189c259",
          "url": "https://github.com/equinor/ert/commit/132ca3c741bc8f22f75d5d7cabb58a281150a3d4"
        },
        "date": 1730204987732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19161156412727617,
            "unit": "iter/sec",
            "range": "stddev: 0.022541461883642793",
            "extra": "mean: 5.2188916914000005 sec\nrounds: 5"
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
          "id": "d329f1c446df7bb1345cafd33ee23134e552bf19",
          "message": "Have run simulation button disabled when running",
          "timestamp": "2024-10-29T13:42:00+01:00",
          "tree_id": "59991235bbb691166758394ed26c7feb8a2fc7f5",
          "url": "https://github.com/equinor/ert/commit/d329f1c446df7bb1345cafd33ee23134e552bf19"
        },
        "date": 1730205825532,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19379035865461405,
            "unit": "iter/sec",
            "range": "stddev: 0.02587151582979508",
            "extra": "mean: 5.160215435600003 sec\nrounds: 5"
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
          "id": "e397968a49c1d71fcd6cd6d8576bfa844265b9ab",
          "message": "Make test fixture minimum_case really minimal",
          "timestamp": "2024-10-29T14:25:46+01:00",
          "tree_id": "d66b372d6ff87a46e1ea37d10b85d15cddac7ed3",
          "url": "https://github.com/equinor/ert/commit/e397968a49c1d71fcd6cd6d8576bfa844265b9ab"
        },
        "date": 1730208453777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19237271209429074,
            "unit": "iter/sec",
            "range": "stddev: 0.11566210336350013",
            "extra": "mean: 5.198242459200003 sec\nrounds: 5"
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
          "id": "0aa55b414ca0e121f357a53590c0582148131813",
          "message": "Detect dark_mode in sidepanel",
          "timestamp": "2024-10-29T15:18:14+01:00",
          "tree_id": "36342805c14fdd5d593bb272e3d7047deb616710",
          "url": "https://github.com/equinor/ert/commit/0aa55b414ca0e121f357a53590c0582148131813"
        },
        "date": 1730211610478,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19082612671494306,
            "unit": "iter/sec",
            "range": "stddev: 0.022965478674225173",
            "extra": "mean: 5.240372569599993 sec\nrounds: 5"
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
          "id": "28763a6551f19eadb9cc4675baa9d2f405f10921",
          "message": "Increment storage version\n\nPut polars migration into separate version\r\ndue to 2024.10 ERT being still xarray",
          "timestamp": "2024-10-29T15:39:24+01:00",
          "tree_id": "07a9b8692b3231f1ae013ae1797bc907651db3a6",
          "url": "https://github.com/equinor/ert/commit/28763a6551f19eadb9cc4675baa9d2f405f10921"
        },
        "date": 1730212875866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18802466468712978,
            "unit": "iter/sec",
            "range": "stddev: 0.0342248591953596",
            "extra": "mean: 5.318451181200004 sec\nrounds: 5"
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
          "id": "f9347350ae9c409d19872101e1a6479a20ed9eea",
          "message": "Show obs counts correctly summary panel",
          "timestamp": "2024-10-30T13:20:14+01:00",
          "tree_id": "b510a8ab6abf4c337865c195d3e43363bf32d9ca",
          "url": "https://github.com/equinor/ert/commit/f9347350ae9c409d19872101e1a6479a20ed9eea"
        },
        "date": 1730290928464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1938469715755869,
            "unit": "iter/sec",
            "range": "stddev: 0.02412473537954339",
            "extra": "mean: 5.158708396999998 sec\nrounds: 5"
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
            "email": "ejah@equinor.com",
            "name": "Eivind Jahren",
            "username": "eivindjahren"
          },
          "distinct": true,
          "id": "98576cc8ad12e751a19340e8fa350ef08ed3ee59",
          "message": "Increase sleep in memory profile test from 0.1 -> 0.15",
          "timestamp": "2024-10-31T08:31:09+01:00",
          "tree_id": "4c6ccb8737b71f6d7b3377f7515303b6d5b27f26",
          "url": "https://github.com/equinor/ert/commit/98576cc8ad12e751a19340e8fa350ef08ed3ee59"
        },
        "date": 1730359979652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19419065877406683,
            "unit": "iter/sec",
            "range": "stddev: 0.041257105184121186",
            "extra": "mean: 5.149578287200006 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}