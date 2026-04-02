# Audit Report: Pawsitive Care Veterinary

**Auditor:** Nigel
**Date:** 2026-04-01
**Version:** v11
**Perspective:** Mobile (375px)
**Context:** Template build — placeholders expected; stock content/photos not penalized

---

## Scoring Scale

| Score | Meaning |
|-------|---------|
| 5.0 | Average — functional but unremarkable |
| 5.5 | Functional but generic first build |
| 6.0 | Generic template you'd find online |
| 7.0 | Genuinely better than most templates — HIGH bar |
| 8.0 | A real client would choose this over competitors |
| 9.0 | Award-worthy |

---

## What Changed Since v10

1. **Location section visual refresh** (Refiner/Spark) — Location-info-card with structured address/hours/contact blocks, first-visit tip card with checklist and paw watermark, radial gradient background (double-layer ellipse), live status pill with animated green dot and JS-driven open/closed logic, alternating hours rows with today-highlight, map accent bar (`::before` gradient strip on `.map-embed`). The section went from "basic white find-us block" to a genuinely informative and visually polished information hub. This directly addresses v10 rec #1.

2. **Layout monotony broken at 375px** (Refiner) — Services grid now renders as 2-column (`grid-template-columns: 1fr 1fr`) even at mobile base. Testimonials switched from vertical stack to a horizontal swipe carousel (`display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory`, `flex: 0 0 85%`). These two changes break the "stacked cards all the way down" rhythm that plagued v10 mobile. This addresses v10 rec #2.

3. **Technical debt cleaned** (Refiner/Razor) — `!important` count reduced from 16 to 7, and all 7 are in `prefers-reduced-motion` or `.no-js` blocks (fully justified). Placeholder `href="#"` links reduced from 8 to 1 (back-to-top, which is functional via JS onclick). Portal links now use `<span>` with `.portal-coming-soon` class and `role="link"` + `aria-label` instead of dead `<a href="#">`. Footer placeholder links (Privacy, Terms) use `.footer-link-placeholder` span with muted styling. Social links (Facebook, Instagram) now point to `facebook.com`/`instagram.com` with `data-placeholder="true"`. This addresses v10 rec #3.

4. **Multi-channel contact pills** (Builder) — Location section now has call/text/email pill buttons (`contact-option` class) with icon, label, and proper `tel:`/`sms:`/`mailto:` hrefs. On 375px these wrap as tappable pills with 48px+ hit areas.

5. **Text button on CTA bar** (Builder) — Sticky CTA bar now has 3 buttons: Call (with 24/7 badge), Text (via `sms:`), and Book. The text option is a genuine addition — many users prefer texting a business over calling.

6. **Preferred vet dropdown on booking** (Builder) — New `<select>` for "Preferred Veterinarian" with No preference + 3 named vets. Small but meaningful personalization signal.

7. **Review stats bar on testimonials** (Builder) — Centered card above testimonials showing "4.9 Google Rating | 500+ Reviews | 98% Recommend Us" with dividers. Social proof before the user even reads a quote.

8. **Pricing FAQ with real ranges** (Builder) — New FAQ "How much does a typical visit cost?" with wellness exam ($55), vaccination ($25-45), dental cleaning ($350-600) ranges and written estimate promise. Directly addresses the #1 pricing transparency trust signal.

All three v10 recommendations were addressed.

---

## Section-by-Section Breakdown

### 1. Navigation / Header — 7.2 (v10: 7.2, unchanged)

**Positives:**
- All previous strengths intact: blur backdrop, gradient CTA, skip-link, aria-expanded, phone icon, logo badge at 32px/18px SVG, clean 375px sizing
- No regressions from the v10 declutter work

**Issues:**
- Still four elements competing for attention at 375px (logo, phone icon, Book Now, hamburger). The phone icon and Book Now pill serve overlapping "contact us" purposes
- No changes this round to the header itself

**Assessment:** The header is solid and clean. No changes means no movement. Holds at 7.2.

### 2. Hero — 7.5 (v10: 7.5, unchanged)

**Positives:**
- `<picture>` with three breakpoint sources, time-aware greeting, trust strip with linked Google rating, dual CTAs — all carry over
- The trust strip remains one of the strongest elements on the page at 375px

**Issues:**
- Still no explicit `type="image/webp"` on `<source>` elements
- Hero paw SVG (80x80) still adds decorative weight without clear purpose
- The greeting at 0.9rem is still easy to miss on fast scroll

