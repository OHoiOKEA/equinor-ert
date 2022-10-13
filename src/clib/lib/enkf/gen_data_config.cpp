#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <ert/logging.hpp>
#include <ert/util/bool_vector.h>
#include <ert/util/int_vector.h>
#include <ert/util/util.h>

#include <ert/ecl/ecl_util.h>

#include <ert/enkf/config_keys.hpp>
#include <ert/enkf/enkf_defaults.hpp>
#include <ert/enkf/enkf_fs.hpp>
#include <ert/enkf/enkf_macros.hpp>
#include <ert/enkf/gen_data_config.hpp>

static auto logger = ert::get_logger("enkf");

/*
   About deactivating by the forward model
   ---------------------------------------

   For the gen_data instances the forward model has the capability to
   deactivate elements in a gen_data vector. This is implemented in
   the function gen_data_ecl_load which will look for a file with
   extension "_data" and then activate / deactivate elements
   accordingly.
*/

#define GEN_DATA_CONFIG_ID 90051
struct gen_data_config_struct {
    UTIL_TYPE_ID_DECLARATION;
    /** The key this gen_data instance is known under - needed for debugging. */
    char *key;
    char *template_file;
    /** Buffer containing the content of the template - read and internalized
     * at boot time. */
    char *template_buffer;
    char *template_key;
    /** The offset into the template buffer before the data should come. */
    int template_data_offset;
    /** The length of data identifier in the template.*/
    int template_data_skip;
    /** The total size (bytes) of the template buffer .*/
    int template_buffer_size;
    /** The format used for loading gen_data instances when the forward model
     * has completed *AND* for loading the initial files.*/
    gen_data_file_format_type input_format;
    /** The format used when gen_data instances are written to disk for the
     * forward model. */
    gen_data_file_format_type output_format;
    /** Data size, i.e. number of elements , indexed with report_step */
    int_vector_type *data_size_vector;
    /** The report steps where we expect to load data for this instance. */
    int_vector_type *active_report_steps;
    pthread_mutex_t update_lock;
    /* All the fields below this line are related to the capability of the
     * forward model to deactivate elements in a gen_data instance. See
     * documentation above. */
    bool dynamic;
    /** NBNB This will be NULL in the case of instances which are used as parameters. */
    enkf_fs_type *last_read_fs;
    int ens_size;
    bool mask_modified;
    bool_vector_type *active_mask;
    int active_report_step;
};

UTIL_IS_INSTANCE_FUNCTION(gen_data_config, GEN_DATA_CONFIG_ID)
UTIL_SAFE_CAST_FUNCTION(gen_data_config, GEN_DATA_CONFIG_ID)
UTIL_SAFE_CAST_FUNCTION_CONST(gen_data_config, GEN_DATA_CONFIG_ID)

gen_data_file_format_type
gen_data_config_get_input_format(const gen_data_config_type *config) {
    return config->input_format;
}
gen_data_file_format_type
gen_data_config_get_output_format(const gen_data_config_type *config) {
    return config->output_format;
}

/*
   If current_size as queried from config->data_size_vector == -1
   (i.e. not set); we seek through
*/

int gen_data_config_get_data_size__(const gen_data_config_type *config,
                                    int report_step) {
    int current_size =
        int_vector_safe_iget(config->data_size_vector, report_step);
    return current_size;
}

int gen_data_config_get_data_size(const gen_data_config_type *config,
                                  int report_step) {
    int current_size = gen_data_config_get_data_size__(config, report_step);
    if (current_size < 0)
        util_abort("%s: Size not set for object:%s report_step:%d - internal "
                   "error: \n",
                   __func__, config->key, report_step);
    return current_size;
}

int gen_data_config_get_initial_size(const gen_data_config_type *config) {
    int initial_size = int_vector_safe_iget(config->data_size_vector, 0);
    if (initial_size < 0)
        initial_size = 0;

    return initial_size;
}

static void gen_data_config_reset_template(gen_data_config_type *config) {
    free(config->template_buffer);
    free(config->template_key);
    free(config->template_file);

    config->template_file = NULL;
    config->template_buffer = NULL;
    config->template_key = NULL;
    config->template_data_offset = 0;
    config->template_data_skip = 0;
    config->template_buffer_size = 0;
}

