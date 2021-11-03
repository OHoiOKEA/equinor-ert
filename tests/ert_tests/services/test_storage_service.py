import pytest
import requests
from ert_shared.services import Storage


@pytest.mark.requires_ert_storage
def test_integration(tmp_path, monkeypatch):
    """Actually start the server, wait for it to be online and do a health check"""
    monkeypatch.chdir(tmp_path)

    # Note: Sqlite needs at least 4-5 seconds to spin up even on
    # an unloaded M1-based Mac using local disk. On the CI-server
    # we have less control of available resources, so set timeout-
    # value large to allow time for sqlite to get ready
    with Storage.start_server(timeout=120) as server:
        resp = requests.get(
            f"{server.fetch_url()}/healthcheck", auth=server.fetch_auth()
        )
        assert "ALL OK!" in resp.json()

        with Storage.session() as session:
            session.get("/healthcheck")

    assert not (tmp_path / "storage_server.json").exists()


@pytest.mark.requires_ert_storage
def test_integration_timeout(tmp_path, monkeypatch):
    """Try to start the server but give it too small time to get ready and
    expect a timeout"""
    monkeypatch.chdir(tmp_path)

    with pytest.raises(TimeoutError):
        # Note timeout-value here in context of note above
        with Storage.start_server(timeout=0.01) as server:
            resp = requests.get(
                f"{server.fetch_url()}/healthcheck", auth=server.fetch_auth()
            )

    assert not (tmp_path / "storage_server.json").exists()
