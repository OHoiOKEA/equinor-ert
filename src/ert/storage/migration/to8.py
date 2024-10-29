from __future__ import annotations

import json
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from pathlib import Path


info = "Introducing init_source to GenKwConfig"


def migrate(path: Path) -> None:
    for experiment in path.glob("experiments/*"):
        with open(experiment / "parameter.json", encoding="utf-8") as fin:
            parameters_json = json.load(fin)
        key_to_add = "init_source"
        for config in parameters_json.values():
            if config["_ert_kind"] == "GenKwConfig" and key_to_add not in config:
                config[key_to_add] = "sample"
        with open(experiment / "parameter.json", "w", encoding="utf-8") as fout:
            fout.write(json.dumps(parameters_json, indent=4))
