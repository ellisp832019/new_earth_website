# Website V2 Legacy Route Continuity

## Control state

**Package:** Release Preparation Sprint 01 — Stage B

**Redirect configuration:** IMPLEMENTED — repository-controlled Apache `.htaccess`

**IONOS execution:** PENDING STAGING

**Company disclosure:** CLOSED — REGISTERED OFFICE PUBLISHED

**Live-cutover readiness:** NOT PASSED

This record is the canonical Website V2 legacy-route authority. It records the
implemented repository redirect configuration and the remaining owner holds.
No WordPress, IONOS or live website change is made here.

## Current Astro route inventory

Public status describes the generated public build. Navigation status records the current Website V2 shell or in-page route into the page; it does not propose a navigation redesign.

| Route | Source file | Public status | Navigation status | Purpose |
| --- | --- | --- | --- | --- |
| `/` | `src/pages/index.astro` | Public | Brand/home route | Public gateway |
| `/vision/` | `src/pages/vision/index.astro` | Public | Primary navigation | Vision and direction |
| `/manifesto/` | `src/pages/manifesto/index.astro` | Public | Contextual links | Principles and direction |
| `/blueprint/` | `src/pages/blueprint/index.astro` | Public | Primary navigation | Framework hub |
| `/blueprint/pillars/` | `src/pages/blueprint/pillars/index.astro` | Public | Blueprint contextual links | Twelve research and design lenses |
| `/blueprint/inner-blueprint/` | `src/pages/blueprint/inner-blueprint/index.astro` | Public | Blueprint contextual links | Reflective foundation and preserved alignment questions |
| `/blueprint/transition-path/` | `src/pages/blueprint/transition-path/index.astro` | Public | Blueprint contextual links | Seven-phase transition framework |
| `/ecosystem/` | `src/pages/ecosystem/index.astro` | Public | Primary navigation | Ecosystem relationships |
| `/new-earth-in-practice/` | `src/pages/new-earth-in-practice/index.astro` | Public | Primary navigation | Practical interpretation |
| `/projects/` | `src/pages/projects/index.astro` | Public | Primary navigation | Public project directory |
| `/projects/microgrow/` | `src/pages/projects/[slug].astro` | Public | Projects route | MicroGrow project record |
| `/projects/command-centre/` | `src/pages/projects/[slug].astro` | Public | Projects route | ACTIVE DEVELOPMENT project record |
| `/journal/` | `src/pages/journal/index.astro` | Public | Primary navigation and footer | Static-first publishing hub |
| `/about/` | `src/pages/about/index.astro` | Public | Primary navigation and footer | Public purpose and context |
| `/team/` | `src/pages/team/index.astro` | Public | About context and footer | Small founding team behind current New Earth work |
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

