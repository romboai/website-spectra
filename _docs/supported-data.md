---
title: Supported NMR data
nav: Supported data
h1: Supported data
description: NMR nuclei and file families for Spectra.
permalink: /docs/supported-data/
nav_order: 3
---

## Input specification

| Input | Role in Spectra | Published support |
| --- | --- | --- |
| 1H NMR | Primary evidence for the structure shortlist | Supported |
| 13C NMR | Carbon evidence and residual comparison | Supported |
| HSQC | 1H–13C correlations in the same project | Optional |
| COSY | 1H–1H correlations in the same project | Optional |
| HMBC | Long-range correlations in the same project | Optional |
| TOCSY | Spin-network correlations in the same project | Optional |
| NOESY | Spatial-proximity correlations in the same project | Optional |

1H and 13C carry the structure shortlist. The 2D experiments add correlations to that same project. The teaching example uses 1H + 13C at 600 MHz.

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

## Processing state

- Processed spectra can skip preprocessing and continue to review.
- Imported correlation lists can enter the peak-picking stage.
- A raw 2D file that needs a processing recipe stops and requests the missing fields.
- A file attached in chat is not added to the project dataset.

## Before the first real sample

State the solvent and the spectrometer frequency. You can enter formula, exact mass, solvent and an expected structure under **Additional information** before identification.

Before standardising a method, email [{{ site.contact_email }}](mailto:{{ site.contact_email }}) about 1H-only use, a benchtop or low-field spectrometer, a project containing only 2D spectra, a very large file, or an undocumented vendor dialect. Other nuclei sit outside the current published support matrix. Preparation checks are in [preparing NMR data](/docs/preparing-nmr-data/).

## Metadata

**Required in practice:** the spectrum itself and enough context to interpret it (at least nucleus and, when known, solvent and field).

**Recommended:** analytical objective (verification, impurity, dereplication, unknown), proposed structure if you are verifying, mixture vs isolated material.

**Optional context:** molecular formula, exact mass or MS, synthetic route notes.

## Confirm with us before purchase

- Other vendor export dialects
- Projects that contain only 2D spectra
- Very large datasets or private-library evaluation