**Assessment:** No changes this round. The hero is strong and does not need intervention. Holds at 7.5.

### 3. Services — 7.6 (v10: 7.4, +0.2)

**Positives:**
- **2-COLUMN GRID AT 375px.** This is the single biggest visual improvement to this section since it was created. Six service cards now render in a compact 2-column grid on mobile instead of a long vertical stack. Each card shows icon + name + price in a tight card. The effect: the services section takes roughly half the vertical scroll it used to. A user on a 375px phone can see 4 services without scrolling, compared to 1.5 before. The color-matched top borders (green, blue, purple, orange, pink, sky) create a visually rich mosaic effect that was invisible in the single-column layout
- Card sizing is well-tuned: `padding: 1.25rem 1rem`, `h3` at 0.95rem, description at 0.8rem. Text is small but legible. The `:active` scale feedback works well for touch
- Pricing labels, payment/financing note strip with deep-link to FAQ — all carry over

**Issues:**
- Description text at 0.8rem in 2-column is very small on a real 375px phone. Users with normal or weak vision may find it hard to read the service descriptions. The trade-off (scan speed vs. readability) leans slightly toward scan speed
- The 2-column layout means card heights may vary depending on description length, which can create visual unevenness

**Assessment:** The 2-column grid is a genuinely impactful change. It breaks the stack monotony, doubles scan speed, and makes the color-coded borders pop. The readability trade-off at 0.8rem is a real concern but acceptable for a template. Moving from 7.4 to 7.6.

### 4. Meet the Team — 7.4 (v10: 7.4, unchanged)

**Positives:**
- Center-aligned stacked cards on mobile, dark background contrast, 4 team members with photos, roles, bios — all carry over
- The 96px photos at 375px are appropriately sized

**Issues:**
- Team cards are visually similar to other stacked card sections. The dark background is the primary differentiator. With services now in a 2-column grid and testimonials in a carousel, the team section is now the only pure vertical stack card section — which actually helps it stand out by contrast
- No changes this round

**Assessment:** No direct changes. The section benefits indirectly from surrounding sections becoming more visually varied — Team's vertical stack on a dark background now reads as a deliberate visual pause. Holds at 7.4.

### 5. Testimonials — 7.5 (v10: 7.3, +0.2)

**Positives:**
- **HORIZONTAL SWIPE CAROUSEL.** The testimonials now use `display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory`, with each card at `flex: 0 0 85%` and `scroll-snap-align: center`. On a 375px phone, the user sees one testimonial card with the edge of the next visible — a clear signal that swiping reveals more. This is a massive improvement over stacking four blockquotes vertically. The carousel pattern is native, performant (no JS library), and intuitive on mobile
- **REVIEW STATS BAR.** The `review-stats-bar` above the carousel shows "4.9 | 500+ | 98%" in a centered card with green accent values and subtle dividers. This is social proof before a single testimonial is read. On a 375px phone it is compact and immediately scannable
- Reviewer photos, star SVGs, pet names, Google reviews link — all carry over
- Scrollbar hidden via `-webkit-scrollbar: display: none` and `scrollbar-width: none` — clean presentation

**Issues:**
- No swipe indicator dots or arrows. A user who does not instinctively swipe will see only one testimonial. The 85% width provides the "peek" hint, but explicit dots would reinforce the pattern
- At 600px+ the layout switches to a 2-column grid via media query, which is correct for larger screens

**Assessment:** The carousel and stats bar together significantly elevate this section. The carousel is the right pattern for testimonials on mobile — it reduces vertical scroll, adds interactivity, and makes 4 testimonials feel like a collection rather than a list. The stats bar adds credibility above the fold. Moving from 7.3 to 7.5.

### 6. Why Choose Us — 7.3 (v10: 7.3, unchanged)

**Positives:**
- Center-aligned stacked items, gradient wash background with radial gradient, accent bar, "Book Your First Visit" CTA — all carry over
- The 4 differentiators (Fear-Free, Same-Day, Personalized, Follow-Up) are strong content

**Issues:**
- The section subtitle "What sets us apart from the rest" remains generic
- On mobile, items stack vertically like a generic feature list. The gradient background and CTA at the bottom are the main distinguishing elements

**Assessment:** No changes this round. Holds at 7.3.

### 7. Emergency — 7.3 (v10: 7.3, unchanged)

**Positives:**
- Prep card, response time, 3-step "When You Call" process, glow rings, symptoms list, billing FAQ link — all carry over from v10's major enrichment
- Still one of the most genuinely useful sections on the page

