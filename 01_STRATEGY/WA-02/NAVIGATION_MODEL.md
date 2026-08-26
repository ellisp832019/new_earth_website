# Navigation Model

## Status

WA-02A proposal, 2026-08-26. Planning only; no WordPress menu or template
assignment is changed.

## Recommended primary header

Use a concise seven-item header:

1. Vision - `/vision/`
2. Blueprint - `/blueprint/`
3. Ecosystem - `/ecosystem/`
4. Projects - `/projects/`
5. Journal - `/journal/`
6. About - `/about/`
7. Get Involved - `/get-involved/`

Home is represented by the logo and a persistent Home link on mobile. Do not
place all legal pages, all pillars, systems, creator lanes, or future
capabilities in the primary header.

## Child and dropdown structure

- Blueprint:
  - The 12 Pillars
  - Inner Blueprint
  - Transition Path
  - New Earth Test
- Ecosystem:
  - Ecosystem overview
  - Advanced Technologies
  - Platform Core
  - NEOS
  - GAIA
  - Command Centre
  - Research and Development
- Projects:
  - Projects Directory
  - MicroGrow
- About:
  - About
  - Founder's Journey
  - Team
- Get Involved:
  - Collaborate and Partnerships
  - Community and Start a Circle
  - Support or funding
  - Contact

Dropdowns should not be the only route to a parent page. Each parent remains a
keyboard and touch accessible landing page.

## Secondary navigation

Use contextual secondary navigation for:

- Legal: Privacy, Terms of Use, Cookie Policy, Disclaimer.
- Resources: FAQ and Glossary, Research and Development.
- Blueprint: Pillars, Inner Blueprint, Transition Path, New Earth Test.
- Project: Blueprint Alignment and project-specific support.

## Footer navigation

Recommended footer groups:

- Explore: Vision, Blueprint, Ecosystem, Projects, Journal.
- Participate: About, Collaborate, Contact.
- Learn: Resources, Research and Development.
- Legal: Privacy Policy, Terms of Use, Cookie Policy, Disclaimer.
- Trust: Accessibility statement and company information when verified.

Do not use the existing flat 14-item header/footer as the V2 target. The unused
three-item entity is not assumed to be the live footer.

## Mobile navigation

- Provide a labelled menu button with visible focus.
- Keep Home, Vision, Blueprint, Ecosystem, Projects, Journal, About, and Get
  Involved available without deep nesting.
- Use disclosure controls for children; do not rely on hover.
- Preserve the current location and expanded parent state.
- Ensure Escape closes a disclosure and focus returns to its trigger.
- Prevent background interaction while the menu is modal.

## Contextual navigation

Every hub should expose:

- Current location and purpose.
- Child pages or next steps.
- A route back to its parent.
- A related Blueprint or status context where relevant.
- A clear next action without creating duplicate routes.

Project pages should link to their Blueprint Alignment method and relevant Journal
entries. Journal posts should link to a primary topic, project, pillar, or creator
lane.

## Blueprint and pillar navigation

The Pillars index must list all 12 pillars in approved numerical order, show the current pillar, and provide
previous/next navigation without implying a ranking. Every pillar page links
back to Blueprint and the Pillars index. Pillar navigation must remain usable
with keyboard and assistive technology.

## Breadcrumb rules

Use breadcrumbs on all child pages except Home:

- Home > Blueprint > The 12 Pillars > [Pillar]
- Home > Ecosystem > [System]
- Home > Projects > [Project]
- Home > About > [People page]
- Home > Legal > [Policy]

Breadcrumbs are supplementary navigation, not the only navigation. Use
accessible structured markup and visible text; do not expose private routes.

## Accessibility requirements

Target WCAG 2.2 AA. Navigation acceptance requires:

- Keyboard access to every link, button, disclosure, and submenu.
- Logical focus order and a visible, non-obscured focus indicator.
- No hover-only interaction.
- Correct names, roles, states, and relationships.
- Sufficient contrast and readable target sizes.
- Skip link and landmark structure.
- Responsive testing at narrow and wide viewports.
- Manual testing with assistive technology before release and after material
  navigation changes.

## Implementation boundary

Home is reached through the New Earth logo and normal accessible Home mechanisms.
This model is a WA-02 planning input. It does not authorize editing current
WordPress navigation entity 27, entity 4, entity 2595, or the active footer.
