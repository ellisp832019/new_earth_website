# TODAY_BUILD_ACTION_SHEET

## Purpose
This is the first practical action sheet for starting the New Earth website build today.

It is designed to be followed in sequence without guesswork.

Goal for this session:
- create the local workspace
- confirm IONOS / WordPress access
- create the live page shells
- set menus
- upload the child theme
- prepare the site for content population

---

## SESSION GOAL

By the end of this session, you should have:

- the `NEW_EARTH_WEBSITE` workspace created locally
- the locked Blueprint placed in the source structure
- WordPress confirmed on IONOS
- core page shells created
- main and footer menus created
- child theme uploaded and activated
- the site ready for content population

This is the true start of the build.

---

## STEP 1 — CREATE THE LOCAL WORKSPACE

### Action
Run the bootstrap `.bat` file.

### Result
You should now have:

`NEW_EARTH_WEBSITE/`

with all folders and markdown files created.

### Check
Confirm these exist:
- `00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`
- `03_CONTENT/01_HOME/HOME_MASTER.md`
- `05_WORDPRESS/WORDPRESS_SETUP.md`
- `06_THEME/new-earth-child/style.css`
- `08_DEPLOYMENT/IONOS_ACCESS.md`

### Log
Add a note to:
`09_LOGS/BUILD_LOG.md`

Suggested note:
- workspace created successfully
- file structure confirmed

---

## STEP 2 — LOCK THE BLUEPRINT INTO THE WORKSPACE

### Action
Open:
`00_BLUEPRINT/NEW_EARTH_BLUEPRINT_MASTER.md`

Paste in the full locked New Earth Blueprint.

### Result
Your doctrine is now stored in the project source structure.

### Check
Confirm the file includes:
- foundational vision
- core principles
- all 12 pillars
- inner blueprint
- transition path
- New Earth Test
- declaration

### Rule
Do not keep the Blueprint only in chat history.
It must live in the file system now.

---

## STEP 3 — OPEN THE KEY CONTROL FILES

### Action
Open and review these files:

- `07_CODEX/AGENTS.md`
- `07_CODEX/TASK.md`
- `07_CODEX/RULES.md`
- `09_LOGS/DECISIONS.md`
- `09_LOGS/OPEN_ITEMS.md`

### Result
You understand the system rules before touching the live site.

### Check
Confirm you understand:
- local workspace is source of truth
- WordPress is publishing layer
- Blueprint is locked doctrine
- build order matters

---

## STEP 4 — FILL THE IONOS ACCESS RECORD

### Action
Open:
`08_DEPLOYMENT/IONOS_ACCESS.md`

Fill in as much as you can right now.

### Fill these first
- IONOS account email
- hosting package name
- WordPress admin URL
- domain connection status
- SSL status
- SFTP enabled status
- SFTP host
- SFTP username
- theme target path
- plugin decisions if known

### Result
You now have one operating record for the live environment.

### Check
Do not move on without filling at least:
- WordPress admin URL
- SSL status
- SFTP status

---

## STEP 5 — LOG INTO WORDPRESS ON IONOS

### Action
Go into the live WordPress admin.

### Confirm
- login works
- correct site opens
- domain is correct
- HTTPS is working
- admin dashboard is accessible

### Result
The publishing layer is now confirmed.

### If something fails
Pause and resolve:
- domain connection
- SSL
- login
- WordPress install status

Do not continue until admin access is working.

---

## STEP 6 — CLEAN THE WORDPRESS INSTALL

### Action
Inside WordPress, remove default clutter.

### Checklist
- [ ] delete sample post
- [ ] delete sample page
- [ ] remove unused demo content
- [ ] remove unused plugins
- [ ] remove unused themes if appropriate
- [ ] set site title
- [ ] set tagline
- [ ] set permalinks to post name

### Suggested site title
**New Earth**

### Suggested tagline
**A living framework for conscious civilization**

### Result
You now have a clean WordPress base.

---

## STEP 7 — CREATE THE CORE PAGE SHELLS

### Action
Create these pages in WordPress with just titles first:

- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact
- Privacy Policy
- Terms
- Cookie Policy
- Disclaimer

### Result
Your site structure now exists in the live WordPress layer.

### Check
Confirm page slugs are clean:
- `/manifesto/`
- `/blueprint/`
- `/systems/`
- `/microgrow/`
- `/journal/`
- `/about/`
- `/contact/`

---

## STEP 8 — CREATE THE MENUS

### Action
Build the navigation.

### Main menu
- Home
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact

### Footer menu
- Manifesto
- Blueprint
- Systems
- MicroGrow
- Journal
- About
- Contact
- Privacy Policy
- Terms
- Cookie Policy
- Disclaimer

### Result
Visitors now have proper site navigation.

### Check
Confirm:
- Blueprint is in the top menu
- legal pages are in the footer
- nothing random is in navigation

---

## STEP 9 — SET HOMEPAGE AND POSTS PAGE

### Action
Go to Reading settings.

### Set
- static homepage = Home
- posts page = Journal

### Result
WordPress now knows the correct core site structure.

---

## STEP 10 — PREPARE THE CHILD THEME LOCALLY

### Action
Open the local child theme files and confirm they are ready:

- `06_THEME/new-earth-child/style.css`
- `06_THEME/new-earth-child/functions.php`
- `06_THEME/new-earth-child/theme.json`

### Check
Confirm:
- theme header in `style.css` is correct
- parent theme is `twentytwentyfour`
- `functions.php` is present
- `theme.json` is valid JSON

### Result
Your theme pack is ready for first upload.

---

## STEP 11 — UPLOAD THE CHILD THEME

### Action
Connect to IONOS using SFTP.

Upload:

`06_THEME/new-earth-child/`

to:

`wp-content/themes/new-earth-child/`

### Result
The child theme is now on the live server.

### Check
Confirm the folder exists in the live themes directory.

---

## STEP 12 — ACTIVATE THE CHILD THEME

### Action
Return to WordPress admin.

Go to Appearance / Themes and activate:

**New Earth Child**

### Result
Your live site now begins using the New Earth theme foundation.

### Check immediately
- homepage loads
- typography looks sane
- buttons render
- admin still works
- nothing major breaks

---

## STEP 13 — DO A FIRST VISUAL CHECK

### Action
Open:
- Home
- one internal page
- mobile preview if possible

### Check
- site loads
- spacing looks clean
- no broken styles
- no white screen
- no PHP errors
- no malformed layout

### Result
You now know whether the first deployment is stable.

---

## STEP 14 — LOG THE SESSION

### Action
Open:
`09_LOGS/BUILD_LOG.md`

Add a real session entry.

### Suggested session title
`2026-04-12 — First live WordPress setup session`

### Include
- WordPress confirmed
- core pages created
- menus created
- child theme uploaded
- child theme activated
- any issues found
- next actions

### Result
The build history now begins properly.

---

## STEP 15 — STOP AT THE RIGHT POINT

### Action
Do not try to do everything in one burst.

If all steps above are complete, stop the session there.

### End-of-session success state
You have:
- structure
- WordPress
- menus
- child theme
- stable base

That is a proper first build milestone.

---

## TODAY'S SUCCESS TEST

Today is successful if all of these are true:

- [ ] local workspace exists
- [ ] Blueprint pasted into source
- [ ] IONOS access file filled
- [ ] WordPress admin confirmed
- [ ] page shells created
- [ ] menus created
- [ ] homepage and posts page assigned
- [ ] child theme uploaded
- [ ] child theme activated
- [ ] live site checked
- [ ] session logged

---

## DO NOT DO TODAY UNLESS EVERYTHING ABOVE IS DONE

Avoid jumping ahead into:
- detailed page styling
- lots of plugin installs
- building all legal text perfectly
- writing Journal posts
- pillar subpages
- advanced MicroGrow subpages
- design experiments

Today is for the base.

---

## NEXT SESSION

Once this session is complete, the next session should be:

1. Build Home
2. Build Manifesto
3. Build Blueprint

Those three pages will bring the site to life.