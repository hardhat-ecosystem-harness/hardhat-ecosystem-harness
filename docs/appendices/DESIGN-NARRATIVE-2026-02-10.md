# Hardhat Deploy State — Design Doc (WIP)

> Working name. This doc is meant to be edited continuously as we clarify requirements.

## 0) Problem Statement
Smart contract deployment is treated as a one-off step, but during development, testing, staging, and production it behaves like a **constant**. Teams repeatedly need the same canonical answers:

- What is deployed on *this* network right now?
- Which git commit produced it?
- What tx/hash/block/deployer created it?
- Where are the ABIs/artifacts for the deployed addresses?
- How do the frontend and backend get updated safely and automatically?

Current practice is ad-hoc: copy/paste addresses, manually export ABIs, and maintain fragile per-environment config.

## 1) Goal
Provide a Hardhat plugin + CLI that maintains a deterministic, queryable **deployment state** as a first-class artifact of the build/deploy process.

Deployment outputs become a **canonical state stream** that downstream systems can consume:

- Frontends (addresses, ABIs, product/catalog references)
- Backends (registries, indexer start blocks, feature flags)
- Ops (auditing, diffs, provenance, rollbacks)

## 2) Non-Goals (initially)
- A full deployment framework replacing existing approaches
- Multi-chain orchestration / CI system (can be a later integration)
- Secrets management (private keys etc.)
- On-chain registries as the primary source of truth (optional later)

## 3) Core Concepts
### 3.1 Deployment is a state machine
Instead of “run deploy script → done”, we persist and evolve state across:

- compile
- local testing
- deploy
- upgrades
- migrations
- config export

### 3.2 A canonical Deployment State
A single schema capturing what matters, stable across environments.

## 4) Data Model (Draft)
### 4.1 Files & layout
We’ll support both *named* and *unnamed* deployments.

- **Named deployment**: deterministic and meant to be committed.
- **Unnamed deployment**: ad-hoc / exploratory run; by default ignored in git.

Proposed layout:

- `deployments/`
  - `named/<name>/`
    - `<chainId>.state.json` (canonical state)
    - `<chainId>.events.ndjson` (append-only event log)
    - `<chainId>.latest.json` (optional pointer/symlink-style file)
  - `runs/<YYYY-MM-DD_HH-mm-ssZ>/` (human-readable timestamp)
    - `<chainId>.state.json`
    - `<chainId>.events.ndjson`

Git behavior:
- `deployments/runs/**` is ignored by default via `.gitignore`.
- `deployments/named/**` is intended to be committed.

Notes:
- We can also support `deployments/named/<name>/<networkName>.state.json` if teams prefer, but chainId is safest.

### 4.2 Canonical state schema (Draft)
We have a real-world reference example (Polygon chainId `137`) that looks like:

- top-level key is the `chainId` string (`"137"`)
- inside: multiple domain sections like `contracts`, `packages`, `retailDistributionPools`, etc.
- within a section: entries are often *tasks* with rich metadata (e.g. deploy, grant role, call contract fn)

We’ll support that style.

Draft (normalized) shape:

```jsonc
{
  "schemaVersion": 1,

  // Optionally allow the legacy style: { "137": { ... } }
  // but the normalized form makes tooling simpler.
  "chainId": 137,

  "meta": {
    "branch": "main",
    "commit": "<git sha>",
    "deploymentName": "prod",          // optional
    "runId": "2026-02-02_16-40-00Z",    // timestamp id
    "createdAt": "2026-02-02T16:40:00Z"
  },

  "sections": {
    "contracts": {
      // task-like entries (deploy/call/grant/etc)
      "Dummy_USDT_ERC20": {
        "taskName": "deploy_contract",
        "contractName": "Dummy_USDT_ERC20",
        "contractAddress": "0x...",
        "bytecodeHash": "...",
        "verified": true,
        "complete": true
      },

      "Call set_injectedPriceInUSDT on Fish_RewardERC20": {
        "taskName": "callContractWriteFunction",
        "contractName": "Fish_RewardERC20",
        "functionName": "set_injectedPriceInUSDT",
        "functionParams": ["2500"],
        "tx": {
          "hash": "0x...",
          "blockNumber": 66771936,
          "status": 1
        },
        "complete": true
      }
    },

    "packages": { "...": true },
    "retailDistributionPools": { "...": true }
  }
}
```

