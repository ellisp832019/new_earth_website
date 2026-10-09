import type { PublicStatus } from './public-status';
import type { ProductReadinessState } from './product-readiness';

export type ProductFamilyId = 'practical-guides' | 'conscious-living';

export interface ProductFamily {
  id: ProductFamilyId;
  title: string;
  creator: string;
  description: string;
  route: string;
}

export interface ProductRecord {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  family: ProductFamilyId;
  creator: string;
  summary: string;
  description: string;
  publicStatus: PublicStatus;
  readinessState: ProductReadinessState;
  readinessId: string;
  version: string;
  format: string;
  priceDisplay?: string;
  currency?: string;
  coverAsset?: string;
  socialAsset?: string;
  availabilityNote: string;
  deliveryNote: string;
  supportNote: string;
  rightsNote: string;
  rightsApproved: boolean;
  published: boolean;
  publicEnabled: boolean;
  previewOnly?: boolean;
  purchaseUrl?: string;
  bundleEligible: boolean;
  bundleContents?: string[];
}

export const productFamilies: ProductFamily[] = [
  {
    id: 'practical-guides',
    title: 'New Earth Practical Guides',
    creator: 'Peter-led creator family',
    description: 'A future family for approved practical guidance connected with New Earth work.',
    route: '/digital-products/practical-guides/',
  },
  {
    id: 'conscious-living',
    title: 'New Earth Conscious Living',
    creator: 'Hayley-led creator family',
    description: 'A future family for approved conscious-living resources.',
    route: '/digital-products/conscious-living/',
  },
];

// `publicEnabled` allows a product route to be generated. A preview-only record
// remains excluded from PUBLIC_ASSET_MODE=PUBLIC builds until it has a separate
// publication approval.
export const publicProducts: ProductRecord[] = [
  {
    id: 'NE-DP-001',
    slug: 'ai-made-simple',
    title: 'AI Made Simple',
    shortTitle: 'AI Made Simple',
    family: 'practical-guides',
    creator: 'Peter Ellis',
    summary: 'A practical first step into AI, with your judgement still in charge.',
    description: 'A plain-English guide and starter pack for everyday tasks, clearer prompts and answers you know how to check.',
    publicStatus: 'COMING_SOON',
    readinessState: 'COMING_SOON',
    readinessId: 'NE-DP-001-READINESS',
    version: 'Edition 1.1',
    format: 'Digital PDF learning pack',
    priceDisplay: 'Planned launch price — £9.99',
    currency: 'GBP',
    coverAsset: '/local-assets/digital-products/ai-made-simple/ai-made-simple-cover.png',
    socialAsset: '/local-assets/digital-products/ai-made-simple/ai-made-simple-cover.png',
    availabilityNote: 'Coming Soon. The product is being prepared for release.',
    deliveryNote: 'Digital PDF delivery will be confirmed before the product becomes available.',
    supportNote: 'Customer support and delivery arrangements will be confirmed before release.',
    rightsNote: 'Creator attribution is Peter Ellis. Final commercial rights configuration remains launch-gated.',
    rightsApproved: false,
    published: false,
    publicEnabled: true,
    previewOnly: true,
    bundleEligible: false,
  },
];
