---
title: Getting started with Spectra
nav: Getting started
h1: Getting started
description: How to access Spectra, run a first 1H and 13C analysis, and interpret the shortlist.
permalink: /docs/getting-started/
nav_order: 2
---

## How to access Spectra

1. Open [{{ site.app_url }}/login]({{ site.app_url }}/login).
2. Create an account or sign in. Login offers email, passkey and Google.
3. If your organization needs a scoped evaluation instead of self-service, [request a pilot](/pilot/).

{% include screenshot.html file="login.png" caption="Sign in to Spectra" alt="Spectra login screen" %}

## Minimum workflow

1. Choose an analytical question: verify a proposed structure, inspect an impurity, dereplicate a mixture, or identify an unknown.
2. Gather 1H and 13C data from Bruker, JEOL, Varian or JCAMP-DX.
3. Record solvent and field strength.
4. Submit the case in Spectra.
5. Inspect the ranked shortlist and shift-level residuals.
6. Decide: confirm, dereplicate, flag unknown, or acquire another experiment.

{% include screenshot.html file="upload.png" caption="Upload 1H and 13C" alt="Spectra upload screen" %}

{% include screenshot.html file="results.png" caption="Ranked shortlist" alt="Spectra results shortlist" %}

## Example data

If you do not yet have a cleared spectrum, read the [sample analysis](/examples/sample-analysis/) to learn the review objects. Do not upload data you are not allowed to share with a hosted service.

{% include example-file.html %}

## What you will receive

A shortlist, match information, residual error, and evidence that can be read shift by shift. The chemist closes the case.

Next: [supported data](/docs/supported-data/).
