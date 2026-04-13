# DECISIONS

## Status
Active decision log

## Purpose
This file records important structural, strategic, and build decisions for the New Earth website project.

The goal is to preserve:
- clarity
- continuity
- reasoning
- alignment
- future maintainability

Every meaningful decision that affects doctrine, structure, WordPress build, theme direction, or future scalability should be logged here.

---

## DECISION LOG

### 2026-04-12 — Locked Blueprint established as source of truth
Decision:
The New Earth Blueprint is the highest-level doctrine for the website and wider system.

Why:
The site needs one stable philosophical and structural foundation to prevent drift, confusion, and fragmentation.

Effect:
All future page structure, messaging, systems framing, and product alignment must remain consistent with the locked Blueprint.

Related files:
- `00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`
- `01_STRATEGY/WEBSITE_VISION.md`

---

### 2026-04-12 — WordPress defined as publishing layer, not source layer
Decision:
WordPress will be treated as the publishing environment, while the local `NEW_EARTH_WEBSITE` structure remains the source of truth.

Why:
This supports clearer system design, cleaner Codex collaboration, better maintainability, and stronger long-term control.

Effect:
All structure, content, and theme logic should be created and maintained locally first, then implemented in WordPress.

Related files:
- `README.md`
- `05_WORDPRESS/WORDPRESS_SETUP.md`

---

### 2026-04-12 — Core launch page set defined
Decision:
The first launch will focus on a lean but complete core page set.

Pages:
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact
- Legal pages

Why:
This provides enough structure to express the full New Earth direction without overbuilding too early.

Effect:
Subpages, pillar detail pages, and deeper system layers will follow after the core launch foundation is stable.

Related files:
- `02_INFORMATION_ARCHITECTURE/SITEMAP.md`
- `05_WORDPRESS/PAGE_BUILD_ORDER.md`

---

### 2026-04-12 — Blueprint given top-level navigation importance
Decision:
Blueprint is a primary top-level page in the main site navigation.

Why:
The Blueprint is not a secondary resource.
It is the architectural core of the New Earth system and must be visible from the main user journey.

Effect:
Visitors can move directly from Home or Manifesto into the structured doctrine layer.

Related files:
- `02_INFORMATION_ARCHITECTURE/MENU_STRUCTURE.md`
- `05_WORDPRESS/MENU_SETUP.md`

---

### 2026-04-12 — MicroGrow positioned as first implementation node
Decision:
MicroGrow will be framed as the first practical implementation node within the New Earth ecosystem.

Why:
This positions MicroGrow as a meaningful expression of the wider philosophy rather than a detached product page.

Effect:
MicroGrow content, systems pages, and navigation all connect the product to the New Earth pillars and overall architecture.

Related files:
- `03_CONTENT/06_MICROGROW/MICROGROW_MASTER.md`
- `01_STRATEGY/BRAND_POSITIONING.md`

---

### 2026-04-12 — Child theme approach selected
Decision:
The site will use a WordPress child theme based on a stable parent theme.

Parent theme:
Twenty Twenty-Four

Why:
This gives the project a reliable base while allowing gradual customization and maintainable growth.

Effect:
The New Earth child theme will handle colors, typography, spacing, and future block-level refinements without forcing a full custom theme too early.

Related files:
- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/theme.json`
- `06_THEME/THEME_NOTES.md`

---

### 2026-04-12 — Calm, grounded visual identity chosen
Decision:
The visual system will follow a calm, grounded, earth-centered design direction.

Why:
The New Earth site must balance spiritual depth, structural intelligence, and practical credibility.

Effect:
The design system uses:
- deep earth green
- warm sand
- soft off-white
- earth brown
- muted gold

Typography direction:
- Playfair Display for headings
- Inter for body text

Related files:
- `04_DESIGN_SYSTEM/COLOUR_SYSTEM.md`
- `04_DESIGN_SYSTEM/TYPOGRAPHY.md`

---

### 2026-04-12 — Reusable section strategy chosen
Decision:
Core page sections should be built as reusable WordPress patterns wherever possible.

Why:
This improves consistency, speeds page building, reduces chaos, and makes future scaling easier.

Effect:
The build will standardize around:
- Hero
- Text Intro
- Three-Card Explanation
- Pillar Grid
- Declaration Band
- Two-Column Bridge
- Feature List
- Timeline
- Journal Preview
- Closing CTA

Related files:
- `05_WORDPRESS/BLOCK_PATTERNS.md`
- `05_WORDPRESS/REUSABLE_SECTIONS.md`
- `04_DESIGN_SYSTEM/COMPONENT_LIBRARY.md`

---

### 2026-04-12 — Systems architecture framed in four layers
Decision:
The site and wider framework will be understood through four system layers.

Layers:
1. Doctrine
2. Interpretation
3. Implementation
4. Participation

Why:
This makes the architecture clearer and helps prevent content, products, and future community layers from becoming mixed together.

Effect:
Future pages and tools should be classified by layer.

Related files:
- `03_CONTENT/05_SYSTEMS/SYSTEMS_OVERVIEW.md`
- `01_STRATEGY\CONTENT_MODEL.md`

---

## LOGGING RULES

### Log a decision when:
- a top-level structural choice is made
- the meaning of a core page changes
- navigation architecture changes
- a major visual system choice is made
- a theme or build strategy changes
- a new long-term system direction is locked

### Do not log:
- tiny wording tweaks
- minor spacing changes
- temporary experiments unless they become permanent

---

## ENTRY FORMAT

Use this structure for future entries:

### YYYY-MM-DD — Short decision title
Decision:
[What was decided]

Why:
[Why it was chosen]

Effect:
[What this changes or governs]

Related files:
- `path/to/file`
- `path/to/file`

---

## FINAL RULE

If a decision changes the shape of the system, log it here.