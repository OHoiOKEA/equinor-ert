#include <filesystem>
#include <numeric>

#include <stdlib.h>
#include <string.h>

#include <ert/python.hpp>
#include <ert/util/hash.h>
#include <ert/util/util.h>
#include <ert/util/vector.h>

#include <ert/config/config_parser.hpp>
#include <ert/logging.hpp>

#include <ert/enkf/config_keys.hpp>
#include <ert/enkf/enkf_defaults.hpp>
#include <ert/enkf/enkf_macros.hpp>
#include <ert/enkf/gen_kw_config.hpp>
#include <ert/enkf/trans_func.hpp>

namespace fs = std::filesystem;
static auto logger = ert::get_logger("gen_kw_config");

typedef struct {
    char *name;
    trans_func_type *trans_func;
} gen_kw_parameter_type;

struct gen_kw_config_struct {
    /** Vector of gen_kw_parameter_type instances. */
    vector_type *parameters;
};

static gen_kw_parameter_type *
gen_kw_parameter_alloc(const char *parameter_name) {
    gen_kw_parameter_type *parameter =
        (gen_kw_parameter_type *)util_malloc(sizeof *parameter);
    parameter->name = util_alloc_string_copy(parameter_name);
    parameter->trans_func = NULL;
    return parameter;
}

static void gen_kw_parameter_free(gen_kw_parameter_type *parameter) {
    free(parameter->name);
    if (parameter->trans_func != NULL)
        trans_func_free(parameter->trans_func);
    free(parameter);
}

int gen_kw_config_get_data_size(const gen_kw_config_type *gen_kw_config) {
    return vector_get_size(gen_kw_config->parameters);
}

static void gen_kw_parameter_free__(void *__parameter) {
    auto parameter = static_cast<gen_kw_parameter_type *>(__parameter);
    gen_kw_parameter_free(parameter);
}

static void gen_kw_parameter_set_trans_func(gen_kw_parameter_type *parameter,
                                            trans_func_type *trans_func) {
    if (parameter->trans_func != NULL)
        trans_func_free(parameter->trans_func);
    parameter->trans_func = trans_func;
}

gen_kw_config_type *gen_kw_config_alloc_empty() {
    gen_kw_config_type *gen_kw_config =
        (gen_kw_config_type *)util_malloc(sizeof *gen_kw_config);

    gen_kw_config->parameters = vector_alloc_new();
    return gen_kw_config;
}

void gen_kw_config_free(gen_kw_config_type *gen_kw_config) {
    vector_free(gen_kw_config->parameters);
    free(gen_kw_config);
}

VOID_FREE(gen_kw_config)
VOID_GET_DATA_SIZE(gen_kw)