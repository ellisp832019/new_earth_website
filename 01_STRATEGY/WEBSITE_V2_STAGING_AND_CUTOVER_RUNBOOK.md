# Website V2 Staging and Cutover Runbook

Release candidate: **New Earth Website V2 — Baseline RC1**
Repository state: **READY FOR STAGING — NOT LIVE READY**

Do not begin cutover until the registered-office disclosure and owner legal
review gates in the release manifest are closed.

## IONOS staging procedure

1. Obtain and confirm a current backup of the live WordPress site, database,
   uploads and host configuration.
2. Preserve a separate, restorable rollback copy and record where it is held.
3. Confirm the RC ZIP filename, byte count and SHA-256 against the release
   manifest, then deploy it to staging/test webspace only.
4. Verify the staging root page from a public browser with no localhost
   assumptions.
5. Verify all 23 canonical public routes, their images and the custom 404.
6. Verify each `.htaccess` legacy rule returns one exact 301 to its recorded
   destination, with no JavaScript redirect, meta refresh, loop or chain.
7. Verify `/sitemap.xml` contains only the 23 canonical public routes.
8. Verify `/robots.txt` and its sitemap declaration.
9. Verify the favicon/site icon in a fresh browser session.
10. Verify `contact-submit.php` executes on the staging PHP runtime without a
    fatal error or source disclosure.
11. Configure `NE_CONTACT_GENERAL`, `NE_CONTACT_PETER`, `NE_CONTACT_HAYLEY` and
    `NE_CONTACT_SENDER` as protected server/environment values. Do not put real
    addresses in public files or Git.
12. Send one controlled **General / New Earth** test message.
13. Send one controlled **Peter** test message.
14. Send one controlled **Hayley** test message.
15. Verify all three deliveries, spam placement, sender identity and Reply-To
    behaviour; record timestamps and outcomes without copying private addresses
    into the repository.
16. Test the required mobile routes at 440px, including navigation, pathway,
    explorer, Team portrait, Founder portrait and Contact form.
17. Repeat a desktop smoke test in an external/public browser.
18. Perform owner visual review and close the legal/registered-office gates.
19. Take a final live-site backup immediately before cutover and confirm the
    rollback operator and location.
20. Perform a controlled production cutover without changing DNS unless a
    separately approved host plan requires it.
21. Immediately smoke-test the homepage, critical routes, assets, six redirects,
    legal pages, Contact UI/handler and one controlled delivery path.
22. Roll back if a hard-failure trigger occurs; do not troubleshoot indefinitely
    on the public site.

## Required evidence record

Record the staging URL, test date, tester, RC ZIP hash, Apache/PHP versions,
route results, six redirect results, three contact-delivery results, owner visual
decision, legal decision, registered-office closure and any deviations from the
package.

## Rollback triggers

Rollback is required for:

- repeated 500 errors or an unavailable/broken homepage;
- missing critical assets or a major desktop/mobile layout failure;
- any redirect loop, chain or broad unintended redirect;
- a contact-handler fatal error or public PHP/source disclosure;
- missing or inaccessible legal pages;
- unexpected private, source, credential or local-path leakage;
- package corruption or a deployed hash that does not match the approved RC.

## Rollback action

1. Stop the cutover.
2. Restore the preserved live files and database/configuration where applicable.
3. Confirm the previous homepage and critical routes are restored.
4. Record the trigger, time and observed scope.
5. Return RC1 to correction and staging; do not resume production cutover until
   the failed gate has new evidence.
