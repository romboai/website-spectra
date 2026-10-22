---
title: NMR impurity identification
h1: NMR impurity identification
slug: impurity-identification
description: Rank plausible NMR explanations for unexpected signals beside a known major component, without treating the impurity as confirmed.
permalink: /use-cases/impurity-identification/
starting_point: Extra minor peaks beside an assigned API, intermediate, or product
typical_input: Mixture or enriched impurity-cut 1H and 13C, solvent, known major structure, process context
spectra_output: Ranked impurity hypotheses, 13C residuals, and signals still left unexplained
chemist_call: Spike authentic standard, isolate enriched cut, or escalate to LC-MS
limitations_summary: Low-level impurities often lack usable 13C signals, and Spectra will not invent a structure from three overlapping proton multiplets. Spectra does not apply ICH identification thresholds or replace a validated regulatory impurity method.
validation_summary: Confirm plausible candidates with orthogonal LC-MS, an enriched isolation cut, or a spiked authentic standard. Keep the accepted or rejected hypothesis recorded alongside the residual peaks.
---

## Who this job is for and why it stalls

Process-chemistry and impurity-characterization teams usually know the major component — the API, key intermediate, or formulated active — and need a chemically credible hypothesis for a set of unexpected minor peaks.

In practice, teams subtract the parent spectrum by eye, check residual solvent tables, and wait for LC-MS or preparative enrichment. Senior spectroscopists lose first-pass time chasing false leads from grease, rotamers, residual starting materials, or oxidative by-products before narrowing the discussion to the two or three structures worth synthesizing or spiking.

## How the Spectra workflow runs

1. **Provide the enriched cut or mixture dataset** — Upload 1H and (when impurity load or enrichment allows) 13C data, along with solvent and known process context such as reagents, oxidants, or parent structure.
2. **Rank candidate explanations** — Spectra retrieves candidate structures that could account for the extra spin systems and checks them against available 13C resonances to discard isomers the carbon data contradict.
3. **Separate parent, candidate, and leftover peaks** — Inspect which signals are explained by the top-ranked impurity hypothesis and which resonances remain unassigned.
4. **Select the fastest confirmatory test** — Use the shortlist to decide whether to spike a cheap commercial reagent/by-product standard or commission preparative isolation.

## What to look for in the review

- **A candidate explains all extra 1H/13C peaks with low residual**: test immediately by spiking an authentic standard or checking retention time in LC-MS.
- **Partial match with leftover signals**: indicates either a co-eluting second impurity or a process degradant modified at a position not covered by the retrieved library member.

Related: [analytical and contract labs](/analytical-labs/), [evidence and confidence](/docs/evidence-and-confidence/), [limitations](/docs/limitations/).
