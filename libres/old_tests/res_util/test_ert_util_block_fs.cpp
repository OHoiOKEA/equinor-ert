/*
   Copyright (C) 2014  Equinor ASA, Norway.

   The file 'ert_util_block_fs.c' is part of ERT - Ensemble based Reservoir Tool.

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

#include <filesystem>

#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

#include <ert/util/test_util.hpp>
#include <ert/util/test_work_area.hpp>

#include <ert/res_util/block_fs.hpp>

void test_readonly() {
    ecl::util::TestArea ta("readonly");
    block_fs_type *bfs = block_fs_mount("test.mnt", 1000, 0.67, 10, true);
    test_assert_true(block_fs_is_readonly(bfs));

    bool exception_caught{};
    try {
        block_fs_fwrite_file(bfs, "name", NULL, 100);
    } catch (std::runtime_error &) {
        exception_caught = true;
    }
    test_assert_true(exception_caught);
    block_fs_close(bfs, true);
}

int main(int argc, char **argv) {
    test_readonly();
    exit(0);
}
