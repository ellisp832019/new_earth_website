import type { PublicStatus } from './public-status';

export type BuildingItem = {
  id: string;
  name: string;
  description: string;
  status: PublicStatus;
  category: string;
  currentState: string;
  futureDirection: string;
  route?: string;
  evidenceRoute?: string;
  public: boolean;
  commerciallyAvailable: boolean;
};

// This is a visitor-facing overview, not a product catalogue or technical
// architecture register. Statuses and links are bounded by the public record.
export const buildingItems: BuildingItem[] = [
  {
    id: 'microgrow',
    name: 'MicroGrow',
    description: 'A local-first growing environment project exploring understandable monitoring, bounded control and diagnostics for a single growing node.',
    status: 'IN_DEVELOPMENT',
    category: 'Growing and resilience',
    currentState: 'A prototype and controlled-validation project with documented implementation and evidence work; further physical validation remains open.',
    futureDirection: 'The next step is controlled validation before any wider rollout is considered.',
    route: '/projects/microgrow/',
    evidenceRoute: '/projects/microgrow/',
    public: true,
    commerciallyAvailable: false,
  },
  {
    id: 'command-centre',
    name: 'New Earth Command Centre',
    description: 'A developing human-facing surface for discovering, navigating and observing selected New Earth technical work.',
    status: 'IN_DEVELOPMENT',
    category: 'Engineering and systems',
    currentState: 'Public evidence describes a controlled development baseline, not finished ecosystem integration or operational readiness.',
    futureDirection: 'Runtime, packaging and integration validation remain controlled development work.',
    route: '/projects/command-centre/',
    evidenceRoute: '/projects/command-centre/',
    public: true,
    commerciallyAvailable: false,
  },
  {
    id: 'neos',
    name: 'NEOS',
    description: 'Engineering intelligence supporting how selected New Earth projects are understood and developed.',
    status: 'RESEARCH',
    category: 'Technology direction',
    currentState: 'Its public relationship is described only in bounded context; no public technical capability is claimed here.',
    futureDirection: 'Any wider public description depends on separate evidence and boundary review.',
    public: false,
    commerciallyAvailable: false,
  },
  {
    id: 'gaia',
    name: 'GAIA',
    description: 'A bounded AI direction being explored to support selected New Earth work.',
    status: 'RESEARCH',
    category: 'Technology direction',
    currentState: 'It is referenced as a distinct system direction, without claiming a public service or deployed capability.',
    futureDirection: 'Public explanation can grow only where its purpose, evidence and limits are clear.',
    public: false,
    commerciallyAvailable: false,
  },
  {
    id: 'platform-core',
    name: 'Platform Core',
    description: 'A foundational technology direction intended to help selected New Earth systems work coherently.',
    status: 'FUTURE_VISION',
    category: 'Technology direction',
    currentState: 'This is a direction, not a public product, platform or claim of current integration.',
    futureDirection: 'Its role will be described only as evidence and public boundaries become ready.',
    public: false,
    commerciallyAvailable: false,
  },
];
