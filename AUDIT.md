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
| 2026-04-09 (this audit) | 7.9 | +0.2 | Why strip dark green background with cream/amber/blush/sky icon accents + botanical SVG overlays; about section paper grain texture + botanical watermark behind h2 + amber accent band on stat card; team mirrored leaf opacity raised to 0.18; hero reduced to 80vh, content centered, image less zoomed; footer spacing tightened; dead code cleaned |

---

## Overall Score: 7.9 / 10

These are the structural interventions I asked for, and they have delivered. The v7 brief addressed all three of my top recommendations from v6: the why strip is no longer beige icons on a sand background — it is now dark green with a 2x2 icon grid, cream/amber/blush/sky colour-coded accents, and botanical leaf overlays at 5–6% opacity. The about section has a paper grain texture, a botanical watermark behind the h2, and an amber-bordered stat card that now punches beyond a plain-white container. The mirrored botanical leaf in the team header is confirmed at 0.18 opacity, up from 0.10, and is now genuinely perceptible on a phone screen.

The delta is +0.2. That is an honest score for these changes. The why strip transformation is the most significant: moving from sand/Heroicons to dark green with a full botanical overlay system is a real visual identity move, not a polish pass. A buyer scrolling through in a demo will now see three distinct section treatments — dark green (trust strip and why strip sharing a visual language), full-bleed pet photography (testimonials), and cream with grain (about). That's three section-type register, not one. That is what differentiates a designed template from a laid-out one.

What prevents 8.0: the team cards remain white-on-sand. The section has a strong dark green header but the cards below are warm-white rectangles with left-aligned text and stock photos. A buyer comparing this to Squarespace's Brine template will still favour Squarespace on the team section. The hours and location section at 7.0 has received no attention across seven audit rounds — it is now the single biggest drag on the overall score. These two items are the ceiling.

---

## Section Scores

### 1. Design System and Visual Identity — 8.2 / 10
The botanical motif is now functioning as a template-wide device: it appears in the why strip (pseudo-elements at 5–6% opacity), the about section (watermark behind h2 at 7% opacity), and the team header (SVG leaf at 22% + mirror at 18%). This is a deliberate signature, not incidental decoration. The colour token system (dark green / cream / amber / sand) is now being used as actual section-level design material rather than accent-only colour. Score moves from 8.0 to 8.2. This is now the clearest evidence of design intentionality in the template.

### 2. Hero (Mobile 375px) — 7.5 / 10
The 80vh reduction is correct — the previous 100vh on mobile caused the first scroll gesture to feel like it skipped the hero entirely. At 80vh the content is visible above the fold with a clear scroll cue. Content centering is confirmed: `text-align: center` on `.hero-content`, `justify-content: center` on `.hero-actions`. The `object-position: center 50%` on the hero image is less zoomed and shows more of the dogs-running composition. Score moves from 7.3 to 7.5. These are meaningful mobile UX improvements, not cosmetic ones.

### 3. Navigation — 7.5 / 10
Unchanged. Hamburger-to-X transition correct, overlay clean, tap targets 52px, sticky header minimal. No regression.

### 4. Why Strip — 7.8 / 10
This is a genuine section transformation. Dark green background (`--green-dark`) replaces the former near-indistinct sand. The icon accents are now colour-coded: item 1 gets cream (`--green-pale`), item 2 gets amber (`#f0b070`), item 3 gets blush (`#f4a0b0`), item 4 gets sky (`#90c4e0`). These are four distinct palette signals on a dark ground — they read as a system, not as decoration. The botanical pseudo-elements at 5–6% white opacity are sufficient as texture without competing with the icon content. The eyebrow ("Why mobile care") and heading ("The difference you'll feel from visit one.") remain from v6 and are correctly styled in cream/white on the dark ground. Score moves from 7.1 to 7.8. This is the largest single-section score movement across all seven audits. The section is now visually coherent and distinctive.

### 5. About Section — 7.8 / 10
The paper grain texture via SVG feTurbulence filter is correctly applied as a background-image stacked over the cream background-color. At 3% opacity it is not visible as a texture per se, but it prevents the cream from reading as flat — the section has warmth it did not have before. The botanical watermark at 7% opacity is perceptible on desktop but borderline invisible on most mobile OLED screens at this opacity. The amber accent band on the stat card (4px left-border, `--accent-warm`, plus `0 0 0 3px var(--accent-warm)` ring shadow) is the most successful of the three interventions: it takes a plain green stat card and gives it a deliberate jewellery treatment. Score moves from 7.5 to 7.8. The section is now the second strongest non-interactive section after testimonials.

### 6. Services — 8.3 / 10
Unchanged. The 5-dot sliding window, counter font at 12px, and photo-backed cards with category-colour overlays remain the most technically considered mobile UX element on the page. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. Static 2015 confirmed, three animated counters clean. No regression.

