/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'local_ministep.c' is part of ERT - Ensemble based Reservoir Tool.

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

#include "ert/enkf/row_scaling.hpp"
#include "ert/python.hpp"
#include <stdexcept>
#include <stdlib.h>
#include <string.h>

#include <ert/enkf/local_config.hpp>
#include <ert/enkf/local_ministep.hpp>

/*
   This file implements a 'ministep' configuration for active /
   inactive observations and parameters for ONE enkf update. Observe
   that the updating at one report step can consist of several
   socalled ministeps, i.e. first the northern part of the field with
   the relevant observations, and then the southern part.

   The implementation, in local_ministep_type, is quite simple, it
   only contains the keys for the observations and nodes, with an
   accompanying pointer to an active_list instance which denotes the
   active indices. Observe that this implementation offers no access
   to the internals of the underlying enkf_node / obs_node objects.
*/

UTIL_SAFE_CAST_FUNCTION(local_ministep, LOCAL_MINISTEP_TYPE_ID);
UTIL_IS_INSTANCE_FUNCTION(local_ministep, LOCAL_MINISTEP_TYPE_ID);

local_ministep_type *local_ministep_alloc(const char *name) {
    return new local_ministep_type(name);
}

void local_ministep_free(local_ministep_type *ministep) { delete ministep; }

void local_ministep_free__(void *arg) {
    local_ministep_type *ministep = local_ministep_safe_cast(arg);
    local_ministep_free(ministep);
}

/*
   When adding observations and update nodes here observe the following:

   1. The thing will fail hard if you try to add a node/obs which is
   already in the hash table.

   2. The newly added elements will be assigned an active_list
   instance with mode ALL_ACTIVE.
*/

void local_ministep_add_obsdata(local_ministep_type *ministep,
                                LocalObsData *obsdata) {
    if (ministep->observations == NULL)
        ministep->observations = obsdata;
    else { // Add nodes from input observations to existing observations
        int iobs;
        for (iobs = 0; iobs < obsdata->size(); iobs++) {
            auto &obs_node = (*obsdata)[iobs];
            LocalObsDataNode new_node(obs_node);
            local_ministep_add_obsdata_node(ministep, &new_node);
        }
    }
}

void local_ministep_add_obsdata_node(local_ministep_type *ministep,
                                     LocalObsDataNode *obsdatanode) {
    LocalObsData *obsdata = local_ministep_get_obsdata(ministep);
    obsdata->add_node(*obsdatanode);
}

int local_ministep_num_active_data(const local_ministep_type *ministep) {
    return ministep->num_active_data();
}
ActiveList *local_ministep_get_active_data_list(local_ministep_type *ministep,
                                                const char *key) {
    return ministep->get_active_data_list(key);
}
bool local_ministep_data_is_active(const local_ministep_type *ministep,
                                   const char *key) {
    return ministep->data_is_active(key);
}
void local_ministep_activate_data(local_ministep_type *ministep,
                                  const char *key) {
    ministep->add_active_data(key);
}

RowScaling *
local_ministep_get_or_create_row_scaling(local_ministep_type *ministep,
                                         const char *key) {
    auto scaling_iter = ministep->scaling.find(key);
    if (scaling_iter == ministep->scaling.end()) {
        if (ministep->active_size.count(key) == 0)
            throw std::invalid_argument(
                "Tried to create row_scaling object for unknown key");

        ministep->scaling.emplace(key, std::make_shared<RowScaling>());
    }
    return ministep->scaling[key].get();
}

LocalObsData *local_ministep_get_obsdata(const local_ministep_type *ministep) {
    return ministep->observations;
}

const char *local_ministep_get_name(const local_ministep_type *ministep) {
    return ministep->name.data();
}

namespace {
RowScaling *get_or_create_row_scaling(py::handle self,
                                      const std::string &name) {
    auto *ministep = ert::from_cwrap<local_ministep_type>(self);
    auto *row_scaling =
        local_ministep_get_or_create_row_scaling(ministep, name.c_str());
    return row_scaling;
}

ActiveList &get_active_data_list(py::handle obj, const std::string &name) {
    auto *self = ert::from_cwrap<local_ministep_type>(obj);
    auto *active_list = local_ministep_get_active_data_list(self, name.c_str());
    return *active_list;
}

void add_obsdata_node(py::handle self, LocalObsDataNode &node) {
    auto *ministep = ert::from_cwrap<local_ministep_type>(self);
    local_ministep_add_obsdata_node(ministep, &node);
}

LocalObsData &get_obsdata(py::handle obj) {
    auto *ministep = ert::from_cwrap<local_ministep_type>(obj);
    auto *obsdata_ptr = local_ministep_get_obsdata(ministep);
    return *obsdata_ptr;
}

void attach_obsdata(py::handle obj, LocalObsData &obsdata) {
    auto *ministep = ert::from_cwrap<local_ministep_type>(obj);
    local_ministep_add_obsdata(ministep, &obsdata);
}

} // namespace

RES_LIB_SUBMODULE("local.ministep", m) {
    using namespace py::literals;

    m.def("get_or_create_row_scaling", &get_or_create_row_scaling, "self"_a,
          "name"_a);
    m.def("get_active_data_list", &get_active_data_list, "self"_a, "name"_a,
          py::return_value_policy::reference);
    m.def("add_obsdata_node", &add_obsdata_node, "self"_a, "node"_a);
    m.def("get_obsdata", &get_obsdata, "self"_a,
          py::return_value_policy::reference);
    m.def("attach_obsdata", &attach_obsdata, "self"_a, "obsdata"_a);
}
