# MASTER_BUILD_MAP

## Purpose
This file is the master build overview for the New Earth website project.

It shows the full build sequence from:
- foundation
- to live WordPress setup
- to page building
- to launch readiness

Use this as the top-level guide when you want to see the whole project at a glance.

---

# NEW EARTH WEBSITE MASTER BUILD MAP

## Core build logic

The New Earth website is built in this order:

**Blueprint -> Structure -> Design system -> WordPress setup -> Theme -> Core pages -> Legal and Journal -> Pre-launch review -> Launch**

This order matters.

The site should not be built randomly inside WordPress.
It should be built from the source structure outward.

---

## THE SOURCE OF TRUTH

### Locked doctrine
`00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`

This is the highest-level source of truth.

It governs:
- language
- values
- structure
- systems framing
- product alignment
- future expansion

### Publishing layer
WordPress on IONOS

### Working rule
Local workspace first.
WordPress second.

---

# PHASE MAP

## PHASE 1 — FOUNDATION

### Goal
Create the full local workspace and lock the Blueprint into it.

### Main actions
- run the `.bat`
- generate full folder structure
- confirm all markdown files exist
- paste the locked Blueprint into the master blueprint file
- review Codex control files
- review build rules

### Key files
- `README.md`
- `00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`
- `07_CODEX/AGENTS.md`
- `07_CODEX/TASK.md`
- `07_CODEX/RULES.md`

### Success state
The project exists as a real system on disk and the Blueprint is locked into it.

---

## PHASE 2 — STRATEGY AND ARCHITECTURE

### Goal
Define the website structure before building it.

### Main actions
- confirm website vision
- confirm sitemap
- confirm page hierarchy
- confirm URL structure
- confirm menu structure
- confirm internal linking direction

### Key files
- `01_STRATEGY/WEBSITE_VISION.md`
- `02_INFORMATION_ARCHITECTURE/SITEMAP.md`
- `02_INFORMATION_ARCHITECTURE/PAGE_HIERARCHY.md`
- `02_INFORMATION_ARCHITECTURE/URL_STRUCTURE.md`
- `02_INFORMATION_ARCHITECTURE/MENU_STRUCTURE.md`
- `02_INFORMATION_ARCHITECTURE/INTERNAL_LINKING_MAP.md`

### Success state
The site architecture is stable and buildable.

---

## PHASE 3 — DESIGN SYSTEM

### Goal
Create the visual rules that make the site feel coherent.

### Main actions
- define color system
- define typography
- define page layout rules
- define reusable sections
- define component library
- define block patterns

### Key files
- `04_DESIGN_SYSTEM/COLOUR_SYSTEM.md`
- `04_DESIGN_SYSTEM/TYPOGRAPHY.md`
- `04_DESIGN_SYSTEM/PAGE_LAYOUT_RULES.md`
- `04_DESIGN_SYSTEM/COMPONENT_LIBRARY.md`
- `05_WORDPRESS/BLOCK_PATTERNS.md`
- `05_WORDPRESS/REUSABLE_SECTIONS.md`

### Success state
The site has a calm, grounded, reusable visual system.

---

## PHASE 4 — WORDPRESS FOUNDATION

### Goal
Prepare the live publishing layer properly on IONOS.

### Main actions
- confirm WordPress install
- confirm domain connection
- confirm HTTPS
- fill IONOS access file
- clean default WordPress install
- create page shells
- create menus
- set homepage and posts page
- decide plugin stack

### Key files
- `08_DEPLOYMENT/IONOS_ACCESS.md`
- `05_WORDPRESS/WORDPRESS_SETUP.md`
- `05_WORDPRESS/PAGE_BUILD_ORDER.md`
- `05_WORDPRESS/MENU_SETUP.md`
- `05_WORDPRESS/PLUGIN_STACK.md`

### Success state
WordPress is clean, accessible, and ready to receive the actual build.

---

## PHASE 5 — THEME FOUNDATION

### Goal
Deploy and activate the New Earth child theme.

### Main actions
- confirm local child theme files
- upload child theme by SFTP
- activate child theme
- verify typography, colors, widths, and buttons
- confirm no breakage

### Key files
- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/functions.php`
- `06_THEME/new-earth-child/theme.json`
- `06_THEME/THEME_NOTES.md`
- `08_DEPLOYMENT/SFTP_DEPLOY_WORKFLOW.md`

### Success state
The live site is running on the New Earth child theme foundation.

---

# SESSION MAP

## SESSION 1 — BUILD BASE

### Goal
Create the workspace and live structural setup.

### Includes
- run `.bat`
- paste Blueprint
- fill IONOS access file
- confirm WordPress
- create page shells
- create menus
- set homepage and posts page
- upload and activate child theme
- log the session

### Output
A working live shell exists.

---

## SESSION 2 — BUILD THE CORE VISION PAGES

### Goal
Build the first three public pages.

### Pages built
- Home
- Manifesto
- Blueprint

### Main source files
- `03_CONTENT/01_HOME/HOME_MASTER.md`
- `03_CONTENT/02_MANIFESTO/MANIFESTO_MASTER.md`
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_MASTER.md`

