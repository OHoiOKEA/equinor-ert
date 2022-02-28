/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'local_updatestep.h' is part of ERT - Ensemble based Reservoir Tool.

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

#ifndef ERT_LOCAL_UPDATESTEP_H
#define ERT_LOCAL_UPDATESTEP_H

#include <ert/enkf/local_ministep.hpp>

#ifdef __cplusplus
extern "C" {
#endif

#include <ert/enkf/local_obsdata.hpp>

typedef struct local_updatestep_struct local_updatestep_type;

local_updatestep_type *local_updatestep_alloc(const char *name);
void local_updatestep_free__(void *arg);
void local_updatestep_free(local_updatestep_type *updatestep);
void local_updatestep_add_ministep(local_updatestep_type *updatestep,
                                   LocalMinistep *ministep);
LocalMinistep *local_updatestep_iget_ministep(local_updatestep_type *updatestep,
                                              int index);
const LocalMinistep *
local_updatestep_iget_const_ministep(const local_updatestep_type *updatestep,
                                     int index);
int local_updatestep_get_num_ministep(const local_updatestep_type *updatestep);
const char *local_updatestep_get_name(const local_updatestep_type *updatestep);

#ifdef __cplusplus
}
#endif
#endif
