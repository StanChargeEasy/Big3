# Astrology Lead-Gen Website — Spec-Lock v0.4 (FROZEN, single source of truth)

**Date:** 2026-06-07 (v0.4) · **Status:** Product + tech stack **LOCKED**. Change-control active: anything new goes to a v0.5 backlog, not mid-build.
**Owner:** Stan (ChargeEasy) for Gabriela Brecht · **Build:** Claude Design → Claude Code · **Primary channel:** social → mobile-first.
**This document supersedes Spec-Lock v0.3 AND the "Technical SEO & Marketing Stack" addendum (file 12).** It is now the only spec file.

**v0.4 changes vs v0.3:**
- **CMS added → Sveltia CMS** (Git-based; was Markdown-in-Git only). [confirmed]
- **Tag management + ad pixels added → Cloudflare Zaraz (primary)**, GTM + certified-CMP as fallback. [Zaraz set per "do it all in Zaraz if easier"; flippable]
- **Consent tooling is now IN SCOPE** — **reverses v0.3's "no cookie banner."** Required once Meta/TikTok/Google-Ads pixels target EU/UK/CH traffic. Delivered via Zaraz CMP + Google Consent Mode v2.
- **Meta/asset/JSON-LD schema expanded** (Open Graph/Twitter, image/alt rules, structured-data list, favicon/OG assets).
- **Added:** conversion-measurement plan, GSC/Bing indexing, technical-health monitoring, infra files (robots/sitemap/llms/404/redirects/CSP), email auth, UTM convention, launch QA checklist.
- EN + DE + ES copy now **complete** (files 09/10/11).

---

## 1. Confirmed decisions (locked)
| Area | Decision |
|---|---|
| Brand / domain | **Big Astrology GmbH** · astrologer **Gabriela Brecht** · **www.big3astrology.com** (register at Cloudflare Registrar) |
| Languages | EN, DE, ES — all live at launch; Gabriela writes AND consults in all three; **EN = source draft language** |
| Funnel | Free Big-3 teaser → **primary CTA: CHF 180 full natal reading** → secondary CTA: CHF 20 15-min intro call ("not sure? meet first"). Add-on: relationship reading **CHF 250 (180+70)** |
| Sessions | Live on **Google Meet** (link sent with confirmation) |
| Engine | **MIT Astronomy Engine** (free, no AGPL, no data files). Swiss Ephemeris only if scope grows to full natal/synastry |
| Compute | Single serverless function `/api/big3` (Cloudflare Pages Function), pure TS |
| Geocoding/TZ | GeoNames (place→lat/lng + historical tz) + `geo-tz` offline fallback + `luxon` for local→UT |
| Hosting | **Cloudflare Pages + Git** |
| **CMS** | **Sveltia CMS** (Git-based, free, `/admin`, i18n) — Decap CMS as fallback. See §6 |
| Scheduler | **Cal.com** free single-user tier (NOT Calendly — no CHF support) |
| Payments | **Stripe CH** (2.9% + CHF 0.30 domestic, no monthly fee) + **TWINT** |
| **Tag mgmt + pixels** | **Cloudflare Zaraz (primary)** — GA4 + Google Ads + Meta Pixel + TikTok at the edge, with built-in consent. GTM + certified-CMP = fallback. See §7 |
| First-party analytics | Cookieless **Cloudflare Web Analytics** (RUM incl. CWV) — banner-free. See §10 |
| **Consent** | **In scope.** Zaraz CMP + **Consent Mode v2** gates ad pixels for EU/UK/CH. First-party analytics stays banner-free. See §7 |
| Compliance posture | Legal pages kept light (Stripe/Cal.com expect terms). Consent is the one hard requirement (ad pixels). |
| Hero animation | **Ship it, then measure.** Fall back to static-LCP-layered only if it breaches mobile CWV |