Notes:
- The example state stores full transaction receipts/logs inline. That’s convenient, but very heavy.
  - v0.1 recommendation: store a **tx summary** (hash, blockNumber, status) and optionally a path to a raw receipt blob if you want it.
- We should preserve the ability for sections to store arbitrary keys (this is your “deployment as constant” model).

Notes:
- The key addition vs the earlier draft is `sections` as a first-class namespace for section-owned state.
- Store `argsHash` (and optionally encrypted args later) rather than plaintext args by default.
- Hashes allow diffs without leaking sensitive constructor values.

### 4.3 Event log (Append-only)
We’ll keep events out of the canonical state file and instead write an append-only log.

Format: **NDJSON** (`.events.ndjson`) so it can be tailed, grepped, and streamed.

Each line is a single JSON object event, e.g.:

```jsonc
{ "id":"evt_...", "ts":"2026-02-02T16:40:10Z", "type":"section.start", "section":"ipfs", "commit":"...", "chainId":11155111 }
{ "id":"evt_...", "ts":"2026-02-02T16:40:12Z", "type":"contract.deployed", "name":"MyToken", "address":"0x...", "txHash":"0x...", "blockNumber":123456 }
{ "id":"evt_...", "ts":"2026-02-02T16:41:00Z", "type":"section.end", "section":"ipfs", "ok":true, "elapsedMs": 48123 }
```

The event log enables:
- diffs / provenance without rewriting history
- reconstructing “what happened” even if state ends up partially written
- debugging long deployments

## 5) Reference Architecture (Your Prior Implementation)
This is the model you described; it’s a strong “north star” for the plugin.

### 5.1 A single Hardhat task runs the whole pipeline
- A dedicated Hardhat task (e.g. `hh deploy:state`) executes the end-to-end process.
- The task is controlled by:
  - a root harness module (the orchestrator)
  - a config module (JS/TS) selected by `(git branch, target chain)`

### 5.2 Branch + chain config selection (JS/TS, not JSON)
- The harness checks the current git branch.
- It loads configuration based on **confirming an explicit match** for both:
  - current branch
  - target chain/network
- Generic defaults exist, but **do not apply** unless a branch+chain-specific config exists.
- Config is JS/TS so settings can be algorithmic (chain-dependent timing, addresses, toggles, etc.).
- Intent: configs are “offline” / hardcoded and deterministic per branch+chain.

### 5.3 Deployment is composed of ordered “sections” (modules)
- The harness dynamically imports a sequence of deployment section modules.
- Section order is declared as a list in config (preferred): e.g. `sections: ["ipfs", "core", "seed", "export"]`.
- Each section is an arbitrary JS/TS module exporting a function invoked by the harness.
- Each section receives:
  - its own **state slice** (a scoped location under the state tree)
  - helpers for reading/writing state atomically
  - config for this run
  - access to previously-produced state from earlier sections

### 5.4 Idempotency + runtime rebuild
- Sections are free to decide whether to do work by inspecting their persisted state.
  - e.g. do nothing, or perform missing steps
- Even if a contract is already deployed, a section can rebuild runtime objects:
  - instantiate `ethers.getContractAt(...)`
  - run read/write calls
  - re-run tests

### 5.5 Compile hook + source hash safety
You described two important safety/UX pieces:

- **Compile hook generates TS completions/bindings** for contracts (developer ergonomics).
- When “rerunning over” an existing deployment state, the harness checks whether the **deployed bytecode hash** (easy to obtain via Hardhat/ethers during deploy / attach) matches what the state expects.
  - **Default behavior: hard fail immediately** on any mismatch.
  - (We can add an explicit override later, but v0.1 treats drift as a fatal error.)

