# Automated Asset Build Contract

Inputs for every public asset: asset ID, source path, usage, rights approval,
accessibility state, alt text, caption, focal data and required variants.

The build must refuse assets where public build status is not approved, rights are
unresolved, required alt/equivalent text is missing, the source is absent or the
path is internal/private. It should warn about oversized files, poor crops, legacy
formats and duplicates. Optional captions remain warnings, not hard failures.

Build errors and advisory warnings must be reported separately. Masters must never
be destructively overwritten.
