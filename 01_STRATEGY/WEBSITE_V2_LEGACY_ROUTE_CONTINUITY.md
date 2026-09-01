# Website V2 Legacy Route Continuity

## Control state

**Package:** WB-08A — Journal + Legacy Content Route Coverage

**Redirect implementation:** NOT INCLUDED

**Company disclosure:** BLOCKED — REGISTERED OFFICE

**Live-cutover readiness:** NOT PASSED

This record is the canonical Website V2 input for the later legacy URL and redirect package. It records continuity decisions without activating redirects, changing WordPress or changing the live website.

## Current Astro route inventory

Public status describes the generated public build. Navigation status records the current Website V2 shell or in-page route into the page; it does not propose a navigation redesign.

| Route | Source file | Public status | Navigation status | Purpose |
| --- | --- | --- | --- | --- |
| `/` | `src/pages/index.astro` | Public | Brand/home route | Public gateway |
| `/vision/` | `src/pages/vision/index.astro` | Public | Primary navigation | Vision and direction |
| `/manifesto/` | `src/pages/manifesto/index.astro` | Public | Contextual links | Principles and direction |
| `/blueprint/` | `src/pages/blueprint/index.astro` | Public | Primary navigation | Framework hub |
| `/ecosystem/` | `src/pages/ecosystem/index.astro` | Public | Primary navigation | Ecosystem relationships |
| `/new-earth-in-practice/` | `src/pages/new-earth-in-practice/index.astro` | Public | Primary navigation | Practical interpretation |
| `/projects/` | `src/pages/projects/index.astro` | Public | Primary navigation | Public project directory |
| `/projects/microgrow/` | `src/pages/projects/[slug].astro` | Public | Projects route | MicroGrow project record |
| `/projects/command-centre/` | `src/pages/projects/[slug].astro` | Preview only | No valid public navigation route | Owner-review project preview |
| `/journal/` | `src/pages/journal/index.astro` | Public | Primary navigation and footer | Static-first publishing hub |
| `/about/` | `src/pages/about/index.astro` | Public | Primary navigation and footer | Public purpose and context |
| `/founders-journey/` | `src/pages/founders-journey/index.astro` | Public | Direct and legacy continuity route | Peter's owner-approved factual narrative with V2 human-voice editorial pass |
| `/get-involved/` | `src/pages/get-involved/index.astro` | Public | Primary navigation and footer | Participation routes |
| `/contact/` | `src/pages/contact/index.astro` | Public | Footer and contextual links | Public enquiry route |
| `/legal/` | `src/pages/legal/index.astro` | Public | Footer | Legal hub |
| `/legal/privacy-policy/` | `src/pages/legal/privacy-policy/index.astro` | Public | Footer | Privacy baseline |
| `/legal/cookie-policy/` | `src/pages/legal/cookie-policy/index.astro` | Public | Footer | Cookie baseline |
| `/legal/terms/` | `src/pages/legal/terms/index.astro` | Public | Footer | Terms of Use |
| `/legal/disclaimer/` | `src/pages/legal/disclaimer/index.astro` | Public | Footer | Information boundaries |
| `/404.html` | `src/pages/404.astro` | Public system route | Not navigated | Not-found response |

## Journal publication inventory

The captured legacy baseline records **22 published WordPress pages and 0 published posts**. Repository Journal material consists of strategy, categories, an article template and suggested future topics. It does not establish finished articles, publication dates or author-approved bylines.

- Real publication-ready articles found: **0**
- Articles published in Journal V1: **0**
- Journal architecture: static index only; no CMS, content collection or dynamic article route is required yet
- Journal visual: governed `AST-011` / `journal_featured_home.webp`, recorded `PUBLIC READY` and delivered through the existing asset resolver

## Legacy route continuity decisions

The legacy authority is `01_STRATEGY/WA-01/LIVE_REPOSITORY_PAGE_DECISION_REGISTER.csv`, supported by the WA-01 and WA-02 route records. `OWNER REVIEW` prevents unique or previously owner-separated material from being discarded before its content decision is closed.

