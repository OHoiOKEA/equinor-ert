/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'active_list.h' is part of ERT - Ensemble based Reservoir Tool.

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

#ifndef ERT_ACTIVE_LIST_H
#define ERT_ACTIVE_LIST_H

#include <stdio.h>

#ifdef __cplusplus
extern "C" {
#endif

#include <ert/enkf/enkf_types.hpp>

extern "C++" {
#include <vector>
struct active_list_type {
    active_mode_type mode =
        ALL_ACTIVE; /* ALL_ACTIVE | INACTIVE | PARTLY_ACTIVE */
    std::vector<int>
        index_list; /* A list of active indices - if data_size == active_size this can be NULL. */
};
}

active_list_type *active_list_alloc();
void active_list_add_index(active_list_type *, int);
void active_list_free(active_list_type *);
const int *active_list_get_active(const active_list_type *);
int active_list_get_active_size(const active_list_type *, int total_size);
active_mode_type active_list_get_mode(const active_list_type *);
void active_list_free__(void *arg);
active_list_type *active_list_alloc_copy(const active_list_type *src);
void active_list_summary_fprintf(const active_list_type *active_list,
                                 const char *dataset_key, const char *key,
                                 FILE *stream);
bool active_list_iget(const active_list_type *active_list, int index);
bool active_list_equal(const active_list_type *active_list1,
                       const active_list_type *active_list2);
void active_list_copy(active_list_type *target, const active_list_type *src);

#ifdef __cplusplus
}
#endif
#endif
