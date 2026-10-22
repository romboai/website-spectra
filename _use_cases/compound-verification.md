---
title: NMR compound verification
h1: NMR compound verification
slug: compound-verification
description: Use Spectra to test whether 1H and 13C data support a proposed structure before you treat the identity as closed.
permalink: /use-cases/compound-verification/
starting_point: Proposed structure + 1H/13C
typical_input: 1H, 13C, solvent, field, and the proposed structure (optional molecular formula)
spectra_output: Ranked shortlist, 13C RMSD, per-shift residuals, and competing isomers
chemist_call: Accept assignment, inspect a close isomer, or acquire 2D
limitations_summary: Verification cannot compensate for missing 13C resonances. If the proposed molecule is wrong and the true structure is outside the searchable space, you will see a poor residual or a close neighbour that still leaves shifts unexplained.
validation_summary: Compare the shortlist against an independent shift prediction or reference spectrum, record any unexplained peaks in the project record, and do not mark a batch as identity-confirmed on rank alone.
---

## Who this job is for and why it stalls

A chemist who already has a proposed structure — a synthetic intermediate, a purchased standard, or a literature assignment — needs to know whether the NMR in hand actually supports it.

Verification looks routine until two positional isomers or close analogues share almost the same 1H multiplet pattern. Most laboratories process in TopSpin, Delta, or Mnova, compare against a predicted or reference spectrum, and write the reasoning in a notebook. Time is lost re-predicting shifts in one tool, checking a library in another, and compiling the discrepancy list by hand — especially on the fourth or fifth spectrum of the day, when fatigue hides subtle 13C mismatches.

## How the Spectra workflow runs

1. **Upload the dataset and hypothesis** — Export 1H and 13C from your processing software, specify solvent and spectrometer field, and include the proposed structure (plus molecular formula when analogues differ by heteroatom count).
2. **Retrieve and rank neighbours** — Spectra does not test the proposed structure in isolation. It retrieves nearby candidates from the library so you can see whether a regioisomer or close analogue fits the experimental shifts just as well.
3. **Inspect shift-level residuals** — Review the 13C RMSD and atom-by-atom shift differences. If the proposed molecule is well supported, it should rank near the top with low residuals across diagnostic carbons.
4. **Check unexplained signals** — Look at peaks no candidate accounts for to spot residual solvent, a minor by-product, or a diastereomer before signing off.

## What to look for in the review

- **Proposed structure at rank 1 with low 13C RMSD**: strong support to proceed with your standard sign-off protocol.
- **Proposed structure tied with a close isomer**: check the carbon positions where the two structures diverge; a targeted HSQC or HMBC is often faster than arguing from 1D alone.
- **Large residuals on key carbons**: reason to challenge the proposed structure even if the 1H spin systems look plausible.

Related: [running an analysis](/docs/running-an-analysis/), [sample analysis](/examples/sample-analysis/), [analytical and contract labs](/analytical-labs/).
