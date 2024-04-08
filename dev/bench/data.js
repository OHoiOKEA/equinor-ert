window.BENCHMARK_DATA = {
  "lastUpdate": 1712565250810,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "42c2fd2557079392817c10e61f2f4c8651ee7bfd",
          "message": "Increase sleep time flaky integration test\n\nThis commit fixes flakiness in integration test scheduler/test_generic_driver.py::test_kill by increasing sleep time for job to 60 seconds. It might have been flaky in the past due to job finishing before it could be killed.",
          "timestamp": "2024-03-25T14:47:46+01:00",
          "tree_id": "5f1e7875d5eda40d9c2c91ba0f59b08f600fb689",
          "url": "https://github.com/equinor/ert/commit/42c2fd2557079392817c10e61f2f4c8651ee7bfd"
        },
        "date": 1711374656710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18301420180832076,
            "unit": "iter/sec",
            "range": "stddev: 0.15123690416542848",
            "extra": "mean: 5.464056833399991 sec\nrounds: 5"
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
          "id": "ef492f029be11b71e114b4e9d1acfbc565594aac",
          "message": "Skip integration test analysis/test_es_update.py::test_update_multiple_param\n\nThis commit marks the test with `pytest.mark.skip(...)` due to it being very flaky with scheduler, and blocking PRs.",
          "timestamp": "2024-03-25T15:13:24+01:00",
          "tree_id": "2177479369cdc3f69f6bab14c9bec6004fc81597",
          "url": "https://github.com/equinor/ert/commit/ef492f029be11b71e114b4e9d1acfbc565594aac"
        },
        "date": 1711376189453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18930793498487508,
            "unit": "iter/sec",
            "range": "stddev: 0.025809488308540313",
            "extra": "mean: 5.28239875459999 sec\nrounds: 5"
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
          "id": "f4433dcc3ab0acf699506068cec31dc9ed3eb9d3",
          "message": "Fix ruff preview rule PLC1901\n\nThis commit makes the code base ruff PLC1901 compliant. This is related\nto empty string comparison.",
          "timestamp": "2024-04-02T09:31:41+02:00",
          "tree_id": "9991aaa8999a0b4303b93ed50f97ebc6d24de5bd",
          "url": "https://github.com/equinor/ert/commit/f4433dcc3ab0acf699506068cec31dc9ed3eb9d3"
        },
        "date": 1712043297303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19075189771008558,
            "unit": "iter/sec",
            "range": "stddev: 0.02935200814712157",
            "extra": "mean: 5.242411802999993 sec\nrounds: 5"
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
          "id": "5689a6af4cb3725934c77906cc78c5d4d843eb34",
          "message": "Combine annotate_cpp with build_and_test",
          "timestamp": "2024-04-02T10:39:02+02:00",
          "tree_id": "cb9efb4b83d3170d372dfbb925f0435d4c222bde",
          "url": "https://github.com/equinor/ert/commit/5689a6af4cb3725934c77906cc78c5d4d843eb34"
        },
        "date": 1712047336513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18649373612563688,
            "unit": "iter/sec",
            "range": "stddev: 0.04015112748754158",
            "extra": "mean: 5.362110389199995 sec\nrounds: 5"
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
          "id": "2bb442895759753d08929def9ace9cfa62b686f2",
          "message": "Remove poly integration test on PBS\n\nWhen tested through Komodo, this will not work as it requires the environment and the\nrunpath to be on a shared disk, which the komodo setup currently does not facilitate.\n\nKomodo testing will still effectively run this integration test through bigpoly.",
          "timestamp": "2024-04-02T10:46:25+02:00",
          "tree_id": "5dd505842e929b14420d9b3a1f85690b600be4ae",
          "url": "https://github.com/equinor/ert/commit/2bb442895759753d08929def9ace9cfa62b686f2"
        },
        "date": 1712047778707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18551184595214265,
            "unit": "iter/sec",
            "range": "stddev: 0.027435697886691434",
            "extra": "mean: 5.39049134500001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107626001+jonathan-eq@users.noreply.github.com",
            "name": "Jonathan Karlsen",
            "username": "jonathan-eq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98625d61bcd4b212925c61f706eb9c2cddc23e62",
          "message": "Fix ruff preview option PLC0415 (#7519)\n\n* Fix ruff preview option PLC0415\r\n\r\nThis commit makes the code base ruff PLC0415 compliant. This is related to having imports only at the module's top level scope.\r\n\r\n* code review suggestions",
          "timestamp": "2024-04-02T10:21:50Z",
          "tree_id": "3bc349645aae5e151f7d4f6c630c9a26db7a6a79",
          "url": "https://github.com/equinor/ert/commit/98625d61bcd4b212925c61f706eb9c2cddc23e62"
        },
        "date": 1712053493323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1861976783279171,
            "unit": "iter/sec",
            "range": "stddev: 0.04069934064372038",
            "extra": "mean: 5.370636245199989 sec\nrounds: 5"
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
          "id": "5bb33aa3df473dd25659fedf9b6e14c1b622dbed",
          "message": "Implement EXCLUDE_HOST for scheduler lsf driver\n\nThis commit implements the EXCLUDE_HOST keyword for the scheduler LSF driver, the same way it was implemented in C.",
          "timestamp": "2024-04-02T13:40:12+02:00",
          "tree_id": "01f4932ed78b935ebd7a8d83800acdfb73f75d66",
          "url": "https://github.com/equinor/ert/commit/5bb33aa3df473dd25659fedf9b6e14c1b622dbed"
        },
        "date": 1712058190702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18922692977001848,
            "unit": "iter/sec",
            "range": "stddev: 0.032838798768478866",
            "extra": "mean: 5.284660070399991 sec\nrounds: 5"
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
          "id": "76ee3fe27de07086c96007fb1c8089408af8ef39",
          "message": "Remove unwanted warning when user is setting ECLBASE and no summary data",
          "timestamp": "2024-04-02T15:24:37+03:00",
          "tree_id": "d8d3dbce5a58058fe099edc760744b1ca4479f16",
          "url": "https://github.com/equinor/ert/commit/76ee3fe27de07086c96007fb1c8089408af8ef39"
        },
        "date": 1712060873595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18731588039583638,
            "unit": "iter/sec",
            "range": "stddev: 0.04087032699788489",
            "extra": "mean: 5.338575661000005 sec\nrounds: 5"
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
          "id": "28b073d2f043d5dbf067f6b983187da6a7c3d875",
          "message": "Make StorageService constructor match base",
          "timestamp": "2024-04-02T14:58:13+02:00",
          "tree_id": "7af9d991089261e40cc7e696d242d0ad78627de6",
          "url": "https://github.com/equinor/ert/commit/28b073d2f043d5dbf067f6b983187da6a7c3d875"
        },
        "date": 1712062875753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1871866514314095,
            "unit": "iter/sec",
            "range": "stddev: 0.025413748866344257",
            "extra": "mean: 5.342261279599995 sec\nrounds: 5"
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
          "id": "3bc1f3050dc61430a8a1fbb7826e6eae39c5981a",
          "message": "Have lsf driver bkill with SIGKILL after SIGTERM\n\nThis commits makes the LSF driver spawn a non-blocking separate process running `bkill -s SIGKILL` to make sure the job is actually torn down.",
          "timestamp": "2024-04-02T15:28:14+02:00",
          "tree_id": "597d9323b343f516cbe17276c473a1f1068c9419",
          "url": "https://github.com/equinor/ert/commit/3bc1f3050dc61430a8a1fbb7826e6eae39c5981a"
        },
        "date": 1712064677552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18809076322081458,
            "unit": "iter/sec",
            "range": "stddev: 0.032444427441272475",
            "extra": "mean: 5.316582180199998 sec\nrounds: 5"
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
          "id": "15ff24633c25cc5b93ec6b9343c09651f468e001",
          "message": "Fix ruff preview rule PLR6301\n\nThis commit makes the code base ruff PLR6301 compliant. This is related\nto unused `self` parameter in method definitions.",
          "timestamp": "2024-04-02T15:27:53+02:00",
          "tree_id": "ca3ef7d180a94c2bf408ec40a46a2e704b6dc48b",
          "url": "https://github.com/equinor/ert/commit/15ff24633c25cc5b93ec6b9343c09651f468e001"
        },
        "date": 1712064680722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16443376512840346,
            "unit": "iter/sec",
            "range": "stddev: 0.10796479106615806",
            "extra": "mean: 6.081476023000005 sec\nrounds: 5"
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
          "id": "1c1badd7671e068d83d17885c151455065ec85d2",
          "message": "Make fallback mechanism for failing bjobs (bhist)\n\nWhenever jobs for which we need running states for are\nmissing in the output from bjobs, it can mean that the information\nhas fallen out of the bjobs cache on the LSF server. A scenario where\nthis can occur is that if Ert for some reason is hanging for a long time\nwithout polling, or maybe for other reasons on the LSF side.\n\nAny time bjobs misses information, one call to `bhist` is done, and its\noutput is stored in the object. The first time bhist is called, the\ndriver is not able to determine any states, but given that the next\nbjobs call also will miss a certain job id, the subsequent bhist call\nwill be able to deduce the running state by comparing the timing values\nin the first and the second bhist call.\n\nThis method is not able to catch job that has failed, it will be marked\nas done.",
          "timestamp": "2024-04-02T15:58:32+02:00",
          "tree_id": "c96089349b7404e7ce35f679f3bc25c678d3c7d2",
          "url": "https://github.com/equinor/ert/commit/1c1badd7671e068d83d17885c151455065ec85d2"
        },
        "date": 1712066505268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18356839558138904,
            "unit": "iter/sec",
            "range": "stddev: 0.18720173949273017",
            "extra": "mean: 5.447560822399998 sec\nrounds: 5"
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
          "id": "9deeb1d88c90a0fd34819719ddcdaa74513f68a9",
          "message": "Fix flaky parameter test",
          "timestamp": "2024-04-03T08:31:25+02:00",
          "tree_id": "0f0411909ef6432d64bda9bee1517baacfc9d52f",
          "url": "https://github.com/equinor/ert/commit/9deeb1d88c90a0fd34819719ddcdaa74513f68a9"
        },
        "date": 1712126073151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1832735585998826,
            "unit": "iter/sec",
            "range": "stddev: 0.04987775013257238",
            "extra": "mean: 5.4563244564000115 sec\nrounds: 5"
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
          "id": "b71fdde61f2c3ad7b36bb6a7a5cae8708ba7beb2",
          "message": "Fix ErtPlugin interface staticmethods\n\nCommit `15ff246` marked interface methods with `@staticmethod` without considering other scripts inheriting the interface.",
          "timestamp": "2024-04-03T12:11:13+02:00",
          "tree_id": "6d12589554d8ab602fa4ae5a0d99e1c2defacc65",
          "url": "https://github.com/equinor/ert/commit/b71fdde61f2c3ad7b36bb6a7a5cae8708ba7beb2"
        },
        "date": 1712139318850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18967211409707477,
            "unit": "iter/sec",
            "range": "stddev: 0.03207619691277985",
            "extra": "mean: 5.27225630800001 sec\nrounds: 5"
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
          "id": "9d73d9621d00ff81e96a5e4f8d969303779529b3",
          "message": "Ignore failed test-summary\n\ntest-summary will fail if junit.xml does not exist, which\nhappens when the tests time out. Since this is only\nfor pretty output, we ignore such errors.",
          "timestamp": "2024-04-03T14:26:02+02:00",
          "tree_id": "93cdad502f4bf337973f642381336d4ac21cad3b",
          "url": "https://github.com/equinor/ert/commit/9d73d9621d00ff81e96a5e4f8d969303779529b3"
        },
        "date": 1712147354522,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19036686677324172,
            "unit": "iter/sec",
            "range": "stddev: 0.03670695651391334",
            "extra": "mean: 5.253014965 sec\nrounds: 5"
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
          "id": "ade18beaece581e82cdc60c323a35bc3d7a0ec85",
          "message": "Revert \"Implement EXCLUDE_HOST for scheduler lsf driver\"\n\nThis reverts commit 5bb33aa3df473dd25659fedf9b6e14c1b622dbed.",
          "timestamp": "2024-04-03T15:27:15+02:00",
          "tree_id": "dd0d85e92e0ed24578a62a7be87987cbe55f48a1",
          "url": "https://github.com/equinor/ert/commit/ade18beaece581e82cdc60c323a35bc3d7a0ec85"
        },
        "date": 1712151066026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1861336834583167,
            "unit": "iter/sec",
            "range": "stddev: 0.026827057126192055",
            "extra": "mean: 5.372482730799999 sec\nrounds: 5"
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
          "id": "2b1bf7313767ede60c37d17ca31898e8352c6b2a",
          "message": "Fix docs about auto scale",
          "timestamp": "2024-04-03T15:49:16+02:00",
          "tree_id": "8584e8b3e0b9cd00a67ee04c9ef7e32e17f0ff7b",
          "url": "https://github.com/equinor/ert/commit/2b1bf7313767ede60c37d17ca31898e8352c6b2a"
        },
        "date": 1712152351126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1855107565629529,
            "unit": "iter/sec",
            "range": "stddev: 0.02103395428384992",
            "extra": "mean: 5.390523000000007 sec\nrounds: 5"
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
          "id": "3be64fd3bc375df9686ef5676d2fa919226ebb01",
          "message": "Add logging to LocalDriver\n\nAligning with logging behaviour in LsfDriver",
          "timestamp": "2024-04-04T09:27:50+02:00",
          "tree_id": "16f78ec87260d05677ffaa6f6f3df6801f44b437",
          "url": "https://github.com/equinor/ert/commit/3be64fd3bc375df9686ef5676d2fa919226ebb01"
        },
        "date": 1712215850305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18807526509631345,
            "unit": "iter/sec",
            "range": "stddev: 0.015880883048871405",
            "extra": "mean: 5.317020286999991 sec\nrounds: 5"
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
          "id": "66e7fe541923f354544e0dc3388c6388171967a4",
          "message": "Avoid calling kill() on each submit\n\nThis cleanup seems redundant, and will give wrong logs.\n\nAlso removes a test that relies on kill() being called upon\neach submit, which we should not rely on.",
          "timestamp": "2024-04-04T11:54:43+02:00",
          "tree_id": "de275035231cd2872ddf716c182aeaa7e0788181",
          "url": "https://github.com/equinor/ert/commit/66e7fe541923f354544e0dc3388c6388171967a4"
        },
        "date": 1712224667626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18718347866193996,
            "unit": "iter/sec",
            "range": "stddev: 0.033846476430576",
            "extra": "mean: 5.342351831199994 sec\nrounds: 5"
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
          "id": "cdc90ba3a1c267254d7bccdc957ffe290c2d379a",
          "message": "Fix integration test lsf driver invalid resource requirement\n\nThis commit fixes the invald resource requirement in /tests/integration_tests/scheduler/test_lsf_driver.py::test_submit_with_resource_requirement",
          "timestamp": "2024-04-04T12:03:11+02:00",
          "tree_id": "69e0c40edf5f23da05273334002fa2cd213f9b49",
          "url": "https://github.com/equinor/ert/commit/cdc90ba3a1c267254d7bccdc957ffe290c2d379a"
        },
        "date": 1712225176746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18813531313711152,
            "unit": "iter/sec",
            "range": "stddev: 0.023427344702716568",
            "extra": "mean: 5.315323228400018 sec\nrounds: 5"
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
          "id": "53daee4bb903aecd49c32870e3138b2b0cd2234e",
          "message": "Add an experiment info widget",
          "timestamp": "2024-04-04T13:05:52+02:00",
          "tree_id": "0e6614c7a5f57b994659c887acc8d56e4e7ee691",
          "url": "https://github.com/equinor/ert/commit/53daee4bb903aecd49c32870e3138b2b0cd2234e"
        },
        "date": 1712228933832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18920887811060952,
            "unit": "iter/sec",
            "range": "stddev: 0.014376870887572099",
            "extra": "mean: 5.285164258600014 sec\nrounds: 5"
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
          "id": "c656cb2f372788f70b2157ec324958229ba9666e",
          "message": "Remove function only called in test",
          "timestamp": "2024-04-04T13:07:19+02:00",
          "tree_id": "744834c6d75e9cc85896091b158d66a3765e5739",
          "url": "https://github.com/equinor/ert/commit/c656cb2f372788f70b2157ec324958229ba9666e"
        },
        "date": 1712229020659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18992724839523206,
            "unit": "iter/sec",
            "range": "stddev: 0.015711571332441412",
            "extra": "mean: 5.265173946599987 sec\nrounds: 5"
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
          "id": "ca2e52c12403ae5537a6713d2ba51bca8e059576",
          "message": "Return none if the parser does not provide scheduler_feature",
          "timestamp": "2024-04-04T16:05:54+02:00",
          "tree_id": "e64a72091dde07d1a5cdecef23a08125842f2c55",
          "url": "https://github.com/equinor/ert/commit/ca2e52c12403ae5537a6713d2ba51bca8e059576"
        },
        "date": 1712239755618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18389226828756391,
            "unit": "iter/sec",
            "range": "stddev: 0.024505062152851923",
            "extra": "mean: 5.437966529600021 sec\nrounds: 5"
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
          "id": "b21fab1a816b7bc64d88006e122c3d5f443e7a0a",
          "message": "Use ruff also as formatter",
          "timestamp": "2024-04-05T09:18:35+02:00",
          "tree_id": "ee36f6bd5fd9f23e0d4544ca8170ca4cf412fc8e",
          "url": "https://github.com/equinor/ert/commit/b21fab1a816b7bc64d88006e122c3d5f443e7a0a"
        },
        "date": 1712301708767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19301884770597844,
            "unit": "iter/sec",
            "range": "stddev: 0.03130834653736943",
            "extra": "mean: 5.18084120740001 sec\nrounds: 5"
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
          "id": "a1f9feb7d4783d510c28a692417dfa13ac191bfe",
          "message": "Add back webviz-ert kwargs",
          "timestamp": "2024-04-05T09:49:29+02:00",
          "tree_id": "d3dd15286026e60dae970238fb89576cae91471d",
          "url": "https://github.com/equinor/ert/commit/a1f9feb7d4783d510c28a692417dfa13ac191bfe"
        },
        "date": 1712303548443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1907729062416019,
            "unit": "iter/sec",
            "range": "stddev: 0.031495152516441416",
            "extra": "mean: 5.241834491599991 sec\nrounds: 5"
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
          "id": "e2bd7c1e7974a7a6f51400b4cfaa864dbbac04dd",
          "message": "Add new implementation of get_num_cpu\n\n\r\n\r\nCo-authored-by: Øyvind Eide <44577479+oyvindeide@users.noreply.github.com>",
          "timestamp": "2024-04-05T13:05:51+02:00",
          "tree_id": "de2a92fb024a30363284289411ed442b94a43e6a",
          "url": "https://github.com/equinor/ert/commit/e2bd7c1e7974a7a6f51400b4cfaa864dbbac04dd"
        },
        "date": 1712315354250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19131015908676907,
            "unit": "iter/sec",
            "range": "stddev: 0.039822087707115095",
            "extra": "mean: 5.227113943000006 sec\nrounds: 5"
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
          "id": "b0905379911924f0a08d96890ea50b9d47057439",
          "message": "Remove deprecated function libres_facade.grid",
          "timestamp": "2024-04-05T13:06:19+02:00",
          "tree_id": "5116c5e6335fc272cc20682594f36975438f6a25",
          "url": "https://github.com/equinor/ert/commit/b0905379911924f0a08d96890ea50b9d47057439"
        },
        "date": 1712315371674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18690918315604518,
            "unit": "iter/sec",
            "range": "stddev: 0.027658425508035527",
            "extra": "mean: 5.350191912000002 sec\nrounds: 5"
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
          "id": "9c51f1c14a34fc301fac86b6916baf74e04f1454",
          "message": "Ensure no underflow in parameter_example_test",
          "timestamp": "2024-04-05T15:31:32+02:00",
          "tree_id": "9f625cce77f18cd62c2c8836ee3fe827504f701a",
          "url": "https://github.com/equinor/ert/commit/9c51f1c14a34fc301fac86b6916baf74e04f1454"
        },
        "date": 1712324099940,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18562410902464907,
            "unit": "iter/sec",
            "range": "stddev: 0.06566112961142546",
            "extra": "mean: 5.387231245199996 sec\nrounds: 5"
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
          "id": "07c2fe041339bb080623cc30b090395ff7c1ca2f",
          "message": "Display possible error when removing existing runpath\n\nAllow user to continue without deleting the runpath.",
          "timestamp": "2024-04-08T09:16:04+03:00",
          "tree_id": "241cfa428438e9dbb229b89cdcf13915652b4ffd",
          "url": "https://github.com/equinor/ert/commit/07c2fe041339bb080623cc30b090395ff7c1ca2f"
        },
        "date": 1712557180065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18669837689210217,
            "unit": "iter/sec",
            "range": "stddev: 0.06300278666258832",
            "extra": "mean: 5.356232960600005 sec\nrounds: 5"
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
          "id": "12d4d3df0bb97398497a33ff8fc20a54dedf86de",
          "message": "Fix two overflow issues in parameter_example_test",
          "timestamp": "2024-04-08T10:30:50+02:00",
          "tree_id": "9c4dca2aeff9e8589aeff5f47cadb03b2ea8b558",
          "url": "https://github.com/equinor/ert/commit/12d4d3df0bb97398497a33ff8fc20a54dedf86de"
        },
        "date": 1712565249695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1900242676902475,
            "unit": "iter/sec",
            "range": "stddev: 0.02180521324240851",
            "extra": "mean: 5.262485745399994 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}