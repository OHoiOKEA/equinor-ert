window.BENCHMARK_DATA = {
  "lastUpdate": 1706007843724,
  "repoUrl": "https://github.com/equinor/ert",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
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
          "id": "241a9db16d045bd6642dc8b3c116f2c4d03d293d",
          "message": "Add scheduler logs to jobqeue_file handler",
          "timestamp": "2024-01-09T15:12:00+01:00",
          "tree_id": "a0af922bd2d121da3098f37e9e89bffaa75bb93d",
          "url": "https://github.com/equinor/ert/commit/241a9db16d045bd6642dc8b3c116f2c4d03d293d"
        },
        "date": 1704809701788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.091560658358257,
            "unit": "iter/sec",
            "range": "stddev: 0.029999220679694825",
            "extra": "mean: 164.1615435000053 msec\nrounds: 6"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jholba@equinor.com",
            "name": "Jon Holba"
          },
          "committer": {
            "email": "jon.holba@gmail.com",
            "name": "Jon Holba",
            "username": "JHolba"
          },
          "distinct": true,
          "id": "881a350c2fef60983a1042309d82ad39aeac8178",
          "message": "Allow feature toggling from environment variables\n\nadd possibility for optional toggles",
          "timestamp": "2024-01-09T21:36:47+01:00",
          "tree_id": "4fe9d568355fa3b86c93d0b565c9cc15845daa5d",
          "url": "https://github.com/equinor/ert/commit/881a350c2fef60983a1042309d82ad39aeac8178"
        },
        "date": 1704832763501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.038990737659192,
            "unit": "iter/sec",
            "range": "stddev: 0.033412894441354216",
            "extra": "mean: 165.5905834999866 msec\nrounds: 6"
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
          "id": "86d4550e8b3a9c0f0a4f59d5632f0ae0c3447e6b",
          "message": "Upload coverage for doctests",
          "timestamp": "2024-01-10T08:16:31+01:00",
          "tree_id": "b333cea37561591a568a8e0d368ce57d511b2aa0",
          "url": "https://github.com/equinor/ert/commit/86d4550e8b3a9c0f0a4f59d5632f0ae0c3447e6b"
        },
        "date": 1704871140156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 5.879516794851588,
            "unit": "iter/sec",
            "range": "stddev: 0.043641340672242346",
            "extra": "mean: 170.08200416667782 msec\nrounds: 6"
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
          "id": "18ac76c803dafa3a6ed75c47584a5646b682ac0c",
          "message": "Added tests for missing keywords",
          "timestamp": "2024-01-10T12:28:45+01:00",
          "tree_id": "8727548ec0c751f770c8955b807f6a8922f785ae",
          "url": "https://github.com/equinor/ert/commit/18ac76c803dafa3a6ed75c47584a5646b682ac0c"
        },
        "date": 1704886295453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.136811253284065,
            "unit": "iter/sec",
            "range": "stddev: 0.03159115898751113",
            "extra": "mean: 162.95107650000773 msec\nrounds: 6"
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
          "id": "df1ca32db784004dbb78f8ab9abc337bdb446975",
          "message": "Remove unused queue.stop_jobs and rename JobQueue.stop_jobs_async -> JobQueue.stop_jobs",
          "timestamp": "2024-01-10T13:34:18+01:00",
          "tree_id": "8181e2b12b8d38187edb355cb7995d008bab6c88",
          "url": "https://github.com/equinor/ert/commit/df1ca32db784004dbb78f8ab9abc337bdb446975"
        },
        "date": 1704890239646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 5.960678506617569,
            "unit": "iter/sec",
            "range": "stddev: 0.03364176252034566",
            "extra": "mean: 167.7661358333277 msec\nrounds: 6"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f27f7f88c9824763232c2e7ced151f6fd8bbfbfe",
          "message": "Ensure consistent log levels in integration tests (#6922)\n\nSome tests were moved from unit_tests to integration_tests in /a810eb0f8715e182d4e1b1dc1636356b97023711\r\nthat depend on log level details. This dependency was not triggered in Github actions workflows\r\nbut in komodo bleeding nightly tests.",
          "timestamp": "2024-01-10T14:28:43Z",
          "tree_id": "d1dd3232f8bb2e1af899d79cd4476bf859c15a23",
          "url": "https://github.com/equinor/ert/commit/f27f7f88c9824763232c2e7ced151f6fd8bbfbfe"
        },
        "date": 1704897070178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.736996998894375,
            "unit": "iter/sec",
            "range": "stddev: 0.002362116927727187",
            "extra": "mean: 148.43408719999616 msec\nrounds: 5"
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
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "a1fce20ada3601a6d6607a61d6178b8ac525aca0",
          "message": "Set max items in benchmark chart",
          "timestamp": "2024-01-11T09:52:47+01:00",
          "tree_id": "44a3275246a085156783c39cb1d83905a422a9cb",
          "url": "https://github.com/equinor/ert/commit/a1fce20ada3601a6d6607a61d6178b8ac525aca0"
        },
        "date": 1704963317289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.032876152560895,
            "unit": "iter/sec",
            "range": "stddev: 0.03535538852803025",
            "extra": "mean: 165.7584168333225 msec\nrounds: 6"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e6897fe66a454afb64b7d9dcac0baf62380661f",
          "message": "Set default max_submit to 1 in tests (#6925)\n\nThere is no reason to have it as large as 100 by default and in bad\r\nsituations it could cause excessive test runtimes.",
          "timestamp": "2024-01-11T12:03:11+01:00",
          "tree_id": "9058654f474916a927f9749a0fc770f7783cb6ca",
          "url": "https://github.com/equinor/ert/commit/7e6897fe66a454afb64b7d9dcac0baf62380661f"
        },
        "date": 1704971152517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.113467740278685,
            "unit": "iter/sec",
            "range": "stddev: 0.03231132304133917",
            "extra": "mean: 163.57328483333333 msec\nrounds: 6"
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
          "id": "dd3a01de078e91dbda15e9d39c68f22a61f1ffb6",
          "message": "Move loggin msg to Scheduler when cancelling",
          "timestamp": "2024-01-11T12:04:12+01:00",
          "tree_id": "f9f338d7d41e8cae64e75bbd375423096c59ab75",
          "url": "https://github.com/equinor/ert/commit/dd3a01de078e91dbda15e9d39c68f22a61f1ffb6"
        },
        "date": 1704971210348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.038237616729065,
            "unit": "iter/sec",
            "range": "stddev: 0.036077801837768375",
            "extra": "mean: 165.6112368333235 msec\nrounds: 6"
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
          "id": "f687bbad1a029a1be675885817ab29d618ebf9db",
          "message": "Cancel correctly tasks from sync context in Scheduler\n\nWhen stopping the executing from ee, which runs in another thread, we need to use the correct loop\nwhen cancelling the job tasks. Further, we just signal to cancel therefore we don't need to await\nfor the tasks to finish. This is handled in the Scheduler.execute - asyncio.gather.\n\nThere two functions (kill_all_jobs and cancel_all_jobs) to cancel the tasks in the Scheduler. kill_all_jobs is meant to be used from sync context.",
          "timestamp": "2024-01-12T13:44:47+01:00",
          "tree_id": "62bb8cfbb5d9d3920511e4b73be0bbbd3f9f86e1",
          "url": "https://github.com/equinor/ert/commit/f687bbad1a029a1be675885817ab29d618ebf9db"
        },
        "date": 1705063650251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.614316614231362,
            "unit": "iter/sec",
            "range": "stddev: 0.0017013985557833187",
            "extra": "mean: 151.18719866666197 msec\nrounds: 6"
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
          "id": "0f93287ada2351cb0dfd3a105e4346b6ea01ab94",
          "message": "Fix bug where other parameters than GenKw would fail ert",
          "timestamp": "2024-01-12T14:51:05+01:00",
          "tree_id": "629778162d73fd748100d7d98e16c9f8929748cc",
          "url": "https://github.com/equinor/ert/commit/0f93287ada2351cb0dfd3a105e4346b6ea01ab94"
        },
        "date": 1705067622305,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.598519815415804,
            "unit": "iter/sec",
            "range": "stddev: 0.002386032979786403",
            "extra": "mean: 151.54913950000548 msec\nrounds: 6"
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
          "id": "bb5fa0d66c888fa015ea61d3d4f3d773dabbf56f",
          "message": "Use rangestring_to_list instead of IntVector",
          "timestamp": "2024-01-12T15:23:26+01:00",
          "tree_id": "c65cc4e51c0ebdfe6f97e45e7009b60d45bb6c1a",
          "url": "https://github.com/equinor/ert/commit/bb5fa0d66c888fa015ea61d3d4f3d773dabbf56f"
        },
        "date": 1705069561661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.60546775652208,
            "unit": "iter/sec",
            "range": "stddev: 0.002477576643803553",
            "extra": "mean: 151.38973300000202 msec\nrounds: 6"
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
          "id": "17426909b0c57d7beac907b8c8a9c8db24fe9481",
          "message": "Use resfo instead of eclsum for run_ecl\n\nThis avoids critical failures from resdata propagating to the user.",
          "timestamp": "2024-01-12T15:23:11+01:00",
          "tree_id": "060e9ca88dcaf257d6cafce8104f29bbe60e80ca",
          "url": "https://github.com/equinor/ert/commit/17426909b0c57d7beac907b8c8a9c8db24fe9481"
        },
        "date": 1705069562621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.641475035299548,
            "unit": "iter/sec",
            "range": "stddev: 0.002555100261530855",
            "extra": "mean: 150.56896166664538 msec\nrounds: 6"
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
          "id": "3db8f4efe0313326df270abac86fe9e416823acf",
          "message": "Fix ecl_run eclipse tests",
          "timestamp": "2024-01-14T12:07:19+01:00",
          "tree_id": "16fb7bba44a35ea773c34d45b88052cc4efb0281",
          "url": "https://github.com/equinor/ert/commit/3db8f4efe0313326df270abac86fe9e416823acf"
        },
        "date": 1705230590237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.621007945745749,
            "unit": "iter/sec",
            "range": "stddev: 0.0030571618030448898",
            "extra": "mean: 151.03440566666868 msec\nrounds: 6"
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
          "id": "7ef6fd6c628bb10954485d6368affb0e871b37e5",
          "message": "Extend license retry to more error messages",
          "timestamp": "2024-01-15T09:02:21+01:00",
          "tree_id": "79f484b2302c8ed7310a2871fa91207acac64d47",
          "url": "https://github.com/equinor/ert/commit/7ef6fd6c628bb10954485d6368affb0e871b37e5"
        },
        "date": 1705305885465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.57400713181161,
            "unit": "iter/sec",
            "range": "stddev: 0.003128542102445433",
            "extra": "mean: 152.11422500000063 msec\nrounds: 6"
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
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "adf59e896075536f18cee1d6492cf56ded2539e6",
          "message": "Set lower-bound of iterative_ensemble_smoother",
          "timestamp": "2024-01-17T08:57:37+01:00",
          "tree_id": "f3c7a76e7dfbabe3fe4cc8c28d12d368f35cad3c",
          "url": "https://github.com/equinor/ert/commit/adf59e896075536f18cee1d6492cf56ded2539e6"
        },
        "date": 1705478402688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.64586022395125,
            "unit": "iter/sec",
            "range": "stddev: 0.002170377045215055",
            "extra": "mean: 150.469610600004 msec\nrounds: 5"
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
          "id": "8a6fc5ff9bb0e2cf419d80fe8723add6ee4d19f4",
          "message": "Use read_summary for refcase\n\nEnsures consistent naming of summary keys. This also fixes an issue\nwhere history keys were not handled correctly: e.g.\n\nthe history key of \"BOPR:1,1,3\" was before interpreted to be\n\"BOPR:1,1,3H\" but is now interpreted as \"BOPRH:1,1,3\".\n\nWhether that always makes sense in all simulators is not confirmed, but\nit \"BOPR:1,1,3H\" is guaranteed to not be found in the summary file. The\nkeys that did work correctly before, FIELD, OTHER, GROUP and WELL still\nworks correctly.",
          "timestamp": "2024-01-17T10:36:28+01:00",
          "tree_id": "4eb334b4e9c27fe199f96201089049417cdb82ff",
          "url": "https://github.com/equinor/ert/commit/8a6fc5ff9bb0e2cf419d80fe8723add6ee4d19f4"
        },
        "date": 1705484336493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.693489200349651,
            "unit": "iter/sec",
            "range": "stddev: 0.005149431104478457",
            "extra": "mean: 149.39891140001578 msec\nrounds: 5"
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
          "id": "91ea3633038762878bff47222162dc6b9aa6ceeb",
          "message": "Improve plotting performance",
          "timestamp": "2024-01-18T08:54:20+01:00",
          "tree_id": "ac0b76c5e7b9866bc195d3f3e6cd05e21a834fc2",
          "url": "https://github.com/equinor/ert/commit/91ea3633038762878bff47222162dc6b9aa6ceeb"
        },
        "date": 1705564607846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.759337453527884,
            "unit": "iter/sec",
            "range": "stddev: 0.002240827460519864",
            "extra": "mean: 147.94349400000328 msec\nrounds: 5"
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
          "id": "ba54b66c91d407bb41ef4a0533bdb4f86fb90ed9",
          "message": "Provide more descriptive feedback on USE_EE and USE_GE\n\nCollect errors before raising them together",
          "timestamp": "2024-01-18T16:30:36+01:00",
          "tree_id": "c01091d041d2da574077b5e8f410aeda77419fa1",
          "url": "https://github.com/equinor/ert/commit/ba54b66c91d407bb41ef4a0533bdb4f86fb90ed9"
        },
        "date": 1705591992670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.652320352422409,
            "unit": "iter/sec",
            "range": "stddev: 0.00295262134103806",
            "extra": "mean: 150.32348820000152 msec\nrounds: 5"
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
          "id": "f367789493dec64d5f530861c02026815086c894",
          "message": "Fix summary_keys generator",
          "timestamp": "2024-01-19T07:30:17+01:00",
          "tree_id": "bcb3b493489319c8115fb0c71bdd556fcb373d42",
          "url": "https://github.com/equinor/ert/commit/f367789493dec64d5f530861c02026815086c894"
        },
        "date": 1705645972408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.6747049693637255,
            "unit": "iter/sec",
            "range": "stddev: 0.0018697825168331522",
            "extra": "mean: 149.81935599998906 msec\nrounds: 5"
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
          "id": "c945790f77e743fd717fa64b3a28df72b6c6c68a",
          "message": "Refactor transfer functions test",
          "timestamp": "2024-01-19T09:23:04+01:00",
          "tree_id": "63b8ade52413ed037839a97a63e7d5666adc9c7b",
          "url": "https://github.com/equinor/ert/commit/c945790f77e743fd717fa64b3a28df72b6c6c68a"
        },
        "date": 1705652733558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.348918354207445,
            "unit": "iter/sec",
            "range": "stddev: 0.010161119407034342",
            "extra": "mean: 157.50714440000593 msec\nrounds: 5"
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
          "id": "871a0b4ab277abb29da89c41fa794018bcca7a9a",
          "message": "Fix dark storage performance benchmark workflow trigger (#6971)",
          "timestamp": "2024-01-19T11:15:41Z",
          "tree_id": "77a58924323754bed877de768a6cfdb3a3eef055",
          "url": "https://github.com/equinor/ert/commit/871a0b4ab277abb29da89c41fa794018bcca7a9a"
        },
        "date": 1705663105027,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.680922597463627,
            "unit": "iter/sec",
            "range": "stddev: 0.001978600272888562",
            "extra": "mean: 149.67992599998752 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "326c498d94089371e87472d98ae70f2d2e716564",
          "message": "Support submit sleep in scheduler (#6858)\n\nSupport submit_sleep in Scheduler\r\n\r\nNotes:\r\n* The test setup possibly allows flakyness\r\n* Picks SUBMIT_SLEEP from queue system configuration,\r\n  but leans towards a future global setting for SUBMIT_SLEEP.",
          "timestamp": "2024-01-19T12:36:12+01:00",
          "tree_id": "a7cca560836a83c1b7a754bcae4dc99857779050",
          "url": "https://github.com/equinor/ert/commit/326c498d94089371e87472d98ae70f2d2e716564"
        },
        "date": 1705664326276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.639284901319427,
            "unit": "iter/sec",
            "range": "stddev: 0.0018467943508256963",
            "extra": "mean: 150.61863060000178 msec\nrounds: 5"
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
          "id": "bfb7547b9a8f729426ba25471df68005bbbcbf0d",
          "message": "Set minimum suggestor width to no more than two ui-cards",
          "timestamp": "2024-01-19T13:53:49+01:00",
          "tree_id": "dfb9a57ba92903490daa65bdc9457f0cd21dade9",
          "url": "https://github.com/equinor/ert/commit/bfb7547b9a8f729426ba25471df68005bbbcbf0d"
        },
        "date": 1705668978989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.623896265630246,
            "unit": "iter/sec",
            "range": "stddev: 0.005638010839889703",
            "extra": "mean: 150.96854779999376 msec\nrounds: 5"
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
          "id": "c475601d3d1ca9160e7dd7eea58991ede009be7c",
          "message": "Rem. duplicit line",
          "timestamp": "2024-01-19T14:47:29+01:00",
          "tree_id": "43eb949c687dab2f1fd211d07e266440554fdf7e",
          "url": "https://github.com/equinor/ert/commit/c475601d3d1ca9160e7dd7eea58991ede009be7c"
        },
        "date": 1705672192577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.714459986943197,
            "unit": "iter/sec",
            "range": "stddev: 0.002469054114971495",
            "extra": "mean: 148.9323046000095 msec\nrounds: 5"
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
          "id": "48b4ecd38e3fb6ec750078e2b0fa81c324464849",
          "message": "Remove redudant while loop",
          "timestamp": "2024-01-19T14:52:15+01:00",
          "tree_id": "a3f04fd648b72a6c7e3c0769ef83c2f580a1ad9e",
          "url": "https://github.com/equinor/ert/commit/48b4ecd38e3fb6ec750078e2b0fa81c324464849"
        },
        "date": 1705672479962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.7219642693819806,
            "unit": "iter/sec",
            "range": "stddev: 0.002273414660751701",
            "extra": "mean: 148.76603920001799 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f2564638b74358e1a039175f17f365521de7db5",
          "message": "Make poly-case runnable by default on RHEL7 (#6964)\n\nWithout engaging a particular environment (like Komodo)",
          "timestamp": "2024-01-19T14:57:03+01:00",
          "tree_id": "4dac9f8ba5ec1b59a36165eb37c50987e64c3b0f",
          "url": "https://github.com/equinor/ert/commit/8f2564638b74358e1a039175f17f365521de7db5"
        },
        "date": 1705672785504,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.198054446575896,
            "unit": "iter/sec",
            "range": "stddev: 0.0033636438292381286",
            "extra": "mean: 161.34095120000893 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0465891188ae715f7cf6b56e71beaf28241d0ccf",
          "message": "Mark two scheduler tests as flaky (#6980)\n\nThese have been seen to be flaky but will pass on retries. Rerunning\r\ninstead of tuning the timing requirements will keep the timing\r\nrequirements easier to understand.",
          "timestamp": "2024-01-22T06:38:22Z",
          "tree_id": "62fac2b04e8e1117f863f8405d153dcb53db2e58",
          "url": "https://github.com/equinor/ert/commit/0465891188ae715f7cf6b56e71beaf28241d0ccf"
        },
        "date": 1705905686540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.747599024781482,
            "unit": "iter/sec",
            "range": "stddev: 0.0021874596545612755",
            "extra": "mean: 148.2008631999861 msec\nrounds: 5"
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
            "email": "feda.curic@gmail.com",
            "name": "Feda Curic",
            "username": "dafeda"
          },
          "distinct": true,
          "id": "797b49af3c7814fffefffdf168aea733dc348494",
          "message": "Test triangular transfer function",
          "timestamp": "2024-01-23T08:46:52+01:00",
          "tree_id": "a1b72b99ac2ee1130fa71930bd97da46039d5d6f",
          "url": "https://github.com/equinor/ert/commit/797b49af3c7814fffefffdf168aea733dc348494"
        },
        "date": 1705996161446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.616087927109271,
            "unit": "iter/sec",
            "range": "stddev: 0.0018765018683926482",
            "extra": "mean: 151.1467216000142 msec\nrounds: 5"
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
          "id": "747a6878219b38bba78ba8f5dd5d84cd6ce9e07c",
          "message": "Require version argument for ECLIPSE100 forward_model",
          "timestamp": "2024-01-23T12:01:35+01:00",
          "tree_id": "17d86621c1369c2a58314f737d7168bfa4b72bb6",
          "url": "https://github.com/equinor/ert/commit/747a6878219b38bba78ba8f5dd5d84cd6ce9e07c"
        },
        "date": 1706007843280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 6.663378138518662,
            "unit": "iter/sec",
            "range": "stddev: 0.0022292487830246565",
            "extra": "mean: 150.07402840000168 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}