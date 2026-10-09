// Static publication data for later ecosystem views. It is not canonical
// programme truth, a runtime registry, an integration map or configuration.

export type Confidence = 'CONFIRMED' | 'PROVISIONAL' | 'AWAITING_BASELINE';
export type Publication = 'REVIEW_REQUIRED' | 'PUBLIC_APPROVED';
export type ArchitectureStatus =
  | 'ESTABLISHED'
  | 'IN_DEVELOPMENT'
  | 'PROTOTYPE'
  | 'RESEARCH'
  | 'PLANNED'
  | 'FUTURE_CANDIDATE'
  | 'REUSE_CANDIDATE'
  | 'ARCHITECTURE_ONLY'
  | 'UNCONFIRMED'
  | 'NOT_APPLICABLE';

export type Group =
  | 'purpose'
  | 'governance'
  | 'platform'
  | 'intelligence'
  | 'knowledge'
  | 'publishing'
  | 'infrastructure'
  | 'practical-work';

export type ClaimBasis = { source: string; note: string };

export type EcosystemNode = {
  key: string; // Website-local reference key; not a canonical system ID.
  name: string;
  group: Group;
  context: 'PUBLIC_CONTEXT' | 'INTERNAL_CAPABILITY';
  summary: string;
  authority: { summary: string; confidence: Confidence; basis: ClaimBasis };
  implementation: { status: ArchitectureStatus; note: string; basis: ClaimBasis };
  publication: Publication;
  href?: string;
  canonicalId?: string;
};

export type RelationshipType =
  | 'prepares-for'
  | 'presents'
  | 'observes'
  | 'recommends-to'
  | 'provides-contracts-to'
  | 'provides-compute-to'
  | 'bounded-by';

export type EcosystemRelationship = {
  from: string;
  to: string;
  type: RelationshipType;
  description: string;
  basis: 'ACCEPTED_RESPONSIBILITY' | 'IMPLEMENTED_CONNECTION';
  confidence: Confidence;
  publication: Publication;
  evidence: ClaimBasis;
};

export const ecosystemGroupLabels: Record<Group, string> = {
  purpose: 'Purpose, people and framework',
  governance: 'Human governance and control',
  platform: 'Platform and contracts',
  intelligence: 'Intelligence and observation',
  knowledge: 'Knowledge and evidence',
  publishing: 'Creators, products and publishing',
  infrastructure: 'Runtime and infrastructure',
  'practical-work': 'Projects, research and practical work',
};

const reconciliation: ClaimBasis = {
  source: 'Accepted Package 04A reconciliation',
  note: 'Records the accepted public authority boundary only; it does not establish private runtime state, integration or ownership beyond that boundary.',
};

const implementationUnconfirmed = (note: string): EcosystemNode['implementation'] => ({
  status: 'UNCONFIRMED',
  note,
  basis: reconciliation,
});

export const publicPurpose = 'New Earth helps people become more self-sovereign through knowledge, practical tools and human-governed systems.';

export const humanAuthorityProgression = [
  'OBSERVE',
  'RECOMMEND',
  'PREPARE',
  'EXECUTE WITH APPROVAL',
  'PRE-AUTHORISED EXECUTION ONLY WHEN EXPLICITLY PERMITTED',
] as const;

export const futureBuildMethod = [
  'DISCOVER',
  'REUSE',
  'DEFINE',
  'BOUND',
  'APPROVE',
  'BUILD',
  'TEST',
  'REVIEW EVIDENCE',
  'RELEASE DELIBERATELY',
  'LEARN',
] as const;

