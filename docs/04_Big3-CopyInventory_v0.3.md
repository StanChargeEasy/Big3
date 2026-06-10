# Website Copy — Inventory & Brief v0.3

**Date:** 2026-06-07 (v0.3) · Defines every string the site needs, what's MVP-critical, who writes it, and the language treatment. "Locked" = final approved text in all 3 languages, stored as `en.yaml / de.yaml / es.yaml` (UI), `big3.{lang}.yaml` (archetypes), and Markdown+frontmatter (pages) that Claude Code imports for i18n.
**v0.3 changes:** revised one-liner · corrected keyword anchors · funnel emphasis flipped (CHF 180 primary, CHF 20 secondary) · relationship reading CHF 250 (180+70) · Google Meet · 5 real testimonials · EN confirmed as source language.

---

## 1. Voice & tone brief
- **Positioning one-liner (v0.3):** *"Human astrology in English, German and Spanish — read by a real astrologer, not an algorithm. Your Big 3 free; a full natal reading when you're ready."*
- **Voice:** warm, human, premium, psychological, plain-spoken with a light poetic touch. First/second person. Confident, non-fatalistic, not mystical-vague.
- **Do:** name the practitioner; be specific; lead with the answer (GEO); concrete benefits next to every CTA; **one primary action per screen = book the full reading**; CHF 20 call as the secondary "not sure?" path.
- **Don't:** generic horoscope filler; AI-sounding hedging; fear-based urgency; medical/financial/legal claims; reproduce any third-party astrologer's text.
- **Disclaimer stance:** astrology for self-reflection and insight, not medical/psychological/financial/legal advice. (About + footer + terms + pillars.)

## 2. Inventory
| # | Copy block | MVP? | Language treatment | Owner | Status (EN) |
|---|---|---|---|---|---|
| 1 | Hero (headline, subhead, CTAs) | ✅ | hand-write per language | Gabriela | **Done v1.0** |
| 2 | Big-3 form (labels, helper, "no birth time" fallback) | ✅ | AI-translate + edit | Gabriela | **Done v1.0** |
| 3 | Big-3 result: 12 Sun + 12 Moon + 12 Rising + synthesis | ✅ | AI-translate + edit (EN source first) | Gabriela | **Done v1.0** (36 + 13 fragments + template) |
| 4 | Result-page CTA (→ full reading primary; call secondary) | ✅ | hand-write per language | Gabriela | **Done v1.0** |
| 5 | Full reading page (CHF 180): value, inclusions | ✅ | hand-write per language | Gabriela | **Done v1.0** (primary) |
| 6 | Intro-call page (CHF 20): "not sure? meet first" | ✅ | hand-write per language | Gabriela | **Done v1.0** (secondary) |
| 6b | Relationship reading page (CHF 250 = 180+70) | ✅ | hand-write per language | Gabriela | **Done v1.0** |
| 7 | About: bio, credentials, caption, disclaimer | ✅ | hand-write per language | Gabriela | **Done v1.0** (Person schema) |
| 8 | Booking/checkout + confirmation (Google Meet) | ✅ | AI-translate + edit | Gabriela | **Done v1.0** |
| 9 | Testimonials (5 real, first name + city) | ✅ | native per language | clients (real) | **Done v1.0** |
| 10 | Pillar blog: 3 per language at launch | ✅ | hand-write per language | Gabriela | **Done v1.0 (EN)** |
| 11 | Nav, footer, UI strings | ✅ | AI-translate + edit | Gabriela | **Done v1.0** |
| 12 | Legal: Impressum, AGB, refund, short privacy | ✅ (light) | templated per language | Stan/Gabriela | **Done v1.0** (UID pending) |
| 13 | Blog beyond pillars | ✗ deferrable | hand-write/AI-assist | Gabriela | Post-launch cadence |
| 14 | Extra pages (e.g. courses) | ✗ deferrable | — | — | v0.4 backlog |

## 3. Per-language keyword anchors (corrected)
- **EN:** "free birth chart", "calculate your rising sign and its meaning", "calculate your moon sign and its meaning"
- **DE:** "Geburtshoroskop kostenlos", "Aszendent berechnen und Bedeutung herausfinden", "Mondzeichen berechnen und Bedeutung herausfinden"
- **ES:** "carta astral gratis", "calcula el signo lunar", "calcula el ascendente y su significado"

## 4. Production workflow (locked)
Draft **EN first** → review samples → finalize → translate to DE/ES **only at the end** (DE incl. ß→ss; ES Spain/LatAm). SEO-critical blocks (1, 4, 5, 6, 6b, 7, 10) hand-written per language; functional blocks (2, 3, 8, 11) AI-translated + edited.

## 5. Definition of "locked"
A block is locked when its final text exists in all three languages, is stored in the locale/data files, and is referenced in the build. **EN source set is complete (v1.0); DE/ES translation pending.** The funnel set (1–9, 11, 12) and pillar set (10) lock before launch; blog (13) is a rolling stream.

## 6. Open items
- **UID** for the Legal Notice (add once GmbH registered).
- Confirm the 5 testimonials are publishable as shown (real clients, consent to first name + city).
- Legal templates are starting drafts, not legal advice; light EU-marketing check optional.
