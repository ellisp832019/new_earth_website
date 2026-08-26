# WA-01 Reading Guide

## Purpose

This directory is the planning foundation for Website V2. It is not a live
implementation plan and does not authorize WordPress, IONOS, deployment, or
redirect changes.

## Recommended reading order

1. `WEBSITE_V2_MASTER_SCOPE.md` - boundaries, phases, and locked purpose.
2. `LIVE_REPOSITORY_PAGE_DECISION_REGISTER.csv` - every current published page
   and its evidence-backed planning state.
3. `V2_PAGE_CAPABILITY_REGISTER.csv` - proposed V2 pages and future-ready
   capabilities.
4. `PRINCIPAL_VISITOR_JOURNEYS.md` - the visitor outcomes the architecture
   should support.
5. `CONTENT_TYPES_TAXONOMY_REQUIREMENTS.md` - the content model needed to scale.
6. `OPEN_QUESTIONS_DECISION_LOG.md` - unresolved decisions and ownership.

## Evidence basis

- Locked repository doctrine: `00_BLUEPRINT/`.
- Existing strategy: `01_STRATEGY/`.
- Existing architecture: `02_INFORMATION_ARCHITECTURE/`.
- Existing content sources: `03_CONTENT/`.
- WordPress guidance: `05_WORDPRESS/`.
- Sanitized WA-00B public and authenticated evidence outside the repository.

## How to use the registers

- Treat KEEP, REWRITE, and other decisions as planning decisions for review,
  not live instructions.
- Treat INVESTIGATE as a deliberate hold, not a missing answer.
- Add evidence before changing a route, legal page, owner, or public claim.
- Keep private platform and operational details out of public content.
- When WA-02 begins, use the page register as the input to route and navigation
  design rather than creating a parallel page list.

## Validation expectations

All committed documents should use repository-relative paths, stable CSV headers,
and plain Markdown links that resolve inside the repository. Sensitive WA-00B
backup contents must remain external.

