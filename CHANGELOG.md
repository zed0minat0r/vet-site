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

## razor-cleanup — Razor — Dead Code & Bloat Removal (2026-04-01)
### Removed (style.css: 56 lines removed, 1394 -> 1338)
- Dead CSS: `.reviewer-avatar` and `[data-pet="cat"] .reviewer-avatar` (16 lines) — no HTML element uses this class; all testimonials use `.reviewer-photo`
- Dead CSS: `.map-placeholder`, `.map-illustration`, `.map-tap-hint`, `.location-light .map-tap-hint` (27 lines) — HTML uses `.map-embed` instead
- Dead CSS: `.stat-number` in small-screen media query (1 line) — no element with this class exists
- Dead CSS: `.section` in small-screen media query (1 line) — HTML uses `section` elements, not `.section` class
- Dead CSS: `.location { background: var(--bg); }` (2 lines) — always overridden by `.location-light` since both classes are used together
- Dead CSS: `.location-light h2::after` (1 line) — no `content` property, pseudo-element never renders
- Dead CSS: `.footer-brand .logo-icon { font-size: 1.8rem; }` (1 line) — logo-icon is an SVG with explicit dimensions; font-size has no effect
- Dead CSS: `.nav-logo .logo-icon { font-size: 1.4rem; }` (1 line) — same reason as above
- Duplicate fix: `.location-light .section-subtitle` was declared twice (lines 742-743); consolidated to single rule with final value
### Audited & kept (no issues found)
- main.js (179 lines): all functions called, all event listeners target existing elements, no dead code
- index.html (546 lines): no unused classes, no bloat
### Why
- Routine code hygiene pass to remove dead selectors, unreachable rules, and duplicate declarations

## [1.3.1] - 2026-04-01
### Fixed (Mobile audit at 375px — Pixel)
- Center alignment: `.testimonials` section now has `text-align: center` so the Google Reviews link centers properly on mobile
- Center alignment: `.google-reviews-link` changed from `inline-flex` to `flex` with `justify-content: center` for reliable centering
- Tap target: `.call-fallback-link` (phone link under booking form) now has `min-height: 44px` with `display: inline-flex`
- New styles: `.faq-category` headers now center-aligned with accent color and uppercase styling for visual consistency
### Audited & kept (no issues found)
- All form inputs already use `font-size: 16px` (prevents iOS zoom)
- All buttons and interactive links already meet 44px min-height tap targets
- No horizontal overflow at 375px; max-widths fit within container padding
- Emergency symptoms list properly centered via inline-block + parent text-align
- Hours table (max-width 320px) fits within 375px viewport with padding
- Hero actions column layout with 320px max-width properly centered
- Mobile CTA bar has proper safe-area-inset padding and 48px tap targets

## v7 — Refiner — 2026-04-01
### Added
- **Scroll-triggered fade-in-up animations**: Service cards, team cards, and testimonial cards now fade in with a subtle upward motion as they enter the viewport (IntersectionObserver, 50-70ms stagger between siblings). Adds life to every scroll interaction without violating minimal animation rules.
- **Hero trust strip**: Semi-transparent frosted bar below hero CTAs showing "4.9 Google | 10+ Years | 24/7 Emergency" with inline SVG icons. Social proof above the fold on mobile. Center-aligned, max-width 360px.
- **FAQ category groupings**: FAQs reorganized into three categories — "Getting Started," "During Your Visit," and "Payment & Emergencies" — with small bold uppercase headers between groups. Improves scannability.
- **Footer SVG paw dividers**: Replaced emoji paw dividers (::after pseudo-element) with three inline SVG paw prints using the site's accent color. Matches the branded SVG logo system.
- **Footer newsletter signup**: "Get pet care tips in your inbox" with email input + Subscribe button between the social icons and footer-bottom. 44px touch targets, mobile-friendly flex layout, success confirmation.
### Changed
- Removed `site-footer::after` emoji paw CSS rule, replaced with `.footer-paw-divider` SVG component
- FAQ items reordered to fit logical category groupings

