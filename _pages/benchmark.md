---
title: Spectra identification benchmark
h1: How we measure Spectra
description: Tasks, datasets, leakage policy and metrics for the Spectra identification benchmark.
permalink: /benchmark/
eyebrow: Evidence
sitemap: false
---

{% assign bm = site.data.benchmark %}

## What we measured

{% if bm.tasks and bm.tasks.size > 0 %}
{% for task in bm.tasks %}
- {{ task }}
{% endfor %}
{% endif %}

## Data

{% if bm.datasets and bm.datasets.size > 0 %}
| Name | Source | Licence | Compounds | Spectra |
| --- | --- | --- | ---: | ---: |
{% for row in bm.datasets %}
| {{ row.name }} | {{ row.source }} | {{ row.licence }} | {{ row.n_compounds }} | {{ row.n_spectra }} |
{% endfor %}
{% endif %}

## How we avoided leakage

{% if bm.leakage_policy %}
{{ bm.leakage_policy }}
{% endif %}

## Results

{% if bm.metrics and bm.metrics.size > 0 %}
| Task | Metric | Value | n |
| --- | --- | --- | ---: |
{% for row in bm.metrics %}
| {{ row.task }} | {{ row.metric }} | {{ row.value }} | {{ row.n }} |
{% endfor %}
{% endif %}

{% if bm.baselines and bm.baselines.size > 0 %}
## Baselines

{% for row in bm.baselines %}
- {{ row }}
{% endfor %}
{% endif %}

## Calibration of the match value

{% if bm.calibration_plot %}
<img src="{{ bm.calibration_plot | relative_url }}" alt="Match-value calibration plot">
{% endif %}

{% if bm.failure_cases and bm.failure_cases.size > 0 %}
## Failure cases

{% for row in bm.failure_cases %}
### {{ row.title }}

{{ row.description }}

{% if row.image %}
<img src="{{ row.image | relative_url }}" alt="{{ row.title }}">
{% endif %}
{% endfor %}
{% endif %}

{% if bm.version %}
<p class="muted">Benchmark version {{ bm.version }}</p>
{% endif %}
