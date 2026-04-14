# Audit: Main Line Mobile Veterinary Services

**Auditor:** Nigel
**Date:** 2026-04-09
**Site:** https://zed0minat0r.github.io/vet-site/
**Perspective:** Real pet owner — 375px mobile
**Context:** Fresh rebuild, first audit. Scored as a live business site.

---

## Scoring Scale

| Score | Meaning |
|-------|---------|
| 5.0 | Average — functional but unremarkable |
| 5.5 | Functional but generic |
| 6.0 | Generic template feel |
| 7.0 | Genuinely better than most — HIGH bar |
| 8.0 | Client would choose over competitors |
| 9.0 | Award-worthy |
| 10.0 | Perfect |

---

## Section-by-Section Scores

### 1. First Impression / Hero — 6.2 / 10

The headline "Vet care in the comfort of your home." is clear and benefit-focused. Dr. Overhiser's name appears in the sub-line, which is correct. The call-to-action phone number is front and center — good instinct for a service business.

Problems: the hero image is a generic Unsplash dog-in-field stock photo (photo-1587300003388-59208cc962cb). A real pet owner immediately registers this as a template site. The "See services" ghost button on a dark overlay competes with the primary CTA and dilutes the call to action. The animated scroll cue arrow adds motion for no functional gain on mobile — most users know to scroll. The hero is full-viewport-height which is appropriate, but the composition is entirely standard and indistinguishable from 200 other mobile-first vet sites.

Score rationale: competent, but anyone who has seen a website before will feel this was built with a template. Nothing here is distinctive to Main Line Mobile Vet specifically.

---

### 2. Navigation — 6.5 / 10

Hamburger menu is properly implemented with aria-expanded, body overflow lock, and close-on-outside-click. Tap targets hit 44px minimum. The full-screen overlay mobile menu is a reasonable choice.

Problems: the nav logo reads "Main Line Mobile Vet" as plain text with a generic paw SVG — no real brand presence. The "Book a Visit" CTA in the nav does not link to a booking system; it anchors to the contact form which requires the user to fill out a message. For a service business, this is a significant friction point. Users expect to see available times or at minimum a phone call trigger, not a web form.

---

### 3. Why Strip (Value Propositions) — 5.8 / 10

Four 2-column grid items covering "We come to you," "No waiting rooms," "Anxiety-friendly," "One-on-one care." These are the correct selling points for a mobile vet.

Problems: these are generic to all mobile vets. There is nothing here specific to Dr. Overhiser or Main Line. The icons (house, clock, heart, people) are stock Heroicon outlines — the visual vocabulary of a thousand SaaS landing pages, not a warm veterinary practice. The 2-column grid at 375px is tight; the text "Your pet stays in their safe space" wraps awkwardly at narrow widths. This section does its job but adds no distinctiveness.

---

### 4. About Section — 6.0 / 10

Copy is honest and direct. The service area is stated clearly. The floating stat card ("Chester Springs, PA / Serving Chester & Montgomery County") is an attempt at visual interest.

Problems: the about image is a Unsplash happy-dog photo, not a photo of Dr. Overhiser at work. For a solo-practitioner mobile vet, the doctor's face and personality IS the product. A real pet owner choosing between two mobile vets will go with the one whose doctor they can see and relate to. The stat card contains no actual stat — it just restates the location already in the text. Wasted opportunity. The CTA "See what we offer" scrolling to services is weak — a better CTA here would be "Meet Dr. Overhiser" or a direct booking prompt.

---

### 5. Services Grid — 6.3 / 10

Eleven services listed, which is comprehensive and accurate for a mobile vet practice. The horizontal scroll carousel on mobile is appropriately implemented with scroll-snap. The compassionate end-of-life card has distinct warm styling, which is correct — this service deserves visual differentiation.

Problems: at 375px, cards are 75vw wide, meaning users see ~1.3 cards — the scroll affordance is not obvious. There is no scroll indicator, drag handle hint, or "scroll for more" cue. On iOS Safari, many users will simply not discover the remaining 9 cards. The service descriptions are single-sentence, which is appropriate for a card, but the icons are all generic Heroicons — the vaccine card uses a flask icon and the medical services card uses a sun icon, which are not intuitive mappings. Eleven cards is also heavy for mobile scroll — consider whether some could be grouped.

---

### 6. Photo Feature Strip — 5.5 / 10

A horizontally scrollable strip of six Unsplash pet photos on a dark green background. The accompanying text is "Your home is the best exam room" — a decent line.

Problems: every single image is a stock photo. A pet owner looking at this section will instinctively know these are not Dr. Overhiser's patients. The section adds visual bulk without adding trust or information. It reads as filler. The dark green background with white text and a strip of random dog/cat photos is the most "AI-built website" section on the page. If real photos are unavailable, this section should be replaced with something that builds credibility — a short bio video embed, a Google review summary, or a simple stat block (e.g., "500+ home visits across Chester County").

---

### 7. Team Section — 5.8 / 10

Two team members: Dr. Sarah Overhiser and Donna. The bios reference real credentials (Iowa State 2015, Harcum College Bryn Mawr) which adds authenticity.

Problems: both team photos are Unsplash stock portrait photos — generic professional headshots of people who are clearly not Dr. Overhiser or Donna. This is the single biggest trust problem on the site. A prospective client who recognises that the team photos are stock photos will immediately question whether the practice is legitimate. The bio copy is well-written but undone by fake faces. Additionally, "Donna" has no last name, which reads as incomplete content.

