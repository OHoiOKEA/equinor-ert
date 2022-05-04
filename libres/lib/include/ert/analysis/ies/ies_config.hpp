/*
   Copyright (C) 2019  Equinor ASA, Norway.

   The file 'ies_enkf_config.hpp' is part of ERT - Ensemble based Reservoir Tool.

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

#ifndef IES_CONFIG_H
#define IES_CONFIG_H

#include <variant>

namespace ies {
namespace config {

constexpr double DEFAULT_TRUNCATION = 0.98;
constexpr const char *IES_LOGFILE_KEY = "IES_LOGFILE";
constexpr const char *ENKF_SUBSPACE_DIMENSION_KEY = "ENKF_SUBSPACE_DIMENSION";
constexpr const char *IES_INVERSION_KEY = "IES_INVERSION";
constexpr const char *ENKF_TRUNCATION_KEY = "ENKF_TRUNCATION";
constexpr const char *IES_MAX_STEPLENGTH_KEY = "IES_MAX_STEPLENGTH";
constexpr const char *IES_MIN_STEPLENGTH_KEY = "IES_MIN_STEPLENGTH";
constexpr const char *IES_DEC_STEPLENGTH_KEY = "IES_DEC_STEPLENGTH";
constexpr const char *IES_DEBUG_KEY = "IES_DEBUG";
constexpr const char *ENKF_NCOMP_KEY = "ENKF_NCOMP";
constexpr const char *INVERSION_KEY = "INVERSION";
constexpr const char *STRING_INVERSION_EXACT = "EXACT";
constexpr const char *STRING_INVERSION_SUBSPACE_EXACT_R = "SUBSPACE_EXACT_R";
constexpr const char *STRING_INVERSION_SUBSPACE_EE_R = "SUBSPACE_EE_R";
constexpr const char *STRING_INVERSION_SUBSPACE_RE = "SUBSPACE_RE";

typedef enum {
    IES_INVERSION_EXACT = 0,
    IES_INVERSION_SUBSPACE_EXACT_R = 1,
    IES_INVERSION_SUBSPACE_EE_R = 2,
    IES_INVERSION_SUBSPACE_RE = 3
} inversion_type;

class Config {
public:
    explicit Config(bool ies_mode);
    void truncation(double truncation);
    void subspace_dimension(int subspace_dimension);
    const std::variant<double, int> &truncation() const;
    const std::variant<double, int> &get_truncation() const {
        return this->truncation();
    }

    inversion_type inversion() const;
    void inversion(inversion_type it);
    inversion_type get_inversion() const { return this->inversion(); }

    double max_steplength() const;
    void max_steplength(double max_step);

    double min_steplength() const;
    void min_steplength(double min_step);

    double dec_steplength() const;
    void dec_steplength(double dec_step);

    double steplength(int iteration_nr) const;
    bool iterable() const;

private:
    std::variant<double, int> m_truncation;
    inversion_type
        m_ies_inversion; // Controlled by config key: DEFAULT_IES_INVERSION

    bool m_iterable;

    double
        m_ies_max_steplength; // Controlled by config key: DEFAULT_IES_MAX_STEPLENGTH_KEY
    double
        m_ies_min_steplength; // Controlled by config key: DEFAULT_IES_MIN_STEPLENGTH_KEY
    double
        m_ies_dec_steplength; // Controlled by config key: DEFAULT_IES_DEC_STEPLENGTH_KEY
};

} // namespace config
} // namespace ies
#endif
