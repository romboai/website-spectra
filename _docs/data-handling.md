---
title: Data handling
nav: Data handling
h1: Data handling
description: What you upload to Spectra and how we handle it.
permalink: /docs/data-handling/
nav_order: 9
---

## What you upload

NMR files and the metadata you attach in the application. Do not send those files through the marketing contact form.

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

{% unless site.data.facts.data.retention.verified or site.data.facts.data.training_use.verified or site.data.facts.data.deletion.verified or site.data.facts.data.hosting_region.verified or site.data.facts.data.subprocessors.verified %}
Contact us for our current data processing terms before uploading unpublished work. Start from [contact](/contact/).
{% endunless %}
