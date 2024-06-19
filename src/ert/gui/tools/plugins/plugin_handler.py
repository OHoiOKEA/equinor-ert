from typing import TYPE_CHECKING, Iterator, List

from .plugin import Plugin

if TYPE_CHECKING:
    from ert.config import WorkflowJob
    from ert.gui.ertnotifier import ErtNotifier


class PluginHandler:
    def __init__(
        self,
        notifier: "ErtNotifier",
        plugin_jobs: List["WorkflowJob"],
        parent_window,
    ):
        self.__plugins = []

        for job in plugin_jobs:
            plugin = Plugin(notifier, job)
            self.__plugins.append(plugin)
            plugin.setParentWindow(parent_window)

        self.__plugins = sorted(self.__plugins, key=Plugin.getName)

    def ert(self) -> None:
        raise NotImplementedError("No such property")

    def __iter__(self) -> Iterator[Plugin]:
        index = 0
        while index < len(self.__plugins):
            yield self.__plugins[index]
            index += 1

    def __getitem__(self, index) -> Plugin:
        return self.__plugins[index]

    def __len__(self):
        return len(self.__plugins)
