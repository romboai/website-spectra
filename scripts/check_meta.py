#!/usr/bin/env python3
from pathlib import Path
import re
import sys

site = Path(__file__).resolve().parents[1] / "_site"
titles = {}
errors = []

for html in site.rglob("*.html"):
    text = html.read_text(encoding="utf-8", errors="ignore")
    title = re.search(r"<title>(.*?)</title>", text, re.I | re.S)
    desc = re.search(r'name="description"\s+content="(.*?)"', text, re.I | re.S)
    h1s = re.findall(r"<h1\b[^>]*>(.*?)</h1>", text, re.I | re.S)
    rel = str(html.relative_to(site))
    if html.name == "404.html":
        continue
    if "Redirecting" in text and 'http-equiv="refresh"' in text:
        continue
    if not title or not title.group(1).strip():
        errors.append(f"empty title: {rel}")
        continue
    t = re.sub(r"\s+", " ", title.group(1)).strip()
    titles.setdefault(t, []).append(rel)
    if not desc or not desc.group(1).strip():
        errors.append(f"missing meta description: {rel}")
    visible_h1 = [re.sub("<.*?>", "", h).strip() for h in h1s]
    visible_h1 = [h for h in visible_h1 if h]
    if len(visible_h1) != 1:
        errors.append(f"{len(visible_h1)} H1s in {rel}: {visible_h1}")

for title, files in titles.items():
    if len(files) > 1:
        errors.append(f"duplicate title '{title}': {files}")

if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"Checked {len(list(site.rglob('*.html')))} HTML files.")
