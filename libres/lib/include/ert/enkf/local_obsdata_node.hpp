/*
   Copyright (C) 2013  Equinor ASA, Norway.

   The file 'local_obsdata_node.h'

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
#ifndef ERT_LOCAL_OBSDATA_NODE_H
#define ERT_LOCAL_OBSDATA_NODE_H

#include <ert/util/type_macros.h>
#include <ert/util/int_vector.h>
#include <vector>
#include <algorithm>

#include <ert/enkf/active_list.hpp>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct local_obsdata_node_struct local_obsdata_node_type;

local_obsdata_node_type *local_obsdata_node_alloc(const char *obs_key);
local_obsdata_node_type *
local_obsdata_node_alloc_copy(const local_obsdata_node_type *src);
const char *local_obsdata_node_get_key(const local_obsdata_node_type *node);
void local_obsdata_node_free(local_obsdata_node_type *node);
void local_obsdata_node_free__(void *arg);
extern "C++" ActiveList *
local_obsdata_node_get_active_list(const local_obsdata_node_type *node);

extern "C++" ActiveList *
local_obsdata_node_get_copy_active_list(const local_obsdata_node_type *node);

UTIL_IS_INSTANCE_HEADER(local_obsdata_node);
UTIL_SAFE_CAST_HEADER(local_obsdata_node);

#ifdef __cplusplus
}
#endif
#endif
