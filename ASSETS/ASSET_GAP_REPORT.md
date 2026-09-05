# Asset Gap Report

Updated: 2026-08-25

## Launch state
- The first public page shells are live on www.new-earth.uk.
- This report still reflects the asset register inventory, not live deployment confirmation.

## Structure
- No missing top-level `ASSETS/` folders found.
- No missing folder paths referenced by `ASSET_REGISTER.csv`.

## Prompt files
- All three required prompt files exist.
- All three required prompt files are non-empty.

## Register
- `ASSET_REGISTER.csv` has the required columns: `Batch`, `Section`, `Folder`, `Filename`, `Size`, `Format`, `Status`, `Notes`.
- No prompt-defined assets are missing from the register.
- No invalid status values found. Current rows use `DONE` or `TODO`.
- No obvious filename or folder-placement issues found during this pass.

## Workflow docs
- `ASSET_PRODUCTION_CHECKLIST.md` created.
- `ASSET_REVIEW_STANDARD.md` created.
- `ASSET_GAP_REPORT.md` created.

## Current production state
- The register contains 55 assets: 10 `DONE` and 45 `TODO`.
- The nine normalized production heroes are present at their registered paths.
- Eight heroes use `1920x1080`; `contact_banner.webp` uses `1600x900`.
- The remaining 45 registered assets are not yet produced.
- Raw files under `ASSETS/_INBOX/` are excluded from source control and remain available for review.
- Reference PNGs under `ASSETS_REFERENCE/global_images/` await an archival-policy decision.
- `06_THEME/new-earth-child.zip` is generated release material and is excluded from source control.
