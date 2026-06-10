# Brief to paste into Claude Design — Big3 Astrology website

> Paste everything between the lines below into Claude Design. It is written *to* Claude Design. Attach the three language files (09_EN, 10_DE, 11_ES) and, optionally, files 04 (spec), 12 (tech/SEO) for context.

---

You are designing the visual system and screens for a real website that another agent (Claude Code) will then build in **Astro + Tailwind, deployed on Cloudflare Pages**. Stay within what that stack can implement. Before you design, read the three language copy files I've attached — the copy is final; **do not rewrite, translate, paraphrase, or invent copy, offers, prices, or testimonials.** Your job is layout, design system, components, and asset direction.

## 1. The project in one paragraph
**Big3 Astrology** (company: Big Astrology GmbH; astrologer: **Gabriela Brecht**, Zürich) is a premium, human-led, **trilingual (EN/DE/ES)** astrology site. A free "Big 3" calculator (Sun, Moon, Rising) is the lead magnet; the business is **live 1:1 readings**. Positioning is explicitly **anti-AI-horoscope**: warm, psychological, human, grounded — "read by a real astrologer, not an algorithm." Primary traffic is **social → mobile-first**, so design **mobile-first** and treat desktop as the enhancement.

## 2. Non-negotiable facts (must be reflected, not changed)
- **Funnel / CTAs:** the **primary CTA everywhere is "Book a full reading — CHF 180."** The **secondary CTA is "Book a 15-minute call — CHF 20"** framed as "not sure? meet first." There is also a **relationship reading — CHF 250**. Design a clear visual hierarchy: primary button (high emphasis) vs secondary (low emphasis/text link). Never give the CHF 20 call equal weight to the CHF 180 reading.
- **Sessions** happen on **Google Meet** (mention only where copy says so).
- **Three languages, one design system.** Do **not** design three different looks. One component set; the same screen renders in EN/DE/ES. **German runs ~30–35% longer than English** — design every text container, button, and nav item to flex without breaking (no fixed-width labels, no truncation, test the longest German string).
- **Tone of the visuals:** premium, calm, trustworthy, a little celestial — not mystical-kitsch, not neon-zodiac clip-art, not fortune-teller. Think "thoughtful psychology practice with a cosmic touch."

## 3. How the copy files are structured (so you map content correctly)
Each language has ONE file (09 = EN, 10 = DE, 11 = ES). Inside each, four sections:
- **§1 UI strings** (`en/de/es.yaml`): nav, footer, **form labels + helper text**, **result-screen labels** (`result.*`), booking/confirmation microcopy, error states, and **5 testimonials**. These are key→value pairs; the **keys are identical across languages**, only values differ. Use the keys to know what UI elements exist.
- **§2 Big-3 archetype library** (`big3.*.yaml`): 12 Sun + 12 Moon + 12 Rising short texts (~70–85 words each) + synthesis fragments. **These populate the result screen dynamically.** You only need to design the *container* for one Sun + one Moon + one Rising card + a synthesis paragraph — the engine fills them in.
- **§3 Pages** (Markdown + frontmatter): home, about, the 3 offer pages, 4 legal pages. The **frontmatter** has title/description/slug; the **body** (one `#` H1, then `##`/`###`) is the page content. Localised slugs differ per language; `translationKey` is identical (that's the page's identity across languages — use it to know which EN page = which DE/ES page).
- **§4 Pillar/blog pages** (Markdown): 3 SEO articles per language, **answer-first** (bold "short answer" lead), with H2/H3 sections and an FAQ block at the end.

**Read EN (file 09) as the canonical layout source; treat DE/ES as the same pages by `translationKey`.**

## 4. Screens / components to design (mobile-first, then desktop)

**Global**
- **Header/nav:** logo + nav (Home, Full Reading, 15-min Call, About, Journal) + a **language switcher (EN/DE/ES)** + primary "Book a reading" button. Mobile: hamburger.
- **Footer:** tagline, disclaimer line, legal links, language switcher, copyright.
- **Buttons:** define **primary** (CHF 180), **secondary** (CHF 20 / text-link), and tertiary states (hover/focus/active/disabled). Focus states must be visible (accessibility).
- **Consent banner placeholder:** a small, tasteful bottom cookie-consent modal (Accept / Reject / Preferences) — it WILL be wired to a real consent tool (Cloudflare Zaraz) before ads run. Design a placeholder that fits the system; keep it unobtrusive and mobile-safe.

