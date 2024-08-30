window.BENCHMARK_DATA = {
  "lastUpdate": 1725026347959,
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
          "id": "bdc92ab9ca36583c740efec111dd35c22d87e224",
          "message": "Set progress_bar_label to Failed on error",
          "timestamp": "2024-08-21T14:19:04+02:00",
          "tree_id": "4992825908b94aeacf103a1203e41c7d20ad7d71",
          "url": "https://github.com/equinor/ert/commit/bdc92ab9ca36583c740efec111dd35c22d87e224"
        },
        "date": 1724242916307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.194626714616028,
            "unit": "iter/sec",
            "range": "stddev: 0.021720356449967684",
            "extra": "mean: 5.138040797599979 sec\nrounds: 5"
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
          "id": "ccfad8fa20d45231edbd27fcd39a329cceabc834",
          "message": "Convert to dataclass",
          "timestamp": "2024-08-21T14:58:57+02:00",
          "tree_id": "918db2468843cad409691bfb07751e6d8f1d648a",
          "url": "https://github.com/equinor/ert/commit/ccfad8fa20d45231edbd27fcd39a329cceabc834"
        },
        "date": 1724245293822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18838362998714925,
            "unit": "iter/sec",
            "range": "stddev: 0.10678749491036586",
            "extra": "mean: 5.308316864200014 sec\nrounds: 5"
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
          "id": "ef647361ed57212136108d61f4e2e5e6909d0449",
          "message": "Rename variable state_kw -> response_key",
          "timestamp": "2024-08-21T15:23:12+02:00",
          "tree_id": "6bd9c267b0b752f46e565f03dd6bf3d9da8b02ef",
          "url": "https://github.com/equinor/ert/commit/ef647361ed57212136108d61f4e2e5e6909d0449"
        },
        "date": 1724246768096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1830888658708036,
            "unit": "iter/sec",
            "range": "stddev: 0.04449695302251617",
            "extra": "mean: 5.461828578400002 sec\nrounds: 5"
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
          "id": "20399448cc0ee2c23c2061dbfc773f57025a6861",
          "message": "Fix broken ert test_run\n\nThe commit 4013764 introduced a regression such that `ert test_run`\nwould fail on any configs that sets a queue system other than \"local\".\n\nThis was due to the function `create_local_copy()` not having been\nupdated to yield the correct QueueOptions object after refactoring.",
          "timestamp": "2024-08-22T08:46:35+02:00",
          "tree_id": "f4fe62d65796edf18fe8210274b2cf903a42bb01",
          "url": "https://github.com/equinor/ert/commit/20399448cc0ee2c23c2061dbfc773f57025a6861"
        },
        "date": 1724309344643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1884228711660813,
            "unit": "iter/sec",
            "range": "stddev: 0.03866829174565568",
            "extra": "mean: 5.307211347600003 sec\nrounds: 5"
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
          "id": "04d8d617b26282d31ebd0b0336f38bedf2489374",
          "message": "Add test for * in csv_export",
          "timestamp": "2024-08-22T11:19:27+02:00",
          "tree_id": "8e51e553135b1073f9822f19b441b50c7fcacedc",
          "url": "https://github.com/equinor/ert/commit/04d8d617b26282d31ebd0b0336f38bedf2489374"
        },
        "date": 1724318513121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19214753428567588,
            "unit": "iter/sec",
            "range": "stddev: 0.04486527948314862",
            "extra": "mean: 5.20433428259999 sec\nrounds: 5"
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
          "id": "3c36be5b2ef4dfc544aa30eec13b5b41e163c57b",
          "message": "Better handling of faulty Eclipse versions",
          "timestamp": "2024-08-22T13:02:21+03:00",
          "tree_id": "ae7667d753af3340343f60931d5392ef3b9fea9a",
          "url": "https://github.com/equinor/ert/commit/3c36be5b2ef4dfc544aa30eec13b5b41e163c57b"
        },
        "date": 1724321097473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19082271002961737,
            "unit": "iter/sec",
            "range": "stddev: 0.06117474612986903",
            "extra": "mean: 5.240466398599994 sec\nrounds: 5"
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
          "id": "9add0ee195f03b341acabe05d90821faf24670b3",
          "message": "Add pyrightconfig.json to gitignore\n\nDeleted ignores that are no longer needed\nTheir origin is described below\n\nFrom when we compiled python modules\n*.o # object files\n*.so # compiled libs\n/src/build\n/cmake.sh # script that ran cmake\n/dist\n/_skbuild # scikit-build folder\n.libs # created by libtool when compiling/linking\n/compile_commands.json # c/c++ compilation database\n\nCompiled python code. Could not find after pip installing with and\nwithout -e in clean repo\n*.pyc\n\nOld source code management tool\n.svn/\n*/.svn/\n\nVisual Studio files (not vs code)\n*.user\n*.user.*\n\nNot used any more\n/test-data/Equinor\n\nProtobuf files\n*_pb2.py\n*_pb2.pyi",
          "timestamp": "2024-08-22T12:26:13+02:00",
          "tree_id": "d6a927f008a5058a3d5945e1889c7b277448ead2",
          "url": "https://github.com/equinor/ert/commit/9add0ee195f03b341acabe05d90821faf24670b3"
        },
        "date": 1724322522996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18991101041852407,
            "unit": "iter/sec",
            "range": "stddev: 0.07548567987325172",
            "extra": "mean: 5.265624135200005 sec\nrounds: 5"
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
          "id": "fbfd095bd1018563d07ae73526cec562e918c4bd",
          "message": "Remove redudant experiment_id from ensemble",
          "timestamp": "2024-08-22T22:22:03+02:00",
          "tree_id": "264995c28865955cf767f2df4f5514c8ec5950fa",
          "url": "https://github.com/equinor/ert/commit/fbfd095bd1018563d07ae73526cec562e918c4bd"
        },
        "date": 1724358273426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1929940172681822,
            "unit": "iter/sec",
            "range": "stddev: 0.048453354323046746",
            "extra": "mean: 5.1815077697999925 sec\nrounds: 5"
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
          "id": "4f1d77b787a049c359f3346239e2e78fa0175af2",
          "message": "Fix eclipse version config validation on komodo tests",
          "timestamp": "2024-08-23T10:24:44+02:00",
          "tree_id": "b5dfb583cf6e652cf90decf1805e8f0bc78f7952",
          "url": "https://github.com/equinor/ert/commit/4f1d77b787a049c359f3346239e2e78fa0175af2"
        },
        "date": 1724401632210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.190475207573326,
            "unit": "iter/sec",
            "range": "stddev: 0.04054070964534557",
            "extra": "mean: 5.2500270914 sec\nrounds: 5"
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
          "id": "edb924ac1fb6d6e3716e7b710b3b9a102e9eff2a",
          "message": "Resolve typing errors in combobox_with_description",
          "timestamp": "2024-08-23T10:34:51+02:00",
          "tree_id": "2805b55b09546611896ca6f99d999ce4dc34c548",
          "url": "https://github.com/equinor/ert/commit/edb924ac1fb6d6e3716e7b710b3b9a102e9eff2a"
        },
        "date": 1724402233760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.191041872352289,
            "unit": "iter/sec",
            "range": "stddev: 0.042858979653875674",
            "extra": "mean: 5.234454560599988 sec\nrounds: 5"
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
          "id": "357dcef3ad39d4a9ef7b3f7c9ab107d0d9ca32fd",
          "message": "Remove unused infer iteration from rft csv export",
          "timestamp": "2024-08-23T12:25:34+02:00",
          "tree_id": "f7b8b689fff9f8f756760c0960539c6a0284b9ef",
          "url": "https://github.com/equinor/ert/commit/357dcef3ad39d4a9ef7b3f7c9ab107d0d9ca32fd"
        },
        "date": 1724408880834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19466536883483318,
            "unit": "iter/sec",
            "range": "stddev: 0.03897615889675194",
            "extra": "mean: 5.137020549599993 sec\nrounds: 5"
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
          "id": "065ab306df501cb4bfb45e8c2bfc3ea29148ecf0",
          "message": "Remove mark applied to a fixture\n\nThis never did anything and is now deprecated in pytest.\n\n$ pytest -sxv -W error\nImportError while loading conftest '/data/projects/ert/tests/conftest.py'.\ntests/conftest.py:213: in <module>\n    @pytest.fixture(\n/data/venv/311/lib64/python3.11/site-packages/_hypothesis_pytestplugin.py:442: in _ban_given_call\n    return _orig_call(self, function)\nE   pytest.PytestRemovedIn9Warning: Marks applied to fixtures have no effect\nE   See docs: https://docs.pytest.org/en/stable/deprecations.html#applying-a-mark-to-a-fixture-function",
          "timestamp": "2024-08-23T13:25:31+02:00",
          "tree_id": "243ec2878299016f586855e0068aed5261811672",
          "url": "https://github.com/equinor/ert/commit/065ab306df501cb4bfb45e8c2bfc3ea29148ecf0"
        },
        "date": 1724412474728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19434437809619284,
            "unit": "iter/sec",
            "range": "stddev: 0.03993206294543141",
            "extra": "mean: 5.145505158399999 sec\nrounds: 5"
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
          "id": "8b9694f6edc0c2aed90c72ebcd5974bf0219fd6a",
          "message": "Mute asserted warnings in schema deprecations\n\nSeemingly pytest also catches the warnings that warnings.catch_warnings() catch,\nso let us use pytest.warns instead. Otherwise these expected warnings are hard to\nmute.",
          "timestamp": "2024-08-23T13:27:03+02:00",
          "tree_id": "537a4dc24b6098e5e4ed20e14b17637e4e4e7911",
          "url": "https://github.com/equinor/ert/commit/8b9694f6edc0c2aed90c72ebcd5974bf0219fd6a"
        },
        "date": 1724412570017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19160433435911742,
            "unit": "iter/sec",
            "range": "stddev: 0.05289205546458976",
            "extra": "mean: 5.219088614799989 sec\nrounds: 5"
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
          "id": "31d3aa260ed19c96b40529618e56f66ea245ce4e",
          "message": "Do not run gui tests in parallel",
          "timestamp": "2024-08-23T14:01:00+02:00",
          "tree_id": "a8f9cc40b8f150bc7e3159d103cf945127407454",
          "url": "https://github.com/equinor/ert/commit/31d3aa260ed19c96b40529618e56f66ea245ce4e"
        },
        "date": 1724414611922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19243725145698523,
            "unit": "iter/sec",
            "range": "stddev: 0.06210454746643151",
            "extra": "mean: 5.196499079199986 sec\nrounds: 5"
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
          "id": "db9f1cd9c12b66dd10f1fac3d831f8d436009def",
          "message": "Change style for disabled simulation modes",
          "timestamp": "2024-08-26T09:26:36+02:00",
          "tree_id": "1430e7c6e5eec46fda0a984ac82166b22d41c4e2",
          "url": "https://github.com/equinor/ert/commit/db9f1cd9c12b66dd10f1fac3d831f8d436009def"
        },
        "date": 1724657343189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1919516696309861,
            "unit": "iter/sec",
            "range": "stddev: 0.048641524513337746",
            "extra": "mean: 5.20964470859999 sec\nrounds: 5"
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
          "id": "78c736f97c41ea9733004dcbf7e6c79960964ddf",
          "message": "Fix pytests argument in testkomodo",
          "timestamp": "2024-08-26T09:33:46+02:00",
          "tree_id": "ca1104445ab005d684ef89e91c006f450257bfaf",
          "url": "https://github.com/equinor/ert/commit/78c736f97c41ea9733004dcbf7e6c79960964ddf"
        },
        "date": 1724657768143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19115175866484677,
            "unit": "iter/sec",
            "range": "stddev: 0.04380803657501059",
            "extra": "mean: 5.231445459800011 sec\nrounds: 5"
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
          "id": "86c523598d1100cb091bda1a498b5b31286fb1ce",
          "message": "Add gendata output file for each report step to the output files manifest.",
          "timestamp": "2024-08-26T12:20:24+02:00",
          "tree_id": "010e9fd61dbc228ed8e53884c455f3d7a4206a52",
          "url": "https://github.com/equinor/ert/commit/86c523598d1100cb091bda1a498b5b31286fb1ce"
        },
        "date": 1724667774434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19413082101363383,
            "unit": "iter/sec",
            "range": "stddev: 0.04029767012125265",
            "extra": "mean: 5.151165563400002 sec\nrounds: 5"
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
          "id": "802c89786640d701549a7381af0562d0b68667b4",
          "message": "Mute possible warnings when randomly generating config files\n\nWe can't say upfront of the randomly generated config files will trigger\nConfigWarning, so mute all instead of doing pytest.warns.",
          "timestamp": "2024-08-26T14:48:16+02:00",
          "tree_id": "0227f413e5f18936302c9a146d6806baf7726b27",
          "url": "https://github.com/equinor/ert/commit/802c89786640d701549a7381af0562d0b68667b4"
        },
        "date": 1724676641326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18912422402967774,
            "unit": "iter/sec",
            "range": "stddev: 0.04609406521550082",
            "extra": "mean: 5.287529956199995 sec\nrounds: 5"
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
          "id": "4bbfd5c00899e8c3f9faca9bff264bad0e6b3af5",
          "message": "Use asyncio.Lock for forward_model_ok\n\nThis makes sure that we will not run more than 1 internalization job at a time.",
          "timestamp": "2024-08-26T16:12:07+02:00",
          "tree_id": "f5835ce6a6bf54b2ba329548be1a5312d8ec2a29",
          "url": "https://github.com/equinor/ert/commit/4bbfd5c00899e8c3f9faca9bff264bad0e6b3af5"
        },
        "date": 1724681677191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.192125815960646,
            "unit": "iter/sec",
            "range": "stddev: 0.03596978480103256",
            "extra": "mean: 5.204922591999997 sec\nrounds: 5"
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
          "id": "c6c77d185831eae8351d5bb683c427485a08a15d",
          "message": "Expose run information as env variables in the forward-model step environment",
          "timestamp": "2024-08-28T10:40:11+02:00",
          "tree_id": "a65290933b39edcfeb1977693b7dfbb833a50563",
          "url": "https://github.com/equinor/ert/commit/c6c77d185831eae8351d5bb683c427485a08a15d"
        },
        "date": 1724834562754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19571807942003977,
            "unit": "iter/sec",
            "range": "stddev: 0.03950920264409892",
            "extra": "mean: 5.109390011200003 sec\nrounds: 5"
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
          "id": "26d537642ccd35e1711e757ddd4b48303cc66ef0",
          "message": "Replace json with orjson\n\nstdlibs json is really slow.\nIt is especially noticable in _ert_forward_model_runner as the status file is\nupdated quite often.",
          "timestamp": "2024-08-28T15:43:15+02:00",
          "tree_id": "b9b20e99e597b3960529e86e5d59a8fe06988539",
          "url": "https://github.com/equinor/ert/commit/26d537642ccd35e1711e757ddd4b48303cc66ef0"
        },
        "date": 1724852751531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1906112857130125,
            "unit": "iter/sec",
            "range": "stddev: 0.07462418355309468",
            "extra": "mean: 5.24627907659999 sec\nrounds: 5"
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
          "id": "51f40c739b60dc8ca479fa1f3b4dbb46e7a7ed2d",
          "message": "Combine rss and oom_score checker in fm_runner\n\nCalling process.children is noticeably slow when the running quick\nforward model steps.\nCombined the two so that children only gets called once.",
          "timestamp": "2024-08-29T09:30:52+02:00",
          "tree_id": "460ea3615de64d712f001af9800c632137ced259",
          "url": "https://github.com/equinor/ert/commit/51f40c739b60dc8ca479fa1f3b4dbb46e7a7ed2d"
        },
        "date": 1724916801996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19319147184023888,
            "unit": "iter/sec",
            "range": "stddev: 0.034117845452463866",
            "extra": "mean: 5.1762119231999915 sec\nrounds: 5"
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
          "id": "3bbf85147c2a6271b9f915ac52809c6ce384c055",
          "message": "Fix test that could give false positive\n\nAdded the expected memory increase to the asserts in the test.\nWithout the increase the test would randomly pass due to variance in\nmemory used in each run even if we did not manage to read the rss of the\nprocess' grandchildren.",
          "timestamp": "2024-08-29T16:09:29+02:00",
          "tree_id": "fd3abb0555c6dc36bf41dda7f6e6584d59d9846d",
          "url": "https://github.com/equinor/ert/commit/3bbf85147c2a6271b9f915ac52809c6ce384c055"
        },
        "date": 1724940717122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18888197500102855,
            "unit": "iter/sec",
            "range": "stddev: 0.025456053523523578",
            "extra": "mean: 5.294311434399998 sec\nrounds: 5"
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
          "id": "24488753f27cab17336be634f8e31f58209dab5c",
          "message": "Remove children_list as it shadows children\n\nRemove unused RealStatusColorHint\nFix get_successful_realizations",
          "timestamp": "2024-08-29T22:09:23+02:00",
          "tree_id": "9415a5cea9b64921f5c9b2758ec507f26848d9fe",
          "url": "https://github.com/equinor/ert/commit/24488753f27cab17336be634f8e31f58209dab5c"
        },
        "date": 1724962319118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1887764592540372,
            "unit": "iter/sec",
            "range": "stddev: 0.24204838787617938",
            "extra": "mean: 5.297270665799999 sec\nrounds: 5"
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
          "id": "cc2f1a87cb9a4955be55213df3c39a9a0e59859e",
          "message": "Add get_experiment_by_name to storage\n\nExperiment names are unique and its easier to get by name than by uuid.\r\nAlso adding get_ensemble_by_name to experiment class because ensembles names\r\nare unique within an experiment.",
          "timestamp": "2024-08-30T09:41:34+02:00",
          "tree_id": "7aee0275ac5ced2fa089b8b62c7fb1d4de2733e5",
          "url": "https://github.com/equinor/ert/commit/cc2f1a87cb9a4955be55213df3c39a9a0e59859e"
        },
        "date": 1725003851576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1950281867970171,
            "unit": "iter/sec",
            "range": "stddev: 0.033610311756791376",
            "extra": "mean: 5.127463965200002 sec\nrounds: 5"
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
          "id": "09cdd6b536775b52347904a4d97fd090a29695fb",
          "message": "Migrate from websockets legacy functionality",
          "timestamp": "2024-08-30T11:56:06+02:00",
          "tree_id": "e483bdaabbc6b0887624c1f80fc5f78461e32b6e",
          "url": "https://github.com/equinor/ert/commit/09cdd6b536775b52347904a4d97fd090a29695fb"
        },
        "date": 1725011914989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19422496097940256,
            "unit": "iter/sec",
            "range": "stddev: 0.03465455722941815",
            "extra": "mean: 5.148668816599991 sec\nrounds: 5"
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
          "id": "f4ffb68e3bf0c4f645bb254d64f79b2143ee2d59",
          "message": "Create and provide asyncio.Lock directly in scheduler.execute\n\nTo make sure that the forward_model_ok_lock is assigned to the correct running loop, this creates and provide the lock to the job directly.",
          "timestamp": "2024-08-30T13:15:48+02:00",
          "tree_id": "1f9a156c4a300c1c2f0f74299f8b191844e1d9e3",
          "url": "https://github.com/equinor/ert/commit/f4ffb68e3bf0c4f645bb254d64f79b2143ee2d59"
        },
        "date": 1725016694296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19242727673468923,
            "unit": "iter/sec",
            "range": "stddev: 0.01360115239727486",
            "extra": "mean: 5.196768446600004 sec\nrounds: 5"
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
          "id": "e68b3be8adc927961d124ab193d6324dfc2a35b3",
          "message": "Change driver `retries` param to `total_attempts`",
          "timestamp": "2024-08-30T13:16:20+02:00",
          "tree_id": "4a7eca5a50413202f959b2b8b7530f208a31f7bf",
          "url": "https://github.com/equinor/ert/commit/e68b3be8adc927961d124ab193d6324dfc2a35b3"
        },
        "date": 1725016728582,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19064716788216976,
            "unit": "iter/sec",
            "range": "stddev: 0.03349155904741177",
            "extra": "mean: 5.245291661599998 sec\nrounds: 5"
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
          "id": "c158c6a660e5ff730b2dd9b344fef7119aa6c3af",
          "message": "Increase reruns for flaky test_repeated_submit_same_iens to 10",
          "timestamp": "2024-08-30T14:56:13+02:00",
          "tree_id": "1c1ea45846068dd72def370d45fe25c8677d9011",
          "url": "https://github.com/equinor/ert/commit/c158c6a660e5ff730b2dd9b344fef7119aa6c3af"
        },
        "date": 1725022718316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18941171870428314,
            "unit": "iter/sec",
            "range": "stddev: 0.037374244479541595",
            "extra": "mean: 5.279504387799989 sec\nrounds: 5"
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
          "id": "26b93a2a9299aee6d552c9f614550f62fae9b9a0",
          "message": "Use pydantic for messages sent over websockets\n\nThis replaces the cloudevents library we used before.\nThis was done both because cloudevents does not give any benefit to us\nand because the python cloudevents library is quite slow.",
          "timestamp": "2024-08-30T15:56:44+02:00",
          "tree_id": "febd025adb61c6188d02940802d35b21ffa18813",
          "url": "https://github.com/equinor/ert/commit/26b93a2a9299aee6d552c9f614550f62fae9b9a0"
        },
        "date": 1725026347516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19779383298362974,
            "unit": "iter/sec",
            "range": "stddev: 0.09753597187148991",
            "extra": "mean: 5.055769357999975 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}