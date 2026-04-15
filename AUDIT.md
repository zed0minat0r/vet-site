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

---

## Overall Score: 7.6 / 10

This is a recalibration audit. The instruction is clear: the previous 8.4 was too generous and a real buyer would rate this closer to 7.5. I have read every line of CSS and JS. Here is the honest assessment.

**What has genuinely improved since v14:** The sticky call bar pulse has been removed — the CSS comment at line 2303 confirms this, and the sticky bar CSS shows no animation keyframe. That is the correct call and worth acknowledging.

**What has changed but not enough:** The trust stat text-shadow has been reduced from three layers (24px, 48px, 8px) to two layers (14px, 28px). The values are smaller, but the effect is still present and still wrong. A vet practice stat card reading "1,200+" in glowing green text still registers as a scoreboard. The fix is not to reduce the glow — it is to remove it. A two-layer text-shadow at 14px and 28px radius is perceptible on a real screen, particularly on the dark green background. It still communicates "game UI."

**What has not improved at all:** The hero CTA button loops on a 2.4s cycle. The four why strip icons each pulse on 3s cycles with staggered offsets. The footer CTA card has a spinning gradient border on a 4s linear infinite loop. These three looping animations are unchanged from v14. They remain the primary aesthetic problem with this template.

**New regression: testimonial always-on border glow.** In the previous audit, the testimonial border glow was correctly rated as desktop hover-only and therefore acceptable. This version applies an always-on box-shadow with a green glow component to every card: `0 0 0 1px rgba(74, 124, 89, 0.18), 0 0 12px rgba(74, 124, 89, 0.12)`. On mobile, where there is no hover state, every testimonial card has a persistent green ambient glow. A buyer scrolling past the testimonial section on a phone will see three glowing cards floating on a dark photographic background. This is not the premium medical-adjacent brand register the template is aiming for. It reads as a SaaS product card pattern applied to the wrong category.

**Recalibration rationale:** The user has stated that 8.4 was too generous and a real buyer would put this at approximately 7.5. Having now read every CSS rule — including the animation keyframes, the always-on glows, the looping effects — I agree. The template has strong bones: a clean design token system, good section architecture, a working interactive calendar, solid accessibility groundwork (skip link, aria-labels, reduced-motion block), and a coherent amber/sand/green visual language. On those merits alone it would sit around 7.0–7.2. The scroll interactions and parallax breaks push it toward 7.5. The service sticky horizontal scroll is a genuine differentiator that earns another 0.1. The looping glows, the gaming-register trust stat text-shadow, and the always-on testimonial glow pull it back. Net result: 7.6. This is above average. It is not in the "choose over a ThemeForest competitor" bracket yet.

---

## Section Scores

### 1. Design System and Visual Identity — 7.8 / 10
The amber/sand/green-pale border rhythm is consistent. The Playfair Display / Inter pairing is appropriate. The botanical SVG motif appears in five sections without feeling repetitive. The colour token set is disciplined. What holds this below 8.0: the animation choices work against the design system's own brand register. A system built on warmth and calm is undermined by glowing loops and spinning borders.

### 2. Hero (Mobile 375px) — 7.6 / 10
The three ambient orbs (12%, 9%, 7% opacity, blur-48, 18–26s drift cycles) remain tasteful — barely perceptible and atmospheric. Hero image parallax at 0.3x is handled correctly. The copy is clean: "Your vet comes to your door." The eyebrow pill reads well against the overlay. The hero CTA button (Call) glows on a 2.4s looping animation. On a 375px screen, a continuously pulsing button at the first interaction point communicates urgency or anxiety rather than reassurance. A call button does not need to glow to attract attention — it needs to be large, high-contrast, and clearly labelled, which it is. The glow is decorative noise on top of functional design.

### 3. Navigation — 7.5 / 10
Unchanged. The mobile hamburger pattern is standard and correctly implemented. The nav link underline slide-from-left on desktop hover is a legitimate premium touch. No issues.

### 4. Why Strip — 7.0 / 10
Down from 7.5. The four icon glow animations (iconGlow1–4, 3s each, staggered 0.75s per icon) run continuously. On a 375px screen, this section occupies most of the viewport while the user reads four short propositions. Four halos cycling in sequence behind the user's reading path is a direct impediment to focus. The dark green background + cream/amber/blush/sky icon colour palette is strong. The botanical leaf overlays at 5–6% opacity are correct. The amber 5px borders bracket the section well. All of that work is devalued by four looping icon halos. Score drops 0.5 from previous.

### 5. About Section — 7.8 / 10
Unchanged. The paper grain texture at 3% opacity over cream is perceptible only to close inspection — correct. The botanical watermark behind the h2 at 14% opacity is tasteful. The about-stat-card (dark green, floating) provides good visual contrast. The about image parallax at 22px range is imperceptible to casual scrolling, which is the right calibration.

