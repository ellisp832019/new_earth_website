import { access, readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('dist/index.html', root), 'utf8');
const source = await readFile(new URL('src/pages/index.astro', root), 'utf8');
const ids = ['home-hero', 'what-is-new-earth', 'pathways', 'pillars', 'ecosystem', 'projects', 'progress', 'journal', 'get-involved'];
const images = [
  ['homeHero', '02_HOME/hero/home_hero_new_earth_main.webp'],
  ['introduction', '02_HOME/sections/home_introduction_new_earth.webp'],
  ['blueprintHero', '04_BLUEPRINT/hero/blueprint_hero.webp'],
  ['microgrow', '06_MICROGROW/product/microgrow_ai_lab_project_card.webp'],
  ['fieldScanner', '05_SYSTEMS/projects/field_scanner_project.webp'],
  ['newEarthLiving', '10_RESOURCES/hero/new_earth_living_app.webp'],
  ['journal', '09_BLOG/featured/journal_featured_home.webp'],
  ['resources', '10_RESOURCES/featured/resources_featured_home.webp'],
  ['faqGlossary', '10_RESOURCES/featured/faq_glossary_featured.webp'],
  ['community', '11_COMMUNITY/hero/community_hero.webp'],
];
const missing = ids.filter((id) => !html.includes(`id="${id}"`));
const missingImages = [];
for (const [key, relativePath] of images) {
  const sourceExists = await access(new URL(`ASSETS/${relativePath}`, root)).then(() => true, () => false);
  if (!sourceExists || !source.includes(`assets.${key}`)) missingImages.push(relativePath.split('/').pop());
}
const h1 = (html.match(/<h1\b/g) || []).length;
const nav = ['/vision/', '/blueprint/', '/ecosystem/', '/new-earth-in-practice/', '/projects/', '/journal/', '/about/', '/get-involved/'];
const navMissing = nav.filter((href) => !html.includes(`href="${href}"`));
const sourcePathLeak = /(?:[A-Z]:\\|ASSETS_REFERENCE|OWNER_CAPTURE_INBOX)/.test(html);
const imageCount = images.filter(([key]) => source.includes(`assets.${key}`)).length;
if (missing.length || navMissing.length || missingImages.length || h1 !== 1 || imageCount !== images.length || sourcePathLeak) {
  console.error(JSON.stringify({ missing, navMissing, missingImages, h1, homepageImageCount: imageCount, expectedImages: images.length, sourcePathLeak }));
  process.exit(1);
}
console.log(`Homepage baseline validated: required sections, one H1, navigation targets and ${imageCount} governed image bindings present across preview/public asset modes.`);
