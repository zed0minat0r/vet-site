# Audit Report: Pawsitive Care Veterinary

**Auditor:** Nigel
**Date:** 2026-04-09
**Version:** v18
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

## What Changed Since v17

All items below are confirmed by reading the source files directly.

- Footer Quick Links portal item removed: Lines 793-798 confirm the Quick Links list now contains exactly four real functional links (Services & Pricing, Our Team, Book Appointment, FAQ). The non-interactive `<span class="footer-link-placeholder">Pet Parent Portal (Coming Soon)</span>` that sat in this list through v17 is gone. Top-1 recommendation from v17 fully addressed.
- CTA "24/7" badge glow shadow corrected: Line 2108 reads `box-shadow: 0 0 6px rgba(45, 212, 168, 0.4)`. The red `rgba(239, 68, 68, 0.4)` glow is gone. Badge text, background, border, and glow are now all teal. Top-2 recommendation from v17 fully addressed.
- Hero trust line base font promoted: `.hero-trust-line` base rule at line 2158 reads `font-size: 0.875rem`. This is the base declaration, applying to all viewports from 375px through 767px. The 0.85rem value that applied between 401px and 767px is no longer present. All mobile viewports now render at minimum 14px equivalent. Top-3 recommendation from v17 fully addressed.

Three for three on v17 recommendations. A clean cycle.

---

## What Remains or Is Newly Identified

