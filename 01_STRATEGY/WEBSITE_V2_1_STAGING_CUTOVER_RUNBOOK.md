# Website V2.1 staging and controlled cutover runbook

## Preconditions

- Build source is the approved Phase I release commit.
- Use `npm.cmd run build:public`; deploy only the resulting governed package.
- Do not deploy from a local preview, source tree, `ASSETS_REFERENCE`, or an
  unverified archive.
- Obtain a current live-site backup, database/export where applicable, host
  configuration backup, and a separately restorable rollback copy before any
  staging or cutover work.

## Staging procedure

1. Record the source commit, package filename, file count, byte count and
   SHA-256; verify the archive matches the record.
2. Confirm the staging hostname, HTTPS certificate and document root. Do not
   change DNS or production configuration.
3. Upload the governed public package only. Confirm `.htaccess`, `robots.txt`,
   `sitemap.xml`, favicon, custom 404, assets and `contact-submit.php` are in
   the staging root.
4. Configure protected host values `NE_CONTACT_GENERAL`, `NE_CONTACT_PETER`
   and `NE_CONTACT_SENDER`; do not put recipients or credentials in files,
   browser fields, Git or test evidence.
5. Verify every canonical public route, plus custom 404, at the staging origin.
6. Verify each six exact `.htaccess` redirects is one-hop 301 with no loop or
   chain.
7. Verify sitemap, robots, canonical URLs, favicon and the seven representative
   social cards: Home, What We’re Building, Digital Products, MicroGrow,
   Journal, About and Contact.
8. Confirm no local paths, owner-only paths, raw sources, preview assets,
   private notes or unpublished Journal/product records are reachable.
9. Test the Contact handler: reject GET; send controlled valid enquiries for
   general, product/customer, collaboration, technical partnership,
   trainee/intern, funding/investment, event/speaking and research. Confirm the
   documented fixed destination mapping without recording recipient addresses.
10. Test Reply-To, required privacy acknowledgement, empty honeypot, timing
    guard, invalid email, overlong subject, header-injection attempt, success
    redirect and safe failure redirect. Confirm no raw PHP error is exposed.
11. Review desktop, tablet and mobile: header/nav, route hierarchy, cards,
    status labels, contact form, footer/company wrap and legal pages.
12. Record staging URL, test date, tester, Apache/PHP versions, results and any
    deviations. Obtain owner acceptance before cutover.

## Production cutover

1. Confirm staging evidence is complete and all blockers/majors are closed.
2. Take and verify a fresh production backup and rollback package immediately
   before cutover.
3. Confirm the production document root and upload only the verified package.
4. Verify SSL/domain behaviour, homepage, critical routes, legal pages,
   redirects, sitemap, robots, social metadata and no private leakage.
5. Repeat one controlled Contact delivery path and confirm safe PHP behaviour.
6. Record deployed package hash, cutover time, operator and smoke-test result.

## Rollback

Roll back immediately for a 500/PHP error or disclosure, unavailable homepage,
missing critical asset/legal page, major desktop/mobile breakage, redirect loop
or chain, wrong package hash, Contact routing failure, or private-material
leakage. Restore the preserved live files/configuration, verify the previous
critical routes, record the trigger and return to staged correction. Do not
troubleshoot indefinitely on production.

## Release package contract

The package directory and ZIP are generated under ignored `RELEASE_OUTPUT/`.
It must be built from `dist/` after `npm.cmd run build:public`, include hidden
`.htaccess`, and exclude source, Git data, `node_modules`, `ASSETS_REFERENCE`,
local assets, raw captures and private configuration. Record package checksum
and file count in the release evidence for the exact source commit.