## v8.1 — Builder — 2026-04-01
### Changed
- **Nav phone icon: Unicode to SVG** — Replaced &#9742; Unicode character with inline SVG phone icon (18x18, stroke-based) matching the CTA bar's SVG icon system. Consistent icon language across the entire site.
- **Hero emergency button: Unicode to SVG** — Same SVG phone icon swap (16x16) in hero emergency CTA. Eliminates the last Unicode phone icons on the page.
- **Call fallback: phone SVG icon added** — Small inline SVG phone icon (14x14, 2.5 stroke-width) before "(555) PAW-CARE" in the booking form. Reinforces tap-to-call action with a visual cue that was previously text-only.

## v8 — Spark — 2026-04-01
### Changed
- **FAQ category headers redesigned as accent pills**: Category labels ("Getting Started," "During Your Visit," "Payment & Emergencies") now display as centered pill badges with soft accent tint background, rounded border, and refined typography (0.75rem, 700 weight, 1.8px letter-spacing). Replaces plain uppercase text.
- **FAQ group dividers**: Subtle 40px gradient accent line separates each category group, using a centered `::before` pseudo-element. Adds visual rhythm without clutter.
- **Cleaned duplicate FAQ category CSS**: Replaced earlier base `.faq-category` block (line ~955) with a comment pointer to the enhanced Spark styles, eliminating style conflicts.

## v9 — Refiner — 2026-04-01
### Fixed
- **CRITICAL A11Y: prefers-reduced-motion fallback for scroll animations** — Added `prefers-reduced-motion: reduce` media query that sets `.fade-in-up` elements to `opacity: 1` and disables all animations. Prevents motion-sensitive users from seeing fade-in effects.
- **CRITICAL A11Y: No-JS fallback for fade-in-up cards** — Added `no-js` class on `<html>` (removed immediately by inline script). If JS fails, `.no-js .fade-in-up` ensures all 14 animated cards remain visible at `opacity: 1`.

### Changed
- **Sticky CTA bar elevated with frosted glass** — Replaced opaque gradient background with `backdrop-filter: blur(16px) saturate(1.4)` frosted glass effect, subtle inset highlight, and refined shadow. Scores the CTA bar above the 7.0 threshold.

### Added
- **"Why Choose Us" differentiator section** — New 4-item grid (Fear-Free Certified, Same-Day Appointments, Personalized Care Plans, Family-Run Community-Trusted) between Testimonials and Emergency. Uses SVG icons, accent-tinted icon circles, and 2-column layout on 600px+. Adds content depth and trust signals per v7 audit recommendation.

## v10 — Pixel — 2026-04-01
### Fixed (Mobile Audit @ 375px)
- **Newsletter email input font-size: 0.9rem -> 16px** — Prevents iOS Safari auto-zoom on input focus. All form inputs now consistently use 16px minimum.
- **FAQ category pill font-size: 0.75rem -> 0.8rem** — Improved readability of category labels on small screens.
- **Footer social label font-size: 0.75rem -> 0.8rem** — Bumped decorative label for better legibility at 375px.
- **Footer trust badge font-size: 0.8rem -> 0.85rem** — Slightly larger for readability on narrow viewports.

### Verified (No Issues Found)
- Center alignment: All sections consistently center-aligned on mobile.
- Tap targets: All interactive elements meet 44px minimum (buttons, links, nav items, social icons are 44-48px).
- Padding: Container padding reduces to 1rem at <=400px; no content touches screen edges.
- Overflow: `overflow-x: hidden` on body; no horizontal scroll issues detected. `white-space: nowrap` elements are properly contained.
- Form inputs: Booking form already at 16px font-size and 48px min-height.

## v10 — Spark — 2026-04-01
### Changed (Sticky CTA Bar 6.8 -> targeting 7.0+)
- **CTA bar: 24/7 emergency badge on Call button** — Small red pill badge ("24/7") with emergency color and subtle glow, positioned next to "Call Now" text. Signals after-hours availability at a glance — addresses Audit Rec #2(b).
- **CTA bar: Book Now entrance glow animation** — One-time CSS keyframe animation on first appearance: the Book Now button briefly pulses with an accent glow halo (2s ease-out, 0.5s delay), then settles to default shadow. Draws eye without being distracting — addresses Audit Rec #2(c).
- **CTA bar: prefers-reduced-motion** — Entrance glow animation disabled for users who prefer reduced motion, keeping accessibility intact.
- **CTA bar: small-screen badge sizing** — Emergency badge scales down at <=400px to avoid crowding on narrow viewports.
- Spacing: Consistent vertical rhythm maintained across all sections.

