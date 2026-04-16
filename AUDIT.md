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
| 2026-04-09 | 8.1 | +0.2 | Hero CTA glow moved inside @media (hover: hover) — mobile completely clean; why strip icon glows moved inside @media (hover: hover) — mobile icons clean; second parallax break added between team and testimonials; active nav link tracking via IntersectionObserver + aria-current; trust strip text-align:center confirmed; README written covering all three buyer customisation risks; duplicate images verified (21 unique Unsplash photo IDs). |

---

## Overall Score: 8.1 / 10

This is the most substantive improvement pass since the 7.9 audit. Two of the three Top Priorities from the previous audit have been fully executed. The result is a materially cleaner mobile experience and a more commercially credible template product.

**What changed and why it matters from a buyer's perspective:**

Hero CTA glow is now inside `@media (hover: hover)`. On a real mobile device — which is how a prospective vet practice owner will first view a demo — the primary CTA button is now a clean, well-contrasted button with no ambient illumination. The glow appears on desktop hover only. This was the single item most likely to make a buyer think "this looks like a gaming template." It is now gone on mobile. Score implication: Hero section recovers.

Why strip icon glows are inside `@media (hover: hover)`. The four icons on the dark green background are now plain on mobile — no looping animation, no permanent ambient glow. The colour-matched shadows only appear on desktop when a cursor is present. Mobile users see four clean icons on a dark green ground. This was the second priority from the previous audit. Fully executed.

Second parallax break is a genuine addition. The break between the team section and testimonials (cats-in-basket image, `photo-1444212477490-ca407925329e`) adds a second editorial pause and creates a breathing moment between two content-dense sections. The quote copy — "Care that feels like home — because it is." — is well-matched to the section it precedes. This is additive without being cluttered.

Active nav link tracking is correct in its implementation. IntersectionObserver fires on each section, the matching nav link receives `aria-current="true"`, and the CSS applies a green-pale background on desktop and a green-dark colour on mobile open-nav. The mobile styling is less visually distinctive than the desktop version (colour only, no background chip), but it is functional and accessible.

README is the right call for a template product. Three buyer risks documented with file and line references: footer email, Alex Torres placeholder, Unsplash attribution. A buyer who purchases this template and opens the source code finds immediate, clear guidance. This directly increases perceived quality at point of sale.

**What keeps this below 8.5:** One genuine residual issue and one structural ceiling.

