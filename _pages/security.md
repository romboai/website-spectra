---
title: Security
h1: Security at Spectra
description: How Spectra authenticates users and how to request security review during a pilot.
permalink: /security/
eyebrow: Trust
---

Spectra is a hosted web application. Users sign in with Auth0 using email, passkey or Google before submitting spectra.

Marketing analytics on this site are optional and consent-gated. We do not send form field values, spectrum names, structures, or sample descriptions.

{% include fact.html path="data.hosting_region" %}
{% if fact_ok %}
## Hosting

Spectra is hosted in {{ fact_node.value }}.
{% endif %}

{% include fact.html path="data.encryption" %}
{% if fact_ok %}
## Encryption

{{ fact_node.value }}
{% endif %}

{% include fact.html path="data.subprocessors" %}
{% if fact_ok %}
## Subprocessors

| Name | Purpose | Region |
| --- | --- | --- |
{% for row in fact_node.value %}
| {{ row.name }} | {{ row.purpose }} | {{ row.region }} |
{% endfor %}
{% endif %}

{% include fact.html path="product.dpa_available" %}
{% if fact_ok %}
## Data processing agreement

{{ fact_node.value }}
{% endif %}

Need a security questionnaire or data processing terms? We handle these during [pilot scoping](/pilot/).
