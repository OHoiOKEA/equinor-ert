window.BENCHMARK_DATA = {
  "lastUpdate": 1724681678026,
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
          "id": "e79cd87c55530fd9f452083adfb66f2d9500cca4",
          "message": "Remove websockets communication between scheduler and ensemble evaluator\n\nIt is replaced by two message queues, which are provided in LegacyEnsemble.evaluate function\nby the ensemble evaluator and passed over to scheduler:\n- ensemble_evaluator_queue: responsible for providing CloudEvent (representing realization and driver events) for evaluator\n- manifest_queue: responsible for providing CloudEvent (representing notification manifest checksum Event) for scheduler",
          "timestamp": "2024-08-20T15:45:06+02:00",
          "tree_id": "ebc432f7dbd2aaf76ee15a548ea30868895950f2",
          "url": "https://github.com/equinor/ert/commit/e79cd87c55530fd9f452083adfb66f2d9500cca4"
        },
        "date": 1724161645824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19685168066127498,
            "unit": "iter/sec",
            "range": "stddev: 0.03693948324977196",
            "extra": "mean: 5.079966788400003 sec\nrounds: 5"
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
          "id": "4013764fbfffbad4acbdd8e4893476ecc23467c9",
          "message": "Refactor queue options to use Pydantic dataclasses\n\nThis offloads the validation of the queue option objects\nto a (pretty) standard library. This gives us a single point\nof definition for which arguments each queue system can take, with\nstrict typing. The translation of queue-options to driver\narguments are is also the responsibility of the dataclass.\n\nMinor changes to queue options incurred in this:\n* If a string option has a nonempty string as default, it\n  will not be possible to set it empty. This is not a problem\n  as of now, as the need is not there. To be solved later\n  should the problem occur.\n* Some error messages are altered, but they still convey the\n  same meaning. Eg. when a string with characters is submitted\n  for a float, we don't need to say that it is not positive.\n\nA test integrating QueueOptions with driver initialization\nhas been added. This should have been present before, but testing\nrevealed it was not.\n\nType changes in driver arguments (these were inproperly typed due to\nreasons..)\n* squeue_timeout and max_runtime in the Slurm driver are now floats.\n* keep_qsub_output in the OpenPBSDriver is now a bool",
          "timestamp": "2024-08-20T16:04:26+02:00",
          "tree_id": "790131008b77df27ea31e8aa92b5126970bd25ec",
          "url": "https://github.com/equinor/ert/commit/4013764fbfffbad4acbdd8e4893476ecc23467c9"
        },
        "date": 1724162808489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.18864668300753976,
            "unit": "iter/sec",
            "range": "stddev: 0.022322628574559463",
            "extra": "mean: 5.300914832200005 sec\nrounds: 5"
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
          "id": "e32805c6fb334d5015273e21fcdf336aded8d5a2",
          "message": "Allow empty field for target ensemble format",
          "timestamp": "2024-08-21T08:24:03+02:00",
          "tree_id": "6d658133806dd2cbe007cb580606c8cc6607c7f6",
          "url": "https://github.com/equinor/ert/commit/e32805c6fb334d5015273e21fcdf336aded8d5a2"
        },
        "date": 1724221592381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19177695402043884,
            "unit": "iter/sec",
            "range": "stddev: 0.045694413664982135",
            "extra": "mean: 5.214390879799998 sec\nrounds: 5"
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
          "id": "b1c50621bb722b39d9ca6b4381b76d52ec2477be",
          "message": "Sort exports through __all__\n\nSorting done with archived tool asort, which is getting into ruff",
          "timestamp": "2024-08-21T10:27:17+02:00",
          "tree_id": "6e3197970b55f1bedb4561e334e351e6e3506be5",
          "url": "https://github.com/equinor/ert/commit/b1c50621bb722b39d9ca6b4381b76d52ec2477be"
        },
        "date": 1724228983668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19072577579579778,
            "unit": "iter/sec",
            "range": "stddev: 0.02240892795639569",
            "extra": "mean: 5.243129806799994 sec\nrounds: 5"
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
          "id": "a8f681abb8ae2a8cc6b33e7324339218ff20cd66",
          "message": "Disallow QUEUE_SYSTEM GENERIC\n\nThis was previously accepted by the config system\nbecause GENERIC was a QueueSystem, again because it is a valid\nQueueSystem for usage together with QUEUE_OPTION.\n\nIf a user requested the GENERIC queue system, it would return\na LOCAL queue system. Not a very bad thing, but this was previously\na hard error so it should be kept like that.\n\nThus, QueueSystem is separated between the QueueSystem values\nthat are valid for QUEUE_SYSTEM and those that are valid\nfor QUEUE_OPTION.",
          "timestamp": "2024-08-21T12:06:20+02:00",
          "tree_id": "f68f13dbcdda35b9d449f6eff17f59e9673f05be",
          "url": "https://github.com/equinor/ert/commit/a8f681abb8ae2a8cc6b33e7324339218ff20cd66"
        },
        "date": 1724234936288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1899096511656133,
            "unit": "iter/sec",
            "range": "stddev: 0.046707604298810664",
            "extra": "mean: 5.265661823200003 sec\nrounds: 5"
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
          "id": "784c5d638d4794f48930a630cc1baca69de9c712",
          "message": "Mitigate specific LSF test flakyness\n\nTesting that it is always possible to kill a submitted realization\ninvolves some flakyness, and we hereby give up to make a perfect\nsolution for this on a busy system.\n\nTo provoke flakyness, add @pytest.mark.repeat(100) to the\nfunction changed in this PR and then run all integration_tests on\nall available cpu cores. With this change, that procedure will pass,\nwithout, it seems to always fail.\n\nIf the system is not busy, this test should never be flaky, but that\ncondition is hard to add programmatically.",
          "timestamp": "2024-08-21T12:09:20+02:00",
          "tree_id": "00ff6d7cd30afb2b5e13a894d8b519f9bc8451f1",
          "url": "https://github.com/equinor/ert/commit/784c5d638d4794f48930a630cc1baca69de9c712"
        },
        "date": 1724235106562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.195497666890512,
            "unit": "iter/sec",
            "range": "stddev: 0.03268915047981502",
            "extra": "mean: 5.115150558600004 sec\nrounds: 5"
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
          "id": "749835abb317826d3b5f78497e172a8bdf32863d",
          "message": "Clarify docs on gen data RESULT_FILE",
          "timestamp": "2024-08-21T12:27:00+02:00",
          "tree_id": "9383892477058e4f92b4b6bcf09888f968d0991e",
          "url": "https://github.com/equinor/ert/commit/749835abb317826d3b5f78497e172a8bdf32863d"
        },
        "date": 1724236175835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1848200498483121,
            "unit": "iter/sec",
            "range": "stddev: 0.26100865955485103",
            "extra": "mean: 5.41066838160001 sec\nrounds: 5"
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
          "id": "9050ca58fe0e152924e247b216d7bea209249ac8",
          "message": "Write eclbase to runpath_list if present",
          "timestamp": "2024-08-21T13:01:58+02:00",
          "tree_id": "3f5053cecf134ab2d23a03ae57407492cd6c3891",
          "url": "https://github.com/equinor/ert/commit/9050ca58fe0e152924e247b216d7bea209249ac8"
        },
        "date": 1724238266161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19485359908618008,
            "unit": "iter/sec",
            "range": "stddev: 0.04599446738247961",
            "extra": "mean: 5.1320581436 sec\nrounds: 5"
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
          "id": "e41d78cfb2e6b1b7bc641a03a9a522740cbc7961",
          "message": "Rename test_migrate_gen_kw->test_migrate_responses\n\nRename test_migrate_gen_kw->test_migrate_responses",
          "timestamp": "2024-08-21T13:11:13+02:00",
          "tree_id": "f69f3e3a30bc6be624dca88d059160e8a717b808",
          "url": "https://github.com/equinor/ert/commit/e41d78cfb2e6b1b7bc641a03a9a522740cbc7961"
        },
        "date": 1724238818389,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1905854943428658,
            "unit": "iter/sec",
            "range": "stddev: 0.026432136861438",
            "extra": "mean: 5.246989040000005 sec\nrounds: 5"
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
          "id": "2544c6ae1a4ad786a2394e3434eab85f21c429d3",
          "message": "Allow empty field for ensemble smoother and manual",
          "timestamp": "2024-08-21T13:36:18+02:00",
          "tree_id": "4cb54ca7cce6d7a4cfc5207b9d10dd9576b0d3b5",
          "url": "https://github.com/equinor/ert/commit/2544c6ae1a4ad786a2394e3434eab85f21c429d3"
        },
        "date": 1724240331446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1920003354310372,
            "unit": "iter/sec",
            "range": "stddev: 0.028140050542555178",
            "extra": "mean: 5.208324234200001 sec\nrounds: 5"
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
          "id": "c6f30910854d902e118f2470a2ac53d55d0a14ef",
          "message": "Fix bug where seed was not set for manual initialization",
          "timestamp": "2024-08-21T13:45:55+02:00",
          "tree_id": "e1895b5e92c14d1b2d9d02eb7aa9bc9b2ce469d3",
          "url": "https://github.com/equinor/ert/commit/c6f30910854d902e118f2470a2ac53d55d0a14ef"
        },
        "date": 1724240937524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/unit_tests/analysis/test_es_update.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1922075752406869,
            "unit": "iter/sec",
            "range": "stddev: 0.04146376234096767",
            "extra": "mean: 5.20270857559998 sec\nrounds: 5"
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
      }
    ]
  }
}