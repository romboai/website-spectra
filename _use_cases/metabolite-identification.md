---
title: Metabolite identification
h1: Metabolite identification
description: Rank metabolite hypotheses from NMR with explicit residual uncertainty for biofluids, incubations and labelled studies.
permalink: /use-cases/metabolite-identification/
---

## Target user

Metabolomics and drug-metabolism scientists who use NMR on incubations, urine, plasma extracts or labelled compounds.

## Specific problem

The candidate space is biochemical, not just structural: phase I oxidations, conjugates, and endogenous lookalikes. A library hit that ignores metabolism is a wasted week.

## Existing workflow

LC-MS features first, NMR confirmation if enough material exists. Many “identifications” remain level 3 annotations.

## Where time is lost

Confirming an endogenous lookalike because the 1H matched a database while the 13C or the biological context did not.

## How Spectra assists

Submit the NMR of the isolated or highly enriched metabolite, state the parent drug or the expected biotransformation if you can, and use residuals to drop isobaric analogues. Spectra remains an NMR ranking layer — not a full metabolomics platform.

## Data typically required

1H and 13C of the metabolite or a concentrated extract; solvent (often D2O or DMSO-d6); parent structure or formula when this is a xenobiotic study.

## Resulting output

A shortlist of metabolite structures consistent with the NMR, with leftovers that may be the conjugate you have not yet considered.

## Limitations

Spectra does not automate pathway mapping, quantitative metabolomics, or MSI identification levels. Biofluids are mixtures; protein and lipid overlap are out of scope for a one-compound ranking. NMR metabolomics on complex mixtures is typically 1H-dominated; the best fit today is isolated or enriched material with 13C data.

## Recommended validation

Authentic standard or authentic-spectrum overlay, plus MS. Follow community reporting standards used in your field.

Related: [unknown identification](/use-cases/unknown-compound-identification/), [evidence and confidence](/docs/evidence-and-confidence/).
