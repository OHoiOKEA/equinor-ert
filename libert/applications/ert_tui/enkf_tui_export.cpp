/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'enkf_tui_export.c' is part of ERT - Ensemble based Reservoir Tool.

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
#include <ert/enkf/field.hpp>
#include <ert/enkf/field_config.hpp>
#include <ert/enkf/enkf_state.hpp>
#include <ert/enkf/enkf_fs.hpp>
#include <ert/enkf/field_config.hpp>
#include <ert/enkf/gen_data.hpp>
#include <ert/enkf/gen_data_config.hpp>

#include <enkf_tui_util.hpp>
#include <enkf_tui_help.hpp>
#include "menu.hpp"
#define PROMPT_LEN  60


void enkf_tui_export_field(const enkf_main_type * enkf_main , field_file_format_type file_type) {
  const ensemble_config_type * ensemble_config = enkf_main_get_ensemble_config(enkf_main);
  const bool output_transform = true;
  const enkf_config_node_type * config_node;
  const int last_report = enkf_main_get_history_length( enkf_main );
  int        iens1 , iens2 , iens , report_step;
  path_fmt_type * export_path;

  config_node    = enkf_tui_util_scanf_key(ensemble_config , PROMPT_LEN ,  FIELD  , INVALID_VAR );

  report_step = util_scanf_int_with_limits("Report step: ", PROMPT_LEN , 0 , last_report);
  enkf_tui_util_scanf_iens_range("Realizations members to export(0 - %d)" , enkf_main_get_ensemble_size( enkf_main ) , PROMPT_LEN , &iens1 , &iens2);

  {
    char * path_fmt;
    util_printf_prompt("Filename to store files in (with %d) in: " , PROMPT_LEN , '=' , "=> ");
    path_fmt = util_alloc_stdin_line();
    export_path = path_fmt_alloc_path_fmt( path_fmt );
    free( path_fmt );
  }

  {
    enkf_fs_type   * fs   = enkf_main_tui_get_fs(enkf_main);
    enkf_node_type * node = enkf_node_alloc(config_node);

    for (iens = iens1; iens <= iens2; iens++) {
      node_id_type node_id = {.report_step = report_step , .iens = iens };
      if (enkf_node_try_load(node , fs , node_id)) {
        char * filename = path_fmt_alloc_path( export_path , false , iens);
        {
          char * path;
          util_alloc_file_components(filename , &path , NULL , NULL);
          if (path != NULL) {
            util_make_path( path );
            free( path );
          }
        }

        {
          const field_type * field = (const field_type *) enkf_node_value_ptr(node);
          field_export(field , filename , NULL , file_type , output_transform, NULL);
        }
        free(filename);
      } else
        printf("Warning: could not load realization:%d \n", iens);
    }
    enkf_node_free(node);
  }
}


void enkf_tui_export_grdecl(void * enkf_main) {
  enkf_tui_export_field((enkf_main_type *) enkf_main , ECL_GRDECL_FILE);
}



void enkf_tui_export_roff(void * enkf_main) {
  enkf_tui_export_field((enkf_main_type *) enkf_main , RMS_ROFF_FILE);
}


void enkf_tui_export_restart_active(void * enkf_main) {
  enkf_tui_export_field((enkf_main_type *) enkf_main , ECL_KW_FILE_ACTIVE_CELLS);
}


void enkf_tui_export_restart_all(void * enkf_main) {
  enkf_tui_export_field((enkf_main_type *) enkf_main , ECL_KW_FILE_ALL_CELLS);
}


void enkf_tui_export_gen_data(void * arg) {
  enkf_main_type * enkf_main = enkf_main_safe_cast( arg );
  const ensemble_config_type * ensemble_config = enkf_main_get_ensemble_config(enkf_main);
  {
    int report_step;
    int iens1 , iens2;
    const int last_report = enkf_main_get_history_length( enkf_main );

    const enkf_config_node_type * config_node;
    path_fmt_type * file_fmt;

    config_node    = enkf_tui_util_scanf_key(ensemble_config , PROMPT_LEN ,  GEN_DATA , INVALID_VAR);


    report_step = util_scanf_int_with_limits("Report step: ", PROMPT_LEN , 0 , last_report);
    enkf_tui_util_scanf_iens_range("Realizations members to export(0 - %d)" , enkf_main_get_ensemble_size( enkf_main ) , PROMPT_LEN , &iens1 , &iens2);
    {
      char path_fmt[512];
      util_printf_prompt("Filename to store files in (with %d) in: " , PROMPT_LEN , '=' , "=> ");
      scanf("%s" , path_fmt);
      file_fmt = path_fmt_alloc_path_fmt( path_fmt );
    }

    {
      enkf_fs_type   * fs   = enkf_main_tui_get_fs(enkf_main);
      enkf_node_type * node = enkf_node_alloc(config_node);
      gen_data_file_format_type export_type = gen_data_guess_export_type( (const gen_data_type *) enkf_node_value_ptr(node) );
      int iens;

      for (iens = iens1; iens <= iens2; iens++) {
        node_id_type node_id = {.report_step = report_step , .iens = iens};
        if (enkf_node_try_load(node , fs, node_id)) {
          char * full_path = path_fmt_alloc_path( file_fmt , false , iens);
          char * path;
          util_alloc_file_components(full_path , &path , NULL , NULL);
          if (path != NULL) util_make_path( path );

          {
            const gen_data_type * gen_data = (const gen_data_type *) enkf_node_value_ptr(node);
            gen_data_export(gen_data , full_path , export_type);
          }

          free(full_path);
          free(path);
        }
      }
      enkf_node_free(node);
    }
  }
}











