import { access, readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const modeArg = process.argv.find((arg) => arg.startsWith('--mode='));
const mode = modeArg?.split('=')[1] ?? (process.env.PUBLIC_ASSET_MODE === 'PUBLIC' ? 'public' : 'preview');
const exists = (relativePath) => access(join(root, relativePath)).then(() => true, () => false);

async function walk(dir) {
  let out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    out = entry.isDirectory() ? out.concat(await walk(path)) : out.concat(path);
  }
  return out;
}

const failures = [];
const projectsHtml = await readFile(join(root, 'projects/index.html'), 'utf8').catch(() => '');
const microgrowRoute = await exists('projects/microgrow/index.html');
const commandCentreRoute = await exists('projects/command-centre/index.html');
const commandCentreCard = projectsHtml.includes('/projects/command-centre/') && projectsHtml.includes('New Earth Command Centre');

if (!projectsHtml) failures.push('/projects/ route missing');

if (mode === 'preview') {
  if (!microgrowRoute) failures.push('preview MicroGrow detail route missing');
  if (!commandCentreRoute) failures.push('preview Command Centre detail route missing');
  if (!commandCentreCard) failures.push('preview Command Centre project card missing');
  const detailHtml = await readFile(join(root, 'projects/command-centre/index.html'), 'utf8').catch(() => '');
  if (!detailHtml.includes('ACTIVE DEVELOPMENT')) failures.push('preview Command Centre maturity missing');
  if (!detailHtml.includes('/local-assets/CC-VIS-005_how-command-centre-works.png')) failures.push('preview Command Centre developmental visual missing');
}

if (mode === 'public') {
  if (!microgrowRoute) failures.push('public MicroGrow detail route missing');
  if (commandCentreRoute) failures.push('public Command Centre detail route generated');
  if (commandCentreCard) failures.push('public Command Centre card exposed');
  const files = await walk(root);
  const leaks = [];
  for (const file of files) {
    if (file.includes('CC-VIS-')) leaks.push(file);
    const text = await readFile(file, 'utf8').catch(() => '');
    if (text.includes('CC-VIS-') && !leaks.includes(file)) leaks.push(file);
  }
  if (leaks.length) failures.push(`public Command Centre asset leakage: ${leaks.length}`);
}

if (!['preview', 'public'].includes(mode)) failures.push(`unsupported mode: ${mode}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Project publication check passed for ${mode}: MicroGrow route ${microgrowRoute ? 'present' : 'absent'}, Command Centre route ${commandCentreRoute ? 'present' : 'absent'}.`);
