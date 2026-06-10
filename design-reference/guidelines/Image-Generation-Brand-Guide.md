# Big3 Astrology — Brand & Image-Generation Guide

Boutique, human astrology *consulting* (Zürich / Küsnacht ZH). Editorial, warm, premium, psychological — **not** mystical-cliché, not neon-cosmic, not fortune-teller kitsch. Trilingual EN/DE/ES.

---

## 1. Color tokens (exact hex)

### Brand triad — the "Big 3" (Sun · Moon · Ascendant)
| Token | Hex | Role |
|---|---|---|
| `--b3a-wine` | **#A4426C** | **Primary** (Moon). Buttons, links, focus. |
| `--b3a-wine-700` | #8E3760 | Wine hover |
| `--b3a-wine-deep` | #7C2F50 | Wine pressed / dense blocks |
| `--b3a-coral` | **#F27678** | **Accent** (Sun). Highlights, eyebrows. |
| `--b3a-coral-600` | #E85F61 | Coral text/error |
| `--b3a-coral-soft` | #F8A6A6 | Soft coral |
| `--b3a-gold` | **#E6A44E** | **Secondary** (Ascendant). Stars, arcs. |
| `--b3a-gold-deep` | #C9852F | Gold text on light |

### Ink & neutrals (warm)
| Token | Hex | Role |
|---|---|---|
| `--b3a-ink` | #1B1B1B | Headings, wordmark |
| `--b3a-charcoal` | #3D4047 | Dark cards, footer |
| `--b3a-ink-500` | #6E665F | Body / secondary text |
| `--b3a-ink-400` | #948B82 | Captions, placeholders |
| `--b3a-line` | #ECE0D5 | Hairline border |
| `--b3a-line-strong` | #DBCBBC | Stronger border |

### Surfaces (warm creams — never pure white pages)
| Token | Hex | Role |
|---|---|---|
| `--b3a-cream` | **#FEF9F5** | Page background |
| `--b3a-ivory` | #FBF3EC | Deeper paper |
| `--b3a-sand` | #F3E7DC | Tan panels |
| `--b3a-blush` | #F9E6E2 | Soft coral wash |
| `--b3a-plum-wash` | #EFD9E1 | Soft wine wash |
| `--b3a-white` | #FFFFFF | Cards only |

**Image palette rule:** backgrounds live in the cream/sand/blush family (#FEF9F5 → #F3E7DC). Subjects and accents use the triad (#A4426C wine, #F27678 coral, #E6A44E gold). Ink details in #1B1B1B. No cold blues, no pure black, no saturated purple "galaxy" gradients.

---

## 2. Typography

**Pairing (3 voices):**
- **Playfair Display** (serif, high-contrast) — display, hero lines, emotive/quotable text. Use italics for emphasis (e.g. *"read by a person"*). Weights 400–800.
- **Jost** (geometric sans, Futura-like) — wordmark, eyebrows, ALL-CAPS labels. Tracked: letter-spacing 0.16em label / 0.34em micro.
- **Mulish** (humanist sans) — body, UI, captions. Line-height 1.62.

Google Fonts: `Playfair Display`, `Jost`, `Mulish`.

Scale (px): display-xl 72 · display 54 · h1 40 · h2 30 · h3 24 · title 20 · body-lg 18 · body 16 · body-sm 14 · label 13 · caption 12.

---

## 3. Radius / spacing / shadow / motion

**Spacing** — 4px base: 4·8·12·16·20·24·32·40·48·64·80·96·128. Gutter 24px, content max 1180px.

**Radii** (restrained — mostly square/lightly-rounded): xs 3 · sm 6 · md 10 · lg 16 · xl 22 · pill 999 · circle 50%.

**Shadows** (warm, wine-tinted, soft — never grey/hard):
- card `0 14px 38px -18px rgba(124,47,80,0.22)`
- lg `0 28px 60px -24px rgba(58,30,44,0.28)`

**Motion** — gentle fades, no bounce. ease-out `cubic-bezier(0.22,0.61,0.36,1)`; durations 140 / 240 / 420ms.

---

## 4. Image & illustration generation — LLM instructions

### Master style prompt (the base — prepend to every request)

> **Premium editorial illustration for a psychological-astrology brand.**
> Calm, warm, grounded, a little celestial. Think *"thoughtful psychology practice with a cosmic touch"* — NOT mystical-kitsch, NOT neon zodiac, NOT fortune-teller, NOT cartoon zodiac symbols, NOT stock photography.
> **Palette ONLY:** primary wine **#A4426C**, accent coral **#F27678**, secondary gold **#E6A44E**, neutrals warm cream **#FEF9F5** / sand **#F3E7DC** / ink **#1B1B1B**.
> Soft gradients, subtle grain, generous negative space. Flat/textured vector-illustration feel with a hand-painted watercolor edge (not 3D render, not photoreal). Matte finish, gentle imperfect brushwork, airy composition — subject occupies ≲60% of frame with calm margins around it.
> **NEGATIVE:** no text, letters or numbers; no human faces or figures; no literal zodiac wheel / tarot / crystal-ball imagery; no logos; no watermark; no purple-blue galaxy gradients; no glossy/metallic/neon; no lens flare.
> **Output 4 distinct variations.**

*Tune freely:* you can lean more "flat vector" or more "watercolour wash" per asset, add one neutral (charcoal #3D4047, blush #F9E6E2, plum-wash #EFD9E1) when a piece needs it, and relax the "no figures" rule only for the About portrait (see below). Keep the palette and the NOT-list intact — those carry the brand.

### Per-use prompts (append to the master prompt above)

**Hero / brand emblem** — "A loose triangular composition suggesting the 'Big 3': a radiant coral form at one point, a wine crescent at another, a gold balancing arc at the base, linked by thin ink constellation lines. Centered, lots of cream space around it."

**Sun (drive / vitality):** "A coral #F27678 radiant sun-burst with soft painted rays, single celestial focal point on cream."
**Moon (safety / inner world):** "A wine #A4426C crescent moon with soft pigment bleed and a few small gold stars, on cream."
**Ascendant (first impression):** "A gold #E6A44E rising arc over a thin horizon line, balanced and poised, watercolor on cream."

**Section / blog accents:** thin single-weight ink line-art — constellations, dotted orbits, sparse 4-point stars (✦), crescents, soft tinted blobs. Decorative and quiet, never busy.

**About / portrait (the one exception to 'no figures'):** prefer a **real photo** of Gabriela — warm natural editorial portrait in a calm Zürich studio, cream/sand tones, soft daylight, approachable and grounded; NOT a stock crystal-ball mystic. If illustrated instead, keep figures abstract/faceless and on-palette.

### Output specs
Transparent PNG for glyphs/line-art accents; cream-filled for scenes/hero. Hero ~1600×1200+, provide @1x/@2x. JPEG (compressed) for photos, PNG for illustration. Generate 4 variations, pick 1–2.
