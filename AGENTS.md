# AGENTS.md

## Project
New Earth website and asset production system for `new-earth.uk`, including aligned MicroGrow brand/product visuals.

## Working style
This repo is spec-driven and task-driven.
Follow the current task files and existing repo structure.
Make small, safe, reviewable changes.
Do not drift into redesign unless explicitly asked.

## Primary source of truth
For website asset workflow, treat these as the locked source of truth:

- `TASK.md`
- `ASSETS/ASSET_REGISTER.csv`
- `ASSETS/_PROMPTS/BATCH_01_CORE_HEROES.md`
- `ASSETS/_PROMPTS/BATCH_02_SECTIONS_AND_PRODUCT.md`
- `ASSETS/_PROMPTS/BATCH_03_SOCIAL_PRINT_DIAGRAMS.md`

If there is a conflict, prefer:
1. direct user instruction
2. `TASK.md`
3. `ASSETS/ASSET_REGISTER.csv`
4. prompt batch files
5. other supporting docs

## Scope
Your job in this repo is to help maintain and improve the asset production workflow for the New Earth website.

This includes:
- verifying folder structure
- checking prompt files
- maintaining `ASSET_REGISTER.csv`
- normalizing filenames and statuses
- creating lightweight workflow docs
- identifying missing assets or missing tracking rows
- keeping the system easy for humans to use

This does not include:
- inventing new pages without instruction
- inventing new asset batches without instruction
- changing brand direction without instruction
- broadly restructuring the repo without instruction
- replacing prompt content unless explicitly asked

## Asset system rules
The `ASSETS/` structure is the locked baseline.

Do not rename top-level folders unless fixing a clear mistake.
Do not move assets between sections unless the current location is clearly wrong.
Do not create unnecessary extra nesting.

Use these folder groupings as the standard:
- `00_BRAND`
- `01_GLOBAL_SITE`
- `02_HOME`
- `03_MANIFESTO`
- `04_BLUEPRINT`
- `05_SYSTEMS`
- `06_MICROGROW`
- `07_ABOUT`
- `08_CONTACT`
- `09_BLOG`
- `10_RESOURCES`
- `11_COMMUNITY`
- `12_SOCIAL_OG`
- `13_PRINT`

## File naming rules
Preserve the agreed filenames from the prompt packs and asset register.

Naming style:
- lowercase
- underscores
- descriptive but concise
- no spaces
- no version suffixes unless explicitly needed

Examples:
- `home_hero_new_earth_main.webp`
- `blueprint_12_pillars_overview.png`
- `microgrow_app_mockup.png`

Do not rename existing files casually.
If a rename is necessary, update all references.

## Format rules
Default format expectations:
- `.webp` for website heroes, banners, and section visuals
- `.png` for diagrams, templates, icon sheets, posters, and sharp-edge graphics

Do not convert formats unless there is a clear reason.

## Status rules
Normalize asset statuses in `ASSET_REGISTER.csv` to this set only:

- `TODO`
- `IN_PROGRESS`
- `DONE`
- `NEEDS_EDIT`
- `APPROVED`
- `LIVE`

Do not introduce new status names.

## Prompt file rules
The three batch prompt files are working production documents.

When checking them:
- ensure they exist
- ensure they are not empty
- preserve prompt wording unless explicitly asked to refine it
- do not invent additional creative prompts unless requested

## Register rules
`ASSETS/ASSET_REGISTER.csv` is the production tracker.

It should remain usable, clean, and complete.

Expected columns:
- `Batch`
- `Section`
- `Folder`
- `Filename`
- `Size`
- `Format`
- `Status`
- `Notes`

When making changes:
- add missing rows for agreed assets
- normalize statuses
- correct obvious folder or filename mismatches
- avoid speculative additions

## Docs you may create or maintain
These lightweight docs are allowed and useful:

- `ASSETS/ASSET_PRODUCTION_CHECKLIST.md`
- `ASSETS/ASSET_REVIEW_STANDARD.md`
- `ASSETS/ASSET_GAP_REPORT.md`

Keep them practical and short.
Do not create documentation bloat.

## Editing rules
Prefer minimal edits over broad rewrites.
Preserve user-created content wherever possible.
Do not touch unrelated areas of the repo.
Do not remove content unless it is clearly redundant or incorrect.

## Expected workflow
When asked to work on the asset system, use this order:

1. verify folder structure
2. verify prompt files
3. verify asset register
4. normalize statuses
5. validate filenames and placement
6. create or update checklist docs
7. create or update gap report

## Output style
At the end of a task, give a short operational summary:
- what you checked
- what you created
- what you fixed
- what is still missing

Keep summaries concise.
Do not give long essays unless explicitly asked.

## Brand alignment
All asset workflow decisions should remain aligned with the current New Earth direction:

- premium
- spiritual-modern
- regenerative
- earth-centered
- peaceful
- cinematic
- elegant
- uncluttered

Do not rewrite or expand the brand doctrine here.
Just preserve alignment with the current system.

## Safety for changes
Before editing:
- check whether the change is actually needed
- prefer the smallest safe change
- preserve the locked baseline
- avoid unnecessary creativity in operational tasks