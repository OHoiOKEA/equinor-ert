#include <vector>
#include <string>
#include <assert.h>
#include <fmt/format.h>
#include <cerrno>
#include <optional>

#include "ert/analysis/update.hpp"
#include <ert/res_util/matrix.hpp>
#include <ert/res_util/metric.hpp>
#include <ert/res_util/memory.hpp>
#include <ert/enkf/local_ministep.hpp>
#include <ert/enkf/enkf_config_node.hpp>
#include <ert/enkf/enkf_analysis.hpp>
#include <ert/enkf/obs_data.hpp>
#include <ert/enkf/meas_data.hpp>
#include <ert/analysis/ies/ies_data.hpp>
#include <ert/analysis/ies/ies.hpp>
#include <ert/analysis/analysis_module.hpp>
#include <ert/python.hpp>

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
    const ActiveList *active_list;
    const char *key;
} serialize_node_info_type;

typedef struct {
    enkf_fs_type *src_fs;
    enkf_fs_type *target_fs;
    const ensemble_config_type *ensemble_config;
    int iens1; /* Inclusive lower limit. */
    int iens2; /* NOT inclusive upper limit. */
    matrix_type *A;
    const int_vector_type *iens_active_index;

    std::vector<int>
        active_size; /* mutable: For the serialization of one dataset - many nodes */
    std::vector<int>
        row_offset; /* mutable: For the serialization of one dataset - many nodes */
    serialize_node_info_type
        *node_info; /* mutable: For the serialization of one node */
} serialize_info_type;

namespace {
std::vector<int>
bool_vector_to_active_list(const std::vector<bool> &bool_vector) {
    std::vector<int> active_list;
    for (int i = 0; i < bool_vector.size(); i++) {
        if (bool_vector[i])
            active_list.push_back(i);
    }
    return active_list;
}
} // namespace

/*
 This is very awkward; the problem is that for the GEN_DATA type the config
 object does not really own the size. Instead the size is pushed (on load time)
 from gen_data instances to the gen_data_config instance. Therefore we have to
 assert that at least one gen_data instance has been loaded (and consequently
 updated the gen_data_config instance) before calling enkf_config_node_get_data_size.
*/
void ensure_node_loaded(const enkf_config_node_type *config_node,
                        enkf_fs_type *fs) {
    if (enkf_config_node_get_impl_type(config_node) == GEN_DATA) {
        enkf_node_type *node = enkf_node_alloc(config_node);
        node_id_type node_id = {.report_step = 0, .iens = 0};

        enkf_node_load(node, fs, node_id);

        enkf_node_free(node);
    }
}

void serialize_node(enkf_fs_type *fs, const enkf_config_node_type *config_node,
                    int iens, int row_offset, int column,
                    const ActiveList *active_list, matrix_type *A) {

    enkf_node_type *node = enkf_node_alloc(config_node);
    node_id_type node_id = {.report_step = 0, .iens = iens};
    enkf_node_serialize(node, fs, node_id, active_list, A, row_offset, column);
    enkf_node_free(node);
}

void serialize_ministep(const ensemble_config_type *ens_config,
                        const local_ministep_type *ministep,
                        enkf_fs_type *target_fs,
                        const std::vector<int> &iens_active_index,
                        matrix_type *A) {

    int ens_size = matrix_get_columns(A);
    int current_row = 0;

    for (auto &key : ministep->unscaled_keys()) {
        const ActiveList *active_list =
            ministep->get_active_data_list(key.data());
        const enkf_config_node_type *config_node =
            ensemble_config_get_node(ens_config, key.c_str());

        ensure_node_loaded(config_node, target_fs);
        int active_size = active_list->active_size(
            enkf_config_node_get_data_size(config_node, 0));

        int matrix_rows = matrix_get_rows(A);
        if ((active_size + current_row) > matrix_rows)
            matrix_resize(A, matrix_rows + 2 * active_size, ens_size, true);
        if (active_size > 0) {
            for (int column = 0; column < ens_size; column++) {
                int iens = iens_active_index[column];
                serialize_node(target_fs, config_node, iens, current_row,
                               column, active_list, A);
            }
            current_row += active_size;
        }
    }
    matrix_shrink_header(A, current_row, ens_size);
}

