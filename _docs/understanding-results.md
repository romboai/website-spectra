---
title: Understanding Spectra results
nav: Understanding results
h1: Understanding results
description: How to read a Spectra identification — ranked structures, accept and reject, and an empty result that names the next experiment.
permalink: /docs/understanding-results/
nav_order: 6
---

Identification publishes a ranking, or it publishes that no single structure is defensible. Both are results.

{% include screenshot.html file="shortlist.png" caption="Ranked candidates" alt="Spectra ranked identification candidates" %}

## Ranked candidates

Each candidate is a concrete structure with a name, a formula when one is known, and the evidence that supports or limits it. Rank is the order in which to review those hypotheses. It is not a probability that the top row is the molecule.

Carbon evidence cites peaks that are actually in the spectrum. Two-dimensional evidence cites correlations from the HSQC, COSY, HMBC, TOCSY or NOESY you uploaded. A fragment or a motif is not offered as a finished structure.

{% include screenshot.html file="per-shift.png" caption="Evidence behind a candidate" alt="Spectra candidate evidence" %}

## Accept or reject

When the ranking is complete, accept one candidate or reject it with a comment. Accept and reject stay unavailable while identification is still running.

Rejecting a candidate can start a new identification. The rejected structure and your comment stay with the project. A failed run is closed: the next attempt is a new run, not an edit of the failed one.

## No defensible structure

If the data cannot support one structure — often 1H alone, without formula, mass, 13C or 2D — Spectra can finish with an empty ranking. The result names what is still unresolved and which measurement to run next. That is a completed identification, not a crash.

## How to read a close call

Read match and residual error together when both are shown. A high match with a large 13C residual, or a mismatch on a distinctive carbon, is a reason to keep the analogue on the desk. Signals that no candidate explains are often the impurity, the second component, or the solvent.

{% include fact.html path="product.match_definition" %}
{% if fact_ok %}
## What the match value means

{{ fact_node.value }}
{% endif %}

See [evidence and confidence](/docs/evidence-and-confidence/).

## What you keep

Keep the project, the files you uploaded, the accepted or rejected candidate, and your comment together. Spectra holds that review. It does not replace your LIMS or ELN.
