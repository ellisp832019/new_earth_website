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

## Phase C What We're Building activation

`/what-were-building/` is now the live visitor-friendly overview of current,
research and future work. It is intentionally not a product catalogue: it has
no prices, ordering, downloads, mailing, checkout or availability pathway.
The page uses the canonical public-status model, with no Available or Coming
Soon entry at this baseline.

MicroGrow is shown as **IN DEVELOPMENT** and links to its retained deeper
evidence route, `/projects/microgrow/`. It is a prototype / controlled
validation project, not a commercially available product. Command Centre is
also **IN DEVELOPMENT**: its public evidence route may be linked, but the
overview must not imply finished integration, operational readiness or exposed
controls.

The overview uses a simple public relationship model: Vision → practical work
and possible future products → engineering → intelligence → future ecosystem.
It is communication context rather than internal architecture. NEOS, GAIA and
Platform Core may be described only as bounded high-level directions, without
technical capability, endpoint, runtime or integration claims.

Projects remains the deeper evidence-led index and detail layer; it is not
redirected or replaced. Ecosystem remains the deeper relationship explanation,
and New Earth in Practice remains the illustrative bridge to everyday
application rather than a catalogue or deployment claim. What We're Building
is now a live header and footer destination. Digital Products is now a live,
information-first destination with no active offer or purchase path.

## Phase D Digital Products foundation

`/digital-products/` is the customer-facing discovery area for approved New
Earth offers. It has distinct family routes for New Earth Practical Guides
(Peter-led) and New Earth Conscious Living (Hayley-led). These routes describe
the families only; they do not imply that an individual guide, resource or
bundle has been approved, published or made available.

The public authority currently identifies creator families but does not verify
an individual product title, creator attribution for a specific work, format,
rights, delivery method, support commitment, price or purchase pathway. The
reusable product model is therefore intentionally empty. A product card and
detail-route template exist for future approved records, but no individual
product detail route is built or indexed at this stage.

Before a product record can be published, its public title, creator approval,
rights clearance, format, delivery information, availability status and any
purchase/support information must be approved. `AVAILABLE` requires a defined
active pathway; `COMING_SOON` requires an approved identified offer. Neither
label is used for an unspecified future product. Bundle-related fields are
data-model preparation only, not a bundle offer or commerce capability.

Digital Products is distinct from What We're Building, which explains work at
a high level, and Projects, which remains the deeper evidence-led layer. No
generic product imagery is used pending an approved product cover or social
asset. The Phase D experience is text-first to preserve public asset and
publication boundaries.

## Deferred items

- What We're Building route/page content.
- Individual Digital Products records, product covers, bundle offers, checkout,
  payment, downloads, fulfilment, seller/VAT/refund information and support operations.
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
Building remains unlinked until its route exists. Digital Products is linked
now that its Phase D information-first routes exist; individual offers remain
approval-gated.

The footer retains the four Phase A groups. Its Company / Legal group separates
company links, legal links and registered company metadata, using only verified
company details. No commercial, mailing, analytics or provider capability is
introduced by Phase B.
