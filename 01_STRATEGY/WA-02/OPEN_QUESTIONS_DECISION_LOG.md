# WA-02 Open Questions and Decision Log

## Status

Peter approved all five blocking WA-02 architecture decisions on 2026-08-26.
The decisions below are resolved and are not reopened. Remaining questions are
non-blocking V2.x activation or implementation gates.

## WA-02B approval record

| ID | Decision | Approved outcome |
| --- | --- | --- |
| A01 | Public label | Ecosystem is the public navigation label and canonical `/ecosystem/` destination. `/systems/` remains available until replacement publication and validation, then receives a planned permanent redirect. |
| A02 | Get Involved | Create lightweight `/get-involved/` hub for Collaboration, Community / Start a Circle, Support or funding, and Contact. No member portal or complex workflow in V2.0. |
| A03 | Research and Development | Include public `/research-development/` beneath Ecosystem with plain-language, conservative, evidence-based status. Private research and unpublished material remain excluded. |
| A04 | Pillar URL convention | Use `/blueprint/pillars/{pillar-name}/` without numeric slug prefixes. Display approved numbers in titles, labels, and ordered navigation. |
| A05 | New Earth Test | Do not promote as an independent V2.0 destination. Preserve unique content, then conditionally redirect `/blueprint/new-earth-test/` to `/blueprint/inner-blueprint/`. Reserve an interactive assessment for V2.x. |
| A06 | Manifesto route reconciliation | The `/manifesto/` page was an accidental omission from the URL register. Restore it as public V2.0 canonical route `V20-019` with secondary navigation placement; do not add a primary-header item. |

## Locked navigation and boundary

- Header: Vision, Blueprint, Ecosystem, Projects, Journal, About, Get Involved.
- Home is reached through the New Earth logo and accessible Home mechanisms.
- Footer groups: Explore, Participate, Learn, Legal, Trust.
- The public Command Centre information page is included in V2.0.
- The Command Centre application and authenticated New Earth Dashboard remain
  separate protected systems.

## Non-blocking V2.x questions

| ID | Question | Recommended answer | Owner | Decision gate |
| --- | --- | --- | --- | --- |
| B01 | When should project detail pages activate? | Only with evidence, owner, audience, and approved status. | Project owners | V2.x activation |
| B02 | Should creator lanes become Journal taxonomies or collections? | Reserve explicit lanes; decide after approved content volume. | Peter / Hayley | Creator model |
| B03 | When should Community / Start a Circle activate? | After safeguarding, moderation, privacy, and form review. | Community owner | Community activation |
| B04 | When should newsletter, events, and submissions activate? | After consent, provider, moderation, and ownership decisions. | New Earth | Capability activation |
| B05 | Should public status feeds be automated? | Establish a controlled evidence source before automation. | Peter / project owners | Progress activation |
| B06 | When should protected access be linked? | Only after security, authentication, privacy, accessibility, testing, and release approval. | Technical owner | Protected-system release |
| B07 | When should Research Papers or Support activate? | After citation, legal, payment, and ownership review. | Research / New Earth | Deferred research review |

No blocking V2.0 architecture questions remain. WA-02 is ready for WA-03
design-system planning after this closeout.
