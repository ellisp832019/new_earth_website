import { execFileSync } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import ts from 'typescript';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [ecosystemSource, buildingSource, componentSource, routeSource, canonicalSource, ecosystemPageSource, homepageSource, sitemapSource, layoutSource] = await Promise.all([
  read('../src/data/ecosystem.ts'),
  read('../src/data/building.ts'),
  read('../src/components/BuildMethod.astro'),
  read('../src/pages/what-were-building/[preview].astro'),
  read('../src/pages/what-were-building/index.astro'),
  read('../src/pages/ecosystem/index.astro'),
  read('../src/pages/index.astro'),
  read('../src/pages/sitemap.xml.ts'),
  read('../src/layouts/BaseLayout.astro'),
]);

const failures = [];
const expectedSteps = ['DISCOVER', 'REUSE', 'DEFINE', 'BOUND', 'APPROVE', 'BUILD', 'TEST', 'REVIEW EVIDENCE', 'RELEASE DELIBERATELY', 'LEARN'];
const expectedGroups = [
  ['Discover & reuse', ['DISCOVER', 'REUSE']],
  ['Shape & authorise', ['DEFINE', 'BOUND', 'APPROVE']],
  ['Build & test', ['BUILD', 'TEST']],
  ['Review & release', ['REVIEW EVIDENCE', 'RELEASE DELIBERATELY']],
  ['Learn & carry forward', ['LEARN']],
];

const buildingModule = buildingSource.replace(/import\s+\{\s*futureBuildMethod\s*\}\s*from '\.\/ecosystem';\r?\n/, '').replace(/import type[^;]+;\r?\n/g, '');
const transpiled = ts.transpileModule(`${ecosystemSource}\n${buildingModule}`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
});

if (transpiled.diagnostics?.length) failures.push('Unable to transpile build-method data.');
const data = await import(`data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`);

if (!/import\s+\{\s*futureBuildMethod\s*\}\s*from '\.\/ecosystem';/.test(buildingSource)) failures.push('building.ts must source method order from futureBuildMethod.');
if (JSON.stringify(data.futureBuildMethod) !== JSON.stringify(expectedSteps)) failures.push('futureBuildMethod differs from the approved ten-step order.');
if (JSON.stringify(data.buildMethodSteps.map((step) => step.key)) !== JSON.stringify(data.futureBuildMethod)) failures.push('Build-method step order must be derived from futureBuildMethod.');
if (new Set(data.buildMethodSteps.map((step) => step.key)).size !== expectedSteps.length) failures.push('Build method contains duplicate or missing steps.');
if (!data.buildMethodSteps.every((step) => ['key', 'label', 'summary', 'question', 'evidenceOutput', 'humanBoundary', 'doesNotMean'].every((field) => typeof step[field] === 'string' && step[field].trim()))) failures.push('Each build-method step must contain every approved presentation field.');
if (JSON.stringify(data.buildMethodGroups.map((group) => [group.title, group.stepKeys])) !== JSON.stringify(expectedGroups)) failures.push('Visitor groups differ from the approved five groupings.');
const groupedSteps = data.buildMethodGroups.flatMap((group) => group.stepKeys);
if (JSON.stringify(groupedSteps) !== JSON.stringify(expectedSteps) || new Set(groupedSteps).size !== expectedSteps.length) failures.push('Every method step must appear exactly once across the visitor groups.');
if (!data.buildMethodSteps.find((step) => step.key === 'REUSE')?.doesNotMean.match(/safety, suitability, permission/i) || !data.buildMethodSteps.find((step) => step.key === 'REUSE')?.humanBoundary.match(/ownership, authority, evidence/i)) failures.push('REUSE wording must preserve safety, suitability, permission, ownership, authority and evidence.');
if (data.buildMethodSteps.find((step) => step.key === 'TEST')?.summary === data.buildMethodSteps.find((step) => step.key === 'REVIEW EVIDENCE')?.summary) failures.push('TEST and REVIEW EVIDENCE must remain distinct.');
if (/\bautonom(?:ous|ously)\s+(?:approve|execut|publish|release)/i.test(`${buildingSource}\n${componentSource}\n${routeSource}`)) failures.push('Autonomous approval, execution, publication or release wording is not allowed.');

