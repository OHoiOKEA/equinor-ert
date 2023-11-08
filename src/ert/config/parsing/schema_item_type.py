from ert.enum_shim import StrEnum


class SchemaItemType(StrEnum):
    STRING = "STRING"
    INT = "INT"
    FLOAT = "FLOAT"
    PATH = "PATH"
    EXISTING_PATH = "EXISTING_PATH"
    BOOL = "BOOL"
    CONFIG = "CONFIG"
    BYTESIZE = "BYTESIZE"
    EXECUTABLE = "EXECUTABLE"
    ISODATE = "ISODATE"
    INVALID = "INVALID"
    RUNTIME_INT = "RUNTIME_INT"
    RUNTIME_FILE = "RUNTIME_FILE"
