import { copyFile, mkdir } from 'node:fs/promises';

const files = [
  ['00_BRAND/logos/new-earth-logo-primary-v1.png', '00_BRAND/logos/new-earth-logo-primary-v1.png'],
  ['00_BRAND/logos/new-earth-emblem-v1.png', '00_BRAND/logos/new-earth-emblem-v1.png'],
  ['02_HOME/hero/home_hero_new_earth_main.webp', 'home_hero_new_earth_main.webp'],
  ['02_HOME/sections/home_introduction_new_earth.webp', 'home_introduction_new_earth.webp'],
  ['04_BLUEPRINT/hero/blueprint_hero.webp', 'blueprint_hero.webp'],
  ['01_GLOBAL_SITE/heroes/vision_hero.png', 'vision_hero.png'],
  ['03_MANIFESTO/heroes/manifesto_hero.png', 'manifesto_hero.png'],
  ['04_BLUEPRINT/hero/blueprint_hero.png', 'blueprint_hero.png'],
  ['05_SYSTEMS/projects/field_scanner_project.webp', 'field_scanner_project.webp'],
  ['09_BLOG/featured/journal_featured_home.webp', 'journal_featured_home.webp'],
  ['10_RESOURCES/featured/resources_featured_home.webp', 'resources_featured_home.webp'],
  ['10_RESOURCES/featured/faq_glossary_featured.webp', 'faq_glossary_featured.webp'],
  ['11_COMMUNITY/hero/community_hero.webp', 'community_hero.webp'],
  ['10_RESOURCES/hero/new_earth_living_app.webp', 'new_earth_living_app.webp'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-001_local-capability-pathway.png', 'NEIP-VIS-001_local-capability-pathway.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-002_daily-life-cards.png', 'NEIP-VIS-002_daily-life-cards.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-003_twelve-pillars-lenses.png', 'NEIP-VIS-003_twelve-pillars-lenses.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-004_principles-to-practice-bridge.png', 'NEIP-VIS-004_principles-to-practice-bridge.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-005_systems-relationship-map.png', 'NEIP-VIS-005_systems-relationship-map.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-006_authority-ladder.png', 'NEIP-VIS-006_authority-ladder.png'],
  ['07_NEW_EARTH_IN_PRACTICE/visuals/NEIP-VIS-007_one-person-experience.png', 'NEIP-VIS-007_one-person-experience.png'],
];

for (const [relativeSource, publicName] of files) {
  const source = new URL(`../ASSETS/${relativeSource}`, import.meta.url);
  const destination = new URL(`../public/assets/${publicName}`, import.meta.url);
  await mkdir(new URL('.', destination), { recursive: true });
  await copyFile(source, destination);
}

console.log(`Prepared ${files.length} governed public assets.`);