static gen_data_config_type *gen_data_config_alloc(const char *key,
                                                   bool dynamic) {
    gen_data_config_type *config =
        (gen_data_config_type *)util_malloc(sizeof *config);
    UTIL_TYPE_ID_INIT(config, GEN_DATA_CONFIG_ID);

    config->key = util_alloc_string_copy(key);

    config->template_file = NULL;
    config->template_key = NULL;
    config->template_buffer = NULL;
    gen_data_config_reset_template(config);

    config->input_format = GEN_DATA_UNDEFINED;
    config->output_format = GEN_DATA_UNDEFINED;
    config->data_size_vector = int_vector_alloc(
        0, -1); /* The default value: -1 - indicates "NOT SET" */
    config->active_report_steps = int_vector_alloc(0, 0);
    config->active_mask = bool_vector_alloc(
        0,
        true); /* Elements are explicitly set to FALSE - this MUST default to true. */
    config->active_report_step = -1;
    config->ens_size = -1;
    config->last_read_fs = NULL;
    config->dynamic = dynamic;
    pthread_mutex_init(&config->update_lock, NULL);

    return config;
}

gen_data_config_type *
gen_data_config_alloc_GEN_DATA_result(const char *key,
                                      gen_data_file_format_type input_format) {
    gen_data_config_type *config = gen_data_config_alloc(key, true);

    if (input_format == ASCII_TEMPLATE)
        util_abort("%s: Sorry can not use INPUT_FORMAT:ASCII_TEMPLATE\n",
                   __func__);

    if (input_format == GEN_DATA_UNDEFINED)
        util_abort("%s: Sorry must specify valid values for input format.\n",
                   __func__);

    config->input_format = input_format;
    return config;
}

gen_data_config_type *
gen_data_config_alloc_GEN_DATA_state(const char *key,
                                     gen_data_file_format_type output_format,
                                     gen_data_file_format_type input_format) {
    gen_data_config_type *config = gen_data_config_alloc(key, true);

    if (input_format == ASCII_TEMPLATE)
        util_abort("%s: Sorry can not use INPUT_FORMAT:ASCII_TEMPLATE\n",
                   __func__);

    if (output_format == GEN_DATA_UNDEFINED ||
        input_format == GEN_DATA_UNDEFINED)
        util_abort("%s: Sorry must specify valid values for both input and "
                   "output format\n",
                   __func__);

    config->output_format = output_format;
    config->input_format = input_format;
    return config;
}

const bool_vector_type *
gen_data_config_get_active_mask(const gen_data_config_type *config) {
    if (config->dynamic)
        return config->active_mask;
    else
        return NULL;
}

bool gen_data_config_set_template(gen_data_config_type *config,
                                  const char *template_ecl_file,
                                  const char *template_data_key) {
    char *template_buffer = NULL;
    bool template_valid = true;
    int template_buffer_size;

    if (template_ecl_file) {
        if (util_file_readable(template_ecl_file)) {
            template_buffer = util_fread_alloc_file_content(
                template_ecl_file, &template_buffer_size);
            if (template_data_key) {
                if (strstr(template_buffer, template_data_key) == NULL)
                    template_valid = false;
            }
        } else
            template_valid = false;
    }

    if (template_valid) {

        gen_data_config_reset_template(config);
        if (template_ecl_file != NULL) {
            char *data_ptr;
            config->template_buffer = template_buffer;
            config->template_buffer_size = template_buffer_size;
            if (template_data_key != NULL) {
                data_ptr = strstr(config->template_buffer, template_data_key);
                if (data_ptr == NULL)
                    util_abort("%s: template:%s can not be used - could not "
                               "find data key:%s \n",
                               __func__, template_ecl_file, template_data_key);
                else {
                    config->template_data_offset =
                        data_ptr - config->template_buffer;
                    config->template_data_skip = strlen(template_data_key);
                }
            } else { /* We are using a template without a template_data_key - the
                  data is assumed to come at the end of the template. */
                config->template_data_offset = strlen(config->template_buffer);
                config->template_data_skip = 0;
            }

            config->template_file = util_realloc_string_copy(
                config->template_file, template_ecl_file);
            config->template_key = util_realloc_string_copy(
                config->template_key, template_data_key);

            if (config->output_format != ASCII_TEMPLATE)
                fprintf(stderr,
                        "**WARNING: The template settings will ignored for "
                        "key:%s - use OUTPUT_FORMAT:ASCII_TEMPLATE to get "
                        "template behaviour\n",
                        config->key);
        }
    }
    return template_valid;
}

