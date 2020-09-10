import sys
import pytest

from ert_shared._doc_utils.ert_jobs import _ErtDocumentation


@pytest.mark.parametrize(
    "test_input, expected_length",
    [
        ({"JOB1": {}}, 1,),
        ({"JOB1": {}, "job2": {},}, 1,),
        ({"JOB1": {}, "JOB2": {},}, 2,),
    ],
)
def test_divide_into_categories_all_default(test_input, expected_length):
    result = _ErtDocumentation._divide_into_categories(test_input)
    assert len(result["other"]) == expected_length


def test_divide_into_categories_lower_case_job():
    result = _ErtDocumentation._divide_into_categories({"job1": {}})
    assert result == {}


@pytest.mark.parametrize(
    "test_input, expected_category",
    [
        ({"JOB1": {"category": "test.category.for.job",},}, "test",),
        ({"JOB1": {"category": "some_category.category.for.job",},}, "some_category",),
        ({"JOB1": {},}, "other",),
    ],
)
def test_divide_into_categories_main_category(test_input, expected_category):
    result = _ErtDocumentation._divide_into_categories(test_input)
    assert expected_category in result


@pytest.mark.parametrize(
    "test_input, expected_source_package",
    [
        ({"JOB1": {"source_package": "dummy",},}, ["dummy"],),
        ({"JOB1": {},}, ["PACKAGE NOT PROVIDED"],),
        (
            {"JOB1": {"source_package": "dummy",}, "JOB2": {},},
            ["dummy", "PACKAGE NOT PROVIDED"],
        ),
        (
            {
                "JOB1": {"source_package": "dummy",},
                "JOB2": {"source_package": "example"},
            },
            ["dummy", "example"],
        ),
    ],
)
def test_divide_into_categories_job_source(test_input, expected_source_package):
    categories = _ErtDocumentation._divide_into_categories(test_input)
    result = [docs.job_source for docs in categories["other"]]
    assert expected_source_package == result
