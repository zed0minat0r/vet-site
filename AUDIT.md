# Audit Report: Pawsitive Care Veterinary

**Auditor:** Nigel
**Date:** 2026-04-09
**Version:** v12
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
| 10.0 | Perfect — nothing to improve |

---

## What Changed Since v11

All three v11 recommendations were addressed:

1. **Carousel accessibility and dots** — The testimonials container now has `role="region"`, `aria-roledescription="carousel"`, and `aria-label`. Each card has `role="group"`, `aria-roledescription="slide"`, and a positional `aria-label`. Carousel indicator dots added below testimonials on mobile (hidden at 600px+ where the grid layout takes over). Dots use IntersectionObserver to update on scroll and accept tap-to-jump. This directly addresses v11 rec #2.

2. **Header condensed to 3 elements** — Phone icon removed from the mobile header. The nav now has: logo, Book Now pill, hamburger. Phone access is preserved inside the hamburger menu via a "Call Us" link. The CTA bar already provides call/text, so the phone icon was genuinely redundant. This addresses v11 rec #3 (Header at 7.2).

3. **Why Choose Us subtitle and icon tints** — Subtitle changed from "What sets us apart from the rest" to "Care that goes beyond the exam room." Per-icon tint colors added: teal (Fear-Free), sky (Same-Day), rose (Personalized Care), amber (Follow Up). This differentiates the items visually and removes the generic subtitle. This addresses v11 rec #3 (Why Choose Us at 7.3).

---

## Section-by-Section Breakdown

### 1. Navigation / Header — 7.4 (v11: 7.2, +0.2)

**Positives:**
- **3-element header at 375px.** The removal of the phone icon is the right call. Logo, Book Now pill, hamburger. Clean, unambiguous. The Book Now pill is the primary action — nothing competes with it. The hamburger has "Call Us" inside for those who need it. No regression on functionality
- Blur backdrop, gradient CTA pill, skip-link, aria-expanded hamburger, logo badge at 32px — all carry over
- The "Call Us" entry in the nav-menu is a sensible fallback for the removed phone icon; a user opening the menu for navigation will see it immediately

**Issues:**
- The nav-menu still has 7 items (Services, Our Team, Testimonials, Emergency, Location, Book Now, Call Us). That is a long mobile menu. Book Now appears both as a persistent pill and inside the hamburger menu — technically redundant, though not harmful
- No active section highlight in the nav menu visible state (JS highlights via `style.color`, not a persistent class — inspect-only, not visible on initial open)

**Assessment:** Removing the phone icon is a clean, correct simplification. The header is now one of the tidier mobile headers for this type of site. The menu length is a minor issue. Moving from 7.2 to 7.4.

### 2. Hero — 7.5 (v11: 7.5, unchanged)

**Positives:**
- `<picture>` with three breakpoint sources, time-aware greeting, trust strip with linked Google rating, dual CTAs, hero paw SVG — all carry over
- The trust strip remains the strongest element: 4.9 Google, 10+ Years, 24/7 Emergency in a glass-effect pill at 375px

**Issues:**
- Still no explicit `type="image/webp"` on `<source>` elements
- Hero paw SVG (80x80) adds decorative weight without functional purpose. On a 375px phone with the hero text and CTAs, the paw is visual noise above the heading
- The greeting at 0.9rem at the very top of the hero content is still easy to miss

**Assessment:** No changes this round. The hero is strong and balanced. Holds at 7.5.

### 3. Services — 7.6 (v11: 7.6, unchanged)

**Positives:**
- 2-column grid at 375px with color-coded top borders (green, blue, purple, orange, pink, sky) — the mosaic effect that was invisible in single-column is now the defining visual feature of this section
- Pricing labels, payment note with deep-link to FAQ, card-level active state feedback — all carry over
- Icon tint backgrounds match the border colors — cohesive

**Issues:**
- Description text at 0.85rem in 2-column is at the edge of legibility on a real 375px phone. Borderline but acceptable for a template
- Card heights vary by description length — no `align-items: stretch` on the grid cells so card heights mismatch within rows

**Assessment:** No changes this round. The 2-column grid remains the standout improvement from v11. Holds at 7.6.

### 4. Meet the Team — 7.4 (v11: 7.4, unchanged)

