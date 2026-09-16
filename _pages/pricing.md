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
    </div>
    {% include fact.html path="pricing.founding_price_note" %}
    {% if fact_ok %}
    <p class="founding-banner" role="status">{{ fact_node.value }}</p>
    {% endif %}
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
        <p>{{ plan.audience }}</p>
        {% if plan.features %}
        <ul>
          {% for feature in plan.features %}
          <li>{{ feature }}</li>
          {% endfor %}
          {% if plan.id == "pro" %}
            {% include fact.html path="pricing.pro_analyses_included" %}
            {% if fact_ok %}<li>{{ fact_node.value }}</li>{% endif %}
            {% include fact.html path="product.export_formats" %}
            {% if fact_ok %}<li>Export as {{ fact_node.value }}</li>{% endif %}
          {% endif %}
          {% if plan.id == "lab" %}
            {% include fact.html path="pricing.lab_analyses_included" %}
            {% if fact_ok %}<li>{{ fact_node.value }}</li>{% endif %}
            {% include fact.html path="product.export_formats" %}
            {% if fact_ok %}<li>Export as {{ fact_node.value }}</li>{% endif %}
          {% endif %}
          {% if plan.id == "free" or plan.id == "enterprise" %}
            {% include fact.html path="product.export_formats" %}
            {% if fact_ok %}<li>Export as {{ fact_node.value }}</li>{% endif %}
          {% endif %}
        </ul>
        {% endif %}
        <div class="plan-cta-row">
          {% if plan.cta == "product_url" %}
          <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_{{ plan.id }}" data-analytics="plan_cta_click" data-plan="{{ plan.id }}">{{ plan.cta_label }}</a>
          {% else %}
          <a class="btn btn-primary" href="{{ '/pilot/' | relative_url }}" data-analytics="plan_cta_click" data-plan="{{ plan.id }}">{{ plan.cta_label }}</a>
          {% endif %}
          {% if plan.cta_secondary_label %}
          <a class="btn btn-secondary" href="{{ plan.cta_secondary_path | relative_url }}">{{ plan.cta_secondary_label }}</a>
          {% endif %}
        </div>
      </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section section-alt" aria-labelledby="compare-title">
  <div class="wrap">
    <h2 id="compare-title">Compare plans</h2>
    <div class="compare-table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col"> </th>
            {% for plan in site.data.pricing.plans %}
            <th scope="col">{{ plan.name }}</th>
            {% endfor %}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Analyses included</th>
            <td>3</td>
            <td>{% include fact.html path="pricing.pro_analyses_included" %}{% if fact_ok %}{{ fact_node.value }}{% endif %}</td>
            <td>{% include fact.html path="pricing.lab_analyses_included" %}{% if fact_ok %}{{ fact_node.value }}{% endif %}</td>
            <td>Scoped with you</td>
          </tr>
          <tr>
            <th scope="row">Users</th>
            <td>1</td>
            <td>1</td>
            <td>5</td>
            <td>Custom</td>
          </tr>
          <tr>
            <th scope="row">Shift-level evidence</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          {% include fact.html path="product.export_formats" %}
          {% if fact_ok %}
          <tr>
            <th scope="row">Export formats</th>
            <td>{{ fact_node.value }}</td>
            <td>{{ fact_node.value }}</td>
            <td>{{ fact_node.value }}</td>
            <td>{{ fact_node.value }}</td>
          </tr>
          {% endif %}
          <tr>
            <th scope="row">Shared workspace</th>
            <td></td>
            <td></td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          {% include fact.html path="product.dpa_available" %}
          {% if fact_ok %}
          <tr>
            <th scope="row">Data processing agreement</th>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ fact_node.value }}</td>
          </tr>
          {% endif %}
          {% include fact.html path="product.private_deployment" %}
          {% if fact_ok %}
          <tr>
            <th scope="row">Private deployment options</th>
            <td></td>
            <td></td>
            <td></td>
            <td>{{ fact_node.value }}</td>
          </tr>
          {% endif %}
        </tbody>
      </table>
    </div>
  </div>
</section>

{% include fact.html path="pricing.academic_offer" %}
{% assign academic_ok = fact_ok %}
{% assign academic_val = fact_node.value %}
{% include fact.html path="pricing.credit_packs" %}
{% assign packs_ok = fact_ok %}
{% assign packs_val = fact_node.value %}
{% if academic_ok or packs_ok %}
<section class="section" aria-labelledby="extras-title">
  <div class="wrap grid-2">
    {% if academic_ok %}
    <article class="card">
      <h2 id="extras-title">Academic pricing</h2>
      <p>{{ academic_val }}</p>
    </article>
    {% endif %}
    {% if packs_ok %}
    <article class="card">
      <h2{% unless academic_ok %} id="extras-title"{% endunless %}>Credit packs</h2>
      <p>{{ packs_val }}</p>
    </article>
    {% endif %}
  </div>
</section>
{% endif %}

{% include fact.html path="pricing.free_expiry" %}
{% assign expiry_ok = fact_ok %}
{% assign expiry_val = fact_node.value %}
{% include fact.html path="pricing.vat_note" %}
{% assign vat_ok = fact_ok %}
{% assign vat_val = fact_node.value %}
{% include fact.html path="pricing.monthly_annual_switch" %}
{% assign switch_ok = fact_ok %}
{% assign switch_val = fact_node.value %}
{% include fact.html path="pricing.academic_offer" %}
{% assign academic_faq_ok = fact_ok %}
{% assign academic_faq_val = fact_node.value %}
{% if expiry_ok or vat_ok or switch_ok or academic_faq_ok %}
<section class="section" id="faq" aria-labelledby="billing-faq-title">
  <div class="wrap">
    <h2 id="billing-faq-title">Billing</h2>
    <div class="faq">
      {% if expiry_ok %}
      <details>
        <summary>Do free analyses expire?</summary>
        <p>{{ expiry_val }}</p>
      </details>
      {% endif %}
      {% if vat_ok %}
      <details>
        <summary>Is VAT included?</summary>
        <p>{{ vat_val }}</p>
      </details>
      {% endif %}
      {% if switch_ok %}
      <details>
        <summary>Can I switch between monthly and annual?</summary>
        <p>{{ switch_val }}</p>
      </details>
      {% endif %}
      {% if academic_faq_ok %}
      <details>
        <summary>Do you offer academic pricing?</summary>
        <p>{{ academic_faq_val }}</p>
      </details>
      {% endif %}
    </div>
  </div>
</section>
{% endif %}

<section class="section cta-band" aria-labelledby="pricing-cta">
  <div class="wrap cta-band-inner">
    <h2 id="pricing-cta">Start with a compound you already know.</h2>
    <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_footer" data-analytics="cta_click">Start free</a>
  </div>
</section>
