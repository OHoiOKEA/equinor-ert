/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'enkf_tui_util.c' is part of ERT - Ensemble based Reservoir Tool.

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
#include <ert/util/string_util.hpp>
#include <ert/res_util/arg_pack.hpp>

#include <ert/enkf/enkf_node.hpp>
#include <ert/enkf/field.hpp>
#include <ert/enkf/field_config.hpp>
#include <ert/enkf/enkf_state.hpp>
#include <ert/enkf/ensemble_config.hpp>
#include <ert/enkf/enkf_types.hpp>

/**
    This file implements various small utility functions for the (text
    based) EnKF user interface.
*/

/**
   Prompt .........====>
   <-------1------><-2->

   The section marked with 1 above is the prompt length, i.e. the
   input prompt is padded wth one blank, and then padded with
   'fill_char' (in the case above that is '.') characters up to a
   total length of prompt_len. Then the the termination string ("===>"
   above) is added. Observe the following:

   * A space is _always_ added after the prompt, before the fill char
   comes, even if the prompt is too long in the first place.

   * No space is added at the end of the termination string. If
   you want a space, that should be included in the termination
   string.

*/


void util_printf_prompt(const char * prompt , int prompt_len, char fill_char , const char * termination) {
  int current_len = strlen(prompt) + 1;
  printf("%s ",prompt);  /* Observe that one ' ' is forced in here. */

  while (current_len < prompt_len) {
    fputc(fill_char , stdout);
    current_len++;
  }
  printf("%s" , termination);

}

/**
   This functions presents the user with a prompt, and reads an
   integer - the integer value is returned. The functions returns
   NULL on empty input.
*/

int util_scanf_int(const char * prompt , int prompt_len) {
  char input[256];
  int  int_value;
  bool OK;
  do {
    util_printf_prompt(prompt , prompt_len, '=', "=> ");
    scanf("%s" , input);
    OK = util_sscanf_int(input , &int_value);
  } while (!OK);
  getchar(); /* eating a \r left in the stdin input buffer. */
  return int_value;
}


/**
   This functions presents the user with a prompt, and reads an
   integer - the integer value is returned. The functions will loop
   indefinitely until a valid integer is entered.
*/

char * util_scanf_int_return_char(const char * prompt , int prompt_len) {
  char input[256];
  int  int_value;
  bool OK = false;
  while(!OK){
    util_printf_prompt(prompt , prompt_len, '=', "=> ");
    fgets(input, prompt_len, stdin);
    {
      char *newline = strchr(input,'\n');
      if(newline)
        *newline = 0;
    }

    if(strlen(input) !=0){
      OK = util_sscanf_int(input , &int_value);
    }
    else {
      OK = true;
    }
  }
  return util_alloc_string_copy(input);
}
/**
    The limits are inclusive.
*/
int util_scanf_int_with_limits(const char * prompt , int prompt_len , int min_value , int max_value) {
  int value;
  char * new_prompt = util_alloc_sprintf("%s [%d:%d]" , prompt , min_value , max_value);
  do {
    value = util_scanf_int(new_prompt , prompt_len);
  } while (value < min_value || value > max_value);
  free(new_prompt);
  return value;
}

/**
    The limits are inclusive, yet the function returns the input char and stops on empty string.
*/
char * util_scanf_int_with_limits_return_char(const char * prompt , int prompt_len , int min_value , int max_value) {
  int value = min_value - 1;
  char * value_char = NULL;
  char * new_prompt = util_alloc_sprintf("%s [%d:%d]" , prompt , min_value , max_value);
  while( value < min_value || value > max_value ){
    value_char = util_scanf_int_return_char(new_prompt , prompt_len);
    if (strlen(value_char) == 0)
      value = min_value;
    else
      util_sscanf_int(value_char , &value);
  }
  free(new_prompt);
  return value_char;
}



char * util_scanf_alloc_string(const char * prompt) {
  char input[256];
  printf("%s" , prompt);
  scanf("%256s" , input);
  return util_alloc_string_copy(input);
}




double util_scanf_double(const char * prompt , int prompt_len) {
  char input[256];
  double  double_value;
  bool OK;
  do {
    util_printf_prompt(prompt , prompt_len, '=', "=> ");
    scanf("%s" , input);
    OK = util_sscanf_double(input , &double_value);
  } while (!OK);
  getchar(); /* eating a \r left in the stdin input buffer. */
  return double_value;
}

