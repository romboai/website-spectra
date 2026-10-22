---
title: Terms of Service
h1: Terms of Service
description: The terms for using the Spectra application, its paid plans, and this website, offered by ROMBO AI S.r.l.
permalink: /terms/
eyebrow: Legal
---
{% assign company = site.data.company %}
{% assign free_plan = site.data.pricing.plans | where: "id", "free" | first %}
{% assign pro_plan = site.data.pricing.plans | where: "id", "pro" | first %}
{% include fact.html path="pricing.pro_analyses_included" %}{% if fact_ok %}{% assign pro_allowance = fact_node.value %}{% else %}{% assign pro_allowance = "the number of analyses per month shown on the pricing page" %}{% endif %}

Last updated: 22 October 2026

These terms are an agreement between you and {{ company.legal_name }} ("ROMBO AI", "we", "us") about the Spectra
application at [{{ site.app_url }}]({{ site.app_url }}) (the "Service") and this website. Please read them
before you create an account or buy a plan. Our [Privacy Notice](/privacy/) explains how we handle personal data.

If your organisation has signed a separate agreement with us for Spectra, that agreement applies where it differs
from these terms.

## 1. Who we are

{{ company.legal_name }}, {{ company.address.line1 }}, {{ company.address.line2 }},
{{ company.address.postal_code }} {{ company.address.city }}, {{ company.address.country }}.
{% include fact.html path="company.vat_number" %}{% if fact_ok %}VAT number {{ fact_node.value }}.{% endif %}
Email: [{{ site.contact_email }}](mailto:{{ site.contact_email }}).

## 2. Words used in these terms

- **Content** means everything you put into the Service or get out of it: NMR files and other files you upload,
  project names and descriptions, messages you exchange with the assistant, results, and the structures and
  comments you accept or reject.
- **Analysis** means one identification in one project with a given set of input files (see section 4).
- **Consumer** means a person who uses the Service for purposes outside their trade, business or profession.
  **Business customer** means anyone else, including people acting for a company, university or laboratory.

## 3. Your account

- You sign in through our sign-in provider with email, passkey or Google. You must give accurate information and
  keep your sign-in method secure.
- An account is for one person. Do not share it, and do not create several accounts to obtain more free analyses.
- You must be at least 18 years old, or have the authority to accept these terms for the organisation you act for.
- You are responsible for what happens under your account. Tell us at once at
  [{{ site.contact_email }}](mailto:{{ site.contact_email }}) if you think someone else has used it.

## 4. Plans and allowances

- **Free:** {{ free_plan.price_note }} in total, with no payment card required. The Free allowance does not renew.
- **Pro:** €{{ pro_plan.amount }} per month or €{{ pro_plan.annual_amount }} per year, with {{ pro_allowance }}.
  Unused analyses do not carry over to the next billing period.
- **Enterprise:** scoped and priced in a separate written agreement.

The pricing page in force when you buy describes what each plan includes.

**How analyses are counted.** An analysis is counted once per project and set of input files, when you accept a
result or move on without accepting one. Re-running the same analysis, a run that fails, and the example projects
we provide are not counted. Deleting a project does not give an analysis back.

When your allowance is used up, you cannot start new analyses until your next billing period starts or you
upgrade. Your existing projects and results remain available.

## 5. Prices, payment and renewal

- Payments are processed by Stripe. We do not receive or store your full card details.
- Prices are in euros. Any VAT or other tax that applies to you is calculated at checkout from your location and
  tax status, and shown before you pay. Business customers can enter a VAT number at checkout.
- **Paid plans renew automatically** at the end of each monthly or yearly period, and the price for the new
  period is charged at its start, until you cancel.
- If a payment fails, Stripe retries it. If it still fails, we may move your account to the Free plan.
- Promotion codes apply only on the conditions stated with the code, cannot be exchanged for cash, and cannot be
  added to a subscription after you have bought it.
- Invoices and receipts are available under **Plan & billing → Manage billing** in the app.
- We may change prices for future billing periods. We will tell you at least 30 days before a change applies to
  your subscription, and you can cancel before it does.

## 6. Changing plans and cancelling

- You can switch between monthly and yearly billing, or cancel, at any time under **Plan & billing → Manage
  billing**.
- Moving from monthly to yearly takes effect immediately: the unused part of your current month is credited
  against the yearly price. Moving from yearly to monthly takes effect at the end of your current year.
- **When you cancel, your plan stays active until the end of the period you have paid for**, and then ends.
  Except as set out in section 7 or required by law, we do not refund partial periods.
- After a paid plan ends you keep access to your projects and results. New analyses then fall under the Free
  allowance, and analyses you ran on a paid plan count towards it, so in most cases no free analyses remain.

## 7. Right of withdrawal for consumers in the EU

If you are a consumer, you may withdraw from your first subscription to a paid plan **within 14 days** of buying
it, without giving a reason, and we will refund **the full amount you paid**.

