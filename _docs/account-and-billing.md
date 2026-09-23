---
title: Account and billing
nav: Account and billing
h1: Account and billing
description: Spectra plans, how to start free, and how to email sales about Enterprise.
permalink: /docs/account-and-billing/
nav_order: 13
---

Sign in at [{{ site.app_url }}/login]({{ site.app_url }}/login). Free includes 3 analyses. Paid plans:

{% for plan in site.data.pricing.plans %}
- **{{ plan.name }}** — {{ plan.price_label }}{% if plan.annual_label %} (or {{ plan.annual_label }}){% elsif plan.price_note %}, {{ plan.price_note }}{% endif %}. {{ plan.audience }}
{% endfor %}

Start from [pricing](/pricing/). Free includes 3 analyses and shift-level evidence. Pro is €79 per month or €790 per year and includes 20 analyses per month for one user, plus advanced LLM models, higher-accuracy algorithms and physics-guided ranking. Write to us before the order if you need VAT treatment or whether the free analyses expire. For Enterprise, [email sales](mailto:{{ site.contact_email }}).

{% include fact.html path="pricing.vat_note" %}
{% if fact_ok %}
## VAT

{{ fact_node.value }}
{% endif %}

{% include fact.html path="pricing.free_expiry" %}
{% if fact_ok %}
## Free analyses

{{ fact_node.value }}
{% endif %}

{% include fact.html path="pricing.academic_offer" %}
{% if fact_ok %}
## Academic pricing

{{ fact_node.value }}
{% endif %}
