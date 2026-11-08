# Verification report

**Checked on:** 6 November 2026, against https://rmfamilylaw.com and the final production build.
**Browser:** Chromium through Playwright. Safari and real phones were not tested.
**Sources and open conflicts:** see `CONTENT-INVENTORY.md`.

## Results

| Check | Result |
|---|---|
| Production build (`npm run build`) | Succeeded |
| Content checks against the live site | 99 passed, 0 failed |
| Layout, interaction and accessibility checks at 1440, 1280, 1024, 768 and 390px | 90 passed, 0 failed |
| Lowest contrast measured for white text on the teal gradients | 4.57:1 |

## What was compared with the live site

- **Phones and addresses:** every displayed number and address line appears on the live site, and every call link matches a displayed number.
- **Email:** the live site publishes none, and the demo shows none.
- **Testimonials:** all five excerpts appear word for word on the live testimonials page, with the correct names.
- **Navigation:** labels and destinations match the live menu, and all 14 live practice links are present.
- **Practice areas:** every name appears on the live site, and each featured card lands on a matching page.
- **Links:** all 20 links to the client site return 200. Avvo, Super Lawyers, social and map links come from the live site.
- **Credentials:** each one was matched to the attorney profile.
- **Logo and photos:** the saved source files are byte-identical to the live files, and no reference image is in the project.
- **Colours:** all 11 brand tokens are present on the live site. No reference-image colours appear in the code.
- **Reference content:** no reference text appears on the page, and the fintech-style elements have been removed. A search for guarantee and experience claims found none.

## Displayed content that is not word for word from the live site

Of 106 text blocks, 49 match the live site exactly. The other 57 fall into these groups.

### Combined blocks (facts verified separately)

Office and phone pairs, address blocks, award title and note pairs, "Call (559) 354-4397", repeated card text, and the footer copyright line. The copyright year is generated automatically.

### Rewritten for readability (for attorney approval)

| Displayed | Based on |
|---|---|
| About statement | About the Firm opening paragraph, shortened |
| "No matter what your needs are, Rebecca Medina can help." | Original also says "or how desperate you feel" |
| Collaborative Divorce, Mediation and Divorce card text | Homepage card text, shortened |
| Child Custody card text | Homepage card text, lightly edited |
| Why Choose reasons | Attorney profile and training history |
| "How to Get Started" steps | Contact form wording |
| "Submitting a form does not create an attorney-client relationship." | Contact form consent text |
| Stat labels and award notes | Attorney profile |
| "Legally, financially, and emotionally" caption | Attorney profile |

### New wording written for this design (for attorney approval)

- **Section headings:** "A Healthier, More Holistic Approach to Family Transitions" (drawn from the About the Firm text), "Why Families Choose Rebecca Medina", "A Better Way Than Litigation", "Honest, Direct, Committed", "How to Get Started".
- **Labels and buttons:** "Learn More" and "All Practice Areas".
- **Testimonial disclaimer:** "Testimonials do not guarantee or predict a similar outcome." This line is not on the live site.

## Could not be verified from the website

- **Which Fresno phone and Clovis suite are current.** See the conflicts in `CONTENT-INVENTORY.md`.
- **Who the other people in the photos are, and reuse permission** for all photos, including the logo files.
- **Whether the awards are still current.** The newest listed are from 2016.
- **The "Client's Choice" and "Rising Star" status today.** The demo shows the dates from the site, and the third-party profiles were linked but not audited.
- **Whether any wording meets California attorney advertising rules.** This needs the attorney's review.

## Not from the client

- **Favicon:** a simple "RM" placeholder, because the site's own favicon was not collected.
- **Fonts:** EB Garamond and Lato, chosen as a law-firm pairing. The logo keeps its original lettering.
- **Supporting shades:** listed in `CONTENT-INVENTORY.md`.
