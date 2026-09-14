---
title: Preparing NMR data
nav: Preparing data
h1: Preparing NMR data
description: Referencing, phasing, baseline, solvent and field information that change whether a Spectra shortlist is scientifically usable.
permalink: /docs/preparing-nmr-data/
nav_order: 4
---

Spectra can only reason about the spectrum you submit. Garbage in still produces a shortlist. The shortlist will look confident and still be wrong.

## Referencing

Incorrect chemical-shift referencing moves every comparison. Check TMS, residual solvent, or the laboratory’s validated reference before upload. If 1H and 13C were referenced independently, say so in the case notes.

## Phasing

Mis-phased multiplets distort integrals and apparent shifts. Phase in your usual processing tool (TopSpin, Mnova, Delta, or another validated processor) before asking Spectra to rank structures.

## Baseline

Rolling baselines create false peaks and hide weak impurities. Correct obvious baseline errors first. Spectra is not advertised as a replacement for processing.

## Solvent

The live example uses DMSO-d6. Always state the solvent. Residual solvent and water signals are otherwise easy to treat as analyte peaks.

## Field strength

State the spectrometer frequency. The public example uses 600 MHz. Predicted versus measured residuals are not comparable across an undeclared field.

## Nucleus

Submit the nucleus you actually measured. Do not relabel a DEPT or edited experiment as a fully assigned 13C without saying so.

## Sample context

Note whether the sample is isolated, a mother-liquor, a spiked standard, or an extract. Mixture status changes how a one-compound ranking should be read.

## Common quality problems

- Clipped windows that omit aliphatic or aromatic regions
- Severe overlap presented as a pure compound
- Unstated impurities from NMR tubes or grease
- Digital resolution too low for the claimed discrimination
- 13C not acquired when the 1H alone cannot separate analogues

Next: [running an analysis](/docs/running-an-analysis/).
