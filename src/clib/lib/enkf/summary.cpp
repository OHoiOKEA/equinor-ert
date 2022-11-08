#include <stdlib.h>

#include <ert/util/double_vector.h>
#include <ert/util/util.h>

#include <ert/ecl/ecl_sum.h>

#include <ert/enkf/enkf_macros.hpp>
#include <ert/enkf/enkf_serialize.hpp>
#include <ert/enkf/enkf_types.hpp>
#include <ert/enkf/enkf_util.hpp>
#include <ert/enkf/summary.hpp>

#define SUMMARY_UNDEF -9999

struct summary_struct {
    /** Can not be NULL - var_type is set on first load. */
    summary_config_type *config;
    double_vector_type *data_vector;
};

C_USED void summary_clear(summary_type *summary) {
    double_vector_reset(summary->data_vector);
}

summary_type *summary_alloc(const summary_config_type *summary_config) {
    summary_type *summary = (summary_type *)util_malloc(sizeof *summary);
    summary->config = (summary_config_type *)summary_config;
    summary->data_vector = double_vector_alloc(0, SUMMARY_UNDEF);
    return summary;
}

bool summary_active_value(double value) {
    if (value == SUMMARY_UNDEF)
        return false;

    return true;
}

void summary_read_from_buffer(summary_type *summary, buffer_type *buffer,
                              enkf_fs_type *fs, int report_step) {
    enkf_util_assert_buffer_type(buffer, SUMMARY);
    {
        int size = buffer_fread_int(buffer);
        double default_value = buffer_fread_double(buffer);

        double_vector_set_default(summary->data_vector, default_value);
        double_vector_resize(summary->data_vector, size, default_value);
        buffer_fread(buffer, double_vector_get_ptr(summary->data_vector),
                     double_vector_element_size(summary->data_vector), size);
    }
}

bool summary_write_to_buffer(const summary_type *summary, buffer_type *buffer,
                             int report_step) {
    buffer_fwrite_int(buffer, SUMMARY);
    buffer_fwrite_int(buffer, double_vector_size(summary->data_vector));
    buffer_fwrite_double(buffer,
                         double_vector_get_default(summary->data_vector));
    buffer_fwrite(buffer, double_vector_get_ptr(summary->data_vector),
                  double_vector_element_size(summary->data_vector),
                  double_vector_size(summary->data_vector));
    return true;
}

C_USED bool summary_has_data(const summary_type *summary, int report_step) {
    return double_vector_size(summary->data_vector) > report_step;
}

void summary_free(summary_type *summary) {
    double_vector_free(summary->data_vector);
    free(summary);
}

void summary_serialize(const summary_type *summary, node_id_type node_id,
                       const ActiveList *active_list, Eigen::MatrixXd &A,
                       int row_offset, int column) {
    double value = summary_get(summary, node_id.report_step);
    enkf_matrix_serialize(&value, 1, ECL_DOUBLE, active_list, A, row_offset,
                          column);
}

void summary_deserialize(summary_type *summary, node_id_type node_id,
                         const ActiveList *active_list,
                         const Eigen::MatrixXd &A, int row_offset, int column) {
    double value;
    enkf_matrix_deserialize(&value, 1, ECL_DOUBLE, active_list, A, row_offset,
                            column);
    summary_set(summary, node_id.report_step, value);
}

int summary_length(const summary_type *summary) {
    return double_vector_size(summary->data_vector);
}

double summary_get(const summary_type *summary, int report_step) {
    return double_vector_iget(summary->data_vector, report_step);
}

void summary_set(summary_type *summary, int report_step, double value) {
    double_vector_iset(summary->data_vector, report_step, value);
}

double summary_undefined_value() { return SUMMARY_UNDEF; }

std::vector<double> summary_user_get_vector(const summary_type *summary) {
    std::vector<double> values(double_vector_size(summary->data_vector));
    for (int step = 0; step < double_vector_size(summary->data_vector); step++)
        values[step] = double_vector_iget(summary->data_vector, step);
    return values;
}

