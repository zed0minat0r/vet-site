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

---

## Overall Score: 8.3 / 10

This v11 audit covers five specific changes: (1) hero `<img>` now carries `width="1600" height="1067"` inside the `<picture>` element, (2) amber star ratings added to all four testimonial cards with per-card classes, (3) team card bodies now use the member's own photo as a 6% opacity background-image behind the tinted gradient, (4) four orphan nth-child CSS rules removed, and (5) Safari `-webkit-backdrop-filter` prefixes confirmed present.

**Hero intrinsic dimensions — confirmed and correct.** Lines 107–108 of index.html show `width="1600"` and `height="1067"` on the `<img>` fallback inside the `<picture>` element. The aspect ratio these express (1600:1067, approximately 3:2) will allow the browser to reserve layout space before the LCP image loads, eliminating the CLS that was flagged in v10 as the highest-priority technical correction. This was recommendation 1 in v10 and it is now delivered. A Lighthouse run will show an improved CLS score. For a template being sold to buyers who run audits, this is the most commercially meaningful technical fix in this version.

**Amber star ratings on testimonials — confirmed and well-executed.** All four testimonial cards now carry a `.testi-stars` div immediately before the quote mark. Cards 1 and 2 show five filled stars in amber (`var(--accent-warm)`). Card 3 uses `.testi-stars--four` with a hollow fifth star (&#9734;), providing a realistic rather than uniformly perfect rating distribution — a detail that increases credibility with a buyer who understands how real review widgets behave. Card 4 on the dark green background uses `.testi-stars--light` with `color: #f5c842` for contrast. The CSS at lines 1147–1156 is clean and minimal. This was recommendation 3 in v10 ("fastest trust signal addition") and it is delivered correctly. A user scanning testimonials on mobile now reads five amber stars before reading a word of copy. The conversion value of this on the testimonials section is disproportionate to the lines of code involved.

**Photo-informed team card backgrounds — confirmed at 6% opacity.** The `.team-info::before` pseudo-element (CSS lines 972–988) now loads the member's own photo as `background-image` at `opacity: 0.06`. The amber-pale gradient on card 1 (`rgba(250,235,210,0.95)` to `rgba(240,233,221,0.92)`) sits above the photo layer. The green-pale gradient on card 2 (`rgba(220,238,225,0.95)` to `rgba(240,233,221,0.92)`) does the same. The net effect: the card body now has a faint, warm impression of the person whose bio it contains, beneath the cream/sand gradient. At 6% this is not visible as a recognisable photograph — it reads as a warm tonal undertone — but combined with the 9% grain texture on `::after` and the 2px sand-dark border-top, the card body has genuine tactile character. This closes recommendation 2 from v10. The treatment is not identical to the "full-bleed photographic treatment" described there, but it achieves the stated goal: each card's visual identity is now derived from the actual person. Score credit is warranted.

**Dead CSS cleaned.** The four orphan nth-child rules (targeting positions that no longer exist after previous restructuring) have been removed. CSS file is tighter.

**Safari -webkit-backdrop-filter — confirmed at three sites.** Lines 167, 330, and 726 of style.css each pair `-webkit-backdrop-filter: blur(4px)` with `backdrop-filter: blur(4px)`. These cover the ghost button, hero eyebrow pill, and the service card label overlay. All three were identified as at-risk for Safari; all three are now prefixed. No penalty remaining here.

**What the delta is worth.** The hero intrinsic dimensions fix is a Lighthouse improvement that a buyer will verify independently. The amber star ratings are the single fastest conversion-signal improvement made to this template since the testimonials section was restructured. The photo-informed card backgrounds close the largest visual gap in the team section. Together these three changes represent genuine progress. The dead CSS and Safari prefix work are hygiene — they do not move the score on their own but they remove the risk of a buyer finding a technical fault.

**What is not yet resolved.** The team section still has only two team members. A two-card vertical stack is short for a section carrying a full botanical banner header. A buyer purchasing a practice template will need at least a placeholder for a third card. The testimonial cards, now improved with star ratings, still use initial-letter avatars rather than photos — a professional template at this price point typically includes at least one client photo or a Google-review badge. The hours section shows Mon–Thu only; this is accurate for the real practice but a template buyer in a different market will need to customise this, and no placeholder guidance is present in the template. These are not score-moving issues individually, but they represent the structural ceiling for this template in its current form.

**The ceiling for a single-page template.** After eleven audits and ten rounds of improvement, this template has reached a natural plateau. The remaining gaps — two-person team section, avatar-only testimonials, real-practice-specific hours — are content and structure decisions, not design quality failures. A buyer purchasing this template would receive a site with a solid design system, a functional booking calendar, correct WebP hero delivery, legitimate star ratings, and a believable botanical identity. At 8.3 it is meaningfully better than most ThemeForest alternatives in this category. The ceiling for this template in its current form, without a content or structural revision (adding a third team member, replacing avatar initials with photos, generalising the hours section), is approximately 8.4–8.5. Reaching that requires decisions about content scope, not CSS changes.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged from v10. Amber/sand/green-pale border rhythm, botanical motif, colour token set, and dark/cream/photo/sand section register all confirmed. No regression.

### 2. Hero (Mobile 375px) — 8.0 / 10
Intrinsic dimensions confirmed: `width="1600" height="1067"` on the fallback `<img>` inside the `<picture>` element (lines 107–108). The browser can now reserve aspect-ratio space before the LCP image loads. CLS risk eliminated. Score moves from 7.7 to 8.0. The hero is now technically clean: WebP srcset with three density descriptors, JPEG fallback with eager loading and high fetchpriority, correct intrinsic dimensions, and accessible alt text. No outstanding technical issues.

### 3. Navigation — 7.5 / 10
Unchanged. No regression.

### 4. Why Strip — 7.8 / 10
Unchanged. No regression.

### 5. About Section — 7.8 / 10
Unchanged. No regression.

### 6. Services — 8.3 / 10
Unchanged. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. No regression.

### 8. Team Section — 8.0 / 10
Photo-informed card backgrounds confirmed at 6% opacity via `.team-info::before` with member-specific `background-image` URLs (CSS lines 983–988). Gradient tint cycling confirmed on top (amber-pale for card 1, green-pale for card 2). 9% grain texture and 2px sand-dark border-top carry over from v10. The combination of photo undertone + tinted gradient + grain texture + border separator gives each card a distinct, person-specific character. Score moves from 7.9 to 8.0. The ceiling — only two cards in a section with a full botanical header — remains.

### 9. Testimonials — 8.5 / 10
Star ratings confirmed on all four cards. Cards 1, 2, 4: five filled stars. Card 3: four filled + one hollow star (realistic distribution). Per-card colour variants correct: amber on cream/warm cards, bright yellow on dark green card. CSS is minimal and targeted. Score moves from 8.2 to 8.5. The testimonials section is now the strongest section on the page: photo background, floating card shadows, dot counter with position indicator, scroll hint, card colour variants, and now credible star ratings. The only remaining gap is the absence of photo avatars or a Google review badge.

### 10. Hours and Location — 7.5 / 10
Unchanged. No regression.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. No regression.

### 14. Footer — 7.6 / 10
Unchanged. No regression.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. No regression.

### 16. Typography — 8.0 / 10
Unchanged. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Add a third team card placeholder**
The team section has a full botanical banner header with eyebrow and h2, carrying the visual weight of a four-member team section. Two cards in a single-column grid is a short, incomplete-looking section regardless of how well the individual cards are executed. A buyer purchasing this template for a practice with more than two staff members will replace this immediately — but a buyer evaluating the template cold will see a short section and mark it down. Adding a third card (placeholder name, placeholder photo using a reliable Unsplash URL, placeholder credentials) costs one hour of work and raises the team section from a structural weak point to a credible staff presentation. This is the single change most likely to convert a hesitant template buyer.

**2. Replace initial-letter testimonial avatars with photo avatars or a review badge**
The four testimonial avatars (K, S, J, M) are a convention from early web app design — they signal "no real photo available." With amber star ratings now present, the contrast between "five amber stars" and "a green circle with the letter K" is more visible. The fix: either replace the avatar divs with small circular `<img>` elements using consistent Unsplash portrait URLs (search filter: `face`, square crop), or add a "As seen on Google" badge beneath the section header. Either approach converts the testimonials from "internally generated quotes" to "quote format that implies third-party verification." The star ratings have already done half this work; the avatars need to meet that standard.

**3. Generalise the hours table for template buyers**
The hours section shows Monday–Thursday with specific times and Friday–Sunday closed. This is accurate for the real practice but actively misleading for a template buyer in a different market — they must customise not just the times but the open/closed row pattern. A template at this quality level should either: (a) show a full seven-day table with "by appointment" as the default placeholder text, making it obvious which rows to edit; or (b) add a HTML comment above the `<tbody>` stating "Edit hours and closed rows below — remove class='closed' to activate a day." Without guidance, a buyer who does not read HTML carefully may leave incorrect hours live. This is a template usability issue, not a design quality issue, but it will affect buyer confidence and post-purchase satisfaction.

---

## Summary Scorecard

| Section | v10 Score | v11 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 7.7 | 8.0 | +0.3 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 7.9 | 8.0 | +0.1 |
| Testimonials | 8.2 | 8.5 | +0.3 |
| Hours and Location | 7.5 | 7.5 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.6 | 7.6 | 0 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.2** | **8.3** | **+0.1** |

Three sections move in v11: Hero (7.7 to 8.0, CLS fix via intrinsic dimensions delivered), Testimonials (8.2 to 8.5, amber star ratings with realistic distribution), and Team (7.9 to 8.0, photo-informed card backgrounds at 6% opacity). The remaining 14 sections hold. The template is now at 8.3. The testimonials section at 8.5 is the strongest section on the page. The ceiling for this template without structural content changes is approximately 8.4–8.5, reachable via the three recommendations above.
