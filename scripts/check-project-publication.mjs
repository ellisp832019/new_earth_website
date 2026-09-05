import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const modeArg = process.argv.find((arg) => arg.startsWith('--mode='));
const mode = modeArg?.split('=')[1] ?? (process.env.PUBLIC_ASSET_MODE === 'PUBLIC' ? 'public' : 'preview');
const exists = (relativePath) => access(join(root, relativePath)).then(() => true, () => false);

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
  if (!commandCentreRoute) failures.push('public Command Centre detail route missing');
  if (!commandCentreCard) failures.push('public Command Centre card missing');
  const detailHtml = await readFile(join(root, 'projects/command-centre/index.html'), 'utf8').catch(() => '');
  if (!detailHtml.includes('ACTIVE DEVELOPMENT')) failures.push('public Command Centre maturity missing');
  for (const asset of ['CC-VIS-001A_command-centre-hero-display.png', 'CC-VIS-001B_command-centre-index-display.png', 'CC-VIS-002_command-palette.png', 'CC-VIS-003_continue-work-authority.png', 'CC-VIS-005_how-command-centre-works.png']) {
    if (!await exists(`assets/${asset}`)) failures.push(`public Command Centre asset missing: ${asset}`);
  }
  for (const blockedAsset of ['CC-VIS-001_command-centre-overview.png', 'CC-VIS-004_neos-connected-context.png']) {
    if (await exists(`assets/${blockedAsset}`)) failures.push(`blocked Command Centre asset generated: ${blockedAsset}`);
    if (detailHtml.includes(blockedAsset)) failures.push(`blocked Command Centre asset referenced: ${blockedAsset}`);
  }
}

if (!['preview', 'public'].includes(mode)) failures.push(`unsupported mode: ${mode}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Project publication check passed for ${mode}: MicroGrow route ${microgrowRoute ? 'present' : 'absent'}, Command Centre route ${commandCentreRoute ? 'present' : 'absent'}.`);
