import { rm } from 'node:fs/promises';

await rm(new URL('../public/local-assets/', import.meta.url), { recursive: true, force: true });
