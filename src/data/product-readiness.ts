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
const approved = (value: string, note: string): ReadinessField => ({ status: 'APPROVED', value, note });

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

export const aiMadeSimpleReadiness: ProductReadinessRecord = {
  id: 'NE-DP-001-READINESS',
  productId: 'NE-DP-001',
  state: 'COMING_SOON',
  title: approved('AI Made Simple', 'Verified product title for the local Coming Soon preview.'),
  creator: approved('Peter Ellis', 'Verified creator attribution for the local Coming Soon preview.'),
  family: approved('New Earth Practical Guides', 'Verified series/family for the local Coming Soon preview.'),
  ownership: unresolved('Legal ownership configuration remains a launch gate.'),
  rights: unresolved('Final commercial rights configuration remains a launch gate.'),
  version: approved('Edition 1.1', 'Verified candidate edition; rc1 is retained in private release controls.'),
  format: approved('Digital PDF learning pack', 'Verified preview format.'),
  sourceFile: unresolved('Private source remains outside public delivery.'),
  publicDeliveryFile: unresolved('No paid delivery file may be exposed before commerce approval.'),
  coverAsset: approved('ai-made-simple-cover.png', 'Verified local-preview cover asset.'),
  description: approved('Approved candidate public preview copy.', 'Supports the local Coming Soon presentation.'),
  price: approved('Planned launch price — £9.99', 'Price direction only; not a current offer or tax-confirmed total.'),
  currency: approved('GBP', 'Verified candidate price currency.'),
  territory: unresolved('Selling territories remain a launch gate.'),
  sellerOfRecord: unresolved('Legal seller remains a launch gate.'),
  vatTaxTreatment: unresolved('VAT/tax treatment remains a launch gate.'),
  refundCancellation: unresolved('Refund/cancellation terms remain a launch gate.'),
  supportRoute: unresolved('Customer support route remains a launch gate.'),
  deliveryMethod: unresolved('Delivery method remains a launch gate.'),
  purchaseProvider: unresolved('Purchase provider remains a launch gate.'),
  accessibility: approved('Selectable teaching text; printable, non-fillable worksheets; PDF/UA and assistive-technology testing not completed.', 'This is a limitation statement, not a claim of formal accessibility conformance.'),
  publicStatus: approved('COMING_SOON', 'Not available for purchase or delivery.'),
  seoSocialMetadata: approved('Candidate metadata and cover are available for local preview review.', 'Public publication remains separately gated.'),
  privacyDataImplications: unresolved('Checkout, receipt, delivery and provider data flows remain a launch gate.'),
};

export const productReadinessRecords: ProductReadinessRecord[] = [firstProductReadiness, aiMadeSimpleReadiness];

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
