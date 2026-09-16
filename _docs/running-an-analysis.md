---
title: Running an analysis
nav: Running an analysis
h1: Running an analysis
description: How to submit a Spectra case, describe the objective, and inspect the first shortlist.
permalink: /docs/running-an-analysis/
nav_order: 5
---

## Upload

Sign in at [{{ site.app_url }}/login]({{ site.app_url }}/login) and add the 1H and 13C files you prepared. Prefer the vendor family or JCAMP-DX export listed in [supported data](/docs/supported-data/).

## Describe the objective

State the job in plain language: “verify this proposed impurity”, “dereplicate the major component”, “identify an unknown in DMSO-d6”. Verification and open-world identification carry different risk even when the interface looks similar.

{% include screenshot.html file="objective.png" caption="Set the analytical objective" alt="Spectra objective field" %}

## Add context

Solvent, field, proposed structure (for verification), and any formula or MS you are allowed to share.

{% include screenshot.html file="context.png" caption="Solvent, field and proposed structure" alt="Spectra context fields" %}

## Review quality warnings

If Spectra warns about referencing, missing nucleus, or unusable windows, fix the data first. A warning you dismiss will still appear in the residual error.

{% include screenshot.html file="quality-warnings.png" caption="Quality warnings before ranking" alt="Spectra quality warnings" %}

## Run the workflow

The steps are: load, retrieve, validate against predicted shifts, review. Wait for the shortlist rather than re-submitting the same files.

## Inspect the shortlist

Open the top candidates and the ones that were discarded for large residual error. You are looking for a story that a colleague could audit.

Next: [understanding results](/docs/understanding-results/).
