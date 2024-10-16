window.BENCHMARK_DATA = {
  "lastUpdate": 1729062259060,
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
          "id": "031e586e0cbdbf5a7ed8838d4f650565ca56322e",
          "message": "Remove irrelavant scheduler environment checkbox",
          "timestamp": "2024-10-14T09:50:17+02:00",
          "tree_id": "c198d98eea205417a676683cdeabce622d37a4d0",
          "url": "https://github.com/equinor/ert/commit/031e586e0cbdbf5a7ed8838d4f650565ca56322e"
        },
        "date": 1728892329338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19095333465924488,
            "unit": "iter/sec",
            "range": "stddev: 0.013038809775689945",
            "extra": "mean: 5.236881575200004 sec\nrounds: 5"
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
            "email": "yngve-sk@users.noreply.github.com",
            "name": "Yngve S. Kristiansen",
            "username": "yngve-sk"
          },
          "distinct": true,
          "id": "12d2b53e70fdd0341e208e120e3786ca07c2b998",
          "message": "Give in full file path for polars write_parquet",
          "timestamp": "2024-10-14T10:16:26+02:00",
          "tree_id": "102b766cc878795d11ca0139f3396a47f55bd752",
          "url": "https://github.com/equinor/ert/commit/12d2b53e70fdd0341e208e120e3786ca07c2b998"
        },
        "date": 1728893899897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.1929227660734505,
            "unit": "iter/sec",
            "range": "stddev: 0.027854687021076085",
            "extra": "mean: 5.183421429999998 sec\nrounds: 5"
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
          "id": "f8d2f26ddfc93e72293bde35603b086085f2f21e",
          "message": "Aggregate duplicate indices by mean in dark storage",
          "timestamp": "2024-10-14T10:32:08+02:00",
          "tree_id": "2646bafc04337985265f0c39b8b9c7191628db71",
          "url": "https://github.com/equinor/ert/commit/f8d2f26ddfc93e72293bde35603b086085f2f21e"
        },
        "date": 1728894840546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19084426924461123,
            "unit": "iter/sec",
            "range": "stddev: 0.03560650566741526",
            "extra": "mean: 5.239874395800001 sec\nrounds: 5"
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
          "id": "3427fa998a04be987539ce0f8131e457d34c85eb",
          "message": "Push out api and storage to fixture",
          "timestamp": "2024-10-14T14:12:14+02:00",
          "tree_id": "ba3dd4570ee9bd1994aa462d5e8d739153b681cb",
          "url": "https://github.com/equinor/ert/commit/3427fa998a04be987539ce0f8131e457d34c85eb"
        },
        "date": 1728908043102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19128317958313099,
            "unit": "iter/sec",
            "range": "stddev: 0.03462373706735864",
            "extra": "mean: 5.227851200399999 sec\nrounds: 5"
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
          "id": "59d80e704899f099f914476b9d0c37940025a19c",
          "message": "Remove unused # type: ignore",
          "timestamp": "2024-10-14T15:55:27+02:00",
          "tree_id": "b9402e510b3d7cdbfeacd7067ed1c014338a9546",
          "url": "https://github.com/equinor/ert/commit/59d80e704899f099f914476b9d0c37940025a19c"
        },
        "date": 1728914234823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19066058577353387,
            "unit": "iter/sec",
            "range": "stddev: 0.031755129353024776",
            "extra": "mean: 5.244922520000003 sec\nrounds: 5"
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
          "id": "5e356b7d9edc27a37ff554ad91fe3985a4852c5e",
          "message": "Use only one fm shell script list",
          "timestamp": "2024-10-15T11:49:05+02:00",
          "tree_id": "dddc3723cf5d5b2ac17652c4267e72426bca0ad2",
          "url": "https://github.com/equinor/ert/commit/5e356b7d9edc27a37ff554ad91fe3985a4852c5e"
        },
        "date": 1728985852356,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19414764038280224,
            "unit": "iter/sec",
            "range": "stddev: 0.028231534158079573",
            "extra": "mean: 5.150719308400005 sec\nrounds: 5"
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
          "id": "d0f6c164044ac71723ba4421710770962efbf52c",
          "message": "Initialize ErtConfig in everest_to_res (#8957)",
          "timestamp": "2024-10-15T11:50:04+02:00",
          "tree_id": "b9a2329827fe1b6b833b7c1ab7329e1269b31ac3",
          "url": "https://github.com/equinor/ert/commit/d0f6c164044ac71723ba4421710770962efbf52c"
        },
        "date": 1728985912785,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19736225012456013,
            "unit": "iter/sec",
            "range": "stddev: 0.025663812483143037",
            "extra": "mean: 5.066825086199998 sec\nrounds: 5"
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
          "id": "10a02f64439fb1daf8bbeae020dc9b30e2c17885",
          "message": "Remove remnant ext param in ert config dicts",
          "timestamp": "2024-10-15T12:47:53+02:00",
          "tree_id": "47ea7b97d85b6d5e2adc8c262c63ca1b42c5c59b",
          "url": "https://github.com/equinor/ert/commit/10a02f64439fb1daf8bbeae020dc9b30e2c17885"
        },
        "date": 1728989384378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19870741368675712,
            "unit": "iter/sec",
            "range": "stddev: 0.0424418825080372",
            "extra": "mean: 5.0325248638000115 sec\nrounds: 5"
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
          "id": "353edda58fe965573ecc59f84cd51c7511edfe4f",
          "message": "Close Evaluator server for new connections earlier\n\nEnsemble evaluator accepted new connections while shutting down before\nthis commit",
          "timestamp": "2024-10-15T16:07:53+02:00",
          "tree_id": "40143c7b3bf527702e5a9028b074969c49e21917",
          "url": "https://github.com/equinor/ert/commit/353edda58fe965573ecc59f84cd51c7511edfe4f"
        },
        "date": 1729001378947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19282491738921737,
            "unit": "iter/sec",
            "range": "stddev: 0.016432556984370544",
            "extra": "mean: 5.1860517485999935 sec\nrounds: 5"
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
          "id": "2d4421beaf0b63cc2f7aa3fd04552b533d6634a7",
          "message": "Initialize ert storage outside Simulator.start",
          "timestamp": "2024-10-16T09:02:04+02:00",
          "tree_id": "6fb411b8cd32d775b0b59f1af3df851d41aa4123",
          "url": "https://github.com/equinor/ert/commit/2d4421beaf0b63cc2f7aa3fd04552b533d6634a7"
        },
        "date": 1729062258448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/ert/performance_tests/test_analysis.py::test_and_benchmark_adaptive_localization_with_fields",
            "value": 0.19638801178142665,
            "unit": "iter/sec",
            "range": "stddev: 0.014422120604439747",
            "extra": "mean: 5.091960506800012 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}