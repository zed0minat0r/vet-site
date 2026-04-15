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

---

## Overall Score: 8.2 / 10

This v10 audit covers three specific changes: (1) hero picture element with WebP srcset at 800w/1200w/1600w plus JPEG fallback, (2) team card body background switched to sand with grain opacity raised from 4% to 9%, and (3) a 2px sand-dark border-top on `.team-info` to mark the photo-to-body transition.

**Hero WebP picture element — confirmed and functional.** The HTML at lines 93–108 shows a correctly implemented `<picture>` element. The `<source>` element specifies `type="image/webp"`, a proper `srcset` with three density descriptors (800w, 1200w, 1600w), and `sizes="100vw"`. The fallback `<img>` retains `loading="eager"` and `fetchpriority="high"`. The `fm=webp` parameter on the Unsplash CDN URL is the correct method for requesting WebP from that API. This is what was recommended in v9 as priority 2, and it is now correctly implemented. On a supporting browser (Chrome, Safari 14+) this will deliver a 20–35% smaller LCP image. This is a genuine improvement with measurable Lighthouse impact. Score credit is warranted.

The previous v9 AUDIT.md flagged this as absent — that was accurate for v9. It is now present in v10. The score history entry for v9 (8.1) noted it in recommendations; v10 delivers it. This is the most technically substantive of the three changes.

**Team card sand background + 9% grain — confirmed and now perceptible.** CSS line 971 shows `.team-info` with `background: var(--sand)`. The grain at 9% opacity (CSS lines 972–982, `opacity: 0.09`) over a sand base (`#f0e9dd`) is meaningfully different from the previous 4% over warm-white. On sand, the feTurbulence fractalNoise filter at 9% opacity produces a visible paper-like texture that a user can see without looking for it. The gradient tint cycling (lines 986–989) on top of the sand base — amber-pale to sand for card 1, green-pale to sand for card 2 — is now more readable because the tints contrast against sand rather than warm-white. The 2px sand-dark border-top (`border-top: 2px solid var(--sand-dark)` on line 971) creates a clean material join between the photo and the card body. These three elements together — sand base, 9% grain, 2px separator — move the team cards from "cream rectangle with invisible texture" to "textured sand card with a legible boundary." The team section score moves.

**What is not yet resolved.** The team card section still has only two team members. With two cards in a `grid-template-columns: 1fr` layout, the team section is short. The structural gap — full-bleed photography behind the card body, as used in the services section — remains the ceiling. The current treatment is genuinely textured but it is still a gradient-over-solid, not a photo-informed design. A buyer comparing this against a competitor with real team photography will still notice the difference. The score moves but the ceiling remains.

