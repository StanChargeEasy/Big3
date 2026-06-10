# Building a CMS+Blog+Contact-Form Portfolio Site with Claude Code in 2026 — A Deep-Research Playbook

## TL;DR
- For a solo developer building a showcase/portfolio site with a blog and contact form in mid-2026, the strongest stack is **Astro + Decap CMS + Web3Forms (or Formspree), built locally with Claude Code (v2.1.x), versioned in Git, and deployed either to (a) Hostinger Cloud Startup / KVM 2 VPS for raw price or (b) Infomaniak Web Hosting (CHF 10.91/mo ex‑VAT) when Swiss data residency and native Node.js support matter** — and "Banana Pro" in this context is Google DeepMind's Nano Banana Pro (Gemini 3 Pro Image), used as an AI image/mockup generator that you export and integrate into the Astro project, not a code‑generating UI builder.
- Claude Code's 2026 "best practice" stack — CLAUDE.md + path‑scoped `.claude/rules/`, plan mode (Shift+Tab), worktrees via `--worktree`, the May 28, 2026 Dynamic Workflows for big refactors, and "Document & Clear" context hygiene — is what consistently turns Claude Code from "confused intern" into "senior pair programmer" on a small CMS build.
- WordPress (self‑hosted on LocalWP / WordPress Studio + Claude Code) remains the single fastest path if non‑technical clients will eventually edit content, and WordPress.com's Feb 12, 2026 Claude Code + Studio guide makes it a documented, supported workflow — but for a solo developer's own portfolio, the JAMstack stack ships faster, scores 100/100 Lighthouse out of the box, and costs less to run.

## Key Findings