**Positives:**
- Dark background contrast, 4 team members with photos, center-aligned horizontal card layout, roles and bios — all carry over
- The 104px circular photos with teal border at 375px are well-sized

**Issues:**
- Still the most visually homogeneous section — four identical dark cards stacked vertically. The dark background is the differentiator from surrounding sections, but within the section all four cards look identical
- No changes this round

**Assessment:** No changes. The section remains solid and consistent. Holds at 7.4.

### 5. Testimonials — 7.7 (v11: 7.5, +0.2)

**Positives:**
- **CAROUSEL ACCESSIBILITY COMPLETE.** The testimonials container now has `role="region"`, `aria-roledescription="carousel"`, `aria-label="Customer testimonials"`. Each card has `role="group"`, `aria-roledescription="slide"`, `aria-label="Testimonial 1 of 4"` etc. This is the correct ARIA pattern for a scroll carousel. Screen reader users now understand the content structure
- **CAROUSEL DOTS WITH INTERACTION.** Four dots below the carousel. The active dot uses IntersectionObserver to update as the user swipes — accurate, not a manual counter. Tapping a dot scrolls to that card via `scrollIntoView`. Dots use the brand accent color at 10x10px with 1.2x scale on active. This is exactly the right implementation: lightweight, no JS library, progressive (no-op if elements missing)
- The dots are visible on mobile (375px) and hidden at 600px+ where the layout switches to a 2-column grid. The responsive switch is correct
- Review stats bar, swipe carousel, 85% card width with peek hint — all carry over from v11
- The complete accessibility + dots + review stats bar combination makes this section close to best-in-class for a local service mobile site

**Issues:**
- The 10x10 dots are small tap targets. WCAG recommends 24x24px minimum for interactive elements (the dots are 10px circles with no padding). On a real phone, tapping the correct dot requires precision. Adding `padding: 4px` to `.carousel-dot` would expand the tap area to 18px without changing visual size
- The dot transition (`transform 0.25s ease` for scale) is subtle and tasteful — no issue there

**Assessment:** The accessibility additions and interactive dots elevate this section meaningfully. The carousel is now fully accessible and the dots provide clear position feedback. The small tap target on dots is a real but minor concern. Moving from 7.5 to 7.7.

### 6. Why Choose Us — 7.5 (v11: 7.3, +0.2)

**Positives:**
- **SUBTITLE IMPROVED.** "Care that goes beyond the exam room" is specific, warm, and directly supports the content below it. It is a measurable improvement over "What sets us apart from the rest," which is generic enough to appear on any service business site
- **PER-ICON TINT COLORS.** Teal (Fear-Free), sky (Same-Day), rose (Personalized Care Plans), amber (Follow Up). Each icon now has a distinct background color that differentiates the items visually. On a 375px phone with the inline vertical stack, the color tints give each item a unique visual identity within the section
- The CTA at the bottom ("Book Your First Visit") remains well-positioned
- The section background gradient (radial + linear) and top accent line are tasteful without being heavy

**Issues:**
- On 375px the items still stack vertically (the 2-column grid activates at 600px). The color tints help break the visual monotony but the layout itself is unchanged
- The icon sizes (52px circles) are proportionally large relative to the text content at mobile widths — they read as decorative at 375px column width, not as a leading visual cue

**Assessment:** The subtitle upgrade and icon tints are exactly the right changes: targeted, specific, and additive without adding visual weight. The section moves from generic to distinctive. Moving from 7.3 to 7.5.

### 7. Emergency — 7.3 (v11: 7.3, unchanged)

**Positives:**
- Emergency phone number prominent, 3-step process, prep card, symptoms list, response time, glow rings, FAQ deep-link — all carry over from v10's major enrichment
- Still one of the most practically useful sections on the site

**Issues:**
- Still content-heavy on 375px. The phone number is not visually dominant enough relative to the surrounding content — a panicking user should see the number first, the steps second
- The `emergencyPulse` animation (pulsing cross) and two ring animations (`emergencyRing` on ::before and ::after) are three simultaneous animations on one element. This is at the edge of "tasteful" — they are handled correctly with `prefers-reduced-motion`, but on a mid-range Android at 60Hz they could feel jittery
- No changes this round

