---
title: Documentation FAQ
nav: FAQ
h1: Documentation FAQ
description: Answers to practical Spectra questions, matching the visible homepage FAQ.
permalink: /docs/faq/
nav_order: 11
schema: faq
---

The same questions appear on the homepage so search engines and humans see one set of answers.

{% for item in site.data.faq %}
### {{ item.question }}

{{ item.answer }}
{% endfor %}
