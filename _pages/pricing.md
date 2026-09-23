---
layout: landing
title: Pricing and access
description: Spectra plans — Free with 3 analyses, Pro at €79 per month or €790 per year with 20 analyses per month, and custom Enterprise. Email sales for Enterprise.
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
      <p class="lede">Start free on your own data. Individual NMR operators can buy Pro directly after sign-in; lab teams can request procurement terms.</p>
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
        <p class="plan-note">{{ plan.price_note }}</p>
        <p class="plan-audience">{{ plan.audience }}</p>
        {% if plan.features %}
        <ul>
          {% for feature in plan.features %}
          <li>{{ feature }}</li>
          {% endfor %}
          {% if plan.id == "pro" or plan.id == "free" or plan.id == "enterprise" %}
            {% include fact.html path="product.export_formats" %}
            {% if fact_ok %}<li>Export as {{ fact_node.value }}</li>{% endif %}
          {% endif %}
        </ul>
        {% endif %}
        <div class="plan-cta-row">
          {% if plan.cta == "product_url" %}
          <a class="btn btn-primary" href="{{ site.app_url }}/login" data-cta-src="pricing_{{ plan.id }}" data-analytics="plan_cta_click" data-plan="{{ plan.id }}">{{ plan.cta_label }}</a>
          {% elsif plan.cta == "contact" %}
          <a class="btn btn-primary" href="mailto:{{ site.contact_email }}" data-cta-src="pricing_{{ plan.id }}" data-analytics="plan_cta_click" data-plan="{{ plan.id }}">{{ plan.cta_label }}</a>
          {% else %}
          <a class="btn btn-primary" href="mailto:{{ site.contact_email }}" data-analytics="plan_cta_click" data-plan="{{ plan.id }}">{{ plan.cta_label }}</a>
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
            {% for plan in site.data.pricing.plans %}
            <td>
              {% if plan.id == "free" %}3
              {% elsif plan.id == "enterprise" %}Scoped with you
              {% else %}
                {% include fact.html path="pricing.pro_analyses_included" %}
                {% if fact_ok %}{{ fact_node.value }}{% else %}<a href="mailto:{{ site.contact_email }}">Confirm with us</a>{% endif %}
              {% endif %}
            </td>
            {% endfor %}
          </tr>
          <tr>
            <th scope="row">Users</th>
            {% for plan in site.data.pricing.plans %}
            <td>{{ plan.seats }}</td>
            {% endfor %}
          </tr>
          <tr>
            <th scope="row">Shift-level evidence</th>
            {% for plan in site.data.pricing.plans %}
            <td>Yes</td>
            {% endfor %}
          </tr>
          <tr>
            <th scope="row">Advanced LLM models</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "free" %}No{% else %}Yes{% endif %}</td>
            {% endfor %}
          </tr>
          <tr>
            <th scope="row">Higher-accuracy algorithms</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "free" %}No{% else %}Yes{% endif %}</td>
            {% endfor %}
          </tr>
          <tr>
            <th scope="row">Physics-guided ranking</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "free" %}No{% else %}Yes{% endif %}</td>
            {% endfor %}
          </tr>
          {% include fact.html path="product.export_formats" %}
          {% if fact_ok %}
          <tr>
            <th scope="row">Export formats</th>
            {% for plan in site.data.pricing.plans %}
            <td>{{ fact_node.value }}</td>
            {% endfor %}
          </tr>
          {% endif %}
          <tr>
            <th scope="row">Shared workspace</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "enterprise" %}Yes{% else %}No{% endif %}</td>
            {% endfor %}
          </tr>
          {% include fact.html path="product.dpa_available" %}
          {% if fact_ok %}
          {% assign dpa_val = fact_node.value %}
          <tr>
            <th scope="row">Data processing agreement</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "enterprise" %}{{ dpa_val }}{% endif %}</td>
            {% endfor %}
          </tr>
          {% endif %}
          {% include fact.html path="product.private_deployment" %}
          {% if fact_ok %}
          {% assign deploy_val = fact_node.value %}
          <tr>
            <th scope="row">Private deployment options</th>
            {% for plan in site.data.pricing.plans %}
            <td>{% if plan.id == "enterprise" %}{{ deploy_val }}{% endif %}</td>
            {% endfor %}
          </tr>
          {% endif %}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="buyer-checklist-title">
  <div class="wrap">
    <div class="section-heading">
      <p class="eyebrow">Laboratory buyer checklist</p>
      <h2 id="buyer-checklist-title">Confirm operational fit before the order.</h2>
    </div>
    <div class="compare-table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Requirement</th>
            <th scope="col">Published fit</th>
            <th scope="col">Confirm before purchase</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Data governance</th>
            <td>Signed-in upload; no spectra sent through the marketing site</td>
            <td>Hosting, retention, model-training use, deletion, subprocessors, and DPA</td>
          </tr>
          <tr>
            <th scope="row">Technical input</th>
            <td>1H, 13C, optional 2D correlations; Bruker, JEOL, Varian, and JCAMP-DX</td>
            <td>Low-field, 1H-only methods, undocumented dialects, 2D-only projects, and large files</td>
          </tr>
          <tr>
            <th scope="row">Review record</th>
            <td>Files, result, accepted or rejected candidate, and review comment remain together</td>
            <td>Required export format, ELN/LIMS transfer, signatures, retention, and regulated audit needs</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-6"><a href="{{ '/security/' | relative_url }}">Security checklist</a> · <a href="{{ '/docs/supported-data/' | relative_url }}">Input specification</a> · <a href="{{ '/docs/records-and-exports/' | relative_url }}">Records and exports</a></p>
  </div>
</section>

<section class="section" aria-labelledby="po-title">
  <div class="wrap prose">
    <h2 id="po-title">What a purchase order can cite</h2>
    <ul>
      <li>Free — €0, 3 analyses, 1 user</li>
      <li>Pro — €79 per month or €790 per year, 20 analyses per month, 1 user, advanced LLM models, higher-accuracy algorithms, physics-guided ranking</li>
      <li>Enterprise — custom, scoped with you, plus the Pro identification features</li>
    </ul>
    <p>Write before the order if you need VAT treatment or whether the free analyses expire: <a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>.</p>
    <p>The chemist confirms the structure. To buy Pro, sign in, choose monthly or annual billing, and complete checkout. For Enterprise, <a href="mailto:{{ site.contact_email }}">email sales</a>.</p>
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
