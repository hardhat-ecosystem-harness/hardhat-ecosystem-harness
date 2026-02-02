# Hardhat Deploy State — High-Level Design Goals (WIP)

This file captures the *principles* and non-negotiables behind the deployment harness.
It should remain stable even as implementation details evolve.

## Glossary
- **Harness**: the Hardhat task + runner that resolves config, loads tools/state, executes sections in order, and enforces guardrails.
- **Section**: an ordered JS/TS module invoked by the harness. Owns its behavior and its slice of persistent state.
- **Action**: a meaningful unit of work inside a section (a “tool call”), recorded in state (deploy/call/grant/upload/seed/etc.).
- **State**: the persistent JSON written during a run. Designed to be manually readable/editable.
- **State slice**: a scoped view of the state passed into a section or action for easy read/write.
- **Named deployment**: a durable environment lane (e.g. `prod`, `staging`) intended to be rerun and committed.
- **Run deployment**: an unnamed, timestamped execution record (typically gitignored) used for experiments and iteration.

## 1) Deployment is a constant
Deployment is not a one-off script step. It is a continuously rerunnable pipeline that supports:
- local in-memory chain runs (fast feedback)
- testnets/mainnet runs (same pipeline shape)
- maintenance, upgrades, configuration changes

## 2) Actions must be explicit and meaningful
The developer must be able to read the state and understand what happened.
- Each persisted entry represents a real action (a “tool call”): deploy, call, grant role, upload, seed, etc.
- Actions are named in human language because they *mean things*.
- Avoid hidden background behavior that obscures what the system did.

## 3) Sections own their state; the harness orchestrates
- The harness:
  - resolves config based on (git branch, target chain)
  - loads tools
  - runs a declared list of sections in order
  - provides guardrails and persistence
- Each section module is arbitrary JS/TS that can:
  - read prior state
  - decide to do nothing / do partial work / do full work
  - rebuild runtime objects (e.g. attach to deployed contracts)

## 4) Idempotency by inspection
Sections decide what work to do by inspecting their persisted state slice.
Re-running should be normal and safe.

## 5) Hard fail on drift
When rerunning over an existing deployment state:
- Compare intended bytecode hash (artifact) and deployed on-chain code hash.
- Any mismatch is a **hard, immediate failure**.

Rationale: if the state says reality is X but reality is Y, continuing is lying.

## 6) Don’t hide failures; provide recovery tools
Transactions can get stuck (especially under congestion / low fee environments).
Principles:
- Do not silently “fix” things in ways that hide what happened.
- Make pending/incomplete actions obvious in state.
- Provide explicit utilities (gas bump, nonce management guidance, timeout controls) that help recovery.
- Default behavior on stuck/pending actions: fail loudly with clear guidance.

## 7) State is authoritative but lightweight
- State is small enough to be edited manually when needed.
- Writing state frequently is acceptable (negligible data size).
- Storing receipts/logs inline is allowed when it helps debugging.
  - Optional modes: summary vs full vs external file paths.

## 8) Config is branch+chain specific
Config selection rules must prevent accidental deployments:
- Load config based on current git branch and target chain.
- No implicit generic config fallback unless explicitly present.

## 9) Preserve developer intent in serialization
Avoid “lexicographic sorted keys” as a default.
- Any determinism should be *domain-semantic*: reflect section order, pipeline order, and meaning.

## 10) Minimalism first
The MVP should be small and composable:
- a Hardhat task (the harness)
- a tiny tool library (deploy/call/wait/etc.)
- a state API (scoped slices + write helpers)
- a section module interface

Everything else is optional add-ons.

## 11) Optional: stable ids without losing meaning
If we introduce stable ids, they must not replace human meaning.
Acceptable patterns:
- keep human label as primary key, but store a computed `actionId` inside for rename detection
- or store `actionsById` plus a human-readable `label`, and provide tooling to render/grep by label

Any id scheme must support manual editing and auditing.