void deserialize_node(enkf_fs_type *target_fs, enkf_fs_type *src_fs,
                      const enkf_config_node_type *config_node, int iens,
                      int row_offset, int column, const ActiveList *active_list,
                      const matrix_type *A) {

    node_id_type node_id = {.report_step = 0, .iens = iens};
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
                          const std::vector<int> &iens_active_index,
                          const matrix_type *A) {

    int ens_size = iens_active_index.size();
    int current_row = 0;
    for (auto &key : ministep->unscaled_keys()) {
        const ActiveList *active_list =
            ministep->get_active_data_list(key.data());
        const enkf_config_node_type *config_node =
            ensemble_config_get_node(ensemble_config, key.c_str());
        ensure_node_loaded(config_node, target_fs);
        int active_size = active_list->active_size(
            enkf_config_node_get_data_size(config_node, 0));
        if (active_size > 0) {
            for (int column = 0; column < ens_size; column++) {
                int iens = iens_active_index[column];
                deserialize_node(target_fs, target_fs, config_node, iens,
                                 current_row, column, active_list, A);
            }
            current_row += active_size;
        }
    }
}

/*
load a set of parameters from a enkf_fs_type storage into a set of
matrices.
*/
std::optional<Eigen::MatrixXd>
load_parameters(enkf_fs_type *target_fs, ensemble_config_type *ensemble_config,
                const std::vector<int> &iens_active_index, int active_ens_size,
                const local_ministep_type *ministep) {

    const auto &unscaled_keys = ministep->unscaled_keys();
    if (unscaled_keys.size() != 0) {
        int matrix_start_size = 250000;
        Eigen::MatrixXd A =
            Eigen::MatrixXd::Zero(matrix_start_size, active_ens_size);

        serialize_ministep(ensemble_config, ministep, target_fs,
                           iens_active_index, &A);
        return A;
    }

    return {};
}

/*
Store a parameters into a enkf_fs_type storage
*/
void save_parameters(enkf_fs_type *target_fs,
                     ensemble_config_type *ensemble_config,
                     const std::vector<int> &iens_active_index,
                     const local_ministep_type *ministep,
                     const update_data_type &update_data) {
    if (update_data.A)
        deserialize_ministep(ensemble_config, ministep, target_fs,
                             iens_active_index, &update_data.A.value());
    if (update_data.A_with_rowscaling.size() > 0) {
        const auto &scaled_keys = ministep->scaled_keys();

        for (size_t ikw = 0; ikw < scaled_keys.size(); ikw++) {
            const auto &key = scaled_keys[ikw];
            const ActiveList *active_list =
                ministep->get_active_data_list(key.data());
            auto &A = update_data.A_with_rowscaling[ikw].first;
            for (int column = 0; column < iens_active_index.size(); column++) {
                int iens = iens_active_index[column];
                deserialize_node(
                    target_fs, target_fs,
                    ensemble_config_get_node(ensemble_config, key.c_str()),
                    iens, 0, column, active_list, &A);
            }
        }
    }
}

/*
load a set of parameters from a enkf_fs_type storage into a set of
matrices with the corresponding row-scaling object.
*/
std::vector<std::pair<Eigen::MatrixXd, std::shared_ptr<RowScaling>>>
load_row_scaling_parameters(enkf_fs_type *target_fs,
                            ensemble_config_type *ensemble_config,
                            const std::vector<int> &iens_active_index,
                            int active_ens_size,
                            const local_ministep_type *ministep) {

    std::vector<std::pair<Eigen::MatrixXd, std::shared_ptr<RowScaling>>>
        parameters;

    const auto &scaled_keys = ministep->scaled_keys();
    if (scaled_keys.size() > 0) {
        int matrix_start_size = 250000;
        Eigen::MatrixXd A = Eigen::MatrixXd::Zero(250000, active_ens_size);

        for (const auto &key : scaled_keys) {
            const ActiveList *active_list =
                ministep->get_active_data_list(key.data());
            const auto *config_node =
                ensemble_config_get_node(ensemble_config, key.c_str());
            const int node_size =
                enkf_config_node_get_data_size(config_node, 0);
            if (matrix_get_rows(&A) < node_size)
                matrix_resize(&A, node_size, active_ens_size, false);
            for (int column = 0; column < iens_active_index.size(); column++) {
                int iens = iens_active_index[column];
                serialize_node(target_fs, config_node, iens, 0, column,
                               active_list, &A);
            }
            auto row_scaling = ministep->get_row_scaling(key);

            matrix_shrink_header(&A, row_scaling->size(),
                                 matrix_get_columns(&A));
            parameters.emplace_back(std::move(A), row_scaling);
        }
    }

    return parameters;
}

