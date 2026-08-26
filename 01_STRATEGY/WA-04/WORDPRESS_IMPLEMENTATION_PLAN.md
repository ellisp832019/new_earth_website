# WordPress Implementation Plan

**Status:** Planning boundary only; no WordPress changes made

## Canonical implementation boundary

The repository-controlled child theme source is
`06_THEME/new-earth-child/`, containing `style.css`, `theme.json`,
`functions.php`, and the theme notes. This is the source to review for a future
staging implementation. The offline prototype in `01_STRATEGY/WA-04/PREVIEW/`
is not a theme package and must not be copied into production.

## Expected targets

- Full Site Editing global header template part and Navigation block for the
  approved seven-item header.
- Full Site Editing global footer template part with the five approved groups.
- Homepage page content or an FSE front-page template, subject to staging
  verification of the active theme and current Reading settings.
- Reusable patterns for hero, pathway, pillar card, project card, progress,
  participation, external application, and fallback states.
- Navigation entity migration only after a read-only inventory confirms the
  current assignment and a staged rollback exists.

## Existing discrepancies to resolve in staging

The active child theme and parent theme relationship, current navigation entity
assignment, existing template parts, and any package/export differences must be
verified before implementation. The repository does not assume that the
offline HTML maps one-to-one to current WordPress entities. No live setting,
page, theme, plugin, or navigation item may be changed during WA-04A.

## Safe staging and rollback

1. Confirm a current authenticated backup and staging boundary.
2. Export or record the current affected template parts and navigation before
   any change.
3. Implement one shell or homepage slice at a time in staging.
4. Test keyboard, responsive, reduced-motion, links, consent fallback, and
   mobile navigation before proceeding.
5. Keep a dated change log and restore the captured template/navigation state
   if acceptance fails.
6. Promote only after explicit review; do not use WA-04A as deployment
   authorization.

## Explicit boundary

WA-04A creates strategy, registers, and an offline prototype only. It does not
modify the child theme, package files, WordPress, IONOS, live content, media,
plugins, navigation entities, or production assets. Command Centre and
Dashboard functions remain outside the public implementation.
