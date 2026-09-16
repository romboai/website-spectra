---
title: Account and billing
nav: Account and billing
h1: Account and billing
description: Spectra plans, how to start free, and how to talk to us about Lab or Enterprise.
permalink: /docs/account-and-billing/
nav_order: 13
---

Sign in at [{{ site.app_url }}/login]({{ site.app_url }}/login). Free includes 3 analyses. Paid plans:

{% for plan in site.data.pricing.plans %}
- **{{ plan.name }}** — {{ plan.price_label }}{% if plan.annual_label %} (or {{ plan.annual_label }}){% endif %}. {{ plan.audience }}
{% endfor %}

Start from [pricing](/pricing/). For Lab, Enterprise or a scoped evaluation, [plan a pilot](/pilot/).

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
