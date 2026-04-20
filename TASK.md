# TASK.md — New Earth Website Asset Production Workflow

## Goal

Set up, verify, and maintain the visual asset production workflow for the New Earth website inside this repository.

This task is about **asset workflow management**, not final creative decision-making.

The objective is to make the repo ready for clean, repeatable asset production by ensuring:
- the `ASSETS/` structure exists and is correctly organized,
- prompt batch files are present and usable,
- `ASSET_REGISTER.csv` is accurate and complete,
- naming is consistent,
- asset status tracking is reliable,
- the system is easy for a human to continue using.

The first public page shells are now live on www.new-earth.uk, so this workflow now supports an active release as well as pre-launch asset prep.

---

## Context

This repository contains the visual asset system for the New Earth website and related MicroGrow pages.

The asset workflow is organized around:
- `ASSETS/`
- `ASSETS/_PROMPTS/`
- `ASSETS/ASSET_REGISTER.csv`

Three prompt files are the current source of truth for generation prompts:
- `ASSETS/_PROMPTS/BATCH_01_CORE_HEROES.md`
- `ASSETS/_PROMPTS/BATCH_02_SECTIONS_AND_PRODUCT.md`
- `ASSETS/_PROMPTS/BATCH_03_SOCIAL_PRINT_DIAGRAMS.md`

The asset register is the source of truth for tracking:
- filename
- folder
- size
- format
- batch
- status
- notes

This repo is being used as a practical production system for a live website build.

---

## What to do

### 1. Verify the asset structure
Check that the full `ASSETS/` folder structure exists.

If anything is missing, create the missing folders only.
Do not restructure the system unless absolutely necessary.

Expected top-level folders:

- `ASSETS/_INBOX`
- `ASSETS/_PROMPTS`
- `ASSETS/_REFERENCE`
- `ASSETS/_WORKING`
- `ASSETS/_EXPORTS_WEB`
- `ASSETS/_EXPORTS_PRINT`
- `ASSETS/00_BRAND`
- `ASSETS/01_GLOBAL_SITE`
- `ASSETS/02_HOME`
- `ASSETS/03_MANIFESTO`
- `ASSETS/04_BLUEPRINT`
- `ASSETS/05_SYSTEMS`
- `ASSETS/06_MICROGROW`
- `ASSETS/07_ABOUT`
- `ASSETS/08_CONTACT`
- `ASSETS/09_BLOG`
- `ASSETS/10_RESOURCES`
- `ASSETS/11_COMMUNITY`
- `ASSETS/12_SOCIAL_OG`
- `ASSETS/13_PRINT`

---

### 2. Verify the prompt files
Check that these files exist and are not empty:

- `ASSETS/_PROMPTS/BATCH_01_CORE_HEROES.md`
- `ASSETS/_PROMPTS/BATCH_02_SECTIONS_AND_PRODUCT.md`
- `ASSETS/_PROMPTS/BATCH_03_SOCIAL_PRINT_DIAGRAMS.md`

If any file is missing, create a placeholder file with a heading and a note saying it still needs prompt content.

Do not invent new creative prompts unless explicitly asked.

---

### 3. Verify the asset register
Check `ASSETS/ASSET_REGISTER.csv`.

Ensure it contains columns for:
- Batch
- Section
- Folder
- Filename
- Size
- Format
- Status
- Notes

If rows are missing for known assets already defined in the prompt packs, add them.

Do not add speculative assets that are not already part of the agreed asset system.

---

### 4. Normalize status values
Normalize all `Status` values in `ASSET_REGISTER.csv` to this approved set only:

- `TODO`
- `IN_PROGRESS`
- `DONE`
- `NEEDS_EDIT`
- `APPROVED`
- `LIVE`

If inconsistent variants exist, convert them to the nearest valid status.

Examples:
- `complete` -> `DONE`
- `finished` -> `DONE`
- `review` -> `NEEDS_EDIT` or `APPROVED` depending on context
- `published` -> `LIVE`

---

### 5. Validate filenames and placement
Check that every asset listed in `ASSET_REGISTER.csv` has:
- a filename that matches the agreed naming pattern,
- a folder path that matches the asset structure,
- a format consistent with intended use.

Use these principles:
- `.webp` for website banners and section images
- `.png` for templates, posters, diagrams, icon sheets, and graphics that may contain text or need sharp edges

Do not rename files that already exist unless the current name is clearly wrong and the correction is safe and necessary.

If you rename anything, update all references in:
- `ASSET_REGISTER.csv`
- prompt files
- any related markdown docs

---

### 6. Create a production checklist document
Create this file if it does not already exist:

`ASSETS/ASSET_PRODUCTION_CHECKLIST.md`

It should contain:
- Batch 1 checklist
- Batch 2 checklist
- Batch 3 checklist
- checkbox list of filenames
- a simple production flow:
  1. generate
  2. review
  3. place in correct folder
  4. update register
  5. mark approved
  6. export for web or print if needed

Keep it short and operational.

---

### 7. Create a review checklist document
Create this file if it does not already exist:

`ASSETS/ASSET_REVIEW_STANDARD.md`

It should define simple pass/fail checks for assets:
- correct size
- correct filename
- correct folder
- no watermark
- no embedded text unless intended
- enough negative space for overlays where needed
- visually aligned with New Earth brand direction
- suitable for website or print purpose

Keep it practical and concise.

---

### 8. Do a gap report
Create this file if it does not already exist, or update it if it does:

`ASSETS/ASSET_GAP_REPORT.md`

This file should list:
- missing folders
- missing prompt files
- missing asset rows in the register
- obvious naming issues
- missing checklist/review docs
- assets already tracked but not yet created

Use short bullet points.
Do not write long essays.

---

### 9. Keep the system lightweight
Do not create unnecessary layers, overengineered docs, or speculative structures.

This workflow should remain:
- simple
- human-readable
- easy to maintain
- easy for image generation work to plug into

---

## Constraints

- Do not delete existing user content unless it is clearly redundant boilerplate you created during this task.
- Do not invent extra website pages.
- Do not invent extra asset batches.
- Do not rename the agreed folders unless required to fix a clear mistake.
- Do not rewrite the creative direction.
- Do not replace prompt content with new prompts unless explicitly asked.
- Do not add tools, frameworks, or automation unrelated to asset workflow.
- Prefer minimal, targeted edits over broad rewrites.
- Preserve the existing New Earth / MicroGrow asset architecture.

---

## Priority order

1. Verify folder structure
2. Verify prompt files
3. Verify asset register
4. Normalize status values
5. Validate filenames and folder mapping
6. Create checklist docs
7. Create gap report

Do work in that order.

---

## Done when

This task is complete only when all of the following are true:

- `ASSETS/` exists and matches the intended structure
- all three batch prompt files exist
- `ASSET_REGISTER.csv` is present and usable
- asset statuses are normalized
- filenames and folders are consistent
- `ASSET_PRODUCTION_CHECKLIST.md` exists
- `ASSET_REVIEW_STANDARD.md` exists
- `ASSET_GAP_REPORT.md` exists
- no unnecessary files were added
- changes are reviewable and clearly scoped

---

## Output expectations

At the end of the task, provide a short summary with:
- what was checked
- what was created
- what was fixed
- what is still missing

Keep the summary concise and operational.

---

## Important working style

Think before editing.
Prefer small safe changes.
Do not drift into redesign.
Treat the current asset system as the locked baseline unless the user explicitly changes it.