**Home** — hero (H1 + subhead + **the Big-3 birth-data form above the fold**: date, time, place, country + "Reveal my Big 3" button + a "no birth time?" helper line), then "talk to a human" section with **primary CTA (CHF 180) + secondary (CHF 20)**, a 3-point value prop, and a testimonial. The form is the centerpiece on mobile.

**Big-3 result** — this is the conversion moment. Design: **three cards (Sun / Moon / Rising)** each with an icon/label/sub-label ("What drives you" / "What you need to feel safe" / "How the world first meets you") + the ~80-word text; then a **"Putting it together" synthesis paragraph**; then a strong **CTA block (primary CHF 180, secondary CHF 20)**. Also design the **"no birth time" variant** (Sun + Moon only, Rising shown as a locked/empty state inviting the user to recover their birth time).

**Offer pages (×3)** — full reading (CHF 180, primary/most prominent), 15-min call (CHF 20, lighter), relationship reading (CHF 250). Consistent template: H1, "what's included" list, single booking CTA. The CHF 180 page should feel like the flagship.

**About** — portrait of Gabriela + bio (trust/credentials/E-E-A-T), a caption, and the disclaimer line. Warm, credible, personal.

**Journal (blog) index + article/pillar template** — index lists the pillar pages; the **article template** must render an answer-first intro, clean H2/H3 rhythm, comfortable reading measure, an FAQ accordion (or styled Q&A), and inline CTAs to the form/CHF 180 reading.

**Legal template** — simple, readable long-form text template (Impressum/Aviso legal, Terms, Refunds, Privacy).

## 5. Design system to deliver (so Claude Code can implement it 1:1)
- **Design tokens:** color palette (with a clear primary/accent for CTAs and AA-contrast text colors), typography scale + a **font pairing** (one expressive display/serif for headings + one clean sans for body is a good fit for "premium + human"; pick web-safe/Google Fonts that can be self-hosted), spacing scale, border-radius, shadows.
- **Components:** the buttons, form fields (with labels + helper + error states), the Big-3 card, testimonial, nav, footer, accordion/FAQ, consent banner.
- **Responsive:** show key screens at **~375px (mobile)** and **~1280px (desktop)**; define breakpoints.
- **Accessibility:** WCAG AA contrast, visible focus, labelled inputs, hit-area ≥44px on mobile.
- Prefer patterns expressible with **Tailwind core utilities** (Claude Code builds in Astro + Tailwind).

## 6. Image & asset direction (define slots + alt text)
For every image slot you place, specify: purpose, suggested subject, aspect ratio, and **descriptive alt text** (≤125 chars). Required: logo (SVG), favicon, a 1200×630 **OG/social-share image**, Gabriela's portrait, hero visual (mobile + desktop crop). Export targets are **AVIF/WebP**. **No copyrighted zodiac art, no stock-cheese, no celebrity likenesses.** Keep the hero's **largest element a real image/text (not a late-painting animation)** — animation is welcome but must not be the LCP element (performance).

## 7. Performance guardrails (the build must hit these)
Mobile **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1**. So: reserve image dimensions (no layout shift), lazy-load below-the-fold, keep the hero light, and treat the Big-3 calculator as an interactive island layered on an otherwise static page.

## 8. Do NOT
- Don't change/translate/rewrite any copy, prices, offers, or testimonials.
- Don't add pages, services, or claims that aren't in the files.
- Don't give the CHF 20 call equal prominence to the CHF 180 reading.
- Don't design three separate visual identities — one system, three locales.
- Don't ignore German length — test the longest strings.
- Don't bury the Big-3 form; it's the lead magnet and belongs above the fold on Home.
- Don't treat the consent banner as an afterthought — include a placeholder in the system.

## 9. First step before you design
Briefly **restate back to me**: (a) the page list and which `translationKey` maps EN↔DE↔ES, (b) the primary vs secondary CTA hierarchy and the three prices, and (c) your proposed font pairing + color direction. Once I confirm, produce the mobile screens first, then desktop, then the token sheet + component specs as a developer handoff.

---

*(End of paste. After Claude Design returns the system + screens, hand the tokens/component specs plus files 04, 09–12 to Claude Code to scaffold the Astro repo, the `/api/big3` engine, Sveltia CMS, and the Cloudflare Pages deploy.)*
