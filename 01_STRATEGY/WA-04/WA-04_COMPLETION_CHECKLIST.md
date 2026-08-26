# WA-04 Completion Checklist

**Phase:** Website V2 global shell and homepage offline baseline
**State:** Approved baseline; responsive browser acceptance outstanding before deployment

## Governance and Scope

- [x] WA-04 work stayed inside the New Earth Website repository.
- [x] AGENTS.md was read before work.
- [x] No WordPress, IONOS, live-site, or production deployment work was performed.
- [x] WA-04B.1 adopted the approved conceptual MicroGrow card asset and reconciled `ASSETS/ASSET_REGISTER.csv`; no live production deployment was performed.
- [x] The 12 intentional untracked reference files remain unchanged.

## Approved Homepage Baseline

- [x] Peter's homepage direction, layout, public wording, imagery balance, and visual identity approval is recorded.
- [x] Global shell uses the approved header and footer architecture.
- [x] Public section order is: Header, Hero, What is New Earth?, Start with the big picture, The 12 Pillars, Ecosystem, Featured Projects, Progress and Transparency, Journal and Learning, Get Involved, compact external connections, Footer.
- [x] Header contains exactly seven items: Vision, Blueprint, Ecosystem, Projects, Journal, About, Get Involved.
- [x] Footer contains five groups: Explore, Participate, Learn, Legal, Trust.
- [x] All twelve approved pillar destinations and names remain present and ordered.
- [x] Public copy is human, sincere, hopeful, grounded, clear, truthful, accessible, and UK English.

## Component and Accessibility Contract

- [x] Image-content cards use approximately one-third media and two-thirds written content.
- [x] Card bodies contain status, title, concise explanation, and action.
- [x] Images use controlled dimensions, lazy loading below the fold, and object-fit cropping.
- [x] Equal-height card rows, flex bodies, restrained radius, and bottom-aligned actions are defined.
- [x] Project and Journal/Learning cards are not image-only.
- [x] Status is communicated by text and not colour alone.
- [x] One H1, logical headings, skip link, focus styles, alt text, and reduced-motion support remain present.
- [x] Ecosystem relationships have a semantic text alternative.

## Boundaries and Remaining Work

- [x] External integrations remain compact, labelled, and inactive, with no scripts, feeds, embeds, trackers, or unapproved URLs.
- [x] New Earth Builders remains a neutral Community & Collaboration reservation marked Coming Later in the preview.
- [x] No partner name, logo, URL, partnership claim, embed, tracking, SSO, or data sharing is public.
- [x] `NE-HOME-IMG-007` is produced and adopted; the required homepage production-image blocker is resolved.
- [x] The MicroGrow page hero is not reused as the homepage project-card image; the dedicated card asset is used instead.
- [x] WA-05 detailed content production is the next phase.
- [ ] Tablet browser acceptance at approximately 768px.
- [ ] Mobile browser acceptance at approximately 390px.

## Evidence

- [x] HTML, CSS, and JavaScript checks pass.
- [x] CSV schemas and row lengths pass.
- [x] Internal links and referenced tracked assets pass local checks.
- [x] No credentials or private absolute paths are present.
- [x] `git diff --check` and `git diff --cached --check` pass.
