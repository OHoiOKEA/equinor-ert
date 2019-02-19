/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'enkf_tui_init.c' is part of ERT - Ensemble based Reservoir Tool.

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

#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

#include <ert/util/util.hpp>

#include <ert/enkf/enkf_main.hpp>
#include <ert/enkf/enkf_types.hpp>
#include <ert/enkf/enkf_state.hpp>
#include <ert/enkf/enkf_node.hpp>
#include <ert/enkf/enkf_fs.hpp>
#include <ert/enkf/ensemble_config.hpp>

#include <enkf_tui_util.hpp>
#include <enkf_tui_init.hpp>
#include "menu.hpp"



void enkf_tui_init(enkf_main_type * enkf_main, bool all_members , bool all_parameters , bool interval ) {
  const int prompt_len                         = 35;
  const ensemble_config_type * ensemble_config = enkf_main_get_ensemble_config(enkf_main);
  int   ens_size                               = enkf_main_get_ensemble_size( enkf_main );
  int iens1, iens2;
  bool iens_valid = false;

  /* iens2 should be interpreted as __inclusive__ */
  if ( all_members ) {
    iens1 = 0;
    iens2 = ens_size - 1;
    iens_valid = true;
  } else {
    if( interval ) {
      char * iens1char = util_scanf_int_with_limits_return_char("First ensemble member in interval"  , prompt_len , 0 , ens_size - 1);
      if (strlen(iens1char)) {
        util_sscanf_int(iens1char , &iens1);
        char * iens2char = util_scanf_int_with_limits_return_char("Second ensemble member in interval" , prompt_len , iens1 , ens_size - 1);
        if (strlen(iens2char)) {
          util_sscanf_int(iens2char , &iens2);
          iens_valid = true;
        }
        free(iens2char);
      }
      free(iens1char);
    } else {
      char * iens1char = util_scanf_int_with_limits_return_char("Initialize ensemble member" , prompt_len , 0 , ens_size - 1);
      if (strlen(iens1char)) {
        util_sscanf_int(iens1char , &iens1);
        iens2 = iens1;
        iens_valid = true;
      }
      free(iens1char);
    }
  }

  if (iens_valid) {
    stringlist_type * param_list = NULL;
    if (all_parameters)
      param_list = ensemble_config_alloc_keylist_from_var_type( ensemble_config , PARAMETER );
    else {
      const enkf_config_node_type * config_node = NULL;
      param_list = stringlist_alloc_new();
      config_node = enkf_tui_util_scanf_key(ensemble_config , prompt_len , INVALID , INVALID_VAR);
      if( config_node != NULL )
        stringlist_append_copy( param_list , enkf_config_node_get_key(config_node));
    }

    if (param_list != NULL) {
      enkf_fs_type * init_fs = enkf_main_tui_get_fs( enkf_main );
      bool_vector_type * iens_mask = bool_vector_alloc( ens_size , false );
      path_fmt_type * runpath_fmt = model_config_get_runpath_fmt(enkf_main_get_model_config(enkf_main));
      subst_list_type * subst_list = enkf_main_get_data_kw(enkf_main);
      int iter = 0;
      bool_vector_iset_block( iens_mask , iens1 , iens2 - iens1 + 1, true );
      {
        ert_run_context_type * run_context = ert_run_context_alloc_INIT_ONLY(init_fs, INIT_CONDITIONAL, iens_mask, runpath_fmt, subst_list , iter );
        enkf_main_initialize_from_scratch(enkf_main , param_list , run_context);
        ert_run_context_free(run_context);
      }
      stringlist_free( param_list );
      bool_vector_free( iens_mask );
    }
  }
}


static void enkf_tui_init1(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main, true , true , false);
}

static void enkf_tui_init2(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main , true , false , false);
}

static void enkf_tui_init3(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main , false , true , false);
}

static void enkf_tui_init4(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main , false , false, false);
}

static void enkf_tui_init5(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main , false , true, true);
}

static void enkf_tui_init6(void * enkf_main) {
  enkf_tui_init((enkf_main_type *) enkf_main , false , false, true);
}

void enkf_tui_init_menu(void * arg) {
  enkf_main_type * enkf_main = enkf_main_safe_cast(arg);

  menu_type * menu = menu_alloc("Initialize from scratch" , "Back" , "bB");
  menu_add_item(menu , "Initialize all members/all parameters"                  , "1" , enkf_tui_init1 , enkf_main , NULL);
  menu_add_item(menu , "Initialize all members/one  parameter"                  , "2" , enkf_tui_init2 , enkf_main , NULL);
  menu_add_item(menu , "Initialize one member/all parameters"                   , "3" , enkf_tui_init3 , enkf_main , NULL);
  menu_add_item(menu , "Initialize one member/one parameter"                    , "4" , enkf_tui_init4 , enkf_main , NULL);
  menu_add_item(menu , "Initialize interval of ensemble members/all parameters" , "5" , enkf_tui_init5 , enkf_main , NULL);
  menu_add_item(menu , "Initialize interval of ensemble members/one parameter"  , "6" , enkf_tui_init6 , enkf_main , NULL);
  menu_run(menu);
  menu_free(menu);

}