void run_analysis_update_without_rowscaling(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    const std::vector<bool> &ens_mask, const std::vector<bool> &obs_mask,
    const matrix_type *S, const matrix_type *E, const matrix_type *D,
    const matrix_type *R, matrix_type *A) {

    ert::utils::Benchmark benchmark(logger,
                                    "run_analysis_update_without_rowscaling");
    if (A == nullptr)
        throw std::logic_error(
            "Parameter matrix can not be NULL when exectuting analysis udate");

    int active_ens_size = matrix_get_columns(S);
    int active_obs_size = matrix_get_rows(S);

    matrix_type *X = matrix_alloc(active_ens_size, active_ens_size);

    if (module_config.iterable()) {
        ies::init_update(module_data, ens_mask, obs_mask, S, R, E, D);
        ies::updateA(module_config, module_data, A, S, R, E, D);
    } else {
        ies::initX(module_config, S, R, E, D, X);
        matrix_inplace_matmul(A, X);
    }
    matrix_free(X);
}

/*
Run the row-scaling enabled update algorithm on a set of A matrices.
*/
void run_analysis_update_with_rowscaling(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    const matrix_type *S, const matrix_type *E, const matrix_type *D,
    const matrix_type *R,
    std::vector<std::pair<Eigen::MatrixXd, std::shared_ptr<RowScaling>>>
        &parameters) {

    ert::utils::Benchmark benchmark(logger,
                                    "run_analysis_update_with_rowscaling");
    if (parameters.size() == 0)
        throw std::logic_error("No parameter matrices provided for analysis "
                               "update with rowscaling");

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
        row_scaling->multiply(&A, X);
    }

    matrix_free(X);
}

/*
Check whether the current state and config allows the update algorithm
to be executed
*/
bool is_valid(const analysis_config_type *analysis_config,
              const state_map_type *source_state_map, const int total_ens_size,
              const local_updatestep_type *updatestep) {
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
        analysis_config_module_flag_is_set(analysis_config, ANALYSIS_ITERABLE))
        util_exit("** ERROR: Can not combine iterable modules with multi step "
                  "updates - sorry\n");
    return true;
}

/*
Copy all parameters from source_fs to target_fs
*/
void copy_parameters(enkf_fs_type *source_fs, enkf_fs_type *target_fs,
                     const ensemble_config_type *ensemble_config,
                     const std::vector<bool> &ens_mask) {

    /*
      Copy all the parameter nodes from source case to target case;
      nodes which are updated will be fetched from the new target
      case, and nodes which are not updated will be manually copied
      over there.
    */
    if (target_fs != source_fs) {
        std::vector<int> ens_active_list = bool_vector_to_active_list(ens_mask);
        std::vector<std::string> param_keys =
            ensemble_config_keylist_from_var_type(ensemble_config, PARAMETER);
        for (auto &key : param_keys) {
            enkf_config_node_type *config_node =
                ensemble_config_get_node(ensemble_config, key.c_str());
            enkf_node_type *data_node = enkf_node_alloc(config_node);
            for (int j : ens_active_list) {
                node_id_type node_id;
                node_id.iens = j;
                node_id.report_step = 0;

                enkf_node_load(data_node, source_fs, node_id);
                enkf_node_store(data_node, target_fs, node_id);
            }
            enkf_node_free(data_node);
        }

        state_map_type *target_state_map = enkf_fs_get_state_map(target_fs);
        state_map_set_from_inverted_mask(target_state_map, ens_mask,
                                         STATE_PARENT_FAILURE);
        state_map_set_from_mask(target_state_map, ens_mask, STATE_INITIALIZED);
        enkf_fs_fsync(target_fs);
    }
}