static bool EOL_CHAR(char c) {
   if (c == '\r' || c == '\n')
     return true;
   else
     return false;
}

/**
   Reads characters from stdin until EOL/EOF is detected. A '\0' is
   appended to the resulting string before it is returned. If the
   function reads an immediate EOF/EOL, i.e. the user enters an empty
   input string, NULL (and not "") is returned.

   Observe that is this function does *not* cooperate very nicely with
   fscanf() based input, because fscanf will leave a EOL character in
   the input buffer, which will lead to immediate return from this
   function. Hence if this function is called after a fscanf() based
   function it is essential to preceede this function with one call to
   getchar() to clear the EOL character.
*/

char * util_alloc_stdin_line(void) {
  int input_size = 256;
  char * input   = (char*)util_calloc(input_size , sizeof * input );
  int index = 0;
  bool end = false;
  int c;
  do {
    c = getchar();
    if ((!EOL_CHAR(c)) && (c != EOF)) {
      input[index] = c;
      index++;
      if (index == (input_size - 1)) { /* Reserve space for terminating \0 */
        input_size *= 2;
        input = (char*)util_realloc(input , input_size );
      }
    } else end = true;
  } while (!end);
  if (index == 0) {
    free(input);
    input = NULL;
  } else {
    input[index] = '\0';
    input = (char*)util_realloc(input , strlen(input) + 1 );
  }

  return input;
}


/*
  exist_status == 0: Just read a string; do not check if it exist or not.
  exist_status == 1: Must be existing file.
  exist_status == 2: Must NOT exist as entry.
*/

char * util_fscanf_alloc_filename(const char * prompt , int prompt_len , int exist_status) {
  char * filename = NULL;
  while (filename == NULL) {
    util_printf_prompt(prompt , prompt_len , '=' , "=> ");
    filename = util_alloc_stdin_line();
    if (filename != NULL) {
      if (exist_status != 0) {
        if (exist_status == 1) {
          if (!util_file_exists(filename)) {
            fprintf(stderr,"Sorry: %s does not exist. \n",filename);
            free( filename );
            filename = NULL;
          }
        } else if (exist_status == 2) {
          if (util_entry_exists( filename )) {
            fprintf(stderr,"Sorry: entry %s already exists. \n",filename);
            free( filename );
            filename = NULL;
          }
        }
      }
    }
  }
  return filename;
}




/**
   Very simple function which is in interactive functions. Used to
   query the user:

     - Key identifying a field.
     - An integer report step.
     - Whether we are considering the analyzed state or the forecast.

   The config_node is returned, and in addition the report_step, iens
   and analysis_state are returned by reference. It is OK the pass in
   NULL for these pointers; in that case the user is not queried for
   these values.

   The keyword is checked for existence; but it is not checked whether
   the report_step actually exists. If impl_type == INVALID, any
   implementation type will be accepted, otherwise we loop until the
   keyword is of type impl_type.
*/

const enkf_config_node_type * enkf_tui_util_scanf_key(const ensemble_config_type * config , int prompt_len , ert_impl_type impl_type ,  enkf_var_type var_type) {
  char * kw;
  bool OK;
  const enkf_config_node_type * config_node = NULL;
  do {
    OK = true;
    util_printf_prompt("Keyword" , prompt_len , '=' , "=> ");
    kw = util_alloc_stdin_line();
    if(kw==NULL){
      OK = true;
  }
    else if (ensemble_config_has_key(config , kw)) {
      config_node = ensemble_config_get_node(config , kw);

      if (impl_type != INVALID)
        if (enkf_config_node_get_impl_type(config_node) != impl_type)
          OK = false;

      if (var_type != INVALID_VAR)
        if (enkf_config_node_get_var_type(config_node) != var_type)
          OK = false;
    } else OK = false;
    free(kw);
  } while (!OK);
  return config_node;
}


/**
   Present the user with the queries:

      First ensemble member ==>
      Last ensemble member ===>

    It then allocates (bool *) pointer [0..ens_size-1], where the
    interval gven by the user is true (i.e. actve), and the rest is
    false. It s the responsiibility of the calling scope to free this.
*/


