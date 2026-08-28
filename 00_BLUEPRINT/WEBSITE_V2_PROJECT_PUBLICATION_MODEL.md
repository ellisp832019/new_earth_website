# Website V2 Project Publication Model

## Status

Project and system rollout foundation, 2026-08-28. This document defines the
public model for progressively publishing one project or system at a time. It
does not publish a project, approve project claims, or authorise WordPress,
IONOS, live-site or deployment changes.

## Authority and route model

`01_STRATEGY/WA-02/PUBLIC_PROJECT_SYSTEM_CATALOGUE.csv` remains the authority
for publicly recognised project and system records. The public index is
`/projects/`; the canonical detail route model is `/projects/[slug]/`.

There is no competing `/project/`, `/systems/[slug]/` or technology detail
route. Existing catalogue rows do not become public pages automatically.

## Publication gate

An entry must be explicitly marked `public_enabled` in the implementation data
before a detail page can be generated. The conservative default is false.
Catalogue recognition, maturity and public publication are separate decisions.

Each entry must progress through this ladder:

1. CATALOGUED
2. PUBLIC CONTENT DRAFTED
3. TECHNICAL / EVIDENCE CHECKED
4. ASSET / RIGHTS CHECKED
5. LOCAL PREVIEW
6. OWNER REVIEW
7. OWNER ACCEPTED / LOCKED
8. PUBLIC BUILD ELIGIBLE
9. DEPLOYMENT ONLY WHEN EXPLICITLY AUTHORISED

## Maturity and public status

Maturity describes development state only. The controlled vocabulary is:

- ACTIVE DEVELOPMENT
- PROTOTYPE
- RESEARCH
- CONCEPT / FUTURE
- PUBLIC INFORMATION ONLY

Public status separately describes whether the website may publish an entry,
for example `NOT YET PUBLIC` or `PUBLIC-ENABLED`. Neither field implies
evidence strength, commercial readiness, production readiness or safety
certification.

## Evidence model

Public evidence is described by class, not by an invented score:

- repository or document evidence;
- software or UI evidence;
- prototype evidence;
- physical hardware evidence;
- testing or validation evidence;
- conceptual or reference material;
- public-safe evidence;
- evidence not yet public.

An image or repository record is not, by itself, proof that a physical or
operational capability exists. Where evidence is not publicly verified, the
page must say so.

## Public page boundary

Public project pages may explain what a project is, why it exists, the problem
it addresses, its relationship to New Earth, its current development state,
what has actually been built or verified, what comes next and available
public evidence.

They must not expose secrets, credentials, private infrastructure, sensitive
local paths, private financial or personal information, unsafe instructions or
unsupported capabilities. Public explanations of the Command Centre do not
embed or expose the private Command Dashboard. The Command Centre and Dashboard
remain distinct.

## Claim discipline

Copy must distinguish what a project **is**, **is being developed**, **is
planned** and **could eventually** be. Technology remains a tool in service of
life, human agency and community capability, not the purpose of New Earth.

Where relevant, local-first relationships should describe actual contributions
to local knowledge, capability, maintainability, resilience, agency or
community stewardship. The phrase is not appended mechanically to every page.

## Reusable content model

The static data model supports these fields without requiring every field to be
shown as a separate visual block:

- project name and short description;
- public slug and category/lane;
- maturity and public status;
- one-line purpose, why it exists and what it is;
- relationship to New Earth and current state;
- what exists today, evidence and current limitations;
- next development direction;
- related systems and public links;
- hero or primary visual;
- visual status and provenance.

## Page structure and accessibility

When an entry is approved for generation, the public pattern is: project hero,
why it exists, what it is, what exists today, relationship to New Earth,
evidence/current progress, current limitations, what comes next, related
systems, and an explore/next-step handoff.

The pattern preserves one H1, semantic headings, descriptive links, meaningful
alt handling, visible keyboard focus, text-based status labels and responsive
layouts without horizontal overflow. It remains public explanation, not
internal engineering documentation.

## Visual and asset hierarchy

Prefer real public-safe UI, prototype or physical evidence; then a public-safe
technical/system diagram; then conceptual artwork. Conceptual artwork must be
labelled as such and must never imply that an operational or physical system
exists. The existing public asset build gate and WA-05 rights, accessibility,
privacy and provenance controls remain authoritative.

## Relationships and rollout

Relationships must come from controlled authority and must not be inferred from
repository names. MicroGrow is the first project candidate for the next bounded
work package, but no MicroGrow page or capability claims are created here.
Later rollout remains evidence-led rather than a locked large schedule.

## Deferred routes

Journal, Resources, Contact, Progress, pillar detail, creator, company,
research-paper, support, community and other future routes remain deferred.
They are not solved by this foundation. No future route is generated merely
because a link or catalogue row exists.