- Portal strip content is internally contradictory: The `.portal-strip` block (lines 652-676) is titled "Existing Clients" and opens with "Access your pet's records, request prescription refills, and manage appointments through our Pet Parent Portal." This reads as an instruction, not a preview. The closing button says "Pet Portal — Coming Soon." A real user reading this section sees: "You can do this... but also you can't." The "Coming Soon" label no longer mitigates the active-voice invitation above it. This is a trust and clarity defect.
- `footer-link-placeholder` CSS class is dead code: The HTML element using this class was removed (as noted above), but the CSS rule at lines 2190-2201 remains. Harmless, but indicative of incomplete cleanup.
- Social icon links are placeholder hrefs: The Facebook and Instagram links in the footer (lines 827-832) carry `data-placeholder="true"` and link to `https://facebook.com` and `https://instagram.com` (the social networks' home pages) rather than any business profile. A real user tapping these lands on the Facebook or Instagram homepage with no way to find the business. These are functionally broken as social proof.

---

## Section-by-Section Breakdown

### 1. Navigation / Header — 7.8 (v17: 7.8, unchanged)

**Positives:**
- Three-element header (logo + Book Now + hamburger) remains clean at 375px
- Nav active-state via CSS class, 44px tap targets, menu close-on-link-click — all correct
- No redundancy in hamburger menu; five items, all functional

**Issues:**
- No new issues. No regression.

**Assessment:** Holds at 7.8. No changes to this section.

---

### 2. Hero — 7.8 (v17: 7.7, +0.1)

**Positives:**
- Trust line base font now 0.875rem across all mobile viewports — the 0.85rem sub-14px range is eliminated
- Single trust line, time-aware greeting, dual CTAs, picture srcset, correct hierarchy — all unchanged and correct
- The 0.875rem base rule applies from 375px through 767px consistently

**Issues:**
- `og:image` meta references Unsplash URL without webp variant — longstanding, low-impact

**Assessment:** The font fix closes the last standing concern in this section. Upgrade to 7.8.

---

### 3. Services — 7.8 (v17: 7.8, unchanged)

**Positives:**
- Default 4-card view, collapse toggle, pricing note with FAQ anchor link — correct
- Two-column grid at 375px remains compact and efficient

**Issues:**
- Six distinct top-border colours across all cards when expanded — visually noisy on expansion, accepted as intentional owner design

**Assessment:** No changes. Holds at 7.8.

---

### 4. Meet the Team — 7.9 (v17: 7.9, unchanged)

**Positives:**
- All four team members use distinct Unsplash portraits
- Default 2-card view, toggle pattern, specialty pill badges — correct
- Rivera badge contrast (team-specialty--blue at #90cdf4 on dark) remains readable

**Issues:**
- No remaining issues.

**Assessment:** No changes. Holds at 7.9.

---

### 5. Testimonials — 7.9 (v17: 7.9, unchanged)

**Positives:**
- All four testimonials show distinct reviewer faces
- Full ARIA carousel, IntersectionObserver dot sync, review stats bar — correct and unchanged

**Issues:**
- No remaining issues.

**Assessment:** No changes. Holds at 7.9.

---

### 6. Why Choose Us — 7.8 (v17: 7.8, unchanged)

**Positives:**
- All four items are portal-free and accurate
- "Personalized Care Plans" and "We Follow Up After Every Visit" are honest, non-promotional copy
- Four-item layout with teal/sky/rose/amber icon colours — unchanged

**Issues:**
- Four-item vertical stack remains tall at 375px — approximately 560px of scroll depth. Acceptable.

**Assessment:** No changes. Holds at 7.8.

---

### 7. Emergency — 7.8 (v17: 7.8, unchanged)

**Positives:**
- Phone hierarchy (2.75rem), pulse animation, symptoms list, collapse-details for process steps — all correct
- "What happens when you call" remains collapsed — correct

**Issues:**
- No changes.

**Assessment:** Holds at 7.8.

---

### 8. Location / Hours — 7.7 (v17: 7.7, unchanged)

**Positives:**
- "First visit?" in details element, status pill, info card, map embed — all unchanged and correct

**Issues:**
- No changes.

**Assessment:** Holds at 7.7.

---

### 9. Booking Form — 7.7 (v17: 7.9, -0.2)

**Positives:**
- Form validation, triage widget, iOS zoom prevention, call fallback — all correct and unchanged
- Form success message is portal-free and sets honest expectations

**Issues:**
- The portal strip (lines 652-676) now has a clarity defect more significant than previously scored. The heading reads "Existing Clients" and the body copy reads "Access your pet's records, request prescription refills, and manage appointments through our Pet Parent Portal." This is written in the present tense — "access" — as an instruction to take action now. The "Coming Soon" button immediately below contradicts it. A returning client who follows the copy's invitation will tap the button and find it inert. This is a worse user experience than the previous "Coming Soon" framing was. The strip previously announced a future feature; it now appears to direct users to a live product that does not exist. The `role="status"` on the portal button is technically correct but does not salvage the surrounding copy.

**Assessment:** The strip's "Existing Clients" framing introduces a new contradiction that is more trust-damaging than the previous version. The booking form section scores are reduced from 7.9 to 7.7 to reflect this regression.

---

### 10. FAQ — 7.8 (v17: 7.8, unchanged)

**Positives:**
- "Your Visit & Records" category is clean, accurate, and portal-free
- Four jump pills, all functional
- JSON-LD FAQPage schema matches displayed content

**Issues:**
- `btn-ghost-subtle` (Text Us) contrast on the light green FAQ background remains approximately 3.5:1 — still below the 4.5:1 WCAG AA threshold for normal text. Persistent across multiple cycles.

**Assessment:** No changes. Holds at 7.8.

---

### 11. Footer — 7.9 (v17: 7.8, +0.1)

**Positives:**
- Quick Links now contains four clean, functional links only. The non-interactive portal span is gone. A navigation list that only contains real links is how navigation lists should work.
- Footer structure (paw-divider / footer-grid / footer-bottom with social + copyright + legal + back-to-top) is clean and compact
- Legal copy ("Privacy Policy · Terms of Service — provided on request") remains honest plain text

**Issues:**
- Facebook and Instagram social links (`data-placeholder="true"`) point to the social network home pages rather than a business profile. A real user tapping these is deposited on Facebook's or Instagram's general homepage. Functionally broken as social proof. Google Maps link is not placeholder-flagged and correctly points to a maps URL.
- `footer-link-placeholder` CSS rule remains in style.css (lines 2190-2201) as dead code.

**Assessment:** The portal item removal is a genuine navigation improvement. The social link placeholder issue is an existing defect that was not previously scored against this section directly, but with the portal item gone it becomes the most prominent remaining footer issue. Upgrade to 7.9 for the Quick Links cleanup; note social links as the next priority.

---

### 12. Sticky Mobile CTA Bar — 7.8 (v17: 7.7, +0.1)

**Positives:**
- All three buttons (Call, Text, Book) share consistent teal visual language
- "24/7" badge: teal text, teal background, teal border, teal glow — fully consistent
- No colour contradiction anywhere in the bar

**Issues:**
- No remaining issues in this section. The last CSS value mismatch is resolved.

**Assessment:** The badge glow fix completes the CTA bar cleanup. Upgrade to 7.8.

---

### 13. Accessibility & Technical — 7.9 (v17: 7.9, unchanged)

**Positives:**
- `prefers-reduced-motion` coverage remains comprehensive
- Nav active-state via CSS class, correct ARIA on carousel, correct form semantics
- Dead CSS: `footer-link-placeholder` rule persists but causes no functional issue

**Issues:**
- Portal strip `role="status"` on the coming-soon button is semantically correct for announcing a state, but the surrounding "Access your records" copy creates a false affordance regardless of the button's role.
- `btn-ghost-subtle` contrast on FAQ section background — longstanding 3.5:1 issue.
- Dead `footer-link-placeholder` CSS rule is cosmetically untidy.

**Assessment:** No regression in previously passing checks. No improvement either. Holds at 7.9.

---

## Overall Score

| Section | v17 Score | v18 Score | Change |
|---------|-----------|-----------|--------|
| Navigation / Header | 7.8 | 7.8 | -- |
| Hero | 7.7 | 7.8 | **+0.1** |
| Services | 7.8 | 7.8 | -- |
| Meet the Team | 7.9 | 7.9 | -- |
| Testimonials | 7.9 | 7.9 | -- |
| Why Choose Us | 7.8 | 7.8 | -- |
| Emergency | 7.8 | 7.8 | -- |
| Location / Hours | 7.7 | 7.7 | -- |
| Booking Form | 7.9 | 7.7 | **-0.2** |
| FAQ | 7.8 | 7.8 | -- |
| Footer | 7.8 | 7.9 | **+0.1** |
| Sticky Mobile CTA Bar | 7.7 | 7.8 | **+0.1** |
| Accessibility & Technical | 7.9 | 7.9 | -- |
| **OVERALL** | **7.82** | **7.84** | **+0.02** |

**v18 Overall: 7.84 / 10.0**

All three v17 priority recommendations were addressed. The hero trust line, CTA badge glow, and footer Quick Links are resolved. However, the portal strip in the booking section has evolved from a "Coming Soon" announcement into "Existing Clients" with active-voice instructions that contradict the Coming Soon button directly below. This introduces a genuine trust regression in that section (-0.2), partially offsetting the gains elsewhere.

The site inches forward but the booking form regression is a real-world concern: a returning client who follows the strip's invitation taps a dead button. That is worse than not having the strip at all.

The site remains just below 8.0. The path to 8.0 is now clearly one item: the portal strip copy must be either consistent with "coming soon" framing or removed until launch.

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
| v18 | 2026-04-09 | 7.84 | Nigel | All three v17 recs addressed: footer portal link removed, CTA badge glow fixed to teal, hero trust line base font promoted to 0.875rem. Portal strip copy regressed to "Existing Clients" framing with contradictory active-voice invitation alongside Coming Soon button (-0.2 booking form). Net +0.02. |

---

## Top 3 Priority Recommendations

### 1. Fix the portal strip copy to match its "Coming Soon" status

Lines 654-657 in index.html:
```html
<p class="portal-strip-title">Existing Clients</p>
<p class="portal-strip-text">Access your pet's records, request prescription refills, and manage appointments through our <strong>Pet Parent Portal</strong>.</p>
```

The heading "Existing Clients" and the body "Access your pet's records" read as an instruction to take action now. The "Coming Soon" button immediately below contradicts this directly. A returning client reading this in good faith taps the button and finds it inert. Change the framing to future tense: "Soon you'll be able to access records, request Rx refills, and manage appointments online." Or remove the strip until the portal is live. Either resolves the contradiction. This is the single highest-impact fix remaining in the site.

### 2. Fix the Facebook and Instagram footer links

Lines 827-832 in index.html, both carry `data-placeholder="true"` and link to `https://facebook.com` and `https://instagram.com` respectively — the social network home pages. A real user tapping these is deposited on a login screen or general feed with no connection to the business. Either add real profile URLs or remove these links entirely. Placeholder social links that navigate nowhere useful are worse than no social links.

### 3. Remove the dead `footer-link-placeholder` CSS rule

style.css lines 2190-2201: The `.footer-link-placeholder` rule and its child `.footer-link-placeholder small` rule remain in the stylesheet. The HTML element using this class was removed in v18. Delete these rules to complete the cleanup. Minor housekeeping, but the gap between "deleted from HTML" and "deleted from CSS" is the kind of residue that accumulates into technical debt.

---

*End of v18 audit. Score: 7.84 (+0.02 from v17's 7.82). All three v17 recommendations addressed. Portal strip copy regression in booking form is the primary obstacle to reaching 8.0. One clear fix stands between this site and the threshold where a real client chooses it over competitors.*
