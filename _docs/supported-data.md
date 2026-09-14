---
title: Supported NMR data
nav: Supported data
h1: Supported data
description: Verified NMR nuclei and file families for Spectra. Formats that are not confirmed are omitted.
permalink: /docs/supported-data/
nav_order: 3
---

Only items stated on the live product, or otherwise reviewed, appear as supported. Everything else is omitted or marked “contact us”.

## Experiment types we list

- **1H NMR**
- **13C NMR**

The live homepage example is 1H + 13C at 600 MHz. Other nuclei and 2D experiments may be useful in the laboratory; they are not published here as a support matrix.

## Source families

{% for item in site.data.formats.vendor_families %}
- **{{ item.label }}** — {{ item.notes }}
{% endfor %}

## Exchange format

{% for item in site.data.formats.exchange_formats %}
- **{{ item.label }}** — {{ item.notes }}
{% endfor %}

## Metadata

**Required in practice:** the spectrum itself and enough context to interpret it (at least nucleus and, when known, solvent and field).

**Recommended:** analytical objective (verification, impurity, dereplication, unknown), proposed structure if you are verifying, mixture vs isolated material.

**Optional context:** molecular formula, exact mass or MS, synthetic route notes.

## Size and quality limits

No public file-size quota is published. If an upload fails, see [troubleshooting](/docs/troubleshooting/) or [contact us](/contact/).

## Contact us for

- Other vendor export dialects
- 2D-only cases
- Very large datasets or private-library evaluation

Do not assume a format is supported because a competitor lists it.
