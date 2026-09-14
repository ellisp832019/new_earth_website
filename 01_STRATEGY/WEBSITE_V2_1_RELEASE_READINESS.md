# Website V2.1 release readiness

## Release decision

- Source baseline: `611eb5c54af399110262b304c8b73676d61b087f` plus the Phase I
  readiness commit.
- Included work: Phases A–H and Phase I release-readiness documentation.
- Deployment state: **READY FOR STAGING WITH MINOR FOLLOW-UPS**.
- Production state: **NOT AUTHORISED BY THIS RECORD**. Production needs the
  staging, owner-acceptance and rollback gates in the companion runbook.

## Final public route inventory

| Class | Routes |
| --- | --- |
| PRIMARY | `/`, `/vision/`, `/manifesto/`, `/blueprint/`, `/ecosystem/`, `/new-earth-in-practice/`, `/what-were-building/` |
| SECONDARY | `/blueprint/pillars/`, `/blueprint/inner-blueprint/`, `/blueprint/transition-path/`, `/get-involved/` |
| PROJECT | `/projects/`, `/projects/microgrow/`, `/projects/command-centre/` |
| PRODUCT | `/digital-products/`, `/digital-products/practical-guides/`, `/digital-products/conscious-living/` |
| JOURNAL | `/journal/`, `/journal/category/new-earth/`, `/journal/category/technology/`, `/journal/category/microgrow/`, `/journal/category/digital-products/`, `/journal/category/research/`, `/journal/category/founder-journey/`, `/journal/category/conscious-living/` |
| COMPANY | `/about/`, `/team/`, `/founders-journey/`, `/contact/` |
| LEGAL | `/legal/`, `/legal/privacy-policy/`, `/legal/terms/`, `/legal/cookie-policy/`, `/legal/disclaimer/` |
| CONTINUITY | `/systems/` → `/ecosystem/`; `/microgrow/` → `/projects/microgrow/`; `/articles/` → `/journal/`; `/cookie-policy-uk/` → `/legal/cookie-policy/`; `/blueprint/new-earth-test/` → `/blueprint/inner-blueprint/`; `/microgrow/blueprint-alignment/` → `/projects/microgrow/` |

The public build also contains a noindex `/404.html`. No product record or
Journal article route is generated without explicit publication approval.

## Final QA evidence

`npm.cmd run check`, preview build, public build, privacy, homepage, contact,
preview-assets, project-publication, redirects, SEO and public-build checks
pass. The public build contains 34 canonical routes, legal pages, sitemap,
robots, `.htaccess`, `contact-submit.php`, governed assets, favicon and custom
404. The public-build guard rejects local assets, blocked/private paths and
owner-only material.

### Visitor success test

| Visitor question | Result | Evidence |
| --- | --- | --- |
| What is New Earth? | PASS | Home, Vision, Manifesto and About explain the wider framework and body of work. |
| What does the company do? | PASS | Home, About, Contact, Team and footer use the bounded New Earth Advanced Technologies Ltd relationship. |
| What can I use or buy now? | PASS | Digital Products states that no product is available or purchasable; Projects use evidence-led status. |
| What are they building next? | PASS | What We’re Building distinguishes development, research and future direction; Projects supplies evidence. |
| How can I follow, contact or work with them? | PASS | Journal, Contact / Work With Us, navigation and homepage routes remain visible. |

## Final-cut decisions

| Item | Decision | Evidence and release impact |
| --- | --- | --- |
| Field Scanner | **DEFERRED — POST-RELEASE ASSET GOVERNANCE** | The tracked `field_scanner_project.webp` is conceptual and has unresolved rights/provenance in the owner promotion register. Owner originals are private and were not inspected. No sanitised public derivative, provenance approval, metadata review or public placement is present. It is therefore not represented as MicroGrow AI Lab and not added to V2.1. |
| Field Scanner status | Not published | The intended future public status is subject to a complete evidence and asset review; no commercial availability claim is made. |
| MicroGrow AI Lab visual | **TEXT-ONLY** | No dedicated governed AI Lab research visual was found. The existing text-only card preserves MicroGrow as the primary practical project and avoids misuse of Field Scanner imagery. Follow-up: *MicroGrow AI Lab dedicated supporting visual — post-release asset gap.* |
| Business address | **DEFERRED TO V2.2** | V2.1 retains the currently verified registered office only on `/legal/` and `WA-07_LEGAL_PRIVACY_COMPANY_CONTROL.md`; company name/number appear in the footer and legal/company copy. No new office, trading or correspondence address was introduced. Follow-up: *Review and implement approved company/office address changes after company-operations confirmation.* |

## Release state boundaries

- Analytics: **OFF**. No provider, script, ID, cookie, replay, fingerprinting or
  cross-site profiling is active. Phase H contains a future activation gate.
- Mailing: **OFF**. No signup, provider, endpoint, marketing storage or hidden
  opt-in is active.
- Commerce: **OFF**. No price, checkout, payment, purchase URL, download or
  customer account is active. Before any real product is published, public
  `AVAILABLE` must be derived from the complete readiness/activation gate, not
  trusted from `product.publicStatus` alone.
- Structured data: no Product, Article or Organization schema is emitted
  without verified records and facts.
- Social image gaps: What We’re Building, Digital Products, About, Contact,
  future product records and future Journal articles use the governed fallback
  until bespoke approved imagery exists.

## PHP staging gate

PHP CLI is unavailable locally. `public/contact-submit.php` has static safety
checks, but contact production readiness depends on successful staging runtime
tests: POST-only handling; all eight categories; fixed routing; Reply-To;
privacy acknowledgement; honeypot; timing; email/subject validation; success
and failure redirects; header-injection resistance; no recipient leakage and no
raw server error disclosure.

## Finding classification

| Classification | Finding | Disposition |
| --- | --- | --- |
| BLOCKER | None in tracked build evidence | Staging may proceed. |
| MAJOR | None | — |
| MINOR | PHP runtime/mail delivery needs IONOS staging verification | Required before production cutover. |
| POLISH | Bespoke social assets for documented gap routes | Keep governed fallback. |
| POST-RELEASE | Field Scanner public derivative; MicroGrow AI Lab visual; office-address review; product AVAILABLE hardening; dependency maintenance | Controlled follow-up, not V2.1 staging blocker. |

## Dependency maintenance

`npm audit --omit=dev` reports zero production dependency vulnerabilities at
the Phase I review point. Development/build dependency maintenance, including
any future Astro major upgrade, remains a separate controlled maintenance lane.

## Owner manual QA checklist

- **Home:** hierarchy remains vision-first; What We’re Building, Digital
  Products, MicroGrow, Journal and Contact are discoverable; company context is
  subordinate.
- **What We’re Building:** statuses are clear; MicroGrow is In Development;
  no Field Scanner is implied; research and future work are distinct.
- **Digital Products:** both creator-family pages work; no price, purchase or
  false availability appears.
- **Journal:** empty state is intentional; category navigation works.
- **Contact:** all eight enquiry types are clear; acknowledgement is required
  and does not resemble marketing consent.
- **About and footer:** Peter/Hayley/company relationship is bounded; company
  and legal hierarchy wraps cleanly.
- **Mobile:** at approximately 390px inspect menu, cards, images, form fields,
  status labels and footer; repeat key routes at tablet and desktop widths.

See `WEBSITE_V2_1_STAGING_CUTOVER_RUNBOOK.md` for the controlled staging,
PHP, cutover and rollback procedure.
