# Public Build SEO Boundary

Automated SEO builds may consume only curated public metadata and content sources.
They must exclude `00_BLUEPRINT`, `01_STRATEGY`, `07_CODEX`, `09_LOGS`, owner
approvals, legal registers, technical evidence, decision logs, private paths and
untracked reference material from `dist/` or equivalent output.

The build must fail if internal-only files enter public output. SEO automation must
not expose credentials, infrastructure, private repository details or unpublished IP.
