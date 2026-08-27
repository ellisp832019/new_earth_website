import { copyFile, mkdir } from 'node:fs/promises';

const source = new URL('../ASSETS/00_BRAND/logos/new-earth-emblem-v1.png', import.meta.url);
const destination = new URL('../public/assets/00_BRAND/logos/new-earth-emblem-v1.png', import.meta.url);
await mkdir(new URL('../public/assets/00_BRAND/logos/', import.meta.url), { recursive: true });
await copyFile(source, destination);
console.log('Prepared 1 first-party public brand asset.');
