# THREADS (primary)

High-level index of primary threads. Each thread points to a `threads/THR-*.md` detail file.

Related protocol:
- `ops/THREADS-PROTOCOL.md`

## Primary threads
- THR-0001: Deployment state problem + goals — why deployment needs canonical state and what questions it answers. (see: threads/THR-0001-problem-and-goals.md)
- THR-0002: Data model + file layout — state schema + named vs runs layout. (see: threads/THR-0002-data-model-and-layout.md)
- THR-0003: Event log (NDJSON) — append-only events, provenance, diffs. (see: threads/THR-0003-event-log.md)
- THR-0004: Harness architecture — config selection + section modules + idempotency. (see: threads/THR-0004-harness-architecture.md)
- THR-0005: Safety checks — bytecode hash drift + failure modes. (see: threads/THR-0005-safety-checks.md)
- THR-0006: Downstream consumers — frontend/backend/ops consumption of deployment state. (see: threads/THR-0006-downstream-consumers.md)
- THR-0007: Packaging — Hardhat plugin + CLI surface. (see: threads/THR-0007-packaging-and-cli.md)
