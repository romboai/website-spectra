---
title: Sample analysis
h1: A teaching walkthrough — three flavonoids, one formula
description: How Spectra ranks quercetin, luteolin and kaempferol from 1H and 13C in DMSO-d6, and where a chemist should look next.
permalink: /examples/sample-analysis/
---

We use this case to show the objects you will review in Spectra: a ranked shortlist, a match value, 13C RMSD, and the chemical reason two analogues stay on the desk.

The sample is an unknown in DMSO-d6, measured at 600 MHz, with both 1H and 13C. Status on the card is **for review**.

{% include sample-candidates.html id="flavonoids" %}

## Analytical question

Which structures are consistent enough with this 1H and 13C to review, and which close analogue still needs another experiment?

## Available data

- Nuclei: 1H and 13C
- Field: 600 MHz
- Solvent: DMSO-d6
- Status: for review

## Quality checks

Before treating a similar real case as ready, check referencing to residual DMSO, whether the 13C looks complete, and whether the sample is a single compound.

## Ranked candidates

| Rank | Candidate | Match | 13C RMSD |
| --- | --- | ---: | ---: |
| 1 | Quercetin | 0.94 | 1.8 ppm |
| 2 | Luteolin | 0.71 | 3.4 ppm |
| 3 | Kaempferol | 0.66 | 4.1 ppm |

These three closely related flavonoids (two flavonols and a flavone) share the formula C15H10O6. Luteolin is a flavone (no 3-OH). Quercetin and kaempferol are flavonols. The C-3 region is where 13C can separate them.

<div class="sample-board" data-analytics="sample_view">
  <details class="sample-candidate" open data-candidate="quercetin">
    <summary><span class="sample-rank">1</span> <strong>Quercetin</strong> <span>Match 0.94</span> <span>13C RMSD 1.8 ppm</span></summary>
    <p>Highest match and lowest 13C RMSD of the three. Open this candidate first and ask which carbons still carry residual. A 0.94 match is a reason to inspect, not to close the case.</p>
  </details>
  <details class="sample-candidate" data-candidate="luteolin">
    <summary><span class="sample-rank">2</span> <strong>Luteolin</strong> <span>Match 0.71</span> <span>13C RMSD 3.4 ppm</span></summary>
    <p>Same C15H10O6 formula, but luteolin is a flavone: no 3-OH. The C-3 shift is the discriminator against the two flavonols. A larger 13C RMSD is the signal to read that region, not to discard the chemistry.</p>
  </details>
  <details class="sample-candidate" data-candidate="kaempferol">
    <summary><span class="sample-rank">3</span> <strong>Kaempferol</strong> <span>Match 0.66</span> <span>13C RMSD 4.1 ppm</span></summary>
    <p>A flavonol analogue still on the shortlist. This is the neighbourhood that eats expert time: same scaffold, different substitution, residuals that need a human.</p>
  </details>
</div>

Open each row in turn. A high match with a 1.8 ppm 13C RMSD is a reason to inspect quercetin, not a certificate.

## Remaining uncertainty

Luteolin and kaempferol remain on the list. Analogues with the same formula are exactly the cases that consume senior time.

## Next experiment

If this were a compound you needed to sign, a chemist would typically want a cleaner 13C, an authentic overlay, or a complementary 2D experiment the laboratory already validates.

## The chemist decides

Possible outcomes: confirm quercetin against a standard, dereplicate as a known flavonoid, or keep the sample unknown if residuals or chromatography disagree.

{% include cta.html src="sample_analysis" primary_label="Analyze a spectrum free" %}
