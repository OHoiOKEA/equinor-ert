/*
   Copyright (C) 2011  Equinor ASA, Norway.
   The file 'enkf_main.c' is part of ERT - Ensemble based Reservoir Tool.

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

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <future>
#include <string>
#include <tuple>
#include <unordered_map>
#include <vector>

#include <ert/python.hpp>
#include <ert/res_util/path_fmt.hpp>
#include <ert/util/bool_vector.h>
#include <ert/util/hash.h>
#include <ert/util/int_vector.h>
#include <ert/util/rng.h>
#include <ert/util/type_vector_functions.h>
#include <ert/util/vector.hpp>

#include <ert/logging.hpp>
#include <ert/res_util/subst_list.hpp>

#include <ert/sched/history.hpp>

#include <ert/analysis/analysis_module.hpp>
#include <ert/analysis/enkf_linalg.hpp>
#include <ert/analysis/update.hpp>

#include <ert/enkf/enkf_analysis.hpp>
#include <ert/enkf/enkf_config_node.hpp>
#include <ert/enkf/enkf_main.hpp>
#include <ert/enkf/enkf_obs.hpp>
#include <ert/enkf/enkf_state.hpp>
#include <ert/enkf/enkf_types.hpp>
#include <ert/enkf/field.hpp>
#include <ert/enkf/obs_data.hpp>

#include <ert/concurrency.hpp>

#include <ert/python.hpp>

static auto logger = ert::get_logger("enkf");

/*
   This object should contain **everything** needed to run a enkf
   simulation. A way to wrap up all available information/state and
   pass it around. An attempt has been made to collect various pieces
   of related information together in a couple of objects
   (model_config, ecl_config, site_config and ensemble_config). When
   it comes to these holding objects the following should be observed:

    1. It not always obvious where a piece of information should be
       stored, i.e. the grid is a property of the model, however it is
       an eclipse grid, and hence also belongs to eclipse
       configuration?? [In this case ecl_config wins out.]

    2. The information stored in these objects is typically passed on
       to the enkf_state object, where it is used.

    3. At enkf_state level it is not really consequent - in some cases
       the enkf_state object takes a scalar copy ,
       and in other cases only a pointer down to the underlying
       enkf_main object is taken. In the former case it is no way to
       change global behaviour by modifying the enkf_main objects.

       In the enkf_state object the fields of the member_config,
       ecl_config, site_config and ensemble_config objects are mixed
       and matched into other small holding objects defined in
       enkf_state.c.
*/

#define ENKF_MAIN_ID 8301

struct enkf_main_struct {
    UTIL_TYPE_ID_DECLARATION;
    enkf_fs_type *dbase; /* The internalized information. */

    const res_config_type *res_config;
    rng_manager_type *rng_manager;
    rng_type *shared_rng;

    enkf_obs_type *obs;

    enkf_state_type **ensemble; /* The ensemble ... */
    int ens_size;               /* The size of the ensemble */
};

void enkf_main_init_internalization(enkf_main_type *);
static void enkf_main_close_fs(enkf_main_type *enkf_main);
static void enkf_main_init_fs(enkf_main_type *enkf_main);
static void enkf_main_user_select_initial_fs(enkf_main_type *enkf_main);
static void enkf_main_free_ensemble(enkf_main_type *enkf_main);

UTIL_SAFE_CAST_FUNCTION(enkf_main, ENKF_MAIN_ID)
UTIL_IS_INSTANCE_FUNCTION(enkf_main, ENKF_MAIN_ID)

const analysis_config_type *
enkf_main_get_analysis_config(const enkf_main_type *enkf_main) {
    return res_config_get_analysis_config(enkf_main->res_config);
}

const char *enkf_main_get_site_config_file(const enkf_main_type *enkf_main) {
    return site_config_get_config_file(enkf_main_get_site_config(enkf_main));
}

ensemble_config_type *
enkf_main_get_ensemble_config(const enkf_main_type *enkf_main) {
    return res_config_get_ensemble_config(enkf_main->res_config);
}

const site_config_type *
enkf_main_get_site_config(const enkf_main_type *enkf_main) {
    return res_config_get_site_config(enkf_main->res_config);
}

