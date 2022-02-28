/*
   Copyright (C) 2013  Equinor ASA, Norway.

   The file 'enkf_local_obsdata_node.c' is part of ERT - Ensemble based Reservoir Tool.

   ERT is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   ERT is distributed in the hope that it will be useful, but WITHOUT ANY
   WARRANTY; without even the implied warranty of MERCHANTABILITY or
   FITNESS FOR A PARTICULAR PURPOSE.

   See the GNU General Public License at <http://www.gnu.org/licenses/gpl.html>
   for more details.
*/
#include <stdlib.h>

#include <ert/util/test_util.h>

#include <ert/enkf/local_obsdata_node.hpp>

void test_content(local_obsdata_node_type *node) {
    const active_list_type *active_list =
        local_obsdata_node_get_active_list(node);

    test_assert_not_NULL(active_list);
    test_assert_true(active_list_is_instance(active_list));

    {
        active_list_type *new_active_list = active_list_alloc();

        active_list_add_index(new_active_list, 1098);

        test_assert_false(active_list_equal(
            new_active_list, local_obsdata_node_get_active_list(node)));
    }
}

int main(int argc, char **argv) {
    const char *obs_key = "1234";

    {
        local_obsdata_node_type *node = local_obsdata_node_alloc(obs_key);

        test_assert_true(local_obsdata_node_is_instance(node));
        test_assert_string_equal(obs_key, local_obsdata_node_get_key(node));
        test_content(node);
        local_obsdata_node_free(node);
    }

    {
        void *node = local_obsdata_node_alloc(obs_key);
        local_obsdata_node_free__(node);
    }
    exit(0);
}