export const ecosystemNodes: readonly EcosystemNode[] = [
  {
    key: 'new-earth-purpose', name: 'New Earth purpose and framework', group: 'purpose', context: 'PUBLIC_CONTEXT',
    summary: 'Public context for knowledge, practical tools and human-governed systems that support self-sovereignty.',
    authority: { summary: 'Provides public purpose and framework context; it does not assign operational authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'NOT_APPLICABLE', note: 'A public purpose and framework is not a software lifecycle claim.', basis: reconciliation }, publication: 'REVIEW_REQUIRED', href: '/vision/',
  },
  {
    key: 'omega', name: 'OMEGA', group: 'governance', context: 'INTERNAL_CAPABILITY',
    summary: 'Durable programme, human and evidence truth context.',
    authority: { summary: 'Holds durable programme, human and evidence truth.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'programme-control', name: 'Programme Control', group: 'governance', context: 'INTERNAL_CAPABILITY',
    summary: 'Programme context for priorities, sequencing, dependencies and lane state.',
    authority: { summary: 'Holds operational programme truth for priorities, sequencing, dependencies and lane state.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'programme-studio', name: 'Programme Studio', group: 'governance', context: 'INTERNAL_CAPABILITY',
    summary: 'Preparation and proposal-work context for programme activity.',
    authority: { summary: 'Prepares proposal work; it is not the operational programme authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'command-centre', name: 'New Earth Command Centre', group: 'governance', context: 'PUBLIC_CONTEXT',
    summary: 'Human review and control surface for seeing what is happening and approving important actions.',
    authority: { summary: 'Provides human review, approval, visibility and control context without replacing underlying system authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'IN_DEVELOPMENT', note: 'Existing public evidence supports a controlled development baseline, not complete integration or approval functionality.', basis: reconciliation }, publication: 'REVIEW_REQUIRED', href: '/projects/command-centre/',
  },
  {
    key: 'company-control', name: 'Company Control', group: 'governance', context: 'INTERNAL_CAPABILITY',
    summary: 'Company operational and control context as already established.',
    authority: { summary: 'Provides company operational and control context; it does not establish ownership of the wider ecosystem.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'platform-core', name: 'Platform Core', group: 'platform', context: 'INTERNAL_CAPABILITY',
    summary: 'Shared contracts, schemas, permissions and capability-boundary context.',
    authority: { summary: 'Defines shared contracts, schemas, permissions and capability boundaries.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('Existing public material describes a future direction; no implementation maturity is asserted here.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'neos', name: 'NEOS', group: 'intelligence', context: 'INTERNAL_CAPABILITY',
    summary: 'Observation layer for comparing intended system state with what actually exists.',
    authority: { summary: 'Observes repository, system and runtime conformance and relationships.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'RESEARCH', note: 'Existing public classification remains research; this does not assert a public technical service or wider operational capability.', basis: reconciliation }, publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'gaia', name: 'GAIA', group: 'intelligence', context: 'INTERNAL_CAPABILITY',
    summary: 'Reasoning and recommendation layer that helps people understand options and prepare decisions.',
    authority: { summary: 'Provides bounded reasoning, recommendation and planning support; it has no autonomous authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'RESEARCH', note: 'Existing public classification remains research; no autonomous or public-service capability is asserted.', basis: reconciliation }, publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'local-ai-runtime', name: 'Local AI Runtime', group: 'intelligence', context: 'INTERNAL_CAPABILITY',
    summary: 'Model and inference service-layer context for local AI capability.',
    authority: { summary: 'Provides model and inference service-layer context; it is not programme or control authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'knowledge-librarian', name: 'Knowledge / Librarian', group: 'knowledge', context: 'INTERNAL_CAPABILITY',
    summary: 'Governed knowledge and intelligent-intake capability context.',
    authority: { summary: 'Owns governed knowledge and intelligent intake capability boundaries.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('The accepted authority boundary does not establish implementation maturity.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'intelligent-file-intake', name: 'Intelligent File Intake', group: 'knowledge', context: 'INTERNAL_CAPABILITY',
    summary: 'Bounded child capability for intelligent file intake.',
    authority: { summary: 'Remains a bounded child capability within the Knowledge / Librarian ownership boundary.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'ckcc', name: 'CKCC', group: 'knowledge', context: 'INTERNAL_CAPABILITY',
    summary: 'Knowledge context that retains its own durable records.',
    authority: { summary: 'Retains its own durable records; direct uncontrolled intake writes are not asserted.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'digital-product-foundry', name: 'Digital Product Foundry', group: 'publishing', context: 'INTERNAL_CAPABILITY',
    summary: 'Governed digital-product state and product-production context.',
    authority: { summary: 'Holds product-state and product-governance context; it is not programme control, a creator workspace or autonomous publishing authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'creator-workspaces', name: 'Creator workspaces', group: 'publishing', context: 'INTERNAL_CAPABILITY',
    summary: 'Creator file and content truth context.',
    authority: { summary: 'Holds creator file and content truth; this does not establish legal ownership beyond the accepted boundary.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'website-publication', name: 'Website / publication layer', group: 'publishing', context: 'PUBLIC_CONTEXT',
    summary: 'Publishing and presentation surface for approved public records.',
    authority: { summary: 'Presents approved public records and does not become canonical programme truth or autonomous publishing authority.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'ESTABLISHED', note: 'The current website implementation exists; autonomous publishing is not established.', basis: reconciliation }, publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'infrastructure', name: 'Infrastructure', group: 'infrastructure', context: 'INTERNAL_CAPABILITY',
    summary: 'Lightweight infrastructure, network and monitoring capability context.',
    authority: { summary: 'Provides infrastructure, network and monitoring capability context; no topology is represented here.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: implementationUnconfirmed('NE-INFRA-NODE-01 remains distinct from future AI compute capability; no implementation maturity is asserted here.'), publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'local-ai-compute', name: 'Future Local AI Compute Node', group: 'infrastructure', context: 'INTERNAL_CAPABILITY',
    summary: 'Future local AI compute capacity context.',
    authority: { summary: 'Provides compute capacity only; it is not programme authority or a control system.', confidence: 'CONFIRMED', basis: reconciliation },
    implementation: { status: 'FUTURE_CANDIDATE', note: 'Captured architecturally as a possible future capability, not as implemented or live.', basis: reconciliation }, publication: 'REVIEW_REQUIRED', canonicalId: 'NE-AI-COMPUTE-01',
  },
  {
    key: 'voice-capability', name: 'Voice capability', group: 'intelligence', context: 'INTERNAL_CAPABILITY',
    summary: 'Candidate reusable local conversational and voice runtime capability.',
    authority: { summary: 'Provides candidate reusable conversational and voice-runtime capability; it is not established as a finished standalone production system.', confidence: 'PROVISIONAL', basis: reconciliation },
    implementation: { status: 'FUTURE_CANDIDATE', note: 'Older Command Dashboard assets are reuse and audit candidates only.', basis: reconciliation }, publication: 'REVIEW_REQUIRED',
  },
  {
    key: 'governed-tools-mcp', name: 'Governed tools / MCP', group: 'platform', context: 'INTERNAL_CAPABILITY',
    summary: 'Governed tool and capability-access context.',
    authority: { summary: 'Provides bounded access to explicitly permitted capabilities; no connected tool or permission detail is asserted.', confidence: 'PROVISIONAL', basis: reconciliation },
    implementation: implementationUnconfirmed('No implementation maturity or integration is asserted in this website dataset.'), publication: 'REVIEW_REQUIRED',
  },
] as const;

export const ecosystemRelationships: readonly EcosystemRelationship[] = [
  {
    from: 'intelligent-file-intake', to: 'knowledge-librarian', type: 'bounded-by',
    description: 'Intelligent File Intake remains a bounded child capability within the Knowledge / Librarian boundary.',
    basis: 'ACCEPTED_RESPONSIBILITY', confidence: 'CONFIRMED', publication: 'REVIEW_REQUIRED', evidence: reconciliation,
  },
] as const;

export const getPublicApprovedNodes = () => ecosystemNodes.filter((node) => node.publication === 'PUBLIC_APPROVED');

export const getPublicApprovedRelationships = () => {
  const approvedKeys = new Set(getPublicApprovedNodes().map((node) => node.key));
  return ecosystemRelationships.filter((relationship) => relationship.publication === 'PUBLIC_APPROVED'
    && approvedKeys.has(relationship.from) && approvedKeys.has(relationship.to));
};
