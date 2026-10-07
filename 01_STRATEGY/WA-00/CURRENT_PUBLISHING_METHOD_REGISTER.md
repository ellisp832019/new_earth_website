# New Earth Website — Current Publishing Method Register

Status: WA-00 baseline
Purpose: Record how major public content is maintained today before redesign or automation.

| Content Area | Current Source | Current Method | Current State | Future Automation Candidate | Canonical Ownership |
|---|---|---|---|---|---|
| Vision | src/data/site.ts + page/layout rendering | Manual code/data edit | Implemented | Low | Current editorial authority |
| Manifesto | src/data/site.ts + route | Manual code/data edit | Implemented | Low | Current editorial authority |
| Blueprint | src/data/site.ts + Blueprint routes | Manual code/data edit | Implemented | Low/Medium | Current editorial authority |
| 12 Pillars | src/data/site.ts + pillar route | Structured TS data | Implemented | Medium | Current editorial authority |
| Homepage | src/pages/index.astro + data sources | Manual Astro/data edit | Implemented | High for derived modules | Provisional — awaiting baseline confirmation |
| Navigation | src/data/site.ts | Structured TS data | Implemented | Medium | Current website configuration |
| Projects | src/data/projects.ts + dynamic route | Structured TS data | Implemented | Very High | Awaiting Operating Baseline integration |
| What We're Building | src/data/building.ts + route | Structured TS data | Implemented | Very High | Awaiting Operating Baseline integration |
| Digital Products | src/data/products.ts + product-readiness.ts | Structured TS data | Readiness foundation | High | AWAITING BASELINE — Foundry relationship to be confirmed |
| Practical Guides | Digital Product family route/data | Manual/structured | Partial | High | Awaiting baseline confirmation |
| Conscious Living | Digital Product family route/data | Manual/structured | Partial | High | Awaiting baseline confirmation |
| Journal | src/data/journal.ts + dynamic routes | Structured TS data | Implemented foundation / content-light | Very High | AWAITING BASELINE |
| R&D | Distributed across projects/journal/content | No dedicated publishing model | Partial | Very High | Awaiting baseline |
| Public Knowledge | Distributed | No unified publishing model | Partial | High | Awaiting baseline |
| Company facts | About/Team/Footer/page data | Manual page/data edits | Implemented / partial | Medium | Current company-source context |
| Contact | Astro form + public/contact-submit.php | Manual code/config | Implemented | Medium | Current company/contact configuration |
| Assets | ASSETS + governed public asset pipeline | Controlled scripts/registers | Implemented | High | Existing website asset governance |
| SEO/social | BaseLayout + route metadata + validation scripts | Manual/structured | Implemented | High | Current website publishing implementation |
| Email capture | No active provider | Not implemented | Planned only | High later | Awaiting decision |
| Payments | No active provider | Not implemented | Planned only | High later | Awaiting decision |
| Downloads | No active fulfilment | Not implemented | Planned only | High later | Awaiting decision |
| Deployment | Astro public build + release package/runbook | Scripted/manual approval | Implemented process | High | Current deployment process |

## Future Governed Publishing Principle

Target flow:

CANONICAL SOURCE
→ PUBLICATION CANDIDATE
→ TOOL / AI ASSISTED PREPARATION
→ RULE / PRIVACY / CLAIM CHECKS
→ HUMAN REVIEW
→ APPROVAL
→ WEBSITE RECORD
→ BUILD
→ STAGING / PREVIEW
→ FINAL APPROVAL
→ PUBLISH
→ VERIFY
→ RECEIPT

Automation prepares.

Human authority publishes unless explicit future governance permits otherwise.

Any ownership or architecture not yet established by the New Earth Operating Baseline
must remain marked AWAITING BASELINE rather than being invented by Website work.

