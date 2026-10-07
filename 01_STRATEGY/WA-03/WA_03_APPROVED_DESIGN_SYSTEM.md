# New Earth Website — WA-03 Design System Decision

Status: APPROVED
Approved by: Peter
Phase: WA-03 — Design System

## Core Decision

The next release evolves the existing New Earth identity rather than rebranding it.

Preserve:

- current emblem and wordmark
- natural earth/green/sand visual identity
- serif heading / sans reading pattern
- calm layouts
- governed imagery
- public/private asset distinction
- evidence-led project presentation
- existing accessibility foundations

Improve:

- navigation clarity
- secondary discovery
- functional typography sizes
- component differentiation
- status semantics
- product presentation
- architecture visual legibility
- responsive behaviour
- route-specific imagery
- publishing-aware component design

## Primary Navigation

Approved primary navigation:

1. Vision
2. What We're Building
3. Learn
4. Digital Products
5. About
6. Contact

No mega-menu is required initially.

Secondary discovery should use:

- contextual navigation
- breadcrumbs where useful
- related-content patterns
- section indexes
- footer groups

## Design Principles

1. One ecosystem, understandable parts.
2. Evidence before impression.
3. Progressive disclosure.
4. Readable before decorative.
5. Distinct meanings for different states.
6. Useful before populated.
7. Reuse before rebuild.
8. Public boundaries enforced at source.
9. Human publication authority remains visible.
10. Motion only where it helps interaction.

## Status System

The next release must distinguish:

### Maturity
Examples:
- In Development
- Prototype
- Research
- Future Vision

### Publication State
Examples:
- Pending owner review
- Approved for publication
- Published
- Withheld

### Commercial Availability
Examples:
- Coming Soon
- Available

### Confidence / Baseline Certainty
Examples:
- Confirmed
- Provisional
- Awaiting Baseline

These dimensions must not be collapsed into one status badge.

Internal Capability and Public Architecture Context are contextual classifications,
not maturity states.

CF-02 remains open.

## Architecture Visual System

Approved visual families:

1. Primary New Earth Ecosystem Map
2. Simple Visitor Model
3. Platform / Technology Detail View
4. Product / Research / Knowledge Relationship View

Each visual must provide:

- approved nodes only
- evidence-supported relationships
- maturity/status labels where relevant
- confidence/uncertainty where relevant
- public/private filtering
- desktop design
- mobile design
- complete text equivalent
- print/static fallback where appropriate

Internal capabilities may appear as:

Internal capability — public architecture context

but must not expose private implementation details.

## Learn Design

Learn must:

- provide useful free public knowledge
- avoid launching as an empty portal
- support learning pathways
- integrate Journal discovery
- support creator attribution
- distinguish free knowledge from products
- link optionally to relevant products without making learning a sales funnel

## R&D Design

R&D must visually distinguish:

- research theme
- experiment
- finding
- limitation
- research note
- project connection
- evidence source

Research should look evidence-led, not theatrically scientific.

## Project Design

Project records should support:

- project identity
- maturity
- approved documentary imagery
- what it is
- current state
- evidence
- limitations
- supporting images/captions
- next controlled step
- related research
- related Journal
- related Learn
- related products where genuinely applicable

## Digital Product Design

The existing product architecture should be extended rather than replaced.

Product experiences must support:

- family pages
- product cards
- product details
- Coming Soon
- Available
- creator attribution
- related free knowledge
- fulfilment state
- approved commercial/legal information
- honest empty states

## AI Made Simple

AI Made Simple is a required next-release product target and remains readiness/activation gated.

AI Made Simple requires:

- approved cover
- product card
- product hero
- creator attribution
- bounded learning outcomes
- verified contents
- related free knowledge
- readiness-aware price/availability area
- verified fulfilment state
- clear CTA hierarchy
- route-specific SEO/social asset

It remains activation-gated.

## The Fifth Dimension, Lad

The Fifth Dimension, Lad requires one durable route.

Initial state:

COMING SOON

Later state:

same route transitions to live only after applicable publication,
commercial, legal, payment/donation and fulfilment approval.

Initial design must include:

- approved cover
- exact title
- verified attribution
- approved summary
- clear Coming Soon status
- no implied purchase/donation/download
- state-accurate social asset

## Reuse Before Rebuild

Existing components:

KEEP:
- ImageLightbox
- LegalPage
- LocalFirstPathway

EXTEND:
- AssetImage
- EcosystemExplorer
- JournalArticleCard
- LightboxImage
- ProductCard
- PublicRelationshipMap
- PublicStatusBadge
- BaseLayout
- CorePageLayout

REFACTOR LATER:
- ContentPage
- global.css
- current status mappings

No current component has approval for wholesale replacement.

## Accessibility

Required:

- keyboard-operable navigation and interactions
- clear visible focus
- dark-surface focus treatment
- status not conveyed by colour alone
- complete diagram text equivalents
- readable line length
- mobile-readable type
- meaningful alt text
- approximately 44px touch targets where practical
- no hover-only information
- zoom/reflow support
- lightbox focus management
- reduced-motion support

## Responsive Design

Representative implementation checks should include approximately:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Architecture visuals must become readable ordered/grouped structures on mobile
rather than compressed desktop diagrams.

## Localhost Acceptance Loop

Every meaningful implementation slice must use:

CHANGE
→ AUTOMATED CHECKS
→ LOCALHOST
→ VISUAL REVIEW
→ FIX
→ RECHECK
→ ACCEPT
→ COMMIT

Primary local preview:

http://localhost:4321/

Local preview does not equal public approval.

Public-build-ready state must still pass governed public-build checks.

## Publishing-Aware Design

Priority:

VERY HIGH
- Projects
- What We're Building
- Journal

HIGH
- R&D
- Learn
- Digital Products
- ecosystem architecture
- homepage latest modules

MEDIUM
- creator families
- Blueprint / Pillars

LOW
- Vision
- Manifesto
- About

Components should support structured approved records without requiring page
redesign for each publication.

## Future-Build Capability Rule

Where required by the approved release, later implementation may create:

- diagrams
- visuals
- responsive derivatives
- Astro components
- content schemas
- data models
- validation tools
- PowerShell tooling
- preview tools
- publication tooling
- deployment/staging controls
- accessibility equivalents
- tests/evidence

This does not permit uncontrolled scope growth.

## Carry-Forward Boundaries

CF-01 remains open:
Astro/PHP deployment/staging drift.

CF-02 remains open:
MicroGrow publication-state conflict.

CF-03 through CF-05 remain boundary-preserving requirements.

Operating Baseline ownership is not established by WA-03.

## WA-03 Decision

WA-03 Design System direction is approved.

Next governed phase:

WA-04 — Homepage

However, approved WA-03 implementation packages may now begin where required to
establish the design-system primitives needed by WA-04 and later sections.

WA-04 owns final homepage selection, hierarchy, order and composition.

No WA-04 implementation is included in this closeout.

