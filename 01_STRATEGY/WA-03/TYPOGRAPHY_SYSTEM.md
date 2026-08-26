# Typography System

## Status

Proposed, 2026-08-26. Fonts are not downloaded, loaded, or implemented by WA-03A.

## Roles

- Display headings: a restrained serif for Vision, Blueprint, Manifesto, quotes,
  and major page openings.
- Reading body: a privacy-respecting sans-serif for paragraphs, navigation,
  forms, Journal metadata, and legal pages.
- Labels and navigation: the same sans in medium or semibold weight with clear
  casing; avoid all-caps paragraphs.
- Quotes: serif display with short measure and an attribution line.
- Technical/status information: sans-serif, tabular-friendly numerals where
  useful, paired with visible text labels and evidence dates.
- Journal: readable sans body with serif title option; prioritize long-form
  comfort over decorative contrast.
- Legal: sans body, explicit headings, dates, definitions, and link clarity.

## Proposed responsive scale

| Token | Mobile | Wide | Use |
| --- | --- | --- | --- |
| text-xs | 0.8125rem | 0.875rem | metadata |
| text-sm | 0.9375rem | 1rem | labels and supporting text |
| text-md | 1rem | 1.125rem | body |
| text-lg | 1.25rem | 1.5rem | lead and card titles |
| text-xl | 1.75rem | 2.25rem | section headings |
| text-2xl | 2.25rem | 3.5rem | page titles |
| text-3xl | 2.75rem | 5rem | hero titles |

Use fluid interpolation only where zoom and wrapping remain predictable.

## Rules

- Body line-height: 1.55-1.75.
- Heading line-height: 1.1-1.25.
- Reading measure: 60-75 characters where practical.
- Legal and Journal text may use 65-78 characters if testing confirms comfort.
- Never communicate status through type size or colour alone.
- Use real heading hierarchy, not visual styling to simulate headings.
- Avoid justified text and long all-caps passages.
- Underline body links or provide another persistent link distinction.

## Loading and privacy

Prefer system stacks for first release:

- Sans: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.
- Serif: `ui-serif, Georgia, Cambria, "Times New Roman", serif`.
- Monospace: `ui-monospace, "SFMono-Regular", Consolas, monospace`.

A future self-hosted font may be evaluated only with licensing, performance,
privacy, fallback, and accessibility review. Do not use external font CDNs or
remote scripts.

## Content constraints

Headings should communicate purpose, not marketing volume. Keep hero titles
short. Preserve readable line lengths on mobile, landscape, zoom, and assistive
technology. Test at 200% zoom and narrow widths before acceptance.
