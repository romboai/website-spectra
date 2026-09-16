---
title: Understanding Spectra results
nav: Understanding results
h1: Understanding results
description: How to read Spectra candidate ranking, match values, 13C RMSD, unexplained shifts and the review decision.
permalink: /docs/understanding-results/
nav_order: 6
---

Three objects to learn first: candidate name, match, and 13C RMSD.

{% include screenshot.html file="shortlist.png" caption="Ranked shortlist" alt="Spectra ranked shortlist" %}

## Candidate ranking

Rank is a sort order over hypotheses that survived retrieval and physics-guided comparison. It is not a posterior probability of “the” molecule.

## Assignments and explained peaks

Read which observed signals are claimed by the candidate. Explained is not the same as uniquely explained.

{% include screenshot.html file="per-shift.png" caption="Per-shift residuals" alt="Spectra per-shift evidence view" %}

## Unexplained peaks

Signals that no candidate accounts for are often the scientifically important part: an impurity, a second component, a solvent, or a wrong window.

## Contradictions

A candidate with a large 13C RMSD, or a mismatch on a distinctive carbon, should fall even if the 1H looks plausible. Close flavonoids in the teaching example separate more clearly when 13C residual error is visible.

{% include fact.html path="product.match_definition" %}
{% if fact_ok %}
## What the match value means

{{ fact_node.value }}
{% endif %}

## Confidence and evidence score

Treat match and RMSD as complementary. High match plus low residual error is a stronger invitation to review, not a certificate. See [evidence and confidence](/docs/evidence-and-confidence/).

## Suggested next experiment

If several candidates remain close, the honest outcome is another measurement: cleaner 13C, a complementary 2D experiment the laboratory already runs, MS for formula, or isolation.

## Traceable report

Keep the shortlist, the data versions, and your decision together. Spectra assists the record; it does not replace your LIMS or ELN.
