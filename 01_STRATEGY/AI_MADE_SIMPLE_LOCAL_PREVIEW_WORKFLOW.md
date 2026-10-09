# AI Made Simple — local Coming Soon preview workflow

## Scope and authority

- Product: `NE-DP-001 — AI Made Simple`, edition `1.1`, candidate `rc1`.
- Canonical candidate route: `/digital-products/ai-made-simple/`.
- This record authorises a local preview implementation only. `publish_authorized` remains `false`; it does not authorise public deployment, commerce, checkout, paid delivery or release promotion.
- The route is generated only while `PUBLIC_ASSET_MODE` is not `PUBLIC`. A public build excludes the preview-only product route and local-preview assets.
- Visual reference reviewed only: `Launch_Kit/02_WEBSITE_HANDOFF/reference/Fifth_Dimension_Landing_Page_Reference.html` in `NE-DP-001_Launch_Kit_v1.1_rc1.zip`. Its donation, Fifth Dimension and standalone-navigation content is excluded.

## Allow-listed preview assets

| Launch-kit source | Governed source | Generated local-preview destination | SHA-256 |
| --- | --- | --- | --- |
| `Launch_Kit/02_WEBSITE_HANDOFF/public-assets/ai-made-simple-cover.png` | `ASSETS/10_RESOURCES/digital-products/ai-made-simple/ai-made-simple-cover.png` | `/local-assets/digital-products/ai-made-simple/ai-made-simple-cover.png` | `d55ce8db0e8665f06e651c223adecf0648c2d00e1e654a6f6c6e53ceef830d6c` |
| `Launch_Kit/02_WEBSITE_HANDOFF/public-assets/ai-made-simple-clear-sample.png` | `ASSETS/10_RESOURCES/digital-products/ai-made-simple/ai-made-simple-clear-sample.png` | `/local-assets/digital-products/ai-made-simple/ai-made-simple-clear-sample.png` | `248b2c2db0e64803df6f3140352a4bc702bb00bafc99c49e3ffcb34b16a0b496` |
| `Launch_Kit/02_WEBSITE_HANDOFF/public-assets/AI_Made_Simple_Sample.pdf` | `ASSETS/10_RESOURCES/digital-products/ai-made-simple/AI_Made_Simple_Sample.pdf` | `/local-assets/digital-products/ai-made-simple/AI_Made_Simple_Sample.pdf` | `a3acfbce1b533c2d4a3a2f1877e6eea04872e0f76f74e5ca5d44449c423368cb` |
| `Launch_Kit/02_WEBSITE_HANDOFF/NE-DP-001_FREE_10_Things_You_Can_Ask_AI_v1.1.pdf` | `ASSETS/10_RESOURCES/digital-products/ai-made-simple/NE-DP-001_FREE_10_Things_You_Can_Ask_AI_v1.1.pdf` | `/local-assets/digital-products/ai-made-simple/NE-DP-001_FREE_10_Things_You_Can_Ask_AI_v1.1.pdf` | `5efbc788f27c150dd79a42943a8e02136166a978adda4421a9d7863c0c4cb19e` |

No customer ZIP, paid PDF, editable source, configuration, QA/control record, manifest, script, font or reference HTML is copied to the website.

## Implementation boundary

- Product record: `src/data/products.ts`.
- Readiness record: `src/data/product-readiness.ts`.
- Route: `src/pages/digital-products/[slug].astro`.
- Family wording: `src/pages/digital-products/practical-guides/index.astro`.
- Preview sitemap entry: `src/pages/sitemap.xml.ts`.
- Local preview asset allow-list: `scripts/prepare-local-assets.mjs`.
- No primary navigation, homepage, footer, payment code, checkout, provider integration or public product-delivery code is changed.

## Required review and release gates

Before any public publication, Peter must approve the page, cover, sample and free guide; then separately resolve legal seller, commercial rights, territory, VAT/tax, refunds/cancellation, support, secure delivery, purchase provider, privacy implications, accessibility position, staging/test purchase and final go-live authority.

