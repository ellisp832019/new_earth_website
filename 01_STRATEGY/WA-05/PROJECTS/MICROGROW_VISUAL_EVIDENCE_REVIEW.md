# MicroGrow Visual Evidence Review

## Status

WB-03C discovery and classification only, 2026-08-28. No asset was copied,
moved, converted, compressed, renamed, promoted or placed on the website.

## Discovery scope

The audit covered the website's MicroGrow assets, governed asset records and
the current read-only MicroGrow V1 repository. The source repository was not
modified. A total of 129 image files were found in the source repository when
including repository visual variants and platform assets; 17 meaningful
MicroGrow candidates are recorded in the candidate register. Generated build
outputs and dependency caches were excluded from the meaningful candidate set.

## Repositories inspected

- Website repository: current governed `ASSETS/`, asset registers and WA-05
  public-build controls.
- MicroGrow V1 repository: current product, architecture, hardware, software,
  validation, evidence and roadmap documentation, plus relevant visual files.

The MicroGrow V1 repository remained read-only. Its starting and ending HEAD
were identical, and its pre-existing working-tree state was not changed.

## Candidate summary

The register contains six existing website candidates and eleven representative
source-repository candidates. The source repository also contains many
additional architecture, platform-icon and generated visual variants that are
not meaningful public-page candidates.

| Category | Meaningful candidates |
| --- | ---: |
| Physical hardware | 1 |
| Application / UI | 2 |
| Diagnostics | 2 |
| Testing / validation | 2 |
| System / architecture diagram | 4 |
| Development history | 1 |
| Conceptual / marketing | 6 |
| Unsuitable / internal | Cross-classified in the rows above |

These are register classifications, not counts of approved or usable assets.

## Duplicate summary

One exact duplicate group was found: the two engineering-dashboard files share
the same dimensions, size and SHA-256. The architecture/master copy is the
preferred representative if the duplicate is ever needed for internal review;
neither is recommended for the public page. No other exact duplicate was
confirmed in the meaningful candidate set. Likely resized or alternate groups
were not promoted without pixel-level comparison.

## Sensitive-content findings

The rendered node-detail and future-dashboard visuals contain sensitive-looking
network or device identifiers. Several bench and wiring visuals contain
internal electrical or control detail. These candidates are marked unsuitable
or require redaction and must not be copied or edited in this audit.

No sensitive values are reproduced in this document. Source screenshots and
internal visuals are not public-safe merely because they are stored locally.

## Top candidates

No candidate currently passes the complete provenance, rights, evidence-status
and public-safety gates. The strongest future candidates by role are:

- `MG-VIS-010` as a visual reference for a cleaner future bench photograph,
  but not as current evidence because it is a rendered layout visual.
- `MG-VIS-008` as a visual reference for the type of application evidence
  needed, but not as a verified screenshot and not safe to publish.
- `MG-VIS-011` as an internal diagnostics reference only; it is not a public
  diagnostics screenshot.
- `MG-VIS-014` as an architecture reference only; it is not bounded enough for
  the current single-node public story.

These are not promotion recommendations. They identify the closest existing
materials to the requested roles while preserving the evidence boundary.

## Recommended shortlist

There is no approved 3-5 asset shortlist for promotion. The correct current
shortlist is an evidence-capture brief, not an image set:

1. A clean current single-node hardware photograph.
2. A privacy-safe current Flutter application screenshot.
3. A privacy-safe current diagnostics/status screenshot.
4. A controlled bench-validation photograph without unsafe or unnecessary
   wiring detail.
5. A newly reviewed public-safe system diagram, if a diagram is genuinely
   needed after the text-led page is assessed.

All five remain future candidates and are currently `DO NOT USE`.

## Decisions

- Hero: **NO SUITABLE HERO YET**. Keep the current text-led hero.
- Hardware: **NO SUITABLE HARDWARE CANDIDATE**. Existing hardware-looking
  visuals are rendered, annotated or rights-unresolved.
- Flutter: **NO PUBLIC-SAFE FLUTTER CANDIDATE**. Existing UI visuals are
  conceptual and include sensitive-looking identifiers.
- Diagnostics: **NO SUITABLE DIAGNOSTICS CANDIDATE**. Existing dashboard
  visuals are internal/conceptual rather than public evidence.
- Validation: **NO SUITABLE VALIDATION CANDIDATE**. Existing bench visuals are
  rendered references or contain unsafe internal detail.
- System diagram: **NO CURRENTLY APPROVED SYSTEM DIAGRAM**. The current
  HTML/CSS explanatory flow remains the safer public fallback.

## Asset status

- Public-ready assets found: **NONE**.
- Local-preview candidates found: **NONE approved for use**.
- Blocked candidates: all 17 register rows, due to conceptual status,
  provenance, rights, sensitive content, safety detail or owner review gates.
- Conceptual artwork used as evidence: **NO**.

## Asset gaps and capture briefs

### Current MicroGrow hardware photo

**Capture:** Landscape photograph of the complete current single-node setup.

**Show:** The controller, sensor and relevant enclosure or bench context.

**Avoid:** Unnecessary wiring close-ups, mains detail, personal documents,
screens, addresses, labels, serial identifiers and unrelated equipment.

**Purpose:** Hardware evidence or a restrained supporting visual after rights,
privacy and currentness review.

### Current Flutter application screenshot

**Capture:** Current MicroGrow application screen showing a representative
monitoring state with all personal, network, device and account identifiers
removed or replaced with safe neutral values before capture.

**Show:** The actual current interface and a clear status context.

**Avoid:** Credentials, tokens, addresses, hostnames, account details and
unverified simulated values presented as live evidence.

**Purpose:** Application evidence card after privacy, provenance and owner review.

### Current diagnostics screenshot

**Capture:** Current diagnostics or status view from the maintained application
or firmware workflow, using a privacy-safe test context.

**Show:** The diagnostic function and readable status categories.

**Avoid:** Internal endpoints, private paths, network identifiers, raw logs,
tokens or sensitive failure detail.

**Purpose:** Diagnostics evidence card after public-safety review.

### Controlled bench-validation photograph

**Capture:** Clear photograph of a completed, controlled validation setup with
the associated date and test record retained separately.

**Show:** Only the public-safe physical context needed to understand what was
tested.

**Avoid:** Unsafe electrical instructions, exposed mains work, personal data,
unnecessary identifiers and claims beyond the recorded test result.

**Purpose:** Evidence and current progress section after validation review.

## Recommended next action

Peter reviews this classification and the capture briefs. If he approves a
candidate for use, run the separately authorised WB-03C2 promotion pass to
record provenance, rights, accessibility, privacy and public-build status
before copying anything into governed website assets. The current MicroGrow
page remains text-led and unchanged.
