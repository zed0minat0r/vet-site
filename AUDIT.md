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
| 2026-04-09 | 7.6 | -0.8 | Re-calibration audit. Sticky bar pulse removed (good). Trust stat glow reduced but still present. Hero CTA looping glow, why strip icon looping glows, footer CTA animated ring all remain. Testimonial border glow now always-on (regressed from hover-only). Services sticky horizontal scroll assessed live. Scoring recalibrated downward from buyer perspective. |
| 2026-04-09 | 7.9 | +0.3 | Full animation remediation pass: hero CTA looping glow replaced with static glow (hover intensifies); why strip icon looping glows replaced with static ambient box-shadows (hover scale only); trust stat text-shadow glow removed entirely; footer CTA spinning border replaced with static gradient border; testimonial always-on glow moved to hover:hover block; team header redesigned with amber-to-green gradient photo background; duplicate images fixed; green line below why strip removed; service cards resized; team card overflow fixed. |

---

## Overall Score: 7.9 / 10

This is a clean remediation audit. Every item the previous audit penalised has been addressed in the code. I have verified each fix against the CSS directly and can confirm the following are genuine changes, not cosmetic workarounds.

**Hero CTA glow:** The `@keyframes heroGlow` looping animation is gone. The button now carries a static `box-shadow: 0 0 18px rgba(74, 124, 89, 0.45), 0 4px 14px rgba(45, 90, 61, 0.3)` that intensifies to 44px / 0.85 opacity on hover. This is the correct implementation — a static ambient glow on a CTA button is acceptable; a 2.4s looping pulse is not.

**Why strip icon glows:** The `iconGlow1–4` keyframes are gone. Each icon now carries a static `box-shadow` at 12px radius, 0.35–0.40 opacity (colour-matched to the icon). On hover, it scales 1.08x and intensifies. On mobile with no hover states, the icons sit with a faint ambient shadow. At this opacity and radius, the effect reads as depth rather than animation — acceptable.

**Trust stat text-shadow:** Completely removed. The `.trust-stat-number` rule has `transition: transform 0.3s ease` and nothing else. The count-up pop animation (`countPop`, 0.4s one-shot) remains — this is purposeful entry motion, not decorative loop. Correct call.

**Footer CTA border:** The `borderSpin 4s linear infinite` keyframe is gone. The footer CTA now uses a padding trick with a static `linear-gradient(135deg, var(--green-mid), var(--accent-warm))` background bleeding through a 3px gap. This achieves the same gradient-border visual without any motion. Well-executed.

**Testimonials glow:** The base `.testi-card` rule has `box-shadow: 0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)` — dark drop shadow only, no green ambient component. The green glow (`0 0 0 1px rgba(74, 124, 89, 0.25)`) now lives exclusively inside `@media (hover: hover)`. On a mobile device with no hover, cards are completely clean. This is the fix the previous audit asked for.

**Team header redesign:** The previous dark brown botanical header has been replaced with an amber-to-brown-to-green gradient layered over an Unsplash dog photo. The gradient values (`rgba(201,124,58,0.85)` → `rgba(46,36,25,0.9)` → `rgba(45,90,61,0.85)`) span the full warm/neutral/cool range of the design system in one shot. This is a more visually ambitious section opener and differentiates the team section from the previous generic dark-green pattern.

**What keeps this below 8.0:** Two residual issues that are minor but real from a buyer's perspective.

First: the hero CTA still carries an always-on `box-shadow: 0 0 18px rgba(74, 124, 89, 0.45)`. On mobile, this glow is visible at every page load — it is not animated, but it is permanent. A static glow on the primary CTA is categorically different from a looping pulse, and I am not penalising it heavily. But a premium medical template typically lets CTA buttons speak through size, contrast, and copy rather than ambient illumination. The glow at 18px radius and 45% opacity is noticeable. It nudges the button toward gaming-UI territory, even statically.

Second: the why strip icon static ambient box-shadows sit on all four icons permanently on mobile (no hover states to distinguish). The combined effect of four faintly glowing icons on a dark green background — even at 12px / 0.35 opacity — reads as an aesthetic choice borrowed from tech SaaS rather than warm neighbourhood veterinary practice. Individually each shadow is tasteful. Together, they create a visual grammar that is slightly mismatched to the category.

