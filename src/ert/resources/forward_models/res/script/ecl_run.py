import datetime
import glob
import os
import os.path
import re
import subprocess
import sys
import time
from argparse import ArgumentParser
from collections import namedtuple
from contextlib import contextmanager
from pathlib import Path
from random import random
from typing import List

import resfo
from ecl_config import EclConfig, EclrunConfig, Simulator


def ecl_output_has_license_error(ecl_output: str):
    return (
        "LICENSE ERROR" in ecl_output
        or "LICENSE FAILURE" in ecl_output
        or "not allowed in license" in ecl_output
    )


class EclError(RuntimeError):
    def failed_due_to_license_problems(self) -> bool:
        # self.args[0] contains the multiline ERROR messages and SLAVE startup messages
        if ecl_output_has_license_error(self.args[0]):
            return True
        if re.search(a_slave_failed_pattern, self.args[0]):
            for match in re.finditer(slave_run_paths, self.args[0], re.MULTILINE):
                (ecl_case_starts_with, ecl_case_dir) = match.groups()
                for prt_file in glob.glob(
                    f"{ecl_case_dir}/{ecl_case_starts_with}*.PRT"
                ):
                    if ecl_output_has_license_error(
                        Path(prt_file).read_text(encoding="utf-8")
                    ):
                        return True
        return False


EclipseResult = namedtuple("EclipseResult", "errors bugs")
body_sub_pattern = r"(\s^\s@.+$)*"
date_sub_pattern = r"\s+AT TIME\s+(?P<Days>\d+\.\d+)\s+DAYS\s+\((?P<Date>(.+)):\s*$"
error_pattern_e100 = rf"^\s@--  ERROR{date_sub_pattern}${body_sub_pattern}"
error_pattern_e300 = rf"^\s@--Error${body_sub_pattern}"
slave_started_pattern = (
    rf"^\s@--MESSAGE{date_sub_pattern}\s^\s@\s+STARTING SLAVE.+${body_sub_pattern}"
)
a_slave_failed_pattern = r"\s@\s+SLAVE RUN.*HAS STOPPED WITH AN ERROR CONDITION.\s*"
slave_run_paths = r"^\s@\s+STARTING SLAVE\s+[^ ]+RUNNING \([^ ]\)\s*$"
slave_run_paths = r"\s@\s+STARTING SLAVE .* RUNNING (\w+)\s*^\s@\s+ON HOST.*IN DIRECTORY\s*^\s@\s+(.*)"


@contextmanager
def pushd(run_path):
    starting_directory = os.getcwd()
    os.chdir(run_path)
    yield
    os.chdir(starting_directory)


def _find_unsmry(case: str) -> str:
    def _is_unsmry(base: str, path: str) -> bool:
        if "." not in path:
            return False
        splitted = path.split(".")
        return splitted[-2].endswith(base) and splitted[-1].lower() in [
            "unsmry",
            "funsmry",
        ]

    dir, base = os.path.split(case)
    candidates = list(filter(lambda x: _is_unsmry(base, x), os.listdir(dir or ".")))
    if not candidates:
        raise ValueError(f"Could not find any unsmry matching case path {case}")
    if len(candidates) > 1:
        raise ValueError(
            f"Ambiguous reference to unsmry in {case}, could be any of {candidates}"
        )
    return os.path.join(dir, candidates[0])


