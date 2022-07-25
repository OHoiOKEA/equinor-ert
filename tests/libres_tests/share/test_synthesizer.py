import os
import sys

from ..libres_utils import ResTest

try:
    from res.test.synthesizer import OilSimulator
except ImportError:
    share_lib_path = os.path.join(ResTest.createSharePath("lib"))

    sys.path.insert(0, share_lib_path)
    synthesizer_module = __import__("synthesizer")
    OilSimulator = synthesizer_module.OilSimulator
    sys.path.pop(0)

EXPECTED_VALUES = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0],
    [
        0.36223552960708655,
        0.36223552960708655,
        0.25228270813778375,
        0.25228270813778375,
        0.0035589166489957804,
        0.0035589166489957804,
        0.009729280161088842,
        0.6964604173738352,
        0.36223552960708655,
        0.25228270813778375,
        0.0035589166489957804,
        0.6964604173738352,
        0.009729280161088842,
        0.8467167800173389,
    ],
    [
        0.7399853327970171,
        1.1022208624041037,
        0.5415917925800195,
        0.7938745007178033,
        0.005031386203683649,
        0.008590302852679428,
        0.006753386971546496,
        0.7318953073473712,
        0.7399853327970171,
        0.5415917925800195,
        0.005031386203683649,
        0.7318953073473712,
        0.006753386971546496,
        0.6842612650326583,
    ],
    [
        0.6931433336847672,
        1.7953641960888709,
        0.5489089668696403,
        1.3427834675874437,
        0.07168010746080981,
        0.08027041031348925,
        0.09372111732538566,
        0.7919126394127266,
        0.6931433336847672,
        0.5489089668696403,
        0.07168010746080981,
        0.7919126394127266,
        0.09372111732538566,
        0.6050461737304799,
    ],
    [
        0.5399385912999576,
        2.3353027873888283,
        0.6765262712266249,
        2.0193097388140684,
        0.18058175414227,
        0.26085216445575926,
        0.2506268633281076,
        1.2529689155906016,
        0.5399385912999576,
        0.6765262712266249,
        0.18058175414227,
        1.2529689155906016,
        0.2506268633281076,
        0.4889715173355835,
    ],
    [
        0.26859437948706744,
        2.6038971668758957,
        0.7114414779650978,
        2.7307512167791663,
        0.2429638618796885,
        0.5038160263354478,
        0.4749485830402218,
        2.648757875439285,
        0.26859437948706744,
        0.7114414779650978,
        0.2429638618796885,
        2.648757875439285,
        0.4749485830402218,
        0.45492528299297097,
    ],
    [
        0.15577087834941575,
        2.7596680452253115,
        0.6075067291135949,
        3.338257945892761,
        0.38084454641982823,
        0.884660572755276,
        0.709715988100043,
        3.9000019487010458,
        0.15577087834941575,
        0.6075067291135949,
        0.38084454641982823,
        3.9000019487010458,
        0.709715988100043,
        0.37306808399768776,
    ],
    [
        0.15474693115262986,
        2.9144149763779414,
        0.5480152851776219,
        3.886273231070383,
        0.6549972409469127,
        1.5396578137021888,
        0.808894047670149,
        3.5413644787378944,
        0.15474693115262986,
        0.5480152851776219,
        0.6549972409469127,
        3.5413644787378944,
        0.808894047670149,
        0.29196857718168495,
    ],
    [
        0.16480127666696362,
        3.079216253044905,
        0.5131817827087846,
        4.399455013779168,
        0.686406202004116,
        2.2260640157063047,
        0.8063911786533474,
        3.11394300510087,
        0.16480127666696362,
        0.5131817827087846,
        0.686406202004116,
        3.11394300510087,
        0.8063911786533474,
        0.2041654171004479,
    ],
    [
        0.041212696700238804,
        3.120428949745144,
        0.37426453070047244,
        4.77371954447964,
        0.8481645277841262,
        3.074228543490431,
        0.8945330719830857,
        3.7426453070047243,
        0.041212696700238804,
        0.37426453070047244,
        0.8481645277841262,
        3.7426453070047243,
        0.8945330719830857,
        0.09156245545255788,
    ],
]


class SynthesizerTest(ResTest):
    def test_oil_simulator(self):
        sim = OilSimulator()
        sim.addWell("OP1", seed=1)
        sim.addBlock("6,6,6", seed=2)

        for report_step in range(10):
            sim.step(scale=1.0 / 10.0)

            values = [
                sim.fopr(),
                sim.fopt(),
                sim.fgpr(),
                sim.fgpt(),
                sim.fwpr(),
                sim.fwpt(),
                sim.fwct(),
                sim.fgor(),
                sim.opr("OP1"),
                sim.gpr("OP1"),
                sim.wpr("OP1"),
                sim.gor("OP1"),
                sim.wct("OP1"),
                sim.bpr("6,6,6"),
            ]

            self.assertAlmostEqual(values[0], values[8])  # fopr = opr:op1
            self.assertAlmostEqual(values[2], values[9])  # fgpr = gpr:op1
            self.assertAlmostEqual(values[4], values[10])  # fwpr = wpr:op1

            self.assertAlmostEqual(sim.foip(), sim.ooip - sim.fopt())
            self.assertAlmostEqual(sim.fgip(), sim.goip - sim.fgpt())
            self.assertAlmostEqual(sim.fwip(), sim.woip - sim.fwpt())

            self.assertAlmostEqualList(values, EXPECTED_VALUES[report_step])
