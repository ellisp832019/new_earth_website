# Asset Review Standard

Use these checks before changing any asset status beyond `TODO` or `IN_PROGRESS`.

## Pass/fail checks
- Size: passes if it matches the size in `ASSET_REGISTER.csv`.
- Filename: passes if it matches the agreed lowercase underscore filename exactly.
- Folder: passes if it is placed in the register folder path.
- Format: passes if heroes and section visuals use `.webp`, and diagrams, templates, posters, icon sheets, or sharp-edge graphics use `.png`.
- Watermark: fails if any watermark or generator mark is visible.
- Embedded text: fails if text appears in the image unless the asset is explicitly meant to contain designed text.
- Overlay space: passes if heroes, banners, and CTA visuals leave enough negative space for headings or UI overlays.
- Brand alignment: passes if the image still reads as premium, spiritual-modern, regenerative, earth-centered, peaceful, cinematic, elegant, and uncluttered.
- Use fit: passes if the asset is suitable for its intended website or print purpose.

## Review outcome
- Mark `APPROVED` when all checks pass.
- Mark `NEEDS_EDIT` when the asset is usable but needs correction.
- Mark `LIVE` only after the approved asset is actually deployed or published.
