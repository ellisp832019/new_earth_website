# Robots and Indexing Policy

## Staging

Protect staging with deployment access controls and an appropriate noindex policy.
Do not rely on `robots.txt` to protect confidential material. Internal strategy,
legal, owner and technical control files must never be deployed.

## Production

Expose only intended crawl controls. Reference the production sitemap after the
canonical host and sitemap are verified. Do not block useful public content from
speculation, and do not expose internal repository paths.
