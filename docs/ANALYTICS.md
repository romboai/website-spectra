# Marketing site analytics events

Consent-gated. Events fire only after the visitor accepts analytics cookies. We never send form field values, spectrum names, structures, or sample descriptions.

PostHog is loaded from `_includes/posthog.html` → `assets/js/analytics.js`. Autocapture and session replay stay off.

## Events

| Event | When | Properties |
| --- | --- | --- |
| `cta_click` | Click on a marketing CTA to the app or a conversion page | `location` from `data-cta-src` (e.g. `home_hero`, `header`) |
| `sample_view` | `/examples/sample-analysis/` is viewed, or a “worked example” link is clicked | — |
| `sample_candidate_open` | A candidate accordion on the sample analysis is opened | `candidate` slug |
| `pricing_view` | `/pricing/` is viewed | — |
| `plan_cta_click` | A plan CTA is clicked | `plan` (`free`, `pro`, `lab`, `enterprise`) |
| `pilot_page_view` | `/pilot/` is viewed | — |
| `lead_form_submit_success` | Contact or pilot form POST succeeded | — |
| `lead_form_submit_error` | Form POST failed, or the endpoint is unconfigured locally | — |
| `docs_page_view` | Any `/docs/` page is viewed | `path` |

Legacy names (`homepage_viewed`, `docs_opened`, `try_spectra_clicked`, …) may still fire from older `data-analytics` attributes until those nodes are renamed.

UTM parameters and referrer domain are attached to every event via `safeProps()`.