`COMING_SOON` means not available for purchase. The planned £9.99 price is direction only and makes no tax, checkout or sale claim.

## Validation and visual review

- Run build, check, SEO, homepage, redirects, diff hygiene, privacy/public-build checks and the affected output inspection.
- Review at 360, 390, 768, 1024 and 1440 pixels:
  - `/digital-products/ai-made-simple/`
  - `/digital-products/practical-guides/`
  - `/digital-products/`
  - `/`
- Confirm heading order, keyboard operation, focus visibility, contrast, image alt text, PDF links, unchanged header/homepage/footer and no overflow.
- Peter visual review is required before any change of preview status or public publication.

## Public-output inspection

The public-build check must confirm that it contains no AI Made Simple route or local-preview assets. Inspect preview output for absence of customer ZIP names, paid PDF names, internal JSON/configuration, QA/control records, private filesystem paths, stale £9/£12 material, `/guides/` links, purchase URLs, buy controls and `AVAILABLE`/Offer availability claims.

## Rollback

Remove the NE-DP-001 product and readiness records, product-specific preview route branch, preview sitemap entry, family wording adjustment, local asset allow-list entries, governed source assets and their asset-register rows. Regenerate the preview build and rerun the same checks. Do not remove any existing product-family, navigation, homepage or footer content.

---

## Future Series Planning Context - 9 October 2026

Status: PLANNING PROPOSAL ONLY

Peter has prepared:

`AI_Made_Simple_Series_Proposal_v0.1_2026-10-09.txt`

This proposes an "AI Made Simple learning pathway" within the existing
New Earth Practical Guides series.

The proposal reuses the existing product roadmap and does not change
activation, commissioning or publication order.

Proposed learning sequence:

### BEGIN

- NE-DP-001 - AI Made Simple
  Beginner foundations, useful conversations, checking answers and privacy.

### PRACTISE

- NE-DP-002 - 100 Useful AI Prompts for Everyday Life
  Proposed optional practice companion, not a required purchase.

### APPLY AND CREATE

- NE-DP-003 - The Everyday AI Toolkit
  Proposed main practical follow-on focused on completing a useful project
  and learning how to repeat the process.

### OPTIONAL LATER BRANCHES

- NE-DP-004 - AI at Work Made Simple
- NE-DP-005 - Build Your Personal AI Assistant
- NE-DP-006 - AI for Small Business: Your First 30 Days

### MORE ADVANCED OPTIONS

- NE-DP-018 - Private & Local AI Made Simple
- NE-DP-019 - Personal Automation Made Simple

### Governance

- No new product IDs are created by this proposal.
- NE-DP-002 remains queued.
- No future title is activated.
- No future route or product page is authorised.
- No future price or launch date is approved.
- EXP-001 remains unstarted.
- Existing roadmap dependencies remain controlling.
- Future commissioning depends on evidence and Peter approval.
- Buying every guide must not be necessary.
- Each future guide should stand alone and deliver a practical outcome.
- ChatGPT is the proposed primary demonstration tool, but teaching principles
  should remain transferable.
- No OpenAI partnership, sponsorship, endorsement or brand permission is implied.
- Peter reports that the OpenAI enquiry email has been sent; no response or
  relationship is assumed.

### Current website boundary

Current website implementation remains limited to:

`NE-DP-001 - AI Made Simple`

Canonical route:

`/digital-products/ai-made-simple/`

Current presentation:

`COMING_SOON`

Commercial availability:

`NOT AVAILABLE`

`publish_authorized = false`

Website implementation should remain reusable where practical, but this series
proposal does not authorise speculative infrastructure, future product routes,
catalogue cards, bundles, navigation items, "coming next" messaging or commerce.

The full named proposal should be consulted before making any detailed future
series decision. This note does not replace that source.
