# Phase H SEO, social sharing and analytics readiness

## Current baseline

Every public V2 route receives a descriptive title, meta description, canonical
URL, Open Graph title/description/type/site URL, Twitter card metadata, favicon
and the site-wide fallback social image. The generated sitemap is built from
the controlled public route list plus published Journal articles; robots allows
the public site and points to that sitemap. Redirect and public SEO checks are
the release gates for these contracts.

Page metadata describes the visible page and must not turn developing work into
a claim of availability. Digital Products remains a future area and has no
active sale, price, seller, availability or checkout claim. MicroGrow remains a
prototype/development project with bounded evidence wording.

## Social metadata model

`BaseLayout` accepts an optional `socialImagePath` and `socialImageAlt`. An
approved public image is used when a route has a clear fit; otherwise the
approved home hero is the fallback. Open Graph and Twitter image alt metadata
are emitted from the same route-level contract. Social image choice never
replaces visible page copy or the image alt text used in page content.

Current route-specific assignments:

- Home: approved home hero fallback/default.
- MicroGrow project: approved `microgrow_hardware_public.webp` derivative.
- Journal index: approved Journal editorial visual.
- Article records: their approved `socialAsset` when a published record exists.

Deferred gaps remain for What We’re Building, Digital Products, About, Contact,
future product records and future Journal articles where no distinct approved
social image is currently assigned. These routes use the safe site-wide fallback.
Owner-only or held assets are not promoted to fill those gaps.

## Structured data boundary

No Product schema is emitted while `publicProducts` is empty. No Article schema
is emitted for the empty Journal or for non-published records. Organization or
social-profile claims are not invented; future structured data requires verified
facts and a separate review.

## Analytics current state

No analytics provider, tracker, tracking identifier, cookie, event collection,
third-party script, session replay, fingerprinting or cross-site profiling is
active. Future useful measurements are limited to page views, entry pages,
referral source, outbound CTA clicks, product-route interest, Journal interest
and Contact interest. Detailed user profiles are out of scope.

## Future provider decision criteria

Before selection, compare candidates on privacy model, cookie requirement,
hosting and data region, retention controls, data ownership, cost,
implementation complexity, CSP/security implications, consent implications and
exportability. This is a decision framework, not a provider recommendation.

## Analytics activation gate

No analytics code may be added until a provider is approved, the privacy and
data-flow review is complete, cookie/consent impact is understood, legal wording
is updated, retention is approved, accessibility impact is checked, and the
implementation passes testing and production approval. Contact, mailing and
commerce data remain separate purposes.

## Social preview QA checklist

For Facebook, LinkedIn, Telegram and standard Open Graph consumers, review the
rendered title, description, canonical, image URL, image dimensions and image
context. Confirm that the image resolves from the public build and that the
visible page remains understandable without social metadata.
