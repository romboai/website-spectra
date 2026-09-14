# Deployment

## Current hosting reality

As of 14 September 2026 the public hostname `spectra.rombo.ai` is served by **nginx** running the SpectraPro application (`0.6.0-alpha`). It is **not** this GitHub Pages landing.

This repository deploys a Jekyll site from **`main`**. Do not flip DNS to GitHub Pages until product and marketing agree how `/login` and the application will be hosted.

Recommended split (human decision):

- Marketing + docs: this Jekyll site on GitHub Pages or another static host
- Application: keep nginx / app host, expose login at `https://spectra.rombo.ai/login` or move the app to a subdomain and update `product_url`

## GitHub Pages setup

1. Keep the repository production branch as **`main`**.
2. Enable GitHub Pages with **GitHub Actions** as the source (not the default Jekyll builder).
3. `CNAME` contains `spectra.rombo.ai`.
4. Production workflow: `.github/workflows/pages.yml`
5. Pull-request tests: `.github/workflows/test.yml`

## DNS and CNAME

- Record: `spectra.rombo.ai` → GitHub Pages (only after the split is approved)
- File: `CNAME`
- HTTPS should stay on

## GitHub Actions

The workflow:

1. Checks out the repository
2. Sets up Ruby 3.3
3. Installs Bundler dependencies
4. Builds Jekyll with `JEKYLL_ENV=production`
5. Runs `scripts/qa.sh` (HTMLProofer, secret grep, title/H1/description checks)
6. Uploads the Pages artifact
7. Deploys only from `main`

Optional Pagefind step can be added after `jekyll build` if you want static search. The site is usable without it.

Staging / noindex: build with `--config _config.yml,_config.staging.yml`. Production `noindex` must remain `false`.

## Environment secrets

Do **not** store Make.com or Auth0 secrets in this repo.

Lead proxy (`workers/lead-proxy/`):

```bash
cd workers/lead-proxy
npx wrangler secret put MAKE_WEBHOOK_URL
npx wrangler secret put MAKE_WEBHOOK_KEY
# optional
npx wrangler secret put TURNSTILE_SECRET
npx wrangler deploy
```

Then set `lead_form_endpoint` in `_config.yml` to the Worker URL.

Rotate any webhook secret that was previously committed to the old React landing. Do not write the old value anywhere.

## PostHog setup

1. Create a project (EU host if that is policy).
2. Put the project key in `posthog_key`.
3. Confirm autocapture and session replay stay disabled in `assets/js/analytics.js`.
4. Accept cookies on a staging build and verify only the allow-listed events fire.

## Production checklist

- [ ] `product_url` still points at the live login
- [ ] `lead_form_endpoint` is the Worker, not a Make.com URL
- [ ] No secrets in `_site` or frontend JS
- [ ] `noindex` is false in production
- [ ] Unverified KPIs are absent from `_site`
- [ ] `bundle exec jekyll build` and `scripts/qa.sh` pass
- [ ] Custom domain and HTTPS
- [ ] Homepage readable with JavaScript disabled
- [ ] DNS change will not delete `/login`

## Search Console checklist

- [ ] Add `https://spectra.rombo.ai`
- [ ] Verify ownership
- [ ] Submit `https://spectra.rombo.ai/sitemap.xml`
- [ ] Inspect homepage, `/product/`, `/docs/`, `/research/`

## Bing Webmaster Tools checklist

- [ ] Add the domain
- [ ] Submit the same sitemap
- [ ] Confirm robots.txt allows production crawlers

## Sitemap submission

Production sitemap: `https://spectra.rombo.ai/sitemap.xml`  
Changelog feed: `https://spectra.rombo.ai/changelog.xml`  
`robots.txt` points crawlers at the sitemap when `noindex` is false.

## Post-launch crawl verification

- [ ] Crawl homepage, docs, use cases, sample analysis
- [ ] Confirm canonical host is `https://spectra.rombo.ai`
- [ ] Confirm no leftover React routes besides documented hashes (`#problem`, `#how-it-works`, `#features`, `#beta` still exist on the homepage)
- [ ] Confirm `llms.txt` and `llms-full.txt` are reachable
- [ ] Confirm Auth login still works if DNS was changed

## Recommended updates on rombo.ai

- Link to `https://spectra.rombo.ai` from NMR compound-identification pages
- Link to Spectra documentation, not a duplicate article
- Use **Spectra by ROMBO AI** consistently
- Keep corporate essays on rombo.ai; do not clone them
- Avoid identical title tags on both domains
