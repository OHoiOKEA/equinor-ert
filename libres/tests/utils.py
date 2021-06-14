import asyncio
import contextlib
import logging
import os
import shutil
import tempfile
import threading
import time
from functools import partial
from pathlib import Path

import decorator
import websockets
from ecl.util.test import ExtendedTestCase

from job_runner.util.client import Client

"""
Swiped from
https://github.com/equinor/everest/blob/master/tests/utils/__init__.py
"""


def tmpdir(path=None, teardown=True):
    """Decorator based on the  `tmp` context"""

    def real_decorator(function):
        def wrapper(function, *args, **kwargs):
            with tmp(path, teardown=teardown):
                return function(*args, **kwargs)

        return decorator.decorator(wrapper, function)

    return real_decorator


@contextlib.contextmanager
def tmp(path=None, teardown=True):
    """Create and go into tmp directory, returns the path.
    This function creates a temporary directory and enters that directory.  The
    returned object is the path to the created directory.
    If @path is not specified, we create an empty directory, otherwise, it must
    be a path to an existing directory.  In that case, the directory will be
    copied into the temporary directory.
    If @teardown is True (defaults to True), the directory is (attempted)
    deleted after context, otherwise it is kept as is.
    """
    cwd = os.getcwd()
    fname = tempfile.NamedTemporaryFile().name

    if path:
        if not os.path.isdir(path):
            logging.debug("tmp:raise no such path")
            raise IOError("No such directory: %s" % path)
        shutil.copytree(path, fname)
    else:
        # no path to copy, create empty dir
        os.mkdir(fname)

    os.chdir(fname)

    yield fname  # give control to caller scope

    os.chdir(cwd)

    if teardown:
        try:
            shutil.rmtree(fname)
        except OSError as oserr:
            logging.debug("tmp:rmtree failed %s (%s)" % (fname, oserr))
            shutil.rmtree(fname, ignore_errors=True)


def wait_until(func, interval=0.5, timeout=30):
    """Expects 'func' to raise an AssertionError to indicate failure.
    Repeatedly calls 'func' until it does not throw an AssertionError.
    Waits 'interval' seconds before each invocation. If 'timeout' is
    reached, will raise the AssertionError.

    Example of how to wait for a file to be created:

    wait_until(lambda: assertFileExists("/some/file"))"""
    t = 0
    while True:
        time.sleep(interval)
        t += interval
        try:
            func()
            return
        except AssertionError:
            if t >= timeout:
                raise AssertionError(
                    "Timeout reached in wait_until (function {%s}, timeout {%d}) when waiting for assertion.".format(
                        func.__name__, timeout
                    )
                )


def _mock_ws(host, port, messages, delay_startup=0):
    loop = asyncio.new_event_loop()
    done = loop.create_future()

    async def _handler(websocket, path):
        while True:
            msg = await websocket.recv()
            messages.append(msg)
            if msg == "stop":
                done.set_result(None)
                break

    async def _run_server():
        await asyncio.sleep(delay_startup)
        async with websockets.serve(_handler, host, port):
            await done

    loop.run_until_complete(_run_server())
    loop.close()


@contextlib.contextmanager
def _mock_ws_thread(host, port, messages):
    mock_ws_thread = threading.Thread(
        target=partial(_mock_ws, messages=messages),
        args=(
            host,
            port,
        ),
    )
    mock_ws_thread.start()
    yield
    url = f"ws://{host}:{port}"
    with Client(url) as client:
        client.send("stop")
    mock_ws_thread.join()
    messages.pop()


def libres_source_root() -> Path:
    src = Path("@CMAKE_CURRENT_SOURCE_DIR@/../..")
    if src.is_dir():
        return src.relative_to(Path.cwd())

    # If the file was not correctly configured by cmake, look for the source
    # folder, assuming the build folder is inside the source folder.
    test_path = Path(__file__)
    while test_path != Path("/"):
        if (test_path / ".git").is_dir():
            return test_path / "libres"
        test_path = test_path.parent
    raise RuntimeError("Cannot find the source folder")


class ResTest(ExtendedTestCase):
    SOURCE_ROOT = libres_source_root()
    TESTDATA_ROOT = SOURCE_ROOT / "test-data"
    SHARE_ROOT = SOURCE_ROOT.parent / "share"
    EQUINOR_DATA = (TESTDATA_ROOT / "Equinor").is_symlink()

    def assertItemsEqual(self, data1, data2):
        if len(data1) != len(data2):
            raise AssertionError("Element count not equal.")

        for value in data1:
            if value not in data2:
                raise AssertionError(value, "not in", data2)

    @classmethod
    def createSharePath(cls, path):
        if cls.SHARE_ROOT is None:
            raise Exception(
                "Trying to create directory rooted in 'SHARE_ROOT' - variable 'SHARE_ROOT' is not set."
            )
        return os.path.realpath(os.path.join(cls.SHARE_ROOT, path))
