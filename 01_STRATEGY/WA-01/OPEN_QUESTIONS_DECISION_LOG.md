# Open Questions and Decision Log

## Status key

- **RESOLVED:** locked for WA-01 planning by direct direction and evidence.
- **OPEN:** requires a named owner or a later evidence decision.
- **PROPOSED:** safe planning direction, not live implementation.

## WA-01B resolved decisions

| ID | Decision | Evidence and effect |
| --- | --- | --- |
| D01 | Journal is the authoritative publishing hub. | `/articles/` is a legacy route planned to redirect to `/journal/`; posts-page assignment remains implementation work. |
| D02 | About, Founder's Journey, and Team are distinct roles. | About covers mission and organisation; Founder's Journey covers Peter and Hayley's shared story; Team covers people and responsibilities. |
| D03 | Peter Practical Guides and Hayley Conscious Living are distinct creator lanes. | They require separate ownership and consent-aware content models. |
| D04 | One canonical cookie-policy route is used. | `/cookie-policy-uk/` is planned to redirect to `/legal/cookie-policy/` after legal review. |
| D05 | Legal and company trust content belongs in footer or secondary navigation. | Terms, Privacy, Cookie Policy, Disclaimer, accessibility, company disclosure, and future product terms stay out of primary header planning. |
| D06 | Blueprint Alignment is reusable; project-specific applications sit beneath projects. | Existing MicroGrow Alignment source supports the method. |
| D07 | New Earth Test is retained for now. | Dedicated repository source exists, so the archive/redirect default is not applied; WA-02 must still confirm its place. |
| D08 | The homepage initially fulfils Start Here. | A separate Start Here page is not created unless WA-02 proves a distinct need. |
| D09 | Primary navigation is planned as a concise concept set. | Vision, Blueprint, Ecosystem, Projects, Journal, About, and Get Involved are planning concepts only; no live menu change is authorized. |

## Peter approval record

| Date | Approval | Effect |
| --- | --- | --- |
| 2026-08-26 | Peter approved all WA-01C final decisions. | WA-01 is complete; WA-02 is next. No live implementation is authorized by this approval. |

## Approved WA-01C decision set

The approved decisions are recorded in `WEBSITE_V2_MASTER_SCOPE.md` and the
capability register. They cover the dedicated `/vision/` page, the public
Advanced Technologies company page, bounded public system descriptions,
conservative project status truth, creator ownership, legal disclosures,
WCAG 2.2 AA, image rights, progress ownership, the WordPress/IONOS discrepancy,
and the canonical route decisions.

## Remaining implementation gates

| ID | Gate | Owner | Horizon |
| --- | --- | --- | --- |
| G01 | Convert approved destinations into information architecture and route decisions. | WA-02 lead | V2.0 FOUNDATION |
| G02 | Confirm final company identity and legal disclosure facts, then obtain professional review. | New Earth / legal owner | V2.0 FOUNDATION |
| G03 | Draft public system and project descriptions from evidence without private operational detail. | Named system and project owners | EXTERNAL/INTERNAL SYSTEM or V2.x |
| G04 | Apply creator approval and consent before Peter or Hayley lanes are published. | Peter / Hayley | V2.x ENABLED LATER |
| G05 | Complete WCAG 2.2 AA design, keyboard, focus, contrast, responsive, and assistive-technology review. | Design and implementation owners | WA-03 onward |
| G06 | Confirm rights, licence, and attribution before any image archive activation. | New Earth | V2.x ENABLED LATER |
| G07 | Establish dated, evidence-based progress reporting and review cadence. | Peter | V2.x ENABLED LATER |
| G08 | Investigate the WordPress/IONOS version discrepancy under controlled maintenance. | Technical owner | Maintenance; non-blocking |

## Deferred implementation questions

- Which WordPress content types and taxonomies are implemented in WA-02 versus
  held for later V2.x work?
- Which redirects are implemented, and how are existing inbound links measured?
- Which footer and secondary navigation locations carry legal, accessibility,
  company, contact, and resource links?
- Which future capabilities remain NOT REQUIRED for the public website because
  they belong entirely in external or internal systems?

## Boundary decision

The public website may explain and link to New Earth systems. It must not absorb
Command Centre operations, Dashboard operations, GAIA administration, NEOS
engineering controls, repository control, private financial records, hardware
control, sensitive research, or internal company administration.
