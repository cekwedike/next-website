# NEXT: New Era Xceptional Talent
**by Energize Music**

Africa's first pan-African Afrogospel talent competition and music incubator.

**Live site:** https://next-afrogospel.vercel.app/

---

## About the Project

NEXT is a six-phase Afrogospel talent competition that runs from May to October 2026. Artists from across Africa submit video renditions of themselves performing. Fans vote. The top talent gets showcased, mentored, recorded, and launched through the ENERGIZE Afrogospel Album and a major launch concert.

This website is a single-page landing site deployed on Vercel at https://next-afrogospel.vercel.app/. It serves as the public face of the competition before, during, and after the submission window.

---

## File Structure

```
/
├── index.html          Main HTML structure and content
├── css/
│   └── styles.css      All styles — reset, typography, variables, layout, components
├── js/
│   └── main.js         Lucide icon init, hero carousel, scroll effects, form handler
└── README.md           This file
```

---

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript. No frameworks. No build tools. No dependencies to install.

External resources loaded via CDN only:
- Space Grotesk and Playfair Display via Google Fonts
- Lucide Icons via CDN for all iconography
- Unsplash for all stock photography

---

## Sections

1. **Hero** - Full viewport with animated text, looping background carousel, and a mission-driven CTA card
2. **What Is NEXT** - Overview of the competition with the Discover, Develop, Launch pillars
3. **The Six Phase Journey** - Phase 01 through Phase 06 laid out in a card grid
4. **For Artists** - Submission steps and CTA
5. **Kingdom Creatives Academy** - The NEXT x KCA pipeline explained in four tiers
6. **Stay Connected** - Email subscription and social links
7. **Footer** - NEXT branding and copyright

---

## Brand Colors

| Token | Value | Usage |
|---|---|---|
| Background primary | #0A0A0A | Page background |
| Background secondary | #111111 | Section alternates |
| Accent | #F5A623 | Buttons, highlights, icons |
| Text primary | #FFFFFF | All headings and body |
| Text secondary | rgba(255,255,255,0.9) | Supporting text |
| Card background | rgba(255,255,255,0.04) | Glassmorphism cards |
| Card border | rgba(255,255,255,0.08) | Card borders |

---

## Social Links

| Platform | Handle | URL |
|---|---|---|
| Instagram | @energizecentral | https://www.instagram.com/energizecentral/ |
| YouTube | @Energize_HQ | https://www.youtube.com/@Energize_HQ |
| X (Twitter) | @energizecentral | https://x.com/energizecentral |

---

## Competition Timeline

| Phase | Title | Period |
|---|---|---|
| 01 | Launch and Submissions | May 4 to May 31, 2026 |
| 02 | Social Showcase | June 1 to June 21, 2026 |
| 03 | Public Voting | June 1 to July 13, 2026 |
| 04 | Album Creation | July to August 2026 |
| 05 | Pan-African Block Parties | September 2026 |
| 06 | Album Launch Concert | October 2026 |

---

## Submission System

The artist submission system is live. It uses **Tally** for the submission form and **Airtable** as the backend database. No custom server required.

**Submission form:** https://tally.so/r/ob7Px1

All submission CTAs on the site link directly to this form, which opens in a new tab.

### What Tally Handles
- Artist name, stage name, country, email, phone, bio
- Video rendition link (required) — this is what gets showcased on social media during Phase 2
- Original song link (optional)
- Form validation and confirmation emails to artists on submission

### What Airtable Handles
- Receives every submission automatically from Tally
- Allows the team to filter submissions by country
- Allows judges to review, score, and leave notes on each entry
- Tracks total submission count

### Connection
Tally and Airtable are connected via automation. Every form submission creates a new row in Airtable with all the artist's details.

### Target Countries for Internal Tracking
Nigeria, Ghana, Kenya, Uganda, South Africa. Airtable filters allow the team to see submission counts per country without this being visible to the public.

---

## Email Subscription

The Stay Connected section uses **Formspree** for the email subscription form.

**Formspree endpoint:** https://formspree.io/f/mdayknvl

Submissions are handled via a `fetch` POST with JSON. On success the button confirms subscription; on failure it prompts the user to try again. No page reload occurs.

---

## Deployment

The site is deployed on **Vercel** at https://next-afrogospel.vercel.app/

It is a static single-page build with no server, build step, or dependencies to install. Any changes pushed to the connected repository will redeploy automatically via Vercel's Git integration.

---

## Notes