1. **Claude Code is no longer "just the CLI."** Anthropic shipped a redesigned macOS/Windows Desktop app on **April 14, 2026** (Neurohive's June 2026 install guide), and on **May 28, 2026** opened **Dynamic Workflows** in research preview across CLI, Desktop and the VS Code extension on Max/Team/Enterprise plans — Claude writes an orchestration script that can spawn up to 1,000 parallel subagents capped at 16 concurrent (MarkTechPost, May 28, 2026; Anthropic blog post "Introducing dynamic workflows in Claude Code"). For a portfolio‑sized site this is overkill, but the new `/ultracode` effort level and `--worktree` flag are directly relevant.

2. **CLAUDE.md is the single highest‑leverage artifact** in a Claude Code project. DataCamp's "Claude Code Best Practices" article (datacamp.com/tutorial/claude-code-best-practices) states verbatim: *"Anthropic's own team found that unguided attempts succeed about 33% of the time, and the tool's creator abandons 10‑20% of sessions. The difference comes down to the patterns you put around the tool, not the prompts you type into it."* HumanLayer, Builder.io and TurboDocx converge on keeping it **under 80–200 lines**, organised WHY/WHAT/HOW, with overflow into path‑scoped `.claude/rules/*.md`.

3. **For the stack question, "best Claude Code training data" maps cleanly to Astro + Next.js + WordPress** — all three are heavily represented and Claude Code reliably writes idiomatic code in each. Astro 5/6 with Content Collections + Decap CMS is the sweet spot for portfolio/blog because (a) zero JS by default → trivial Lighthouse 100, (b) Markdown content lives in `src/content/blog/*.md` in Git which Claude Code can directly read/edit, (c) Decap gives a `/admin` GUI without a database, (d) the entire site is statically generated, so any cheap host serves it (Cosmic.js June 2026 comparison; Naturaily 2026 report; codewithmk.com JAMstack tutorial).

4. **"Banana Pro" is almost certainly Google DeepMind's Nano Banana Pro (Gemini 3 Pro Image)** released late 2025 and widely covered through 2026 — it is *not* a CSS framework, UI kit, or WordPress theme. There are unrelated third‑party SaaS wrappers (`banana-pro.io`, `bananaproai.com`, `bananadesigner.com`) that resell access. The integration story is: generate hero images, mockups, infographics, product/portfolio shots (up to 4 K resolution, up to 14 reference images, character consistency across up to 5 people per the official `blog.google` "Introducing Nano Banana Pro" post), export PNG/JPG, drop them into `src/assets/` of your Astro project, and let Astro's `<Image>` component optimise them.

5. **Local dev is now a near‑solved problem on both branches:**
   - **WordPress**: WordPress.com's own Feb 12, 2026 guide pairs **WordPress Studio** (free local environment, Mac+Windows) with Claude Code; an official **WordPress.com Claude Code Plugin** (developer.wordpress.com/wordpress-com-claude-code-plugin/) exposes `/quick-build` and `/design-site` slash commands that generate a full block theme from natural language.
   - **Static/JAMstack**: Node 22 LTS + Astro/Next.js, plus `npm create astro@latest` and `npx decap-server` for the Decap CMS local backend. Claude Code reads the standard `package.json` scripts.

6. **Contact forms have shifted in 2026.** Netlify Forms moved to a credit‑based shared‑pool billing model that pauses *all* projects in an account when one site exceeds quota (Formgrid blog and DEV.to mirror, May 2026: "100 form submissions per month … Every level upgrade is automatic. You don't have to approve it … If your credit pool runs out, all your projects … get paused"). The realistic 2026 pick for a portfolio is **Web3Forms** — confirmed on web3forms.com/pricing (June 2026 verbatim: *"Web3forms provides 250 free form submissions per month"*) and with *"No account required to get started; just an API key sent to your email"* — or **Formspree** if you want a polished dashboard. WordPress sites should use **WPForms** or **Fluent Forms** native to PHP.

7. **Hosting prices and stack support converge clearly in 2026:**
   - **Hostinger Premium**: hostinger.com/pricing (June 2026) lists the 48‑month Premium plan at **$2.99/mo with "Renews at $10.99/mo"** — WordPress and Node.js both supported; renewals jump ~270 %. Cloud Startup at ~$8.99/mo promo handles dedicated resources. Their dedicated "Node.js Hosting" tier is at hostinger.com/web-apps-hosting.
   - **Infomaniak Web Hosting**: **CHF 10.91/mo ex‑VAT** (≈ CHF 11.79 incl. 8.1 % Swiss VAT). The *only* Swiss host with Node.js on the *shared* tier — Infomaniak Support FAQ 2537 ("Create a Node.js site at Infomaniak") states: *"To access a Web Hosting plan and add a Node.js site … Choose Node.js. Select another version if necessary. The source code can be imported via Git, ZIP archive, SSH, or SFTP."* 250 GB SSD, Git/SSH, one‑click WordPress with auto‑updates, Geneva data centre, ISO 27001 + 50001, 100 % renewable energy.
   - **Hostpoint Standard**: CHF 15.90/mo incl. VAT — PHP shared, no Node on entry tier; Node is only on the Managed Flex Server (from ~CHF 140/mo).
   - **Cyon Webhosting**: From CHF 14.90/mo incl. VAT (cyon.ch homepage) — PHP shared with LiteSpeed Cache, one‑click WordPress + staging, no Node runtime on shared.

8. **Project structure that consistently outperforms** with Claude Code (synthesis of Builder.io, TurboDocx, sidsaladi.substack.com, dailydoseofds.com, codewithmukesh.com) for an Astro portfolio:

```
my-portfolio/
├── CLAUDE.md                  # 60–80 lines, WHY/WHAT/HOW
├── CLAUDE.local.md            # gitignored; your personal overrides
├── .claude/
│   ├── settings.json          # permission allowlists, hooks
│   ├── rules/
│   │   ├── code-style.md      # path-scoped to src/**/*.astro
│   │   ├── content.md         # path-scoped to src/content/**/*.md
│   │   └── decap.md           # admin/config.yml conventions
│   ├── commands/
│   │   └── new-post.md        # scaffolds a blog post
│   └── skills/
│       └── seo-check/SKILL.md
├── src/
│   ├── content/{blog,projects}/   # Markdown + frontmatter
│   ├── components/                # .astro
│   ├── layouts/
│   ├── pages/
│   │   ├── admin.html             # Decap CMS shell
│   │   └── contact.astro          # Web3Forms POST endpoint
│   └── styles/
├── public/admin/config.yml        # Decap collections
└── package.json
```

## Details

### 1. Claude Code Workflow — What Has Actually Changed in 2026

The base loop is unchanged: type `claude` in your project root and converse. What has changed since GA in May 2025 is which patterns reliably ship working code:

- **Plan first, then implement.** Press `Shift+Tab` twice to enter plan mode; Claude reads files in read‑only mode, proposes a multi‑step plan, and persists it to `~/.claude/plans/` so it survives `/compact` or session restart (DataCamp; Anthropic docs). DataCamp's writeup of incident.io shows one engineer spending two hours on a 12‑step spec to save an estimated 6–10 hours of implementation.
- **Auto mode for routine work.** `claude --permission-mode auto -p "fix all lint errors"` — a separate classifier model approves safe commands and aborts on repeated blocks (Anthropic best‑practices doc).
- **Context hygiene.** DataCamp documents the exact failure mode verbatim: *"Claude's output starts degrading at 20‑40 % of the window, well before any limit kicks in… Auto‑compaction fires at roughly 83.5 %, and it's lossy: one developer lost 3 hours of refactoring work when it erased all knowledge of migration decisions mid‑session, retaining only about 20‑30 % of the details."* Defence: the "Document & Clear" pattern — dump your plan and progress to a markdown file, run `/clear`, have Claude read the markdown back. A custom `/catchup` slash command that reads files changed on the current branch closes the loop.
- **Worktrees for parallelism.** As of February 2026, Claude Code has built‑in worktree support: `claude --worktree feature/admin-page` creates a separate working directory on a new branch, runs Claude scoped to it, and cleans up on exit (Boris Cherny's writeup; Dan Gerlanc, Feb 23, 2026; thepromptshelf.dev). For a solo portfolio build the daily value is: one worktree for "rebuild contact page," another for "fix homepage CLS," no stash/checkout context‑switching cost.
- **Dynamic Workflows (May 28, 2026).** Probably *not* worth turning on for a portfolio site — token burn can be hundreds of dollars. Reserve `/ultracode` for one‑shot tasks like "migrate the entire codebase from Tailwind v3 to v4" or "audit every page for accessibility." Anthropic itself notes (claude.com blog, May 28, 2026): *"dynamic workflows can consume substantially more tokens than a typical Claude Code session, so we recommend starting on a scoped task to get a feel for usage."*
- **Claude.ai chat + artifacts as a hybrid.** The practical split: use Claude.ai (or the Desktop app) for design exploration ("draft me three hero‑section variations as HTML/Tailwind artifacts I can preview live"), copy the winner into your repo, then continue in Claude Code for integration, testing, and refactoring. The Desktop app's parallel‑session sidebar with per‑session worktrees, launched April 14, 2026, makes this hand‑off smooth.

### 2. Stack Decision Framework

| Criterion | WordPress (self‑hosted) | Astro + Decap CMS (recommended) | Next.js + Sanity |
|---|---|---|---|
| Claude Code code‑gen quality | Excellent (Feb 2026 official WordPress.com guide) | Excellent (clean TS, vast training data) | Excellent (most React data) |
| Time‑to‑first‑deploy | ~1 day | ~1 day | ~2 days |
| Editor UX for non‑devs | Best (Gutenberg) | Good (Decap `/admin`) | Best (Sanity Studio) |
| Performance ceiling | Medium (PHP + plugins) | **Highest** (zero‑JS pages) | High (React Server Components) |
| Cost to run | $5–25/mo hosting + plugin licences | **$0–5/mo** (cheap static host) | $0–20/mo (Sanity free tier 1 project; Vercel hobby) |
| Lock‑in | Theme + DB + plugins | Just Markdown + Git | Sanity schema only |
| Login‑less contact form | WPForms native | Web3Forms / Formspree | Web3Forms / Formspree |

**Recommendation for a solo dev showcase site**: Astro + Decap. Markdown content in Git is a permanent escape hatch; the entire site rebuilds in seconds; Claude Code edits `.astro` and `.md` files natively. Choose WordPress only if you (a) already maintain other WP sites and want one host, or (b) plan to hand off content editing to a non‑technical client who knows Gutenberg.

### 3. "Banana Pro" — Identification and Integration

Searches for "Banana Pro" surface several products, but the canonical 2026 reference is **Google DeepMind's Nano Banana Pro**, the image generation/editing model built on Gemini 3 Pro, announced on the Google blog "Introducing Nano Banana Pro." Capabilities relevant to a portfolio site:
- Up to 4 K resolution; accurate multilingual text rendering (useful for hero banners and infographics).
- Up to **14 reference images** as input; character/brand consistency across up to 5 people.
- Available via the Gemini app (interactive), Google AI Studio (free tier), and the Gemini API / Vertex AI as `gemini-3-pro-image-preview`.
- All outputs carry the SynthID invisible watermark.

**Integration recipe for an Astro + Claude Code project:**
1. Generate hero/section images and case‑study mockups in Gemini app or AI Studio with structured prompts (e.g., "16:9 hero banner, dark glassmorphism, brand color #4F46E5, integrated headline 'Built with care'") — DataCamp's June 2026 Nano Banana Pro tutorial shows the exact `image_config` parameters.
2. Download as PNG/WebP.
3. Drop into `src/assets/images/` and reference via Astro's `<Image src={import('../assets/images/hero.png')} alt="..."/>` so build‑time optimisation (AVIF/WebP + responsive sizes) happens automatically.
4. Ask Claude Code to write a tiny `scripts/fetch-images.mjs` that calls the Gemini API for batch regeneration on prompt changes — DataCamp's snippet using `genai.GenerateContent` with `response_modalities` and `image_config` is a ready template.

If "Banana Pro" in the user's question actually refers to a different product (e.g., the Hacker News post about `Banana Pro AI` — a canvas workflow for chained image/video generation), the integration story is the same: it's an external visual‑asset pipeline, not a code generator.

### 4. Local Dev Setup

**For Astro + Decap (recommended path):**
```
brew install node            # macOS — Node 22 LTS
npm create astro@latest portfolio
cd portfolio
npm install astro-decap-cms
git init && git add . && git commit -m "init"
claude                       # start Claude Code in the repo root
```
Then in Claude Code: `/init` to auto‑generate a starter CLAUDE.md, then ask Claude to scaffold the blog collection schema, Decap `config.yml`, and a contact form posting to Web3Forms. For local Decap auth: `npx decap-server` on a separate port and set `backend: { name: 'git-gateway', branch: 'main' }` for production (per advanced-astro/astro-decap-cms-starter README).

**For WordPress:**
1. Install **WordPress Studio** (free, Automattic) — works on macOS and Windows; CLI flag exposes the `studio` command.
2. Install Claude Code; sign in.
3. Open the site folder in Terminal, run `claude`, and use the official WordPress.com Claude Code Plugin's `/quick-build` (single‑session theme generation) or `/design-site` (multi‑phase, with style tiles and live design gallery at `/?design-gallery`).
4. For day‑to‑day work, the JPTWeb pattern of using Studio's "Site Shell" button to inherit WP‑CLI/PHP, then dropping a `wordpress-local` slash command into `.claude/commands/`, works reliably.

**Git workflow for a solo dev with Claude Code:**
- `main` is always deployable. Treat every Claude Code session as a short‑lived feature branch via `claude --worktree feature/<name>` (Boris Cherny's recommended pattern from the Code w/ Claude SF 2026 talk).
- Commit messages: let Claude write them, but turn off Co‑Authored‑By via `settings.json` (`"attribution.commit": ""`).
- `.claudeignore` to keep `node_modules`, `.astro/`, `dist/` out of context discovery.

### 5. Hosting Comparison Table (June 2026)

| Provider | Entry plan (monthly) | Stack support | Data residency | Best for |
|---|---|---|---|---|
| **Hostinger Premium** | **$2.99 promo / $10.99 renewal** (48‑mo term, per hostinger.com/pricing June 2026) | WordPress 1‑click, Node.js, static, PHP | Multi‑region (no Swiss DC) | Cheapest WordPress path |
| **Hostinger Cloud Startup** | ~$8.99 promo / ~$19.99 renewal | + dedicated resources, free CDN, daily backups | Same | WordPress sites expecting traffic |
| **Hostinger KVM 2 VPS** | ~$8.99 / $19.49 renewal (2 vCPU, 8 GB RAM) | Full root, Docker, Node, Strapi | Same | Self‑managed full stack |
| **Infomaniak Web Hosting** | **CHF 10.91/mo ex‑VAT** (~CHF 11.79 incl.) | **Node.js + PHP 8.5 + Python on shared** (FAQ 2537), 1‑click WordPress + auto‑updates, 250 GB SSD, Git/SSH | **Geneva, Switzerland — 100 % renewable, ISO 27001 + 50001** | Swiss data residency, ethical hosting, JAMstack‑friendly |
| **Hostpoint Standard** | CHF 15.90/mo incl. VAT | PHP shared, 1‑click WP, 100 GB NVMe; **Node only on Managed Flex Server from ~CHF 140/mo** | Switzerland (Glattbrugg ZH) | Mature Swiss support in DE/FR/IT |
| **Cyon Webhosting** | From CHF 14.90/mo incl. VAT | PHP shared, LiteSpeed, 1‑click WordPress, staging built‑in; **no Node runtime on shared** | Switzerland (Basel) | Long‑trusted Swiss host with great DE support |
| **Netlify / Cloudflare Pages / Vercel free** | $0 (within limits) | Static + serverless; auto‑rebuild from Git | Multi‑region | Pure static Astro portfolios |

**SSL + domain + CDN basics on these hosts.** Every provider in the table includes Let's Encrypt SSL at no charge. Hostinger Cloud + Hostpoint + Infomaniak include a CDN. Domains: Hostinger bundles one free year on annual plans; Infomaniak invoices domains separately (CHF ~9/yr for `.ch`). For a pure static deploy, Cloudflare's free tier (Pages + DNS + SSL + CDN) is essentially free forever and pairs perfectly with the Astro build.

### 6. Recommended End‑to‑End Workflow

**Day 1 — Scaffold.** Run `npm create astro@latest`. Initialize Git. Create `CLAUDE.md` (60–80 lines: stack, build/dev/lint commands, content‑collection paths, naming conventions, "always run `npm run build` after Markdown changes"). Add `.claude/rules/` with one rule for `.astro` files (TS strict, no inline scripts), one for `src/content/**/*.md` (frontmatter schema), and one for Decap config. Initial commit.

**Day 2 — Content model & CMS.** In Claude Code plan mode (`Shift+Tab` twice), describe the content shape: blog posts, projects/case studies, an about page, a contact page. Let Claude generate `src/content.config.ts` Zod schemas and `public/admin/config.yml` Decap collections. Verify by running `npx decap-server` and `npm run dev`.

**Day 3 — Pages & components.** Use Nano Banana Pro to generate 4–6 hero/case‑study images in 4 K. Drop them into `src/assets/`. Ask Claude Code to wire the layout, navigation, and a Markdown‑rendered blog index. Use a worktree per page if you want parallel iteration.

**Day 4 — Contact form & deploy.** Add a Web3Forms endpoint to `src/pages/contact.astro` — one POST to `https://api.web3forms.com/submit` with your access key, no server code. Run `npm run build` and verify static output in `dist/`. Push to GitHub. Connect to your chosen host (Cloudflare Pages free for a static portfolio; Infomaniak via Git/SSH push to `git_depot/` per Infomaniak FAQ 2463 if you want Swiss residency).

**Day 5 — Polish.** Have Claude run a `/security-review` slash command, and ask it to generate a small accessibility‑audit skill. Add a sitemap (`@astrojs/sitemap`), a `robots.txt`, and configure analytics. Tag `v1.0.0`.

**Ongoing.** New blog post: open Decap at `/admin/`, hit Publish, Decap pushes a Git commit, the host auto‑rebuilds. New design change: `claude --worktree feature/redesign` and iterate.

## Recommendations

1. **Default stack**: Astro 5/6 + Decap CMS + Web3Forms + Cloudflare Pages (free). Switch to Infomaniak Web Hosting (CHF 10.91/mo ex‑VAT) only if Swiss data residency is a hard requirement.
2. **Choose WordPress only if** the site will be edited daily by a non‑technical user who already knows Gutenberg, or you're charging a client a maintenance retainer. Pair with LocalWP / WordPress Studio + Claude Code via the official Feb 12, 2026 WordPress.com guide.
3. **Always commit a CLAUDE.md ≤ 80 lines** organised WHY/WHAT/HOW; overflow goes to `.claude/rules/*.md` with path‑scoped frontmatter. Threshold to refactor: if Claude starts ignoring instructions, your CLAUDE.md is probably > 80 lines.
4. **Adopt the `claude --worktree` pattern from session one** — even on a solo project, parallel "try two variations of the hero section" beats sequential iteration.
5. **Reserve Dynamic Workflows / `/ultracode` for one‑time large operations** (full‑codebase migration, mass refactor). Do not turn it on for daily work — Anthropic itself flags substantially higher token costs.
6. **Use Nano Banana Pro for hero, OG, and case‑study imagery, not for UI design** — the model still produces visibly "AI" layouts. Hand‑build components, then place generated photographs/illustrations into them.
7. **Avoid Netlify Forms in 2026** unless your traffic is provably under the 100‑submission free tier — the shared‑credit billing model that auto‑upgrades and can pause your entire account is real and documented.
8. **Threshold to re‑evaluate**: switch off the static stack to managed WordPress only if you exceed ~50 blog posts/month authored by non‑developers; switch off Cloudflare Pages to a paid host only if you need server‑side endpoints beyond a contact form (auth, real‑time, dynamic API).

## Caveats

- Pricing snapshots are June 2026 list prices; promotional rates renew at materially higher rates (Hostinger Premium $2.99 → $10.99 is documented directly on hostinger.com/pricing and confirmed by Website Builder Expert's 2026 review).
- Anthropic's "Dynamic Workflows" is in research preview as of May 28, 2026 — features, pricing, and the 1,000‑subagent cap may change.
- The Claude Code quota system is a known pain point. The primary source for the cache change is GitHub issue #46829 by Sean Swanson, whose session‑log analysis documents the transition beginning March 6, 2026. The Register's April 13, 2026 piece ("Anthropic: Claude quota drain not caused by cache tweaks") corroborates: *"Anthropic last month reduced the TTL … from one hour to five minutes for many requests."* Anthropic's Jarred Sumner (Bun creator) called the analysis *"good detective work"* while defending the change. Pro‑plan quotas have been reported to drain faster since Feb–Mar 2026 and Anthropic had acknowledged but not fully resolved this at last reporting.
- The "Banana Pro" identification rests on the assumption the user meant Google's Nano Banana Pro; there are SaaS wrappers (`banana-pro.io`, `bananaproai.com`) and an unrelated Hacker News project ("Banana Pro AI") that share the name. If the user meant something else (e.g., a Bootstrap‑style "Banana" theme or a Sketch/Figma plugin), the integration story changes from "asset pipeline" to "design‑token import."
- Several Infomaniak third‑party reviews conflate the Node.js Hosting SKU (~CHF 5.75) with the standard Web Hosting (CHF 10.91 ex‑VAT) — this report uses the figure from Infomaniak's own June‑2026 pricing page.
- The static‑site form choice (Web3Forms vs Formspree vs Formspark vs splitforms) depends on submission volume; for ≤ 250 submissions/month Web3Forms is free and zero‑config, but it has no submission dashboard — Formspree's $15/mo plan is the right step up if you need to search/export old submissions.
- One conflict in sources: Infomaniak's official "prices‑and‑characteristics" comparison table lists shared‑hosting languages as "HTML, CSS, JS, PHP, Python" with Node.js only under Managed Cloud Server, while Infomaniak's own FAQ 2537 and the Node.js Hosting product page describe creating Node.js sites *inside* a shared Web Hosting plan. The FAQ + product page are treated as authoritative here; the comparison table appears stale as of mid‑2026.
- Exact Infomaniak Node.js LTS versions are not published publicly — the version picker exists only inside the Manager. Treat "we support Node LTS" as the verifiable claim and verify the specific version after sign‑up.