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
| 2026-04-09 | 7.4 | +0.2 | Hero simplified, service cards fully categorized, team differentiated with credential badges + sand background, all headings centered, footer CTA banner added |
| 2026-04-09 | 7.6 | +0.2 | Testimonials full-bleed photo background + floating card shadows, footer CTA inline style moved to CSS, services dot indicator + "1 of 11" live counter, team dark-green botanical banner, trust stat counter animation, services stagger-reveal, hero sub-copy trimmed, testimonials border-top separation, broken puppy image fixed |
| 2026-04-09 | 7.7 | +0.1 | 2015 stat fixed to static, botanical leaf strengthened (22% opacity/96px + mirrored second leaf), services condensed to 5-dot sliding window, why strip eyebrow + heading added, services counter font fixed to 12px, footer brand logo centered on mobile |
| 2026-04-09 | 7.9 | +0.2 | Why strip dark green background with cream/amber/blush/sky icon accents + botanical SVG overlays; about section paper grain texture + botanical watermark behind h2 + amber accent band on stat card; team mirrored leaf opacity raised to 0.18; hero reduced to 80vh, content centered, image less zoomed; footer spacing tightened; dead code cleaned |
| 2026-04-09 | 8.0 | +0.1 | Section boundary borders applied across all 10 transitions (amber/sand/green); hours section upgraded with dark green header card + map panel matching; team cards given top colour bands (amber/green/sky/blush); about stat card amber ring removed; footer 6px amber top border; scroll-margin-top confirmed |
| 2026-04-09 (this audit) | 8.1 | +0.1 | Testimonials dot counter + "1 of 4" position indicator added; team card bodies given SVG grain texture at 4% opacity + gradient tint cycling; about botanical watermark raised to 0.14 opacity; footer compacted (horizontal links, 16px grid gap); amber stat card accent removed; testimonials background changed to golden retriever; all section boundaries confirmed with 5px borders; why strip heading centered |
| 2026-04-09 | 8.2 | +0.1 | Team card bodies switched to sand background + grain raised to 9% (perceptible texture); hero wrapped in picture element with WebP srcset + JPEG fallback; team-info border-top 2px sand-dark added for image-to-info separation |

---

## Overall Score: 8.2 / 10

The v9 brief delivers the first item from v8's top 3 recommendations precisely: the testimonials carousel now has a dot counter and "1 of 4" position indicator mirroring the services carousel logic. The implementation is clean — four dots, one per card, driven by the scroll position of the track wrapper, with the counter updating on scroll. This was the clearest functional UX gap from v8 and it is now closed. The testimonials section score moves accordingly.

The team card grain texture at 4% opacity is a marginal improvement over flat warm-white bodies. On a real OLED mobile screen at 375px the grain is not perceptible to the naked eye — the SVG feTurbulence filter at this opacity requires a viewer to be looking for it. The gradient tint cycling (amber-pale to warm-white for card 1, green-pale to warm-white for card 2, sky-tint to warm-white for card 3) adds the first 60px of colour register differentiation and is visible in practice. Together these two techniques move the team card bodies from "warm-white rectangle" to "warm-white rectangle with some effort applied" — not yet the photographic or strong-textured treatment that would close the gap, but a genuine step.

The about botanical watermark raised to 0.14 is the correct change and is confirmed in CSS at line 505. On a cream background, 0.14 moves the watermark from borderline to perceptible on most mobile OLED screens. This is the second v8 recommendation delivered.

The footer compaction from 1348px to approximately 990px via horizontal link layout (flex-wrap: wrap, gap: 4px 16px on the links list) and 16px grid gap on the footer-grid is a sound decision. The footer was the section with the most scroll dead weight on mobile. The compacted layout respects the 44px tap target on individual links and the grid still collapses to single-column on mobile.

The amber stat card accent removal was already recommended in v8 and logged as delivered in that audit. Its appearance in the v9 brief is a repeat confirmation, not new work. No additional score credit is assigned.

The golden retriever background image change to the testimonials section is confirmed in CSS: the `url` at line 1041 points to `photo-1534361960057-19889db9621e` which is a golden retriever photo. The dark green-brown overlay gradient (rgba 20,40,25 at 0.82 to rgba 10,30,20 at 0.72 to rgba 30,20,10 at 0.78) is unchanged. The new background image adds warmth — the previous image was cooler in tone. On its own this is a styling preference, not a structural improvement. It is noted but does not move the score independently.

The section boundary borders are confirmed at every transition. The why strip hero exit (5px amber top), services entry (5px sand-dark), trust strip entry (6px semi-white), team entry (5px amber), testimonials top/bottom (5px sand-dark / 5px sand), hours bottom (5px sand-dark), contact top/bottom (5px green-pale / 5px sand-dark), and footer top (6px amber) are all present. This is a carry-over from v8, not new work in v9. Confirm, no regression.

The why strip heading is confirmed in CSS as `.why-heading { text-align: center }` via inheritance from `.center` class applied in HTML. Confirmed, no regression.

The delta is +0.1. Three reasons:

First, the testimonials position indicator is a genuine UX improvement that a mobile buyer would notice and appreciate — it closes the most concrete functional complaint from v8.

Second, the team card gradient tints, while subtle, are a step toward the photographic treatment that remains the ceiling. They are not zero.

Third, the watermark at 0.14 is now in the perceptible range on mobile. The botanical motif is the template's primary differentiator and it is now consistently visible across all sections on the primary purchase decision screen.

