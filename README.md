# NEW_EARTH_WEBSITE

The official build workspace for **www.new-earth.uk**.

The first public page shells are now live at **www.new-earth.uk**.

This project is the structured source of truth for the New Earth website and its future expansion into a wider New Earth ecosystem.

The website is being built from the ground up using:

- a locked Blueprint as doctrine
- a structured file architecture as the operating system
- Codex as the implementation assistant
- WordPress on IONOS as the publishing layer

---

## Core principle

**WordPress is the publishing layer.  
This project workspace is the source of truth.**

That means all structure, copy, system logic, and design direction should be created and maintained here first, then implemented in WordPress.

---

## Current status

The first launch is published. This workspace now tracks post-launch refinement, asset completion, and future expansion.

---

## Locked doctrine

The highest-level source of truth is:

`/00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`

This file contains the locked New Earth Blueprint and must guide:

- site architecture
- messaging
- future system design
- governance language
- product alignment
- future expansion

All major decisions should remain aligned with the Blueprint and its 12 pillars.

---

## Project purpose

The purpose of this repository is to create and govern the digital foundation for New Earth.

This includes:

- the public-facing website
- the manifesto and blueprint pages
- the 12-pillar structure
- future system pages
- product integration, beginning with MicroGrow
- the long-term foundation for a New Earth knowledge and systems hub

---

## Project structure

```text
NEW_EARTH_WEBSITE/
│
├── 00_BLUEPRINT/                  # Locked doctrine and civilizational framework
├── 01_STRATEGY/                   # Vision, goals, user journeys, site intent
├── 02_INFORMATION_ARCHITECTURE/   # Sitemap, page hierarchy, links, menus
├── 03_CONTENT/                    # Page copy and content assets
├── 04_DESIGN_SYSTEM/              # Brand, colours, typography, components
├── 05_WORDPRESS/                  # WordPress implementation guidance
├── 06_THEME/                      # Child theme and reusable theme assets
├── 07_CODEX/                      # Codex rules, tasks, prompts, guardrails
├── 08_DEPLOYMENT/                 # IONOS access, SFTP workflow, release process
├── 09_LOGS/                       # Changelog, decisions, open items, build history
└── README.md
```