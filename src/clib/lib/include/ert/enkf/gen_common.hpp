#pragma once

#include <filesystem>
#include <vector>

#include <ert/enkf/gen_data_config.hpp>

std::vector<double>
gen_common_fload_alloc(const std::filesystem::path &path,
                       gen_data_file_format_type load_format);
