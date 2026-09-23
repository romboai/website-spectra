---
title: Troubleshooting
nav: Troubleshooting
h1: Troubleshooting
description: Common Spectra access, upload and interpretation problems, and what to do when the shortlist looks wrong.
permalink: /docs/troubleshooting/
nav_order: 10
---

First identify where the problem occurs: sign-in, upload, a confirmation gate, execution, or interpretation of a completed result. A locked step or an empty ranking is not, by itself, evidence that execution failed.

## I cannot sign in

1. Open [{{ site.app_url }}/login]({{ site.app_url }}/login).
2. Use the same sign-in method and account you used at sign-up: email, passkey or Google.
3. If access is still blocked, note the error shown and the steps that led to it, then email [{{ site.contact_email }}](mailto:{{ site.contact_email }}). Follow the [support checklist](#before-contacting-support); never send passwords or sign-in codes.

## My file is rejected

1. Check the experiment type: 1H, 13C, HSQC, COSY, HMBC, TOCSY or NOESY. Check the source family against [supported data](/docs/supported-data/): Bruker, JEOL, Varian or JCAMP-DX. A listed vendor family does not establish support for every export dialect.
2. Upload into the project file tree. A file dropped into chat is a message attachment and does not add a spectrum to the analysis.
3. Compare the detected acquisitions with what you intended to upload. If a file is rejected or an acquisition is missing, record any error before trying again.
4. Re-export from your processing software in a documented supported family rather than sending an unnamed binary. Check the export and its metadata using [preparing NMR data](/docs/preparing-nmr-data/).

If the family is different, the export dialect is undocumented, or the problem persists, [contact us](/contact/) with the non-sensitive details in the [support checklist](#before-contacting-support). Do not confirm input until the preview matches the intended data.

## The next step stays locked

Check the current stage before trying to advance:

- **Input:** review the detected acquisitions and metadata, then confirm input. This authorizes preprocessing only.
- **Preprocessing:** review the processed spectrum and quality notes before confirming it for peak picking. Already processed spectra skip preprocessing but still need review. Imported correlation lists skip the processed-matrix path.
- **Missing raw 2D recipe:** supply the fields Spectra requests from your acquisition or processing records. This is a request for information, not a reason to guess processing values.
- **Peak picking:** check that the 1D acquisitions in the project are complete, then review and confirm the peak list. Identification remains locked until those acquisitions are complete.
- **Identification running:** wait for completion before accepting or rejecting a candidate; those actions are unavailable while it runs.

Chat and on-screen controls use the same confirmation gates. Asking in chat to advance does not bypass the next review. See [running an analysis](/docs/running-an-analysis/) for what to check at each gate. If the required review and confirmation are complete but the next step remains locked, record the current stage and any message for support.

## Identification finished with no structure

An empty ranking that explains what remains unresolved and recommends a next experiment is a completed, inconclusive identification—not a failed execution. This can happen when 1H alone cannot distinguish a structure.

Read the unresolved evidence and recommended measurement first. Add relevant 13C or 2D data, a known formula, or exact mass when available, then run identification again. Enter only context supported by your records: additional data can reduce ambiguity, but it cannot guarantee an identification. See [understanding results](/docs/understanding-results/) and [current limitations](/docs/limitations/).

## The run failed

Treat an explicit failure separately from an inconclusive result. Before retrying:

1. Record the stage, the error message and what you did immediately before the failure.
2. Check whether the message points to an input or processing problem. Review the upload, metadata and requested processing fields using the checks above.
3. Address any identified cause before starting a new run. A failed run is closed: the next attempt is a new run, not an edit of the failed result.

If the cause is unclear or the failure repeats, use the [support checklist](#before-contacting-support) rather than repeatedly submitting the same data without a change.

## The shortlist looks implausible

1. Check referencing, solvent, phasing and baseline against the spectrum and acquisition records. See [preparing NMR data](/docs/preparing-nmr-data/).
2. Confirm that both 1H and 13C were submitted and detected if you have both. Check that any supplied 2D acquisitions belong to the same sample.
3. Compare unexplained peaks with the original spectrum. Consider solvent, water, impurities and overlap instead of dismissing signals that do not fit a candidate.
4. Reconsider whether the sample is a mixture; a one-compound ranking may not explain all components.
5. When 13C RMSD is shown, compare it across the top analogues and inspect mismatches on distinctive carbons. Review individual evidence, not just rank.

Do not accept a candidate while material contradictions remain. Once identification is complete, you can reject a candidate with a comment explaining the mismatch; rejection can start a new identification. See [understanding results](/docs/understanding-results/).

## Match is high but I do not believe it

Read match and residual error together when both are shown, and check whether the chemistry fits the measured evidence. A high match is not a probability of identity or a substitute for review. The top candidate can still look convincing when the true molecule is outside the searchable space.

If residuals remain large or the data cannot separate close analogues, abstain from accepting a structure and seek further evidence or review by a senior spectroscopist. See [evidence and confidence](/docs/evidence-and-confidence/).

## I need this for a regulated method

Do not treat a shortlist as regulatory validation. Spectra does not carry a regulatory certification, and regulated-laboratory validation is not a self-service feature. Read [current limitations](/docs/limitations/) and open an [enterprise conversation](/contact/) about the intended use and validation requirements.

## Before contacting support

Email [{{ site.contact_email }}](mailto:{{ site.contact_email }}) or use [contact](/contact/) to describe the issue. Start with the minimum non-sensitive information needed:

- The stage affected and what you expected versus what happened.
- The steps to reproduce it, including whether you used a workspace control or chat.
- The error text, if any, with confidential details removed, and the approximate time and time zone.
- For data issues: the vendor or exchange family, export software if known, experiment types, and whether the input was raw data, processed spectra or a correlation list. Include relevant metadata only if it is safe to share.
- The checks or retries already performed and what changed.
- For sign-in or display issues: the browser and operating system, without credentials or session details.

Do not send passwords, sign-in codes, authentication tokens or session cookies. If a screenshot helps, crop or redact sample names, structures, spectra, project identifiers and personal information that are not needed to explain the issue.

Do not attach client or unpublished spectra, raw datasets or confidential project content to the initial enquiry. The marketing contact form is for the enquiry, not the dataset. If support needs an example, first agree what may be shared and how; use a non-sensitive example where possible. Review [data handling](/docs/data-handling/) and [security](/security/) before sharing sensitive material.