const res_config_type *
enkf_main_get_res_config(const enkf_main_type *enkf_main) {
    return enkf_main->res_config;
}

subst_config_type *enkf_main_get_subst_config(const enkf_main_type *enkf_main) {
    return res_config_get_subst_config(enkf_main->res_config);
}

subst_list_type *enkf_main_get_data_kw(const enkf_main_type *enkf_main) {
    return subst_config_get_subst_list(enkf_main_get_subst_config(enkf_main));
}

model_config_type *enkf_main_get_model_config(const enkf_main_type *enkf_main) {
    return res_config_get_model_config(enkf_main->res_config);
}

const ecl_config_type *
enkf_main_get_ecl_config(const enkf_main_type *enkf_main) {
    return res_config_get_ecl_config(enkf_main->res_config);
}

int enkf_main_get_history_length(const enkf_main_type *enkf_main) {
    return model_config_get_last_history_restart(
        enkf_main_get_model_config(enkf_main));
}

enkf_obs_type *enkf_main_get_obs(const enkf_main_type *enkf_main) {
    return enkf_main->obs;
}

bool enkf_main_have_obs(const enkf_main_type *enkf_main) {
    return enkf_obs_have_obs(enkf_main->obs);
}

const hook_manager_type *
enkf_main_get_hook_manager(const enkf_main_type *enkf_main) {
    return res_config_get_hook_manager(enkf_main->res_config);
}

void enkf_main_alloc_obs(enkf_main_type *enkf_main) {
    const ecl_config_type *ecl_config = enkf_main_get_ecl_config(enkf_main);
    model_config_type *model_config = enkf_main_get_model_config(enkf_main);
    enkf_main->obs = enkf_obs_alloc(
        model_config_get_history(model_config),
        model_config_get_external_time_map(model_config),
        ecl_config_get_grid(ecl_config), ecl_config_get_refcase(ecl_config),
        enkf_main_get_ensemble_config(enkf_main));
}

bool enkf_main_load_obs(enkf_main_type *enkf_main, const char *obs_config_file,
                        bool clear_existing) {
    if (clear_existing)
        enkf_obs_clear(enkf_main->obs);

    if (!enkf_obs_is_valid(enkf_main->obs)) {
        fprintf(stderr,
                "** Warning: failed to load observation data from: %s \n",
                obs_config_file);
        return false;
    }

    enkf_obs_load(enkf_main->obs, obs_config_file,
                  analysis_config_get_std_cutoff(
                      enkf_main_get_analysis_config(enkf_main)));
    return true;
}

static void enkf_main_add_internal_subst_kw(enkf_main_type *enkf_main,
                                            const char *key, const char *value,
                                            const char *help_text) {
    subst_config_add_internal_subst_kw(enkf_main_get_subst_config(enkf_main),
                                       key, value, help_text);
}

void enkf_main_free(enkf_main_type *enkf_main) {
    if (enkf_main->rng_manager)
        rng_manager_free(enkf_main->rng_manager);

    if (enkf_main->shared_rng)
        rng_free(enkf_main->shared_rng);

    if (enkf_main->obs)
        enkf_obs_free(enkf_main->obs);

    enkf_main_free_ensemble(enkf_main);
    enkf_main_close_fs(enkf_main);

    delete enkf_main;
}

void enkf_main_exit(enkf_main_type *enkf_main) {
    enkf_main_free(enkf_main);
    exit(0);
}

static void enkf_main_write_run_path(enkf_main_type *enkf_main,
                                     const ert_run_context_type *run_context) {
    runpath_list_type *runpath_list = enkf_main_get_runpath_list(enkf_main);
    runpath_list_clear(runpath_list);
    for (int iens = 0; iens < ert_run_context_get_size(run_context); iens++) {
        if (ert_run_context_iactive(run_context, iens)) {
            run_arg_type *run_arg = ert_run_context_iget_arg(run_context, iens);
            runpath_list_add(runpath_list, run_arg_get_iens(run_arg),
                             run_arg_get_iter(run_arg),
                             run_arg_get_runpath(run_arg),
                             run_arg_get_job_name(run_arg));
            enkf_state_init_eclipse(enkf_main->res_config, run_arg);
        }
    }
    runpath_list_fprintf(runpath_list);
}