## 2. Funnel & pages (MVP)
1. **Home** — hero (H1 + sub + **primary CTA = book full reading**, secondary = 15-min call) + **Big-3 form above the fold** + value prop + testimonials. Lead magnet = the Big-3 itself.
2. **Big-3 result** — Sun / Moon / Rising cards + synthesis paragraph + **CTA "book a full reading (CHF 180)"**, secondary CHF 20. **No birth time → Sun + Moon only**, Rising shown as a locked/empty state inviting recovery of the birth time via the call.
3. **Full natal reading (CHF 180) — primary** — value, what's included (90+ min prep, 60-min Google Meet, written summary), Cal.com + Stripe.
4. **15-minute intro call (CHF 20) — secondary** — "not sure? meet first"; mini-reading; explicitly not credited toward the full reading.
5. **Relationship & couples reading (CHF 250)** — full reading for two; +CHF 70 second chart.
6. **About** — bio, credentials, portrait, disclaimer (YMYL/E-E-A-T critical; Person schema).
7. **Blog (Journal)** — **3 answer-first pillar pages per language at launch**, cadence after.
8. **Testimonials** — 5 real client quotes (anonymised first name + city); also embedded on Home/offers.
9. **Legal** — Impressum/AGB(Terms)/refund/short privacy.
10. **Confirmation / thank-you page** — post-booking, **`noindex`**, **fires conversion events** (§8).
11. **`/admin`** — Sveltia CMS (login-gated, `noindex`).

## 3. Big-3 calculation pipeline
Input: **birthday + birth time + birthplace + country.**
Flow: place+country → GeoNames lat/lng + IANA tz → historical UTC offset (luxon) → Julian Day → Astronomy Engine Sun/Moon ecliptic longitude → sign; Ascendant from Local Sidereal Time + latitude (Meeus, ~30 lines TS). Output: Sun, Moon, Rising sign + modular texts + rule-assembled synthesis (assembly logic in EN Copy file 09 §2). **No birth time → Sun + Moon only.** Widget is a JS island layered on an otherwise static page.

## 4. SEO / GEO requirements
- **All content server-rendered static HTML** — AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not run JS. The Big-3 widget is the only JS island; surrounding page + all blog/service/About copy are static.
- **JSON-LD must be static in the HTML** (see §5 for the full type list).
- **GEO discipline:** answer-first writing, attributed stats/quotes, Q&A blocks, clean H1→H2→H3 (already in copy).
- **i18n:** subdirectories `/en/ /de/ /es/`; **reciprocal self-referencing hreflang + `x-default` → EN home**; each locale self-canonicalizes (in frontmatter). Don't cross-canonicalize languages.
- **robots.txt / sitemap.xml / llms.txt** — see §11.
- **CWV budget:** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at mobile p75.

## 5. Asset & meta schema (frontmatter, structured data, images)
**Frontmatter additions** (enforced via Zod in `content.config.ts`; emitted in `<BaseHead>`), on top of the existing `title, description, canonical, lang, translationKey, slug, draft, schemaType` (+ offer pages: `price, currency, duration, offerType`):
```yaml
ogTitle: ""           # → title if empty
ogDescription: ""     # → description if empty
ogImage: "/og/<page>-<lang>.png"   # 1200×630
ogType: "website"     # "article" for blog
twitterCard: "summary_large_image"
noindex: false        # true for confirmation + /admin
publishedTime: ""      # ISO (Article)
modifiedTime: ""       # ISO (Article)
author: "Gabriela Brecht"
```
**JSON-LD to generate (static):** Organization (sitewide; `sameAs` → social once live), Person (About; `knowsAbout`, `image`), WebSite (`inLanguage`), Service + Offer (each offer page; relationship = CHF 250 offer), Article (each pillar), FAQPage (pillars — rich result retired but still aids AI citation), BreadcrumbList (non-home).

**Images:** export **AVIF + WebP** (+ JPEG/PNG fallback) via Astro `<Image>`/`<Picture>` with explicit `width`/`height` (no CLS) and `loading="lazy"` (LCP/hero = `eager` + `fetchpriority="high"`). Decorative → `alt=""`. **Alt-text rule:** ≤125 chars, content+context, one keyword naturally, no stuffing; alt strings live in locale YAML (`images.*`) so they translate. **Naming:** `kebab-case-descriptive-keyword.ext`.
**Required assets:** `favicon.svg` + `.ico` + 180×180 apple-touch-icon + `site.webmanifest`; OG default 1200×630 + per-page OG; Gabriela portrait (≥1200px); hero (mobile+desktop crops); logo SVG.
**Hero-LCP caveat:** the LCP element must be a real pre-rendered image/text, not a late-painting animation.
**Imagery direction:** premium/celestial/human; **no copyrighted zodiac art, stock-cheese, or celebrity likenesses**; real photo of Gabriela for trust.