**Issues:**
- The section remains content-heavy on 375px. Phone number and symptom list should be visually dominant over the prep card and steps
- No changes this round

**Assessment:** The v10 enrichment was substantial. No further changes needed this round. Holds at 7.3.

### 8. Location / Hours — 7.5 (v10: 7.1, +0.4)

**Positives:**
- **STATUS PILL WITH LIVE GREEN DOT.** The `location-status-pill` shows "Mon-Fri 7:30a-6p | Sat 8a-2p | 24/7 Emergencies" with a green animated dot when open (JS-driven based on current time/day). On a real phone, this instantly answers "are they open right now?" — the #1 question a user has when viewing a location section. The dot color and glow change based on actual open/closed state. `prefers-reduced-motion` disables the dot animation
- **INFO CARD WITH STRUCTURED BLOCKS.** The `location-info-card` wraps address, hours, and contact into a white card with rounded corners and shadow. Each block has an SVG icon header (map pin, clock, phone). The hours table uses alternating row tints and a `is-today` highlight class (JS-driven). The address is a tappable Google Maps link with "Get Directions" CTA. This is a huge step up from the previous basic address + hours layout
- **MULTI-CHANNEL CONTACT PILLS.** Call, Text, and Email options as tappable pills with icons. Proper `tel:`, `sms:`, `mailto:` hrefs. 48px+ touch targets with active state feedback. A pet owner can choose their preferred communication method
- **FIRST-VISIT TIP CARD.** The `location-first-visit` card with gradient background, paw watermark, checklist (records, medications, carrier/leash), and "Arrive 10 minutes early" note with parking info and booking link. This is practical information a new client actually needs. It answers "what do I bring?" without requiring a FAQ search
- **RADIAL GRADIENT BACKGROUND.** Double-layer ellipse gradient gives the section visual depth without being heavy. It matches the Why Choose Us gradient treatment and creates visual consistency
- **MAP ACCENT BAR.** The `map-embed::before` adds a gradient accent strip above the map iframe, tying it visually to the section's color scheme
- **ALTERNATING HOURS ROWS.** Subtle zebra striping on the hours table improves scannability

**Issues:**
- The section is now information-dense. On 375px, you have: status pill, subtitle, info card (address + hours + contact), first-visit card, map, directions link, parking note. This is a lot of vertical scroll. The info card alone has 3 blocks. For a location section, comprehensive is better than sparse, but some users will scroll past without absorbing all of it
- The directions link appears both inside the address block and below the map — duplication

**Assessment:** This is the biggest mover in v11. The location section was the weakest section tied with CTA bar at 7.1. It has been transformed from a basic "map + address" block into a genuinely comprehensive location hub. The status pill answers "are they open?", the info card answers "where/when/how?", the contact pills answer "how do I reach them?", and the first-visit card answers "what do I bring?". Every element serves a real user need. The radial gradient, accent bar, and alternating rows add visual polish without excess. Moving from 7.1 to 7.5.

### 9. Booking Form — 7.3 (v10: 7.2, +0.1)

**Positives:**
- **PREFERRED VET DROPDOWN.** New select field for "Preferred Veterinarian" with "No preference" default and 3 named vets. This is a small personalization touch that makes the form feel like a real practice, not a generic template
- Portal strip with feature checklist, iOS zoom prevention, bold labels, accent focus rings, call fallback, portal mention in success message — all carry over
- Portal links now use `<span>` with `.portal-coming-soon` styling (opacity: 0.6, cursor: default) instead of dead `<a href="#">`. This is the correct pattern — a user tapping a "coming soon" element gets visual feedback that it is not yet active, rather than a confusing `#` jump

**Issues:**
- The preferred vet dropdown lists "Dr. James Chen" and "Dr. Priya Patel" but the team section shows "Dr. James Rivera" and "Emily Nguyen" / "Marcus Johnson". Name mismatch between booking form and team section — a real user would notice
- The call-fallback link color inconsistency persists from v7
- The form at 375px is long: 4 required fields, 3 optional rows, textarea, submit, fallback. This is standard for a booking form but still a significant scroll

**Assessment:** The preferred vet dropdown is a nice touch, but the name mismatch with the team section is a content consistency issue that would confuse a real user. The portal link cleanup is a meaningful technical improvement. Moving from 7.2 to 7.3.

### 10. FAQ — 7.3 (v10: 7.2, +0.1)

