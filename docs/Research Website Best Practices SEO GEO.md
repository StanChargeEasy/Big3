# Best-Practices Research Report: A Mobile-First, Conversion-Driven, AI-Visible Astrology Website Built with Claude Code

*Prepared June 7, 2026. Recency-weighted toward April–June 2026 sources; older or contested items are flagged inline. This report is structured to be converted directly into a website specification ("spec set") — see the spec skeleton at the end.*

## TL;DR
- **Build it as a statically-rendered Astro site, authored locally in Claude Code, and deploy to Cloudflare Pages (free) with the domain/email on a cheap host** — this combination wins on every criterion that matters here: AI crawlability (AI bots see raw server-rendered HTML and mostly cannot run JavaScript), Core Web Vitals, near-zero hosting cost, global CDN performance across DE/CH/US/LatAm, and editability by an AI agent. WordPress is the only serious alternative and is justified only if your wife insists on a self-service visual editor.
- **Treat AI search visibility (GEO) as a content-and-structure discipline, not a magic file:** answer-first writing, attributed statistics, quotes, FAQ/Q&A blocks, clean H1→H2→H3 hierarchy, correct Schema.org (Organization, Service, Offer, LocalBusiness, Person, Review), and a robots.txt that *allows* search/citation bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot) while making an explicit decision on training bots. `llms.txt` is optional and currently low-yield — ship one, but expect nothing from it for search.
- **For conversion + compliance:** mobile-first thumb-zone layout, a single sticky CTA, *specific* (not generic) trust signals placed next to the CTA, a free-mini-reading lead magnet, and a privacy-first analytics stack (Plausible/Fathom/Umami) that needs no cookie banner — important because DE/CH/EU (GDPR + revDSG) require opt-in consent for tracking cookies.

## Key Findings

1. **Stack recommendation: Astro (static), not WordPress, for this use case.** Astro ships zero JavaScript by default, outputs clean static HTML ideal for both Google and AI crawlers, deploys free to Cloudflare Pages/Netlify, has no database/plugin attack surface, and stores content as Markdown files an AI agent can edit natively. WordPress remains viable for non-technical self-editing but carries performance, security-maintenance, and hosting-cost overhead.
2. **The single most important AI-SEO fact:** AI crawlers see your raw HTML and overwhelmingly do **not** execute JavaScript. Per the Vercel/MERJ joint analysis ("The rise of the AI crawler"), "none of the major AI crawlers currently render JavaScript" — GPTBot generated ~569M requests and ClaudeBot ~370M monthly across Vercel's network, and while ChatGPT fetched JS files 11.50% of the time and Claude 23.84%, "they don't execute them." A separate analysis of 23 major AI crawlers found 69% cannot execute JavaScript at all; only Googlebot and Bingbot render — "everyone else… gets only the raw initial HTML and moves on" (iPullRank). Client-side-rendered content is effectively invisible to AI engines. This is the decisive technical argument for server-side/static rendering.
3. **Core Web Vitals thresholds are UNCHANGED in 2026** (despite SEO-blog claims of a "2.0s LCP" update — that claim is misinformation): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, at the 75th percentile of real users. INP replaced FID on March 12, 2024 and is the metric most sites fail.
4. **FAQ rich results were deprecated May 7, 2026** — but FAQ-structured content still matters for AI citation and users. Schema's value has shifted from "SERP display trigger" to "AI trust/entity-verification signal."
5. **The astrology niche is YMYL-adjacent** (well-being). Google applies stricter E-E-A-T scrutiny, so a credible author/About page, real credentials, disclaimers, and trust framing are disproportionately important — and they double as the exact signals AI engines use to choose citations.
6. **Privacy law is a conversion-tracking constraint, not an afterthought:** EU GDPR and Switzerland's revDSG/nFADP (in force since Sept 1, 2023) both push toward opt-in consent for non-essential cookies. Cookieless analytics avoids the consent banner entirely, preserving complete data.

## Details

### 1. Technical SEO (2026 state of the art)