**Assessment:** Holds at 7.3. The content is strong; the primary remaining issue is visual hierarchy — the phone number needs more visual dominance.

### 8. Location / Hours — 7.5 (v11: 7.5, unchanged)

**Positives:**
- Status pill with live green dot, info card with address/hours/contact, multi-channel contact pills, first-visit card, radial gradient, map accent bar, alternating hours rows, today-highlight — all carry over from v11's major transformation
- The directions link duplication (inside address block and below map) is a minor issue noted in v11 but not yet fixed

**Issues:**
- The `directions-cta` link inside the address block has `min-height: 44px` and `line-height: 44px` but displays inline-block below the address text. On a 375px phone this creates a 44px blank space below the address before "Get Directions" appears — the spacing feels off. The visual gap between the address text and the "Get Directions" text is approximately 44px of whitespace, which looks like a missed line break to a real user
- Directions CTA duplication persists (address block + below map)
- No substantive changes this round

**Assessment:** The section remains transformed from v10 but unchanged from v11. The min-height on `directions-cta` creating excessive whitespace is a new observation this round. Minor but real. Holds at 7.5.

### 9. Booking Form — 7.3 (v11: 7.3, unchanged)

**Positives:**
- Preferred vet dropdown now correctly lists Dr. Sarah Mitchell, Dr. James Rivera, and Emily Nguyen — matching the team section. The name mismatch bug from v11 is resolved
- Portal link correctly uses `<span>` with `.portal-coming-soon` styling, `role="link"`, `aria-label`. No dead `<a href="#">` links
- Form validation, iOS zoom prevention, real-time error clearing, portal strip with feature checklist — all carry over
- The `call-fallback-link` color (`var(--accent)`) is now consistent with other links in the section

**Issues:**
- The form is still long at 375px: 4 required fields, preferred vet, 2 optional row selects (pet type + service), date + time row, textarea, submit. The vertical scroll through the form is significant on a small phone
- The portal strip below the form adds more vertical scroll after submission — a user who just submitted is presented with another block of content about the portal. Consider hiding the portal strip on form success
- The `form-row` at 375px uses `grid-template-columns: 1fr` (single column), which is correct but means the optional pet type + service type fields are each full-width, adding height

**Assessment:** The vet name bug is fixed — good. No other changes. The form remains functionally sound but long. Holds at 7.3.

### 10. FAQ — 7.3 (v11: 7.3, unchanged)

**Positives:**
- 11 FAQs across 4 categories, pricing FAQ with real numbers, `<details>` native expand, `id="faq-payment"` deep-link, category headers with pill badges, gradient dividers — all carry over
- The FAQ CTA "Call Us" link is well-styled

**Issues:**
- FAQ CTA is phone-only ("Call Us: (555) PAW-CARE"). The site now has text functionality available via `sms:` — the FAQ CTA should offer "Call or Text" to match the contact pattern elsewhere
- 11 FAQs is a long mobile scroll. No collapsible category groups — a user who wants "Payment" FAQs must scroll past "Getting Started" and "During Your Visit" and "Your Account" first
- No changes this round

**Assessment:** Solid but stagnant. The phone-only FAQ CTA is the most actionable gap — it is a one-line change. Holds at 7.3.

### 11. Footer — 7.3 (v11: 7.3, unchanged)

**Positives:**
- Footer grid (brand, quick links, contact/hours), social links to real domains, newsletter form, quick answers pills, footer hours with emergency deep-link, paw divider, back-to-top, placeholder link cleanup — all carry over
- The footer provides comprehensive secondary navigation for users who scroll all the way down

**Issues:**
- Newsletter form still lacks specificity: "Get pet care tips in your inbox." No frequency, no content type hint. This is a template-level gap but it reduces signup likelihood
- Footer vertical height on 375px: paw divider + brand block + quick links + contact + social + newsletter + quick answers + legal + back-to-top. This is 9 distinct blocks. Heavy for a mobile footer
- No changes this round

**Assessment:** No changes. The footer is functionally comprehensive but visually long. Holds at 7.3.

### 12. Sticky Mobile CTA Bar — 7.3 (v11: 7.3, unchanged)

