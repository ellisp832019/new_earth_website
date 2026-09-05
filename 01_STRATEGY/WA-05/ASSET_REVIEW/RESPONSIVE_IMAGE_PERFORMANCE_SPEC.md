# Responsive Image and Performance Specification

Future builds should preserve width/height and aspect ratio, generate responsive
variants and `srcset`/`sizes` or an equivalent, use modern formats with fallback,
compress appropriately, lazy-load below-the-fold images and prioritise only justified
hero images. Avoid giant originals on small screens and retain masters. Validate CLS,
crop, loading and mobile rendering at runtime; do not make performance claims now.
