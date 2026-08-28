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
  primaryVisual?: { src: string; alt: string; provenance: string };
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
    { label: 'Tested / validated', detail: 'Firmware host checks, Flutter verification and prior bench records are present.', status: 'Evidence exists, not all gates closed' },
    { label: 'Still open', detail: 'Further physical validation is required before wider publication or readiness claims.', status: 'Owner and evidence review pending' },
  ],
}];
