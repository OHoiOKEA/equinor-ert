#!/usr/bin/env python
from __future__ import print_function

import re
import json
import os
import sys
import subprocess
import shutil
import codecs
import requests

GITHUB_ROT13_API_TOKEN = "rp2rr795p41n83p076o6ro2qp209981r00590r8q"

class PrBuilder():

    def __init__(self, rep, basedir):
        self.github_api_token = codecs.encode(GITHUB_ROT13_API_TOKEN, 'rot13')
        self.build_ert = True
        if rep not in ('ecl', 'res', 'ert'):
            raise Exception("Error: invalid repository type.")
        self.repository = rep
        if rep == 'ecl':
            self.rep_name = 'libecl'
            self.build_ert = False
        if rep == 'res':
            self.rep_name = 'libres'
        if rep == 'ert':
            self.rep_name = 'ert'
        self.ecl_pr_num = -1
        self.res_pr_num = -1
        self.ert_pr_num = -1
        self.access_pr()
        self.clone_fetch_merge(basedir)
        self.compile_and_build(basedir)

    def display(self):
        print("Settings: ")
        print("Repository type: %s" % self.repository)
        print("ECL pr number: %d" % self.ecl_pr_num)
        print("RES pr number: %d" % self.res_pr_num)
        print("ERT pr number: %d" % self.ert_pr_num)


    def parse_pr_description(self):
        ecl_word = "Statoil/libecl#(\\d+)"
        res_word = "Statoil/libres#(\\d+)"
        ert_word = "Statoil/ert#(\\d+)"
        desc = self.pr_description
        match = re.search(ecl_word, desc, re.MULTILINE)
        if match:
            self.ecl_pr_num = int(match.group(1))
        match = re.search(res_word, desc, re.MULTILINE)
        if match:
            self.res_pr_num = int(match.group(1))
        match = re.search(ert_word, desc, re.MULTILINE)
        if match:
            self.ert_pr_num = int(match.group(1))

    def check_pr_num_consistency(self):
        if self.repository == "ecl":
            pr_num = self.ecl_pr_num
        if self.repository == "res":
            pr_num = self.res_pr_num
        if self.repository == "ert":
            pr_num = self.ert_pr_num
        if pr_num >= 0:
            if pr_num != self.pr_number:
                sys.exit("Error: The line rep=%d does not match pull request %d" %
                         (pr_num, self.pr_number))
        else:
            if self.repository == "ecl":
                self.ecl_pr_num = self.pr_number
            if self.repository == "res":
                self.res_pr_num = self.pr_number
            if self.repository == "ert":
                self.ert_pr_num = self.pr_number

    def assert_open_pr_status(self, rep_name, pr_num):
        if pr_num < 0:
            return
        url = "https://api.github.com/repos/Statoil/%s/pulls/%d" % (rep_name, pr_num)
        github_api_token = os.getenv("GITHUB_API_TOKEN")
        response = requests.get(url, {"access_token" : self.github_api_token})

        content = json.loads(response.content)
        state = content["state"]
        assert state == "open"

    def access_pr(self):
        if "TRAVIS_PULL_REQUEST" not in os.environ:
            return

        pr_number_string = os.getenv("TRAVIS_PULL_REQUEST")
        if pr_number_string == "false":
            return

        self.pr_number = int(pr_number_string)
        url = "https://api.github.com/repos/Statoil/%s/pulls/%d" % (self.rep_name, self.pr_number)
        print("Accessing: %s" % url)

        response = requests.get(url, {"access_token" : self.github_api_token})

        if response.status_code != 200:
            sys.exit("HTTP GET from GitHub failed: %s" % response.text)

        content = json.loads(response.content)
        self.pr_description = content["body"]
        print("PULL REQUEST: %d\n%s" % (self.pr_number, self.pr_description))
        self.parse_pr_description()
        self.check_pr_num_consistency()
        self.assert_open_pr_status('libecl', self.ecl_pr_num)
        self.assert_open_pr_status('libres', self.res_pr_num)
        self.assert_open_pr_status('ert',    self.ert_pr_num)

    def clone_fetch_merge(self, basedir):
        self.clone_merge_repository('libecl', self.ecl_pr_num, basedir)
        self.clone_merge_repository('libres', self.res_pr_num, basedir)
        if self.build_ert:
            self.clone_merge_repository('ert', self.ert_pr_num, basedir)

    def clone_merge_repository(self, rep_name, pr_num, basedir):
        if self.rep_name == rep_name:
            return

        subprocess.check_call(["git", "clone", "https://github.com/Statoil/%s" % rep_name])
        if pr_num < 0:
            return
        rep_path = os.path.join(basedir, rep_name)
        cwd = os.getcwd()
        os.chdir(rep_path)
        subprocess.check_call(["git", "config", "user.email", "you@example.com"])
        subprocess.check_call(["git", "config", "user.name", "Your Name"])
        path = "refs/pull/%d/head:%d" % (pr_num, pr_num)
        subprocess.check_call(["git", "fetch", "-f", "origin", path])
        subprocess.check_call(["git", "merge", "%d" % pr_num, '-m"A MESSAGE"'])
        os.chdir(cwd)

    def compile_and_build(self, basedir):
        install_dir = os.path.join(basedir, "install")
        if not os.path.isdir(install_dir):
            os.makedirs(install_dir)
        self.compile_ecl(basedir, install_dir)

        if self.rep_name == 'libecl' and sys.platform in ('Darwin', 'darwin'):
            return

        self.compile_res(basedir, install_dir)
        if self.build_ert:
            self.compile_ert(basedir, install_dir)

    def build(self, source_dir, install_dir, test):
        build_dir = os.path.join(source_dir, "build")
        if not os.path.isdir(build_dir):
            os.makedirs(build_dir)

        cmake_args = ["cmake",
                      source_dir,
                      "-DBUILD_TESTS=ON",
                      "-DBUILD_PYTHON=ON",
                      "-DERT_BUILD_CXX=ON",
                      "-DBUILD_APPLICATIONS=ON",
                      "-DCMAKE_INSTALL_PREFIX=%s" % install_dir,
                      "-DINSTALL_ERT_LEGACY=ON",
                      "-DCMAKE_PREFIX_PATH=%s" % install_dir,
                      "-DCMAKE_MODULE_PATH=%s/share/cmake/Modules" % install_dir]

        cwd = os.getcwd()
        os.chdir(build_dir)
        subprocess.check_call(cmake_args)
        subprocess.check_call(["make"])
        if test:
            subprocess.check_call(["ctest", "--output-on-failure"])
        subprocess.check_call(["make", "install"])
        subprocess.check_call(["bin/test_install"])
        os.chdir(cwd)

    def compile_ecl(self, basedir, install_dir):
        if self.repository == 'ecl':
            source_dir = basedir
        else:
            source_dir = os.path.join(basedir, "libecl")
        test = (self.repository == 'ecl')
        self.build(source_dir, install_dir, test)

    def compile_res(self, basedir, install_dir):
        if self.repository == 'res':
            source_dir = basedir
        else:
            source_dir = os.path.join(basedir, "libres")
        test = (self.repository in ('ecl', 'res'))
        self.build(source_dir, install_dir, test)

    def compile_ert(self, basedir, install_dir):
        if self.repository == 'ert':
            source_dir = basedir
        else:
            source_dir = os.path.join(basedir, "ert")
        self.build(source_dir, install_dir, True)


def main():
    basedir = os.getcwd()
    pr_build = PrBuilder(sys.argv[1], basedir)
    pr_build.display()
    sys.exit(0)

if __name__ == "__main__":
    main()
