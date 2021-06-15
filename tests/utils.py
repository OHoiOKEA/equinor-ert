import contextlib
import logging
import os
import shutil
import tempfile

import decorator
from ecl.util.test import ExtendedTestCase

"""
Swiped from
https://github.com/equinor/everest/blob/master/tests/utils/__init__.py
"""

SOURCE_DIR = os.path.realpath(os.path.join(__file__, "../../"))


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


def source_root():
    src = "@CMAKE_CURRENT_SOURCE_DIR@/../.."
    if os.path.isdir(src):
        return os.path.realpath(src)

    # If the file was not correctly configured by cmake, look for the source
    # folder, assuming the build folder is inside the source folder.
    path_list = os.path.dirname(os.path.abspath(__file__)).split("/")
    while len(path_list) > 0:
        git_path = os.path.join(os.sep, "/".join(path_list), ".git")
        if os.path.isdir(git_path):
            return os.path.join(os.sep, *path_list)
        path_list.pop()
    raise RuntimeError("Cannot find the source folder")


class ErtTest(ExtendedTestCase):
    SOURCE_ROOT = source_root()
    TESTDATA_ROOT = os.path.join(SOURCE_ROOT, "test-data")
    SHARE_ROOT = os.path.join(SOURCE_ROOT, "share")

    @classmethod
    def createSharePath(cls, path):
        if cls.SHARE_ROOT is None:
            raise Exception(
                "Trying to create directory rooted in 'SHARE_ROOT' - variable 'SHARE_ROOT' is not set."
            )
        return os.path.realpath(os.path.join(cls.SHARE_ROOT, path))
