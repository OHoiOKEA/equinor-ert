/*
   Copyright (C) 2013  Equinor ASA, Norway.

   The file 'local_obsdata_node.c'

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
#include <vector>
#include <algorithm>
#include <ert/enkf/local_obsdata_node.hpp>

#include "ert/python.hpp"

LocalObsDataNode::LocalObsDataNode(const std::string &key) : m_key(key) {}

const char *local_obsdata_node_get_key(const local_obsdata_node_type *node) {
    return node->obs_key;
}

const ActiveList *LocalObsDataNode::active_list() const {
    return &this->m_active_list;
}


const std::string &LocalObsDataNode::name() const { return this->m_key; }

bool LocalObsDataNode::operator==(const LocalObsDataNode &other) const {
    return this->m_key == other.m_key &&
           this->m_active_list == other.m_active_list;
}

RES_LIB_SUBMODULE("local.local_obsdata_node", m) {
    py::class_<LocalObsDataNode>(m, "LocalObsdataNode")
        .def(py::init<const std::string &>())
        .def("key", &LocalObsDataNode::name)
        .def("getKey", &LocalObsDataNode::name)
        .def("getActiveList", &LocalObsDataNode::active_list);
}