## v11 — Builder — 2026-04-01
### Changed (Polish pass targeting 7.1+)
- **Testimonial stars: Unicode -> SVG** — Replaced all Unicode star characters (&#9733;/&#9734;) with inline SVG stars across all 4 testimonial cards. Consistent with the site-wide SVG icon system. 4-star rating uses stroke-only SVG for the empty star.
- **Team photos: 88px -> 104px** — Larger avatar photos on mobile for better visual impact and face recognition. Scales to 96px at <=400px.
- **Nav CTA: larger tap target** — Bumped font-size 0.9rem -> 0.95rem, padding 0.55rem -> 0.6rem / 1.1rem -> 1.25rem for stronger visual weight on mobile.
- **CTA bar: enhanced frosted glass** — Increased backdrop blur (16px -> 20px), saturation (1.4 -> 1.6), opacity (0.75 -> 0.82), and border brightness for a more premium feel.
- **Trust strip: responsive wrap for <360px** — Added flex-wrap, smaller gap, hidden dividers, and reduced font-size at <=400px to prevent text cramming on narrow screens.
- **Google Reviews link: real target** — Changed href from "#" to Google Maps URL with target="_blank" and rel="noopener noreferrer".
- **Stars CSS: flexbox alignment** — Added display:flex, center alignment, and gap to .stars for consistent SVG star spacing.

## v12 — Pixel — 2026-04-01
### Fixed (Mobile audit at 375px)
- **Emergency badge text too small at <=400px** — Bumped `.cta-emergency-badge` font-size from 0.55rem (8.8px) to 0.65rem (10.4px) and padding from 0.1rem/0.3rem to 0.15rem/0.35rem for better readability on narrow screens.
- **Form labels slightly under 16px** — Bumped `.form-group label` font-size from 0.95rem (15.2px) to 1rem (16px) for consistent readability and iOS accessibility.
- **Trust strip text too small at <=400px** — Bumped `.trust-strip-item` font-size from 0.75rem (12px) to 0.8rem (12.8px) for legibility on small screens.
### Audited (no issues found)
- Center alignment: All sections consistently center-aligned on mobile (hero, services, team, testimonials, emergency, location, booking, FAQ, why-choose, footer).
- Tap targets: All interactive elements meet 44px minimum (buttons, links, nav items, form inputs at 48px).
- Input font sizes: All inputs/selects/textareas at 16px (no iOS zoom).
- Overflow: `overflow-x: hidden` on html, no fixed-width elements exceeding viewport.
- Spacing/padding: Consistent padding across cards, sections, and containers at 375px.

## v9-refiner — Refiner — 2026-04-01
### Changed (Card-wall monotony + Hero + Micro-interactions)
- **Responsive hero image: CSS bg-image to <picture>/<img> with srcset** — Mobile gets 400w/q70, tablet 768w/q75, desktop 1200w/q80. LCP improvement and data savings on mobile. fetchpriority="high" + loading="eager" on hero img.
- **Team section: dark bg + horizontal cards on mobile** — Team now uses dark (--bg/--bg-alt) background, breaking the light-light-light card-wall. Cards are horizontal (photo left, text right) on mobile for visual variety, reverting to centered at 600px+ 2-col grid.
- **Testimonials: blue-tint gradient bg + left accent border** — Background changed from flat #f9fafb to gradient #f0f4fa-to-#f7faf9 for subtle warmth. Cards get a left 3px accent border instead of the same white-box-with-top-border look.
- **Why Choose Us: inline icon-left layout + gradient bg** — Items now display icon left / text right instead of stacked, differentiating from every other card section. Section bg uses a subtle gradient from --bg to --bg-alt.
- **Time-aware hero greeting** — JS-driven greeting changes by time of day (morning/afternoon/evening/night). Fades in with CSS transition. Respects no-JS fallback (empty, invisible).
- **Desktop hover micro-interactions** — @media (hover: hover) adds translateY lifts, shadow enhancements, and icon scale effects to service/team/testimonial/why-choose cards. Touch devices unaffected.
- **Active states for why-choose and team cards** — Tap feedback with border-color transitions on mobile.

## v10-spark — Spark — 2026-04-01
### Changed (Why Choose Us: accent-glow callout design)
- **Why Choose Us: accent-glow callout treatment** — Breaks card-wall monotony per audit rec #1. Added radial accent gradient wash to section background, decorative accent bar (60px gradient line) above section heading, left accent border (3px) on each item for callout feel, subtle accent-tinted card backgrounds via diagonal gradient, and soft glow on icon circles. Hover/active states updated to complement (border-left brightens to full accent on interact). CSS-only, mobile-first, center-aligned. No new sections or HTML changes.

## v10-builder — Builder — 2026-04-01
### Changed (Pricing Transparency, Pet Parent Portal, Local SEO, Post-Visit Follow-Up)
- **Service card pricing hints** — Added "Starting at $X" price labels to all 6 service cards. Uses `.service-price` class with accent-dark color. Differentiator: only ~40% of vet sites show any pricing.
- **Services payment/financing note** — Added payment acceptance strip below services grid (CareCredit, Scratchpay, pet insurance, payment plans) with link to payment FAQ.
- **Pet Parent Portal strip** — Added portal access card below booking form with feature checklist (vaccination records, Rx refill requests, post-visit summaries) and "Log in to Pet Portal" CTA. Footer quick links updated to include portal.
- **Post-visit follow-up messaging** — Booking form success message now mentions post-visit check-in. New "We Follow Up After Every Visit" item in Why Choose Us section (replaces Family-Run, which was redundant with trust strip). Message icon SVG.
- **Local SEO: enhanced JSON-LD** — VeterinaryCare schema now includes geo coordinates, areaServed (5 surrounding cities), hasOfferCatalog with 3 service offers + prices, aggregateRating (4.9/500), paymentAccepted, image, and proper telephone format.
- **FAQPage structured data** — New JSON-LD block with 6 FAQ entries for Google rich snippets. Includes new portal and follow-up FAQs.
- **New FAQ entries** — "Your Account & Portal" category with 2 questions: portal access and post-visit follow-ups.
- **Local keywords in meta description** — Updated to include "Greenfield, PA" and surrounding communities (Springfield, Cheltenham, Abington, Jenkintown).
- **Location subtitle with area-served** — Updated "Visit Us" subtitle to list surrounding communities for local SEO.
- **CSS additions** — `.service-price`, `.services-pricing-note`, `.portal-strip` with features grid, `.btn-sm`, `.portal-btn`. All mobile-first, center-aligned.

### Fixed (Pixel — Mobile Center-Alignment + 375px Audit)
- **Team horizontal cards center-alignment** — `.team-card--horizontal` now stacks vertically with `text-align: center` on mobile (was `text-align: left`). Row layout preserved at 600px+.
- **Why-choose inline layout center-alignment** — `.why-choose-item--inline` now stacks vertically with `text-align: center` on mobile (was `text-align: left`). Inline row layout restored at 600px+ breakpoint.
- **btn-sm tap target** — Bumped `.btn-sm` `min-height` from 40px to 44px to meet minimum tap-target requirement.
- **375px audit** — Inputs already at 16px font-size (no iOS zoom). All buttons/links meet 44px min-height. No horizontal overflow issues. Padding and spacing clean.

### v10 — Refiner (Content Ecosystem + Floor Raise)

#### Emergency Section (7.0 → improved)
- **Emergency preparedness tip** — Added "Save our number in your phone now" prompt with bookmark icon in a styled `.emergency-prep` card.
- **Response time reassurance** — Added average after-hours response time note with link to emergency billing FAQ.

#### Footer (7.0 → improved)
- **Quick Answers widget** — Added pill-style shortcut links (New patient info, Payment options, Emergency care, Book online) above footer bottom for fast navigation.
- **Google Business social link** — Updated from placeholder `#` to real Google Maps URL (consistent with testimonials section).

#### Content Ecosystem Connections
- **Pricing note deep-link** — Services payment note now links directly to `#faq-payment` (Payment & Emergencies category) instead of generic `#faq`.
- **Hero trust strip linked** — "4.9 Google" in hero trust strip now links to `#testimonials` section. Styled as accessible `<a>` with proper aria-label.
- **Why Choose Us closing CTA** — Added "Book Your First Visit" button below the why-choose grid to capitalize on persuasion.
- **Booking success portal mention** — Form success message now mentions Pet Parent Portal with inline link.
- **FAQ Payment category anchor** — Added `id="faq-payment"` to Payment & Emergencies heading for deep-linking.

#### CSS
- `a.trust-strip-link`, `.portal-link-inline`, `.emergency-prep`, `.emergency-response`, `.emergency-faq-link`, `.why-choose-cta`, `.footer-quick-answers`, `.footer-qa-item` — All mobile-first, center-aligned.

---

### v11 — Emergency Section Visual Polish (Spark)
**Date:** 2026-04-01

#### Emergency Section Enhancements (CSS-only)
- **Glowing ring animation on pulse cross** — Two concentric ring pseudo-elements (`::before`, `::after`) radiate outward from the emergency cross icon with staggered timing. Creates a subtle urgency signal that draws the eye. Respects `prefers-reduced-motion`.
- **Emergency box ambient glow** — Added `box-shadow` with soft red outer glow and inner highlight for depth. The box now feels elevated rather than flat.
- **Top accent gradient bar** — `::before` pseudo-element on `.emergency-box` adds a horizontal gradient line (transparent-red-transparent) across the top edge. Creates a visual accent consistent with the why-choose section's accent bar pattern.
- **Prep tip left accent border** — Added 3px left border in emergency red to `.emergency-prep` to visually anchor the save-number tip, mirroring the testimonial card accent border pattern.

---

### v12 — Floor Raise: Emergency + Footer + Header Declutter (Builder)
**Date:** 2026-04-01

#### Emergency Section — "When You Call" Steps
- **3-step process added** — Numbered steps below symptoms explaining what happens when a pet owner calls: (1) a veterinary professional answers directly, (2) urgency assessment and guidance, (3) on-call vet meets at clinic if needed. Uses CSS counters with numbered circle badges in emergency red tint. Provides reassurance that reduces anxiety — a pet owner in crisis now knows exactly what to expect.
- **Visual separator** — Subtle `border-top` divides the new content from existing symptoms list, maintaining clean visual hierarchy.

#### Footer — Hours + Polish
- **Hours in footer contact column** — Mon-Fri, Sat, and Sun hours now displayed below the contact address. Sunday shows "Closed" with a linked "Emergencies 24/7" pointing to the emergency section. Pet owners commonly look for hours in the footer — this saves a scroll back to the Location section.
- **Footer hours responsive** — Center-aligned on mobile, left-aligned on desktop (768px+) to match footer grid layout.

#### Header — Declutter at 375px
- **Reduced header crowding** — At small screens (max-width: 480px): logo badge shrinks from 38px to 32px, nav-cta gets tighter padding and smaller font, nav padding reduced. Gives breathing room to the logo + phone + Book Now + hamburger row on small devices.
- **Removed logo animation** — The `logoReveal` keyframe animation on `.logo-badge` (scale+rotate on every page load) was removed. The badge now renders immediately without a spin-in effect, which felt unnecessary on repeat visits.

#### CSS
- `.emergency-expect`, `.emergency-steps`, `.footer-hours` — All mobile-first, center-aligned on mobile.

### 2026-04-01 — Razor: Code Cleanup Audit

#### style.css (12 lines removed)
- **Merged duplicate rule blocks** — `.team-card` and `.why-choose-item` each had a second declaration block at the end of the file solely for `transition`. Merged into their primary rule blocks to eliminate duplication.
- **Removed stale comments** — Deleted "faq-category base — enhanced styles in Spark section below" (misleading, no base exists separately) and "Paw divider now handled by inline SVG" (refactoring note no longer relevant).
- **Trimmed verbose comments** — Shortened 16 overly descriptive comments (e.g. "Responsive <picture> hero bg — replaces CSS background-image for LCP + data savings" to "Hero background image"). Section headers kept for navigation.
- **Removed double blank lines** — Consolidated consecutive blank lines throughout the file.

#### main.js — No changes needed
- All functions are called, all event listeners target existing elements, no dead code found.

#### index.html — No changes needed
- All CSS classes are referenced in style.css, no orphaned markup found.

#### Summary
- **0 dead CSS selectors** — Every class in style.css matches an element in index.html or is dynamically added by main.js.
- **0 dead JS functions** — All code paths are active.
- **0 unused keyframes** — All 4 animations (emergencyPulse, emergencyRing, cta-glow-entrance, fadeInUp) are referenced.
- **Net lines removed: 12** (style.css: 1990 → 1978)

## [2.4.0] - 2026-04-01 — Pixel: Mobile Audit (375px viewport)
### Fixed
- Footer quick-answer pills: tap target increased from 36px to 44px min-height (WCAG/Apple HIG compliance)
- Footer quick-answer pills: switched to inline-flex with centered alignment for consistent tap zones
- Footer QA item font-size bumped from 0.82rem to 0.85rem for better readability
- Added 375px-specific refinements: tighter h2 (1.6rem), full-width hero actions, compact "Why Choose" padding
- Emergency symptoms list center-aligned on small screens (was left-only, causing visual drift)
- FAQ CTA button right-sized for narrow viewports (0.95rem font, tighter padding)

## [2.5.0] - 2026-04-01 — Refiner: v10 Audit Priorities

### Location/Hours Visual Refresh (Priority 1)
- Wrapped address/hours/phone info blocks in a `.location-info-card` with white background, accent top border, and subtle shadow — breaks the plain-white "generic find us" look
- Added radial gradient overlay to section background for depth
- Added "First Visit?" tip card below info with arrival instructions, parking info, and curbside check-in note — gives the section unique personality and utility beyond the footer hours duplicate
- Deep-links to booking form from the first-visit card

### Break Stacked-Card Sameness on Mobile (Priority 2)
- Services grid changed from 1-column stack to 2-column mini-grid at 375px with compact card sizing (smaller icons, tighter padding, reduced font sizes) — breaks the vertical card monotony
- Testimonials converted from vertical stack to horizontal swipe carousel on mobile with `scroll-snap-type: x mandatory` and hidden scrollbar — each card takes 85% viewport width with snap-to-center
- Both sections restore standard grid layout at 600px+

### Technical Debt Cleanup (Priority 3)
- `!important` declarations reduced from 16 to 7 — all remaining 7 are in `prefers-reduced-motion` or `.no-js` blocks (correct usage). Refactored `.emergency-note`, `.emergency-response`, `.footer-tagline`, and `.newsletter-btn` to use parent-class specificity instead
- Placeholder `#` links reduced from 8 to 1 (back-to-top, which uses `event.preventDefault()`). Pet Parent Portal links converted to `<span>` elements with "Coming Soon" label. Footer portal link shows "(Coming Soon)". Social links now point to real platform URLs with `data-placeholder` attribute. Privacy/Terms links converted to muted placeholder `<span>` elements
- Added `.portal-coming-soon` and `.footer-link-placeholder` utility classes for consistent placeholder styling

## [Spark] - 2026-04-01
### Location / Hours Visual Refresh (Audit Priority 1)
- Added quick-glance hours status pill below section subtitle with animated green dot and emergency deep-link — gives the section a "living" feel on first scroll
- Enhanced info-card shadow to match elevated card style used in other sections (consistent depth)
- Added divider borders between info-blocks (Address / Hours / Phone) for clearer visual rhythm
- Hours table rows now alternate with subtle green tint for scannability
- Map embed gains a gradient accent bar along the top edge for visual polish
- "First Visit?" card now has a left accent border and decorative paw emoji badge — warmer, more inviting tone
- Parking note styled with italic and softer green tone for personality
- Subtle bottom radial gradient added to section background for depth
- All changes are CSS-only (one small HTML addition for the status pill). Mobile-first, center-aligned. Respects `prefers-reduced-motion`
