# COMPONENT_LIBRARY

## Status
Component Library v1

## Purpose
This file defines the core visual and structural components used across the New Earth website.

The goal is to create a component system that is:
- consistent
- calm
- modular
- easy to build in WordPress
- easy to expand over time

Components are the practical building blocks that sit underneath the page layouts and reusable sections.

---

## CORE PRINCIPLE

A component should solve a repeated design need clearly.

Do not create components for novelty.
Create components for clarity, rhythm, and consistency.

A New Earth component should feel:
- spacious
- grounded
- intentional
- readable
- aligned with the overall system

---

## COMPONENT CATEGORIES

The New Earth component library is divided into six categories:

1. Structural components
2. Typography components
3. Content components
4. Navigation components
5. Action components
6. Utility components

---

## 1. STRUCTURAL COMPONENTS

### Section Wrapper
Purpose:
Creates consistent vertical rhythm and spacing between major sections.

Used for:
- all major page sections

Requirements:
- generous top and bottom spacing
- optional background variation
- supports constrained and wide content

---

### Content Container
Purpose:
Keeps body content readable and controlled.

Used for:
- paragraphs
- manifesto sections
- blueprint sections
- about page copy

Requirements:
- standard readable width
- clean alignment
- supports long-form content

---

### Wide Container
Purpose:
Allows wider layout for grids, timelines, and feature sections.

Used for:
- pillar grids
- system category blocks
- feature layouts
- timeline sections

Requirements:
- wider than normal content
- still visually balanced
- should not feel stretched

---

### Card Surface
Purpose:
Creates a consistent visual container for grouped content.

Used for:
- pillar cards
- feature cards
- journal cards
- future resource cards

Requirements:
- soft border
- light background
- subtle radius
- restrained shadow

---

## 2. TYPOGRAPHY COMPONENTS

### Page Title
Purpose:
Primary title component for top-level pages.

Used for:
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- About
- Contact

Requirements:
- heading font
- spacious scale
- strong visual anchor

---

### Section Heading
Purpose:
Standard section marker across all pages.

Used for:
- all major sections

Requirements:
- consistent spacing
- calm prominence
- readable hierarchy

---

### Supporting Intro
Purpose:
Short text that introduces a section before the main copy.

Used for:
- hero support lines
- grid intros
- transition lines

Requirements:
- lighter visual weight
- clear but understated

---

### Declaration Text
Purpose:
Highlights key New Earth statements.

Used for:
- manifesto lines
- blueprint declarations
- quote bands
- closing statements

Examples:
- Life is interconnected.
- Love becomes structure.
- We choose New Earth.

Requirements:
- more presence than body text
- breathing room around it
- visually memorable without becoming theatrical

---

## 3. CONTENT COMPONENTS

### Hero Block
Purpose:
Introduces the page with immediate orientation.

Includes:
- eyebrow
- page title
- support paragraph
- primary CTA
- secondary CTA

Used for:
- all core pages

---

### Intro Text Block
Purpose:
Introduces a major section with readable narrative copy.

Includes:
- section heading
- short intro
- 1–3 paragraphs
- optional CTA

Used for:
- all text-heavy sections

---

### Three-Card Explanation Block
Purpose:
Explains three linked concepts simply.

Used for:
- Home
- Systems
- future guides

Examples:
- fragmentation / extraction / disconnection
- doctrine / implementation / participation
- awareness / action / stewardship

---

### Pillar Card
Purpose:
Represents one Blueprint pillar in a compact format.

Includes:
- pillar title
- one-line explanation

Used for:
- Home
- Blueprint
- future Resources

Requirements:
- consistent structure
- strong readability
- easy to scan

---

### Feature Item
Purpose:
Represents a MicroGrow or system capability.

Includes:
- feature title
- short explanation

Used for:
- MicroGrow
- future product pages
- future systems tools

---

### Timeline Step
Purpose:
Shows one stage in a sequence.

Includes:
- number
- stage title
- short description

