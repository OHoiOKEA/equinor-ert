window.BENCHMARK_DATA = {
  "lastUpdate": 1718110826109,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fc50c7d1ff401e684a04bb8b8b6cd1f62d08a60",
          "message": "Get lsf jobid at the right time (#8068)\n\nGet lsf jobid directly after driver.submit",
          "timestamp": "2024-06-05T09:26:02+02:00",
          "tree_id": "05be2767bb7f0852e7cf1fb00034b4d99f0edeb4",
          "url": "https://github.com/equinor/ert/commit/7fc50c7d1ff401e684a04bb8b8b6cd1f62d08a60"
        },
        "date": 1717572569621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16609831362744773,
            "unit": "iter/sec",
            "range": "stddev: 0.027036358929211527",
            "extra": "mean: 6.020530721599994 sec\nrounds: 5"
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
          "id": "3c3796ef0197dce4e50866dd0fb71bc73dbaf5a0",
          "message": "Avoid creating two random seeds",
          "timestamp": "2024-06-05T11:30:50+02:00",
          "tree_id": "055d2d19aadf8be7b948d4a24f51a41e44d96b4f",
          "url": "https://github.com/equinor/ert/commit/3c3796ef0197dce4e50866dd0fb71bc73dbaf5a0"
        },
        "date": 1717580054451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16614617154440847,
            "unit": "iter/sec",
            "range": "stddev: 0.035595701876233225",
            "extra": "mean: 6.0187965254000115 sec\nrounds: 5"
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
          "id": "836cc1bad2866bd573c5a08b12628f35a926df2e",
          "message": "Rename methods in ObservationsAndResponses",
          "timestamp": "2024-06-05T11:38:04+02:00",
          "tree_id": "678ff9916e08838ac9f9abf3250f49629ac17ad0",
          "url": "https://github.com/equinor/ert/commit/836cc1bad2866bd573c5a08b12628f35a926df2e"
        },
        "date": 1717580477352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16919294233360033,
            "unit": "iter/sec",
            "range": "stddev: 0.01956559596996017",
            "extra": "mean: 5.910412019599994 sec\nrounds: 5"
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
          "id": "65b7afe9f27f0517ca42eef79f8bc2f189eef1a1",
          "message": "Clarify error when unified dataset not found",
          "timestamp": "2024-06-05T12:45:43+02:00",
          "tree_id": "4e7a9348158775ddb1a6e6cc3cf1e6c0ae6790b5",
          "url": "https://github.com/equinor/ert/commit/65b7afe9f27f0517ca42eef79f8bc2f189eef1a1"
        },
        "date": 1717584526937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16928267716145518,
            "unit": "iter/sec",
            "range": "stddev: 0.09825622361013447",
            "extra": "mean: 5.907278977200008 sec\nrounds: 5"
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
          "id": "99a29f629939f41c77250fb086a151f8431ee0e8",
          "message": "Remove unneeded lsf_server checks in queue_config",
          "timestamp": "2024-06-05T13:30:10+02:00",
          "tree_id": "b886c93c649e88e127eddc5da2bcfa809958dee3",
          "url": "https://github.com/equinor/ert/commit/99a29f629939f41c77250fb086a151f8431ee0e8"
        },
        "date": 1717587205085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1651611889075584,
            "unit": "iter/sec",
            "range": "stddev: 0.02873800624412254",
            "extra": "mean: 6.054691217799996 sec\nrounds: 5"
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
          "id": "314d52cb24ba54b261c5a714c665982616011b8a",
          "message": "Don't cast array to np.array",
          "timestamp": "2024-06-05T15:26:38+02:00",
          "tree_id": "a2d5d5f091926c4aa05ff6c54d4b6ee64e7eaf1b",
          "url": "https://github.com/equinor/ert/commit/314d52cb24ba54b261c5a714c665982616011b8a"
        },
        "date": 1717594191592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16536011539663317,
            "unit": "iter/sec",
            "range": "stddev: 0.06745773063322387",
            "extra": "mean: 6.047407487600003 sec\nrounds: 5"
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
          "id": "56dc74a9f72e3a806000eee55e5471f647219d00",
          "message": "Add some type hints to gui",
          "timestamp": "2024-06-06T12:58:57+02:00",
          "tree_id": "c5ac842be1b05995c2a79735fa5cd796e936a345",
          "url": "https://github.com/equinor/ert/commit/56dc74a9f72e3a806000eee55e5471f647219d00"
        },
        "date": 1717671734261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1629714279548566,
            "unit": "iter/sec",
            "range": "stddev: 0.03514636159208648",
            "extra": "mean: 6.136044903999993 sec\nrounds: 5"
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
          "id": "dc7d4e83ed3690f2591abf30397600e5fc5b418b",
          "message": "Fix flaky integration test `test_generic_driver.py::test_kill_actually_kills`",
          "timestamp": "2024-06-06T13:29:33+02:00",
          "tree_id": "66efe1afefb4087bde8ef0200fd223625525254e",
          "url": "https://github.com/equinor/ert/commit/dc7d4e83ed3690f2591abf30397600e5fc5b418b"
        },
        "date": 1717673579382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.15964701692058267,
            "unit": "iter/sec",
            "range": "stddev: 0.05594196994769429",
            "extra": "mean: 6.263818887999991 sec\nrounds: 5"
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
          "id": "10cfe53863fc0147b252254a4a0796cc034e2714",
          "message": "Raise a better exception when starting the api with no storage",
          "timestamp": "2024-06-06T13:34:14+02:00",
          "tree_id": "d946187a72ff720b9837a61cd21bfae010ad9df3",
          "url": "https://github.com/equinor/ert/commit/10cfe53863fc0147b252254a4a0796cc034e2714"
        },
        "date": 1717673870383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1652940340374279,
            "unit": "iter/sec",
            "range": "stddev: 0.03329853157516826",
            "extra": "mean: 6.049825124199993 sec\nrounds: 5"
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
          "id": "ba78c6b6ddfee131633c8266839a42ebe7d5aa51",
          "message": "Fix resizing of experiment manager on macos (#8039)\n\n* Fix resizing of experiment manager on macos\r\n\r\n* Fix tests",
          "timestamp": "2024-06-06T13:41:05+02:00",
          "tree_id": "29b113ab6546216c1091603d859e8b050eb1eaaa",
          "url": "https://github.com/equinor/ert/commit/ba78c6b6ddfee131633c8266839a42ebe7d5aa51"
        },
        "date": 1717674260735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16261921351953776,
            "unit": "iter/sec",
            "range": "stddev: 0.012837474914677073",
            "extra": "mean: 6.149334868599988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56de727322971844e59874a46b9dee151815d792",
          "message": "Add positive_int validation schema for NUM_CPU and MAX_SUBMIT (#8082)\n\nAdd positive_int validation schema for NUM_CPU and MAX_SUBMIT\r\n\r\n* Add test for wrong num_cpu\r\n\r\n* Add test for wrong max_submit\r\n\r\n* Raise ValueError when scheduler gets negative max_submit attribute",
          "timestamp": "2024-06-06T13:47:11+02:00",
          "tree_id": "8b7c7109bcf65da8f9b362dcc19c0e59f0806221",
          "url": "https://github.com/equinor/ert/commit/56de727322971844e59874a46b9dee151815d792"
        },
        "date": 1717674621305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16491293821901326,
            "unit": "iter/sec",
            "range": "stddev: 0.02774509748323822",
            "extra": "mean: 6.063805610399993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77ff126773da3c18b2e5e900437827d6ebf8000d",
          "message": "Make sure to log Realization status after completed run as info (#8074)\n\n* Make sure to log Realization status after completed run as info\r\n\r\n* Change logger.error to logger.info when kill does not execute\r\n\r\n* Set log_level to INFO in test",
          "timestamp": "2024-06-06T15:13:47+02:00",
          "tree_id": "607a531977830b74d1fd08172713e6460f4ac7cf",
          "url": "https://github.com/equinor/ert/commit/77ff126773da3c18b2e5e900437827d6ebf8000d"
        },
        "date": 1717679850777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1634158414125169,
            "unit": "iter/sec",
            "range": "stddev: 0.026559649687277323",
            "extra": "mean: 6.119357776799996 sec\nrounds: 5"
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
          "id": "3aa9c85dd21ccdf48920f44973312286f74cc5c4",
          "message": "Let LSFDriver pick num_cpu from the realization object",
          "timestamp": "2024-06-06T15:38:20+02:00",
          "tree_id": "07cd516d89f9c87d3a87095030ccf98b5aa3a2dd",
          "url": "https://github.com/equinor/ert/commit/3aa9c85dd21ccdf48920f44973312286f74cc5c4"
        },
        "date": 1717681322762,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16455037463390823,
            "unit": "iter/sec",
            "range": "stddev: 0.02597971444248209",
            "extra": "mean: 6.07716635239999 sec\nrounds: 5"
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
          "id": "97f6b400f2dd76f9cbc7fe518967632081b7de15",
          "message": "Fix num_cpu LSF integration test\n\nContained three bugs:\n* Missing -l\n* int vs string comparison for num_cpu\n* stdout from bhist has line breaks and whitespace indentation at random places",
          "timestamp": "2024-06-07T10:22:58+02:00",
          "tree_id": "7aceb05e5fc173a5a5f23884a4ec094f4ad993c6",
          "url": "https://github.com/equinor/ert/commit/97f6b400f2dd76f9cbc7fe518967632081b7de15"
        },
        "date": 1717748764343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1685410052875344,
            "unit": "iter/sec",
            "range": "stddev: 0.01821874274335326",
            "extra": "mean: 5.933274209999991 sec\nrounds: 5"
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
          "id": "b803b915a167762ebb67ff3e1da0298e971d2438",
          "message": "Add comment",
          "timestamp": "2024-06-07T13:40:19+02:00",
          "tree_id": "113a90b88a7410e867541fb7aa5060c82aaca36b",
          "url": "https://github.com/equinor/ert/commit/b803b915a167762ebb67ff3e1da0298e971d2438"
        },
        "date": 1717760619162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1638891480479824,
            "unit": "iter/sec",
            "range": "stddev: 0.04590180385060584",
            "extra": "mean: 6.101685266599998 sec\nrounds: 5"
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
          "id": "c2fca21a7c18f66b20f3344b99fde7de3b27355a",
          "message": "Remove current memory usage from run details view\n\nAlso adds the string 'realization' to the displayed string to remind that this\nis not about the usage of the Ert mother process.\n\nCurrent memory usage quickly becomes a very random uninteresting number when realization\neventually get staggered in time. Maximum is the only thing that really matters.",
          "timestamp": "2024-06-07T14:43:44+02:00",
          "tree_id": "992980fd6ac53b75c6c1574ade6cb93a76316350",
          "url": "https://github.com/equinor/ert/commit/c2fca21a7c18f66b20f3344b99fde7de3b27355a"
        },
        "date": 1717764428214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.162026949905247,
            "unit": "iter/sec",
            "range": "stddev: 0.04562949702955377",
            "extra": "mean: 6.171812779199991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d613041af2fcaa5224654aadd8b4477ab62a210",
          "message": "Increate grace time for kill and change logger.error to logger.debug (#8107)\n\nIncreate grace time for kill and change logger.erro to logger.debug",
          "timestamp": "2024-06-07T12:45:59Z",
          "tree_id": "2b7d35b8a6e69a175e3fe89aa4d8a7998064e45c",
          "url": "https://github.com/equinor/ert/commit/6d613041af2fcaa5224654aadd8b4477ab62a210"
        },
        "date": 1717764556813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16881181299058676,
            "unit": "iter/sec",
            "range": "stddev: 0.039683280658523876",
            "extra": "mean: 5.923756058799995 sec\nrounds: 5"
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
          "id": "c649826e5393a55243ae4326a7e43f0ee25a4ea2",
          "message": "Fix lsf integration test\n\nThere is a difference in how the mocked LSF driver in test and the real LSF system\nworks in this corner-case.",
          "timestamp": "2024-06-07T14:47:56+02:00",
          "tree_id": "e0852c16fe2155afe0c177864e923588fb7a9fc8",
          "url": "https://github.com/equinor/ert/commit/c649826e5393a55243ae4326a7e43f0ee25a4ea2"
        },
        "date": 1717764669626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16797113436508082,
            "unit": "iter/sec",
            "range": "stddev: 0.01910665573538315",
            "extra": "mean: 5.953403861800007 sec\nrounds: 5"
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
          "id": "48c3341be570009364d74d2e54062c91c03b809a",
          "message": "Make top level gui directory type checked",
          "timestamp": "2024-06-07T15:41:20+02:00",
          "tree_id": "360014d8470c88b100d5e3e8e2e42be6b3457e2c",
          "url": "https://github.com/equinor/ert/commit/48c3341be570009364d74d2e54062c91c03b809a"
        },
        "date": 1717767876116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16649391458437116,
            "unit": "iter/sec",
            "range": "stddev: 0.03860913758639573",
            "extra": "mean: 6.006225527799984 sec\nrounds: 5"
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
          "id": "f5b2a86aea12d4ed2f8f8e704d37cab22124a3cb",
          "message": "Fix an issue where the about_panel didn't work",
          "timestamp": "2024-06-07T16:09:10+02:00",
          "tree_id": "dfae071a03d62ee4ad99ab806c35b3b43ce7b5f3",
          "url": "https://github.com/equinor/ert/commit/f5b2a86aea12d4ed2f8f8e704d37cab22124a3cb"
        },
        "date": 1717769547203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1635268670178552,
            "unit": "iter/sec",
            "range": "stddev: 0.04789550688423724",
            "extra": "mean: 6.115203074800007 sec\nrounds: 5"
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
          "id": "a3906833373c158b6276b94b8facb9dfab79e233",
          "message": "Ensure WAITING state is always set\n\nUpon resubmissions, this state did not get set, as it before was only\nset in __init__, with the result that the GUI showed wrong state\n(RUNNING) before the realization was submitted.",
          "timestamp": "2024-06-10T09:08:56+02:00",
          "tree_id": "1346fa9b63a3fe74ef477f50dd74f5fd396bb694",
          "url": "https://github.com/equinor/ert/commit/a3906833373c158b6276b94b8facb9dfab79e233"
        },
        "date": 1718003529132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16513308233633198,
            "unit": "iter/sec",
            "range": "stddev: 0.020730863471242946",
            "extra": "mean: 6.055721760000017 sec\nrounds: 5"
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
          "id": "3f42de1b5a7025f8cd231f5af8a36b1450c1f37f",
          "message": "Remove un-used VariableInfo type",
          "timestamp": "2024-06-10T12:30:44+03:00",
          "tree_id": "ce4ed3042e60323c42478fe513d20730347ff80d",
          "url": "https://github.com/equinor/ert/commit/3f42de1b5a7025f8cd231f5af8a36b1450c1f37f"
        },
        "date": 1718012048420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16311490727518463,
            "unit": "iter/sec",
            "range": "stddev: 0.03252294030905305",
            "extra": "mean: 6.130647509200003 sec\nrounds: 5"
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
          "id": "9b517d271b881748ae6c49aa2050cf282cf8b8a0",
          "message": "Type check suggestor",
          "timestamp": "2024-06-10T13:08:28+02:00",
          "tree_id": "76d15bdd022f964baa3c5562429680668505c580",
          "url": "https://github.com/equinor/ert/commit/9b517d271b881748ae6c49aa2050cf282cf8b8a0"
        },
        "date": 1718017907949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1655137225493501,
            "unit": "iter/sec",
            "range": "stddev: 0.008854874156157723",
            "extra": "mean: 6.041795112800008 sec\nrounds: 5"
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
          "id": "48ab658ce25a1675e58459ad7ad14622d18ef6b9",
          "message": "Show ert version/komodo version in GUI",
          "timestamp": "2024-06-10T14:22:59+02:00",
          "tree_id": "a7a0b748e8637fe9522e77472cb4499956880753",
          "url": "https://github.com/equinor/ert/commit/48ab658ce25a1675e58459ad7ad14622d18ef6b9"
        },
        "date": 1718022442991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16781311837793675,
            "unit": "iter/sec",
            "range": "stddev: 0.029419166960692748",
            "extra": "mean: 5.959009698800014 sec\nrounds: 5"
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
          "id": "ded8131cf840a57a21eaf4650e88c4723f00c570",
          "message": "Refactor snapshot metadata to be typeddict",
          "timestamp": "2024-06-11T12:25:13+02:00",
          "tree_id": "1b808c8f939774f558100f1c3f1ec8a6990d2d95",
          "url": "https://github.com/equinor/ert/commit/ded8131cf840a57a21eaf4650e88c4723f00c570"
        },
        "date": 1718101739843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1655064887939239,
            "unit": "iter/sec",
            "range": "stddev: 0.035614870729851325",
            "extra": "mean: 6.042059180200022 sec\nrounds: 5"
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
          "id": "0092588b623376ccaf03e7713975c1b56d18332c",
          "message": "Update tooltip text for plot ensemble selector",
          "timestamp": "2024-06-11T12:33:42+02:00",
          "tree_id": "8b43f3f8b7bced6d1eeca7fc4044cdb5e5ff9118",
          "url": "https://github.com/equinor/ert/commit/0092588b623376ccaf03e7713975c1b56d18332c"
        },
        "date": 1718102213505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1622691637819986,
            "unit": "iter/sec",
            "range": "stddev: 0.030584672310551442",
            "extra": "mean: 6.162600315999998 sec\nrounds: 5"
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
          "id": "7440057aba8c767c7c50a5c88cfc9e4bbc11cdb4",
          "message": "Move report writing to client",
          "timestamp": "2024-06-11T12:53:59+02:00",
          "tree_id": "4c5d16d0a1b08440b58790e01cf03c627cf34fb4",
          "url": "https://github.com/equinor/ert/commit/7440057aba8c767c7c50a5c88cfc9e4bbc11cdb4"
        },
        "date": 1718103429608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1665506272804569,
            "unit": "iter/sec",
            "range": "stddev: 0.03106437983670446",
            "extra": "mean: 6.004180328400002 sec\nrounds: 5"
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
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "52d5088459a3b013cb97e35a562715126fd6c67d",
          "message": "Fix incorrect AlignBottom enum",
          "timestamp": "2024-06-11T13:33:13+02:00",
          "tree_id": "8014b272a9a5f67f0bf5eb71635bbc4df37cbcd2",
          "url": "https://github.com/equinor/ert/commit/52d5088459a3b013cb97e35a562715126fd6c67d"
        },
        "date": 1718105782023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16525595113127636,
            "unit": "iter/sec",
            "range": "stddev: 0.009088032621459609",
            "extra": "mean: 6.051219294399982 sec\nrounds: 5"
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
          "id": "c260c4f58c2236fc217cba496a9396728717cc75",
          "message": "Add more type checking to histogram.py",
          "timestamp": "2024-06-11T13:53:32+02:00",
          "tree_id": "45d83c2524211852cc1713112dd64ff5ee465f2e",
          "url": "https://github.com/equinor/ert/commit/c260c4f58c2236fc217cba496a9396728717cc75"
        },
        "date": 1718107002836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.165356921928968,
            "unit": "iter/sec",
            "range": "stddev: 0.029451319984811326",
            "extra": "mean: 6.047524278600008 sec\nrounds: 5"
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
          "id": "37c4d20e858a87199bef66477cbf32fbe7254185",
          "message": "Add test for workflow tool",
          "timestamp": "2024-06-11T14:57:04+02:00",
          "tree_id": "9906be396d722e4716918b9a794d27ba9b503705",
          "url": "https://github.com/equinor/ert/commit/37c4d20e858a87199bef66477cbf32fbe7254185"
        },
        "date": 1718110825198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16877843214822072,
            "unit": "iter/sec",
            "range": "stddev: 0.04352456227030669",
            "extra": "mean: 5.9249276538 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}