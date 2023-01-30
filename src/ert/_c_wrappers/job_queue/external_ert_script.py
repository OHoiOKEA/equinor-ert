import codecs
import sys
from subprocess import PIPE, Popen

from ert._c_wrappers.job_queue import ErtScript


class ExternalErtScript(ErtScript):
    def __init__(self, ert, executable):
        super().__init__(ert)

        self.__executable = executable
        self.__job = None

    def run(self, *args) -> str:
        command = [self.__executable]
        command.extend([str(arg) for arg in args])

        # pylint: disable=consider-using-with
        # we take care to terminate the process in cancel()
        self.__job = Popen(command, stdout=PIPE, stderr=PIPE)

        # The job will complete before stdout and stderr is returned
        stdoutdata, stderrdata = self.__job.communicate()

        stdoutdata = codecs.decode(stdoutdata, "utf8", "replace")
        stderrdata = codecs.decode(stderrdata, "utf8", "replace")

        sys.stdout.write(stderrdata)

        if self.__job.returncode != 0:
            raise RuntimeError(stderrdata)

        return stdoutdata

    def cancel(self):
        super().cancel()
        if self.__job is not None:
            self.__job.terminate()

            self.__job.kill()