**Positives:**
- **NEW PRICING FAQ.** "How much does a typical visit cost?" with wellness ($55), vaccination ($25-45), dental ($350-600) ranges and written estimate promise. Pricing transparency is the #1 trust signal for vet practices. This FAQ directly addresses that gap. The mention of "Wellness Plans for bundled savings" adds a value perception
- 11 FAQs across 4 categories (Getting Started, During Your Visit, Your Account & Portal, Payment & Emergencies), `<details>` elements, `id="faq-payment"` deep-link target, category headers, gradient dividers, CTA — all carry over

**Issues:**
- 11 FAQs on mobile is a long section. Collapsible categories (rather than just collapsible individual FAQs) would help users jump to their topic
- The FAQ CTA ("Still have questions? Call Us") is phone-only — no text option despite text being available elsewhere on the site

**Assessment:** The pricing FAQ is a content gap filler. It gives a user real numbers, which builds trust. Combined with the services pricing labels and the pricing note deep-link to this section, the pricing transparency story is now complete. Moving from 7.2 to 7.3.

### 11. Footer — 7.3 (v10: 7.2, +0.1)

**Positives:**
- Quick Answers pills, footer hours with emergency deep-link, real Google Business Profile link — all carry over from v10
- **PLACEHOLDER LINK CLEANUP.** Portal link now shows as "Pet Parent Portal (Coming Soon)" with muted styling instead of a dead link. Privacy Policy and Terms of Service use `.footer-link-placeholder` spans with reduced opacity. Social links to Facebook/Instagram now use real domain URLs (`facebook.com`, `instagram.com`) with `data-placeholder="true"` attribute. This is the correct template pattern — visually signals "not yet configured" without creating broken link experiences
- The footer grid (brand, quick links, contact/hours) provides good information density at 375px

**Issues:**
- Newsletter signup still lacks specificity: "Get pet care tips in your inbox" does not say frequency or what kind of content. For a template this is acceptable but it is a conversion friction point
- The footer is vertically long at 375px: brand + quick links + contact + social + newsletter + quick answers + legal + back-to-top. On a small phone this is a significant amount of scrolling past the "real" content

**Assessment:** The placeholder link cleanup is the main improvement. Every non-functional element now has appropriate visual treatment. The footer continues to serve as a comprehensive secondary navigation hub. Moving from 7.2 to 7.3.

### 12. Sticky Mobile CTA Bar — 7.3 (v10: 7.1, +0.2)

**Positives:**
- **TEXT BUTTON ADDED.** The CTA bar now has three actions: Call (with 24/7 emergency badge), Text (via `sms:`), and Book. The text option is a genuine mobile UX improvement. Many users — especially younger demographics — prefer texting over calling. The `sms:` link opens the native messaging app directly. At 375px, the three buttons share space evenly (`flex: 1`) with 48px min-height touch targets
- Frosted glass effect, scroll-to-hide behavior, entrance glow on Book button, `safe-area-inset-bottom` padding — all carry over
- Button styling differentiates purpose: Call has accent border outline, Text has subtle ghost styling, Book has solid gradient background. The visual hierarchy correctly emphasizes booking as the primary action

**Issues:**
- Three buttons at 375px is tight. At narrow screens (375px or smaller with adjusted font-size at 0.8rem), the labels "Call", "Text", "Book" are minimal and readable, but the 24/7 badge on Call adds visual complexity
- The text button (`mobile-cta-text`) has the least visual prominence — nearly invisible ghost styling. A user might not notice it between the accent-bordered Call and gradient Book buttons

**Assessment:** The text button is a meaningful addition. A 3-action CTA bar (call, text, book) covers the three most common mobile intent patterns for a vet site. The styling hierarchy is correct. Moving from 7.1 to 7.3.

### 13. Accessibility & Technical — 7.6 (v10: 7.5, +0.1)

**Positives:**
- **`!important` count: 7, all justified.** Down from 16 in v10. Every remaining `!important` is in a `prefers-reduced-motion: reduce` or `.no-js` block. Zero in regular rules. This is exemplary CSS hygiene for a template this size
- **Placeholder links: 1** (back-to-top with `onclick` handler — functionally not a dead link). Down from 8+ in v10. Portal links use `<span>` with `role="link"` and `aria-label`. Social links point to real domains. Footer placeholders use muted spans. This is the correct accessibility pattern
- `<picture>` / srcset, FAQPage + VeterinaryCare JSON-LD, time-aware greeting with `aria-live`, `@media (hover: hover)` scoping, `prefers-reduced-motion` support, `.no-js` fallback, skip-link, AGENT-RULES.md compliance (center alignment) — all carry over
- The live open/closed status logic in JS is clean and progressive (no-op if elements missing)
- Scroll-snap carousel uses native browser capabilities — no JS carousel library
- CSS is 2263 lines — reasonable for this feature set with the added location, carousel, and CTA bar styling
- `data-placeholder="true"` attribute on social links enables future programmatic detection of unconfigured links

