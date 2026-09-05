import { readFile } from 'node:fs/promises';

const contactPage = await readFile(new URL('../src/pages/contact/index.astro', import.meta.url), 'utf8');
const handler = await readFile(new URL('../public/contact-submit.php', import.meta.url), 'utf8');

const requiredPageSnippets = [
  ['form action', 'action="/contact-submit.php"'],
  ['success panel', 'id="contact-success"'],
  ['server error panel', 'id="contact-server-error"'],
  ['validation error panel', 'id="contact-validation-error"'],
  ['status query script', "params.get('status')"],
  ['query cleanup', 'window.history.replaceState'],
  ['focus handling', 'panel.focus({ preventScroll: true })'],
  ['honeypot field', 'name="website"'],
  ['minimum-time field', 'name="form_started"'],
];

const requiredHandlerSnippets = [
  ['post only redirect', "$_SERVER['REQUEST_METHOD'] !== 'POST'"],
  ['general env route', "'General / New Earth' => 'NE_CONTACT_GENERAL'"],
  ['peter env route', "'Peter' => 'NE_CONTACT_PETER'"],
  ['hayley env route', "'Hayley' => 'NE_CONTACT_HAYLEY'"],
  ['sender env', "getenv('NE_CONTACT_SENDER')"],
  ['email validation', 'filter_var($email, FILTER_VALIDATE_EMAIL)'],
  ['honeypot validation', "$honeypot === ''"],
  ['minimum-time validation', '- $started < 2500'],
  ['subject whitelist', 'in_array($subject, $subjects, true)'],
  ['subject format', "'[New Earth] ' . $audience . ' - ' . $subject"],
  ['plain text part', 'Content-Type: text/plain; charset=UTF-8'],
  ['html part', 'Content-Type: text/html; charset=UTF-8'],
  ['multipart alternative', 'Content-Type: multipart/alternative'],
  ['reply-to sanitized', 'Reply-To: {$safeReplyTo}'],
  ['from sanitized sender', 'From: {$safeSender}'],
  ['html escaping', 'htmlspecialchars'],
  ['no autoresponse', 'mail($recipient, $safeSubject, $body, $headers)'],
];

const failures = [];
for (const [label, snippet] of requiredPageSnippets) {
  if (!contactPage.includes(snippet)) failures.push(`Contact page missing ${label}: ${snippet}`);
}
for (const [label, snippet] of requiredHandlerSnippets) {
  if (!handler.includes(snippet)) failures.push(`Contact handler missing ${label}: ${snippet}`);
}

if (/From:\s*\{\$email\}|From:\s*\{\$safeReplyTo\}/.test(handler)) {
  failures.push('Visitor email appears to be usable as From.');
}

const extraMailCalls = handler.match(/\bmail\s*\(/g) ?? [];
if (extraMailCalls.length !== 1) {
  failures.push(`Expected exactly one internal mail() call, found ${extraMailCalls.length}.`);
}

const forbidden = [
  /smtp/i,
  /sftp/i,
  /password\s*[:=]/i,
  /@(?:gmail|outlook|hotmail|icloud|proton|new-earth)\./i,
];
for (const pattern of forbidden) {
  if (pattern.test(handler) || pattern.test(contactPage)) {
    failures.push(`Forbidden committed contact secret/config pattern found: ${pattern}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('Contact experience check passed: status UI, env routing, anti-spam controls, validated Reply-To and multipart notification contract are present.');
