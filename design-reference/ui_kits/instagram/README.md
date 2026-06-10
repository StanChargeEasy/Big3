# Instagram Kit — Big 3 Astrology

The **core product**: a faithful recreation of the Big 3 Astrology Instagram presence,
based on the agency feed proposal (`Delivery01_Big3Astrology.pdf`).

Open `index.html`. It renders an iPhone frame showing `@big3astrology` with:
- **Profile grid** — bio, stats, and the post grid (matches the real profile reference).
- **Feed** — the scrolling single-post view with like/comment/share chrome.
- Tap any post (in either view, or from the side template list) to open it.

## The 7 post templates (`posts.jsx`)
Each is a 1080×1080 square component, scaled to fit via `PostScaler` (`shell.jsx`).

| Component | Template | Notes |
|-----------|----------|-------|
| `PostAffirmation` | Cream minimal quote | serif headline + trinity icon + connector |
| `PostMantra` | Amber full-bleed "I am…" list | Aries-season mantra set |
| `PostTestimonial` | White card on nebula | logo, gold stars, review, name |
| `PostMonth` | Monthly lunar calendar | sand glyph column + date list + mantra |
| `PostEditorial` | Cream/wine split | editorial headline + constellation accent |
| `PostQuote` | Coral quote box | double border, quote marks, attribution |
| `PostDark` | Charcoal poster | "Draw your LIMITS & grow with GRACE" |

## Files
- `posts.jsx` — the 7 templates + shared helpers (`Square`, `Connector`).
- `shell.jsx` — Instagram chrome (status bar, top bar, nav, profile, post frame, scaler).
- `app.jsx` — interactive feed/grid/post-view + side controls.
- `index.html` — mounts everything (loads `styles.css`, no build step).

Self-contained and token-driven — assets resolve from `../../assets`.
