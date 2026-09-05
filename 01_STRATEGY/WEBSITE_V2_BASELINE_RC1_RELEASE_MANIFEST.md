# New Earth Website V2 — Baseline RC1 Release Manifest

## Release

- Release: **New Earth Website V2 — Baseline RC1**
- Repository status: **READY FOR STAGING**
- Live status: **NOT LIVE READY**
- Package source Git HEAD: `32acab2001b407e6cc22a7df4b031897a70f4d29`
- Build date: `2026-09-03 08:04:29 +01:00`
- Build command: `npm.cmd run build:public`
- Canonical origin: `https://new-earth.uk`

The source head identifies the tested website implementation used to create the
deployable package. The later documentation commit does not alter generated
website output.

## Release package

| Field | Value |
| --- | --- |
| Directory | `RELEASE_OUTPUT/WEBSITE_V2_BASELINE_RC1/` |
| ZIP | `RELEASE_OUTPUT/NEW_EARTH_WEBSITE_V2_BASELINE_RC1.zip` |
| ZIP bytes | `33,169,929` |
| ZIP SHA-256 | `A5CD1931DB242AC75A2B041D1CA93E33143DD098E2EFEC97EB866C1EA242FC74` |
| Deployable files | `66` |
| ZIP entries including directories | `93` |

Package inspection: `.htaccess`, HTML, assets, PHP contact handler, sitemap,
robots, favicon and custom 404 are present. Astro/TypeScript source, source
personal photographs, `ASSETS_REFERENCE`, `node_modules`, Git data, internal
strategy material, local-preview assets, tokens and private recipient values are
absent.

## Public route inventory

Canonical public route count: **23**.

| Area | Routes |
| --- | --- |
| Core | `/`, `/vision/`, `/manifesto/`, `/blueprint/`, `/ecosystem/`, `/new-earth-in-practice/` |
| Blueprint support | `/blueprint/pillars/`, `/blueprint/inner-blueprint/`, `/blueprint/transition-path/` |
| Projects | `/projects/`, `/projects/microgrow/`, `/projects/command-centre/` |
| Editorial and participation | `/journal/`, `/about/`, `/team/`, `/founders-journey/`, `/get-involved/`, `/contact/` |
| Legal | `/legal/`, `/legal/privacy-policy/`, `/legal/cookie-policy/`, `/legal/terms/`, `/legal/disclaimer/` |

`/404.html` is a generated noindex system route and is not included in the
canonical count or sitemap.

## Public projects

| Project | Publication | Maturity |
| --- | --- | --- |
| MicroGrow | PUBLIC | PROTOTYPE |
| New Earth Command Centre | PUBLIC | ACTIVE DEVELOPMENT |

No preview-only future project route is generated in the public build.

## Legacy continuity

Direct legacy routes preserved: **16**.

`/`, `/manifesto/`, `/blueprint/`, `/blueprint/pillars/`,
`/blueprint/inner-blueprint/`, `/blueprint/transition-path/`, `/journal/`,
`/about/`, `/team/`, `/founders-journey/`, `/contact/`, `/legal/`,
`/legal/privacy-policy/`, `/legal/cookie-policy/`, `/legal/terms/`, and
`/legal/disclaimer/`.

Exact one-hop 301 mappings: **6**.

| Source | Destination | Repository status | Host status |
| --- | --- | --- | --- |
| `/systems/` | `/ecosystem/` | PASS | PENDING IONOS STAGING |
| `/microgrow/` | `/projects/microgrow/` | PASS | PENDING IONOS STAGING |
| `/articles/` | `/journal/` | PASS | PENDING IONOS STAGING |
| `/cookie-policy-uk/` | `/legal/cookie-policy/` | PASS | PENDING IONOS STAGING |
| `/blueprint/new-earth-test/` | `/blueprint/inner-blueprint/` | PASS | PENDING IONOS STAGING |
| `/microgrow/blueprint-alignment/` | `/projects/microgrow/` | PASS | PENDING IONOS STAGING |

Redirect loops: **0**. Redirect chains: **0**. Redirect sources in sitemap:
**0**. Remaining owner route decisions: **0**.

## Held and private material

- `ASSETS_REFERENCE/MICROGROW/` remains an untracked reference area and is not
  present in the public build or package.
- Founder’s Journey and Team source photographs remain governed source assets;
  only their approved WebP derivatives are public.
- Preview-only homepage assets and future project records are not promoted by
  this release decision.
- Private contact recipient values are not present; the PHP handler reads named
  server environment variables at runtime.

## Acceptance status