These are fine-tuning issues, not structural problems. The template is now clean, coherent, and well-executed. A buyer would get genuine value. It sits just below the bracket where I would say "choose this over ThemeForest" because those two persistent mobile glows remain category-mismatched. Fix them — or add one genuine differentiating design element — and this reaches 8.1–8.2.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
The amber/sand/green-pale border rhythm is consistent across all ten section transitions. The Playfair Display / Inter pairing is correct for the category. The botanical SVG motif appears in five sections without repetition. The team header redesign adds a third distinct visual register (the amber-to-green photo gradient) that strengthens the system's range. The why icon static ambient shadows are the one remaining element that sits slightly outside the brand register, but they are not egregious.

### 2. Hero (Mobile 375px) — 7.8 / 10
Up from 7.6. The looping glow is gone — this was the primary complaint. The three ambient orbs (18–26s drift cycles) remain atmospheric without being distracting. The hero image parallax at 0.3x is handled correctly. The copy is clean. The hero CTA button now carries a static glow that intensifies on hover — this is acceptable. The one remaining deduction: the static box-shadow at 18px / 45% opacity is permanent on mobile and slightly over-illuminated for the category. A tasteful shadow without the green ambient component would be cleaner.

### 3. Navigation — 7.5 / 10
Unchanged and correct. Hamburger pattern on mobile, desktop underline slide. No issues.

### 4. Why Strip — 7.5 / 10
Up from 7.0. The looping icon keyframes are fully gone. Static ambient box-shadows at 12px / 0.35–0.40 opacity on each colour-matched icon. On mobile (no hover), all four sit with permanent faint glows. The dark green background and amber-cream-blush-sky colour palette remain strong. The botanical leaf overlays are tasteful. The amber 5px borders bracket the section well. Score recovers from the looping glow penalty but the always-on static glows on mobile keep it from fully recovering to 7.8+.

### 5. About Section — 7.8 / 10
Unchanged. Paper grain texture at 3% opacity over cream is correct. Botanical watermark behind the h2 at 0.14 opacity is tasteful. The about-stat-card (dark green, floating) provides good visual contrast. The about image parallax at 22px range is imperceptible on casual scroll — atmospheric.

### 6. Services (Sticky Horizontal Scroll) — 8.0 / 10
Unchanged. This remains the template's strongest technical feature. Vertical scroll drives horizontal card pan via JavaScript rAF. The progress bar tracks correctly. The "Scroll to explore" hint is a clean affordance. Card category labels with frosted-glass chips are well-executed. The dark charcoal differentiates the section. Card width at `min(72vw, 320px)` shows approximately 1.1 cards at 375px — acceptable.

### 7. Trust Stats Strip — 7.8 / 10
Up from 7.4. The text-shadow glow is completely gone — confirmed in the CSS. The count-up pop animation (0.4s one-shot) remains and is the correct choice for this section. The grid collapses from 4-column to 2-column on mobile. The stat cards at rgba(255,255,255,0.07) with thin white borders on the dark green background are clean and legible. Full recovery from the previous glow penalty.

### 8. Team Section — 8.2 / 10
Unchanged score, improved section. The amber-to-brown-to-green gradient photo header is a more ambitious opener than the previous dark botanical. The alternating slide-in reveals (left/right, 0.65s cubic-bezier) remain the best single animation in the template. The sand gradient team card bodies with photo-informed backgrounds at 6% opacity + SVG grain at 9% show craft. The blush/rose band on Alex Torres differentiates the placeholder card. One deduction: the third team member is visibly a stock photo placeholder and the HTML comment confirms this — a buyer will notice.

### 9. Testimonials — 8.2 / 10
Up from 7.8. The always-on green ambient glow is now correctly inside `@media (hover: hover)`. On mobile, the base card has only `box-shadow: 0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)` — dark drop shadow, no green component. The cards float cleanly on the photo background. The pet photo avatars, star ratings, and "1 of 4" dot indicator are all working. This is now one of the stronger sections.

### 10. Hours and Location — 7.8 / 10
Unchanged. Dark green header card, today-highlight row with amber left-rule and "(today)" annotation. The map embed is clean. The sand panel background differentiates the section.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Past dates struck through, Fri/Sat/Sun closed, available days highlighted, today marked with amber dot. Time slot grid appears after date selection. Booking form validates client-side with per-field error messages. Confirmation state with green check circle and appointment summary. The calendar available-day glow (`0 0 8px rgba(74, 124, 89, 0.3)`) is a functional affordance and acceptable.