---

### 8. Testimonials / Pull Quotes — 5.2 / 10

Three rotating testimonials with dot navigation. The testimonial content is relevant and emotionally resonant, particularly the end-of-life quote.

Problems: the citations are generic to the point of uselessness — "Chester County pet owner," "Montgomery County family," "Main Line pet parent." No first name, no pet name, no date. These read as invented quotes. On a real business site in 2026, pet owners cross-reference Google reviews. Unattributed quotes with auto-rotate at 4.5 seconds feel like filler. The carousel auto-advances without any pause-on-hover or user control beyond dots — a minor accessibility concern. This section would perform better as a link to actual Google reviews or as two or three static attributed quotes with at minimum a first name.

---

### 9. Hours and Map — 7.0 / 10

This is the best-executed section on the site. The hours table is accurate to the actual business (Monday 12–8, Tuesday–Wednesday 9–7/8, Thursday 9–4, closed Fri–Sun). The map embeds Chester Springs, PA. The phone CTA repeats here, which is correct. The layout at mobile is single-column stack, which works well.

Minor issues: the hours table has no visual emphasis on today's hours (a useful pattern for users checking "are they open now?"). The map embed uses a placeholder iframe src with fake coordinates that may not render correctly. The "hours note" ("Serving Chester and Montgomery County, PA. Travel available upon request.") is appropriate but could be more specific about what "travel available" means in terms of radius or fee.

---

### 10. Contact Form — 6.5 / 10

Good: five fields (name, email, phone, pet name/type, message), client-side validation, success state. The pet name and type field is a thoughtful touch specific to vet care. Form styling is clean, focus states are accessible.

Problems: the form does not submit to any backend. The "success" message fires on client-side validation only — no email is sent anywhere. A real business deploying this site today would have zero contact form leads. This is a critical gap. Additionally, no email address is displayed as a fallback. For mobile users, the preferred action should be a tap-to-call button — the phone number should be more visually dominant than the form submission.

---

### 11. Footer — 6.5 / 10

Three-column footer (brand, navigate, reach us) collapses to single column on mobile. Social links are present (Instagram, Facebook). Copyright year is dynamically set via JS.

Minor issues: the footer nav links are redundant with the main nav. The social handles link to real-seeming URLs but are unverified. No email address visible anywhere on the page — unusual for a professional services site.

---

## Overall Score: 6.1 / 10

**Verdict:** This is a competent, well-structured first build. The code quality is genuinely good — semantic HTML, accessible markup, reasonable CSS architecture, mobile-first layout. The developer clearly knows what they are doing technically.

However, from a real pet owner's perspective, this site has a fundamental trust problem: stock photos throughout, unattributed testimonials, a non-functional contact form, and no real photography of Dr. Overhiser or her patients. The design language is polished but entirely generic — warm greens, cream backgrounds, Heroicons, Georgia serif, the now-ubiquitous "section eyebrow + large heading" pattern. It looks like every other mobile-first small-business site built in 2024–2026.

A pet owner in Chester County comparing two mobile vet websites would not choose this one over a competitor site that shows the actual vet's face, real patient photos, and a Google review count. The site communicates competence but not personality, trust, or differentiation.

---

## Top 5 Actionable Recommendations

### Priority 1 — Replace stock team photos (Critical)
Dr. Overhiser's face is the product. The Unsplash headshots will destroy trust with any user who recognises them as stock photos. At minimum, use a real photo of Dr. Overhiser — even a good smartphone portrait. Until real photos are available, consider replacing the team section with a text-only bio card to avoid the stock photo credibility problem.

### Priority 2 — Connect the contact form to a real backend
The form silently "succeeds" without sending any data. Integrate Formspree, Netlify Forms, or a similar no-cost static-site form handler so that actual leads are captured. Until this is fixed, the site cannot generate business. This is the single most damaging functional gap.

### Priority 3 — Replace or radically rethink the photo feature strip
Six random Unsplash pet photos on a dark background adds no trust and screams "AI-built site." Replace with: (a) a Google Reviews widget showing real review count and stars, (b) a simple stat block ("Est. 2015 / 500+ home visits / Chester & Montgomery County"), or (c) remove the section entirely and use the space for a stronger testimonial with attribution.

### Priority 4 — Add real attributed testimonials
"Chester County pet owner" is not a testimonial — it is a placeholder. Replace with quotes that include at minimum a first name and pet name (e.g., "— Jennifer S. and her golden retriever Max"). Real pet owners check Google before booking a vet. Either embed Google reviews or link directly to the Google Business profile. The auto-rotating carousel at 4.5 seconds should also slow down or pause on focus.

### Priority 5 — Make phone number the primary CTA on mobile, not the form
A pet owner with an urgent or anxious pet will tap to call, not fill out a form. On mobile at 375px, the primary action should be a large, sticky tap-to-call button (or at minimum a floating call button). The current "Send Message" form as the main contact mechanism is a desktop-era pattern. Ensure the phone number is immediately visible and tappable in the hero, the contact section, and ideally a persistent sticky bar.

---

*Audited by Nigel — strict scoring from a real pet owner's perspective. Scores reflect live business standards, not template standards.*