**Positives:**
- Three actions: Call (24/7 badge), Text (sms:), Book (gradient primary). Frosted glass background, scroll-to-hide, entrance glow on Book, `safe-area-inset-bottom` — all carry over
- The visual hierarchy correctly emphasizes Book over Call over Text

**Issues:**
- The "Text" button ghost styling (near-invisible `rgba(255,255,255,0.06)` background with `rgba(255,255,255,0.15)` border) means it reads as empty space between Call and Book. On a real 375px phone in bright sunlight, the Text button label is barely visible
- The 24/7 badge on the Call button adds visual complexity. At 0.7rem font-size inside a 48px button, the badge is very small and may not be legible for all users
- No changes this round

**Assessment:** No changes. The CTA bar works but the Text button visual treatment is too subtle — it blends into the frosted background. Holds at 7.3.

### 13. Accessibility & Technical — 7.7 (v11: 7.6, +0.1)

**Positives:**
- **ARIA carousel pattern now complete.** `role="region"`, `aria-roledescription="carousel"`, `aria-label` on the container; `role="group"`, `aria-roledescription="slide"`, positional `aria-label` on each card. This is the correct WCAG 2.1 pattern for a scroll carousel. The gap noted in v11 is closed
- **Header element count reduced.** 4 elements to 3 (logo, Book Now, hamburger) — cleaner DOM, simpler focus order on mobile
- `!important` count: 7, all justified (prefers-reduced-motion and no-js blocks). Zero regressions
- Placeholder links: 1 (back-to-top with onclick handler). Zero dead `<a href="#">` links elsewhere
- CSS at ~2312 lines — modestly grown from v11's 2263 but the additions are proportionate to new dot + icon tint styles
- `prefers-reduced-motion` coverage: fade-in-up, CTA book glow, emergency pulse, status dot pulse — all handled correctly
- Nav active section highlighting via IntersectionObserver is non-destructive (inline style removal on exit) — progressive enhancement
- No hover-only effects; all hover rules properly scoped to `@media (hover: hover)`

**Issues:**
- Still no explicit `type="image/webp"` on hero `<source>` elements
- Favicon is a data URI SVG — functional but not ideal for home screen saves
- Carousel dot tap targets are 10px circles — below the 24x24px WCAG 2.5.5 guideline. A `padding: 4px` addition would fix this without visual change
- `role="list"` on `<ul>` elements is technically redundant (modern browsers restore list semantics for ULs with list-style: none), though it is harmless

**Assessment:** The carousel ARIA additions and header simplification are meaningful accessibility improvements. The main remaining gap is the dot tap target size. Moving from 7.6 to 7.7.

---

## Overall Score

| Section | v11 Score | v12 Score | Change |
|---------|-----------|-----------|--------|
| Navigation / Header | 7.2 | 7.4 | **+0.2** |
| Hero | 7.5 | 7.5 | -- |
| Services | 7.6 | 7.6 | -- |
| Meet the Team | 7.4 | 7.4 | -- |
| Testimonials | 7.5 | 7.7 | **+0.2** |
| Why Choose Us | 7.3 | 7.5 | **+0.2** |
| Emergency | 7.3 | 7.3 | -- |
| Location / Hours | 7.5 | 7.5 | -- |
| Booking Form | 7.3 | 7.3 | -- |
| FAQ | 7.3 | 7.3 | -- |
| Footer | 7.3 | 7.3 | -- |
| Sticky Mobile CTA Bar | 7.3 | 7.3 | -- |
| Accessibility & Technical | 7.6 | 7.7 | +0.1 |
| **OVERALL** | **7.38** | **7.45** | **+0.07** |

**v12 Overall: 7.45 / 10.0**

All three v11 recommendations were addressed: (1) Testimonials carousel accessibility completed with full ARIA carousel pattern and interactive dots — section jumps from 7.5 to 7.7, (2) Header condensed from 4 to 3 elements — cleaner hierarchy at 375px, (3) Why Choose Us subtitle made specific and icon tints added — section jumps from 7.3 to 7.5.

The gain of +0.07 is modest but honest. These were polish-level changes on sections that were already performing well, not structural interventions. The floor has remained at 7.3 (multiple sections) while the ceiling has risen to 7.7 (Testimonials and Accessibility). The spread is narrow (0.4 range: 7.3 to 7.7), indicating even quality across the board.

