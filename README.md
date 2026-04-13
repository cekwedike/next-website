# NEXT: New Era Xceptional Talent
**by Energize Music**

Africa's first pan-African Afrogospel talent competition and music incubator.

---

## About the Project

NEXT is a six-phase Afrogospel talent competition that runs from May to October 2026. Artists from across Africa submit video renditions of themselves performing. Fans vote. The top talent gets showcased, mentored, recorded, and launched through the ENERGIZE Afrogospel Album and a major launch concert.

This website is a single-page landing site hosted on the Energize Music domain. It serves as the public face of the competition before, during, and after the submission window.

---

## File Structure

```
/
├── index.html          Main HTML structure and content
├── css/
│   ├── styles.css      Base styles, reset, typography, variables, navbar
│   ├── sections.css    Section-specific styles and hero animations
│   └── components.css  Cards, buttons, forms, icons, and footer
├── js/
│   └── main.js         Lucide icon init, hero carousel, form handler
└── README.md           This file
```

---

## Tech Stack

Pure HTML, CSS, and vanilla JavaScript. No frameworks. No build tools. No dependencies to install.

External resources loaded via CDN only:
- Space Grotesk and Bebas Neue via Google Fonts
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
| Instagram | @energize_music | https://www.instagram.com/energize_music |
| YouTube | @energize_music | https://www.youtube.com/@energize_music |
| X (Twitter) | @energize_music | https://twitter.com/energize_music |

---

## Competition Timeline

| Phase | Title | Period |
|---|---|---|
| 01 | Launch and Submissions | May 4 to May 31, 2026 |
| 02 | Top 50 Social Showcase | June 1 to June 21, 2026 |
| 03 | Public Voting | June 22 to July 13, 2026 |
| 04 | Album Creation | July to August 2026 |
| 05 | Pan-African Block Parties | September 2026 |
| 06 | Album Launch Concert | October 2026 |

---

## Submission System (To Be Set Up)

The artist submission system has not been built yet. The plan is to use **Tally** for the submission form and **Airtable** as the review database. This setup requires no custom backend and can be live within a few hours.

### What Tally Handles
- Artist name, stage name, country, email, phone, bio
- Video rendition link (required) - this is what gets showcased on social media during Phase 2
- Original song link (optional)
- Form validation and confirmation emails to artists on submission

### What Airtable Handles
- Receives every submission automatically
- Allows the team to filter submissions by country
- Allows judges to review, score, and leave notes on each entry
- Tracks total submission count toward the 1,000 cap
- Flags when the cap is approaching so the portal can be closed

### Connection
Tally and Airtable connect via a free Zapier or Make automation. Every time a form is submitted on Tally, a new row is created in Airtable automatically with all the artist's details.

### Steps to Set Up (When Ready)
1. Create a free Tally account at tally.so
2. Build the submission form with all required fields
3. Create a free Airtable account at airtable.com
4. Set up a new base called "NEXT Submissions" with columns matching the form fields
5. Connect Tally to Airtable using Zapier or Make
6. Test with five dummy submissions to confirm data flows correctly
7. Embed the Tally form into the For Artists section of index.html using the Tally embed code
8. Replace the current static CTA buttons with the live embedded form or link to it

### Target Countries for Internal Tracking
Nigeria, Ghana, Kenya, Uganda, South Africa. Airtable filters allow the team to see submission counts per country without this being visible to the public.

---

## Deployment

The site is a static single-page build. No server required. Drop the files into the Energize Music hosting environment and point the subdirectory or subdomain to index.html.

---

## Notes
