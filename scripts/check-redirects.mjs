import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
const publicConfig = join(repositoryRoot, 'public', '.htaccess');
const builtConfig = join(repositoryRoot, 'dist', '.htaccess');
const expected = new Map([
  ['/systems/', '/ecosystem/'],
  ['/microgrow/', '/projects/microgrow/'],
  ['/articles/', '/journal/'],
  ['/cookie-policy-uk/', '/legal/cookie-policy/'],
  ['/blueprint/new-earth-test/', '/blueprint/inner-blueprint/'],
  ['/microgrow/blueprint-alignment/', '/projects/microgrow/'],
]);
const failures = [];
const sourceText = await readFile(publicConfig, 'utf8').catch(() => '');
const builtText = await readFile(builtConfig, 'utf8').catch(() => '');

if (!sourceText) failures.push('public/.htaccess missing');
if (!builtText) failures.push('dist/.htaccess missing; redirect configuration was not copied to public output');
if (sourceText && builtText && sourceText !== builtText) failures.push('built .htaccess differs from repository configuration');

const rules = [...sourceText.matchAll(/^RewriteRule \^([^\s]+)\$\s+(\/[^\s]+)\s+\[([^\]]+)\]$/gm)].map((match) => ({
  pattern: match[1],
  source: `/${match[1].replace('/?', '')}/`,
  target: match[2],
  flags: match[3],
}));
const sources = new Set(rules.map((rule) => rule.source));

for (const [source, target] of expected) {
  const matches = rules.filter((rule) => rule.source === source);
  if (matches.length !== 1) failures.push(`${source}: expected exactly one redirect rule`);
  const rule = matches[0];
  if (!rule) continue;
  if (rule.target !== target) failures.push(`${source}: expected target ${target}, found ${rule.target}`);
  if (!/(^|,)R=301(,|$)/.test(rule.flags)) failures.push(`${source}: redirect is not explicitly 301`);
  if (!/(^|,)L(,|$)/.test(rule.flags)) failures.push(`${source}: redirect is not terminal`);
  if (sources.has(target)) failures.push(`${source}: redirect chain detected through ${target}`);
  if (source === target) failures.push(`${source}: redirect loop detected`);
  const targetFile = target === '/' ? 'index.html' : join(target.slice(1), 'index.html');
  if (!await access(join(repositoryRoot, 'dist', targetFile)).then(() => true, () => false)) failures.push(`${source}: built target missing: ${target}`);
  const sourceFile = join(repositoryRoot, 'dist', source.slice(1), 'index.html');
  if (await access(sourceFile).then(() => true, () => false)) failures.push(`${source}: generated page conflicts with redirect`);
}

for (const rule of rules) {
  if (!expected.has(rule.source)) failures.push(`unexpected redirect rule: ${rule.source} -> ${rule.target}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Redirect configuration passed: ${rules.length} exact 301 mappings, 0 loops, 0 chains, and all built targets present.`);
