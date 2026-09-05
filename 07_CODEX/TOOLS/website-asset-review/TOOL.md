# New Earth Website - Owner Asset Review

## Tool ID

`WEBSITE-ASSET-REVIEW`

## Tool Class

`REVIEW TOOL`

## Purpose

Review local Website V2 asset candidates visually and record human decisions
without editing registers in the browser.

## When To Use

Use for owner selection before targeted rights, accessibility and implementation
review. It is local-only and does not publish assets.

## Inputs and Outputs

The tool reads repository-relative reference PNG paths embedded in `index.html`.
It exports CSV or JSON downloads and provides a print summary. Browser-local state
is convenience only, not repository authority.

## How To Launch

Run `launch.ps1` from this directory or use the VS Code task `New Earth: Review
Website Assets`. The launcher first runs local read-only repository discovery and
then opens the app. Opening `index.html` directly is useful for debugging only.

## Review Workflow

`LOOK -> DECIDE -> NOTE -> NEXT`

## Decision Meanings

- `KEEP`: visual approval if all remaining gates pass.
- `REPLACE`: retain the purpose, replace the candidate.
- `HOLD`: postpone the decision.
- `DON'T USE`: exclude from Website V2 while retaining reference material.

## Rights Safety Boundary

**KEEP means visual owner approval only. It does not constitute copyright,
provenance, accessibility, technical-claim or public-build approval.** The tool
has no rights-approval control.

## Local Browser State

State uses `new-earth-website-wa05h2-owner-assets-v1`. If localStorage is
unavailable, the tool continues in memory and warns the reviewer to export before
closing.

## CSV and JSON Export

CSV filename: `NEW_EARTH_WA05H2_OWNER_ASSET_DECISIONS.csv`.
JSON filename: `NEW_EARTH_WA05H2_OWNER_ASSET_DECISIONS.json`.
Both are generated locally and contain owner decisions plus unresolved rights
follow-up fields. The complete discovery estate includes internal and evidence
images that are not public candidates.

## Inventory refresh

Use `scan-repository-images.ps1` or the VS Code task `New Earth: Refresh Website
Asset Inventory` to regenerate the inventory and browser index. The browser does
not fake a filesystem rescan; the workflow is scan, regenerate, reopen.

## How Codex Applies an Export

Codex validates the export, records decisions in governed files, performs targeted
rights/provenance checks for `KEEP`, and creates controlled replacements for
`REPLACE`. No image becomes public solely because of owner visual approval.

## Safety Boundaries

No network calls, external dependencies, file writes, Git operations, publication,
deployment, image deletion, rights approval or automatic promotion are implemented.
This tool is internal and must never enter a public build.

## Future Integration

This tool is a candidate for future discovery by wider New Earth systems. Command
Centre, NEOS, GAIA and Platform Core integration are future-only and not implemented.
