import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');
const [learnSource, journalSource, productsSource, readinessSource, buildingSource, homepageSource, sitemapSource, layoutSource, stylesSource, publicLearnOutput] = await Promise.all([
  read('../src/pages/learn/index.astro'),
  read('../src/data/journal.ts'),
  read('../src/data/products.ts'),
  read('../src/data/product-readiness.ts'),
  read('../src/pages/what-were-building/index.astro'),
  read('../src/pages/index.astro'),
  read('../src/pages/sitemap.xml.ts'),
  read('../src/layouts/BaseLayout.astro'),
  read('../src/styles/global.css'),
  read('../dist/learn/index.html'),
]);

const failures = [];
const expectedRoutes = [
  '/vision/', '/manifesto/', '/blueprint/', '/ecosystem/',
  '/blueprint/inner-blueprint/', '/new-earth-in-practice/', '/what-were-building/#how-new-earth-builds',
  '/projects/', '/projects/command-centre/',
];
const categoryTitles = ['Understand New Earth', 'Practical Knowledge', 'Follow the Evidence'];
const categoryCounts = [4, 3, 2];

const categoriesMatch = learnSource.match(/title: '(?:Understand New Earth|Practical Knowledge|Follow the Evidence)',[\s\S]*?pathways: \[([\s\S]*?)\n    \],/g) ?? [];
if (categoriesMatch.length !== 3) failures.push('Learn must contain exactly three populated categories.');
if (JSON.stringify(categoriesMatch.map((category) => (category.match(/href: '/g) ?? []).length)) !== JSON.stringify(categoryCounts)) failures.push('Learn category card counts must be exactly 4 / 3 / 2.');
if (!categoryTitles.every((title) => learnSource.includes(`title: '${title}'`))) failures.push('Learn categories differ from the approved titles.');

const hrefs = [...learnSource.matchAll(/href: '([^']+)'/g)].map((match) => match[1]);
if (JSON.stringify(hrefs) !== JSON.stringify(expectedRoutes) || new Set(hrefs).size !== expectedRoutes.length) failures.push('Learn cards must contain the approved nine unique destinations only.');
for (const requiredText of ['Useful knowledge for practical understanding.', 'Understanding the framework', 'Starting with personal responsibility', 'Understanding local capability']) {
  if (!learnSource.includes(requiredText)) failures.push(`Original Learn pathway is no longer represented: ${requiredText}`);
}
if (!buildingSource.includes('sectionId="how-new-earth-builds"')) failures.push('The approved build-method anchor is missing.');
if (!learnSource.includes('The first entries are being prepared.') || !learnSource.includes('No Journal articles are published yet.')) failures.push('Journal note must be truthful and state that no articles are published.');
if (/AI Made Simple|10 Things You Can Ask AI|AI_Made_Simple|\/local-assets\/|\/digital-products\/ai-made-simple\//.test(learnSource)) failures.push('Learn must not expose AI Made Simple, its free guide, preview routes or local assets.');
if ((journalSource.match(/export const journalArticles: JournalArticle\[] = \[\];/) ?? []).length !== 1) failures.push('Journal published record count must remain zero.');
if (!productsSource.includes("publicStatus: 'COMING_SOON'") || !productsSource.includes('previewOnly: true') || !readinessSource.includes("state: 'COMING_SOON'")) failures.push('Product or readiness state changed unexpectedly.');

for (const path of ['src/pages/index.astro', 'src/pages/sitemap.xml.ts', 'src/layouts/BaseLayout.astro', 'src/styles/global.css', 'src/data/products.ts', 'src/data/product-readiness.ts', 'src/data/journal.ts']) {
  try {
    execFileSync('git', ['diff', '--quiet', 'main', '--', path]);
  } catch {
    failures.push(`Protected surface changed: ${path}`);
  }
}
if (!/^\s*<h1>Useful knowledge for practical understanding\.<\/h1>/m.test(learnSource)) failures.push('Learn must retain exactly one approved H1.');
if (!/<h2 id=\{`learn-\$\{category\.title/.test(learnSource) || !/<h3>\{pathway\.title\}<\/h3>/.test(learnSource)) failures.push('Learn must use semantic category headings and card H3s.');
if (!/class="text-link" href=\{pathway\.href\}>\{pathway\.linkLabel\}/.test(learnSource)) failures.push('Learn cards must retain descriptive links.');
for (const route of expectedRoutes) {
  const outputRoute = route.replace('#how-new-earth-builds', '');
  const outputPath = outputRoute === '/' ? '../dist/index.html' : `../dist${outputRoute}index.html`;
  try {
    await read(outputPath);
  } catch {
    failures.push(`Approved Learn destination is absent from public output: ${route}`);
  }
}
if (!publicLearnOutput.includes('Follow the Evidence') || !publicLearnOutput.includes('No Journal articles are published yet.') || (publicLearnOutput.match(/class="learn-card"/g) ?? []).length !== 9) failures.push('Public Learn output is stale or incomplete.');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Learn check passed: three populated categories, nine approved public destinations, truthful Journal treatment and no preview-resource exposure.');
}
