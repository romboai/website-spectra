#!/usr/bin/env python3
"""Fail if rendered HTML still contains leaked guardrail language or leftover markup."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"

PATTERNS = [
    (r"live product", "live product"),
    (r"live homepage", "live homepage"),
    (r"live site", "live site"),
    (r"live login", "live login"),
    (r"live Spectra", "live Spectra"),
    (r"public materials", "public materials"),
    (r"public product description", "public product description"),
    (r"public list does not", "public list does not"),
    (r"needs legal", "needs legal"),
    (r"legal/product review", "legal/product review"),
    (r"legal review", "legal review"),
    (r"reviewed policy", "reviewed policy"),
    (r"evidence registry", "evidence registry"),
    (r"approved links", "approved links"),
    (r"we are willing to list", "we are willing to list"),
    (r"not filler", "not filler"),
    (r"do not invent", "do not invent"),
    (r"\binvented\b", "invented"),
    (r"without inventing", "without inventing"),
    (r"do not assume", "do not assume"),
    (r"competitor lists", "competitor lists"),
    (r"lead_form_endpoint", "lead_form_endpoint"),
    (r"if enabled in a given build", "if enabled in a given build"),
    (r"a paid plan does not", "a paid plan does not"),
    (r"historical marketing figures", "historical marketing figures"),
    (r"what this site can say", "what this site can say"),
    (r"this page states only", "this page states only"),
    (r"this site does not claim", "this site does not claim"),
    (r"this website does not", "this website does not"),
    (r"schematic illustration, not a benchmark", "schematic illustration"),
    (r"on on the order", "on on"),
    (r"S\.r\.l\.\.", "S.r.l.."),
    (r"\{\{", "unrendered Liquid"),
    (r"\{%", "unrendered Liquid"),
    (r"\bTODO\b", "TODO"),
    (r"\bTBD\b", "TBD"),
    (r"\blorem\b", "lorem"),
    (r"romboai\.eu\.auth0\.com", "Auth0 tenant hostname"),
    (r"Ask product or legal", "Ask product or legal"),
]

SCRIPT_OR_STYLE = re.compile(r"<(script|style)\b[^>]*>.*?</\1>", re.I | re.S)
TAGS = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")


def visible_text(html: str) -> str:
    html = SCRIPT_OR_STYLE.sub(" ", html)
    html = TAGS.sub(" ", html)
    return WS.sub(" ", html)


def main() -> int:
    if not SITE.is_dir():
        print("Missing _site. Run bundle exec jekyll build first.", file=sys.stderr)
        return 1
    errors = []
    files = sorted(SITE.rglob("*.html"))
    for path in files:
        raw = path.read_text(encoding="utf-8", errors="ignore")
        if "Redirecting" in raw and 'http-equiv="refresh"' in raw:
            continue
        text = visible_text(raw)
        rel = str(path.relative_to(SITE))
        # Unrendered Liquid and TODOs also matter in attributes/scripts.
        haystacks = (("visible", text), ("raw", raw))
        for label, blob in haystacks:
            for pattern, name in PATTERNS:
                if label == "visible" and name in {"unrendered Liquid", "TODO", "TBD", "lorem"}:
                    continue
                if label == "raw" and name not in {"unrendered Liquid", "TODO", "TBD", "lorem", "lead_form_endpoint", "Auth0 tenant hostname"}:
                    continue
                if re.search(pattern, blob, re.I):
                    errors.append(f"{rel}: {name}")
    if errors:
        print("Copy lint failed:")
        print("\n".join(errors))
        return 1
    print(f"Copy lint passed on {len(files)} HTML files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
