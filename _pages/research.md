---
title: Research and methodology
h1: Research behind Spectra
description: ROSE is ROMBO AI's public 1H NMR foundation model. Spectra is the commercial identification product. This page keeps those two objects separate and lists citation links.
permalink: /research/
eyebrow: Research
---

Two public objects are easy to confuse. They should stay distinct.

## Spectra, the product

Spectra is the commercial web application for NMR compound identification. It retrieves candidates, ranks them, and compares predicted and measured shifts. Product workflows, authentication, and report objects live on this domain.

Do not read a ROSE paper table as a Spectra product specification. Product-level accuracy KPIs from an older landing page are **not displayed** because they lack a public methodology. They are retained as unverified records in the evidence registry.

## ROSE, the research model

ROSE (Reusable One-dimensional Spectrum Embeddings) is a public 1H NMR foundation model released by ROMBO AI. The published materials describe a 7.8M-parameter encoder trained on on the order of 3.2 million 1H spectra, with weights on Hugging Face and code on GitHub.

ROSE is intended for research and prototyping on 1D 1H spectra: embeddings, denoising, peak maps, retrieval heads and related tasks. The public model card states that ROSE is not a structure-elucidation solver.

| Fact | Value | Source |
| --- | --- | --- |
| Parameters | 7.8M | [Hugging Face model card](https://huggingface.co/romboai/rose-1h-nmr) |
| Pretraining spectra | about 3.2 million 1H | [ROSE repository](https://github.com/romboai/rose-1h-nmr) |
| Preprint | ChemRxiv | [10.26434/chemrxiv.15007823/v1](https://doi.org/10.26434/chemrxiv.15007823/v1) |
| Archive | Zenodo | [10.5281/zenodo.22142631](https://doi.org/10.5281/zenodo.22142631) |

## Approved links

- [ROSE GitHub repository](https://github.com/romboai/rose-1h-nmr)
- [ROSE weights on Hugging Face](https://huggingface.co/romboai/rose-1h-nmr)
- [ChemRxiv preprint](https://doi.org/10.26434/chemrxiv.15007823/v1)
- [Zenodo archive](https://doi.org/10.5281/zenodo.22142631)
- [ROMBO AI](https://rombo.ai)
- [The missing layer in NMR machine learning](https://rombo.ai/blog/article-NMR-Machine-Learning) — corporate essay; canonical URL stays on rombo.ai

## Cite Spectra

Spectra by ROMBO AI. AI-assisted NMR compound identification. https://spectra.rombo.ai

## Cite ROSE

Use the BibTeX published with the model:

{% raw %}
```bibtex
@article{diiorio2026rose,
  title   = {ROSE: a Foundation Model for Reusable One-dimensional
             Spectrum Embeddings in 1H NMR},
  author  = {Di Iorio, Mattia and Mattia, Carmine and Zanda, Andrea
             and Atzori, Maurizio},
  year    = {2026},
  journal = {ChemRxiv},
  doi     = {10.26434/chemrxiv.15007823/v1},
  url     = {https://doi.org/10.26434/chemrxiv.15007823/v1},
  note    = {Preprint}
}
```
{% endraw %}

## Benchmark methodology

ROSE evaluation uses the holdout and split policy described in the public repository. Spectra product evaluations are not published as a benchmark card on this site. If a product metric is added later, it will appear only when `verified` and `public` are both true in the evidence registry.

{% include cta.html secondary_label="Read the docs" secondary_href="/docs/" %}
