---
title: Sample analysis
h1: Sample analysis — CASE-2043
description: Walkthrough of the Spectra teaching example — an unknown in DMSO-d6 with three ranked flavonoids.
permalink: /examples/sample-analysis/
---

This page walks through the teaching example on the homepage: an unknown in DMSO-d6, reviewed from 1H and 13C at 600 MHz.

## Analytical question

An unknown compound in DMSO-d6 needs a shortlist. The chemist has 1H and 13C at 600 MHz and wants to know which structures are consistent enough to review.

## Available data

- Nuclei: 1H and 13C
- Field: 600 MHz
- Solvent: DMSO-d6
- Status on the card: for review

## Quality checks

Before trusting any similar real case, confirm referencing to residual DMSO, inspect whether the 13C is complete, and decide if the sample is a single compound.

## Candidate generation

Spectra retrieves candidates over a large compound library and then ranks them.

## Ranked candidates

| Rank | Candidate | Match | 13C RMSD |
| --- | --- | ---: | ---: |
| 1 | Quercetin | 0.94 | 1.8 ppm |
| 2 | Luteolin | 0.71 | 3.4 ppm |
| 3 | Kaempferol | 0.66 | 4.1 ppm |

These three closely related flavonoids (two flavonols and a flavone) are chemically close. The table teaches the review objects (rank, match, residual).

## Evidence

In a real case you would open the top candidate and ask which carbons carry the 1.8 ppm residual. Luteolin is a flavone (no 3-OH); quercetin and kaempferol are flavonols. The C-3 region is where 13C can separate them.

## Remaining uncertainty

Luteolin and kaempferol remain on the list. A 0.94 match still leaves analogues on the desk. The status stays **for review**.

## Next experiment

If this were a real unknown, a chemist might request a cleaner 13C, an authentic overlay, or a complementary 2D experiment the laboratory already validates.

## Final expert decision

The expert decides. Possible outcomes: confirm quercetin against a standard, dereplicate as a known flavonoid, or keep the sample unknown if residuals or chromatography disagree.

{% include cta.html src="sample_analysis" %}