bool * enkf_tui_util_scanf_alloc_iens_active(int ens_size, int prompt_len , int * _iens1 , int * _iens2) {
  bool * iactive = (bool *) util_calloc(ens_size , sizeof * iactive );
  int iens1 = util_scanf_int_with_limits("First ensemble member" , prompt_len , 0 , ens_size - 1);
  int iens2 = util_scanf_int_with_limits("Last ensemble member" , prompt_len , iens1 , ens_size - 1);
  int iens;

  for (iens = 0; iens < ens_size; iens++)
    iactive[iens] = false;

  for (iens = iens1; iens <= iens2; iens++)
    iactive[iens] = true;


  *_iens1 = iens1;
  *_iens2 = iens2;
  return iactive;
}



/**
   Presents the reader with a prompt, and reads a string containing
   two integers separated by a character(s) in the set: " ,-:". If the
   user enters a blank string that is interpreted as "all
   realizations", and the return variabels are set to:

      iens1 = 0     iens2 = ens_size - 1

   Will not return before the user has actually presented a valid
   string.
*/


void enkf_tui_util_scanf_iens_range(const char * prompt_fmt , int ens_size , int prompt_len , int * iens1 , int * iens2) {
  char * prompt = util_alloc_sprintf(prompt_fmt , ens_size - 1);
  bool OK = false;

  util_printf_prompt(prompt , prompt_len , '=' , "=> ");

  while (!OK) {
    char * input = util_alloc_stdin_line();
    const char * current_ptr = input;
    OK = true;

    if (input != NULL) {
      current_ptr = util_parse_int(current_ptr , iens1 , &OK);
      current_ptr = util_skip_sep(current_ptr , " ,-:" , &OK);
      current_ptr = util_parse_int(current_ptr , iens2 , &OK);

      if (!OK)
        printf("Failed to parse two integers from: \"%s\". Example: \"0 - 19\" to get the 20 first members.\n",input);
      free(input);
    } else {
      *iens1 = 0;
      *iens2 = ens_size - 1;
    }
  }
  free(prompt);
}


void enkf_tui_util_scanf_report_steps(int last_report , int prompt_len , int * __step1 , int * __step2) {
  char * prompt = util_alloc_sprintf("Report steps (0 - %d)" , last_report);
  bool OK = false;

  util_printf_prompt(prompt , prompt_len , '=' , "=> ");

  while (!OK) {
    char * input = util_alloc_stdin_line();
    const char * current_ptr = input;
    int step1 , step2;
    OK = true;
    if(input == NULL){
      step1=0;
      step2=last_report;
    }
    else{
      current_ptr = util_parse_int(current_ptr , &step1 , &OK);
      current_ptr = util_skip_sep(current_ptr , " ,-:" , &OK);
      current_ptr = util_parse_int(current_ptr , &step2 , &OK);
    }
    if (!OK)
      printf("Failed to parse two integers from: \"%s\". Example: \"0 - 19\" to get the 20 first report steps.\n",input);
    free(input);

    step1 = util_int_min(step1 , last_report);
    step2 = util_int_min(step2 , last_report);
    if (step1 > step2)
      util_exit("%s: ohh come on - must have a finite interval forward in time - no plots for you.\n",__func__);
    *__step1 = step1;
    *__step2 = step2;

  }
  free(prompt);
}



/**
   Similar to enkf_tui_util_scanf_alloc_iens_active(), but based on report steps.
*/

bool * enkf_tui_util_scanf_alloc_report_active(int last_step, int prompt_len) {
  bool * iactive = (bool *) util_calloc((last_step + 1) , sizeof * iactive );
  int step1 = util_scanf_int_with_limits("First report step" , prompt_len , 0 , last_step);
  int step2 = util_scanf_int_with_limits("Last report step" , prompt_len , step1 , last_step);
  int step;

  for (step = 0; step <= last_step; step++)
    iactive[step] = false;

  for (step = step1; step <= step2; step++)
    iactive[step] = true;

  return iactive;
}


/**
    This functions reads i,j,k and returns them be reference; if the
    reference pointer is NULL, that coordinate is skipped. I.e.

    enkf_tui_util_scanf_ijk__(config , 100 , &i , &j , NULL);

    Will read i and j. If your are interested in all three coordinates
    you should use enkf_tui_util_scanf_ijk() which has a more flexible
    parser.
*/


