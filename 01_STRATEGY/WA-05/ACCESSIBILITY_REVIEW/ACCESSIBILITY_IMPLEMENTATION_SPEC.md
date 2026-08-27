# Accessibility Implementation Specification

## Target and Status

Build toward WCAG 2.2 AA. This specification is not a conformance claim. Rendered
WordPress output requires automated and manual testing.

## MUST FOR V2

- Use `header`, `nav`, `main`, `footer` and section landmarks appropriately.
- Provide a first-focusable `Skip to main content` link.
- Use one page H1, logical H2/H3 order and a document language declaration.
- Use native links for navigation and native buttons for actions.
- Give every interactive control a clear accessible name and link purpose.
- Ensure keyboard operation, no traps, logical focus order and visible focus.
- Keep focus unobscured by sticky headers and provide adequate scroll offset.
- Use informative alt text, empty alt for decoration and adjacent text alternatives
  for complex diagrams.
- Never communicate essential status by colour alone.
- Meet tested WCAG text and non-text contrast requirements using final values.
- Preserve content at text resize 200% and reflow/zoom testing targets.
- Avoid horizontal overflow, clipping and content hidden by responsive layout.
- Honour `prefers-reduced-motion`; provide pause/stop for future moving content.
- Label external links and provide accessible fallbacks for future embeds.

## SHOULD FOR NEW EARTH USABILITY

- Prefer approximately 44 by 44 CSS-pixel comfortable primary touch targets. This
  is a usability preference, not a claimed WCAG AA threshold.
- Keep sections short, headings descriptive and unfamiliar terms explained.
- Use consistent labels, calm transitions, clear next actions and progressive disclosure.
- Make error recovery obvious and keep essential actions visible.
- Provide more than one route to important content where appropriate.

## Global Shell

The header must contain the approved seven-item navigation, keyboard-operable mobile
menu behaviour and a visible focus state. The footer must preserve five groups and
remain reachable without visual-only controls.

## Content and Cards

Cards must have semantic headings, meaningful link names and a logical DOM order.
Do not make an entire card an ambiguous nested link. Image and text must not split
meaning between visual position and source order.

## Images, Diagrams and Icons

Use alt text for purpose, not a visual inventory. Decorative imagery is ignored by
assistive technology. Complex relationships receive adjacent structured text. Icons
that convey meaning need a label; decorative icons are hidden.

## Forms and Errors

Forms are deferred. Before activation, use explicit labels, instructions,
autocomplete where appropriate, required-field indication, programmatic errors,
error summaries and privacy explanation. Provide CAPTCHA alternatives if needed.

## Future Media, Documents and Integrations

Future video/audio needs captions, transcript and controls. Future downloads need
semantic headings, selectable text, tagged PDFs where used, bookmarks where useful,
accessible links, table headers, alt text and language metadata. Click-to-load embeds
must have consent and a text/link fallback.

## FUTURE ACTIVATION REQUIREMENT

Accounts, forms, checkout, subscriptions, community, GAIA, voice interfaces,
New Earth Living, BioCalm, MicroGrow support, youth services and creator downloads
must pass their dedicated accessibility gates before activation.
