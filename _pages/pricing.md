---
layout: landing
title: Pricing and access
description: Spectra plans — Free with 3 analyses, Pro at €79 per month or €790 per year, Lab at €299 per month for 5 users, and custom Enterprise.
permalink: /pricing/
schema: software
redirect_from:
  - /access/
---

<section class="section hero-band" aria-labelledby="pricing-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Pricing</p>
      <h1 id="pricing-title">Plans for NMR identification work</h1>
      <p class="lede">Published list prices for Spectra. Ranking remains a decision aid; a paid plan does not make a candidate a confirmed structure.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="{{ site.product_url }}" data-analytics="try_spectra_clicked" aria-label="Try Spectra">Try</a>
        <p class="hero-note">{{ site.data.product.audience }}</p>
      </div>
    </div>
    {% include example-card.html %}
  </div>
</section>

<section class="section" aria-labelledby="plans-title">
  <div class="wrap">
    <h2 class="section-kicker" id="plans-title">Plans</h2>
    <ol class="steps pricing-steps">
      {% for plan in site.data.pricing.plans %}
      <li>
        <p class="step-num">{{ plan.name }}</p>
        <h3>{{ plan.price_label }}</h3>
        {% if plan.annual_label %}
        <p class="muted">or {{ plan.annual_label }}</p>
        {% endif %}
        {% if plan.seats == 5 %}
        <p class="muted">5 users</p>
        {% endif %}
        <p>{{ plan.summary }}</p>
        <p>{{ plan.who }}</p>
        {% if plan.cta == "product_url" %}
        <a class="btn btn-primary" href="{{ site.product_url }}" data-analytics="try_spectra_clicked" aria-label="Try Spectra">Try</a>
        {% else %}
        <a class="btn btn-secondary" href="{{ '/contact/' | relative_url }}" data-analytics="request_pilot_clicked">Pilot</a>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="pricing-notes">
  <div class="wrap prose">
    <h2 id="pricing-notes">What the public list does not include</h2>
    <p>Three analyses are included on Free. The public materials do not say whether unused analyses expire. Do not assume a monthly reset unless the application states it at sign-up.</p>
    <p>Pro is €79 per month, or €790 per year. Lab is €299 per month for five users; extra-seat prices are not published. Enterprise is custom, including scoped pilots and private-deployment conversations.</p>
    <ul>
      <li>VAT or other tax inclusive/exclusive status</li>
      <li>Academic discounts</li>
      <li>Overage prices after the Free allotment</li>
      <li>SLA numbers</li>
      <li>A regulatory-validation SKU</li>
    </ul>
    <p>{{ site.data.pricing.vat_note }}</p>
  </div>
</section>

<section class="section cta-band" aria-labelledby="pricing-cta">
  <div class="wrap cta-band-inner">
    <h2 id="pricing-cta">Ready to identify your next unknown?</h2>
    <a class="btn btn-primary" href="{{ site.product_url }}" data-analytics="try_spectra_clicked" aria-label="Try Spectra">Try</a>
  </div>
</section>
