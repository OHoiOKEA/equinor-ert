import gc

import pytest

from ert._c_wrappers.enkf import EnKFMain, ResConfig


def test_adding_priors(poly_case):
    m = poly_case
    prior = m.create_ensemble_context(
        "prior",
        [True] * 10,
        iteration=0,
    )
    m.sample_prior(prior.sim_fs, prior.active_realizations)
    m.createRunPath(prior)
    del m
    gc.collect()

    with open("coeff_priors", "a") as f:
        f.write("COEFF_D UNIFORM 0 5\n")
    m = EnKFMain(ResConfig("poly.ert"))

    prior = m.load_ensemble_context(
        "prior",
        [True] * 10,
        iteration=0,
    )
    with pytest.raises(
        ValueError,
        match="The configuration of GEN_KW "
        "parameter COEFFS is of size 4, expected 3",
    ):
        m.createRunPath(prior)
