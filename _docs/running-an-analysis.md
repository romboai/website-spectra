---
title: Running an analysis
nav: Running an analysis
h1: Running an analysis
description: How a Spectra project moves from uploaded NMR files through preprocessing, peak picking and identification.
permalink: /docs/running-an-analysis/
nav_order: 5
---

## Put the files in the project

Sign in at [{{ site.app_url }}/login]({{ site.app_url }}/login), open the project, and upload the spectra into the workspace. Prefer the vendor family or JCAMP-DX export listed in [supported data](/docs/supported-data/).

The input step lists what Spectra detected. Check nucleus, solvent and field before you continue. Optional context sits under **Additional information**: formula, exact mass, solvent, and an expected structure when this is a verification.

{% include screenshot.html file="objective.png" caption="Project input before you continue" alt="Spectra input step" %}

{% include screenshot.html file="context.png" caption="Optional context. The grey text in each field is a hint, not a value saved for this sample." alt="Spectra additional information dialog" %}

Notes that the form does not hold — sample preparation, concentration, a suspected impurity, acquisition conditions — can be stated in chat. Spectra keeps those project facts with the analysis.

## Confirm preprocessing

Preprocessing covers reading the dataset, normalization, phase and baseline, reference and solvent, then a quality handoff into peak picking.

Confirm input when the preview is the spectrum you meant to analyse. That confirmation authorizes preprocessing only.

- Already processed spectra skip preprocessing and keep the processed data for review.
- Imported correlation lists skip the processed-matrix path and continue toward peak picking.
- If a raw 2D file needs a processing recipe, Spectra asks for the missing fields and stops. It does not invent them.

{% include screenshot.html file="quality-warnings.png" caption="Preprocessing and quality notes" alt="Spectra preprocessing step" %}

## Confirm peak picking

After preprocessing, review the processed spectrum, then confirm that step. Peak picking then runs on each acquisition Spectra detected.

1D spectra produce signals and peaks. HSQC, COSY, HMBC, TOCSY and NOESY produce correlations. A 2D spectrum is not run through the 1D peak list. Identification stays locked until the 1D acquisitions in the project are complete.

{% include screenshot.html file="peaks.png" caption="Peak list for the aromatic monoterpene example" alt="Spectra peak list with chemical shifts and multiplicities" %}

## Confirm identification

Confirm the peak list when you accept it. Identification then ranks structure hypotheses against the 1H evidence, 13C when present, 2D correlations when present, and any formula you supplied.

You can also ask in chat to advance a step or to rerun one acquisition with different options. Chat and the on-screen controls drive the same analysis. Spectra stops at the next gate until you confirm.

Next: [understanding results](/docs/understanding-results/).
