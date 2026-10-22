---
title: Natural-products research
h1: Natural-products NMR analogue ranking
slug: natural-products
description: Use 1H and 13C shift residuals to separate common natural-product scaffolds from novel analogues in enriched fractions.
permalink: /use-cases/natural-products/
starting_point: Enriched botanical, microbial, or marine fraction
typical_input: Fraction 1H and 13C, solvent (e.g. DMSO-d6, CD3OD), optional MS molecular formula
spectra_output: Ranked scaffold candidates, diagnostic 13C shift comparisons, and unexplained peaks
chemist_call: Set aside known scaffolds or isolate the fraction with novel shift residuals
limitations_summary: Extensive glycosylation, rotameric equilibria, tautomerism, and heavy aromatic overlap in crude extracts will defeat single-compound ranking. Spectra assists NMR triage on enriched fractions; it does not replace chromatography or bioassay-guided fractionation.
validation_summary: Confirm dereplicated knowns against authentic standards when available, and restrict full 2D elucidation and preparative isolation to fractions whose 13C residuals survive that check.
---

## The structural challenge in natural-products NMR

In botanical, microbial, and marine extracts, the peak of interest is rarely an alien ring system — it is much more often a positional isomer, deoxy analogue, or differently oxygenated cousin of a ubiquitous scaffold.

1H NMR alone frequently struggles to separate close natural-product analogues when aromatic doublets and oxygenated methines crowd the same window. Waiting until after full preparative purification to run a careful 13C comparison means columns and instrument slots get spent on compounds that a carbon residual check could have triaged earlier.

## How Spectra handles scaffold neighbours

1. **Start from an enriched fraction with 1H and 13C** — Export 1H and 13C from a concentrated fraction and include the solvent and any MS-derived molecular formula (such as `C15H10O6`).
2. **Compare the whole scaffold family at once** — Rather than returning a single binary hit, Spectra ranks the competing members of the structural neighbourhood side by side.
3. **Pinpoint diagnostic carbon discriminators** — Inspect the per-shift 13C residuals to see exactly which carbon atoms agree with the known parent and which carbon shifts signal a different substitution pattern (for example, C-3 oxygenation in flavones versus flavonols).
4. **Document the fraction decision** — Record why a fraction was set aside as a known scaffold or promoted to full 2D (HSQC, HMBC, COSY, NOESY) elucidation.

## Diagnostic example: separating C15H10O6 flavonoids

In the public walkthrough (`CASE-2043`), quercetin, luteolin, and kaempferol share the same molecular formula (`C15H10O6`) and similar aromatic spin systems in DMSO-d6. Spectra keeps all three on the shortlist (`1.8 ppm`, `3.4 ppm`, and `4.1 ppm` 13C RMSD) so the chemist can inspect the C-3 region that separates a flavone (luteolin, no 3-OH) from the two flavonols.

{% include sample-candidates.html id="flavonoids" %}

Related: [NMR dereplication workflow](/use-cases/dereplication/), [for natural-products and ingredient teams](/natural-products/), [ROSE 1H NMR research](/research/).
