#include <vector>
#include <string>
#include <assert.h>

#include "ert/analysis/update.hpp"
#include <ert/util/type_vector_functions.h>
#include <ert/res_util/thread_pool.hpp>
#include <ert/res_util/matrix.hpp>
#include <ert/res_util/metric.hpp>
#include <ert/res_util/memory.hpp>
#include <ert/util/int_vector.h>
#include <ert/util/bool_vector.h>
#include <ert/util/hash.hpp>
#include <ert/enkf/local_ministep.hpp>
#include <ert/enkf/enkf_config_node.hpp>
#include <ert/enkf/enkf_analysis.hpp>
#include <ert/util/vector.hpp>
#include <ert/enkf/obs_data.hpp>
#include <ert/enkf/meas_data.hpp>
#include <ert/analysis/ies/ies_data.hpp>
#include <ert/analysis/ies/ies.hpp>
#include <ert/analysis/analysis_module.hpp>

static auto logger = ert::get_logger("analysis.update");

namespace analysis {

/*
   Helper structs used to pass information to the multithreaded serialize and
   deserialize routines. A serialize_info structure is used at three levels, and
   this also reflects on the degree of change of the various members.

     One ministep: This corresponds to one full execution of the function
         enkf_main_analysis_update().

     One dataset: Each ministep can consist of several local dataset.

     One node: Each local dataset will consist of several nodes.

   The members explicitly marked with a mutable: comment will vary in the
   lifetime of the serialization_info, the other members will be constant. 
*/

typedef struct {
    int row_offset;
    const active_list_type *active_list;
    const char *key;
} serialize_node_info_type;

typedef struct {
    enkf_fs_type *src_fs;
    enkf_fs_type *target_fs;
    const ensemble_config_type *ensemble_config;
    int iens1; /* Inclusive lower limit. */
    int iens2; /* NOT inclusive upper limit. */
    int report_step;
    int target_step;
    matrix_type *A;
    const int_vector_type *iens_active_index;

    std::vector<int>
        active_size; /* mutable: For the serialization of one dataset - many nodes */
    std::vector<int>
        row_offset; /* mutable: For the serialization of one dataset - many nodes */
    serialize_node_info_type
        *node_info; /* mutable: For the serialization of one node */
} serialize_info_type;

/*
 This is very awkward; the problem is that for the GEN_DATA type the config
 object does not really own the size. Instead the size is pushed (on load time)
 from gen_data instances to the gen_data_config instance. Therefore we have to
 assert that at least one gen_data instance has been loaded (and consequently
 updated the gen_data_config instance) before calling enkf_config_node_get_data_size.
*/
void ensure_node_loaded(const enkf_config_node_type *config_node,
                        enkf_fs_type *fs, int report_step) {
    if (enkf_config_node_get_impl_type(config_node) == GEN_DATA) {
        enkf_node_type *node = enkf_node_alloc(config_node);
        node_id_type node_id = {.report_step = report_step, .iens = 0};

        enkf_node_load(node, fs, node_id);

        enkf_node_free(node);
    }
}

void serialize_node(enkf_fs_type *fs, const enkf_config_node_type *config_node,
                    int iens, int report_step, int row_offset, int column,
                    const active_list_type *active_list, matrix_type *A) {

    enkf_node_type *node = enkf_node_alloc(config_node);
    node_id_type node_id = {.report_step = report_step, .iens = iens};
    enkf_node_serialize(node, fs, node_id, active_list, A, row_offset, column);
    enkf_node_free(node);
}

void serialize_ministep(const ensemble_config_type *ens_config,
                        const local_ministep_type *ministep, int report_step,
                        enkf_fs_type *target_fs,
                        const int_vector_type *iens_active_index,
                        matrix_type *A) {

    int ens_size = matrix_get_columns(A);
    int current_row = 0;

    for (auto &key : ministep->unscaled_keys()) {
        const active_list_type *active_list =
            ministep->get_active_data_list(key.data());
        const enkf_config_node_type *config_node =
            ensemble_config_get_node(ens_config, key.c_str());

        ensure_node_loaded(config_node, target_fs, report_step);
        int active_size = active_list_get_active_size(
            active_list,
            enkf_config_node_get_data_size(config_node, report_step));

        int matrix_rows = matrix_get_rows(A);
        if ((active_size + current_row) > matrix_rows)
            matrix_resize(A, matrix_rows + 2 * active_size, ens_size, true);

        if (active_size > 0) {
            for (int iens = 0; iens < ens_size; iens++) {
                int column = int_vector_iget(iens_active_index, iens);
                if (column >= 0) {
                    serialize_node(target_fs, config_node, iens, report_step,
                                   current_row, column, active_list, A);
                }
            }
            current_row += active_size;
        }
    }
    matrix_shrink_header(A, current_row, ens_size);
}

void deserialize_node(enkf_fs_type *target_fs, enkf_fs_type *src_fs,
                      const enkf_config_node_type *config_node, int iens,
                      int target_step, int row_offset, int column,
                      const active_list_type *active_list, matrix_type *A) {

    node_id_type node_id = {.report_step = target_step, .iens = iens};
    enkf_node_type *node = enkf_node_alloc(config_node);

    // If partly active, init node from source fs (deserialize will fill it only in part)
    enkf_node_load(node, src_fs, node_id);

    // deserialize the matrix into the node (and writes it to the target fs)
    enkf_node_deserialize(node, target_fs, node_id, active_list, A, row_offset,
                          column);
    state_map_update_undefined(enkf_fs_get_state_map(target_fs), iens,
                               STATE_INITIALIZED);
    enkf_node_free(node);
}

void assert_matrix_size(const matrix_type *m, const char *name, int rows,
                        int columns) {
    if (m) {
        if (!matrix_check_dims(m, rows, columns))
            throw std::invalid_argument(
                "matrix mismatch " + std::string(name) + ":[" +
                std::to_string(matrix_get_rows(m)) + "," +
                std::to_string(matrix_get_columns(m)) + "   - expected:[" +
                std::to_string(rows) + "," + std::to_string(columns) + "]");
    } else
        throw std::invalid_argument("matrix: " + std::string(name) + "is NULL");
}

void deserialize_ministep(ensemble_config_type *ensemble_config,
                          const local_ministep_type *ministep,
                          enkf_fs_type *target_fs,
                          const int_vector_type *iens_active_index,
                          matrix_type *A) {

    int ens_size = int_vector_size(iens_active_index);
    const int target_step = 0;
    int current_row = 0;
    for (auto &key : ministep->unscaled_keys()) {
        const active_list_type *active_list =
            ministep->get_active_data_list(key.data());
        const enkf_config_node_type *config_node =
            ensemble_config_get_node(ensemble_config, key.c_str());
        ensure_node_loaded(config_node, target_fs, 0);
        int active_size = active_list_get_active_size(
            active_list, enkf_config_node_get_data_size(config_node, 0));
        if (active_size > 0) {
            for (int iens = 0; iens < ens_size; iens++) {
                int column = int_vector_iget(iens_active_index, iens);
                if (column >= 0)
                    deserialize_node(target_fs, target_fs, config_node, iens,
                                     target_step, current_row, column,
                                     active_list, A);
            }
            current_row += active_size;
        }
    }
}

/*
load a set of parameters from a enkf_fs_type storage into a set of
matrices.
*/
matrix_type *load_parameters(enkf_fs_type *target_fs,
                             ensemble_config_type *ensemble_config,
                             const int_vector_type *iens_active_index,
                             int last_step, int active_ens_size,
                             const local_ministep_type *ministep) {

    matrix_type *parameters = nullptr;
    const auto &unscaled_keys = ministep->unscaled_keys();
    if (unscaled_keys.size() != 0) {
        int matrix_start_size = 250000;
        matrix_type *A = matrix_alloc(matrix_start_size, active_ens_size);

        serialize_ministep(ensemble_config, ministep, last_step, target_fs,
                           iens_active_index, A);

        parameters = matrix_alloc_copy(A);
        matrix_free(A);
    }

    return parameters;
}

/*
Store a set of parameters into a enkf_fs_type storage
*/
void save_parameters(enkf_fs_type *target_fs,
                     ensemble_config_type *ensemble_config,
                     const int_vector_type *iens_active_index, int last_step,
                     const local_ministep_type *ministep, matrix_type *A) {
    assert(A != nullptr);
    deserialize_ministep(ensemble_config, ministep, target_fs,
                         iens_active_index, A);
}

/*
load a set of parameters from a enkf_fs_type storage into a set of
matrices with the corresponding row-scaling object.
*/
std::vector<std::pair<matrix_type *, std::shared_ptr<RowScaling>>>
load_row_scaling_parameters(enkf_fs_type *target_fs,
                            ensemble_config_type *ensemble_config,
                            int_vector_type *iens_active_index, int last_step,
                            int active_ens_size,
                            const local_ministep_type *ministep) {

    int matrix_start_size = 250000;

    std::vector<std::pair<matrix_type *, std::shared_ptr<RowScaling>>>
        parameters;

    const auto &scaled_keys = ministep->scaled_keys();
    if (scaled_keys.size() > 0) {
        matrix_type *A = matrix_alloc(matrix_start_size, active_ens_size);

        for (const auto &key : scaled_keys) {
            const active_list_type *active_list =
                ministep->get_active_data_list(key.data());
            const auto *config_node =
                ensemble_config_get_node(ensemble_config, key.c_str());
            const int node_size =
                enkf_config_node_get_data_size(config_node, last_step);
            if (matrix_get_rows(A) < node_size)
                matrix_resize(A, node_size, active_ens_size, false);

            for (int iens = 0; iens < int_vector_size(iens_active_index);
                 iens++) {
                int column = int_vector_iget(iens_active_index, iens);
                if (column >= 0) {
                    serialize_node(target_fs, config_node, iens, last_step, 0,
                                   column, active_list, A);
                }
            }
            auto row_scaling = ministep->get_row_scaling(key);

            matrix_shrink_header(A, row_scaling->size(), matrix_get_columns(A));
            parameters.emplace_back(matrix_alloc_copy(A), row_scaling);
        }
        matrix_free(A);
    }

    return parameters;
}

/*
Store a set of row-scaled parameters into a enkf_fs_type storage
*/
void save_row_scaling_parameters(
    enkf_fs_type *target_fs, ensemble_config_type *ensemble_config,
    int_vector_type *iens_active_index, const local_ministep_type *ministep,
    const std::vector<std::pair<matrix_type *, std::shared_ptr<RowScaling>>>
        &row_scaling_list) {

    assert(row_scaling_list.size() > 0);
    const auto &scaled_keys = ministep->scaled_keys();

    for (size_t ikw = 0; ikw < scaled_keys.size(); ikw++) {
        const auto &key = scaled_keys[ikw];
        const active_list_type *active_list =
            ministep->get_active_data_list(key.data());
        matrix_type *A = row_scaling_list[ikw].first;
        for (int iens = 0; iens < int_vector_size(iens_active_index); iens++) {
            int column = int_vector_iget(iens_active_index, iens);
            if (column >= 0) {
                deserialize_node(
                    target_fs, target_fs,
                    ensemble_config_get_node(ensemble_config, key.c_str()),
                    iens, 0, 0, column, active_list, A);
            }
        }
    }
}

void run_analysis_update_without_rowscaling(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    const bool_vector_type *ens_mask, const bool_vector_type *obs_mask,
    const matrix_type *S, const matrix_type *E, const matrix_type *D,
    const matrix_type *R, matrix_type *A) {

    ert::utils::Benchmark benchmark(logger,
                                    "run_analysis_update_without_rowscaling");
    assert(A != nullptr);

    const int cpu_threads = 4;
    thread_pool_type *tp = thread_pool_alloc(cpu_threads, false);

    int active_ens_size = matrix_get_columns(S);
    int active_obs_size = matrix_get_rows(S);

    matrix_type *X = matrix_alloc(active_ens_size, active_ens_size);

    if (module_config.iterable()) {
        ies::init_update(module_data, ens_mask, obs_mask, S, R, E, D);
        ies::updateA(module_config, module_data, A, S, R, E, D);
    } else {
        ies::initX(module_config, S, R, E, D, X);
        matrix_inplace_matmul_mt2(A, X, tp);
    }
    matrix_free(X);
    thread_pool_free(tp);
}

/*
Run the row-scaling enabled update algorithm on a set of A matrices.
*/
void run_analysis_update_with_rowscaling(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    const bool_vector_type *ens_mask, const bool_vector_type *obs_mask,
    const matrix_type *S, const matrix_type *E, const matrix_type *D,
    const matrix_type *R,
    const std::vector<std::pair<matrix_type *, std::shared_ptr<RowScaling>>>
        &parameters) {

    ert::utils::Benchmark benchmark(logger,
                                    "run_analysis_update_with_rowscaling");
    assert(parameters.size() > 0);

    int active_ens_size = matrix_get_columns(S);
    int active_obs_size = matrix_get_rows(S);
    matrix_type *X = matrix_alloc(active_ens_size, active_ens_size);

    if (module_config.iterable()) {
        throw std::logic_error("Sorry - row scaling for distance based "
                               "localization can not be combined with "
                               "analysis modules which update the A matrix");
    }

    for (auto &[A, row_scaling] : parameters) {
        ies::initX(module_config, S, R, E, D, X);
        row_scaling->multiply(A, X);
    }

    matrix_free(X);
}

/*
Check whether the current state and config allows the update algorithm
to be executed
*/
bool assert_update_viable(const analysis_config_type *analysis_config,
                          const enkf_fs_type *source_fs,
                          const int total_ens_size,
                          const local_updatestep_type *updatestep) {
    state_map_type *source_state_map = enkf_fs_get_state_map(source_fs);
    const int active_ens_size =
        state_map_count_matching(source_state_map, STATE_HAS_DATA);

    if (!analysis_config_have_enough_realisations(
            analysis_config, active_ens_size, total_ens_size)) {
        fprintf(stderr,
                "** ERROR ** There are %d active realisations left, which is "
                "less than the minimum specified - stopping assimilation.\n",
                active_ens_size);
        return false;
    }

    // exit if multi step update with iterable modules
    if (local_updatestep_get_num_ministep(updatestep) > 1 &&
        analysis_config_get_module_option(analysis_config, ANALYSIS_ITERABLE)) {
        util_exit("** ERROR: Can not combine iterable modules with multi step "
                  "updates - sorry\n");
    }
    return true;
}

/*
Copy all parameters from source_fs to target_fs
*/
void copy_parameters(enkf_fs_type *source_fs, enkf_fs_type *target_fs,
                     const ensemble_config_type *ensemble_config,
                     const int_vector_type *ens_active_list) {

    /*
      Copy all the parameter nodes from source case to target case;
      nodes which are updated will be fetched from the new target
      case, and nodes which are not updated will be manually copied
      over there.
    */

    if (target_fs != source_fs) {
        std::vector<std::string> param_keys =
            ensemble_config_keylist_from_var_type(ensemble_config, PARAMETER);
        for (auto &key : param_keys) {
            enkf_config_node_type *config_node =
                ensemble_config_get_node(ensemble_config, key.c_str());
            enkf_node_type *data_node = enkf_node_alloc(config_node);
            for (int j = 0; j < int_vector_size(ens_active_list); j++) {
                node_id_type node_id;
                node_id.iens = int_vector_iget(ens_active_list, j);
                node_id.report_step = 0;

                enkf_node_load(data_node, source_fs, node_id);
                enkf_node_store(data_node, target_fs, node_id);
            }
            enkf_node_free(data_node);
        }
    }
}

void assert_size_equal(int ens_size, const bool_vector_type *ens_mask) {
    if (bool_vector_size(ens_mask) != ens_size)
        throw std::logic_error(
            "fundamental inconsistency detected. Total ens_size:" +
            std::to_string(ens_size) +
            ", mask_size:" + std::to_string(bool_vector_size(ens_mask)));
}

bool smoother_update(std::vector<int> step_list,
                     const local_updatestep_type *updatestep,
                     int total_ens_size, enkf_obs_type *obs,
                     rng_type *shared_rng,
                     const analysis_config_type *analysis_config,
                     ensemble_config_type *ensemble_config,
                     enkf_fs_type *source_fs, enkf_fs_type *target_fs,
                     FILE *log_stream, bool verbose) {
    if (!assert_update_viable(analysis_config, source_fs, total_ens_size,
                              updatestep))
        return false;

    ert::utils::scoped_memory_logger memlogger(logger, "smoother_update");
    /*
    Observations and measurements are collected in these temporary
    structures. obs_data is a precursor for the 'd' vector, and
    meas_data is a precursor for the 'S' matrix'.

    The reason for going via these temporary structures is to support
    deactivating observations which should not be used in the update
    process.
    */
    bool_vector_type *ens_mask = bool_vector_alloc(total_ens_size, false);
    state_map_type *source_state_map = enkf_fs_get_state_map(source_fs);
    state_map_select_matching(source_state_map, ens_mask, STATE_HAS_DATA, true);
    double global_std_scaling =
        analysis_config_get_global_std_scaling(analysis_config);
    meas_data_type *meas_data = meas_data_alloc(ens_mask);
    int_vector_type *ens_active_list = bool_vector_alloc_active_list(ens_mask);

    copy_parameters(source_fs, target_fs, ensemble_config, ens_active_list);

    int current_step = step_list.back();

    /* Looping over local analysis ministep */
    for (int ministep_nr = 0;
         ministep_nr < local_updatestep_get_num_ministep(updatestep);
         ministep_nr++) {
        local_ministep_type *ministep =
            local_updatestep_iget_ministep(updatestep, ministep_nr);
        local_obsdata_type *obsdata = local_ministep_get_obsdata(ministep);

        obs_data_type *obs_data = obs_data_alloc(global_std_scaling);

        obs_data_reset(obs_data);
        meas_data_reset(meas_data);

        /*
        Temporarily we will just force the timestep from the input
        argument onto the obsdata instance; in the future the
        obsdata should hold it's own here.
        */
        local_obsdata_reset_tstep_list(obsdata, step_list);

        double alpha = analysis_config_get_alpha(analysis_config);
        double std_cutoff = analysis_config_get_std_cutoff(analysis_config);
        enkf_obs_get_obs_and_measure_data(obs, source_fs, obsdata,
                                          ens_active_list, meas_data, obs_data);

        enkf_analysis_deactivate_outliers(obs_data, meas_data, std_cutoff,
                                          alpha, verbose);

        local_ministep_add_obs_data(ministep, obs_data);

        enkf_analysis_fprintf_obs_summary(obs_data, meas_data, step_list,
                                          local_ministep_get_name(ministep),
                                          log_stream);

        if ((obs_data_get_active_size(obs_data) > 0) &&
            (meas_data_get_active_obs_size(meas_data) > 0)) {
            int_vector_type *iens_active_index =
                bool_vector_alloc_active_index_list(ens_mask, -1);

            /*
            The update for one local_dataset instance consists of two main chunks:

            1. The first chunk updates all the parameters which don't have row
                scaling attached. These parameters are serialized together to the A
                matrix and all the parameters are updated in one go.

            2. The second chunk is loop over all the parameters which have row
                scaling attached. These parameters are updated one at a time.
            */

            analysis_module_type *module =
                analysis_config_get_active_module(analysis_config);
            assert_size_equal(total_ens_size, ens_mask);

            const auto *module_config =
                analysis_module_get_module_config(module);
            auto *module_data = analysis_module_get_module_data(module);
            // E matrix is generated with shared rng, thus only creating it once for identical results
            int active_ens_size = meas_data_get_active_ens_size(meas_data);
            matrix_type *E =
                obs_data_allocE(obs_data, shared_rng, active_ens_size);

            // Part 1: Parameters which do not have row scaling attached.
            auto A =
                load_parameters(target_fs, ensemble_config, iens_active_index,
                                current_step, active_ens_size, ministep);

            auto S = meas_data_allocS(meas_data);
            int active_obs_size = obs_data_get_active_size(obs_data);
            matrix_type *R = obs_data_allocR(obs_data);
            matrix_type *D = obs_data_allocD(obs_data, E, S);
            assert_matrix_size(E, "E", active_obs_size, active_ens_size);
            assert_matrix_size(D, "D", active_obs_size, active_ens_size);
            assert_matrix_size(S, "S", active_obs_size, active_ens_size);
            assert_matrix_size(R, "R", active_obs_size, active_obs_size);

            const bool_vector_type *obs_mask =
                obs_data_get_active_mask(obs_data);
            obs_data_scale(obs_data, S, E, D, R, nullptr);

            if (A != nullptr) {
                run_analysis_update_without_rowscaling(*module_config,
                                                       *module_data, ens_mask,
                                                       obs_mask, S, E, D, R, A);
                save_parameters(target_fs, ensemble_config, iens_active_index,
                                current_step, ministep, A);
                matrix_free(A);
            }

            // Part 2: Parameters which do have row scaling attached.
            auto row_scaling_parameters = load_row_scaling_parameters(
                target_fs, ensemble_config, iens_active_index, current_step,
                active_ens_size, ministep);

            if (row_scaling_parameters.size() > 0) {
                run_analysis_update_with_rowscaling(
                    *module_config, *module_data, ens_mask, obs_mask, S, E, D,
                    R, row_scaling_parameters);
                save_row_scaling_parameters(target_fs, ensemble_config,
                                            iens_active_index, ministep,
                                            row_scaling_parameters);
                for (auto [A, _] : row_scaling_parameters)
                    matrix_free(A);
            }

            matrix_free(E);
            matrix_free(S);
            matrix_free(D);
            matrix_free(R);
        } else if (target_fs != source_fs)
            logger->error("No active observations/parameters for MINISTEP: {}.",
                          local_ministep_get_name(ministep));
    }

    state_map_type *target_state_map = enkf_fs_get_state_map(target_fs);

    if (target_state_map != source_state_map) {
        state_map_set_from_inverted_mask(target_state_map, ens_mask,
                                         STATE_PARENT_FAILURE);
        state_map_set_from_mask(target_state_map, ens_mask, STATE_INITIALIZED);
        enkf_fs_fsync(target_fs);
    }

    int_vector_free(ens_active_list);
    meas_data_free(meas_data);
    bool_vector_free(ens_mask);

    return true;
}
} // namespace analysis
