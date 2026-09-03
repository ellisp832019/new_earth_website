import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = 'https://new-earth.uk';
const expectedRoutes = [
  '/', '/vision/', '/manifesto/', '/blueprint/', '/blueprint/pillars/',
  '/blueprint/inner-blueprint/', '/blueprint/transition-path/', '/ecosystem/',
  '/new-earth-in-practice/', '/projects/', '/projects/microgrow/',
  '/projects/command-centre/', '/journal/', '/about/', '/team/', '/founders-journey/',
  '/get-involved/', '/contact/', '/legal/', '/legal/privacy-policy/',
  '/legal/terms/', '/legal/cookie-policy/', '/legal/disclaimer/',
];
const redirectSources = ['/systems/', '/microgrow/', '/articles/', '/cookie-policy-uk/',
  '/blueprint/new-earth-test/', '/microgrow/blueprint-alignment/'];
const failures = [];
const titles = new Map();
const canonicals = new Map();

async function walk(dir) {
  let files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    files = entry.isDirectory() ? files.concat(await walk(path)) : files.concat(path);
  }
  return files;
}

const allFiles = await walk(root);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const routeFor = (file) => {
  const path = relative(root, file).split(sep).join('/');
  if (path === 'index.html') return '/';
  if (path === '404.html') return '/404.html';
  return `/${path.replace(/index\.html$/, '')}`;
};
const exists = (path) => access(join(root, path)).then(() => true, () => false);
const attr = (html, pattern) => html.match(pattern)?.[1] ?? '';

for (const file of htmlFiles) {
  const route = routeFor(file);
  const html = await readFile(file, 'utf8');
  const title = attr(html, /<title>([^<]+)<\/title>/);
  const description = attr(html, /<meta name="description" content="([^"]+)"/);
  const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
  const noindex = /<meta name="robots" content="noindex, nofollow">/.test(html);

  if (!title) failures.push(`${route}: title missing`);
  if (!description) failures.push(`${route}: meta description missing`);
  if (!/href="\/favicon\.png"/.test(html)) failures.push(`${route}: favicon link missing`);

  if (route === '/404.html') {
    if (!noindex) failures.push('/404.html: noindex missing');
    if (canonical) failures.push('/404.html: canonical must be absent');
    continue;
  }

  if (noindex) failures.push(`${route}: public route unexpectedly noindex`);
  const expectedCanonical = `${origin}${route}`;
  if (canonical !== expectedCanonical) failures.push(`${route}: canonical expected ${expectedCanonical}, found ${canonical || 'missing'}`);
  if (/localhost|127\.0\.0\.1|D:\\Dev|ASSETS_REFERENCE/i.test(canonical)) failures.push(`${route}: unsafe canonical`);
  for (const [property, pattern] of [
    ['og:title', /<meta property="og:title" content="([^"]+)"/],
    ['og:description', /<meta property="og:description" content="([^"]+)"/],
    ['og:type', /<meta property="og:type" content="([^"]+)"/],
    ['og:url', /<meta property="og:url" content="([^"]+)"/],
    ['og:site_name', /<meta property="og:site_name" content="([^"]+)"/],
  ]) if (!attr(html, pattern)) failures.push(`${route}: ${property} missing`);
  if (attr(html, /<meta property="og:type" content="([^"]+)"/) !== 'website') failures.push(`${route}: og:type must be website`);
  if (attr(html, /<meta property="og:url" content="([^"]+)"/) !== canonical) failures.push(`${route}: og:url differs from canonical`);
  if (!attr(html, /<meta name="twitter:card" content="([^"]+)"/)) failures.push(`${route}: Twitter card metadata missing`);

  if (titles.has(title)) failures.push(`${route}: duplicate title also used by ${titles.get(title)}`);
  else titles.set(title, route);
  if (canonicals.has(canonical)) failures.push(`${route}: duplicate canonical also used by ${canonicals.get(canonical)}`);
  else canonicals.set(canonical, route);

  for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const href = match[1];
    if (href.startsWith('/assets/') || href.startsWith('/local-assets/') || href.startsWith('/_astro/')) continue;
    const target = href === '/' ? 'index.html' : href.endsWith('/') ? join(href.slice(1), 'index.html') : href.slice(1);
    if (!await exists(target)) failures.push(`${route}: broken internal link ${href}`);
  }
}

for (const route of expectedRoutes) {
  if (!htmlFiles.some((file) => routeFor(file) === route)) failures.push(`${route}: expected public HTML route missing`);
}

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8').catch(() => '');
const sitemapRoutes = [...sitemap.matchAll(/<loc>(https:\/\/new-earth\.uk[^<]+)<\/loc>/g)].map((match) => match[1].slice(origin.length));
if (sitemapRoutes.length !== expectedRoutes.length) failures.push(`sitemap: expected ${expectedRoutes.length} routes, found ${sitemapRoutes.length}`);
for (const route of expectedRoutes) if (!sitemapRoutes.includes(route)) failures.push(`sitemap: missing ${route}`);
for (const route of redirectSources) if (sitemapRoutes.includes(route)) failures.push(`sitemap: redirect source included ${route}`);

const robots = await readFile(join(root, 'robots.txt'), 'utf8').catch(() => '');
if (!robots.includes('User-agent: *') || !robots.includes('Allow: /')) failures.push('robots.txt: public crawl baseline missing');
if (!robots.includes('Sitemap: https://new-earth.uk/sitemap.xml')) failures.push('robots.txt: sitemap declaration missing');
if (!await exists('favicon.png')) failures.push('favicon.png missing from public build');
if (!await exists('404.html')) failures.push('custom 404 missing');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Public SEO check passed: ${expectedRoutes.length} canonical routes, unique titles, social metadata, sitemap, robots, favicon, custom 404, and no broken internal links.`);
