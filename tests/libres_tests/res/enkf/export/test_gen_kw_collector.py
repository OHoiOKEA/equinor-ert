from libres_utils import ResTest

from res.enkf.export import GenKwCollector
from res.test import ErtTestContext


class GenKwCollectorTest(ResTest):
    def setUp(self):
        self.config = self.createTestPath("local/snake_oil/snake_oil.ert")

    def test_gen_kw_collector(self):
        with ErtTestContext(
            "python/enkf/export/gen_kw_collector", self.config
        ) as context:
            ert = context.getErt()

            data = GenKwCollector.loadAllGenKwData(ert, "default_0")

            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_PERSISTENCE"][0], 0.047517)
            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_PERSISTENCE"][24], 0.160907)

            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_OFFSET"][0], 0.054539)
            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_OFFSET"][12], 0.057807)

            realization_20 = data.loc[20]

            with self.assertRaises(KeyError):
                realization_60 = data.loc[60]

            data = GenKwCollector.loadAllGenKwData(
                ert,
                "default_0",
                ["SNAKE_OIL_PARAM:OP1_PERSISTENCE", "SNAKE_OIL_PARAM:OP1_OFFSET"],
            )

            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_PERSISTENCE"][0], 0.047517)
            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_OFFSET"][0], 0.054539)

            with self.assertRaises(KeyError):
                data["SNAKE_OIL_PARAM:OP1_DIVERGENCE_SCALE"]

            realization_index = 10
            data = GenKwCollector.loadAllGenKwData(
                ert,
                "default_0",
                ["SNAKE_OIL_PARAM:OP1_PERSISTENCE"],
                realization_index=realization_index,
            )

            assert data.index == [realization_index]
            assert len(data.index) == 1
            assert list(data.columns) == ["SNAKE_OIL_PARAM:OP1_PERSISTENCE"]
            self.assertFloatEqual(data["SNAKE_OIL_PARAM:OP1_PERSISTENCE"][10], 0.282923)