void assert_size_equal(int ens_size, const std::vector<bool> &ens_mask) {
    if (ens_mask.size() != ens_size)
        throw std::logic_error(
            fmt::format("Fundamental inconsistency detected. Total ens_size: "
                        "{}, mask_size; {}",
                        ens_size, ens_mask.size()));
}

static FILE *create_log_file(const char *log_path) {
    std::string log_file;
    log_file = fmt::format("{}{}deprecated", log_path, UTIL_PATH_SEP_CHAR);

    FILE *log_stream = fopen(log_file.data(), "a");
    if (log_stream == nullptr)
        throw std::runtime_error(fmt::format(
            "Error opening '{}' for writing: {}", log_file, strerror(errno)));
    return log_stream;
}

std::shared_ptr<analysis::update_data_type>
make_update_data(enkf_fs_type *source_fs, enkf_fs_type *target_fs,
                 enkf_obs_type *obs, ensemble_config_type *ensemble_config,
                 const analysis_config_type *analysis_config,
                 const std::vector<bool> &ens_mask,
                 local_ministep_type *ministep, rng_type *shared_rng) {
    /*
    Observations and measurements are collected in these temporary
    structures. obs_data is a precursor for the 'd' vector, and
    meas_data is a precursor for the 'S' matrix'.

    The reason for going via these temporary structures is to support
    deactivating observations which should not be used in the update
    process.
    */
    double alpha = analysis_config_get_alpha(analysis_config);
    double std_cutoff = analysis_config_get_std_cutoff(analysis_config);
    double global_std_scaling =
        analysis_config_get_global_std_scaling(analysis_config);

    obs_data_type *obs_data = obs_data_alloc(global_std_scaling);
    meas_data_type *meas_data = meas_data_alloc(ens_mask);

    std::vector<int> ens_active_list = bool_vector_to_active_list(ens_mask);

    local_obsdata_type *selected_observations =
        local_ministep_get_obsdata(ministep);
    enkf_obs_get_obs_and_measure_data(obs, source_fs, selected_observations,
                                      ens_active_list, meas_data, obs_data);

    enkf_analysis_deactivate_outliers(obs_data, meas_data, std_cutoff, alpha,
                                      true);
    FILE *log_stream =
        create_log_file(analysis_config_get_log_path(analysis_config));
    enkf_analysis_fprintf_obs_summary(
        obs_data, meas_data, local_ministep_get_name(ministep), log_stream);
    fclose(log_stream);
    if (meas_data_get_active_obs_size(meas_data) == 0) {
        obs_data_free(obs_data);
        meas_data_free(meas_data);
        return std::make_shared<update_data_type>();
    }

    int active_ens_size = meas_data_get_active_ens_size(meas_data);
    Eigen::MatrixXd S = meas_data_makeS(meas_data);
    meas_data_free(meas_data);

    Eigen::MatrixXd E = obs_data_makeE(obs_data, shared_rng, active_ens_size);
    std::vector<int> iens_active_index = bool_vector_to_active_list(ens_mask);
    auto A = load_parameters(target_fs, ensemble_config, iens_active_index,
                             active_ens_size, ministep);

    int active_obs_size = obs_data_get_active_size(obs_data);
    Eigen::MatrixXd R = obs_data_makeR(obs_data);
    Eigen::MatrixXd D = obs_data_makeD(obs_data, E, S);
    assert_matrix_size(&E, "E", active_obs_size, active_ens_size);
    assert_matrix_size(&D, "D", active_obs_size, active_ens_size);
    assert_matrix_size(&S, "S", active_obs_size, active_ens_size);
    assert_matrix_size(&R, "R", active_obs_size, active_obs_size);
    std::vector<bool> obs_mask = obs_data_get_active_mask(obs_data);
    obs_data_scale(obs_data, &S, &E, &D, &R, nullptr);

    auto row_scaling_parameters = load_row_scaling_parameters(
        target_fs, ensemble_config, iens_active_index, active_ens_size,
        ministep);

    /* This is not correct conceptually. Ministep should only hold the
    configuration objects, not the actual data.*/
    local_ministep_add_obs_data(ministep, obs_data);

    return std::make_shared<update_data_type>(
        std::move(S), std::move(E), std::move(D), std::move(R), std::move(A),
        std::move(row_scaling_parameters), std::move(obs_mask));
}

