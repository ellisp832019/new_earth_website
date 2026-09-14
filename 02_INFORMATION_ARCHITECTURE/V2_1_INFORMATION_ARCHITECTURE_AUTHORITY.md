# Website V2.1 Information Architecture Authority

## Status and scope

Phase A authority for Website V2.1. It defines the intended public structure
without authorising Digital Products, commerce, mailing, analytics, new product
pages, or new What We're Building page content.

## Public identity model

- **New Earth** is the wider independent vision, philosophy, framework and
  long-term direction.
- **New Earth Advanced Technologies Ltd** is a practical operating company used
  to develop selected technology, engineering, research and product work aligned
  with that vision.
- **What We're Building** is the visitor-friendly overview of current, emerging
  and future work.
- **Projects** is the deeper evidence-led index and detail layer.
- **New Earth Digital Products** is the future customer-facing area for approved
  guides, resources and bundles.

New Earth remains Peter and Hayley's independent body of work. This model does
not imply formal affiliation with external communities, a membership offer, or
representation of a wider New Earth movement.

## Target top-level navigation

1. Home
2. Vision
3. What We're Building
4. Digital Products
5. MicroGrow
6. Journal
7. About
8. Contact

Blueprint and Manifesto sit conceptually beneath Vision. In Phase A, routes that
do not yet exist are deliberately not linked in the live header or footer.

## Route role authority

| Route | V2.1 role | Classification | Phase A action |
| --- | --- | --- | --- |
| `/` | Public entry point | PRIMARY | Retain. |
| `/vision/` | Wider direction | PRIMARY | Retain. |
| `/blueprint/`, `/manifesto/` | Deeper Vision material | SECONDARY | Retain. |
| `/what-were-building/` | Visitor-friendly work overview | PRIMARY | Future route; do not activate yet. |
| `/digital-products/` | Customer-facing product hub | PRIMARY | Future route; do not activate yet. |
| `/projects/` | Evidence-led project index | EVIDENCE | Retain; do not redirect or replace. |
| `/projects/microgrow/` | Deeper MicroGrow evidence | EVIDENCE | Retain. |
| `/ecosystem/` | Relationship context | SECONDARY | Retain. |
| `/new-earth-in-practice/` | Practical framework context | SECONDARY | Retain. |
| `/team/`, `/founders-journey/` | Founder detail | SECONDARY | Retain. |
| `/get-involved/` | Existing contribution context | CONTINUITY | Retain; later review against Work With Us. |
| `/journal/` | Public updates and learning | PRIMARY | Retain. |
| `/about/`, `/contact/`, `/legal/` | Company, contact and trust information | PRIMARY / CONTINUITY | Retain. |
| Existing redirected legacy URLs | Existing route continuity | LEGACY-COMPATIBLE | Preserve redirect policy. |

## Locked Projects decision

`/projects/` remains the deeper evidence-led project index. It is not replaced
by What We're Building and must not be redirected in V2.1. What We're Building
will explain work in visitor-friendly terms and direct people to Projects when
they need evidence, technical detail and project limitations.

## Public status model

The canonical implementation is `src/data/public-status.ts`:

| Public status | Current/internal mapping | Use boundary |
| --- | --- | --- |
| AVAILABLE | Explicit approved availability only | Never infer from a prototype or public page. |
| COMING SOON | Approved future offer only | Requires an identified offer, not a concept. |
| IN DEVELOPMENT | `ACTIVE DEVELOPMENT`, `PROTOTYPE` | Includes MicroGrow at this baseline; not commercially available. |
| RESEARCH | `RESEARCH` | No performance, availability or completed-result claim. |
| FUTURE VISION | `CONCEPT / FUTURE`, `PUBLIC INFORMATION ONLY` | Longer-term direction only. |

## Phase A deferred items

- What We're Building route/page content.
- Digital Products routes, catalogue, product pages, bundles, checkout and downloads.
- Mailing provider and analytics.
- Journal article publication.
- Dependency or Astro upgrades.

## Navigation and footer implementation rule

Only live routes may be linked. Phase A leaves the existing header navigation
unchanged because the two future primary destinations do not yet exist. The
footer may group current live destinations according to the V2.1 model, while
retaining all legal links and excluding blocked/private destinations.

## Phase B company and shell refinement

Phase B applies the approved bounded wording: New Earth is the wider vision and
body of work; New Earth Advanced Technologies Ltd is one practical operating
vehicle for selected technology, research, systems and future products aligned
with that vision. The company is subordinate to the New Earth identity and does
not represent external communities or a wider movement.

The live header retains only existing routes. Contact replaces Contribute in the
header so the future V2.1 contact destination is discoverable; `/get-involved/`
remains available through the footer and existing contextual links. What We're
Building and Digital Products remain deferred and unlinked until their routes
exist.

The footer retains the four Phase A groups. Its Company / Legal group separates
company links, legal links and registered company metadata, using only verified
company details. No commercial, mailing, analytics or provider capability is
introduced by Phase B.