### Output
The site now has vision, philosophy, and structure.

---

## SESSION 3 — BUILD THE MAIN PUBLIC SITE SHELL

### Goal
Build the main remaining core pages.

### Pages built
- Systems
- MicroGrow
- About
- Contact

### Main source files
- `03_CONTENT/05_SYSTEMS/SYSTEMS_OVERVIEW.md`
- `03_CONTENT/06_MICROGROW/MICROGROW_MASTER.md`
- `03_CONTENT/07_ABOUT/ABOUT_MASTER.md`
- `03_CONTENT/09_CONTACT/CONTACT_MASTER.md`

### Output
The main public site shell is complete.

---

## SESSION 4 — LEGAL, JOURNAL, AND PRE-LAUNCH READINESS

### Goal
Complete the final trust and readiness layer.

### Main actions
- add Privacy Policy
- add Terms
- add Cookie Policy
- add Disclaimer
- confirm footer legal links
- set up Journal
- create Journal categories
- create first reusable patterns
- do responsive review
- do navigation review
- run release checklist
- update open items
- log the session

### Main source files
- `03_CONTENT/10_LEGAL/PRIVACY_POLICY.md`
- `03_CONTENT/10_LEGAL/TERMS.md`
- `03_CONTENT/10_LEGAL/COOKIE_POLICY.md`
- `03_CONTENT/10_LEGAL/DISCLAIMER.md`
- `03_CONTENT/08_JOURNAL/JOURNAL_STRATEGY.md`
- `03_CONTENT/08_JOURNAL/CATEGORIES.md`
- `08_DEPLOYMENT/RELEASE_CHECKLIST.md`
- `09_LOGS/OPEN_ITEMS.md`

### Output
The site becomes launch-capable.

---

# PAGE BUILD ORDER

## Build in this order
1. Home
2. Manifesto
3. Blueprint
4. Systems
5. MicroGrow
6. About
7. Contact
8. Privacy Policy
9. Terms
10. Cookie Policy
11. Disclaimer
12. Journal structure

### Rule
Do not build subpages before the core pages are stable.

---

# LIVE SITE STRUCTURE

## Top-level pages
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact

## Legal pages
- Privacy Policy
- Terms
- Cookie Policy
- Disclaimer

## Future pages later
- The 12 Pillars
- Inner Blueprint
- Transition Path
- New Earth Test
- MicroGrow Features
- MicroGrow Roadmap
- MicroGrow FAQ
- 12 pillar detail pages

---

# CORE PAGE FLOW

## Main visitor journey
Home -> Manifesto -> Blueprint -> Systems -> MicroGrow -> Contact

## Supporting trust journey
Home -> About -> Blueprint -> Contact

## Living content journey
Home -> Journal -> Blueprint -> Systems -> MicroGrow

---

# BUILD DISCIPLINE RULES

## Rule 1
Blueprint first.
No page or system should contradict the locked doctrine.

## Rule 2
Local first.
The local workspace stays canonical.

## Rule 3
Build structure before polish.

## Rule 4
Do not overload WordPress with plugins.

## Rule 5
Use reusable sections wherever possible.

## Rule 6
Log meaningful changes in:
- `09_LOGS/BUILD_LOG.md`
- `09_LOGS/DECISIONS.md`
- `09_LOGS/OPEN_ITEMS.md`

---

# MINIMUM V1 LAUNCH STANDARD

The site is ready for first launch when:

- Home is complete
- Manifesto is complete
- Blueprint is complete
- Systems is complete
- MicroGrow is complete
- About is complete
- Contact is complete
- legal pages are complete
- menus work
- HTTPS works
- child theme is stable
- no obvious placeholder text remains
- site is readable on mobile
- contact path works
- release checklist is run

---

# AFTER LAUNCH

## First expansion options
- publish first Journal posts
- build Blueprint support pages
- build MicroGrow subpages
- create 12 pillar detail pages
- refine reusable patterns
- add favicon and brand polish
- improve media library
- create diagrams for Blueprint and Systems

## Do not rush
Expansion should follow coherence, not impulse.

---

# MASTER CHECKPOINTS

## Checkpoint 1
Workspace created and Blueprint locked

## Checkpoint 2
WordPress ready and child theme active

## Checkpoint 3
Home, Manifesto, and Blueprint live

## Checkpoint 4
Systems, MicroGrow, About, and Contact live

## Checkpoint 5
Legal pages, Journal setup, and pre-launch review complete

## Checkpoint 6
First public launch

---

# CURRENT WORKING TRUTH

New Earth is being built in the right order:

**Blueprint -> Architecture -> Theme -> Pages -> Trust layer -> Launch**

That is the system.