/*****************************************************************/

void enkf_tui_export_fieldP(void * arg) {
  enkf_main_type * enkf_main                   = enkf_main_safe_cast( arg );
  const ensemble_config_type * ensemble_config = enkf_main_get_ensemble_config(enkf_main);
  const enkf_config_node_type * config_node    = enkf_tui_util_scanf_key(ensemble_config , PROMPT_LEN ,  FIELD  , INVALID_VAR );
  int iens1                                    = 0;
  int iens2                                    = enkf_main_get_ensemble_size( enkf_main );
  const int last_report                        = enkf_main_get_history_length( enkf_main );
  int report_step                              = util_scanf_int_with_limits("Report step: ", PROMPT_LEN , 0 , last_report);
  double lower_limit                           = util_scanf_double("Lower limit", PROMPT_LEN);
  double upper_limit                           = util_scanf_double("Upper limit", PROMPT_LEN);
  char * export_file;
  util_printf_prompt("Filename to store file: " , PROMPT_LEN , '=' , "=> ");
  export_file = util_alloc_stdin_line();
  {
    enkf_fs_type   * fs        = enkf_main_tui_get_fs(enkf_main);
    enkf_node_type ** ensemble = enkf_node_load_alloc_ensemble( config_node , fs , report_step , iens1 , iens2 );
    enkf_node_type *  sum      = enkf_node_alloc( config_node );
    int active_ens_size        = 0;
    int iens;

    enkf_node_clear( sum );
    {
      /* OK going low level */
      field_type * sum_field = (field_type *) enkf_node_value_ptr( sum );

      for (iens = iens1; iens < iens2; iens++) {
        if (ensemble[iens - iens1] != NULL) {
          field_type * field     = (field_type *) enkf_node_value_ptr( ensemble[iens - iens1] );
          field_update_sum( sum_field , field , lower_limit , upper_limit);
          active_ens_size++;
        }
      }
      if (active_ens_size > 0) {
        field_scale( sum_field , 1.0 / active_ens_size );
        {
          char * path;
          util_alloc_file_components( export_file , &path , NULL , NULL);
          if (path != NULL) {
            util_make_path( path );
            free( path );
          }
        }
        field_export(sum_field , export_file , NULL , RMS_ROFF_FILE , false, NULL);
      } else fprintf(stderr,"Warning: no data found \n");
    }

    for (iens = iens1; iens < iens2; iens++) {
      if (ensemble[iens - iens1] != NULL)
        enkf_node_free( ensemble[iens - iens1] );
    }

    free( ensemble );
    enkf_node_free( sum );
  }
  free( export_file );
}


/*****************************************************************/


/**
   This is a very simple function for exporting a scalar value for all
   member/report steps to a CSV file. The file is characterized by:

    * Missing elements are represented with an empty string.

    * The header strings are quoted with "".

    * End of line is \r\n

   Unfortunately Excel does not seem to recognize the csv format, and
   it is necessary to go through a text import wizard in excel. To
   import this file you go through the following hoops in excel:

    1. [Data> - [Import external data> - [Import data>

    2. Select the file to import from.

    3. The text import wizard from excel should pop up:

         1. Select (*) Delimited - press next.
         2. Select delimiter "Comma" - press next.
         3. press finish.

      Finally you are asked where in the excel workbook you want to
      insert the data.
*/


#define CSV_NEWLINE        "\r\n"
#define CSV_MISSING_VALUE  ""
#define CSV_SEP            ","