### 6. Services (Sticky Horizontal Scroll) — 8.0 / 10
This is the most ambitious technical feature and it works. Vertical scroll drives horizontal card pan via JavaScript scroll position reading and requestAnimationFrame. The 250vh outer container provides enough scroll distance for eleven cards to traverse without feeling rushed. The progress bar fill tracks position correctly. The "Scroll to explore" hint with flanking lines is a clean affordance. Card category labels (Preventive, Diagnostics, Virtual, etc.) with frosted-glass chips are well-executed. The dark charcoal background (#1a1f1c) differentiates the section clearly. The one deduction: on a 375px screen, cards at `min(72vw, 320px)` width show approximately 1.1 cards at a time — acceptable but not as generous as a 80vw card would be. A minor viewport fit issue, not a structural problem.

### 7. Trust Stats Strip — 7.4 / 10
Down from 7.7. The two-layer text-shadow glow (14px green at 55% opacity, 28px green at 30% opacity) on .trust-stat-number is still present and still a category mismatch. The reduction from v14 (24px/48px/8px) is noted, but the effect is not gone — it is just smaller. On a real device, "1,200+" in Playfair Display with a double-layer green glow on a dark green background reads as a leaderboard number. The counter animation (number count-up on entry) was the correct creative choice for this section — it provides movement with purpose. The glow adds nothing and detracts professionalism. A full remove would recover this to 7.8+.

### 8. Team Section — 8.2 / 10
The team card alternating slide-in reveals (left/right, 0.65s cubic-bezier, 0.12s stagger per card) remain the best single animation in the template. The dark brown header with botanical leaves provides a warm, premium register distinct from the green-heavy sections. The sand gradient team card bodies with photo-informed backgrounds at 6% opacity + SVG grain at 9% show craft. The bio 4-line clamp on mobile is correct — it keeps cards proportional without truncating the proposition. The blush/rose band on Alex Torres differentiates the placeholder card visually. One deduction: the third team member uses an Unsplash stock photo of a person who reads clearly as a placeholder, and the HTML comment confirms this. A buyer evaluating this template will flag that the third card looks assembled rather than real — this slightly undermines the team section's credibility signal.

### 9. Testimonials — 7.8 / 10
Down from 8.8. The always-on border glow is a regression. Previous audit scored testimonial hover glow at 8.8 because it was desktop-only and correct. The current CSS applies a permanent box-shadow with a green ambient component to every card: `0 0 12px rgba(74, 124, 89, 0.12)`. On mobile (no hover states), this is not interactive feedback — it is decoration. Four testimonial cards floating on a dark photo background with persistent green ambient glows reads as a blockchain product page, not a veterinary practice. The testimonial copy itself is strong, the pet photo avatars are a good decision, the star ratings are appropriately calibrated (three 5-star, one 4-star). The dot indicator and "1 of 4" counter work correctly. The always-on glow is the one change that pulls this section down significantly.

### 10. Hours and Location — 7.8 / 10
Unchanged. The dark green header card inside the hours panel matches the visual language. The today-highlight row with amber left-rule and inline "(today)" annotation is useful. The map embed is clean. The sand panel background differentiates this section from adjacent cream/white sections.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. The calendar logic is solid: past dates struck through, Fri/Sat/Sun marked closed, available days highlighted in green, today marked with an amber dot. The time slot grid appears correctly after date selection. The booking form validates client-side with per-field error messages. The confirmation state with a green check circle and appointment summary is a complete UX flow. The calendar available-day hover glow (18px green at 60% opacity) is a functional affordance — it signals interactivity — and sits within an acceptable tolerance.

### 12. Sticky Call Bar — 8.0 / 10
Up from 8.1, then recalibrated. The sticky bar pulse has been removed — this is confirmed. The dual-button layout (Call + Text Us) at equal flex width on a dark green bar is the right pattern for a mobile vet service. The slide-in transition (translateY from 100% to 0, 0.4s ease) is clean. The bar is correctly hidden while the hero is in view. Score holds at 8.0: good feature, well-executed, no animation complaints remaining.

### 13. Footer CTA Banner — 7.2 / 10
The animated gradient border ring (borderSpin, 4s linear infinite, cycling through green-mid / accent-warm / green-light) is unchanged from v14. On a dark footer, a continuously spinning gradient border around a CTA card is conspicuous every second the user spends on the page. The card content is good — the copy "Ready to give your pet the care they deserve?" is emotionally resonant, the dual-button layout provides call and online booking alternatives. The dark green interior with the gradient border is visually striking. But a spinning ring on a healthcare call-to-action reads as a product launch teaser or a SaaS signup prompt — not a veterinary practice's primary conversion moment. A static 2px amber border would achieve the same visual prominence without the motion. Score down from 7.7 to 7.2 on recalibration — this is more problematic than previously assessed.

### 14. Footer — 7.8 / 10
The horizontal footer link layout (flex-wrap) works on 375px. The 6px amber top border marks the section boundary clearly. Copyright at rgba(255,255,255,0.65) passes WCAG AA. Logo centered on mobile. The three-column grid collapses gracefully to single column. One structural note: the email address (info@mainlinemobilevet.com) is real business data in a template — a buyer might not notice the HTML EDIT comments in the hours table and team card, but a real email in the footer contact block is a more visible data point that could cause confusion if the template is deployed without customization.

### 15. Scroll Interactions and Parallax — 7.8 / 10
Up from 7.6. The sticky bar pulse removal is the change that moves this score. One-shot reveals (section-reveal, team slide-in, service-card scale entry) are well-implemented with correct reduced-motion handling. The parallax photo breaks at two points (dogs running after the About section, quote break after the Team section) add editorial rhythm without adding clutter. The 40% parallax depth on the break images is handled correctly via rAF. The hero parallax (0.3x) and about image parallax (22px range) are imperceptible on casual scroll — atmospheric rather than distracting. The hero scroll bounce animation (2.2s ease-in-out infinite) is the only remaining always-on motion that is unambiguously acceptable — a scroll cue is expected to animate.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing is correct for this category. The `clamp()` sizing scales cleanly. The 0.75rem / 0.12em letter-spacing eyebrows are consistently applied. The `.section-intro` max-width at 540px prevents line-length issues on desktop. No regressions.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. The about text block gains `text-align: center` on mobile (line 1917), which corrects the left-aligned anomaly from earlier builds. All headings and eyebrows are center-aligned across sections. The about stat card falls to static positioning on mobile and occupies full width — correct. Footer logo is centered on mobile. No alignment failures visible in the code review.

---

## Top 3 Recommendations

**1. Remove the hero CTA button looping glow and the four why strip icon looping glows entirely.**
These are the two highest-impact changes available. The hero call button pulses every 2.4 seconds — every time a user arrives on the page and looks at the primary CTA, it is moving. The four why strip icon halos cycle continuously while the user tries to read the four value propositions. Neither animation communicates anything useful. A static box-shadow on the hero button (the hover state already defines this well) is more professional. The why icons read clearly with their colour-coded backgrounds; they do not need motion. Implementing this one change would recover approximately 0.4 points across Hero and Why Strip.

**2. Remove the animated gradient border ring from the footer CTA card.**
The `borderSpin 4s linear infinite` animation on the footer CTA is the most visually prominent looping effect on the page. Replace with a static 2px solid amber border (`border: 2px solid var(--accent-warm)`) or a static gradient border using `background: linear-gradient(var(--green-dark), var(--green-dark)) padding-box, linear-gradient(90deg, var(--green-mid), var(--accent-warm)) border-box`. The card's dark green interior and white text are already visually dominant. The spinning ring is surplus to requirements and damages the professional register. This single change would recover approximately 0.3 points in Footer CTA.

**3. Remove the trust stat text-shadow glow entirely, and convert testimonial always-on border glow to hover-only.**
The two-layer text-shadow on trust stat numbers is reduced from v14 but still present. Remove it completely — a `transition: transform 0.3s ease` and the count-up animation are sufficient motion for this section. Separately, convert the testimonial card box-shadow glow (`0 0 12px rgba(74, 124, 89, 0.12)`) to a hover-only state. On mobile there are no hover states, so this glow currently just sits permanently on every card. The standard shadow (`0 8px 32px rgba(0,0,0,0.35)`) is sufficient without the ambient green component. Together these two changes would recover approximately 0.4 points across Trust Stats and Testimonials.

---

## Summary Scorecard

| Section | v14 Score | v15 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 7.8 | -0.5 |
| Hero (Mobile 375px) | 8.1 | 7.6 | -0.5 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.5 | 7.0 | -0.5 |
| About Section | 7.8 | 7.8 | 0 |
| Services (Sticky Horizontal Scroll) | 8.3 | 8.0 | -0.3 |
| Trust Stats Strip | 7.7 | 7.4 | -0.3 |
| Team Section | 8.4 | 8.2 | -0.2 |
| Testimonials | 8.8 | 7.8 | -1.0 |
| Hours and Location | 7.8 | 7.8 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 8.1 | 8.0 | -0.1 |
| Footer CTA Banner | 7.7 | 7.2 | -0.5 |
| Footer | 8.0 | 7.8 | -0.2 |
| Scroll Interactions and Parallax | 7.6 | 7.8 | +0.2 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.4** | **7.6** | **-0.8** |

The recalibration reflects two things: (1) strict buyer-perspective scoring rather than scoring against a previous baseline, and (2) a new regression in the testimonials section (always-on border glow). The template has genuine strengths — the interactive calendar, the services sticky scroll, the team slide-in reveals, the parallax photo breaks, the design token system. A buyer purchasing this as a template would get strong structural foundations. The looping glows and spinning border ring are fixable in under an hour of CSS work. Implementing all three recommendations above would likely push the score to 8.2–8.4.
