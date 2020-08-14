#!/bin/bash
PROJECT="ert"
RELEASE_PATH=${KOMODO_ROOT}/${RELEASE_NAME}
echo "unit testing ${PROJECT} against ${RELEASE_NAME}"

source ${RELEASE_PATH}/enable
export LD_LIBRARY_PATH=${RELEASE_PATH}/root/lib:${RELEASE_PATH}/root/lib64

source ${DEVTOOL}/enable
GCC_VERSION=7.3.0 CMAKE_VERSION=3.10.2 source ${SDPSOFT}/env.sh

GIT=${SDPSOFT}/bin/git

# Killing ert spawn an eternal loop. Issue occurs when tests segfault.
# See ert/issues/705, libecl/issues/694 and libecl/pull/700
export ECL_SKIP_SIGNAL=1

if [[ -z "${sha1// }" ]]; then
    # this is not a PR build, the komodo everest verison is checked out
    EV=$(cat ${RELEASE_PATH}/${RELEASE_NAME} | grep "${PROJECT}:" -A2 | grep "version:")
    EV=($EV)    # split the string "version: vX.X.X"
    EV=${EV[1]} # extract the version
    EV=${EV%"+py3"}
    echo "Using ${PROJECT} version ${EV}"
    $GIT checkout $EV
fi

echo "Creating virtualenv"
ENV="testenv"
rm -rf $ENV
mkdir $ENV
python -m virtualenv --system-site-packages $ENV
source $ENV/bin/activate
python -m pip install -r dev-requirements.txt

if [[ -z "${sha1// }" ]]; then
    # Run in a new folder so that we dont load the other python code from the source, but rather run against komodo
    rm -rf tmptest
    mkdir tmptest
    cp -r tests tmptest/tests
    cp -r test-data tmptest/test-data
    pushd tmptest
fi


echo "Running pytest"

if [[ ${RELEASE_NAME} =~ py27$  ]]
then
    export PYTEST_QT_API=pyqt4v2
fi
# The existence of a running xvfb process will produce
# a lock file for the default server and kill the run
# Allow xvfb to find a new server
 xvfb-run -s "-screen 0 640x480x24" --auto-servernum python -m pytest -k "not test_gui_load"
