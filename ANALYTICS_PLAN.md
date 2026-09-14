# Analytics plan (PostHog)

Analytics load only after explicit consent. Autocapture, session replay and text capture stay off.

Never send: uploaded spectrum names, molecular structures, sample names, free-text scientific descriptions, form field values, confidential laboratory information.

## Website events (implemented)

| Event | Trigger | Properties | Purpose | Funnel |
| --- | --- | --- | --- | --- |
| homepage_viewed | Path `/` | utm_*, referrer_domain, landing_page | Top of funnel | 1 |
| primary_cta_clicked | `[data-analytics=primary_cta_clicked]` | same safe props | CTA interest | 4 |
| try_spectra_clicked | Try Spectra links | same | Self-service intent | 4 |
| request_pilot_clicked | Pilot / contact CTAs | same | Enterprise intent | 9 |
| docs_opened | Path `/docs/` or docs CTA | same | Evaluation depth | 3 |
| getting_started_opened | Path `/docs/getting-started/` | same | Onboarding | 3 |
| sample_analysis_opened | Sample analysis links or path | same | Example engagement | 2 |
| research_opened | Research links or path | same | Scientific trust | 2 |
| changelog_opened | Path `/changelog/` | same | Return visit | 9 |
| lead_form_started | First focus inside lead form | same | Lead start | 9 |
| lead_form_submitted | Successful submit | same, **no field values** | Lead complete | 9 |
| lead_form_failed | Failed submit | same | Form reliability | — |
| newsletter_submitted | Reserved; no newsletter yet | — | — | — |
| external_github_clicked | GitHub / ROSE repo links | same | Research click-out | 2 |
| external_rombo_clicked | rombo.ai links | same | Cross-domain | 2 |

Safe properties only: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `referrer_domain`, `landing_page`.

## Funnel

1. Landing page viewed  
2. Product or sample explored  
3. Documentation viewed  
4. Try Spectra clicked  
5. Signup or app access started *(product app)*  
6. First upload started *(product app)*  
7. Analysis completed *(product app)*  
8. Results reviewed *(product app)*  
9. Return visit or enterprise inquiry  

## Product-app events still to implement

The SpectraPro application (currently hosted on the same domain) must implement steps 5–8 without capturing spectrum payloads or structure strings. Suggested names: `signup_started`, `login_completed`, `upload_started`, `analysis_completed`, `results_reviewed`. Do not reuse the historical Google Analytics tag without a consent review.

## Configuration

- `posthog_key` / `posthog_host` in `_config.yml`
- Consent key `spectra-consent` in `localStorage`
- Implementation: `_includes/posthog.html`, `assets/js/consent.js`, `assets/js/analytics.js`
