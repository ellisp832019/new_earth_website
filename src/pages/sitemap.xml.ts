import type { APIRoute } from 'astro';
import { journalCategories, publishedJournalArticles } from '../data/journal';
import { publicProjects } from '../data/projects';
import { publicProducts } from '../data/products';

const includePreviewProducts = process.env.PUBLIC_ASSET_MODE !== 'PUBLIC';

const routes = [
  '/',
  '/vision/',
  '/manifesto/',
  '/blueprint/',
  '/blueprint/pillars/',
  '/blueprint/inner-blueprint/',
  '/blueprint/transition-path/',
  '/ecosystem/',
  '/new-earth-in-practice/',
  '/learn/',
  '/what-were-building/',
  '/digital-products/',
  '/digital-products/practical-guides/',
  '/digital-products/conscious-living/',
  ...publicProducts
    .filter((product) => product.publicEnabled && (includePreviewProducts || !product.previewOnly))
    .map((product) => `/digital-products/${product.slug}/`),
  '/projects/',
  ...publicProjects
    .filter((project) => project.publicEnabled && project.publicStatus === 'PUBLIC-ENABLED')
    .map((project) => `/projects/${project.slug}/`),
  '/journal/',
  ...journalCategories.map((category) => `/journal/category/${category.id}/`),
  ...publishedJournalArticles.map((article) => `/journal/${article.slug}/`),
  '/about/',
  '/team/',
  '/founders-journey/',
  '/get-involved/',
  '/contact/',
  '/legal/',
  '/legal/privacy-policy/',
  '/legal/terms/',
  '/legal/cookie-policy/',
  '/legal/disclaimer/',
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://new-earth.uk');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${new URL(route, origin).href}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
