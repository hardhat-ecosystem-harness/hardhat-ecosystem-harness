# hardhat-ecosystem-harness

A Hardhat deployment harness + tooling ecosystem.

Core ideas:
- **deployment is a constant** (rerunnable pipeline)
- **sections** (ordered modules) own behavior + state
- **actions** are explicit, meaningful, and persisted
- **hard fail on drift** (bytecode hash / on-chain code mismatch)

Docs:
- `docs/GOALS.md` — high-level design goals / principles
- `docs/DESIGN.md` — working design doc

Examples:
- `examples/polygon-137.example.state.json`
