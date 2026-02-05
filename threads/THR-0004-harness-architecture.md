# THR-0004: Harness architecture

## Summary
- Single Hardhat task runs pipeline; selects config by (branch, chain).
- Ordered section modules; idempotent reruns; runtime rebuild.

## Unknowns / questions
- Configuration API surface: TS modules only? how to validate?
- Section interface: what helpers/state guarantees?

## Links
- docs: docs/DESIGN.md
