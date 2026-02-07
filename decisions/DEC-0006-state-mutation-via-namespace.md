# DEC-0006 — State mutation via namespace API (in-memory)

- **Date:** 2026-02-05
- **Participants:** DayZee, sirGranite

## Context
We need a canonical way for tools/actions/sections in the Hardhat Ecosystem Harness to read/write deployment state during a run, while also maintaining an append-only event history.

A question arose whether actions should return declarative patches (that the harness applies) or mutate state imperatively.

DayZee noted an existing, long-used "namespace" state utility suite that provides an ergonomic `namespace.set(...)` style API.

## Decision
- Tools/actions **MAY mutate deployment state directly** during execution using the existing **namespace API** (e.g., `namespace.set(...)`).
- These namespace tools **mutate state in memory**; persistence to disk occurs via an explicit harness-controlled flush boundary (exact API TBD).

## Alternatives considered
- **Declarative patches** returned by tools and applied by the harness.
  - Pros: clearer auditing/testing, easier to diff.
  - Cons: more scaffolding, slower iteration.

## Rationale
- Leverages a proven, familiar API DayZee already uses across projects.
- Keeps the MVP low-friction and avoids over-abstracting early.
- Separating in-memory mutation from disk persistence allows the harness to control atomic writes and durability semantics.

## Implications / follow-ups
- Define the *canonical* namespace surface we standardize on (minimum required methods).
- Decide flush boundaries (per-tool vs per-section vs both) and atomic write strategy.
- Ensure event logging records tool start/end even if state is only flushed later.

