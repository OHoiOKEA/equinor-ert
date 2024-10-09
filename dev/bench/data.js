window.BENCHMARK_DATA = {
  "lastUpdate": 1728453151503,
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
          "id": "f6b86c6e7a2efa302bf42b0048f19295a6af99b2",
          "message": "Fix ConfigWarning not calling class method of child classes\n\nThis commit fixes an issue where the parent class `ConfigWarning` has all methods decorated with `staticmethod`, rather than `classmethod`. The class methods should call the child class's method implementation where they are implemented.",
          "timestamp": "2024-10-02T13:36:14+02:00",
          "tree_id": "bc1dbb07a14c2411dea690e209df8797a4c18647",
          "url": "https://github.com/equinor/ert/commit/f6b86c6e7a2efa302bf42b0048f19295a6af99b2"
        },
        "date": 1727869079581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18648934870101858,
            "unit": "iter/sec",
            "range": "stddev: 0.016647266940392005",
            "extra": "mean: 5.362236540400005 sec\nrounds: 5"
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
          "id": "61c648ae66276149095c246aa76f8961901b3d9c",
          "message": "Avoid possible UnboundLocalError for end_event\n\nThe error has been observed to occur in the log. Not trying\nto display further error messages to why it is None.",
          "timestamp": "2024-10-02T14:55:38+02:00",
          "tree_id": "f5a31aec60604a3f78a6e04dff4dc050909b475a",
          "url": "https://github.com/equinor/ert/commit/61c648ae66276149095c246aa76f8961901b3d9c"
        },
        "date": 1727873846190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1868592787795706,
            "unit": "iter/sec",
            "range": "stddev: 0.021936015789073702",
            "extra": "mean: 5.351620784 sec\nrounds: 5"
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
          "id": "8ff7299a22ca30c381a3dece5054cfc2cb45a916",
          "message": "Update the everest egg snapshot",
          "timestamp": "2024-10-02T15:17:28+02:00",
          "tree_id": "4a3de0a39a4f6efdf402d599aa70a0b6d8b4ca46",
          "url": "https://github.com/equinor/ert/commit/8ff7299a22ca30c381a3dece5054cfc2cb45a916"
        },
        "date": 1727875153388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1884510515971437,
            "unit": "iter/sec",
            "range": "stddev: 0.03484120036262807",
            "extra": "mean: 5.306417722399999 sec\nrounds: 5"
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
          "id": "f7cadbbd4cafa71d5fa28594037c6375a6683725",
          "message": "Return with SIGTERM in mocked kill",
          "timestamp": "2024-10-03T08:20:26+02:00",
          "tree_id": "b743a7ca2ca94f6804dd0e4c1fa44d480b8eb44d",
          "url": "https://github.com/equinor/ert/commit/f7cadbbd4cafa71d5fa28594037c6375a6683725"
        },
        "date": 1727936531614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1843032878843019,
            "unit": "iter/sec",
            "range": "stddev: 0.0312886959198407",
            "extra": "mean: 5.425839177800015 sec\nrounds: 5"
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
          "id": "4bba6954526cd83d8d4e8c80437dca96e807ace7",
          "message": "Run everest tests before publishing to pypi",
          "timestamp": "2024-10-03T08:44:19+02:00",
          "tree_id": "1469974a9a0a17f1a8fee5e325a408762b7ab35c",
          "url": "https://github.com/equinor/ert/commit/4bba6954526cd83d8d4e8c80437dca96e807ace7"
        },
        "date": 1727937967006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18878709395689586,
            "unit": "iter/sec",
            "range": "stddev: 0.01687470565973627",
            "extra": "mean: 5.296972261400038 sec\nrounds: 5"
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
          "id": "59eb4f3465c8fc1c7c9eb883a9cd4de823d1dec0",
          "message": "Fix capturing of ForwardModelStepWarning",
          "timestamp": "2024-10-03T10:20:22+02:00",
          "tree_id": "6189c86545335dd8acd770a5e5099fc63ec8bd5c",
          "url": "https://github.com/equinor/ert/commit/59eb4f3465c8fc1c7c9eb883a9cd4de823d1dec0"
        },
        "date": 1727943728634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1847963201435144,
            "unit": "iter/sec",
            "range": "stddev: 0.05319930517180732",
            "extra": "mean: 5.411363165800009 sec\nrounds: 5"
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
            "email": "114403625+andreas-el@users.noreply.github.com",
            "name": "Andreas Eknes Lie",
            "username": "andreas-el"
          },
          "distinct": true,
          "id": "7c8fcc8ea0a30fb6047a48b6f1e049caf5363957",
          "message": "Avoid logging void host information",
          "timestamp": "2024-10-03T12:14:45+02:00",
          "tree_id": "55c805881d3c0c9a0bd15092888f176c1e113527",
          "url": "https://github.com/equinor/ert/commit/7c8fcc8ea0a30fb6047a48b6f1e049caf5363957"
        },
        "date": 1727950639263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1889299854385165,
            "unit": "iter/sec",
            "range": "stddev: 0.021775402795100506",
            "extra": "mean: 5.292966056599999 sec\nrounds: 5"
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
          "id": "6d5c0a2ccc9503f4fd8e2471b88b1e9728137fde",
          "message": "Add workflow step to upload images when image comparisson test fails",
          "timestamp": "2024-10-03T13:45:21+02:00",
          "tree_id": "72a536145e06e450e4c71a2ca24ec4c42d117724",
          "url": "https://github.com/equinor/ert/commit/6d5c0a2ccc9503f4fd8e2471b88b1e9728137fde"
        },
        "date": 1727956027107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1830090319507238,
            "unit": "iter/sec",
            "range": "stddev: 0.03424107846866139",
            "extra": "mean: 5.464211188600001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49289030+HakonSohoel@users.noreply.github.com",
            "name": "Håkon Steinkopf Søhoel",
            "username": "HakonSohoel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a342528ad815d97b51980825b305498d1dc82d9f",
          "message": "Fix documentation for DeleteFile (#8861)",
          "timestamp": "2024-10-03T15:48:51+02:00",
          "tree_id": "463335e133d08c7ede6eeda8742b2cbd3c59aac3",
          "url": "https://github.com/equinor/ert/commit/a342528ad815d97b51980825b305498d1dc82d9f"
        },
        "date": 1727963480096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1828146696548976,
            "unit": "iter/sec",
            "range": "stddev: 0.03350248370475247",
            "extra": "mean: 5.470020550799984 sec\nrounds: 5"
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
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "8e0afc183ed633498df1c600d02d5aaf8803ab93",
          "message": "Fix wrong workflow reference in build_and_test.yml",
          "timestamp": "2024-10-04T09:35:20+02:00",
          "tree_id": "df1a70037aa6959e8cf39ec3d8a54fe8068f5dab",
          "url": "https://github.com/equinor/ert/commit/8e0afc183ed633498df1c600d02d5aaf8803ab93"
        },
        "date": 1728027432371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1868199979783813,
            "unit": "iter/sec",
            "range": "stddev: 0.038200359042761076",
            "extra": "mean: 5.352746016599997 sec\nrounds: 5"
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
          "id": "508716916b72c9b07180c9340422d147824b0ad0",
          "message": "Resolve flakyness in test_kill_before_submit\n\nSometimes the job actually starts on a compute node and sometimes\nit does not before it is removed/killed. In the the latter case, code\nprevious to this commit will fail as it asserts that the job script\nhas actually started to run.",
          "timestamp": "2024-10-04T10:05:12+02:00",
          "tree_id": "ee92d125162454fac400fc64a4cc2449f696e343",
          "url": "https://github.com/equinor/ert/commit/508716916b72c9b07180c9340422d147824b0ad0"
        },
        "date": 1728029225109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1876844960649245,
            "unit": "iter/sec",
            "range": "stddev: 0.03659035974536127",
            "extra": "mean: 5.328090604000005 sec\nrounds: 5"
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
          "id": "d1c3a8825e0ad09791fe091ea1121b2303609063",
          "message": "Only use logger.exception for unexpected exceptions",
          "timestamp": "2024-10-04T10:21:38+02:00",
          "tree_id": "c835e40fd9c6b6506b3fc2186c679efea89abf47",
          "url": "https://github.com/equinor/ert/commit/d1c3a8825e0ad09791fe091ea1121b2303609063"
        },
        "date": 1728030208832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18428124309155317,
            "unit": "iter/sec",
            "range": "stddev: 0.04474884386428596",
            "extra": "mean: 5.4264882481999965 sec\nrounds: 5"
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
          "id": "810bda726444499f0bbc4f65f469936f61f90b49",
          "message": "Avoid reserved ports in test_adaptive_localization\n\nThe default for localhost is 49152-51819",
          "timestamp": "2024-10-04T12:59:11+02:00",
          "tree_id": "45ca402ba6276e9d99c02fc85550d33d934ee1d0",
          "url": "https://github.com/equinor/ert/commit/810bda726444499f0bbc4f65f469936f61f90b49"
        },
        "date": 1728039664563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18444884501769301,
            "unit": "iter/sec",
            "range": "stddev: 0.037532253795009",
            "extra": "mean: 5.421557396599996 sec\nrounds: 5"
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
          "id": "8fef8f433d8b550b1d13a274f91ab426369d644c",
          "message": "Rename everest test file",
          "timestamp": "2024-10-04T13:24:01+02:00",
          "tree_id": "1e69f4b30fe07390c26dd77bb84221b0c3b4fa85",
          "url": "https://github.com/equinor/ert/commit/8fef8f433d8b550b1d13a274f91ab426369d644c"
        },
        "date": 1728041150525,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1869036594392418,
            "unit": "iter/sec",
            "range": "stddev: 0.01710987530043072",
            "extra": "mean: 5.350350030600003 sec\nrounds: 5"
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
          "id": "793d6352a2de0b6237fcceae4431a4ab8b650fde",
          "message": "Remove unused folder",
          "timestamp": "2024-10-05T20:03:48+02:00",
          "tree_id": "b54d3e130b2d4062725ef7d89798161e6e1cf43a",
          "url": "https://github.com/equinor/ert/commit/793d6352a2de0b6237fcceae4431a4ab8b650fde"
        },
        "date": 1728151538181,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18340763590186773,
            "unit": "iter/sec",
            "range": "stddev: 0.0185114303886757",
            "extra": "mean: 5.452335695200008 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "8b3667d5dc4f696a98d176e737550aa36e196ff6",
          "message": "Pin hypothesis to <6.112.3 due to bug",
          "timestamp": "2024-10-07T07:21:23+02:00",
          "tree_id": "9e9a375b4e81bd64c474d10f1fccba144e0842d2",
          "url": "https://github.com/equinor/ert/commit/8b3667d5dc4f696a98d176e737550aa36e196ff6"
        },
        "date": 1728278588021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18813011351574857,
            "unit": "iter/sec",
            "range": "stddev: 0.017690128999295073",
            "extra": "mean: 5.315470135600004 sec\nrounds: 5"
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
          "id": "7f3dfff895e62b26a161e66b14df98640cddcf89",
          "message": "Make kill_before_submit more robust\n\nAlso clearify intention a little bit more. Remove outdated docs on flakyness",
          "timestamp": "2024-10-07T08:06:10+02:00",
          "tree_id": "683b9c0799078fde02b607cbaa58c3acf3f9b9ba",
          "url": "https://github.com/equinor/ert/commit/7f3dfff895e62b26a161e66b14df98640cddcf89"
        },
        "date": 1728281280100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18896900421437157,
            "unit": "iter/sec",
            "range": "stddev: 0.019741880301555714",
            "extra": "mean: 5.291873152199992 sec\nrounds: 5"
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
          "id": "e29dfbc6152e5de49e8d58092d71d36dc0053dbb",
          "message": "Add more release-notes categories",
          "timestamp": "2024-10-07T09:10:02+02:00",
          "tree_id": "bd51a003e16f5b679f950e47249d2bd3afc5a361",
          "url": "https://github.com/equinor/ert/commit/e29dfbc6152e5de49e8d58092d71d36dc0053dbb"
        },
        "date": 1728285109491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18572222045206205,
            "unit": "iter/sec",
            "range": "stddev: 0.026929034202781213",
            "extra": "mean: 5.3843853340000125 sec\nrounds: 5"
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
          "id": "b505d333404a72e939cd3eafc8b53cb68ae3990c",
          "message": "Fix circular import when importing test_ensemble_plot",
          "timestamp": "2024-10-07T09:26:35+02:00",
          "tree_id": "af8eb4c3070e667163b3e02dbe7bdc310eb5173d",
          "url": "https://github.com/equinor/ert/commit/b505d333404a72e939cd3eafc8b53cb68ae3990c"
        },
        "date": 1728286103094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18756483255338746,
            "unit": "iter/sec",
            "range": "stddev: 0.018896810524170422",
            "extra": "mean: 5.3314898448000125 sec\nrounds: 5"
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
          "id": "2ce1f415e411d39f68ade5962c1e6d67c0e86114",
          "message": "Make sure run dialog is closed in gui test",
          "timestamp": "2024-10-07T09:47:51+02:00",
          "tree_id": "d1b17bcb1615312db254a9373d97c0078dc32e82",
          "url": "https://github.com/equinor/ert/commit/2ce1f415e411d39f68ade5962c1e6d67c0e86114"
        },
        "date": 1728287374862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18457375538944373,
            "unit": "iter/sec",
            "range": "stddev: 0.017638974323863688",
            "extra": "mean: 5.417888355199997 sec\nrounds: 5"
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
          "id": "59bc7746c238fc71605b238b4dc1bf0aecb071b7",
          "message": "Fix timeout issue with macos-14-large",
          "timestamp": "2024-10-07T09:53:31+02:00",
          "tree_id": "7631d78059deabc4525d28fdffa4f070393d994e",
          "url": "https://github.com/equinor/ert/commit/59bc7746c238fc71605b238b4dc1bf0aecb071b7"
        },
        "date": 1728287712881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1884785530281463,
            "unit": "iter/sec",
            "range": "stddev: 0.027046737656719545",
            "extra": "mean: 5.305643448199996 sec\nrounds: 5"
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
          "id": "a52cebfe34f58d25adabd0d42219ae5467833cce",
          "message": "Save & load responses as parquet\n\nPolars&parquet for responses and scaling factors\r\n\r\n* Datetime reading past 2263 should now work, added test asserting that it does work. Datetimes are now also timezone-naive.\r\n* Enforced f32 precision for observations & responses, this will require observations to be at most `1.84e19` (should be way less in realistic cases, this is mostly relevant for tests)",
          "timestamp": "2024-10-07T10:30:54+02:00",
          "tree_id": "fc02c2e1e292c87b3a4f4887fd545c54e35a9879",
          "url": "https://github.com/equinor/ert/commit/a52cebfe34f58d25adabd0d42219ae5467833cce"
        },
        "date": 1728289965517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18796488082391716,
            "unit": "iter/sec",
            "range": "stddev: 0.01653408634098076",
            "extra": "mean: 5.320142760800013 sec\nrounds: 5"
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
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "80a06bec565878c86e5fb49610bd2ceaaa68c2eb",
          "message": "Propagate and show exec_hosts in run_dialog if present",
          "timestamp": "2024-10-07T13:06:03+02:00",
          "tree_id": "c10c28836bec38648b65e1dbf260f6d85c1906ba",
          "url": "https://github.com/equinor/ert/commit/80a06bec565878c86e5fb49610bd2ceaaa68c2eb"
        },
        "date": 1728299271488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.187800937172628,
            "unit": "iter/sec",
            "range": "stddev: 0.03763164085307903",
            "extra": "mean: 5.3247870593999895 sec\nrounds: 5"
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
          "id": "5cb1339c6df044dbba1be6bbce21c6fd8e82afaf",
          "message": "Make histogram test not integration test & add mpl",
          "timestamp": "2024-10-07T15:33:23+02:00",
          "tree_id": "5082f9edf22486742feba874d6362360cb167e6c",
          "url": "https://github.com/equinor/ert/commit/5cb1339c6df044dbba1be6bbce21c6fd8e82afaf"
        },
        "date": 1728308113319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18673343207295307,
            "unit": "iter/sec",
            "range": "stddev: 0.025515976681189538",
            "extra": "mean: 5.355227443199993 sec\nrounds: 5"
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
          "id": "c258c76bc55d55ac17f1f5e35d6fd238c6b00924",
          "message": "Move plottery to tools plot\n\nAs plot_api is used by both ert.gui.plottery and ert.gui.tools.plot, its\r\ncurrent location causes circular dependency problems. This PR moves\r\nplottery into ert.gui.tools.plot so that the only exposed symbol from\r\nert.gui.tools.plot is PlotTool.",
          "timestamp": "2024-10-07T13:48:37Z",
          "tree_id": "902dc5325cffe69439827fd5c0be55fa8ff914e1",
          "url": "https://github.com/equinor/ert/commit/c258c76bc55d55ac17f1f5e35d6fd238c6b00924"
        },
        "date": 1728309023953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18743922487910628,
            "unit": "iter/sec",
            "range": "stddev: 0.03133363317028538",
            "extra": "mean: 5.335062608400006 sec\nrounds: 5"
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
      }
    ]
  }
}