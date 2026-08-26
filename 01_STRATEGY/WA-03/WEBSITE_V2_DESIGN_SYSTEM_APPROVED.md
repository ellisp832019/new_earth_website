# Website V2 Design System - Approved Baseline

**Status:** Approved 2026-08-26
**Scope:** Planning baseline only; implementation validation remains required.

## Approved direction

Direction C - Earth and Future is the approved visual direction. It is calm,
grounded, regenerative, earth-centred, and technically credible. Direction A
- Regenerative Foundation and Direction B - Living Systems remain historical
comparison evidence and are not selected.

## Colour and contrast

The approved semantic palette is:

| Role | Value | Use |
| --- | --- | --- |
| Surface base | `#FCFAF5` | Primary page surface |
| Surface alternate | `#EEF2EE` | Sections and cards |
| Ink | `#202522` | Body text and headings |
| Brand primary | `#234F43` | Links, headings, and primary action |
| Brand deep | `#17372F` | Dark surfaces and hover states |
| Systems accent | `#3F746B` | Systems and approved creator emphasis |
| Restrained gold | `#8A6F32` | Small highlights, rules, and approved emphasis only |
| Border | `#D4DAD4` | Dividers and control boundaries |
| Focus | `#1A665B` | Visible keyboard focus indicator |

Gold is not body text and colour is never the only status signal. Contrast
targets are WCAG 2.2 AA: body text at least 4.5:1, large text at least 3:1,
and non-text focus indicators visibly distinct.

## Typography

- Headings: `ui-serif, Georgia, Cambria, "Times New Roman", serif`
- Body: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Arial, sans-serif`
- No external font request or remote font dependency.
- Headings use a measured responsive scale; body text prioritises readable line
  length and clear metadata.
- Implementation must preserve the approved fallback stacks and verify the
  final rendered sizes and line heights.

## Layout and shape

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- Content measure: 760px; wide layout maximum: 1200px.
- Breakpoint review points: 480, 768, 1024, and 1280px.
- Cards use moderate 12-16px corners.
- Controls use 8-12px corners.
- Badges use pill geometry.
- Borders are quiet and shadows are restrained; elevation must not replace
  structure, contrast, or clear grouping.

## Components and interaction

The registered component patterns cover navigation, skip link, hero, section
header, cards, content blocks, buttons, links, forms, accordions, tables,
badges, notices, pagination, breadcrumbs, media, footer groups, and creator
lanes. Buttons and links require clear text, visible focus, hover and active
states, and keyboard access. Statuses use text labels as well as any visual
indicator.

Motion is subtle and purposeful. No parallax, autoplay spectacle, or essential
motion is permitted. Reduced-motion preferences remove non-essential movement.

## Imagery and content safety

Images should be warm, natural, truthful, and documentary rather than generic
or over-processed. Every production image requires a focal-point decision,
appropriate overlay contrast, meaningful alt text, caption and credit handling,
and confirmed rights. Reference assets are not public production assets unless
approved.

## Creator lanes

Peter and Hayley share the same core layout, typography, accessibility, and
component system. Peter's lane may use a deeper technical/earth emphasis;
Hayley's lane may use a calm sage/warm emphasis. Only one accent is used at a
time, accents must meet contrast requirements, and no Hayley content is created
or published without approval.

## Responsive and WordPress boundary

The system must remain usable at mobile, tablet, and desktop widths, with
content reflow rather than hidden essential information. The WordPress pattern
mapping is a planning handoff only. No theme, template, page, plugin, live
content, or production asset has been changed by WA-03.

The public Command Centre information page remains within the public website
scope. The authenticated New Earth Dashboard and private Command Dashboard
remain separate protected systems; no private controls, credentials,
infrastructure, or operational functions are included here.

## Change control

This document is the approved planning baseline for WA-03. Future changes to
tokens, components, imagery rights, creator accents, or accessibility rules
require an explicit review and must preserve the approved direction unless a
new approval supersedes it. Values marked as approved principle still require
implementation validation before production use.
