# New Earth Website — Next Release Detailed Build Plan

**Status:** Planning baseline — for Peter approval before implementation  
**Date:** 8 October 2026  
**Repository:** `D:\Dev\Projects\New Earth - Website\NEW_EARTH_WEBSITE`  
**Current merged implementation anchor:** `07c40db72f6fe7167a4f43eff4c68401c66843a9`  
**Implementation method:** additive-first, non-destructive, localhost-reviewed  
**Purpose anchor:** New Earth helps people become more self-sovereign through knowledge, practical tools and human-governed systems.

## 1. Purpose

This plan translates the accepted New Earth website direction into an ordered build programme. It starts from what already exists and works. The website remains a public communication and delivery layer; the Operating Baseline remains authority for wider system identity, ownership, boundaries and accepted programme state.

## 2. Locked implementation rule

**CURRENT BASELINE → ADD NEW CAPABILITY → AUTOMATED CHECKS → LOCALHOST REVIEW → COMPARE WITH EXISTING → FIX → PETER APPROVAL → ONLY THEN REPLACE / MOVE / REMOVE OLD PRESENTATION → RECHECK → COMMIT**

Until an approved replacement exists, preserve current navigation, homepage, routes, visual identity, footer, public-safe assets, Blueprint/Pillars presentation, project presentation and working functionality.

## 3. Current anchor

Current primary navigation:
- Vision
- What We’re Building
- Digital Products
- Blueprint
- In Practice
- Projects
- Journal
- About
- Contact

Approved future navigation:
- Vision
- What We’re Building
- Learn
- Digital Products
- About
- Contact

The future navigation is not implemented yet.

Current homepage baseline includes:
- Hero
- What is New Earth?
- Pathways
- 12 Pillars
- Ecosystem
- Projects
- Progress
- Journal
- Get Involved
- Digital Products
- Building in Public
- Footer

New Earth Builders is already removed from the current local baseline and is **not** an outstanding implementation task.

The merged `/learn/` route is the current Public Knowledge foundation and remains intentionally outside the primary navigation for now.

## 4. Public purpose and editorial alignment

Core public purpose:

> **New Earth helps people become more self-sovereign through knowledge, practical tools and human-governed systems.**

Self-sovereignty should mean:
- awareness
- practical capability
- informed choice
- meaningful control
- personal responsibility
- local stewardship
- cooperation
- respect for the living world

It must not be presented as anti-cooperation, isolationist, anti-technology, total independence, a vague spiritual slogan, or a promise of unsupported outcomes.

Recommended public narrative:

**PURPOSE → UNDERSTANDING → PERSONAL RESPONSIBILITY → PRACTICAL KNOWLEDGE → TOOLS AND SYSTEMS → LOCAL CAPABILITY → HUMAN-GOVERNED TECHNOLOGY → COOPERATION → PROJECTS / PRODUCTS / RESEARCH → EVIDENCE AND LEARNING**

## 5. How New Earth Builds

Recommended public build model:

**DISCOVER → REUSE → DEFINE → BOUND → APPROVE → BUILD → TEST → REVIEW EVIDENCE → RELEASE DELIBERATELY → LEARN**

Public principles:
- Start from reality.
- Reuse before rebuild.
- Build in bounded steps.
- Separate intention from evidence.
- Keep human authority.
- Test what matters.
- Keep a traceable record.
- Learn from real-world use.

Primary public home: **What We’re Building**.  
Deeper architectural context: **Ecosystem**.

## 6. Public / private boundary

Every major item should be classed as:
1. Public now
2. Public at high level
3. Future / public later
4. Internal only

Public architecture must never expose credentials, local IPs, private endpoints, databases, dashboards, permissions, security configuration, detailed network/runtime topology, or unpublished implementation details.

Naming an internal capability does not imply production readiness, commercial availability, completed integration, canonical ownership or autonomous authority.

## 7. Ecosystem coverage

Public-safe coverage should account for:

### Purpose and framework
Vision, Manifesto, Blueprint, 12 Pillars, Inner Blueprint, Transition Path, New Earth in Practice, self-sovereignty, local-first principles, human governance and cooperation.

### People and company
Peter, Hayley, New Earth Advanced Technologies Ltd, founder journey, collaborators where appropriate and creator lanes.

### Creator / knowledge
Peter — New Earth Practical Guides and AI Made Simple.  
Hayley — New Earth Conscious Living.  
Learn, Journal, public knowledge and future reference material.

