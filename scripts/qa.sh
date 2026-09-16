#!/usr/bin/env bash
set -euo pipefail
export LANG="${LANG:-en_US.UTF-8}"
export LC_ALL="${LC_ALL:-en_US.UTF-8}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="${ROOT}/_site"

if [[ ! -d "$SITE" ]]; then
  echo "Missing _site. Run bundle exec jekyll build first." >&2
  exit 1
fi

echo "== HTMLProofer =="
bundle exec htmlproofer "$SITE" \
  --disable-external \
  --ignore-missing-alt \
  --no-enforce-https \
  --ignore-urls "/^mailto:/,/^#/" \
  --checks "Links,Images,Scripts"

echo "== Secret pattern scan =="
if grep -RIn -E 'hook\.eu2\.make\.com/[A-Za-z0-9]+|VITE_HUBSPOT_API_KEY\s*=\s*['\''\"][^'\''\"]+' \
  --exclude-dir=.git --exclude-dir=_site --exclude-dir=vendor \
  --exclude-dir=.bundle --exclude='qa.sh' \
  "$ROOT"; then
  echo "Possible secret pattern found." >&2
  exit 1
fi

echo "== Placeholder URL scatter =="
# product URL must live in _config.yml only as a concrete value
if grep -RIn 'PLACEHOLDER_SET_PRODUCT_URL\|PLACEHOLDER.example.invalid' \
  --exclude-dir=.git --exclude-dir=_site --exclude-dir=vendor --exclude='qa.sh' "$ROOT"; then
  echo "Scattered placeholder URL found." >&2
  exit 1
fi

echo "== Unverified KPI display =="
kpi_hits="$(grep -RIn -E '\b82%\b|\b97%\b|94M\+|21\+' "$SITE" | grep -vE ':[0-9]{2}:21\+|published_time|datePublished|dateModified|updated>|published>' || true)"
if [[ -n "$kpi_hits" ]] && echo "$kpi_hits" | grep -viqE 'research|evidence registry|hidden|not shown|not display'; then
  echo "$kpi_hits"
  echo "Historical unverified KPI may be visible in output." >&2
  exit 1
fi

echo "== Duplicate titles =="
python3 "${ROOT}/scripts/check_meta.py"

echo "== Canonical host =="
if ! grep -R "https://spectrahome.rombo.ai" "$SITE" >/dev/null; then
  echo "Expected marketing host missing from build." >&2
  exit 1
fi

echo "== Copy lint =="
python3 "${ROOT}/scripts/check_copy.py"

echo "QA passed."
