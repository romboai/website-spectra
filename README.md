# Spectra marketing website

Jekyll site for [Spectra by ROMBO AI](https://spectra.rombo.ai), the NMR compound-identification product.

This repository is the **marketing, documentation and SEO** site. The live product application is a separate SpectraPro deployment that currently also answers `https://spectra.rombo.ai`. Read `MIGRATION_NOTES.md` and `DEPLOYMENT.md` before pointing DNS at GitHub Pages.

## Requirements

- Ruby 3.3 (see `.ruby-version`)
- Bundler

## Local setup

```bash
rbenv local 3.3.0   # if you use rbenv
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000

Staging / noindex preview:

```bash
bundle exec jekyll serve --config _config.yml,_config.staging.yml
```

## Production build

```bash
JEKYLL_ENV=production bundle exec jekyll build
bash scripts/qa.sh
```

## Add a documentation page

1. Create `_docs/your-page.md` with `title`, `description`, unique `h1` or `title`, `permalink: /docs/your-page/`, and `nav_order`.
2. Keep claims inside what `CONTENT_GUIDE.md` allows.
3. Rebuild and confirm the sidebar link.

## Add a use case

1. Create `_use_cases/name.md` with a unique permalink under `/use-cases/`.
2. Add a matching item to `_data/use_cases.yml`.
3. Write a distinct scientific job — do not clone another page.

## Add a changelog entry

1. Add `_changelog/short-name.md` with `date`, `version`, `title`, `description`.
2. Use Added / Improved / Fixed / Known limitations headings.

## Edit navigation

Primary and footer links live in `_data/navigation.yml`.

## Edit product URLs

The only application URL setting is `product_url` in `_config.yml`. Templates must use `site.product_url`.

## Configure analytics

Set `posthog_key` and `posthog_host` in `_config.yml` or a private production config. Scripts load only after cookie consent. See `ANALYTICS_PLAN.md`.

## Configure the form endpoint

Set `lead_form_endpoint` to the Cloudflare Worker URL. Leave it empty to fall back to `mailto:contact@rombo.ai`. Never put a Make.com key in frontend files.

## Deployment

GitHub Actions builds and deploys from **`develop`**, which is the confirmed production branch of this repository. See `DEPLOYMENT.md`.
