# Local Website V2 Preview

The Website V2 foundation is an Astro static-first application.

1. Run `npm.cmd install` once, then `npm.cmd run dev` from the repository root.
2. Open the reported local URL and inspect the seven foundation routes.
3. Stop the server with `Ctrl+C`.
4. Run `npm.cmd run build` and `npm.cmd run check`.

The default mode is `LOCAL_PREVIEW`; it is not a WordPress or production
deployment. Future public builds must use `PUBLIC_ASSET_MODE=PUBLIC` and the
public asset build gate. Blocked/reference assets must not enter public output.