void enkf_main_create_run_path(enkf_main_type *enkf_main,
                               const ert_run_context_type *run_context) {
    enkf_main_init_run(enkf_main, run_context);
    enkf_main_write_run_path(enkf_main, run_context);
}

/*
   This function will initialize the necessary enkf_main structures
   before a run. Currently this means:

     1. Set the enkf_sched instance - either by loading from file or
        by using the default.

     2. Set up the configuration of what should be internalized.

*/

void enkf_main_init_run(enkf_main_type *enkf_main,
                        const ert_run_context_type *run_context) {
    enkf_main_init_internalization(enkf_main);
    {
        std::vector<std::string> param_list =
            ensemble_config_keylist_from_var_type(
                enkf_main_get_ensemble_config(enkf_main), PARAMETER);
        enkf_main_initialize_from_scratch(enkf_main, param_list, run_context);
    }
}

ert_run_context_type *enkf_main_alloc_ert_run_context_ENSEMBLE_EXPERIMENT(
    const enkf_main_type *enkf_main, enkf_fs_type *fs,
    bool_vector_type *iactive, int iter) {
    const model_config_type *model_config =
        enkf_main_get_model_config(enkf_main);
    return ert_run_context_alloc_ENSEMBLE_EXPERIMENT(
        fs, iactive, model_config_get_runpath_fmt(model_config),
        model_config_get_jobname_fmt(model_config),
        enkf_main_get_data_kw(enkf_main), iter);
}

/*
   There is NO tagging anymore - if the user wants tags - the user
   supplies the key __WITH__ tags.
*/
void enkf_main_add_data_kw(enkf_main_type *enkf_main, const char *key,
                           const char *value) {
    subst_config_add_subst_kw(enkf_main_get_subst_config(enkf_main), key,
                              value);
}

static enkf_main_type *enkf_main_alloc_empty() {
    enkf_main_type *enkf_main = new enkf_main_type;
    UTIL_TYPE_ID_INIT(enkf_main, ENKF_MAIN_ID);
    enkf_main->ensemble = NULL;
    enkf_main->rng_manager = NULL;
    enkf_main->shared_rng = NULL;
    enkf_main->ens_size = 0;
    enkf_main->res_config = NULL;
    enkf_main->obs = NULL;

    enkf_main_init_fs(enkf_main);

    return enkf_main;
}

runpath_list_type *enkf_main_get_runpath_list(const enkf_main_type *enkf_main) {
    return hook_manager_get_runpath_list(enkf_main_get_hook_manager(enkf_main));
}

rng_config_type *enkf_main_get_rng_config(const enkf_main_type *enkf_main) {
    return res_config_get_rng_config(enkf_main->res_config);
}

rng_type *enkf_main_get_shared_rng(enkf_main_type *enkf_main) {
    return enkf_main->shared_rng;
}

void enkf_main_rng_init(enkf_main_type *enkf_main) {
    enkf_main->rng_manager =
        rng_config_alloc_rng_manager(enkf_main_get_rng_config(enkf_main));
    enkf_main->shared_rng = rng_manager_alloc_rng(enkf_main->rng_manager);
}

static void enkf_main_init_obs(enkf_main_type *enkf_main) {
    enkf_main_alloc_obs(enkf_main);

    const model_config_type *model_config =
        enkf_main_get_model_config(enkf_main);
    const char *obs_config_file =
        model_config_get_obs_config_file(model_config);
    if (obs_config_file)
        enkf_main_load_obs(enkf_main, obs_config_file, true);
}

static void enkf_main_add_ensemble_members(enkf_main_type *enkf_main) {
    const model_config_type *model_config =
        enkf_main_get_model_config(enkf_main);
    int num_realizations = model_config_get_num_realizations(model_config);
    enkf_main_increase_ensemble(enkf_main, num_realizations);
}

/*
   This function boots everything needed for running a EnKF
   application from the provided res_config.

  Observe that the function will start with chdir() to the working directory
  specified by res_config, so that all subsequent file
  references are relative to the location of the configuration
  file. This also applies if the command_line argument given is a
  symlink.

    FORWARD_MODEL
    DATA_FILE
    SCHEDULE_FILE
    ECLBASE

*/