const char *
gen_data_config_get_template_file(const gen_data_config_type *config) {
    return config->template_file;
}

const char *
gen_data_config_get_template_key(const gen_data_config_type *config) {
    return config->template_key;
}

/**
 * @brief parses format string as a gen_data_file_format_type

   This function takes a string representation of one of the
   gen_data_file_format_type values, and returns the corresponding
   gen_data_file_format value. The recognized strings are

   * "ASCII"
   * "ASCII_TEMPLATE"

   Its the inverse action of gen_data_config_format_name

   @see gen_data_config_format_name
   @param format_string The file format string, ie. "ASCII"
   @return GEN_DATA_UNDEFINED if the string is not recognized or NULL, otherwise
      the corresponding gen_data_file_format_type, ie. ASCII.
*/
gen_data_file_format_type
gen_data_config_check_format(const char *format_string) {
    gen_data_file_format_type type = GEN_DATA_UNDEFINED;

    if (format_string != NULL) {

        if (strcmp(format_string, "ASCII") == 0)
            type = ASCII;
        else if (strcmp(format_string, "ASCII_TEMPLATE") == 0)
            type = ASCII_TEMPLATE;
    }

    return type;
}

/**
   The valid options are:

   INPUT_FORMAT:(ASCII|ASCII_TEMPLATE)
   OUTPUT_FORMAT:(ASCII|ASCII_TEMPLATE)
   TEMPLATE:/some/template/file
   KEY:<SomeKeyFoundInTemplate>
   ECL_FILE:<filename to write EnKF ==> Forward model>  
   RESULT_FILE:<filename to read EnKF <== Forward model>

*/
void gen_data_config_free(gen_data_config_type *config) {
    int_vector_free(config->data_size_vector);
    int_vector_free(config->active_report_steps);

    free(config->key);
    free(config->template_buffer);
    free(config->template_file);
    free(config->template_key);
    bool_vector_free(config->active_mask);

    free(config);
}

/**
   This function gets a size (from a gen_data) instance, and verifies
   that the size agrees with the currently stored size and
   report_step. If the report_step is new we just record the new info,
   otherwise it will break hard.

   Does not work properly with:

   1. keep_run_path - the load_file will be left hanging around - and loaded again and again.
   2. Doing forward several steps - how to (time)index the files?

*/
void gen_data_config_assert_size(gen_data_config_type *config, int data_size,
                                 int report_step) {
    pthread_mutex_lock(&config->update_lock);
    {
        int current_size =
            int_vector_safe_iget(config->data_size_vector, report_step);
        if (current_size < 0) {
            int_vector_iset(config->data_size_vector, report_step, data_size);
            current_size = data_size;
        }

        if (current_size != data_size) {
            util_abort("%s: Size mismatch when loading:%s from file - got %d "
                       "elements - expected:%d [report_step:%d] \n",
                       __func__, gen_data_config_get_key(config), data_size,
                       current_size, report_step);
        }
    }
    pthread_mutex_unlock(&config->update_lock);
}

