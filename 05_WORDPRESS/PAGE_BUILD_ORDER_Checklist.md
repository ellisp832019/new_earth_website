# PAGE_BUILD_ORDER

## Status
Live build checklist v2

## Purpose
This file turns the New Earth page plan into a practical WordPress execution checklist.

Use it while building the live site so the work happens in the right order and nothing important is skipped.

---

## CORE BUILD RULE

Do not build pages randomly.

Build in this order:

1. Foundation
2. Core page shells
3. Navigation
4. Theme activation
5. Core content
6. Legal pages
7. Journal structure
8. Final polish

---

## PHASE 1 — WORDPRESS FOUNDATION

### Checklist
- [ ] WordPress installed on IONOS
- [ ] domain connected correctly
- [ ] HTTPS active
- [ ] site title set
- [ ] tagline set
- [ ] permalinks set to post name
- [ ] sample content removed
- [ ] admin access confirmed
- [ ] backup path ready
- [ ] essential plugin decisions made

### Related files
- `05_WORDPRESS/WORDPRESS_SETUP.md`
- `08_DEPLOYMENT/IONOS_ACCESS.md`
- `08_DEPLOYMENT/RELEASE_CHECKLIST.md`

---

## PHASE 2 — CREATE CORE PAGE SHELLS

Create these pages first, even before full content is pasted.

### Checklist
- [ ] Home
- [ ] Manifesto
- [ ] Blueprint
- [ ] Systems
- [ ] MicroGrow
- [ ] Journal
- [ ] About
- [ ] Contact
- [ ] Privacy Policy
- [ ] Terms
- [ ] Cookie Policy
- [ ] Disclaimer

### Rule
At this stage, the goal is structure, not polish.

---

## PHASE 3 — MENU SETUP

### Checklist
- [ ] main menu created
- [ ] footer menu created
- [ ] page order matches architecture
- [ ] Blueprint is visible in top navigation
- [ ] legal pages are visible in footer

### Main menu order
1. Home
2. Manifesto
3. Blueprint
4. Systems
5. MicroGrow
6. Journal
7. About
8. Contact

### Footer menu order
1. Manifesto
2. Blueprint
3. Systems
4. MicroGrow
5. Journal
6. About
7. Contact
8. Privacy Policy
9. Terms
10. Cookie Policy
11. Disclaimer

### Related file
- `05_WORDPRESS/MENU_SETUP.md`

---

## PHASE 4 — CHILD THEME ACTIVATION

### Checklist
- [ ] parent theme present
- [ ] child theme uploaded
- [ ] child theme activated
- [ ] colors appear correctly
- [ ] typography looks correct
- [ ] page widths behave correctly
- [ ] buttons are styled correctly
- [ ] nothing breaks in admin or frontend