### Technology / platform context
Platform Core, NEOS, GAIA, Command Centre, Company Control, Local AI Runtime, governed tool/MCP capability, Knowledge/Librarian capability, CKCC where relevant, infrastructure, backup/resilience, future AI compute and future reusable voice capability.

These are not all products and must not appear as equivalent offers.

### Projects / research
MicroGrow, Command Centre, Field Scanner, BioCalm, MicroGrow AI Lab, New Earth Living, New Earth Life OS where evidence permits, and future research directions.

### Products / delivery
New Earth Practical Guides, AI Made Simple, The Fifth Dimension, Lad, Conscious Living resources and future governed digital delivery.

## 8. Required architecture views

1. **Simple Visitor Model** — purpose, learning, work, projects, approved products and participation.
2. **Primary New Earth Ecosystem Map** — whole-system public view.
3. **Platform / Technology Detail View** — technical context without private internals.
4. **Product / Research / Knowledge Relationship View** — clarifies projects, research, learning, Journal and products.

Every visual requires desktop, mobile, accessible text equivalent, public/private filtering, status semantics and evidence-supported relationships.

## 9. Status semantics

Keep separate:

**Maturity:** Research / Prototype / In Development / Future Vision  
**Publication:** Internal / Candidate / Approved for Public / Published  
**Commercial availability:** Not an Offer / Coming Soon / Ready for Commerce Activation / Available  
**Evidence confidence:** Confirmed / Provisional / Awaiting Baseline Confirmation

Do not collapse these into one badge.

## 10. Gap matrix

| Area | Current state | Gap | Target |
|---|---|---|---|
| Purpose | Present but distributed | Self-sovereignty not yet the obvious practical thread | Clear purpose across entry points |
| Learn | Foundation merged | Content-light | Useful knowledge destination |
| Journal | Structure exists | No published articles | Evidence-led dated publishing |
| AI Made Simple | Strong release evidence exists | Website/commercial state unreconciled | Governed product + customer journey |
| Fifth Dimension | Publication work exists | No durable website route | Coming Soon → later live |
| Ecosystem | Existing relationship map | Wider programme coverage incomplete | Full evidence-bound architecture |
| How We Build | Implicit | Method not public enough | Clear build/governance explanation |
| R&D | Distributed | Weak public identity | R&D beneath What We’re Building |
| Projects | Evidence routes exist | Breadth/status relationships need refinement | Maintained evidence layer |
| Blueprint | Strong framework | Pillar structure split | Shared structured pillar model |
| Homepage | Strong baseline | Repetition + newer story missing | Candidate modules then consolidation |
| Navigation | Nine-item current nav | Future hierarchy not ready | Six-item nav when destinations ready |
| Products | Families exist | No individual public product | Governed product records |
| Email | None | No capture capability | Privacy-safe email |
| Payments | None | No commerce | Approved seller/provider flow |
| Downloads | None | No fulfilment | Controlled delivery + receipt |
| Publishing | Manual/structured | No complete workflow | Human-approved publishing pipeline |
| Staging | Deployment drift | No fully proven Astro/PHP staging | Verified release path |
| MicroGrow | Evidence-bearing | Publication-state conflict | Reconciled public status |
| Analytics | None | No evidence loop | Privacy-conscious decision only if justified |

## 11. Implementation programme

### Package 02A — Public / Local Deployment Reconciliation
Read-only comparison of merged `main`, localhost and live site. Record route/version drift, merged-but-not-public changes, redirects and caching observations. No redesign, no deployment. New Earth Builders removal is already complete and is not part of this package.

### Package 02B — AI Made Simple Authoritative Product Reconciliation
Reconcile product control, V1.0 release package, release manifest, QA, 55-page master, bonuses, visuals, lead magnet, Beacons material, historical £9 experiment material and older BUILDING/checklist records.

Peter decisions required for final public identity, creator, seller, ownership/rights, price/current commercial model, VAT/tax, refunds, support, purchase provider, delivery method, public artefact, cover and activation.

Historical £9 pricing must not be assumed current.

### Package 02C — AI Made Simple Product Route
Build a real product route alongside the current Digital Products area. Include product identity, beginner proposition, creator, outcomes, contents, cover, human-first/verification principles, version/format, accessibility, support, commercial state, delivery state and related free learning.

Do not show **Available** until all activation gates pass.

### Package 02D — Commerce / Fulfilment Foundation
Add approved payment provider, seller identity, confirmation, controlled fulfilment, download integrity, support, privacy/data handling, receipt/evidence, failure recovery, test purchase and refund/cancellation handling.

