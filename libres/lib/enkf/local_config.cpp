/*
   Copyright (C) 2011  Equinor ASA, Norway.

   The file 'local_config.c' is part of ERT - Ensemble based Reservoir Tool.

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
#include <stdio.h>

#include <ert/util/vector.h>

#include <ert/enkf/local_ministep.hpp>
#include <ert/enkf/local_updatestep.hpp>
#include <ert/enkf/local_config.hpp>

/*

  +-------------------------- local_updatestep_type ---------------------------------------+
  |                                                                                        |
  |                                                                                        |
  |    +----------------- local_ministep_type --------------------------------------+      |
  |    |                                                                            |      |
  |    |                                       /    +--- local_dataset_type ---+    |      |
  |    |                                       |    | PRESSURE                 |    |      |
  |    |                                       |    | SWAT                     |    |      |
  |    |                                       |    | SGAS                     |    |      |
  |    |                                       |    +--------------------------+    |      |
  |    |    +-- local_obsset_type ---+         |                                    |      |
  |    |    | WWCT:OP_2              |         |    +--- local_dataset_type ---+    |      |
  |    |    | WGOR:OP_1              |         |    | MULTFLT1                 |    |      |
  |    |    | RFT:WELL1              |  <------|    | MULTFLT2                 |    |      |
  |    |    | RFT:WELL3              |         |    | MULTFLT3                 |    |      |
  |    |    | WWCT:WELLX             |         |    +--------------------------+    |      |
  |    |    +------------------------+         |                                    |      |
  |    |                                       |    +--- local_dataset_type ---+    |      |
  |    |                                       |    | RELPERM1                 |    |      |
  |    |                                       |    | RELPERM2                 |    |      |
  |    |                                       |    | RELPERM3                 |    |      |
  |    |                                       \    +--------------------------+    |      |
  |    |                                                                            |      |
  |    +----------------------------------------------------------------------------+      |
  |                                                                                        |
  |                                                                                        |
  |    +----------------- local_ministep_type --------------------------------------+      |
  |    |                                                                            |      |
  |    |                                       /    +--- local_dataset_type ---+    |      |
  |    |    +-- local_obsset_type ---+         |    | PERMX PORO               |    |      |
  |    |    | 4D Seismic             |         |    | PRESSURE SWAT            |    |      |
  |    |    | Gravimetri             |         |    | SGAS                     |    |      |
  |    |    |                        |  <------|    +--------------------------+    |      |
  |    |    |                        |         |                                    |      |
  |    |    |                        |         |    +--- local_dataset_type ---+    |      |
  |    |    +------------------------+         |    | MULTFLT1                 |    |      |
  |    |                                       |    | MULTFLT2                 |    |      |
  |    |                                       |    | MULTFLT3                 |    |      |
  |    |                                       \    +--------------------------+    |      |
  |    |                                                                            |      |
  |    +----------------------------------------------------------------------------+      |
  |                                                                                        |
  +----------------------------------------------------------------------------------------+

This figure illustrates the different objects when configuring local
analysis:

local_updatestep_type: This is is the top level configuration of the
   updating at one timestep. In principle you can have different
   updatestep configurations at the different timesteps, but it will
   typically be identical for all the time steps. Observe that the
   update at one time step can typically conist of several enkf
   updates, this is handled by using several local_ministep.

local_ministep_type: The ministep defines a collection of observations
   and state/parameter variables which are mutually dependant on
   eachother and should be updated together. The local_ministep will
   consist of *ONE* local_obsset of observations, and one or more
   local_dataset of data which should be updated.

local_obsset_type: This is a collection of observation data; there is
   exactly one local_obsset for each local_ministep.

local_dataset_type: This is a collection of data/parameters which
   should be updated together in the EnKF updating.


How the local_dataset_type is configured is quite important for the
core EnKF updating:

 1. All the members in one local_dataset instance are serialized and
    packed in the A-matrix together; i.e. in the example above the
    parameters RELPERM1,RELPERM2 and RELPERM3 are updated in one go.

 2. When using the standard EnKF the X matrix is calculated using
    the actual data vectors, and the results will be identical if we
    use one large local_dataset instance or several small. However
    when using more advanced techniques where the A matrix is used
    explicitly when calculating the update this will matter.

 3. If you have not entered a local configuration explicitly the
    default ALL_ACTIVE local configuration will be used.
*/

struct local_config_struct {
    local_updatestep_type *
        default_updatestep; /* A default report step returned if no particular report step has been installed for this time index. */
    hash_type *
        updatestep_storage; /* These three hash tables are the 'holding area' for the local_updatestep, */
    hash_type *ministep_storage; /* local_ministep instances. */
    hash_type *obsdata_storage;
};

