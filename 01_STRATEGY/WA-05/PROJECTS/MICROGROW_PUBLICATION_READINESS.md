# MicroGrow Publication Readiness

## Result

**Status:** BLOCKED FOR PUBLICATION - DERIVATIVES PREPARED, RIGHTS REVIEW OPEN

Review date: 2026-08-28. This is a repository and public-build readiness
record only. No deployment or live-site change was performed.

## Accepted baseline

- MicroGrow detail page visual layout: owner accepted and locked.
- Project Page Pattern V1: owner accepted and locked.
- Projects-index MicroGrow feature: owner accepted and locked.
- Maturity remains `PROTOTYPE`.
- `publicEnabled` remains `false`.

## Gate summary

| Gate | Result | Reason |
| --- | --- | --- |
| Owner content acceptance | PASS | Existing owner acceptance is recorded. |
| Owner visual acceptance | PASS | Existing detail and index acceptance is recorded. |
| Technical claim accuracy | PASS WITH LIMITATIONS | Current copy remains conservative and bounded. |
| Evidence boundary | PASS WITH LIMITATIONS | Captures support existence of interfaces and hardware only. |
| Asset provenance | BLOCKED | Capture provenance is recorded as owner-supplied but requires final evidence record. |
| Ownership and rights | BLOCKED | Rights confirmation for public publication is not recorded. |
| Privacy and sensitive information | PASS WITH LIMITATIONS | Three bounded derivatives remove the identified device/network context; the originals remain excluded. |
| Accessibility | PASS WITH LIMITATIONS | Text and captions exist; final public images require review. |
| Public-build safety | PASS | MicroGrow remains excluded while disabled. |
| Route and link safety | PASS | Local preview route and return link resolve. |
| Public asset readiness | BLOCKED | No capture currently meets every public-use gate. |

## Asset decisions

| Asset | Decision | Controlled reason |
| --- | --- | --- |
| MG-VIS-001 hardware | DERIVATIVE PREPARED / BLOCKED | Web-sized derivative created without content edits; final rights and public-suitability review remain open. |
| MG-VIS-002 dashboard | DERIVATIVE PREPARED / BLOCKED | Desktop/sidebar chrome cropped and device/network context masked; final rights review remains open. |
| MG-VIS-003 diagnostics | DERIVATIVE PREPARED / BLOCKED | Desktop/sidebar chrome cropped and node identifier context masked; final rights review remains open. |
| MG-VIS-004 splash | HOLD | Development and readiness language cannot be removed without changing the evidence meaning; rights review also remains open. |

Three public-safe derivatives were created in the governed evidence folder;
the original evidence files remain unchanged. The derivatives are not
public-enabled because rights/publication approval is not recorded.

## Deferred legacy route

When MicroGrow is approved for public publication, the legacy `/microgrow/`
route must redirect to `/projects/microgrow/`. This redirect is recorded for
later implementation and is not applied in this pass.

## Claim boundary

The page continues to avoid claims of production readiness, commercial
availability, complete physical validation, multi-node capability, cloud
availability, autonomous growing or guaranteed outcomes. The images must not
be used to imply those claims.

## Required next gate

Obtain explicit rights/provenance confirmation and owner review of the three
derivatives. Obtain a separate decision on whether the splash visual should be
replaced or remain held. Re-run this publication gate before considering any
change to `publicEnabled`.