### 5.5 Utilities and tests are first-class
- Shared utilities: deploy contract, call functions, wait N blocks, wait time (chain-dependent), etc.
- Test modules run transaction sequences and assertions.
- Developer loop:
  - run the whole pipeline against an in-memory chain in ~5–15 seconds
  - deploy pipeline is “the same shape” as local, so confidence stays high

### 5.6 Example sections
- “Upload NFT images/metadata to IPFS” early so URIs are available for constructor args.
- “Deploy contracts” / “configure contracts” / “seed listings” / “export frontend config” etc.

## 6) Plugin Integration Options
We should decide which deployment style we integrate with first.

### Option A: Plain Hardhat scripts
- Wrap `npx hardhat run scripts/deploy.ts --network ...`
- Provide helper library (`state.recordDeploy(...)`) to update state.

Pros: minimal deps, broad compatibility.
Cons: requires adopters to touch scripts.

### Option B: `hardhat-deploy` compatibility
- Hook into deploy lifecycle (named deployments, tags)
- Auto-capture artifacts and addresses.

Pros: best UX for teams already using it.
Cons: dependency surface.

### Option C: Both
Start with A, add B quickly if demand.

## 7) Sections, Checks, and Tests
Sections are the universal unit: deploy steps, chain checks, and heavier test sequences are all implemented as ordered section modules.

### 7.1 Section kinds (reporting only)
We can tag sections for clarity/UX; this does not change execution semantics:
- `deploy` — performs actions (deploy/call/grant/upload/etc.)
- `checks` — fast read-only (or mostly read-only) invariants; intended to run even in “prod”
- `tests` — heavier transaction sequences; typically run on local/dev/testnets, not prod

### 7.2 Per-section config knobs
Each entry in the ordered section list can be either a string or an object.

Example:

```ts
sections: [
  "ipfs",
  { name: "core", kind: "deploy" },
  { name: "checks", kind: "checks", fatal: true },
  { name: "tests", kind: "tests", enabled: false }
]
```

Fields:
- `name` (required): section module name
- `kind` (optional): `deploy | checks | tests` (default `deploy`)
- `enabled` (optional): default `true`
- `fatal` (optional): default `true` (if false, record failure and continue)
- `when` (optional): `local | testnet | mainnet | any` (default `any`)

### 7.3 Failure semantics
- Any thrown error in a `fatal` section aborts the run.
- In non-fatal sections, errors are recorded into state and/or events log and execution continues.

### 7.4 Outputs
- Sections may write to their state slice freely.
- Sections may additionally emit separate outputs (e.g. `test-results.json`) by convention.

## 8) CLI (Initial)
### 8.1 Commands
- `hh state init` — create `deployment-state/` and config stub
- `hh state export --network <n> --format json|ts|env --out <path>`
- `hh state diff --network <n> [--against <gitref|path>]`
- `hh state show <ContractName> --network <n>`

### 8.2 Export Targets
- JSON (canonical)
- TS module (frontend import)
- `.env` (legacy)

## 8) Downstream Integrations (Later)
- Next.js/Vite plugin that watches state and regenerates typed contract bindings
- Backend registry updater (postgres/mongo)
- CI: verify expected addresses, block ranges, and artifact hashes

## 9) Security / Threat Model
- Never write private keys.
- Avoid writing RPC URLs with credentials.
- Prefer hashes for constructor args; optionally allow explicit opt-in plaintext.
- Ensure state diffs are deterministic and reviewable.

## 10) Roadmap
### v0.1 (MVP)
- State schema v1
- Write/read state per-network
- Export JSON + TS
- Basic diff

### v0.2
- hardhat-deploy adapter (if we choose)
- richer provenance (compiler version, solidity settings)

### v0.3
- optional on-chain registry mirror
- typed bindings generator

## 11) Open Questions
- Project name / npm package scope?
- Do we target plain Hardhat first or hardhat-deploy first?
- Should the canonical artifact be a single file per chain, or append-only event log + derived state?
- How do we handle upgrades/proxies cleanly (EIP-1967 / OpenZeppelin upgrades)?
