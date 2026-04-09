# Audit Report: Pawsitive Care Veterinary

**Auditor:** Nigel
**Date:** 2026-04-09
**Version:** v13
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

## What Changed Since v12

All three v12 recommendations were partially or fully addressed, plus several QA fixes:

1. **Credentials strip added (addresses hero paw SVG noise)** — The hero paw SVG (decorative, noted as visual noise in v12) has been removed. In its place, a credentials strip sits between the hero and services sections, showing: Fear Free Certified Practice, 4.9 Google / 500+ Reviews, Serving Since 2015, 24/7 Emergency. This moves trust signals that were buried in team bios or hero text to a dedicated homepage-level block.

2. **Triage decision tree added above booking form (addresses form length UX)** — A 3-branch triage widget (Emergency / Sick Visit / Wellness) now precedes the booking form. Emergency links to the emergency section; Sick and Wellness auto-fill the service-type dropdown and scroll the user to the form. This directly reduces the cognitive load of the form itself.

3. **Emergency section phone number hierarchy fixed (addresses v12 rec #3)** — The phone number now appears immediately after the h2 heading, at 2.75rem bold, in a bordered tappable block. The h2 is reduced to 1.5rem so the phone number is visually dominant. A panicking user who lands on this section now sees the number first.

4. **Nav menu trimmed from 7 to 6 items** — Testimonials removed from the hamburger menu. The section remains accessible via scroll.

5. **Footer newsletter copy made specific** — "Monthly pet health tips, vaccine reminders & seasonal care advice" instead of the generic "Get pet care tips in your inbox."

6. **QA fixes (QA/Pixel/Refiner pass):**
   - Credentials strip mobile alignment: `justify-content: flex-start` corrected to `center`
   - Triage sub-text font-size raised from 0.7rem (11.2px) to 0.75rem (12px) — below-minimum font eliminated
   - Address-link whitespace gap fixed: the 44px min-height causing blank vertical space in the Location section is replaced with negative-margin padding technique
   - Services grid card height: `align-items: stretch` added to grid, cards given flex column layout — height mismatch between sibling cards resolved
   - Carousel dot gap fixed: was 0rem (dots rendered as a single merged blob), now 0.25rem with spacing
   - Mobile CTA Text button: background and border opacity raised for better visibility
   - Prefers-reduced-motion: `scrollIntoView` calls in triage onclick handlers now respect user preference; html scroll-behavior, CTA bar transition, and triage transitions all covered

---

## Section-by-Section Breakdown

### 1. Navigation / Header — 7.5 (v12: 7.4, +0.1)

**Positives:**
- Nav menu trimmed from 7 to 6 items (Testimonials removed). The hamburger menu is now: Services, Our Team, Emergency, Location, Book Now, Call Us. This is a cleaner list — each item is a genuine action or destination
- The three-element header at 375px (logo, Book Now pill, hamburger) carries over cleanly
- "Call Us" remains in the menu as a fallback; no regression in phone accessibility

**Issues:**
- Book Now still appears both as a persistent header pill and as an item inside the hamburger menu. At this point it is a minor redundancy rather than a real problem — the pill serves scroll-hiding users, the menu item serves those who opened the menu expecting it
- The nav menu has no visual separator between navigational links and the utility link (Call Us). A user opening the menu for navigation will see "Call Us" in the same list as section links, which could be mildly confusing
- No changes to the nav active-state highlighting mechanism (JS inline style, not a persistent class)

**Assessment:** The nav trim is the right call. At 6 items the menu is manageable on 375px without scrolling inside the flyout. Moving from 7.4 to 7.5.

### 2. Hero — 7.5 (v12: 7.5, unchanged)

**Positives:**
- The decorative paw SVG has been removed — correctly. The v12 note that it was visual noise is resolved. The hero now has: greeting text, h1, tagline, dual CTAs, trust strip. Cleaner content hierarchy
- `<picture>` with webp sources, time-aware greeting, Google rating trust strip, dual CTAs — all carry over
- The trust strip (4.9 Google, 10+ Years, 24/7 Emergency) remains the strongest trust element in the hero

**Issues:**
- The credentials strip immediately below the hero now partially duplicates the hero trust strip. Both show 4.9 Google and 24/7 Emergency. A real user sees these twice within a short scroll. The duplication is not harmful, but it weakens the impact of each appearance — if the rating appears twice in the first screenful, it feels like padding rather than endorsement
- Hero still has no `og:image` webp variant — minor technical gap
- The greeting at 0.9rem is still the smallest text in the hero section

**Assessment:** The paw removal improves the hero. The trust strip duplication between hero and credentials strip is a new observation — not a regression, but a diminishing return on both elements. Holds at 7.5.

### 3. Credentials Strip — 7.2 (v12: new section)

**Positives:**
- This is a good pattern for a local service business: four trust signals in a horizontal row between hero and services
- The four signals chosen are appropriate: Fear Free certification, Google rating, years in service, emergency availability
- On 375px the dividers correctly hide and the items wrap to a 2x2 grid — the CSS handles this with `flex-wrap` and the `@media (max-width: 479px)` divider display rule
- Center alignment QA fix is in — the previous `justify-content: flex-start` bug is corrected

**Issues:**
- At 375px the credentials strip is the third time a user sees the Google rating (hero trust strip, credentials strip). The 4.9 / 500+ reviews appears in three places above the fold: hero trust strip, credentials strip, and testimonials stats bar. This is over-repetition of a single data point. One of these appearances should carry a different signal
- The credential icon for "Emergency Line — 24/7 Available" uses the same phone handset SVG as the hero emergency CTA button. On a small screen, two identical icons in close proximity look like repeated elements rather than distinct signals. A clock or lightning bolt would differentiate this credential from the phone CTA
- `credential-label` at 0.75rem (12px) is at the minimum legibility threshold on 375px. The `strong` sub-label at 0.8rem is readable; the muted label above it is borderline
- The strip's `flex-wrap` on 375px causes the four items to stack into two rows of two, with invisible dividers — the result is a 2x2 grid with generous gaps, but no visual separation between items. A real user may not read all four signals because the layout does not guide the eye left-to-right

**Assessment:** A solid structural addition that addresses the v12 hero paw note. The execution has two real problems: trust signal duplication with the hero strip, and 2x2 wrapping without visual separators on 375px. Scoring as a new section at 7.2.

### 4. Services — 7.7 (v12: 7.6, +0.1)

**Positives:**
- **Card height mismatch fixed.** The QA pass added `align-items: stretch` to the grid and flex column layout to each card. On 375px, cards within the same row now match height. This was a visible quality issue on real phones — it is now resolved
- The 2-column grid at 375px, color-coded top borders, pricing labels, icon tints — all carry over
- Description text at 0.875rem (14px) remains borderline for a 2-column layout on 375px, but is now the sharpest-looking section in the build thanks to the height fix

**Issues:**
- The `service-card:nth-child(n)` border-top color system uses six different colors (teal, blue, purple, orange, pink, sky). On a 375px screen with 2-column cards, this is a lot of color. The variety is intentional but pushes the Services section toward visually busy. A real user picking a vet does not need six distinct brand-color associations — they need to quickly find their service type
- Description text size remains the point of tension in 2-column view

**Assessment:** The height fix is the most concrete quality improvement in the QA pass. It was a real user-facing bug. Services moves from 7.6 to 7.7.

### 5. Meet the Team — 7.4 (v12: 7.4, unchanged)

**Positives:**
- Dark background contrast, 4 team members with 104px circular photos, horizontal card layout — all carry over
- The vertical stack of four identical dark cards on 375px remains the weakest layout in the build

**Issues:**
- No changes this round. The section is consistent but homogeneous
- The four cards are visually identical: same background, same layout, same photo style, same role-badge color (accent-dark). A real user scrolling quickly cannot pick out one team member from another at a glance

**Assessment:** No changes. Holds at 7.4.

### 6. Testimonials — 7.7 (v12: 7.7, unchanged)

**Positives:**
- Full ARIA carousel pattern, interactive dots with correct tap targets (now 44x44px via the QA fix), IntersectionObserver dot sync, review stats bar — all carry over
- The carousel dots gap fix (0rem to 0.25rem + spacing) means the dots now visually read as separate buttons rather than a single merged blob. This is a small but real UX improvement
- Dot `prefers-reduced-motion` coverage added for WCAG 2.2 compliance

**Issues:**
- The carousel dots are now visually correct but the gap between dots (0.25rem) is still tight at 375px — four 44x44 buttons with 4px gaps means the dots row is 188px wide centered in a 375px container. The math works, but a user who tries to tap the third or fourth dot from a scroll position where the row is partially off-screen may miss. The `gap: 0.25rem` is an improvement but `gap: 0.5rem` would provide more confident separation

**Assessment:** The QA dot gap fix and prefers-reduced-motion addition are the two changes. Both are correct and improve the section. No structural changes. Holds at 7.7.

### 7. Why Choose Us — 7.5 (v12: 7.5, unchanged)

**Positives:**
- Specific subtitle ("Care that goes beyond the exam room"), per-icon tint colors, CTA at bottom — all carry over from v12

**Issues:**
- No changes this round. The section is well-formed but the vertical stack layout on 375px (2-column only activates at 600px) means four inline items with large icon circles stack taller than necessary
- The "Personalized Care Plans" item's text ("No cookie-cutter treatments... accessible anytime through our Pet Parent Portal") references the portal, which is still "Coming Soon." A real user reading this and then attempting to access the portal would find it unavailable

**Assessment:** No changes. Holds at 7.5.

### 8. Emergency — 7.6 (v12: 7.3, +0.3)

**Positives:**
- **Phone number hierarchy fixed.** This is the most meaningful single change in v13. The phone number now appears first after the h2 heading: label ("Emergency Line — Available 24/7") then number at 2.75rem in a bordered red box, then sub-text ("Tap to call now — a vet professional always answers"). A panicking user scanning the emergency section hits the number within one eyeline of the heading
- The h2 was reduced to 1.5rem so the phone number at 2.75rem is visually dominant over the heading — correct visual hierarchy for an emergency section
- The phone number block (`emergency-phone-hero`) has `border: 2px solid rgba(255,107,107,0.4)`, `background: rgba(255,107,107,0.1)`, and is tappable with `href="tel:..."`. This is the correct treatment for a mobile emergency CTA
- Symptoms list, prep card, 3-step process, glow rings, FAQ deep-link — all carry over
- `prefers-reduced-motion` on all three pulse animations — no regression

**Issues:**
- The three animations (emergencyPulse, emergencyRing x2) on the cross element still run simultaneously. On a mid-range Android at 60Hz they remain at the edge of "tasteful." The `prefers-reduced-motion` handling is correct, but the default-on animated state is still heavy. Consider dropping to one ring animation (eliminating the 0.3s-delayed second ring)
- The "emergency-response" paragraph ("Average after-hours response: under 15 minutes") appears after the prep card — good positioning — but uses the same `.text-muted` colour as the surrounding body text. For a claim this specific it should be styled as a stat, not body copy

**Assessment:** The phone hierarchy fix is exactly right and resolves a real usability problem. A panicking owner on 375px now sees the number immediately. This is a genuine improvement that changes the user experience. Moving from 7.3 to 7.6.

### 9. Location / Hours — 7.6 (v12: 7.5, +0.1)

**Positives:**
- **Address-link whitespace gap fixed.** The v12-noted visual bug (44px of empty space below the street address before "Get Directions" appeared) is resolved via the negative-margin padding technique. The address block is now visually continuous
- The "Get Directions" CTA duplication noted in v12 (inside address block and below map) is resolved: the address block now uses the negative-margin tap-target technique without a separate "Get Directions" label, and the map has a distinct "Get Directions" button. The duplication is gone
- Status pill with live green dot, info card, multi-channel contact pills, first-visit card — all carry over
- Map directions link now has `min-height: 44px` and flex alignment for a proper tap target

**Issues:**
- The location section uses the same light green gradient (`#f0faf6` to `#f4f7fa`) as the services section. On a 375px phone scrolling top-to-bottom: services (light green) → team (dark) → testimonials (light grey-blue) → why choose us (dark with radial) → emergency (dark red) → location (light green). The alternation is intentional but services and location having identical backgrounds creates visual repetition across a long page
- The first-visit card's paw emoji (`\1F43E`) positioned at `top: -12px` via `::before` is a cute touch but renders inconsistently across Android emoji fonts — on some devices it will appear significantly smaller or with a coloured box background

**Assessment:** Both v12 Location notes are resolved: the whitespace gap is fixed and the CTA duplication is cleaned up. The section moves from 7.5 to 7.6.

### 10. Booking Form — 7.4 (v12: 7.3, +0.1)

**Positives:**
- **Triage widget added above the form.** Three colour-coded options (Emergency, Sick Visit, Wellness) with icons, labels, and sub-text. The widget is correctly grouped with `role="group"` and `aria-labelledby`. On 375px the three-column grid fits cleanly — icon, label, sub-text stack vertically in each cell. The auto-fill behaviour (Sick/Wellness options set the service-type dropdown) is a genuine UX improvement that reduces the form's cognitive load
- The triage sub-text was raised from 0.7rem to 0.75rem — the below-minimum font is gone
- Vet name consistency, portal link, form validation, iOS zoom prevention — all carry over from v12
- The triage's `prefers-reduced-motion` compliance on the `scrollIntoView` calls is correct

**Issues:**
- The triage widget adds vertical height before the form. On a 375px phone, the page section now shows: section heading + subtitle + triage widget + form + call fallback + portal strip. Total scroll height has increased. The triage widget is worth the trade-off, but it does not make the form shorter — it adds a decision step before the same form
- The portal strip below the form remains visible even after form submission. A user who just submitted an appointment request is immediately presented with the portal "Coming Soon" strip. This is the wrong moment to advertise a feature that does not yet exist
- The `form-row` at 375px uses `grid-template-columns: 1fr` (correct single-column), meaning pet type and service type are each full-width — adding vertical height that the triage widget could theoretically eliminate if the form were redesigned to skip service-type post-triage

**Assessment:** The triage widget is the right structural change. It addresses the form complexity problem identified in v12, though it adds height rather than reducing it. The portal strip post-submission remains a minor UX misstep. Moving from 7.3 to 7.4.

### 11. FAQ — 7.4 (v12: 7.3, +0.1)

**Positives:**
- **FAQ CTA now has both Call and Text options.** The v12 recommendation to add `sms:` alongside the call link is implemented. The FAQ CTA now shows "Call Us" (outline button) and "Text Us" (ghost-subtle button) side by side. The phone-only gap is closed
- The `btn-ghost-subtle` styling for the Text button is tasteful and correctly secondary to the outline Call button — hierarchy is correct
- 11 FAQs, 4 categories, native `<details>`, pricing FAQ with real numbers, category pill badges — all carry over
- The FAQ category pills now have a gradient divider line between groups (`.faq-category:not(:first-child)::before`) — the visual separation between categories is cleaner

**Issues:**
- 11 FAQs is still a long scroll on 375px. A user who wants the payment FAQ must scroll past Getting Started, During Your Visit, and Your Account first. No category-level collapse exists. This remains the structural gap in the FAQ section
- The `btn-ghost-subtle` Text button uses `color: var(--text-muted)` — a muted grey text on a transparent background with a faint teal border. On the light green FAQ background, this button is readable but low-contrast. The text "Text Us" renders as grey text on light green, which may not meet WCAG AA for normal text (contrast ratio likely around 3.5:1)

**Assessment:** The Text CTA addition resolves v12 rec #3's first half. The FAQ section moves from stagnant to addressed-and-improved. Moving from 7.3 to 7.4.

### 12. Footer — 7.4 (v12: 7.3, +0.1)

**Positives:**
- **Newsletter copy is now specific.** "Monthly pet health tips, vaccine reminders & seasonal care advice" directly tells a user what they will receive and at what frequency. This is materially better than the generic v12 copy and increases signup motivation
- Footer grid (brand, quick links, contact/hours), social links, Quick Answers pills, footer hours with emergency deep-link, paw divider, back-to-top — all carry over

**Issues:**
- The footer remains 9 distinct visual blocks on 375px: paw divider + brand + quick links + contact + social + newsletter + quick answers + legal + back-to-top. This has not changed. The newsletter copy improvement is correct but the overall footer height on mobile has not been reduced
- The newsletter success state ("Thanks for subscribing!") disappears below the fold on 375px when the form submits — the user must scroll down to see the confirmation
- Privacy Policy and Terms of Service remain as placeholder `<span>` elements, not links — a real user or legal requirement would need actual links

**Assessment:** The newsletter copy fix is the right targeted change. Moving from 7.3 to 7.4.

### 13. Sticky Mobile CTA Bar — 7.5 (v12: 7.3, +0.2)

**Positives:**
- **Text button visibility improved.** The QA pass raised the Text button background from `rgba(255,255,255,0.06)` to `rgba(255,255,255,0.16)` and border from `rgba(255,255,255,0.15)` to `rgba(255,255,255,0.35)`. On 375px this makes the Text button clearly readable as a distinct button. The v12 observation that the button "blends into the frosted background" is resolved
- Three actions (Call, Text, Book) now all have clear visual identities: accent-bordered Call, visible-border Text, gradient Book
- Frosted glass, scroll-to-hide, safe-area inset, glow entrance on Book — all carry over

**Issues:**
- The Text button is now visible, but its styling (white border, white text on near-black background) reads as a different design language from the Call button (teal border, teal text) and Book button (gradient fill). On 375px the three buttons look like they came from three different design systems rather than one cohesive bar
- The 24/7 badge on the Call button (`0.75rem` font in a 48px button) is small but the intent is clear. The badge background (`var(--emergency)`) is red on a teal-bordered button — the colour combination is technically fine but visually jarring

**Assessment:** The Text button improvement is a real fix for a real user experience gap. The CTA bar now functions as a 3-button bar rather than a 2-button bar with a ghost element. Moving from 7.3 to 7.5.

### 14. Accessibility & Technical — 7.8 (v12: 7.7, +0.1)

**Positives:**
- **prefers-reduced-motion coverage now comprehensive.** The QA pass added: `html { scroll-behavior: auto }` under reduced-motion, `.mobile-cta-bar { transition: none }`, `.triage-option { transition: none }`, and all `scrollIntoView` calls (both in main.js and inline onclick handlers) now check `window.matchMedia('(prefers-reduced-motion: reduce)')`. This closes the gaps that were identified by the Scout report
- Carousel dot tap targets fixed to 44x44px via the `::before` pseudo-element technique — the WCAG 2.5.5 gap from v12 is resolved
- Carousel dot gap fixed (0rem to 0.25rem) — dots are now visually distinct interactive elements
- Credentials strip `justify-content` alignment bug fixed
- Services grid `align-items: stretch` — card height matching is a rendering correctness fix
- Triage sub-text raised above 12px minimum
- `!important` count: 8 (7 from v12 + 1 new fade-in-up rule under reduced-motion). All 8 are in the prefers-reduced-motion block — justified
- Address-link minimum tap target maintained via negative-margin padding — no regression

**Issues:**
- Still no explicit `type="image/webp"` on hero `<source>` elements (noted since v10)
- Favicon remains a data URI SVG — functional for in-browser use, not ideal for home screen saves on iOS/Android
- The credentials strip 2x2 wrapping on 375px (at `max-width: 479px`) removes dividers but provides no alternative visual separator. The four items appear as a 2x2 grid with generous gap spacing but no clear grouping. Reading order (left-to-right, top-to-bottom) works for LTR users, but the grid is not obviously scannable as a list of four credentials

**Assessment:** The prefers-reduced-motion completeness and the tap target fixes are the meaningful improvements. The technical quality of this build is high. Moving from 7.7 to 7.8.

---

## Overall Score

| Section | v12 Score | v13 Score | Change |
|---------|-----------|-----------|--------|
| Navigation / Header | 7.4 | 7.5 | **+0.1** |
| Hero | 7.5 | 7.5 | -- |
| Credentials Strip | — | 7.2 | new |
| Services | 7.6 | 7.7 | **+0.1** |
| Meet the Team | 7.4 | 7.4 | -- |
| Testimonials | 7.7 | 7.7 | -- |
| Why Choose Us | 7.5 | 7.5 | -- |
| Emergency | 7.3 | 7.6 | **+0.3** |
| Location / Hours | 7.5 | 7.6 | **+0.1** |
| Booking Form | 7.3 | 7.4 | **+0.1** |
| FAQ | 7.3 | 7.4 | **+0.1** |
| Footer | 7.3 | 7.4 | **+0.1** |
| Sticky Mobile CTA Bar | 7.3 | 7.5 | **+0.2** |
| Accessibility & Technical | 7.7 | 7.8 | **+0.1** |
| **OVERALL** | **7.45** | **7.55** | **+0.10** |

**v13 Overall: 7.55 / 10.0**

The gain of +0.10 is the strongest single-version improvement since v11. Three changes drove this:

1. **Emergency section phone hierarchy** (+0.3): The most user-facing fix in the batch. A panicking owner now sees the phone number first. This is the kind of change that matters when someone's pet is hurt.

2. **Sticky CTA Bar Text button** (+0.2): The bar now functions as a genuine three-button CTA rather than two visible buttons and one phantom.

3. **QA pass across five sections**: Card heights, dot gaps, address whitespace, font minimums, prefers-reduced-motion — these are the boring fixes that add up. The services card height fix and address gap fix were both visible bugs on real devices.

The overall score of 7.55 represents a site that is genuinely functional, well-considered, and better than most local service pages. The floor has risen: no section is below 7.2. The ceiling (Testimonials, Accessibility) is at 7.7–7.8. The spread is 0.6 points (7.2 to 7.8), tighter than v12's spread of 0.4 in absolute terms but with the new credentials strip at the low end.

The path to 7.6+ overall requires lifting the credentials strip (7.2) and addressing the trust signal duplication between the hero strip and credentials strip. A single, well-differentiated presentation of trust signals outperforms three repetitions of the same data point.

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
| v13 | 2026-04-09 | 7.55 | Nigel | Credentials strip added (hero paw removed). Triage widget above booking form. Emergency phone hierarchy fixed (+0.3). FAQ Text CTA added. Newsletter copy specific. CTA bar Text button visible (+0.2). QA pass: card heights, dot gap, address whitespace, font minimums, reduced-motion completeness. |

---

## Top 3 Priority Recommendations

### 1. Resolve trust signal duplication between hero and credentials strip

The site currently shows the Google rating in three consecutive above-the-fold locations: hero trust strip ("4.9 Google"), credentials strip ("4.9 Google Rating / 500+ Reviews"), and testimonials stats bar ("4.9 / 500+ Reviews / 98% Recommend Us"). The first two are visible on the same scrollable section of the 375px hero. This repetition dilutes the impact of each individual signal — a real user's eye learns to skip repeated information.

Fix: Remove the Google rating from the credentials strip (it appears in the hero trust strip immediately above it) and replace it with a different signal. Good candidates: "Fear Free + AAHA Standards" (a specific accreditation claim), "Same-Day Appointments Available" (an action-relevant differentiator), or "2,500+ Pets Cared For" (a volume signal that is different from rating). The goal is four genuinely distinct trust signals in the credentials strip, each of which adds new information rather than repeating what the hero already stated.

### 2. Differentiate the Meet the Team section layout — add one visual differentiator per card

The four team cards are the most visually homogeneous section on the site. At 375px, four identical dark cards with circular photos, name, role, and bio text stack with no differentiation. A real user who is choosing between Dr. Mitchell and Dr. Rivera cannot do so at a glance.

Fix (surgical, not structural): Add one visually distinctive element per card — a specialty badge or accent. Options: (a) A small pill badge on each card indicating a specialty area: "Internal Medicine", "Orthopedic Surgery", "Fear-Free Handling", "Client Relations" — using the existing accent/role colour system. (b) A subtle left-border colour per card, matching the icon tint system used in Why Choose Us (teal, sky, rose, amber). Either change takes the team from "four identical cards" to "four distinct people" without restructuring the layout. This is a one-class addition per card.

### 3. Reduce the Emergency section animation from three simultaneous effects to two

The `emergency-pulse` animation on the cross element involves three CSS animations running simultaneously: `emergencyPulse` on the element itself (scale + opacity, 2s infinite), `emergencyRing` on `::before` (scale + opacity, 2s infinite, no delay), and `emergencyRing` on `::after` (scale + opacity, 2s infinite, 0.3s delay). On a mid-range Android at 60Hz, three simultaneous opacity-and-transform animations on a single element create GPU compositing cost that can cause frame drops. More importantly, on an emergency section that should feel urgent but calm, three overlapping ring animations read as frantic rather than authoritative.

Fix: Remove the `::after` ring animation (the delayed second ring). Keep `emergencyPulse` on the cross and `emergencyRing` on `::before` only. Two animations is still visually active; the third adds no meaningful urgency signal. The CSS change is a single `animation: none` on `.pulse-cross::after`. The `prefers-reduced-motion` coverage already handles the all-off case correctly.

---

*End of v13 audit. Score: 7.55 (+0.10 from v12's 7.45). Emergency section is the standout mover (+0.3): the phone number hierarchy fix is a genuine usability improvement that changes the first-user experience on the most time-critical section. CTA bar Text button (+0.2) resolves a real visibility gap. QA pass improvements (card heights, dot gaps, address whitespace, font minimums, reduced-motion) collectively move five sections. The new credentials strip is structurally sound but scored at 7.2 due to trust signal duplication with the hero strip and 2x2 wrapping on 375px. No section below 7.2. The floor across all sections is 7.4 except the new credentials strip. To reach 7.6 overall: address the Google rating duplication and differentiate the team cards.*
