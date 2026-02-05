# THR-0006: Downstream consumers

## Summary
- Deployment state is consumed by frontends, backends, and ops for audit/rollback.

## Unknowns / questions
- What export formats are required (TS constants, JSON, env files)?
- Do we need a standard consumer contract (e.g. `deployments/named/<name>/<chainId>.latest.json`) for easy tooling?

## Links
- docs: docs/DESIGN.md