const expectedAuthority = ['OBSERVE', 'RECOMMEND', 'PREPARE', 'EXECUTE WITH APPROVAL', 'PRE-AUTHORISED EXECUTION ONLY WHEN EXPLICITLY PERMITTED'];
if (JSON.stringify(data.humanAuthorityProgression) !== JSON.stringify(expectedAuthority)) failures.push('Human authority progression differs from the existing governed source.');
if (!/import\s+\{\s*humanAuthorityProgression\s*\}\s*from '\.\.\/\.\.\/data\/ecosystem';/.test(routeSource) || !/authorityProgression=\{humanAuthorityProgression\}/.test(routeSource)) failures.push('Candidate must pass the existing human-authority progression from ecosystem data.');
if (!/does not replace or rename New Earth’s internal operational control model/i.test(componentSource)) failures.push('The public method must remain distinct from the internal operational control model.');

const exactCommandCentreExample = 'A current Command Centre screen can show the interface that was captured. Claims about integration or operational readiness need their own evidence.';
if (!componentSource.includes(exactCommandCentreExample) || !/href="\/projects\/command-centre\/"/.test(componentSource)) failures.push('Command Centre example must be exact, bounded and linked to its evidence route.');
if (/AI Made Simple|MicroGrow/.test(`${componentSource}\n${routeSource}`)) failures.push('The candidate must not add AI Made Simple or MicroGrow examples.');
if (!/import\.meta\.env\.DEV\s*\?\s*\[\{\s*params:\s*\{\s*preview:\s*'review'\s*\}\s*\}\s*\]\s*:\s*\[\]/.test(routeSource)) failures.push('Candidate route must be explicitly constrained to /what-were-building/review/ during development only.');
if (!/canonical=""/.test(routeSource) || !/noindex=\{true\}/.test(routeSource)) failures.push('Candidate route must have no public canonical URL and must be noindex.');

if ((canonicalSource.match(/<BuildMethod\b/g) ?? []).length !== 1) failures.push('Canonical What We’re Building page must contain the approved BuildMethod component exactly once.');
if (!/import BuildMethod from '\.\.\/\.\.\/components\/BuildMethod\.astro';/.test(canonicalSource) || !/import \{ buildingItems, buildMethodGroups, buildMethodSteps \} from '\.\.\/\.\.\/data\/building';/.test(canonicalSource) || !/import \{ humanAuthorityProgression \} from '\.\.\/\.\.\/data\/ecosystem';/.test(canonicalSource)) failures.push('Canonical page must reuse the approved method component and structured data.');
if (!/steps=\{buildMethodSteps\}\s+groups=\{buildMethodGroups\}\s+authorityProgression=\{humanAuthorityProgression\}\s+embedded=\{true\}\s+sectionId="how-new-earth-builds"/.test(canonicalSource) || !/id=\{sectionId\}/.test(componentSource)) failures.push('Canonical method anchor must be provided by the approved method component.');
for (const requiredCanonicalContent of ['What we’re building', 'Overview first, evidence when you need it', 'id="work-horizons"', 'From direction to a future ecosystem', 'Follow the work at the right level']) {
  if (!canonicalSource.includes(requiredCanonicalContent)) failures.push(`Existing canonical content is missing: ${requiredCanonicalContent}`);
}
const ecosystemMethodLink = '/what-were-building/#how-new-earth-builds';
if ((ecosystemPageSource.match(new RegExp(ecosystemMethodLink, 'g')) ?? []).length !== 1 || !ecosystemPageSource.includes('See how New Earth moves from ideas to evidence')) failures.push('Ecosystem page must contain the approved contextual build-method link exactly once.');

const sourceFiles = await readdir(new URL('../src/', import.meta.url), { recursive: true });
for (const path of sourceFiles.filter((path) => typeof path === 'string' && path.endsWith('.astro') && path !== 'pages/what-were-building/[preview].astro')) {
  const content = await readFile(new URL(`../src/${path.replaceAll('\\', '/')}`, import.meta.url), 'utf8');
  if (content.includes('/what-were-building/review/')) failures.push(`Incoming preview link found: src/${path}`);
}
if (sitemapSource.includes('/what-were-building/review/')) failures.push('Candidate route must not appear in the sitemap source.');

for (const path of [
  'src/pages/index.astro',
  'src/pages/sitemap.xml.ts',
  'src/layouts/BaseLayout.astro',
]) {
  try {
    execFileSync('git', ['diff', '--quiet', 'main', '--', path]);
  } catch {
    failures.push(`Protected canonical surface changed: ${path}`);
  }
}

for (const [label, source] of [['canonical page', canonicalSource], ['ecosystem page', ecosystemPageSource], ['homepage', homepageSource], ['sitemap', sitemapSource], ['base layout', layoutSource]]) {
  if (!source.trim()) failures.push(`Unable to read protected ${label}.`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Build method check passed: exact ten-step sequence, five visitor groups, canonical anchor, one ecosystem contextual link, development-only candidate and public-boundary protections.');
}
