# DEC-0001: Named vs runs deployments + git policy

## Context
We need a deterministic, queryable deployment state artifact that supports both:
- durable environment lanes (staging/prod) that can be rerun and reviewed
- ad-hoc, exploratory deploy runs during development

Teams also need a clean git policy so repos do not fill with noisy timestamped artifacts.

## Decision
Adopt a two-tier layout:
- `deployments/named/<name>/...` is durable and intended to be committed.
- `deployments/runs/<timestamp>/...` is ad-hoc and ignored by default.

State outputs per lane/run should include:
- `<chainId>.state.json` (canonical state)
- `<chainId>.events.ndjson` (append-only event stream)

## Rationale
- Separates “reviewable, durable” from “iterative noise”.
- Supports reproducibility and auditability for prod/staging.
- Keeps dev iteration fast without git churn.

## Alternatives considered
- Commit everything (too noisy; discourages reruns)
- Never commit state (loses audit/review; hard for downstream consumers)

## Implications / follow-ups
- Update `.gitignore` to ignore `deployments/runs/**`.
- Provide tooling to promote a run into a named lane.

## Links
- related threads:
  - `threads/THR-0002-data-model-and-layout.md`
- evidence:
  - `docs/DESIGN.md`
