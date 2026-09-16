---
layout: landing
title: Spectra by ROMBO AI
description: AI NMR compound identification software that ranks candidate structures from 1H and 13C data and returns traceable evidence for chemist review.
permalink: /
schema: software
---

{% include hero.html %}

{% include fact.html path="proof.benchmark_published" %}
{% assign bench_ok = fact_ok %}
{% include fact.html path="proof.customer_logos" %}
{% assign logos_ok = fact_ok %}
{% assign logos = fact_node.value %}
<section class="section proof-band" aria-label="Proof">
  <div class="wrap">
    <div class="trust-strip">
      {% if bench_ok %}
      <a href="{{ '/benchmark/' | relative_url }}">See the benchmark</a>
      {% endif %}
      <a href="{{ '/research/' | relative_url }}">Built on ROSE, our open 1H NMR foundation model</a>
      {% if logos_ok %}
        {% for logo in logos %}
        <span class="proof-logo">{{ logo.name }}</span>
        {% endfor %}
      {% endif %}
    </div>
  </div>
</section>

<section class="section" id="why-identification-stalls">
  <div class="wrap">
    <h2>Why identification stalls</h2>
    <div class="grid-3">
      <article class="card">
        <h3>Library hits that don't explain the carbons</h3>
        <p>A familiar name at the top of a search is not the same as a structure your 13C supports.</p>
      </article>
      <article class="card">
        <h3>Close analogues eat expert time</h3>
        <p>Separating isomers and analogues shift by shift is slow, and it is where senior spectroscopists spend their day.</p>
      </article>
      <article class="card">
        <h3>Decisions nobody can audit later</h3>
        <p>When the reasoning lives in someone's head, the next reviewer starts from zero.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-alt" id="how-it-works">
  <div class="wrap">
    <h2 class="section-kicker">How it works</h2>
    <ol class="steps">
      <li>
        <p class="step-num">01</p>
        <h3>Upload your spectra</h3>
        <p>1H and 13C from Bruker, JEOL, Varian or JCAMP-DX, exported the way you already do.</p>
      </li>
      <li>
        <p class="step-num">02</p>
        <h3>Retrieve candidates</h3>
        <p>Spectra searches large compound libraries{% include fact.html path="product.library_size" %}{% if fact_ok %} ({{ fact_node.value }}){% endif %} and ranks plausible structures.</p>
      </li>
      <li>
        <p class="step-num">03</p>
        <h3>Check every candidate against predicted shifts</h3>
        <p>{% include fact.html path="product.shift_predictor" %}{% if fact_ok %}Predicted with {{ fact_node.value }}. {% endif %}Candidates your data cannot support drop down or out.</p>
      </li>
      <li>
        <p class="step-num">04</p>
        <h3>Review the evidence and decide</h3>
        <p>Confirm, dereplicate, flag as unknown, or plan the next experiment.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section" id="features">
  <div class="wrap">
    <h2>What you get</h2>
    <div class="grid-3">
      <article class="card">
        <h3>A ranked shortlist</h3>
        <p>Ordered hypotheses with a match value, so attention starts where the data points.</p>
      </article>
      <article class="card">
        <h3>Shift-level evidence</h3>
        <p>13C RMSD and per-shift residuals make disagreements visible instead of hiding them in one score.</p>
      </article>
      <article class="card">
        <h3>Unexplained signals, made visible</h3>
        <p>Peaks no candidate accounts for are often the real story: an impurity, a second component, or a structure outside the library.</p>
      </article>
      {% include fact.html path="product.next_experiment_suggestion" %}
      {% if fact_ok %}
      <article class="card">
        <h3>A suggested next experiment</h3>
        <p>{{ fact_node.value }}</p>
      </article>
      {% endif %}
      {% include fact.html path="product.export_formats" %}
      {% if fact_ok %}
      <article class="card">
        <h3>An exportable record</h3>
        <p>Export as {{ fact_node.value }}.</p>
      </article>
      {% endif %}
      <article class="card">
        <h3>You make the call</h3>
        <p>Spectra ranks and explains. The chemist decides.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-alt" id="built-for">
  <div class="wrap">
    <h2>Built for</h2>
    <div class="grid-3">
      <article class="card">
        <h3><a href="{{ '/natural-products/' | relative_url }}">Natural products and ingredient labs</a></h3>
        <p>Dereplicate extracts and fractions before isolation.</p>
      </article>
      <article class="card">
        <h3><a href="{{ '/analytical-labs/' | relative_url }}">Analytical and contract labs</a></h3>
        <p>Verify proposed structures and rank impurity hypotheses.</p>
      </article>
      <article class="card">
        <h3><a href="{{ '/core-facilities/' | relative_url }}">NMR core facilities</a></h3>
        <p>Give every user a consistent, reviewable first pass.</p>
      </article>
    </div>
    <p class="mt-6"><a href="{{ '/use-cases/' | relative_url }}">All use cases</a></p>
  </div>
