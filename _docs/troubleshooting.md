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

Confirm the export is 1H or 13C from Bruker, JEOL, Varian or JCAMP-DX. Re-export from the processing software rather than sending an unnamed binary. If the family is different, [contact us](/contact/).

## The shortlist looks implausible

1. Check referencing and solvent.
2. Confirm you submitted both nuclei if you have them.
3. Re-read unexplained peaks — they may be the real story.
4. Decide whether the case is a mixture.
5. Compare 13C RMSD across the top analogues.

## Match is high but I do not believe it

Trust the residual error and the chemistry. A high match when the true molecule is outside the library is a known failure mode. See [evidence and confidence](/docs/evidence-and-confidence/).

## I need this for a regulated method

Spectra is a public alpha. Open an [enterprise conversation](/pilot/).
