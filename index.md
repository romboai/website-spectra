---
layout: landing
title: Spectra by ROMBO AI
description: AI NMR compound identification software that ranks candidate structures from 1H and 13C data and returns traceable evidence for chemist review.
permalink: /
schema: software
---

{% include hero.html %}

<section class="section" id="how-it-works">
  <div class="wrap">
    <h2 class="section-kicker">How it works</h2>
    <ol class="steps">
      <li>
        <p class="step-num">01</p>
        <h3>Load your spectrum</h3>
        <p>Bring raw 1H and 13C data from Bruker, JEOL, Varian or JCAMP-DX.</p>
      </li>
      <li>
        <p class="step-num">02</p>
        <h3>Retrieve candidates</h3>
        <p>Search large-scale compound libraries and rank plausible structures with foundation models.</p>
      </li>
      <li>
        <p class="step-num">03</p>
        <h3>Validate against physics</h3>
        <p>Compare predicted and measured shifts to discard candidates the data cannot support.</p>
      </li>
      <li>
        <p class="step-num">04</p>
        <h3>Review the evidence</h3>
        <p>Follow the reasoning shift by shift, then confirm, dereplicate or flag an unknown.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section section-alt" id="features">
  <div class="wrap">
    <h2>What you receive</h2>
    <p class="lede">A shortlist is useful only if it can be inspected. The preview shows the kind of objects a chemist reviews.</p>
    <div class="grid-3">
      <article class="card">
        <h3>Ranked candidate shortlist</h3>
        <p>Ordered hypotheses with a match value so attention starts on the structures the data can actually support.</p>
      </article>
      <article class="card">
        <h3>Shift-level residual error</h3>
        <p>13C RMSD and evidence per shift make disagreements visible instead of hiding them in a single score.</p>
      </article>
      <article class="card">
        <h3>An explicit review state</h3>
        <p>The chemist confirms a known, dereplicates a mixture component, or flags an unknown. Spectra does not close the case.</p>
      </article>
    </div>
    <p class="mt-6"><a href="{{ '/examples/sample-analysis/' | relative_url }}" data-analytics="sample_analysis_opened">Read the annotated sample analysis</a> or the <a href="{{ '/docs/understanding-results/' | relative_url }}">results guide</a>.</p>
  </div>
</section>

<section class="section" id="use-cases">
  <div class="wrap">
    <h2 class="section-kicker">Use cases</h2>
    <ol class="steps use-case-grid">
      {% for item in site.data.use_cases %}
      <li>
        {% capture step_num %}{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}{% endcapture %}
        <p class="step-num">{{ step_num }}</p>
        <h3><a href="{{ item.path | relative_url }}">{{ item.title }}</a></h3>
        <p>{{ item.summary }}</p>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section section-alt" id="compatibility">
  <div class="wrap prose">
    <h2>Compatible with the instruments and software you already use</h2>
    <p>Spectra is intended to sit after acquisition and processing, not instead of them. It accepts Bruker, JEOL, Varian and JCAMP-DX spectra. That is workflow compatibility, not a certified connector to TopSpin, Mnova, Delta or ACD/Labs.</p>
    <p><a href="{{ '/compare/existing-nmr-software/' | relative_url }}">How Spectra fits with existing NMR software</a> · <a href="{{ '/docs/supported-data/' | relative_url }}">Supported data</a></p>
  </div>
</section>

<section class="section" id="research">
  <div class="wrap">
    <h2>Research and methodology</h2>
    <p class="lede">Spectra is the commercial product. ROSE is a public 1H NMR foundation model. Do not treat ROSE paper metrics as Spectra product accuracy.</p>
    <div class="grid-2">
      {% for item in site.data.external_resources.research %}
      <a class="card resource-card" href="{{ item.url }}" data-analytics="research_opened">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </a>
      {% endfor %}
    </div>
    <p class="mt-6"><a href="{{ '/research/' | relative_url }}" data-analytics="research_opened">Citation, model cards and the product versus research distinction</a></p>
  </div>
</section>

<section class="section cta-band" id="beta">
  <div class="wrap cta-band-inner">
    <h2>Ready to identify your next unknown?</h2>
    <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="home_footer" data-analytics="try_spectra_clicked" aria-label="Try Spectra">Try</a>
  </div>
</section>