### Package 03 — The Fifth Dimension, Lad
Create one durable route. Initial state: **Coming Soon**. Use approved title, cover, attribution and description. No false date, payment or download. Later activate the same route.

### Package 04A — Ecosystem Architecture Data Foundation
Create a structured public architecture model with IDs, public names, categories, purpose, presentation class, maturity, publication state, confidence, relationships, evidence/source pointers, public descriptions and internal-detail exclusions.

Website code must not invent canonical system identities.

### Package 04B — Simple Visitor Model
Build and test independently before homepage use.

### Package 04C — Full Ecosystem Experience
Extend `/ecosystem/` while preserving current content during development. Add whole-system map, layered views, public-safe technology context, people/company relationship, projects/research/products/knowledge relationship, mobile disclosure and accessible text equivalent.

### Package 04D — How New Earth Builds
Add the public build method primarily beneath `/what-were-building/`, cross-link from Ecosystem, and consider a later Learn/Journal article.

### Package 05A — Learn Expansion
Expand `/learn/` with small useful categories:
- Understand New Earth
- Practical knowledge
- Follow the evidence

Do not launch empty taxonomies.

### Package 05B — First Free Practical Resource
Preferred candidate: **10 Things You Can Ask AI**, only after verifying the existing V1.0 lead magnet is current and approved. Foundational knowledge should not be email-gated by default.

### Package 05C — First Journal Publication
Publish one real article through the governed workflow. Candidate topics:
1. Why self-sovereignty sits at the heart of New Earth
2. How New Earth builds: from idea to evidence
3. What MicroGrow demonstrates today — and what still needs proving

### Package 05D — Governed Publishing Workflow V1
**CANONICAL SOURCE → PUBLICATION CANDIDATE → AI/TOOL PREPARATION → PRIVACY/CLAIM/RULE CHECKS → HUMAN REVIEW → APPROVAL → WEBSITE RECORD → BUILD → STAGING → FINAL APPROVAL → PUBLISH → VERIFY → RECEIPT**

Prove this with Journal first. Do not build a general automation platform yet.

### Package 06 — Blueprint / Pillars Structure
Preserve Blueprint identity, 12 Pillar names, Inner Blueprint, Transition Path and local-first/cooperation relationship. Move useful summaries into shared structured data. Avoid twelve thin pages and unsupported health/healing claims.

### Package 07 — Homepage Candidate Modules
Build proposed modules beside the current homepage:
1. Purpose
2. What New Earth means in practice
3. What we’re building
4. One connected ecosystem
5. Learn
6. Digital Products
7. Journal / Building in Public
8. People behind New Earth
9. Participate / Contact

Feature MicroGrow + Command Centre initially as evidence-bearing work. AI Made Simple becomes the lead Digital Product once ready; Fifth Dimension receives a restrained Coming Soon teaser.

### Package 08 — Navigation Migration
Only after destinations are strong. Migrate to:
- Vision
- What We’re Building
- Learn
- Digital Products
- About
- Contact

Preserve existing URLs and contextual discovery.

### Package 09A — Email Capability
Decide provider, consent, segmentation, unsubscribe, privacy, retention and sender identity. Email capture only where genuinely useful.

### Package 09B — Product Delivery Hardening
Secure customer download, versioned artefact, delivery receipt, support, update policy and failed-delivery recovery.

### Package 09C — Marketing / Communications Preparation
Future approved flow:
**website/publication event → approved summary candidate → channel-specific draft → Peter approval → publish → receipt/results**

No autonomous marketing authority.

### Package 10 — Staging + Complete Release Acceptance
Resolve CF-01 with isolated non-production hostname, known doc root, HTTPS, rollback, backup and PHP/contact testing. Resolve CF-02 MicroGrow state conflict.

Full checks include build, public build, privacy, SEO, redirects, contact, 404, sitemap, canonical/social metadata, asset allow-list, responsive, keyboard/focus, product readiness, purchase/fulfilment/email tests where active, legal links, public/private review and rollback proof.

Production cutover remains Peter-approved only.

## 12. Content model distinctions

**Learn = evergreen understanding**  
**Journal = dated evidence and reflection**  
**Projects = maintained project/engineering evidence**  
**R&D = exploration**  
**Digital Products = approved customer offers**

Cross-link them without duplicating their roles.

## 13. Asset strategy

