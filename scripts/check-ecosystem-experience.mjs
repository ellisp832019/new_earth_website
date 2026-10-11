import { access, readFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [ecosystemSource, presentationSource, routeSource, componentSource, currentPageSource, homepageSource, sitemapSource, layoutSource, localAssetScript, publicAssetScript] = await Promise.all([
  read('../src/data/ecosystem.ts'),
  read('../src/data/ecosystem-presentation.ts'),
  read('../src/pages/ecosystem/[preview].astro'),
  read('../src/components/EcosystemArchitectureView.astro'),
  read('../src/pages/ecosystem/index.astro'),
  read('../src/pages/index.astro'),
  read('../src/pages/sitemap.xml.ts'),
  read('../src/layouts/BaseLayout.astro'),
  read('./prepare-local-assets.mjs'),
  read('./prepare-public-assets.mjs'),
]);

const presentationModule = presentationSource.replace(/import\s*\{[\s\S]*?\}\s*from '\.\/ecosystem';\r?\n/, '');
const transpiled = ts.transpileModule(`${ecosystemSource}\n${presentationModule}`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});
const failures = [];
if (transpiled.diagnostics?.length) failures.push('Unable to transpile ecosystem candidate presentation data.');
const data = await import(`data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`);
const expectedKeys = ['new-earth-purpose', 'programme-control', 'command-centre', 'knowledge-librarian', 'gaia', 'creator-workspaces', 'digital-product-foundry', 'platform-core', 'website-publication'];
const excludedKeys = ['omega', 'programme-studio', 'company-control', 'neos', 'local-ai-runtime', 'intelligent-file-intake', 'ckcc', 'infrastructure', 'local-ai-compute', 'voice-capability', 'governed-tools-mcp'];
const progression = ['OBSERVE', 'RECOMMEND', 'PREPARE', 'EXECUTE WITH APPROVAL', 'PRE-AUTHORISED EXECUTION ONLY WHEN EXPLICITLY PERMITTED'];
const privatePattern = /(?:https?:\/\/|\blocalhost\b|(?:\d{1,3}\.){3}\d{1,3}|[A-Z]:\\|\/(?:home|var|etc|users)\/|\b(?:api[ _-]?key|credential|password|token|database|dashboard url|endpoint|hostname|repository mapping)\b)/i;

