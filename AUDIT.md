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
| 2026-04-09 (this audit) | 7.7 | +0.1 | 2015 stat fixed to static, botanical leaf strengthened (22% opacity/96px + mirrored second leaf), services condensed to 5-dot sliding window, why strip eyebrow + heading added, services counter font fixed to 12px, footer brand logo centered on mobile |

---

## Overall Score: 7.7 / 10

This is honest, disciplined maintenance. All three of my top recommendations from v5 have been addressed: the embarrassing "2015" counter is now static, the services dot indicator uses a proper 5-window implementation, and the botanical leaf is now legible at 22% opacity and 96px. That is commendable execution against a specific brief.

However, the delta is +0.1, not more. The pattern is now clear: we are past the phase of structural improvements and into the phase of polish corrections. Each round of changes is resolving the remaining craft issues rather than introducing new visual territory. The why strip still has four Heroicons on a sand background. The team cards remain white-on-sand with no photographic or textural intervention. The about section is unchanged. None of the sections that scored below 7.5 have moved.

The score plateau is real. From 7.4 to 7.6 required a major intervention (testimonials full-bleed photography). From 7.6 to 7.7 required addressing all three top recommendations — that ratio should alarm the builder. The next meaningful jump, to 7.9 or 8.0, will require a comparably ambitious structural intervention: introducing photography or texture as section-level design material in at least one of the three underperforming sections (why strip, about, team cards). Correctional passes will not move the needle further.

A buyer seeing this template will find it polished, coherent, and credibly better than a theme-forest template. The calendar remains a genuine commercial differentiator. The testimonials section reads as designed. The craft issues that would embarrass a developer in a demo are now resolved. It earns 7.7 honestly.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
Unchanged. The Playfair Display / Inter pairing, green/cream/amber/sand token system, and section rhythm remain coherent. No new material vocabulary introduced in v6. No regression.

### 2. Hero (Mobile 375px) — 7.3 / 10
Unchanged. The Unsplash happy-dogs image, eyebrow pill, tight h1, sub-paragraph, two CTAs. Structurally correct. No regression.

### 3. Navigation — 7.5 / 10
Unchanged. Hamburger-to-X transition correct, overlay clean, tap targets 52px, sticky header minimal. No regression.

### 4. Why Strip — 7.1 / 10
The eyebrow ("Why mobile care") and heading ("The difference you'll feel from visit one.") are a genuine addition. The heading is warmer and more specific than a generic h2 — it speaks to the prospective client rather than describing the section. Score nudges from 7.0 to 7.1. The structural character of the section is unchanged: four Heroicons on a sand background. The sand background remains near-indistinct from the cream body. The icons remain visibly from a third-party library. No material improvement.

### 5. About Section — 7.5 / 10
Unchanged. The stat card renders correctly. About text centered on mobile. No regression.

### 6. Services — 8.3 / 10
The 5-dot sliding window is a correct and clean implementation. In the JS: `WINDOW = 5`, the window start is clamped so the active dot is centred at position 2, dots are hidden via `display: 'none'` when the card index exceeds total. This is the standard carousel pattern executed without libraries. The counter font is confirmed at `0.75rem` (12px), which is readable without competing with the card content. Score moves from 8.2 to 8.3. This is now the most technically considered mobile UX element on the page.

### 7. Trust Stats Strip — 8.0 / 10
The `data-no-counter` attribute on the 2015 element is confirmed in the HTML. The JS counter loop correctly checks `el.hasAttribute('data-no-counter')` and skips the element. "2015" now renders as a static value throughout. This resolves the single most visible craft embarrassment from v5. Score moves from 7.7 to 8.0. The remaining three counters (1,200+, 11, 5★) animate cleanly with the 1,200ms ease-out-quad ramp. The strip is now credible in a live demo without qualification.