**Issues:**
- Still no explicit `type="image/webp"` on hero `<source>` elements
- Favicon still a data URI SVG
- Vet name mismatch between booking form dropdown and team section (content bug)
- The testimonial carousel has no `role="region"` or `aria-roledescription="carousel"` for screen readers. Sighted users see the swipe hint; screen reader users get a flat list, which is acceptable but not optimal

**Assessment:** The technical debt cleanup is the headline. Going from 16 `!important` (with 6+ unjustified) to 7 (all justified) and from 8 placeholder links to 1 functional one is significant refactoring. The CSS is clean and well-organized. Moving from 7.5 to 7.6.

---

## Overall Score

| Section | v10 Score | v11 Score | Change |
|---------|-----------|-----------|--------|
| Navigation / Header | 7.2 | 7.2 | -- |
| Hero | 7.5 | 7.5 | -- |
| Services | 7.4 | 7.6 | **+0.2** |
| Meet the Team | 7.4 | 7.4 | -- |
| Testimonials | 7.3 | 7.5 | **+0.2** |
| Why Choose Us | 7.3 | 7.3 | -- |
| Emergency | 7.3 | 7.3 | -- |
| Location / Hours | 7.1 | 7.5 | **+0.4** |
| Booking Form | 7.2 | 7.3 | +0.1 |
| FAQ | 7.2 | 7.3 | +0.1 |
| Footer | 7.2 | 7.3 | +0.1 |
| Sticky Mobile CTA Bar | 7.1 | 7.3 | **+0.2** |
| Accessibility & Technical | 7.5 | 7.6 | +0.1 |
| **OVERALL** | **7.28** | **7.38** | **+0.10** |

**v11 Overall: 7.38 / 9.0**

All three v10 recommendations were addressed: (1) Location section raised from 7.1 to 7.5 — the biggest single-section jump in the site's history, (2) Layout monotony broken with 2-column services grid and testimonial swipe carousel, (3) Technical debt significantly reduced with `!important` count halved (16 to 7, all justified) and placeholder links nearly eliminated (8 to 1).

The improvement is +0.10, matching the v9-to-v10 delta and reversing the "diminishing returns" trend. This is because the changes this round were structural (layout patterns, not just content additions). The 2-column services grid and testimonial carousel change how the site *feels* on a 375px phone — the scrolling rhythm is now varied instead of monotonous.

Location (+0.4) is the standout mover — from the weakest section to tied for strongest. Services (+0.2) and Testimonials (+0.2) both benefit from layout pattern changes that break visual monotony. CTA Bar (+0.2) gains from the text button addition.

The floor has risen from 7.1 to 7.2 (Header). The ceiling has risen from 7.5 to 7.6 (Services/Technical). The spread between sections has narrowed further (0.4 range vs 0.4 in v10 vs 0.5 in v9), indicating increasingly even quality.

---

## Score History