/*
   It is possible to pass NULL as the model_config argument, in that
   case only the site config file will be parsed. The purpose of this
   is mainly to be able to test that the site config file is valid.
*/

enkf_main_type *enkf_main_alloc(const res_config_type *res_config) {
    enkf_main_type *enkf_main = enkf_main_alloc_empty();
    enkf_main->res_config = res_config;

    enkf_main_rng_init(enkf_main);
    enkf_main_user_select_initial_fs(enkf_main);
    enkf_main_init_obs(enkf_main);
    enkf_main_add_ensemble_members(enkf_main);

    return enkf_main;
}

int enkf_main_get_ensemble_size(const enkf_main_type *enkf_main) {
    return enkf_main->ens_size;
}

/*
   In this function we initialize the variables which control
   which nodes are internalized (i.e. loaded from the forward
   simulation and stored in the enkf_fs 'database'). The system is
   based on two-levels:

   * Should we store the state? This is goverened by the variable
     model_config->internalize_state. If this is true we will
     internalize all nodes which have enkf_var_type = {dynamic_state ,
     static_state}. In the same way the variable
     model_config->internalize_results governs whether the dynamic
     results (i.e. summary variables in ECLIPSE speak) should be
     internalized.

   * In addition we have fine-grained control in the enkf_config_node
     objects where we can explicitly say that, altough we do not want
     to internalize the full state, we want to internalize e.g. the
     pressure field.

   * All decisions on internalization are based on a per report step
     basis.

   The user-space API for manipulating this is (extremely)
   limited. What is implemented here is the following:

     1. We internalize the initial dynamic state.

     2. For all the end-points in the current enkf_sched instance we
        internalize the state.

     3. store_results is set to true for all report steps irrespective
        of run_mode.

     4. We iterate over all the observations, and ensure that the
        observed nodes (i.e. the pressure for an RFT) are internalized
        (irrespective of whether they are of type dynamic_state or
        dynamic_result).

   Observe that this cascade can result in some nodes, i.e. a rate we
   are observing, to be marked for internalization several times -
   that is no problem.

   -----

   For performance reason model_config contains the bool vector
   __load_eclipse_restart; if it is true the ECLIPSE restart state is
   loaded from disk, otherwise no loading is performed. This implies
   that if we do not want to internalize the full state but for
   instance the pressure (i.e. for an RFT) we must set the
   __load_state variable for the actual report step to true.
*/

void enkf_main_init_internalization(enkf_main_type *enkf_main) {
    /* Clearing old internalize flags. */
    model_config_init_internalization(enkf_main_get_model_config(enkf_main));

    /* Internalizing the initial state. */
    model_config_set_internalize_state(enkf_main_get_model_config(enkf_main),
                                       0);

    /* Make sure we internalize at all observation times.*/
    {
        hash_type *map = enkf_obs_alloc_data_map(enkf_main->obs);
        hash_iter_type *iter = hash_iter_alloc(map);
        const char *obs_key = hash_iter_get_next_key(iter);

        while (obs_key != NULL) {
            obs_vector_type *obs_vector =
                enkf_obs_get_vector(enkf_main->obs, obs_key);
            enkf_config_node_type *data_node =
                obs_vector_get_config_node(obs_vector);
            int active_step = -1;
            do {
                active_step =
                    obs_vector_get_next_active_step(obs_vector, active_step);
                if (active_step >= 0)
                    enkf_config_node_set_internalize(data_node, active_step);
            } while (active_step >= 0);
            obs_key = hash_iter_get_next_key(iter);
        }
        hash_iter_free(iter);
        hash_free(map);
    }
}

void enkf_main_get_observations(const enkf_main_type *enkf_main,
                                const char *user_key, int obs_count,
                                time_t *obs_time, double *y, double *std) {
    ensemble_config_get_observations(enkf_main_get_ensemble_config(enkf_main),
                                     enkf_main->obs, user_key, obs_count,
                                     obs_time, y, std);
}

int enkf_main_get_observation_count(const enkf_main_type *enkf_main,
                                    const char *user_key) {
    return ensemble_config_get_observations(
        enkf_main_get_ensemble_config(enkf_main), enkf_main->obs, user_key, 0,
        NULL, NULL, NULL);
}

