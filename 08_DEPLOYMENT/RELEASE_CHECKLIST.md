# RELEASE_CHECKLIST

## Status
Release Checklist v1

## Purpose
This file defines the release checklist for the New Earth website.

The goal is to make launches and major updates:
- safe
- deliberate
- traceable
- calm
- repeatable

This checklist should be used before:
- first public launch
- major design updates
- theme deployments
- structural releases

---

## RELEASE TYPES

### Type 1 — Internal build release
Used when making meaningful updates to structure, theme, or page content before public launch.

### Type 2 — Public launch release
Used for first go-live or major public-facing milestone.

### Type 3 — Post-launch update
Used for significant changes after launch.

---

## PRE-RELEASE FOUNDATION CHECK

Before any release, confirm:

- local workspace is up to date
- Blueprint remains source of truth
- latest changes are logged
- open blocking items are known
- deployment path is confirmed

Related files:
- `09_LOGS/BUILD_LOG.md`
- `09_LOGS/OPEN_ITEMS.md`
- `08_DEPLOYMENT/SFTP_DEPLOY_WORKFLOW.md`

---

## WORDPRESS ENVIRONMENT CHECK

Confirm:

- WordPress admin access works
- domain resolves correctly
- HTTPS works
- main pages exist
- menus exist
- parent theme is present
- child theme is installed if relevant
- essential plugins are active
- no unnecessary sample content remains

---

## CONTENT CHECK

Confirm:

- Home page is complete
- Manifesto page is complete
- Blueprint page is complete
- Systems page is complete
- MicroGrow page is complete
- About page is complete
- Contact page is complete
- legal pages exist
- no placeholder text is visible publicly
- page titles and URLs are correct
- core internal links work

Related files:
- `03_CONTENT/`
- `02_INFORMATION_ARCHITECTURE/SITEMAP.md`
- `02_INFORMATION_ARCHITECTURE/URL_STRUCTURE.md`

---

## DESIGN CHECK

Confirm:

- typography is consistent
- colors are consistent
- spacing feels calm and readable
- buttons are styled correctly
- card/grid patterns are consistent
- header looks clean
- footer looks complete
- MicroGrow page still feels part of New Earth
- no page feels cluttered or visually broken

Related files:
- `04_DESIGN_SYSTEM/`
- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/theme.json`

---

## RESPONSIVE CHECK

Confirm on mobile and desktop:

- headings scale well
- paragraphs are readable
- columns stack correctly
- buttons are easy to tap
- menus work
- no section feels cramped
- no major overflow or broken layout exists

---

## NAVIGATION CHECK

Confirm:

- main menu order is correct
- footer menu order is correct
- Home is easy to find
- Blueprint is visible in primary navigation
- Contact is accessible
- legal pages are available in footer
- no broken menu items exist

Related file:
- `05_WORDPRESS/MENU_SETUP.md`

---

## CONTACT / FORM CHECK

Confirm:

- contact method is visible
- form submits correctly if form plugin is used
- admin receives the message
- form styling is readable
- no broken validation occurs

---

## SEO BASICS CHECK

Confirm:

- site title is correct
- tagline is correct
- page titles are set
- meta descriptions exist for core pages
- homepage is indexable if ready
- no unwanted noindex settings remain
- one SEO plugin only is active

---

## THEME DEPLOYMENT CHECK

Before theme deployment, confirm:

- backup exists
- changed files were reviewed locally
- correct files are being uploaded
- target path is correct
- rollback path is known

After deployment, confirm:

- site loads
- homepage looks correct
- one or two internal pages look correct
- WordPress admin still works
- theme is active as expected
- result is logged

---

## LEGAL / TRUST CHECK

Confirm:

- privacy policy exists
- terms exist
- cookie policy exists
- disclaimer exists
- footer contains legal links
- branding is coherent and trustworthy

---

## FINAL HUMAN REVIEW

Before release, pause and check:

1. Does the site feel calm and coherent?
2. Does it clearly explain what New Earth is?
3. Does the Blueprint feel central?
4. Does MicroGrow feel meaningfully integrated?
5. Does the site feel like a real foundation, not a rushed placeholder?
6. Would this make sense to a first-time visitor?

---

## RELEASE LOGGING

After release, update:
- `09_LOGS/BUILD_LOG.md`

Record:
- release type
- what was included
- any issues found
- next priorities

---

## FIRST PUBLIC LAUNCH MINIMUM

The site is ready for first public launch when:

- core pages are complete
- theme is stable
- navigation is clean
- contact works
- legal pages exist
- HTTPS is active
- no obvious placeholder content remains
- the site feels coherent and intentional

---

## FINAL RULE

Do not launch because the build feels emotionally urgent.
Launch when the foundation is coherent.