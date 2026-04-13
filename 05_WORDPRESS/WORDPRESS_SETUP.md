# WordPress Setup

Setup checklist:
- install WordPress on IONOS
- confirm SSL
- set site title
- set permalink structure to post name
- remove sample content
- create core pages
- activate parent theme
- prepare child theme
- install essential plugins only

# WORDPRESS_SETUP

## Status
Build Setup v1

## Purpose
This file defines the practical setup steps for building the New Earth website on WordPress using IONOS hosting.

The goal is to create a clean publishing layer that receives content and structure from the local New Earth workspace.

---

## Core rule

WordPress is the publishing layer.

The local `NEW_EARTH_WEBSITE` workspace is the source of truth for:
- doctrine
- structure
- content
- design direction
- theme files
- build rules

---

## PHASE 1 — INITIAL WORDPRESS SETUP

### 1. Install WordPress on IONOS
Create the WordPress site for:
`www.new-earth.uk`

### 2. Confirm domain connection
Make sure the domain resolves correctly to the WordPress install.

### 3. Confirm SSL
Ensure HTTPS is active before public build work begins.

### 4. Set site title
Suggested:
**New Earth**

### 5. Set tagline
Suggested:
**A living framework for conscious civilization**

### 6. Set permalink structure
Use:
**Post name**

This creates clean URLs.

### 7. Remove sample content
Delete:
- default page
- default post
- unused themes if not needed
- unused plugins

---

## PHASE 2 — CORE SETTINGS

### General settings
- Site title set
- Tagline set
- Admin email confirmed
- Timezone set correctly
- Date format chosen
- Week starts on correct day

### Reading settings
- homepage will be a static page
- blog page will be Journal later

### Discussion settings
- decide whether comments are enabled or disabled
- for first version, disable comments unless needed

### Media settings
- keep uploads organized
- use clean file naming

---

## PHASE 3 — CREATE CORE PAGES

Create these pages first:

1. Home
2. Manifesto
3. Blueprint
4. Systems
5. MicroGrow
6. Journal
7. About
8. Contact
9. Privacy Policy
10. Terms
11. Cookie Policy
12. Disclaimer

Do not worry about full styling yet.
Create the page shell first.

---

## PHASE 4 — MENU SETUP

### Main menu
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact

### Footer menu
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

---

## PHASE 5 — THEME SETUP

### Theme approach
Use a stable parent theme with a simple child theme.

Child theme folder:
`/06_THEME/new-earth-child/`

### Child theme purpose
The child theme should hold:
- custom styling
- future template changes
- future reusable presentation rules
- New Earth visual identity

### Initial child theme files
- `style.css`
- `functions.php`
- `theme.json`

Start simple.
Do not overbuild the theme in version 1.

---

## PHASE 6 — PLUGIN APPROACH

Keep plugins minimal.

Install only what is needed for:

- SEO
- forms
- security
- backup
- optional caching if necessary

Do not bloat the site with unnecessary visual builders unless required.

---

## PHASE 7 — CONTENT POPULATION ORDER

Paste content into WordPress in this order:

1. Home
2. Manifesto
3. Blueprint
4. Systems
5. MicroGrow
6. About
7. Contact
8. Journal structure
9. Legal pages

Use the local content files as the source.

---

## PHASE 8 — DESIGN EXECUTION

When styling pages in WordPress:

- keep sections spacious
- use clear heading hierarchy
- avoid clutter
- keep tone calm and natural
- let the Home, Manifesto, and Blueprint pages lead the visual system
- integrate MicroGrow as part of the wider architecture

The site should feel:
- grounded
- conscious
- intelligent
- coherent
- expandable

---

## PHASE 9 — PRE-LAUNCH CHECK

Before launch, confirm:

- homepage is set correctly
- menus work
- all core pages exist
- internal links work
- SSL is active
- site title and favicon are set
- legal pages exist
- contact method works
- child theme is active if ready
- no sample content remains

---

## PHASE 10 — OPERATING RULES

### Rule 1
Do not create random pages directly in WordPress without first updating the local workspace.

### Rule 2
Do not edit the locked Blueprint directly in WordPress first.
Update the source file first.

### Rule 3
Do not add visual complexity before structure is sound.

### Rule 4
Keep WordPress clean.
The goal is maintainability, not noise.

---

## FIRST WORDPRESS MILESTONE

WordPress foundation is complete when:

- core pages exist
- menus exist
- settings are clean
- theme path is prepared
- WordPress is ready to receive structured content from the workspace