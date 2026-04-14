# Nigel's Audit — Main Line Mobile Vet Template
**Date:** 2026-04-09
**Auditor:** Nigel (strict British auditor — buyer perspective)
**Viewport:** 375px mobile
**Context:** Template for sale. Scoring from the perspective of a veterinary practice owner evaluating design quality and UX against commercial alternatives.

---

## Score History

| Date | Score | Delta | Notes |
|---|---|---|---|
| 2026-04-09 (initial) | 6.8 | — | First formal audit |
| 2026-04-09 | 7.2 | +0.4 | Font upgrade, service card colour variants, stat card fix, form breakpoint, scroll cue, icon colours |
| 2026-04-09 (this audit) | 7.4 | +0.2 | Hero simplified (eyebrow absorbs trust line), service cards fully categorized with colour overlays + label chips, team section differentiated with credential badges + sand background, all headings centered, footer CTA banner added |

---

## Overall Score: 7.4 / 10

The changes since 7.2 are all directionally correct and address specific deficiencies I named. The service card system is now complete — eleven cards, all with category modifiers, all with label chips. The footer CTA banner is a meaningful addition. The team section has genuine differentiation through the sand background and credential badges. Hero text density is marginally reduced.

However, the delta is +0.2, not more. The improvements are refinements to existing structure, not structural leaps. The site still does not have a visual moment that stops a buyer and makes them reach for their wallet. The trust strip, calendar, and typographic pairing continue to be the strongest elements. Several prior-audit issues persist verbatim. The site earns 7.4 as a well-executed mid-tier template — better than most, not yet chosen without deliberation.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
Unchanged. The Playfair Display / Inter pairing, green/cream/amber token system, and section rhythm remain the backbone of a coherent identity. No regression, no meaningful improvement this sprint. The system is still capable of delivering a 8.5 if a genuinely distinctive visual device were introduced — a textured section, a full-bleed botanical motif, something that departs from the clean-card template aesthetic. As it stands, a developer buyer will recognise the design vocabulary as "2024-era premium template" rather than "distinctive brand."

### 2. Hero (Mobile 375px) — 7.2 / 10
The eyebrow pill now reads: "Serving the Main Line since 2015 · Now accepting new patients." This folds the prior trust line into the pill, removing one text element from the hero. Four text elements now stack above the CTAs rather than five: eyebrow, h1, sub-paragraph, CTAs. This is the correct fix and the hero is less cluttered at 375px. Score moves from 7.0 to 7.2. The structural improvement is real but modest — the hero still occupies 100vh, the sub-paragraph is two lines on mobile, and there is no photography variety (the Unsplash happy-dogs image is used on several commercial templates). A buyer who clicks through the demo on mobile will see the right hierarchy but will not feel transported.

### 3. Navigation — 7.5 / 10
Unchanged. Hamburger-to-X transition correct, overlay clean, tap targets 52px, sticky header minimal. No regression.

### 4. Why Strip — 7.0 / 10
Unchanged. Four colour-differentiated icons in 2x2 grid. The Heroicons library is still recognisable. The sand background remains near-indistinct from cream above without a definitive rule or break. No regression, no improvement.

### 5. About Section — 7.5 / 10
Unchanged. The stat card renders correctly on mobile as a static full-width card. About-text centered on mobile. The floating-card desktop premium detail is preserved. No regression, no improvement.

### 6. Services — 8.0 / 10
This is the most meaningful improvement this sprint. Eleven cards, all with category modifiers: five with `service-card--preventive`, three with `service-card--foundational`, two with `service-card--digital`, one with `service-card--eol`. The unclassed card I flagged in the prior audit (previously a `service-card` with no modifier) has been assigned. The category label chip system is now complete and consistent. The four distinct gradient overlay tones (deep green, warm sand-brown, deep blue-slate, deep amber-rose) make the horizontal scroll read as a curated catalogue rather than an undifferentiated list. Score moves from 7.0 to 8.0. This section now earns its own as a selling point. Remaining ceiling: no pricing or "from" indicators; the horizontal scroll indicator on mobile is a small arrow and hint text only — some buyers will not discover the full list.

### 7. Trust Stats Strip — 7.5 / 10
Unchanged. Playfair Display numerals on dark green, 2x2 grid, decorative circle accents. Correct and confident. No regression.

### 8. Team Section — 7.0 / 10
The sand background with top and bottom border rules gives the section a visual territory distinct from cream sections above and below. The credential badges (Iowa State University / DVM 2015 / Small Animal Medicine; Harcum College / Vet Tech, Bryn Mawr PA) add institutional weight. These are genuine improvements. Score moves from 6.5 to 7.0. Remaining ceiling: two team cards stacked vertically on mobile is adequate but not interesting. The cards still use the default white-card treatment — the sand background and badges are improvements but the cards themselves are visually quiet. A buyer demoing on mobile will scroll past quickly.

