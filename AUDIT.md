# Nigel's Audit — Main Line Mobile Vet Template
**Date:** 2026-04-09
**Auditor:** Nigel (strict British auditor — buyer perspective)
**Viewport:** 375px mobile
**Context:** Template for sale. Scoring from the perspective of a veterinary practice owner evaluating design quality and UX against commercial alternatives.

---

## Overall Score: 6.8 / 10

This is a genuinely competent template that is better than the average Squarespace or ThemeForest offering, but it has not yet crossed the threshold where a discerning buyer would choose it over a premium competitor without hesitation. The interactive calendar booking system and horizontal swipe testimonials are differentiating features. The visual identity is warm and coherent. However, several execution details hold it back from the 7.0+ tier where buyers open their wallets confidently.

---

## Section Scores

### 1. Design System and Visual Identity — 7.5 / 10
The green/cream token system is well-considered and consistent. The serif/sans pairing (Georgia + Helvetica Neue) is appropriate for a warm, professional practice. The warm amber accent is used sparingly and effectively. The dark footer with warm-white body creates a proper visual arc. Minor issue: `--sand` and `--cream` backgrounds are very close in value. On mobile the transitions between sections feel samey rather than structured. A more deliberate section rhythm — perhaps alternating with a full-bleed dark-green section sooner — would create clearer visual pacing.

### 2. Hero (Mobile 375px) — 7.0 / 10
Strong fundamentals: full-bleed photograph, gradient overlay, clear headline hierarchy, dual CTAs. The headline "Your vet comes to your door." is good copywriting. The parallax on scroll is smooth and properly rAF-gated. Issues: (a) The hero-eyebrow pill and the hero-trust line below the CTAs add two small blocks of text that create five distinct text elements before the scroll cue — crowded on 375px. (b) The scroll-cue bob animation is the default pattern from every AI-generated template in 2026. (c) The hero extends to 100vh, meaning users must scroll a full phone-height before any content is visible — acceptable, but risks higher drop-off rates on mobile.

### 3. Navigation — 7.5 / 10
Excellent implementation. The hamburger-to-X transition is clean, the full-screen overlay menu centres well at 375px, and tap targets are 52px height — proper accessibility practice. The sticky header is minimal and does not compete with content. The "Book a Visit" CTA is appropriately styled. Score docked only because the nav-logo text at 0.95rem beside a 36px image is slightly tight, and there is no 320px protection for the logo text, though 375px renders correctly.

### 4. Why Strip — 6.5 / 10
The 2x2 grid with divider-line gaps is a clever visual trick on mobile. However, the icons are the same Heroicons set used by approximately 40% of templates built in 2025-2026. They feel borrowed rather than owned. The copy is solid, but all four cells carry equal visual weight — there is no hierarchy guiding the eye to the most persuasive benefit. The sand background is nearly indistinct from the cream section above, undermining the section boundary.

### 5. About Section — 7.0 / 10
The floating dark-green stat card over the photo is a genuinely premium detail for minimal code cost. The 4/3 aspect ratio image with rounded corners works well. However, the stat card is positioned at `bottom: -24px; right: 0` — at 375px this clips the right edge of the card outside the viewport. This is a visual bug a buyer will notice. The copy is good. The left-aligned heading and eyebrow contrast with the centre-aligned headings in services and trust sections — inconsistent treatment.

### 6. Services — 6.5 / 10
Horizontal scroll at 75vw with scroll-snap is a competent mobile pattern. The "Compassionate End-of-Life Care" warm-amber card variant is a thoughtful visual break. However, all other 10 cards are visually identical: white background, green Heroicon, two lines of text. This is the default output from any AI site builder. No visual differentiation by category, no pricing indication, no scannable hierarchy. The section collectively reads as a list rather than a curated service portfolio.

