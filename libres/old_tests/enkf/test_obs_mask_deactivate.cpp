#include <stdio.h>
#include <string.h>

#include <ert/util/test_util.h>
#include <ert/util/int_vector.h>
#include <ert/util/type_vector_functions.h>

#include <ert/enkf/obs_data.hpp>

void test_obs_mask_deactivate() {

    obs_data_type *obs_data = obs_data_alloc(1.0);
    obs_block_type *obs_block =
        obs_data_add_block(obs_data, "OBS", 2, NULL, false);

    for (int iobs = 0; iobs < 2; iobs++)
        obs_block_iset(obs_block, iobs, iobs, 0.1);

    /* Check that the mask is all true:*/
    const bool_vector_type *pre_deactivate_mask =
        obs_data_get_active_mask(obs_data);
    test_assert_true(bool_vector_iget(pre_deactivate_mask, 0));
    test_assert_true(bool_vector_iget(pre_deactivate_mask, 1));

    /* Check that the we can deactivate a single block in the mask:*/
    obs_block_type *block = obs_data_iget_block(obs_data, 0);
    obs_block_deactivate(block, 0, false, "---");
    const bool_vector_type *mask = obs_data_get_active_mask(obs_data);
    test_assert_false(bool_vector_iget(mask, 0));
    test_assert_true(bool_vector_iget(mask, 1));
    obs_data_free(obs_data);
}

int main(int argc, char **argv) {
    test_obs_mask_deactivate();
    exit(0);
}
