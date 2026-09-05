export const localPreview = process.env.PUBLIC_ASSET_MODE !== 'PUBLIC';
type GovernedAsset = { path: string; ownerUseApproved: boolean; publicBuildReady: boolean };

export function assetUrl(asset: GovernedAsset) {
  if (localPreview) {
    return asset.ownerUseApproved ? `/local-assets/${asset.path}` : undefined;
  }

  return asset.publicBuildReady ? `/assets/${asset.path}` : undefined;
}

export function canRenderLocally(asset: Pick<GovernedAsset, 'ownerUseApproved'>) {
  return localPreview && asset.ownerUseApproved;
}
