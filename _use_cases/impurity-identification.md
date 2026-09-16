---
title: NMR impurity identification
h1: NMR impurity identification
description: Rank plausible NMR explanations for unexpected signals beside a known major component, without treating the impurity as confirmed.
permalink: /use-cases/impurity-identification/
---

## Target user

Impurity characterization and process-chemistry analytical teams who already know the API or intermediate and need a hypothesis for the extra peaks.

## Specific problem

The major component is assigned. A set of small signals is not. The question is not “what is chemistry” in the abstract; it is “which plausible process impurity, degradant or residual solvent is consistent with these peaks?”

## Existing workflow

Teams subtract the known spectrum, hunt libraries, and commission LC-MS. NMR often waits because impurity 13C is weak or buried.

## Where time is lost

False leads from grease, residual solvents and rotamers. Senior spectroscopists spend first-pass time that should go to the two or three chemically credible impurities.

## How Spectra assists

Treat the case as impurity identification: keep the major component in context, retrieve candidates that could explain the residual signals, and use 13C residuals to drop analogues the carbons cannot support.

## Data typically required

1H of the mixture or enriched impurity cut, 13C if the impurity load allows, solvent, process context (acid, oxidant, residual starting material). MS or formula, when allowed, narrows the retrieval space.

## Resulting output

A shortlist of impurity hypotheses with evidence and leftovers. Leftovers matter: they may say the impurity is still unknown.

## Limitations

Low-level impurities may have no usable 13C. Spectra will not construct a structure from three overlapping protons. Spectra does not apply ICH identification thresholds or a validated impurity method.

## Recommended validation

Orthogonal LC-MS or isolation of the impurity, plus a spiked standard when a hypothesis is cheap to test.

Related: [limitations](/docs/limitations/), [evidence and confidence](/docs/evidence-and-confidence/).
