---
title: NMR compound verification
h1: NMR compound verification
description: Use Spectra to test whether 1H and 13C data support a proposed structure before you treat the identity as closed.
permalink: /use-cases/compound-verification/
---

## Target user

A chemist who already has a proposed structure — a synthetic target, a purchased standard, or a literature assignment — and needs to know whether the NMR in hand actually supports it.

## Specific problem

Verification looks easy until two analogues share a 1H pattern. The time sink is not drawing the molecule; it is proving that the observed carbons and protons belong to that molecule and not to a close isomer.

## Existing workflow

Most laboratories process in TopSpin or Mnova, compare to a predicted or reference spectrum, and argue in a notebook. The argument is often hard to hand to a colleague at 6 p.m.

## Where time is lost

Re-predicting shifts in one tool, searching a library in another, and writing the discrepancy list by hand. Fatigue errors appear on the fourth spectrum of the night.

## How Spectra assists

Spectra takes the proposed-structure job as **verification**: retrieve nearby candidates, compare predicted and measured shifts, and show which alternatives still fit. You keep the right to reject the top rank.

## Data typically required

1H and 13C, solvent, field, and the proposed structure. A formula helps when analogues differ by oxygen count.

## Resulting output

A shortlist in which the proposed structure should appear near the top **if** the data support it, plus residual error that shows whether a neighbour is still viable.

## Limitations

Verification cannot create missing 13C. If the proposed molecule is wrong and the correct one is absent from the library, you will see a poor residual or a confident wrong neighbour.

## Recommended validation

Compare the shortlist to your independent prediction or reference spectrum. Record unexplained peaks. Do not mark a batch as identity-confirmed on rank alone.

Related: [running an analysis](/docs/running-an-analysis/), [sample analysis](/examples/sample-analysis/).
