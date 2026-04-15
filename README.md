# Main Line Mobile Vet — Template

A premium mobile-first website template for veterinary practices. Built with semantic HTML, vanilla CSS, and lightweight JavaScript. No build step required.

---

## Buyer Customisation Steps

### Step 1 — Replace the contact email in the footer

The footer contains a real-looking placeholder email address. Find and replace it before going live.

**File:** `index.html`, line 760

Replace:

```html
<p><a href="mailto:info@mainlinemobilevet.com">info@mainlinemobilevet.com</a></p>
```

With your clinic's actual email address in both the `href` attribute and the visible text.

---

### Step 2 — Handle the Alex Torres placeholder card

The third team member (Alex Torres, Veterinary Assistant) is a demo card using a stock photo. It is marked with an HTML comment in the source.

**File:** `index.html`, line 404

```html
<!-- PLACEHOLDER: This third team member is a demo card. Replace or remove for your clinic. -->
```

Options:
- Replace with a real team member's name, photo, credentials, and bio.
- Delete the entire `<article class="team-card ...">` block if your practice has only two staff members to feature.

---

### Step 3 — Unsplash photo credits

This template uses images from [Unsplash](https://unsplash.com). Unsplash photos are free for commercial use under the [Unsplash License](https://unsplash.com/license), but attribution is appreciated.

If your jurisdiction or platform requires attribution, add a credits page or footer note listing the photographers. You can find each photo's author by searching the photo ID (the long alphanumeric string in each `images.unsplash.com` URL) on unsplash.com.

**Recommended:** Replace all Unsplash photos with licensed images of your actual clinic, staff, and patients before launching commercially. This removes any ambiguity and gives the site a more authentic feel.

---

## Live Preview

[https://zed0minat0r.github.io/vet-site/](https://zed0minat0r.github.io/vet-site/)
