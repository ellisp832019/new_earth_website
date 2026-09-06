# New Earth Brand Foundation V0.1

**Status:** Draft canonical foundation for NEDS M01B  
**Milestone:** NEDS-M01B  
**Depends on:** NEDS-M01A Website Brand Extraction  
**Purpose:** Define the shared brand foundation that all New Earth digital products, public surfaces, internal tools, creator lanes and future NEDS implementations inherit before product-specific expression is added.

---

## 1. Foundation statement

New Earth should feel like one coherent family without forcing every product to look identical.

The shared visual character is:

- calm;
- grounded;
- regenerative;
- earth-centred;
- human;
- technically credible;
- uncluttered;
- purposeful;
- accessible;
- truthful.

The design system must support both public-facing storytelling and operational software without drifting into either generic lifestyle branding or dense enterprise-dashboard styling.

The brand foundation owns shared principles and semantic design decisions. Individual products own their specific information architecture, workflows and bounded accent expression.

---

## 2. Brand architecture

The inheritance model is:

`New Earth Brand Foundation -> NEDS semantic tokens/patterns -> product or creator expression -> framework implementation`

### Shared across the family

All New Earth surfaces inherit:

- semantic core colours;
- typography roles;
- spacing rhythm;
- accessibility rules;
- focus behaviour;
- restrained shape/elevation language;
- motion principles;
- imagery truthfulness rules;
- family resemblance requirements.

### Allowed to vary by product

A product may vary:

- density;
- layout;
- navigation model;
- product accent;
- data visualisation treatment;
- domain-specific component patterns;
- imagery emphasis;
- operational versus editorial balance.

A product variation must not override shared accessibility constraints or create a conflicting New Earth identity.

---

## 3. Core semantic colour foundation

The following Direction C values are adopted as **Brand Foundation V0.1 core values**.

| Token role | Value | Purpose |
| --- | --- | --- |
| `surface.base` | `#FCFAF5` | Primary warm surface |
| `surface.alternate` | `#EEF2EE` | Secondary living-neutral surface |
| `text.primary` | `#202522` | Primary readable text |
| `brand.primary` | `#234F43` | Main New Earth forest-teal anchor |
| `brand.deep` | `#17372F` | Deep surfaces, strong hierarchy and depth |
| `accent.systems` | `#3F746B` | Systems, evidence and technical emphasis |
| `accent.gold` | `#8A6F32` | Restrained ceremonial/highlight emphasis |
| `border.subtle` | `#D4DAD4` | Quiet structural boundaries |
| `focus.primary` | `#1A665B` | Keyboard and interaction focus |

### Colour rules

1. Semantic roles are canonical; raw colour names such as `green`, `sage`, `teal` or `gold` are implementation aliases only.
2. `accent.gold` is not a general body-text colour.
3. `accent.systems` must not be the sole carrier of state or meaning.
4. Status always retains text, iconography or another non-colour cue.
5. Product accents may be added only as an extension layer; they do not replace the shared semantic core.
6. Dark-mode values are not defined in V0.1 and must not be guessed independently by product teams.

---

## 4. Accessibility baseline

Accessibility is a foundation constraint, not a downstream styling task.

### Required baseline

- Target WCAG 2.2 AA.
- Normal text contrast target: at least 4.5:1 where applicable.
- Large text contrast target: at least 3:1 where applicable.
- Interactive focus must remain clearly visible.
- Colour is never the only status signal.
- Essential information must not disappear at narrow widths or increased zoom.
- Keyboard operation is required for interactive controls where the platform supports keyboard input.
- Reduced-motion preferences remove non-essential animation.

### Existing contrast evidence inherited from M01A

- `text.primary` on `surface.base`: 14.92:1
- `brand.primary` on `surface.base`: 8.87:1
- `brand.deep` on `surface.alternate`: 11.44:1
- white on `brand.primary`: 9.25:1
- `accent.systems` on `surface.base`: 5.13:1
- `accent.gold` on `surface.base`: 4.57:1