### 7. Trust Stats Strip — 7.0 / 10
Dark green with large serif numerals is the right approach. The subtle decorative circles via ::before/::after add depth without noise. The 2x2 grid at 375px is appropriate. Score penalised because the stats are modest from a template showcase perspective — "11 services" and "2 counties served" will not impress a prospective buyer demoing the template. Illustrative numbers should be larger (e.g., 1,200+ patients) so buyers can envision the template at scale. The section rhythm also feels slightly off — it lands between services and team rather than anchoring a natural break.

### 8. Team Section — 6.5 / 10
Stacked single-column cards on mobile are appropriate. The image aspect ratio and object-position top are correct for portrait photos. However, the team bios are very long on mobile — Dr. Overhiser's bio runs to six lines of body copy with no truncation. A buyer evaluating this sees a wall of text at 375px. The heading "The people behind the paw prints." is a good line. The section background (sand) matches the preceding services section — two sand sections without a break.

### 9. Testimonials (Horizontal Swipe) — 7.5 / 10
The clearest differentiator on mobile. Three varied card colours (cream, warm amber, dark green) break the monotony. Serif italic body copy feels premium. Scroll-snap and drag-to-scroll are correctly implemented. Issues: (a) The 5rem quote mark takes up significant vertical space before the actual testimonial text on a 375px card. (b) The initial-letter avatars (a green circle with a single letter) are generic. Score would reach 8.0 with slightly more avatar visual distinction and a tighter quote-mark size on mobile.

### 10. Hours and Location — 7.0 / 10
The hours table with today's row highlighted in dark green with "(today)" appended is a polished, useful detail. The map embed rounds nicely into its card container. Score penalised because at 375px the vertical gap between the hours panel and map panel is 56px — generous to the point of feeling disconnected. Cumulative scroll depth across the full page is substantial on mobile.

### 11. Interactive Calendar Booking — 8.0 / 10
The strongest feature and clearest commercial differentiator. The three-step flow (calendar to time slots to form to confirmation) is well-conceived. Cal-day circles at 44px minimum maintain proper tap targets. The today marker (warm amber dot) is a micro-detail buyers will notice. The booking-summary-bar (dark green strip showing selected date/time above the form) is a genuinely professional UX pattern rarely seen in template markets. The confirmation state is complete.

Score held at 8.0 rather than 8.5 for two reasons: (a) The hours in the booking sidebar (Monday 12 PM-7 PM) do not match the hours table in the Hours section (Monday 12 PM-8 PM) — a data inconsistency a sharp buyer will catch. (b) The `bform-row` two-column layout at 375px is tight; the `max-width: 400px` breakpoint that converts it to single-column means 375-400px users receive cramped side-by-side fields.

### 12. Sticky Call Bar — 7.5 / 10
Correctly implemented. Appears after hero exits viewport, has a phone icon, full-width dark green treatment. Functions properly. Minor note: no visible animation on appearance beyond translateY — a very brief fade-in combined with the slide would feel more polished.

### 13. Footer — 7.0 / 10
Correct three-column to single-column collapse on mobile. The dark brown provides a proper visual terminus. The paw logo SVG is a nice brand reinforcement. Footer links have 44px min-height via flex — good accessibility practice. Footer-bottom copyright is appropriately subordinate. No significant issues.

### 14. Scroll Interactions and Animations — 7.0 / 10
The scroll progress bar is tasteful at 3px with a green gradient. The staggered reveal animations (0.05s to 0.26s delays) are correctly implemented and feel polished. The parallax is smooth. The reduced-motion override is properly implemented — earns points with conscientious buyers. Score penalised because the page now runs four concurrent animation systems simultaneously (bob, parallax, progress bar, scroll-reveal) plus slideDown on calendar elements. Individually each is tasteful; collectively they tip into "AI-animated" territory and undermine the claim to a distinct visual identity.

### 15. Typography — 7.0 / 10
The clamp() usage on headings is correct and produces good proportional scaling. The serif Georgia for pull quotes and stat numbers adds warmth. Body text at 1rem with 1.6 line-height is legible. The eyebrow labels are correctly subordinate. Score penalised because: (a) system fonts (Georgia, Helvetica Neue) give the template a slightly dated, stock feel — a custom Google Fonts pairing would increase perceived premium value significantly for a paid template without adding meaningful performance cost. (b) Section eyebrow labels are stylistically identical everywhere, reducing visual distinction between sections.

