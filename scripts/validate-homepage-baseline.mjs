import { readFile } from 'node:fs/promises';
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const ids = ['home-hero', 'what-is-new-earth', 'pathways', 'pillars', 'ecosystem', 'projects', 'progress', 'journal', 'get-involved'];
const images = ['home_hero_new_earth_main.webp', 'home_introduction_new_earth.webp', 'blueprint_hero.webp', 'microgrow_ai_lab_project_card.webp', 'field_scanner_project.webp', 'new_earth_living_app.webp', 'journal_featured_home.webp', 'resources_featured_home.webp', 'faq_glossary_featured.webp', 'community_hero.webp', 'new_earth_builders_logo.webp'];
const missing = ids.filter((id) => !html.includes(`id="${id}"`));
const missingImages = images.filter((name) => !html.includes(`/local-assets/${name}`));
const h1 = (html.match(/<h1\b/g) || []).length;
const nav = ['/vision/', '/blueprint/', '/ecosystem/', '/projects/', '/journal/', '/about/', '/get-involved/'];
const navMissing = nav.filter((href) => !html.includes(`href="${href}"`));
const imageCount = images.reduce((count, name) => count + (html.match(new RegExp(`/local-assets/${name}`, 'g')) || []).length, 0);
if (missing.length || navMissing.length || missingImages.length || h1 !== 1 || imageCount !== images.length) {
  console.error(JSON.stringify({ missing, navMissing, missingImages, h1, homepageImageCount: imageCount, expectedImages: images.length }));
  process.exit(1);
}
console.log(`Homepage baseline validated: required sections, one H1, navigation targets and ${imageCount} accepted image uses present.`);