</section>

<section class="section" id="compatibility">
  <div class="wrap prose">
    <h2>Works with your current stack</h2>
    <p>Keep processing in TopSpin, Delta or Mnova. Export, upload to Spectra, and keep your validated methods unchanged. No plugin, no install.</p>
    <p><a href="{{ '/compare/existing-nmr-software/' | relative_url }}">How Spectra fits with existing NMR software</a></p>
  </div>
</section>

<section class="section section-alt" id="trust">
  <div class="wrap prose">
    <h2>How to trust a result</h2>
    <p>A high match with a low residual error is a strong reason to review a candidate, not a certificate. Spectra shows the match, the per-shift residuals and the signals nothing explains, so you can see why a candidate ranks where it does.{% include fact.html path="proof.benchmark_published" %}{% if fact_ok %} <a href="{{ '/benchmark/' | relative_url }}">See how Spectra performs on our benchmark</a>.{% endif %}</p>
    <p><a href="{{ '/docs/limitations/' | relative_url }}">Limitations</a></p>
  </div>
</section>

{% include fact.html path="data.training_use" %}
{% if fact_ok %}
{% assign training_val = fact_node.value %}
<section class="section" id="your-data">
  <div class="wrap prose">
    <h2>Your data</h2>
    <p>
      Your spectra are {{ training_val }}.
      {% include fact.html path="data.retention" %}{% if fact_ok %} Retained {{ fact_node.value }}.{% endif %}
      {% include fact.html path="data.hosting_region" %}{% if fact_ok %} Hosted in {{ fact_node.value }}.{% endif %}
    </p>
    <p><a href="{{ '/docs/data-handling/' | relative_url }}">Data handling</a></p>
  </div>
</section>
{% endif %}

<section class="section" id="research">
  <div class="wrap prose">
    <h2>Open research</h2>
    <p>Spectra builds on ROSE, a 1H NMR foundation model we released openly with code, weights and a preprint.{% include fact.html path="product.rose_role_in_product" %}{% if fact_ok %} {{ fact_node.value }}{% endif %}</p>
    <p>
      <a href="https://github.com/romboai/rose-1h-nmr" data-analytics="external_github_clicked">GitHub</a>
      ·
      <a href="https://huggingface.co/romboai/rose-1h-nmr" data-analytics="research_opened">Hugging Face</a>
      ·
      <a href="https://doi.org/10.26434/chemrxiv.15007823/v1" data-analytics="research_opened">ChemRxiv</a>
    </p>
  </div>
</section>

<section class="section cta-band" id="start">
  <div class="wrap cta-band-inner">
    <div>
      <h2>Start with a compound you already know.</h2>
      <p class="lede">Upload a spectrum whose structure you're sure of. If Spectra ranks it correctly and shows you why, try your next unknown.</p>
    </div>
    <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="home_footer" data-analytics="cta_click">Analyze a spectrum free</a>
  </div>
</section>
