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
| 2026-04-09 (this audit) | 7.6 | +0.2 | Testimonials full-bleed photo background + floating card shadows, footer CTA inline style moved to CSS, services dot indicator + "1 of 11" live counter, team dark-green botanical banner, trust stat counter animation, services stagger-reveal, hero sub-copy trimmed, testimonials border-top separation, broken puppy image fixed |

---

## Overall Score: 7.6 / 10

This is a meaningful step. The v5 changes address three of my top three recommendations from the v4 audit, which is disciplined execution. The testimonials section now has a genuine visual break — a full-bleed Unsplash pet photograph with a dark gradient overlay and floating cream cards with deep box-shadow. That is the "moment of surprise in the scroll" I said the template lacked. It reads as designed, not configured. The dot indicator and live counter for the services carousel resolve the discoverability problem I flagged. The footer CTA inline style has been moved to a CSS class, which is a craft detail a buyer inspecting the source will notice positively.

However, the delta is +0.2, not more. The core structural character of the template has not changed: cream sections and green sections alternating in a predictable rhythm. The testimonials intervention is the only new visual territory. Several sections that have sat at 7.0–7.5 since the first audit remain unchanged. The team section's dark green banner with botanical SVG leaf is a correct addition but the leaf is 12% opacity and 64px — it reads as an afterthought, not a motif. The trust stat counter animation (translateY + opacity on entry) is tasteful but brief, contributing less than the code investment suggests.

The template now earns 7.6 as a well-executed premium mid-tier template. A buyer will look at the testimonials section and feel a quality signal absent in the earlier versions. The calendar and services catalogue remain the strongest commercial differentiators. The ceiling to 8.0 is now clearly visible: it requires two or three additional sections reaching the quality of the testimonials intervention — photography or texture used as a deliberate design material rather than Unsplash card backgrounds.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
Unchanged. The Playfair Display / Inter pairing, green/cream/amber/sand token system, and section rhythm are coherent and consistent. The testimonials photo background widens the material vocabulary slightly but does not constitute a new design system addition. The system remains capable of delivering 8.5 if a second photograph-as-section-background intervention is introduced — the trust strip or the about section are candidates. No regression.

### 2. Hero (Mobile 375px) — 7.3 / 10
The sub-paragraph ("Dr. Sarah Overhiser brings compassionate, stress-free veterinary care directly to your home.") is marginally shorter than before. On mobile at 375px it remains a single comfortable line. Score nudges from 7.2 to 7.3. The structural improvement is real but incremental. The Unsplash happy-dogs image is used across several commercial vet templates. The hero otherwise continues performing correctly: eyebrow pill, tight h1, sub-paragraph, two CTAs. No regression.

### 3. Navigation — 7.5 / 10
Unchanged. Hamburger-to-X transition correct, overlay clean, tap targets 52px, sticky header minimal. No regression.

### 4. Why Strip — 7.0 / 10
Unchanged. Four colour-differentiated icons in 2x2 grid on sand. The icon library (Heroicons) remains identifiable. The sand background is near-indistinct from cream without a hard rule. No regression, no improvement.

### 5. About Section — 7.5 / 10
Unchanged. The stat card renders correctly on mobile as a static full-width card. About-text centered on mobile. The floating-card desktop premium detail is preserved. No regression.

### 6. Services — 8.2 / 10
The stagger-reveal on scroll is implemented correctly: eleven service-card children each with an incrementing transition-delay from 0.04s to 0.52s. On mobile this effect is invisible — the cards are in a horizontal scroll container and the reveal fires on the grid element, not individual cards entering view. On desktop (3- and 4-column grid) the stagger is visible and tasteful. The dot indicator and live "1 of 11" counter are a genuine UX improvement: the amber active pill (width 18px vs 6px for inactive) reads clearly against the dark section background, and the counter updates correctly on scroll via requestAnimationFrame. Score moves from 8.0 to 8.2. This section is now the clearest mobile UX win on the page. Remaining ceiling: eleven dots on 11 cards is visually noisy at small sizes — a condensed pip representation (5 dots for current + neighbours) would be cleaner.

### 7. Trust Stats Strip — 7.7 / 10
The counter animation is implemented with a 1,200ms ease-out-quad ramp, prefers-reduced-motion respected, IntersectionObserver at 0.5 threshold. The "2015" counter counts from 0 to 2015 which reads awkwardly — a founding year is not a quantity, it should be static or count from ~2010. The "1,200+" counter works well. The "5★" and "11" counters are brief and correct. The countPop CSS animation (translateY 8px to 0, opacity 0.5 to 1) supplements the JS counter with a visual entry. Score moves from 7.5 to 7.7. The awkward "2015" counter is a minor craft issue that a demo viewer will notice.

### 8. Team Section — 7.2 / 10
The dark green banner header with botanical leaf SVG is an improvement over the plain sand background approach. The leaf SVG is a genuine original element — four strokes creating a leaf with vein detail, not a third-party icon. At 12% opacity it is decorative without competing with the text. The section eyebrow and h2 are correctly white on dark green. Score moves from 7.0 to 7.2. Remaining ceiling: the leaf at 64px and 0.12 opacity is too subtle. At 375px the banner is approximately 160px tall — the leaf occupies 40% of that height but is nearly invisible. Either increase opacity to 0.2–0.25 or scale to 96px. The team cards themselves are still visually quiet — white card on sand, no photographic or textural treatment.

