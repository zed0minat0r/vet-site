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

---

## Overall Score: 8.4 / 10

This v12 audit covers five specific changes since v11: (1) a third team member card added (Alex Torres, Veterinary Assistant) with a blush/rose top band, Unsplash photo, credentials, and bio; (2) all four testimonial letter-circle avatars replaced with circular Unsplash pet photos; (3) buyer-guide HTML comments added to the hours table explaining how to edit open/closed days; (4) four WCAG contrast issues QA-fixed (testimonial pet text, why strip subtext, footer copyright); (5) Safari -webkit-backdrop-filter confirmed present.

**Third team member — the ceiling-breaking change.** The v11 audit called a third team card the single change most likely to convert a hesitant buyer. It is now delivered. Alex Torres arrives with a proper Unsplash portrait, three credential badges (Penn Foster, Vet Assistant Cert., Fear Free Certified), a four-line bio, and a blush/rose top band that completes the per-card colour differentiation system (amber → green-dark → blush). The `team-card--blush` class is already wired in CSS with the full photo-informed background treatment, tinted gradient, and grain texture. The EDIT comment on line 405 (`Replace with your third team member's photo, name, title, and bio`) signals to a buyer exactly what to change. The team section is now a three-card column — credible, balanced, and structurally complete for a practice of this size. The section ceiling moves up. This is the most commercially significant change in v12.

**Testimonial photo avatars — recommendation 2 delivered.** All four letter-circle divs (K, S, J, M) have been replaced with 40×40 circular `<img>` elements sourced from Unsplash, each showing an actual pet: golden retriever (card 1), orange cat (card 2), rabbit (card 3), senior cat (card 4). The `.testi-avatar--photo` class handles `object-fit: cover` and a 2px sand-dark border. The green-card variant uses `.testi-avatar--light-border` for contrast. The avatars now match the standard of the amber star ratings on the same cards. A buyer scanning the testimonials section on mobile sees: amber stars, Playfair italic quote, pet photo, name, location. This is indistinguishable from a professionally built review widget. The testimonials section is now the strongest section on the page and warrants the highest subsection score.

**Buyer-guide HTML comments in the hours table — recommendation 3 delivered.** Three comment lines now appear in the `<tbody>`: the first above the open days instructs `Replace days/hours below with your clinic's schedule`; the second explains `Add class="closed" to any <tr> for days your clinic is not open`; the third on the Friday row explains `Remove class="closed" on any row below to open that day`. All seven days of the week are present in the table (Mon–Sun), with Friday, Saturday, and Sunday carrying `class="closed"`. A buyer who has never touched HTML can now follow these instructions. This resolves the template-usability gap flagged in v11 without changing the visual output.

**WCAG contrast fixes — four issues resolved.** The `.testi-pet` text on dark green cards is `rgba(255,255,255,0.78)` — white at 78% on `#2d5a3d` passes WCAG AA at normal text sizes. The `.why-item span` subtext is `rgba(255,255,255,0.75)` on the dark green strip. The footer copyright is `rgba(255,255,255,0.55)` on `#2e2419` (the brown-text body colour) — this is the weakest of the four and remains marginal at small type; it passes AA for large text but is borderline for the 0.82rem size. No material regression, and the QA effort signals responsible template hygiene.

**What the delta is worth.** The third team member resolves the most persistent structural weakness in the template. The pet photo avatars close the gap between star ratings and the rest of the testimonial card. The HTML comments eliminate the #1 buyer customisation friction point. Together these are the three recommendations from v11, all delivered in a single cycle. This is the template executing on its own roadmap. Score moves from 8.3 to 8.4.

**Is the single-page ceiling reached?** Yes, materially. The three v11 recommendations have been implemented. The remaining gaps are aesthetic preferences rather than structural deficiencies: the Alex Torres card uses a generic Unsplash stock portrait rather than a real team photo (acceptable for a template), and the footer copyright contrast at 0.82rem is technically borderline. A buyer purchasing this template now receives a site with a three-person team, photo-led testimonials, correct WebP hero delivery, legitimate star ratings, a seven-day hours table with buyer editing instructions, a botanical identity, and a functional booking calendar. The ceiling for a single-page template of this type and scope, without a multi-page architecture change, is 8.4–8.5. This audit awards 8.4. The final 0.1 to reach 8.5 is available only through one of three structural additions: a fourth testimonial from a verified source (e.g. a Google review embed widget), a real photo for the Alex Torres placeholder, or a second visible CTA mechanism (WhatsApp button or SMS link in the sticky bar). None of these are necessary for the template to sell.

---

## Section Scores

### 1. Design System and Visual Identity — 8.3 / 10
Unchanged from v11. Amber/sand/green-pale border rhythm, botanical motif, colour token set, and dark/cream/photo/sand section register all confirmed. No regression.

### 2. Hero (Mobile 375px) — 8.0 / 10
Unchanged from v11. WebP srcset, JPEG fallback, intrinsic dimensions (1600×1067), eager loading, high fetchpriority, correct alt text. Technically clean. No regression.

### 3. Navigation — 7.5 / 10
Unchanged. No regression.

### 4. Why Strip — 7.8 / 10
Unchanged. The `.why-item span` subtext at `rgba(255,255,255,0.75)` is confirmed present and unchanged. WCAG note: at 0.82rem this ratio is borderline AA on the dark green background, but this is a styling decision that has been present since v5 and is not a new regression.

### 5. About Section — 7.8 / 10
Unchanged. No regression.

### 6. Services — 8.3 / 10
Unchanged. No regression.

### 7. Trust Stats Strip — 8.0 / 10
Unchanged. No regression.

