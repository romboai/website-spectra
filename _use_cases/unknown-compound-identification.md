---
title: Unknown compound identification
h1: Unknown compound identification
slug: unknown-compound-identification
description: Produce a defensible NMR shortlist when no structure is assumed, keeping shift residuals and unexplained signals visible.
permalink: /use-cases/unknown-compound-identification/
starting_point: Unassigned 1H and 13C dataset with no proposed structure
typical_input: 1H and 13C, solvent, field, plus MS formula or exact mass when available
spectra_output: Ranked candidate shortlist, 13C RMSD, shift-by-shift evidence, and unexplained peaks
chemist_call: Test top candidates, acquire targeted 2D, or flag as unknown
limitations_summary: If the true molecule is absent from the searchable space, retrieval cannot surface it. Spectra does not perform guaranteed de novo structure elucidation from first principles; when candidates carry large residuals, flagging the sample as unknown is the correct outcome.
validation_summary: Check top candidates with independent shift prediction, complementary 2D experiments (HSQC, HMBC, COSY), and MS. A second chemist should be able to challenge or reject the top rank from the evidence file alone.
---

## Who this job is for and why it stalls

Analytical chemists facing a sample labelled *unknown* — an unlabelled vial, an unexpected isolated peak, or a customer investigation — start without a proposed structure. Retrieval has to propose candidates before verification can even begin.

Full elucidation from scratch takes 1H, 13C, 2D experiments, MS, and hours of senior spectroscopist time. Often the first day goes into drawing candidate structures before data quality is checked, or sifting through large database hit lists without a clear physics-based rule to discard poor fits.

## How the Spectra workflow runs

1. **Load 1H and 13C with experimental context** — Provide both 1H and 13C spectra, solvent, and field strength. Do not start open-world identification on 1H alone if 13C can still be acquired. Adding an MS-derived formula or mass constraint narrows retrieval substantially.
2. **Retrieve and filter by shift physics** — Spectra retrieves candidate structures and validates predicted shifts against your measured resonances, dropping candidates that the carbon skeleton cannot support.
3. **Compare surviving candidates side by side** — Inspect the shortlist (`for review`), comparing match scores, 13C RMSD, and the exact atoms where candidates diverge.
4. **Decide the next experimental step** — Confirm a candidate against a standard, choose the specific 2D correlation that separates rank 1 from rank 2, or **flag the sample as unknown** when residuals stay high.

## Worked teaching example: CASE-2043

The public walkthrough (`CASE-2043`, unknown in DMSO-d6 at 600 MHz) illustrates this workflow in miniature: three closely related C15H10O6 flavonoids — quercetin (match 0.94, 13C RMSD 1.8 ppm), luteolin (0.71, 3.4 ppm), and kaempferol (0.66, 4.1 ppm) — stay visible on the shortlist so the chemist can inspect the C-3 region before closing the case.

Related: [open the CASE-2043 sample analysis](/examples/sample-analysis/), [evidence and confidence](/docs/evidence-and-confidence/), [limitations](/docs/limitations/).
