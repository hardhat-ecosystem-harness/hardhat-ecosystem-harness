# Threads protocol

This protocol defines how the agent maintains the thread index (`docs/THREADS.md`) and per-thread detail files (`threads/THR-*.md`).

## Canonical files
- **Index/navigator:** `docs/THREADS.md`
- **Per-thread detail:** `threads/THR-000X-<slug>.md`

## Minimal requirements

### docs/THREADS.md
For each primary thread:
- stable id: `THR-000X`
- title
- 1-sentence summary
- pointer to its detail file: `threads/THR-000X-<slug>.md`

Keep primary threads capped at ~5–12.

### threads/THR-000X-<slug>.md
Each thread detail file MUST contain:
- short summary bullets
- unknowns / questions
- pointers to evidence / decisions / sources (links)

Recommended (when relevant):
- **Axes / dimensions** (see “n-dimensional capture” below)
- **Next actions** (who/what/when)

## Decision capture policy (strong)
Decisions are not “notes”. If it changes scope/terms/structure, it must be recorded durably.

When a decision is made:
1. Create a decision record: `decisions/DEC-000X-<slug>.md`.
2. Link it from the relevant `threads/THR-*.md` under a **Decisions** section.
3. If it materially changes a primary thread summary, update the 1-sentence summary in `docs/THREADS.md`.

Decision records should be brief but complete:
- Context (what problem was being solved)
- Decision (what was chosen)
- Alternatives considered (1–3 bullets)
- Rationale (why)
- Implications / follow-ups (what now)
- Date + participants (if known)

## n-dimensional capture (don’t flatten)
Rule: **Threads are not “timelines”; threads are “coordinate spaces.”**

When a thread involves multi-dimensional concepts (architecture, schema, UX, ops), add an **Axes / dimensions** section to the thread detail file capturing independent coordinates.

## Update rules (avoid churn)
- Do NOT rewrite the whole index on every message.
- Update `docs/THREADS.md` only when a new primary thread appears, a summary materially changes, or user asks.
- Prefer adding detail to the per-thread file over bloating the index.
- Do not renumber THR ids once assigned.

## Thread update checklist (before committing changes)
- Avoid rewriting/reordering the whole index
- Keep primary thread count within ~5–12
- Every entry points to a `threads/THR-*.md`
- Index summary stays ~1 sentence

## Promotion rule
- New topics attach to an existing primary thread by default.
- Promote only when clearly distinct or by explicit request.
