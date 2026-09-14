---
title: Sample analysis
h1: Sample analysis — CASE-2043 schematic
description: Annotated walkthrough of the public Spectra example — an unknown in DMSO-d6 with three ranked flavonols. No confidential laboratory result is claimed.
permalink: /examples/sample-analysis/
---

This page explains the **public schematic** shown on the live Spectra homepage. It is labelled there as an example. It is not a measured client case, not a benchmark, and not a screenshot of a confidential session.

## Analytical question

An unknown compound in DMSO-d6 needs a shortlist. The chemist has 1H and 13C at 600 MHz and wants to know which structures are consistent enough to review.

## Available data

- Nuclei: 1H and 13C
- Field: 600 MHz
- Solvent: DMSO-d6
- Status on the card: for review
- Public note: 128 candidates screened, evidence per shift

No FID, no peak list and no raw integrals are published with the schematic. Do not invent them.

## Quality checks

Before trusting any similar real case, confirm referencing to residual DMSO, inspect whether the 13C is complete, and decide if the sample is a single compound. The schematic assumes a reviewable unknown, not a crude extract.

## Candidate generation

The product story is retrieval over a large compound library followed by ranking. The schematic does not name the library. We therefore do not state a retrieval-space size.

## Ranked candidates

| Rank | Candidate | Match | 13C RMSD |
| --- | --- | ---: | ---: |
| 1 | Quercetin | 0.94 | 1.8 ppm |
| 2 | Luteolin | 0.71 | 3.4 ppm |
| 3 | Kaempferol | 0.66 | 4.1 ppm |

These three flavonols are chemically close. The table is teaching the review objects (rank, match, residual), not publishing a validated identification of quercetin.

## Evidence

The homepage promises evidence per shift. This documentation page cannot show those shift assignments because they were not published as a table. In a real case you would open the top candidate and ask which carbons carry the 1.8 ppm residual.

## Remaining uncertainty

Luteolin and kaempferol remain on the list. That is the point: a 0.94 match still leaves analogues on the desk. The status stays **for review**.

## Next experiment

If this were a real unknown, a chemist might request a cleaner 13C, an authentic quercetin overlay, or a complementary 2D experiment the laboratory already validates. We do not prescribe a pulse sequence that the product has not published.

## Final expert decision

The expert decides. Possible honest outcomes: confirm quercetin against a standard, dereplicate as a known flavonol, or keep the sample unknown if residuals or chromatography disagree.

{% include cta.html %}
