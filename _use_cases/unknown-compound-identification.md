---
title: Unknown compound identification
h1: Unknown compound identification
description: Produce a defensible NMR shortlist when the identity is not assumed, and keep residual uncertainty visible.
permalink: /use-cases/unknown-compound-identification/
---

## Target user

Analytical chemists facing a sample labelled unknown — a retrieved vial, a customer complaint, or a peak that survived every standard.

## Specific problem

There is no proposed structure. Retrieval must propose one. That is the highest-risk Spectra job: the model can return a tidy analogue of the wrong family.

## Existing workflow

Full elucidation: 1H, 13C, 2D, MS, and a spectroscopist. Days to weeks. The first day is often wasted on an unstated solvent or a mixture.

## Where time is lost

Drawing structures before the data quality is known. Generating large candidate lists without a discard rule.

## How Spectra assists

The public workflow is built for this case: load 1H and 13C, retrieve, discard what physics cannot support, review shift by shift, then confirm, dereplicate or **flag an unknown**. Flagging is a success if the data are insufficient.

## Data typically required

1H and 13C, solvent, field. Formula or MS if the unknown has a mass. Do not start open-world identification on 1H alone if 13C can still be acquired.

## Resulting output

A shortlist plus an explicit residual. The CASE-2043 teaching example is this job in miniature: three closely related flavonoids (two flavonols and a flavone), ranked, still “for review”.

## Limitations

If the molecule is absent from the searchable space, Spectra cannot retrieve it. Elucidation from first principles is then the correct path. Spectra does not complete de novo structure elucidation as a guaranteed capability.

## Recommended validation

Independent prediction, complementary 2D experiments the lab already trusts, and MS. A second chemist should be able to reject the top rank from the evidence file alone.

Related: [limitations](/docs/limitations/).