| Legacy route | Legacy purpose | V2 destination | Action | Rationale |
| --- | --- | --- | --- | --- |
| `/` | Public gateway | `/` | DIRECT | Same canonical route |
| `/manifesto/` | Doctrine introduction | `/manifesto/` | DIRECT | Same canonical route |
| `/blueprint/` | Framework hub | `/blueprint/` | DIRECT | Same canonical route |
| `/systems/` | Systems overview | `/ecosystem/` | 301 REDIRECT | Ecosystem is the implemented V2 canonical replacement |
| `/microgrow/` | MicroGrow project | `/projects/microgrow/` | 301 REDIRECT | Project now belongs under the V2 Projects architecture |
| `/journal/` | Publishing hub | `/journal/` | DIRECT | Same canonical route; Journal V1 is implemented |
| `/about/` | Mission and organisation | `/about/` | DIRECT | Same canonical route |
| `/contact/` | Public contact | `/contact/` | DIRECT | Same canonical route |
| `/legal/` | Legal hub | `/legal/` | DIRECT | Same canonical route |
| `/legal/privacy-policy/` | Privacy policy | `/legal/privacy-policy/` | DIRECT | Same canonical route |
| `/legal/terms/` | Terms of Use | `/legal/terms/` | DIRECT | Same canonical route |
| `/legal/cookie-policy/` | Cookie policy | `/legal/cookie-policy/` | DIRECT | Same canonical route |
| `/legal/disclaimer/` | Disclaimer | `/legal/disclaimer/` | DIRECT | Same canonical route |
| `/blueprint/pillars/` | Twelve Pillars index | Undecided | OWNER REVIEW | Unique tracked source exists, but no current V2 route is implemented |
| `/blueprint/inner-blueprint/` | Inner Blueprint | Undecided | OWNER REVIEW | Unique tracked source exists, but no current V2 route is implemented |
| `/blueprint/transition-path/` | Transition Path | Undecided | OWNER REVIEW | Unique tracked source exists, but no current V2 route is implemented |
| `/blueprint/new-earth-test/` | New Earth Test | `/blueprint/inner-blueprint/` | 301 REDIRECT | Existing planning proposes consolidation only after unique content is preserved and the destination exists |
| `/microgrow/blueprint-alignment/` | Project Blueprint alignment | Undecided | OWNER REVIEW | Unique project source exists and must be preserved or integrated before routing is decided |
| `/articles/` | Duplicate publication hub | `/journal/` | 301 REDIRECT | Journal is authoritative and the captured baseline contains no published posts |
| `/team/` | People and responsibilities | Undecided | OWNER REVIEW | About does not currently cover people or responsibilities; earlier owner-approved planning keeps this purpose distinct |
| `/founders-journey/` | Peter's lived path into New Earth | `/founders-journey/` | DIRECT | Route implemented; factual content owner approved; V2 human-voice editorial pass integrated; redirect none; final rendered presentation pending Peter review |
| `/cookie-policy-uk/` | Duplicate cookie policy | `/legal/cookie-policy/` | 301 REDIRECT | Canonical legal route is already implemented |

## Required mapping summary

- `/systems/` → `/ecosystem/` — **301 REDIRECT**
- `/microgrow/` → `/projects/microgrow/` — **301 REDIRECT**
- `/team/` — **OWNER REVIEW**; do not redirect to About until the previously distinct people/responsibility purpose is explicitly retired
- `/founders-journey/` → `/founders-journey/` — **DIRECT**; preserve as a distinct V2 public route

## V2-only canonical routes

These implemented routes are additions to the captured legacy page set and require no redirect by themselves:

- `/vision/`
- `/ecosystem/`
- `/new-earth-in-practice/`
- `/projects/`
- `/projects/microgrow/`
- `/get-involved/`

## Redirect-package gates

Before any later redirect implementation:

1. Confirm every `OWNER REVIEW` destination or retirement decision.
2. Preserve unique Blueprint and MicroGrow alignment content before consolidating a route.
3. Verify redirect targets exist in the public build and prevent loops.
4. Inventory inbound links and apply canonical metadata checks.
5. Keep the registered-office disclosure blocker visible as a final cutover gate.

No legacy route is retired by WB-08A. No redirect is active.
