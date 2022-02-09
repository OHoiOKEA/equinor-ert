from typing import List, Optional

from pydantic import validator

from ert3.config import ConfigPluginRegistry
from ert3.config.plugins import TransformationConfigBase
from ert3.config._validator import ensure_mime

from ert3.plugins.plugin_manager import hook_implementation

from ert.data import FileRecordTransformation
from ert.data import TarRecordTransformation
from ert.data import EclSumTransformation


def transformation_factory(config: TransformationConfigBase):
    if isinstance(config, FileTransformationConfig):
        return FileRecordTransformation()
    elif isinstance(config, SummaryTransformationConfig):
        return EclSumTransformation(smry_keys=config.smry_keys)
    elif isinstance(config, DirectoryTransformationConfig):
        return TarRecordTransformation()
    else:
        raise ValueError(
            f"Unknown config type {type(config)} for config instance {config}"
        )


class FileTransformationConfig(TransformationConfigBase):
    mime: str = ""
    _ensure_transportablecommand_mime = validator("mime", allow_reuse=True)(
        ensure_mime("location")
    )

class SummaryTransformationConfig(TransformationConfigBase):
    smry_keys: Optional[List[str]] = None


class DirectoryTransformationConfig(TransformationConfigBase):
    pass


@hook_implementation
def configs(registry: ConfigPluginRegistry) -> None:
    registry.register(
        name="file",
        category="transformation",
        config=FileTransformationConfig,
        factory=transformation_factory,
    )
    registry.register(
        name="summary",
        category="transformation",
        config=SummaryTransformationConfig,
        factory=transformation_factory,
    )
    registry.register(
        name="directory",
        category="transformation",
        config=DirectoryTransformationConfig,
        factory=transformation_factory,
    )
