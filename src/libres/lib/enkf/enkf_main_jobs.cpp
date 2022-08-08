/*
   Copyright (C) 2012  Equinor ASA, Norway.

   The file 'enkf_main_jobs.c' is part of ERT - Ensemble based Reservoir Tool.

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

#include <cassert>
#include <vector>

#include <ert/util/string_util.h>
#include <ert/util/stringlist.h>

#include <ert/enkf/enkf_main.hpp>
#include <ert/logging.hpp>
#include <ert/util/type_vector_functions.hpp>

static auto logger = ert::get_logger("enkf");

static bool_vector_type *
alloc_iactive_vector_from_range(const stringlist_type *range, int startindex,
                                int endindex, int ens_size) {
    bool_vector_type *iactive;
    int range_list_size = stringlist_get_size(range);
    if ((range_list_size > startindex) && (range_list_size >= endindex)) {
        char *arg_string =
            stringlist_alloc_joined_substring(range, startindex, endindex, "");
        iactive = bool_vector_alloc(ens_size, false);
        string_util_update_active_mask(arg_string, iactive);
        free(arg_string);
    } else {
        iactive = bool_vector_alloc(ens_size, true);
    }
    return iactive;
}

// Internal workflow job
extern "C" C_USED void *enkf_main_exit_JOB(void *self,
                                           const stringlist_type *args) {
    enkf_main_type *enkf_main = enkf_main_safe_cast(self);
    enkf_main_exit(enkf_main);
    return NULL;
}

// Internal workflow job
extern "C" C_USED void *
enkf_main_pre_simulation_copy_JOB(void *self, const stringlist_type *args) {
    const char *source_path = stringlist_iget(args, 0);

    if (!util_entry_exists(source_path)) {
        logger->error("Error in workflow job PRE_SIMULATION_COPY"
                      "- source argument: {} not existing\n",
                      source_path);
        return NULL;
    }

    enkf_main_type *enkf_main = enkf_main_safe_cast(self);
    model_config_type *model_config =
        res_config_get_model_config(enkf_main_get_res_config(enkf_main));
    if (!model_config_data_root_is_set(model_config)) {
        logger->error(
            "Error in workflow job PRE_SIMULATION_COPY DATA_ROOT not set");
        return NULL;
    }

    char *target_path;
    if (stringlist_get_size(args) == 2) {
        const char *arg_path = stringlist_iget(args, 1);
        target_path = util_alloc_filename(
            model_config_get_data_root(model_config), arg_path, NULL);
    } else
        target_path =
            util_alloc_string_copy(model_config_get_data_root(model_config));

    util_make_path(target_path);
    if (util_is_directory(source_path)) {
        util_copy_directory(source_path, target_path);
        logger->info("Copying directory {} -> {}", source_path, target_path);
    } else {
        char *base_name = util_split_alloc_filename(source_path);
        char *target_file = util_alloc_filename(target_path, base_name, NULL);

        util_copy_file(source_path, target_file);
        logger->info("Copying file {} -> {}", source_path, target_path);

        free(base_name);
        free(target_file);
    }

    free(target_path);
    return NULL;
}
