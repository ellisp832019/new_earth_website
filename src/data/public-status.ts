export const publicStatuses = {
  AVAILABLE: {
    label: 'Available',
    meaning: 'Approved for public use or purchase through a defined, active pathway.',
  },
  COMING_SOON: {
    label: 'Coming Soon',
    meaning: 'An approved offer is being prepared, but is not yet available.',
  },
  IN_DEVELOPMENT: {
    label: 'In Development',
    meaning: 'Active practical work is underway; it is not presented as available.',
  },
  RESEARCH: {
    label: 'Research',
    meaning: 'Exploratory work or investigation; no availability or outcome is implied.',
  },
  FUTURE_VISION: {
    label: 'Future Vision',
    meaning: 'A longer-term direction or concept, not current delivery.',
  },
} as const;

export type PublicStatus = keyof typeof publicStatuses;

export const currentMaturityToPublicStatus = {
  'ACTIVE DEVELOPMENT': 'IN_DEVELOPMENT',
  PROTOTYPE: 'IN_DEVELOPMENT',
  RESEARCH: 'RESEARCH',
  'CONCEPT / FUTURE': 'FUTURE_VISION',
  'PUBLIC INFORMATION ONLY': 'FUTURE_VISION',
} as const satisfies Record<string, PublicStatus>;

// This model is public-facing. It does not supersede project evidence, release
// approval, product safety, rights, accessibility, privacy or commerce gates.
