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

#include <fmt/format.h>
#include <ert/util/stringlist.h>

#include <ert/enkf/active_list.hpp>
#include <ert/enkf/local_obsdata.hpp>
#include <ert/enkf/local_obsdata_node.hpp>
#include <ert/enkf/obs_data.hpp>
#include <ert/enkf/row_scaling.hpp>

class LocalMinistep {
private:
    std::string
        m_name; /* A name used for this ministep - string is also used as key in a hash table holding this instance. */
    LocalObsData observations;
    mutable obs_data_type *runtime_obs_data;

    std::unordered_map<std::string, RowScaling> scaling;
    std::unordered_map<std::string, ActiveList> active_size;

public:
    ActiveList &get_active_data_list(const std::string &node_key);
    const ActiveList &get_active_data_list(const std::string &node_key) const;
    const RowScaling &get_row_scaling(const std::string &key) const;
    RowScaling &get_row_scaling(const std::string &key);
    RowScaling &get_or_create_row_scaling(const std::string &key);

    bool operator==(const LocalMinistep &other) const {
        return this->m_name == other.m_name && this->scaling == other.scaling &&
               this->observations == other.observations &&
               this->active_size == other.active_size;
    }

    explicit LocalMinistep(const char *name)
        : m_name(name), observations(name), runtime_obs_data(nullptr) {}

    ~LocalMinistep() {
        if (this->runtime_obs_data)
            obs_data_free(this->runtime_obs_data);
    }

    const std::string &name() const { return this->m_name; }

    bool data_is_active(const std::string &key) const {
        return this->active_size.count(key) == 1;
    }

    int num_active_data() const { return this->active_size.size(); }

    void add_active_data(const char *node_key) {
        if (this->data_is_active(node_key) > 0)
            util_abort("%s: tried to add existing node key:%s \n", __func__,
                       node_key);

        this->active_size.insert({node_key, ActiveList()});
    }

    std::vector<std::string> unscaled_keys() const {
        std::vector<std::string> keys;
        for (const auto &[key, _] : this->active_size)
            keys.push_back(key);
        return keys;
    }

    std::vector<std::string> scaled_keys() const {
        std::vector<std::string> keys;
        for (const auto &[key, _] : scaling)
            keys.push_back(key);
        return keys;
    }

    const LocalObsData &get_obsdata() const { return this->observations; }

    LocalObsData &get_obsdata() { return this->observations; }

    bool have_obsdata() const { return !this->observations.empty(); }

    void add_obsdata(const LocalObsData &new_obs_data) {
        if (this->observations.empty())
            this->observations = new_obs_data;
        else {
            for (const auto &node : new_obs_data)
                this->observations.add_node(node);
        }
    }

    std::unordered_map<std::string, std::vector<bool>>
    get_runtime_obs_active_list() const {
        std::unordered_map<std::string, std::vector<bool>> active_map;

        if (this->runtime_obs_data) {
            int num_blocks = obs_data_get_num_blocks(this->runtime_obs_data);
            for (int i = 0; i < num_blocks; ++i) {
                auto *obs_block =
                    obs_data_iget_block(this->runtime_obs_data, i);
                std::string key = obs_block_get_key(obs_block);

                std::vector<bool> active_list;
                int active_size = obs_block_get_size(obs_block);
                for (int j = 0; j < active_size; ++j)
                    active_list.push_back(
                        obs_block_iget_is_active(obs_block, j));

                active_map.emplace(key, std::move(active_list));
            }
        }

        return active_map;
    }

    void add_runtime_obs_data(const obs_data_type *obs_data) const {
        if (this->runtime_obs_data)
            obs_data_free(this->runtime_obs_data);

        this->runtime_obs_data = obs_data_alloc_copy(obs_data);
    }
};

#endif
