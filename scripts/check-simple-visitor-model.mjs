import { readFile, readdir } from 'node:fs/promises';
import ts from 'typescript';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [ecosystemSource, adapterSource, routeSource, componentSource] = await Promise.all([
  read('../src/data/ecosystem.ts'),
  read('../src/data/simple-visitor-model.ts'),
  read('../src/pages/ecosystem/[preview].astro'),
  read('../src/components/SimpleVisitorModel.astro'),
]);

const adapterModule = adapterSource.replace(/import\s*\{[\s\S]*?\}\s*from '\.\/ecosystem';\r?\n/, '');
const transpiled = ts.transpileModule(`${ecosystemSource}\n${adapterModule}`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});

const failures = [];
if (transpiled.diagnostics?.length) failures.push('Unable to transpile Simple Visitor Model data.');

const data = await import(`data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`);
const expectedIds = ['purpose-people', 'human-governance', 'knowledge-intelligence', 'building-products', 'infrastructure-tools'];
const expectedKeys = ['new-earth-purpose', 'programme-control', 'command-centre', 'knowledge-librarian', 'gaia', 'creator-workspaces', 'digital-product-foundry', 'platform-core'];
const privatePattern = /(?:https?:\/\/|\blocalhost\b|(?:\d{1,3}\.){3}\d{1,3}|[A-Z]:\\|\/(?:home|var|etc|users)\/|\b(?:api[ _-]?key|credential|password|token|database|dashboard url|endpoint|hostname|repository mapping)\b)/i;

if (data.simpleVisitorModelGroups.length !== 5) failures.push('Simple Visitor Model must have exactly five display groups.');
if (JSON.stringify(data.simpleVisitorModelGroups.map((group) => group.id)) !== JSON.stringify(expectedIds)) failures.push('Display groups differ from the approved set.');
const keys = data.simpleVisitorModelGroups.flatMap((group) => group.representativeKeys);
if (JSON.stringify(keys) !== JSON.stringify(expectedKeys) || new Set(keys).size !== keys.length) failures.push('Representative selection differs from the approved unique key set.');
if (data.ecosystemNodes.some((node) => node.publication !== 'REVIEW_REQUIRED')) failures.push('A source architecture record is no longer REVIEW_REQUIRED.');
if (data.getPublicApprovedNodes().length !== 0 || data.getPublicApprovedRelationships().length !== 0) failures.push('Public selectors must expose zero records during review.');
if (data.ecosystemRelationships.length !== 1) failures.push('Simple Visitor Model must not add relationships.');
const progression = ['OBSERVE', 'RECOMMEND', 'PREPARE', 'EXECUTE WITH APPROVAL', 'PRE-AUTHORISED EXECUTION ONLY WHEN EXPLICITLY PERMITTED'];
if (JSON.stringify(data.humanAuthorityProgression) !== JSON.stringify(progression)) failures.push('Human authority progression differs from the approved sequence.');
if (privatePattern.test(adapterSource)) failures.push('Private implementation detail detected in visitor adapter.');
if (!/import\.meta\.env\.DEV\s*\?\s*\[\{\s*params:\s*\{\s*preview:\s*'simple'\s*\}\s*\}\]\s*:\s*\[\]/.test(routeSource)) failures.push('Preview route is not explicitly constrained to local development and /simple/.');
if (!/canonical=""/.test(routeSource) || !/noindex=\{true\}/.test(routeSource)) failures.push('Preview route must have no canonical URL and must be noindex.');
if (!/simple-visitor-model__qualification/.test(componentSource)) failures.push('Visible visitor-model qualification is missing.');

const sourceFiles = await readdir(new URL('../src/', import.meta.url), { recursive: true });
const incomingLinks = sourceFiles
  .filter((path) => typeof path === 'string' && path.endsWith('.astro') && path !== 'pages/ecosystem/[preview].astro')
  .filter((path) => path.includes('pages') || path.includes('components') || path.includes('layouts'));
for (const path of incomingLinks) {
  const content = await readFile(new URL(`../src/${path.replaceAll('\\', '/')}`, import.meta.url), 'utf8');
  if (content.includes('/ecosystem/simple/')) failures.push(`Incoming preview link found: src/${path}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Simple Visitor Model check passed: five groups, eight selected review examples, no public approval or incoming links.');
}
