# DEC-0005: Receipt/log storage policy (v0.1)

## Context
Storing full receipts/logs inline is convenient for debugging but can bloat state.
We need a default that stays lightweight while keeping a path to richer debugging.

## Decision
- Default: persist **tx summaries** in state (hash, blockNumber, status).
- Optional modes:
  - `full`: store full receipt/log payload inline
  - `external`: store a filesystem path to a receipt blob

## Rationale
- Keeps canonical state readable and small.
- Leaves an escape hatch for deep debugging.

## Alternatives considered
- Always store full receipts (state bloat)
- Store no receipts (harder audit/debug)

## Implications / follow-ups
- Add a config flag to choose storage mode.
- Document receipt fields included in summaries.

## Links
- related threads:
  - `threads/THR-0002-data-model-and-layout.md`
  - `threads/THR-0003-event-log.md`
