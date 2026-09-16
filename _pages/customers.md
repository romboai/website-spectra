---
title: Customer stories
h1: Customer stories
description: How laboratories use Spectra on their own NMR identification work.
permalink: /customers/
eyebrow: Customers
sitemap: false
excerpt: ""
---

{% include fact.html path="proof.case_studies" %}
{% if fact_ok %}
{% for story in fact_node.value %}
## {{ story.title }}

{{ story.body }}
{% endfor %}
{% endif %}