void enkf_tui_util_scanf_ijk__(const field_config_type * config, int prompt_len , int *i , int *j , int *k) {
  int nx,ny,nz;

  field_config_get_dims(config , &nx , &ny , &nz);
  if (i != NULL) (*i) = util_scanf_int_with_limits("Give i-index" , prompt_len , 1 , nx) - 1;
  if (j != NULL) (*j) = util_scanf_int_with_limits("Give j-index" , prompt_len , 1 , ny) - 1;
  if (k != NULL) (*k) = util_scanf_int_with_limits("Give k-index" , prompt_len , 1 , nz) - 1;
}












/**
   This function runs through all the report steps [step1:step2] for
   member iens, and gets the value of the cell 'get_index'. Current
   implementation assumes that the config_node/node combination are of
   field type - this should be generalized to use the enkf_node_iget()
   function.

   The value is returned (by reference) in y, and the corresponding
   time (currently report_step) is returned in 'x'.
*/


void enkf_tui_util_get_time(enkf_fs_type * fs , const enkf_config_node_type * config_node, enkf_node_type * node , int get_index , int step1 , int step2 , int iens , double * x , double * y ) {
  const char * key = enkf_config_node_get_key(config_node);
  int report_step;
  int index = 0;
  for (report_step = step1; report_step <= step2; report_step++) {
    node_id_type node_id = {.report_step = report_step , .iens = iens };
    if (enkf_node_try_load(node , fs , node_id)) {
      const field_type * field = (const field_type *) enkf_node_value_ptr( node );
      y[index] = field_iget_double(field , get_index);
    } else {
      fprintf(stderr," ** Warning field:%s is missing for member,report: %d,%d \n",key  , iens , report_step);
      y[index] = -1;
    }
    x[index] = report_step;
    index++;
  }
}


int enkf_tui_util_scanf_report_step(int last_report, const char * prompt , int prompt_len) {
  int report_step                         = util_scanf_int_with_limits(prompt , prompt_len , 0 , last_report);
  return report_step;
}

char *  enkf_tui_util_scanf_report_step_as_char(int last_report, const char * prompt , int prompt_len) {
  char * report_step = util_scanf_int_with_limits_return_char(prompt , prompt_len , 0 , last_report);
  return report_step;
}

int enkf_tui_util_scanf_int_with_default(const char * prompt , int prompt_len , bool * default_used) {
  bool        OK;
  int value;
  *default_used = false;
  do {
    char * input;

    util_printf_prompt(prompt , prompt_len , '=' , "=> ");
    input = util_alloc_stdin_line();
    if (input == NULL) {
      *default_used = true;
      OK = true;
      value = -1;
    } else {
      OK = util_sscanf_int( input , &value );
      free( input );
    }
  } while (!OK);
  return value;
}

int enkf_tui_util_scanf_int_with_default_return_to_menu(const char * prompt , int prompt_len , bool * default_used) {
  bool        OK;
  int value;
  *default_used = false;
  do {
    char * input;

    util_printf_prompt(prompt , prompt_len , '=' , "=> ");
    input = util_alloc_stdin_line();
    if (input == NULL) {
      *default_used = true;
      OK = true;
      value = -1;
    }
    else if (strcmp(input,"M")==0 || strcmp(input,"m")==0){
      OK = true;
      value = -2;
    }
    else {
      OK = util_sscanf_int( input , &value );
      free( input );
    }
  } while (!OK);
  return value;
}

bool enkf_tui_util_sscanf_active_list( bool_vector_type * iactive , const char * select_string , int ens_size ) {
  if (select_string == NULL) {
    bool_vector_set_default( iactive , true );
    bool_vector_iset( iactive , ens_size - 1 , true );
    return true;
  } else {
    bool OK;
    OK = string_util_init_active_mask( select_string , iactive );

    if (bool_vector_size( iactive ) < ens_size)
      bool_vector_iset( iactive , ens_size - 1 , false );
    else if (bool_vector_size( iactive ) > ens_size)
      return false;
    return OK;
  }
}

/**
    The limit is not inclusive
*/
double enkf_tui_util_scanf_double_with_lower_limit(const char * prompt , int prompt_len , double min_value) {
  double value;
  char * new_prompt = util_alloc_sprintf("%s (greater than %g)" , prompt , min_value );
  do {
    value = util_scanf_double(new_prompt , prompt_len);
  } while (value <= min_value);
  free(new_prompt);
  return value;
}


/*****************************************************************/


/* Minimum wrapping of vfprintf */
void enkf_tui_util_msg(const char * fmt , ...) {
  va_list ap;
  va_start(ap , fmt);
  vfprintf(stdout , fmt , ap);
  va_end(ap);
}