if (JSON.stringify(data.candidateEcosystemRecordKeys) !== JSON.stringify(expectedKeys)) failures.push('Candidate key set differs from the approved nine records.');
if (new Set(data.candidateEcosystemRecordKeys).size !== 9) failures.push('Candidate must contain exactly nine unique records.');
const approvedKeys = new Set(expectedKeys);
const actualApprovedKeys = new Set(data.getPublicApprovedNodes().map((node) => node.key));
if (actualApprovedKeys.size !== 9 || [...approvedKeys].some((key) => !actualApprovedKeys.has(key))) failures.push('Public selector differs from the approved nine-record set.');
if (data.ecosystemNodes.filter((node) => node.publication === 'REVIEW_REQUIRED').length !== 11 || data.ecosystemNodes.filter((node) => node.publication === 'REVIEW_REQUIRED').some((node) => !excludedKeys.includes(node.key))) failures.push('Deferred architecture records differ from the approved eleven-record set.');
if (data.ecosystemRelationships.length !== 1 || /ecosystem-architecture__(?:relationship|edge|connector)\b/i.test(componentSource)) failures.push('Candidate must render zero architecture relationship edges.');
if (data.ecosystemNodes.filter((node) => node.canonicalId).some((node) => node.canonicalId !== 'NE-AI-COMPUTE-01')) failures.push('Unsupported canonical ID found in source data.');
if (privatePattern.test(presentationSource)) failures.push('Private implementation detail detected in presentation adapter.');
if (!/implementationQualification/.test(componentSource) || !/implementationLabel/.test(componentSource) || !/authority\.confidence/.test(componentSource)) failures.push('Authority and implementation details are not visibly distinct.');
if (JSON.stringify(data.humanAuthorityProgression) !== JSON.stringify(progression)) failures.push('Human authority progression differs from the approved sequence.');
if (!/preview:\s*'simple'/.test(routeSource) || !/preview:\s*'review'/.test(routeSource) || !/import\.meta\.env\.DEV/.test(routeSource)) failures.push('Candidate route is not development-only.');
if (!/canonical=""/.test(routeSource) || !/noindex=\{true\}/.test(routeSource)) failures.push('Candidate route must be noindex without a canonical URL.');
const purposeVisual = 'NE-ECOSYSTEM-VIS-001_purpose-framework.png';
const commandCentreVisual = 'CCV2-EVID-002_current-cockpit.jpg';
const priorKnowledgeVisual = 'NE-ECOSYSTEM-VIS-004_knowledge-librarian.png';
const knowledgeVisual = 'NE-ECOSYSTEM-VIS-004A_knowledge-librarian-ui-concept.png';
const priorGaiaVisual = 'NE-ECOSYSTEM-VIS-005_gaia-reasoning-recommendation.png';
const gaiaVisual = 'NE-ECOSYSTEM-VIS-005A_gaia-reasoning-human-decision.png';
if (!routeSource.includes(`/local-assets/ecosystem/${purposeVisual}`) || !routeSource.includes('Conceptual illustration connecting people, home, community, nature and the planet within the New Earth framework.')) failures.push('Review route is missing the approved conceptual purpose/framework visual or its required alt text.');
if (!currentPageSource.includes(`/assets/ecosystem/${purposeVisual}`) || !currentPageSource.includes('Conceptual illustration connecting people, home, community, nature and the planet within the New Earth framework.')) failures.push('Canonical page is missing the approved purpose/framework visual or its required alt text.');
if (!localAssetScript.includes(`ASSETS/05_SYSTEMS/ecosystem/visuals/${purposeVisual}`) || !publicAssetScript.includes(`05_SYSTEMS/ecosystem/visuals/${purposeVisual}`)) failures.push('Purpose/framework visual is missing from an approved asset pipeline.');
if (!await access(new URL(`../ASSETS/05_SYSTEMS/ecosystem/visuals/${purposeVisual}`, import.meta.url)).then(() => true, () => false)) failures.push('Approved purpose/framework source visual is missing.');
const commandCentre = data.ecosystemNodes.find((node) => node.key === 'command-centre');
if (!commandCentre || commandCentre.implementation.status !== 'IN_DEVELOPMENT') failures.push('Command Centre implementation state must remain IN_DEVELOPMENT.');
if (componentSource.includes('CC-VIS-001A_command-centre-hero-display.png')) failures.push('Historical Command Centre evidence is still used for the current-V2 candidate card.');
if (!componentSource.includes("const assetRoot = publicView ? '/assets' : '/local-assets';") || !componentSource.includes(`command-centre/${commandCentreVisual}`) || !componentSource.includes('New Earth Command Centre V2 daily operating cockpit showing read-only development-projection panels and current operating context.') || !componentSource.includes('does not establish complete integration, backend readiness, approval functionality or production readiness')) failures.push('Current V2 Command Centre evidence visual or its required factual boundary is missing.');
if (!localAssetScript.includes(`ASSETS/08_COMMAND_CENTRE/evidence_v2/${commandCentreVisual}`)) failures.push('Current V2 Command Centre evidence visual is not in the local-preview asset pipeline.');
if (!await access(new URL(`../ASSETS/08_COMMAND_CENTRE/evidence_v2/${commandCentreVisual}`, import.meta.url)).then(() => true, () => false)) failures.push('Current V2 Command Centre cockpit evidence is missing.');
const knowledgeLibrarian = data.ecosystemNodes.find((node) => node.key === 'knowledge-librarian');
if (!knowledgeLibrarian || knowledgeLibrarian.implementation.status !== 'UNCONFIRMED' || knowledgeLibrarian.publication !== 'PUBLIC_APPROVED') failures.push('Knowledge / Librarian must remain UNCONFIRMED and be explicitly public-approved.');
if (!componentSource.includes("record.key === 'knowledge-librarian'") || !componentSource.includes(`ecosystem/${knowledgeVisual}`) || !componentSource.includes('Conceptual Knowledge / Librarian interface showing multiple knowledge sources being organised into contextual search, connected insights and related work.') || !componentSource.includes('Conceptual illustration of governed knowledge, organisation and access. It does not represent an implemented Knowledge / Librarian service.')) failures.push('Knowledge / Librarian conceptual visual or its required factual boundary is missing.');
if ((componentSource.match(new RegExp(knowledgeVisual.replace('.', '\\.'), 'g')) ?? []).length !== 1) failures.push('Knowledge / Librarian conceptual visual must appear only once in the candidate component.');
if (componentSource.includes(priorKnowledgeVisual)) failures.push('Older circular Knowledge / Librarian visual is still referenced by the active candidate card.');
if (!localAssetScript.includes(`ASSETS/05_SYSTEMS/ecosystem/visuals/${knowledgeVisual}`) || !publicAssetScript.includes(`05_SYSTEMS/ecosystem/visuals/${knowledgeVisual}`)) failures.push('Knowledge / Librarian conceptual visual is missing from an approved asset pipeline.');
if (!await access(new URL(`../ASSETS/05_SYSTEMS/ecosystem/visuals/${knowledgeVisual}`, import.meta.url)).then(() => true, () => false)) failures.push('Approved Knowledge / Librarian conceptual source visual is missing.');
const gaia = data.ecosystemNodes.find((node) => node.key === 'gaia');
if (!gaia || gaia.implementation.status !== 'RESEARCH' || gaia.publication !== 'PUBLIC_APPROVED' || !/no autonomous authority/i.test(gaia.authority.summary)) failures.push('GAIA must remain RESEARCH, explicitly public-approved and without autonomous authority.');
if (!componentSource.includes("record.key === 'gaia'") || !componentSource.includes(`ecosystem/${gaiaVisual}`) || !componentSource.includes('Conceptual GAIA reasoning flow showing contextual information feeding analysis and recommendations, followed by human review and decision.') || !componentSource.includes('Conceptual illustration of GAIA supporting context, comparison and recommendations before human review and decision. It does not represent autonomous decision-making or execution.')) failures.push('GAIA conceptual visual or its required human-authority boundary is missing.');
if ((componentSource.match(new RegExp(gaiaVisual.replace('.', '\\.'), 'g')) ?? []).length !== 1) failures.push('GAIA conceptual visual must appear only once in the candidate component.');
if (componentSource.includes(priorGaiaVisual)) failures.push('Original GAIA V04 visual is still referenced by the active candidate card.');
if (!localAssetScript.includes(`ASSETS/05_SYSTEMS/ecosystem/visuals/${priorGaiaVisual}`) || !await access(new URL(`../ASSETS/05_SYSTEMS/ecosystem/visuals/${priorGaiaVisual}`, import.meta.url)).then(() => true, () => false)) failures.push('Original GAIA V04 visual is not retained as governed historical candidate material.');
if (!localAssetScript.includes(`ASSETS/05_SYSTEMS/ecosystem/visuals/${gaiaVisual}`) || !publicAssetScript.includes(`05_SYSTEMS/ecosystem/visuals/${gaiaVisual}`)) failures.push('GAIA conceptual visual is missing from an approved asset pipeline.');
if (!await access(new URL(`../ASSETS/05_SYSTEMS/ecosystem/visuals/${gaiaVisual}`, import.meta.url)).then(() => true, () => false)) failures.push('Approved GAIA conceptual source visual is missing.');
for (const key of excludedKeys) if (presentationSource.includes(`'${key}'`)) failures.push(`Excluded review record appears in candidate adapter: ${key}`);

