---
title: NMR use cases
h1: Spectra use cases
description: Six distinct NMR workflows Spectra assists — compound verification, dereplication, unknown identification, impurity hypotheses, natural products, and metabolites.
permalink: /use-cases/
eyebrow: Use cases
wide: true
---

Spectra sits after acquisition and processing in TopSpin, Delta, or Mnova. Choose the analytical job that matches what is on your bench today: whether you are testing a proposed structure, screening an extract before isolation, or investigating unassigned peaks.

<ol class="steps use-case-grid mt-6">
{% for item in site.data.use_cases %}
<li>
  {% capture step_num %}{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}{% endcapture %}
  <div class="use-case-head">
    <p class="step-num">{{ step_num }}</p>
    {% if item.category %}<span class="use-case-tag">{{ item.category }}</span>{% endif %}
  </div>
  <h2><a href="{{ item.path | relative_url }}">{{ item.title }}</a></h2>
  {% if item.image %}
  <a class="use-case-thumb" href="{{ item.path | relative_url }}" tabindex="-1" aria-hidden="true">
    <img src="{{ item.image | relative_url }}" alt="{{ item.title }} schematic" loading="lazy">
  </a>
  {% endif %}
  <p>{{ item.summary }}</p>
  <dl class="use-case-meta">
    <div>
      <dt>Input</dt>
      <dd>{{ item.input }}</dd>
    </div>
    <div>
      <dt>Output</dt>
      <dd>{{ item.output }}</dd>
    </div>
    <div>
      <dt>Call</dt>
      <dd>{{ item.decision }}</dd>
    </div>
  </dl>
  <p class="use-case-link"><a href="{{ item.path | relative_url }}">Open workflow <span aria-hidden="true">→</span></a></p>
</li>
{% endfor %}
</ol>

<hr>

## Inside the Spectra review interface

Every use case follows the same transparent progression: upload your 1H and 13C dataset with optional chemical context, inspect peak picking, and review ranked structure hypotheses with matched versus unmatched evidence.

<div class="grid-3 mt-6">
  <figure class="use-case-figure">
    <img src="{{ '/assets/docs/context.png' | relative_url }}" alt="Spectra optional chemical context dialog showing formula, exact mass, solvent, and expected structure" loading="lazy">
    <figcaption>01 / CONTEXT — Supply optional formula, exact mass, solvent, or an expected structure before reasoning begins.</figcaption>
  </figure>
  <figure class="use-case-figure">
    <img src="{{ '/assets/docs/peaks.png' | relative_url }}" alt="Spectra interactive 1H peak-picked spectrum and signal table" loading="lazy">
    <figcaption>02 / PEAK PICKING — Inspect detected chemical shifts, multiplicities, and normalized integrals on the spectrum.</figcaption>
  </figure>
  <figure class="use-case-figure">
    <img src="{{ '/assets/docs/per-shift.png' | relative_url }}" alt="Spectra candidate review showing matched and unmatched shift evidence" loading="lazy">
    <figcaption>03 / SHIFT EVIDENCE — Review matched and unmatched evidence cards before accepting or rejecting a hypothesis.</figcaption>
  </figure>
</div>

<hr>

## Choose by starting point

Not every NMR question starts with the same evidence. Use this table to pick the right workflow and see what Spectra expects.

<div class="compare-table-wrap mt-6">
  <table>
    <thead>
      <tr>
        <th scope="col">What you have in hand</th>
        <th scope="col">Primary job</th>
        <th scope="col">Minimum recommended NMR</th>
        <th scope="col">What makes a run successful</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">A proposed structure from synthesis, vendor, or literature</th>
        <td><a href="{{ '/use-cases/compound-verification/' | relative_url }}">Compound verification</a></td>
        <td>1H + 13C, solvent, field</td>
        <td>Seeing whether the proposed structure ranks with low 13C residuals — or whether a close isomer still competes.</td>
      </tr>
      <tr>
        <th scope="row">An unassigned sample with no assumed structure</th>
        <td><a href="{{ '/use-cases/unknown-compound-identification/' | relative_url }}">Unknown identification</a></td>
        <td>1H + 13C (plus formula/MS when available)</td>
        <td>Getting a reviewable shortlist — or flagging the sample as unknown when the data cannot separate candidates.</td>
      </tr>
      <tr>
        <th scope="row">Unexpected minor peaks beside a known major component</th>
        <td><a href="{{ '/use-cases/impurity-identification/' | relative_url }}">Impurity identification</a></td>
        <td>Mixture or enriched-cut 1H + 13C, known parent</td>
        <td>Narrowing extra peaks to two or three chemically credible hypotheses to spike or isolate.</td>
      </tr>
      <tr>
        <th scope="row">A crude or semi-pure extract with recurring signals</th>
        <td><a href="{{ '/use-cases/dereplication/' | relative_url }}">Dereplication</a></td>
        <td>1H at minimum; 13C on concentrated fractions</td>
        <td>Stopping isolation early when a component matches a known scaffold with small shift residuals.</td>
      </tr>
      <tr>
        <th scope="row">Enriched botanical, microbial, or marine fractions</th>
        <td><a href="{{ '/use-cases/natural-products/' | relative_url }}">Natural-products research</a></td>
        <td>Fraction 1H + 13C, solvent, optional MS formula</td>
        <td>Separating known scaffold members from analogues whose 13C shifts justify preparative chromatography.</td>
      </tr>
      <tr>
        <th scope="row">Isolated or enriched metabolite from an incubation or biofluid</th>
        <td><a href="{{ '/use-cases/metabolite-identification/' | relative_url }}">Metabolite identification</a></td>
        <td>Enriched 1H + 13C, parent structure</td>
        <td>Ranking phase I/II or endogenous candidates while keeping unexplained conjugate signals visible.</td>
      </tr>
    </tbody>
  </table>
</div>

<hr>

## By laboratory environment

If you are evaluating Spectra for a team or facility rather than a single spectrum, see how it fits your operating context:

<div class="grid-3 mt-6">
  <article class="card">
    <p class="card-index">01 / EXTRACT &amp; ISOLATION TEAMS</p>
    <h3><a href="{{ '/natural-products/' | relative_url }}">Natural products and ingredient labs →</a></h3>
    <p>Dereplicate fractions before preparative isolation and focus column time on genuine structural novelty.</p>
  </article>
  <article class="card">
    <p class="card-index">02 / CRO, CDMO &amp; R&amp;D ANALYTICAL</p>
    <h3><a href="{{ '/analytical-labs/' | relative_url }}">Analytical and contract labs →</a></h3>
    <p>Give reviewers a traceable first pass on structure verification and impurity hypotheses.</p>
  </article>
  <article class="card">
    <p class="card-index">03 / SHARED INSTRUMENTATION</p>
    <h3><a href="{{ '/core-facilities/' | relative_url }}">NMR core facilities →</a></h3>
    <p>Standardize the pre-consultation check across non-specialist users before they book staff time.</p>
  </article>
</div>

<div class="mt-6">
  {% include cta.html src="use_cases_hub" primary_label="Analyze a spectrum free" secondary_href="/examples/sample-analysis/" secondary_label="See a worked example" %}
</div>