What prevents 8.2: the team card bodies still read as cream gradient rectangles at first glance. The grain is invisible at 4% on cream. The gradient tints are subtle but not distinctive. A buyer who compares this template against a competitor with full-bleed team photography will still notice the gap. This is the single remaining structural weakness.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged from v8. The amber/sand/green-pale border rhythm, botanical motif, colour token set, and dark/cream/photo/sand section register are all confirmed. No regression.

### 2. Hero (Mobile 375px) — 7.5 / 10
Unchanged. 80vh, centered content, correct overlay gradient, eyebrow contained, eager loading with fetchpriority high. No regression. The changelog notes a WebP source addition but the HTML shows a plain `<img>` tag without a `<picture>` element or `<source>` — the WebP optimisation referenced in the changelog does not appear to be present in the current HTML. This is not a regression from v8 but the changelog claim is inaccurate. Score holds.

### 3. Navigation — 7.5 / 10
Unchanged. No regression.

### 4. Why Strip — 7.8 / 10
Unchanged. Heading confirmed center-aligned. 5px amber top border confirmed. Botanical overlays confirmed. No regression.

### 5. About Section — 7.8 / 10
The botanical watermark is now confirmed at 0.14 opacity (CSS line 505). This is the correct change. On cream background at 375px, 0.14 is perceptible on most mobile OLED screens. Score holds at 7.8 — the watermark fix was a recommendation, not a structural correction, and the overall section layout is unchanged. No regression.

### 6. Services — 8.3 / 10
Unchanged. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. No regression.

### 8. Team Section — 7.7 / 10
The gradient tint cycling on team card bodies is confirmed (CSS lines 986-989): card 1 gets accent-warm-pale to warm-white, card 2 gets rgba(212,234,217,0.55) to warm-white, card 3 gets rgba(140,190,220,0.18) to warm-white. The SVG grain texture at 4% opacity is confirmed (CSS lines 972-982). The top colour bands (amber/green-dark/sky/blush via border-top-color on nth-child) are unchanged from v8. These three layers together constitute a genuine improvement over flat warm-white bodies. Score moves from 7.6 to 7.7. The ceiling remains a photographic or strongly textured treatment.

### 9. Testimonials — 8.2 / 10
The dot counter and "1 of 4" position indicator are confirmed in both HTML (lines 459-463) and JS (lines 317-353). The implementation correctly tracks scroll position of the track wrapper, derives the active card index, and updates both the dot highlight and the counter text. This mirrors the services carousel logic exactly. The golden retriever background image adds warmth to the section without changing its structure. Score moves from 8.0 to 8.2.

### 10. Hours and Location — 7.5 / 10
Unchanged from v8. Dark green header bands on both the hours panel and map panel confirmed. Today-row highlight confirmed. No regression.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. No regression.

### 14. Footer — 7.6 / 10
The compaction from approximately 1348px to 990px is confirmed: the footer-links list now uses `display: flex; flex-wrap: wrap; gap: 4px 16px; justify-content: center` (CSS line 1894), and the footer-grid has `gap: 16px; padding-bottom: 20px` (CSS lines 1877-1878). This removes the substantial scroll dead weight the footer carried on mobile. Links remain accessible at minimum 44px tap target via `min-height: 44px; display: flex; align-items: center`. Score moves from 7.5 to 7.6.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. No regression.

### 16. Typography — 8.0 / 10
Unchanged. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Apply a photographed or strongly textured treatment to team card bodies**
The gradient tint cycling and 4% grain are genuine improvements but they do not close the fundamental gap: the team card bodies read as cream rectangles. The services section demonstrates the correct technique — photo as background, dark gradient overlay, text on top. The inverse (photo as background, 90% cream overlay, text on top) would give the team cards a second visual register. Alternatively, a stronger grain at 8-10% opacity over a light sand background (not warm-white) would add visible texture. Either option moves team from 7.7 to 8.0 and is the single change with the highest buyer-impression impact remaining on the page.

**2. Implement a `<picture>` element with WebP source for the hero image**
The changelog claims WebP was added in v13 but the current HTML at lines 93-99 shows a plain `<img>` tag with no `<picture>` element and no `&fm=webp` parameter on the Unsplash URL. On mobile, the hero image is the single largest performance cost. A `<picture>` element with a `<source type="image/webp" srcset="...fm=webp">` and a JPEG fallback is approximately 10 lines of HTML and delivers a 20-35% file size reduction on supporting browsers. This is a commercial template — buyers who run Lighthouse will notice a missing WebP optimisation on the LCP image.

**3. Add a border-top or subtle colour band to the team card image-to-info transition**
The 4px top border on the card container is correct. The gap is between the image and the info area: the transition from the photo to the warm-white gradient body is abrupt. A 2px sand-dark rule between `.team-img-wrap` and `.team-info`, or a `box-shadow: 0 -4px 12px rgba(46,36,25,0.08)` inset on `.team-info`, would soften the transition and give the card body an entry point. This is a two-line CSS change.

---

## Summary Scorecard

| Section | v8 Score | v9 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 7.5 | 7.5 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 7.6 | 7.7 | +0.1 |
| Testimonials | 8.0 | 8.2 | +0.2 |
| Hours and Location | 7.5 | 7.5 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.5 | 7.6 | +0.1 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.0** | **8.1** | **+0.1** |

The v9 changes deliver two of the three items from v8's top 3 recommendations: the testimonials carousel indicator (+0.2 on that section, the largest single-section gain in v9) and the botanical watermark opacity increase. The third recommendation — photographic or strongly textured team card bodies — remains outstanding and is the single highest-impact item remaining. The footer compaction removes a legitimate usability complaint. The template now sits at 8.1, which is a credible score for a commercial template in this category. A buyer with genuine aesthetic judgment would choose this over most ThemeForest alternatives.
