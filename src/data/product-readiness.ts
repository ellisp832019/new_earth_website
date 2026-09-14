import type { PublicStatus } from './public-status';
import type { ProductRecord } from './products';

export type ProductReadinessState = 'DRAFT' | 'COMING_SOON' | 'READY_FOR_COMMERCE_ACTIVATION' | 'AVAILABLE';
export type ReadinessResolution = 'UNRESOLVED' | 'APPROVED' | 'NOT_APPLICABLE';

export interface ReadinessField {
  status: ReadinessResolution;
  value?: string;
  note: string;
}

export interface ProductReadinessRecord {
  id: string;
  productId: string;
  state: ProductReadinessState;
  title: ReadinessField;
  creator: ReadinessField;
  family: ReadinessField;
  ownership: ReadinessField;
  rights: ReadinessField;
  version: ReadinessField;
  format: ReadinessField;
  sourceFile: ReadinessField;
  publicDeliveryFile: ReadinessField;
  coverAsset: ReadinessField;
  description: ReadinessField;
  price: ReadinessField;
  currency: ReadinessField;
  territory: ReadinessField;
  sellerOfRecord: ReadinessField;
  vatTaxTreatment: ReadinessField;
  refundCancellation: ReadinessField;
  supportRoute: ReadinessField;
  deliveryMethod: ReadinessField;
  purchaseProvider: ReadinessField;
  accessibility: ReadinessField;
  publicStatus: ReadinessField;
  seoSocialMetadata: ReadinessField;
  privacyDataImplications: ReadinessField;
}

export const productReadinessStates = {
  DRAFT: { publicStatus: 'FUTURE_VISION', cta: 'Product details in preparation' },
  COMING_SOON: { publicStatus: 'COMING_SOON', cta: 'Coming soon' },
  READY_FOR_COMMERCE_ACTIVATION: { publicStatus: 'COMING_SOON', cta: 'Purchase pathway being prepared' },
  AVAILABLE: { publicStatus: 'AVAILABLE', cta: 'Get product' },
} as const satisfies Record<ProductReadinessState, { publicStatus: PublicStatus; cta: string }>;

const unresolved = (note: string): ReadinessField => ({ status: 'UNRESOLVED', note });

// This is a readiness control, not a product record. It is deliberately
// unassigned because tracked authority identifies creator families but no
// individual offer with approved commercial details.
export const firstProductReadiness: ProductReadinessRecord = {
  id: 'FIRST-PRODUCT-UNASSIGNED',
  productId: 'UNASSIGNED',
  state: 'DRAFT',
  title: unresolved('No approved individual product title.'),
  creator: unresolved('No creator approval for a specific product.'),
  family: unresolved('Choose an approved creator family after a product is identified.'),
  ownership: unresolved('Owner/business decision required.'),
  rights: unresolved('Rights and attribution approval required.'),
  version: unresolved('Version must be assigned to an approved product.'),
  format: unresolved('Format is not approved.'),
  sourceFile: unresolved('Master/source file must remain in private controlled storage.'),
  publicDeliveryFile: unresolved('A reviewed delivery artefact has not been approved.'),
  coverAsset: unresolved('No approved product cover exists.'),
  description: unresolved('Public description requires an approved product.'),
  price: unresolved('No approved price.'),
  currency: unresolved('Initial currency decision required.'),
  territory: unresolved('Initial sales territory decision required.'),
  sellerOfRecord: unresolved('Confirm the legal seller; do not assume New Earth Advanced Technologies Ltd.'),
  vatTaxTreatment: unresolved('Owner/legal decision required before any sale.'),
  refundCancellation: unresolved('Owner/legal decision required before any sale.'),
  supportRoute: unresolved('Existing Contact route is the temporary enquiry boundary; product support process is not approved.'),
  deliveryMethod: unresolved('Choose approved provider-hosted, secure-link or controlled manual fulfilment.'),
  purchaseProvider: unresolved('Provider selection and data-processing review required.'),
  accessibility: unresolved('Review the approved product and delivery experience before publication.'),
  publicStatus: unresolved('Public status follows the approved readiness state.'),
  seoSocialMetadata: unresolved('Create approved product metadata and social asset after the product is identified.'),
  privacyDataImplications: unresolved('Document provider, checkout, receipt and delivery data flows before activation.'),
};

export const productReadinessRecords: ProductReadinessRecord[] = [firstProductReadiness];

export const commerceActivationFields = [
  'title', 'creator', 'family', 'ownership', 'rights', 'version', 'format',
  'publicDeliveryFile', 'coverAsset', 'description', 'price', 'currency',
  'territory', 'sellerOfRecord', 'vatTaxTreatment', 'refundCancellation',
  'supportRoute', 'deliveryMethod', 'purchaseProvider', 'accessibility',
  'publicStatus', 'seoSocialMetadata', 'privacyDataImplications',
] as const satisfies ReadonlyArray<keyof ProductReadinessRecord>;

export const getProductReadiness = (id?: string) =>
  productReadinessRecords.find((record) => record.id === id);

export const canActivateCommerce = (product: ProductRecord, readiness?: ProductReadinessRecord) =>
  product.readinessState === 'AVAILABLE'
  && product.publicStatus === 'AVAILABLE'
  && Boolean(product.purchaseUrl)
  && readiness?.state === 'AVAILABLE'
  && commerceActivationFields.every((field) => readiness[field].status === 'APPROVED');

export const productCtaState = (product: ProductRecord, readiness?: ProductReadinessRecord) => {
  if (canActivateCommerce(product, readiness)) return { label: 'Get product', href: product.purchaseUrl };
  return { label: productReadinessStates[product.readinessState].cta };
};