void enkf_main_install_SIGNALS(void) { util_install_signals(); }

ert_workflow_list_type *enkf_main_get_workflow_list(enkf_main_type *enkf_main) {
    return res_config_get_workflow_list(enkf_main->res_config);
}

int enkf_main_load_from_forward_model_with_fs(enkf_main_type *enkf_main,
                                              int iter,
                                              bool_vector_type *iactive,
                                              enkf_fs_type *fs) {
    model_config_type *model_config = enkf_main_get_model_config(enkf_main);
    ert_run_context_type *run_context =
        ert_run_context_alloc_ENSEMBLE_EXPERIMENT(
            fs, iactive, model_config_get_runpath_fmt(model_config),
            model_config_get_jobname_fmt(model_config),
            enkf_main_get_data_kw(enkf_main), iter);
    int loaded = enkf_main_load_from_run_context(enkf_main, run_context, fs);
    ert_run_context_free(run_context);
    return loaded;
}

int enkf_main_load_from_run_context(enkf_main_type *enkf_main,
                                    ert_run_context_type *run_context,
                                    enkf_fs_type *fs) {
    auto const ens_size = enkf_main_get_ensemble_size(enkf_main);
    auto const *iactive = ert_run_context_get_iactive(run_context);

    // Loading state from a fwd-model is mainly io-bound so we can
    // allow a lot more than #cores threads to execute in parallel.
    // The number 100 is quite arbitrarily chosen though and should
    // probably come from some resource like a site-config or similar.
    // NOTE that this mechanism only limits the number of *concurrently
    // executing* threads. The number of instantiated and stored futures
    // will be equal to the number of active realizations.
    Semafoor concurrently_executing_threads(100);
    std::vector<std::tuple<int, std::future<fw_load_status>>> futures;

    for (int iens = 0; iens < ens_size; ++iens) {
        if (bool_vector_iget(iactive, iens)) {

            futures.push_back(std::make_tuple(
                iens, // for logging later
                std::async(
                    std::launch::async,
                    [=](const int realisation, Semafoor &execution_limiter) {
                        // Acquire permit from semaphore or pause execution
                        // until one becomes available. A successfully acquired
                        // permit is released when exiting scope.
                        std::scoped_lock lock(execution_limiter);

                        auto *state_map = enkf_fs_get_state_map(
                            run_arg_get_sim_fs(ert_run_context_iget_arg(
                                run_context, realisation)));

                        state_map_update_undefined(state_map, realisation,
                                                   STATE_INITIALIZED);
                        try {
                            return enkf_state_load_from_forward_model(
                                enkf_main_iget_state(enkf_main, realisation),
                                ert_run_context_iget_arg(run_context,
                                                         realisation));
                        } catch (const std::invalid_argument) {
                            state_map_iset(state_map, realisation,
                                           STATE_LOAD_FAILURE);
                            return LOAD_FAILURE;
                        }
                    },
                    iens, std::ref(concurrently_executing_threads))));
        }
    }

    int loaded = 0;
    for (auto &[iens, fut] : futures) {
        int result = fut.get();
        if (result == LOAD_SUCCESSFUL) {
            loaded++;
        } else if (result == LOAD_FAILURE) {
            logger->warning("Function {}: Realization {} load failure",
                            __func__, iens);
        } else if (result == REPORT_STEP_INCOMPATIBLE) {
            logger->warning("The timesteps in refcase and "
                            "current simulation are "
                            "not in accordance - something wrong with "
                            "schedule file?");
            logger->warning("Function {}: Realization {} report step "
                            "incompatible",
                            __func__, iens);
        } else
            logger->error("Unknown load enum");
    }
    return loaded;
}

bool enkf_main_export_field(const enkf_main_type *enkf_main, const char *kw,
                            const char *path, bool_vector_type *iactive,
                            field_file_format_type file_type, int report_step) {
    enkf_fs_type *fs = enkf_main_get_fs(enkf_main);
    bool result = enkf_main_export_field_with_fs(enkf_main, kw, path, iactive,
                                                 file_type, report_step, fs);
    return result;
}

