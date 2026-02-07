# THR-0002: Data model + file layout

## Summary
- Named deployments are meant to be committed; ad-hoc runs are ignored.
- State file + events NDJSON per chainId.

## Unknowns / questions
- Normalized schema vs legacy chainId-keyed schema: what do we support?
- How heavy do we allow state to become (tx receipts inline vs summaries)?

## Decisions
- `decisions/DEC-0001-named-vs-runs-and-git-policy.md`
- `decisions/DEC-0002-state-schema-shape.md`
- `decisions/DEC-0005-receipts-storage-policy.md`
- `decisions/DEC-0006-state-mutation-via-namespace.md`

## Links
- docs: docs/DESIGN.md
