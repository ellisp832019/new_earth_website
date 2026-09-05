# Automated SEO Build Contract

## Route Input

Each publishable route supplies route, title, description, canonical path,
indexability, content type, preferred image, social metadata and authorised
structured-data configuration.

## Required Output

Generate HTML title, meta description, canonical, robots meta, Open Graph,
authorised JSON-LD, accessible content and preferred-image metadata. At site level
generate sitemap, robots, redirects, metadata validation, duplicate-title,
missing-description, canonical, structured-data validation hooks and a public-file manifest.

## Build Errors

Fail for duplicate canonical routes, missing canonical on publishable pages,
internal-only files in output, malformed metadata, broken required internal routes,
inconsistent canonical hosts or missing required titles.

## Advisory Warnings

Flag unusually long metadata, missing optional images, incomplete social fields and
future content without final metadata. Do not hard-fail optional metadata without reason.

The contract is system-agnostic and is a suitable future WB-00 input; it does not
implement WB-00.