**Best-practices summary.** Core Web Vitals remain a ranking signal (a tiebreaker among comparably-relevant pages) and are measured on real-user, mobile data at the 75th percentile. The official "Good" thresholds, confirmed against web.dev (web.dev/articles/vitals) and Google Search Central (developers.google.com/search/docs/appearance/core-web-vitals), are: **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.** Several SEO blogs claimed a "March 2026 core update" lowered LCP to 2.0 s; this is unsupported by any official Google source — web.dev still states 2.5 s, and Google has committed to changing CWV metrics at most once per year with documented changelogs. The 2.0 s figure appears to be a conflation with the legitimate practice of setting internal *alert* buffers at 80% of threshold. INP (which replaced FID on March 12, 2024 per web.dev's "Interaction to Next Paint becomes a Core Web Vital on March 12") is the hardest metric to pass and is driven by JavaScript main-thread work — a strong reason to minimize JS.

Mobile-first indexing is the default; Google crawls and ranks based on the mobile version, and roughly 65–71% of Google searches now originate on mobile (Google's Feb 2026 Mobile Search Benchmarks Report puts global mobile search at ~65%; StatCounter/Statista compilations put it at ~71%). Structured data should be JSON-LD (the only format Google recommends). For a service business selling readings/consultations/courses, the highest-value schema types in 2026 are: **Organization** (entity anchor, with `sameAs` to social profiles), **LocalBusiness** (if a physical/service-area presence exists, with NAP consistency to Google Business Profile), **Service** + **Offer**/**OfferCatalog** (for packages and pricing), **Person** (the astrologer's author/about entity, with `knowsAbout`), **Product** + **Offer** (for fixed-price digital products/courses), **Review/AggregateRating** (where genuine), **Course** (for courses), and **BreadcrumbList**. **FAQPage** remains valid Schema.org but no longer produces a rich result (deprecated May 7, 2026) — keep it only where content is genuinely Q&A-shaped, for users and AI parsing.

Other essentials: a clean XML sitemap (auto-generated by Astro's sitemap integration), self-referencing canonical tags, a logical internal-linking architecture (pillar/cluster), image optimization (AVIF/WebP, explicit width/height to protect CLS, lazy-loading below the fold, an eager/preloaded LCP hero image), and avoidance of JavaScript-dependent content/navigation.

**Actionable checklist (spec-ready).**
- [ ] Set performance budget: LCP < 2.0 s internal target (alert), CLS < 0.08, INP < 160 ms (80%-of-threshold alerts).
- [ ] Every image has explicit dimensions; hero/LCP image preloaded; all others lazy-loaded; serve AVIF/WebP.
- [ ] JSON-LD for Organization, Person (astrologer), Service+Offer per package, Course (if applicable), Review/AggregateRating (genuine only), BreadcrumbList.
- [ ] Auto-generated XML sitemap submitted to Google Search Console + Bing Webmaster Tools.
- [ ] Self-referencing canonicals on every page; correct canonical+hreflang interplay (each language self-canonicalizes).
- [ ] All primary content and navigation server-rendered (no JS dependency for crawlable content).
- [ ] Validate all structured data in Google's Rich Results Test before launch.

**Key resources.** web.dev Web Vitals (web.dev/articles/vitals); Google Search Central Core Web Vitals (developers.google.com/search/docs/appearance/core-web-vitals); web.dev INP announcement (web.dev/blog/inp-cwv-march-12); Google Search Central structured data docs for LocalBusiness, Organization, FAQPage (developers.google.com/search/docs/appearance/structured-data); Schema.org vocabulary (schema.org).

### 2. AI SEO / GEO (Generative Engine Optimization)

**Best-practices summary.** GEO is the discipline of getting cited by AI answer engines (ChatGPT/OpenAI search, Google AI Overviews/AI Mode, Perplexity, Claude, Gemini, Copilot). It was defined in the academic paper **"GEO: Generative Engine Optimization" (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande — Princeton/IIT Delhi, KDD 2024, arXiv 2311.09735; dl.acm.org/doi/10.1145/3637528.3671900)**. Its abstract states verbatim: "we demonstrate that GEO can boost visibility by up to 40% in generative engine responses… including citations, quotations from relevant sources, and statistics can significantly boost source visibility, with an increase of over 40% across various queries." The study used **GEO-bench** (10,000 queries across nine domains), tested nine methods, and found classic **keyword-stuffing does not work**, while lower-ranked content can see outsized gains (the paper reports a ~115% visibility increase for content starting around position 5 when sources are cited). It also demonstrated up to 37% visibility improvement on Perplexity.ai specifically.

The mechanics that matter:
- **AI crawlers read raw HTML and mostly don't run JavaScript** (Vercel/MERJ: "none of the major AI crawlers currently render JavaScript"; iPullRank: 69% of 23 major AI crawlers can't execute JS at all). Server-side/static rendering is mandatory for AI visibility.
- **Content structure for citation:** lead with a direct, complete answer in the first ~40–60 words (Frase.io research indicates 44.2% of LLM citations come from the first 30% of a page's text); use attributed statistics (≈3+ per article), quotable claims, FAQ/Q&A blocks, numbered lists, comparison tables, and a clean H1→H2→H3 hierarchy with short, self-contained paragraphs (40–100 words) that make sense if extracted alone.
- **Authority dominates.** May-2026 studies (Ahrefs 1,885 pages; Seer Interactive 804,000 AI responses) found schema markup alone produces near-zero citation lift and that the overwhelming majority of AI-citation lift is mediated by organic ranking strength and off-site brand mentions (Reddit, Wikipedia, review sites). Brand mentions correlate with AI citation more strongly than backlinks. The practical implication: GEO is an *additional layer* on solid traditional SEO, not a replacement.

**The `llms.txt` debate (flagged as contested).** `llms.txt` is a proposed Markdown file giving AI systems a curated map of your site. As of mid-2026 it is **not** used by major AI search crawlers: Google's John Mueller compared it to the keywords meta tag and Google says Search doesn't use it; Gary Illyes confirmed Google has no plans to support it. Multiple independent empirical studies converge that search/answer crawlers essentially ignore it (Limy: of 515M+ bot events, only 408 touched llms.txt; OtterlyAI: 84 of 62,100 requests = 0.1%; SE Ranking, ~300k domains: no measurable citation effect). However, Google added an llms.txt check to **Chrome Lighthouse's new "Agentic Browsing" audit category (v13.3, ~May 5–7 2026)** — framed as agent *functionality*, explicitly not a search-ranking signal, with a missing file marked "Not Applicable." IDE/agentic coding tools (Cursor, Copilot, Claude Code) do consume it. **Verdict: ship a simple `llms.txt` (a half-day, harmless, future-optional bet), but invest effort in content/structure/authority, not the file.**

**AI crawler / robots.txt strategy.** Distinguish three bot types and decide per type (confirmed against OpenAI's bot docs at developers.openai.com/api/docs/bots and Anthropic's at support.claude.com/en/articles/8896518):
- **Search/citation bots — ALLOW for visibility:** `OAI-SearchBot` (powers ChatGPT search; OpenAI: "Sites that are opted out of OAI-SearchBot will not be shown in ChatGPT search answers"), `ChatGPT-User`, `Claude-SearchBot` (Anthropic: blocking it "may reduce your site's visibility and accuracy in user search results"), `Claude-User`, `PerplexityBot`, `Perplexity-User`, plus `Bingbot` (grounds Copilot).
- **Training-only bots — optional decision:** `GPTBot` (OpenAI training — blockable without losing ChatGPT citations, since the systems are independent), `ClaudeBot` (Anthropic training), `Google-Extended` (opt-out token for Gemini training; does NOT affect Google Search), `CCBot`, `Applebot-Extended`, `Meta-ExternalAgent`. (Deprecated strings `Claude-Web` and `anthropic-ai` no longer block current Anthropic crawlers — don't rely on them.)
- **Non-compliant scrapers:** `Bytespider` (ignores robots.txt — block at server/WAF if desired).

Critical pitfall: ~27% of sites accidentally block AI search bots at the CDN/WAF layer (e.g., Cloudflare's "Block AI bots" toggle) even when robots.txt allows them. For an astrology business that wants maximum AI visibility, **allow all search/citation bots; allowing training bots is also defensible for long-term brand familiarity.** Keep `/checkout/`, `/account/`, `/cart/`, admin paths disallowed for all.

**Measuring AI referral traffic.** GA4 added a native **"AI Assistant" channel on May 13, 2026**, but it only recognizes ChatGPT, Gemini, and Claude and only when referrer headers survive; 35–70% of AI sessions arrive without referrers and land in "Direct." Build a custom channel group / Exploration with a regex on AI domains (`chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com|copilot\.microsoft\.com`) and add Landing Page as a secondary dimension. AI traffic reportedly converts several times better than generic organic, but Claude attribution is a known gap (it strips referrers). Distinguish AI *visibility* (are you cited?) from AI *referral traffic* (did someone click?).

**Actionable checklist.**
- [ ] Every page server-rendered/static; verify by viewing raw HTML source (curl) for full content.
- [ ] Answer-first opening (40–60 words) on every key page and blog post.
- [ ] ≥3 attributed statistics + ≥1 expert quote per substantial article; cite sources inline.
- [ ] Q&A blocks, lists, comparison tables; H1→H2→H3 hierarchy; 40–100-word paragraphs.
- [ ] robots.txt allowing OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Bingbot; explicit training-bot decision; sensitive paths blocked for all.
- [ ] Validate per-bot fetchability with curl (`curl -A "PerplexityBot" -I https://site/...`) and confirm CDN isn't overriding robots.txt.
- [ ] Optional `llms.txt` at root (flagged low-yield).
- [ ] GA4 custom AI channel group + Landing Page dimension; monthly review.

**Key resources.** GEO paper (arxiv.org/abs/2311.09735; dl.acm.org/doi/10.1145/3637528.3671900); OpenAI bots docs (developers.openai.com/api/docs/bots); Anthropic crawler docs (support.claude.com/en/articles/8896518); Chrome Lighthouse Agentic Browsing docs (developer.chrome.com/docs/lighthouse/agentic-browsing); Vercel/MERJ AI-crawler study (vercel.com/blog); Search Engine Land / Search Engine Journal coverage of llms.txt.

### 3. Mobile-First Design & UX

**Best-practices summary.** Roughly two-thirds of searches are mobile and Google ranks on the mobile experience. Design for the thumb: place primary CTAs and navigation in the bottom/center "natural zone," where Nielsen Norman Group eye-tracking shows tap accuracy near 96% vs. ~61% in the top "stretch" zone. Minimum touch target ~44×44 px (Apple HIG/NNG), 48×48 dp (Material), with WCAG 2.2 SC 2.5.8 allowing 24px when spacing is sufficient — spacing matters more than raw size above ~40px. Prefer a persistent bottom navigation bar over a hamburger menu for primary navigation (NNG: hidden menus reduce discoverability and task completion); reserve the hamburger for secondary items.

Apply established frameworks: **Nielsen's 10 usability heuristics**, **cognitive-load minimization** (one primary action per screen), **Fogg Behavior Model** (B=MAT: motivation + ability + trigger — reduce friction and place a clear prompt), and the **LIFT model** (value proposition, clarity, relevance, urgency, anxiety, distraction) for landing-page evaluation. Meet **WCAG 2.2 AA** (contrast, focus visibility, target size). Keep a mobile performance budget that protects INP (minimize third-party scripts — the most common INP killer).

**Actionable checklist.**
- [ ] Bottom-anchored sticky primary CTA within thumb arc; 3–5 item bottom nav for core sections.
- [ ] Touch targets ≥44×44 px with generous spacing; visible focus states; no targets within 16px of screen edges.
- [ ] One primary action per screen; progressive disclosure for detail.
- [ ] WCAG 2.2 AA: contrast, focus appearance, target size, reduced-motion support.
- [ ] Audit/remove third-party scripts to protect INP; test on a mid-range Android over 4G.
- [ ] Evaluate each landing page against the LIFT model before launch.

**Key resources.** Nielsen Norman Group (nngroup.com) on touch targets, thumb zones, and hamburger menus; W3C WCAG 2.2 (w3.org/TR/WCAG22); Baymard Institute (baymard.com) checkout/mobile research.

### 4. Conversion Rate Optimization (selling packages)

**Best-practices summary.** A high-converting landing page leads with a clear, specific value proposition (hero) and a single primary CTA, supported by benefits, trust signals, social proof, and an FAQ that handles objections. 2026 testing data (a Digital Applied study of 2,000 A/B tests) found:
- **Specificity beats vagueness in social proof.** Named-customer/credential claims lift conversion most (~+22% in that study); generic "trusted by thousands" or logo strips underperform — *"Specificity converts; vagueness decorates."* For a spiritual/astrology business this means real named testimonials, a real photo and bio of the astrologer, verifiable credentials/years of practice, and links to third-party reviews (NN/G: off-site reviews are trusted more than curated on-site quotes).
- **Sticky-bottom CTA does most of the work** (~+11%); adding an above-fold CTA on top adds little (~+1%) — ship the sticky CTA and don't fight for both.
- **Trust signals next to the CTA** outperform footer placement by 40–60%; money-back guarantees reduce perceived risk and lift conversion 10–30% while actual returns rise only 1–3% (Baymard).
- **Checkout/booking friction:** per Baymard's Checkout Optimization research, 19% of online shoppers abandon checkout because they "don't trust the site with their credit card information" — a specific, addressable doubt at the payment field. Reduce form fields, offer guest checkout, show security/payment assurances at the payment step.
- **Urgency must be credible** — fake scarcity erodes trust, which is especially damaging in a trust-dependent spiritual niche.
- **Lead magnet:** in this niche, a free mini-reading, free birth-chart/natal-chart, or downloadable astro-guide is the proven email-capture pattern (CHANI grew a large newsletter and e-commerce business this way; its "free → nurture" giveaway approach yielded 60% first-time purchasers and a 110% revenue increase on a subsequent launch). Capture email, then nurture.
- **A/B testing on low traffic:** prioritize big swings (hero, offer, CTA), use longer test windows, and lean on qualitative tools (heatmaps, session replay) since statistical significance is slow at low volume.

**Actionable checklist.**
- [ ] Hero: specific value prop + single primary CTA; sticky CTA on mobile.
- [ ] Real astrologer photo, bio, credentials, years of practice; named testimonials with photos; link to third-party reviews.
- [ ] Trust/guarantee microcopy directly beneath CTA buttons.
- [ ] Pricing page with clear package tiers and Offer schema; FAQ handling objections.
- [ ] Booking/checkout: minimal fields, guest option, payment-security assurance at payment step.
- [ ] Free mini-reading / birth-chart lead magnet → email capture → nurture sequence.
- [ ] Credible (never fake) urgency only; heatmaps + session replay for low-traffic insight.

**Key resources.** Baymard Institute checkout/trust research (baymard.com); Nielsen Norman Group trust pyramid; Digital Applied 2026 landing-page and trust-signal studies; CHANI/Mailchimp email-marketing case study (mailchimp.com/case-studies).

### 5. Social Media Integration

**Best-practices summary.** Astrology audiences concentrate on Instagram and TikTok, where short daily-horoscope/zodiac content drives discovery (top astrology accounts routinely post "link in bio for chart readings" to route traffic to bookings). Each platform allows one bio link (TikTok requires a Business account or 1,000+ followers for a clickable link). A link-in-bio hub (or a dedicated landing page) routes that single link to the offer/lead magnet; direct, content-matched destinations convert better than a generic homepage. Implement Open Graph and Twitter/X Card meta tags so shared links render rich previews (1200×630 OG image). Embed social proof (real testimonials, follower counts where impressive) on-site. Repurpose between channels: a viral TikTok hook → a deeper blog post → an email → back to social, keeping the website (which you own) as the conversion and email-capture hub rather than renting all attention on platforms.

**Actionable checklist.**
- [ ] OG + Twitter Card tags on every page; per-page 1200×630 OG images.
- [ ] Link-in-bio → dedicated landing page with lead magnet + primary offer.
- [ ] Content-matched destinations (video promise = landing-page promise).
- [ ] On-site embedded testimonials/social proof.
- [ ] Repurposing workflow: social → blog → email → social.

**Key resources.** Open Graph protocol (ogp.me); platform link-in-bio guides (Sprout Social); Stan / KickoffLabs link-in-bio strategy guides.

### 6. Astrology / Spiritual Niche Specifics

**Best-practices summary.** Astrology is **YMYL-adjacent** (well-being / "welfare of society" per Google's quality-rater framing). Google doesn't ban it, but applies stricter E-E-A-T scrutiny, so credibility framing is essential: a strong About/author page, real credentials and experience, clear contact and policy pages, and tasteful disclaimers ("astrology is not a substitute for medical/financial/legal advice"). These same signals are what AI engines weigh when choosing citations, so E-E-A-T work pays double.

Benchmark businesses:
- **CHANI** (founded by astrologer Chani Nicholas): Inc. reports "just over 2 million downloads" and that "Inc. estimated the company's annual revenue to be around $14 million," noting it "has been profitable since launch" and is *not* VC-funded — grown via community, a large email newsletter, e-commerce (planners/products), a podcast, and a paid app, with all content human-written (no AI).
- **Co-Star**: per Axios (April 2021), "raised $15 million in Series A funding led by Spark Capital… more than 20 million app downloads without any real marketing efforts… downloaded by a quarter of all young women ages 18-25 in the U.S." Freemium model.

Typical monetization in the niche: subscriptions, one-time readings/reports, courses/workshops, and e-commerce. For a single-practitioner business selling packages, the proven pattern is: free content + lead magnet → paid consultations/readings → courses → recurring/membership. Niche-specific content/schema patterns: birth-chart/compatibility/transit explainer content (answer-first, AI-citable), Person schema for the astrologer, Service+Offer for each package, genuine Review/AggregateRating.

**Actionable checklist.**
- [ ] Authoritative About/author page with credentials, experience, photo; Person schema with `knowsAbout`.
- [ ] Visible contact, terms, refund, and privacy pages; tasteful "not a substitute for professional advice" disclaimer.
- [ ] Package architecture: free content/lead magnet → readings/consultations → courses → membership.
- [ ] Genuine reviews/testimonials; third-party review links.

**Key resources.** Google "Creating Helpful, Reliable, People-First Content" + Search Quality Rater Guidelines (developers.google.com/search/docs/fundamentals/creating-helpful-content); Search Engine Land YMYL guide; Inc. CHANI profile (inc.com); Axios Co-Star funding (axios.com).

### 7. Building with Claude Code

**Best-practices summary.** Claude Code (Anthropic's agentic CLI; also usable from the desktop app, friendlier for non-terminal users) can build and iterate a complete site, preview it locally, and even drive a browser to test it. Anthropic's official guidance ("Best practices for Claude Code," code.claude.com/docs/en/best-practices) centers on **managing the context window** — "Claude's context window fills up fast, and performance degrades as it fills." Practical patterns confirmed across Anthropic's docs and experienced practitioners:
- **CLAUDE.md should be lean:** include only universally-applicable instructions — project structure/map, purpose, and how to build/test/verify — not every command or style rule (Anthropic's "How Anthropic teams use Claude Code" notes more detailed CLAUDE.md files help, but practitioners stress keeping it minimal and referencing detailed docs in separate files Claude reads only when needed). Note CLAUDE.md instructions are followed ~70% of the time; use hooks for non-negotiable rules.
- **Plan before building:** use Plan Mode (or have Claude interview you and write a SPEC.md), review the plan, then execute. Anthropic's internal testing found unguided attempts succeed ~33% of the time; planning collapses many ambiguous decisions into a reviewed spec.
- **Skills & MCP:** community Claude Code "skills" (e.g., Anthropic's web-design skill, production-hardening skills) raise quality; MCP servers extend capability. For design-to-code, **Nano Banana Pro (Gemini 3 Pro Image)** integrates via a Claude Code skill/MCP so you can generate and iterate UI mockups and image assets *inside the same session* ("design and implementation, same context, no handoff") — directly matching this project's design workflow (install e.g. `npx skills add intellectronica/agent-skills`).
- **Visual iteration loop:** Claude Code can launch a local preview and use browser/computer-use (or Playwright) to click through and verify the site.
- **Pitfalls:** Claude won't self-suggest SEO, analytics, security hardening, or PageSpeed tuning — you must drive those explicitly (the spec set this report feeds is exactly that driver). Keep context under ~60% capacity; start fresh sessions for distinct tasks.

**Actionable checklist (non-developer setup).**
- [ ] Install Claude Code; create a project folder; start in Plan Mode for the initial build.
- [ ] Author a lean CLAUDE.md: stack (Astro), conventions, build/preview/test commands, "always validate structured data," "never commit secrets."
- [ ] Maintain a SPEC.md (this report → spec) as the source of truth.
- [ ] Install the Nano Banana Pro skill for design assets/mockups; generate hero/section images and OG images in-session.
- [ ] Use the browser/Playwright loop to visually verify mobile layout and CTAs.
- [ ] Explicitly task Claude with SEO, schema, performance, analytics, and accessibility passes.
- [ ] Use Git from the start (Claude Code can manage it) for versioning/rollback.

**Key resources.** Anthropic "Best practices for Claude Code" (code.claude.com/docs/en/best-practices); "How Anthropic teams use Claude Code" (PDF, anthropic.com); Nano Banana Pro skill (skillsplayground.com; github.com/intellectronica/agent-skills); practitioner write-ups (Leon Furze Astro+Claude Code build, leonfurze.com; paddo.dev Nano Banana UX workflow).

### 8. Hosting & Deployment

**Best-practices summary.** For a static Astro build, the best fit is **Cloudflare Pages** (free tier, unlimited bandwidth, global edge CDN with excellent TTFB across Europe, the Americas, and LatAm, free SSL, Git-based auto-deploy). It is developer-oriented (Git workflow), which is fine because Claude Code handles deployment. **Netlify** and **Vercel** free tiers are equivalent alternatives; **GitHub Pages** is simplest but lacks edge features. For the domain + professional email + (if ever needed) a simple control panel, a cheap host complements the static deploy:
- **Hostinger** — cheapest and easiest for non-technical users (HPanel, one-click setup, included email, 24/7 chat), best if you want WordPress later or a familiar dashboard; strong GTmetrix performance on its Business plan (~790 ms full load, ~408 ms LCP in HostAdvice's test). Lithuania-based; ~7.91% web-hosting market share.
- **Swiss options for data-residency/privacy positioning** — **Infomaniak** (largest Swiss web-tech developer, Swiss data centers, strong privacy/sustainability story), **Hostpoint**, **cyon**. Higher cost and smaller scale than Hostinger, but data stays in Switzerland — a genuine marketing/compliance angle for CH/EU customers.

Recommended pattern: **build static in Claude Code → deploy to Cloudflare Pages (free) → point a domain (registered cheaply, or via Infomaniak for the Swiss angle) → email via the registrar/host.** This keeps hosting near-free, fast globally, and SSL automatic. Note Cloudflare's bot settings: ensure the "Block AI bots" toggle does not silently block the search/citation crawlers you want.

**Actionable checklist.**
- [ ] Primary deploy: Cloudflare Pages (or Netlify/Vercel free), Git auto-deploy from repo.
- [ ] Domain: cheap registrar, or Infomaniak/Hostpoint for Swiss data-residency marketing.
- [ ] Professional email via host/registrar (Hostinger or Infomaniak include it).
- [ ] Confirm free SSL active; HTTPS enforced.
- [ ] Verify Cloudflare AI-bot/WAF settings allow OAI-SearchBot/PerplexityBot/Claude-SearchBot.
- [ ] If WordPress route chosen instead: Hostinger Business plan + caching + image optimization.

**Key resources.** HostAdvice Cloudflare-vs-Hostinger comparison (hostadvice.com); VPSBenchmarks Hostinger-vs-Infomaniak (vpsbenchmarks.com); Cloudflare Pages / Netlify / Vercel docs; Infomaniak (infomaniak.com).

### 9. Analytics & Measurement under GDPR/revDSG

**Best-practices summary.** GA4 is free and powerful but, in the EU/CH, requires a cookie-consent banner and careful configuration, and several EU DPAs have ruled against GA implementations. Switzerland's **revDSG/nFADP** (in force Sept 1, 2023; supervised by the FDPIC; fines up to CHF 250,000 levied on the responsible individual) requires transparency and, per the FDPIC's 2025/2026 guidance, opt-in consent for non-essential/tracking cookies — especially third-party cookies for personalized advertising or cross-site tracking, which it treats as "intensive intrusion" requiring explicit opt-in functionally identical to GDPR. A privacy policy is mandatory for essentially any data-collecting site (nFADP Art. 19 + GDPR Art. 13), and CMP geo-targeting must explicitly include Switzerland (a common oversight, since many CMPs apply GDPR logic only to EEA/UK).

The pragmatic, conversion-friendly choice is **cookieless, privacy-first analytics that needs no consent banner**: **Plausible** (EU-hosted, open-source, <1KB script, ~$9/mo or self-host), **Fathom** (cookieless, EU-isolation routing), or **Umami** (open-source, free self-host, cookieless by default). These collect no personal data, so no banner is required and data is complete (no consent-decline gap). Choose GA4 only if you need deep Google Ads conversion integration — in which case you must run a Google-certified CMP with Consent Mode v2 and geo-target EEA + UK + Switzerland. For this small business, **Plausible or Fathom (hosted, zero-maintenance) or Umami (free, self-hosted)** is the recommendation; track key conversion events (lead-magnet signup, booking, purchase) as goals.

**Actionable checklist.**
- [ ] Default to cookieless analytics (Plausible/Fathom/Umami) — no consent banner needed.
- [ ] Mandatory privacy policy (nFADP Art. 19 + GDPR Art. 13); footer link on every page; name every tool/tracker; date it.
- [ ] If GA4 is used: Google-certified CMP + Consent Mode v2, geo-targeting EEA+UK+Switzerland, opt-in only.
- [ ] Define conversion events: lead-magnet signup, booking/checkout, purchase, key page views.
- [ ] Pair analytics with AI-channel tracking (Section 2) for AI referral measurement.

**Key resources.** FDPIC / nFADP guidance (kmu.admin.ch; fedlex/admin.ch); Plausible (plausible.io), Fathom (usefathom.com), Umami (umami.is) docs; Google Consent Mode v2; PostHog GDPR-analytics comparison (posthog.com).

## Recommendations (staged, with decision thresholds)

**Stage 1 — Decide stack & scaffold (week 1).** Commit to **Astro (static) + Cloudflare Pages**. Set up Claude Code with a lean CLAUDE.md and a SPEC.md built from this report. *Switch to WordPress on Hostinger only if* your wife will not tolerate editing content via Markdown/Claude and demands a visual WYSIWYG self-service editor — the threshold is "will the content editor touch code/Markdown at all (even via Claude as proxy)?" If no, WordPress; if yes, Astro.

**Stage 2 — Build core + SEO/GEO foundation (weeks 2–4).** Home, Services/Packages (with Offer schema), About/author (Person schema, E-E-A-T), individual reading/course pages, blog, contact, pricing, privacy/terms. Implement JSON-LD, sitemap, canonicals, robots.txt (allow search/citation bots), answer-first content. Generate imagery with Nano Banana Pro.

**Stage 3 — Conversion + lead magnet (week 4–5).** Sticky CTA, specific trust signals, free mini-reading/birth-chart lead magnet → email capture → nurture. Booking/checkout with minimal friction.

**Stage 4 — Internationalization (week 5–6).** Use **subdirectories** (`/en/`, `/de/`, `/es/`) on one domain — the consensus best structure for consolidating authority (ccTLDs only if you later commit hard to one market; subdomains lose link-equity consolidation). Implement bidirectional, self-referencing **hreflang** with `x-default` (note: ~75% of hreflang implementations contain errors — validate with a tool, and each language version must self-canonicalize, never canonicalize to a "master"). For Spanish, decide between a single `es` or regional `es-mx`/`es-419` for LatAm vs `es-es`; for German, `de` covers DE/AT/CH (add `de-ch` only if content differs, e.g., ß→ss). **Human-edit translations** — machine translation rarely ranks and can trigger low-quality signals.

**Stage 5 — Analytics, launch, measure (week 6+).** Deploy cookieless analytics; publish privacy policy; submit sitemaps to Search Console + Bing. Post-launch, track: Core Web Vitals (Search Console), conversions, and AI referral traffic. **Thresholds that change the plan:** if INP > 200 ms in field data, audit/defer third-party JS; if any market's organic traffic is negligible after 6 months, reconsider that language investment; if AI referral traffic grows materially, expand answer-first/FAQ content on commercial pages (not just blog).

**Stage 6 — Iterate with GEO/CRO.** Quarterly: re-audit robots.txt and schema; refresh cornerstone content with updated dates/stats; run heatmap-informed CTA/offer tests; monitor AI citation share.

---

## Draft Spec Skeleton (foundation for the spec set)

**Recommended stack.** Astro (static/SSG, zero-JS-by-default, islands only where interactivity is needed) → Git repo → Cloudflare Pages (free, edge CDN, auto SSL, auto-deploy). Domain + email via cheap registrar or Infomaniak (Swiss angle). Built and iterated locally in Claude Code; design assets via Nano Banana Pro skill. Cookieless analytics (Plausible/Fathom/Umami).

**Page architecture (subdirectory i18n: `/en/`, `/de/`, `/es/`).**
- Home (hero + value prop + single primary CTA + social proof + lead-magnet capture)
- Services / Packages (each package: Service+Offer schema, pricing, CTA, FAQ)
- Individual reading/consultation pages; Courses (Course schema)
- About / The Astrologer (Person schema, credentials, photo, E-E-A-T, disclaimers)
- Blog (answer-first explainer content: birth charts, compatibility, transits)
- Pricing (tiered, Offer schema)
- Booking / Checkout (low-friction, guest option, payment-security cues)
- Contact, Privacy Policy, Terms, Refund
- Lead-magnet landing page (free mini-reading/birth-chart) for link-in-bio traffic

**SEO/GEO requirements.** LCP ≤2.5s / INP ≤200ms / CLS ≤0.1 (internal alerts at 80%); JSON-LD (Organization, Person, Service, Offer, Course, Review, BreadcrumbList); auto sitemap; self-canonicals; bidirectional hreflang + x-default; robots.txt allowing OAI-SearchBot/ChatGPT-User/Claude-SearchBot/Claude-User/PerplexityBot/Perplexity-User/Bingbot, explicit training-bot decision, sensitive paths blocked; optional llms.txt; answer-first content, attributed stats/quotes, Q&A blocks, clean heading hierarchy; all content server-rendered.

**UX requirements.** Mobile-first, thumb-zone bottom nav + sticky CTA; touch targets ≥44px with spacing; one primary action per screen; WCAG 2.2 AA; minimal third-party JS; LIFT-evaluated landing pages.

**Conversion elements.** Specific named testimonials + astrologer credentials; trust/guarantee microcopy beside CTA; free lead magnet → email nurture; credible-only urgency; heatmaps/session replay; A/B test hero/offer/CTA.

**Hosting recommendation.** Cloudflare Pages (free) for the static site; Hostinger or Infomaniak for domain/email (Infomaniak if Swiss data-residency is a marketing asset). Verify Cloudflare bot settings don't block AI search crawlers.

**Analytics/compliance.** Cookieless analytics (no banner); mandatory bilingual privacy policy (nFADP + GDPR); conversion-event tracking; AI-referral channel in GA4 if GA4 used (with CMP + Consent Mode v2 geo-targeting CH).

## Caveats
- **Contested / fast-moving:** `llms.txt` adoption is genuinely unsettled — Google Search ignores it, empirical studies show near-zero search impact, but Chrome Lighthouse now audits it for agentic browsing and IDE tools use it. Treat it as optional, low-yield-for-now.
- **Debunked claim flagged:** the widely-repeated "March 2026 lowered LCP to 2.0s" is **not** supported by any official Google source; the official "Good" LCP threshold remains **2.5s**. Treat "2026 core update" CWV-threshold claims from SEO blogs with skepticism.
- **Per-tactic GEO percentages** (e.g., "+41% statistics," "+115% for position-5 content") come from the Princeton paper's tables but are inconsistently attributed across secondary retellings — the safe, paper-verified headline is "up to 40%."
- **Astrology business figures** (CHANI ~$14M revenue / ~2M downloads; Co-Star 20M+ downloads / $15M Series A) are reputable-journalism estimates and company self-claims, not audited; download/user numbers vary by source and date.
- **Many GEO/SEO sources are vendor blogs** with commercial interests; primary claims here are anchored to Google/web.dev/Anthropic/OpenAI/academic sources where possible, with vendor data attributed to named studies (Vercel/MERJ, Ahrefs, Seer, Limy, SE Ranking, Digital Applied).
- **Schema/rich-result landscape is shifting:** FAQ rich results are gone (May 2026); verify current eligibility in Google's Rich Results Test before relying on any display feature.
- **Privacy law is not legal advice:** confirm specific revDSG/GDPR obligations with a qualified advisor before launch, especially for LatAm markets (e.g., Brazil's LGPD, Mexico's LFPDPPP) not covered in depth here.
- **Recency note:** most sources are dated Feb–June 2026. Where a claim rests on older material (e.g., the 2024 GEO paper, 2017 Baymard checkout figure, 2021 Co-Star funding), it is noted; treat the AI-crawler and GEO landscape as volatile and re-verify quarterly.