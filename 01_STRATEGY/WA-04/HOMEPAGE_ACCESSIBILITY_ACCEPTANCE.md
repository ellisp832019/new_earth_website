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
- Non-critical images are lazy-loaded and have dimensions to reduce layout shift.
- Focus indicators are visible against adjacent colours.
- Text remains readable at the approved responsive widths and at increased zoom.
- No horizontal overflow is introduced at 320px.
- Reduced-motion preferences remove non-essential transitions.
- Status labels are text labels and are never colour-only.
- The ecosystem map has an equivalent semantic list.
- External applications have clear labels, consent/fallback text, and no
  automatic network request.
- No account, form submission, tracker, feed, or live embed is presented as
  available in this offline phase.

Manual review points are desktop 1440px, tablet 768px, and mobile 320px. The
prototype is a planning artifact and does not replace later browser, screen
reader, contrast, or WordPress acceptance testing.
