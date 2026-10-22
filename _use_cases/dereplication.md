---
title: NMR dereplication
h1: NMR dereplication
slug: dereplication
description: Use Spectra to test whether an extract or mixture component is already known before committing columns and instrument time to isolation.
permalink: /use-cases/dereplication/
starting_point: Concentrated fraction or extract with a recurring spin system
typical_input: 1H at minimum; 13C when concentrated; solvent (e.g. DMSO-d6, CD3OD); optional fraction context
spectra_output: Ranked known library members, close analogues, and unexplained residual peaks
chemist_call: Stop isolation on known compounds or prioritize novel residuals
limitations_summary: A new analogue of a common scaffold can resemble the parent compound until 13C or 2D data are available. Dereplication is a triage filter, not a certificate of novelty or identity.
validation_summary: Overlay with an authentic standard or reference spectrum when available. When no standard exists, advance only the fractions whose 13C residuals remain unexplained by known library members.
---

## Who this job is for and why it stalls

Natural-product and mixture chemists frequently encounter a clean spin system in a fraction and need to answer one question before scaling up chromatography: *is this molecule already known?*

Dereplication is a library problem with chemical nuance attached. Exact-match spectral searches break down when the solvent shifts slightly, when a minor component overlaps, or when 13C is partially incomplete. When a library search returns an inconclusive partial match, teams often isolate the compound anyway — spending days of preparative LC and magnet time on known flavonols, coumarins, sugars, or fatty-acid derivatives.

## How the Spectra workflow runs

1. **Submit fraction NMR** — Upload 1H and, whenever concentration permits, 13C data along with solvent and any molecular formula or mass context from LC-MS.
2. **Retrieve knowns and scaffold neighbours** — Spectra searches across known structures and ranks candidates that fit the observed chemical shifts rather than relying on rigid peak-for-peak identity.
3. **Separate exact fits from scaffold analogues** — Inspect the 13C RMSD and per-shift residuals. A low residual across the carbon skeleton points to a known compound you can set aside; a localized shift deviation flags a substitution difference worth isolating.
4. **Account for matrix leftovers** — Review the unexplained signals list to distinguish co-eluting minor components from a genuinely different core structure.

## What to look for in the review

- **Low 13C residual across all diagnostic positions**: strong evidence that the fraction's main component is a known library member. Verify against an in-house standard and save the isolation column.
- **High match on the core scaffold but a 3–6 ppm residual at one or two carbons**: classic signature of a positional isomer, methylation pattern difference, or modified side chain. Keep in the isolation queue.

Related: [natural-products research workflow](/use-cases/natural-products/), [natural products and ingredient labs](/natural-products/), [sample analysis](/examples/sample-analysis/).