for (const path of ['src/pages/index.astro', 'src/pages/sitemap.xml.ts', 'src/layouts/BaseLayout.astro']) {
  try { execFileSync('git', ['diff', '--quiet', 'main', '--', path]); } catch { failures.push(`Protected existing file changed: ${path}`); }
}

const sourceFiles = await readdir(new URL('../src/', import.meta.url), { recursive: true });
for (const path of sourceFiles.filter((path) => typeof path === 'string' && path.endsWith('.astro') && path !== 'pages/ecosystem/[preview].astro')) {
  const content = await readFile(new URL(`../src/${path.replaceAll('\\', '/')}`, import.meta.url), 'utf8');
  if (content.includes('/ecosystem/review/')) failures.push(`Incoming candidate link found: src/${path}`);
}

const dist = new URL('../dist/', import.meta.url);
const localPreviewAssetsPresent = await access(new URL('../public/local-assets/', import.meta.url)).then(() => true, () => false);
if (!localPreviewAssetsPresent && await access(dist).then(() => true, () => false)) {
  const files = await readdir(dist, { recursive: true });
  if (files.some((path) => String(path).replaceAll('\\', '/').includes('ecosystem/review'))) failures.push('Candidate route present in distributable output.');
  for (const visual of [purposeVisual, commandCentreVisual, knowledgeVisual, gaiaVisual]) if (!files.some((path) => String(path).replaceAll('\\', '/').includes(visual))) failures.push(`Approved public ecosystem visual missing from distributable output: ${visual}`);
  if (files.some((path) => String(path).replaceAll('\\', '/').includes(priorKnowledgeVisual) || String(path).replaceAll('\\', '/').includes(priorGaiaVisual))) failures.push('Historical conceptual visual present in distributable output.');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Ecosystem experience check passed: nine approved public records, zero public architecture edges and approved visual paths only.');
}
