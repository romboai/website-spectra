---
title: Privacy Notice
h1: Privacy Notice
description: How ROMBO AI S.r.l. handles personal data in the Spectra application, its emails, and this website.
permalink: /privacy/
eyebrow: Legal
---
{% assign company = site.data.company %}
{% include fact.html path="company.privacy_email" %}{% if fact_ok %}{% assign privacy_email = fact_node.value %}{% else %}{% assign privacy_email = site.contact_email %}{% endif %}

Last updated: 22 October 2026

This notice explains what personal data {{ company.legal_name }} processes when you use the Spectra application
at [{{ site.app_url }}]({{ site.app_url }}), receive our service emails, or visit this website, and what rights you
have. It is given under the EU General Data Protection Regulation (GDPR) and Italian data protection law.

## 1. Who is responsible

The controller is {{ company.legal_name }}, {{ company.address.line1 }}, {{ company.address.line2 }},
{{ company.address.postal_code }} {{ company.address.city }}, {{ company.address.country }}.
For any privacy question or request, email [{{ privacy_email }}](mailto:{{ privacy_email }}).

When an organisation has signed a data processing agreement with us, we process the Content of its users on its
behalf, and that organisation is the controller for it.

## 2. What we process, why, and on what basis

| Data | What it is | Why we use it | Legal basis |
| --- | --- | --- | --- |
| Account | Email address, name, the identifier from our sign-in provider, sign-in method, account creation date | To create your account, sign you in, and keep it secure | Contract (Art. 6(1)(b) GDPR) |
| Content | Files you upload (such as NMR spectra), project names and descriptions, your messages to the assistant, results, structures you accept or reject and your comments on them | To run analyses and show you the results | Contract (Art. 6(1)(b)) |
| Plan and usage | Your plan, subscription status and billing period, the analyses counted against your allowance, and the amount of AI processing used per day | To apply plan allowances and usage limits, and to plan capacity | Contract (Art. 6(1)(b)); our legitimate interest in preventing abuse (Art. 6(1)(f)) |
| Billing | Billing name and address, VAT number, payment method details, invoices. Stripe holds these; we keep the Stripe customer and subscription identifiers | To take payments and issue invoices | Contract (Art. 6(1)(b)); legal obligations on accounting and tax (Art. 6(1)(c)) |
| Service emails | Your name or email address, the project name, and a link to the result | To tell you when an analysis has finished. You can turn these emails off with the link in each email | Contract (Art. 6(1)(b)) |
| Feedback | The message you send through the feedback form, and whether you allow us to contact you about it | To answer it and improve Spectra | Legitimate interest (Art. 6(1)(f)); your choice for being contacted |
| Technical and security | IP address and request details in server logs, error reports with personal data removed, performance measurements | To run the Service reliably, investigate errors, and protect it from attacks | Legitimate interest (Art. 6(1)(f)) |
| Product analytics | Events such as pages opened and buttons used, a pseudonymous user identifier, and screen recordings of sessions (password fields are masked; recordings can show what is on screen, including your messages) | To understand how Spectra is used and fix problems in it | Your consent (Art. 6(1)(a)) |
| Email enquiries | What you write to us and your contact details | To answer you | Legitimate interest (Art. 6(1)(f)), or steps before a contract (Art. 6(1)(b)) |

You need to provide account data to use Spectra, and billing data to buy a plan. Everything else depends on how
you use the Service.

We use your data only for the purposes above. We do not sell it, and we do not use it for advertising.

## 3. How results are produced

To produce results, Spectra sends the relevant Content to Google's Vertex AI service, using Gemini models
processed in the European Union. Under Google Cloud's terms, Google does not use this data to train its models.

Spectra ranks candidate structures to help you. It does not make decisions that have legal or similarly
significant effects on you.

## 4. Who receives data

We use the following providers. Each processes data only on our instructions, under a data processing agreement.

| Provider | Purpose | Where |
| --- | --- | --- |
| Google Cloud (Google Ireland Ltd.) | Hosting of the application and its data, backups, AI processing (Vertex AI) | European Union (Belgium and Italy) |
| Auth0 by Okta | Sign-in, including sign-in with Google | European Union |
| Stripe | Payments, invoices, the billing portal | European Union and United States |
| Brevo (Sendinblue SAS) | Sending service emails | European Union |
| PostHog | Product analytics and session recordings, with your consent | European Union |
| Google Analytics (Google Ireland Ltd.) | Usage statistics, with your consent | European Union and United States |
| Sentry (Functional Software, Inc.) | Error reports, with personal data removed | European Union and United States |
| Grafana Labs | Monitoring of performance and availability | European Union and United States |
| Firebase Hosting (Google) | Hosting this website | Global content delivery network |

We may also disclose data when the law requires it, or to protect our rights in a dispute.

## 5. Transfers outside the European Union

Some providers above may process data in the United States. Those transfers rely on the European Commission's
adequacy decision for the EU-U.S. Data Privacy Framework, for providers certified under it, or on the Commission's
Standard Contractual Clauses.

## 6. How long we keep data

- **Account and Content:** while your account is open. Projects you delete are removed straight away from our
  systems. When you ask us to close your account, we delete its data within 30 days.
- **Backups:** copies of deleted data remain in our backups until those backups expire, normally within 30 days.
- **Allowance records:** the record that an analysis was counted stays while your account is open, even if you
  delete the project, so that allowances stay correct.
- **Billing records:** 10 years, as Italian accounting law requires.
- **Feedback and email enquiries:** as long as needed to handle them, and at most 24 months.
- **Technical and security data:** at most 90 days, unless we need it longer to investigate a specific incident.
- **Product analytics:** session recordings for at most 90 days, other analytics data for at most 14 months.

## 7. Your rights

You have the right to:

- access your personal data and receive a copy of it;
- have inaccurate data corrected;
- have your data deleted;
- restrict how we process it;
- receive data you gave us in a portable format;
- object to processing based on our legitimate interests;
- withdraw your consent at any time, without affecting processing that happened before.

To use these rights, email [{{ privacy_email }}](mailto:{{ privacy_email }}) from your account's address. We answer
within one month.

You also have the right to complain to a data protection authority. In Italy that is the Garante per la protezione
dei dati personali, [www.garanteprivacy.it](https://www.garanteprivacy.it).

## 8. Cookies and storage in the application

- **Necessary:** your sign-in tokens are kept in the page's memory. The application stores your session and
  interface settings in your browser's session and local storage, including the sign-in method and email you last
  used so the sign-in page can suggest them. A cookie remembers your language. Our sign-in provider and Stripe set
  their own necessary cookies on their pages.
- **Analytics, with your consent:** Google Analytics sets cookies to tell visits apart. PostHog keeps an anonymous
  identifier for the browser session only.

The cookies used on this website are described in the [Cookie Notice](/cookies/).

## 9. This website

When you visit this website, we record which pages you open and how you arrived, such as campaign tags and the
referring website, only if you accept analytics. We configure analytics not to send spectrum names, structures, or
sample descriptions. The website has no contact form. Email links open your own email program.

## 10. Security

Data is encrypted in transit. Each account's files are kept in a separate workspace, analyses run in isolated
processes without network access, and access to production systems is limited to the people who operate them.

## 11. Children

Spectra is a professional tool and is not meant for anyone under 18.

## 12. Changes to this notice

We will update this notice when our processing changes. The date at the top shows the latest version. We will tell
account holders about significant changes by email or in the app.