static void update_config_to_datamask(gen_data_config_type *config,
                                      const bool_vector_type *data_mask,
                                      int report_step, enkf_fs_type *sim_fs) {
    // Is this the first ensemble member loading for this particular report_step?
    if (config->active_report_step != report_step) {
        bool_vector_reset(config->active_mask);
        bool_vector_iset(
            config->active_mask,
            int_vector_iget(config->data_size_vector, report_step) - 1, true);
        config->mask_modified = true;
    }

    // set config inactive according to data_mask
    for (int i = 0; i < bool_vector_size(data_mask); ++i) {
        if (bool_vector_iget(data_mask, i))
            continue;
        bool_vector_iset(config->active_mask, i, false);
        config->mask_modified = true;
    }

    if (!config->mask_modified)
        return; // nothing to do

    // The global mask has been modified after the last load;
    // i.e. we update the on-disk representation.
    char *filename = util_alloc_sprintf("%s_active", config->key);
    FILE *stream =
        enkf_fs_open_case_tstep_file(sim_fs, filename, report_step, "w");
    free(filename);

    bool_vector_fwrite(config->active_mask, stream);
    fclose(stream);
    config->mask_modified = false;
}

/**
   When the forward model is creating results for GEN_DATA instances,
   it can optionally signal that not all elements in the gen_data
   should be active (i.e. the forward model failed in some way); that
   is handled through this function. When all ensemble members have
   called this function the mask config->active_mask should be true
   ONLY for the elements which are true for all members.

   This MUST be called after gen_data_config_assert_size().
*/
void gen_data_config_update_active(gen_data_config_type *config,
                                   int report_step,
                                   const bool_vector_type *data_mask,
                                   enkf_fs_type *sim_fs) {
    pthread_mutex_lock(&config->update_lock);
    if (int_vector_iget(config->data_size_vector, report_step) > 0)
        update_config_to_datamask(config, data_mask, report_step, sim_fs);
    config->active_report_step = report_step;
    pthread_mutex_unlock(&config->update_lock);
}

bool gen_data_config_has_active_mask(const gen_data_config_type *config,
                                     enkf_fs_type *fs, int report_step) {
    char *filename = util_alloc_sprintf("%s_active", config->key);
    FILE *stream = enkf_fs_open_excase_tstep_file(fs, filename, report_step);

    bool has_mask = false;
    if (stream) {
        has_mask = true;
        fclose(stream);
    }
    free(filename);
    return has_mask;
}

/**
   This function will load an active map from the enkf_fs filesystem.
*/
void gen_data_config_load_active(gen_data_config_type *config, enkf_fs_type *fs,
                                 int report_step, bool force_load) {
    if (!config->dynamic)
        return;

    bool fs_changed = false;
    if (fs != config->last_read_fs) {
        config->last_read_fs = fs;
        fs_changed = true;
    }

    pthread_mutex_lock(&config->update_lock);

    if (force_load ||
        (int_vector_iget(config->data_size_vector, report_step) > 0)) {
        if (config->active_report_step != report_step || fs_changed) {
            char *filename = util_alloc_sprintf("%s_active", config->key);
            FILE *stream =
                enkf_fs_open_excase_tstep_file(fs, filename, report_step);

            if (stream != NULL) {
                bool_vector_fread(config->active_mask, stream);
                fclose(stream);
            } else {
                int gen_data_size =
                    int_vector_safe_iget(config->data_size_vector, report_step);
                if (gen_data_size < 0) {
                    fprintf(stderr, "** Fatal internal error in function:%s \n",
                            __func__);
                    fprintf(stderr, "\n");
                    fprintf(stderr,
                            "   1: The active mask file:%s was not found \n",
                            filename);
                    fprintf(stderr, "   2: The size of the gen_data vectors "
                                    "has not been set\n");
                    fprintf(stderr, "\n");
                    fprintf(stderr,
                            "We can not create a suitable active_mask. ");
                    fprintf(stderr, "Code should call "
                                    "gen_data_config_has_active_mask()\n\n");

                    util_abort("%s: fatal internal error - could not create a "
                               "suitable active_mask\n",
                               __func__);
                } else {
                    logger->info(
                        "Could not locate active data elements file {}, "
                        "filling active vector with true all elements active.",
                        filename);
                    bool_vector_reset(config->active_mask);
                    bool_vector_iset(config->active_mask, gen_data_size - 1,
                                     true);
                }
            }
            free(filename);
        }
    }
    config->active_report_step = report_step;
    pthread_mutex_unlock(&config->update_lock);
}

int gen_data_config_num_report_step(const gen_data_config_type *config) {
    return int_vector_size(config->active_report_steps);
}

