# External Integration Placement Plan

The homepage may explain and route to external participation without loading
third-party services. All placements follow the WA-03 External Application
Integration Standard.

| Placement | Pattern | V2A treatment | Fallback |
| --- | --- | --- | --- |
| Featured project or creator context | Social profile link | Clearly labelled LinkedIn destination placeholder | Canonical project or About page |
| Journal or learning card | Click-to-load embed placeholder | YouTube consent prompt placeholder only | Journal/resource page, transcript, or normal link |
| Get Involved | External application card | Telegram and GitHub public destination placeholders | `/get-involved/` canonical context |
| Journal/resource sharing | Privacy-friendly share bar | User-triggered links only | Copy canonical URL |
| Any service failure | Integration unavailable/fallback state | Plain-language unavailable notice | New Earth page remains usable |

No automatic feed, iframe, video player, tracker, cookie-writing script, API
request, or authenticated application is included. The private Command Centre
and Dashboard are never embedded. Provider selection and any future
authenticated integration require V2.x approval.
