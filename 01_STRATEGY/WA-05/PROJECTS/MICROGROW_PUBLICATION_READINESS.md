# MicroGrow Publication Readiness

## Result

**Status:** MICROGROW PUBLICATION READY - PENDING OWNER DERIVATIVE VISUAL ACCEPTANCE

Review date: 2026-08-28. This is a repository and public-build readiness
record only. No deployment or live-site change was performed.

## Accepted baseline

- MicroGrow detail page visual layout: owner accepted and locked.
- Project Page Pattern V1: owner accepted and locked.
- Projects-index MicroGrow feature: owner accepted and locked.
- Maturity remains `PROTOTYPE`.
- `publicEnabled` remains `false` pending visual acceptance of the three
  public-safe derivatives.

## Gate summary

| Gate | Result | Reason |
| --- | --- | --- |
| Owner content acceptance | PASS | Existing owner acceptance is recorded. |
| Owner visual acceptance | PASS | Existing detail and index acceptance is recorded. |
| Technical claim accuracy | PASS WITH LIMITATIONS | Current copy remains conservative and bounded. |
| Evidence boundary | PASS WITH LIMITATIONS | Captures support existence of interfaces and hardware only. |
| Asset provenance | PASS | Peter has confirmed that the captures were created by him for New Earth/MicroGrow. |
| Ownership and rights | PASS | Peter has authorised the public-safe derivatives for publication on `new-earth.uk`. |
| Privacy and sensitive information | PASS WITH LIMITATIONS | Three bounded derivatives remove the identified device/network context; the originals remain excluded. |
| Accessibility | PASS WITH LIMITATIONS | Text and captions exist; final public images require review. |
| Public-build safety | PASS | MicroGrow remains excluded while disabled. |
| Route and link safety | PASS | Local preview route and return link resolve. |
| Public asset readiness | PASS WITH OWNER REVIEW REQUIRED | Three public-safe derivatives are prepared; owner visual acceptance remains open. |

## Asset decisions

| Asset | Decision | Controlled reason |
| --- | --- | --- |
| MG-VIS-001 hardware | PENDING OWNER DERIVATIVE VISUAL ACCEPTANCE | Web-sized derivative created without content edits. |
| MG-VIS-002 dashboard | PENDING OWNER DERIVATIVE VISUAL ACCEPTANCE | Desktop/sidebar chrome cropped and device/network context masked. |
| MG-VIS-003 diagnostics | PENDING OWNER DERIVATIVE VISUAL ACCEPTANCE | Desktop/sidebar chrome cropped and node identifier context masked. |
| MG-VIS-004 splash | OMIT FROM FIRST PUBLIC RELEASE | Development/readiness language is retained in the local evidence source; no derivative is required. |

Three public-safe derivatives were created in the governed evidence folder;
the original evidence files remain unchanged. Peter's owner declaration
confirms first-party provenance and publication authorisation. The derivatives
remain disabled until Peter accepts their exact visual presentation in the
existing local MicroGrow preview.

## Owner declaration

Peter confirmed:

> I confirm the MicroGrow hardware photos and software screenshots were
> captured/created by me for New Earth/MicroGrow, and I authorise their
> public-safe derivatives for publication on new-earth.uk.

This confirms first-party capture provenance and publication authority for the
three derivatives. It does not transfer ownership of incidental operating
system, application, library or third-party trademark elements.

## First public evidence baseline

The first public MicroGrow release requires exactly three evidence visuals:
hardware, dashboard and diagnostics. The splash-screen capture is explicitly
omitted from this release and is not a publication blocker.

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

Obtain Peter's visual acceptance of the three exact derivatives in the local
preview at `/projects/microgrow/`. Then re-run the publication gate before
changing `publicEnabled` to `true`.