### 9. Testimonials (Horizontal Swipe) — 7.5 / 10
Unchanged. Three-colour card treatment, drag-to-scroll, proportionate quote mark. The letter-initial avatars are still generic. No regression.

### 10. Hours and Location — 7.0 / 10
Unchanged. Hours panel, map embed, today-row highlight. No regression, no improvement.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Contact info sidebar hidden on mobile. Form breakpoint at 480px. Calendar remains the clearest commercial differentiator on the page. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. Transform + opacity transition, 44px tap target, correct z-index. No regression.

### 13. Footer CTA Banner — 7.5 / 10
New section. A full-width green gradient banner above the footer grid: headline "Ready to give your pet the care they deserve?", sub-text, and two CTAs (Call / Book Online). This is the correct pattern for a conversion-focused template — it gives buyers a clear upsell narrative before the page terminates. The button treatment is inverted correctly (white primary, white-bordered ghost secondary). The inline style on the Book Online button (`style="border-color:#fff;color:#fff;"`) is a minor craft issue — it belongs in CSS, not HTML. Score: 7.5. The banner is appropriately concise and visually consistent with the trust strip. It is not a standout design moment but it fulfills its function.

### 14. Footer — 7.0 / 10
Three-column collapse to single column on mobile. Brand column, navigate column, reach-us column with social links. Dark brown terminus. Footer grid text-align center on mobile is correct. No regression.

### 15. Scroll Interactions and Animations — 7.5 / 10
Unchanged. Three concurrent animation systems: parallax (hero), scroll-reveal with staggered children, progress bar. Static scroll cue arrow. No bob animation. The staggered reveal on why-items and trust-stats is tasteful and proportionate. No regression.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing applied consistently via CSS variables. Heading scale via clamp(). No regression.

### 17. Mobile Layout and Centre Alignment — 7.5 / 10
Unchanged. About text centered, stat card centered. All section headings and eyebrows centered. The h3 tags (team-info, testimonial names) do not have explicit center alignment on mobile — they inherit it from their parent. This is correct implementation. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Add a visual device that breaks the clean-card template pattern**
Every section uses the card-on-cream or card-on-green pattern. There is no moment of surprise in the scroll. One intervention with outsized preview value: introduce a full-bleed section with a subtle botanical or paw-print SVG texture behind the trust strip or team heading. Alternatively, the testimonials section could use a genuine photograph as a section background (dark-overlaid, with cards floating on top). Either change would make the template feel designed rather than configured. This is the single change most likely to push the score above 7.5.

**2. Move the inline style on the footer CTA button to CSS**
The `style="border-color:#fff;color:#fff;"` on the Book Online button in the footer CTA is a craft defect. A buyer inspecting the code — and template buyers always inspect the code — will note it as sloppy. Move it to `.footer-cta-actions .btn-outline` in style.css. Costs thirty seconds, signals professional quality.

**3. Add a scroll discovery indicator to the services section**
On mobile, 11 service cards scroll horizontally. The current hint ("Swipe to read more" with a small arrow) is below the heading and before the cards — a buyer skimming the demo may scroll past it and never discover the full catalogue. Add a dot-indicator row below the services grid (styled as small pills, green for active) or a "1 of 11" counter that updates as the user drags. This is a pure UX improvement with zero design cost and makes the catalogue feel deliberate rather than accidentally extensive.

---

## Summary Scorecard

| Section | Prior Score | Current Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.0 | 8.0 | 0 |
| Hero (Mobile 375px) | 7.0 | 7.2 | +0.2 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.0 | 7.0 | 0 |
| About Section | 7.5 | 7.5 | 0 |
| Services | 7.0 | 8.0 | +1.0 |
| Trust Stats Strip | 7.5 | 7.5 | 0 |
| Team Section | 6.5 | 7.0 | +0.5 |
| Testimonials (Horizontal Swipe) | 7.5 | 7.5 | 0 |
| Hours and Location | 7.0 | 7.0 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | — | 7.5 | new |
| Footer | 7.0 | 7.0 | 0 |
| Scroll Interactions and Animations | 7.5 | 7.5 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.5 | 7.5 | 0 |
| **Overall** | **7.2** | **7.4** | **+0.2** |

The template is in good shape. The next meaningful score jump — to 7.6 or above — requires a visual device that distinguishes this template from the field, not further refinements to an already-competent system.
