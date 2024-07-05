window.BENCHMARK_DATA = {
  "lastUpdate": 1720168720688,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "2ce20800e12006202828c3e7e657c13fb96e0c6f",
          "message": "Add blue color and underscore to STDOUT and STDERR in job view",
          "timestamp": "2024-06-27T13:58:11+02:00",
          "tree_id": "585ff1dae84ea555c2a5e3b07aa43f296a1a8c22",
          "url": "https://github.com/equinor/ert/commit/2ce20800e12006202828c3e7e657c13fb96e0c6f"
        },
        "date": 1719489681638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16861260493384803,
            "unit": "iter/sec",
            "range": "stddev: 0.031629463909139524",
            "extra": "mean: 5.930754704799983 sec\nrounds: 5"
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
          "id": "ae913f7cf9da08c3632ea347f29e94bda53fa354",
          "message": "Add top-level exports for everest & semeio",
          "timestamp": "2024-06-28T08:36:33+02:00",
          "tree_id": "9ba318d5ad8550f81f7852504b3a0eadde2da384",
          "url": "https://github.com/equinor/ert/commit/ae913f7cf9da08c3632ea347f29e94bda53fa354"
        },
        "date": 1719556784227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1695841805230881,
            "unit": "iter/sec",
            "range": "stddev: 0.034855123510583806",
            "extra": "mean: 5.896776438199993 sec\nrounds: 5"
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
          "id": "4633f65c312c4558271436a42a53290c458219ab",
          "message": "Fix bug in LSF driver resource manipulation\n\nIf both select and rusage was part of the existing resource string,\nand some hosts were attempted excluded, the previous code would inject\nthe exclusion string at the wrong spot, failing to locate the correct\nend of the select statement.\n\nAdded tests that triggers the original bug.",
          "timestamp": "2024-06-28T09:02:04+02:00",
          "tree_id": "dbbd101945169baaf2e239db8c7eb56445d51bc0",
          "url": "https://github.com/equinor/ert/commit/4633f65c312c4558271436a42a53290c458219ab"
        },
        "date": 1719558312101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1689290982040032,
            "unit": "iter/sec",
            "range": "stddev: 0.04456094428427689",
            "extra": "mean: 5.919643274200007 sec\nrounds: 5"
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
          "id": "2193e75abd1f72a620f16d0edd73049dbda0c42c",
          "message": "Fix pydantic warning in snapshot test",
          "timestamp": "2024-06-28T09:39:51+02:00",
          "tree_id": "6f5f2f8d8313d9257c900af82301b8c6933c133d",
          "url": "https://github.com/equinor/ert/commit/2193e75abd1f72a620f16d0edd73049dbda0c42c"
        },
        "date": 1719560584858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16897790138611304,
            "unit": "iter/sec",
            "range": "stddev: 0.040274184331937836",
            "extra": "mean: 5.917933598399998 sec\nrounds: 5"
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
          "id": "b3b595022862b4131a2357053e307368ff507494",
          "message": "Align Slurm polling period with LSF, 2 seconds\n\n10 seconds is quite conservative, and makes integration tests go slow",
          "timestamp": "2024-06-28T12:34:31+02:00",
          "tree_id": "5de7fb223e6d944160b3e4543989c612d5b547a0",
          "url": "https://github.com/equinor/ert/commit/b3b595022862b4131a2357053e307368ff507494"
        },
        "date": 1719571062085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16495510740615596,
            "unit": "iter/sec",
            "range": "stddev: 0.01889182208777844",
            "extra": "mean: 6.062255456800005 sec\nrounds: 5"
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
          "id": "01edfa95385ba4420ba9f9116562cca242bf4224",
          "message": "Catch XML errors when logging error file\n\nIt is not critical that this ERROR file is valid XML, it just means the user\nparsing the log must decipher XML manually.",
          "timestamp": "2024-06-28T13:08:07+02:00",
          "tree_id": "ce3c63c4fa869f696e26dfb2b210b905d5f150f7",
          "url": "https://github.com/equinor/ert/commit/01edfa95385ba4420ba9f9116562cca242bf4224"
        },
        "date": 1719573068645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16367552078110428,
            "unit": "iter/sec",
            "range": "stddev: 0.0545871176727262",
            "extra": "mean: 6.109649110799995 sec\nrounds: 5"
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
          "id": "98c9b5dd84907f6413bed7472ccbf24ae56f1a3a",
          "message": "Ensure unique parameter & response names in test",
          "timestamp": "2024-06-28T13:45:59+02:00",
          "tree_id": "dbdc1fae74de5fa19029c7faa9ffcb0dbba63839",
          "url": "https://github.com/equinor/ert/commit/98c9b5dd84907f6413bed7472ccbf24ae56f1a3a"
        },
        "date": 1719575347519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16603960392818484,
            "unit": "iter/sec",
            "range": "stddev: 0.037562846534819276",
            "extra": "mean: 6.022659512199982 sec\nrounds: 5"
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
          "id": "892f91e327eabc5356689d51d11c6c21262924fd",
          "message": "Add validation for FIELD parameter name",
          "timestamp": "2024-06-28T14:39:59+02:00",
          "tree_id": "b274cbb0df34cba82c9c513f6f2b0a400cb2f63e",
          "url": "https://github.com/equinor/ert/commit/892f91e327eabc5356689d51d11c6c21262924fd"
        },
        "date": 1719578731654,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16587614934156575,
            "unit": "iter/sec",
            "range": "stddev: 0.02781107773699959",
            "extra": "mean: 6.028594249199978 sec\nrounds: 5"
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
          "id": "251537eb58f3fe4617b898f69456cd6c1d5a51f7",
          "message": "Make circles more antialiased and allow dark mode",
          "timestamp": "2024-06-28T14:54:10+02:00",
          "tree_id": "c45143d0059f7742e712d57e7ab97d44a965cb82",
          "url": "https://github.com/equinor/ert/commit/251537eb58f3fe4617b898f69456cd6c1d5a51f7"
        },
        "date": 1719579436131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.17198593127179168,
            "unit": "iter/sec",
            "range": "stddev: 0.015037742398529152",
            "extra": "mean: 5.814429079200011 sec\nrounds: 5"
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
          "id": "a9db74173eabd8b897129811f86048d02b48e478",
          "message": "Mitigate flakyness in test_slurm_driver\n\nThe flakyness was easily reproducible with --count=100 -n 16, but after\nadding reruns the flakyness cannot be reproduced, so assuming reruns is\nsufficient (this was with mocked Slurm system, not with the --slurm\noption to pytest).\n\nSince we have added reruns, we can reduce the job_kill_window when doing\nreal integration tests also.",
          "timestamp": "2024-06-28T15:12:40+02:00",
          "tree_id": "0bc5363297843636fa590bdae82709e1c939453b",
          "url": "https://github.com/equinor/ert/commit/a9db74173eabd8b897129811f86048d02b48e478"
        },
        "date": 1719580558921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16751443025067705,
            "unit": "iter/sec",
            "range": "stddev: 0.047306154960501064",
            "extra": "mean: 5.96963496520001 sec\nrounds: 5"
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
          "id": "3838267b629f9c0b0ff741bc72f967efa60886d3",
          "message": "Document auto scaling",
          "timestamp": "2024-07-01T08:23:37+02:00",
          "tree_id": "033875f7223eb1fa1dc7b8a867020c744c02b4ff",
          "url": "https://github.com/equinor/ert/commit/3838267b629f9c0b0ff741bc72f967efa60886d3"
        },
        "date": 1719815223761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16645086424194644,
            "unit": "iter/sec",
            "range": "stddev: 0.03370597068134903",
            "extra": "mean: 6.007778959599989 sec\nrounds: 5"
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
          "id": "f9dc451d9dc4348d36b99abfca11fd0470bb95cf",
          "message": "Add C4 and ASYNC to ruff rules\n\n- Also updates the pre-commit hooks",
          "timestamp": "2024-07-01T13:23:52+02:00",
          "tree_id": "b3e8de1957c51ef4189240678bd9e60ce88afb21",
          "url": "https://github.com/equinor/ert/commit/f9dc451d9dc4348d36b99abfca11fd0470bb95cf"
        },
        "date": 1719833228223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1686595672334705,
            "unit": "iter/sec",
            "range": "stddev: 0.01877289409120892",
            "extra": "mean: 5.929103319799992 sec\nrounds: 5"
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
          "id": "7c532dcd1d0a5f21087394d68aab67a338f9fe21",
          "message": "Output the number of reals running in existing runpaths",
          "timestamp": "2024-07-01T15:21:09+02:00",
          "tree_id": "71329b9795b9ab13ca717691e1150c97a4408a9c",
          "url": "https://github.com/equinor/ert/commit/7c532dcd1d0a5f21087394d68aab67a338f9fe21"
        },
        "date": 1719840267446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16862149072423022,
            "unit": "iter/sec",
            "range": "stddev: 0.03306761816989064",
            "extra": "mean: 5.930442173799998 sec\nrounds: 5"
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
          "id": "a22774ececbf2ab3edaa2065d3ea3f8d1562fec9",
          "message": "Make sure adaptive localization works with single observation\n\nMake sure adaptive localization works with single observation",
          "timestamp": "2024-07-02T08:29:08+02:00",
          "tree_id": "4dc04c12b3ced29d5200367c3a203655d3a1e0a8",
          "url": "https://github.com/equinor/ert/commit/a22774ececbf2ab3edaa2065d3ea3f8d1562fec9"
        },
        "date": 1719901934187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16925498171835124,
            "unit": "iter/sec",
            "range": "stddev: 0.05394041582656107",
            "extra": "mean: 5.908245594000005 sec\nrounds: 5"
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
          "id": "f529971b9dcaf19c7f786ffa3e39c5d4eebda853",
          "message": "Fix restart for ensemble experiment",
          "timestamp": "2024-07-02T10:08:52+02:00",
          "tree_id": "04ac9255656284347a6ef976a0f2121183cced59",
          "url": "https://github.com/equinor/ert/commit/f529971b9dcaf19c7f786ffa3e39c5d4eebda853"
        },
        "date": 1719907939909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.166826130398474,
            "unit": "iter/sec",
            "range": "stddev: 0.022699518320138504",
            "extra": "mean: 5.994264793000002 sec\nrounds: 5"
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
          "id": "3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5",
          "message": "Avoid imports from job_queue\n\njob_queue module is going away soon.",
          "timestamp": "2024-07-02T15:38:47+02:00",
          "tree_id": "90ec4d50078277140d8d81a08ea8d8c7f3569c65",
          "url": "https://github.com/equinor/ert/commit/3dfffc2cc22008e2cec0d31bb09a9dbd6e6768e5"
        },
        "date": 1719927731939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1715129349503157,
            "unit": "iter/sec",
            "range": "stddev: 0.028807641455352834",
            "extra": "mean: 5.8304640421999805 sec\nrounds: 5"
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
          "id": "939e661f6b4b011fd90c30d5da16cb379241af8e",
          "message": "Avoid unused varibles in test_slurm_driver",
          "timestamp": "2024-07-02T15:45:25+02:00",
          "tree_id": "68d011736ea73ccc0745764bd956e5624c298647",
          "url": "https://github.com/equinor/ert/commit/939e661f6b4b011fd90c30d5da16cb379241af8e"
        },
        "date": 1719928123785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16724514252789935,
            "unit": "iter/sec",
            "range": "stddev: 0.0430715670160223",
            "extra": "mean: 5.979246899999998 sec\nrounds: 5"
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
          "id": "b27fda40833a99645b47389a056d74b79020691c",
          "message": "Have ensemble evaluator methods return early instead of if-else",
          "timestamp": "2024-07-03T07:38:37+02:00",
          "tree_id": "281db1ed2d31f9fd81188188be3b78995a218cb3",
          "url": "https://github.com/equinor/ert/commit/b27fda40833a99645b47389a056d74b79020691c"
        },
        "date": 1719985327164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16738035552428426,
            "unit": "iter/sec",
            "range": "stddev: 0.055433575318829954",
            "extra": "mean: 5.9744167520000016 sec\nrounds: 5"
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
          "id": "41774aabdeda39c4f3215fbae5b668e4e99fc1ea",
          "message": "Remove validator for ensemble name",
          "timestamp": "2024-07-03T09:45:39+02:00",
          "tree_id": "62cb2d6b8f73e2ecd05ac715684604896c6cb777",
          "url": "https://github.com/equinor/ert/commit/41774aabdeda39c4f3215fbae5b668e4e99fc1ea"
        },
        "date": 1719992939201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16443150395445866,
            "unit": "iter/sec",
            "range": "stddev: 0.0411642085969246",
            "extra": "mean: 6.081559652199997 sec\nrounds: 5"
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
          "id": "5105f4a1fa315b15aefe850c1246ebf9a88ae458",
          "message": "Revert \"Add validation for FIELD parameter name\"\n\nThis reverts commit 892f91e327eabc5356689d51d11c6c21262924fd.\r\n\r\nNot everyone is using Eclipse.\r\nFor example, Intersert does not have a limitation of 8 characters.",
          "timestamp": "2024-07-03T10:02:54+02:00",
          "tree_id": "a10ad1bfdba005d214bbaef5c1e1049ade68b86e",
          "url": "https://github.com/equinor/ert/commit/5105f4a1fa315b15aefe850c1246ebf9a88ae458"
        },
        "date": 1719993965690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.16317157895556283,
            "unit": "iter/sec",
            "range": "stddev: 0.03577879132714757",
            "extra": "mean: 6.128518253000015 sec\nrounds: 5"
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
          "id": "225bd6df2b27fab16dc15b0fe8ab5be3226c9028",
          "message": "Revert combine datasets\n\nThis is being reverted because the checking of the state takes\ntoo long, causing the start up time for ert to become too slow.\n\nThis blocks stable releases, so will be reverted to unblock that,\nand can be reinstated at a later time.\n\nThis revert commit will slow down the plotting significantly, as\nthat was the main benefit of having unified datasets.",
          "timestamp": "2024-07-03T11:35:08+02:00",
          "tree_id": "ebc6de162547a05e3f4b5c3d21cc7c3df36a1903",
          "url": "https://github.com/equinor/ert/commit/225bd6df2b27fab16dc15b0fe8ab5be3226c9028"
        },
        "date": 1719999500056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1860367105425329,
            "unit": "iter/sec",
            "range": "stddev: 0.04225792375605515",
            "extra": "mean: 5.375283174399999 sec\nrounds: 5"
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
          "id": "0529b5ca0ba1b88e7cd7dcdd35c2fa1cb31c6845",
          "message": "Simplify Snapshot model\n\n* Remove unused memory variables\r\n* Remove concept JOB\r\n* Remove NodeTypes and reduce COLUMN\r\n* Remove sorted_forward_model_step_ids_by_realization_id\r\n* Remove sorted_realization_ids\r\n* Combine RootNodeData with RootNode\r\n* Remove meaningless emit\r\n* Only redraw altered realizations in the view\r\n* Fix incorrect inheritance in _Node for data\r\n* Remove unused code from row() and deduplicate\r\n* Simplify add_child in _Node\r\n\r\nCo-authored-by: Jon Holba <jholba@equinor.com>",
          "timestamp": "2024-07-03T12:22:11+02:00",
          "tree_id": "519b2a3ee72dd04c9c01e694a72c0e1c90389807",
          "url": "https://github.com/equinor/ert/commit/0529b5ca0ba1b88e7cd7dcdd35c2fa1cb31c6845"
        },
        "date": 1720002319412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18473240207883856,
            "unit": "iter/sec",
            "range": "stddev: 0.032696424716454696",
            "extra": "mean: 5.413235516599997 sec\nrounds: 5"
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
          "id": "3d4a430ea43b1d6a3711822b8f591ce7e1247024",
          "message": "Add PROJECT_CODE to queue options when jobs forward model contain known simulators\n\nAdd PROJECT_CODE support for LSF,OpenPBS and TORQUE Drivers.",
          "timestamp": "2024-07-03T13:02:10+02:00",
          "tree_id": "f075fe1094e423979ffac7f9a3764a4aaeab7ca9",
          "url": "https://github.com/equinor/ert/commit/3d4a430ea43b1d6a3711822b8f591ce7e1247024"
        },
        "date": 1720004710133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18694151235335668,
            "unit": "iter/sec",
            "range": "stddev: 0.020851279125997997",
            "extra": "mean: 5.349266663199989 sec\nrounds: 5"
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
          "id": "ab33f3d47e7be3e3433b307fb5bd602de1305c76",
          "message": "Remove unused dependencies\n\n-beartype\n-deprecated\n-sortedcontainers",
          "timestamp": "2024-07-03T15:33:49+02:00",
          "tree_id": "a161d5d5fc53e529799ef78be393f4216b2e05e7",
          "url": "https://github.com/equinor/ert/commit/ab33f3d47e7be3e3433b307fb5bd602de1305c76"
        },
        "date": 1720013814567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1877076502412766,
            "unit": "iter/sec",
            "range": "stddev: 0.01627305559063679",
            "extra": "mean: 5.327433371600011 sec\nrounds: 5"
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
          "id": "6be9385517e08fcad77868c56f6454493f3b351b",
          "message": "Avoid false positive ruff issue by noqa\n\n__setattr__ should be used here as variable_name is an incoming parameter",
          "timestamp": "2024-07-03T16:21:23+02:00",
          "tree_id": "e09a4f176c273f3096a11b80e2b26f2f47c89f71",
          "url": "https://github.com/equinor/ert/commit/6be9385517e08fcad77868c56f6454493f3b351b"
        },
        "date": 1720016675513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1861735039312572,
            "unit": "iter/sec",
            "range": "stddev: 0.026040568414246183",
            "extra": "mean: 5.371333615599997 sec\nrounds: 5"
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
          "id": "c8d52b98da4959a8e09fd8abb40a2e4091b1a994",
          "message": "Allow adjustable size for job overview header",
          "timestamp": "2024-07-04T09:02:56+02:00",
          "tree_id": "e2503c057eb0a4b49d1474697a210dad66acbe4e",
          "url": "https://github.com/equinor/ert/commit/c8d52b98da4959a8e09fd8abb40a2e4091b1a994"
        },
        "date": 1720076797439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1820534530373093,
            "unit": "iter/sec",
            "range": "stddev: 0.10137371064473158",
            "extra": "mean: 5.492892242999995 sec\nrounds: 5"
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
          "id": "fe09197b5a992466b382b134ef8ad22a9b6de2f7",
          "message": "Show ert filename in eventviewer windowtitle",
          "timestamp": "2024-07-04T09:10:41+02:00",
          "tree_id": "e09faa4b8caf3b61100486610d256edf7b1b1a25",
          "url": "https://github.com/equinor/ert/commit/fe09197b5a992466b382b134ef8ad22a9b6de2f7"
        },
        "date": 1720077226017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18398053323113567,
            "unit": "iter/sec",
            "range": "stddev: 0.042840876429896806",
            "extra": "mean: 5.435357656799999 sec\nrounds: 5"
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
          "id": "153d739de1d5dd12818303396291e4d86ae47e4c",
          "message": "Fix small GUI error in create_experiment",
          "timestamp": "2024-07-04T09:39:29+02:00",
          "tree_id": "a6ac640fbac2d203766d2ecaccee9d354afa2e86",
          "url": "https://github.com/equinor/ert/commit/153d739de1d5dd12818303396291e4d86ae47e4c"
        },
        "date": 1720078957129,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18962272982629164,
            "unit": "iter/sec",
            "range": "stddev: 0.022858283825285968",
            "extra": "mean: 5.273629384600008 sec\nrounds: 5"
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
          "id": "bbabc28acbd46abd7401477bccb31b9fa42bdcb1",
          "message": "Fix the 'initialize from scratch' tab",
          "timestamp": "2024-07-04T10:09:48+02:00",
          "tree_id": "678c943f711f72e359d186a55ff480f71bb3da88",
          "url": "https://github.com/equinor/ert/commit/bbabc28acbd46abd7401477bccb31b9fa42bdcb1"
        },
        "date": 1720080789553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1882308279253752,
            "unit": "iter/sec",
            "range": "stddev: 0.01494027174517906",
            "extra": "mean: 5.312626050799997 sec\nrounds: 5"
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
          "id": "665a2558e14719b66502944f3729e61f32f52e92",
          "message": "Fix color selection in plotter (#8302)\n\n* Fix saving of observation alpha in plot\r\n\r\n* Fix saving of ensemble alpha in plot",
          "timestamp": "2024-07-05T10:35:28+02:00",
          "tree_id": "50c24809555a33d92fa48f905fb3b44a0cdf362f",
          "url": "https://github.com/equinor/ert/commit/665a2558e14719b66502944f3729e61f32f52e92"
        },
        "date": 1720168719797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18821527810216698,
            "unit": "iter/sec",
            "range": "stddev: 0.051157267040871306",
            "extra": "mean: 5.31306496520001 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}