Product-specific combinations still require validation.

---

## 5. Typography foundation

V0.1 adopts role-based system-font stacks rather than mandatory bundled or remote typefaces.

### Display / editorial role

`ui-serif, Georgia, Cambria, "Times New Roman", serif`

Use for:

- major headings;
- vision statements;
- editorial emphasis;
- selected quotes and narrative surfaces.

### Body / interface role

`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

Use for:

- body copy;
- navigation;
- controls;
- forms;
- operational UI;
- metadata.

### Technical role

`ui-monospace, Consolas, monospace`

Use only for:

- identifiers;
- code-like values;
- logs;
- technical diagnostics;
- machine-readable references.

Do not use mono type merely to make an interface appear technical.

### Type metrics

- body line-height: `1.65`
- heading line-height: `1.15`
- default weights: `400`, `500`, `700`

The initial type-role scale is:

`0.8125rem, 0.9375rem, 1rem, 1.25rem, 1.75rem, 2.25rem, 3.5rem`

These are canonical reference sizes, not a requirement that every framework expose identical pixel output.

---

## 6. Spacing foundation

Canonical primitive spacing values:

`4, 8, 12, 16, 24, 32, 48, 64, 96px`

NEDS implementations should expose semantic aliases rather than scattering arbitrary values.

### Semantic spacing aliases

| Token | Value | Typical role |
| --- | ---: | --- |
| `space.xs` | 4px | micro separation |
| `space.sm` | 8px | compact internal spacing |
| `space.md` | 12px | grouped control spacing |
| `space.base` | 16px | default rhythm |
| `space.lg` | 24px | component separation |
| `space.xl` | 32px | section/component grouping |
| `space.2xl` | 48px | major region separation |
| `space.3xl` | 64px | large layout spacing |
| `space.4xl` | 96px | exceptional editorial spacing |

Products may use fewer tokens but should not invent a conflicting rhythm without a documented reason.

---

## 7. Shape, border and elevation

### Shape

- cards: `14px` canonical reference radius;
- controls: `10px` canonical reference radius;
- badges/chips: pill geometry by semantic role;
- universal pill buttons are not part of the foundation.

### Borders

- canonical subtle border: `1px solid #D4DAD4`;
- boundaries must remain understandable without shadow.

### Elevation

The family uses restrained elevation only:

- level 0: flat/default;
- level 1: grouped or lightly raised;
- level 2: temporary emphasis, overlay or strong hierarchy.

Reference soft shadow:

`0 10px 30px rgba(24,52,44,.07)`

Frameworks may translate this to their native elevation system while retaining the visual restraint.

---

## 8. Motion and interaction

Motion exists to explain state and preserve orientation, not to create spectacle.

### Core rules

- standard reference duration: `180ms`;
- transitions should be short and purposeful;
- no parallax or autoplay spectacle as a brand pattern;
- no essential information should depend on motion;
- reduced-motion preferences remove non-essential movement.

### Focus

Canonical reference focus treatment:

- colour: `#1A665B`;
- width: `3px`;
- offset: `3px` reference value.

Framework adapters may alter the implementation mechanism while preserving prominence.

---

## 9. Layout principles

The brand foundation does not impose one application layout.

### Shared principles

- preserve readable text measure;
- bound extremely wide editorial content;
- let application shells use the width needed for operational work;
- prefer content-driven responsive behaviour;
- reflow rather than hide essential information;
- retain clear grouping and visual hierarchy at high zoom and narrow widths.

### Reference measures

- readable editorial measure: approximately `760px`;
- website wide reference: `1200px`;
- website review widths: `480`, `768`, `1024`, `1280px`.

These are references, not universal desktop-application breakpoints.

---

## 10. Imagery foundation

New Earth imagery should feel truthful before it feels impressive.

Preferred qualities:

