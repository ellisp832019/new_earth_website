# Global Shell Specification

**Status:** WA-04A offline implementation baseline
**Source:** Approved WA-02 information architecture and WA-03 Earth and Future design system

## Header

The global header contains the New Earth logo linked to Home, followed by these
seven primary destinations in this order:

1. Vision - `/vision/`
2. Blueprint - `/blueprint/`
3. Ecosystem - `/ecosystem/`
4. Projects - `/projects/`
5. Journal - `/journal/`
6. About - `/about/`
7. Get Involved - `/get-involved/`

The current page receives a text and visual current-page treatment. The header
has a skip-to-content link, a labelled navigation landmark, a keyboard-safe
mobile menu, visible focus, and no hover-only interaction. The offline
prototype uses progressive enhancement: the links remain available when
JavaScript is disabled.

## Footer

The footer uses five labelled groups:

- **Explore:** Vision, Blueprint, Ecosystem, Projects, Journal
- **Participate:** Get Involved, Collaborate, Community, Support
- **Learn:** Resources, Progress, Founder’s Journey, Team
- **Legal:** Privacy Policy, Terms of Use, Cookie Policy, Disclaimer,
  Accessibility
- **Trust:** About, Contact, accessibility statement, and clearly labelled
  external application links

New Earth identity and a concise mission statement appear above the groups.
All destinations are canonical internal links or clearly labelled external
placeholders. No newsletter submission, social feed, tracker, or live embed is
part of this offline phase.

## Approved visual behavior

The shell uses Direction C - Earth and Future: serif headings, readable sans
body text, warm ivory and sage surfaces, restrained gold, moderate corners,
subtle transitions, and reduced-motion support. The logo remains the Home
route. Creator-lane accents are not introduced in the shared shell.

## Implementation boundary

This specification controls the offline prototype and future handoff only. It
does not change the active WordPress navigation, templates, child theme,
plugins, or live content. The future implementation target is documented in
`WORDPRESS_IMPLEMENTATION_PLAN.md`.
