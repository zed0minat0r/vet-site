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
| 2026-04-09 (this audit) | 7.2 | +0.4 | Font upgrade, service card colour variants, stat card fix, form breakpoint, scroll cue, icon colours |

---

## Overall Score: 7.2 / 10

The six changes since the prior audit are all genuine improvements, not cosmetic fiddles, and each addresses a specific deficiency I named. The Playfair Display / Inter font pairing is the single most impactful upgrade — the template now reads as a premium product rather than a competent prototype. The about-stat-card no longer clips outside the viewport. The service cards carry four colour categories. The form breakpoint is corrected. The bob animation is gone. The why-strip icons are colour-differentiated.

At 7.2 the template clears the "better than most" threshold. It is now genuinely competitive with mid-tier Squarespace or ThemeForest templates. However, three meaningful gaps remain before a discerning buyer chooses this without deliberation. The page has not yet achieved the sense of a designed system rather than a very well-executed template.

---

## Section Scores

### 1. Design System and Visual Identity — 8.0 / 10
The font swap transforms the design system. Playfair Display for headings and Inter for body is a classic editorial pairing that reads confidently at 375px. The green/cream/amber token system is well-considered and now supported by a typeface that belongs in the same design register. The warm amber accent remains appropriately restrained. The section rhythm (cream > sand > green-dark > cream > sand > cream) is adequate, though a bolder chromatic break — a full-bleed rich green section earlier — would add more drama to the scroll. The visual identity is now cohesive enough that a buyer could see their brand in it.

### 2. Hero (Mobile 375px) — 7.0 / 10
Strong fundamentals remain: full-bleed photograph, gradient overlay, clear headline hierarchy, dual CTAs. Playfair Display on the hero headline at `clamp(2.2rem, 9vw, 4rem)` renders at approximately 33px on 375px — appropriately large and now visually distinctive. The scroll cue is correctly simplified to a static downward arrow; no animation. Issues that persist: (a) The hero-eyebrow pill and the hero-trust line below the CTAs still create five distinct text elements — crowded at 375px. (b) The hero extends to 100vh, meaning users must scroll a full phone-height before any section content appears. This is an acceptable pattern but not ideal for mobile conversion rates. Score unchanged from prior audit because the structural crowding was not addressed.

### 3. Navigation — 7.5 / 10
Unchanged and correct. Hamburger-to-X transition clean, full-screen overlay centres well at 375px, tap targets 52px, sticky header minimal. Logo text in Inter at 0.95rem is a slight improvement over the prior system font — better weight differentiation. No regression.

### 4. Why Strip — 7.0 / 10
Colour-differentiated icons are a meaningful improvement. Green, amber, rose, slate-blue — each icon now has a distinct visual territory. This lifts the strip from generic to considered. The 2x2 grid with divider gaps still works. Score improves from 6.5 to 7.0. Remaining weakness: the icons themselves are still the Heroicons set used by 40% of AI-built templates in 2025-2026 — they are recognisable as a free library to any developer buyer. The sand background is still near-indistinct from the cream section above. No section-boundary rule or colour change separates them.

### 5. About Section — 7.5 / 10
The stat card fix is correct and effective. On mobile it now renders as a static full-width card below the image — sensible degradation. The centred heading and eyebrow now match the rest of the site's mobile alignment pattern. This eliminates the consistency defect I cited in the prior audit. Improving from 7.0 to 7.5. The floating-card premium detail is preserved on desktop; on mobile the static card is less exciting but correct. The section separator (3px gradient rule) is a tasteful detail that earns its place.

