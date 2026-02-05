# DEC-0004: Branch+chain config selection (safety)

## Context
Accidental deployments happen when configs are implicitly reused across branches or networks.
We want a deterministic selection mechanism that fails loudly.

## Decision
- Config selection requires an explicit match on:
  - current git branch
  - target chainId/network
- No implicit generic fallback unless an explicit default config exists (opt-in).
- On missing config: **hard fail** with a clear error.

## Rationale
- Prevents silent misconfiguration.
- Makes intent explicit and reviewable.

## Alternatives considered
- Generic fallback (dangerous; encourages sloppy configs)
- Interactive prompts (bad for CI and automation)

## Implications / follow-ups
- Implement config resolver with clear error messages.
- Document the config discovery rules.

## Links
- related threads:
  - `threads/THR-0004-harness-architecture.md`
