#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <ert/util/buffer.h>
#include <ert/util/rng.h>
#include <ert/util/util.h>
#include <ert/util/vector.h>

#include <ert/enkf/enkf_node.hpp>
#include <ert/enkf/ext_param.hpp>
#include <ert/enkf/field.hpp>
#include <ert/enkf/gen_data.hpp>
#include <ert/enkf/gen_kw.hpp>
#include <ert/enkf/run_arg.hpp>
#include <ert/enkf/summary.hpp>
#include <ert/enkf/surface.hpp>

#define ENKF_NODE_TYPE_ID 71043086

/**
   A small illustration (says more than thousand words ...) of how the
   enkf_node, enkf_config_node, field[1] and field_config[1] objects
   are linked.


   ================
   |              |   o-----------
   |  ================           |                =====================
   |  |              |   o--------                |                   |
   |  |  ================        |------------->  |                   |
   |  |  |              |        |                |  enkf_config_node |
   |  |  |              |        |                |                   |
   ===|  |  enkf_node   |  o------                |                   |
   o |  |              |                         |                   |
   | ===|              |                         =====================
   |  o |              |                                   o
   |  | ================                                   |
   |  |        o                                           |
   |  \        |                                           |
   |   \       |                                           |
   |    |      |                                           |
   |    |      |                                           |
   |    |      |                                           |
   |    |      |                                           |
   \|/   |      |                                           |
   ======|======|==                                        \|/
   |    \|/     | |   o-----------
   |  ==========|=====           |                =====================
   |  |        \|/   |   o--------                |                   |
   |  |  ================        |------------->  |                   |
   |  |  |              |        |                |  field_config     |
   |  |  |              |        |                |                   |
   ===|  |  field       |  o------                |                   |
   |     |              |                         |                   |
   ===   |              |                         =====================
         |              |
         ================


   To summarize in words:

   * The enkf_node object is an abstract object, which again contains
   a spesific enkf_object, like e.g. the field objects shown
   here. In general we have an ensemble of enkf_node objects.

   * The enkf_node objects contain a pointer to an enkf_config_node
   object.

   * The enkf_config_node object contains a pointer to the specific
   config object, i.e. field_config in this case.

   * All the field objects contain a pointer to a field_config object.


   [1]: field is just an example, and could be replaced with any of
   the enkf object types.

   A note on memory
   ================

   The enkf_nodes can consume large amounts of memory, and for large
   models/ensembles we have a situation where not all the
   members/fields can be in memory simultaneously - such low-memory
   situations are not really supported at the moment, but we have
   implemented some support for such problems:

   o All enkf objects should have a xxx_realloc_data() function. This
   function should be implemented in such a way that it is always
   safe to call, i.e. if the object already has allocated data the
   function should just return.

   o All enkf objects should implement a xxx_free_data()
   function. This function free the data of the object, and set the
   data pointer to NULL.


   The following 'rules' apply to the memory treatment:
   ----------------------------------------------------

   o Functions writing to memory can always be called, and it is their
   responsibility to allocate memory before actually writing on it. The
   writer functions are:

   enkf_node_initialize()
   enkf_node_forward_load()

   The (re)allocation of data is done at
   the enkf_node level, and **NOT** in the low level object
   (altough that is where it is eventually done of course).

   o When it comes to functions reading memory it is a bit more
   tricky. It could be that if the functions are called without
   memory, that just means that the object is not active or
   something (and the function should just return). On the other
   hand trying to read a NULL pointer does indicate that program
   logic is not fully up to it? And should therefore maybe be
   punished?

*/
struct enkf_node_struct {
    UTIL_TYPE_ID_DECLARATION;
    alloc_ftype *alloc;
    ecl_write_ftype *ecl_write;
    forward_load_ftype *forward_load;
    forward_load_vector_ftype *forward_load_vector;
    user_get_ftype *user_get;
    user_get_vector_ftype *user_get_vector;
    fload_ftype *fload;
    has_data_ftype *has_data;

