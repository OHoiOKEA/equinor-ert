window.BENCHMARK_DATA = {
  "lastUpdate": 1717764557921,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "670de15e880ea58f4914ba482b0cc2a8838f083f",
          "message": "Fix RealNodeData subscriptable\n\nChange typehinting to match actual usage\nAdd tests for verifying correct colors for queue and forward model status\nExtend tests to cover forward_model_steps",
          "timestamp": "2024-05-31T10:21:04+02:00",
          "tree_id": "c8582a25c5ffcdd36cd93933c42b971b947e7910",
          "url": "https://github.com/equinor/ert/commit/670de15e880ea58f4914ba482b0cc2a8838f083f"
        },
        "date": 1717143864351,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1632054469848745,
            "unit": "iter/sec",
            "range": "stddev: 0.03225941220699162",
            "extra": "mean: 6.127246476599998 sec\nrounds: 5"
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
          "id": "c72f389ff006e8765e485487ab0ad8666f964c0a",
          "message": "Catch migration exception and send as response",
          "timestamp": "2024-05-31T11:59:39+02:00",
          "tree_id": "ebc931df8e40a87ec43b558fc079a4b6323d71fd",
          "url": "https://github.com/equinor/ert/commit/c72f389ff006e8765e485487ab0ad8666f964c0a"
        },
        "date": 1717149787973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16778480203706103,
            "unit": "iter/sec",
            "range": "stddev: 0.02773399239539426",
            "extra": "mean: 5.960015376000001 sec\nrounds: 5"
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
          "id": "bb4944f87bbacc2977630031c043506d947b574f",
          "message": "Add logging of ert.shared.plugins to Azure",
          "timestamp": "2024-05-31T12:03:13+02:00",
          "tree_id": "d19a6ae26243d30351ee957671c756b1da954174",
          "url": "https://github.com/equinor/ert/commit/bb4944f87bbacc2977630031c043506d947b574f"
        },
        "date": 1717149989860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16199726910518175,
            "unit": "iter/sec",
            "range": "stddev: 0.023253078150424416",
            "extra": "mean: 6.172943565799983 sec\nrounds: 5"
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
          "id": "36c89fb536e585b5a5c7844e81d54f1bef184e44",
          "message": "Make mocked LSF and OpenPBS systems able to kill\n\nFor LSF it is necessary to manually loop over grandchildren in\nthe mocked runner to pass the added test. For OpenPBS the test\nwill pass without the loop over grandchildren, but it was added\nnonetheless.",
          "timestamp": "2024-05-31T13:32:11+02:00",
          "tree_id": "c90383d267fd193226fb5681b2ff9420d820fcd8",
          "url": "https://github.com/equinor/ert/commit/36c89fb536e585b5a5c7844e81d54f1bef184e44"
        },
        "date": 1717155330717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16271712778230052,
            "unit": "iter/sec",
            "range": "stddev: 0.026938664017357155",
            "extra": "mean: 6.145634535399995 sec\nrounds: 5"
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
          "id": "ceda74fdd18d8df31685288578cfa2b034d839b2",
          "message": "Add forward models as plugins\n\nAdd possiblity to specify forward models as plugins\r\n\r\nCo-authored-by: Yngve S. Kristiansen <yngve.s.kristiansen@webstep.no>\r\nCo-authored-by: Eivind Jahren <ejah@equinor.com>",
          "timestamp": "2024-06-03T07:48:45+02:00",
          "tree_id": "da7ce786ee3a02cbbb0cb012c84a009054caf491",
          "url": "https://github.com/equinor/ert/commit/ceda74fdd18d8df31685288578cfa2b034d839b2"
        },
        "date": 1717393924560,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1659671984179004,
            "unit": "iter/sec",
            "range": "stddev: 0.017395487711158612",
            "extra": "mean: 6.025286981600004 sec\nrounds: 5"
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
          "id": "dff003109ce385600890afa785806c50a1ab071b",
          "message": "Add reporting to auto_scale",
          "timestamp": "2024-06-03T10:09:33+02:00",
          "tree_id": "41f7096544b3f828b6db2cfd1e6b9177c0eddcad",
          "url": "https://github.com/equinor/ert/commit/dff003109ce385600890afa785806c50a1ab071b"
        },
        "date": 1717402366907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1631670470332838,
            "unit": "iter/sec",
            "range": "stddev: 0.08137059243752044",
            "extra": "mean: 6.128688470999992 sec\nrounds: 5"
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
          "id": "0e0c9ad95b2952371ad42e0d18a12b19ceae4265",
          "message": "Initialize ensemble config lastly",
          "timestamp": "2024-06-03T10:14:17+02:00",
          "tree_id": "f0f9308c175b6d34d9d21dc4e4fb08001507b84c",
          "url": "https://github.com/equinor/ert/commit/0e0c9ad95b2952371ad42e0d18a12b19ceae4265"
        },
        "date": 1717402667571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16647370799612,
            "unit": "iter/sec",
            "range": "stddev: 0.029063921707327006",
            "extra": "mean: 6.006954563799991 sec\nrounds: 5"
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
          "id": "1d111e99b757541785f0192c1f4dabd77b4c3d74",
          "message": "Fix copyablelabel not crashing if no clipboard\n\nSome nonstandard graphical systems and many non-graphical\nsystems may not have a clipboard causing QApplication.clipboard()\nto return None",
          "timestamp": "2024-06-03T12:12:41+02:00",
          "tree_id": "43f0565caca79c65d87628d11a04b0760ae1983c",
          "url": "https://github.com/equinor/ert/commit/1d111e99b757541785f0192c1f4dabd77b4c3d74"
        },
        "date": 1717409755805,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16026878447056514,
            "unit": "iter/sec",
            "range": "stddev: 0.022381141745645934",
            "extra": "mean: 6.239518214999999 sec\nrounds: 5"
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
          "id": "5eee4ce53dbfbb2bd0e3f949a0506c5c37199a69",
          "message": "Use plugin fm steps in LibresFacade",
          "timestamp": "2024-06-04T10:13:40+02:00",
          "tree_id": "46a6a7dcd4230bf28e4ad17ee54cc7f73414020a",
          "url": "https://github.com/equinor/ert/commit/5eee4ce53dbfbb2bd0e3f949a0506c5c37199a69"
        },
        "date": 1717489015049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16791872332532481,
            "unit": "iter/sec",
            "range": "stddev: 0.04721040293112835",
            "extra": "mean: 5.955262046999996 sec\nrounds: 5"
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
          "id": "775ded5ef54ba04f11a2ae84a8237219132e4f1d",
          "message": "Delete start iteration\n\nDelete unused start_iteration",
          "timestamp": "2024-06-04T13:46:04+02:00",
          "tree_id": "b4b8d38f0fd546014343678c7a73cd885a203ea5",
          "url": "https://github.com/equinor/ert/commit/775ded5ef54ba04f11a2ae84a8237219132e4f1d"
        },
        "date": 1717501767044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16300585912022192,
            "unit": "iter/sec",
            "range": "stddev: 0.030105557950392624",
            "extra": "mean: 6.134748808400002 sec\nrounds: 5"
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
          "id": "71fc882704af6157a315585812dc671c6cffb9fc",
          "message": "Rename to get_realization_with_responses and return array\n\nUpdate docstrings",
          "timestamp": "2024-06-04T13:46:33+02:00",
          "tree_id": "3c4057b854ea26985631c5fa0ceaf4ac53d0842a",
          "url": "https://github.com/equinor/ert/commit/71fc882704af6157a315585812dc671c6cffb9fc"
        },
        "date": 1717501785768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16691076368285265,
            "unit": "iter/sec",
            "range": "stddev: 0.04316780123173143",
            "extra": "mean: 5.9912253586000075 sec\nrounds: 5"
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
          "id": "749e87eac39d3bb38cbdaee61291f7018cddcaa6",
          "message": "Add experiment name to legends",
          "timestamp": "2024-06-04T14:54:55+02:00",
          "tree_id": "6cdeb2ea1f004ddec0d9d7b36be805520b90a5a2",
          "url": "https://github.com/equinor/ert/commit/749e87eac39d3bb38cbdaee61291f7018cddcaa6"
        },
        "date": 1717505884873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16482359054227488,
            "unit": "iter/sec",
            "range": "stddev: 0.021771811173644167",
            "extra": "mean: 6.0670926819999975 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jon.holba@gmail.com",
            "name": "Jon Holba",
            "username": "JHolba"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e4c1448fca5a150811d460af11f0ccafd774dab",
          "message": "New LSF driver should allocate correct number of cpus based on config  (#8061)\n\n* Specify number of cpus to allocate on LSF in new driver\r\n\r\n* Add integration test for num_cpu on lsf\r\n\r\n* Add -n into mocked bsub\r\n\r\n---------\r\n\r\nCo-authored-by: xjules <jparu@equinor.com>",
          "timestamp": "2024-06-04T15:17:23+02:00",
          "tree_id": "cfc143ec621ff5f1a27f0ca955c5d58e47c2cc34",
          "url": "https://github.com/equinor/ert/commit/9e4c1448fca5a150811d460af11f0ccafd774dab"
        },
        "date": 1717507255276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16499252589467475,
            "unit": "iter/sec",
            "range": "stddev: 0.013104353271791942",
            "extra": "mean: 6.060880603999988 sec\nrounds: 5"
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
      }
    ]
  }
}