---
title: Natural products and ingredient labs
h1: Stop re-isolating compounds that are already known.
description: Spectra checks your fractions' 1H and 13C data against large compound libraries, ranks known candidates with per-shift evidence, and flags the signals no known structure explains.
permalink: /natural-products/
eyebrow: Natural products
---

<p class="hero-actions">
  <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="np_hero" data-analytics="cta_click">Analyze a spectrum free</a>
  <a class="btn btn-secondary" href="{{ '/examples/sample-analysis/' | relative_url }}" data-analytics="sample_view">See a worked example</a>
</p>

## Target user

Natural-product and ingredient chemists working extracts, fractions and isolates from plants, microbes, marine sources or botanical ingredients.

## Specific problem

The interesting peak in a fraction is often a known scaffold or a close analogue. Isolation campaigns then spend weeks on a compound the 13C already supported.

## Existing workflow

LC-MS first, NMR after isolation. Known flavonols, flavones, terpenes and peptides still consume columns.

## Where time is lost

Isolating compounds a shift-level residual would have identified as known on day one. Close analogues (same formula, different substitution) are the slow cases.

## How Spectra helps

Upload 1H and 13C from a concentrated fraction. Spectra ranks known library members with per-shift evidence and leaves the unexplained signals visible, so you dereplicate before you isolate.

## Data typically required

Fraction 1H and, when possible, 13C; solvent; an organism or extract code you are allowed to share. A formula from MS is useful when you have it.

## Output

A ranked shortlist, 13C RMSD and per-shift residuals, and the peaks no candidate accounts for.

## Limitations

Glycosylation, tautomerism and overlapping aromatics in crude extracts will defeat a one-compound ranking. Spectra does not replace LC or bioassay.

## Recommended validation

Authentic standards for the top knowns. Isolation for residuals that survive that check.

## A teaching case

The public walkthrough uses three closely related flavonoids (two flavonols and a flavone) that share C15H10O6. The C-3 region is where 13C can separate luteolin from quercetin and kaempferol.

{% include sample-candidates.html id="flavonoids" %}

<p class="mt-6"><a href="{{ '/examples/sample-analysis/' | relative_url }}">Read the full sample analysis</a> · <a href="{{ '/use-cases/natural-products/' | relative_url }}">Natural-products use case</a> · <a href="{{ '/use-cases/dereplication/' | relative_url }}">Dereplication</a></p>
