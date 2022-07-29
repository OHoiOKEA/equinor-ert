import os
import sys

from setuptools import find_packages
from setuptools_scm import get_version
from skbuild import setup

# Corporate networks tend to be behind a proxy server with their own non-public
# SSL certificates. Conan keeps its own certificates, whose path we can override
if "CONAN_CACERT_PATH" not in os.environ:
    # Look for a RHEL-compatible system-wide file
    for file_ in ("/etc/pki/tls/cert.pem",):
        if not os.path.isfile(file_):
            continue
        os.environ["CONAN_CACERT_PATH"] = file_
        break


def get_ecl_include():
    from ecl import get_include

    return get_include()


def package_files(directory):
    paths = []
    for (path, _, filenames) in os.walk(directory):
        for filename in filenames:
            paths.append(os.path.join("..", "..", path, filename))
    return paths


with open("README.md") as f:
    long_description = f.read()


args = dict(
    name="ert",
    author="Equinor ASA",
    author_email="fg_sib-scout@equinor.com",
    description="Ensemble based Reservoir Tool (ERT)",
    use_scm_version={"root": ".", "write_to": "src/ert_shared/version.py"},
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/equinor/ert",
    packages=find_packages(where="src", exclude=["libres"]),
    package_dir={"": "src"},
    package_data={
        "ert_shared": package_files("src/ert_shared/share/"),
        "ert": package_files("src/ert/gui/resources/")
        + package_files("src/ert/ert3/examples/")
        + ["logging/logger.conf", "logging/storage_log.conf"],
        "ert3_examples": package_files("src/ert3_examples/"),
        "res": [
            "fm/rms/rms_config.yml",
            "fm/ecl/ecl300_config.yml",
            "fm/ecl/ecl100_config.yml",
        ],
    },
    include_package_data=True,
    license="GPL-3.0",
    platforms="any",
    python_requires=">=3.8",
    install_requires=[
        "aiofiles",
        "aiohttp",
        "alembic",
        "ansicolors==1.1.8",
        "async-generator",
        "beartype >= 0.9.1",
        "cloudevents",
        "cloudpickle",
        "tqdm>=4.62.0",
        "cryptography",
        "cwrap",
        "dask_jobqueue",
        "decorator",
        "deprecation",
        "dnspython >= 2",
        "ecl >= 2.13.0",
        "ert-storage >= 0.3.11",
        "fastapi==0.70.1",
        "graphlib_backport; python_version < '3.9'",
        "jinja2",
        "matplotlib",
        "numpy",
        "packaging",
        "pandas",
        "pluggy",
        "prefect<2",
        "psutil",
        "pydantic >= 1.9",
        "PyQt5",
        "pyrsistent",
        "python-dateutil",
        "pyyaml",
        "qtpy",
        "requests",
        "SALib",
        "scipy",
        "sqlalchemy",
        "uvicorn >= 0.17.0",
        "websockets >= 9.0.1",
        "httpx",
        "tables",
        "webviz-ert",
    ],
    entry_points={
        "console_scripts": [
            "ert3=ert.ert3.console:main",
            "ert=ert_shared.main:main",
            "job_dispatch.py = job_runner.job_dispatch:main",
        ]
    },
    cmake_args=[
        "-DECL_INCLUDE_DIRS=" + get_ecl_include(),
        # we can safely pass OSX_DEPLOYMENT_TARGET as it's ignored on
        # everything not OS X. We depend on C++17, which makes our minimum
        # supported OS X release 10.15
        "-DCMAKE_OSX_DEPLOYMENT_TARGET=10.15",
        f"-DPYTHON_EXECUTABLE={sys.executable}",
    ],
    cmake_source_dir="src/libres/",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Other Environment",
        "Intended Audience :: Science/Research",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Natural Language :: English",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Topic :: Scientific/Engineering",
        "Topic :: Scientific/Engineering :: Physics",
    ],
)

setup(**args)

# workaround for https://github.com/scikit-build/scikit-build/issues/546 :
# This increases time taken to run `pip install -e .` somewhat until we
# have only one top level package at which point we can use the workaround
# in the issue
if sys.argv[1] == "develop":
    from setuptools import setup as setuptools_setup

    del args["cmake_args"]
    del args["cmake_source_dir"]
    setuptools_setup(**args)
