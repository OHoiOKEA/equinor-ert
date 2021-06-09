from utils import ErtTest

from ert_shared.ide.keywords.definitions import ProperNameFormatStringArgument


class ProperNameFormatStringArgumentTest(ErtTest):
    def test_proper_name_format_string_argument(self):

        argument = ProperNameFormatStringArgument()

        self.assertTrue(argument.validate("NAME%s"))
        self.assertTrue(argument.validate("__NA%sME__"))
        self.assertTrue(argument.validate("<NAME>%s"))
        self.assertTrue(argument.validate("%s-NAME-"))
        self.assertTrue(argument.validate("%s"))
        self.assertTrue(argument.validate(".NA.ME%s."))

        self.assertFalse(argument.validate("-%sNA ME-"))
        self.assertFalse(argument.validate("NAME*%s"))
        self.assertFalse(argument.validate(""))
