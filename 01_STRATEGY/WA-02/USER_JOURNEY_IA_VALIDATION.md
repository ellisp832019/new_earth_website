# User Journey IA Validation

## Status

WA-02A architecture validation, 2026-08-26. Planning only. Calls to action
below are directional and do not activate forms, commerce, membership, or
external system access.

| Journey | Entry point | Main route | Required decision point | Call to action | Exit or continuation | Failure/confusion risk |
| --- | --- | --- | --- | --- | --- | --- |
| First-time visitor | Home or search | Home > Vision > Blueprint | Is the visitor seeking orientation or action? | Explore Vision or Blueprint | Projects, Journal, or Get Involved | Overloaded Home or unclear next step. |
| Potential collaborator | Home, Get Involved, or Contact | Get Involved > Collaborate > Contact | Is the enquiry partnership, project, or general contact? | Choose a safe contact pathway | Contact confirmation or relevant resource | Unclear ownership or premature form activation. |
| Supporter/funder | Vision or Projects | Vision > Ecosystem > Projects > Collaborate | Is support directed to a verified project or general ecosystem? | Review evidence and collaboration route | Collaborate or Contact | Unsupported funding claims or missing legal context. |
| Builder/researcher | Blueprint or Journal | Blueprint > Pillars > Ecosystem > Research and Development | Which pillar, system, or evidence area applies? | Read source material or Research | Journal, Projects, or Contact | Technical language exposes private systems or lacks evidence. |
| MicroGrow visitor | Home, Projects, or direct route | Projects > MicroGrow > Blueprint Alignment | Is the visitor seeking product information or doctrine context? | Explore MicroGrow | Journal, Contact, or Blueprint | Product claims lack status, owner, or support path. |
| Journal reader | Journal or search | Journal > category/tag > article | What topic or relationship should be followed? | Read, filter, or continue to related content | Pillar, Project, Creator lane | Articles/Journal duplication or weak related links. |
| Peter Practical Guides visitor | Search or approved contextual link | Resources/Journal > Peter Practical Guides | Has Peter approved the lane and individual item? | Read an approved guide | Blueprint, Project, or Contact | Attribution or consent is unclear. |
| Hayley Conscious Living visitor | Search or approved contextual link | Resources/Journal > Hayley Conscious Living | Has Hayley approved the lane and individual item? | Read an approved item | Blueprint, Journal, or Contact | Publishing in Hayley's name without approval. |
| Community/circle visitor | Get Involved or contextual link | Get Involved > Community (reserved) | Are safeguarding and moderation ready? | Review information or express interest when approved | Contact or future community flow | Future capability appears live or invites unsafe submissions. |
| Legal/privacy visitor | Footer or direct route | Legal > policy | Which policy or disclosure is needed? | Read policy or contact safely | Related legal page or Contact | Duplicate legal routes, stale facts, or inaccessible policy content. |

## Validation conclusions

The architecture gives every journey a public entry, a bounded route, and a
continuation without placing future portals, dashboards, forms, or private
systems in the V2.0 primary path. WA-02B should test labels and page ordering
with representative users before implementation planning.

## Accessibility and trust checks

- Every journey must work by keyboard and responsive layout.
- Public status labels and evidence dates must be visible where relevant.
- Error, empty, and unavailable states must explain the next safe action.
- Private systems must never appear as searchable public content.