/**
   There are three typical reasons why the node data can not be loaded:

     1. The ecl_sum instance is equal to NULL.
     2. The ecl_sum instance does not have the report step we are asking for.
     3. The ecl_sum instance does not have the variable we are asking for.

   In the two first cases the function will return false, ultimately
   signaling that the simulation has failed. In the last case we check
   the required flag of the variable, and if this is set to false we
   return true. This is done because this is a typical situation for
   e.g. a well which has not yet opened.
*/
bool summary_forward_load(summary_type *summary, const char *ecl_file_name,
                          int report_step, const void *argument) {
    bool loadOK = false;
    double load_value;
    const ecl_sum_type *ecl_sum =
        reinterpret_cast<const ecl_sum_type *>(argument);
    if (ecl_sum == NULL)
        return false;

    const char *var_key = summary_config_get_var(summary->config);
    load_fail_type load_fail_action =
        summary_config_get_load_fail_mode(summary->config);

    /* Check if the ecl_sum instance has this report step. */
    if (ecl_sum_has_report_step(ecl_sum, report_step)) {
        int last_report_index = ecl_sum_iget_report_end(ecl_sum, report_step);

        if (ecl_sum_has_general_var(ecl_sum, var_key)) {
            load_value =
                ecl_sum_get_general_var(ecl_sum, last_report_index, var_key);
            loadOK = true;
        } else {
            load_value = 0;
            /*
            The summary object does not have this variable - probably meaning
            that it is a well/group which has not yet opened. When required ==
            false we do not signal load failure in this situation.

            If the user has misspelled the name, we will go through the whole
            simulation without detecting that error.
            */
            if (load_fail_action == LOAD_FAIL_EXIT)
                loadOK = false;
            else {
                loadOK = true;
                if (load_fail_action == LOAD_FAIL_WARN)
                    fprintf(stderr,
                            "** WARNING ** Failed summary:%s does not have "
                            "key:%s \n",
                            ecl_sum_get_case(ecl_sum), var_key);
            }
        }
    } else {
        load_value = 0;
        if (report_step == 0)
            loadOK = true;
        /*
         We do not signal load failure if we do not have the S0000
         summary file - which does not contain any useful information
         anyway.

         Hmmm - there is a "if (report_step > 0)" check in the
         enkf_state_internalize_x() function as well.
        */
        else {
            if (load_fail_action == LOAD_FAIL_EXIT)
                loadOK = false;
            else {
                loadOK = true;
                if (load_fail_action == LOAD_FAIL_WARN)
                    fprintf(stderr,
                            "** WARNING ** Failed summary:%s does not have "
                            "report_step:%d \n",
                            ecl_sum_get_case(ecl_sum), report_step);
            }
        }
    }

    if (loadOK)
        summary_set(summary, report_step, load_value);

    return loadOK;
}

bool summary_forward_load_vector(summary_type *summary,
                                 const char *ecl_file_name,
                                 const ecl_sum_type *ecl_sum,
                                 const int_vector_type *time_index) {
    bool loadOK = false;

    if (ecl_sum == NULL)
        return false;

    const char *var_key = summary_config_get_var(summary->config);
    load_fail_type load_fail_action =
        summary_config_get_load_fail_mode(summary->config);
    bool normal_load = false;

    if (load_fail_action != LOAD_FAIL_EXIT) {
        // The load will always ~succeed - but if we do not have the data; we
        // will fill the vector with zeros.

        if (!ecl_sum_has_general_var(ecl_sum, var_key)) {
            for (int step = 0; step < int_vector_size(time_index); step++) {
                int summary_step = int_vector_iget(time_index, step);
                if (summary_step >= 0)
                    double_vector_iset(summary->data_vector, summary_step, 0);
            }
            loadOK = true;

            if (load_fail_action == LOAD_FAIL_WARN)
                fprintf(
                    stderr,
                    "** WARNING ** Failed summary:%s does not have key:%s \n",
                    ecl_sum_get_case(ecl_sum), var_key);
        } else
            normal_load = true;
    }

    if (!normal_load)
        return loadOK;

    int key_index = ecl_sum_get_general_var_params_index(ecl_sum, var_key);
    for (int store_index = 0; store_index < int_vector_size(time_index);
         store_index++) {
        int summary_index = int_vector_iget(time_index, store_index);

        if (summary_index >= 0) {
            if (ecl_sum_has_report_step(ecl_sum, summary_index)) {
                int last_update_step_index =
                    ecl_sum_iget_report_end(ecl_sum, summary_index);
                double_vector_iset(
                    summary->data_vector, store_index,
                    ecl_sum_iget(ecl_sum, last_update_step_index, key_index));
            }
        }
    }
    return true;
}

VOID_ALLOC(summary)
VOID_FREE(summary)
VOID_FORWARD_LOAD(summary)
VOID_FORWARD_LOAD_VECTOR(summary)
VOID_USER_GET(summary)
VOID_WRITE_TO_BUFFER(summary)
VOID_READ_FROM_BUFFER(summary)
VOID_SERIALIZE(summary)
VOID_DESERIALIZE(summary)
VOID_CLEAR(summary)
VOID_HAS_DATA(summary)