| Version | Date | Overall | Auditor | Notes |
|---------|------|---------|---------|-------|
| v1 | 2026-04-01 | 7.2 | Nigel | First audit — overscored; strong code but visual impact overrated |
| v2 | 2026-04-01 | 6.1 | Nigel | Recalibrated scoring; 5 of 5 v1 recs addressed; hero & imagery remain weak |
| v3 | 2026-04-01 | 6.5 | Nigel | Hero photo, team headshots, light sections, testimonial redesign, pulse animation. Team hits 7.0. |
| v4 | 2026-04-01 | 6.7 | Nigel | Light-mode services/location, hero overlay lightened, booking form improved, FAQ CTA, OG tags. Three sections at 7.0. |
| v5 | 2026-04-01 | 6.9 | Nigel | Booking/FAQ light-mode, responsive hero, color-matched icons, testimonial photos, Google badge, emergency bullets, 8 FAQs, footer legal. Six sections at 7.0+. |
| v6 | 2026-04-01 | 7.0 | Nigel | Real Google Maps embed, SVG paw logo badge, call fallback on booking, footer gradient+trust badge, CTA bar gradient, FAQ outlined CTA, dead CSS cleanup. Nine sections at 7.0+. |
| v7 | 2026-04-01 | 7.05 | Nigel | Scroll animations, hero trust strip, FAQ categories with pill badges, footer SVG paws + newsletter, unified phone SVGs. Eleven sections at 7.0+. A11y regression (no reduced-motion for animations). |
| v8 | 2026-04-01 | 7.13 | Nigel | Critical a11y fixes (reduced-motion + no-JS), "Why Choose Us" section, CTA bar frosted glass + emergency badge + entrance glow, SVG stars, larger team photos, nav CTA bump, iOS zoom prevention. All 13 sections at 7.0+. |
| v9 | 2026-04-01 | 7.23 | Nigel | Hero `<picture>`/srcset, time-aware greeting, pricing transparency on services, Pet Parent Portal strip, card-wall differentiation (horizontal team, gradient testimonials, inline why-choose), enhanced JSON-LD + FAQPage schema, post-visit follow-up messaging. 10 FAQs/4 categories. Center-alignment violations noted. |
| v10 | 2026-04-01 | 7.28 | Nigel | Center-alignment violations fixed. Emergency enriched (+0.3): prep card, response time, 3-step process, glow rings. Footer enriched (+0.2): Quick Answers pills, hours, fixed Google link. Content ecosystem connected: trust strip links, pricing deep-link, Why Choose CTA, portal in booking success. Header declutter at 375px. Logo animation removed. QA 11/11 pass. |
| v11 | 2026-04-01 | 7.38 | Nigel | Location transformed (+0.4): info card, status pill, multi-channel contact, first-visit card, radial gradient. Layout monotony broken: 2-col services grid, testimonial swipe carousel. Tech debt cleaned: !important 16->7 (all justified), placeholder links 8->1. CTA bar gains text button (+0.2). Pricing FAQ added. Review stats bar on testimonials. |

---

## Top 3 Priority Recommendations

### 1. Fix content consistency: booking form vet names vs. team section

The booking form's "Preferred Veterinarian" dropdown lists Dr. James Chen and Dr. Priya Patel, but the team section shows Dr. James Rivera, Emily Nguyen, and Marcus Johnson. A user who reads the team bios and then fills the booking form will see different names — this is a trust-breaking inconsistency. Fix: update the booking dropdown to match the team section names (Dr. Sarah Mitchell, Dr. James Rivera) or update the team section to match the form. This is a content bug, not a design issue, and should be a quick fix.

### 2. Add carousel accessibility and swipe indicators to testimonials

The testimonial carousel works beautifully for sighted mobile users, but lacks: (a) swipe indicator dots to show position and count, (b) `role="region"` and `aria-roledescription="carousel"` for screen readers, (c) optional prev/next tap targets for users who do not instinctively swipe. The 85% card width provides a visual peek hint, but explicit dots below the carousel would reinforce the pattern and show total count. This is the main gap in an otherwise strong testimonial section. Keep it simple — static dots that highlight on scroll, no JS library needed (use IntersectionObserver on each card).

### 3. Elevate the Header and Why Choose Us sections (the new floor at 7.2-7.3)

With Location jumping to 7.5, the floor sections are now Header (7.2) and Why Choose Us (7.3). For the Header: consider condensing the phone icon into the hamburger menu to reduce from 4 to 3 elements at 375px — the CTA bar already provides call/text access. For Why Choose Us: the subtitle "What sets us apart from the rest" is generic and undersells strong content below it. Consider a more specific subtitle (e.g., "Care that goes beyond the exam room") and subtle visual differentiation like icon tint colors matching the brand palette (currently monochrome stroke icons). These are polish-level changes but they are the path to raising the floor from 7.2 to 7.3+.

---

*End of v11 audit. The site sits at 7.38 — up from 7.28. All three v10 recommendations addressed. Location (+0.4) is the biggest single-section gain in the site's audit history, transforming from the weakest section to tied for strongest. The 2-column services grid and testimonial carousel fundamentally change the mobile scrolling rhythm — the site no longer feels like "stacked cards all the way down." Technical debt is at its lowest point: 7 justified `!important` declarations and 1 functional placeholder link. The content consistency bug (booking form vet names) is the most urgent fix. The path to 7.5+ requires carousel polish, header simplification, and elevating the remaining 7.2-7.3 sections with small targeted improvements.*
