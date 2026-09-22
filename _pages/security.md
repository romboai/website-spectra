---
title: Security
h1: Security at Spectra
description: How Spectra authenticates users and how to request a security review.
permalink: /security/
eyebrow: Trust
---

Spectra is a hosted web application. A chemist signs in with Auth0 using email, passkey or Google before submitting a spectrum.

Marketing analytics on this site are optional and consent-gated. We do not send form field values, spectrum names, structures, or sample descriptions.

## Before client or unpublished spectra

Agree these terms with us before you upload a client sample or an unpublished structure:

- Where the files are hosted
- How long they are kept
- Whether they are used to train models
- How you delete a spectrum or a project
- Which subprocessors handle them
- Whether a data processing agreement is part of the order

Send spectra only from the signed-in application. The marketing form is for the enquiry. Start from [contact](/contact/). Handling notes are on [data handling](/docs/data-handling/).

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
