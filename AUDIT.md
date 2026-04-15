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
| 2026-04-09 (this audit) | 8.0 | +0.1 | Section boundary borders applied across all 10 transitions (amber/sand/green); hours section upgraded with dark green header card + map panel matching; team cards given top colour bands (amber/green/sky/blush); about stat card amber ring removed; footer 6px amber top border; scroll-margin-top confirmed |

---

## Overall Score: 8.0 / 10

The v8 brief addresses the two items that were explicitly holding the template below 8.0: the hours section and the section boundary cohesion. Both have been meaningfully resolved.

The hours section has received its first designed treatment across eight audit rounds. The dark green header band on the hours panel matches the visual language of the trust strip, the team header, and the why strip. The map panel has an equivalent dark green header with a 5% botanical leaf watermark. These are not decorative touches — they connect a section that was previously an aesthetic orphan to the template's visual system. Score moves from 7.0 to 7.5. This is the largest single-section improvement in v8 and the direct reason the overall score clears 8.0.

The section boundary borders are the second significant change. Every transition now has an explicit marker: 5px amber on the why strip top, 5px sand-dark on services, 6px semi-white on trust stats, 5px amber on team, 5px sand-dark on testimonials top, 5px sand on testimonials bottom, 5px sand-dark on hours bottom, 5px green-pale on contact top, 6px amber on footer. These are not random colours — they follow the template's token set (amber, sand, green-pale) in a legible rhythm. A buyer scrolling the full page on mobile will now register section changes as intentional beats rather than abrupt background shifts.

The team card top colour bands (amber/green-dark/sky/blush cycling) give the cards a deliberate jewellery treatment without changing their warm-white body. This is the minimum viable differentiation for the team card bodies — it is not the photographic card treatment I specified as a recommendation, but it is a genuine step.

The about stat card amber ring shadow removal is correct. The ring was fighting the stat card's green background and the amber accent was already doing work elsewhere in the section. The card is cleaner without it.

The delta is +0.1. That is an honest score for these changes. The section boundary work and the hours section fix together constitute a threshold crossing — this template now scores at a level where a buyer would choose it over a generic ThemeForest alternative with genuine confidence. What prevents 8.5: the team card bodies remain warm-white rectangles with no photographic treatment; the about botanical watermark remains borderline invisible on mobile OLED at 11% opacity; and the testimonials section has no navigation indicators (no dot counter, no card counter) despite being a scroll carousel, which is a UX gap that a buyer who tests on mobile will notice.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
The section boundary colour system is now the fourth layer of the template's design vocabulary, joining the botanical motif, the colour token set, and the section-type register (dark green / cream / photo / sand). The amber/sand/green-pale border rhythm is coherent and not arbitrary. Score moves from 8.2 to 8.3. This is the clearest evidence that the template has a deliberate design system rather than assembled styles.

### 2. Hero (Mobile 375px) — 7.5 / 10
Unchanged from v7. 80vh, centered content, correct overlay gradient, eyebrow contained. No regression.

### 3. Navigation — 7.5 / 10
Unchanged. Hamburger-to-X transition correct, overlay clean, tap targets 52px, sticky header minimal. No regression.

### 4. Why Strip — 7.8 / 10
Unchanged from v7. The dark green treatment with cream/amber/blush/sky icon accents and botanical overlays is confirmed. The 5px amber top border is a correct v8 addition — it marks the hard exit from the hero and gives the strip a deliberate entry point. No regression.

### 5. About Section — 7.8 / 10
The amber ring shadow on the stat card has been removed. The card is now a clean dark green rectangle with Est. 2015 / 500+ Home Visits, sitting below the about image on mobile. The botanical watermark at 11% is confirmed in CSS (opacity: 0.11 at line 502). It remains borderline on OLED mobile. Score holds at 7.8. No regression.

### 6. Services — 8.3 / 10
Unchanged. The 5-dot sliding window, scroll progress indicator, and photo-backed cards with category-colour overlays remain the most technically considered mobile UX element on the page. The 5px sand-dark top border cleanly separates services from the cream about section. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. Static 2015 confirmed, three animated counters clean, 6px semi-white top border provides adequate separation from charcoal services background. No regression.

### 8. Team Section — 7.6 / 10
The top colour bands on team cards are confirmed in CSS: amber for card 1, green-dark for card 2, sky for card 3, blush for card 4 and beyond. On a 375px screen these 4px bands are immediately visible — they give each card a distinct header signal without requiring a full redesign. Score moves from 7.5 to 7.6. The 5px amber top border on the team section itself matches the why strip entry treatment and gives the section a strong mobile entry. The card bodies remain warm-white with centered text (inherited from `.team { text-align: center }`) — not distinguished, but not wrong. The ceiling remains a photographic card treatment.

