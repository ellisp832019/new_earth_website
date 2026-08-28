export type ProjectRecord = {
  name: string;
  shortDescription: string;
  slug: string;
  category: string;
  maturity: 'ACTIVE DEVELOPMENT' | 'PROTOTYPE' | 'RESEARCH' | 'CONCEPT / FUTURE' | 'PUBLIC INFORMATION ONLY';
  publicStatus: 'NOT YET PUBLIC' | 'PUBLIC-ENABLED';
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
  primaryVisual?: { src: string; alt: string; provenance: string };
};

// Catalogue recognition does not publish a page. Add an entry only after the
// complete publication ladder and explicit public-enabled decision are met.
export const publicProjects: ProjectRecord[] = [];
