---
name: big3astrology-design
description: Use this skill to generate well-branded interfaces and assets for Big 3 Astrology (a Geneva-based astrology consulting practice), either for production or throwaway prototypes/mocks/social content. Contains essential design guidelines, colors, type, fonts, logos, celestial assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full design guide
(brand context, content/voice rules, visual foundations, iconography) and the manifest
of everything available. Then explore the other files as needed.

**Key paths**
- `styles.css` — link this one file to inherit all tokens, fonts and base styles.
- `tokens/` — colors, typography, spacing CSS custom properties.
- `assets/logos`, `assets/icons` (sun/moon/libra trinity glyphs), `assets/brand` (watercolour hero).
- `components/` — React primitives (Button, Badge, Eyebrow, Card, TrinityMark, CelestialDivider, ZodiacGlyph, StarRating, Logo). Each has a `.prompt.md` with usage.
- `ui_kits/instagram` — the 7 Big 3 post templates + feed (the core product).
- `ui_kits/website` — consulting/booking landing page.

**How to work**
- If creating **visual artifacts** (Instagram posts, slides, mocks, throwaway prototypes):
  copy the assets you need out, link `styles.css`, and build static HTML files for the
  user to view. Reuse the post-template patterns in `ui_kits/instagram/posts.jsx`.
- If working on **production code**: copy assets and read the rules here to become an
  expert in designing with this brand; mirror the token names and component contracts.
- Honor the brand: warm cream grounds (never stark white), the wine/coral/gold trinity,
  Playfair serif headlines + tracked Jost capitals + Mulish body, thin celestial line-work,
  astrological glyphs instead of emoji, gentle fades (no bounce).

If the user invokes this skill without other guidance, ask what they want to build or
design, ask a few focused questions, then act as an expert designer who outputs HTML
artifacts *or* production code depending on the need.
