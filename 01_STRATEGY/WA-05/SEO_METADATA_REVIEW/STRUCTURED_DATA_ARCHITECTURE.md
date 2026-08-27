# Structured Data Architecture

Structured data must describe content visible and true on the page. Use JSON-LD
where appropriate and validate rendered output before launch.

- Home: `WebSite` and `WebPage` after the canonical origin is verified.
- About: `AboutPage` where the visible content supports it.
- Contact: `ContactPage` only when a real contact route exists.
- Journal: `Article` or `BlogPosting` only with real author and date data.
- Deeper pages: `BreadcrumbList` only when visible breadcrumbs help people.
- Images: `ImageObject` only when the preferred image and rights are verified.
- Organization: use only verified name, URL, logo, legal name, address, contact,
  sameAs, founding date or founder values.

Do not add Product, Offer, SoftwareApplication, Event, ProfilePage or discussion
markup for deferred or unverified capabilities. Never add fake reviews, ratings,
medical claims, contact data or search-action markup without a real search feature.
