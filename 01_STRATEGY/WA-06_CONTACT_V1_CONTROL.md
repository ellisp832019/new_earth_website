# Contact V1 Control Record

## Status

UI complete. The bounded PHP handler is implemented, but server execution and
end-to-end mailbox delivery remain pending representative IONOS staging.

## Route and fields

- Canonical route: `/contact/`
- Required: name, email, audience, subject and message
- Optional: organisation
- No phone, address, date of birth, account or newsletter fields are collected.

## Routing

One form routes to fixed deployment configuration variables for General / New
Earth, Peter or Hayley. Visitors cannot supply an arbitrary destination.

## Protection and privacy

The form uses bounded lengths, native browser validation, a honeypot and an
optional minimum submission-time check. The handler validates again, accepts
POST only, uses fixed recipients, validates email addresses and uses Reply-To
only after validation. It does not store submissions or add tracking,
newsletter enrolment or third-party scripts.

## Deployment contract

The deployment environment must provide `NE_CONTACT_GENERAL`,
`NE_CONTACT_PETER`, `NE_CONTACT_HAYLEY` and `NE_CONTACT_SENDER` as valid email
configuration outside the repository. No recipient address or credential is
committed or exposed to the browser.

## Proof boundary

- UI: complete and locally route-testable.
- Handler: complete for local syntax and controlled-input review.
- End-to-end delivery: pending IONOS staging; no real message was sent.

The legacy WordPress and legal/privacy records remain unchanged. Contact V1 is
not a privacy-policy rewrite.
