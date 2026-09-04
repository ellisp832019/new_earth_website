import { execFileSync } from 'node:child_process';

const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'buffer' })
  .toString('utf8')
  .split('\0')
  .filter(Boolean);

const prohibited = tracked.filter((path) =>
  (path.startsWith('ASSETS/') && path.includes('/01_SOURCE/')) ||
  /^ASSETS\/06_MICROGROW\/evidence\/microgrow_(?:.*_current.*|current_.*)\.[^/]+$/i.test(path),
);

if (prohibited.length) {
  console.error('Prohibited owner-only or raw MicroGrow assets are tracked:');
  for (const path of prohibited) console.error(`- ${path}`);
  process.exit(1);
}

console.log('Privacy asset guard passed: no owner-only source or raw MicroGrow capture is tracked.');