Use governed existing assets first. Before creating a new image:
1. check approved asset register;
2. inspect existing project/product visuals;
3. verify public-build readiness;
4. verify rights;
5. inspect privacy/security risk;
6. create a derivative only if needed.

Protected boundary: `ASSETS_REFERENCE/MICROGROW/` remains owner-only and untracked unless explicitly authorised.

## 14. Product activation gates

A product becomes **Available** only when required gates are approved:
- identity
- creator
- ownership
- rights
- version
- delivery file
- cover
- description
- price/commercial model
- seller
- VAT/tax
- refunds/cancellation
- support
- payment method
- delivery method
- accessibility
- public status
- SEO/social
- privacy implications
- staging test
- Peter activation approval

## 15. R&D identity

R&D should appear beneath **What We’re Building** in this release. Potential themes:
- local-first systems
- edge systems
- resilient infrastructure
- human-governed AI
- environmental sensing
- growing systems
- wellbeing/BioCalm research
- secure device networks
- practical AI
- experimental engineering

A standalone `/research/` route should wait until enough approved material exists.

## 16. People and company

Maintain:
- **New Earth** = wider vision/framework/body of work.
- **New Earth Advanced Technologies Ltd** = company context for selected technology, engineering, research and product development.

Do not automatically make the company owner of every creator work, every concept, or unrelated external collaboration.

## 17. Operating Baseline relationship

Before representing a system relationship publicly, check latest accepted baseline state.

The website may consume confirmed identity, public descriptions and public-safe relationships. It may not redefine ownership, create canonical IDs, promote provisional architecture to confirmed truth, infer integration because two systems exist, or write to another canonical store without an approved interface.

## 18. Future automation

Appropriate future automation:
- prepare publication candidates
- validate metadata
- validate asset status
- run privacy/link/SEO checks
- prepare channel drafts
- create staging builds
- generate release receipts
- detect stale public records

Automation should not silently approve claims, publish, activate commerce, change prices, redefine programme truth, deploy production or send marketing unless future governance explicitly permits it.

## 19. Release blockers

- **CF-01:** Astro/PHP staging/deployment path not yet fully proven.
- **CF-02:** MicroGrow publication-state conflict remains open.
- AI Made Simple must pass readiness/delivery activation gates.
- Public architecture cannot contain unsupported ownership/integration claims.
- Only public-approved assets/derivatives may ship.
- Host-side PHP contact delivery must be proven.

## 20. Recommended work order

1. 02A — Public/local deployment reconciliation
2. 02B — AI Made Simple authoritative product reconciliation
3. 02C — AI Made Simple route
4. 02D — commerce/fulfilment foundation
5. 03 — The Fifth Dimension, Lad Coming Soon route
6. 04A — ecosystem architecture data foundation
7. 04B — Simple Visitor Model
8. 04C — full Ecosystem experience
9. 04D — How New Earth Builds
10. 05A — Learn expansion
11. 05B — first free practical resource
12. 05C — first Journal publication
13. 05D — governed publishing workflow V1
14. 06 — Blueprint/Pillars improvements
15. 07 — homepage candidate modules
16. 08 — navigation migration
17. 09A — email capability
18. 09B — product delivery hardening
19. 09C — marketing/communications preparation
20. 10 — staging + complete release acceptance
21. Production cutover only with Peter approval

## 21. Definition of success

The release succeeds when:
- a new visitor understands New Earth;
- self-sovereignty is clear and practical;
- the build method is understandable;
- the wider ecosystem can be explored without exposing private internals;
- projects, research, future ideas and products are distinct;
- Learn contains genuinely useful knowledge;
- AI Made Simple has a governed customer journey;
- The Fifth Dimension has a durable public destination;
- Journal can publish evidence-led material through a governed workflow;
- creator and company context is coherent;
- homepage content is richer without losing existing value;
- navigation becomes simpler only when content supports it;
- status is truthful;
- payments/downloads/email are bounded and testable;
- staging and rollback are proven;
- the website remains a consumer of New Earth truth rather than a competing control system.

## 22. Approval checkpoint

Peter approval of this plan means the sequence, scope, self-sovereignty anchor, additive-first method and authority boundaries are accepted.

It does **not** approve product availability, pricing, payments, deployment, unresolved architecture relationships or production cutover.

## 23. Immediate next task after approval

**Package 02A — Public / Local Deployment Reconciliation**

Then:

**Package 02B — AI Made Simple Authoritative Product Reconciliation**
