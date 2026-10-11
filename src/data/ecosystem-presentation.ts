import {
  ecosystemNodes,
  getPublicApprovedNodes,
  humanAuthorityProgression,
  type ArchitectureStatus,
  type EcosystemNode,
  type Group,
} from './ecosystem';

export const candidateEcosystemRecordKeys = [
  'new-earth-purpose',
  'programme-control',
  'command-centre',
  'knowledge-librarian',
  'gaia',
  'creator-workspaces',
  'digital-product-foundry',
  'platform-core',
  'website-publication',
] as const;

type CandidateKey = typeof candidateEcosystemRecordKeys[number];

type CandidatePresentation = {
  subtitle?: string;
  summary: string;
  implementationQualification: string;
};

const candidatePresentation: Record<CandidateKey, CandidatePresentation> = {
  'new-earth-purpose': {
    summary: 'The purpose and framework behind work that supports knowledge, practical capability and human agency.',
    implementationQualification: 'Purpose and framework are not a software maturity claim.',
  },
  'programme-control': {
    summary: 'Programme context for priorities, sequencing and dependencies.',
    implementationQualification: 'Implementation maturity is not confirmed in this website record.',
  },
  'command-centre': {
    subtitle: 'Human Review & Control',
    summary: 'A developing human-facing surface for finding, viewing and navigating related work, with human review and control as its architectural role.',
    implementationQualification: 'Current evidence supports a desktop shell and controlled development baseline; complete integration and approval functionality are not established.',
  },
  'knowledge-librarian': {
    subtitle: 'Knowledge & Evidence',
    summary: 'Context for governed knowledge and intelligent intake.',
    implementationQualification: 'Implementation maturity is not confirmed; this record does not establish an implemented service.',
  },
  gaia: {
    subtitle: 'Reasoning & Recommendation',
    summary: 'Research into bounded reasoning, recommendations and preparation of decisions.',
    implementationQualification: 'This does not establish a public service or autonomous operational capability.',
  },
  'creator-workspaces': {
    summary: 'The context in which creators’ files and content are held.',
    implementationQualification: 'Implementation maturity is not confirmed in this website record.',
  },
  'digital-product-foundry': {
    subtitle: 'Product Governance',
    summary: 'Context for governed product state and digital-product production.',
    implementationQualification: 'Implementation maturity is not confirmed in this architecture record.',
  },
  'platform-core': {
    subtitle: 'Shared Foundations',
    summary: 'Shared contracts, schemas and capability boundaries for technical work.',
    implementationQualification: 'Existing public material describes a future direction; implementation maturity is not confirmed here.',
  },
  'website-publication': {
    summary: 'The place where approved information about New Earth is presented publicly.',
    implementationQualification: 'The website exists; this does not establish autonomous publishing or readiness of every capability described.',
  },
};

export const implementationStatusLabels: Record<ArchitectureStatus, string> = {
  ESTABLISHED: 'Existing implementation',
  IN_DEVELOPMENT: 'In development',
  PROTOTYPE: 'Prototype',
  RESEARCH: 'Research',
  PLANNED: 'Planned',
  FUTURE_CANDIDATE: 'Future possibility',
  REUSE_CANDIDATE: 'Candidate for reuse',
  ARCHITECTURE_ONLY: 'Architecture concept',
  UNCONFIRMED: 'Implementation not confirmed here',
  NOT_APPLICABLE: 'Purpose/framework — maturity not applicable',
};

export const candidateGroupOrder: readonly Group[] = [
  'purpose',
  'governance',
  'intelligence',
  'knowledge',
  'publishing',
  'platform',
];

export const candidateGroupTitles: Record<Group, string> = {
  purpose: 'Purpose, people and framework',
  governance: 'Human governance and control',
  platform: 'Platform and contracts',
  intelligence: 'Intelligence and observation',
  knowledge: 'Knowledge and evidence',
  publishing: 'Creators, products and publishing',
  infrastructure: 'Runtime and infrastructure',
  'practical-work': 'Projects, research and practical work',
};

export type CandidateEcosystemRecord = EcosystemNode & CandidatePresentation & { implementationLabel: string };

const sourceByKey = new Map(ecosystemNodes.map((node) => [node.key, node]));

const candidateRecord = (key: CandidateKey): CandidateEcosystemRecord => {
  const source = sourceByKey.get(key);
  if (!source) throw new Error(`Candidate ecosystem record not found: ${key}`);
  return { ...source, ...candidatePresentation[key], implementationLabel: implementationStatusLabels[source.implementation.status] };
};

export const getCandidateEcosystemGroups = () => candidateGroupOrder
  .map((group) => ({
    group,
    title: candidateGroupTitles[group],
    records: candidateEcosystemRecordKeys
      .map(candidateRecord)
      .filter((record) => record.group === group),
  }))
  .filter((group) => group.records.length > 0);

export const getPublicApprovedEcosystemGroups = () => {
  const approvedByKey = new Map(getPublicApprovedNodes().map((node) => [node.key, node]));
  return candidateGroupOrder
    .map((group) => ({
      group,
      title: candidateGroupTitles[group],
      records: candidateEcosystemRecordKeys
        .filter((key) => approvedByKey.has(key))
        .map(candidateRecord)
        .filter((record) => record.group === group),
    }))
    .filter((group) => group.records.length > 0);
};

export { humanAuthorityProgression };
