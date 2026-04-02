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

## [1.1.0] - 2026-04-01 — Builder: Sticky Mobile CTA Bar
- Added sticky bottom CTA bar with "Call Now" (tap-to-call) and "Book Now" buttons
- Fixed to bottom of viewport on mobile, hidden on desktop (768px+)
- Respects safe-area-inset-bottom for notched/iPhone devices
- Uses site accent colors and dark theme styling consistently
- Addresses SCOUT-REPORT #1 CRITICAL (Mobile-First with Sticky CTA)

## [1.2.0] - 2026-04-01 — Pixel: Mobile Center-Alignment & Visual Audit
### Fixed
- CENTER ALIGNMENT: Form labels, inputs, selects, and error messages now center-aligned on mobile
- CENTER ALIGNMENT: FAQ summary text and answer paragraphs centered on mobile
- CENTER ALIGNMENT: Testimonial cards use top border accent instead of left border for visual symmetry
- VISUAL: Nav hamburger tap target increased from 40px to 44px (iOS minimum)
- VISUAL: All buttons enforce min-height 44px for tap target compliance
- VISUAL: Emergency phone link gets 44px min tap target
- VISUAL: Footer quick links get 44px tap targets on mobile, reset on desktop
- VISUAL: Input font-size set to explicit 16px to prevent iOS auto-zoom
- MOBILE: Form row (Pet Type / Service) stacks to single column on mobile (<600px)
- MOBILE: html overflow-x hidden to prevent horizontal scroll
- MOBILE: Textarea keeps left-align for multi-line readability

## [1.2.0] - 2026-04-01 — Refiner: SVG Icons, Tappable Address, Footer Social
- Replaced all CSS placeholder icons (hero paw, 6 service icons, map pin) with proper inline SVGs — cleaner, recognizable, vet-themed
- Service icons now sit in subtle circular accent-tinted backgrounds for visual polish
- Hero paw SVG is larger (80px) with a soft glow drop-shadow for more visual impact
- Made address tappable: wraps in Google Maps link with "Get Directions" CTA (Audit Priority #1)
- Map placeholder is now a tappable link to Google Maps with SVG map illustration and "Tap to open in Maps" hint
- Added social media links (Facebook, Instagram, Google Business) with circular icon buttons to footer (Audit Priority #2)
- Added "Back to top" smooth-scroll link in footer bottom (Audit Priority #2)
- Added meta theme-color, Open Graph tags, and emoji favicon (Audit Priority #4 — quick wins)
- All changes mobile-first and center-aligned per AGENT-RULES

## [1.3.0] - 2026-04-01 — Spark: Footer Visual Warmth (Audit — Footer 6.8, lowest section)
- Added decorative gradient accent strip along top of footer replacing plain border — gives visual depth
- Added subtle paw-trail divider (CSS pseudo-element) above footer for vet clinic character
- Enhanced footer brand area: larger paw icon, subtle separator below brand on mobile, warmer presence
- Added "Proudly serving Greenfield, PA & surrounding communities" tagline — local identity, feels real
- Social link icons now have a subtle accent-tinted border for more definition
- Desktop: brand separator hidden for clean 3-column layout
- All changes CSS-only, mobile-first, center-aligned per AGENT-RULES
