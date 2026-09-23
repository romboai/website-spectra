---
layout: landing
title: Spectra by ROMBO AI
description: AI NMR compound identification software that ranks candidate structures from 1H and 13C data and returns traceable evidence for chemist review.
permalink: /
schema: software
---

{% include hero.html %}

<section class="section section-alt" id="how-it-works">
  <div class="wrap">
    <div class="section-heading">
      <p class="eyebrow">A practical second pair of eyes</p>
      <h2>Built around the way NMR operators already work.</h2>
      <p>Keep acquisition and processing in your current software. Use Spectra for the identification step that comes after.</p>
    </div>
    <ol class="steps">
      <li>
        <p class="step-num">01</p>
        <h3>Export</h3>
        <p>Prepare 1H and 13C data from TopSpin, Delta, Mnova, or your existing workflow.</p>
      </li>
      <li>
        <p class="step-num">02</p>
        <h3>Upload</h3>
        <p>Add the spectra and context. No plug-in and no change to your validated acquisition method.</p>
      </li>
      <li>
        <p class="step-num">03</p>
        <h3>Compare</h3>
        <p>Inspect ranked candidates, 13C residuals, per-shift evidence, and signals left unexplained.</p>
      </li>
      <li>
        <p class="step-num">04</p>
        <h3>Decide</h3>
        <p>Confirm, reject, flag an unknown, or choose the next experiment. You remain in control.</p>
      </li>
    </ol>
  </div>
</section>

<section class="section" id="features">
  <div class="wrap">
    <div class="section-heading">
      <p class="eyebrow">Evidence, not a black box</p>
      <h2>Everything needed to review the answer.</h2>
    </div>
    <div class="grid-3">
      <article class="card">
        <p class="card-index">01 / RANK</p>
        <h3>Ranked candidates</h3>
        <p>Start with the structures that best fit the experimental evidence.</p>
      </article>
      <article class="card">
        <p class="card-index">02 / INSPECT</p>
        <h3>Shift-level evidence</h3>
        <p>See 13C RMSD and residuals instead of trusting one opaque score.</p>
      </article>
      <article class="card">
        <p class="card-index">03 / QUESTION</p>
        <h3>Unexplained signals</h3>
        <p>Spot a likely impurity, second component, or structure outside the library.</p>
      </article>
    </div>
    <p class="section-link"><a href="{{ '/examples/sample-analysis/' | relative_url }}">Open a worked analysis <span aria-hidden="true">→</span></a></p>
  </div>
</section>

<section class="section section-alt" id="built-for">
  <div class="wrap">
    <div class="section-heading">
      <p class="eyebrow">For real NMR workloads</p>
      <h2>Choose your operating context.</h2>
    </div>
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

<section class="section" id="pricing-preview">
  <div class="wrap purchase-grid">
    <div class="purchase-intro">
      <p class="eyebrow">Simple purchasing</p>
      <h2>Try it free. Buy it when it earns a place in your workflow.</h2>
      <p>No sales call for an individual subscription. Teams can request procurement and deployment terms.</p>
      <a class="text-link" href="{{ '/pricing/' | relative_url }}">Compare all plan details →</a>
    </div>
    <article class="price-card price-card-featured">
      <p class="card-index">INDIVIDUAL</p>
      <h3>Pro</h3>
      <p class="price"><strong>€79</strong><span>/ month</span></p>
      <p>20 analyses each month, advanced models, higher-accuracy algorithms, and physics-guided ranking.</p>
      <a class="btn btn-primary btn-block" href="{{ site.app_url }}/login" data-cta-src="home_pricing_pro" data-analytics="plan_cta_click" data-plan="pro">Get Pro <span aria-hidden="true">→</span></a>
      <small>Or €790 billed yearly. Sign in to purchase.</small>
    </article>
    <article class="price-card">
      <p class="card-index">LAB / TEAM</p>
      <h3>Enterprise</h3>
      <p class="price"><strong>Custom</strong></p>
      <p>Shared workspace, custom team size, and a commercial path for procurement requirements.</p>
      <a class="btn btn-secondary btn-block" href="{{ '/contact/' | relative_url }}" data-cta-src="home_pricing_enterprise">Talk to sales</a>
      <small>For pharmaceutical R&amp;D, core facilities, and contract labs.</small>
    </article>
  </div>
</section>

<section class="section" id="compatibility">
  <div class="wrap prose">
    <h2>Works with your current stack</h2>
    <p>Keep processing in TopSpin, Delta or Mnova. Export, upload to Spectra, and keep your validated methods unchanged. No plugin, no install.</p>
    <p><a href="{{ '/compare/existing-nmr-software/' | relative_url }}">How Spectra fits with existing NMR software</a> · <a href="{{ '/docs/supported-data/' | relative_url }}">Supported data</a></p>
  </div>
</section>

<section class="section section-alt" id="trust">
  <div class="wrap prose">
    <h2>How to trust a result</h2>
    <p>A high match with a low residual error is a strong reason to review a candidate, not a certificate. Spectra shows the match, the per-shift residuals and the signals nothing explains, so you can see why a candidate ranks where it does.{% include fact.html path="proof.benchmark_published" %}{% if fact_ok %} <a href="{{ '/benchmark/' | relative_url }}">See how Spectra performs on our benchmark</a>.{% endif %}</p>
    <p><a href="{{ '/docs/limitations/' | relative_url }}">Limitations</a></p>
  </div>
</section>

<section class="section" id="your-data">
  <div class="wrap prose">
    <h2>Your data</h2>
    <p>Sign in before you upload. Client samples and unpublished structures need data-processing terms first: where the files are hosted, how long they are kept, whether they train models, and how you delete them.</p>
    {% include fact.html path="data.training_use" %}
    {% if fact_ok %}
    <p>
      Your spectra are {{ fact_node.value }}.
      {% include fact.html path="data.retention" %}{% if fact_ok %} Retained {{ fact_node.value }}.{% endif %}
      {% include fact.html path="data.hosting_region" %}{% if fact_ok %} Hosted in {{ fact_node.value }}.{% endif %}
    </p>
    {% endif %}
    <p><a href="{{ '/security/' | relative_url }}">Security</a> · <a href="{{ '/docs/data-handling/' | relative_url }}">Data handling</a></p>
  </div>
</section>

<section class="section section-alt" id="research">
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
      <p class="eyebrow">A low-risk first run</p>
      <h2>Start with a compound you already know.</h2>
      <p class="lede">Use one of your three free analyses. If Spectra ranks it correctly and makes the evidence clear, move on to your next unknown.</p>
    </div>
    <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="home_footer" data-analytics="cta_click">Run a free analysis <span aria-hidden="true">→</span></a>
  </div>
</section>