Used for:
- transition path
- roadmap
- phased system development

---

### Journal Card
Purpose:
Represents one Journal article preview.

Includes:
- title
- short description
- category or metadata
- link

Used for:
- Home
- Journal
- future Blueprint support pages

---

## 4. NAVIGATION COMPONENTS

### Main Navigation
Purpose:
Primary site orientation.

Requirements:
- simple
- uncluttered
- top-level only for v1

Items:
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact

---

### Footer Navigation
Purpose:
Secondary orientation and legal access.

Requirements:
- calm
- complete
- low-friction

Includes:
- main content links
- legal links

---

### In-Page Anchor List
Purpose:
Helps with long pages like Blueprint.

Used for:
- Blueprint
- pillar index pages
- future long resource pages

Requirements:
- simple text links
- no heavy styling
- supports clarity, not decoration

---

## 5. ACTION COMPONENTS

### Primary Button
Purpose:
Main action on a section or page.

Style:
- Earth Green background
- light text
- rounded shape
- calm prominence

Examples:
- Explore the Blueprint
- Discover MicroGrow
- Read the Manifesto

---

### Secondary Button
Purpose:
Alternative action without competing too strongly with the main CTA.

Style:
- outlined or lighter style
- same calm design language

Examples:
- Return Home
- Visit the Journal
- Explore Systems

---

### Closing CTA Band
Purpose:
Ends a page with a clear next step.

Includes:
- strong closing line
- support copy
- primary CTA
- optional secondary CTA

Used for:
- all core pages

---

## 6. UTILITY COMPONENTS

### Section Background Variant
Purpose:
Introduces gentle visual rhythm across a page.

Variants:
- off-white
- warm sand
- deep green emphasis section

Use carefully.
Background changes should support pacing, not create noise.

---

### Divider / Separator
Purpose:
Softly marks transitions between content areas.

Requirements:
- subtle
- light
- never aggressive

---

### Form Field
Purpose:
Maintains consistent styling for contact and future forms.

Requirements:
- soft border
- clean padding
- readable labels
- calm focus state

---

## PAGE COMPONENT MAP

### Home
- Hero Block
- Intro Text Block
- Three-Card Explanation Block
- Pillar Card Grid
- Timeline Step Block
- Journal Card Block
- Closing CTA Band

### Manifesto
- Hero Block
- Intro Text Block
- Declaration Text
- Two-column philosophy/practice structure
- Closing CTA Band

### Blueprint
- Hero Block
- Intro Text Block
- Pillar Card Grid
- Timeline Step Block
- Declaration Text
- Closing CTA Band

### Systems
- Hero Block
- Intro Text Block
- Three-Card Explanation Block
- System category cards
- Two-column bridge blocks
- Closing CTA Band

### MicroGrow
- Hero Block
- Intro Text Block
- Feature Item blocks
- Two-column bridge block
- Roadmap / timeline block
- Closing CTA Band

---

## COMPONENT RULES

### Rule 1
Every component must have a clear purpose.

### Rule 2
Every component must be reusable.

### Rule 3
Every component must align with the New Earth tone.

### Rule 4
Do not create multiple versions of the same component too early.

### Rule 5
Refine the core component set before expanding it.

---

## WORDPRESS IMPLEMENTATION NOTE

Most components should map cleanly to WordPress blocks or patterns.

Examples:
- Hero Block -> Group + Heading + Paragraph + Buttons
- Pillar Card -> Group/Card pattern
- Closing CTA -> Group + Heading + Paragraph + Buttons
- Journal Card -> Post template card or manual card layout

The component library should make WordPress easier, not harder.

---

## FINAL COMPONENT TEST

Before adding a new component, ask:

1. Is this already covered by an existing component?
2. Is the need structural or just stylistic?
3. Will this appear more than once?
4. Does it improve clarity?
5. Does it fit the New Earth system?

If the answer is no, simplify.

---

## FINAL RULE

The component library exists to make the website feel like one coherent environment built from a small set of well-designed parts.