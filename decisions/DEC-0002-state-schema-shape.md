# DEC-0002: Deployment state schema shape (normalized vs chainId-keyed)

## Context
Existing real-world state examples sometimes use a top-level object keyed by chainId string (e.g. `{ "137": { ... } }`).
For tooling, a normalized schema (explicit `chainId` field and namespaces) is easier.

We need a v0.1 decision that keeps adoption friction low while avoiding long-term schema debt.

## Decision
- **Canonical v0.1 schema is normalized**:
  - top-level: `{ schemaVersion, chainId, meta, sections }`
- **Compatibility**: the reader/loader MAY accept legacy `{ "<chainId>": { ... } }` as an input format, but the writer will emit normalized by default.

## Rationale
- Normalized schema is easier to validate, diff, and evolve.
- Accepting legacy input avoids blocking adoption.
- Emitting one canonical form prevents drift between tools.

## Alternatives considered
- Only legacy (harder validation; encourages ad-hoc nesting)
- Support both as first-class outputs (tooling complexity; ambiguous canonical form)

## Implications / follow-ups
- Implement a normalization step in the loader.
- Document the canonical schema in `docs/DESIGN.md`.

## Links
- related threads:
  - `threads/THR-0002-data-model-and-layout.md`