### Related files
- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/functions.php`
- `06_THEME/new-earth-child/theme.json`
- `08_DEPLOYMENT/SFTP_DEPLOY_WORKFLOW.md`

---

## PHASE 5 — CORE CONTENT BUILD

Build the main public pages in this exact order.

---

### 1. HOME
### Checklist
- [ ] Home content pasted from source file
- [ ] hero built
- [ ] 12 pillar preview section built
- [ ] systems section built
- [ ] MicroGrow section built
- [ ] closing CTA built
- [ ] homepage set as static homepage

### Source file
- `03_CONTENT/01_HOME/HOME_MASTER.md`

---

### 2. MANIFESTO
### Checklist
- [ ] Manifesto content pasted
- [ ] hero built
- [ ] core worldview sections built
- [ ] inner and outer design section built
- [ ] MicroGrow bridge section built
- [ ] closing declaration built

### Source file
- `03_CONTENT/02_MANIFESTO/MANIFESTO_MASTER.md`

---

### 3. BLUEPRINT
### Checklist
- [ ] Blueprint content pasted
- [ ] foundational vision built
- [ ] core principles section built
- [ ] 12 pillars section built
- [ ] inner blueprint section built
- [ ] transition path section built
- [ ] New Earth Test section built
- [ ] implementation bridge built

### Source file
- `03_CONTENT/03_BLUEPRINT/BLUEPRINT_MASTER.md`

---

### 4. SYSTEMS
### Checklist
- [ ] Systems content pasted
- [ ] why systems matter section built
- [ ] core system layers section built
- [ ] governance system section built
- [ ] knowledge system section built
- [ ] community system section built
- [ ] product system section built

### Source file
- `03_CONTENT/05_SYSTEMS/SYSTEMS_OVERVIEW.md`

---

### 5. MICROGROW
### Checklist
- [ ] MicroGrow content pasted
- [ ] product intro built
- [ ] why it exists section built
- [ ] core features section built
- [ ] blueprint alignment section built
- [ ] current direction section built
- [ ] closing positioning section built

### Source file
- `03_CONTENT/06_MICROGROW/MICROGROW_MASTER.md`

---

### 6. ABOUT
### Checklist
- [ ] About content pasted
- [ ] what New Earth is section built
- [ ] why it exists section built
- [ ] inner life and system design section built
- [ ] Blueprint connection section built
- [ ] MicroGrow connection section built

### Source file
- `03_CONTENT/07_ABOUT/ABOUT_MASTER.md`

---

### 7. CONTACT
### Checklist
- [ ] Contact content pasted
- [ ] inquiry types section built
- [ ] contact method added
- [ ] email shown or form working
- [ ] closing CTA built

### Source file
- `03_CONTENT/09_CONTACT/CONTACT_MASTER.md`

---

## PHASE 6 — LEGAL PAGE BUILD

### Checklist
- [ ] Privacy Policy added
- [ ] Terms added
- [ ] Cookie Policy added
- [ ] Disclaimer added
- [ ] placeholders replaced with real details
- [ ] legal links added to footer
- [ ] legal pages readable on mobile

### Source files
- `03_CONTENT/10_LEGAL/PRIVACY_POLICY.md`
- `03_CONTENT/10_LEGAL/TERMS.md`
- `03_CONTENT/10_LEGAL/COOKIE_POLICY.md`
- `03_CONTENT/10_LEGAL/DISCLAIMER.md`

---

## PHASE 7 — JOURNAL SETUP

### Checklist
- [ ] Journal page exists
- [ ] posts page assigned in Reading settings
- [ ] categories created
- [ ] at least 1–3 starter posts planned or drafted
- [ ] Journal linked in main menu
- [ ] Journal preview appears on homepage if desired

### Related files
- `03_CONTENT/08_JOURNAL/JOURNAL_STRATEGY.md`
- `03_CONTENT/08_JOURNAL/CATEGORIES.md`

---

## PHASE 8 — REUSABLE PATTERNS

### Checklist
- [ ] NE Hero created
- [ ] NE Text Intro created
- [ ] NE Pillar Grid created
- [ ] NE Declaration Band created
- [ ] NE Closing CTA created

### Related files
- `05_WORDPRESS/BLOCK_PATTERNS.md`
- `05_WORDPRESS/REUSABLE_SECTIONS.md`

---

## PHASE 9 — FINAL PRE-LAUNCH CHECK

### Checklist
- [ ] homepage reads clearly
- [ ] Manifesto is complete
- [ ] Blueprint feels central
- [ ] Systems is understandable
- [ ] MicroGrow is integrated naturally
- [ ] About is human and clear
- [ ] Contact works
- [ ] legal pages are complete
- [ ] no placeholder text remains
- [ ] menus work
- [ ] mobile check completed
- [ ] launch logged in build log

### Related file
- `08_DEPLOYMENT/RELEASE_CHECKLIST.md`

---

## CURRENT BUILD ORDER SUMMARY

### Build now
1. Foundation settings
2. Core page shells
3. Menus
4. Child theme
5. Home
6. Manifesto
7. Blueprint
8. Systems
9. MicroGrow
10. About
11. Contact
12. Legal pages
13. Journal
14. Pattern cleanup
15. Final review

---

## FINAL RULE

Build the site in a way that keeps the structure stronger than the momentum.