/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'local_ministep.h' is part of ERT - Ensemble based Reservoir Tool.

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

#ifndef ERT_LOCAL_MINISTEP_H
#define ERT_LOCAL_MINISTEP_H

#include <string.h>

#include <string>
#include <stdexcept>
#include <unordered_map>
#include <vector>

#include <ert/util/stringlist.h>

#include <ert/analysis/analysis_module.hpp>

#include <ert/enkf/active_list.hpp>
#include <ert/enkf/local_obsdata.hpp>
#include <ert/enkf/local_obsdata_node.hpp>
#include <ert/enkf/obs_data.hpp>
#include <ert/enkf/row_scaling.hpp>

#ifdef __cplusplus
extern "C" {
#endif

#define LOCAL_MINISTEP_TYPE_ID 661066

class local_ministep_type {
public:
    UTIL_TYPE_ID_DECLARATION;
    std::string
        name; /* A name used for this ministep - string is also used as key in a hash table holding this instance. */
    local_obsdata_type *observations;
    obs_data_type *obs_data;

    std::unordered_map<std::string, std::shared_ptr<RowScaling>> scaling;
    std::unordered_map<std::string, active_list_type> active_size;

    local_ministep_type(const char *name)
        : name(strdup(name)), obs_data(nullptr) {
        UTIL_TYPE_ID_INIT(this, LOCAL_MINISTEP_TYPE_ID);
        observations =
            local_obsdata_alloc(std::string("OBSDATA_" + this->name).data());
    }

    ~local_ministep_type() {
        local_obsdata_free(observations);
        if (obs_data)
            obs_data_free(obs_data);
    }

    inline bool data_is_active(const char *key) const {
        auto iter = this->active_size.find(key);
        return (iter != this->active_size.end());
    }

    inline int num_active_data() const { return this->active_size.size(); }

    void add_active_data(const char *node_key) {
        if (data_is_active(node_key) > 0)
            throw std::logic_error("Tried to insert already inserted key: " +
                                   std::string{node_key});
        this->active_size.insert({node_key, active_list_type{}});
    }

    const active_list_type *get_active_data_list(const char *node_key) const {
        auto &al = this->active_size.at(node_key);
        return &al;
    }

    std::vector<std::string> unscaled_keys() const {
        std::vector<std::string> keys;
        for (const auto &[key, _] : this->active_size)
            keys.push_back(key);
        return keys;
    }

    std::vector<std::string> scaled_keys() const {
        std::vector<std::string> keys;
        for (const auto &[key, _] : scaling) {
            keys.push_back(key);
        }
        return keys;
    }

    std::shared_ptr<RowScaling> get_row_scaling(std::string key) const {
        auto scaling_iter = scaling.find(key);
        if (scaling_iter != scaling.end())
            return scaling_iter->second;

        return nullptr;
    }
};

local_ministep_type *local_ministep_alloc(const char *name);
void local_ministep_free(local_ministep_type *ministep);
void local_ministep_free__(void *arg);

RowScaling *
local_ministep_get_or_create_row_scaling(local_ministep_type *ministep,
                                         const char *key);

int local_ministep_num_active_data(const local_ministep_type *ministep);
void local_ministep_activate_data(local_ministep_type *ministep,
                                  const char *key);
const active_list_type *
local_ministep_get_active_data_list(const local_ministep_type *ministep,
                                    const char *key);
bool local_ministep_data_is_active(const local_ministep_type *ministep,
                                   const char *key);

const char *local_ministep_get_name(const local_ministep_type *ministep);
void local_ministep_summary_fprintf(const local_ministep_type *ministep,
                                    FILE *stream);
void local_ministep_add_obsdata(local_ministep_type *ministep,
                                local_obsdata_type *obsdata);
void local_ministep_add_obsdata_node(local_ministep_type *ministep,
                                     local_obsdata_node_type *obsdatanode);
local_obsdata_type *
local_ministep_get_obsdata(const local_ministep_type *ministep);
void local_ministep_add_obs_data(local_ministep_type *ministep,
                                 obs_data_type *obs_data);
obs_data_type *local_ministep_get_obs_data(const local_ministep_type *ministep);

UTIL_SAFE_CAST_HEADER(local_ministep);
UTIL_IS_INSTANCE_HEADER(local_ministep);

#ifdef __cplusplus
}
#endif
#endif
