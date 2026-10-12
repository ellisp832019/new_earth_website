import { execFileSync } from 'node:child_process';
import { access, readFile, readdir } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [componentSource, previewRouteSource, canonicalRouteSource, sitemapSource, productsSource, readinessSource, buildingSource, publicPreviewOutput, publicCanonicalOutput] = await Promise.all([
  read('../src/components/OperatingBaseline.astro'),
  read('../src/pages/what-were-building/operating-baseline/[preview].astro'),
  read('../src/pages/what-were-building/operating-baseline/index.astro'),
  read('../src/pages/sitemap.xml.ts'),
  read('../src/data/products.ts'),
  read('../src/data/product-readiness.ts'),
  read('../src/pages/what-were-building/index.astro'),
  read('../dist/what-were-building/operating-baseline/review/index.html').catch(() => ''),
  read('../dist/what-were-building/operating-baseline/index.html').catch(() => ''),
]);

const failures = [];
const expectedFiles = [
  'scripts/check-operating-baseline.mjs',
  'scripts/check-simple-visitor-model.mjs',
  'scripts/check-build-method.mjs',
  'scripts/check-ecosystem-experience.mjs',
  'scripts/check-learn.mjs',
  'src/components/OperatingBaseline.astro',
  'src/pages/what-were-building/operating-baseline/[preview].astro',
  'src/pages/what-were-building/operating-baseline/index.astro',
  'src/pages/what-were-building/index.astro',
  'src/pages/sitemap.xml.ts',
];
const trackedChangedFiles = execFileSync('git', ['diff', '--name-only', 'main'], { encoding: 'utf8' }).trim().split(/\r?\n/).filter(Boolean);
const unexpectedTrackedChanges = trackedChangedFiles.filter((path) => !expectedFiles.includes(path));
if (unexpectedTrackedChanges.length) failures.push(`Canonical integration includes an unauthorised tracked file: ${unexpectedTrackedChanges.join(', ')}`);
for (const path of expectedFiles) {
  try {
    await access(new URL(`../${path}`, import.meta.url));
  } catch {
    failures.push(`Required candidate file is missing: ${path}`);
  }
}

const expectedQuestions = [
  'What exists?', 'Which source should we trust?', 'What is active?', 'What comes next?', 'What is implemented?', 'What is healthy — and what is drifting?', 'What depends on what?', 'Who has authority?', 'What may act?', 'What actually happened?', 'Was it verified?', 'Where is the evidence?', 'Can we recover?',
];
const questionPositions = expectedQuestions.map((question) => componentSource.indexOf(`['${question}'`));
if (questionPositions.some((position) => position < 0) || questionPositions.some((position, index) => index > 0 && position <= questionPositions[index - 1])) failures.push('All thirteen acceptance questions must appear once and in the approved order.');
if ((componentSource.match(/These are acceptance questions, not thirteen completed claims\./g) ?? []).length !== 1) failures.push('Acceptance-question limitation must appear exactly once.');

for (const required of [
  'OPERATING BASELINE V1.0',
  'In development',
  'Initial architecture, identity and programme-control foundations have been accepted.',
  'This describes responsibilities and intended direction. It does not mean every integration is already operational.',
  'Recommendation is not approval.',
  'Governed self-building is a direction—not autonomous self-building as a present claim.',
  'Intended governed operating cycle—not a diagram of completed system integrations.',
  'Website / Software',
  'AI Made Simple / Foundry',
  'MicroGrow / Engineering',
]) {
  if (!componentSource.includes(required)) failures.push(`Required public narrative content is missing: ${required}`);
}
if (!/Future proof requirements/i.test(componentSource) || !/future proof requirement/gi.test(componentSource)) failures.push('Proof examples must remain explicitly future and unproven.');
if (!/does not mean a conscious or sentient company, or AI governing New Earth autonomously/i.test(componentSource)) failures.push('Non-sentience and non-autonomy clarification is missing.');
if (!/Reuse \/ consume before rebuild/i.test(componentSource)) failures.push('Reuse / consume before rebuild principle is missing.');
if (/OPERATING BASELINE V1\.0\s*(?:—|-)\s*(?:COMPLETE|RUNNING|FORMALLY ACCEPTED)/i.test(componentSource)) failures.push('Candidate must not present Operating Baseline V1.0 as complete, running or formally accepted.');

if (!/import\.meta\.env\.DEV\s*\?\s*\[\{\s*params:\s*\{\s*preview:\s*'review'\s*\}\s*\}\s*\]\s*:\s*\[\]/.test(previewRouteSource)) failures.push('Preview route must only generate the review slug during development.');
if (!/canonical=""/.test(previewRouteSource) || !/noindex=\{true\}/.test(previewRouteSource)) failures.push('Preview route must be noindex and have no public canonical URL.');
if (!/import OperatingBaseline from '\.\.\/\.\.\/\.\.\/components\/OperatingBaseline\.astro';/.test(canonicalRouteSource) || !/<OperatingBaseline\s*\/>/.test(canonicalRouteSource)) failures.push('Canonical route must reuse the approved OperatingBaseline component.');
if (!/canonical="\/what-were-building\/operating-baseline\/"/.test(canonicalRouteSource)) failures.push('Canonical route must declare the approved canonical URL.');
if ((sitemapSource.match(/'\/what-were-building\/operating-baseline\/'/g) ?? []).length !== 1) failures.push('Canonical Operating Baseline route must appear exactly once in the sitemap.');
if (publicPreviewOutput) failures.push('Preview route must be absent from static distributable output.');
if (publicCanonicalOutput && !publicCanonicalOutput.includes('Building the company that can understand itself')) failures.push('Canonical route output is incomplete.');
if ((buildingSource.match(/href="\/what-were-building\/operating-baseline\/"/g) ?? []).length !== 1 || !buildingSource.includes('Explore the New Earth Operating Baseline')) failures.push('What We’re Building must contain exactly one approved Operating Baseline summary link.');
const sourceFiles = await readdir(new URL('../src/', import.meta.url), { recursive: true });
for (const path of sourceFiles.filter((path) => typeof path === 'string' && path.endsWith('.astro') && path !== 'pages/what-were-building/operating-baseline/[preview].astro')) {
  const source = await read(`../src/${path.replaceAll('\\', '/')}`);
  if (source.includes('/what-were-building/operating-baseline/review/')) failures.push(`Incoming preview link found: src/${path}`);
}

for (const path of ['src/data/ecosystem.ts', 'src/data/products.ts', 'src/data/product-readiness.ts', 'src/pages/index.astro', 'src/layouts/BaseLayout.astro']) {
  try {
    execFileSync('git', ['diff', '--quiet', 'main', '--', path]);
  } catch {
    failures.push(`Protected surface changed: ${path}`);
  }
}
if (!productsSource.includes("publicStatus: 'COMING_SOON'") || !readinessSource.includes("state: 'COMING_SOON'")) failures.push('Product state safety is not preserved.');

for (const forbidden of [/\b[A-Z]:\\/, /ASSETS_REFERENCE\/MICROGROW/i, /[A-F0-9]{64}/, /_RECEIPT\.(?:json|md)/i, /private endpoint|dashboard URL|runtime topology/i]) {
  if (forbidden.test(componentSource)) failures.push('Candidate narrative contains a prohibited private operational reference.');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Operating Baseline check passed: exact development-only candidate scope, truthful in-development narrative, public-boundary protections and no protected surface changes.');
}
