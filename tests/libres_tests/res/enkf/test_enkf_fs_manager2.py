import sys

from ert._c_wrappers.test import ErtTestContext

from ...libres_utils import ResTest, tmpdir


class TestEnKFFSManager2(ResTest):
    def setUp(self):
        self.config_file = self.createTestPath("local/snake_oil/snake_oil.ert")

    @tmpdir()
    def test_rotate(self):

        # We are indirectly testing the create through the create
        # already in the enkf_main object. In principle we could
        # create a separate manager instance from the ground up, but
        # then the reference count will be weird.
        with ErtTestContext(self.config_file) as testContext:
            ert = testContext.getErt()
            fsm = ert.getEnkfFsManager()
            self.assertEqual(1, fsm.getFileSystemCount())

            fs_list = []
            for index in range(5):
                fs_list.append(fsm.getFileSystem(f"fs_fill_{index}"))

            self.assertEqual(5, fsm.getFileSystemCount())

            for index in range(3 * 5):
                fs_name = f"fs_test_{index}"
                sys.stderr.write(f"Mounting: {fs_name}\n")
                fsm.getFileSystem(fs_name)
                self.assertEqual(5, fsm.getFileSystemCount())