### 9. Testimonials — 8.0 / 10
Unchanged. The full-bleed golden retriever photo background with dark green-brown overlay and floating cream cards is confirmed. The 5px sand-dark / sand borders on both sides cleanly mark the section entry and exit. One genuine UX gap that a mobile buyer will notice: there is no dot counter or position indicator for the testimonial carousel. A user on mobile who swipes and sees a second or third card has no feedback about how many remain. Score holds at 8.0 but this gap would prevent movement to 8.5.

### 10. Hours and Location — 7.5 / 10
The long-overdue intervention. The hours panel now has a dark green header band (`hours-header` with `background: var(--green-dark)`, `color: #fff`) containing the "Hours" eyebrow in green-pale and the "When we're available." heading in white. The map panel has an equivalent dark green header with a 5% botanical leaf watermark and the "Location" / "Chester Springs, PA" treatment. Both panels are contained in warm-white cards with sand-dark borders and card-level box-shadows. Score moves from 7.0 to 7.5. This is the most consequential single change in v8. The section no longer reads as aesthetically inert — it now speaks the same visual language as the rest of the template. The today-row highlight (amber left-shadow, amber-tinted background) was already present and remains functional.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Calendar remains the clearest commercial differentiator. Form breakpoint at 480px collapses bform-row to single column correctly. Contact info sidebar hidden on mobile. 5px green-pale top border and 5px sand-dark bottom border cleanly delineate the section. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. Transform + opacity transition, 44px tap target, correct z-index. The 64px footer padding-bottom on mobile prevents the sticky bar from obscuring footer content. No regression.

### 13. Footer CTA Banner — 8.0 / 10
The border (3px rgba white at 0.12) and box-shadow (0 4px 32px rgba black 0.4) confirmed in CSS. The CTA now reads as a floating card inside the dark footer rather than a flush panel. No regression.

### 14. Footer — 7.5 / 10
The 6px amber top border is the footer's clearest v8 improvement. It matches the amber entry treatment on the why strip and team section, closing the amber rhythm at the page bottom. Score moves from 7.4 to 7.5. The footer structure is clean and correctly centered on mobile. Brand logo `justify-content: center` confirmed. No regression.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. Four animation systems present and correctly gated behind prefers-reduced-motion. scroll-margin-top on all section[id] elements at `calc(var(--nav-h) + 16px)` is confirmed at line 58. No regression.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing applied consistently. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. Consistent center-alignment confirmed across all sections on mobile. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Add a dot or position indicator to the testimonials carousel**
The testimonials section is a horizontal scroll carousel with four cards. On mobile there is no feedback about how many cards exist or where the user is in the sequence. This is a functional gap, not a styling gap. The services carousel has a 5-dot sliding window and a "1 of 11" counter — the same pattern applied to testimonials would take the section from 8.0 to 8.2 and give buyers a concrete demonstration of UX polish. Implementation is approximately 20 lines of JS mirroring the existing services counter logic.

**2. Apply a photographic or coloured-overlay treatment to the team card bodies**
The top colour bands (amber/green/sky/blush) are the minimum viable differentiation. They work but they don't resolve the core issue: below the colour band the cards are warm-white rectangles. The services cards use a photo-as-background with a dark gradient overlay — the same technique inverted (photo-as-background, 90% cream overlay, text on top) would give the team cards a second visual register. Alternatively, a thin pattern background (the existing SVG grain texture from the about section, at 4% opacity over var(--warm-white)) would add texture without a photograph. Either option moves team from 7.6 to 7.9.

**3. Increase the about section botanical watermark opacity to 0.14 on mobile**
At 11% the watermark is perceptible on desktop but still borderline on most mobile OLED screens. The team leaf at 22% opacity and the why strip overlays at 5-6% white on dark establish the valid range — on a light cream background 14% would be equivalent in perceived weight to 6% on dark. This is one number change. The botanical motif is the template's signature device; it should be perceptible on the primary purchase decision screen (mobile) in every section where it appears.

---

## Summary Scorecard

| Section | v7 Score | v8 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.2 | 8.3 | +0.1 |
| Hero (Mobile 375px) | 7.5 | 7.5 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 7.5 | 7.6 | +0.1 |
| Testimonials | 8.0 | 8.0 | 0 |
| Hours and Location | 7.0 | 7.5 | +0.5 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.4 | 7.5 | +0.1 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **7.9** | **8.0** | **+0.1** |

The v8 changes delivered precisely what was needed to cross 8.0. The hours section fix (+0.5) is the largest single-section gain in v8 and the direct cause of the threshold crossing. The section boundary borders add coherence without clutter. The team card bands add minimum viable differentiation. The template is now at a level where a buyer with genuine aesthetic judgment would prefer it over a generic ThemeForest alternative. The remaining gap to 8.5 requires the testimonials carousel indicator, a photographic or textured treatment on team card bodies, and consistent botanical watermark visibility on mobile OLED.
