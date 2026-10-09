import {
  ecosystemNodes,
  getPublicApprovedNodes,
  humanAuthorityProgression,
  type EcosystemNode,
} from './ecosystem';

export type SimpleVisitorModelGroup = {
  id: 'purpose-people' | 'human-governance' | 'knowledge-intelligence' | 'building-products' | 'infrastructure-tools';
  title: string;
  summary: string;
  representativeKeys: readonly string[];
};

export const simpleVisitorModelGroups: readonly SimpleVisitorModelGroup[] = [
  {
    id: 'purpose-people',
    title: 'Purpose & People',
    summary: 'New Earth helps people build knowledge, practical capability and informed choice, with meaningful human control and responsibility.',
    representativeKeys: ['new-earth-purpose'],
  },
  {
    id: 'human-governance',
    title: 'Human Governance',
    summary: 'People remain responsible for direction, important decisions and approvals. Tools can help prepare work and make it easier to review.',
    representativeKeys: ['programme-control', 'command-centre'],
  },
  {
    id: 'knowledge-intelligence',
    title: 'Knowledge & Intelligence',
    summary: 'Knowledge and reasoning tools are intended to help people find useful information, explore options and prepare decisions. Human judgement remains essential.',
    representativeKeys: ['knowledge-librarian', 'gaia'],
  },
  {
    id: 'building-products',
    title: 'Building & Products',
    summary: 'This area brings together creating useful resources, developing products and presenting approved work. Creating something does not automatically approve its publication or sale.',
    representativeKeys: ['creator-workspaces', 'digital-product-foundry'],
  },
  {
    id: 'infrastructure-tools',
    title: 'Infrastructure & Tools',
    summary: 'Shared technical foundations and bounded tools are intended to support this work. Their place in the model does not mean every capability is connected or operating.',
    representativeKeys: ['platform-core'],
  },
] as const;

export type SimpleVisitorModelExample = Pick<EcosystemNode, 'key' | 'name' | 'authority' | 'implementation' | 'publication'>;

const byKey = new Map(ecosystemNodes.map((node) => [node.key, node]));

const project = (keys: readonly string[], source: ReadonlyMap<string, EcosystemNode>): SimpleVisitorModelExample[] =>
  keys.map((key) => {
    const node = source.get(key);
    if (!node) throw new Error(`Simple Visitor Model reference not found: ${key}`);
    return node;
  });

export const getDevelopmentSimpleVisitorModel = () => simpleVisitorModelGroups.map((group) => ({
  ...group,
  examples: project(group.representativeKeys, byKey),
}));

export const getPublicApprovedSimpleVisitorModel = () => {
  const approvedByKey = new Map(getPublicApprovedNodes().map((node) => [node.key, node]));
  return simpleVisitorModelGroups.map((group) => ({
    ...group,
    examples: project(group.representativeKeys.filter((key) => approvedByKey.has(key)), approvedByKey),
  }));
};

export { humanAuthorityProgression };
