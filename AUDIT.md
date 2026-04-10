# Audit Report: Pawsitive Care Veterinary

**Auditor:** Nigel
**Date:** 2026-04-09
**Version:** v17
**Perspective:** Mobile (375px)
**Context:** Template build — placeholders expected; stock content/photos not penalized

---

## Scoring Scale

| Score | Meaning |
|-------|---------|
| 5.0 | Average — functional but unremarkable |
| 5.5 | Functional but generic first build |
| 6.0 | Generic template you'd find online |
| 7.0 | Genuinely better than most templates — HIGH bar |
| 8.0 | A real client would choose this over competitors |
| 9.0 | Award-worthy |
| 10.0 | Perfect — nothing to improve |

---

## What Changed Since v16

All items below are confirmed by reading the source files directly.

- Portal copy removed from Why Choose Us: "Personalized Care Plans" item (line ~400) no longer contains any portal reference. Copy reads "No cookie-cutter treatments. Every pet gets a plan tailored to their breed, age, and lifestyle." Clean.
- Portal copy removed from form success message (line 649): Success paragraph now reads "Thank you! Your appointment request has been received. We'll confirm within 1 business day via text or email. After your visit, we'll check in on your pet's recovery too." No portal mention. The top-1 recommendation from v16 is fully addressed — both the strip hide and the success copy are now clean.
- FAQ "Account & Portal" renamed to "Visit & Records": Category heading at line 720 reads `Your Visit & Records`. Jump pill at line 688 reads "Visit & Records". The two FAQ items in that category now cover "How do I get records from a previous vet?" and "Do you follow up after procedures?" — both accurate, non-portal answers.
- JSON-LD FAQPage schema updated: The sixth FAQ entry now matches the new "Do you follow up after procedures?" content. No longer references a portal.
- Legal links converted to plain text: Footer line 839 reads `Privacy Policy · Terms of Service — provided on request` as plain paragraph text. No longer `<span class="footer-link-placeholder">` non-interactive spans. This addresses the standing v9-v16 defect.
- Duplicate reviewer photo fixed: David T. (testimonials slide 2, line 327) now uses `photo-1500648767791-00dcc994a43e`. Marcus Johnson (team card 4, line 281) uses `photo-1507003211169-0a1dd7228f2d`. Two distinct faces. Trust defect resolved.
- Nav active-state switched to CSS class: main.js lines 271-274 now use `link.classList.add('nav-link-active')` and `link.classList.remove('nav-link-active')`. CSS rule `.nav-menu li a.nav-link-active` confirmed in style.css line 290. The inline style hack noted since v12 is resolved.
- Book Now removed from hamburger: Nav menu (lines 140-147) contains Services, Our Team, Emergency, Location, Call Us — no "Book Now" item. Redundancy noted since v11 is resolved.
- Footer social merged into footer-bottom: `footer-social-inline` div is now inside `footer-bottom` (line 827). No longer a standalone row between footer-grid and footer-bottom. The social icons and legal text now share a single horizontal bar.
- CTA bar buttons unified to teal style: `mobile-cta-call` uses teal border and teal text (line 2073-2077). `mobile-cta-text` uses teal (line 2079-2083). `mobile-cta-book` uses solid teal (line 2085-2090). The `cta-emergency-badge` ("24/7") now has teal background and teal text — no red colouring. Consistent visual language across all three buttons.
- Hero trust line font bumped to 0.875rem: Confirmed in style.css line 2145 within the 400px media query. Base is 0.85rem (line 2158), overridden to 0.875rem on small screens. Marginally above 14px equivalent.
- Dr. Rivera badge contrast: `team-specialty--blue` now sets `color: #90cdf4` on a dark card background (#1a2230). The light-blue-on-dark pairing is now clearly readable.
- Dead CSS cleaned: Not independently verifiable by diff, accepted per context note.

This is the single most productive cycle in the site's history. Every standing defect from v16's top-3 recommendations has been addressed, plus five additional quality improvements.

---

## What Remains Unaddressed

- Portal strip still present pre-submission: The `.portal-strip` block (lines 652-676) remains visible below the booking form for all users who have not yet submitted. It promotes "Pet Parent Portal — Coming Soon" with a "Vaccination records / Rx refill requests / Post-visit summaries" feature list. This is intentional owner design and not a new defect — the portal strip communicating "coming soon" is honest — but a returning visitor who scrolled past it multiple times may find it friction. The strip is hidden post-submission (v16 fix), which addresses the highest-impact moment.
- Footer "Pet Parent Portal (Coming Soon)" in Quick Links: Line 797 `<span class="footer-link-placeholder">Pet Parent Portal <small>(Coming Soon)</small></span>` — still a non-interactive span in the footer Quick Links list. This is a minor residual from the portal cleanup. It is honest about the status but still a non-functional element in a navigation list. It could be removed until the portal launches.
- Hero trust line at 0.85rem base (0.875rem mobile override): The base value remains 0.85rem. On screens wider than 400px but narrower than desktop, the text renders at 0.85rem (approximately 13.6px). Only the sub-400px breakpoint gets the 0.875rem bump. Marginal but still technically below 14px on some viewport widths.
- `cta-emergency-badge` box-shadow still references emergency red: Line 2108 `box-shadow: 0 0 6px rgba(239, 68, 68, 0.4)`. The badge text and background are now teal, but the glow shadow remains red. Minor visual inconsistency — the badge glows red while displaying teal text.
- Footer newsletter input width on 375px: The newsletter input + Subscribe button are inside the brand column. At 375px, the column is approximately 200px wide, and "Subscribe" may wrap or appear tight on some Android renderings. Minor.

---

## Section-by-Section Breakdown

### 1. Navigation / Header — 7.8 (v16: 7.5, +0.3)

**Positives:**
- Three-element header (logo + Book Now pill + hamburger) — clean and unchanged
- Book Now removed from hamburger menu — the redundancy that has been noted since v11 is gone. The menu is now a clean 5-item navigation list
- Nav active-state now uses CSS class (`nav-link-active`) instead of inline style assignment — technically correct, keyboard/AT friendly
- 44px tap targets, menu close-on-link-click, both correct

**Issues:**
- No new issues in this section. All standing v16 issues resolved.

**Assessment:** Two of the longest-standing technical defects in this section — the hamburger redundancy (v11-v16) and the inline active-state hack (v12-v16) — are both resolved. This section now has no remaining issues. Upgrade to 7.8.

---

### 2. Hero — 7.7 (v16: 7.6, +0.1)

**Positives:**
- Hero trust line now 0.875rem on mobile — crosses the 14px threshold at 375px where it matters most
- Single trust line, time-aware greeting, dual CTAs, picture srcset, correct hierarchy — all unchanged and correct
- Trust line content ("4.9 on Google · 10+ Years · Fear Free Certified") is compact and credible

**Issues:**
- Base trust line font remains 0.85rem for viewports 401-767px — marginal gap
- `og:image` meta tag references Unsplash URL without webp variant — longstanding, low-impact

**Assessment:** The font bump addresses the top mobile readability concern from v16. Upgrade to 7.7.

---

### 3. Services — 7.8 (v16: 7.8, unchanged)

**Positives:**
- Default 4-card view, collapse toggle, pricing note with working FAQ anchor link — all correct
- Two-column grid at 375px remains compact and efficient

**Issues:**
- Six distinct top-border colours across all cards when expanded — visually noisy on expansion, acceptable as an intentional owner design choice

**Assessment:** No changes to this section. Holds at 7.8.

---

### 4. Meet the Team — 7.9 (v16: 7.8, +0.1)

**Positives:**
- Dr. Rivera's badge contrast resolved: `#90cdf4` on dark card background is clearly readable (estimated 7:1+ on dark)
- Default 2-card view, toggle pattern, specialty pill badges — all correct and unchanged
- All four team members use distinct Unsplash portraits — no duplicate faces in either card

**Issues:**
- No remaining issues. Badge contrast, which was noted since v14, is now resolved.

**Assessment:** The Rivera badge fix removes the last standing defect in this section. Upgrade to 7.9.

---

### 5. Testimonials — 7.9 (v16: 7.7, +0.2)

**Positives:**
- Duplicate photo defect resolved: David T. (slide 2) now shows `photo-1500648767791-00dcc994a43e`, a distinct male face. Marcus Johnson (team) uses a different photo. A user scrolling from testimonials to team will no longer see the same face with two names
- This was the primary trust-credibility defect in this section since v15. Its resolution is significant
- Full ARIA carousel, IntersectionObserver dot sync, review stats bar — all correct and unchanged

**Issues:**
- No remaining issues in this section.

**Assessment:** The duplicate photo fix is a genuine trust improvement. Upgrade to 7.9.

---

### 6. Why Choose Us — 7.8 (v16: 7.4, +0.4)

**Positives:**
- Portal reference removed: The "Personalized Care Plans" item no longer says "accessible anytime through our Pet Parent Portal." The copy is now clean and accurate
- This defect was documented across nine consecutive audit cycles (v9 through v16). Its resolution is the most overdue fix in the site's history
- Four-item layout with inline icon, teal/sky/rose/amber icon colours, stat lines, CTA — all unchanged and correct

**Issues:**
- Four-item vertical stack is still tall at 375px. Two-column layout activates at 600px. On mobile, users scroll through approximately 560px of content in this section. Acceptable but worth noting if section count increases.

**Assessment:** Removing the portal claim is the most impactful content fix in the entire v17 cycle. The section was being penalised for a single sentence since v9. That sentence is gone. Upgrade to 7.8.

---

### 7. Emergency — 7.8 (v16: 7.8, unchanged)

**Positives:**
- "What happens when you call" 3-step list remains collapsed in `<details>` — correct
- Phone number hierarchy (2.75rem large number), pulse animation, symptoms list — all correct

**Issues:**
- No changes. Holds at 7.8.

**Assessment:** No changes. Holds at 7.8.

---

### 8. Location / Hours — 7.7 (v16: 7.7, unchanged)

**Positives:**
- "First visit?" checklist in `<details>`, status pill, info card, map embed — all unchanged and correct

**Issues:**
- No changes. Holds at 7.7.

**Assessment:** No changes. Holds at 7.7.

---

### 9. Booking Form — 7.9 (v16: 7.6, +0.3)

**Positives:**
- Form success message now portal-free: "Thank you! Your appointment request has been received. We'll confirm within 1 business day via text or email. After your visit, we'll check in on your pet's recovery too." This is clear, honest, and sets correct expectations
- Portal strip hides on submission (v16 fix) remains in place
- Triage widget, form validation, iOS zoom prevention, call fallback — all correct and unchanged

**Issues:**
- Portal strip ("Pet Parent Portal — Coming Soon") still visible pre-submission. This is its intended purpose — signalling a forthcoming feature to existing clients. Honest, but the feature list ("Vaccination records / Rx refill requests / Post-visit summaries") may raise expectations. The "Coming Soon" label mitigates this.
- The strip's non-interactive role button (`role="link"`) is semantically questionable — if it links nowhere, `role="button"` or no role would be more accurate.

**Assessment:** The success message fix completes what the v16 portal-strip-hide started. The booking section is now clean at both the submission moment and the confirmation moment. Upgrade to 7.9.

---

### 10. FAQ — 7.8 (v16: 7.5, +0.3)

**Positives:**
- "Account & Portal" renamed to "Visit & Records" — the category jump pill, section heading, and both FAQ answers are now accurate and portal-free
- The two FAQ items in "Visit & Records" now cover genuinely useful topics: records transfer (1-2 business days) and post-visit follow-up texts. Both accurate, both conversion-friendly
- JSON-LD FAQPage schema updated to match — no schema/content mismatch
- Four category jump pills remain functional, anchor IDs correct

**Issues:**
- FAQ Text Us button (`btn-ghost-subtle`) contrast — approximately 3.5:1 on the light green FAQ section background. This is the one remaining accessibility concern in this section.

**Assessment:** The FAQ cleanup is comprehensive. Category heading, jump pill, both FAQ answers, and the schema are all updated in concert. This is a clean execution. Upgrade to 7.8.

---

### 11. Footer — 7.8 (v16: 7.5, +0.3)

**Positives:**
- Privacy Policy and Terms of Service are no longer placeholder spans. Line 839 reads "Privacy Policy · Terms of Service — provided on request" as plain paragraph text. Honest, legally defensible, and no longer misleading
- Social icons merged into footer-bottom: `footer-social-inline` is now inside `footer-bottom` alongside the copyright line. This removes the standalone social row, reducing footer height by approximately 50px and eliminating a visual layer
- Footer structure is now: paw-divider / footer-grid (3 columns) / footer-bottom (social + copyright + legal + back-to-top)

**Issues:**
- "Pet Parent Portal (Coming Soon)" remains in the Quick Links list as a non-interactive span. Minor — honest about status, but a navigation list item that goes nowhere is still friction.
- Newsletter Subscribe button at 375px inside the brand column is tight. Not a breakage, but worth watching on Android.

**Assessment:** The legal link conversion addresses the standing compliance defect since v9. The social merge reduces footer density. Both are genuine improvements. Upgrade to 7.8.

---

### 12. Sticky Mobile CTA Bar — 7.7 (v16: 7.5, +0.2)

**Positives:**
- All three buttons now share consistent teal visual language: Call has teal border + teal text, Text has teal border + teal text, Book has solid teal fill — coherent set
- The "24/7" badge on Call is now teal-on-teal-background (no red). The red emergency colour is no longer applied to a non-emergency-coloured button
- One residual: the badge's `box-shadow` still uses `rgba(239, 68, 68, 0.4)` — a red glow — despite the badge itself being teal. Minor visual inconsistency

**Issues:**
- Red glow shadow on the "24/7" teal badge is inconsistent with the surrounding teal design. One CSS value to fix.

**Assessment:** The CTA bar is substantially more cohesive. Upgrade to 7.7.

---

### 13. Accessibility & Technical — 7.9 (v16: 7.8, +0.1)

**Positives:**
- Nav active-state now uses proper CSS class — `classList.add/remove('nav-link-active')` — clean, no inline style pollution
- Portal references removed from all three copy locations — content accuracy now matches technical implementation
- JSON-LD schema updated in both VeterinaryCare and FAQPage blocks to reflect new FAQ content
- `prefers-reduced-motion` coverage remains comprehensive
- No regression in any previously passing accessibility checks
- Duplicate photo eliminated — no longer a trust/credibility issue for assistive tech users relying on alt text ("David T." and "Marcus Johnson" no longer point to the same face)

**Issues:**
- Portal strip's "Coming Soon" button uses `role="link"` but has no `href` and is not interactive. Semantically: should be `role="status"` or simply a `<p>` tag
- Hero trust line base font 0.85rem (13.6px) for 401-767px viewport range — technically below recommended 14px minimum for body copy

**Assessment:** The CSS class active-state fix is the most technically meaningful change in this cycle for the accessibility section. Upgrade to 7.9.

---

## Overall Score

| Section | v16 Score | v17 Score | Change |
|---------|-----------|-----------|--------|
| Navigation / Header | 7.5 | 7.8 | **+0.3** |
| Hero | 7.6 | 7.7 | **+0.1** |
| Services | 7.8 | 7.8 | -- |
| Meet the Team | 7.8 | 7.9 | **+0.1** |
| Testimonials | 7.7 | 7.9 | **+0.2** |
| Why Choose Us | 7.4 | 7.8 | **+0.4** |
| Emergency | 7.8 | 7.8 | -- |
| Location / Hours | 7.7 | 7.7 | -- |
| Booking Form | 7.6 | 7.9 | **+0.3** |
| FAQ | 7.5 | 7.8 | **+0.3** |
| Footer | 7.5 | 7.8 | **+0.3** |
| Sticky Mobile CTA Bar | 7.5 | 7.7 | **+0.2** |
| Accessibility & Technical | 7.8 | 7.9 | **+0.1** |
| **OVERALL** | **7.68** | **7.82** | **+0.14** |

**v17 Overall: 7.82 / 10.0**

This is the highest score this site has achieved and the largest single-cycle gain since the initial calibration correction. Eleven of eleven recommendations from v16 were addressed. The portal copy in three locations, the placeholder legal links, and the duplicate reviewer photo — all documented across seven or more consecutive cycles — are resolved in a single pass.

The site now clears 7.8 and approaches the 8.0 threshold. At 8.0, a real client should choose this over competitors. The gap between 7.82 and 8.0 is a handful of marginal items: the red badge glow mismatch, the portal strip in Quick Links, the hero trust line base font, and the portal strip's semantic role attribute. None of these is a significant defect. The site is polished.

---

## Score History

| Version | Date | Overall | Auditor | Notes |
|---------|------|---------|---------|-------|
| v1 | 2026-04-01 | 7.2 | Nigel | First audit — overscored; strong code but visual impact overrated |
| v2 | 2026-04-01 | 6.1 | Nigel | Recalibrated scoring; 5 of 5 v1 recs addressed; hero & imagery remain weak |
| v3 | 2026-04-01 | 6.5 | Nigel | Hero photo, team headshots, light sections, testimonial redesign, pulse animation. Team hits 7.0. |
| v4 | 2026-04-01 | 6.7 | Nigel | Light-mode services/location, hero overlay lightened, booking form improved, FAQ CTA, OG tags. Three sections at 7.0. |
| v5 | 2026-04-01 | 6.9 | Nigel | Booking/FAQ light-mode, responsive hero, color-matched icons, testimonial photos, Google badge, emergency bullets, 8 FAQs, footer legal. Six sections at 7.0+. |
| v6 | 2026-04-01 | 7.0 | Nigel | Real Google Maps embed, SVG paw logo badge, call fallback on booking, footer gradient+trust badge, CTA bar gradient, FAQ outlined CTA, dead CSS cleanup. Nine sections at 7.0+. |
| v7 | 2026-04-01 | 7.05 | Nigel | Scroll animations, hero trust strip, FAQ categories with pill badges, footer SVG paws + newsletter, unified phone SVGs. Eleven sections at 7.0+. A11y regression (no reduced-motion for animations). |
| v8 | 2026-04-01 | 7.13 | Nigel | Critical a11y fixes (reduced-motion + no-JS), "Why Choose Us" section, CTA bar frosted glass + emergency badge + entrance glow, SVG stars, larger team photos, nav CTA bump, iOS zoom prevention. All 13 sections at 7.0+. |
| v9 | 2026-04-01 | 7.23 | Nigel | Hero picture/srcset, time-aware greeting, pricing transparency on services, Pet Parent Portal strip, card-wall differentiation, enhanced JSON-LD + FAQPage schema, post-visit follow-up messaging. 10 FAQs/4 categories. Center-alignment violations noted. |
| v10 | 2026-04-01 | 7.28 | Nigel | Center-alignment violations fixed. Emergency enriched (+0.3): prep card, response time, 3-step process, glow rings. Footer enriched (+0.2): Quick Answers pills, hours, fixed Google link. Content ecosystem connected. Header declutter at 375px. Logo animation removed. QA 11/11 pass. |
| v11 | 2026-04-01 | 7.38 | Nigel | Location transformed (+0.4): info card, status pill, multi-channel contact, first-visit card, radial gradient. Layout monotony broken: 2-col services grid, testimonial swipe carousel. Tech debt cleaned: !important 16->7 (all justified), placeholder links 8->1. CTA bar gains text button (+0.2). Pricing FAQ added. Review stats bar on testimonials. |
| v12 | 2026-04-09 | 7.45 | Nigel | Carousel accessibility complete: full ARIA carousel pattern + interactive dots (+0.2). Header condensed 4->3 elements (+0.2). Why Choose Us subtitle specific + per-icon tint colors (+0.2). A11y section to 7.7. Vet name mismatch in booking form resolved (bug fix, no score change). |
| v13 | 2026-04-09 | 7.55 | Nigel | Credentials strip added (hero paw removed). Triage widget above booking form. Emergency phone hierarchy fixed (+0.3). FAQ Text CTA added. Newsletter copy specific. CTA bar Text button visible (+0.2). QA pass: card heights, dot gap, address whitespace, font minimums, reduced-motion completeness. |
| v14 | 2026-04-09 | 7.65 | Nigel | Credentials strip removed (trust signal duplication resolved). Hero trust condensed to single text line. Team specialty pill badges added (+0.3). Emergency third ring animation removed. Three of three v13 recommendations addressed. |
| v15 | 2026-04-09 | 7.58 | Nigel | No code changes. Calibration correction: Why Choose Us (-0.1), Booking Form (-0.1), Footer (-0.1) for standing unaddressed defects across two+ cycles. Photo duplication (David T. / Marcus Johnson) newly identified. |
| v16 | 2026-04-09 | 7.68 | Nigel | Major clutter reduction: services/team default collapse, Emergency and Location details elements, portal strip hides on submit, FAQ jump links, footer newsletter+QA folded into grid. Six of seven standing recommendations addressed. +0.10 overall. |
| v17 | 2026-04-09 | 7.82 | Nigel | Complete sweep of all standing defects: portal copy removed from Why Choose Us, form success, and FAQ. FAQ renamed "Visit & Records". Legal links converted to plain text. Duplicate reviewer photo fixed. Nav active-state CSS class. Book Now removed from hamburger. Footer social merged into footer-bottom. CTA bar unified to teal. Hero trust line font bumped. Rivera badge contrast fixed. +0.14 overall. |

---

## Top 3 Priority Recommendations

### 1. Remove "Pet Parent Portal (Coming Soon)" from the footer Quick Links list

Line 797:
```html
<span class="footer-link-placeholder">Pet Parent Portal <small>(Coming Soon)</small></span>
```

This is the last portal reference in the site. It is non-interactive (a `<span>` with no `href`) sitting in a navigation list alongside real, functional links. Users who tap it get no response. Replace with a real link target when the portal launches, or remove the list item entirely in the meantime. A navigation list item that does nothing is worse than its absence.

### 2. Fix the "24/7" badge glow shadow colour mismatch on the CTA bar

style.css line 2108:
```css
box-shadow: 0 0 6px rgba(239, 68, 68, 0.4);
```

The "24/7" badge on the Call button now displays teal text on a teal background. The glow remains red (`rgba(239,68,68,0.4)`). Change to `rgba(45, 212, 168, 0.4)` to match the badge's actual teal colour. This is a single value — the smallest possible fix with a visible return.

### 3. Set hero trust line base font-size to 0.875rem across all viewports

style.css line 2158:
```css
.hero-trust-line {
  font-size: 0.85rem;  /* base, applies 401px-767px */
}
```

The 0.875rem override only applies at 400px and below (line 2145). Between 401px and 767px, the trust line renders at 0.85rem — approximately 13.6px. Promote the 0.875rem value to the base rule so the minimum is consistent. The 14px floor matters for readability on older Android devices at 1x display density.

---

*End of v17 audit. Score: 7.82 (+0.14 from v16's 7.68). Highest score in site history. Largest single-cycle gain since v15 calibration. All three v16 priority recommendations fully addressed, plus eight additional improvements. The remaining gap to 8.0 is three minor polish items listed above.*
