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

// No individual product is public yet. The current authority identifies creator
// families only; it does not verify a product title, format, rights, delivery or
// purchase pathway. Add records only after those publication gates are approved.
export const publicProducts: ProductRecord[] = [];
