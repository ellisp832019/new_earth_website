# Public Asset Build Gate

The future Website V2 build must evaluate every asset against its governed
promotion state before copying it into generated public output.

Only assets with an explicit allowed promotion state may enter the public
build. Assets marked `HOLD FROM PUBLIC BUILD`,
`THIRD_PARTY_PERMISSION_REQUIRED`, `REPLACEMENT RECOMMENDED`, reference-only,
internal or otherwise blocked must be excluded or fail the build.

Owner-use approval is not a public-build approval. Rights, provenance,
accessibility, technical-claim, privacy and final-usage requirements remain
independent gates.

The build must consume `OWNER_SELECTED_ASSET_PROMOTION_STATUS.csv` and must
never copy the complete `ASSETS/` or `ASSETS_REFERENCE/` estate blindly.

The New Earth Builders logo remains excluded unless brand permission and usage
evidence are recorded. A text-only external link is the safe fallback.
