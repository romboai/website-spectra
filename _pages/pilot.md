---
title: Evaluate Spectra on your own cases
h1: Evaluate Spectra on your own cases
description: Bring real identification problems from your lab. We run them through Spectra with you and review where it ranked correctly, where it did not, and why.
permalink: /pilot/
eyebrow: Pilot
---

Bring a set of real identification problems from your lab. We run them through Spectra with you and deliver a report on how it performed on your data: where it ranked correctly, where it did not, and why.

## What you bring

NMR spectra you are allowed to share, and known answers where available.

## What you get

Per-case results, a summary report, and a review call.

{% include fact.html path="pricing.pilot_scope" %}
{% if fact_ok %}
## Scope

{{ fact_node.value }}
{% endif %}

{% include fact.html path="pricing.pilot_price" %}
{% if fact_ok %}
## Price

{{ fact_node.value }}
{% endif %}

## Data handling during a pilot

{% include fact.html path="data.training_use" %}
{% assign train_ok = fact_ok %}
{% assign train_val = fact_node.value %}
{% include fact.html path="data.retention" %}
{% assign ret_ok = fact_ok %}
{% assign ret_val = fact_node.value %}
{% include fact.html path="data.hosting_region" %}
{% assign host_ok = fact_ok %}
{% assign host_val = fact_node.value %}
{% if train_ok or ret_ok or host_ok %}
{% if train_ok %}Your spectra are {{ train_val }}. {% endif %}{% if ret_ok %}Retained {{ ret_val }}. {% endif %}{% if host_ok %}Hosted in {{ host_val }}.{% endif %}
{% else %}
We agree data handling terms with you before any spectra are shared.
{% endif %}

{% include lead-form.html submit_label="Request a pilot" %}