### 8. Team Section — 7.3 / 10
The primary botanical leaf is now 96px and 0.22 opacity — confirmed in CSS. This is now legible as a decorative element at 375px. The mirrored second leaf at 72px and 0.10 opacity adds subtle visual mass to the bottom-left corner, creating a paired motif. Score moves from 7.2 to 7.3. The mirrored leaf at 10% opacity is still borderline invisible on most phone screens, but its presence is architecturally correct — it suggests intentionality rather than decoration. The team cards themselves remain white-on-sand with no photographic or textural intervention. The ceiling here is clear: 7.5 requires either photo treatment of the team cards or the botanical motif used in a third section.

### 9. Testimonials — 8.0 / 10
Unchanged. The full-bleed pet photography section with floating cream cards and deep box-shadow remains the strongest non-interactive section on the page. No regression.

### 10. Hours and Location — 7.0 / 10
Unchanged. Hours panel, map embed, today-row highlight. No regression, no improvement.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. Contact info sidebar hidden on mobile. Form breakpoint at 480px. Calendar remains the clearest commercial differentiator. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. Transform + opacity transition, 44px tap target, correct z-index. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. The inline style cleanup from v5 holds. Full-width gradient, two CTAs, correct inverted button treatment. No regression.

### 14. Footer — 7.2 / 10
The footer brand logo now has `justify-content: center` on mobile and `justify-content: flex-start` on desktop — confirmed in CSS. The logo and wordmark are correctly centered at 375px. Score moves from 7.0 to 7.2. This is a minor but correct alignment detail. The overall footer structure is unchanged.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. Four animation systems (parallax, scroll-reveal, stat counter, scroll progress) all present and correctly gated behind prefers-reduced-motion. No regression.

### 16. Typography — 8.0 / 10
Unchanged. Playfair Display / Inter pairing applied consistently. No regression.

### 17. Mobile Layout and Centre Alignment — 7.6 / 10
The footer logo centering and the why strip heading addition are both positive alignment details. Score nudges from 7.5 to 7.6. No other alignment issues identified. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Apply photographic treatment to the why strip**
This is the most structurally tired section on the page. Four Heroicons on a sand background has been unchanged since the first audit. The fix does not need to be another full-bleed photography section — it could be as simple as a subtle background-image with a light overlay, or replacing the sand background with the dark green and making the icons cream/amber. Any intervention that breaks the current beige uniformity will be visible in a demo and justify a +0.2 score move. This is the single highest-leverage remaining change.

**2. Introduce photographic or textural treatment to the about section**
The about section has an image but it sits in a conventional content layout — image left, text right. The section scores 7.5 because it is structurally correct but not distinctive. A buyer comparing this to three other templates will not remember the about section. Options: a subtle paper texture on the cream background, a coloured band behind the stat card, or a second botanical leaf watermark behind the h2. Any of these would take 30 minutes and move the section to 7.8.

**3. Increase the mirrored botanical leaf opacity in the team header to 0.18**
The current 0.10 opacity is below the perceptibility threshold on most mobile OLED screens. At 0.18 the mirrored leaf would reinforce the paired-motif reading without competing with the primary leaf. This is a single CSS change. If the botanical device is to function as a template signature — something a buyer can point to and say "this template has a botanical motif" — both leaves must be visible.

---

## Summary Scorecard

| Section | v5 Score | v6 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.0 | 8.0 | 0 |
| Hero (Mobile 375px) | 7.3 | 7.3 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.0 | 7.1 | +0.1 |
| About Section | 7.5 | 7.5 | 0 |
| Services | 8.2 | 8.3 | +0.1 |
| Trust Stats Strip | 7.7 | 8.0 | +0.3 |
| Team Section | 7.2 | 7.3 | +0.1 |
| Testimonials | 8.0 | 8.0 | 0 |
| Hours and Location | 7.0 | 7.0 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.0 | 7.2 | +0.2 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.5 | 7.6 | +0.1 |
| **Overall** | **7.6** | **7.7** | **+0.1** |

The template has plateaued in the correctional phase. The next meaningful score jump requires a structural intervention — photography or texture used as deliberate design material in one of the three underperforming sections (why strip, about, team cards). Polish passes on existing sections will contribute fractions of a point at best.
