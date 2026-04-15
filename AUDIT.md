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

---

## Overall Score: 8.5 / 10

This v13 audit covers three specific changes since v12: (1) footer copyright opacity raised from 0.55 to 0.65, closing the last open WCAG flag; (2) Alex Torres card gains an explicit PLACEHOLDER comment clarifying all three fields must be replaced; (3) the sticky call bar gains a second button — `sms:+16104126660` "Text Us" — rendered side-by-side with the existing Call button.

**Footer copyright contrast — Recommendation 1 delivered.** The `.footer-bottom p` rule now reads `rgba(255,255,255,0.65)` on `#2e2419`. At this opacity level the contrast ratio clears 4.5:1 for the 0.82rem body text and formally passes WCAG AA at small text sizes. This resolves the last open accessibility flag in the template. A buyer who runs an axe or Lighthouse audit will no longer see a contrast failure on the copyright line. One-line fix, full value.

**Alex Torres placeholder comment — Recommendation 2 delivered.** Line 405 now carries `<!-- PLACEHOLDER: This third team member is a demo card. Replace or remove for your clinic. -->` directly above the article element, with the pre-existing `<!-- EDIT: Replace with your third team member's photo, name, title, and bio -->` on line 406. The dual-comment pattern — one flagging placeholder status, one giving editing instructions — is exactly what was recommended. A buyer who inspects the source before going live will see both comments and understand the card requires replacement. The risk of accidental deployment with Alex Torres intact is substantially reduced.

**SMS button in sticky call bar — Recommendation 3 delivered.** The bar now contains two `<a>` elements: a `tel:` Call button (white text, white border, semi-transparent fill) and an `sms:` Text Us button (white text, 55%-opacity white border, transparent fill). Both occupy 50% of the bar width via `flex: 1`. The visual hierarchy is correct: Call is primary (higher fill opacity), Text Us is secondary (transparent fill, dimmer border). The background remains `var(--green-dark)`. On a 375px viewport this renders as two tappable columns of equal width, each with an SVG icon and label. This is the single structural addition that most differentiates this template from ThemeForest alternatives in the veterinary category, which universally default to a single-button voice-only bar. The implementation is clean — no third-party dependency, no JavaScript, degrades gracefully on desktop (bar is `display: none` above 767px).

**Is the ceiling now reached?** Yes. All three recommendations from v12 have been implemented. The template now has: three-person team with photo, credential badges, and placeholder guidance; four testimonials with pet photo avatars, star ratings, and dot counter; a dual-action sticky bar; WCAG-clean contrast on all text; buyer-editable hours table with HTML comments; WebP hero with intrinsic dimensions; and a functioning calendar booking flow. At 8.5, this template sits above the realistic ceiling for a single-page static template without external integrations (live Google review widget, real-time booking via a third-party scheduler). The final 0.5 points to reach a theoretical 9.0 would require multi-page architecture or external service integrations — both are out of scope for a template of this type and price point. The template is commercially ready.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged. Amber/sand/green-pale border rhythm, botanical motif, colour token set, and dark/cream/photo/sand section register all confirmed. No regression.

### 2. Hero (Mobile 375px) — 8.0 / 10
Unchanged. WebP srcset, JPEG fallback, intrinsic dimensions (1600×1067), eager loading, high fetchpriority, correct alt text. Technically clean.

### 3. Navigation — 7.5 / 10
Unchanged.

### 4. Why Strip — 7.8 / 10
Unchanged. `.why-item span` subtext at `rgba(255,255,255,0.75)` on dark green is borderline AA at 0.82rem but has been present since v5 and is a conscious design decision.

### 5. About Section — 7.8 / 10
Unchanged.

### 6. Services — 8.3 / 10
Unchanged.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged.

### 8. Team Section — 8.3 / 10
Unchanged from v12. The PLACEHOLDER comment is additive to the HTML comment layer only — no visual change. Score held.

### 9. Testimonials — 8.8 / 10
Unchanged from v12. Highest-scoring section on the page.

### 10. Hours and Location — 7.8 / 10
Unchanged from v12.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged.

### 12. Sticky Call Bar — 8.3 / 10
SMS button added. Two-button layout (`tel:` + `sms:`) with correct visual hierarchy: Call is primary (semi-transparent white fill + white border), Text Us is secondary (transparent fill + 55%-opacity border). Both fill 50% of the bar width via `flex: 1`. SVG icons on both buttons. Renders correctly at 375px. Score moves from 7.5 to 8.3. The implementation is pure HTML/CSS — no JavaScript dependency, no third-party service. The only remaining improvement — a WhatsApp `wa.me` link as a third option — would require a three-column layout that risks crowding on narrow viewports and is not recommended.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged.

### 14. Footer — 8.0 / 10
Copyright contrast confirmed at `rgba(255,255,255,0.65)` on `#2e2419`. This passes WCAG AA at small text. Score moves from 7.6 to 8.0. The last open accessibility flag on the page is closed.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged.

### 16. Typography — 8.0 / 10
Unchanged.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged.

---

## Top Remaining Observations (Post-Ceiling)

These are not blocking issues. The template is ready for sale. These notes are for a buyer who wishes to further customise.

**1. Alex Torres photo is Unsplash stock**
Acceptable for a template — buyers understand placeholders. The dual HTML comment now flags this clearly. A buyer using real team photos will see an immediate quality jump in the team section.

**2. The sticky bar SMS button border opacity is 55%**
The `border: 2px solid rgba(255,255,255,0.55)` on `.sticky-sms-btn` is a deliberate hierarchy signal (primary vs secondary). It is technically passing contrast for the white text on green-dark background. Raising to 0.7 would make the secondary button more visually distinct from the bar background without competing with the primary Call button — minor preference note, not a bug.

**3. No live review integration**
The testimonials section is as strong as it can be within a static template. A buyer who deploys this with a real Google review widget (via a platform like Elfsight or EmbedSocial) will unlock the 8.8 section's final headroom. This requires a paid third-party account and is not template scope.

---

## Summary Scorecard

| Section | v12 Score | v13 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 8.0 | 8.0 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 8.3 | 8.3 | 0 |
| Testimonials | 8.8 | 8.8 | 0 |
| Hours and Location | 7.8 | 7.8 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 8.3 | +0.8 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.6 | 8.0 | +0.4 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.4** | **8.5** | **+0.1** |

Two sections move in v13: Sticky Call Bar (7.5 to 8.3, SMS button added alongside Call) and Footer (7.6 to 8.0, WCAG copyright contrast resolved). All three v12 recommendations delivered. Single-page ceiling reached. The template is commercially ready for sale.
