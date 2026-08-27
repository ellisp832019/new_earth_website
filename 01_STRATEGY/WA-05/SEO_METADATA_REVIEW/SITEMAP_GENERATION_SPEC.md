# Sitemap Generation Specification

Generate `/sitemap.xml` or a sitemap index automatically from the controlled
route and SEO manifest. Use absolute URLs under the verified `{CANONICAL_ORIGIN}`.

- Include preferred canonical, public, indexable routes only.
- Exclude redirects, noindex candidates, internal controls and future routes not
  yet publishable.
- Validate uniqueness, required routes, host consistency and URL syntax.
- Fail the build for duplicate canonical routes, missing canonical on a publishable
  route or a missing required public route.
- Do not submit a sitemap or connect Search Console in WA-05G.
