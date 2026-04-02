# Changelog

## [1.0.0] - 2026-04-01
### Added
- Initial site build for Pawsitive Care Veterinary
- 9 sections: Hero, Services, Team, Testimonials, Emergency, Location/Hours, Booking Form, FAQ, Footer/Contact
- Dark theme with teal accent color
- Mobile-first responsive design with center alignment on mobile
- Accessible navigation with hamburger menu on mobile
- CSS-only illustrations (paw print, service icons, map pin, emergency cross)
- Booking/appointment request form with client-side validation
- FAQ accordion using native `<details>` elements
- JSON-LD structured data (VeterinaryCare schema)
- Smooth scroll, sticky header, active nav highlighting
- Skip-to-content link for accessibility
- Emergency CTA prominently featured in hero and dedicated section

## [2026-04-01] — Spark: Tap-glow micro-interaction
- Added CSS-only tap feedback (scale + accent glow) to service cards and testimonial cards
- Mobile-first: subtle press-in on :active gives tactile feel when tapping cards
- Addresses SCOUT-REPORT #4 (Trust Signals) and #7 (Service presentation)
- Uses existing --accent-glow variable; no new dependencies
