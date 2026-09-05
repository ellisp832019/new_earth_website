# WA-05F Accessibility Readiness Review

## Executive Decision

**ACCESSIBILITY READINESS - PASS WITH IMPLEMENTATION REQUIREMENTS**

## Important Limitation

This is a pre-staging accessibility and inclusive-design readiness review. It
does not constitute a final WCAG conformance claim.

## Proven Starting Baseline

- Branch: `review/website-v2-wa05e-legal-privacy`.
- HEAD: `b4b4508513a02404fa23ed0537aac21ee47790d0`.
- `main` and `origin/main`: `f76d9a89a46258af01a0ba22fc70e376dfe70d03`.
- Six core pages remain `OWNER APPROVED - SPECIALIST REVIEW PENDING`.
- V2 has 39 unique routes and retains `/manifesto/`.

## Standards / Official Guidance Used

WCAG 2.2 AA was used as the engineering target, based on the [W3C WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/), with supporting [WAI understanding guidance](https://www.w3.org/WAI/WCAG22/Understanding/). No public-sector statutory applicability is asserted.

## New Earth Context Used

The wider UI/UX coherence goal, low cognitive load, creator lanes, 12 Pillars,
technical diagrams, GAIA, MicroGrow, New Earth Living, BioCalm, community and
commerce were treated as design and risk context only. No unverified programme
capability was converted into public evidence, and no other repository was changed.

## Accessibility Target

**WCAG 2.2 AA** as the Website V2 engineering and inclusive-design target.

## Perceivable Findings

Source drafts provide heading structure, truthful image guidance and diagram
requirements. Implementation must provide correct alternatives, semantic order,
non-colour status and tested text/non-text contrast.

## Operable Findings

The global shell requires a skip link, keyboard operation, visible unobscured
focus, logical order and responsive touch targets. These remain implementation and
runtime checks.

## Understandable Findings

The drafts are newcomer-oriented and use qualified language. Future technical
terms must be explained, navigation labels consistent and actions descriptive.

## Robust Findings

WordPress implementation must prefer semantic HTML and native controls, with
accessible names and appropriate status announcements for future dynamic features.

## Cognitive Accessibility

Use clear orientation, short logical sections, predictable controls, progressive
disclosure, restrained motion, plain explanations and no hidden critical actions.

## Navigation

Preserve the approved seven-item header, five footer groups, skip link and a
keyboard-operable mobile navigation. Multiple routes to important content should
be provided where appropriate.

## Six Core Pages

All six pages have exactly one H1, logical source headings and contextual links.
The audit records no current content remediation requirement; rendered testing remains pending.

## Images

Use informative alt text for purpose, empty alt for decoration and accessible
names for functional images. Rights and final alt-text review remain WA-05H work.

## Complex Diagrams

The Ecosystem and future Pillar diagrams require concise purpose-focused alt text
plus adjacent structured text. Colour, hover or animation must not carry essential meaning.

## Video / Audio

No media is activated. Future media requires captions, transcripts, controls and
alternatives, with consent for third-party embeds.

## Typography / Visual Presentation

Use readable sizes, flexible text, suitable line length and spacing. Do not disable
browser zoom or assume source tokens prove rendered readability.

## Colour / Contrast

WCAG AA contrast must be measured against final rendered values. No contrast PASS
is claimed from documentation alone.

## Keyboard

Test Tab, Shift+Tab, Enter, Space, Escape and relevant arrow-key interactions. No
keyboard trap or mouse-only action is acceptable.

## Focus

Implement visible `:focus-visible`, logical focus order and offsets that prevent
sticky headers or overlays from obscuring focus.

## Mobile / Touch

Test narrow viewports, portrait/landscape, mobile navigation, clipping, overlap,
touch spacing and readable controls. Approximately 44px is a New Earth usability
preference, not a fabricated WCAG threshold.

## Zoom / Reflow

Test 200% text resize and 400% browser zoom/reflow without unnecessary horizontal
scrolling or loss of function.

## Motion / Reduced Motion

Respect `prefers-reduced-motion`; future animations must not be required to obtain
meaning and must provide pause/stop behaviour where applicable.

## Journal Pattern

Future articles require one H1, author/date semantics where used, logical headings,
meaningful images, captions, descriptive links, accessible quotes and readable line length.

## 12 Pillars Pattern

The reusable accessible content template establishes one H1, plain-language summary,
logical sections, maturity labels, diagram equivalents, descriptive links and related content.

## Accessible Documents / Downloads

Future PDFs and downloads require real selectable text, semantic headings, reading
order, tagged PDF where used, bookmarks where useful, accessible links, table headers,
alt text, contrast and language metadata.

## Contact / Forms

Native forms remain deferred. If activated, use explicit labels, instructions,
autocomplete, required states, programmatic errors, error recovery, CAPTCHA alternatives
and a privacy explanation.

## Creator Lanes

Peter Practical Guides and Hayley Conscious Living remain future lanes. Downloads,
checkout, creator attribution and document accessibility require separate gates.

## GAIA Future Gate

Future GAIA interfaces require keyboard and screen-reader support, status messages,
transcripts, speech alternatives, stop/pause controls, transparency and low cognitive load.

## New Earth Living / BioCalm Future Gate

Future wellbeing/device interfaces require readable charts, non-colour status,
accessible notifications, gesture alternatives and separate health/privacy review.

## MicroGrow Future UI Considerations

Future support/control surfaces require readable values, non-colour states, warnings,
keyboard/touch operation and safe error communication. MicroGrow is not modified here.

## Community Future Gate

Native profiles, posts, messaging, uploads and moderation require accessible editors,
status announcements, media alternatives, focus management and UGC safety review.

## Commerce Future Gate

Future products, checkout and subscriptions require accessible prices, labels, errors,
review-before-purchase, authentication, payment controls and downloadable content.

## New Earth Public Accessibility Baseline

Created as a website-derived candidate baseline for future ecosystem UI/UX review.
It is not a cross-repository standard or conformance claim.

## Content Changes Required

None to the six owner-approved drafts. Future terminology explanations and diagram
equivalents are content-production requirements.

## Implementation Requirements

The implementation specification covers landmarks, shell, navigation, headings,
links, cards, imagery, diagrams, controls, focus, contrast, responsive behaviour,
motion, forms, errors, media, external links and downloads.

## Runtime Verification Requirements

Rendered staging tests must cover automated scanning, keyboard, NVDA/Narrator,
focus, contrast, colour independence, text resize, reflow, touch, orientation,
reduced motion, images, diagrams, legal pages, 404/search and mobile navigation.

## Future Activation Requirements

The future accessibility register covers creator documents, newsletter, forms,
checkout, subscriptions, accounts, community, GAIA, voice, Living, BioCalm,
MicroGrow support, youth services and media.

## Current Blockers

**NONE for content production.** Runtime implementation and testing remain required
before any conformance statement or public launch.

## Accessibility Statement Readiness

Not ready for publication. Scope, test evidence, known limitations, support route,
alternative-format route and review date must be established first.

## Review Decision

**ACCESSIBILITY READINESS - PASS WITH IMPLEMENTATION REQUIREMENTS**

## Remaining Specialist Gates

- WA-05G SEO and Metadata.
- WA-05H Asset Rights, Captions and Alt Text.
- Final specialist closure.
