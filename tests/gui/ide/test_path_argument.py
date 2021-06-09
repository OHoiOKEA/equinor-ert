from ert_shared.ide.keywords.definitions import PathArgument
from utils import ErtTest


class PathArgumentTest(ErtTest):
    def test_path_argument(self):

        path_arg = PathArgument()

        validation_status = path_arg.validate("/non_existing_file")
        self.assertFalse(validation_status)

        validation_status = path_arg.validate(__file__)
        self.assertTrue(validation_status)