/*
   Instances of local_updatestep and local_ministep are allocated from
   the local_config object, and then subsequently manipulated from the calling scope.
*/

static local_updatestep_type *
local_config_alloc_updatestep(local_config_type *local_config,
                              const char *key) {
    local_updatestep_type *updatestep = local_updatestep_alloc(key);
    hash_insert_hash_owned_ref(local_config->updatestep_storage, key,
                               updatestep, local_updatestep_free__);
    return updatestep;
}

/*
  The local_config_clear() function will remove all current local configuration,
  and then reallocate a new empty updatestep configuration.
*/
void local_config_clear(local_config_type *local_config) {
    local_config->default_updatestep = NULL;
    hash_clear(local_config->updatestep_storage);
    hash_clear(local_config->ministep_storage);
    hash_clear(local_config->obsdata_storage);
    local_config->default_updatestep =
        local_config_alloc_updatestep(local_config, "DEFAULT");
}

/*
  The local_config_clear_active() function will reset the current active
  updatestep, but the named building blocks of type ministep, local_dataset and
  obsdata will be retained and can be reused through name based lookup when we
  create a new local configuration.
*/

void local_config_clear_active(local_config_type *local_config) {
    hash_clear(local_config->updatestep_storage);
    local_config->default_updatestep =
        local_config_alloc_updatestep(local_config, "DEFAULT");
}

local_config_type *local_config_alloc() {
    local_config_type *local_config =
        (local_config_type *)util_malloc(sizeof *local_config);

    local_config->default_updatestep = NULL;
    local_config->updatestep_storage = hash_alloc();
    local_config->ministep_storage = hash_alloc();
    local_config->obsdata_storage = hash_alloc();

    local_config_clear(local_config);
    return local_config;
}

void local_config_free(local_config_type *local_config) {
    hash_free(local_config->updatestep_storage);
    hash_free(local_config->ministep_storage);
    hash_free(local_config->obsdata_storage);
    free(local_config);
}

local_ministep_type *
local_config_alloc_ministep(local_config_type *local_config, const char *key,
                            analysis_module_type *analysis_module) {
    if (hash_has_key(local_config->ministep_storage, key))
        return nullptr;

    local_ministep_type *ministep = local_ministep_alloc(key, analysis_module);
    hash_insert_hash_owned_ref(local_config->ministep_storage, key, ministep,
                               reinterpret_cast<void (*)(void*)>(local_ministep_free));
    return ministep;
}

local_obsdata_type *local_config_alloc_obsdata(local_config_type *local_config,
                                               const char *obsdata_name) {
    if (local_config_has_obsdata(local_config, obsdata_name))
        util_abort("%s: tried to add existing obsdata node key:%s \n", __func__,
                   obsdata_name);

    local_obsdata_type *obsdata = local_obsdata_alloc(obsdata_name);
    hash_insert_hash_owned_ref(local_config->obsdata_storage, obsdata_name,
                               obsdata, local_obsdata_free__);
    return obsdata;
}

bool local_config_has_obsdata(const local_config_type *local_config,
                              const char *key) {
    return hash_has_key(local_config->obsdata_storage, key);
}

local_obsdata_type *
local_config_alloc_obsdata_copy(local_config_type *local_config,
                                const char *src_key, const char *target_key) {
    local_obsdata_type *src_obsdata =
        (local_obsdata_type *)hash_get(local_config->obsdata_storage, src_key);
    local_obsdata_type *copy_obsdata =
        local_obsdata_alloc_copy(src_obsdata, target_key);

    hash_insert_hash_owned_ref(local_config->obsdata_storage, target_key,
                               copy_obsdata, local_obsdata_free__);
    return copy_obsdata;
}

local_ministep_type *
local_config_get_ministep(const local_config_type *local_config,
                          const char *key) {
    local_ministep_type *ministep =
        (local_ministep_type *)hash_get(local_config->ministep_storage, key);
    return ministep;
}

local_obsdata_type *
local_config_get_obsdata(const local_config_type *local_config,
                         const char *key) {
    local_obsdata_type *obsdata =
        (local_obsdata_type *)hash_get(local_config->obsdata_storage, key);
    return obsdata;
}

local_updatestep_type *
local_config_get_updatestep(const local_config_type *local_config) {
    local_updatestep_type *updatestep = local_config->default_updatestep;

    if (updatestep == NULL)
        util_abort("%s: fatal error. No default updatestep configured. \n",
                   __func__);

    return updatestep;
}
