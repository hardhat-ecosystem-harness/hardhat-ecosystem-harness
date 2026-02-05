# THR-0002: Data model + file layout

## Summary
- Named deployments are meant to be committed; ad-hoc runs are ignored.
- State file + events NDJSON per chainId.

## Unknowns / questions
- Normalized schema vs legacy chainId-keyed schema: what do we support?
- How heavy do we allow state to become (tx receipts inline vs summaries)?

## Links
- docs: docs/DESIGN.md
