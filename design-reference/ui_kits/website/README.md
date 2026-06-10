# Website Kit — Big 3 Astrology

A **brand-extension** marketing & booking landing page for the consulting practice.

> ℹ️ There is no existing Big 3 website in the supplied materials — this kit is a
> **proposal** built entirely from the brand foundations (tokens, logos, celestial
> assets, voice). Treat it as a starting point, not a recreation.

Open `index.html`. Single scrolling page:

1. **Nav** — logo + links + "Book a reading".
2. **Hero** — the **animated brand logo** (`assets/brand/big3-logo-animation.mp4`):
   the full wordmark over a living watercolour wash with shimmering sacred-geometry
   line-work. Autoplays muted + looped, blended into the cream page via `mix-blend: multiply`
   and a soft radial mask; `watercolor-hero.jpg` is the poster/fallback. Below it: the
   Playfair tagline *"Read the weather of your life."* + dual CTAs.
3. **Zodiac band** — the 12 signs as gold glyphs on charcoal.
4. **Your Big 3** — Sun / Moon / Ascendant explainer cards.
5. **Readings** — consultation menu with durations & CHF pricing; "Select" → booking.
6. **Testimonials** — gold-star consultation reviews.
7. **Booking band** (wine) + **Footer** (Geneva, links).
8. **Booking modal** — pick a reading → choose a time → confirmation (interactive).

## Files
- `app.jsx` — all sections + the booking modal (self-contained, token-driven).
- `index.html` — mounts it (loads `styles.css`, no build step).

Assets resolve from `../../assets`.
