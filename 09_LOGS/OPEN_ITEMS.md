# OPEN_ITEMS

## Status
Active open items list

## Purpose
This file tracks unresolved tasks, pending setup steps, open decisions, and implementation items for the New Earth website build.

The goal is to keep the build:
- visible
- organized
- actionable
- low-chaos
- easy to resume

This file is the working queue for unfinished items.

---

## PRIORITY STATUS KEY

### P1
Immediate and blocking

### P2
Important but not blocking

### P3
Useful later

---

## CURRENT OPEN ITEMS

### P1 — Complete IONOS access record
Status:
Open

Details:
Fill in:
- hosting package name
- WordPress product type
- WordPress admin URL
- SFTP host
- SFTP username
- target theme path
- SSL status
- domain connection status

Related file:
- `08_DEPLOYMENT/IONOS_ACCESS.md`

---

### P1 — Confirm WordPress install on IONOS
Status:
Open

Details:
Verify:
- WordPress is installed
- domain resolves correctly
- HTTPS is active
- admin login works

Related file:
- `05_WORDPRESS/WORDPRESS_SETUP.md`

---

### P1 — Create core pages in WordPress
Status:
Open

Pages:
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact
- Privacy Policy
- Terms
- Cookie Policy
- Disclaimer

Related files:
- `02_INFORMATION_ARCHITECTURE/SITEMAP.md`
- `05_WORDPRESS/PAGE_BUILD_ORDER.md`

---

### P1 — Create WordPress menus
Status:
Open

Details:
Create:
- main navigation
- footer navigation

Related file:
- `05_WORDPRESS/MENU_SETUP.md`

---

### P1 — Upload and activate child theme
Status:
Open

Details:
Upload:
- `style.css`
- `functions.php`
- `theme.json`

Confirm:
- child theme activates
- styles load correctly
- widths and buttons behave correctly

Related files:
- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/functions.php`
- `06_THEME/new-earth-child/theme.json`
- `08_DEPLOYMENT/SFTP_DEPLOY_WORKFLOW.md`

---

### P1 — Populate first core pages
Status:
Open

Priority order:
1. Home
2. Manifesto
3. Blueprint
4. Systems
5. MicroGrow
6. About
7. Contact

Related files:
- `03_CONTENT/01_HOME/HOME_MASTER.md`
- `03_CONTENT/02_MANIFESTO/MANIFESTO_MASTER.md`
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_MASTER.md`
- `03_CONTENT/05_SYSTEMS/SYSTEMS_OVERVIEW.md`
- `03_CONTENT/06_MICROGROW/MICROGROW_MASTER.md`
- `03_CONTENT/07_ABOUT/ABOUT_MASTER.md`
- `03_CONTENT/09_CONTACT/CONTACT_MASTER.md`

---

### P1 — Choose live plugin stack
Status:
Open

Details:
Choose one plugin for each needed category:
- SEO
- forms
- security
- backup
- optional performance

Related file:
- `05_WORDPRESS/PLUGIN_STACK.md`

---

### P2 — Set homepage and journal page in Reading settings
Status:
Open

Details:
Set:
- static homepage = Home
- posts page = Journal

Related file:
- `05_WORDPRESS/WORDPRESS_SETUP.md`

---

### P2 — Create reusable block patterns in WordPress
Status:
Open

Priority patterns:
- NE Hero
- NE Text Intro
- NE Pillar Grid
- NE Declaration Band
- NE Closing CTA

Related files:
- `05_WORDPRESS/BLOCK_PATTERNS.md`
- `05_WORDPRESS/REUSABLE_SECTIONS.md`

---

### P2 — Build first media structure
Status:
Open

Details:
Prepare:
- logo files
- favicon
- hero imagery
- nature imagery
- MicroGrow imagery
- placeholder journal thumbnails if needed

Related file:
- `05_WORDPRESS/MEDIA_LIBRARY_RULES.md`

---

### P2 — Add legal page content
Status:
Open

Pages:
- Privacy Policy
- Terms
- Cookie Policy
- Disclaimer

Related files:
- `03_CONTENT/10_LEGAL/PRIVACY_POLICY.md`
- `03_CONTENT/10_LEGAL/TERMS.md`
- `03_CONTENT/10_LEGAL/COOKIE_POLICY.md`
- `03_CONTENT/10_LEGAL/DISCLAIMER.md`

---

### P2 — Create Journal categories
Status:
Open

Categories:
- Blueprint
- Manifesto
- Systems
- MicroGrow
- Conscious Living
- Regeneration
- Technology
- Stewardship

Related file:
- `03_CONTENT/08_JOURNAL/CATEGORIES.md`

---

### P3 — Build Blueprint support pages
Status:
Open

Pages:
- The 12 Pillars
- Inner Blueprint
- Transition Path
- New Earth Test

Related files:
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_PILLARS_INDEX.md`
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_INNER_FOUNDATION.md`
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_TRANSITION.md`
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_SYSTEM_TEST.md`

---

### P3 — Build MicroGrow subpages
Status:
Open

Pages:
- Features
- How It Works
- Roadmap
- Blueprint Alignment
- FAQ

Related files:
- `03_CONTENT/06_MICROGROW/MICROGROW_FEATURES.md`
- `03_CONTENT/06_MICROGROW/MICROGROW_ROADMAP.md`
- `03_CONTENT/06_MICROGROW/MICROGROW_BLUEPRINT_ALIGNMENT.md`
- `03_CONTENT/06_MICROGROW/MICROGROW_FAQ.md`

---

### P3 — Build 12 pillar detail pages
Status:
Open

Details:
Complete and publish the full pillar page set after the main Blueprint hub is stable.

Related folder:
- `03_CONTENT/04_PILLARS/`

---

## CURRENT BUILD ORDER

### Immediate order
1. IONOS access record
2. WordPress install and access confirmation
3. Core page shells
4. Menus
5. Child theme upload
6. Home page
7. Manifesto page
8. Blueprint page
9. Systems page
10. MicroGrow page
11. About page
12. Contact page
13. Legal pages
14. Journal setup

---

## RULES

### Rule 1
When an item is completed, move it to the build log rather than deleting the history mentally.

### Rule 2
If a new blocking task appears, add it here before continuing.

### Rule 3
Keep this file practical.
It is a working queue, not a manifesto.

---

## CURRENT FOCUS

The current focus is:
**move from foundation files into live WordPress implementation cleanly**