## 6. CMS — Sveltia CMS (so Gabriela edits copy/headers herself)
A **Git-based CMS** layered on the Astro repo: writes to the same Markdown/YAML, gives a `/admin` UI; saving commits to Git → Cloudflare Pages rebuilds.
- **Sveltia CMS** [chosen]: free, open-source, modern Decap/Netlify-CMS successor, **mobile-friendly, first-class i18n** (edit EN/DE/ES side by side, keep `translationKey` in sync), stock-photo + DeepL helpers. Docs: https://github.com/sveltia/sveltia-cms · Astro integration: https://github.com/majesticostudio/astro-sveltia-cms
- **Decap CMS** [fallback]: official Astro docs, mounts `/admin` React app, commits to repo, works with content collections + image optimization. Docs: https://docs.astro.build/en/guides/cms/decap-cms/
- **Auth:** GitHub OAuth via a small Cloudflare Worker. **Media** uploads → `src/assets` (with alt fields). **Scope:** CMS edits content/headings/testimonials/images; **tracking scripts & `<head>` tags live in Zaraz (§7), not the CMS.**
- **Config:** collections mirror `src/content/pages`, `src/content/blog`, and the i18n/data YAML, i18n enabled.

## 7. Tag management, ad pixels & consent
**Goal:** run Google Ads + Meta + TikTok + GA4, manageable without redeploys, compliant for EU/UK/CH.

**Primary — Cloudflare Zaraz** (Cloudflare-native; you're already all-Cloudflare, so **no new vendor**, and it's **not a code dependency** — configured in the dashboard):
- Loads third-party tags **at the edge/server-side** → near-zero page weight, ad-blocker-resistant. Supports **GA4, Meta/Facebook Pixel, TikTok, Bing, Pinterest CAPI**. Free tier ≈ 1M events/month (**verify live limit**). Docs: https://developers.cloudflare.com/zaraz/
- **Built-in Consent Management Platform** with **Google Consent Mode v2** + **IAB TCF** support; auto-shown opt-in modal that **gates pixels until consent**, ships 30+ localized strings (auto-matches EN/DE/ES). Docs: https://developers.cloudflare.com/zaraz/consent-management/ · Consent Mode: https://developers.cloudflare.com/zaraz/advanced/google-consent-mode/
- A documented zero-JS Zaraz consent pattern exists for **Astro** (server-rendered banner only when the consent cookie is empty), which fits this stack and avoids the common "CMP banner becomes the LCP element" performance trap.

