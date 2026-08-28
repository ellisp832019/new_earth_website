# New Earth Website Repository Tree Baseline

## Status

CANONICAL REPOSITORY STRUCTURE BASELINE

## Baseline Commit

Established by the WA-05H1 cleanup commit.

## Purpose

This baseline gives every top-level area one clear purpose and separates active
governance, curated source assets, local-only references and historical records.

## Governing Principles

- Clear ownership and a deliberately small root.
- Internal material is separate from public output.
- Source-of-truth status is explicit.
- Historical material is archived rather than scattered.
- Asset promotion is rights-safe and evidence-led.
- Automation readiness is documented without premature framework lock-in.

## Canonical Top-Level Tree

```text
.vscode/
00_BLUEPRINT/
01_STRATEGY/
02_INFORMATION_ARCHITECTURE/
03_CONTENT/
04_DESIGN_SYSTEM/
05_WORDPRESS/
06_THEME/
07_CODEX/
08_DEPLOYMENT/
09_LOGS/
ASSETS/
ASSETS_REFERENCE/
```

Root controls are `.gitignore`, `AGENTS.md`, `MASTER_BUILD_MAP.md`,
`NEW_EARTH_WEBSITE.code-workspace`, `README.md`, `START_HERE.md` and `TASK.md`.

## Directory Responsibilities

`00_BLUEPRINT` holds long-lived doctrine and architecture. `01_STRATEGY` holds
programme decisions and specialist gates. `02_INFORMATION_ARCHITECTURE` holds
routes and navigation. `03_CONTENT` holds implementation-ready public content.
`04_DESIGN_SYSTEM` holds visual foundations and reusable patterns. `05_WORDPRESS`
and `06_THEME` retain implementation material. `07_CODEX` holds task support and
safe automation. `08_DEPLOYMENT` holds future release architecture. `09_LOGS`
holds historical and execution records. `ASSETS` is the curated Website V2 source
asset estate. `ASSETS_REFERENCE` is local-only review material.

## Current Website V2 implementation additions

`src` is the current Astro Website V2 implementation. `scripts` contains build,
asset-preparation and validation automation. `public` contains generated or
runtime-facing public-surface material where applicable. `astro.config.mjs`,
`package.json`, `package-lock.json` and `tsconfig.json` are implementation
configuration and dependency controls.

`node_modules`, `dist` and `.astro` are generated, non-authoritative material.

## Root File Policy

Keep the root limited to intentional controls and project entry points. Historical
session sheets belong in `09_LOGS/SESSIONS/`; uncertain scratch material remains
for review rather than being deleted by filename alone.

## Local-Only Reference Policy

`ASSETS_REFERENCE` is **NEVER DIRECTLY DEPLOY**. Its 12 local reference files are
ignored by Git, remain physically available and are not rights evidence.

## Public Build Boundary

The repository is not the public website. Internal areas, logs and local references
must not be copied to public output automatically.

## Historical / Session Archive Policy

Session sheets are retained as historical execution records and must not override
current governed controls.

## Future WB-00 Extension Point

The historical snapshot below is retained as a HISTORICAL SNAPSHOT. It predates
the current Astro source tree and generated build outputs.

## Change Control

New top-level folders require distinct ownership, a documented purpose and proof
that no existing area is appropriate.
