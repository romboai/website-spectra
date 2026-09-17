---
title: Changelog
h1: Spectra changelog
description: Dated product updates for Spectra by ROMBO AI.
permalink: /changelog/
eyebrow: Updates
---

Subscribe via the [changelog feed](/changelog.xml).

{% assign entries = site.changelog | sort: "date" | reverse %}
{% for entry in entries %}
<article class="card-quiet" style="margin-bottom:1rem">
  <p class="eyebrow">{{ entry.date | date: "%d %B %Y" }}{% if entry.version %} · {{ entry.version }}{% endif %}</p>
  <h2><a href="{{ entry.url | relative_url }}">{{ entry.title }}</a></h2>
  <p>{{ entry.description }}</p>
</article>
{% endfor %}
