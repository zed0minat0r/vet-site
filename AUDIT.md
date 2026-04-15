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
| 2026-04-09 | 8.1 | +0.1 | Testimonials dot counter + "1 of 4" position indicator added; team card bodies given SVG grain texture at 4% opacity + gradient tint cycling; about botanical watermark raised to 0.14 opacity; footer compacted (horizontal links, 16px grid gap); amber stat card accent removed; testimonials background changed to golden retriever; all section boundaries confirmed with 5px borders; why strip heading centered |
| 2026-04-09 | 8.2 | +0.1 | Team card bodies switched to sand background + grain raised to 9% (perceptible texture); hero wrapped in picture element with WebP srcset + JPEG fallback; team-info border-top 2px sand-dark added for image-to-info separation |
| 2026-04-09 | 8.3 | +0.1 | Hero img width/height attributes added (CLS fix); testimonial cards given amber star ratings (3x 5-star, 1x 4-star with hollow fifth); team card bodies upgraded to photo-informed backgrounds at 6% opacity with tinted gradients; dead CSS cleaned (4 orphan nth-child rules); Safari -webkit-backdrop-filter prefixes confirmed |
| 2026-04-09 | 8.4 | +0.1 | Third team member added (Alex Torres, Veterinary Assistant, blush/rose band); testimonial letter-circle avatars replaced with circular Unsplash pet photos; hours table buyer-guide HTML comments added; QA fixed 4 WCAG contrast issues; Safari -webkit-backdrop-filter prefixes confirmed across three sites |
| 2026-04-09 | 8.5 | +0.1 | Footer copyright raised to rgba(255,255,255,0.65) (passes WCAG AA); Alex Torres card gains explicit PLACEHOLDER comment; sticky call bar gains SMS "Text Us" button side-by-side with Call |
| 2026-04-09 | 8.4 | -0.1 | Animation pass: scroll reveals, icon glow pulses, hero button glow, trust stat text glow, testimonial hover glow, team card slide-in, floating hero orbs, parallax, sticky bar pulse, animated footer CTA border. Net over-animation penalty applied. |

---

## Overall Score: 8.4 / 10

This v14 audit evaluates the full animation pass added since v13. The changes are: scroll reveals on section headings and eyebrows (.section-reveal), icon glow pulse on Why strip icons (looping 3s keyframe per icon), hero CTA button glow animation (looping 3s), trust stat number text-shadow glow (static), testimonial card border glow on hover, team card directional slide-in reveals (left/right alternating), three floating ambient orbs on the hero (looping 18–26s), hero image parallax on scroll, about image parallax on scroll, sticky call bar shadow pulse (looping 3.5s), and an animated gradient border ring on the footer CTA card.

**The honest assessment from a buyer's perspective:** The scroll reveals (section headings, team cards, service cards, why items) are executed correctly — they are one-shot, respect prefers-reduced-motion, and feel considered rather than gratuitous. The team card alternating left/right slide-in is a genuine premium differentiator. Hero orbs are tasteful: 12%, 9%, and 7% opacity with blur-48, barely perceptible on a real screen, and they drift on 18–26 second cycles that read as atmosphere rather than distraction. The hero parallax is subtly handled (0.3x scroll ratio), and the about section parallax is even lighter (22px range). These are the additions that justify the word "premium."

The problems are the looping animations that never stop. The hero CTA button glows continuously on a 3s cycle. Four Why strip icons pulse on a staggered 3s cycle simultaneously. The sticky bar shadow pulses on a 3.5s cycle whenever visible. The footer CTA card has a rotating gradient border ring running at 4s per revolution, every second the page is open. From a buyer's perspective — a vet practice owner previewing this template — these effects feel busy. A veterinary practice website signals trust, calm, and professionalism. Continuously glowing buttons and pulsing icon halos run counter to that tone. They read as AI-generated design choices rather than deliberate craft.

The trust stat text-shadow glow is the most problematic single change. Numbers rendered with multiple glow layers (24px, 48px, 8px radii) look like a gaming UI or a crypto site, not a veterinary practice. This is a category-tone mismatch. A buyer evaluating this template against a clean ThemeForest competitor will pause here.

The animated footer CTA gradient border ring is visually interesting but again — continuous rotation on a card that sits above the footer on a healthcare professional's website is incongruous. It works on a SaaS landing page. It does not work here.

Net assessment: the one-shot reveals and the hero orbs/parallax add genuine premium feel. The looping glows, the trust stat text-shadow, and the rotating footer border ring introduce visual clutter that a discerning buyer will flag. The score moves down 0.1 from 8.5 to 8.4 — not a collapse, but a signal that the animation layer has crossed the optimal threshold and is now working against the template's core value proposition.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged. Amber/sand/green-pale border rhythm, botanical motif, colour token set, dark/cream/photo/sand section register all confirmed.

### 2. Hero (Mobile 375px) — 8.1 / 10
Three floating ambient orbs (12%, 9%, 7% opacity, blur-48, 18–26s drift cycles) and hero image parallax (0.3x ratio, rAF-gated) both pass muster. The orbs are invisible to casual users and provide atmosphere to attentive ones — a rare balance. Score moves from 8.0 to 8.1. The hero CTA button glow animation (looping 3s, box-shadow pulsing from 40% to 65% opacity) is the only deduction — it reads as restless on a calm brand.

### 3. Navigation — 7.5 / 10
Unchanged. Nav link underline slide-from-left on hover is a nice touch — hover-only, no loop.