### 12. Sticky Call Bar — 8.0 / 10
Unchanged. Pulse removed previously and confirmed. Dual-button layout (Call + Text Us) on dark green bar. Slide-in transition clean. Correctly hidden while hero is in view.

### 13. Footer CTA Banner — 7.9 / 10
Up from 7.2. The spinning border ring is gone. The static gradient border via padding trick (`background: linear-gradient(135deg, var(--green-mid), var(--accent-warm)); padding: 3px`) achieves the gradient-border look without any motion. The dark green interior with the gradient border is visually striking without being kinetic. The copy and dual-button layout remain strong. Full recovery from the spinning ring penalty.

### 14. Footer — 7.8 / 10
Unchanged. Horizontal footer link layout, 6px amber top border, copyright at rgba(255,255,255,0.65) passing WCAG AA. Logo centered on mobile. The real email address (info@mainlinemobilevet.com) in the footer contact block remains a buyer-customisation risk — not a design flaw, but worth noting in template documentation.

### 15. Scroll Interactions and Parallax — 7.8 / 10
Unchanged. One-shot reveals, team slide-in, service-card scale entry all well-implemented with reduced-motion handling. The parallax photo breaks (dogs running / quote break) add editorial rhythm. The hero scroll bounce (2.2s ease-in-out infinite) is unambiguously acceptable as a scroll cue.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter is correct. `clamp()` sizing scales cleanly. Eyebrows consistently applied. `.section-intro` max-width at 540px prevents desktop line-length issues.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. All headings and eyebrows center-aligned. About text block has `text-align: center` on mobile. Footer logo centered. No alignment failures in code review.

---

## Top 3 Recommendations

**1. Remove or reduce the hero CTA always-on static glow.**
The hero CTA `box-shadow: 0 0 18px rgba(74, 124, 89, 0.45)` is visible at every page load on mobile. It is not animated — that is correctly fixed — but the 18px radius at 45% opacity is permanent and slightly over-illuminated for a veterinary category. Options: reduce to `0 0 10px rgba(74, 124, 89, 0.25)` to keep atmospheric depth, or remove entirely and rely only on the hover state to signal interactivity. Either change recovers the Hero section to 8.0 and pushes overall score toward 8.0.

**2. Remove the always-on static box-shadows from why strip icons on mobile.**
The four icon ambient glows (`0 0 12px`, 0.35–0.40 opacity) are permanently visible on mobile where no hover states exist. Wrap the static ambient glows in `@media (hover: hover)` alongside the hover intensification, so on mobile the icons are clean and the glow only appears as hover feedback on desktop. This is a one-line CSS change per icon. It recovers the Why Strip section to 7.8 and reinforces the design system's brand register.

**3. Document the three buyer-customisation risks in a template README.**
The real email address in the footer (info@mainlinemobilevet.com), the Alex Torres placeholder card (confirmed by HTML comment), and the Unsplash photo credit requirements are all customisation steps a buyer must complete before launching. A short README listing these three items with the relevant line numbers would reduce buyer friction and increase perceived template quality. This has no design impact but directly affects commercial value as a template product.

---

## Summary Scorecard

| Section | v15 Score | v16 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 7.8 | 8.0 | +0.2 |
| Hero (Mobile 375px) | 7.6 | 7.8 | +0.2 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.0 | 7.5 | +0.5 |
| About Section | 7.8 | 7.8 | 0 |
| Services (Sticky Horizontal Scroll) | 8.0 | 8.0 | 0 |
| Trust Stats Strip | 7.4 | 7.8 | +0.4 |
| Team Section | 8.2 | 8.2 | 0 |
| Testimonials | 7.8 | 8.2 | +0.4 |
| Hours and Location | 7.8 | 7.8 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 8.0 | 8.0 | 0 |
| Footer CTA Banner | 7.2 | 7.9 | +0.7 |
| Footer | 7.8 | 7.8 | 0 |
| Scroll Interactions and Parallax | 7.8 | 7.8 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **7.6** | **7.9** | **+0.3** |

The animation remediation pass is genuine and thorough. All four issues flagged in the 7.6 audit are confirmed fixed in the CSS: looping hero CTA glow gone, looping icon glows gone, trust stat text-shadow gone, testimonial always-on glow corrected to hover:hover, footer spinning border replaced with static gradient. The team header redesign adds visual range. The score recovers from 7.6 to 7.9. The two remaining mobile glow issues (hero CTA static glow, why icon static ambient shadows) and the team placeholder card are the blockers between 7.9 and 8.1.
