# SFTP_DEPLOY_WORKFLOW

## Status
Deployment Workflow v1

## Purpose
This file defines the deployment workflow for moving local New Earth theme files into the live IONOS WordPress environment.

The goal is to make deployment:
- predictable
- safe
- traceable
- repeatable
- low-chaos

This workflow is intentionally simple for version 1.

---

## CORE PRINCIPLE

The local `NEW_EARTH_WEBSITE` workspace is the source of truth.

The live IONOS WordPress environment receives changes from that source.

Do not reverse this relationship.

---

## DEPLOYMENT SCOPE FOR V1

In version 1, SFTP deployment should mainly be used for:

- child theme files
- theme stylesheet updates
- theme.json updates
- small template support files if needed
- later assets placed inside the child theme

It should not be used for random experimentation on the live server.

---

## PRIMARY DEPLOYMENT TARGET

Local path:
`06_THEME/new-earth-child/`

Expected live target:
`wp-content/themes/new-earth-child/`

---

## DEPLOYMENT WORKFLOW

### Step 1 — Make the change locally
All changes begin in the local workspace.

Examples:
- update `style.css`
- update `theme.json`
- update `functions.php`
- add a theme asset
- refine structure notes

### Step 2 — Review the change
Before uploading, confirm:
- the file is in the correct location
- the change aligns with the Blueprint and design system
- the change is intentional, not experimental drift
- the change does not introduce unnecessary complexity

### Step 3 — Log the build action
Add a short note to:
`09_LOGS/BUILD_LOG.md`

Record:
- date
- what changed
- why
- whether it is safe to deploy

### Step 4 — Back up before significant change
Before any meaningful theme update:
- confirm backup plugin or export exists
- confirm there is a rollback path
- especially do this before major CSS or PHP changes

### Step 5 — Connect by SFTP
Use your SFTP client and connect with:
- host
- port 22
- username
- password

All connection details should be recorded in:
`08_DEPLOYMENT/IONOS_ACCESS.md`

### Step 6 — Navigate to the live theme directory
Go to the live WordPress path for themes and locate:
`new-earth-child`

If the theme folder does not exist yet:
- upload it fully
- then activate it from WordPress admin

### Step 7 — Upload only the intended files
For safety, upload only the files you mean to change.

Examples:
- `style.css`
- `functions.php`
- `theme.json`

Avoid unnecessary bulk uploads unless doing the first theme deploy.

### Step 8 — Verify in WordPress
After upload:
- refresh the site
- check homepage
- check one interior page
- check mobile if possible
- confirm no major layout break
- confirm admin still works
- confirm the active theme is correct

### Step 9 — Log the deployment result
Update:
`09_LOGS/BUILD_LOG.md`

Record:
- what was uploaded
- whether it worked
- any issues found
- rollback actions if needed

---

## FIRST THEME DEPLOYMENT WORKFLOW

For the first child theme deployment:

1. confirm parent theme exists on WordPress
2. upload `new-earth-child` folder
3. activate the child theme in WordPress
4. verify:
   - colors load
   - typography presets appear
   - page widths behave correctly
   - buttons display properly
   - nothing breaks in editor or frontend

This first activation is a milestone and should be logged.

---

## SAFE CHANGE TYPES

These are lower-risk changes:
- CSS refinements
- theme.json adjustments
- spacing tweaks
- color token updates
- non-breaking visual polish

These still need logging, but are easier to recover from.

---

## HIGHER-RISK CHANGE TYPES

These need extra care:
- PHP changes in `functions.php`
- template overrides
- changes affecting navigation
- changes affecting editor behavior
- large structural CSS changes

For these:
- back up first
- deploy carefully
- verify immediately
- log clearly

---

## ROLLBACK RULE

If a deployment causes visual breakage or instability:

1. identify the changed file
2. restore the last known working version
3. re-upload the corrected file
4. verify frontend and admin
5. log the issue and resolution

Do not keep layering fixes on top of unclear breakage.

---

## FILE DISCIPLINE RULE

Never edit the live theme first and then forget to update the local workspace.

If the local version and live version drift apart, the system becomes fragile.

Local must remain canonical.

---

## DEPLOYMENT CHECKLIST

Before upload:
- change made locally
- file reviewed
- change logged
- backup considered
- target path confirmed

After upload:
- site loads
- homepage checked
- one or two core pages checked
- admin checked
- result logged

---

## FINAL RULE

A good deployment workflow should feel quiet, deliberate, and recoverable.