### 8. Team Section — 7.5 / 10
The mirrored botanical leaf at 0.18 opacity is now confirmed in CSS. At 375px on a standard OLED it is now perceptible — the bottom-left corner has visible texture and the paired-motif reading is now legible. Score moves from 7.3 to 7.5. The team header is now a strong visual unit: dark green, botanical SVG pair, pale green eyebrow, white heading. The cards below remain the constraint: warm-white background, left-aligned bio text (truncated to 4 lines on mobile), green-pale credential badges. Nothing here is wrong, but nothing here is distinguished. The section ceiling is 7.8, requiring a photographic treatment on the cards themselves — a subtle photo-as-background-image with a 90% white overlay, or a coloured-band system matching the service cards.

### 9. Testimonials — 8.0 / 10
Unchanged. The full-bleed pet photography section with floating cream cards and deep box-shadow remains the strongest non-interactive section on the page. No regression.

### 10. Hours and Location — 7.0 / 10
Unchanged across seven audit rounds. Hours panel, map embed, today-row highlight on the sand background. This is now the single largest score drag on the template. No regression, but no improvement. A buyer who looks at this section immediately after the testimonials or the why strip will feel the drop in ambition. The section is functional but aesthetically inert.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Calendar remains the clearest commercial differentiator. Form breakpoint at 480px collapses bform-row to single column correctly. Contact info sidebar hidden on mobile. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. Transform + opacity transition, 44px tap target, correct z-index. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. Gradient, two CTAs, correct inverted button treatment, CSS-only style (no inline). No regression.

### 14. Footer — 7.4 / 10
Footer gap tightening confirmed: footer-grid gap reduced, padding-bottom tighter. The brand logo `justify-content: center` on mobile is confirmed in CSS at line 1741. Score moves from 7.2 to 7.4. These are correct spacing decisions. The footer structure is clean: brand/nav/contact in a single-column stacked layout on mobile, correctly centered. No regression.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. Four animation systems (parallax, scroll-reveal, stat counter, scroll progress) all present and correctly gated behind prefers-reduced-motion. No regression.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing applied consistently. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
The about-text `text-align: center` on mobile is confirmed in CSS at line 1706. Hero content centering confirmed. Footer logo centering confirmed. Score moves from 7.6 to 7.8. The template is now consistently center-aligned across all sections on mobile with no obvious exceptions. This is a meaningful improvement for a buyer who checks mobile alignment as a quality signal.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Give the hours and location section a designed treatment**
This section has been at 7.0 across seven audit rounds. It is now the single largest score gap in the template. The current implementation is a functional hours table and a map iframe on a sand background. Options that would move it to 7.5 without heavy engineering: give the hours panel a dark green header band (matching the team and trust strip language), add a small botanical leaf watermark behind the h2, or apply the amber accent band from the stat card to the "today" row highlight. Any of these connects the section to the template's visual vocabulary. This is 20 minutes of CSS.

**2. Apply a coloured-band or photographic treatment to the team cards**
The team header is now excellent. The cards beneath it are warm-white rectangles. The contrast is not flattering to either element. Options: a subtle photo-as-background with a 92% cream overlay (same technique as service cards, inverted), a thin amber or green-pale band across the top of each card matching the credential badge colour, or giving each card a unique background-color drawn from the existing token set (sand/cream/green-pale cycling). Any of these would move the team section from 7.5 to 7.8 and give the template a second photographic card system to demonstrate to buyers.

**3. Increase the botanical watermark opacity in the about section from 0.07 to 0.11**
At 7% the watermark is not visible on most mobile OLED screens — it contributes nothing to the mobile UX, only to desktop. At 11% it would be perceptible on mobile as a ghost shape without competing with the text. This is a single CSS property change that would make the about section's botanical motif consistent with the team header and the why strip overlays. The cost is one number; the benefit is visual continuity of the template's signature device across three sections on mobile.

---

## Summary Scorecard

| Section | v6 Score | v7 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.0 | 8.2 | +0.2 |
| Hero (Mobile 375px) | 7.3 | 7.5 | +0.2 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.1 | 7.8 | +0.7 |
| About Section | 7.5 | 7.8 | +0.3 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 7.3 | 7.5 | +0.2 |
| Testimonials | 8.0 | 8.0 | 0 |
| Hours and Location | 7.0 | 7.0 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.2 | 7.4 | +0.2 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.6 | 7.8 | +0.2 |
| **Overall** | **7.7** | **7.9** | **+0.2** |

The v7 changes were structurally sound and delivered the expected score movement. The why strip transformation (+0.7) is the single largest section improvement across all seven audits. The template is now approaching the threshold where a buyer would choose it over a generic ThemeForest alternative with genuine confidence. The remaining gap to 8.0 is the hours section (seven rounds untouched) and the team cards (strong header, plain body). Both are 20-minute CSS interventions.
