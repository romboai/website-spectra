---
title: Metabolite identification
h1: Metabolite identification
slug: metabolite-identification
description: Rank metabolite and conjugate hypotheses from isolated or enriched NMR datasets with explicit residual uncertainty.
permalink: /use-cases/metabolite-identification/
starting_point: Isolated or enriched metabolite NMR from incubations or biofluids
typical_input: 1H and 13C, solvent (typically D2O or DMSO-d6), plus parent structure or formula
spectra_output: Ranked metabolite and biotransformation candidates with per-shift residuals
chemist_call: Overlay authentic standard, confirm regioselectivity by 2D, or keep provisional
limitations_summary: Spectra does not automate pathway mapping, quantitative metabolomics, or MSI identification levels. Raw biofluids with heavy protein/lipid overlap and 1H-only profiling mixtures are outside scope; the workflow is designed for isolated or enriched material with 13C data.
validation_summary: Validate top-ranked hypotheses with an authentic standard or reference-spectrum overlay plus orthogonal MS, following the reporting standards required by your study or regulatory team.
---

## Who this job is for and why it stalls

Drug-metabolism (MetID) and metabolomics scientists use NMR when LC-MS alone cannot lock down regioselectivity — such as distinguishing which position on an aromatic ring underwent phase I hydroxylation, or confirming the attachment site of a glucuronide or sulfate conjugate.

The bottleneck is that biochemical candidate spaces are full of isobaric lookalikes and endogenous background compounds. Relying on a 1H database match without checking 13C shift residuals across the modified site can burn days chasing an endogenous lookalike or the wrong regioisomer.

## How the Spectra workflow runs

1. **Upload enriched metabolite 1H and 13C** — Submit the NMR of the isolated or concentrated metabolite in `D2O`, `DMSO-d6`, or `CD3OD`, and include the parent xenobiotic structure or molecular formula when available.
2. **Rank regioisomers and biotransformation candidates** — Spectra retrieves candidate structures and compares predicted versus observed chemical shifts across both the parent core and the modified positions.
3. **Evaluate carbon residuals at the site of metabolism** — Use 13C RMSD and atom-level residuals to discard isobaric analogues whose carbon shifts conflict with the observed oxidation, dealkylation, or conjugation site.
4. **Inspect unexplained signals** — Check unassigned peaks to see whether a conjugate moiety (such as a sugar or amino-acid fragment) or co-isolated matrix component is present.

## What to look for in the review

- **Clear 13C separation between competing regioisomers**: helps prioritize which synthetic metabolite standard to order or synthesize first.
- **Core matches well, but extra aliphatic/anomeric peaks remain unexplained**: points toward a phase II conjugate or co-eluting endogenous component that requires targeted 2D (HSQC/HMBC) confirmation.

Related: [unknown compound identification](/use-cases/unknown-compound-identification/), [evidence and confidence](/docs/evidence-and-confidence/), [limitations](/docs/limitations/).
