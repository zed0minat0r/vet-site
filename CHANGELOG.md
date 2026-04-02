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

## [1.4.0] - 2026-04-01 — Builder: Hero Background Pattern + Scroll-to-Hide CTA (Audit #3 + #5)
- Added subtle repeating paw-print SVG pattern to hero background for visual texture and vet clinic identity (Audit Priority #3)
- Added radial gradient glow behind hero content for depth and emotional warmth
- Hero now has layered background: paw pattern + gradient + radial glow — all CSS, no images to load
- Added scroll-to-hide behavior on sticky mobile CTA bar: hides on scroll down, reappears on scroll up (Audit Priority #5)
- CTA hide/show uses requestAnimationFrame for smooth 60fps performance
- All changes mobile-first and center-aligned per AGENT-RULES

## [1.5.0] - 2026-04-01 — Razor: Code Cleanup Audit
- Removed dead `img` rule from CSS (no img elements in HTML)
- Consolidated duplicate `body` declarations (merged padding-bottom into main body rule)
- Removed unreachable properties in `.mobile-cta-bar.cta-hidden` (padding/gap on off-screen element)
- Removed standalone `.footer-links a:hover` (hover-only, no focus-visible pair)
- Trimmed 13 verbose multi-line comment blocks to single-line format across CSS and JS
- Removed decorative file-header comment from main.js
- No dead JS functions or unused event listeners found — all JS is active and lean
- No unused keyframes/animations found
- Net result: 49 lines removed (44 CSS, 5 JS) — zero functional changes

## [1.6.0] - 2026-04-01 — Pixel: Mobile Design Audit (375px)
- FAQ: Changed summary and answer text from center-aligned to left-aligned for readability; marker uses space-between
- Form: Removed centered text-align from inputs/labels/error messages — left-aligned for standard mobile UX
- Form inputs: Added min-height 48px for consistent tap targets across all form fields
- Textarea: Added resize:vertical and min-height 80px
- Hero buttons: Changed to full-width stretch layout (max-width 320px, centered) for uniform mobile tap targets
- Mobile CTA bar: Added inner padding, gap between buttons, safe-area-inset-bottom for notched phones
- Mobile CTA buttons: Increased min-height to 48px, unified border-radius to --radius-sm
- Footer contact links: Added 44px min-height tap targets for phone/email links
- Body: Added overflow-wrap/word-break to prevent text-based horizontal scroll; safe-area-inset padding
- Hours table: Increased cell padding for better readability on narrow screens

## [1.7.0] - 2026-04-01 — Refiner: Hero Image, Team Photos, Visual Variety (v2 Audit Top 3)
- Hero: Replaced SVG paw pattern background with Unsplash photo of vet with pet + dark gradient overlay for readability (Audit #1 — biggest single-change lever)
- Team: Replaced letter-circle avatar placeholders with Unsplash stock headshot photos — circular with accent border (Audit #2)
- Team section: Converted to light-mode (#f4f7fa bg, white cards) to break dark monotone pattern and add visual hierarchy (Audit #4)
- Team cards: Added subtle box-shadow for depth on light background
- Avatar photos: 88px circular with 3px accent border and soft glow shadow

## [1.8.0] - 2026-04-01 — Spark: Testimonials Warmth Redesign (Audit score 5.8)
- Testimonials section: Switched from dark bg to warm light background (#f9fafb) with white cards for a friendlier feel
- Added colored initial-letter avatars for each reviewer (green for dog owners, amber for cat owners)
- Added decorative open-quote mark (CSS ::before) in soft accent color for visual warmth
- Varied star ratings (one 4-star review) so ratings feel authentic, not templated
- Reworked pet name display format for personality ("Biscuit the Golden Retriever" vs "Pet: Biscuit (Golden Retriever)")
- White card design with soft box-shadow replaces dark bordered cards — warmer, more inviting on mobile
- All changes CSS-only and mobile-first; center-aligned

## [1.9.0] - 2026-04-01 — Builder: Header CTA + Emergency Pulse (Audit #5 & #3)
- Nav: Added visible "Book Now" CTA button and phone icon in header bar — always visible without opening hamburger (Audit #5)
- Nav: Reduced hamburger menu from 8 items to 6 — removed FAQ and Contact (both accessible via footer)
- Emergency: Added subtle pulse animation on the emergency cross icon for visual urgency (Audit #3)
- Pulse animation respects prefers-reduced-motion for accessibility
- Desktop: Phone icon hidden (less needed), Book Now CTA remains visible

## [2.0.0] - 2026-04-01 — Refiner: Hero Overlay + Services Refresh + Preconnect (Audit v3 Top 3)
- Hero: Lightened overlay from 72-85% to 50-65% opacity — vet-with-pet photo now visible on mobile
- Services: Added accent top-border on cards for visual pop and stronger section identity
- Services: Increased icon background opacity (0.08 to 0.15) and added subtle fill to SVG icons
- Services: Bumped card border opacity for better definition on dark backgrounds
- Technical: Added preconnect + dns-prefetch for images.unsplash.com in head
- Technical: Added og:image meta tag for social sharing / iMessage link previews
- All changes mobile-first, center-aligned, no new sections added

## [2.1.0] - 2026-04-01 — Pixel: Mobile Tap Target Audit (375px)
- Address link (.address-link): Added min-height 44px + vertical padding for proper tap target
- Directions CTA (.directions-cta): Added min-height 44px tap target
- Hours table: Increased row padding from 0.4rem to 0.5rem for better readability and touch spacing
- Verified: all form inputs already 16px font-size, all buttons/nav links already 44px+ min-height
- Verified: center alignment consistent across all sections on mobile
- Verified: no horizontal overflow at 375px viewport

## [2.2.0] - 2026-04-01 — Spark: Services Section Visual Warmth Upgrade
- Converted Services section from dark monochrome to warm light-mode (soft green-to-neutral gradient background)
- Cards now white with subtle box-shadow, matching Team section's inviting feel
- Service icons enlarged from 56px to 64px with unique pastel tint per card (green, blue, purple, orange, pink, sky)
- Text colors updated to warm dark tones for better readability on light background
- Active state refined with softer glow and icon scale feedback
- Breaks the "all-dark monotony" flagged in AUDIT.md (Services was lowest at 6.0)
- CSS-only change, mobile-first, center-aligned, no new sections
- No new sections added

## [2.3.0] - 2026-04-01 — Builder: Warmth & Polish Pass (Location, FAQ, Booking, Back-to-Top)
### Fixed
- Back-to-top button: Now scrolls to y=0 instead of y=460 (was using #hero anchor with scroll-padding offset; replaced with JS window.scrollTo)

### Changed — Location / Hours Section
- Converted from dark to warm light-mode (soft green-to-neutral gradient), matching Team and Services visual warmth
- Map placeholder upgraded: white card with soft shadow, larger/clearer SVG map illustration with filled green pin
- Added inline SVG icons (pin, clock, phone) next to section subheadings for visual warmth
- Text colors updated for readability on light background (dark headings, muted body text)

### Changed — FAQ Section
- Added "Still have questions?" CTA with phone call button below FAQ list
- CTA separated by subtle border-top divider, center-aligned

### Changed — Booking Form
- Added "Preferred Time" dropdown (Early Morning, Morning, Afternoon, Late Afternoon) alongside date picker
- Date field now enforces min=today via JS to prevent past-date selection
- Date + time fields in a responsive 2-column row on desktop

### Notes
- Mobile-first, center-aligned, no new sections added (still 10 sections)
- Addresses audit items: Location 6.0, FAQ 6.0, Booking 6.3 stagnation

---

## v5 — Refiner Pass (2026-04-01)

### Changed — Booking Form (light-mode conversion)
- Converted from dark (--bg-alt) to warm light gradient (#f4f7fa -> #f0faf6)
- Form wrapped in white card with subtle border and shadow
- Input fields now light (#f8fafb) with soft gray borders (#d1d9e0)
- Labels, text, headings all use dark palette (#1a2230, #5a6577)
- Success message uses green on light background

### Changed — FAQ (light-mode conversion)
- Converted from dark (--bg) to warm light gradient (#f0faf6 -> #f4f7fa)
- FAQ items now white cards with soft shadow and green-tinted border
- Summary text and paragraph text use dark palette
- CTA divider updated to match light theme

### Changed — Hero Image (responsive srcset)
- Default (mobile) loads 400px wide image instead of 1200px
- 480px+ breakpoint loads 768px wide image
- 768px+ breakpoint loads full 1200px image
- Reduces bandwidth on phones by ~60%

### Changed — Service Icon Colors (matched to backgrounds)
- Surgery icon stroke: teal -> blue (#3b82f6) matching blue pastel bg
- Dental Care icon stroke: teal -> purple (#a855f7) matching purple pastel bg
- Vaccinations icon stroke: teal -> orange (#fb923c) matching orange pastel bg
- Preventive Care icon stroke: teal -> pink (#ec4899) matching pink pastel bg
- Diagnostics icon stroke: teal -> sky (#0ea5e9) matching sky pastel bg
- SVG fill colors now per-card, matched to their respective background tints

### Notes
- Mobile-first, center-aligned, no new sections added
- Addresses v4 audit top 3 priorities: dark holdout sections, hero image size, icon color mismatch

## [1.5.1] - 2026-04-01
### Fixed — Mobile Audit (375px viewport) by Pixel
- Added `@media (max-width: 400px)` breakpoint for small-screen refinements
  - Hero h1 reduced from 2.4rem to 2rem to prevent tight wrapping
  - Hero tagline reduced to 1rem for better readability
  - Container side padding tightened to 1rem for more breathing room
  - Section vertical padding reduced from 4rem to 3rem
  - Card padding (service, team, testimonial) slightly reduced for fit
  - Nav padding and logo font tightened
  - Mobile CTA bar padding and font size reduced to prevent overflow
  - Stat numbers reduced from 3.5rem to 3rem
- Added global `img { max-width: 100%; height: auto; }` to prevent image overflow
- Added `-webkit-tap-highlight-color: transparent` on links for cleaner mobile taps
- Service icon SVG stroke colors updated to match CSS nth-child pastel tints
- Responsive hero background images (400w mobile, 768w tablet, 1200w desktop)
- Booking form and FAQ sections restyled to warm light-mode (white cards, light backgrounds)

### Notes
- All inputs already at 16px (no iOS zoom). All tap targets already at 44px+ min-height.
- Center alignment consistent across all sections. No horizontal overflow detected.
- Still 10 sections. No new sections added.

## [v6] - 2026-04-01 (Spark)
### Changed — Services color story completion (Audit rec #3)
- Color-matched each service card border-top to its unique icon color (teal, blue, purple, orange, pink, sky) instead of uniform `var(--accent)` teal
- Bumped service card border-radius from 12px to 16px for a warmer, more organic feel (scout report: "curved/organic shapes create warmth")
- Fixed first service card SVG stroke from `var(--accent)` to explicit `#2dd4a8` for consistency with cards 2-6 which already had explicit stroke colors
- Softened card border from 0.12 to 0.08 opacity to let the colorful border-top stand out more
- CSS-only change, no new sections, mobile-first, center-aligned

## [v7] - 2026-04-01 (Builder)
### Changed — Testimonials, Emergency, FAQ, Footer warmth & trust pass

#### Testimonials (targeting 6.5 -> 7.0+)
- Replaced letter-initial avatars with real Unsplash reviewer photos (56x56, lazy-loaded, border accent ring)
- Added 4th testimonial card (Maria L. / Mochi the Ragdoll Cat) for more social proof
- Added Google Reviews link with star icon below the grid (4.9 stars badge)
- Testimonials desktop grid changed to 2x2 at 1024px to accommodate 4 cards cleanly

#### Emergency (targeting 6.8 -> 7.0)
- Converted inline symptom text into a proper bullet list (`.emergency-symptoms`) with warning emoji markers
- Added "Suspected poisoning" as a 4th symptom for completeness
- List is centered within the emergency box, left-aligned text for readability

#### FAQ (targeting 6.3 -> 6.5+)
- Added 2 new questions: "Does my pet need dental cleanings?" and "What should I bring to my first visit?"
- Now 8 total FAQ items covering the most common pet owner concerns

#### Footer (targeting 6.3 -> 6.5)
- Added Privacy Policy and Terms of Service links in footer-bottom
- Links styled with proper 44px touch targets and dot separator

### Notes
- No new sections added. Still within 10-12 cap.
- All changes mobile-first, center-aligned on mobile.
- All new images lazy-loaded with explicit width/height to prevent CLS.

---

## v6 — Refiner Polish (2026-04-01)
**Agent:** Refiner | **Audit baseline:** v5 (6.9) | **Target:** 7.0+

### Changes

#### Location (targeting 6.5 -> 7.0+)
- Replaced SVG map placeholder with a real Google Maps embed iframe
- Added "Get Directions" link below the map with 44px touch target
- Map is lazy-loaded for performance

#### Nav (targeting 6.8 -> 7.0+)
- Replaced paw emoji with a custom SVG paw-print logo mark in header and footer
- Updated favicon to use the same SVG paw-print (no more emoji favicon)
- Logo mark is 28px in nav, 32px in footer, accent-colored

#### Booking (targeting 6.8 -> 7.0+)
- Added "Prefer to call? (555) PAW-CARE" fallback below the booking submit button
- Phone number is a tappable tel: link for mobile users
- Styled to be subtle but visible for form abandoners

### Notes
- No new sections added. Still within 10-12 cap.
- All changes mobile-first, center-aligned on mobile.

## [1.0.1] - 2026-04-01 — Pixel Mobile Audit (375px)
### Fixed
- Bumped form label font-size from 0.95rem to 1rem for better mobile readability
- Increased nav CTA button font-size from 0.8rem to 0.85rem and padding for easier tapping
- Bumped map tap-hint, footer tagline, and footer legal font-sizes from 0.8rem to 0.85rem (min legibility threshold)
- Added 375px refinements: testimonial quote mark repositioned to prevent overlap, FAQ summary/body padding tightened, booking form padding adjusted
- Ensured mobile CTA bar buttons retain min-height: 48px at small-screen breakpoint
### Audited (no issues found)
- All form inputs already at 16px (prevents iOS auto-zoom)
- All tap targets meet 44px minimum (buttons, links, nav items, social icons)
- Center alignment consistent across all mobile sections
- No horizontal overflow detected at 375px
- Container padding properly reduces at small breakpoint
- overflow-x: hidden on html element prevents scroll bleed

## v6 — Spark — Branded Logo Mark (2026-04-01)
### Changed (Navigation 6.8 -> target 7.0+, Footer 6.5)
- Replaced flat teal SVG paw with gradient-fill paw (teal-to-sky-blue) in both header and footer
- Added `.logo-badge` — circular branded container behind paw SVG with translucent gradient background and subtle ring shadow
- Footer badge slightly larger (44px vs 38px nav) to match its visual context
- Added `logoReveal` CSS keyframe animation (0.6s ease-out, scale + rotate entrance) for polished first-impression on page load
- All CSS-only, no JS additions; mobile-first; center-aligned on mobile
### Why
- Audit v5 priority recommendation #2: "A simple SVG paw-print logo... would make the header feel branded rather than generic"
- The logo is the first element users see on mobile — upgrading from emoji-like flat fill to a branded badge elevates the entire site's perceived professionalism

## v6-polish — Builder — Trust, Warmth & Polish Pass (2026-04-01)
### Changed (Footer 6.5, CTA Bar 6.5, Location 6.5, FAQ 6.8, Booking 6.8)
- Footer: upgraded flat dark background to subtle gradient (1e2a3a -> bg-alt), added "Your family is our family" heart trust badge, added "Follow Us" label above social icons
- Sticky CTA Bar: Book Now button upgraded to gradient fill with accent glow shadow for visual differentiation from outlined Call Now
- Location: "Get Directions" map link upgraded from plain text to a full accent-gradient button (max-width 220px, white text, rounded), added "Free parking available on-site" note below map
- FAQ: Call CTA button changed from filled btn-primary to outlined btn-outline style for visual variety against the light FAQ background
- Booking Form: labels upgraded to font-weight 700 with tighter size (0.95rem) and letter-spacing (0.2px) for quicker scanning
### Why
- Post v5 audit: 4 sections still at 6.5 (Footer, Location, CTA Bar) and 2 at 6.8 (FAQ, Booking). These small trust/warmth/polish tweaks target each weak section to push the overall score from 6.9 toward 7.0+
- All changes mobile-first, center-aligned on mobile, no new sections added
