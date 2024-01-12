---
title: 'Ert: data assimilation on HPC'
tags:
  - Python
  - data assimilation
  - simulation
  - modeling
  - prediction
  - ensemble methods
authors:
  - name: Markus Fanebust Dregi
    affiliation: 1
    contributions: [software, supervision, project administration, writing – review & editing]
  - name: Sondre Sortland
    affiliation: 1
    contributions: [software, supervision, project administration, writing – review & editing]
  - name: Øystein Olai Heggen
    affiliation: 1
    contributions: [software, supervision, project administration]
  - name: Remus Hanea
    orcid: 0000-0003-2096-0140
    affiliation: 1
    contributions: [supervision, methodology, writing – review & editing]
  - name: Øyvind Eide
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Julius Parulek
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Håvard Berland
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Eivind Jahren
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Feda Curic
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Berent Ånund Strømnes Lunde
    orcid: 0000-0002-6220-5680
    affiliation: 1
    contributions: [software, methodology, writing – review & editing]
  - name: Zohar Malamant
    affiliation: 1
    contributions: [software, methodology, writing – original draft]
  - name: Matt Hall
    orcid: 0000-0002-4054-8295
    affiliation: 1
    contributions: [writing – original draft, software]
affiliations:
 - name: Equinor, Bergen, Norway
   index: 1
date: 1 March 2024
bibliography: paper.bib
---

# Summary

> A short, *generally accessible to a lay-person* summary. 

_Ert_ is a Python library for performing data assimilation, a technique for
combining real-world observations with computer simulations, on high-performance
computing (HPC) infrastructure. In particular, _Ert_ handles highly complex data
structures and non-linear simulation schemes via the use of ensembles, applying
filters or smoothers to compute the best updates to uncertain parameters and
initial conditions. In this way, _Ert_ helps researchers and practitioners in a
variety of scientific and engineering disciplines submit complex simulation
tasks to HPC clusters, perform updates on model parameters, and inspect the
results of the analysis.

_Ert__ is distributed under the [GPL 3.0
license](https://www.gnu.org/licenses/gpl-3.0.en.html). The source code is
available [on GitHub](https://github.com/equinor/ert) and includes tests
and [documentation](https://ert.readthedocs.io/en/latest/). The package can be
installed from the [Python package index](https://pypi.org/project/ert/)
with `pip install ert` or built from source.

# Statement of need

> Why does ERT exist? 750 words max.
> Refer at least to [evensen-etal-2019]


# Acknowledgements

Thanks to [Equinor](https://www.equinor.com/) for supporting this project for
almost two decades. We are grateful to Geir Evensen, Patrick Raanes, and other
members of the [Norce](https://www.norceresearch.no/en/) Data Assimilation
and Optimization group for their ongoing leadership in the field.


# References
