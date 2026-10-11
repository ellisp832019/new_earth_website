import { futureBuildMethod } from './ecosystem';
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

export type BuildMethodStepKey = (typeof futureBuildMethod)[number];

export type BuildMethodStep = {
  key: BuildMethodStepKey;
  label: string;
  summary: string;
  question: string;
  evidenceOutput: string;
  humanBoundary: string;
  doesNotMean: string;
};

export type BuildMethodGroup = {
  title: string;
  stepKeys: readonly BuildMethodStepKey[];
};

const buildMethodDetails: Record<BuildMethodStepKey, Omit<BuildMethodStep, 'key' | 'label'>> = {
  DISCOVER: {
    summary: 'Understand the need, the people affected, what already exists and what the evidence actually shows.',
    question: 'What is needed, and what do we know already?',
    evidenceOutput: 'A grounded need, relevant existing work, sources and explicit unknowns.',
    humanBoundary: 'Discovery stays within permitted information access and privacy boundaries.',
    doesNotMean: 'A new idea automatically requires a new project, or finding something grants permission to use it.',
  },
  REUSE: {
    summary: 'Recover useful previous capability and adapt proven portions where that is safe and appropriate.',
    question: 'What can be reused, adapted or learned from before building again?',
    evidenceOutput: 'A clear reuse decision, including the limits of what can safely carry forward.',
    humanBoundary: 'Reuse preserves ownership, authority, evidence and current truth.',
    doesNotMean: 'Reuse overrides safety, suitability, permission or the need to test in the present context.',
  },
  DEFINE: {
    summary: 'Describe the intended public value, boundaries and a useful first outcome clearly enough to review.',
    question: 'What are we trying to make clearer or more useful?',
    evidenceOutput: 'A bounded purpose, a first useful outcome and criteria for review.',
    humanBoundary: 'People decide what is worth defining and whose needs are in scope.',
    doesNotMean: 'A definition proves that a solution is ready, complete or universally applicable.',
  },
  BOUND: {
    summary: 'Set the public, privacy, claims, safety and scope limits before work expands.',
    question: 'What must this work not claim, expose or decide?',
    evidenceOutput: 'Clear exclusions, assumptions, risks and approval needs.',
    humanBoundary: 'Boundaries are governed choices, not optional implementation detail.',
    doesNotMean: 'A boundary is a promise that every unknown or future risk has been removed.',
  },
  APPROVE: {
    summary: 'Seek the appropriate human approval for the bounded work before consequential action begins.',
    question: 'Who needs to authorise this next step, and what are they approving?',
    evidenceOutput: 'A recorded decision, scope and any conditions for proceeding.',
    humanBoundary: 'Recommendations can inform approval; they are not approval themselves.',
    doesNotMean: 'Every small action needs the same person or level of approval.',
  },
  BUILD: {
    summary: 'Create the smallest useful, bounded change that can be examined honestly.',
    question: 'What is the smallest useful thing we can make or improve?',
    evidenceOutput: 'A reviewable implementation with its limits still visible.',
    humanBoundary: 'Work remains within the approved scope and public/private boundary.',
    doesNotMean: 'Building means silently replacing useful existing work or expanding the scope without review.',
  },
  TEST: {
    summary: 'Check whether the change works as intended across the relevant practical, technical and accessibility conditions.',
    question: 'Does it work reliably enough for the limited purpose we described?',
    evidenceOutput: 'Test results, observed limitations and follow-up work where needed.',
    humanBoundary: 'People decide what testing is proportionate and how limitations are communicated.',
    doesNotMean: 'A passing test proves broader readiness, safety or suitability beyond what was tested.',
  },
  'REVIEW EVIDENCE': {
    summary: 'Examine the evidence, claims and limitations before deciding whether anything should be released or carried forward.',
    question: 'What does the evidence support, and what remains uncertain?',
    evidenceOutput: 'A reviewed account of what can be said, what cannot yet be said and what needs more work.',
    humanBoundary: 'Evidence review keeps consequential claims and release decisions human-governed.',
    doesNotMean: 'Reviewing evidence is the same as testing, or that a review automatically authorises release.',
  },
  'RELEASE DELIBERATELY': {
    summary: 'Make an approved, bounded outcome available only when its public value and limitations are clear.',
    question: 'Is there a useful, truthful and appropriately approved reason to make this available now?',
    evidenceOutput: 'A deliberate release decision, with accurate public framing and a way to verify it.',
    humanBoundary: 'Publication and consequential release remain human-governed unless explicit future governance permits otherwise.',
    doesNotMean: 'Every completed change must be published, sold or made generally available.',
  },
  LEARN: {
    summary: 'Carry evidence, limitations and useful lessons into the next bounded decision.',
    question: 'What should change, continue or stop because of what we learned?',
    evidenceOutput: 'A clear learning record that informs the next discovery or reuse decision.',
    humanBoundary: 'People remain responsible for interpreting learning and deciding what follows.',
    doesNotMean: 'Learning turns the method into an automatic loop or replaces deliberate review.',
  },
};

// The source order is owned by the ecosystem data. This presentation model adds
// public explanation only; it does not create a second lifecycle or authority model.
export const buildMethodSteps: readonly BuildMethodStep[] = futureBuildMethod.map((key) => ({
  key,
  label: key,
  ...buildMethodDetails[key],
}));

export const buildMethodGroups: readonly BuildMethodGroup[] = [
  { title: 'Discover & reuse', stepKeys: ['DISCOVER', 'REUSE'] },
  { title: 'Shape & authorise', stepKeys: ['DEFINE', 'BOUND', 'APPROVE'] },
  { title: 'Build & test', stepKeys: ['BUILD', 'TEST'] },
  { title: 'Review & release', stepKeys: ['REVIEW EVIDENCE', 'RELEASE DELIBERATELY'] },
  { title: 'Learn & carry forward', stepKeys: ['LEARN'] },
];

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
