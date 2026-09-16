---
title: Security
h1: Security at Spectra
description: How Spectra authenticates users and how to start a security review for a pilot.
permalink: /security/
eyebrow: Trust
---

Spectra is a hosted web application. Users authenticate before submitting spectra, using email, passkey or Google.

Marketing analytics on this site are optional and consent-gated. We do not send form field values, spectrum names, structures, or sample descriptions.

{% include fact.html path="data.hosting_region" %}
{% if fact_ok %}
Spectra is hosted in {{ fact_node.value }}.
{% endif %}

Need a security questionnaire or data processing terms? We handle these during [pilot scoping](/pilot/).
