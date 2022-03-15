import os
import pkg_resources
import shutil
from pathlib import Path

import pytest

from utils import SOURCE_DIR
from res.enkf import ResConfig


@pytest.fixture(scope="session")
def source_root():
    return SOURCE_DIR


@pytest.fixture(scope="class")
def class_source_root(request):
    request.cls.SOURCE_ROOT = SOURCE_DIR
    request.cls.TESTDATA_ROOT = SOURCE_DIR / "test-data"
    request.cls.SHARE_ROOT = pkg_resources.resource_filename("ert_shared", "share")
    request.cls.EQUINOR_DATA = (request.cls.TESTDATA_ROOT / "Equinor").is_symlink()
    yield


@pytest.fixture(autouse=True)
def env_save():
    exceptions = ["PYTEST_CURRENT_TEST", "KMP_DUPLICATE_LIB_OK", "KMP_INIT_AT_FORK"]
    environment_pre = [
        (key, val) for key, val in os.environ.items() if key not in exceptions
    ]
    yield
    environment_post = [
        (key, val) for key, val in os.environ.items() if key not in exceptions
    ]
    set_xor = set(environment_pre).symmetric_difference(set(environment_post))
    assert len(set_xor) == 0, f"Detected differences in environment: {set_xor}"


@pytest.fixture()
def setup_case(tmpdir, source_root):
    def copy_case(path, config_file):
        shutil.copytree(os.path.join(source_root, "test-data", path), "test_data")
        os.chdir("test_data")
        return ResConfig(config_file)

    with tmpdir.as_cwd():
        yield copy_case


def has_equinor_test_data():
    return os.path.isdir(os.path.join(SOURCE_DIR, "test-data", "Equinor"))


def pytest_runtest_setup(item):
    if item.get_closest_marker("equinor_test") and not has_equinor_test_data():
        pytest.skip("Test requires Equinor data")


def pytest_configure(config):
    config.addinivalue_line("markers", "equinor_test")


@pytest.fixture()
def unused_tcp_port(unused_tcp_port, monkeypatch):
    # The unused_tcp_port checks against localhost when providing an unused port:
    # https://github.com/pytest-dev/pytest-asyncio/blob/9246f5825f589ff01f1c67620ce34bdc416c5af3/pytest_asyncio/plugin.py#L490
    # In find_available_port, we use our public ip address if a current_host is
    # not provided (as given in _get_ip_address). Using the public ip address
    # is fine in production, but for unit testing paired with unused_tcp_port
    # we have to specify localhost. We wrap unused_tcp_port and mock
    # the `_get_ip_address` to only provide localhost. The original unused_tcp_port
    # remains untouched
    import ert_shared.port_handler

    def mocked_get_ip_address():
        return "127.0.0.1"

    monkeypatch.setattr(
        ert_shared.port_handler, "_get_ip_address", mocked_get_ip_address
    )
    return unused_tcp_port
