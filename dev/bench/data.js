window.BENCHMARK_DATA = {
  "lastUpdate": 1728041151492,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "d6862e57d1b7bc23c6584ae137de4fb702a525fc",
          "message": "Use one experiment per optimization",
          "timestamp": "2024-09-30T08:29:25+02:00",
          "tree_id": "9fd09e297613e984ab7024ca5881dcb1ab099bcd",
          "url": "https://github.com/equinor/ert/commit/d6862e57d1b7bc23c6584ae137de4fb702a525fc"
        },
        "date": 1727677873319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18594022256486195,
            "unit": "iter/sec",
            "range": "stddev: 0.02992270539839856",
            "extra": "mean: 5.378072512800008 sec\nrounds: 5"
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
          "id": "03d3f9bc091770472ddacdda112a86d8cca8ceb4",
          "message": "Remove the everest restart functionality\n\nThe restart functionality was added to support a research project.\nHowever it turned out to be unnecessary for that project. Since\nfunctionality should not be added for such a purpose only and the\ngeneral usefulness of the feature is unclear it should be removed.",
          "timestamp": "2024-09-30T08:42:12+02:00",
          "tree_id": "398682fe90ee0cecf0cdf43f5755acc5a706ef85",
          "url": "https://github.com/equinor/ert/commit/03d3f9bc091770472ddacdda112a86d8cca8ceb4"
        },
        "date": 1727678652064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18688883203459838,
            "unit": "iter/sec",
            "range": "stddev: 0.02042839279381016",
            "extra": "mean: 5.3507745172 sec\nrounds: 5"
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
          "id": "0e88cbd943bb30e40cac28392f4441896916fb75",
          "message": "Add formatting to simulation mode helptext\n\n* Add formatting to simulation mode helptext\r\n* Emphasize realization-0 executed only",
          "timestamp": "2024-09-30T06:46:27Z",
          "tree_id": "852e905581016103fdf745e445d3fdcde4a120ce",
          "url": "https://github.com/equinor/ert/commit/0e88cbd943bb30e40cac28392f4441896916fb75"
        },
        "date": 1727678888921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18683055197265036,
            "unit": "iter/sec",
            "range": "stddev: 0.03443220017896775",
            "extra": "mean: 5.352443641800017 sec\nrounds: 5"
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
          "id": "e607feb6e67d877d346ee1ff67c2248acb4e8e26",
          "message": "Group items in Experiment Panel's drop-down",
          "timestamp": "2024-09-30T11:44:06+02:00",
          "tree_id": "f048006e748fb092b78fda6b0ea979d5b2a734aa",
          "url": "https://github.com/equinor/ert/commit/e607feb6e67d877d346ee1ff67c2248acb4e8e26"
        },
        "date": 1727689559509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1872148217628717,
            "unit": "iter/sec",
            "range": "stddev: 0.02208857042815493",
            "extra": "mean: 5.341457426199997 sec\nrounds: 5"
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
          "id": "ca33dcaf3df559e0afa25f947b91f2382f2102f7",
          "message": "Use wait_for_child for getting RunDialog in test",
          "timestamp": "2024-09-30T14:03:44+02:00",
          "tree_id": "76f4b8ea4d1ff94c304dd53d2e830a933ce4310b",
          "url": "https://github.com/equinor/ert/commit/ca33dcaf3df559e0afa25f947b91f2382f2102f7"
        },
        "date": 1727697940771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17950119623206917,
            "unit": "iter/sec",
            "range": "stddev: 0.03832964405473186",
            "extra": "mean: 5.570993514200007 sec\nrounds: 5"
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
          "id": "08253228ee547e757ddf8227f3ea2d01e7bc6c36",
          "message": "Fix flaky kill_before_submit test for lsf",
          "timestamp": "2024-09-30T13:05:12Z",
          "tree_id": "4347636b88d0446e37e284b90dc0757ac883611f",
          "url": "https://github.com/equinor/ert/commit/08253228ee547e757ddf8227f3ea2d01e7bc6c36"
        },
        "date": 1727701620678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18836527547582324,
            "unit": "iter/sec",
            "range": "stddev: 0.019995285188180566",
            "extra": "mean: 5.308834112199998 sec\nrounds: 5"
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
          "id": "e92f558cf14e9c9823b557b3df05caefef49576f",
          "message": "Fix the everest doc generator\n\nThe generator would only function within a\neditable install. The behavior is changed such\nthat it has to be run from within the ERT\nrepository, in one of the parent directories of\nthe file that is generated.",
          "timestamp": "2024-10-01T09:28:08+02:00",
          "tree_id": "19400423ca70b35501cab1c443788bd4c81a2d81",
          "url": "https://github.com/equinor/ert/commit/e92f558cf14e9c9823b557b3df05caefef49576f"
        },
        "date": 1727767798460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18727219533872286,
            "unit": "iter/sec",
            "range": "stddev: 0.02097360588054806",
            "extra": "mean: 5.339820992599999 sec\nrounds: 5"
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
          "id": "9f8d73a6b4809a0384bda60632350d2123df7c0c",
          "message": "Add select_wells forward model to everest documentation",
          "timestamp": "2024-10-01T13:50:54+02:00",
          "tree_id": "69c3b6ace890038f07e8815bf0274dac48ebd2b8",
          "url": "https://github.com/equinor/ert/commit/9f8d73a6b4809a0384bda60632350d2123df7c0c"
        },
        "date": 1727783559218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18799790716262854,
            "unit": "iter/sec",
            "range": "stddev: 0.02343802976673656",
            "extra": "mean: 5.3192081502000175 sec\nrounds: 5"
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
          "id": "523389fe368307f2e24305bd52404d106dfd2822",
          "message": "Make sure run dialog is closed in gui test",
          "timestamp": "2024-10-01T19:15:45+02:00",
          "tree_id": "461c795095013a1d94055103b20e457fc572fba8",
          "url": "https://github.com/equinor/ert/commit/523389fe368307f2e24305bd52404d106dfd2822"
        },
        "date": 1727803053392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18965069636568915,
            "unit": "iter/sec",
            "range": "stddev: 0.025097139152714415",
            "extra": "mean: 5.272851717200001 sec\nrounds: 5"
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
          "id": "21bbca845aa1bf955498fa86bb44b5af6de5780d",
          "message": "Extract common code path in test fixtures",
          "timestamp": "2024-10-02T06:25:29+02:00",
          "tree_id": "2971d86615aa6195b71d334b7f75d1a960253d02",
          "url": "https://github.com/equinor/ert/commit/21bbca845aa1bf955498fa86bb44b5af6de5780d"
        },
        "date": 1727843235514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18720788583679152,
            "unit": "iter/sec",
            "range": "stddev: 0.019707281426563864",
            "extra": "mean: 5.341655323600008 sec\nrounds: 5"
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
          "id": "0774438a2001706e8bebc34b2828604fa0c905a3",
          "message": "Raise warning when summary key and no simulator job present in ert config",
          "timestamp": "2024-10-02T08:04:20+03:00",
          "tree_id": "3d9ad73c144e580d4d555344f934dd011cf147c8",
          "url": "https://github.com/equinor/ert/commit/0774438a2001706e8bebc34b2828604fa0c905a3"
        },
        "date": 1727845565528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18729011940057633,
            "unit": "iter/sec",
            "range": "stddev: 0.030429482029387743",
            "extra": "mean: 5.339309960399987 sec\nrounds: 5"
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
          "id": "4321e49226c0019376d3f59dfd2c62a0e8630f6a",
          "message": "Remove inconsistent whitespace in doc",
          "timestamp": "2024-10-02T07:35:33+02:00",
          "tree_id": "f6232f94a8eff636ef08397d4351e1a6558f757a",
          "url": "https://github.com/equinor/ert/commit/4321e49226c0019376d3f59dfd2c62a0e8630f6a"
        },
        "date": 1727847438185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18253663390872718,
            "unit": "iter/sec",
            "range": "stddev: 0.030185089631895385",
            "extra": "mean: 5.478352364599999 sec\nrounds: 5"
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
          "id": "18017c70deaef30b460c57a5f4d33abc63b27459",
          "message": "Add support for design matrix keyword in ert config\n\n- Expects the format:\nDESIGN_MATRIX file.xlsx DESIGN_SHEET:design DEFAULT_SHEET:default\nwhere file.xlsx is an existing file.\n- Scaffolding for further support for reading parameter values from\ndesign matrix excel files.",
          "timestamp": "2024-10-02T10:21:20+02:00",
          "tree_id": "62fcb445307024188878c1faea404718096f8eb0",
          "url": "https://github.com/equinor/ert/commit/18017c70deaef30b460c57a5f4d33abc63b27459"
        },
        "date": 1727857385054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18630918736017232,
            "unit": "iter/sec",
            "range": "stddev: 0.025604651658065924",
            "extra": "mean: 5.367421833399999 sec\nrounds: 5"
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
          "id": "ad8bfc49ee89eb54f3e55406bab2f12897fb256e",
          "message": "Shellcheck testkomodo.sh in github workflow",
          "timestamp": "2024-10-02T11:22:37+02:00",
          "tree_id": "11cba48fd15ea6e040211711eba4d9720884b847",
          "url": "https://github.com/equinor/ert/commit/ad8bfc49ee89eb54f3e55406bab2f12897fb256e"
        },
        "date": 1727861064837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1836414570359484,
            "unit": "iter/sec",
            "range": "stddev: 0.025022137838814688",
            "extra": "mean: 5.445393519200008 sec\nrounds: 5"
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
          "id": "5d4205d7ec76afe72b7db380e9b5287cfb3fd4df",
          "message": "Turn unexpected fm errors into warnings",
          "timestamp": "2024-10-02T10:46:12Z",
          "tree_id": "c4abe97d985846dc81294149e98b8fa44d12e35b",
          "url": "https://github.com/equinor/ert/commit/5d4205d7ec76afe72b7db380e9b5287cfb3fd4df"
        },
        "date": 1727866149950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18175713363530718,
            "unit": "iter/sec",
            "range": "stddev: 0.030335050358058474",
            "extra": "mean: 5.501847327799988 sec\nrounds: 5"
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
          "id": "398ce6ad2861eb3489dfce7965e58df30d0d2379",
          "message": "Log LSF execution host to Azure",
          "timestamp": "2024-10-02T12:54:32+02:00",
          "tree_id": "829bc594d90260fdfebcca8352c9b3ca1477a51b",
          "url": "https://github.com/equinor/ert/commit/398ce6ad2861eb3489dfce7965e58df30d0d2379"
        },
        "date": 1727866582324,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18340800028004453,
            "unit": "iter/sec",
            "range": "stddev: 0.17680260559376898",
            "extra": "mean: 5.452324863000013 sec\nrounds: 5"
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
      }
    ]
  }
}