bool enkf_main_export_field_with_fs(const enkf_main_type *enkf_main,
                                    const char *kw, const char *path,
                                    bool_vector_type *iactive,
                                    field_file_format_type file_type,
                                    int report_step, enkf_fs_type *fs) {

    const ensemble_config_type *ensemble_config =
        enkf_main_get_ensemble_config(enkf_main);
    if (!ensemble_config_has_key(ensemble_config, kw))
        return false;

    enkf_config_node_type *config_node =
        ensemble_config_get_node(ensemble_config, kw);
    if (enkf_config_node_get_impl_type(config_node) != FIELD)
        return false;

    if (util_int_format_count(path) < 1)
        return false;

    enkf_node_type *node = enkf_node_alloc(config_node);
    model_config_type *mc = enkf_main_get_model_config(enkf_main);
    path_fmt_type *runpath_fmt = model_config_get_runpath_fmt(mc);
    const char *init_file =
        enkf_config_node_get_FIELD_fill_file(config_node, runpath_fmt);
    if (init_file)
        printf("init_file found: \"%s\", exporting initial value for inactive "
               "cells\n",
               init_file);
    else
        printf("no init_file found, exporting 0 or fill value for inactive "
               "cells\n");

    for (int iens = 0; iens < bool_vector_size(iactive); ++iens) {
        if (!bool_vector_iget(iactive, iens))
            continue;

        node_id_type node_id = {.report_step = report_step, .iens = iens};
        if (!enkf_node_try_load(node, fs, node_id))
            continue;

        path_fmt_type *export_path = path_fmt_alloc_path_fmt(path);
        char *filename = path_fmt_alloc_path(export_path, false, iens);
        path_fmt_free(export_path);

        char *path;
        util_alloc_file_components(filename, &path, NULL, NULL);
        if (path) {
            util_make_path(path);
            free(path);
        }

        const field_type *field = (const field_type *)enkf_node_value_ptr(node);
        field_export(field, filename, NULL, file_type,
                     true, //output_transform
                     init_file);

        free(filename);
    }
    enkf_node_free(node);

    return true;
}

queue_config_type *enkf_main_get_queue_config(enkf_main_type *enkf_main) {
    return res_config_get_queue_config(enkf_main_get_res_config(enkf_main));
}

rng_manager_type *enkf_main_get_rng_manager(const enkf_main_type *enkf_main) {
    return enkf_main->rng_manager;
}

std::vector<std::string> get_observation_keys(py::object self) {
    auto enkf_main = ert::from_cwrap<enkf_main_type>(self);
    std::vector<std::string> observations;

    hash_iter_type *obs_iter = enkf_obs_alloc_iter(enkf_main->obs);
    while (!hash_iter_is_complete(obs_iter)) {
        const char *obs_key = hash_iter_get_next_key(obs_iter);
        observations.push_back(obs_key);
    }
    hash_iter_free(obs_iter);
    return observations;
}

std::vector<std::string> get_parameter_keys(py::object self) {
    auto enkf_main = ert::from_cwrap<enkf_main_type>(self);

    std::vector<std::string> parameters;
    std::vector<std::string> keylist = ensemble_config_keylist_from_var_type(
        enkf_main_get_ensemble_config(enkf_main), PARAMETER);
    for (auto &key : keylist)
        /*
          Make sure the funny GEN_KW instance masquerading as
          SCHEDULE_PREDICTION_FILE is not added to the soup.
                */
        if (key != "PRED")
            parameters.push_back(key);
    return parameters;
}

RES_LIB_SUBMODULE("enkf_main", m) {
    using namespace py::literals;
    m.def("get_observation_keys", get_observation_keys);
    m.def("get_parameter_keys", get_parameter_keys);
    m.def(
        "create_run_path",
        [](py::object self, py::object run_context_py) {
            auto enkf_main = ert::from_cwrap<enkf_main_type>(self);
            auto run_context =
                ert::from_cwrap<ert_run_context_type>(run_context_py);
            return enkf_main_create_run_path(enkf_main, run_context);
        },
        py::arg("self"), py::arg("run_context"));
}

#include "enkf_main_ensemble.cpp"
#include "enkf_main_manage_fs.cpp"
