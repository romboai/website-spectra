---
title: Supported NMR data
nav: Supported data
h1: Supported data
description: NMR nuclei and file families for Spectra.
permalink: /docs/supported-data/
nav_order: 3
---

## Experiment types

- **1H NMR**
- **13C NMR**

The teaching example uses 1H + 13C at 600 MHz.

{% include fact.html path="data.upload_formats_detail" %}
{% if fact_ok %}
## What to upload

| Vendor | File | Notes |
| --- | --- | --- |
{% for row in fact_node.value %}
| {{ row.vendor }} | {{ row.upload }} | {{ row.notes }} |
{% endfor %}
{% else %}
## Source families

{% for item in site.data.formats.vendor_families %}
- **{{ item.label }}**
{% endfor %}

## Exchange format

{% for item in site.data.formats.exchange_formats %}
- **{{ item.label }}**
{% endfor %}
{% endif %}

{% include fact.html path="data.max_upload_size" %}
{% if fact_ok %}
## Upload size

Maximum upload size is {{ fact_node.value }}.
{% endif %}

{% include fact.html path="data.solvents" %}
{% if fact_ok %}
## Solvents

{{ fact_node.value }}
{% endif %}

{% include fact.html path="product.one_h_only_supported" %}
{% if fact_ok %}
## 1H-only submissions

{{ fact_node.value }}
{% endif %}

{% include fact.html path="product.low_field_supported" %}
{% if fact_ok %}
## Low-field data

{{ fact_node.value }}
{% endif %}

## Metadata

**Required in practice:** the spectrum itself and enough context to interpret it (at least nucleus and, when known, solvent and field).

**Recommended:** analytical objective (verification, impurity, dereplication, unknown), proposed structure if you are verifying, mixture vs isolated material.

**Optional context:** molecular formula, exact mass or MS, synthetic route notes.

## Contact us for

- Other vendor export dialects
- 2D-only cases
- Very large datasets or private-library evaluation
