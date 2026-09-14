---
title: Security
h1: Security posture for Spectra
description: What this site can say about Spectra security without inventing certifications, and how to start a security review for an enterprise pilot.
permalink: /security/
eyebrow: Trust
---

This page states only what we can support today. It is not a SOC 2 report, ISO certificate, or penetration-test summary.

## What is public

- Spectra is a hosted web application with account login through Auth0 (`romboai.eu.auth0.com`).
- Self-service users authenticate before submitting spectra.
- Marketing analytics on this Jekyll site are optional, consent-gated, and configured not to capture form fields or scientific text.
- Lead forms on this marketing site must not post secrets to the browser. The public form posts to `site.lead_form_endpoint` or falls back to email.

## What is not claimed

- No named security certification is listed here.
- No subprocessors table is invented.
- No encryption-at-rest diagram is published without a reviewed control document.
- No “regulated-ready” badge is used.

## Enterprise review

If you need a security questionnaire, data-processing terms, or a private deployment conversation, [request a pilot](/contact/) and say that security review is in scope. Do not upload confidential spectra to a first-contact form.

## Related pages

- [Privacy notice](/privacy/)
- [Data handling](/docs/data-handling/)
