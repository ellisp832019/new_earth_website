# Responsive Layout Rules

## Status

Proposed, mobile-first, 2026-08-26. No CSS or theme implementation is included.

## Containers and breakpoints

- Base: 100% width with 1rem minimum side padding.
- Reading container: 65-78ch, capped near 760px.
- Wide container: capped near 1200px for grids and navigation.
- Breakpoints are content-driven, with proposed review points near 480px,
  768px, 1024px, and 1280px. Do not target devices as fixed assumptions.
- Preserve usable layout at 320px, 200% zoom, landscape, and large screens.

## Grid and spacing

Use a 4px base rhythm with proposed steps 4, 8, 12, 16, 24, 32, 48, 64,
and 96px. Prefer gap and padding tokens over one-off margins.

- One column by default.
- Two columns when content remains readable.
- Three or four columns only when cards retain useful measure.
- Collapse cards before text becomes cramped.
- Keep primary actions visible without forcing horizontal scrolling.

## Header and navigation

Mobile starts with logo, accessible menu button, and clear current-location
state. Disclosure menus must work without hover. Focus must return to the trigger
when a menu closes. Desktop navigation may use dropdowns, but parent landing
pages remain reachable.

## Heroes and imagery

Use aspect-ratio boxes and object-position focal points. Keep text in a stable
content layer rather than relying on unreadable image areas. On narrow screens,
crop conservatively or reduce image height; never stretch images. Provide a
solid or translucent surface behind text when contrast requires it.

## Cards and pillars

Cards stack to one column on narrow screens, two when measure permits, and three
only on wide containers. Pillar navigation remains ordered and scroll-safe, with
previous/next controls that do not rely on colour.

## Forms, tables, and long form

- Form fields stack on narrow screens and preserve labels above controls.
- Error text appears adjacent to the field and in a summary.
- Tables gain a readable responsive treatment; avoid hidden essential columns.
- Journal, research, and legal content uses a reading measure and generous
  vertical rhythm.
- Avoid horizontal scrolling for prose.

## Touch and motion

- Minimum interactive target: 44x44 CSS pixels.
- Respect `prefers-reduced-motion: reduce`.
- Default motion is short, purposeful, and never required to understand content.
- Never use parallax or auto-rotating content as the only way to discover meaning.

## Large screens and landscape

Use wider whitespace and grids without stretching reading text. Keep hero focal
points and navigation stable in landscape. Test keyboard focus after every
responsive state transition.
