---
title: Natural products and ingredient labs
h1: Stop re-isolating compounds that are already known.
description: Spectra checks your fractions' 1H and 13C data against large compound libraries, ranks known candidates with per-shift evidence, and flags the signals no known structure explains.
permalink: /natural-products/
eyebrow: Operating context · Natural products
---

<p class="hero-actions">
  <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="np_hero" data-analytics="cta_click">Analyze a spectrum free</a>
  <a class="btn btn-secondary" href="{{ '/examples/sample-analysis/' | relative_url }}" data-analytics="sample_view">See a worked example</a>
</p>

<figure class="use-case-figure">
  <img src="{{ '/assets/docs/shortlist.png' | relative_url }}" alt="Spectra candidate shortlist comparing structural isomers">
  <figcaption>IN SPECTRA — Ranked candidate hypotheses with compatibility scores and shift-level justification.</figcaption>
</figure>

## Protect isolation capacity from known scaffolds

In botanical, microbial, marine, and natural-ingredient laboratories, preparative chromatography and NMR time are the scarce resources. When an active or abundant fraction enters the queue, the team needs to know quickly whether the main spin system belongs to a known library compound or a genuinely new analogue.

Exact-match database searches often fail across different solvents or slightly impure fractions, pushing teams to isolate compounds that turn out to be ubiquitous flavonols, terpenes, coumarins, or fatty-acid remnants.

## How extraction and isolation teams use Spectra

1. **Screen concentrated fractions before final purification** — Export 1H and 13C data from TopSpin, Delta, or Mnova and add the solvent plus any MS molecular formula.
2. **Review knowns and structural neighbours together** — Spectra ranks candidate structures and displays 13C RMSD and per-shift residuals so chemists can see whether the carbon skeleton matches a known compound or diverges at a specific position.
3. **Keep a shared record across fractions** — Record which fractions were set aside as dereplicated knowns and which were promoted to preparative isolation because their residual peaks remained unexplained.

## A teaching case: three flavonoids, one formula

The public walkthrough (`CASE-2043`) shows how Spectra presents three closely related flavonoids (two flavonols and a flavone) that share `C15H10O6`. The C-3 region is where 13C separates luteolin from quercetin and kaempferol.

{% include sample-candidates.html id="flavonoids" %}

## Where Spectra fits — and where it stops

- **Best fit**: Enriched fractions and isolates where 1H and 13C resonances of the major component can be resolved.
- **Out of scope**: Crude extracts with heavy aromatic or glycosidic overlap, bioassay replacement, or automated novelty certification. Always verify dereplicated hits against authentic standards when available.

<p class="mt-6"><a href="{{ '/examples/sample-analysis/' | relative_url }}">Read the full sample analysis</a> · <a href="{{ '/use-cases/dereplication/' | relative_url }}">NMR dereplication workflow</a> · <a href="{{ '/use-cases/natural-products/' | relative_url }}">Analogue ranking use case</a></p>
