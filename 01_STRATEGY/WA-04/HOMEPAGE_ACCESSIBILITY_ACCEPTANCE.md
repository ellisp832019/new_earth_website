# Homepage Accessibility Acceptance

The WA-04A offline prototype is accepted only when the following remain true:

- One descriptive H1 is present.
- Heading levels follow the section order without skipped structural levels.
- A skip link targets the main content.
- Header and footer use labelled landmarks.
- All navigation and cards are usable with keyboard only.
- Mobile navigation has a named button, `aria-expanded`, and focus-visible
  styling; links remain present when JavaScript is unavailable.
- Current-page treatment is communicated by text and style, not colour alone.
- Every image has meaningful alt text or an empty decorative alt attribute.
- Non-critical images are lazy-loaded and have dimensions to reduce layout
  shift; the above-the-fold hero has explicit dimensions and priority.
- Informative image overlays retain readable HTML text and do not put important
  content inside imagery.
- Production placeholders expose an asset ID, subject description, and
  `Production asset required` text to assistive technology and sighted reviewers.
- Focus indicators are visible against adjacent colours.
- Text remains readable at the approved responsive widths and at increased zoom.
- No horizontal overflow is introduced at 320px.
- Reduced-motion preferences remove non-essential transitions.
- Status labels are text labels and are never colour-only.
- Section colour changes support orientation but never replace headings, labels,
  link text, or status text.
- The ecosystem map has an equivalent semantic list.
- Pillar cards retain name, number, description, and action without requiring an
  image; colour and symbols are secondary cues.
- External applications have clear labels, consent/fallback text, and no
  automatic network request.
- No account, form submission, tracker, feed, or live embed is presented as
  available in this offline phase.

Manual review points are desktop 1440px, tablet 768px, and mobile 320px. The
prototype is a planning artifact and does not replace later browser, screen
reader, contrast, or WordPress acceptance testing.