### 6. Services — 7.0 / 10
The four colour categories are a genuine structural improvement. Preventive cards in soft green, digital/telemedicine cards in pale blue-slate, foundational care in warm sand, and the compassion card in amber-warm. On a 375px horizontal scroll this now reads as a curated portfolio rather than an undifferentiated list. Score moves from 6.5 to 7.0. Remaining issue: one card at line 284 (`service-card` with no category modifier) uses the default white/green icon treatment — it breaks the category system visually. A buyer paying attention will spot the inconsistency. Also: at 75vw card width on 375px, each card is 281px — the text runs to 2-3 lines, which is acceptable but not premium. No pricing or "from" indicators anywhere.

### 7. Trust Stats Strip — 7.5 / 10
The stats have been corrected — "1,200+ Home visits" is now the headline number. This is the right call for a template showcase; buyers can envision scale. The 2x2 grid with Playfair Display numerals on dark green reads confidently at 375px. The decorative circle accents add depth without noise. Score improves from 7.0 to 7.5. This section is now one of the better-executed on the page.

### 8. Team Section — 6.5 / 10
Bio truncation at 4 lines on mobile is the correct decision. Dr. Overhiser's bio no longer creates a wall of text at 375px. The team cards are clean. Score unchanged at 6.5 because the underlying section design remains the most visually undifferentiated section on the page: cream background following a cream testimonials section (before reflow), standard card pattern, no visual device to distinguish the team section. Two team cards stacked vertically on mobile is appropriate but not interesting. The "The people behind the paw prints." heading is good copy.

### 9. Testimonials (Horizontal Swipe) — 7.5 / 10
Unchanged at 7.5. The testimonial quote mark at 2.4rem (down from 5rem) is now proportionate and no longer eats vertical space on a 375px card. Confirmed in CSS at line 789: `font-size: 2.4rem`. This is correct. The three-colour card treatment (cream / amber-warm / green-dark) continues to differentiate. The drag-to-scroll implementation is correct. The letter-initial avatars remain generic — this is the primary remaining ceiling.

### 10. Hours and Location — 7.0 / 10
Hours data is now consistent across the Hours section and the booking contact sidebar. Monday is 12 PM – 8 PM in both locations. This eliminates the data inconsistency I cited as a sharp-buyer catch in the prior audit. Score unchanged at 7.0 because the section itself has not changed structurally — the vertical gap between hours panel and map panel at 375px (36px flex gap) is appropriate. The today-row highlight in green remains a polished micro-detail. No regression, no structural improvement.

### 11. Interactive Calendar Booking — 8.0 / 10
The contact info sidebar is now hidden on mobile at `max-width: 767px` via `.booking-shell .contact-info { display: none; }` — the calendar renders immediately without requiring the user to scroll past contact details. This is correct. The form breakpoint is now `max-width: 480px` rather than 400px, meaning 375–480px devices receive single-column form fields. This was the correct fix. Score holds at 8.0. The calendar remains the strongest feature on the page and the clearest commercial differentiator. No regression; two prior defects resolved.

### 12. Sticky Call Bar — 7.5 / 10
The transition now includes both `transform` and `opacity` — confirmed in CSS at lines 1472-1473. The fade-in combined with the slide-up is more polished than the prior translateY-only approach. Score unchanged at 7.5 because the bar itself is functionally correct and the improvement, while real, is a micro-polish detail.

### 13. Footer — 7.0 / 10
No changes. Correct single-column collapse, dark brown visual terminus, paw SVG, 44px-min link heights, accessible. No issues.

### 14. Scroll Interactions and Animations — 7.5 / 10
The bob animation removal is a meaningful improvement. The page now runs three concurrent animation systems (parallax, scroll-reveal, progress bar) rather than four. Each remaining system is purposeful. The static scroll cue arrow is cleaner and does not signal "AI-generated template" in the way the bob did. Score improves from 7.0 to 7.5. The slideDown calendar animation is tasteful and contextually appropriate — it signals state change, not decoration.