**Fallback — GTM** (if you later prefer Google's ecosystem): one container for GA4/Google Ads/Meta/TikTok, but **client-side** (heavier, more ad-blocker loss) and **needs a separate Google-certified CMP** (Cookiebot/CookieHub/iubenda/Termly/Usercentrics) for Consent Mode v2. Optionally add **Google Tag Gateway** (first-party proxy for *Google* tags only — does not cover Meta/TikTok). **Don't run Zaraz and GTM together.**

**Consent — the reversal of v0.3 (non-negotiable for ad pixels):**
- The moment Meta/TikTok/Google-Ads pixels touch DE/ES (EEA) — and CH — traffic, "no cookie banner" is **non-compliant**. Google requires EEA/UK/CH advertisers to integrate **Consent Mode v2 via a CMP** (enforced since March 2024; fines up to €20M / 4% turnover). Refs: https://support.google.com/google-ads/answer/13695607 · https://www.cookiehub.com/blog/google-consent-mode-v2-setup-gtm-guide
- **Resolution:** first-party analytics (Cloudflare Web Analytics) stays **banner-free**; **ad pixels run behind the Zaraz CMP + Consent Mode v2.**
- **Certified-CMP nuance:** Zaraz passes Consent Mode v2 + is IAB TCF compatible (Cloudflare states EU users can run Google ad products through it), but Zaraz's CMP has historically **not** appeared on Google's named "certified CMP" list. This affects only Google's advanced conversion **modeling** (also needs traffic volume), **not** running ads or basic conversion tracking. **Verify Google's current certified list only if modeling matters.**

## 8. Conversion measurement (needed before spending on ads)
Define once; map to GA4 + Meta + TikTok + Google Ads via Zaraz:
| Event | Fires when | Use |
|---|---|---|
| `big3_revealed` | form submitted, result shown | top-funnel signal / audience seed |
| `precall_booked` | Cal.com CHF 20 confirmed | micro-conversion |
| `reading_booked` | Cal.com CHF 180 confirmed | **primary conversion** |
| `relationship_booked` | CHF 250 confirmed | conversion |
| `purchase` (value, CHF) | Stripe payment success | revenue / ROAS |
- Fire conversion pixels on the **`noindex` confirmation page** (reliable trigger).
- **Optional later (ad-blocker resilience):** server-side **Meta Conversions API** + **TikTok Events API** via a Cloudflare Worker / Zaraz server-side.
- **UTM convention** (all paid/social): `utm_source` (google|meta|tiktok), `utm_medium` (cpc|paid_social|social|email), `utm_campaign`, `utm_content`, `utm_term`.

## 9. Search Console, Bing & indexing
- **Verify GSC** via Cloudflare DNS TXT; add the **domain property** (covers all locales/subpaths). Submit **`sitemap.xml`**. Monitor Indexing/Coverage, field **Core Web Vitals** (CrUX), Enhancements (schema), Sitemaps, manual actions.
- **Bing Webmaster Tools** too (drives Bing + Microsoft Copilot / some ChatGPT browsing) — submit the same sitemap.
- Force first crawl on key URLs post-launch; ensure nothing important is `noindex`/blocked.

## 10. Technical health monitoring (all free at ~120 URLs)
| Tool | Purpose | Link |
|---|---|---|
| Cloudflare Web Analytics | cookieless RUM incl. CWV; no banner | https://developers.cloudflare.com/web-analytics/ |
| GSC | indexation, field CWV, crawl errors (ground truth) | https://search.google.com/search-console |
| PageSpeed Insights | per-URL lab+field CWV, fix list | https://pagespeed.web.dev |
| Screaming Frog (free ≤500 URLs) | broken links, redirect chains, missing/dupe meta, H1, schema; **JS-render vs raw-HTML check for AI bots** | https://www.screamingfrog.co.uk/seo-spider/ |
| Ahrefs Webmaster Tools (free, optional) | site audit + basic backlinks | https://ahrefs.com/webmaster-tools |
| UptimeRobot (free) | uptime/downtime alerts | https://uptimerobot.com |

Site is ~120 URLs (≈40 pages × 3 locales) → well under Screaming Frog's free 500-URL limit. Connect a free PageSpeed Insights API key in Screaming Frog for per-page CWV.

## 11. Infrastructure files & rules (build tasks)
- **robots.txt** — allow Googlebot/Bingbot + AI search bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot); disallow `/admin`, `/api/`, confirmation pages; link sitemap.
- **sitemap.xml** — `@astrojs/sitemap`, all locales, `lastmod`; submit GSC + Bing.
- **llms.txt** — low-yield but cheap; ship it.
- **404** — branded, per locale, links home/offers.
- **Redirects** — enforce ONE canonical host (apex vs `www`, 301 the other) + **consistent trailing slashes** (canonicals use trailing slash → enforce site-wide).
- **Security headers** — HTTPS/HSTS (Cloudflare auto) + CSP that **allow-lists Zaraz/pixel domains** (or tags break).

## 12. Email authentication (booking deliverability)
Set **SPF + DKIM + DMARC** on `big3astrology.com` (Cloudflare DNS) so Cal.com/Stripe/Workspace confirmation emails don't go to spam.

## 13. Content production workflow
- EN drafted first → DE/ES transcreated last. **All three complete** (files 09/10/11).
- Hand-written per language: hero, package pages, About, pillars. AI-translated + edited: Big-3 archetype texts + UI/booking strings. Done.
- Register: DE = `du` (Swiss `ss`); ES = `tú` (pan-Hispanic, no voseo).

