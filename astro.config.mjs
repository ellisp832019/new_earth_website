import { defineConfig } from 'astro/config';
export default defineConfig({ site: process.env.PUBLIC_SITE_ORIGIN || 'https://new-earth.uk', trailingSlash: 'always', output: 'static' });