### 4. Why Strip — 7.5 / 10
Down from 7.8. The icon glow pulse animation (iconGlowPulse, 3s looping, staggered per icon) runs continuously and visibly. Four icon halos cycling in sequence on a dark green background is the most distracting continuous animation on the page. On mobile at 375px, this draws the eye constantly while the user is trying to read the proposition text. The amber border top and bottom (both 5px) is a good structural change — it brackets the section cleanly. But the icon pulse undoes the calm. Score drops 0.3.

### 5. About Section — 7.8 / 10
Unchanged. About image parallax (22px range, rAF passive listener) is correctly subtle.

### 6. Services — 8.3 / 10
Unchanged. Service card scale-up entry (scale 0.93 to 1, one-shot) is tasteful.

### 7. Trust Stats Strip — 7.7 / 10
Down from 8.0. The trust stat number text-shadow glow (24px green, 48px green, 8px cream-white, all simultaneous) applied via static CSS is the most category-inappropriate change in this build. Trust statistics are supposed to convey credibility. Rendering "1,200+" with a multi-layer glow makes the section read like a dashboard widget from a gaming app. A veterinary practice owner evaluating this template will not recognise this as premium — they will register it as cheap digital effects. Score drops 0.3.

### 8. Team Section — 8.4 / 10
Up from 8.3. The team card alternating slide-in reveals (left/right, 0.65s cubic-bezier ease, 0.12s stagger per card) are the best animation addition in this build. They feel choreographed and human. The dark brown header (replacing dark green) provides a warmer register that pairs better with the team photography. Score moves to 8.4.

### 9. Testimonials — 8.8 / 10
Unchanged. Testimonial hover glow (border-color + box-shadow on hover:hover) is desktop-only and correct. No regression.

### 10. Hours and Location — 7.8 / 10
Unchanged.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Calendar available-day glow on hover (14px green glow) is a functional affordance, not decoration.

### 12. Sticky Call Bar — 8.1 / 10
Down from 8.3. The stickyBarPulse animation (box-shadow cycling from 16px brown to 28px green, 3.5s loop) runs every time the bar is visible — which is most of a mobile scroll session. A call bar should be stable and clearly actionable. A pulsing shadow on the bar's top edge sends mixed signals about urgency. The dual-button layout (Call + SMS) remains strong. Score drops 0.2 to account for the pulse.

### 13. Footer CTA Banner — 7.7 / 10
Down from 8.0. The animated gradient border ring (borderRotate, 4s linear infinite, amber-green gradient rotating around the card perimeter) is the second most problematic looping animation. A continuously spinning border ring on a healthcare website's call-to-action is a SaaS pattern deployed in the wrong category. The card content is good. The border animation undermines the trust register. Score drops 0.3.

### 14. Footer — 8.0 / 10
Unchanged. Copyright contrast confirmed at WCAG AA.

### 15. Scroll Interactions and Animations — 7.6 / 10
Down from 7.7 (was a blended score). The one-shot reveals (section-reveal, team slide-in, service-card scale entry) are well-implemented. The reduced-motion block is thorough. What drops the score: five distinct looping animations are active simultaneously on a mobile scroll (hero button glow, why icon pulses, sticky bar pulse, footer CTA ring). This is one looping effect too many — or three too many depending on the section. The page feels like it cannot stop moving.

### 16. Typography — 8.0 / 10
Unchanged.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. Pixel's 6-fix alignment audit holds.

---

## Top 3 Recommendations

**1. Kill or replace all looping glow animations — hero button, why strip icons, trust stat text-shadow, sticky bar pulse.**
The one-shot reveals are good. The looping effects are not. A veterinary brand communicates steadiness and trust. Continuous pulsing on a CTA button, four icon halos, and a sticky bar all running at the same time is antithetical to that brand register. At minimum: remove the hero button animation (keep the static glow box-shadow on hover only); remove the iconGlowPulse from why-icon selectors (keep the coloured backgrounds); remove the stickyBarPulse from sticky-call-bar.visible. This alone would bring the score back to 8.5+.

**2. Remove the trust stat number text-shadow glow.**
The three-layer text-shadow on .trust-stat-number is a category mismatch. "1,200+ pets served" in glowing green text reads as a scoreboard, not a professional credential. Remove the text-shadow entirely or replace with a single subtle 8px shadow at 20% opacity. The counter animation (number count-up on entry) was already the differentiator in this section — the glow adds nothing and subtracts professionalism.

**3. Replace the animated footer CTA gradient border ring with a static amber border.**
The borderRotate animation (4s linear infinite) on the footer CTA card is too conspicuous for a healthcare template. A static 2px amber border — matching the amber top border established elsewhere in the design system — would provide the same visual emphasis without motion. The card's dark green background and white text already make it the most visually dominant element above the footer. It does not need a spinning ring to stand out.

---

## Summary Scorecard

| Section | v13 Score | v14 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 8.0 | 8.1 | +0.1 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.5 | -0.3 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 7.7 | -0.3 |
| Team Section | 8.3 | 8.4 | +0.1 |
| Testimonials | 8.8 | 8.8 | 0 |
| Hours and Location | 7.8 | 7.8 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 8.3 | 8.1 | -0.2 |
| Footer CTA Banner | 8.0 | 7.7 | -0.3 |
| Footer | 8.0 | 8.0 | 0 |
| Scroll Interactions and Animations | 7.7 | 7.6 | -0.1 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.5** | **8.4** | **-0.1** |

The animation pass delivered real improvements in two areas (hero atmosphere, team slide-in reveals) and introduced over-animation in four others (why strip icon pulses, trust stat glow, sticky bar pulse, footer CTA ring). The net effect is a slight regression. The one-shot scroll reveals are the correct instinct — they should be kept. The looping decorative effects should be trimmed. Implementing recommendation 1 alone (remove looping glows) would likely push the score back to 8.5 or above.