**The delta is +0.1.** The WebP picture element is a concrete performance improvement that a buyer running Lighthouse will notice and value. The sand grain at 9% is the first version where the texture is perceptible without deliberate examination. The 2px border-top is a precise finish detail. None of these changes are individually large, but together they close two of the three v9 recommendations (hero WebP was #2, team card texture was partially addressed). The site is now at 8.2 — a score where a buyer with genuine aesthetic judgment would choose this over most ThemeForest alternatives, and a buyer running Lighthouse would not find the hero image optimisation missing.

What prevents 8.3: the hero `<img>` fallback is missing explicit `width` and `height` attributes inside the `<picture>` element. The outer `<img>` has no `width`/`height` attributes set (confirmed at lines 101–107 in index.html), which means the browser cannot reserve layout space before the image loads and CLS (Cumulative Layout Shift) will be non-zero. This is a Lighthouse concern for a commercial template. Also, the team section still reads as two short cards in a vertical stack — the section lacks visual weight relative to its position in the page flow.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged from v9. The amber/sand/green-pale border rhythm, botanical motif, colour token set, and dark/cream/photo/sand section register are all confirmed. No regression.

### 2. Hero (Mobile 375px) — 7.7 / 10
The `<picture>` element with WebP source is now confirmed at lines 93–108 of index.html. Three srcset descriptors (800w/1200w/1600w), correct `sizes="100vw"`, correct `type="image/webp"`, JPEG fallback with `loading="eager"` and `fetchpriority="high"`. This is the correct implementation and it delivers a measurable performance benefit. Score moves from 7.5 to 7.7. The single outstanding issue: the fallback `<img>` lacks `width` and `height` attributes, meaning the browser cannot reserve aspect-ratio space before the image loads. On a slow mobile connection this causes layout shift. A commercial template should have intrinsic dimensions set. This prevents a higher score.

### 3. Navigation — 7.5 / 10
Unchanged. No regression.

### 4. Why Strip — 7.8 / 10
Unchanged. Heading confirmed center-aligned. 5px amber top border confirmed. Botanical overlays confirmed. No regression.

### 5. About Section — 7.8 / 10
Unchanged. Botanical watermark at 0.14 opacity confirmed. No regression.

### 6. Services — 8.3 / 10
Unchanged. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. No regression.

### 8. Team Section — 7.9 / 10
Sand background confirmed (`background: var(--sand)` on `.team-info`, line 971). Grain at 9% opacity confirmed (`opacity: 0.09`, lines 973–982). Border-top separator confirmed (`border-top: 2px solid var(--sand-dark)`, line 971). Gradient tint cycling unchanged from v9. The combination of sand base + 9% grain produces a perceptible paper texture — this is the first version where the texture reads without deliberate scrutiny. The 2px separator gives the card a clear material join. Score moves from 7.7 to 7.9. The ceiling (photo-informed card body treatment) remains unreached, and the section is visually short with only two team members.

### 9. Testimonials — 8.2 / 10
Unchanged from v9. Dot counter and "1 of 4" indicator confirmed. No regression.

### 10. Hours and Location — 7.5 / 10
Unchanged. No regression.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. No regression.

### 14. Footer — 7.6 / 10
Unchanged from v9. Compact horizontal links confirmed. No regression.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. No regression.

### 16. Typography — 8.0 / 10
Unchanged. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Add intrinsic width and height to the hero `<img>` element**
The `<picture>` implementation is correct but the fallback `<img>` at lines 101–107 has no `width` or `height` attributes. Without these, the browser cannot reserve aspect-ratio space during LCP image loading and CLS will be non-zero. A Lighthouse audit will flag this. The fix is two attributes: `width="1600" height="900"` (or whatever the image's natural ratio is). This is a 5-minute change with a direct Lighthouse CLS score impact. For a template being sold to buyers who run Lighthouse, this is the highest-priority technical correction remaining.

**2. Apply a photo-informed or strongly textured treatment to team card bodies**
The sand background at 9% grain is now perceptible and represents a genuine improvement. The ceiling is still a full-bleed photographic treatment — the approach used in the services section (photo as background, dark gradient overlay) applied in reverse (photo at low opacity beneath the card text). Alternatively: a `background-image` on `.team-info` using the team member's photo at 5–8% opacity behind the sand base would give each card a unique visual identity derived from the actual person. This closes the single largest visual gap remaining. Either approach moves the team section from 7.9 toward 8.2.

**3. Add a third testimonial section: star ratings visible on the card**
The testimonial cards are well-structured and the horizontal scroll works correctly. What is missing is a visual trust signal at a glance — star ratings. Adding `★★★★★` in amber (`var(--accent-warm)`) above the quote text on each card takes three lines of HTML per card and one CSS rule. A buyer scanning the testimonials section on mobile will immediately read the five stars before reading the quote. This converts the section from "quotes with names" to "verified five-star reviews with names," which is a meaningfully different signal for a veterinary practice owner evaluating whether the template communicates trust.

---

## Summary Scorecard

| Section | v9 Score | v10 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 7.5 | 7.7 | +0.2 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 7.7 | 7.9 | +0.2 |
| Testimonials | 8.2 | 8.2 | 0 |
| Hours and Location | 7.5 | 7.5 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.6 | 7.6 | 0 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.1** | **8.2** | **+0.1** |

Two sections move in v10: Hero (7.5 to 7.7, WebP picture element delivered) and Team (7.7 to 7.9, sand background + 9% grain + 2px separator). The remaining 15 sections hold. The template is now at 8.2 — the WebP hero is the most commercially significant technical improvement since v6. The team card texture is now genuinely perceptible. Three items remain: hero intrinsic dimensions (CLS fix, 5 minutes), photo-informed team card bodies (largest visual gap), and star ratings on testimonials (fastest trust signal addition).
