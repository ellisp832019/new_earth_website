import type { APIRoute } from 'astro';
import { publicProjects } from '../data/projects';

const routes = [
  '/',
  '/vision/',
  '/manifesto/',
  '/blueprint/',
  '/ecosystem/',
  '/new-earth-in-practice/',
  '/projects/',
  ...publicProjects
    .filter((project) => project.publicEnabled && project.publicStatus === 'PUBLIC-ENABLED')
    .map((project) => `/projects/${project.slug}/`),
  '/journal/',
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
