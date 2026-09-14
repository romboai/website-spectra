---
title: Understanding Spectra results
nav: Understanding results
h1: Understanding results
description: How to read Spectra candidate ranking, match values, 13C RMSD, unexplained shifts and the review decision.
permalink: /docs/understanding-results/
nav_order: 6
---

The live homepage preview shows three objects worth learning: candidate name, match, and 13C RMSD.

## Candidate ranking

Rank is a sort order over hypotheses that survived retrieval and physics-guided comparison. It is not a posterior probability of “the” molecule.

## Assignments and explained peaks

Where the product shows shift-level evidence, read which observed signals are claimed by the candidate. Explained is not the same as uniquely explained.

## Unexplained peaks

Signals that no candidate accounts for are often the scientifically important part: an impurity, a second component, a solvent, or a wrong window. Do not ignore them because the top match looks familiar.

## Contradictions

A candidate with a large 13C RMSD, or a mismatch on a distinctive carbon, should fall even if the 1H looks plausible. Analogues such as flavonols in the public example are close in 1H and separate more clearly when 13C residual error is visible.

## Confidence and evidence score

Treat match and RMSD as complementary. High match plus low residual error is a stronger invitation to review, not a certificate. See [evidence and confidence](/docs/evidence-and-confidence/).

## Suggested next experiment

If several candidates remain close, the honest outcome is another measurement: cleaner 13C, a complementary 2D experiment the laboratory already runs, MS for formula, or isolation. The product should make that residual uncertainty visible.

## Traceable report

Keep the shortlist, the data versions, and your decision together. Spectra assists the record; it does not replace your LIMS or ELN.
