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
    char *key;
    /** Vector of gen_kw_parameter_type instances. */
    vector_type *parameters;
    char *template_file;
    char *parameter_file;
    /** Pointer to the tag_format owned by the ensemble config object. */
    const char *tag_fmt;
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

const char *gen_kw_config_get_template_file(const gen_kw_config_type *config) {
    return config->template_file;
}

/**
  The input template file must point to an existing file.
*/
void gen_kw_config_set_template_file(gen_kw_config_type *config,
                                     const char *template_file) {
    if (template_file != NULL) {
        if (!fs::exists(template_file))
            util_abort("%s: the template_file:%s does not exist - aborting.\n",
                       __func__, template_file);
    }

    config->template_file =
        util_realloc_string_copy(config->template_file, template_file);
}

void gen_kw_config_set_parameter_file(gen_kw_config_type *config,
                                      const char *parameter_file) {
    config->parameter_file =
        util_realloc_string_copy(config->parameter_file, parameter_file);
    vector_clear(config->parameters);
    if (parameter_file != NULL) {
        config_parser_type *parser = config_alloc();
        config_content_type *content =
            config_parse(parser, parameter_file, "--", NULL, NULL, NULL,
                         CONFIG_UNRECOGNIZED_ADD, false);
        if (!content->valid) {
            auto header = fmt::format(
                "encountered errors while parsing GEN_KW parameter file {}",
                parameter_file);
            std::string errors;
            for (auto &error : content->parse_errors) {
                errors += error;
            }
            logger->warning("{}\n{}", header, errors);
        }
        for (auto parse_error : content->parse_errors) {
            logger->warning(parse_error);
        }
        for (int item_index = 0; item_index < config_content_get_size(content);
             item_index++) {
            const config_content_node_type *node =
                config_content_iget_node(content, item_index);
            const char *parameter_name = config_content_node_get_kw(node);
            gen_kw_parameter_type *parameter =
                gen_kw_parameter_alloc(parameter_name);
            trans_func_type *trans_func =
                trans_func_alloc(config_content_node_get_stringlist(node));
            if (trans_func) {
                gen_kw_parameter_set_trans_func(parameter, trans_func);
                vector_append_owned_ref(config->parameters, parameter,
                                        gen_kw_parameter_free__);
            } else
                util_abort(
                    "%s: failed to create tranformation function for %s\n",
                    __func__, parameter_name);
        }
        config_content_free(content);
        config_free(parser);
    }
}

const char *gen_kw_config_get_parameter_file(const gen_kw_config_type *config) {
    return config->parameter_file;
}

/**
   A call to gen_kw_config_update_tag_format() must be called
   afterwards, otherwise all tagged strings will just be NULL.
*/
gen_kw_config_type *gen_kw_config_alloc_empty(const char *key,
                                              const char *tag_fmt) {
    gen_kw_config_type *gen_kw_config =
        (gen_kw_config_type *)util_malloc(sizeof *gen_kw_config);

    gen_kw_config->key = NULL;
    gen_kw_config->template_file = NULL;
    gen_kw_config->parameter_file = NULL;
    gen_kw_config->parameters = vector_alloc_new();
    gen_kw_config->tag_fmt = tag_fmt;
    gen_kw_config->key = util_alloc_string_copy(key);

    return gen_kw_config;
}

void gen_kw_config_update(gen_kw_config_type *config, const char *template_file,
                          const char *parameter_file) {
    gen_kw_config_set_template_file(config, template_file);
    gen_kw_config_set_parameter_file(config, parameter_file);
}

double gen_kw_config_transform(const gen_kw_config_type *config, int index,
                               double x) {
    const gen_kw_parameter_type *parameter =
        (const gen_kw_parameter_type *)vector_iget_const(config->parameters,
                                                         index);
    return trans_func_eval(parameter->trans_func, x);
}

bool gen_kw_config_should_use_log_scale(const gen_kw_config_type *config,
                                        int index) {
    const gen_kw_parameter_type *parameter =
        (const gen_kw_parameter_type *)vector_iget_const(config->parameters,
                                                         index);
    return trans_func_use_log_scale(parameter->trans_func);
}

void gen_kw_config_free(gen_kw_config_type *gen_kw_config) {
    free(gen_kw_config->key);
    free(gen_kw_config->template_file);
    free(gen_kw_config->parameter_file);

    vector_free(gen_kw_config->parameters);
    free(gen_kw_config);
}

int gen_kw_config_get_data_size(const gen_kw_config_type *gen_kw_config) {
    return vector_get_size(gen_kw_config->parameters);
}

const char *gen_kw_config_get_key(const gen_kw_config_type *config) {
    return config->key;
}

const char *gen_kw_config_get_tag_fmt(const gen_kw_config_type *config) {
    return config->tag_fmt;
}

const char *gen_kw_config_iget_name(const gen_kw_config_type *config,
                                    int kw_nr) {
    const gen_kw_parameter_type *parameter =
        (const gen_kw_parameter_type *)vector_iget(config->parameters, kw_nr);
    return parameter->name;
}

void gen_kw_config_update_tag_format(gen_kw_config_type *config,
                                     const char *tag_format) {
    config->tag_fmt = tag_format;
}

stringlist_type *
gen_kw_config_alloc_name_list(const gen_kw_config_type *config) {

    stringlist_type *name_list = stringlist_alloc_new();
    int i;
    for (i = 0; i < vector_get_size(config->parameters); i++) {
        const gen_kw_parameter_type *parameter =
            (const gen_kw_parameter_type *)vector_iget_const(config->parameters,
                                                             i);
        stringlist_append_copy(
            name_list,
            parameter
                ->name); /* If the underlying parameter goes out scope - whom bang .. */
    }

    return name_list;
}

const char *gen_kw_config_iget_function_type(const gen_kw_config_type *config,
                                             int index) {
    const gen_kw_parameter_type *parameter =
        (const gen_kw_parameter_type *)vector_iget_const(config->parameters,
                                                         index);
    return trans_func_get_name(parameter->trans_func);
}

stringlist_type *
gen_kw_config_iget_function_parameter_names(const gen_kw_config_type *config,
                                            int index) {
    const gen_kw_parameter_type *parameter =
        (const gen_kw_parameter_type *)vector_iget_const(config->parameters,
                                                         index);
    return trans_func_get_param_names(parameter->trans_func);
}

VOID_FREE(gen_kw_config)
VOID_GET_DATA_SIZE(gen_kw)

ERT_CLIB_SUBMODULE("gen_kw_config", m) {
    m.def(
        "get_function_parameter_values",
        [](Cwrap<gen_kw_config_type> self, int index) {
            const gen_kw_parameter_type *parameter =
                (const gen_kw_parameter_type *)vector_iget_const(
                    self->parameters, index);
            return trans_func_get_params(parameter->trans_func);
        },
        py::arg("self"), py::arg("index"));
}
