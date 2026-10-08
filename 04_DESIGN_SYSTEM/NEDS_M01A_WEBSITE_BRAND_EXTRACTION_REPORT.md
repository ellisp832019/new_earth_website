# NEDS M01A — Website Brand Extraction Report

**Status:** Evidence baseline / documentation only  
**Repository:** `ellisp832019/new_earth_website`  
**Source branch audited:** `main`  
**Purpose:** Identify which current New Earth website design decisions are suitable for promotion into the future New Earth Brand Foundation and NEDS, without changing production UI.

## 1. Executive conclusion

The website already contains a mature design-system lineage. NEDS should not copy the older WordPress design system wholesale and should not invent a new brand from scratch.

The strongest current authority is the approved Website V2 WA-03 **Direction C — Earth and Future**, reconciled against the active Astro implementation under `src/`.

Recommended direction:

1. Preserve the New Earth visual character: calm, grounded, regenerative, earth-centred, uncluttered, technically credible.
2. Promote approved semantic brand roles rather than WordPress-specific names or hard-coded component values.
3. Treat WA-03 approved values as canonical **candidates** until NEDS M01B formally adopts them.
4. Use the active Astro implementation as implementation evidence, not as automatic design-system authority where it diverges from approved WA-03 values.
5. Keep website content/page patterns separate from ecosystem-wide software/UI patterns.

No production UI changes are part of M01A.

---

## 2. Source precedence used

Per `AGENTS.md`, current explicit Website V2 control and approved work-package authority take precedence over historical/reference material.

For this extraction the precedence is:

1. `01_STRATEGY/WA-03/WEBSITE_V2_DESIGN_SYSTEM_APPROVED.md`
2. `01_STRATEGY/WA-03/DESIGN_TOKENS_PROPOSED.csv`
3. `01_STRATEGY/WA-03/COLOUR_ACCESSIBILITY_MATRIX.csv`
4. Active Astro implementation: `src/styles/global.css`
5. Earlier `04_DESIGN_SYSTEM/*` guidance
6. Legacy WordPress child-theme values under `06_THEME/new-earth-child/`

This prevents older WordPress values from being mistaken for the current approved visual baseline.

---

## 3. Brand direction to promote

### PROMOTE TO NEW EARTH BRAND FOUNDATION

- Calm over clutter.
- Structure over novelty.
- Regenerative, earth-centred visual character.
- Natural warmth combined with technical credibility.
- Clear, truthful, documentary imagery rather than generic or over-processed imagery.
- Restrained accent use rather than neon/futurist styling.
- Accessibility as a design constraint, not a later patch.
- Shared family identity with controlled product/creator accents.
- Content and meaning lead; visual treatment supports them.

### DO NOT PROMOTE AS GLOBAL RULES

- WordPress block mappings.
- Website-specific hero/page-flow structures.
- Website navigation information architecture.
- Website-only editorial patterns such as pillar grids and journal cards.
- Historical Playfair Display / Inter dependency as a mandatory ecosystem font pairing.

---

## 4. Canonical colour candidates

WA-03 Direction C supersedes the earlier WordPress palette for future canonical consideration.

| Semantic role | Candidate | M01A decision | Notes |
| --- | --- | --- | --- |
| `surface.base` | `#FCFAF5` | PROMOTE CANDIDATE | Warm primary surface |
| `surface.alternate` | `#EEF2EE` | PROMOTE CANDIDATE | Living neutral / section surface |
| `text.ink` | `#202522` | PROMOTE CANDIDATE | Primary readable ink |
| `brand.primary` | `#234F43` | PROMOTE CANDIDATE | Forest-teal New Earth anchor |
| `brand.deep` | `#17372F` | PROMOTE CANDIDATE | Dark surfaces / depth |
| `accent.systems` | `#3F746B` | PROMOTE CANDIDATE | Systems/evidence accent; retain text labels |
| `accent.gold` | `#8A6F32` | PROMOTE CANDIDATE | Restrained ceremonial/highlight role only |
| `border.subtle` | `#D4DAD4` | PROMOTE CANDIDATE | Quiet structural boundary |
| `focus.primary` | `#1A665B` | PROMOTE CANDIDATE | Explicit keyboard focus colour |

### Accessibility evidence

The WA-03 contrast matrix records passing AA contrast for the intended Direction C pairings, including:

- ink on base: 14.92:1
- brand primary on base: 8.87:1
- brand deep on alternate: 11.44:1
- white on brand primary: 9.25:1
- systems accent on base: 5.13:1
- gold on base: 4.57:1

Gold remains a restrained accent and should not become general body copy.

---

## 5. Typography candidates

### Approved current direction

**Display / headings**

`ui-serif, Georgia, Cambria, "Times New Roman", serif`

**Body / interface**

`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif`

**Technical labels only**

`ui-monospace, Consolas, monospace`

### M01A decision

**PROMOTE CANDIDATE** as the cross-platform foundation because it:

- has no remote font dependency;
- is privacy-friendly;
- maps cleanly across web and desktop/mobile frameworks;
- separates expressive headings from highly readable interface/body text;
- avoids forcing every New Earth product to ship the same font files.

The earlier Playfair Display + Inter pairing remains useful historical brand evidence but should not be promoted as the mandatory ecosystem-wide typography implementation.

### Candidate type metrics

- body line-height: `1.65`
- heading line-height: `1.15`
- type-role scale principle: `0.8125, 0.9375, 1, 1.25, 1.75, 2.25, 3.5rem`, fluid where appropriate
- weights: 400 / 500 / 700

These remain implementation-validation candidates for M01B rather than frozen universal component sizes.

---

## 6. Spacing, layout and geometry candidates

### PROMOTE CANDIDATES

**Spacing rhythm**  
`4, 8, 12, 16, 24, 32, 48, 64, 96px`

**Readable content measure**  
`760px` target for long-form website reading. For NEDS this should become a semantic readable-measure principle rather than a mandatory width for every application.

**Wide layout maximum**  
`1200px` website candidate. NEDS should preserve the concept of bounded wide content while allowing application-shell-specific behaviour.

**Breakpoint review points**  
`480, 768, 1024, 1280px` as website validation points. These should not automatically become fixed cross-framework breakpoints; NEDS should prefer content-driven responsive behaviour.

**Shape**

- cards: moderate `12–16px` radius range; current candidate `14px`
- controls: `8–12px` radius range
- badges/chips: pill geometry where semantically appropriate
- borders quiet but visible
- shadows restrained and never the only grouping cue

### REFINE

Do not promote universal `999px` button geometry. WA-03 intentionally moved normal controls toward moderate corners while preserving pill geometry for badges/chips and selected compact controls.

---

## 7. Interaction and accessibility candidates

### PROMOTE

- WCAG 2.2 AA target.
- Body text minimum 4.5:1 contrast where applicable.
- Large text minimum 3:1 where applicable.
- Visible keyboard focus; never remove focus styling.
- Colour must never be the only status signal.
- Buttons and links require clear text plus focus, hover and active states.
- Keyboard access is mandatory.
- Essential information must reflow rather than disappear at smaller widths.
- Motion must be subtle and purposeful.
- `prefers-reduced-motion` must remove non-essential motion.
- No essential interaction may depend on decorative animation.

### TOKEN CANDIDATES

- `focus.primary`: `#1A665B`
- focus ring: `3px solid` candidate with suitable offset
- standard motion duration: `180ms` candidate
- elevation levels: `0, 1, 2` principle only

---

## 8. Imagery rules to promote

### PROMOTE TO BRAND FOUNDATION

Images should be:

- warm;
- natural;
- truthful;
- documentary where representing real work;
- restrained rather than generically futuristic or heavily processed.

Production imagery should include:

- focal-point decision;
- overlay/contrast review;
- meaningful alt text or explicit decorative treatment;
- caption/credit handling where needed;
- confirmed usage rights.

Conceptual imagery must not be presented as documentary evidence.

---

## 9. Creator and product family rule

WA-03 already contains a useful precursor to the wider New Earth brand-family model:

- shared core layout, typography, accessibility and component principles;
- controlled product/creator accents;
- one accent emphasis at a time;
- accent use must retain contrast and accessibility.

For NEDS this should be generalized as:

**Shared New Earth Brand Foundation → platform/design-system implementation → controlled product expression.**

Hayley’s Conscious Living design system should therefore remain a sibling implementation that inherits shared New Earth foundations rather than becoming part of the software component library.

---

## 10. Active Astro implementation reconciliation

`src/styles/global.css` contains both an earlier Astro style layer and a later accepted WA-04 palette/hierarchy override. CSS cascade means the later declarations win where the same custom property or selector is redefined.

### ALIGNED WITH APPROVED DIRECTION C

The later Astro layer adopts:

- `--ink: #202522`
- `--forest: #234f43`
- `--deep: #17372f`
- `--ivory: #fcfaf5`
- `--sage: #eef2ee`
- `--gold: #8a6f32`
- `--teal: #3f746b`
- `--line: #d4dad4`
- `--focus: #1a665b`
- system serif and sans stacks
- moderate `10px` normal button radius
- restrained motion with reduced-motion handling
- visible focus treatment

### IMPLEMENTATION DRIFT / CLEANUP CANDIDATES

M01A found several values from the earlier Astro layer that can remain active where later selectors do not override them:

1. `--green: #174d36` remains defined and is still referenced by some rules, including the original `.button` background and some visual treatments. This differs from approved `brand-primary #234F43`.
2. `--max: 1180px` remains defined, although later `.shell` uses an explicit `1200px`, producing two wide-width concepts in the same stylesheet.
3. The initial palette variables (`--sand`, `--cream`, `--brown`, etc.) coexist with later semantic Direction C variables, increasing naming and maintenance drift.
4. The stylesheet contains legacy and accepted layers in one file rather than a clean semantic token block, making source-of-truth interpretation harder than necessary.
5. Some compact controls remain pill-shaped. This is acceptable only when the control role justifies it; normal action buttons now use moderate corners.

These are **website remediation observations only**. M01A does not change them.

---

## 11. Classification summary

| Area | Decision |
| --- | --- |
| Earth/Future brand character | PROMOTE |
| Direction C semantic palette | PROMOTE CANDIDATE |
| System serif/sans/mono font roles | PROMOTE CANDIDATE |
| 4–96px spacing rhythm | PROMOTE CANDIDATE |
| 760px readable measure principle | PROMOTE AS SEMANTIC PRINCIPLE |
| 1200px website wide bound | PROMOTE AS WEBSITE REFERENCE / NEDS ADAPT |
| Moderate card/control radii | PROMOTE CANDIDATE |
| Pill badges/chips | PROMOTE BY ROLE |
| Universal pill buttons | DO NOT PROMOTE |
| Explicit focus token | PROMOTE |
| WCAG 2.2 AA target | PROMOTE |
| Reduced-motion handling | PROMOTE |
| Restrained elevation | PROMOTE |
| Truthful/documentary imagery rule | PROMOTE |
| WordPress block mappings | WEBSITE ONLY |
| Website page-flow patterns | WEBSITE ONLY |
| Playfair/Inter as mandatory global fonts | HISTORICAL / DO NOT PROMOTE |
| Astro legacy CSS aliases | REFINE IN LATER WEBSITE REMEDIATION |

---

## 12. M01A decisions

### NEDS-M01A-DEC-001
The New Earth Brand Foundation should evolve from the approved Website V2 Direction C baseline rather than the older WordPress palette.

### NEDS-M01A-DEC-002
NEDS should use semantic token names. Product/framework adapters may map them to CSS, Dart, Qt/Python or other platform-specific names later.

### NEDS-M01A-DEC-003
The active website is evidence and a consumer of the future foundation; it is not itself the owner of all ecosystem design rules.

### NEDS-M01A-DEC-004
Website-specific content patterns remain in the website design system. NEDS owns cross-application interaction/component standards only when proven reusable.

### NEDS-M01A-DEC-005
No production UI remediation is included in M01A. Drift discovered here becomes later bounded work.

---

## 13. Recommended M01B input set

M01B — **New Earth Brand Foundation V0.1 + Core NEDS Tokens** should begin from:

1. Direction C semantic palette.
2. system serif / sans / mono role model.
3. 4–96px spacing scale.
4. semantic radii and boundary roles.
5. focus/accessibility tokens.
6. restrained motion/elevation principles.
7. brand imagery principles.
8. product-family inheritance rules.

M01B should convert these candidates into a vendor-neutral canonical token source before generating framework adapters.

---

## 14. Exit criteria

M01A is ready for closeout when:

- [x] current Website V2 authority identified;
- [x] historical WordPress baseline separated from current approved direction;
- [x] active Astro implementation inspected;
- [x] semantic palette extracted;
- [x] typography roles extracted;
- [x] spacing/layout/shape candidates extracted;
- [x] accessibility and interaction principles extracted;
- [x] implementation drift recorded without remediation;
- [x] website-only patterns separated from ecosystem candidates;
- [x] M01B input set defined;
- [x] no production UI changed.

**M01A result:** PASS — ready for review and M01B planning.