The site is firmly in 7.4+ territory — genuinely better than most local service sites. The path to 7.5+ overall requires lifting the floor sections: FAQ, Footer, Booking Form, and Sticky CTA Bar are all parked at 7.3.

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
| v9 | 2026-04-01 | 7.23 | Nigel | Hero picture/srcset, time-aware greeting, pricing transparency on services, Pet Parent Portal strip, card-wall differentiation, enhanced JSON-LD + FAQPage schema, post-visit follow-up messaging. 10 FAQs/4 categories. Center-alignment violations noted. |
| v10 | 2026-04-01 | 7.28 | Nigel | Center-alignment violations fixed. Emergency enriched (+0.3): prep card, response time, 3-step process, glow rings. Footer enriched (+0.2): Quick Answers pills, hours, fixed Google link. Content ecosystem connected. Header declutter at 375px. Logo animation removed. QA 11/11 pass. |
| v11 | 2026-04-01 | 7.38 | Nigel | Location transformed (+0.4): info card, status pill, multi-channel contact, first-visit card, radial gradient. Layout monotony broken: 2-col services grid, testimonial swipe carousel. Tech debt cleaned: !important 16->7 (all justified), placeholder links 8->1. CTA bar gains text button (+0.2). Pricing FAQ added. Review stats bar on testimonials. |
| v12 | 2026-04-09 | 7.45 | Nigel | Carousel accessibility complete: full ARIA carousel pattern + interactive dots (+0.2). Header condensed 4->3 elements (+0.2). Why Choose Us subtitle specific + per-icon tint colors (+0.2). A11y section to 7.7. Vet name mismatch in booking form resolved (bug fix, no score change). |

---

## Top 3 Priority Recommendations

### 1. Fix the `directions-cta` whitespace gap in Location section

The `directions-cta` element (inside the address block) has `min-height: 44px` and `line-height: 44px` applied as an inline-block below the address text. At 375px this creates approximately 44px of empty vertical space between the street address and the "Get Directions" label — a real user would think the spacing is a layout error. Fix: convert `directions-cta` to a flex row below the address, or set `min-height` on the address link itself rather than the "Get Directions" span. Additionally, the "Get Directions" CTA appears both inside the address block and as a button below the map. Remove one — the map-level button is more prominent and should be the survivor.

### 2. Improve the Sticky CTA Bar "Text" button visibility

The Text button uses `rgba(255,255,255,0.06)` background and `rgba(255,255,255,0.15)` border — it is nearly invisible against the frosted dark bar. On a 375px phone in real conditions, a user may not notice it at all, making the 3-button CTA bar effectively a 2-button bar. Fix: give the Text button a slightly more visible treatment. Options: `rgba(255,255,255,0.12)` background (double current opacity), or a subtle `var(--accent)` tint at 8% opacity — enough to read as a button without competing with the Book button. Also: increase the carousel dot tap targets from 10px circles to 18px touch area via `padding: 4px` on `.carousel-dot`.

### 3. Lift the FAQ CTA from phone-only to call-or-text, and give the Emergency section a phone number hierarchy fix

The FAQ section's "Still have questions?" CTA only offers "Call Us" — inconsistent with the site's pattern of offering both call and text. A one-line addition: `<a href="sms:+15557292273">Text Us</a>` alongside the call link would complete the pattern. Separately, in the Emergency section the phone number `(555) 123-4567` at 1.5rem is less visually dominant than it should be for an emergency CTA — it should be the largest, most prominent element in the box (2rem+ bold, centered, with a tappable background fill), with the steps and prep card visually secondary.

---

*End of v12 audit. The site sits at 7.45 — up from 7.38. All three v11 recommendations addressed. Testimonials (+0.2) and Why Choose Us (+0.2) are the standout movers. Header simplification (+0.2) makes the mobile navigation meaningfully cleaner. The vet name mismatch in the booking dropdown is resolved. The floor remains at 7.3 across five sections: FAQ, Footer, Booking Form, CTA Bar, Emergency. Lifting even two of these by 0.1 each would push the overall score to 7.50. The most surgical fix is the directions-cta whitespace gap — visible to any user who taps the address block on a real phone.*
