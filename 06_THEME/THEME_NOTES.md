# Theme Notes

Child theme folder:
/06_THEME/new-earth-child/

Start simple and keep the theme maintainable.
# THEME_NOTES

## Status
Theme Notes v1

## Purpose
This file defines how the New Earth child theme should be used and expanded.

The goal is to keep the theme:
- simple
- calm
- maintainable
- scalable
- aligned with the New Earth design system

---

## THEME STRATEGY

The New Earth child theme should begin as a light foundation layer.

It is not meant to become a bloated custom theme immediately.

Version 1 should focus on:
- color system
- typography system
- spacing rhythm
- reusable styling
- WordPress block compatibility
- clean visual identity

Start with structure, not complexity.

---

## PARENT THEME

Recommended parent theme:
**Twenty Twenty-Four**

Reason:
- stable
- block-theme friendly
- modern WordPress compatible
- good base for gradual customization

The child theme should inherit stability from the parent while adding New Earth identity.

---

## CHILD THEME PURPOSE

The child theme exists to hold:
- New Earth visual identity
- typography rules
- color tokens
- spacing rhythm
- reusable styling conventions
- future template refinements

It should not be overloaded with unnecessary custom code in version 1.

---

## CURRENT FILES

### `style.css`
Purpose:
- theme declaration
- base visual rules
- custom utility styling
- polish layer

### `functions.php`
Purpose:
- enqueue child stylesheet
- later register patterns or theme support additions if needed

### `theme.json`
Purpose:
- define palette
- define typography presets
- define spacing system
- define block-level default styling
- create WordPress editor consistency

---

## DESIGN INTENT

The theme should feel:

- grounded
- calm
- spacious
- intelligent
- natural
- quietly refined

It should not feel:

- corporate SaaS
- generic tech startup
- dark cyber aesthetic
- over-designed spiritual branding
- cluttered magazine layout

This is a living framework, not a flashy campaign site.

---

## VISUAL PRIORITIES

### 1. Readability
Content must remain easy to read across all major pages.

### 2. Hierarchy
Headings, paragraphs, cards, and CTAs must feel clearly organized.

### 3. Rhythm
Spacing is as important as color and type.

### 4. Restraint
Use styling to support the message, not overpower it.

### 5. Coherence
MicroGrow must feel like part of New Earth, not like a separate visual brand.

---

## V1 THEME RESPONSIBILITIES

For version 1, the theme should handle:

- brand colors
- heading and body font direction
- button styling
- content width
- wide width
- block spacing defaults
- card styling
- quote styling
- background tone consistency
- form polish

That is enough for a strong first build.

---

## WHAT NOT TO DO YET

Do not rush into:

- complex PHP template overrides
- over-customized archive systems
- heavy animation systems
- custom post type complexity unless needed
- large JavaScript dependencies
- multiple competing style files
- visual experiments that break coherence

The theme should grow slowly and deliberately.

---

## RECOMMENDED BUILD ORDER

### Phase 1
Activate parent theme and confirm site works.

### Phase 2
Add the child theme files:
- style.css
- functions.php
- theme.json

### Phase 3
Activate the child theme and confirm:
- colors apply
- widths apply
- typography presets appear
- buttons look correct
- editor and frontend remain stable

### Phase 4
Create reusable WordPress patterns aligned with the section library.

### Phase 5
Only after the main pages are built, consider deeper theme enhancements.

---

## WORDPRESS EDITOR RELATIONSHIP

The child theme should improve the WordPress editor experience, not fight it.

That means:
- the editor should reflect the site palette
- typography presets should be available in the editor
- spacing should be predictable
- reusable sections should fit naturally into the theme

The goal is to make WordPress easier to build with.

---

## MICROGROW RELATIONSHIP

The MicroGrow page should use the same theme system.

It can feel slightly firmer and more structured, but it must remain inside the same visual world:
- same palette family
- same type system
- same spacing discipline
- same calm tone

---

## FUTURE THEME EXPANSION

Later additions may include:
- custom block pattern registration
- pattern categories
- template part refinements
- page-specific template polish
- journal index styling
- pillar grid styling
- MicroGrow subpage refinements

But only add these once the page foundation is stable.

---

## QUALITY CHECK

Before making deeper theme changes, confirm:

1. Does the current theme already solve the real need?
2. Is this change structural or just decorative?
3. Will this still make sense as the site grows?
4. Does this improve clarity?
5. Does this remain aligned with the New Earth design system?

If not, simplify.

---

## FINAL RULE

The child theme should feel like a quiet, well-built environment that allows the New Earth message to speak clearly.