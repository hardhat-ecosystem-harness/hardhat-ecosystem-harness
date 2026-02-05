# SCOPE

## In scope
- A Hardhat plugin + CLI surface that maintains deterministic deployment state
- Canonical state file(s) + append-only event log
- Named deployments (committed) vs ad-hoc runs (gitignored)
- Branch+chain config selection
- Section-based orchestrated pipeline with idempotency by inspection
- Safety guardrails (drift detection, loud failures, recovery guidance)
- Export mechanisms for downstream consumers (frontend/backend/ops)

## Out of scope (initially)
- Replacing all existing deploy frameworks end-to-end
- Full multi-chain orchestration / CI system (integration can come later)
- Secrets management (keys, mnemonics, private env) as part of the tool
- On-chain registries as the primary source of truth (optional later)

## Phases
### Phase 1 — Minimal viable harness + state
- Hardhat task + harness runner
- State writer + scoped slices
- Named vs runs directory layout
- Event log NDJSON
- Bytecode drift hard-fail

### Phase 2 — Integrations + exports
- Frontend export helpers (addresses, ABIs)
- Backend/op export helpers (start blocks, feature flags)
- Better diff tooling (state vs events)

### Phase 3 — Recovery + advanced workflows
- Utilities for stuck txs / gas bump guidance
- Optional receipt storage strategies (summary vs full vs external files)
- Upgrade/migration patterns
