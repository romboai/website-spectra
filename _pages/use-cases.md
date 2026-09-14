---
title: NMR use cases
h1: Spectra use cases
description: Distinct NMR jobs Spectra can assist — verification, dereplication, unknowns, impurities, natural products and metabolites.
permalink: /use-cases/
eyebrow: Use cases
wide: true
---

Each page is a different analytical job. They share a product, not a paragraph.

<ol class="steps use-case-grid">
{% for item in site.data.use_cases %}
<li>
  {% capture step_num %}{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}{% endcapture %}
  <p class="step-num">{{ step_num }}</p>
  <h2><a href="{{ item.path | relative_url }}">{{ item.title }}</a></h2>
  <p>{{ item.summary }}</p>
</li>
{% endfor %}
</ol>
