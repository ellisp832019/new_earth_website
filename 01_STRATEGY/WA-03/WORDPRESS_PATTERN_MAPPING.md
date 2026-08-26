# WordPress Pattern Mapping

## Status

Planning mapping only, 2026-08-26. No WordPress settings, templates, theme
files, patterns, navigation entities, plugins, or content are changed.

## Control boundaries

- Repository-controlled source: design tokens, pattern specifications, IA,
  accessibility rules, asset register, and content-source documentation.
- WordPress-managed content: page text, Journal posts, media metadata, approved
  status/evidence fields, and policy effective dates.
- Global reusable patterns: header, footer, breadcrumbs, hero, cards, CTA,
  status, evidence, notices, skip link, and accessibility states.
- Page-specific content: approved copy, page relationships, unique evidence,
  and page media selected under the asset policy.

## Mapping

| Design area | WordPress structure | Control |
| --- | --- | --- |
| Global styles | Child theme `theme.json` and global styles | Repository proposal; implementation later |
| Header | Header template part plus Navigation block | Repository design; assignment remains live-controlled |
| Footer | Footer template part plus grouped Navigation blocks | Repository design; no live assignment change |
| Navigation | Navigation block with concise parent/child model | IA and accessibility review first |
| Page templates | Block theme template families | Design-system handoff, then controlled implementation |
| Synced patterns | Global hero, CTA, status, evidence, notices | Use for repeated structure, not final page copy |
| Unsynced patterns | Page-specific sections and approved local composition | Content owner controls |
| Query loops | Journal, projects, pillars, search | Must exclude drafts/private systems |
| Project/status | Project card, status badge, evidence block | Requires owner, date, conservative truth label |
| Pillars | Pillar index/card/detail patterns | Twelve ordered destinations, no numeric URL prefix |
| Creator lanes | Approved creator cards and lane archives | Peter/Hayley approval required |
| Forms | Existing form plugin mapping only | No activation or settings change in WA-03A |
| Journal | Archive, article, related-content patterns | Journal canonical; no duplicate Articles index |
| Legal | Policy template and grouped footer links | Verified facts and professional review |
| Protected systems | Public boundary notice pattern | Never reproduce dashboard controls |

## Implementation guardrails

The design system must not turn the public website into an operational dashboard.
Command Centre and Dashboard remain separate applications. Do not add private
endpoints, authenticated links, ports, infrastructure, or operational data.
