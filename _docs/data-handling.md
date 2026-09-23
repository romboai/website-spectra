---
title: Data handling
nav: Data handling
h1: Data handling
description: What you upload to Spectra and how we handle it.
permalink: /docs/data-handling/
nav_order: 9
---

## What you upload

NMR files and the metadata you attach in the application. Send them only after you are signed in.

## Before client or unpublished spectra

Settle these points with us before that upload:

- Where the files are hosted
- How long they are kept
- Whether they are used to train models
- How you delete a spectrum or a project
- Which subprocessors handle them

For a data-processing review, read [security](/security/) and email [{{ site.contact_email }}](mailto:{{ site.contact_email }}) without attaching spectra or confidential project details.

{% include fact.html path="data.retention" %}
{% if fact_ok %}
## How long we keep it

{{ fact_node.value }}
{% endif %}

{% include fact.html path="data.training_use" %}
{% if fact_ok %}
## Model training

{{ fact_node.value }}
{% endif %}

{% include fact.html path="data.deletion" %}
{% if fact_ok %}
## Deleting your data

{{ fact_node.value }}
{% endif %}

{% include fact.html path="data.hosting_region" %}
{% if fact_ok %}
## Where it is processed

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