### 16. Mobile Layout and Centre Alignment — 6.5 / 10
Most sections centre correctly at 375px. However, centre-alignment is cited as a core requirement in AGENT-RULES.md and there are inconsistencies: (a) The about-text section heading and eyebrow are left-aligned on mobile while the services section uses explicit `.center` — this inconsistency breaks the contract. (b) The available-days list in the contact sidebar is left-aligned inside a pale-green card with no visual container logic. (c) The `bform-row` two-column grid at 375px is tight (see note under Calendar). The overall page achieves adequate but not excellent centre-alignment consistency at 375px.

---

## Top 5 Actionable Recommendations for Improving Sellability

**1. Add a web font pairing (highest single impact on perceived premium quality)**
Replace Georgia + Helvetica Neue with a Google Fonts pair. Recommended: Playfair Display for headings and stat numbers; Inter for body copy. One link tag and six CSS variable changes. This change alone will move the template from "looks competent" to "looks expensive" in buyer demos. Cost: zero. Performance impact: negligible with preconnect and font-display swap.

**2. Fix the about-stat-card viewport overflow and unify mobile heading alignment**
The stat card at `right: 0; bottom: -24px` clips outside the 375px viewport. Set `right: 16px` and reduce card padding slightly. Simultaneously add `text-align: center` to `.about-text .section-eyebrow` and `.about-text h2` inside a mobile media query — this makes the about section consistent with the centred treatment used everywhere else. Both fixes are two-line CSS changes.

**3. Introduce visual category variants across service cards**
The services section is the lowest-perceived-value section on the page. Using the existing design tokens, assign 3-4 colour variants to service cards by category (preventive care, specialist services, end-of-life, telemedicine). No new tokens needed — green-pale, sand, accent-warm-pale, and warm-white already exist. This transforms the section from a list into a portfolio and is the highest-visibility improvement after the font change.

**4. Reconcile hours data between the Hours section and the booking sidebar, and fix the bform-row breakpoint**
Monday shows 12 PM-8 PM in the hours table and 12 PM-7 PM in the booking sidebar. A buyer will notice this and question attention to detail. Fix the sidebar to match the hours table. Separately, move the `bform-row` single-column breakpoint from 400px to 480px so all common 375-400px devices receive properly spaced single-column form fields.

**5. Reduce the animation layer count and replace the bob scroll cue**
Remove the bob animation from the hero scroll cue — replace it with a static downward chevron or remove it entirely. The scroll context is already clear from the full-bleed hero layout. This removes one of the four concurrent animation systems and makes the remaining three (parallax, scroll-reveal, progress bar) feel more intentional and less AI-generated. The resulting page will photograph better in template marketplace previews and feel more editorially controlled.

---

## Summary Scorecard

| Section | Score |
|---|---|
| Design System and Visual Identity | 7.5 |
| Hero (Mobile 375px) | 7.0 |
| Navigation | 7.5 |
| Why Strip | 6.5 |
| About Section | 7.0 |
| Services | 6.5 |
| Trust Stats Strip | 7.0 |
| Team Section | 6.5 |
| Testimonials (Horizontal Swipe) | 7.5 |
| Hours and Location | 7.0 |
| Interactive Calendar Booking | 8.0 |
| Sticky Call Bar | 7.5 |
| Footer | 7.0 |
| Scroll Interactions and Animations | 7.0 |
| Typography | 7.0 |
| Mobile Layout and Centre Alignment | 6.5 |
| **Overall** | **6.8** |

With the five recommendations above implemented, this template would comfortably score 7.3-7.5 and represent a compelling commercial purchase. Currently it sits at 6.8 — better than most, not yet the one buyers choose without deliberation.