| Legacy route | Final action | Canonical destination | Implementation status | Rationale | Owner decision |
| --- | --- | --- | --- | --- | --- |
| `/` | DIRECT V2 ROUTE | `/` | IMPLEMENTED | Same canonical public gateway | CLOSED |
| `/manifesto/` | DIRECT V2 ROUTE | `/manifesto/` | IMPLEMENTED | Same canonical doctrine route | CLOSED |
| `/blueprint/` | DIRECT V2 ROUTE | `/blueprint/` | IMPLEMENTED | Same canonical framework hub | CLOSED |
| `/journal/` | DIRECT V2 ROUTE | `/journal/` | IMPLEMENTED | Same canonical publishing hub | CLOSED |
| `/about/` | DIRECT V2 ROUTE | `/about/` | IMPLEMENTED | Same canonical mission/context route | CLOSED |
| `/contact/` | DIRECT V2 ROUTE | `/contact/` | IMPLEMENTED | Same canonical contact route | CLOSED |
| `/founders-journey/` | DIRECT V2 ROUTE | `/founders-journey/` | IMPLEMENTED | Distinct owner-approved factual narrative | CLOSED |
| `/legal/` | DIRECT V2 ROUTE | `/legal/` | IMPLEMENTED | Same canonical legal hub | CLOSED |
| `/legal/privacy-policy/` | DIRECT V2 ROUTE | `/legal/privacy-policy/` | IMPLEMENTED | Same canonical privacy route | CLOSED |
| `/legal/terms/` | DIRECT V2 ROUTE | `/legal/terms/` | IMPLEMENTED | Same canonical terms route | CLOSED |
| `/legal/cookie-policy/` | DIRECT V2 ROUTE | `/legal/cookie-policy/` | IMPLEMENTED | Same canonical cookie route | CLOSED |
| `/legal/disclaimer/` | DIRECT V2 ROUTE | `/legal/disclaimer/` | IMPLEMENTED | Same canonical disclaimer route | CLOSED |
| `/systems/` | 301 REDIRECT | `/ecosystem/` | CONFIGURATION IMPLEMENTED; HOST PENDING | Ecosystem is the validated V2 canonical replacement | CLOSED |
| `/microgrow/` | 301 REDIRECT | `/projects/microgrow/` | CONFIGURATION IMPLEMENTED; HOST PENDING | MicroGrow belongs under the V2 Projects architecture | CLOSED |
| `/articles/` | 301 REDIRECT | `/journal/` | CONFIGURATION IMPLEMENTED; HOST PENDING | Journal is authoritative; captured baseline has no published posts | CLOSED |
| `/cookie-policy-uk/` | 301 REDIRECT | `/legal/cookie-policy/` | CONFIGURATION IMPLEMENTED; HOST PENDING | Duplicate legal route; canonical destination exists | CLOSED |
| `/team/` | DIRECT V2 ROUTE | `/team/` | IMPLEMENTED | Team retains a distinct public purpose from About by identifying the small founding team behind current New Earth work | CLOSED |
| `/blueprint/pillars/` | DIRECT V2 ROUTE | `/blueprint/pillars/` | IMPLEMENTED | Approved names and order support a restrained overview; the page describes research and design lenses, not completed products | CLOSED |
| `/blueprint/inner-blueprint/` | DIRECT V2 ROUTE | `/blueprint/inner-blueprint/` | IMPLEMENTED | Distinct repository-approved foundation content supports a bounded reflective page without prescribing a belief system | CLOSED |
| `/blueprint/transition-path/` | DIRECT V2 ROUTE | `/blueprint/transition-path/` | IMPLEMENTED | The approved seven-phase path has a distinct role and is presented without unsupported outcome claims | CLOSED |
| `/blueprint/new-earth-test/` | 301 REDIRECT | `/blueprint/inner-blueprint/` | CONFIGURATION IMPLEMENTED; HOST PENDING | WA-02 directs this route to Inner Blueprint once its unique questions are preserved there; the destination now does so | CLOSED |
| `/microgrow/blueprint-alignment/` | 301 REDIRECT | `/projects/microgrow/` | CONFIGURATION IMPLEMENTED; HOST PENDING | The source identifies four relevant pillars; the current MicroGrow record is the bounded canonical context and already explains its New Earth relationship | CLOSED |

## Required mapping summary

- `/systems/` → `/ecosystem/` — **301 REDIRECT**
- `/microgrow/` → `/projects/microgrow/` — **301 REDIRECT**
- `/articles/` → `/journal/` — **301 REDIRECT**
- `/cookie-policy-uk/` → `/legal/cookie-policy/` — **301 REDIRECT**
- `/team/` → `/team/` — **DIRECT**; preserve its distinct purpose of identifying the small founding team behind current New Earth work
- `/founders-journey/` → `/founders-journey/` — **DIRECT**; preserve as a distinct V2 public route
- `/blueprint/pillars/` → `/blueprint/pillars/` — **DIRECT**; restrained overview of the twelve research and design lenses
- `/blueprint/inner-blueprint/` → `/blueprint/inner-blueprint/` — **DIRECT**; bounded reflective foundation and preserved New Earth Test questions
- `/blueprint/transition-path/` → `/blueprint/transition-path/` — **DIRECT**; approved seven-phase transition framework
- `/blueprint/new-earth-test/` → `/blueprint/inner-blueprint/` — **301 REDIRECT**; unique questions preserved at destination
- `/microgrow/blueprint-alignment/` → `/projects/microgrow/` — **301 REDIRECT**; one-hop project context

## V2-only canonical routes

These implemented routes are additions to the captured legacy page set and require no redirect by themselves:

- `/vision/`
- `/ecosystem/`
- `/new-earth-in-practice/`
- `/projects/`
- `/projects/microgrow/`
- `/projects/command-centre/`
- `/get-involved/`

## Redirect implementation boundary

- Repository configuration: **PASS** (`public/.htaccess` copied to public build).
- Redirect type: **301** for all six confirmed mappings.
- Generated targets: **PASS**.
- Redirect loops: **0**.
- Redirect chains: **0**.
- IONOS/Apache execution: **PENDING IONOS STAGING**.
- Registered-office disclosure: CLOSED — published on `/legal/`.