bool smoother_update(const local_updatestep_type *updatestep,
                     int total_ens_size, enkf_obs_type *obs,
                     rng_type *shared_rng,
                     const analysis_config_type *analysis_config,
                     ensemble_config_type *ensemble_config,
                     enkf_fs_type *source_fs, enkf_fs_type *target_fs,
                     bool verbose) {
    state_map_type *source_state_map = enkf_fs_get_state_map(source_fs);
    if (!is_valid(analysis_config, source_state_map, total_ens_size,
                  updatestep))
        return false;

    ert::utils::scoped_memory_logger memlogger(logger, "smoother_update");

    auto ens_mask =
        state_map_select_matching(source_state_map, STATE_HAS_DATA, true);

    copy_parameters(source_fs, target_fs, ensemble_config, ens_mask);

    /* Looping over local analysis ministep */
    for (int ministep_nr = 0;
         ministep_nr < local_updatestep_get_num_ministep(updatestep);
         ministep_nr++) {
        local_ministep_type *ministep =
            local_updatestep_iget_ministep(updatestep, ministep_nr);

        auto update_data =
            make_update_data(source_fs, target_fs, obs, ensemble_config,
                             analysis_config, ens_mask, ministep, shared_rng);
        if (update_data->has_observations) {
            std::vector<int> iens_active_index =
                bool_vector_to_active_list(ens_mask);

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

            const auto *module_config =
                analysis_module_get_module_config(module);
            auto *module_data = analysis_module_get_module_data(module);

            if (update_data->A) {
                run_analysis_update_without_rowscaling(
                    *module_config, *module_data, ens_mask,
                    update_data->obs_mask, &update_data->S, &update_data->E,
                    &update_data->D, &update_data->R, &update_data->A.value());
            }

            if (update_data->A_with_rowscaling.size() > 0) {
                run_analysis_update_with_rowscaling(
                    *module_config, *module_data, &update_data->S,
                    &update_data->E, &update_data->D, &update_data->R,
                    update_data->A_with_rowscaling);
            }
            save_parameters(target_fs, ensemble_config, iens_active_index,
                            ministep, *update_data);

        } else
            logger->error("No active observations/parameters for MINISTEP: {}.",
                          local_ministep_get_name(ministep));
    }

    return true;
}
} // namespace analysis

