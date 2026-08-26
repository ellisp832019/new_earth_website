# Accessibility Design QA Standard

## Status

WA-03A proposed design standard, targeting WCAG 2.2 AA. No implementation or
audit of the live website is performed here.

## Required design controls

- Keyboard access for every interactive element.
- Visible, non-obscured focus with sufficient contrast and a clear shape change.
- Skip link before main navigation.
- Correct heading order and semantic landmarks.
- Clear link names that make sense out of context.
- Text and meaningful UI contrast at WCAG 2.2 AA thresholds.
- Alternative text for informative images; empty alt for decorative images.
- Captions, transcripts, credits, and descriptions where relevant.
- Labels, instructions, autocomplete, errors, summaries, and success messages for
  forms.
- Minimum 44x44 CSS pixel touch targets.
- Responsive zoom to 200% without loss of content or function.
- Reduced-motion alternative and no essential auto-motion.
- Screen-reader names, roles, values, and state changes.
- Menus and accordions usable by keyboard, touch, and assistive technology.
- Tables with headers and a readable narrow-screen strategy.
- Status and truth information must never rely on colour alone.

## Testing

Automated checks should include axe or equivalent, HTML validation, contrast
testing, link checks, and responsive snapshots. Manual checks must include
keyboard-only navigation, focus order, zoom, reflow, reduced motion, screen
reader naming, form errors, menus, tables, and representative mobile and desktop
layouts.

Test before release and after material changes. Record browser, viewport,
assistive technology, date, tester, findings, and retest result.

## Content and media

Do not publish an image without rights, attribution, suitable alt treatment,
and responsive review. Do not use private screenshots or internal system
controls in public components.