class EclRun:
    """Wrapper class to run Eclipse simulations.

    The EclRun class is a small wrapper class which is used to run Eclipse
    simulations. It will load a configuration, i.e. where the binary is
    installed and so on, from an instance of the EclConfig class.

    The main method is the runEclipse() method which will:

      1. Set up redirection of the stdxxx file descriptors.
      2. Set the necessary environment variables.
      4. fork+exec to actually run the Eclipse binary.
      5. Parse the output .PRT / .ECLEND file to check for errors.

    If the simulation fails the runEclipse() method will raise an exception.

    The class is called EclRun, and the main focus has been on running Eclipse
    simulations, but it should also handle "eclipse-like" simulators, e.g. the
    simulator OPM/flow.

    To actually create an executable script based on this class could in it's
    simplest form be:

       #!/usr/bin/env python
       import sys
       from .ecl_run import EclRun

       run = EclRun()
       run.runEclipse( )


    """

    def __init__(
        self,
        ecl_case: str,
        sim: Simulator,
        num_cpu: int = 1,
        check_status: bool = True,
        summary_conversion: bool = False,
    ):
        self.sim = sim
        self.check_status = check_status
        self.num_cpu = int(num_cpu)
        self.summary_conversion = summary_conversion

        # Dechipher the ecl_case argument.
        input_arg = ecl_case
        (_, ext) = os.path.splitext(input_arg)
        if ext and ext in [".data", ".DATA"]:
            data_file = input_arg
        elif input_arg.islower():
            data_file = input_arg + ".data"
        else:
            data_file = input_arg + ".DATA"

        if not os.path.isfile(data_file):
            raise IOError(f"No such file: {data_file}")

        (self.run_path, self.data_file) = os.path.split(data_file)
        (self.base_name, ext) = os.path.splitext(self.data_file)

        if self.run_path is None:
            self.run_path = os.getcwd()
        else:
            self.run_path = os.path.abspath(self.run_path)

    def runPath(self):
        return self.run_path

    def baseName(self):
        return self.base_name

    @property
    def prt_path(self):
        return Path(self.run_path) / (self.baseName() + ".PRT")

    def numCpu(self):
        return self.num_cpu

    def _get_legacy_run_env(self):
        my_env = os.environ.copy()
        my_env.update(self.sim.env.items())
        return my_env

    def _get_run_command(self, eclrun_config: EclrunConfig):
        summary_conversion = "yes" if self.summary_conversion else "no"
        return [
            "eclrun",
            "-v",
            eclrun_config.version,
            eclrun_config.simulator_name,
            f"{self.base_name}.DATA",
            "--summary-conversion",
            summary_conversion,
        ]

    def execEclipse(self, eclrun_config=None) -> int:
        use_eclrun = eclrun_config is not None

        with pushd(self.run_path):
            if not os.path.exists(self.data_file):
                raise IOError(f"Can not find data_file:{self.data_file}")
            if not os.access(self.data_file, os.R_OK):
                raise OSError(f"Can not read data file:{self.data_file}")

            command = (
                self._get_run_command(eclrun_config)
                if use_eclrun
                else [self.sim.executable, self.base_name]
            )
            env = eclrun_config.run_env if use_eclrun else self._get_legacy_run_env()

            return subprocess.run(
                command,
                env=env,
                check=False,
            ).returncode

    LICENSE_FAILURE_RETRY_INITIAL_SLEEP = 90
    LICENSE_RETRY_STAGGER_FACTOR = 60
    LICENSE_RETRY_BACKOFF_EXPONENT = 3

    def runEclipse(self, eclrun_config=None, retries_left=3, backoff_sleep=None):
        backoff_sleep = (
            self.LICENSE_FAILURE_RETRY_INITIAL_SLEEP
            if backoff_sleep is None
            else backoff_sleep
        )
        return_code = self.execEclipse(eclrun_config=eclrun_config)

        OK_file = os.path.join(self.run_path, f"{self.base_name}.OK")
        if not self.check_status:
            with open(OK_file, "w", encoding="utf-8") as f:
                f.write("ECLIPSE simulation complete - NOT checked for errors.")
        else:
            if return_code != 0:
                command = (
                    self._get_run_command(eclrun_config)
                    if self.sim is None
                    else self._get_legacy_run_command()
                )
                raise subprocess.CalledProcessError(return_code, command)

            try:
                self.assertECLEND()
            except EclError as err:
                if err.failed_due_to_license_problems() and retries_left > 0:
                    time_to_wait = backoff_sleep + int(
                        random() * self.LICENSE_RETRY_STAGGER_FACTOR
                    )
                    sys.stderr.write(
                        "ECLIPSE failed due to license failure "
                        f"retrying in {time_to_wait} seconds\n"
                    )
                    time.sleep(time_to_wait)
                    self.runEclipse(
                        eclrun_config,
                        retries_left=retries_left - 1,
                        backoff_sleep=int(
                            backoff_sleep * self.LICENSE_RETRY_BACKOFF_EXPONENT
                        ),
                    )
                    return
                else:
                    raise err from None
            if self.num_cpu > 1:
                self.summary_block()

            with open(OK_file, "w", encoding="utf-8") as f:
                f.write("ECLIPSE simulation OK")

    def summary_block(self):
        case = os.path.join(self.run_path, self.base_name)
        start_time = datetime.datetime.now()
        prev_len = 0
        while True:
            dt = datetime.datetime.now() - start_time
            if dt.total_seconds() > 15:
                # We have not got a stable summary file after 15 seconds of
                # waiting, this either implies that something is completely
                # broken or this is a NOSIM simulation. Due the possibility of
                # NOSIM solution we just return here without signalling an
                # error.
                return None

            time.sleep(1)

            try:
                ecl_sum = [
                    r.read_keyword() for r in resfo.lazy_read(_find_unsmry(case))
                ]
            except Exception:
                continue

            this_len = len(ecl_sum)
            if prev_len == 0:
                prev_len = this_len
                continue

            if prev_len == this_len:
                break

        return ecl_sum

    def assertECLEND(self):
        tail_length = 5000
        result = self.readECLEND()
        if result.errors > 0:
            error_list = self.parseErrors()
            sep = "\n\n...\n\n"
            error_and_slave_msg = sep.join(error_list)
            extra_message = ""
            error_messages = [
                error for error in error_list if not "STARTING SLAVE" in str(error)
            ]
            if result.errors != len(error_messages):
                extra_message = (
                    f"\n\nWarning, mismatch between stated Error count ({result.errors}) "
                    f"and number of ERROR messages found in PRT ({len(error_messages)})."
                    f"\n\nTail ({tail_length} bytes) of PRT-file {self.prt_path}:\n\n"
                ) + tail_textfile(self.prt_path, 5000)

            raise EclError(
                "Eclipse simulation failed with:"
                f"{result.errors:d} errors:\n\n{error_and_slave_msg}{extra_message}"
            )

        if result.bugs > 0:
            raise EclError(f"Eclipse simulation failed with:{result.bugs:d} bugs")

    def readECLEND(self):
        error_regexp = re.compile(r"^\s*Errors\s+(\d+)\s*$")
        bug_regexp = re.compile(r"^\s*Bugs\s+(\d+)\s*$")

        report_file = os.path.join(self.run_path, f"{self.base_name}.ECLEND")
        if not os.path.isfile(report_file):
            report_file = self.prt_path

        errors = None
        bugs = None
        with open(report_file, "r", encoding="utf-8") as filehandle:
            for line in filehandle.readlines():
                error_match = re.match(error_regexp, line)
                if error_match:
                    errors = int(error_match.group(1))

                bug_match = re.match(bug_regexp, line)
                if bug_match:
                    bugs = int(bug_match.group(1))
        if errors is None:
            raise ValueError(f"Could not read errors from {report_file}")
        if bugs is None:
            raise ValueError(f"Could not read bugs from {report_file}")

        return EclipseResult(errors=errors, bugs=bugs)

    def parseErrors(self) -> List[str]:
        """Extract multiline ERROR messages from the PRT file"""
        error_list = []
        error_e100_regexp = re.compile(error_pattern_e100, re.MULTILINE)
        error_e300_regexp = re.compile(error_pattern_e300, re.MULTILINE)
        slave_started_regexp = re.compile(slave_started_pattern, re.MULTILINE)
        with open(self.prt_path, "r", encoding="utf-8") as filehandle:
            content = filehandle.read()

        for regexp in [error_e100_regexp, error_e300_regexp, slave_started_regexp]:
            offset = 0
            while True:
                match = regexp.search(content[offset:])
                if match:
                    error_list.append(
                        content[offset + match.start() : offset + match.end()]
                    )
                    offset += match.end()
                else:
                    break

        return error_list


