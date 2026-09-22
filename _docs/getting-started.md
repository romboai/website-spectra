---
title: Getting started with Spectra
nav: Getting started
h1: Getting started
description: How to sign in, open a project, upload NMR files, and move through Input, Preprocessing, Peak picking and Identification.
permalink: /docs/getting-started/
nav_order: 2
---

## How to access Spectra

1. Open [{{ site.app_url }}/login]({{ site.app_url }}/login).
2. Create an account or sign in. Login offers email, passkey and Google.
3. If your organization needs a scoped evaluation instead of self-service, [talk to sales](/contact/).

## Create a project

From Home, drop the spectra on the launchpad or choose a dataset folder. One project identifies one molecule: include every spectrum of that sample. A file dropped into the chat is an attachment to the message, not a spectrum in the project. Recent cases stay on Home so you can reopen one later.

The figures below are the aromatic monoterpene example shipped with Spectra: one processed 1H spectrum at 400 MHz. Identification ranked three cymene isomers. The chemist still accepts or rejects.

## Add the spectra

Opening the project reads the files already there and shows an input preview. Spectra looks for these acquisitions:

- **1H** and **13C**
- optional **HSQC**, **COSY**, **HMBC**, **TOCSY** and **NOESY**

{% include screenshot.html file="upload.png" caption="Home: drop a dataset, or open the example" alt="Spectra home with dataset upload and the aromatic monoterpene example" %}

## Four steps, each waiting for you

The workspace shows four steps. Later steps stay locked until you confirm the one in front of you. The same confirmation can be the on-screen control or a message in chat.

1. **Input.** Preview the detected acquisitions.
2. **Preprocessing.** Phase, baseline, reference and solvent. Already processed files skip this step. A peak list starts further along.
3. **Peak picking.** Signals on 1D spectra, correlations on 2D spectra.
4. **Identification.** A ranked shortlist, or an explicit result that no single structure is defensible, with the measurement to run next.

{% include screenshot.html file="results.png" caption="Identification shortlist" alt="Spectra identification result" %}

## Close the case

When a ranking is published, accept one candidate or reject it and say why. Spectra ranks and explains. The chemist decides.

## Example data

If you do not yet have a cleared spectrum, read the [sample analysis](/examples/sample-analysis/) to learn the review objects. Upload only files you are allowed to place in a hosted project.

{% include example-file.html %}

Next: [supported data](/docs/supported-data/).
