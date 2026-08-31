export type ProjectRecord = {
  name: string;
  shortDescription: string;
  slug: string;
  category: string;
  maturity: 'ACTIVE DEVELOPMENT' | 'PROTOTYPE' | 'RESEARCH' | 'CONCEPT / FUTURE' | 'PUBLIC INFORMATION ONLY';
  publicStatus: 'PENDING OWNER REVIEW' | 'PUBLIC-ENABLED';
  previewEnabled: boolean;
  publicEnabled: boolean;
  purpose: string;
  whyItExists: string;
  whatItIs: string;
  relationToNewEarth: string;
  currentState: string;
  whatExistsToday: string;
  evidence: string[];
  limitations: string[];
  nextDevelopmentDirection: string;
  relatedSystems: string[];
  publicLinks: { label: string; href: string }[];
  systemFlow: { label: string; detail: string }[];
  evidenceCards: { label: string; detail: string; status: string }[];
  facts: { label: string; value: string }[];
  primaryVisual?: { src: string; alt: string; provenance: string };
  visualEvidence?: {
    src: string;
    alt: string;
    label: string;
    caption: string;
    className?: string;
  }[];
  developmentalVisual?: {
    src: string;
    alt: string;
    label: string;
    caption: string;
  };
};

// Catalogue recognition does not publish a page. Add an entry only after the
// complete publication ladder and explicit public-enabled decision are met.
export const publicProjects: ProjectRecord[] = [{
  name: 'MicroGrow',
  shortDescription: 'A local-first growing environment project exploring understandable ways to monitor and control a single growing node.',
  slug: 'microgrow',
  category: 'Growing and resilience',
  maturity: 'PROTOTYPE',
  publicStatus: 'PENDING OWNER REVIEW',
  previewEnabled: true,
  publicEnabled: false,
  purpose: 'Explore practical ways to understand and care for a growing environment with technology that remains close to the people using it.',
  whyItExists: 'Indoor growing depends on paying attention to environmental conditions and responding consistently. MicroGrow explores how local monitoring and bounded control can support that work without making a cloud service the centre of the system.',
  whatItIs: 'The current V1 is a single-node system built around an ESP32 controller, a local Wi-Fi and HTTP path, a climate-sensor input, relay outputs and a Flutter application for monitoring, control and diagnostics.',
  relationToNewEarth: 'MicroGrow is one practical project within the wider New Earth ecosystem. It explores local capability, maintainability and direct understanding while remaining compatible with wider cooperation. It is not the whole New Earth food strategy or proof that the wider model is complete.',
  currentState: 'The project is at a prototype and controlled validation stage. The software spine and documented host checks are present, while physical validation gates remain partial and require further evidence.',
  whatExistsToday: 'The repository records a single ESP32 node path, an SHTC3 climate-sensor integration, four relay outputs with safe-start behaviour, local HTTP communication and a Flutter client with monitoring, control and diagnostics workflows.',
  evidence: [
    'Public-safe evidence includes documented architecture, source-controlled implementation, firmware host checks and Flutter verification records.',
    'The current evidence record also includes prior bench and node-validation material, but it does not establish production readiness or a finished physical product.',
  ],
  limitations: [
    'The current V1 scope is a single node; multi-node coordination and cloud services remain future work.',
    'Physical load, calibration, enclosure, thermal, end-of-line and pilot-user evidence are not all closed in the current record.',
    'MicroGrow is not presented as commercially available, production-ready, autonomous or a guarantee of growing outcomes.',
  ],
  nextDevelopmentDirection: 'Complete the next controlled physical validation checkpoint, including the current hardware and evidence gaps, before considering a wider rollout.',
  relatedSystems: ['MicroGrow AI Lab and MicroGrow Field Scanner are separate related catalogue entries and are not merged into MicroGrow V1.'],
  publicLinks: [{ label: 'Return to Projects', href: '/projects/' }],
  systemFlow: [
    { label: 'Climate sensor', detail: 'Measures the growing environment.' },
    { label: 'ESP32 local controller', detail: 'Receives local inputs and coordinates the node.' },
    { label: 'Bounded control logic', detail: 'Applies the documented control rules.' },
    { label: 'Relay outputs', detail: 'Provides the controlled output path.' },
    { label: 'Flutter local interface', detail: 'Supports monitoring, control and diagnostics.' },
  ],
  evidenceCards: [
    { label: 'Documented', detail: 'Current product and architecture records describe the single-node V1 scope.', status: 'Repository evidence' },
    { label: 'Implemented', detail: 'The firmware, local HTTP path and Flutter application are represented in the current source record.', status: 'Source-controlled implementation' },
    { label: 'Validated', detail: 'Firmware host checks, Flutter verification and prior bench records are present.', status: 'Evidence exists, not all gates closed' },
    { label: 'Still open', detail: 'Further physical validation is required before wider publication or readiness claims.', status: 'Owner and evidence review pending' },
  ],
  facts: [
    { label: 'Project', value: 'MicroGrow' },
    { label: 'State', value: 'PROTOTYPE' },
    { label: 'Scope', value: 'Single-node V1' },
    { label: 'Operation', value: 'Local-first' },
    { label: 'Publication', value: 'PENDING OWNER REVIEW' },
  ],
  visualEvidence: [
    {
      src: 'microgrow_hardware_public.webp',
      alt: 'Current physical MicroGrow prototype hardware and connected development components.',
      label: 'Current hardware prototype',
      caption: 'Current MicroGrow single-node prototype; public-safe derivative for owner review.',
      className: 'visual-evidence--hardware',
    },
    {
      src: 'microgrow_dashboard_public.webp',
      alt: 'Current MicroGrow application dashboard showing local environmental and system information.',
      label: 'MicroGrow dashboard',
      caption: 'Current Flutter interface used for monitoring, control and project status; public-safe derivative for owner review.',
    },
    {
      src: 'microgrow_diagnostics_public.webp',
      alt: 'Current MicroGrow diagnostic interface showing development and system status.',
      label: 'MicroGrow diagnostics view',
      caption: 'A current diagnostics and status view; this public-safe derivative does not establish complete fault handling or production readiness.',
    },
  ],
}, {
  name: 'New Earth Command Centre',
  shortDescription: 'A developing Windows desktop control and navigation surface for discovering, opening and observing parts of the New Earth technical ecosystem.',
  slug: 'command-centre',
  category: 'Technology and innovation',
  maturity: 'ACTIVE DEVELOPMENT',
  publicStatus: 'PENDING OWNER REVIEW',
  previewEnabled: true,
  publicEnabled: false,
  purpose: 'Make a growing collection of projects, repositories, tools and status surfaces easier for people to find and understand from one human-facing place.',
  whyItExists: 'As the New Earth ecosystem grows, navigating each project and repository separately becomes increasingly difficult. Command Centre is being developed to reduce that friction while keeping people in control of the systems they open and use.',
  whatItIs: 'Command Centre is a thin Windows desktop shell for discovery, launch, navigation, observation, summarisation, notification and bounded orchestration. It presents access to other systems rather than replacing the capabilities they own.',
  relationToNewEarth: 'Command Centre is a visible coordination surface within the wider New Earth ecosystem. It helps people find and understand related projects while each specialist system remains responsible for its own work and boundaries.',
  currentState: 'The current repository records a working desktop shell and controlled development baseline. The local preview describes the implementation evidence available now; it is not a claim of public deployment or finished ecosystem integration.',
  whatExistsToday: 'The current implementation includes a registry-driven desktop shell, repository and application discovery, launch-target resolution, navigation actions, health and status surfaces, a command palette, audit support and read-only presentation of selected NEOS and GAIA-related information.',
  evidence: [
    'Repository documentation, source implementation and focused tests provide the current evidence for the shell, discovery, navigation, command palette and bounded integrations.',
    'The How Command Centre Works visual is a developmental operating model, not current implementation evidence; its framing makes clear that not every connection or authority stage shown is implemented today.',
  ],
  limitations: [
    'Command Centre does not own engineering intelligence, AI reasoning, project-domain behaviour or arbitrary shell execution.',
    'Not every New Earth project is integrated, and local configuration or service availability can affect what is discoverable or usable.',
    'Packaging, runtime hardening and broader integration remain controlled development work; publication and operational readiness are not implied.',
  ],
  nextDevelopmentDirection: 'Continue controlled runtime, packaging and integration validation, with deeper NEOS and GAIA presentation added only where the underlying evidence and boundaries remain clear.',
  relatedSystems: [
    'NEOS remains the owner of engineering intelligence; Command Centre presents selected routed results rather than recomputing them.',
    'GAIA remains the reasoning and summary provider; Command Centre remains the human-visible control and navigation surface.',
    'New Earth Dashboard is a separate organisational working interface and is not embedded or represented as a Command Centre capability.',
  ],
  publicLinks: [{ label: 'Return to Projects', href: '/projects/' }],
  systemFlow: [
    { label: 'Projects and systems', detail: 'Distinct New Earth work remains owned by its originating project or application.' },
    { label: 'Discovery', detail: 'The shell searches configured local sources and presents available entries.' },
    { label: 'Command Centre', detail: 'A human-facing surface for navigation, status and bounded orchestration.' },
    { label: 'Open and observe', detail: 'People can follow safe actions and inspect the status available for each system.' },
  ],
  evidenceCards: [
    { label: 'Implemented', detail: 'The source includes a Windows desktop shell, registry, discovery services, launch routing and status handling.', status: 'Current repository implementation' },
    { label: 'Demonstrated', detail: 'Focused tests cover discovery resolution, command construction, safe action boundaries and governance presentation.', status: 'Test-backed surfaces' },
    { label: 'Connected', detail: 'Read-only NEOS and GAIA adapters are represented with unavailable states when configuration or services are absent.', status: 'Bounded integrations' },
    { label: 'Still open', detail: 'Packaging, runtime hardening, broader integration and owner review remain before any public publication decision.', status: 'Development work continues' },
  ],
  facts: [
    { label: 'Project', value: 'Command Centre' },
    { label: 'State', value: 'ACTIVE DEVELOPMENT' },
    { label: 'Platform', value: 'Windows desktop' },
    { label: 'Role', value: 'Control / navigation surface' },
    { label: 'Publication', value: 'PENDING OWNER REVIEW' },
  ],
  visualEvidence: [
    {
      src: 'CC-VIS-001A_command-centre-hero-display.png',
      alt: 'Current New Earth Command Centre overview showing programme control, system discovery and status surfaces.',
      label: 'Command Centre overview',
      caption: 'Current Command Centre overview display derivative; local-preview evidence only, with service and status availability shown as captured.',
      className: 'visual-evidence--overview',
    },
    {
      src: 'CC-VIS-002_command-palette.png',
      alt: 'Command Centre command palette showing search and open navigation actions.',
      label: 'Command and navigation',
      caption: 'Command Palette evidence for discovery and navigation actions; it does not imply unrestricted execution.',
    },
    {
      src: 'CC-VIS-003_continue-work-authority.png',
      alt: 'Command Centre Continue Work view showing READY eligibility and NOT_DISPATCHED dispatch state.',
      label: 'Bounded work preparation',
      caption: 'Continue Work evidence showing READY / NOT_DISPATCHED; preparation is not dispatch or execution.',
    },
    {
      src: 'CC-VIS-004_neos-connected-context.png',
      alt: 'NEOS Windows Desktop related engineering and project intelligence surface.',
      label: 'NEOS Windows Desktop - related engineering/project intelligence surface',
      caption: 'Related NEOS context, not Command Centre UI; NEOS remains the engineering and project intelligence owner.',
      className: 'visual-evidence--neos',
    },
  ],
  developmentalVisual: {
    src: 'CC-VIS-005_how-command-centre-works.png',
    alt: 'Developmental operating model showing intended Command Centre responsibilities, related system roles and human approval boundaries.',
    label: 'Developmental operating model',
    caption: 'Developmental operating model - not a claim that every connection, integration or authority stage is live today.',
  },
}];