def run(config: EclConfig, argv):
    parser = ArgumentParser()
    parser.add_argument("ecl_case")
    parser.add_argument("-v", "--version", dest="version", type=str)
    parser.add_argument("-n", "--num-cpu", dest="num_cpu", type=int, default=1)
    parser.add_argument(
        "-i", "--ignore-errors", dest="ignore_errors", action="store_true"
    )
    parser.add_argument(
        "--summary-conversion", dest="summary_conversion", action="store_true"
    )

    options = parser.parse_args(argv)

    try:
        eclrun_config = EclrunConfig(config, options.version)
        if eclrun_config.can_use_eclrun():
            run = EclRun(
                options.ecl_case,
                None,
                num_cpu=options.num_cpu,
                check_status=not options.ignore_errors,
                summary_conversion=options.summary_conversion,
            )
            run.runEclipse(eclrun_config=eclrun_config)
        else:
            if options.num_cpu > 1:
                sim = config.mpi_sim(version=options.version)
            else:
                sim = config.sim(version=options.version)

            run = EclRun(
                options.ecl_case,
                sim,
                num_cpu=options.num_cpu,
                check_status=not options.ignore_errors,
                summary_conversion=options.summary_conversion,
            )
            run.runEclipse()
    except EclError as msg:
        print(msg, file=sys.stderr)
        sys.exit(-1)


def tail_textfile(file_path: Path, num_chars: int) -> str:
    if not file_path.exists():
        return f"No output file {file_path}"
    with open(file_path, encoding="utf-8") as file:
        file.seek(0, 2)
        file_end_position = file.tell()
        seek_position = max(0, file_end_position - num_chars)
        file.seek(seek_position)
        return file.read()[-num_chars:]
