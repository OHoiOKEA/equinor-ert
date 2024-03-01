#!/bin/bash
set -x
# This script is designed to be run by a self-hosted Github action runner
# from komodo-releases.
#
# You can also run it locally. Note that only the committed code is tested,
# not changes in your working directory.
#
# If you want to run the whole build in one go:
#   bash run_ert_ctests.sh build_and_test
#
# If you want to run the build in separate stages:
#   sh run_ert_ctests.sh setup
#   sh run_ert_ctests.sh build_ert_clib
#   etc...
#
# By default it will try to build everything inside a folder 'build'
#
# Current working directory must contain a checked out ert repository
#
# When running manually you might have to delete the folder _skbuild

build_and_test () {
	setup
	build_ert_clib
	run_ctest
}

enable_environment () {
	if [[ -f /opt/rh/devtoolset-8/enable ]] ; then
		source /opt/rh/devtoolset-8/enable
	fi

	source ${ERT_SOURCE_ROOT}/venv/bin/activate

	python --version
	gcc --version
	cmake --version

	export ERT_SHOW_BACKTRACE=Y

	# Conan v1 bundles its own certs due to legacy reasons, so we point it
	# to the system's certs instead.
	export CONAN_CACERT_PATH=/etc/pki/tls/cert.pem
}

setup () {
	if [[ -f /opt/rh/rh-python38/root/usr/bin/python ]] ; then
		/opt/rh/rh-python38/root/usr/bin/python -m venv ${ERT_SOURCE_ROOT}/venv
	else
		# Only test with python3.11 on RHEL8
		/usr/bin/python3.11 -m venv ${ERT_SOURCE_ROOT}/venv
	fi

	${ERT_SOURCE_ROOT}/venv/bin/pip install -U pip wheel setuptools cmake pybind11 "conan<2" resdata
}

build_ert_clib () {
	enable_environment

	mkdir ${ERT_SOURCE_ROOT}/build
	pushd ${ERT_SOURCE_ROOT}/build
	cmake ${ERT_SOURCE_ROOT}/src/clib \
		  -DCMAKE_BUILD_TYPE=Debug
	make -j$(nproc)
	popd
}

run_ctest () {
	enable_environment
	pushd ${ERT_SOURCE_ROOT}/build
	export ERT_SITE_CONFIG=${ERT_SOURCE_ROOT}/src/ert/shared/share/ert/site-config
	ctest -j$(nproc) -E Lint --output-on-failure
	popd
}

ERT_SOURCE_ROOT=$(pwd)

[[ $# != 0 ]] && $1