To withdraw, send us a clear statement before the 14 days end, for example an email to
[{{ site.contact_email }}](mailto:{{ site.contact_email }}). You may use this model form, but you do not have to:

> To {{ company.legal_name }}, {{ company.address.line1 }}, {{ company.address.line2 }},
> {{ company.address.postal_code }} {{ company.address.city }}, {{ company.address.country }},
> {{ site.contact_email }}:
> I hereby give notice that I withdraw from my contract for the supply of the following service: Spectra
> [plan], ordered on [date], account email [email]. Name. Date.

We refund you within 14 days of receiving your notice, using the payment method you paid with, at no cost to you.
Your plan ends when the refund is issued.

## 8. Your content

- **You keep all rights in your Content.**
- You allow us to host, copy, process and transmit your Content **only to provide the Service to you**, to keep it
  secure, and to give you support when you ask for it. This includes sending Content to the AI model provider we
  use to produce results, as described in the [Privacy Notice](/privacy/).
- We do not sell your Content, and we do not show it to other users.
- You must have the right to upload what you upload. If Content belongs to a client or employer, or is
  confidential, make sure you are allowed to process it with an online service. Organisations that need a data
  processing agreement can contact us before uploading.
- Do not upload personal data that the Service does not need, such as patient information or identifiable sample
  donors.

## 9. Results and scientific responsibility

- Spectra uses algorithms and AI models to rank candidate structures. **Results can be incomplete or wrong.** They
  are a decision aid, not a confirmed identification.
- You remain responsible for the scientific interpretation of your data and for any decision based on a result.
- Unless we have agreed otherwise in writing, the Service is not validated for regulated or safety-critical use,
  such as GMP or GLP release decisions, clinical or diagnostic use, or forensic evidence.

## 10. Acceptable use

You must not:

- break the law, or upload Content you have no right to use;
- try to get around plan allowances, usage limits, access controls or the isolation between accounts;
- probe, scan or test the Service for vulnerabilities without our written permission (report security issues
  to [{{ site.contact_email }}](mailto:{{ site.contact_email }}));
- upload malicious code, or interfere with the Service or other users;
- access the Service through automated means other than the interfaces we provide;
- copy, resell or provide the Service to third parties, or reverse engineer it except where the law allows.

## 11. Availability and changes to the Service

We work to keep the Service available, but it may be interrupted for maintenance, updates or reasons outside our
control. We improve the Service continuously and may change or remove features. If a change significantly reduces
what a paid plan includes, we will tell you in advance, and you may cancel and receive a refund for any period
you have paid for but not yet started.

## 12. Suspension and closing your account

- You can stop using the Service at any time. To close your account and delete its data, email
  [{{ site.contact_email }}](mailto:{{ site.contact_email }}) from the account's address. Cancel any paid plan first.
- We may suspend or close an account that seriously or repeatedly breaches these terms, that puts the Service or
  other users at risk, or whose payment remains unpaid. We will give notice and a chance to fix the problem where
  that is reasonable.
- After an account is closed we delete its data as described in the [Privacy Notice](/privacy/).

## 13. Our intellectual property

The Service, its software, models, documentation and this website belong to ROMBO AI or its licensors. These terms
give you a personal, non-transferable right to use the Service while your account is open; they do not transfer any
other rights. If you send us feedback or suggestions, we may use them freely.

## 14. Liability

**Consumers:** you have the legal guarantee of conformity and the other rights given to consumers by the Italian
Consumer Code and by the law of the country where you live. Nothing in these terms limits those rights.

**Business customers:** to the extent permitted by law,

- the Service is provided "as is" and "as available", without warranties of fitness for a particular purpose or
  of the accuracy of results;
- we are not liable for indirect or consequential loss, including loss of profit, data, business or reputation;
- our total liability for all claims in any 12-month period is limited to the fees you paid us in the 12 months
  before the event that gave rise to the claim.

These limits do not apply to wilful misconduct or gross negligence, or to any liability that cannot be limited by
law.

## 15. Changes to these terms

We may update these terms, for example when the Service or the law changes. For changes that materially affect
you, we will give at least 30 days' notice by email or in the app. If you do not agree, you can cancel before the
change applies. The date at the top of this page shows when these terms last changed.

## 16. Governing law and disputes

These terms are governed by Italian law.

- **Business customers:** the courts of Cagliari, Italy, have exclusive jurisdiction.
- **Consumers:** you keep the protection of the mandatory laws of the country where you live, and you may bring
  proceedings in the courts of your place of residence.

Please contact us first, so that we can try to resolve the issue together.

## 17. Using this website

This website at [{{ site.url }}]({{ site.url }}) gives information about Spectra. Do not attempt to disrupt it or
scrape it in a way that impairs it, and do not send confidential laboratory data through enquiries. The names
Spectra and ROMBO AI are used by {{ company.legal_name }} for its products. Third-party names (Bruker, JEOL, Varian, TopSpin, Mnova, Delta,
ACD/Labs and others) belong to their owners.

## 18. Contact

[{{ site.contact_email }}](mailto:{{ site.contact_email }})
