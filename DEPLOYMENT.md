# Deployment

## Hosting

Since 21 October 2026:

| Hostname | Serves | Where |
|---|---|---|
| `spectra.rombo.ai` | This site | Firebase Hosting, site `coastal-pointer-384111` |
| `app.spectra.rombo.ai` | The SpectraPro application | Its own VM (SpectraPro repository, `PRODUCTION.md`) |
| `spectrahome.rombo.ai` | The same site, until it is retired | GitHub Pages (`CNAME`, `.github/workflows/pages.yml`) |

`firebase.json` redirects old application links on `spectra.rombo.ai` (`/login`, `/projects`, `/billing`,
`/project/new`, `/global/…` and session links starting with `L3dvcmtzcGFjZS`) to the same path on
`app.spectra.rombo.ai` with a `301`, keeping the query string. Hosting applies redirects before static files and
`404.html`.

## DNS

DNS for `rombo.ai` is Namecheap BasicDNS. In the Host column, enter the name without `.rombo.ai`: Namecheap
appends it.

- `spectra`: the `A` record Firebase gives in the console (Hosting → custom domain), no `AAAA` record
- `spectra` TXT `hosting-site=coastal-pointer-384111`: Firebase's ownership record. Keep it
- `spectra` TXT `brevo-code:…`: Brevo sender verification, unrelated to hosting. Keep it
- `app.spectra`: `A` record to the application VM
- `spectrahome`: CNAME `romboai.github.io`, until `spectrahome` is retired

Firebase renews the certificate for `spectra.rombo.ai` itself.

## GitHub Actions

`.github/workflows/firebase-hosting.yml`:

1. Builds Jekyll with `JEKYLL_ENV=production`. Pull requests add `_config.preview.yml` (`noindex`)
2. Runs `scripts/qa.sh` (HTMLProofer, secret grep, title/H1/description checks, canonical host)
3. Deploys a pull request to its own preview channel and comments the URL
4. Deploys `main` to the live site

`.github/workflows/pages.yml` keeps deploying `main` to GitHub Pages for `spectrahome.rombo.ai`. Remove it and
`CNAME` when `spectrahome` is retired. Pull-request tests: `.github/workflows/test.yml`.

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

- [ ] `product_url` still points at the application login
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