    serialize_ftype *serialize;
    deserialize_ftype *deserialize;
    read_from_buffer_ftype *read_from_buffer;
    write_to_buffer_ftype *write_to_buffer;
    initialize_ftype *initialize;
    node_free_ftype *freef;
    node_copy_ftype *copy;

    bool vector_storage;

    /** The (hash)key this node is identified with. */
    char *node_key;

    /** A pointer to the underlying enkf_object, i.e. gen_kw_type instance, or
     * a field_type instance or ... */
    void *data;
    /** A pointer to a enkf_config_node instance (which again cointans a
     * pointer to the config object of data). */
    const enkf_config_node_type *config;
};

UTIL_IS_INSTANCE_FUNCTION(enkf_node, ENKF_NODE_TYPE_ID)

const enkf_config_node_type *enkf_node_get_config(const enkf_node_type *node) {
    return node->config;
}

bool enkf_node_vector_storage(const enkf_node_type *node) {
    return node->vector_storage;
}

/*
  All the function pointers REALLY should be in the config object ...
*/

#define FUNC_ASSERT(func)                                                      \
    if (func == NULL)                                                          \
        util_abort("%s: function handler: %s not registered for node:%s - "    \
                   "aborting\n",                                               \
                   __func__, #func, enkf_node->node_key);

void enkf_node_alloc_domain_object(enkf_node_type *enkf_node) {
    FUNC_ASSERT(enkf_node->alloc);
    {
        if (enkf_node->data != NULL)
            enkf_node->freef(enkf_node->data);
        enkf_node->data = enkf_node->alloc(
            enkf_config_node_get_ref(enkf_node->config)); // CXX_CAST_ERROR
    }
}

ert_impl_type enkf_node_get_impl_type(const enkf_node_type *enkf_node) {
    return enkf_config_node_get_impl_type(enkf_node->config);
}

bool enkf_node_use_forward_init(const enkf_node_type *enkf_node) {
    return enkf_config_node_use_forward_init(enkf_node->config);
}

void *enkf_node_value_ptr(const enkf_node_type *enkf_node) {
    return enkf_node->data;
}

/**
   This function calls the node spesific ecl_write function. IF the
   ecl_file of the (node == NULL) *ONLY* the path is sent to the node
   spesific file.
*/
void enkf_node_ecl_write(const enkf_node_type *enkf_node, const char *path,
                         value_export_type *export_value, int report_step) {
    if (enkf_node->ecl_write != NULL) {
        char *node_eclfile = enkf_config_node_alloc_outfile(
            enkf_node->config,
            report_step); /* Will return NULL if the node does not have any outfile format. */
        /*
      If the node does not have a outfile (i.e. ecl_file), the
      ecl_write function will be called with file argument NULL. It
      is then the responsability of the low-level implementation to
      do "the right thing".
    */
        enkf_node->ecl_write(enkf_node->data, path, node_eclfile, export_value);
        free(node_eclfile);
    }
}

/**
   This function takes a string - key - as input an calls a node
   specific function to look up one scalar based on that key. The key
   is always a string, but the the type of content will vary for the
   different objects. For a field, the key will be a string of "i,j,k"
   for a cell.

   If the user has asked for something which does not exist the
   function SHOULD NOT FAIL; it should return false and set the *value
   to 0.
*/
bool enkf_node_user_get(enkf_node_type *enkf_node, enkf_fs_type *fs,
                        const char *key, node_id_type node_id, double *value) {
    FUNC_ASSERT(enkf_node->user_get);

    bool loadOK = enkf_node_try_load(enkf_node, fs, node_id);

    if (loadOK)
        return enkf_node->user_get(enkf_node->data, key, node_id.report_step,
                                   value);
    else {
        *value = 0;
        return false;
    }
}

bool enkf_node_user_get_vector(enkf_node_type *enkf_node, enkf_fs_type *fs,
                               const char *key, int iens,
                               double_vector_type *values) {
    if (enkf_node->vector_storage) {
        if (enkf_node_try_load_vector(enkf_node, fs, iens)) {
            enkf_node->user_get_vector(enkf_node->data, key, values);
            return true;
        } else
            return false;
    } else {
        util_abort("%s: internal error - function should only be called by "
                   "nodes with vector storage.\n",
                   __func__);
        return false;
    }
}

bool enkf_node_fload(enkf_node_type *enkf_node, const char *filename) {
    FUNC_ASSERT(enkf_node->fload);
    return enkf_node->fload(enkf_node->data, filename);
}

/**
   This function loads (internalizes) ECLIPSE results, the ecl_file
   instance with restart data, and the ecl_sum instance with summary
   data must already be loaded by the calling function.

   IFF the enkf_node has registered a filename to load from, that is
   passed to the specific load function, otherwise the run_path is sent
   to the load function.

   If the node does not have a forward_load function, the function just
   returns.
*/
bool enkf_node_forward_load(enkf_node_type *enkf_node, int report_step,
                            const run_arg_type *run_arg,
                            const ecl_sum_type *ecl_sum) {
    bool loadOK;
    FUNC_ASSERT(enkf_node->forward_load);
    {
        if (enkf_node_get_impl_type(enkf_node) == SUMMARY)
            /* Fast path for loading summary data. */
            loadOK = enkf_node->forward_load(enkf_node->data, NULL, report_step,
                                             ecl_sum);
        else {
            char *input_file =
                enkf_config_node_alloc_infile(enkf_node->config, report_step);

            if (input_file != NULL) {
                char *file = util_alloc_filename(run_arg_get_runpath(run_arg),
                                                 input_file, NULL);
                loadOK = enkf_node->forward_load(enkf_node->data, file,
                                                 report_step, run_arg);
                free(file);
            } else
                loadOK = enkf_node->forward_load(enkf_node->data, NULL,
                                                 report_step, run_arg);

            free(input_file);
        }
    }
    return loadOK;
}

bool enkf_node_forward_init(enkf_node_type *enkf_node, const char *run_path,
                            int iens) {
    char *init_file =
        enkf_config_node_alloc_initfile(enkf_node->config, run_path, iens);
    bool init = enkf_node->initialize(enkf_node->data, iens, init_file, NULL);
    free(init_file);
    return init;
}

bool enkf_node_forward_load_vector(enkf_node_type *enkf_node,
                                   const ecl_sum_type *ecl_sum,
                                   const int_vector_type *time_index) {
    bool loadOK;
    FUNC_ASSERT(enkf_node->forward_load_vector);
    loadOK = enkf_node->forward_load_vector(enkf_node->data, NULL, ecl_sum,
                                            time_index);

    return loadOK;
}

static bool enkf_node_store_buffer(enkf_node_type *enkf_node, enkf_fs_type *fs,
                                   int report_step, int iens) {
    FUNC_ASSERT(enkf_node->write_to_buffer);
    {
        bool data_written;
        buffer_type *buffer = buffer_alloc(100);
        const enkf_config_node_type *config_node =
            enkf_node_get_config(enkf_node);
        buffer_fwrite_time_t(buffer, time(NULL));
        data_written =
            enkf_node->write_to_buffer(enkf_node->data, buffer, report_step);
        if (data_written) {
            const char *node_key = enkf_config_node_get_key(config_node);
            enkf_var_type var_type = enkf_config_node_get_var_type(config_node);

            if (enkf_node->vector_storage)
                enkf_fs_fwrite_vector(fs, buffer, node_key, var_type, iens);
            else
                enkf_fs_fwrite_node(fs, buffer, node_key, var_type, report_step,
                                    iens);
        }
        buffer_free(buffer);
        return data_written;
    }
}

bool enkf_node_store_vector(enkf_node_type *enkf_node, enkf_fs_type *fs,
                            int iens) {
    return enkf_node_store_buffer(enkf_node, fs, -1, iens);
}

bool enkf_node_store(enkf_node_type *enkf_node, enkf_fs_type *fs,
                     node_id_type node_id) {
    if (enkf_node->vector_storage)
        return enkf_node_store_vector(enkf_node, fs, node_id.iens);
    else
        return enkf_node_store_buffer(enkf_node, fs, node_id.report_step,
                                      node_id.iens);
}

bool enkf_node_try_load(enkf_node_type *enkf_node, enkf_fs_type *fs,
                        node_id_type node_id) {
    if (enkf_node_has_data(enkf_node, fs, node_id)) {
        enkf_node_load(enkf_node, fs, node_id);
        return true;
    } else
        return false;
}

static void enkf_node_buffer_load(enkf_node_type *enkf_node, enkf_fs_type *fs,
                                  int report_step, int iens) {
    FUNC_ASSERT(enkf_node->read_from_buffer);
    {
        buffer_type *buffer = buffer_alloc(100);
        const enkf_config_node_type *config_node =
            enkf_node_get_config(enkf_node);
        const char *node_key = enkf_config_node_get_key(config_node);
        enkf_var_type var_type = enkf_config_node_get_var_type(config_node);

        if (enkf_node->vector_storage)
            enkf_fs_fread_vector(fs, buffer, node_key, var_type, iens);
        else
            enkf_fs_fread_node(fs, buffer, node_key, var_type, report_step,
                               iens);

        buffer_fskip_time_t(buffer);

        enkf_node->read_from_buffer(enkf_node->data, buffer, fs, report_step);
        buffer_free(buffer);
    }
}

void enkf_node_load_vector(enkf_node_type *enkf_node, enkf_fs_type *fs,
                           int iens) {
    enkf_node_buffer_load(enkf_node, fs, -1, iens);
}

void enkf_node_load(enkf_node_type *enkf_node, enkf_fs_type *fs,
                    node_id_type node_id) {
    if (enkf_node->vector_storage)
        enkf_node_load_vector(enkf_node, fs, node_id.iens);
    else
        /* Normal load path */
        enkf_node_buffer_load(enkf_node, fs, node_id.report_step, node_id.iens);
}

bool enkf_node_try_load_vector(enkf_node_type *enkf_node, enkf_fs_type *fs,
                               int iens) {
    if (enkf_config_node_has_vector(enkf_node->config, fs, iens)) {
        enkf_node_load_vector(enkf_node, fs, iens);
        return true;
    } else
        return false;
}

/**
  In the case of nodes with vector storage this function
  will load the entire vector.
*/
enkf_node_type *enkf_node_load_alloc(const enkf_config_node_type *config_node,
                                     enkf_fs_type *fs, node_id_type node_id) {
    if (enkf_config_node_vector_storage(config_node)) {
        if (enkf_config_node_has_vector(config_node, fs, node_id.iens)) {
            enkf_node_type *node = enkf_node_alloc(config_node);
            enkf_node_load(node, fs, node_id);
            return node;
        } else {
            util_abort("%s: could not load vector:%s from iens:%d\n", __func__,
                       enkf_config_node_get_key(config_node), node_id.iens);
            return NULL;
        }
    } else {
        if (enkf_config_node_has_node(config_node, fs, node_id)) {
            enkf_node_type *node = enkf_node_alloc(config_node);
            enkf_node_load(node, fs, node_id);
            return node;
        } else {
            util_abort("%s: Could not load node: key:%s  iens:%d  report:%d \n",
                       __func__, enkf_config_node_get_key(config_node),
                       node_id.iens, node_id.report_step);
            return NULL;
        }
    }
}

void enkf_node_copy(const enkf_config_node_type *config_node,
                    enkf_fs_type *src_case, enkf_fs_type *target_case,
                    node_id_type src_id, node_id_type target_id) {

    enkf_node_type *enkf_node =
        enkf_node_load_alloc(config_node, src_case, src_id);

    /* Hack to ensure that size is set for the gen_data instances.
     This sneeks low level stuff into a high level scope. BAD. */
    {
        ert_impl_type impl_type = enkf_node_get_impl_type(enkf_node);
        if (impl_type == GEN_DATA) {
            /* Read the size at report_step_from */
            gen_data_type *gen_data =
                (gen_data_type *)enkf_node_value_ptr(enkf_node);
            int size = gen_data_get_size(gen_data);

            /* Enforce the size at report_step_to */
            gen_data_assert_size(gen_data, size, target_id.report_step);
        }
    }

    enkf_node_store(enkf_node, target_case, target_id);
    enkf_node_free(enkf_node);
}

bool enkf_node_has_data(enkf_node_type *enkf_node, enkf_fs_type *fs,
                        node_id_type node_id) {
    if (enkf_node->vector_storage) {
        FUNC_ASSERT(enkf_node->has_data);
        {
            int report_step = node_id.report_step;
            int iens = node_id.iens;

            // Try to load the vector.
            if (enkf_config_node_has_vector(enkf_node->config, fs, iens)) {
                enkf_node_load_vector(enkf_node, fs, iens);

                // The vector is loaded. Check if we have the report_step/state asked for:
                return enkf_node->has_data(enkf_node->data, report_step);
            } else
                return false;
        }
    } else
        return enkf_config_node_has_node(enkf_node->config, fs, node_id);
}

void enkf_node_serialize(enkf_node_type *enkf_node, enkf_fs_type *fs,
                         node_id_type node_id, const ActiveList *active_list,
                         Eigen::MatrixXd &A, int row_offset, int column) {

    FUNC_ASSERT(enkf_node->serialize);
    enkf_node_load(enkf_node, fs, node_id);
    enkf_node->serialize(enkf_node->data, node_id, active_list, A, row_offset,
                         column);
}

void enkf_node_deserialize(enkf_node_type *enkf_node, enkf_fs_type *fs,
                           node_id_type node_id, const ActiveList *active_list,
                           const Eigen::MatrixXd &A, int row_offset,
                           int column) {

    FUNC_ASSERT(enkf_node->deserialize);
    enkf_node->deserialize(enkf_node->data, node_id, active_list, A, row_offset,
                           column);
    enkf_node_store(enkf_node, fs, node_id);
}

/**
   The return value is whether any initialization has actually taken
   place. If the function returns false it is for instance not
   necessary to internalize anything.
*/
bool enkf_node_initialize(enkf_node_type *enkf_node, int iens, rng_type *rng) {
    if (enkf_node->initialize != NULL) {
        char *init_file =
            enkf_config_node_alloc_initfile(enkf_node->config, NULL, iens);
        bool init =
            enkf_node->initialize(enkf_node->data, iens, init_file, rng);
        free(init_file);
        return init;
    } else
        return false; /* No init performed */
}

extern "C" void enkf_node_free(enkf_node_type *enkf_node) {
    if (enkf_node->freef != NULL)
        enkf_node->freef(enkf_node->data);
    free(enkf_node->node_key);
    free(enkf_node);
}

const char *enkf_node_get_key(const enkf_node_type *enkf_node) {
    return enkf_node->node_key;
}

#undef FUNC_ASSERT

static enkf_node_type *
enkf_node_alloc_empty(const enkf_config_node_type *config) {
    const char *node_key = enkf_config_node_get_key(config);
    ert_impl_type impl_type = enkf_config_node_get_impl_type(config);
    enkf_node_type *node = (enkf_node_type *)util_malloc(sizeof *node);
    node->vector_storage = enkf_config_node_vector_storage(config);
    node->config = config;
    node->node_key = util_alloc_string_copy(node_key);
    node->data = NULL;

    node->alloc = NULL;
    node->ecl_write = NULL;
    node->forward_load = NULL;
    node->forward_load_vector = NULL;
    node->copy = NULL;
    node->initialize = NULL;
    node->freef = NULL;
    node->user_get = NULL;
    node->user_get_vector = NULL;
    node->fload = NULL;
    node->read_from_buffer = NULL;
    node->write_to_buffer = NULL;
    node->serialize = NULL;
    node->deserialize = NULL;
    node->has_data = NULL;

    switch (impl_type) {
    case (GEN_KW):
        node->alloc = gen_kw_alloc__;
        node->ecl_write = gen_kw_ecl_write__;
        node->copy = gen_kw_copy__;
        node->initialize = gen_kw_initialize__;
        node->freef = gen_kw_free__;
        node->user_get = gen_kw_user_get__;
        node->write_to_buffer = gen_kw_write_to_buffer__;
        node->read_from_buffer = gen_kw_read_from_buffer__;
        node->serialize = gen_kw_serialize__;
        node->deserialize = gen_kw_deserialize__;
        node->fload = gen_kw_fload__;
        break;
    case (SUMMARY):
        node->forward_load = summary_forward_load__;
        node->forward_load_vector = summary_forward_load_vector__;
        node->alloc = summary_alloc__;
        node->copy = summary_copy__;
        node->freef = summary_free__;
        node->user_get = summary_user_get__;
        node->user_get_vector = summary_user_get_vector__;
        node->read_from_buffer = summary_read_from_buffer__;
        node->write_to_buffer = summary_write_to_buffer__;
        node->serialize = summary_serialize__;
        node->deserialize = summary_deserialize__;
        node->has_data = summary_has_data__;
        break;
    case (SURFACE):
        node->initialize = surface_initialize__;
        node->ecl_write = surface_ecl_write__;
        node->alloc = surface_alloc__;
        node->copy = surface_copy__;
        node->freef = surface_free__;
        node->user_get = surface_user_get__;
        node->read_from_buffer = surface_read_from_buffer__;
        node->write_to_buffer = surface_write_to_buffer__;
        node->serialize = surface_serialize__;
        node->deserialize = surface_deserialize__;
        node->fload = surface_fload__;
        break;
    case (FIELD):
        node->alloc = field_alloc__;
        node->ecl_write = field_ecl_write__;
        node->copy = field_copy__;
        node->initialize = field_initialize__;
        node->freef = field_free__;
        node->user_get = field_user_get__;
        node->read_from_buffer = field_read_from_buffer__;
        node->write_to_buffer = field_write_to_buffer__;
        node->serialize = field_serialize__;
        node->deserialize = field_deserialize__;
        node->fload = field_fload__;
        break;
    case (GEN_DATA):
        node->alloc = gen_data_alloc__;
        node->initialize = gen_data_initialize__;
        node->copy = gen_data_copy__;
        node->freef = gen_data_free__;
        node->ecl_write = gen_data_ecl_write__;
        node->forward_load = gen_data_forward_load__;
        node->user_get = gen_data_user_get__;
        node->read_from_buffer = gen_data_read_from_buffer__;
        node->write_to_buffer = gen_data_write_to_buffer__;
        node->serialize = gen_data_serialize__;
        node->deserialize = gen_data_deserialize__;
        break;
    /* EXT_PARAM is used by Everest */
    case (EXT_PARAM):
        node->alloc = ext_param_alloc__;
        node->freef = ext_param_free__;
        node->ecl_write = ext_param_ecl_write__;
        node->write_to_buffer = ext_param_write_to_buffer__;
        node->read_from_buffer = ext_param_read_from_buffer__;
        break;
    default:
        util_abort("%s: implementation type: %d unknown - all hell is loose - "
                   "aborting \n",
                   __func__, impl_type);
    }
    return node;
}

enkf_node_type *enkf_node_alloc(const enkf_config_node_type *config) {
    enkf_node_type *node = enkf_node_alloc_empty(config);
    UTIL_TYPE_ID_INIT(node, ENKF_NODE_TYPE_ID);
    enkf_node_alloc_domain_object(node);
    return node;
}

enkf_node_type *enkf_node_deep_alloc(const enkf_config_node_type *config) {
    return enkf_node_alloc(config);
}
