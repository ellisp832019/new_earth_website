# Content-Type and Taxonomy Requirements

## Purpose

Provide a stable content model for V2.x without activating every future type in
the first release.

## Core content types

| Type | Purpose | Required fields |
| --- | --- | --- |
| Page | Stable explanatory or pathway content | title, slug, purpose, owner, status, review date |
| Hub | Orientation into a subject or collection | audience, summary, child links, next action |
| Pillar | One of the 12 Blueprint domains | pillar number, doctrine links, systems links, related content |
| Project | A practical initiative or implementation node | owner, status, purpose, stage, evidence, contact path |
| Product | A product with an audience and support need | product owner, availability, features, support, legal status |
| Person / author | Public biography or authored lane | consent, display name, bio, role, authored content |
| Journal article | Time-based public knowledge | author, date, type, categories, tags, related pages |
| Guide / resource | Durable practical or educational content | audience, format, revision date, source, related topics |
| FAQ / glossary term | Short answer or canonical definition | question or term, answer, related links, review owner |
| Legal / company page | Trust, policy, and company information | jurisdiction, effective date, owner, review date |
| Media item | Audio, video, image, or document | type, transcript or alt text, rights, source, caption |

## Taxonomy requirements

### Mandatory or strongly preferred taxonomies

- **Architecture layer:** Doctrine, Interpretation, Implementation,
  Participation.
- **Blueprint pillar:** one or more of the 12 pillars where genuinely relevant.
- **Content purpose:** orient, explain, teach, document, invite, support, or
  report progress.
- **Audience:** newcomer, learner, builder, collaborator, partner, community,
  product user, or researcher.
- **Lifecycle:** proposed, in preparation, published, maintained, archived.
- **Author or owner lane:** New Earth, Peter, Hayley, team, project owner, or
  organisation.
- **Project status:** concept, research, prototype, active, paused, complete,
  or future.

### Journal categories already present locally

- Blueprint
- Manifesto
- Systems
- MicroGrow
- Conscious Living
- Regeneration
- Technology
- Stewardship

These categories should be retained as the starting taxonomy. They should not
be copied into new page routes without a clear content-type reason.

## Relationships

- Every public project and product should link to at least one Blueprint or
  pillar context.
- Every article or guide should have one primary content purpose and one owner.
- Person pages should expose authored content through relationships, not copied
  biography blocks scattered across the site.
- Legal and policy content must use canonical routes and explicit review dates.
- Media must include accessibility and rights metadata before public use.

## Future capability requirements

The model should later support downloads, events, submissions, audio/video,
multi-author publishing, papers, donations, member access, and project-status
feeds without changing the meaning of the core types above.

## Constraints

- Do not activate future types without real content and an owner.
- Do not use a generic blog category as a substitute for a project, product,
  guide, or person type.
- Do not expose private platform controls or operational data as public fields.

