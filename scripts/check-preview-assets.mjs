import { access, readFile, readdir, stat } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const assets = [
  ['homeHero', 'home_hero_new_earth_main.webp', 'AST-002'],
  ['introduction', 'home_introduction_new_earth.webp', 'AST-010'],
  ['blueprintHero', 'blueprint_hero.webp', 'AST-004'],
  ['microgrow', 'microgrow_ai_lab_project_card.webp', 'AST-007'],
  ['fieldScanner', 'field_scanner_project.webp', 'AST-008'],
  ['newEarthLiving', 'new_earth_living_app.webp', 'AST-009'],
  ['journal', 'journal_featured_home.webp', 'AST-011'],
  ['resources', 'resources_featured_home.webp', 'AST-012'],
  ['faqGlossary', 'faq_glossary_featured.webp', 'AST-013'],
  ['community', 'community_hero.webp', 'AST-016'],
  ['builders', 'new_earth_builders_logo.webp', 'AST-017'],
];
const source = await readFile(new URL('src/pages/index.astro', root), 'utf8');
const catalogue = await readFile(new URL('src/data/site.ts', root), 'utf8');
const prepared = new Set(await readdir(new URL('public/local-assets/', root)));
let failures = 0;
for (const [key, filename, id] of assets) {
  const sourcePath = new URL(`ASSETS/${filename === 'home_hero_new_earth_main.webp' ? '02_HOME/hero' : filename === 'home_introduction_new_earth.webp' ? '02_HOME/sections' : filename === 'blueprint_hero.webp' ? '04_BLUEPRINT/hero' : filename === 'microgrow_ai_lab_project_card.webp' ? '06_MICROGROW/product' : filename === 'field_scanner_project.webp' ? '05_SYSTEMS/projects' : filename === 'new_earth_living_app.webp' ? '10_RESOURCES/hero' : filename === 'journal_featured_home.webp' ? '09_BLOG/featured' : filename === 'resources_featured_home.webp' || filename === 'faq_glossary_featured.webp' ? '10_RESOURCES/featured' : filename === 'new_earth_builders_logo.webp' ? '11_COMMUNITY/partners' : '11_COMMUNITY/hero'}/${filename}`, root);
  const previewPath = new URL(`public/local-assets/${filename}`, root);
  const sourceFound = await access(sourcePath).then(() => true, () => false);
  const previewFound = await access(previewPath).then(() => true, () => false);
  const catalogueFound = catalogue.includes(`${key}:{id:'${id}'`) || catalogue.includes(`${key}:`);
  const pageReferenced = source.includes(`assets.${key}`);
  const publicReady = catalogue.includes(`${key}:{id:'${id}'`) && source.includes(`assets.${key}`) && false;
  if (!sourceFound || !previewFound || !catalogueFound || !pageReferenced) failures += 1;
  const bytes = previewFound ? (await stat(previewPath)).size : 0;
  console.log(`${filename}: source=${sourceFound} preview=${previewFound} prepared=${prepared.has(filename)} catalogue=${catalogueFound} page=${pageReferenced} local=/local-assets/${filename} public=${publicReady} bytes=${bytes}`);
}
if (failures) process.exitCode = 1;
else console.log(`Preview asset check passed: ${assets.length} required homepage assets are prepared, catalogued and referenced.`);
