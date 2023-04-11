#ifndef ERT_GEN_KW_CONFIG_H
#define ERT_GEN_KW_CONFIG_H

#include <stdbool.h>
#include <stdio.h>

#include <ert/util/stringlist.h>
#include <ert/util/util.h>

#include <ert/enkf/enkf_macros.hpp>

typedef struct gen_kw_config_struct gen_kw_config_type;

extern "C" void gen_kw_config_set_parameter_file(gen_kw_config_type *config,
                                                 const char *parameter_file);
extern "C" void gen_kw_config_free(gen_kw_config_type *);
extern "C" PY_USED double gen_kw_config_transform(const gen_kw_config_type *,
                                                  int index, double x);
extern "C" bool
gen_kw_config_should_use_log_scale(const gen_kw_config_type *config, int index);
extern "C" int gen_kw_config_get_data_size(const gen_kw_config_type *);
extern "C" const char *gen_kw_config_iget_name(const gen_kw_config_type *, int);
extern "C" stringlist_type *
gen_kw_config_alloc_name_list(const gen_kw_config_type *config);
extern "C" gen_kw_config_type *gen_kw_config_alloc_empty();
extern "C" PY_USED const char *
gen_kw_config_iget_function_type(const gen_kw_config_type *config, int index);

extern "C" stringlist_type *
gen_kw_config_iget_function_parameter_names(const gen_kw_config_type *config,
                                            int index);

VOID_FREE_HEADER(gen_kw_config);
VOID_GET_DATA_SIZE_HEADER(gen_kw);
#endif
