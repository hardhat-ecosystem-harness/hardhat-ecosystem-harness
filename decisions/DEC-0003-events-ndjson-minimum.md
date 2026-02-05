# DEC-0003: NDJSON event log minimum (v0.1)

## Context
We want an append-only NDJSON log that supports provenance, diffs, and debugging without making state files huge.

## Decision
For v0.1, the event log MUST:
- be NDJSON (`.events.ndjson`)
- be strictly append-only
- include at minimum these fields per event:
  - `ts` (ISO string)
  - `type` (string)
  - `chainId` (number)
  - `runId` (string)
  - `section` (string, when applicable)
  - `label` (human label for the action/event)

Event ids:
- v0.1 does **not** require globally stable ids.
- Optional: include `id` when available (e.g. `${runId}:${n}`) for easier grep.

## Rationale
- Keep the writer simple and reliable.
- Ensure downstream tooling has enough to correlate runs/sections.

## Alternatives considered
- Full receipts/logs in event stream (too heavy for v0.1)
- No event stream (harder debugging and diffs)

## Implications / follow-ups
- Define a small set of event `type` strings in docs.
- Ensure section runner emits start/end + action events.

## Links
- related threads:
  - `threads/THR-0003-event-log.md`
