from pathlib import Path
from typing import Callable, List


class Runpaths:
    """The Runpaths are the ensemble workspace directories.

    Generally the is one runpath for each realization and iteration, although
    depending on the given format string for the paths they may coincide. There
    is one job name for each of the runpaths.

    :param job_name_format: The format of the job name, e.g., "job_%d"
    :param runpath_format: The format of the runpath, e.g.
        "/path/<case>/ensemble-%d/iteration-%d"
    :param substitute: Function called to perform arbitrary substitution on
        jobname and runpath, e.g., transforms
        "/path/<case>/ensemble-1/iteration-2/" to
        "/path/my_case/ensemble-1/iteration-2". The function is given
        three arguments, the defaults to no substitutions, ie.:

            def default_substitute(to_replace:str, realization:int, iteration:int):
                return to_replace

    :param filename: The filename of the runpath list file. Defaults to
        ".ert_runpath_list".

    """

    def __init__(
        self,
        jobname_format: str,
        runpath_format: str,
        filename: str = ".ert_runpath_list",
        substitute: Callable[[str, int, int], str] = lambda x, *_: x,
    ):
        self._jobname_format = jobname_format
        self.runpath_list_filename = Path(filename)
        self._runpath_format = str(Path(runpath_format).resolve())
        self._substitute = substitute

    def get_paths(self, realizations: List[int], iteration: int) -> List[str]:
        return [
            self._substitute(self._runpath_format, realization, iteration)
            for realization in realizations
        ]

    def get_jobnames(self, realizations: List[int], iteration: int) -> List[str]:
        return [
            self._substitute(self._jobname_format, realization, iteration)
            for realization in realizations
        ]

    def write_runpath_list(
        self,
        iteration_numbers: List[int],
        realization_numbers: List[int],
    ):
        """Writes the runpath_list_file, which lists jobs and runpaths."""
        with self._create_and_open_file() as f:
            for iteration in iteration_numbers:
                for realization in realization_numbers:
                    job_name = self._substitute(
                        self._jobname_format, realization, iteration
                    )
                    runpath = self._substitute(
                        self._runpath_format, realization, iteration
                    )
                    f.write(
                        f"{realization:03d}  {runpath}  {job_name}  {iteration:03d}\n"
                    )

    def _create_and_open_file(self, mode="w"):
        Path(self.runpath_list_filename).parent.mkdir(parents=True, exist_ok=True)
        return open(self.runpath_list_filename, mode, encoding="utf-8")
