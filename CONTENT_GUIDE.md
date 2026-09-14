# Content guide

## Product naming

- **Spectra** — short product name
- **Spectra by ROMBO AI** — public brand (live homepage)
- **Spectra AI** — used on Auth0 (“Log in to Spectra AI to continue to Spectra”)
- Do not write SpectraAI as one word on new pages; the retired landing used that form
- **ROSE** — public 1H NMR research model, not the product
- **ROMBO AI** / **ROMBO AI S.r.l.** — company

## Terminology

Preferred: assisted compound identification, ranked candidates, traceable evidence, residual error, chemist in control, next experiment, vendor-neutral workflow.

Avoid: replace chemists, guaranteed identification, fully autonomous, zero errors, 100% accurate, regulatory compliant (unless a named certificate exists), works with every instrument, revolutionary AI.

## Claim rules

- Numerical KPIs render only when `_data/evidence.yml` has `verified: true` and `public: true`.
- Do not merge ROSE paper metrics into product accuracy claims.
- Do not list a file format unless it is in `_data/formats.yml` with `verified: true`.
- Ranking is never confirmation.
- The chemist remains responsible for final interpretation.
- Published prices live only in `_data/pricing.yml`. Do not invent VAT, overage, extra-seat, or academic-discount figures.

## Use-case pages

Each page is a different analytical job (verification, impurity, dereplication, unknown, natural products, metabolites). If two pages could swap paragraphs without damage, rewrite them.

Required sections: target user, problem, existing workflow, time lost, how Spectra assists, data, output, limitations, validation, links.

## Documentation

Write for a scientist who will upload a spectrum. If a policy is unknown, say **needs legal/product review** instead of inventing it.

## Scientific disclaimer

Every identification path should remind the reader that Spectra produces a shortlist and evidence, not a closed identity.

## Internal linking

Cluster around `/product/`, `/docs/`, `/use-cases/`, `/research/`, `/examples/sample-analysis/`. Link out to rombo.ai for corporate essays; do not copy those articles.

## Image rules

- Use the live orange molecular logo
- No stock photography or generic AI robots
- Example tables must be labelled as examples or schematics
- Decorative motifs get empty `alt`

## Competitor naming

Name TopSpin, Mnova, Delta and ACD/Labs only to describe workflow fit. No pricing, no “best”, no fake integrations. Trademarks belong to their owners.

## Canonical strategy with rombo.ai

| Domain | Owns |
| --- | --- |
| spectra.rombo.ai | Product, docs, examples, use cases, methodology, product security, changelog, onboarding |
| rombo.ai | Corporate story, industrial platform, company news, general industry essays |
