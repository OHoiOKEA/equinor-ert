import os
import sys

from libres_utils import ResTest

try:
    from res.test.synthesizer import OilSimulator
except ImportError:
    share_lib_path = os.path.join(ResTest.createSharePath("lib"))

    sys.path.insert(0, share_lib_path)
    synthesizer_module = __import__("synthesizer")
    OilSimulator = synthesizer_module.OilSimulator
    sys.path.pop(0)

if sys.version_info >= (3, 2):
    # version >= 3.2 random got a refactoring in 3.2
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
else:
    # version < 3.2
    EXPECTED_VALUES = [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0],
        [
            0.3359771423145687,
            0.3359771423145687,
            0.25672494192349865,
            0.25672494192349865,
            0.010039005455891323,
            0.010039005455891323,
            0.029013112597713192,
            0.7641143089523995,
            0.3359771423145687,
            0.25672494192349865,
            0.010039005455891323,
            0.7641143089523995,
            0.029013112597713192,
            0.8462347957619747,
        ],
        [
            0.7252470407619624,
            1.0612241830765312,
            0.5175173529594699,
            0.7742422948829686,
            0.017973831236885583,
            0.028012836692776905,
            0.02418370085402209,
            0.7135738912023045,
            0.7252470407619624,
            0.5175173529594699,
            0.017973831236885583,
            0.7135738912023045,
            0.02418370085402209,
            0.6888364145396828,
        ],
        [
            0.7723163496234255,
            1.8335405326999568,
            0.5742386073607806,
            1.3484809022437492,
            0.11041673583737899,
            0.1384295725301559,
            0.12508507685507134,
            0.7435277106858791,
            0.7723163496234255,
            0.5742386073607806,
            0.11041673583737899,
            0.7435277106858791,
            0.12508507685507134,
            0.6403046565762696,
        ],
        [
            0.6038799675664164,
            2.437420500266373,
            0.6888868738548185,
            2.037367776098568,
            0.267892132439122,
            0.4063217049692779,
            0.3072960610203287,
            1.140767885762087,
            0.6038799675664164,
            0.6888868738548185,
            0.267892132439122,
            1.140767885762087,
            0.3072960610203287,
            0.5205364945011657,
        ],
        [
            0.23016535126253962,
            2.6675858515289126,
            0.721655666522216,
            2.7590234426207836,
            0.35552466124555465,
            0.7618463662148325,
            0.6070184801736589,
            3.135379250454838,
            0.23016535126253962,
            0.721655666522216,
            0.35552466124555465,
            3.135379250454838,
            0.6070184801736589,
            0.4800677649914682,
        ],
        [
            0.026293782934652718,
            2.693879634463565,
            0.7131990780527108,
            3.4722225206734945,
            0.6392372725163122,
            1.4010836387311447,
            0.8647254356377257,
            7.131990780527107,
            0.026293782934652718,
            0.7131990780527108,
            0.6392372725163122,
            7.131990780527107,
            0.8647254356377257,
            0.3872974839053025,
        ],
        [
            0.0,
            2.693879634463565,
            0.8676997908824122,
            4.339922311555907,
            0.8580356376693129,
            2.2591192764004577,
            0.8956197493411856,
            8.676997908824122,
            0.0,
            0.8676997908824122,
            0.8580356376693129,
            8.676997908824122,
            0.8956197493411856,
            0.22557165737149715,
        ],
        [
            0.10560669451549878,
            2.799486328979064,
            0.869082212788759,
            5.209004524344666,
            0.8903674796589355,
            3.1494867560593933,
            0.8939664328113363,
            8.229423492288294,
            0.10560669451549878,
            0.869082212788759,
            0.8903674796589355,
            8.229423492288294,
            0.8939664328113363,
            0.1340241573819292,
        ],
        [
            0.08615885630000791,
            2.885645185279072,
            0.44074890315982446,
            5.64975342750449,
            0.9425699260811738,
            4.0920566821405675,
            0.9040831722665535,
            4.407489031598244,
            0.08615885630000791,
            0.44074890315982446,
            0.9425699260811738,
            4.407489031598244,
            0.9040831722665535,
            0.13404047971467026,
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