The residual issue is the Alex Torres placeholder card. It remains in the template with two HTML comment flags and an Unsplash stock photo of a person who does not match the name. A buyer purchasing this template must remove or replace this card before launching. The card is visible in the live demo and will raise questions from any practice owner who notices that "Alex Torres" has a stock-photo face and no real credentials beyond generic badge labels. This is documented in the README, which is the correct mitigation — but the card itself represents a trust gap in the demo that does not exist in the other two team members (who use actual photographs from the real business's website). This is a template-product concern, not a design concern.

The structural ceiling is that this template is now at the point where incremental section improvements return diminishing score gains. The design system is coherent, the animation restraint is correct, the content hierarchy is logical, and the technical implementation is clean. To move from 8.1 to 8.3 or higher would require a genuinely differentiating design decision — not another fix of an existing element. The services sticky horizontal scroll remains the template's strongest single feature and is the primary reason a buyer would choose this over a ThemeForest alternative. Everything else is now polished to a level commensurate with that feature.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
Unchanged from previous audit. Amber/sand/green-pale border rhythm across all ten section transitions. Playfair Display / Inter pairing is correct for the category. Botanical SVG motif in five sections without repetition. Team header amber-to-green gradient photo background remains the highest-craft element. No regressions.

### 2. Hero (Mobile 375px) — 8.0 / 10
Up from 7.8. The hero CTA glow is now inside `@media (hover: hover)`. On mobile, the `.btn-primary` button in the hero actions carries no box-shadow. On desktop with a cursor, the ambient glow (16px / 40% opacity) appears and intensifies to 44px / 85% on hover. This is the correct implementation. The hero orbs (three, 18–26s drift), the WebP/JPEG picture element, and the scroll bounce cue are all unchanged and appropriate. Section recovers the 0.2 deduction from the previous audit.

### 3. Navigation — 7.8 / 10
Up from 7.5. The IntersectionObserver active-link tracking is a genuine improvement — both functionally and as a signal to buyers inspecting source code. On desktop, `aria-current="true"` links receive a green-pale background chip and an underline, providing clear visual confirmation of scroll position. On mobile (open nav overlay), the active link receives `color: var(--green-dark)` but no background chip — a minor missed opportunity, as the mobile nav is a full-screen overlay with room for a background chip without crowding. The ARIA implementation is correct and accessible. A small gain.

### 4. Why Strip — 7.8 / 10
Up from 7.5. The icon glows are now inside `@media (hover: hover)`. On mobile, the four icons sit clean on the dark green background with no box-shadow. On desktop, each icon carries a colour-matched 12px ambient shadow and scales 1.08x on hover. This is the correct separation of desktop interaction feedback from mobile presentation. The section eyebrow, heading, and body copy remain clean. The botanical SVG overlays are tasteful. Full recovery from the mobile glow penalty.

### 5. About Section — 7.8 / 10
Unchanged. Paper grain texture at 3% over cream is correct. Botanical watermark behind h2 at 0.14 opacity is tasteful. The about-stat-card provides good visual contrast. No regressions.

### 6. Services (Sticky Horizontal Scroll) — 8.0 / 10
Unchanged. The template's strongest technical feature. Vertical scroll driving horizontal card pan via JavaScript rAF. Progress bar tracks correctly. Category chips on service cards are well-executed. Card width at `min(72vw, 320px)` shows approximately 1.1 cards at 375px, creating appropriate discovery affordance.

### 7. Trust Stats Strip — 7.8 / 10
Unchanged. The section has `text-align: center` on the parent and `text-align: center` on the h2. The introductory paragraph has `margin: 0 auto 48px` confirming centred layout. Count-up pop animation (0.4s one-shot) remains as the correct purposeful entry motion. No ambient glow text-shadow. Clean.

### 8. Team Section — 8.0 / 10
Down from 8.2. The section itself is unchanged — the amber-to-brown-to-green gradient photo header, the alternating slide-in reveals, the sand card bodies with grain texture are all as before. The deduction is for the Alex Torres placeholder card, which was previously noted and is now more visible as a product concern following the README's explicit acknowledgement of it. A buyer viewing the live demo who reads the source code finds two HTML comment flags telling them this card is a placeholder — this is correct documentation, but it confirms that the template's team section is not fully demo-ready. The card is visually plausible but the name-photo mismatch (no real Alex Torres exists at this practice) creates a trust gap that does not exist with the other two team members.

### 9. Testimonials — 8.2 / 10
Unchanged. The always-on green ambient glow is correctly inside `@media (hover: hover)`. Pet photo avatars, star ratings, and dot indicator are all working. One of the stronger sections.

### 10. Hours and Location — 7.8 / 10
Unchanged. Dark green header card, today-highlight row with amber left-rule. Map embed clean. No regressions.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Past dates struck through, Fri/Sat/Sun closed, available-day glow (`0 0 8px rgba(74, 124, 89, 0.3)`) is a functional affordance. Confirmation state with green check circle. Client-side form validation with per-field error messages.

### 12. Sticky Call Bar — 8.0 / 10
Unchanged. Dual-button layout (Call + Text Us). Slide-in clean. Pulse removed previously and confirmed absent.

### 13. Footer CTA Banner — 7.9 / 10
Unchanged. Static gradient border via padding trick. Dark green interior with gradient border achieves the visual without motion.

### 14. Footer — 7.8 / 10
Unchanged. Horizontal footer link layout, 6px amber top border, copyright at rgba(255,255,255,0.65). The real email address in the footer is now documented in the README with the relevant line number — this is the correct mitigation for a template product.

### 15. Scroll Interactions and Parallax — 8.0 / 10
Up from 7.8. The second parallax break (between team and testimonials, cats photo, quote "Care that feels like home — because it is.") adds editorial rhythm without clutter. Both breaks share identical CSS — a clean implementation. The hero scroll bounce, one-shot section reveals, and team card directional slide-ins are unchanged. A genuine improvement.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter is correct. `clamp()` sizing scales cleanly.

### 17. Mobile Layout and Centre Alignment — 7.9 / 10
Up from 7.8. The hero CTA glow removal on mobile eliminates the most visually jarring element at 375px. Trust strip `text-align: center` confirmed on the parent element (all children inherit). No alignment failures in code review. Minor gain.

### 18. Template Buyer Readiness — 8.0 / 10
New section. The README.md addresses all three buyer customisation risks with specific file and line references. The HTML comments on the Alex Torres placeholder card provide in-source guidance. The Unsplash photo IDs are unique (21 confirmed, no duplicates). The section boundary borders, WCAG AA colour contrast, and reduced-motion handling make this a template a buyer can hand to a developer without a QA backlog. The one deduction is the placeholder team card which requires buyer action before a credible live demo is possible.

---

## Top 3 Recommendations

**1. Replace or remove the Alex Torres placeholder card before marketing the template.**
The third team member card is the only element in the live demo that a discerning buyer will immediately identify as fabricated. The HTML comment flags confirm it is a placeholder, but the fix needs to happen at the demo level, not just the documentation level. Options: use a generic "Your Team Member Here" silhouette card with an explicit visual placeholder state (grey image, dashed border, italic placeholder text), or simply remove the card to a two-member layout. A two-member team section is more common in small mobile vet practices and would be more realistic as a default. This is the highest-priority commercial improvement remaining.

**2. Add a mobile active-nav background chip to the full-screen overlay.**
The desktop nav correctly applies `background: var(--green-pale)` to the active link. On mobile, the full-screen overlay nav shows only `color: var(--green-dark)` for the active link — no background chip. Given that the mobile nav is a full-screen overlay with 52px tap targets and a `max-width: 280px` constraint, there is room to add the same `background: var(--green-pale); border-radius: var(--radius-sm)` treatment. This is a four-line CSS addition and would make the active state consistent across viewports — a detail that buyers inspecting source code will notice and appreciate.

**3. Consider a pricing or feature-comparison block as the final template section.**
The template is now at a design quality level where the limiting factor for a buyer's purchase decision is confidence in what they are getting. A single static "What's included" section (semantic HTML, no JavaScript, no images) listing key features — sticky horizontal services scroll, interactive calendar, team section, responsive navigation, WCAG AA, no-build-step — would serve as both a template demonstration and a sales argument. This is a template-product strategy recommendation, not a design fix, and would push the Template Buyer Readiness score to 8.5+.

---

## Summary Scorecard

| Section | v16 Score | v17 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.0 | 8.0 | 0 |
| Hero (Mobile 375px) | 7.8 | 8.0 | +0.2 |
| Navigation | 7.5 | 7.8 | +0.3 |
| Why Strip | 7.5 | 7.8 | +0.3 |
| About Section | 7.8 | 7.8 | 0 |
| Services (Sticky Horizontal Scroll) | 8.0 | 8.0 | 0 |
| Trust Stats Strip | 7.8 | 7.8 | 0 |
| Team Section | 8.2 | 8.0 | -0.2 |
| Testimonials | 8.2 | 8.2 | 0 |
| Hours and Location | 7.8 | 7.8 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 8.0 | 8.0 | 0 |
| Footer CTA Banner | 7.9 | 7.9 | 0 |
| Footer | 7.8 | 7.8 | 0 |
| Scroll Interactions and Parallax | 7.8 | 8.0 | +0.2 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.9 | +0.1 |
| Template Buyer Readiness | — | 8.0 | new |
| **Overall** | **7.9** | **8.1** | **+0.2** |

The two mobile glow fixes — hero CTA and why strip icons both moved inside `@media (hover: hover)` — are the substantive gains here. Both were explicitly flagged as the primary blockers to 8.0 in the previous audit. They are correctly implemented. The second parallax break and active nav tracking are solid additions. The README is the right call for a template product. The template now sits clearly above the "better than most" threshold and at the lower end of the "choose over competitors" band. A buyer comparing this to ThemeForest alternatives at the same price point would find this competitive on mobile UX and superior on the services scroll feature.