- warm;
- natural;
- human;
- documentary when depicting real work;
- calm;
- regenerative;
- technically credible where relevant;
- minimally processed.

Every production image should have:

- a focal-point decision;
- contrast/overlay review;
- meaningful alt text or explicit decorative treatment;
- rights confirmation;
- caption/credit handling where relevant.

Concept art and generated imagery must not be presented as documentary evidence of real people, systems or outcomes.

---

## 11. Product and creator inheritance

New Earth products are siblings, not clones.

### Peter / technical systems lane

May use stronger `brand.deep` and `accent.systems` emphasis where technically appropriate while retaining the shared foundation.

### Hayley / Conscious Living lane

May use calmer sage/warm expression and a bounded creator accent while inheriting the shared typography, accessibility, spacing and family identity.

### Engineering applications

Command Centre, NEOS, GAIA, Platform Core, MicroGrow and related tooling may use denser layouts and stronger systems emphasis, but should still inherit the shared semantic tokens and interaction rules.

### Public website

The website remains an editorial/public implementation of the foundation. It is not the owner of all NEDS component patterns.

---

## 12. Token architecture rule

NEDS uses four layers:

1. **Primitive values** — raw values such as `#234F43`, `16px`, `180ms`.
2. **Semantic tokens** — roles such as `brand.primary`, `surface.base`, `space.base`.
3. **Component tokens** — later aliases such as `button.primary.background` or `card.radius`.
4. **Product extensions** — bounded additions for a specific application or creator lane.

Products should consume semantic/component roles rather than hard-coded primitives wherever practical.

V0.1 defines the primitive and semantic foundation. Component-token implementation begins in the NEDS pilot work.

---

## 13. Governance

### Foundation-owned changes

Changes to these require explicit NEDS review:

- core semantic palette;
- typography roles;
- base spacing scale;
- shared accessibility requirements;
- core focus treatment;
- family inheritance model;
- shared motion principles.

### Product-owned changes

Products may independently adjust:

- layout density;
- information architecture;
- navigation;
- product-specific components;
- approved accent extensions;
- platform-native implementation details.

A product must not silently redefine a core semantic token to mean something different.

---

## 14. V0.1 decisions

### NEDS-M01B-DEC-001
Direction C — Earth and Future becomes the initial New Earth Brand Foundation source.

### NEDS-M01B-DEC-002
The nine M01A semantic colour candidates are promoted to Brand Foundation V0.1 core values.

### NEDS-M01B-DEC-003
System serif/sans/mono role stacks are the canonical cross-platform typography foundation. Playfair Display and Inter remain optional product-level choices, not global requirements.

### NEDS-M01B-DEC-004
The 4–96px spacing rhythm becomes the canonical primitive spacing scale, with semantic aliases.

### NEDS-M01B-DEC-005
Product identity is expressed through bounded extensions and component composition, not by redefining the shared brand foundation.

### NEDS-M01B-DEC-006
Dark mode is intentionally deferred until a tested semantic dark palette is designed; products must not independently invent a supposed canonical dark New Earth theme.

### NEDS-M01B-DEC-007
Framework adapters are downstream outputs. CSS, Dart/Flutter and Qt/Python token mappings must derive from the same semantic source rather than becoming separate design authorities.

---

## 15. M01B exit criteria

- [x] Brand character defined.
- [x] Family inheritance model defined.
- [x] Core semantic palette promoted.
- [x] Typography roles promoted.
- [x] Spacing primitives and semantic aliases defined.
- [x] Shape/border/elevation principles defined.
- [x] Motion/focus baseline defined.
- [x] Layout principles separated from website-only rules.
- [x] Imagery rules promoted.
- [x] Product/creator extension rule defined.
- [x] Token layering model defined.
- [x] Governance boundary defined.
- [x] No live UI changed.

**M01B foundation result:** READY FOR PILOT VALIDATION.

The next implementation milestone should validate this foundation through a bounded NEDS pilot rather than attempting a full ecosystem redesign at once.
