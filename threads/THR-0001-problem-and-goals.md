# THR-0001: Deployment state problem + goals

## Summary
- Deployments are a constant across dev/staging/prod; teams need canonical answers about what is deployed.
- Goal: Hardhat plugin + CLI that persists deterministic, queryable deployment state.

## Unknowns / questions
- Which workflows must v0.1 support first (deploy only vs upgrade vs calls)?
- How should state be queried (CLI, importable lib, JSON schema)?

## Links
- docs: docs/DESIGN.md
