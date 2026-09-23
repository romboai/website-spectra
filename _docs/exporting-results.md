---
title: Review records and exports
nav: Records and exports
h1: Review records and exports
description: What Spectra keeps with a reviewed result, and what to confirm when your laboratory requires an export or audit trail.
permalink: /docs/records-and-exports/
redirect_from:
  - /docs/exporting-results/
nav_order: 14
---

## Review record in Spectra

Keep the project, uploaded files, ranked result, accepted or rejected candidate, and the chemist's review comment together. This preserves the evidence and the human decision in one working context.

Spectra supports the scientific review record. It does not replace your ELN, LIMS, document-management system, or laboratory retention policy.

## Export formats

{% include fact.html path="product.export_formats" %}
{% if fact_ok %}
After review, export the shortlist and evidence as {{ fact_node.value }}.
{% else %}
No export format is advertised as part of the current public specification. If your workflow requires PDF, CSV, machine-readable data, or a signed report, confirm that requirement before purchase.
{% endif %}

## Before a laboratory rollout

Confirm these requirements with [{{ site.contact_email }}](mailto:{{ site.contact_email }}):

- The fields and evidence that must appear in an export
- Transfer into your ELN, LIMS, or archive
- User identity, timestamps, comments, and version history required by your SOP
- Electronic signatures or approval stages
- Record retention and deletion requirements
- Validation expectations for regulated use

Use [understanding results](/docs/understanding-results/) for the scientific review workflow and [security](/security/) for data-processing questions.
