# External Application Integration Standard

**Status:** Approved V2 planning standard
**Canonical site:** `new-earth.uk`

## Core principles

- `new-earth.uk` remains the canonical source of truth for New Earth content.
- External platforms extend distribution and participation but never own
  canonical content.
- Prefer normal accessible links and privacy-friendly share links.
- Use click-to-load embeds with consent only where third-party content adds
  clear value.
- Do not load automatic social feeds across the website.
- Every integration has an accessible fallback link.
- External destinations and embedded services are clearly labelled.
- API keys, credentials, and tokens never appear in public code or repository
  documentation.
- Every integration is reviewed for privacy, cookies, accessibility,
  performance, security, and service failure.
- The authenticated Command Dashboard must not be publicly embedded.
- Future authenticated integrations belong to V2.x and require separate
  approval.

## Approved V2 approach

| Service | V2 pattern | Required safeguards |
| --- | --- | --- |
| LinkedIn | Clearly labelled profile, organisation, or post link | Normal link, external indicator, accessible fallback to the canonical New Earth page |
| YouTube | Consent-controlled video container or normal video link | No automatic player load, clear consent, captions or transcript/fallback, privacy review |
| Telegram | Clearly labelled public channel or community link | No embedded chat, no automatic feed, accessible fallback to the relevant canonical page |
| GitHub | Clearly labelled public repository or project link | Link to canonical project context, no credentials or private repository details |
| Newsletter/email providers | New Earth-owned signup explanation with a labelled provider handoff or consented form | Explicit consent, privacy notice, provider failure state, accessible non-JavaScript fallback |
| Donations/support services | Clearly labelled support card or link | Purpose, destination, privacy and payment-provider review, accessible fallback |
| Future public applications | External application card, normal link, or consented click-to-load placeholder | Separate service review, canonical context on `new-earth.uk`, no implied availability |

## Component requirements

The design system registers these V2 patterns: External application card,
Social profile link, Privacy-friendly share bar, Click-to-load embed placeholder,
External-link indicator, Integration unavailable/fallback state, and
Consent-controlled video container.

Each pattern must preserve readable labels, keyboard access, visible focus,
responsive layout, and a route back to canonical New Earth content. A service
failure must not remove the underlying page content or its useful next step.

## Review gate

Before implementation, record the service, purpose, canonical page, data flow,
cookies or storage, consent behavior, accessibility fallback, performance
impact, security boundary, failure state, owner, and review date. Public
embeds may not expose private infrastructure, authenticated controls, or
operational data. The authenticated Command Dashboard remains a separate
protected system and is never embedded in the public website.

This document defines the V2 planning boundary only. Implementation, provider
selection, authenticated integrations, and any service credentials require
separate approval.
