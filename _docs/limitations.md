---
title: Limitations
nav: Limitations
h1: Current limitations
description: Honest limits of Spectra — data coverage, identification risk, and what the product will not do.
permalink: /docs/limitations/
nav_order: 8
---

Read this page before using Spectra in a quality, regulatory, or publication setting.

## Data coverage

Spectra projects take 1H and 13C from Bruker, JEOL, Varian or JCAMP-DX, and can include HSQC, COSY, HMBC, TOCSY and NOESY in the same project. Other nuclei and undocumented vendor dialects are outside the current support matrix. A project that contains only 2D spectra still needs a 1H before a structure shortlist is a fair request.

1H alone, without formula, mass, 13C or 2D, can finish as an empty ranking with a recommended next experiment. That empty ranking is a result.

## Identification risk

Verification of a proposed structure is a different risk class from open-world identification. Dereplication can miss a new analogue. Impurity identification can fail when the impurity is below the quality of the 13C.

## Retrieval misses

Spectra cannot rank a molecule that is outside its search space. Novel structures need elucidation work, not only library retrieval.

## ROSE versus Spectra

ROSE research numbers are not Spectra product numbers.

## What Spectra does not do

Spectra does not replace chemists, guarantee an identification, run fully autonomous chemistry, or carry a regulatory certification.

## Deployment and validation

Private deployment and regulated-laboratory validation are enterprise conversations, not self-service features.
