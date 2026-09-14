# Migration notes

Source of visual identity and current product copy: the **live site** `https://spectra.rombo.ai` inspected on 14 September 2026, not the older React landing in git history.

The older GitHub landing (`romboai/spectra-ai-landing`) was an indigo React/Vite SPA. The live hostname now serves **SpectraPro 0.6.0-alpha** (nginx, Auth0 login, black/off-white marketing view).

## Preserved

- Custom domain `spectra.rombo.ai` (`CNAME`)
- Production branch for this repo: **`main`**
- Live brand: **Spectra by ROMBO AI**, orange molecular logo (`assets/images/logo.png`)
- Live hero copy: “From NMR spectrum to molecular identity, with traceable evidence.”
- Live subheading, audience line, and four-step workflow
- Named data sources from the live homepage: 1H, 13C, Bruker, JEOL, Varian, JCAMP-DX
- Public example card CASE-2043 (Quercetin / Luteolin / Kaempferol), still labelled as an example
- Contact email `contact@rombo.ai`
- Hash targets from the old SPA that still make sense: `#problem`, `#how-it-works`, `#features`, `#beta`
- Self-service access (live **Try** → `https://spectra.rombo.ai/login` → Auth0)

## Migrated

- Public marketing content rebuilt as server-rendered Jekyll (Liquid, Markdown, SCSS, small vanilla JS)
- Product URL centralized as `site.product_url` = `https://spectra.rombo.ai/login`
- Documentation, use cases, research, legal, changelog, `llms.txt`, schema, PostHog scaffold, lead-form Worker
- Visual system taken from the live product (off-white `#f8f8f8`, near-black buttons `#1d1917`, orange logo accent), not the retired indigo landing

## Removed

- React, Vite, TypeScript, Tailwind, lucide-react, HubSpot browser client
- Duplicate macOS “ 2” config files
- Client-side Make.com webhook configuration
- Historical KPI strip (82%, 97%, <30 sec, 21+, 100% explainable, 94M+)
- 8.4 MB `peak_picking.mov` (not used; live site has no autoplay video)
- Google Analytics tag `G-YEP854033P` (present on the live app; not copied here pending consent policy)

## Security warning — rotate secrets

The retired React landing committed a **browser-visible Make.com webhook URL and API key**. Those values must be treated as compromised.

**Rotate the webhook and any related Make.com or CRM credentials immediately.** Do not reuse the old key in the Worker.

This document does **not** reprint the secret.

Also rotate `VITE_HUBSPOT_API_KEY` if that environment value was ever used in a public build.

## URL changes

The old SPA had a single URL (`/`) plus hash fragments. New information architecture adds `/product/`, `/docs/`, `/use-cases/`, `/research/` and related paths. No old path was deleted except hashes, which still resolve on the homepage.

`/access/` redirects to `/pricing/`.

## Configuration still required

1. **DNS / hosting split.** Deploying this Jekyll site to the apex will hide the SpectraPro app unless `/login` is proxied or the app moves. This is a human launch decision.
2. Set `lead_form_endpoint` after the Worker is deployed.
3. Set `posthog_key` if marketing analytics should go live.
4. Legal review: retention, training use, deletion SLA, subprocessors (`/data-privacy/`, `/docs/data-handling/`).
5. Confirm whether private deployment remains an offered enterprise option.
6. Supply approved measured examples if you want more than the labelled CASE-2043 schematic.
7. Decide whether the live app should keep Google Analytics.

## Claims hidden pending verification

All historical landing KPIs in `_data/evidence.yml` have `verified: false` and `public: false`. Templates do not render them.

ROSE parameter count and pretraining corpus size are shown only on `/research/` with public sources.

## Assumptions

- Access mode is `self_service` because the live site has Try + Auth0 sign-up.
- Primary nuclei and vendor families are exactly those stated on the live homepage.
- 2D experiments, IR-as-input, and unpublished format lists stay off the public matrix.
- The CASE-2043 table is a schematic, not a benchmark.
- Company legal identity follows rombo.ai: ROMBO AI S.r.l., Open Campus, Cagliari.
- Published list prices (supplied 14 September 2026): Free = 3 analyses; Pro = €79/month or €790/year; Lab = €299/month for 5 users; Enterprise = custom. Source of truth: `_data/pricing.yml`. VAT, overage, extra seats, and academic discounts stay unpublished.

## How to launch locally

```bash
bundle install
bundle exec jekyll serve
```

## How to deploy

See `DEPLOYMENT.md`. Production workflow deploys from `main`.
