window.BENCHMARK_DATA = {
  "lastUpdate": 1728654143953,
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
          "id": "c304cd0996e8cb1f3df4882b77f6549fd3ecc34f",
          "message": "Refactor and improve readability ecl_run tests\n\nRemove redundant code, and fix typo in fixture env\nvariable (that did not matter).\n\nUse pathlib.\n\nRemove redundant --num_cpu argument in test, only applies\nto legacy eclrun.",
          "timestamp": "2024-10-08T13:26:52+02:00",
          "tree_id": "a8c964e982f0286cb984e4fd82cf422b11edf5cc",
          "url": "https://github.com/equinor/ert/commit/c304cd0996e8cb1f3df4882b77f6549fd3ecc34f"
        },
        "date": 1728386930973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18382401566683568,
            "unit": "iter/sec",
            "range": "stddev: 0.013934349368832156",
            "extra": "mean: 5.439985609999996 sec\nrounds: 5"
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
          "id": "371eb58e8ccab70046346003c2e13791f61aa6e0",
          "message": "Update pre-commit versions",
          "timestamp": "2024-10-08T13:49:41+02:00",
          "tree_id": "924f80f34d3b7fc4f1446652f3876bf5daf9378b",
          "url": "https://github.com/equinor/ert/commit/371eb58e8ccab70046346003c2e13791f61aa6e0"
        },
        "date": 1728388286820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19079747338218023,
            "unit": "iter/sec",
            "range": "stddev: 0.0222789888644443",
            "extra": "mean: 5.241159551399994 sec\nrounds: 5"
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
          "id": "c98db945f4e5a692ab4b6699621674ae033db139",
          "message": "Make sure that the last evaluator event is EETerminated\n\nThis introduces EnsembleEvaluator._complete_batch event, which is set\nevery time a batch is produced. When closing the ee server, we make sure\nthat the _complete_batch is set and thus preventing an events to be\nlost.\n\nThis behaviour is then tested in\ntest_ensure_multi_level_events_in_order, which was updated\ncorrespondighly.",
          "timestamp": "2024-10-08T14:10:40+02:00",
          "tree_id": "f994e3d23f82b1b3a932666f25e57c2b946709e5",
          "url": "https://github.com/equinor/ert/commit/c98db945f4e5a692ab4b6699621674ae033db139"
        },
        "date": 1728389553598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19185374822397297,
            "unit": "iter/sec",
            "range": "stddev: 0.0390148953980107",
            "extra": "mean: 5.212303691000005 sec\nrounds: 5"
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
          "id": "81fb0bd4a44a4142218c2e7a86e64d8763650290",
          "message": "Add well trajectory everest doc entry.",
          "timestamp": "2024-10-08T15:31:39+02:00",
          "tree_id": "857cc9fc663c8d955324690b77e3dd4f53a0743f",
          "url": "https://github.com/equinor/ert/commit/81fb0bd4a44a4142218c2e7a86e64d8763650290"
        },
        "date": 1728394407392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18717497371377745,
            "unit": "iter/sec",
            "range": "stddev: 0.0395001532332408",
            "extra": "mean: 5.342594579600001 sec\nrounds: 5"
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
          "id": "7651fff904686dffc684d0defd8bc71c80df8d75",
          "message": "Run everest test in komodo",
          "timestamp": "2024-10-09T07:50:44+02:00",
          "tree_id": "fc3decd49ec988605ebfd1fa89d7022e2d336f7c",
          "url": "https://github.com/equinor/ert/commit/7651fff904686dffc684d0defd8bc71c80df8d75"
        },
        "date": 1728453151100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18945593454988038,
            "unit": "iter/sec",
            "range": "stddev: 0.02711198504406583",
            "extra": "mean: 5.278272239800003 sec\nrounds: 5"
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
          "id": "4cdb34e54789a5a1cfa5a82f1fa0ab2465e76fcc",
          "message": "Remove unused plugin code\n\nThis code is unused since 173ba862ab7e58c0abf1b56b5d50add9aca8b316",
          "timestamp": "2024-10-09T09:07:49+02:00",
          "tree_id": "f930890cf60e77df55ffec2f1c39e548dd13d82c",
          "url": "https://github.com/equinor/ert/commit/4cdb34e54789a5a1cfa5a82f1fa0ab2465e76fcc"
        },
        "date": 1728457782014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19020893731100047,
            "unit": "iter/sec",
            "range": "stddev: 0.024041283295639006",
            "extra": "mean: 5.257376515199985 sec\nrounds: 5"
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
          "id": "45c836436874a83ae42e44c121c131576ab6d2cc",
          "message": "Remove unused help_text fm_step property\n\nIt says it is unused, and it seems correct that it is unused. No traces\nto be found in related repositories using this property",
          "timestamp": "2024-10-09T09:12:30+02:00",
          "tree_id": "3764012798446779d50011f93f667a66b21d09c2",
          "url": "https://github.com/equinor/ert/commit/45c836436874a83ae42e44c121c131576ab6d2cc"
        },
        "date": 1728458058585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19175930844834896,
            "unit": "iter/sec",
            "range": "stddev: 0.0288873259804977",
            "extra": "mean: 5.214870704799989 sec\nrounds: 5"
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
          "id": "86c01277e1fe7665d40e741c9a34655a903d49f5",
          "message": "Have job_dispatch.py safely terminate child processes on exception",
          "timestamp": "2024-10-09T12:02:44+02:00",
          "tree_id": "952a9fa73f5d2c35e89003b68e32cfa95b940a8a",
          "url": "https://github.com/equinor/ert/commit/86c01277e1fe7665d40e741c9a34655a903d49f5"
        },
        "date": 1728468272232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18815252814917796,
            "unit": "iter/sec",
            "range": "stddev: 0.04206224178965344",
            "extra": "mean: 5.314836903000014 sec\nrounds: 5"
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
          "id": "ca916d444979112a32d1add95bee0aa06bc66ec0",
          "message": "Increase timeout of long running cli tests",
          "timestamp": "2024-10-09T12:49:08+02:00",
          "tree_id": "ac7d53df3fa32d07b090a3dbbcbdb9c0dc143dea",
          "url": "https://github.com/equinor/ert/commit/ca916d444979112a32d1add95bee0aa06bc66ec0"
        },
        "date": 1728471057388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18661370287221132,
            "unit": "iter/sec",
            "range": "stddev: 0.018808425164219912",
            "extra": "mean: 5.358663295399998 sec\nrounds: 5"
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
          "id": "3e6ce6b4fc4b5ce99d62732d483ff1f3a4498e4a",
          "message": "Handle inaccesible runpath gracefully",
          "timestamp": "2024-10-09T13:04:02+02:00",
          "tree_id": "30c95ac31ce3a2161ea26b909d853d63beaaf3da",
          "url": "https://github.com/equinor/ert/commit/3e6ce6b4fc4b5ce99d62732d483ff1f3a4498e4a"
        },
        "date": 1728471954621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1838253799521282,
            "unit": "iter/sec",
            "range": "stddev: 0.06539516382651238",
            "extra": "mean: 5.439945236400002 sec\nrounds: 5"
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
          "id": "16f3a130d1efc5bece2a9bdf3237e6b34ad00282",
          "message": "Refactor everest tmpdir fixture",
          "timestamp": "2024-10-09T13:12:58+02:00",
          "tree_id": "18fa42a2ead59b044c918ca51541ee715e4ab3a0",
          "url": "https://github.com/equinor/ert/commit/16f3a130d1efc5bece2a9bdf3237e6b34ad00282"
        },
        "date": 1728472512219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18705649233483912,
            "unit": "iter/sec",
            "range": "stddev: 0.0359663590175562",
            "extra": "mean: 5.3459785732 sec\nrounds: 5"
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
          "id": "2a917566dfd49ce2d306eacf6eac56e530763553",
          "message": "Remove broadcasting of Eclipse stdout to multiple files\n\nErt tried to be consistent with the vendor provided eclrun and\nprovided multiple stdout files for Ert invocations when the vendor\nprovided eclrun was not in use. Now Ert should only use the vendor\nprovided eclrun for all Eclipse invocations, and it should not do\nanything on this subject as it is not Erts responsibility.\n\nSince vendor provided eclrun seemingly has changed behaviour, this\nresults in a breaking change for Ert users if they depend specifically\nfor the LOG or OUT files which are not there anymore.",
          "timestamp": "2024-10-09T14:53:57+02:00",
          "tree_id": "3df70c08aa78a8b38e6d75e5108f39afa8b1ffc3",
          "url": "https://github.com/equinor/ert/commit/2a917566dfd49ce2d306eacf6eac56e530763553"
        },
        "date": 1728478546166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1905574445407685,
            "unit": "iter/sec",
            "range": "stddev: 0.0512964260327914",
            "extra": "mean: 5.247761389800002 sec\nrounds: 5"
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
          "id": "ffacc3320b3190a2661686ad485350535eee7c9d",
          "message": "Rename jobs to forward_models in snake_oil",
          "timestamp": "2024-10-09T15:01:44+02:00",
          "tree_id": "dc9fc41618f012b92f06f04911286e329dfa9518",
          "url": "https://github.com/equinor/ert/commit/ffacc3320b3190a2661686ad485350535eee7c9d"
        },
        "date": 1728479017809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18902635222655803,
            "unit": "iter/sec",
            "range": "stddev: 0.06373258268565674",
            "extra": "mean: 5.290267670200012 sec\nrounds: 5"
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
          "id": "e9a280d5449e53d89e16697dba2b0e58de30c495",
          "message": "Fix docstring error\n\nThis is not only for RMS..",
          "timestamp": "2024-10-09T15:01:57+02:00",
          "tree_id": "2586b38b52a025419816664663d577630c65e41f",
          "url": "https://github.com/equinor/ert/commit/e9a280d5449e53d89e16697dba2b0e58de30c495"
        },
        "date": 1728479021363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19090762269271327,
            "unit": "iter/sec",
            "range": "stddev: 0.05213054551928841",
            "extra": "mean: 5.238135522799996 sec\nrounds: 5"
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
          "id": "2f0bc99b1025a708f4f15a2fb7484efb95299c91",
          "message": "Use fm_step instead of job/joblist\n\nNot touching 'jobs.json', that would be breaking",
          "timestamp": "2024-10-09T15:08:42+02:00",
          "tree_id": "0208bb74eef88b510d82442c340ac290c84456dc",
          "url": "https://github.com/equinor/ert/commit/2f0bc99b1025a708f4f15a2fb7484efb95299c91"
        },
        "date": 1728479430514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1898754524869547,
            "unit": "iter/sec",
            "range": "stddev: 0.04377838350459551",
            "extra": "mean: 5.266610227400008 sec\nrounds: 5"
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
          "id": "fc6244f995c4da1fc987a2261b4371e0dbbdfa12",
          "message": "Rename forward-models to forward_models\n\nBetter to stick to underscore for consistency with the enforced\nunderscore in the python package hierarchy. Underscore is also\nconsistent with semeio.",
          "timestamp": "2024-10-09T16:05:50+02:00",
          "tree_id": "c4fb885364e9c4d5143eeda68ef33eff57d8e37b",
          "url": "https://github.com/equinor/ert/commit/fc6244f995c4da1fc987a2261b4371e0dbbdfa12"
        },
        "date": 1728482880692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18951521957256107,
            "unit": "iter/sec",
            "range": "stddev: 0.018180422187285068",
            "extra": "mean: 5.276621066400014 sec\nrounds: 5"
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
          "id": "aa8ba9280606fde1dd333bc1870e47aaeeb61a97",
          "message": "Pin ubuntu runner image in test_ert_with_slurm workflow",
          "timestamp": "2024-10-10T10:02:18+02:00",
          "tree_id": "837656a096949077f95c0c594243e8eeabc419df",
          "url": "https://github.com/equinor/ert/commit/aa8ba9280606fde1dd333bc1870e47aaeeb61a97"
        },
        "date": 1728547443758,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19898962046750404,
            "unit": "iter/sec",
            "range": "stddev: 0.02050515414584239",
            "extra": "mean: 5.025387744599999 sec\nrounds: 5"
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
          "id": "087e6615b7a2b2f3bf27d4abf2bef49ec052c259",
          "message": "Fixup return code variable name in testkomodo.sh",
          "timestamp": "2024-10-10T10:33:27+02:00",
          "tree_id": "a6a08981f9e66e40cea087cb0f8ee470b52209c2",
          "url": "https://github.com/equinor/ert/commit/087e6615b7a2b2f3bf27d4abf2bef49ec052c259"
        },
        "date": 1728549316436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18990887414823795,
            "unit": "iter/sec",
            "range": "stddev: 0.008162951763667157",
            "extra": "mean: 5.2656833677999995 sec\nrounds: 5"
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
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "distinct": true,
          "id": "a06c9713f5a4d7e079d83296b9fc60567ddcfce1",
          "message": "Sort observations and responses in _es_update",
          "timestamp": "2024-10-10T11:39:50+02:00",
          "tree_id": "faefdb0d0764ac0e0460bfa64a033fc4f3b557ae",
          "url": "https://github.com/equinor/ert/commit/a06c9713f5a4d7e079d83296b9fc60567ddcfce1"
        },
        "date": 1728553297296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.186093307485398,
            "unit": "iter/sec",
            "range": "stddev: 0.10671899536914627",
            "extra": "mean: 5.3736483783999915 sec\nrounds: 5"
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
          "id": "3dfec31d697e8c2e2e1f0f5c896680c23102edf5",
          "message": "Ensure missing runpath test is ran with plugins",
          "timestamp": "2024-10-10T12:15:45+02:00",
          "tree_id": "03f5827e549d76deff070154647352a030265988",
          "url": "https://github.com/equinor/ert/commit/3dfec31d697e8c2e2e1f0f5c896680c23102edf5"
        },
        "date": 1728555454999,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1922494747450017,
            "unit": "iter/sec",
            "range": "stddev: 0.022097404175557705",
            "extra": "mean: 5.2015746795999975 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "committer": {
            "email": "pieter.verveer@tno.nl",
            "name": "Peter Verveer",
            "username": "verveerpj"
          },
          "distinct": true,
          "id": "b9cfd468ae1f42c044882fa6f7fee3b1e71f1b67",
          "message": "Refactor BatchSimulator",
          "timestamp": "2024-10-10T12:48:04+02:00",
          "tree_id": "030b27e8e55b1a5afd68128c2d8014d4861f8c24",
          "url": "https://github.com/equinor/ert/commit/b9cfd468ae1f42c044882fa6f7fee3b1e71f1b67"
        },
        "date": 1728557394458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1936476596849793,
            "unit": "iter/sec",
            "range": "stddev: 0.1223576322213484",
            "extra": "mean: 5.164017998599997 sec\nrounds: 5"
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
          "id": "06c6dc6e7221dc915e7519b92878a9258ef2ec14",
          "message": "Fix run_dialog second progress bar hanging\n\nThis commit fixes the issue where an experiment failure would leave the second progress bar stuck in indeterminate state.\nNow, the second progress bar is invisible as long as there are no realizations or if all realizations are finished.",
          "timestamp": "2024-10-10T14:53:56+02:00",
          "tree_id": "a2094c1f656c308d01c48b1553f9be00a38768c6",
          "url": "https://github.com/equinor/ert/commit/06c6dc6e7221dc915e7519b92878a9258ef2ec14"
        },
        "date": 1728564948776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1843706245398457,
            "unit": "iter/sec",
            "range": "stddev: 0.04356947910899278",
            "extra": "mean: 5.423857528799999 sec\nrounds: 5"
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
          "id": "4c2902a7d20ce01a85743a92695a2020f22398aa",
          "message": "Include site config when running missing runpath test",
          "timestamp": "2024-10-10T16:04:34+02:00",
          "tree_id": "24334de8cac4680362ae034a950c0401317dfd1b",
          "url": "https://github.com/equinor/ert/commit/4c2902a7d20ce01a85743a92695a2020f22398aa"
        },
        "date": 1728569186820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18795622794001263,
            "unit": "iter/sec",
            "range": "stddev: 0.06382708419633111",
            "extra": "mean: 5.3203876825999945 sec\nrounds: 5"
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
          "id": "d1ac7cf8e4e31e9636e711162434d50db85bd9a5",
          "message": "Support reading excel files from the DESIGN_MATRIX keyword\n\n- Adds functionality to the DesignMatrix dataclass for reading\ndesign matrix excel files into pandas dataframes, akin to design2params\nin semeio.",
          "timestamp": "2024-10-11T00:05:10+02:00",
          "tree_id": "da61f9047d1bcaa1749848f29a916608586d9b61",
          "url": "https://github.com/equinor/ert/commit/d1ac7cf8e4e31e9636e711162434d50db85bd9a5"
        },
        "date": 1728598022217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19142854799837322,
            "unit": "iter/sec",
            "range": "stddev: 0.014948794139153067",
            "extra": "mean: 5.223881236400007 sec\nrounds: 5"
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
          "id": "96dd8d81ad67304aa2bccaf89064883b0ca1dc09",
          "message": "Only send analysis time updates every second",
          "timestamp": "2024-10-11T08:35:59+02:00",
          "tree_id": "86f6a4b70a4c3f5f2d93ace497a25d51a436e338",
          "url": "https://github.com/equinor/ert/commit/96dd8d81ad67304aa2bccaf89064883b0ca1dc09"
        },
        "date": 1728628669626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1956179764589389,
            "unit": "iter/sec",
            "range": "stddev: 0.02570217605356537",
            "extra": "mean: 5.112004622999995 sec\nrounds: 5"
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
          "id": "2453a2c3450daa492a9e7579c7b848033705f06f",
          "message": "Refactor and rename summary_block()\n\nThe logic for determining stable was not correct, if the summary\nfile was not stable after two reads, it would always timeout. Behaviour\nis not defined by tests.",
          "timestamp": "2024-10-11T09:37:17+02:00",
          "tree_id": "e0da27ae031f904640cb90cb02eeb6297c616be1",
          "url": "https://github.com/equinor/ert/commit/2453a2c3450daa492a9e7579c7b848033705f06f"
        },
        "date": 1728632344862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1955615501473843,
            "unit": "iter/sec",
            "range": "stddev: 0.01525893073624097",
            "extra": "mean: 5.113479614199997 sec\nrounds: 5"
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
          "id": "072deccc96378ff71e79e4da54ee0c256c2dadd5",
          "message": "Skip failing writes test on lsf\n\nCurrently does not work with the lsf setup",
          "timestamp": "2024-10-11T10:57:13+02:00",
          "tree_id": "1097cd048460b2ab3ee5149c0d1582bd494b452c",
          "url": "https://github.com/equinor/ert/commit/072deccc96378ff71e79e4da54ee0c256c2dadd5"
        },
        "date": 1728637144510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19402879829294423,
            "unit": "iter/sec",
            "range": "stddev: 0.02062148947075118",
            "extra": "mean: 5.1538741093999985 sec\nrounds: 5"
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
          "id": "ed4ba121c910324a1a08a659ee08dd01bdcc6371",
          "message": "Test empty gen_kw in plotapi",
          "timestamp": "2024-10-11T13:04:17+02:00",
          "tree_id": "68a67ccf3e1efda4f74408a897a83ca4c3742eb8",
          "url": "https://github.com/equinor/ert/commit/ed4ba121c910324a1a08a659ee08dd01bdcc6371"
        },
        "date": 1728644762277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19709949762150197,
            "unit": "iter/sec",
            "range": "stddev: 0.01765984201941471",
            "extra": "mean: 5.073579649200019 sec\nrounds: 5"
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
          "id": "dad96eac337f33fcf51e190d5f72e37bda4f6ce9",
          "message": "Give warning when memory usage is set in `LSF_RESOURCE`\n\nThis commit gives the user a deprecationwarning when trying to set\n`mem=...` in the `LSF_RESOURCE` resource string. This is preferred to be\nset in the new `REALIZATION_MEMORY` option.\n\nUsing `REALIZATION_MEMORY` over `LSF_RESOURCE`\n* Does not invalidate what we have set as LSF_RESOURCE through the site-config.\n* Better handling of memory units (i.e. better UX).\n* Makes Ert able to understand the parameter, to be able to compare with actual usage",
          "timestamp": "2024-10-11T15:33:35+02:00",
          "tree_id": "9a6eaf2c31251b06cd44be949160efb9f97e1db0",
          "url": "https://github.com/equinor/ert/commit/dad96eac337f33fcf51e190d5f72e37bda4f6ce9"
        },
        "date": 1728653722062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18924224453110722,
            "unit": "iter/sec",
            "range": "stddev: 0.07632587426322884",
            "extra": "mean: 5.284232400000002 sec\nrounds: 5"
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
          "id": "391a25f7c4ed259eb79f69074b2b9df2455ff046",
          "message": "Add DesignMatrixPanel to show DataFrame parameters in a table\n\n- Button to show the parameters is shown when design_matrix is present\n- Add test for design matrix show parameters button",
          "timestamp": "2024-10-11T15:40:36+02:00",
          "tree_id": "1cf97d6b6495c24cfdb9721c9d2600df88f87431",
          "url": "https://github.com/equinor/ert/commit/391a25f7c4ed259eb79f69074b2b9df2455ff046"
        },
        "date": 1728654143543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18949425373996195,
            "unit": "iter/sec",
            "range": "stddev: 0.05106073852734194",
            "extra": "mean: 5.277204876999986 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}