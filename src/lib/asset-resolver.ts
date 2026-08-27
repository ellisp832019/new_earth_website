export const localPreview = process.env.PUBLIC_ASSET_MODE !== 'PUBLIC';
export function assetUrl(asset:{path:string;publicBuildReady:boolean}){if(!localPreview||!asset.publicBuildReady)return undefined;return `/local-assets/${asset.path}`;}
export function canRenderLocally(asset:{ownerUseApproved:boolean}){return localPreview&&asset.ownerUseApproved;}