namespace {
static bool smoother_update_pybind(py::object updatestep, int total_ens_size,
                                   py::object obs, py::object shared_rng,
                                   py::object analysis_config,
                                   py::object ensemble_config,
                                   py::object source_fs, py::object target_fs,
                                   bool verbose) {
    auto updatestep_ = ert::from_cwrap<local_updatestep_type>(updatestep);
    auto obs_ = ert::from_cwrap<enkf_obs_type>(obs);
    auto shared_rng_ = ert::from_cwrap<rng_type>(shared_rng);
    auto analysis_config_ =
        ert::from_cwrap<analysis_config_type>(analysis_config);
    auto ensemble_config_ =
        ert::from_cwrap<ensemble_config_type>(ensemble_config);
    auto source_fs_ = ert::from_cwrap<enkf_fs_type>(source_fs);
    auto target_fs_ = ert::from_cwrap<enkf_fs_type>(target_fs);
    return analysis::smoother_update(
        updatestep_, total_ens_size, obs_, shared_rng_, analysis_config_,
        ensemble_config_, source_fs_, target_fs_, verbose);
}

static void copy_parameters_pybind(py::object source_fs, py::object target_fs,
                                   py::object ensemble_config,
                                   std::vector<bool> ens_mask) {
    auto ensemble_config_ =
        ert::from_cwrap<ensemble_config_type>(ensemble_config);
    auto source_fs_ = ert::from_cwrap<enkf_fs_type>(source_fs);
    auto target_fs_ = ert::from_cwrap<enkf_fs_type>(target_fs);
    return analysis::copy_parameters(source_fs_, target_fs_, ensemble_config_,
                                     ens_mask);
}

static std::shared_ptr<analysis::update_data_type>
make_update_data_pybind(py::object source_fs, py::object target_fs,
                        py::object obs, py::object ensemble_config,
                        py::object analysis_config, std::vector<bool> ens_mask,
                        py::object ministep, py::object shared_rng) {
    auto source_fs_ = ert::from_cwrap<enkf_fs_type>(source_fs);
    auto target_fs_ = ert::from_cwrap<enkf_fs_type>(target_fs);
    auto obs_ = ert::from_cwrap<enkf_obs_type>(obs);
    auto ensemble_config_ =
        ert::from_cwrap<ensemble_config_type>(ensemble_config);
    auto analysis_config_ =
        ert::from_cwrap<analysis_config_type>(analysis_config);
    auto ministep_ = ert::from_cwrap<local_ministep_type>(ministep);
    auto shared_rng_ = ert::from_cwrap<rng_type>(shared_rng);
    return analysis::make_update_data(source_fs_, target_fs_, obs_,
                                      ensemble_config_, analysis_config_,
                                      ens_mask, ministep_, shared_rng_);
}

static void save_parameters_pybind(py::object target_fs,
                                   py::object ensemble_config,
                                   std::vector<int> iens_active_index,
                                   py::object ministep,
                                   analysis::update_data_type &update_data) {
    auto target_fs_ = ert::from_cwrap<enkf_fs_type>(target_fs);
    auto ensemble_config_ =
        ert::from_cwrap<ensemble_config_type>(ensemble_config);
    auto ministep_ = ert::from_cwrap<local_ministep_type>(ministep);
    return analysis::save_parameters(target_fs_, ensemble_config_,
                                     iens_active_index, ministep_, update_data);
}

static void run_analysis_update_without_rowscaling_pybind(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    std::vector<bool> ens_mask, analysis::update_data_type &update_data) {

    analysis::run_analysis_update_without_rowscaling(
        module_config, module_data, ens_mask, update_data.obs_mask,
        &update_data.S, &update_data.E, &update_data.D, &update_data.R,
        &update_data.A.value());
}

static void run_analysis_update_with_rowscaling_pybind(
    const ies::config::Config &module_config, ies::data::Data &module_data,
    analysis::update_data_type &update_data) {

    analysis::run_analysis_update_with_rowscaling(
        module_config, module_data, &update_data.S, &update_data.E,
        &update_data.D, &update_data.R, update_data.A_with_rowscaling);
}
} // namespace
RES_LIB_SUBMODULE("update", m) {
    using namespace py::literals;
    py::class_<analysis::update_data_type,
               std::shared_ptr<analysis::update_data_type>>(m, "UpdateData")
        .def(py::init<>())
        .def_readwrite("S", &analysis::update_data_type::S,
                       py::return_value_policy::reference_internal)
        .def_readwrite("E", &analysis::update_data_type::E,
                       py::return_value_policy::reference_internal)
        .def_readwrite("D", &analysis::update_data_type::D,
                       py::return_value_policy::reference_internal)
        .def_readwrite("R", &analysis::update_data_type::R,
                       py::return_value_policy::reference_internal)
        .def_readwrite("A", &analysis::update_data_type::A,
                       py::return_value_policy::reference_internal)
        .def_readwrite("A_with_rowscaling",
                       &analysis::update_data_type::A_with_rowscaling,
                       py::return_value_policy::reference_internal)
        .def_readwrite("has_observations",
                       &analysis::update_data_type::has_observations)
        .def_readwrite("obs_mask", &analysis::update_data_type::obs_mask);
    m.def("smoother_update", smoother_update_pybind);
    m.def("copy_parameters", copy_parameters_pybind);
    m.def("make_update_data", make_update_data_pybind);
    m.def("save_parameters", save_parameters_pybind);
    m.def("run_analysis_update_without_rowscaling",
          run_analysis_update_without_rowscaling_pybind);
    m.def("run_analysis_update_with_rowscaling",
          run_analysis_update_with_rowscaling_pybind);
}
