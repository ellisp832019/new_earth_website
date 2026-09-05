# WA-04 to Astro Homepage Migration Map

| Accepted WA-04 element | Astro equivalent | Status | Implementation action |
| --- | --- | --- | --- |
| Wordmark and seven-item header | `BaseLayout.astro` | MATCH | Preserve shell and current route targets. |
| Photographic hero, overlay, copy and CTAs | `#home-hero` | MATCH | Use the governed hero through the local resolver. |
| What Is New Earth image/text split | `#what-is-new-earth` | MATCH | Preserve image-led composition and approved copy. |
| Pathway cards | `#pathways` | MATCH | Preserve five-card route gateway. |
| Twelve Pillars grid | `#pillars` | MATCH | Use current authoritative names and routes. |
| Ecosystem relationship section | `#ecosystem` | MATCH | Keep labelled visual and text alternative; no invented diagram. |
| Featured project cards | `#projects` | MATCH | Preserve maturity-qualified project language. |
| Progress and Transparency | `#progress` | MATCH | Preserve dated, qualified progress language. |
| Journal and Learning | `#journal` | MATCH | Preserve future-content framing. |
| Get Involved pathways | `#get-involved` | MATCH | Preserve four participation routes and boundaries. |
| Footer groups | `BaseLayout.astro` | MATCH | Preserve five-group hierarchy. |
| Typography and palette | `global.css` | ADAPTATION | Use approved local-safe CSS typography fallback; no remote font dependency. |

The WA-04 preview remains immutable design evidence. Differences are limited to
Astro implementation, current approved copy, semantic accessibility structure,
and asset-safe local/public handling.