| Gate | Status | Evidence / boundary |
| --- | --- | --- |
| Public build | PASS | 24 generated HTML pages including noindex 404; 23 canonical routes |
| Internal links | PASS | 0 broken internal links |
| Desktop sweep | PASS | All 23 canonical route captures inspected at 1440px; no release-blocking clipping, broken grids or missing hero assets found |
| 440px sweep | PASS | 13 required/key routes measured at exact 440px; viewport, document and body widths matched; no horizontal overflow |
| Interactive pathway | PASS | Mobile details fallback exposes 6 stages and opens the selected stage |
| Ecosystem explorer | PASS | Button enabled; pressed state, selected/related cards and live status update verified |
| Image audit | PASS | 80 generated HTML image references, 30 unique public paths; all resolve and have alt attributes |
| Founder portrait | PASS | Natural uncropped 1080 × 1346 derivative; face intact; editorial placement bridges rebuilding to building |
| Team page | OWNER ACCEPTED | Existing portrait and Peter/Hayley presentation preserved |
| Experience coherence | PASS | Semantic contexts, local-first pathway, relationship map, public labels and reduced-motion support preserved |
| Release accessibility check | PASS | Bounded check only; one H1 per canonical page, labelled form controls, meaningful controls/links, visible focus, mobile touch sizing and reduced motion verified. No formal WCAG certification claimed |
| Public-copy leakage | PASS | 0 matches for release-specified implementation/admin terms in public text output |
| Security/privacy leakage | PASS | 0 private paths, credential values, local hosts, reference directories or blocked assets found |
| External links | PASS WITH BOUNDARY | New Earth Builders resolved; both intended LinkedIn hrefs verified. LinkedIn automated requests returned anti-bot status 999 and were not treated as link failures |
| SEO | PASS | Unique titles, descriptions, absolute canonicals, OpenGraph/Twitter metadata and canonical origin verified |
| Sitemap | PASS | 23 canonical routes; no redirect or preview sources |
| Robots | PASS | Public crawl baseline and canonical sitemap declaration present |
| Custom 404 | PASS | Generated, noindex, no canonical |
| Favicon | PASS | Present and linked on generated pages |

## Contact status

| Item | Status |
| --- | --- |
| Contact form UI and labels | PASS |
| PHP handler | IN PACKAGE |
| PHP execution | PENDING IONOS STAGING |
| Runtime recipient/sender configuration | PENDING IONOS STAGING |
| Real delivery for General, Peter and Hayley | NOT YET VERIFIED — PENDING IONOS STAGING |

## Legal status

The public baseline identifies **New Earth Advanced Technologies Ltd**, company
number **17286202**, registered in England and Wales, and routes public legal and
privacy enquiries through `/contact/`. No registered-office address has been
invented or added.

Final owner legal content review: **OUTSTANDING**.

## Known blockers and gates

| Gate | Severity | State | Closure evidence required |
| --- | --- | --- | --- |
| Registered office disclosure | HARD CUTOVER BLOCKER | OPEN | Approved registered-office disclosure published across required company/legal surfaces |
| IONOS redirect execution | STAGING GATE | PENDING IONOS STAGING | All six exact rules return 301 with no loop or chain on host |
| Contact PHP execution | STAGING GATE | PENDING IONOS STAGING | Handler executes safely on the target PHP runtime |
| Contact real email delivery | STAGING GATE | PENDING IONOS STAGING | General, Peter and Hayley test messages delivered with correct sender/reply behaviour |
| Owner legal content review | OWNER/CUTOVER GATE | OUTSTANDING | Owner approval or recorded corrections |
| Final staging visual review | OWNER/CUTOVER GATE | OUTSTANDING | Owner accepts staged desktop and mobile presentation |

## Staging tests required

- Verify every canonical route and public asset from a non-local browser.
- Verify Apache `.htaccess` execution for every exact redirect.
- Verify sitemap, robots, favicon and custom 404 on the staging origin.
- Configure contact environment variables without exposing recipient values.
- Execute the PHP handler and complete all three delivery paths.
- Repeat desktop/mobile smoke checks and owner visual review.
- Close the registered-office and owner legal-review gates.

## Cutover tests required

- Confirm a fresh live backup and tested rollback copy.
- Recheck critical routes, legal pages, redirects and contact immediately before
  and after controlled cutover.
- Confirm no private/source material or preview-only route is public.
- Roll back on any hard-failure trigger defined in the runbook.

## Rollback requirements

Keep the current live-site backup and a restorable copy separate from the RC
package. Record the deployed package hash and cutover time. Roll back immediately
for 500 errors, a broken homepage, missing critical assets, redirect loops,
contact-handler fatal errors, major mobile breakage, missing legal pages or
unexpected private leakage.

## Final classification

**NEW EARTH WEBSITE V2 BASELINE RC1 = READY FOR IONOS STAGING**

**LIVE READY = NO.** Host redirect/PHP/mail behaviour, owner legal review,
registered-office disclosure and final staged owner review remain open.
