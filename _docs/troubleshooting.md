---
title: Troubleshooting
nav: Troubleshooting
h1: Troubleshooting
description: Common Spectra access, upload and interpretation problems, and what to do when the shortlist looks wrong.
permalink: /docs/troubleshooting/
nav_order: 10
---

## I cannot sign in

Use [{{ site.app_url }}/login]({{ site.app_url }}/login). Try the same email, passkey or Google account you used at sign-up. If you are blocked, email [{{ site.contact_email }}](mailto:{{ site.contact_email }}).

## My file is rejected

Confirm the export is 1H, 13C, or one of HSQC, COSY, HMBC, TOCSY and NOESY, from Bruker, JEOL, Varian or JCAMP-DX. Upload it into the project file tree. A drop into the chat does not add the spectrum to the analysis. Re-export from the processing software rather than sending an unnamed binary. If the family is different, [contact us](/contact/).

## The next step stays locked

Each step waits for a confirmation: input, then preprocessing, then peak picking, then identification. A raw 2D file that still needs a processing recipe stops and asks for those fields. Identification stays locked until the 1D acquisitions in the project are complete.

## Identification finished with no structure

An empty ranking with a recommended next experiment is a completed result when 1H alone cannot separate a structure. Add 13C, a 2D experiment, a formula or a mass, then run identification again. A failed run is closed: start a new one rather than editing the failed result.

## The shortlist looks implausible

1. Check referencing and solvent.
2. Confirm you submitted both nuclei if you have them.
3. Re-read unexplained peaks — they may be the real story.
4. Decide whether the case is a mixture.
5. Compare 13C RMSD across the top analogues.

## Match is high but I do not believe it

Trust the residual error and the chemistry. A high match when the true molecule is outside the library is a known failure mode. See [evidence and confidence](/docs/evidence-and-confidence/).

## I need this for a regulated method

Open an [enterprise conversation](/contact/).