bool gen_data_config_has_report_step(const gen_data_config_type *config,
                                     int report_step) {
    return int_vector_contains_sorted(config->active_report_steps, report_step);
}

void gen_data_config_add_report_step(gen_data_config_type *config,
                                     int report_step) {
    if (config->dynamic) {
        if (!gen_data_config_has_report_step(config, report_step)) {
            int_vector_append(config->active_report_steps, report_step);
            int_vector_sort(config->active_report_steps);
        }
    }
}

int gen_data_config_iget_report_step(const gen_data_config_type *config,
                                     int index) {
    return int_vector_iget(config->active_report_steps, index);
}

const int_vector_type *
gen_data_config_get_active_report_steps(const gen_data_config_type *config) {
    return config->active_report_steps;
}

void gen_data_config_set_ens_size(gen_data_config_type *config, int ens_size) {
    config->ens_size = ens_size;
}

bool gen_data_config_is_dynamic(const gen_data_config_type *config) {
    return config->dynamic;
}

void gen_data_config_get_template_data(const gen_data_config_type *config,
                                       char **template_buffer,
                                       int *template_data_offset,
                                       int *template_buffer_size,
                                       int *template_data_skip) {

    *template_buffer = config->template_buffer;
    *template_data_offset = config->template_data_offset;
    *template_buffer_size = config->template_buffer_size;
    *template_data_skip = config->template_data_skip;
}

bool gen_data_config_valid_result_format(const char *result_file_fmt) {
    if (result_file_fmt) {
        if (util_is_abs_path(result_file_fmt))
            return false;
        else {
            if (util_int_format_count(result_file_fmt) == 1)
                return true;
            else
                return false;
        }
    } else
        return false;
}

const char *gen_data_config_get_key(const gen_data_config_type *config) {
    return config->key;
}

/**
 * @brief returns the format string correspondng to the gen_data_file_format_type.

   This function takes a gen_data_file_format_type and returns its string representation.

   Its the inverse action of gen_data_config_check_format

   @see gen_data_config_check_format
   @param format_string The file format string, ie. "ASCII"
   @return GEN_DATA_UNDEFINED if the string is not recognized or NULL, otherwise
      the corresponding gen_data_file_format_type, ie. ASCII.
*/
static const char *
gen_data_config_format_name(gen_data_file_format_type format_type) {
    switch (format_type) {
    case GEN_DATA_UNDEFINED:
        return "UNDEFINED";
    case ASCII:
        return "ASCII";
    case ASCII_TEMPLATE:
        return "ASCII_TEMPLATE";
    default:
        util_abort("%s: What the f.. \n", __func__);
        return NULL;
    }
}

void gen_data_config_fprintf_config(const gen_data_config_type *config,
                                    enkf_var_type var_type, const char *outfile,
                                    const char *infile,
                                    const char *min_std_file, FILE *stream) {
    if (var_type == PARAMETER)
        fprintf(stream, CONFIG_VALUE_FORMAT, outfile);
    else
        fprintf(stream, CONFIG_OPTION_FORMAT, ECL_FILE_KEY, outfile);

    if (min_std_file != NULL)
        fprintf(stream, CONFIG_OPTION_FORMAT, MIN_STD_KEY, min_std_file);

    if (config->template_file != NULL)
        fprintf(stream, CONFIG_OPTION_FORMAT, TEMPLATE_KEY,
                config->template_file);

    if (config->template_key != NULL)
        fprintf(stream, CONFIG_OPTION_FORMAT, KEY_KEY, config->template_key);

    if (infile != NULL)
        fprintf(stream, CONFIG_OPTION_FORMAT, RESULT_FILE_KEY, infile);

    if (config->input_format != GEN_DATA_UNDEFINED)
        fprintf(stream, CONFIG_OPTION_FORMAT, INPUT_FORMAT_KEY,
                gen_data_config_format_name(config->input_format));

    if (config->output_format != GEN_DATA_UNDEFINED)
        fprintf(stream, CONFIG_OPTION_FORMAT, OUTPUT_FORMAT_KEY,
                gen_data_config_format_name(config->output_format));
}

VOID_FREE(gen_data_config)