## 14. Explicitly OUT of scope
User accounts/login · gated paid digital reports · full natal-chart/synastry engine · CRM · 20-articles-at-launch · server-side CAPI/Events API at launch (optional later) · reliance on Google conversion *modeling* (needs volume + certified-CMP verification). **(Removed from out-of-scope vs v0.3: cookie-consent tooling — now required, §7.)**

## 15. Positioning
Human-led, trilingual (EN/DE/ES), premium, consultation-first, explicitly anti-AI-horoscope.
**One-liner:** *"Human astrology in English, German and Spanish — read by a real astrologer, not an algorithm. Your Big 3 free; a full natal reading when you're ready."*

## 16. Per-language keyword anchors
- **EN:** "free birth chart", "calculate your rising sign and its meaning", "calculate your moon sign and its meaning"
- **DE:** "Geburtshoroskop kostenlos", "Aszendent berechnen und Bedeutung herausfinden", "Mondzeichen berechnen und Bedeutung herausfinden"
- **ES:** "carta astral gratis", "calcula el signo lunar", "calcula el ascendente y su significado"

## 17. Legal entity (for Impressum/AGB/Aviso legal)
**Big Astrology GmbH**, Ränkestrasse 21, 8700 Küsnacht ZH, Switzerland · contact **info@big3astrology.com** · Geschäftsführerin Gabriela Brecht · **UID:** not yet assigned — add to legal notice once registered.

## 18. Year-1 cost (rock-bottom — unchanged)
Domain ~CHF 10–20 (Cloudflare at-cost) · Cloudflare Pages CHF 0 · **Sveltia CMS, Zaraz (free tier), Cloudflare Web Analytics, GSC/Bing, Screaming Frog free, UptimeRobot — all CHF 0** · Cal.com free · GeoNames free · Stripe no monthly fee + ~3.2% variable · Google Workspace already paid. **Fixed ≈ CHF 15–20/yr.** (Costs only scale if Zaraz exceeds the free event tier or you buy a paid auditor.)

## 19. Copy authoring format
Primary: **Markdown + YAML frontmatter**, one file per page per locale (one H1/page; frontmatter per §5). Exception: **keyed YAML per locale** for UI micro-strings (`src/i18n/<lang>.yaml`) and the **Big-3 archetype library** (`src/data/big3.<lang>.yaml`, keyed `placement.sign` + synthesis fragments). **Keys identical across locales; `translationKey` wires hreflang.** Zod `content.config.ts` enforces the schema (incl. §5 additions). Folders: `src/i18n/`, `src/data/`, `src/content/pages/{en,de,es}/`, `src/content/blog/{en,de,es}/`.

## 20. Launch QA checklist
**Pre-launch:** unique title/description per locale · canonicals resolve · hreflang reciprocal + x-default(EN) · one H1/page · JSON-LD validates (Rich Results Test) · all images have alt + width/height · OG image renders (share debugger) · favicon/manifest present · robots.txt + sitemap live · 404 works · host + trailing-slash redirects · CSP allows pixels · **consent banner blocks pixels pre-consent (Consent Mode v2 verified in Zaraz debug)** · mobile CWV within budget · form/booking/payment end-to-end + confirmation fires conversion events · SPF/DKIM/DMARC set · UID added (if registered).
**Weekly post-launch:** GSC coverage + CWV · Screaming Frog crawl · Cloudflare Web Analytics CWV · uptime · conversion events flowing to GA4/Meta/TikTok/Ads.

## 21. Open decisions / residual flags
1. **Tag manager:** **Zaraz set as primary** per "do it all in Zaraz if easier" — flip to GTM + certified-CMP on your word.
2. **CMS:** Sveltia (chosen); Decap is the conservative fallback.
3. **Zaraz CMP Google-certified status** — verify only if conversion *modeling* matters.
4. **UID** pending for legal notices.
5. **Free-tool limits** (Zaraz events, Screaming Frog 500-URL) — verify live before committing.
6. Testimonials are localised translations — optionally swap in clients' original-language wording for authenticity.