### 8. Team Section — 8.3 / 10
Third card delivered. Alex Torres (Veterinary Assistant) arrives with a 4:3 Unsplash portrait, three credential badges, a four-line bio truncated to four lines on mobile, and the blush/rose top band (`#c26b84`). The photo-informed background treatment, grain texture, and tinted gradient (blush-pale to sand) are confirmed via `.team-card--blush .team-info`. The three-card column is now structurally complete. Score moves from 8.0 to 8.3. The remaining ceiling is the stock-photo nature of the Alex Torres portrait — acceptable for a template, but a buyer using real photos for all three cards will see the difference.

### 9. Testimonials — 8.8 / 10
Pet photo avatars confirmed on all four cards: golden retriever, orange cat, rabbit, senior cat — each 40×40, circular, `object-fit: cover`, with the appropriate border variant for the card background. Combined with amber star ratings, Playfair italic quotes, dot counter, and the golden retriever full-bleed background, this is a complete testimonials section. Score moves from 8.5 to 8.8. At 8.8 this is the highest-scoring section on the page. The only improvement remaining — a live Google review embed or badge — is outside the scope of a static template.

### 10. Hours and Location — 7.8 / 10
Buyer-guide HTML comments confirmed: three comment lines in the `<tbody>` covering how to edit times, add the `closed` class, and remove it to activate a day. All seven days present in the table. Score moves from 7.5 to 7.8. The hours section is now self-documenting for a non-technical buyer.

### 11. Interactive Calendar Booking — 8.0 / 10
Unchanged. No regression.

### 12. Sticky Call Bar — 7.5 / 10
Unchanged. No regression.

### 13. Footer CTA Banner — 8.0 / 10
Unchanged. No regression.

### 14. Footer — 7.6 / 10
Unchanged. Footer copyright at `rgba(255,255,255,0.55)` on `#2e2419` is the weakest contrast on the page (approximately 4.2:1 at this colour pair, which is borderline AA at 0.82rem). The QA pass noted this was fixed, but the CSS value remains at 0.55 — either the fix did not land in the deployed file, or the issue was assessed and considered passing. Score held. This is the one remaining WCAG note of any consequence.

### 15. Scroll Interactions and Animations — 7.7 / 10
Unchanged. No regression.

### 16. Typography — 8.0 / 10
Unchanged. No regression.

### 17. Mobile Layout and Centre Alignment — 7.8 / 10
Unchanged. No regression.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Resolve footer copyright contrast definitively**
The `.footer-bottom p` rule sets `color: rgba(255,255,255,0.55)` on the dark brown footer background (`#2e2419`). At 0.82rem this sits at approximately 4.2:1 — passing AA for large text (18pt/14pt bold) but failing for small text (which requires 4.5:1). Raising opacity to 0.65 would push the ratio above 4.5:1 and close the last open WCAG flag. This is a one-line CSS change. A buyer who runs an accessibility audit as part of their due diligence will find this; fixing it before sale removes the risk.

**2. Provide a real photo for the Alex Torres placeholder or document the placeholder clearly**
The third team card currently uses an Unsplash stock portrait of a woman in scrubs (photo-1607990283143-e81e7a2c9349). A buyer who previews this template in a browser and reverse-image-searches the photo will find it is stock. This is fine for a template — buyers understand placeholders — but the EDIT comment on line 405 only mentions replacing the photo, name, title, and bio. Adding a second line: `<!-- NOTE: This is a placeholder card. All three fields (photo URL, name, bio) must be updated for your practice -->` would make the placeholder status explicit and set correct expectations. Prevents a buyer from accidentally going live with Alex Torres still in place.

**3. Add a WhatsApp or SMS link to the sticky call bar**
The sticky call bar is currently a single green `<a href="tel:...">` strip. A substantial proportion of mobile users in 2026 prefer to initiate contact via WhatsApp or text rather than a voice call — especially when making a first enquiry to a service they have not used before. Adding a second link (e.g. `sms:+16104126660` or a WhatsApp `wa.me` link) as a secondary option within the bar costs four lines of HTML and raises the conversion potential of the most prominent persistent UI element on the page. This is the one structural addition that would differentiate this template from most ThemeForest alternatives in the same category, which universally default to voice-call-only sticky bars.

---

## Summary Scorecard

| Section | v11 Score | v12 Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 8.3 | 8.3 | 0 |
| Hero (Mobile 375px) | 8.0 | 8.0 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 7.8 | 7.8 | 0 |
| About Section | 7.8 | 7.8 | 0 |
| Services | 8.3 | 8.3 | 0 |
| Trust Stats Strip | 8.0 | 8.0 | 0 |
| Team Section | 8.0 | 8.3 | +0.3 |
| Testimonials | 8.5 | 8.8 | +0.3 |
| Hours and Location | 7.5 | 7.8 | +0.3 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer CTA Banner | 8.0 | 8.0 | 0 |
| Footer | 7.6 | 7.6 | 0 |
| Scroll Interactions and Animations | 7.7 | 7.7 | 0 |
| Typography | 8.0 | 8.0 | 0 |
| Mobile Layout and Centre Alignment | 7.8 | 7.8 | 0 |
| **Overall** | **8.3** | **8.4** | **+0.1** |

Three sections move in v12: Team (8.0 to 8.3, third card added), Testimonials (8.5 to 8.8, pet photo avatars replacing letter circles), and Hours (7.5 to 7.8, buyer-guide HTML comments). The remaining 14 sections hold. The template is now at 8.4. All three v11 recommendations have been delivered. The single-page ceiling has been reached. The template is commercially ready for sale.
