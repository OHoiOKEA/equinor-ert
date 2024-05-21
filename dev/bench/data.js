window.BENCHMARK_DATA = {
  "lastUpdate": 1716291111092,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "parulek@gmail.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "committer": {
            "email": "jparu@equinor.com",
            "name": "Julius Parulek",
            "username": "xjules"
          },
          "distinct": true,
          "id": "9b2c5669697557e21f04926a15ef7a0d8118f4f2",
          "message": "Monitor track should exit without evaluator terminated message\n\n - Add explicit sentinel to stop receiver either when signalling cancel or done to EE\n - Test that monitor tracker can exit without the terminated event",
          "timestamp": "2024-05-08T23:55:13+02:00",
          "tree_id": "ab7a95c2c469612fef5a5a3bb5f01a932efd5eaf",
          "url": "https://github.com/equinor/ert/commit/9b2c5669697557e21f04926a15ef7a0d8118f4f2"
        },
        "date": 1715205503848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18722478064431528,
            "unit": "iter/sec",
            "range": "stddev: 0.06873507059059794",
            "extra": "mean: 5.341173302799985 sec\nrounds: 5"
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
          "id": "e55f0d35a3c80934ea993d140daec131c1e05433",
          "message": "Add a CSV logger for memory time profiling pr. realization\n\nLogs rss, oom_score and free memory on the compute side throughout the\ncourse of a forward model run into \"logs\" directory in runpath.\n\nrss is summed over all the subprocesses, and oom_score is max.",
          "timestamp": "2024-05-10T15:25:37+02:00",
          "tree_id": "d55e0aa9f8218eda259b25deaa0f1432a05e4fce",
          "url": "https://github.com/equinor/ert/commit/e55f0d35a3c80934ea993d140daec131c1e05433"
        },
        "date": 1715347744213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18913407431969803,
            "unit": "iter/sec",
            "range": "stddev: 0.02661190813535818",
            "extra": "mean: 5.287254576399993 sec\nrounds: 5"
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
          "id": "a451a46d8d96e225a83edff0aaadb800b6fbef8b",
          "message": "Pin xarray",
          "timestamp": "2024-05-13T09:39:20+02:00",
          "tree_id": "95551dfe13041fdb90f619df9e99a2a2bb370b23",
          "url": "https://github.com/equinor/ert/commit/a451a46d8d96e225a83edff0aaadb800b6fbef8b"
        },
        "date": 1715586153959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1932392881091307,
            "unit": "iter/sec",
            "range": "stddev: 0.025550184789223027",
            "extra": "mean: 5.174931090800004 sec\nrounds: 5"
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
          "id": "73ec3615f0b4b712b9c5c3e64547470b1e26d615",
          "message": "Migrate summary data as 32 bit float",
          "timestamp": "2024-05-13T09:50:06+02:00",
          "tree_id": "3c6f6322091eb97b057de97a8bc445561745ca70",
          "url": "https://github.com/equinor/ert/commit/73ec3615f0b4b712b9c5c3e64547470b1e26d615"
        },
        "date": 1715586792139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18747223439191846,
            "unit": "iter/sec",
            "range": "stddev: 0.011307503354466545",
            "extra": "mean: 5.33412322759998 sec\nrounds: 5"
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
          "id": "160077a0534c04a2a9aae192b44a9836863d73e0",
          "message": "Avoid (unlikely) chance of all success\n\nMake gui tests more predictable by avoiding a random chance of no\nrealizations failing where the tests expect at least one failure.",
          "timestamp": "2024-05-13T10:13:51+02:00",
          "tree_id": "5a7bf64c7b7b6bc595505ce3014550b0ca36a7c3",
          "url": "https://github.com/equinor/ert/commit/160077a0534c04a2a9aae192b44a9836863d73e0"
        },
        "date": 1715588227904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18918558184555617,
            "unit": "iter/sec",
            "range": "stddev: 0.04675555537103975",
            "extra": "mean: 5.285815072399975 sec\nrounds: 5"
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
          "id": "bd52a3785cfbc8e677e6834b86975c2ab3d2786f",
          "message": "Move mode definitions to separate module",
          "timestamp": "2024-05-13T12:08:06+02:00",
          "tree_id": "c1d73104b7075b8cef1df5b36c1cd1aeceb9b727",
          "url": "https://github.com/equinor/ert/commit/bd52a3785cfbc8e677e6834b86975c2ab3d2786f"
        },
        "date": 1715595073872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19019455256365195,
            "unit": "iter/sec",
            "range": "stddev: 0.03141349633314996",
            "extra": "mean: 5.257774139799994 sec\nrounds: 5"
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
          "id": "624224511be382ef68d868911679105e2bdab038",
          "message": "Log more from scheduler when killing jobs",
          "timestamp": "2024-05-13T13:48:29+02:00",
          "tree_id": "851fcd380811b0ac7a7f0a56ff9004f8084aa477",
          "url": "https://github.com/equinor/ert/commit/624224511be382ef68d868911679105e2bdab038"
        },
        "date": 1715601096878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18957605011872758,
            "unit": "iter/sec",
            "range": "stddev: 0.04401007260116538",
            "extra": "mean: 5.27492792139999 sec\nrounds: 5"
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
          "id": "2f77b62a54f71976f928106796578e3bdc40ee67",
          "message": "Deprecate LSF QUEUE_OPTION LSF_SERVER",
          "timestamp": "2024-05-13T13:58:38+02:00",
          "tree_id": "c632154aa105cdee701f83d35e4cac22de815851",
          "url": "https://github.com/equinor/ert/commit/2f77b62a54f71976f928106796578e3bdc40ee67"
        },
        "date": 1715601708086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19145075500237507,
            "unit": "iter/sec",
            "range": "stddev: 0.025240166167938474",
            "extra": "mean: 5.22327530120001 sec\nrounds: 5"
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
          "id": "a02d71d91e48b8df1ebdcf4326c3ad68f1a1a19a",
          "message": "Enable Scheduler for LSF Queue by default\n\n- Explicitly disable scheduler for job_queue test",
          "timestamp": "2024-05-13T15:56:29+02:00",
          "tree_id": "018900a552c6d66bbc1a528689709132f924aeec",
          "url": "https://github.com/equinor/ert/commit/a02d71d91e48b8df1ebdcf4326c3ad68f1a1a19a"
        },
        "date": 1715608789227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18692836079383596,
            "unit": "iter/sec",
            "range": "stddev: 0.04865654359230059",
            "extra": "mean: 5.349643016999994 sec\nrounds: 5"
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
          "id": "13975dbbc479a02262262c97cf3e4a8898e96958",
          "message": "Instruct LSF to dump stderr of submitted job to runpath\n\nThis information should not be lost, can be crucial for debugging",
          "timestamp": "2024-05-14T08:42:08+02:00",
          "tree_id": "be17ff96f67f71d460897e943885a2edc578760f",
          "url": "https://github.com/equinor/ert/commit/13975dbbc479a02262262c97cf3e4a8898e96958"
        },
        "date": 1715669130190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18445137077885237,
            "unit": "iter/sec",
            "range": "stddev: 0.041797717841137554",
            "extra": "mean: 5.421483157199998 sec\nrounds: 5"
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
          "id": "7cd3f71a922f3669e5f8bddb0ec2a0bc925ef9ac",
          "message": "Improve memory usage reporting in GUI\n\nThis commit improves memory usage reporting in GUI by:\n* Having RealizationDelegate be hoverable, and displaying usage in tooltip\n* Displaying current and maximum memory usage in status bar",
          "timestamp": "2024-05-14T09:12:05+02:00",
          "tree_id": "01f5a12c5c62e97d588540081bba5a409d0943fa",
          "url": "https://github.com/equinor/ert/commit/7cd3f71a922f3669e5f8bddb0ec2a0bc925ef9ac"
        },
        "date": 1715670919135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18891588894630865,
            "unit": "iter/sec",
            "range": "stddev: 0.03662457698694072",
            "extra": "mean: 5.293361006200001 sec\nrounds: 5"
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
          "id": "55bfd52fce41dbb97bdddbbfec545b6177b3e26f",
          "message": "Reduce flakiness in memory profiling\n\nSpending some extra time (increased from 0.4s to 2s test time) to allow for\nprofiling to happen.",
          "timestamp": "2024-05-14T09:57:50+02:00",
          "tree_id": "454f72638115b4278cadfb000658b2ea326fab63",
          "url": "https://github.com/equinor/ert/commit/55bfd52fce41dbb97bdddbbfec545b6177b3e26f"
        },
        "date": 1715673665111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19039457872127644,
            "unit": "iter/sec",
            "range": "stddev: 0.03592829270925797",
            "extra": "mean: 5.252250388200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "helena.formentin@gmail.com",
            "name": "hnformentin",
            "username": "hnformentin"
          },
          "committer": {
            "email": "44577479+oyvindeide@users.noreply.github.com",
            "name": "Øyvind Eide",
            "username": "oyvindeide"
          },
          "distinct": true,
          "id": "01dce18fafbf874f691938b3e6eb3ca343d937c5",
          "message": "Fix typos in release notes ert 9.0",
          "timestamp": "2024-05-14T10:26:19+02:00",
          "tree_id": "8e231d4fae19fbb4d40a1137a2e9b090af88c7d6",
          "url": "https://github.com/equinor/ert/commit/01dce18fafbf874f691938b3e6eb3ca343d937c5"
        },
        "date": 1715675391200,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18942983942674568,
            "unit": "iter/sec",
            "range": "stddev: 0.013677516461224243",
            "extra": "mean: 5.278999354199999 sec\nrounds: 5"
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
          "id": "6aa37981f3c8412b50beeec30f58451348047249",
          "message": "Remove unused current_case",
          "timestamp": "2024-05-14T10:42:59+02:00",
          "tree_id": "adaa8deeb1b2a6253e6328e93b026fd9c498ea51",
          "url": "https://github.com/equinor/ert/commit/6aa37981f3c8412b50beeec30f58451348047249"
        },
        "date": 1715676366542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18874641669967493,
            "unit": "iter/sec",
            "range": "stddev: 0.014733333377816373",
            "extra": "mean: 5.298113826399981 sec\nrounds: 5"
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
          "id": "faa45eb497a9c3ea746326663c878f50e3071343",
          "message": "Fix misleading logging statement\n\nThis log statement happens after all jobs have been stopped, so\nit should reflect what has happened correctly.",
          "timestamp": "2024-05-14T13:43:18+02:00",
          "tree_id": "9baaac857d3be5b2c07efe9cb427df5cb6793580",
          "url": "https://github.com/equinor/ert/commit/faa45eb497a9c3ea746326663c878f50e3071343"
        },
        "date": 1715687191691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1916722228834251,
            "unit": "iter/sec",
            "range": "stddev: 0.029061365637152645",
            "extra": "mean: 5.217240062000007 sec\nrounds: 5"
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
          "id": "338202e7e475452641e1f59df97738eb81194881",
          "message": "Trim jobs.json content",
          "timestamp": "2024-05-15T09:23:33+02:00",
          "tree_id": "cc72d39e4fd9478e1e151e1e1d82cb3fc0ccfbec",
          "url": "https://github.com/equinor/ert/commit/338202e7e475452641e1f59df97738eb81194881"
        },
        "date": 1715758000803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18917861489712168,
            "unit": "iter/sec",
            "range": "stddev: 0.059733031515944716",
            "extra": "mean: 5.286009734999993 sec\nrounds: 5"
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
          "id": "401d29f04aef827f27011482f42cf6c6a153e8fb",
          "message": "Open job error messages in dialog window",
          "timestamp": "2024-05-15T11:46:14+02:00",
          "tree_id": "148bacb29df460132fbb7502c573e57209508ccc",
          "url": "https://github.com/equinor/ert/commit/401d29f04aef827f27011482f42cf6c6a153e8fb"
        },
        "date": 1715766562659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18841397887034833,
            "unit": "iter/sec",
            "range": "stddev: 0.02957763518870939",
            "extra": "mean: 5.307461824200004 sec\nrounds: 5"
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
          "id": "f72e98c272cffb38c783f43f36d557a0404a972c",
          "message": "Unpin hypothesis",
          "timestamp": "2024-05-15T12:41:05+02:00",
          "tree_id": "901145bfaa47c26235c19d6b22af3271c4057143",
          "url": "https://github.com/equinor/ert/commit/f72e98c272cffb38c783f43f36d557a0404a972c"
        },
        "date": 1715769880006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18224879557437074,
            "unit": "iter/sec",
            "range": "stddev: 0.03858054248073091",
            "extra": "mean: 5.487004711600013 sec\nrounds: 5"
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
          "id": "46f3006e4c388541773630f9c0ea7db202c8385d",
          "message": "Make start and stop time more explicit",
          "timestamp": "2024-05-15T15:27:07+02:00",
          "tree_id": "92d864fe02ecbd1bfd4ce7b4975cc304cfca06e9",
          "url": "https://github.com/equinor/ert/commit/46f3006e4c388541773630f9c0ea7db202c8385d"
        },
        "date": 1715779827636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18762090312573856,
            "unit": "iter/sec",
            "range": "stddev: 0.031319306115182424",
            "extra": "mean: 5.329896527199992 sec\nrounds: 5"
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
          "id": "0937f010fffe85f4ccd6fcf0ca95cf526659741a",
          "message": "Fix crash when FIELD has no data",
          "timestamp": "2024-05-16T09:22:38+02:00",
          "tree_id": "023771323555e72d8470c9fd73395424fc0900ea",
          "url": "https://github.com/equinor/ert/commit/0937f010fffe85f4ccd6fcf0ca95cf526659741a"
        },
        "date": 1715844351541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18825824196280497,
            "unit": "iter/sec",
            "range": "stddev: 0.022562162599267698",
            "extra": "mean: 5.311852429799989 sec\nrounds: 5"
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
          "id": "010ac789ae7977b260f85bd25e65f93b1cb17920",
          "message": "Add a TransformFunctionDefinition dataclass",
          "timestamp": "2024-05-16T10:09:40+02:00",
          "tree_id": "62598a3a76bab65f63006087a028a9428b8a6ee7",
          "url": "https://github.com/equinor/ert/commit/010ac789ae7977b260f85bd25e65f93b1cb17920"
        },
        "date": 1715847176456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18995428813158893,
            "unit": "iter/sec",
            "range": "stddev: 0.04290379251026209",
            "extra": "mean: 5.264424456200009 sec\nrounds: 5"
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
          "id": "4bb652e71a0f14e0dd7b4b0c205750644c59b71c",
          "message": "Refactor gui node to use dataclasses\n\nThis commit refactors the nodes in GUI (RootNode, IterNode, RealNode,\nForwardModelNode) to use explicit dataclasses for each type instead of\nhaving the type as a field.",
          "timestamp": "2024-05-16T13:09:30+02:00",
          "tree_id": "1ca6e14b7289d93874d0d9e4e689184deea90836",
          "url": "https://github.com/equinor/ert/commit/4bb652e71a0f14e0dd7b4b0c205750644c59b71c"
        },
        "date": 1715857978631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18930264392742555,
            "unit": "iter/sec",
            "range": "stddev: 0.009197376536691797",
            "extra": "mean: 5.282546398999995 sec\nrounds: 5"
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
          "id": "4681ad78fdaee34f95cab3e34a3f8cfa80dc8869",
          "message": "Remove step_id from forward_model_runner Init message",
          "timestamp": "2024-05-16T13:56:22+02:00",
          "tree_id": "1e6fa64ad335fa478b2401d85d0e5a41339e9ec8",
          "url": "https://github.com/equinor/ert/commit/4681ad78fdaee34f95cab3e34a3f8cfa80dc8869"
        },
        "date": 1715860774316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1891421504616324,
            "unit": "iter/sec",
            "range": "stddev: 0.03901948365399913",
            "extra": "mean: 5.287028816999998 sec\nrounds: 5"
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
          "id": "0e4105900a6bfdae3f62794b7961bb4f934c3910",
          "message": "Remove stray print statement",
          "timestamp": "2024-05-16T16:33:41+02:00",
          "tree_id": "b4ad0f03401cee65832bddb4a5df033eed370a90",
          "url": "https://github.com/equinor/ert/commit/0e4105900a6bfdae3f62794b7961bb4f934c3910"
        },
        "date": 1715870208007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18886084696756925,
            "unit": "iter/sec",
            "range": "stddev: 0.03634952978487769",
            "extra": "mean: 5.294903713800022 sec\nrounds: 5"
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
          "id": "4f015a6d74550caffba3bd61b7fa45ad1a316247",
          "message": "Use correct plural form for zero\n\nIf there are no forward_model_steps, we should write '0 steps', not '0 step'",
          "timestamp": "2024-05-21T07:47:17+02:00",
          "tree_id": "0273974faca890b8c504a7e2c4ec9310b19abf28",
          "url": "https://github.com/equinor/ert/commit/4f015a6d74550caffba3bd61b7fa45ad1a316247"
        },
        "date": 1716270645822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18900721355276748,
            "unit": "iter/sec",
            "range": "stddev: 0.03241451570191564",
            "extra": "mean: 5.290803357200002 sec\nrounds: 5"
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
          "id": "72e5ea7a125754c695a98cfc9915cc70a1087bd9",
          "message": "Add version 10 highlights to release notes",
          "timestamp": "2024-05-21T08:34:42+02:00",
          "tree_id": "5fdfd93434960564e64193fafe70cce64ad12efb",
          "url": "https://github.com/equinor/ert/commit/72e5ea7a125754c695a98cfc9915cc70a1087bd9"
        },
        "date": 1716273469823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19117370998419744,
            "unit": "iter/sec",
            "range": "stddev: 0.012694467593841267",
            "extra": "mean: 5.23084476460001 sec\nrounds: 5"
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
          "id": "4a91161b6851a02e96be0f714c5b1def71788c73",
          "message": "Use private simulation arguments in base run model",
          "timestamp": "2024-05-21T08:53:51+02:00",
          "tree_id": "e406f0b2ae6936083be2e66bccc9d2476f6851df",
          "url": "https://github.com/equinor/ert/commit/4a91161b6851a02e96be0f714c5b1def71788c73"
        },
        "date": 1716274624864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1878654418856882,
            "unit": "iter/sec",
            "range": "stddev: 0.027993440949721504",
            "extra": "mean: 5.322958762200005 sec\nrounds: 5"
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
          "id": "536a5adf86900bdac12717f1e787f2b5b6a1daf8",
          "message": "Change order of data in update view",
          "timestamp": "2024-05-21T11:44:57+02:00",
          "tree_id": "f5fae5d67c227b15a3a6d76f81debb8e7e97afa7",
          "url": "https://github.com/equinor/ert/commit/536a5adf86900bdac12717f1e787f2b5b6a1daf8"
        },
        "date": 1716284902344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1886912033708599,
            "unit": "iter/sec",
            "range": "stddev: 0.06357072641641152",
            "extra": "mean: 5.299664118599992 sec\nrounds: 5"
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
          "id": "1e6c0fc58810d47872a87842f99fa49528ba3c44",
          "message": "Update config guide with more observations\n\nCo-authored-by: Øyvind Eide <44577479+oyvindeide@users.noreply.github.com>",
          "timestamp": "2024-05-21T12:12:20+02:00",
          "tree_id": "5b09f329672631f29a29732b548114539082474d",
          "url": "https://github.com/equinor/ert/commit/1e6c0fc58810d47872a87842f99fa49528ba3c44"
        },
        "date": 1716286538216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18367088530632653,
            "unit": "iter/sec",
            "range": "stddev: 0.03081320633187811",
            "extra": "mean: 5.4445210428 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hnfo@equinor.com",
            "name": "Helena Nandi Formentin",
            "username": "hnformentin"
          },
          "committer": {
            "email": "berland@pvv.ntnu.no",
            "name": "Håvard Berland",
            "username": "berland"
          },
          "distinct": true,
          "id": "9ecf5d2fac3be417d816c5fcbe9fa5c09f178a3e",
          "message": "Fix typo in AUTO_SCALE_OBSERVATIONS keyword documentation",
          "timestamp": "2024-05-21T13:28:42+02:00",
          "tree_id": "3d3d211b30185a9594ac666a16fde4ebd353a35a",
          "url": "https://github.com/equinor/ert/commit/9ecf5d2fac3be417d816c5fcbe9fa5c09f178a3e"
        },
        "date": 1716291110515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1859869908911458,
            "unit": "iter/sec",
            "range": "stddev: 0.019132612345426393",
            "extra": "mean: 5.3767201416000034 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}