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

#include <optional>
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
public:
    std::string
        m_name; /* A name used for this ministep - string is also used as key in a hash table holding this instance. */
    obs_data_type *obs_data; // Should not be here - this is broken design.
    std::optional<LocalObsData> observations;

    std::unordered_map<std::string, RowScaling> scaling;
    std::unordered_map<std::string, ActiveList> active_size;


    bool operator==(const LocalMinistep& other) const {
        return  this->m_name == other.m_name &&
                   this->scaling == other.scaling &&
                   this->observations == other.observations &&
                   this->active_size == other.active_size;
    }

    explicit LocalMinistep(const char *name)
        : m_name(name),
          obs_data(nullptr) {}

    ~LocalMinistep() {
        if (this->obs_data)
            obs_data_free(this->obs_data);
    }

    const std::string &name() const { return this->m_name; }

    bool data_is_active(const char *key) const {
        return this->active_size.count(key) == 1;
    }

    int num_active_data() const { return this->active_size.size(); }

    void add_active_data(const char *node_key) {
        if (this->data_is_active(node_key) > 0)
            util_abort("%s: tried to add existing node key:%s \n", __func__,
                       node_key);

        this->active_size.insert({node_key, ActiveList()});
    }

    ActiveList& get_active_data_list(const std::string& node_key) {
        auto iter = this->active_size.find(node_key);
        if (iter == this->active_size.end())
            throw std::logic_error(fmt::format("Tried to get ActiveList from unknown key: {}", node_key));

        ActiveList& al = iter->second;
        printf("self: %p   get_active_data_list(): ptr: %p mode:  %d   active_size:%d \n", this, &al, static_cast<int>(al.getMode()), al.getActiveSize(0));
        return al;
    }

    const ActiveList& get_active_data_list(const std::string& node_key) const {
        auto iter = this->active_size.find(node_key);
        if (iter == this->active_size.end())
            throw std::logic_error(fmt::format("Tried to get ActiveList from unknown key: {}", node_key));

        const ActiveList& al = iter->second;
        printf("self: %p   get_active_data_list(): ptr: %p mode:  %d   active_size:%d \n", this, &al, static_cast<int>(al.getMode()), al.getActiveSize(0));
        al.print_self();
        return al;
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
            if (this->scaling.count(key))
                keys.push_back(key);
        }
        return keys;
    }

    RowScaling &get_row_scaling(const std::string &key) {
        auto iter = this->scaling.find(key);
        if (iter == this->scaling.end())
            throw std::runtime_error(fmt::format("No such RowScaling key registered: {}", key));

        return iter->second;
    }

    const LocalObsData& get_obsdata() const { return this->observations.value(); }

    LocalObsData& get_obsdata() { return this->observations.value(); }

    bool have_obsdata() const {
        return this->observations.has_value();
    }


    // This routine does not have anything to with local configuration,
    // it should be not be here ;-(
    void add_runtime_obsdata(obs_data_type *obs_data) {
        if (this->obs_data)
            obs_data_free(this->obs_data);

        this->obs_data = obs_data_alloc_copy(obs_data);
    }

    void add_obsdata(const LocalObsData& new_obs_data) {
        if (!this->observations.has_value())
            this->observations = new_obs_data;
        else {
            for (const auto &node : new_obs_data)
                this->observations->add_node(node);
        }
    }

    RowScaling &get_or_create_row_scaling(const char *key) {
        auto scaling_iter = this->scaling.find(key);
        if (scaling_iter == this->scaling.end()) {
            if (!this->data_is_active(key))
                throw std::invalid_argument(
                    "Tried to create row_scaling object for unknown key");

            this->scaling.emplace(key, RowScaling());
        }
        return this->scaling.at(key);
    }
};

#endif