### 9. Testimonials — 8.0 / 10
This is the most meaningful visual upgrade in v5. The section now has a full-bleed background: a dark gradient overlay (160deg, rgba 0.82/0.72/0.78) on an Unsplash pet photograph (photo-1507146153580, a golden retriever on a wooden deck). The cream and warm-pale cards float on top with a deep box-shadow (0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2)). The border-top: 1px solid on each testi-footer creates a visual separation between quote text and attribution — a correct typographic detail. Score moves from 7.5 to 8.0. This is now the strongest non-interactive section on the page. Remaining ceiling: the letter-initial avatars remain generic. Four photo testimonials with real names and initials is a template placeholder — a buyer will understand this, but it prevents the section from feeling authentic.

### 10. Hours and Location — 7.0 / 10
Unchanged. Hours panel, map embed, today-row highlight. No regression, no improvement.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Contact info sidebar hidden on mobile. Form breakpoint at 480px. Calendar remains the clearest commercial differentiator on the page. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. Transform + opacity transition, 44px tap target, correct z-index. No regression.

### 13. Footer CTA Banner — 8.0 / 10
The inline style that was on the Book Online button (`style="border-color:#fff;color:#fff;"`) has been moved to CSS: `.footer-cta-actions .footer-cta-outline { border-color: #fff; color: #fff; }`. A buyer inspecting source will see clean HTML with no inline style leak. Score moves from 7.5 to 8.0. The banner itself is unchanged — full-width gradient, two CTAs, correct inverted button treatment. It is now a craft-clean section.

### 14. Footer — 7.0 / 10
Unchanged. Three-column collapse to single column on mobile. Brand column, navigate column, reach-us column with social links. Dark brown terminus. Footer grid text-align center on mobile is correct. No regression.

### 15. Scroll Interactions and Animations — 7.7 / 10
Three animation systems are now present: (1) parallax on hero image (translateY at 0.3x scroll, prefers-reduced-motion respected), (2) scroll-reveal with staggered children on why-items, trust-stats, team-cards, service-cards, (3) trust stat JS counter animation on IntersectionObserver entry, (4) scroll progress bar. The stagger delays on service-cards run from 0.04s to 0.52s — this is half a second of cascading reveals on desktop, which is on the edge of "too long." Score moves from 7.5 to 7.7. The system is now richer than most commercial templates in this segment. Remaining ceiling: the parallax is rAF-throttled correctly, but on low-end Android devices the hero image may lag. This is an acceptable trade.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing applied consistently via CSS variables. Heading scale via clamp(). No regression.

### 17. Mobile Layout and Centre Alignment — 7.5 / 10
Unchanged. All section headings centered. About text centered. Stat card centered on mobile. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Fix the "2015" trust stat counter**
The JS counter animates from 0 to 2015 on scroll. A founding year is not a quantity — counting to 2015 in 1,200ms looks broken, not impressive. Either exclude it from the counter animation (add a `data-no-counter` attribute and check before observing) or have it count from a reasonable start value (e.g. 2013). This is a 10-minute fix with disproportionate impact on demo credibility.

**2. Expand the botanical leaf motif in the team header**
The leaf SVG is a genuinely original element and the right instinct. At 12% opacity and 64px it is decorative but imperceptible on a phone. Increase to 0.22 opacity and 96px (or add a second leaf mirrored in the bottom-left at 0.08 opacity) to make the motif read. If the botanical theme were also used as a watermark behind the trust strip heading, this template would have a distinctive visual device. As currently implemented, the leaf is invisible to most users.

**3. Services dot indicator: condense to 5-dot window**
Eleven dots in a row is wide and visually noisy on 375px. The current implementation wraps via `flex-wrap: wrap` and `justify-content: center`, which produces a two-row dot grid if 11 dots overflow — untidy. A standard carousel pattern is to show only a 5-dot window (2 before, active, 2 after) that slides as the user scrolls. This is ~20 lines of JS and makes the indicator read as a deliberate UI pattern rather than a list of 11 dots.

---

## Summary Scorecard

| Section | v4 Score | v5 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.0 | 8.0 | 0 |
| Hero (Mobile 375px) | 7.2 | 7.3 | +0.1 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.0 | 7.0 | 0 |
| About Section | 7.5 | 7.5 | 0 |
| Services | 8.0 | 8.2 | +0.2 |
| Trust Stats Strip | 7.5 | 7.7 | +0.2 |
| Team Section | 7.0 | 7.2 | +0.2 |
| Testimonials | 7.5 | 8.0 | +0.5 |
| Hours and Location | 7.0 | 7.0 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 7.5 | 8.0 | +0.5 |
| Footer | 7.0 | 7.0 | 0 |
| Scroll Interactions and Animations | 7.5 | 7.7 | +0.2 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.5 | 7.5 | 0 |
| **Overall** | **7.4** | **7.6** | **+0.2** |

The template is solidly in "better than most" territory. The testimonials section is now a genuine selling point in a demo. The next meaningful jump — to 7.8 or above — requires two or three additional sections to reach the same quality level as testimonials: photograph or texture used as deliberate design material, not background decoration. The why strip and about sections are the most obvious candidates.
