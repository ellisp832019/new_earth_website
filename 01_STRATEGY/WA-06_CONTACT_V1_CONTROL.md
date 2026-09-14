# Contact / Work With Us Control Record

## Status

UI complete. The bounded PHP handler is implemented, but server execution and
end-to-end mailbox delivery remain pending representative IONOS staging.

## Route and fields

- Canonical route: `/contact/`
- Required: name, email, controlled enquiry type, subject, message and privacy acknowledgement
- Optional: organisation
- No phone, address, date of birth, account or newsletter fields are collected.

## Routing

One form routes each controlled enquiry type to a fixed deployment configuration
variable. General, product/customer, collaboration, trainee/intern,
funding/investment and event/speaking enquiries use the New Earth route;
technical partnership and research enquiries use the existing fixed technical
route. Visitors cannot supply an arbitrary destination. The public route does
not expose recipient addresses or internal routing detail.

## Work With Us routes

- General enquiry
- Product / customer enquiry
- Collaboration
- Technical partnership
- Trainee / intern expression of interest
- Funding / investment interest
- Event / speaking
- Research

These are contact categories, not offers, commitments, employment pathways,
investment terms or evidence of a formal partnership.

## Protection and privacy

The form uses bounded lengths, native browser validation, a privacy
acknowledgement, a honeypot and an optional minimum submission-time check. The
handler validates again, accepts POST only, uses fixed recipients, validates
email addresses and uses Reply-To only after validation. It does not store
submissions or add tracking, newsletter enrolment or third-party scripts.

## Mailing readiness boundary

No mailing-list form, provider, endpoint or local email store is active. Contact
data is only for the submitted enquiry; it must not be repurposed for marketing.
Before mailing activation, an approved provider, endpoint, purpose, explicit
consent, privacy disclosure, stated frequency, unsubscribe and suppression
handling, retention, data-processing agreement, accessibility, and success and
error behaviour are required. Privacy wording must be updated before collection.

Product/customer support and commerce are also separate: a customer enquiry is
only a contact category. It does not create an account, purchase, support ticket
or payment flow.

## Deployment contract

The deployment environment must provide `NE_CONTACT_GENERAL`,
`NE_CONTACT_PETER` and `NE_CONTACT_SENDER` as valid email configuration outside
the repository. General, product/customer, collaboration, trainee/intern,
funding/investment and event/speaking enquiries use the General route; technical
partnership and research use the Peter technical route. No recipient address or
credential is committed or exposed to the browser.

## Proof boundary

- UI: complete and locally route-testable.
- Handler: complete for local syntax and controlled-input review.
- End-to-end delivery: pending IONOS staging; no real message was sent.

The legacy WordPress and legal/privacy records remain unchanged. Contact V1 is
not a privacy-policy rewrite.