void enkf_tui_export_scalar2csv(void * arg) {
  enkf_main_type * enkf_main = enkf_main_safe_cast( arg );
  const ensemble_config_type * ensemble_config = enkf_main_get_ensemble_config(enkf_main);
  const enkf_config_node_type * config_node;
  char * user_key, *key_index;

  util_printf_prompt("Scalar to export (KEY:INDEX)" , PROMPT_LEN , '=' , "=> "); user_key = util_alloc_stdin_line();
  config_node = ensemble_config_user_get_node( ensemble_config , user_key , &key_index);
  if (config_node != NULL) {
    int    report_step , first_report, last_report;
    int    iens1 , iens2, iens;
    char * csv_file;

    iens2        = enkf_main_get_ensemble_size( enkf_main ) - 1;
    iens1        = 0;
    first_report = 0;
    last_report  = enkf_main_get_history_length( enkf_main );
    {
      char * path;
      char * prompt = util_alloc_sprintf("File to store \'%s\'", user_key);
      util_printf_prompt(prompt , PROMPT_LEN , '=' , "=> ");
      csv_file = util_alloc_stdin_line();

      util_alloc_file_components( csv_file , &path , NULL , NULL);
      if (path != NULL) {
        if (util_entry_exists( path )) {
          if (!util_is_directory( path )) {
            /* The path component already exists in the filesystem - and it is not a directory - we leave the building. */
            fprintf(stderr,"Sorry: %s already exists - and is not a directory.\n",path);
            free(path);
            free(csv_file);
            free(user_key);
            return ;
          }
        } else {
          /* The path does not exist - we make it. */
          enkf_tui_util_msg("Creating new directory: %s\n" , path);
          util_make_path( path );
        }
      }
      free(prompt);
    }
    {
      /* Seriously manual creation of csv file. */
      enkf_fs_type * fs     = enkf_main_tui_get_fs(enkf_main);
      enkf_node_type * node = enkf_node_alloc( config_node );
      FILE * stream         = util_fopen( csv_file , "w");
      node_id_type node_id;


      /* Header line */
      fprintf(stream , "\"Report step\"");
      for (iens = iens1; iens <= iens2; iens++)
        fprintf(stream , "%s\"%s(%d)\"" , CSV_SEP , user_key , iens);
      fprintf(stream , CSV_NEWLINE);

      for (report_step = first_report; report_step <= last_report; report_step++) {
        fprintf(stream , "%6d" , report_step);
        node_id.report_step = report_step;
        for (iens = iens1; iens <= iens2; iens++) {
          double value;
          char label[32];
          /*
             Have not implemented a choice on forecast/analyzed. Tries
             analyzed first, then forecast.
          */
          node_id.iens = iens;
          sprintf(label , "%03d/%03d" , report_step , iens);

          if (enkf_node_user_get( node , fs , key_index , node_id ,  &value))
            fprintf(stream , "%s%g" , CSV_SEP , value);
          else
            fprintf(stream , "%s%s" , CSV_SEP , CSV_MISSING_VALUE);

        }
        fprintf(stream , CSV_NEWLINE);
      }

      enkf_node_free( node );
      fclose(stream);
    }
  } else
    fprintf(stderr,"Sorry - could not find any nodes with key:%s\n",user_key);

  free(user_key);
}


#undef CSV_NEWLINE
#undef CSV_MISSING_VALUE
#undef CSV_SEP

/*****************************************************************/




void enkf_tui_export_menu(void * arg) {

  enkf_main_type * enkf_main = enkf_main_safe_cast(arg);
  menu_type * menu = menu_alloc("Export data to other formats" , "Back" , "bB");
  menu_add_item(menu , "Export scalar value to CSV file"                        , "xX" , enkf_tui_export_scalar2csv     , enkf_main , NULL);
  menu_add_separator(menu);
  menu_add_item(menu , "Export fields to RMS Roff format"                       , "rR" , enkf_tui_export_roff                  , enkf_main , NULL);
  menu_add_item(menu , "Export fields to ECLIPSE grdecl format"                 , "gG" , enkf_tui_export_grdecl                , enkf_main , NULL);
  menu_add_item(menu , "Export fields to ECLIPSE restart format (active cells)" , "aA" , enkf_tui_export_restart_active , enkf_main , NULL);
  menu_add_item(menu , "Export fields to ECLIPSE restart format (all cells)"    , "lL" , enkf_tui_export_restart_all    , enkf_main , NULL);
  menu_add_separator(menu);
  menu_add_item(menu , "Export P( a =< x < b )"                                 , "sS" , enkf_tui_export_fieldP , enkf_main , NULL);
  menu_add_separator(menu);
  menu_add_item(menu , "Export GEN_DATA/GEN_PARAM to file"                      , "dD" , enkf_tui_export_gen_data , enkf_main , NULL);
  menu_add_separator( menu );
  menu_add_item(menu , "Help"                                  , "hH" , enkf_tui_help_menu_export , enkf_main , NULL );
  menu_run(menu);
  menu_free(menu);
}
