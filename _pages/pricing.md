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
  <div class="wrap">
    <div class="hero-copy">
      <p class="eyebrow">Pricing</p>
      <h1 id="pricing-title">Plans for NMR identification work</h1>
      <p class="lede">Start free on your own data. Upgrade when Spectra becomes part of your routine.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_hero" data-analytics="try_spectra_clicked">Start free</a>
        <p class="hero-note">{{ site.data.product.audience }}</p>
      </div>
    </div>
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
        <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_{{ plan.id }}" data-analytics="plan_cta_click">{{ plan.next_step }}</a>
        {% else %}
        <a class="btn btn-secondary" href="{{ '/contact/' | relative_url }}" data-analytics="request_pilot_clicked">{{ plan.next_step }}</a>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section cta-band" aria-labelledby="pricing-cta">
  <div class="wrap cta-band-inner">
    <h2 id="pricing-cta">Ready to identify your next unknown?</h2>
    <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_footer" data-analytics="try_spectra_clicked">Start free</a>
  </div>
</section>
