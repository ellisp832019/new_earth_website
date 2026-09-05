# Next Project Readiness Selection

Review date: 2026-08-29. This is a bounded editorial and build-selection aid,
not a scientific readiness score. No candidate repository was modified.

## Recommendation

**Next project: New Earth Command Centre**

Command Centre is the strongest next fit for Project Page Pattern V1. It has a
clear standalone public story as a thin Windows front door for discovery,
launch, navigation, observation and bounded orchestration. Its public page can
mention NEOS as a related system without requiring NEOS to be published first.

Likely following candidate: **NEOS - New Earth Engineering OS**.

## Scores

Scores are out of 5 across public story clarity, implementation evidence,
visual evidence, maturity clarity, claim safety, asset/privacy readiness,
project-page fit and ecosystem story value.

| Candidate | Story | Impl. | Visual | Maturity | Claims | Asset/privacy | Fit | Value | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| New Earth Command Centre | 5 | 4 | 4 | 4 | 4 | 3 | 5 | 5 | 34 |
| New Earth Dashboard | 4 | 5 | 5 | 3 | 3 | 2 | 4 | 4 | 30 |
| NEOS | 3 | 5 | 1 | 4 | 3 | 4 | 4 | 5 | 29 |
| Platform Core | 3 | 4 | 0 | 4 | 4 | 5 | 3 | 4 | 27 |
| GAIA | 3 | 4 | 0 | 3 | 2 | 3 | 4 | 5 | 24 |

## Evidence summaries

### 1. New Earth Command Centre - 34/40

Current source: `New-Earth-Command-Centre`, branch `main`, clean working
tree, current controlled commit `de84d9c`. The repository documents a Windows
desktop shell with project/repository discovery, launch and navigation, a
command palette, status and governance presentation, and bounded NEOS/GAIA
observation. One roadmap visual exists. Windows packaging and target-machine
verification remain a meaningful blocker, and public wording must exclude
private paths, controls and operational claims.

Visual readiness: **ADEQUATE**.

### 2. New Earth Dashboard - 30/40

Current source is a Flutter workday application with substantial implemented
modules and a large visual library. It is distinct from Command Centre and
must remain a protected organisational interface. The repository is currently
on a feature branch with five modified tracked generated files, so its current
baseline is not clean. Visuals and claims require strict privacy, scope and
protected-system review.

Visual readiness: **STRONG**, but not suitable as the next public project page.

### 3. NEOS - 29/40

Current source: `New-Earth-Engineering-OS-Omega`, branch `main`, clean working
tree, current controlled commit `2942933b`. Evidence includes repository
scanning, project indexing, project intelligence, semantic information,
engineering memory, local services and a Flutter desktop shell, with testing
and security controls documented. No suitable repository visual asset was
found. Internal terminology also needs a careful plain-English translation.

Visual readiness: **NONE**.

### 4. Platform Core - 27/40

Current source: `New-Earth-Platform-Core-Omega`, branch `main`, clean working
tree, current controlled commit `ea96ff2`. It contains schemas, contracts,
registries, compatibility and impact-analysis tooling, governance standards,
validation and declared integration boundaries. The MCP baseline explicitly
distinguishes declared contracts from implemented runtime services. It is
architecturally strong but visually weak and less immediately understandable
as a public project page.

Visual readiness: **NONE**.

### 5. GAIA - 24/40

Current source: `New-Earth-AI-Employee`, branch `main`, clean working tree,
current controlled commit `a7cf1570`. It documents a local-first, read-only AI
employee foundation with cross-repository evidence, reasoning and workflow
orchestration boundaries. AI capability, safety, runtime and privacy claims
remain high-risk, and no suitable visual asset was found. No autonomous,
employee or public interaction claim is authorised by this selection.

Visual readiness: **NONE**.

## Candidate blockers

- Command Centre: target Windows packaging/runtime evidence and public-safe
  visual provenance remain to be verified.
- Dashboard: protected-system boundary, privacy review and dirty source state.
- NEOS: no public-ready visual evidence and high internal terminology density.
- Platform Core: declarative-versus-runtime distinction and no public visual.
- GAIA: AI claim, privacy and runtime-boundary review; no public visual.

## Selection boundary

Command Centre can stand alone publicly as an information-led project page.
The page must describe the visible shell and its bounded role, not expose
private controls, credentials, machine paths, operational endpoints or claims
of public deployment. The protected Dashboard remains separate.

No project page, asset, project data or runtime code was changed in this pass.
MicroGrow remains unchanged and its publication blocker remains separate.
