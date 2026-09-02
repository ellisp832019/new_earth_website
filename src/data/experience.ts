export type ExperienceContextId =
  | 'neutral'
  | 'vision'
  | 'systems'
  | 'practice'
  | 'community'
  | 'editorial'
  | 'legal';

export type ExperienceContext = {
  id: ExperienceContextId;
  label: string;
  meaning: string;
};

export const experienceContexts: Record<ExperienceContextId, ExperienceContext> = {
  neutral: { id: 'neutral', label: 'New Earth', meaning: 'A living framework for conscious civilisation' },
  vision: { id: 'vision', label: 'Vision', meaning: 'Why this direction matters' },
  systems: { id: 'systems', label: 'System', meaning: 'What is being built and explored' },
  practice: { id: 'practice', label: 'In practice', meaning: 'How local capability can grow' },
  community: { id: 'community', label: 'Community', meaning: 'Ways to participate and connect' },
  editorial: { id: 'editorial', label: 'Story & context', meaning: 'People, perspective and learning' },
  legal: { id: 'legal', label: 'Trust & governance', meaning: 'Public terms, boundaries and responsibilities' },
};

const routeContextRules: Array<[RegExp, ExperienceContextId]> = [
  [/^\/(vision|manifesto|blueprint)(\/|$)/, 'vision'],
  [/^\/(ecosystem|projects)(\/|$)/, 'systems'],
  [/^\/new-earth-in-practice(\/|$)/, 'practice'],
  [/^\/(get-involved|contact)(\/|$)/, 'community'],
  [/^\/(about|team|founders-journey|journal)(\/|$)/, 'editorial'],
  [/^\/legal(\/|$)/, 'legal'],
];

export function getExperienceContext(pathname: string): ExperienceContext {
  const contextId = routeContextRules.find(([pattern]) => pattern.test(pathname))?.[1] ?? 'neutral';
  return experienceContexts[contextId];
}
