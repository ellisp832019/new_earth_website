# Full Repository Image Discovery

## Purpose

Provide a repeatable physical image inventory for the local owner-review tool
without treating discovery as rights approval or public promotion.

## Scan Date

2026-08-27 repository-local scan.

## Repository Baseline

Branch: `fix/website-asset-review-full-repo-discovery`.
The scan excludes `.git`, `node_modules`, `dist`, `build`, `.cache`, temporary
browser caches and temporary directories. No excluded directory was present with
a relevant exception.

## Total Images

42 image-like files were discovered physically.

## Formats

- PNG: 25
- WebP: 17
- Other supported formats: 0

## Top-Level Location Counts

- `ASSETS`: 31
- `ASSETS_REFERENCE`: 11

## Registered vs Unregistered

- WA-05H matched: 17
- Unmatched: 25
- Ambiguous matches: 0

## Curated Assets

The 17 matched files are current physical candidates corresponding to the WA-05H
master register. They remain blocked from public build because rights/provenance
evidence is incomplete.

## Reference Assets

The 11 PNGs under `ASSETS_REFERENCE/global_images/` remain local-only and ignored.
The associated reference log is preserved separately. No reference image was
copied into `ASSETS/`.

## Internal Evidence Images

No additional WordPress, strategy, deployment or log image files were discovered
in this physical scan. Unregistered `ASSETS` files are not automatically public;
they remain `UNKNOWN_REVIEW_REQUIRED` until governed.

## Exact Duplicates

Two duplicate groups were found:

- `DUP-001`: `ASSETS/_INBOX/systems_governance_community.png` and
  `ASSETS_REFERENCE/global_images/systems_governance_community.png`
- `DUP-002`: `ASSETS/_INBOX/systems_health.png` and
  `ASSETS_REFERENCE/global_images/systems_health.png`

No duplicates were deleted.

## Missing Registered Assets

The previously identified `systems_governance_community.webp` remains absent
from the curated `ASSETS/` source. A PNG reference exists locally, but it is not
an approved replacement.

## Broken Preview Findings

The generated index contains repository-relative paths for all 42 records. Static
path validation passes. Browser visual verification remains a manual acceptance
step because the browser automation harness was unavailable.

## Rights / Provenance Overview

Physical discovery records identity, size, dimensions where readable and SHA-256.
It does not establish copyright, licence, consent, trademark permission or
commercial-use rights. No asset was promoted or marked rights-approved.

## Owner Review Candidate Count

17 current governed candidates are in the default owner-review scope. The full
scope exposes all 42 discoveries, including 11 reference-only files and 14
unregistered, not-yet-reviewed files.

## Important Observation

**Physical discovery does not constitute public approval.**

## Recommended Cleanup / Promotion Actions

Review duplicate copies without deleting them in this task, resolve the missing
curated systems source, obtain owner selections and provenance evidence, and only
then promote selected assets through accessibility, legal and build controls.
