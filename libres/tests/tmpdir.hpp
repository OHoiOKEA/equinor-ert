#ifndef __TMPDIR_HPP__
#define __TMPDIR_HPP__

#include <filesystem>

/**
 * Utility for temporary directories for testing.
 *
 * Creates and chdirs into a new empty directory on initialisation, and chdirs
 * back on destruction. The directories are created in:
 *   /tmp/catch2-of-${user}/${test-suite-name}#/${test-name}#
 *
 * Eg:
 *   /tmp/catch2-of-f_scout-ci/ert_test_suite12/test_matrix_addition2
 */
class TmpDir {
    std::filesystem::path m_prev_cwd;

public:
    TmpDir();
    ~TmpDir();
};

#define WITH_TMPDIR TmpDir __t_m_p_d_i_r__##__COUNTER__

#endif //__TMPDIR_HPP__
