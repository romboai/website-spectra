# Facts the team still needs to confirm

Templates omit any fact that is not `verified: true` with a non-empty `value` in `_data/facts.yml`. Numerical product KPIs also live in `_data/evidence.yml` and stay hidden unless both `verified` and `public` are true.

| Key | Where it is used | Question |
| --- | --- | --- |
| `company.vat_number` | Footer, Organization JSON-LD | What is the Italian VAT / P. IVA number? |
| `company.rea` | Footer | REA number (Camera di Commercio)? |
| `company.share_capital` | Footer | Share capital, including whether fully paid? |
| `company.privacy_email` | Privacy notice | Dedicated privacy contact, or keep `contact@rombo.ai`? |
| `company.social_x_handle` | `twitter:site` / `twitter:creator` | X/Twitter handle, if any? |
| `company.linkedin_url` | Organization `sameAs` | Company LinkedIn URL? |
| `company.booking_url` | Contact and pilot | URL for a 20-minute booking calendar? |
| `product.typical_runtime` | Homepage CTA microcopy | Typical time from upload to shortlist? |
| `product.match_definition` | Docs, “how to trust a result” | What does the match value mean, mathematically? |
| `product.shift_predictor` | How it works | Which predictor (name / method) compares shifts? |
| `product.predictor_error_1h_ppm` | Docs | Typical 1H predictor error (ppm)? |
| `product.predictor_error_13c_ppm` | Docs | Typical 13C predictor error (ppm)? |
| `product.libraries` | How it works, docs | Which libraries are searched? |
| `product.library_size` | How it works | Searchable library size, with uniqueness rule? |
| `product.one_h_only_supported` | Supported data | Can a chemist submit 1H without 13C? |
| `product.low_field_supported` | Supported data | Are benchtop / low-field spectra supported? |
| `product.export_formats` | Homepage, pricing table, export docs | Export formats for the shortlist/evidence? |
| `product.audit_trail` | Security, enterprise | Is there an audit trail in the app today? |
| `product.api_available` | `/docs/api/`, pricing | Is a public or partner API available now? |
| `product.rose_role_in_product` | Homepage research, Research page | How does ROSE enter the Spectra pipeline? |
| `product.next_experiment_suggestion` | Homepage “what you get” | Sentence describing the next-experiment suggestion, if the product shows one. |
| `product.dpa_available` | Security, pricing table | What can we say about a data processing agreement? |
| `product.private_deployment` | Pricing table | What private-deployment options can we list? |
| `data.upload_formats_detail` | `/docs/supported-data/` | Per vendor: what file to upload, raw vs processed, notes. |
| `data.max_upload_size` | Supported data | Max upload size? |
| `data.solvents` | Supported data | Supported / recommended solvents? |
| `data.retention` | Data handling, homepage, FAQ | How long are uploaded spectra retained? |
| `data.training_use` | Data handling, homepage, FAQ | Are customer spectra used for training? |
| `data.deletion` | Data handling | How can a customer delete spectra? |
| `data.hosting_region` | Security, data handling | Hosting region (e.g. EU)? |
| `data.subprocessors` | Security, data handling, privacy | Name, purpose, region for each subprocessor. |
| `data.encryption` | Security | What encryption is used in transit and at rest? |
| `pricing.vat_note` | Pricing billing FAQ | VAT inclusive or exclusive? |
| `pricing.free_expiry` | Pricing billing FAQ | Do the 3 free analyses expire or reset? |
| `pricing.pro_analyses_included` | Pricing table | Analyses included on Pro? |
| `pricing.lab_analyses_included` | Pricing table | Analyses included on Lab? |
| `pricing.academic_offer` | Pricing | Academic discount or plan? |
| `pricing.credit_packs` | Pricing | Extra analysis packs? |
| `pricing.pilot_scope` | `/pilot/` | What a standard pilot includes. |
| `pricing.pilot_price` | `/pilot/` | Pilot price, if any public figure. |
| `pricing.founding_price_note` | Pricing banner | Founding-price note, if still offered. |
| `pricing.monthly_annual_switch` | Pricing billing FAQ | Can a customer switch between monthly and annual billing? |
| `proof.customer_logos` | Homepage proof strip | Logos with written permission. |
| `proof.case_studies` | `/customers/` | Published case studies. |
| `LEAD_FORM_ENDPOINT` | Production build, contact/pilot forms | Cloudflare Worker URL for the lead proxy. Add GitHub secret `LEAD_FORM_ENDPOINT`. Also allow origin `https://spectrahome.rombo.ai` on the Worker. |

## Screenshots to supply (`assets/docs/`)

Getting started: login, upload, results. Running an analysis: objective, context, quality warnings. Understanding results: shortlist, per-shift view.

## Example file

A downloadable example spectrum under `assets/examples/`, if we may publish one.

## Sample analysis measured data

Per-atom observed/predicted/residual tables for the teaching case (recommended: luteolin vs kaempferol, C15H10O6). Until supplied, the public example stays narrative-only.
