# Astrology Lead-Generation Site — Decision-Grade Deep Research (Gabriela project)

## TL;DR
- **Engine**: Use **Swiss Ephemeris in "Moshier" mode** (no data files, ~1 arcsec accuracy, AGPL but server-side only) via the **`sweph` npm package** running in a small Node serverless function — OR adopt **Don Cross's MIT-licensed Astronomy Engine** (VSOP87, ±1 arcminute) if the user wants ZERO AGPL exposure. Both are free; the architecture is a single serverless function (Cloudflare Pages Functions). The Ascendant pipeline relies on **GeoNames free tier (10k credits/day)** for coordinates+historical timezone, then standard sidereal-time math.
- **Hosting/Cost**: **Cloudflare Pages + Pages Functions** is the rock-bottom recommendation: static frontend free, **100,000 Worker requests/day free** (per Cloudflare's official Workers pricing page), no egress fees. Scheduler: **Cal.com (free single-user tier or self-hosted) with Stripe + CHF** — because **Calendly's Stripe integration does NOT support CHF** (confirmed: only AUD/CAD/EUR/GBP/USD). Year-1 TCO at rock-bottom ≈ **CHF 15–20 fixed** (domain renewal; Google Workspace already paid) plus Stripe variable fees of 2.9% + CHF 0.30 domestic.
- **Positioning**: White space = **human-led, trilingual (ES/EN/DE), Swiss/privacy-forward, consultation-first** premium boutique — explicitly contra the AI-commoditized free-chart space (Co-Star, AstroSeek, generic AI chart sites). The CHF 20 → CHF 180 ladder is competitive against Swiss professional benchmarks (e.g. Susan Fischer Zürich: CHF 220 / 90-min first session) and well below Astrodienst's Liz Greene Psychological Horoscope (USD 69.90 PDF / USD 74.90 print). Free hook should be a **light "Big-3 + element teaser"** rather than a full chart — competitors prove the full-chart hook is already commoditized.

---

## Key Findings

1. **The Swiss Ephemeris is the gold standard but AGPL — the Professional License costs CHF 700–750 one-off** (note conflicting figures between Astrodienst pages — confirm directly before paying). Moshier mode needs zero data files and is more than precise enough for Big-3.
2. **Don Cross's Astronomy Engine (MIT, VSOP87) is a genuine alternative** for Big-3 only, with ±1 arcminute accuracy, no data files, and runs on any JavaScript runtime including Cloudflare Workers.
3. **Calendly is disqualified**: its Stripe integration does not support CHF as a payment currency. Cal.com is the correct scheduler — its free tier already includes Stripe payments for a single user.
4. **The "free natal chart" hook is fully commoditized** across all three target markets — AstroSeek, Astro.com, Co-Star, AstroSeek-ES, horoskop-paradies.ch, astrologie-deutung.de, schicksal.com all give away the full chart. A focused, hand-written **Big-3 teaser** is the differentiation, not a longer report.
5. **Stripe Switzerland**: 2.9% + CHF 0.30 domestic / 3.25% + CHF 0.30 international, no monthly fee, TWINT supported, **PostFinance Pay not supported** (PostFinance holds 17% of the Swiss card market per JP Morgan data cited by pay.com — a real but acceptable gap for a non-retail consultation business).
6. **Subdirectories + hreflang are the correct trilingual SEO architecture**; machine-translated content rarely ranks (Google quality systems detect it); 67% of international sites have hreflang errors per Ahrefs' own study of 374,756 domains.

---

## SECTION 1 — EPHEMERIS / BIG-3 CALCULATION ENGINE

### 1.1 The Swiss Ephemeris — licensing, data files, modes

**Licensing (the AGPL trap)**. The Swiss Ephemeris (Astrodienst AG, Zollikon/Zürich) is dual-licensed:
- **AGPL-3.0** (free). The official LICENSE file states the developer "must fulfill the conditions of that license, which includes the obligation to place his or her whole software project under the AGPL or a compatible license" — and crucially the choice "must be made… before any public service using the developed software is activated." For a SaaS / public web service this means the **entire site source code must be released** under AGPL, even though code never reaches the browser (AGPL §13 closes the SaaS loophole that GPL leaves open). (https://github.com/aloistr/swisseph/blob/master/LICENSE)
- **Professional License**: one-off **CHF 750 for the first license and CHF 400 per additional license**, valid 99 years (https://www.astro.com/swisseph/swisseph.htm). The price-list/ordering page lists an "Unlimited" Professional Edition at **CHF 700.00** (https://www.astro.com/swisseph/swephprice_e.htm). Discrepancy noted — either way, a one-off Swiss-franc payment in the **CHF 700–750** range buys perpetual closed-source rights, "purchase[d] for a one-time fixed fee for each commercial programming project."

**Three calculation modes / data file sizes** (per https://www.astro.com/swisseph/swephinfo_e.htm and https://www.astro.com/swisseph/swisseph.htm):

| Mode | Source | Data files | Accuracy | Time range |
|---|---|---|---|---|
| **JPL** (raw) | NASA DE431 | ~2,788 MB (~2.9 GB) | maximum (sub-mas) | 13201 BC – 17191 AD |
| **Swiss .se1** (compressed, default) | DE431 compressed | **~99 MB total** (27 MB planets + 70 MB Moon; one 600-yr `.se1` planet file ~500 KB, lunar file ~1.3 MB) | 0.001″ vs JPL | 13000 BC – 17000 AD |
| **Moshier** (semi-analytic) | Steve Moshier (DE404 fit) | **0 files — code only** | "below 1 arc second with the planets and a few arc seconds with the Moon" (alternate source: "better than 0.1″ for planets, 3″ for Moon") | 3000 BC – 3000 AD |

**For Gabriela's "Big 3" use case — Sun, Moon, Ascendant**: the Moon's motion is ~33′/hour ≈ 0.55″/min; a 1″ error is ~2 seconds of time — utterly negligible against the typical ±1–5 minute uncertainty in a recalled birth time. **Moshier mode is overwhelmingly sufficient** for Sun/Moon/Ascendant in a marketing teaser.

**~50-year .se1 subset**: Each `.se1` planetary file covers 600 years. `sepl_18.se1` covers 1800–2400 and the matching `semo_18.se1` (Moon) covers the same span. To cover all living adults (~1925–2026) you ship **one planetary file + one Moon file = ~1.8 MB total** (~3 MB gzipped per the Dart binding's bundling guide — https://github.com/timotejroiko/sweph ; https://pub.dev/packages/swisseph).

### 1.2 Open-source library comparison

| Library | Runtime | License | Engine | Data files | Accuracy | Status | Serverless fit | Notes |
|---|---|---|---|---|---|---|---|---|
| **`sweph`** (timotejroiko) | Node N-API addon | **AGPL-3.0** (or LGPL-3.0 with Pro license) | Swiss Ephemeris | optional, default Moshier | sub-arcsec w/ files; ~1″ Moshier | Active (v2.10.3-5, ~1 month before now) | Yes (Node) but **native binary — can't run on Cloudflare Workers**; OK on Pages Node compatibility, Vercel Node, VPS | "definitive Swiss Ephemeris bindings for Node.js" (https://github.com/timotejroiko/sweph) |
| **`swisseph`** (legacy mystix) | Node N-API | "same as original" (effectively AGPL) | Swiss Ephemeris | optional | same | Stale (v0.5.17, ~4 yrs old) | Poor | https://www.npmjs.com/package/swisseph — avoid |
| **`swisseph-wasm`** | Browser/Node | AGPL-3.0 | Swiss Ephemeris WASM | yes | sub-arcsec | active | **WASM = runs in Cloudflare Workers** | **AGPL applies the moment files are shipped to the browser**, so do NOT use client-side |
| **pyswisseph** (sailorfe fork) | Python | AGPL-3.0 / Pro | Swiss Ephemeris | optional | same | active | Python runtimes (Render, Fly, VPS) | https://github.com/sailorfe/pysweph |
| **Kerykeion** | Python | **AGPL-3.0** | wraps Swiss Ephemeris | bundled | sub-arcsec | active 2025 (Battaglia) | Yes, but heavier dep tree | "if you import this library directly into a project, that project should be open-sourced under a compatible license." (https://github.com/g-battaglia/kerykeion) |
| **Astrologer-API** (hosted Kerykeion on RapidAPI) | HTTP API | Consuming the API does **not** require AGPL on your code | Kerykeion + Swiss Eph | n/a — hosted | sub-arcsec | active | n/a — external REST | Free starter tier exists; full birth-chart endpoint returns SVG + JSON; uses GeoNames internally (https://github.com/g-battaglia/Astrologer-API). Exact paid-tier USD pricing is on RapidAPI behind auth — flagged as unverified. |
| **Astronomy Engine** (Don Cross) | JS/TS, Python, C, C#, Kotlin | **MIT** | Truncated VSOP87 + NOVAS | **none** | "**±1 arcminute**" of NOVAS | Active (2019–2025+) | **Ideal** — pure JS, runs on Cloudflare Workers, no native bindings, no data files, minified <120 KB | (https://github.com/cosinekitty/astronomy) — Sun/Moon/planet positions; **does NOT compute astrological houses or Ascendant out-of-the-box** — Ascendant must be derived manually |
| **flatlib** | Python | MIT | VSOP87-based | bundled small files | arc-second class | stable | yes | traditional astrology focus, supports Ascendant + houses |
| **immanuel-python** | Python | MIT wrapper that calls pyswisseph | Swiss Ephemeris (transitively AGPL) | optional | same | active | **transitively AGPL via pyswisseph** | flag for licensing review |

### 1.3 Permissively-licensed path — can it work?

**Yes.** For Big-3 only:
- **Sun / Moon sign**: longitude from Astronomy Engine's `EclipticGeoMoon()` / `SunPosition()` (±1 arcminute is ~4× more precise than needed for a sign boundary which is 30°). MIT-licensed, no data files, runs on any JS runtime including Cloudflare Workers.
- **Ascendant**: Astronomy Engine doesn't ship an `ascendant()` helper, but the math is well-known: compute Local Sidereal Time (LST) from JD + observer longitude (Astronomy Engine exposes `SiderealTime()`), then solve `tan(Asc) = -cos(LST) / (sin(ε)·tan(φ) + cos(ε)·sin(LST))` (Meeus, *Astronomical Algorithms* §13). The obliquity ε is constant-of-date and Astronomy Engine provides it. This is roughly 30 lines of TypeScript and stays MIT.

**Result**: an MIT-only Big-3 pipeline is feasible and avoids any AGPL touch. It's the right choice if the user truly wants to keep the codebase closed-source forever with zero one-off purchase.

### 1.4 Geocoding + historical timezone resolution

Pipeline (standard for all astrology stacks): **birth date + time + place + country → resolve lat/lng → resolve historical IANA tz → convert local time to UT → compute JD → ephemeris → planet longitudes (signs) → LST → Ascendant.**

| Service / library | License / tier | What it gives you | Notes |
|---|---|---|---|
| **GeoNames `searchJSON` + `timezoneJSON`** | CC-BY, free with username; **10,000 credits/day, 1,000/hour per username**; commercial premium SLA available | place → lat/lng/elev; lat/lng → IANA timezoneId + rawOffset + dstOffset | (https://www.geonames.org/export/ ; http://www.geonames.org/export/web-services.html) — Astrologer-API uses GeoNames this exact way (https://github.com/g-battaglia/Astrologer-API) |
| **`timezonefinder`** (Python) | MIT | offline lat/lng → tz name | no API calls; bundle and forget |
| **`geo-tz`** (Node) | MIT | offline lat/lng → tz name | same as above for JS |
| **IANA tz database (Olson)** + `Intl.DateTimeFormat` or `luxon` | public | historical UTC offset for a given local timestamp at a given tz | handles DST in 1976 Spain, Soviet-era zones, etc. |

**Recommended pipeline for Gabriela**: GeoNames place search (5-result autocomplete in the funnel form), bundle `geo-tz` for offline tz lookup as fallback, then **`luxon`** to compute the UT instant from local birth time + tz. Stays free up to ~10k chart lookups/day per username — vastly more than a solo practitioner will see.

### 1.5 Final ranked recommendation

**🥇 Option A — "Closed-source, zero-recurring-cost MIT path"**: **Astronomy Engine (MIT)** + custom Ascendant routine + GeoNames + geo-tz, all bundled into a single Cloudflare Pages Function (Node compatibility) or even pure Worker.
- **Pros**: MIT throughout, no AGPL anywhere, no data files, no recurring cost, no Swiss Ephemeris purchase, runs on Cloudflare Workers free tier, code stays closed.
- **Cons**: Ascendant logic needs ~30 lines of careful astronomy. Accuracy ±1 arcminute (irrelevant for sign determination).

**🥈 Option B — "Swiss Ephemeris Moshier mode on a Node serverless function"**: `sweph` npm in **Moshier mode (no `.se1` files)** + GeoNames + luxon, deployed to Cloudflare Pages Functions (Node compat), Vercel, or a CHF 5–6/mo Infomaniak shared host.
- **Pros**: Full Swiss-Ephemeris quality (Ascendant code is built-in: `swe_houses_ex`), well-trodden, includes 25+ house systems.
- **Cons**: **AGPL applies to the whole server-side service.** Since the user wants closed-source, this requires either (a) accepting AGPL — publish site source — OR (b) paying the one-off **CHF 700–750 Professional License**.
- The user's "small one-off cost is acceptable" criterion makes the CHF 700 Professional License viable; it permanently kills the AGPL concern.

**🥉 Option C — "Hosted Astrologer-API"**: zero ephemeris code in repo; consume Battaglia's RapidAPI endpoint. **Consuming an API does not trigger AGPL on the calling app**, per the Kerykeion author's own statement: "Since the AstrologerAPI is an external third-party service, using it does not require your code to be open-source." (https://github.com/g-battaglia/kerykeion)
- **Pros**: zero code, zero math; returns SVG + structured Big-3 data, includes synastry, transits.
- **Cons**: recurring monthly cost on RapidAPI for paid tiers; dependency on third party; conflicts with "no recurring cost" rule.

**Picked**: **Option A** if "closed source, zero CHF" is rigid; **Option B with the CHF 700 Professional License purchase** if Gabriela is willing to spend the one-off to get the gold-standard library and unlock a roadmap that may later include full natal charts / synastry / progressions without rewriting.

---

## SECTION 2 — HOSTING & COST BASELINE

### 2.1 Static + serverless function tiers (2026)

| Provider | Static hosting | Function tier | CPU/runtime constraints | Egress | Verdict |
|---|---|---|---|---|---|
| **Cloudflare Pages + Pages Functions** | **Unlimited bandwidth, unlimited requests** to static assets; 500 builds/month free | Functions count against Workers free tier: **100,000 requests/day**, 10 ms CPU per invocation, 1 MB script | 128 MB isolate memory; Workers cannot run native Node binaries (so `sweph` requires Pages Node compat or VPS) — Astronomy Engine pure JS works | $0 | **Best free option** (https://developers.cloudflare.com/workers/platform/pricing/ ; https://www.cloudflare.com/plans/developer-platform/) |
| **Netlify Free** | 100 GB bandwidth/mo | 125k function requests/mo, 100 hrs build/mo | 10 s function duration | included | OK but more restrictive than Cloudflare |
| **Vercel Hobby** | 100 GB bandwidth/mo | 100k serverless function invocations/mo | 10 s | included | Personal-use only license; commercial use technically requires Pro $20/mo |
| **Infomaniak Web Hosting (Swiss)** | CHF 5.75/mo (https://www.infomaniak.com/en/hosting/prices-and-characteristics), Node.js + Python + PHP + Git + cron | runs persistent Node app (no cold start) | exec scripts up to 300 s standard | included in Swiss DC | **Swiss-data-residency option**; 100% renewable energy; "Infomaniak is an independent Swiss company that designs and operates its own data centers in Switzerland." (https://www.infomaniak.com/en/hosting/nodejs-hosting) |
| **Hostinger KVM 1 VPS** | n/a, full root | 1 vCPU / 4 GB RAM / 50 GB NVMe | unmanaged | included | $4.99–$6.49/mo (24-mo term), CHF ~52–68/yr; not Swiss DC (https://www.hostinger.com/vps-hosting ; https://smarthostfinder.com/hostinger-vps-pricing/) |
| **WordPress fallback** | requires PHP host | uses plugins for ephemeris (typically calls external API) | n/a | n/a | Heavy stack for a near-static site; only consider if Gabriela wants to manage content without touching code |

### 2.2 Scheduler decision — Calendly vs Cal.com

**Critical finding**: **Calendly's Stripe integration does NOT support CHF.** The official Calendly help page lists only USD, EUR, GBP, AUD, CAD as supported payment currencies (https://help.calendly.com/hc/en-us/articles/14077985848215-Calendly-Stripe). Calendly staff have confirmed in community threads: "The CHF currency is not currently something we support through our Paypal and Stripe integrations." This is **disqualifying** for a Swiss practitioner who wants to charge CHF 20 and CHF 180 in Swiss francs at booking.

**Cal.com** is therefore the recommended scheduler:
- **Open source (AGPL on the core)**, self-hostable with Docker.
- **Stripe + Cal.com supports any Stripe currency including CHF** (Cal.com docs show direct Stripe API key configuration; Stripe itself supports CHF — https://docs.stripe.com/currencies; https://cal.com/docs/introduction/quick-start/self-hosting/install-apps/stripe).
- **Cal.com free individual tier already includes Stripe payment integration with no upgrade required** — directly relevant to Gabriela's single-user use case (pricing verified March 11, 2026 on https://www.g2.com/products/cal-com/pricing and https://cal.com).
- **Cal.com Teams plan**: USD 15/seat/mo (monthly billing) or USD 12/seat/mo (annual billing) — only needed if she ever wants custom branding, multi-user, or more polish.
- **Best path for Gabriela**: start on **Cal.com cloud free tier** (Stripe payments work; her two event types — CHF 20 pre-call and CHF 180 consultation — are supported on free); upgrade only if branding/team needs arise.

### 2.3 Stripe Switzerland — confirmed fees

- **2.9% + CHF 0.30** per Swiss card transaction; **3.25% + CHF 0.30** for international cards. No monthly fee. (https://stripe.com/en-ch/payments/features ; https://stripe.com/en-CH/connect/pricing)
- **TWINT supported via Stripe** (must list CHF at checkout, ship to Switzerland, comply with TWINT business requirements). (https://docs.stripe.com/payments/twint ; https://stripe.com/payment-method/twint)
- **PostFinance Pay NOT supported** by Stripe — a real gap. PostFinance's card scheme holds **17% of the Swiss card market** per pay.com citing JP Morgan data (Mastercard 64%, Visa 17%, PostFinance 17%). For a consultation business with international reach this is acceptable; flag if conversion data later shows otherwise. (https://payrexx.com/en/guides/alternatives-to-stripe-switzerland)
- Stripe data residency: Stripe's EEA contracting entity is in **Ireland**; not Swiss data residency. Acceptable for the use case but worth flagging.

### 2.4 Contact form

- **Web3Forms**: free tier 250 submissions/mo, no account, GDPR-friendly.
- **Formspree**: similar — free tier limits should be re-verified on their pricing page before launch (claim flagged as needing fresh verification).
- **Cal.com itself** has a "routing forms" feature that can collect pre-call data before booking — may eliminate the need for a separate form entirely.

### 2.5 Trilingual SEO architecture

**Settled best practice** (Google official: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites):
- **Subdirectories `/en/`, `/de/`, `/es/`** are strongly preferred over subdomains for solo-operator sites — domain authority consolidates on one root. Google's John Mueller has stated subdomains and subdirectories are "treated the same," but real-world studies (cited by Weglot, SE Ranking) show subdirectories outperform.
- `hreflang` tags are mandatory and must form a reciprocal cluster (each language references all others, including a `x-default`). **67% of 374,756 domains studied by Ahrefs have at least one hreflang issue** (https://ahrefs.com/blog/hreflang-study/ — Patrick Stox: "In total, we looked at issues on 374,756 different domains that used hreflang tags. Our findings show that 67% of them have at least one issue.") — implement carefully.
- **Machine-translated content rarely ranks**: "Google's quality systems detect machine-translated content with high accuracy. Unedited machine translation generates low-quality content penalties that suppress rankings across all language versions." (https://www.digitalapplied.com/blog/international-seo-hreflang-multilingual-guide) → **Gabriela should hand-write or hand-edit each language**, especially the hero, the consultation pages, and at least 3–5 cornerstone blog posts per language at launch.
- Configure 3 separate Google Search Console properties (one per subdirectory) and set country targeting per market (ES: Spain or unlisted for LatAm reach; DE: Germany/CH/AT; EN: unlisted).

### 2.6 Finalized 12-month TCO (CHF)

**Scenario A — Rock-bottom (recommended for launch)**

| Line item | Annual CHF | Source / note |
|---|---|---|
| Domain renewal | ~15–20 | already owned, only renewal |
| Google Workspace (Business Starter assumed) | already paid | n/a |
| Cloudflare Pages + Functions | 0 | free tier covers everything |
| Ephemeris compute (Astronomy Engine MIT or Moshier mode) | 0 | bundled into function |
| Cal.com cloud (free single-user tier with Stripe) | 0 | 2 event types, Stripe in CHF |
| Stripe fixed | 0 | no monthly fee |
| Stripe variable (illustrative, 12 consults @ CHF 180 + 24 tripwires @ CHF 20 ≈ CHF 2,640 GMV) | ~CHF 85 (~3.2% blended) | 2.9% + 0.30 |
| GeoNames | 0 | free username, 10k credits/day |
| Web3Forms | 0 | 250/mo free |
| **Total fixed year-1** | **≈ CHF 15–20** | |
| **+ optional Swiss Ephemeris Professional License (Option B)** | **+ CHF 700–750 one-off year 1** | then back to ~15–20/yr from year 2 |

**Scenario B — Swiss-data-residency (premium trust positioning)**

| Line item | Annual CHF |
|---|---|
| Domain renewal | ~15–20 |
| Infomaniak Web Hosting Solo (Node.js + Python, Swiss DC, GDPR/nFADP) — CHF 5.75/mo billed annually | ~CHF 69 |
| Cal.com self-hosted on the same Infomaniak account (Docker, AGPL — unmodified self-hosting is fine) | 0 (covered by hosting) |
| Stripe variable | as above |
| GeoNames | 0 |
| **Total fixed year-1** | **≈ CHF 85–90** |

Trade-off: Scenario B is **+CHF 65–75/yr** but earns a real "100% data hosted in Switzerland" trust signal — useful for the positioning described in Section 3.

---

## SECTION 3 — COMPETITOR & POSITIONING

### 3.1 Competitor teardown

| Site / app | Market | Central CTA | Free hook | Monetization | Notable price | Hook strength |
|---|---|---|---|---|---|---|
| **Co-Star** | EN/global | "Get your chart" — requires birth date+time+place at signup | Full natal chart in-app + daily horoscope (free); "Ask the Stars" + Eros behind paywall | Freemium subscription; user reviews on official US App Store quote **USD 9.00/mo** Premium (https://apps.apple.com/us/app/co-star-personalized-astrology/id1264782561) | $9/mo | High recognition, NASA-data marketing. Recently moved more features behind paywall — visible backlash in reviews. AI-leaning. |
| **CHANI** | EN/global | "Download the app" | Daily horoscopes, birth chart overview free | Subscription **USD 11.99/mo or USD 107.99/yr** (https://apps.apple.com/bg/app/chani-your-astrology-guide/id1532791252 ; https://chaninicholas.zendesk.com/hc/en-us/articles/1500001732281) | $11.99/mo | Human-written, premium feel, queer-feminist brand. Clearest premium-content competitor to a human-led offer. |
| **Astro.com / Astrodienst** | EN+DE+ES+ multi | "Free horoscopes" → enter birth data → free interactive chart + multiple text reports | Free natal chart + 1-page text + premium short reports | Paid PDF reports by Liz Greene et al. — **Psychological Horoscope Analysis USD 69.90 PDF / USD 74.90 print** (https://www.astro.com/cgi/atxgen.cgi?btyp=xpht&lang=e) | $70–75 | Swiss-based authority, deepest free tools on web, no human consultations. Direct credibility competitor — but no consultation funnel. |
| **AstroSeek** | EN+ES+DE | "Birth chart" — accepts no-birth-time with default 10:00 AM | Full natal chart, transits, synastry, ephemeris | Ad-supported, ChatGPT-AI premium upsell | freemium | High SEO authority for "free natal chart" / "carta astral gratis" / "Geburtshoroskop kostenlos". Ads/AI commodity. |
| **Cafe Astrology** | EN | Free natal chart form | Full chart + interpretive text | Sells ebooks, no consultations | low | Strong content/SEO but dated UX. |
| **Mia Astral** | ES (LatAm + Spain) | Membership signup | Free articles, weekly horoscopes | Memberships, courses, ebooks (no public 1:1 consultations) | membership-based | Massive social following: **4M followers on Instagram (@mia_astral) and 1.4M on Facebook (@miastral)** per current profiles June 2026; positions astrology as practical/empowering. Real moat in ES. |
| **carta-natal.es / cartanatal.pro / losarcanos** | ES | "Calcular carta astral" | Free chart with full birth data | Ads, low-value upsells | low | Generic SEO sites. |
| **astrologie-deutung.de** | DE | "Geburtshoroskop berechnen" | Free Big-3 + chart wheel | PDF interpretations as upsell | mid | Direct DACH model match — sells PDF reports, not consultations. |
| **horoskop-paradies.ch** | DE/CH | "Aszendent berechnen" | Free Ascendant + chart + interpretation | "Professional 40-page horoscope analysis" upsell | mid | Swiss site, direct geo-competitor. Positions on psychological astrology. |
| **schicksal.com** | DE | "Aszendent berechnen" | Free Big-3 calculator | Daily horoscope subscriptions, ads | low | Pop-astrology DACH portal. |
| **The Pattern** | EN | "Sign up" | Personality profile + transits | Premium subscription | mid | Different angle (personality > astrology). |
| **TimePassages** | EN | App download | Birth chart in app | Pro app upgrade | mid | Strong for chart-reading hobbyists; not consultation funnel. |
| **AstroTwins (astrostyle.com)** | EN | Daily horoscope + paid services | Daily/weekly horoscope | Reports + memberships + readings (private chart reading is quoted at **~USD 499 value** in their promotional bundle — https://galaxy.astrostyle.com/go/2025-premium/) | $499 reading | Most relevant celebrity-astrologer human-consultation benchmark. |
| **Swiss professional astrologer (Susan Fischer / Serratus Zürich)** | DE/EN/CH | Direct booking | Free intro article | 1:1 consultations | **CHF 220 first session 90 min; CHF 120 follow-up 60 min** (https://www.serratus.ch/astrology-by-susan/?lang=en) | direct CH benchmark | Validates Gabriela's CHF 180 full-consultation as competitive (slightly below Susan Fischer's CHF 220). |

### 3.2 Free-hook hypothesis — full chart vs sun-sign teaser

Every dominant free-chart competitor (Astro.com, AstroSeek, Co-Star, carta-natal.es, astrologie-deutung.de, horoskop-paradies.ch, schicksal.com) **already gives away the full natal chart**, including the Ascendant, often with one-page text. The full-chart hook is **completely commoditized**, and AstroSeek even ships a ChatGPT-AI interpretive layer. AstroSeek explicitly tells users they can compute a chart "without a birth time — the system will use 10:00 AM as the default."

**Conclusion**: a lighter **Big-3 teaser (Sun + Moon + Rising with a one-paragraph human-written archetype description per result)** is the correct top-of-funnel choice for Gabriela. Rationale:
1. **Form friction**: birth time + place is the #1 fall-off point in any astrology funnel. The Big-3 still requires it (Rising needs exact time) — there's no funnel-shortening from offering the full chart on top.
2. **Differentiation**: every competitor's free hook leads to a giant generic text dump. A focused, beautifully-written Big-3 teaser with strong typography, in three languages, signals "boutique human-led" instantly.
3. **Conversion to consultation**: the explicit next-step CTA after seeing your Big-3 is "Want to understand how these three pieces work together? Book a 15-minute orientation call (CHF 20)." A full natal chart with 12 houses and 30 aspects gives the visitor too much to chew on and short-circuits the consultation pitch.
4. **Engineering simplicity**: Big-3 needs only Sun/Moon longitude + Ascendant — exactly what Astronomy Engine in MIT mode returns. No houses, no aspects, no astro-engine licensing pressure.

### 3.3 Consultation-pricing benchmark — does CHF 20 / CHF 180 make sense?

| Reference | Price | Source |
|---|---|---|
| Susan Fischer / Serratus Zürich (first session 90 min) | **CHF 220** | https://www.serratus.ch/astrology-by-susan/?lang=en |
| Susan Fischer follow-up 60 min | CHF 120 | same |
| The AstroTwins private reading (promo value) | **USD 499** | https://galaxy.astrostyle.com/go/2025-premium/ |
| Astrodienst Liz Greene PDF report | **USD 69.90 PDF / USD 74.90 print** | https://www.astro.com/cgi/atxgen.cgi?btyp=xpht&lang=e |
| Co-Star Premium subscription | **USD 9/mo** | https://apps.apple.com/us/app/co-star-personalized-astrology/id1264782561 |
| CHANI subscription | **USD 11.99/mo or USD 107.99/yr** | https://apps.apple.com/bg/app/chani-your-astrology-guide |
| Spanish-market general consultation range | EUR 40–150 (avg EUR 60) | https://www.zaask.es/cuanto-cuesta/consulta-de-astrologia |

**Verdict**: 
- **CHF 180 for a full consultation** is **competitively priced** — well below The AstroTwins, ~18% below the most directly comparable Swiss benchmark (Susan Fischer CHF 220), and at the upper-mid end of the Spanish Zaask range (EUR 40–150) for an "international/premium" positioning.
- **CHF 20 for a 15-minute pre-call** is a **textbook tripwire** price. No verifiable named-astrologer 15-minute pre-call price was found, suggesting the format is underused in astrology specifically (it's borrowed from coaching/consulting). It's a perfect Swiss-friendly TWINT amount and serves as a friction-reducer to the CHF 180 full consultation.

### 3.4 White-space and positioning recommendation

**The map of 2026 astrology positioning**:
- Free AI-commoditized chart sites (Astro.com / AstroSeek / Co-Star / carta-natal.es / horoskop-paradies.ch): high traffic, low margin, fully automated.
- US celebrity-astrologer apps (CHANI, AstroTwins, Co-Star Premium): subscription content, English-only, scaled and impersonal.
- ES super-influencer (Mía Astral): memberships and courses, no 1:1 consultations as a published rate.
- DACH PDF-report sites (astrologie-deutung.de, schicksal.com): paid reports, no human time.
- Swiss professional one-language consultants (Susan Fischer, Astrodienst's referral network): one-language sites, deep credibility, premium prices, no marketing funnel.

**White space**: **a trilingual (ES/EN/DE), human-led, consultation-first, Swiss-based premium boutique**, explicitly positioned against AI-commoditized free-chart sites. No competitor in our scan combines: (a) all three of the user's target languages with hand-written content, (b) a real human at the end of the funnel, (c) Swiss data residency / Swiss CHF pricing, and (d) consultation-first rather than report/membership-first monetization.

**One-line positioning statement (draft)**:
> *"Human astrology in Spanish, English, and German — written and read by one practitioner in Switzerland. No AI horoscopes, no PDF mills, no subscription. Just your Big 3 free, then 15 minutes with me to see if we're a fit."*

**Trust signals to feature above the fold**:
1. Real practitioner name + photo + brief credential
2. "Made in Switzerland — your data stays in Switzerland" (only works if Scenario B Infomaniak hosting is chosen; otherwise drop and replace with "GDPR/nFADP compliant" only)
3. Trilingual switcher visible at top
4. "No accounts, no spam, no AI horoscopes" 
5. TWINT logo at checkout (Swiss buyers)
6. CHF 20 pre-call CTA prominently — lowers psychological barrier vs going straight to CHF 180

**2026 trend acknowledgement**: AI tools (ChatGPT, Gemini, Co-Star "Ask the Stars" at USD 9/mo, AstroSeek's ChatGPT interpretive layer) have **collapsed the value of automated chart interpretation toward zero**. The defensible premium in 2026 is human attention, human interpretation, and trust — exactly what a consultation-first model captures. Free chart pages are now lead-magnets, not products.

---

## SECTION 4 — CONSOLIDATED RECOMMENDATION

### 4.1 Finalized go-forward spec

| Layer | Decision | Rationale |
|---|---|---|
| **Ephemeris engine** | **Astronomy Engine (MIT)** for Big-3 only — Sun, Moon longitudes from VSOP87 + custom Ascendant routine using its sidereal-time helper. Stay MIT throughout the codebase. **Reserve right** to swap in Swiss Ephemeris Moshier mode (with CHF 700–750 one-off Professional License) if the scope grows to full natal interpretation / synastry. | Zero AGPL surface, zero recurring cost, no data files, runs in any JS runtime. Accuracy ±1 arcminute is ~1800× tighter than a sign boundary. |
| **Compute architecture** | Single Cloudflare Pages Function (`/api/big3`), pure TS, ~100 lines | Free, fast, scales, no servers to manage. |
| **Geocoding + timezone** | GeoNames `searchJSON` for place autocomplete + `timezoneJSON` for historical tz, with `geo-tz` (Node) as offline fallback; `luxon` for tz math | Free tier (10k/day) covers solo practitioner forever. |
| **Static hosting** | **Cloudflare Pages** (free) | Unlimited bandwidth, free SSL, global CDN, 100,000 Function requests/day. |
| **Email** | Google Workspace (already owned) | n/a |
| **Scheduler** | **Cal.com Cloud free tier** for single user with 2 event types (CHF 20 pre-call + CHF 180 full consultation) — **NOT Calendly** (Calendly's Stripe integration does not support CHF) | Free single-user tier already includes Stripe payments; open-source self-host upgrade path if needed. |
| **Payments** | **Stripe Switzerland** with TWINT enabled (2.9% + CHF 0.30 domestic) | No monthly fee, supports CHF. Accept that PostFinance Pay is not available via Stripe — 17% Swiss-card-share gap but not deal-breaking for international consultations. |
| **Contact form** | Web3Forms (250/mo free) or Cal.com routing form | Zero recurring cost. |
| **Trilingual structure** | Subdirectories `/en/` `/de/` `/es/` on single root domain; `hreflang` cluster with `x-default`; 3 separate GSC properties with per-subdir country targeting | Subdirectories beat subdomains for SEO consolidation; per Google Search Central docs. |
| **Content** | **Hand-written or hand-edited in each language** for hero, About, consultation, plus 3–5 cornerstone blog posts per language at launch | Machine-translated content rarely ranks. |
| **Positioning** | Human, Swiss, trilingual, consultation-first, anti-AI | See Section 3.4 |

### 4.2 Funnel design (locked)

1. **Hero**: 1-line positioning + language switcher + above-the-fold Big-3 form (Date / Time / Place — autocomplete via GeoNames, with "I don't know my birth time" graceful degradation that returns Sun + Moon only and a strong CTA to the CHF 20 pre-call to help her recover birth time).
2. **Big-3 result page**: three cards (Sun, Moon, Rising), each with a 60–100-word hand-written archetype description in chosen language. End-of-page CTA: "These three are just the surface. Book a 15-minute call (CHF 20) to see what's underneath."
3. **CHF 20 pre-call booking** via Cal.com → Stripe → email confirmation (Google Workspace).
4. **Upsell during/after pre-call**: book the **CHF 180 full consultation**, same Cal.com / Stripe flow, separate event type.
5. **Blog** in subdirectories — SEO targets per language:
   - ES: "carta astral gratis", "signo lunar", "ascendente significado"
   - DE: "Geburtshoroskop kostenlos", "Aszendent berechnen", "Mondzeichen"
   - EN: "free birth chart", "rising sign meaning", "moon sign reading"
6. **Testimonials** section with named ES/DE/EN clients (with permission), one per language.

### 4.3 Year-1 cost (CHF, Scenario A — rock-bottom)

| Item | CHF/year |
|---|---|
| Domain renewal | 15–20 |
| Hosting (Cloudflare Pages) | 0 |
| Functions (Cloudflare) | 0 |
| Scheduler (Cal.com free) | 0 |
| GeoNames | 0 |
| Stripe monthly | 0 |
| Stripe variable @ ~12 CHF 180 + 24 CHF 20 = CHF 2,640 GMV | ~85 (effective ~3.2%) |
| **Total Year-1 fixed cost** | **CHF 15–20** |
| **+ Stripe processing variable** | **~CHF 85 / illustrative volume** |
| **+ Optional: SwissEph Professional License (one-off)** | **CHF 700–750** |
| **+ Optional: Infomaniak Swiss-DC hosting** | **+CHF 69** |

---

## Recommendations (staged)

**Phase 0 — confirm two decisions with Gabriela (1 day)**:
- **Engine**: MIT Astronomy Engine (CHF 0) vs Swiss Ephemeris Professional License (CHF 700–750 one-off). **Default: A** unless she has a multi-year roadmap that includes full natal interpretation / synastry / progressions — in which case **B** future-proofs.
- **Hosting**: Cloudflare (CHF ~20/yr) vs Infomaniak Swiss DC (CHF ~85–90/yr). **Default: Cloudflare for MVP**, migrate to Infomaniak only if "100% Swiss data residency" becomes a marketing centerpiece (i.e. if early customers raise it).

**Phase 1 — build MVP (2–4 weeks dev with Claude Code)**:
- Cloudflare Pages site scaffold with `/en/` `/de/` `/es/` subdirectories.
- `/api/big3` Cloudflare Function: Astronomy Engine + GeoNames + geo-tz + luxon.
- Hand-write hero, About, Consultation, and 1 cornerstone blog post per language. 
- Cal.com Cloud free tier set up with two event types + Stripe in CHF + TWINT enabled.
- `hreflang` cluster validated with Google Search Console International Targeting report.

**Phase 2 — soft-launch (week 5–8)**:
- 3 testimonials per language.
- 3 more cornerstone blog posts per language (9 total).
- Web3Forms or Cal.com routing form for inbound questions.
- Run first 10 paid consultations; measure tripwire→full-consultation conversion.

**Phase 3 — iterate**:
- If conversion from Big-3 to CHF 20 is < 1%, A/B-test a "Sun-only" further-reduced hook.
- If CHF 20 → CHF 180 conversion is > 60%, raise the CHF 20 price to CHF 30–40 (still a tripwire; better unit economics).
- If Swiss customers cite PostFinance as a missed payment method (track in checkout drop-off), add Payrexx alongside Stripe.

**Benchmarks that would change the plan**:
- If Astronomy Engine Ascendant code proves brittle in edge cases (extreme latitudes, year-1900 historical timezones) — switch to Swiss Ephemeris Moshier mode + buy the Professional License.
- If Gabriela hits Cloudflare's 100k requests/day function limit (extremely unlikely for a solo site, but plausible if a blog post goes viral) — upgrade to Cloudflare Workers Paid at USD 5/mo.
- If she ever needs a 4th language or a 4th event type — re-evaluate the architecture, not before.

## Caveats

- **Cloudflare Workers free tier** is documented at **100,000 requests/day** on the official Cloudflare Workers pricing page (https://developers.cloudflare.com/workers/platform/pricing/) — verified June 2026.
- **Swiss Ephemeris Professional License price** has TWO conflicting figures on Astrodienst's own site: CHF 750 first / CHF 400 each additional on https://www.astro.com/swisseph/swisseph.htm, but CHF 700.00 on the ordering page https://www.astro.com/swisseph/swephprice_e.htm. **Confirm directly with Astrodienst before purchasing.**
- The **Moshier accuracy figure** varies by source: "below 1 arc second with the planets and a few arc seconds with the Moon" (https://www.astro.com/swisseph/swisseph.htm) vs. "better than 0.1 seconds of arc precision (3 arcsec for the Moon)" (https://www.astro.com/swisseph/swephinfo_e.htm). Either way, far below the sign-boundary threshold (30° = 108,000″).
- **Co-Star Premium $9/mo** is sourced from quoted user reviews on the App Store rather than a publisher-side price string and is subject to change; **CHANI $11.99/mo** is confirmed against the current Apple App Store listing. Both apps change pricing periodically — re-verify before citing publicly.
- The **Astrologer-API exact RapidAPI tier pricing** could not be verified without authentication; treat all "paid API monthly cost" claims as inference.
- Some claims about **Web3Forms (250/mo) and Formspree** are based on cached snapshots and should be re-verified on each provider's pricing page before launch.
- The **Mía Astral social-following numbers (4M IG, 1.4M FB)** are current as of June 2026 per public profiles (@mia_astral / @miastral); follower counts fluctuate.
- **Cal.com is AGPL** — unmodified self-hosting is fine; using Cal.com Cloud is fine. If Gabriela ever forks and modifies Cal.com itself and serves it publicly, AGPL would require publishing those modifications. Not a current concern.
- **Stripe Switzerland data residency**: Stripe's EEA contracting entity is Ireland, not Switzerland. If "data stays in Switzerland" becomes a positioning claim, payments still legally route through Ireland — phrase the trust signal carefully (e.g. "website hosted in Switzerland" if using Infomaniak, but never "payments processed in Switzerland").
- **Calendly's Stripe-supported currency list** was last verified via the official help-center article in June 2026 — re-check before launch in case Calendly adds CHF (which would re-open Calendly as an option, though Cal.com remains preferable on cost and openness).