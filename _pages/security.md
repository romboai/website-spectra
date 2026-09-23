---
title: Security
h1: Security at Spectra
description: How Spectra authenticates users and how to request a security review.
permalink: /security/
eyebrow: Trust
---

Spectra is a hosted web application. A chemist signs in with Auth0 using email, passkey or Google before submitting a spectrum.

Marketing analytics on this site are optional and consent-gated. We do not send form field values, spectrum names, structures, or sample descriptions.

## What is established

| Area | Published position |
| --- | --- |
| Access | A user signs in before uploading spectra |
| Upload channel | Spectra are uploaded only inside the signed-in application |
| Marketing analytics | Optional and consent-gated; spectrum and sample fields are not sent |
| Scientific responsibility | The chemist remains responsible for the final interpretation and decision |

## Before client or unpublished spectra

Do not upload a client sample or unpublished structure until your organization has agreed the applicable terms for:

- Where the files are hosted
- How long they are kept
- Whether they are used to train models
- How you delete a spectrum or a project
- Which subprocessors handle them
- Whether a data processing agreement is part of the order

## Start a data-processing review

Email [{{ site.contact_email }}](mailto:{{ site.contact_email }}) with your intended use, approximate number of users, required region, retention expectations, deletion requirements, and deployment constraints. Do not attach spectra, structures, sample identifiers, or confidential project details to the first message.

Handling notes are on [data handling](/docs/data-handling/). Regulated use and private deployment are enterprise evaluation topics, not self-service claims.

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