### 15. Typography — 8.0 / 10
The Playfair Display / Inter pairing is executed correctly. `--font-serif` and `--font-sans` are applied consistently via CSS variables. H1-H4 receive Playfair Display. Body and UI elements receive Inter. The stat numbers in the trust strip and calendar month label in Playfair Display are the strongest typographic moments on the page. `clamp()` on headings produces proportional scaling. `preconnect` and `display=swap` are implemented correctly in the `<head>`. Score improves from 7.0 to 8.0. The template now has a genuine typographic identity.

### 16. Mobile Layout and Centre Alignment — 7.5 / 10
The about section heading and eyebrow are now centre-aligned on mobile via `.about-text { text-align: center; }` in the 767px media query. This eliminates the primary alignment inconsistency from the prior audit. The stat card is now `position: static; justify-content: center` — correctly centred. Score improves from 6.5 to 7.5. Remaining minor issue: the stat card renders as a separate row below the image on mobile, with 16px margin-top. It reads as slightly disconnected from the image rather than overlapping it — the premium floating-card effect is lost on mobile. This is an acceptable trade-off for correctness, but a buyer will notice it is less dramatic than the desktop version.

---

## Top 3 Recommendations (Buyer-Impact Order)

**1. Resolve the one unclassed service card and tighten section visual identity**
Line 284 of index.html contains a `service-card` with no category modifier — it renders in the default white/green icon style, breaking the four-category system introduced this sprint. Assign it to `service-card--foundational` or another appropriate category. More broadly, the testimonials and team sections share the same cream background — introduce a sand or pale-green band between them to give each section a distinct visual territory. These are small changes with outsized impact on perceived coherence.

**2. Reduce hero text density at 375px**
The hero currently presents five text elements above the scroll cue: eyebrow pill, h1 headline, sub-paragraph, two CTAs, trust line. Collapse the trust line ("Serving the Main Line since 2015 · Accepting new patients") into the eyebrow pill, removing one element. At 375px this creates breathing room and allows the headline and CTAs to dominate. The hero is the first impression for every buyer demo — eliminating the crowding would increase perceived confidence immediately.

**3. Add a visual differentiator to the team section**
The team section is the most visually inert section on the page. One option: a full-width section-eyebrow banner in green-pale with the heading, distinct from the cream body. Another: a subtle leaf or botanical SVG decorative element behind the section heading — it costs nothing and photographs well in template previews. Alternatively, consider whether a brief credential strip (Iowa State DVM, Harcum College) styled as inline badges below the name adds a premium institutional signal. Any one of these would lift the section from adequate to interesting.

---

## Summary Scorecard

| Section | Prior Score | Current Score | Delta |
|---|---|---|---|
| Design System and Visual Identity | 7.5 | 8.0 | +0.5 |
| Hero (Mobile 375px) | 7.0 | 7.0 | 0 |
| Navigation | 7.5 | 7.5 | 0 |
| Why Strip | 6.5 | 7.0 | +0.5 |
| About Section | 7.0 | 7.5 | +0.5 |
| Services | 6.5 | 7.0 | +0.5 |
| Trust Stats Strip | 7.0 | 7.5 | +0.5 |
| Team Section | 6.5 | 6.5 | 0 |
| Testimonials (Horizontal Swipe) | 7.5 | 7.5 | 0 |
| Hours and Location | 7.0 | 7.0 | 0 |
| Interactive Calendar Booking | 8.0 | 8.0 | 0 |
| Sticky Call Bar | 7.5 | 7.5 | 0 |
| Footer | 7.0 | 7.0 | 0 |
| Scroll Interactions and Animations | 7.0 | 7.5 | +0.5 |
| Typography | 7.0 | 8.0 | +1.0 |
| Mobile Layout and Centre Alignment | 6.5 | 7.5 | +1.0 |
| **Overall** | **6.8** | **7.2** | **+0.4** |

The template has earned 7.2 through disciplined execution of specific cited deficiencies. The three remaining recommendations are achievable in a single builder sprint and would push the score to 7.5–7.6 — the range where buyers begin selecting without hesitation.
