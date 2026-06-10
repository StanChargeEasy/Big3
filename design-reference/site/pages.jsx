/* ============================================================
   Big3 Astrology — Content page views
   About · Full natal reading · 15-min call · Relationship ·
   Journal index · 3 pillar articles.
   Copy is VERBATIM from the EN source set (09_EN v1.0) — not
   rewritten. Decorative brand bands via PageHeader / Band.
   ============================================================ */
const { useEffect: useEffectP } = React;

/* in-prose SPA link */
function A({ onClick, children }) {
  return <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>{children}</a>;
}

/* scroll to top whenever a page mounts */
function useTop() { useEffectP(() => { window.scrollTo(0, 0); }, []); }

/* back-to-home affordance */
function PageBack({ label, onHome }) {
  return (
    <div className="b3-shell">
      <button className="b3-page-back" onClick={onHome}>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        {label}
      </button>
    </div>
  );
}

/* ============================================================ ABOUT */
function AboutPage({ t, go, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      <PageHeader slot="about" zone="left" tone="dark" eyebrow={t.nav.about} title="Gabriela Brecht" />
      <div className="b3-shell">
        <div className="b3-about-grid">
          <div className="b3-about-bio">
            <div className="b3-prose b3-measure">
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--b3a-ink)', lineHeight: 1.45 }}>
                I read charts the way I once read teams — looking for what's really going on underneath, and what wants to happen next.
              </p>
              <p>Before astrology was my work, it was the lens I never put down. I spent years in business and hold two degrees — one in Switzerland, one from Cambridge — but the same question always pulled at me: <em>why do we move the way we move, and what are we each here to grow into?</em></p>
              <p>Today I'm a <strong>psychological astrologer</strong>: I treat your chart as a map of patterns, gifts and growth edges — never a fixed fate. My training is in psychological and archetypal astrology, including the <strong>Debra Silverman</strong> method (USA).</p>
              <p>Born in Caracas, living in Zürich, I work in <strong>English, German and Spanish</strong> — drawn to where astrology meets real life: relationships, decisions, and how people work together.</p>
              <p>If that resonates, your Big 3 is a good first step. When you want the full picture, <A onClick={() => go('reading')}>let's talk</A>.</p>
            </div>
            <p className="b3-disclaimer">Astrology here is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your own free will.</p>
          </div>

          <aside className="b3-about-aside">
            {/* Real portrait of Gabriela (client-supplied, approved for use). */}
            <div className="b3-portrait">
              <img src={`${window.B3A_ASSET}/brand/gabriela-portrait.webp`} alt="Astrologer Gabriela Brecht"
                width="860" height="860" loading="lazy" decoding="async" />
            </div>
            <p className="b3-portrait-cap">Gabriela Brecht, psychological astrologer, Zürich.</p>
          </aside>
        </div>
      </div>
      <PageBack label={t.nav.home} onHome={onHome} />
    </main>
  );
}

/* ============================================================ FULL NATAL READING (CHF 180) */
function ReadingPage({ t, go, onBook, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      {/* slim decorative band — no overlaid title, so the CHF 180 CTA stays high */}
      <Band slot="reading" />
      <div className="b3-shell">
        <div className="b3-offer-intro b3-measure">
          <span className="b3-eyebrow">{t.nav.reading}</span>
          <h1 className="b3-band-title" style={{ color: 'var(--b3a-ink)', marginTop: '10px', maxWidth: '15ch' }}>Your full natal reading <span className="b3-h1-price">— CHF 180</span></h1>
          <p className="b3-offer-lede">The whole picture, read by a human and prepared just for you. Not a generated report — real preparation, a real conversation, and something to take away. This is the reading most people are really looking for.</p>
          {/* primary CTA — kept high, above the fold */}
          <div className="b3-offer-cta">
            <button className="b3-btn b3-btn--primary b3-btn--lg" onClick={onBook}>Book a full reading</button>
          </div>
        </div>

        <div className="b3-included">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(23px,5.4vw,29px)', color: 'var(--b3a-ink)' }}>How it works</h2>
          <OrbitDiagram className="b3-included-orbit" />
          <div className="b3-prose">
            <ul>
              <li><strong>90+ minutes of preparation</strong> before we meet — I study your chart in depth so our time together is about <em>you</em>, not setup.</li>
              <li><strong>A 60-minute live session</strong> on Google Meet to talk it through, ask anything, and connect it to your real life.</li>
              <li><strong>A written summary</strong> afterwards, so the insight stays with you long after the call.</li>
            </ul>
            <p>This is psychological astrology: your strengths, your patterns, your growth edges — and how to actually work with them. You leave understanding yourself a little more clearly than you did before.</p>
          </div>
        </div>

        <div className="b3-inline-cta">
          <div className="txt">
            <h4>Ready when you are</h4>
            <p>Reading for two? Add a <A onClick={() => go('relationship')}>relationship reading (CHF 250 total)</A>.</p>
          </div>
          <button className="b3-btn b3-btn--primary" onClick={onBook}>Book a full reading</button>
        </div>
      </div>
      <PageBack label={t.nav.home} onHome={onHome} />
    </main>
  );
}

/* ============================================================ 15-MIN CALL (CHF 20, secondary) */
/* On-brand celestial illustration: orbit rings + a 15-minute quarter-arc
   accent, a crescent moon & a small sun "meeting". Pure primitives. */
function CallVisual() {
  return (
    <svg className="b3-call-art" viewBox="0 0 260 260" role="img" aria-label="A celestial illustration of a short fifteen-minute window between the moon and sun" fill="none">
      <defs>
        <radialGradient id="b3callbg" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="var(--b3a-blush)" />
          <stop offset="100%" stopColor="var(--b3a-sand)" />
        </radialGradient>
        <mask id="b3crescent">
          <rect x="0" y="0" width="260" height="260" fill="#fff" />
          <circle cx="142" cy="120" r="30" fill="#000" />
        </mask>
      </defs>
      {/* soft backdrop */}
      <circle cx="130" cy="130" r="118" fill="url(#b3callbg)" />
      {/* orbit rings */}
      <circle cx="130" cy="130" r="104" stroke="var(--b3a-wine)" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="130" cy="130" r="78" stroke="var(--b3a-gold-deep)" strokeOpacity="0.30" strokeWidth="1" strokeDasharray="2 6" />
      {/* the 15-minute window: a quarter-arc from 12 → 3 o'clock */}
      <path d="M130 26 A104 104 0 0 1 234 130" stroke="var(--b3a-coral)" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="130" cy="26" r="4" fill="var(--b3a-gold-deep)" />
      <circle cx="234" cy="130" r="5.5" fill="var(--b3a-coral)" />
      {/* crescent moon */}
      <circle cx="130" cy="120" r="34" fill="var(--b3a-wine)" mask="url(#b3crescent)" />
      {/* small sun, upper-right, in dialogue with the moon */}
      <g stroke="var(--b3a-gold-deep)" strokeWidth="2" strokeLinecap="round">
        <line x1="182" y1="84" x2="182" y2="74" />
        <line x1="182" y1="106" x2="182" y2="116" />
        <line x1="171" y1="95" x2="161" y2="95" />
        <line x1="193" y1="95" x2="203" y2="95" />
        <line x1="174" y1="87" x2="167" y2="80" />
        <line x1="190" y1="103" x2="197" y2="110" />
        <line x1="190" y1="87" x2="197" y2="80" />
        <line x1="174" y1="103" x2="167" y2="110" />
      </g>
      <circle cx="182" cy="95" r="9" fill="var(--b3a-gold)" />
      {/* scattered stars */}
      <circle cx="78" cy="86" r="2.2" fill="var(--b3a-gold-deep)" />
      <circle cx="92" cy="184" r="1.8" fill="var(--b3a-wine)" fillOpacity="0.6" />
      <circle cx="186" cy="176" r="2.4" fill="var(--b3a-coral)" fillOpacity="0.75" />
    </svg>
  );
}

function CallPage({ t, go, onBook, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      <div className="b3-shell">
        <div className="b3-call-intro">
          <div className="b3-offer-intro b3-measure" style={{ paddingTop: '34px' }}>
            <span className="b3-eyebrow">{t.nav.intro_call}</span>
            <h1 className="b3-band-title" style={{ color: 'var(--b3a-ink)', marginTop: '10px', maxWidth: '16ch' }}>Not sure yet? Let's meet first <span className="b3-h1-price">— CHF 20</span></h1>
            <p className="b3-offer-lede">If a full reading feels like a big first step, start smaller. In 15 minutes you'll get a real feel for how I work and a mini-reading of something live in your chart right now — so you can decide about a full reading with no guesswork.</p>
          </div>
          <div className="b3-call-aside" aria-hidden="false">
            <CallVisual />
            <span className="b3-call-art-cap">A short 15-minute window</span>
          </div>
        </div>
        <div className="b3-included">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 'clamp(23px,5.4vw,29px)', color: 'var(--b3a-ink)' }}>You get</h2>
          <div className="b3-prose">
            <ul>
              <li>A focused 15-minute video call on Google Meet</li>
              <li>A mini-reading on one thing that matters to you now</li>
              <li>An honest sense of whether a full reading is right for you</li>
            </ul>
            <p><strong>Good to know:</strong> this call is its own thing — the CHF 20 isn't credited toward a full reading. It's simply the easiest way to meet me before you commit. Ready for the full picture instead? <A onClick={() => go('reading')}>Book a full reading (CHF 180)</A>.</p>
          </div>
        </div>
        <div className="b3-offer-cta" style={{ marginTop: '28px' }}>
          <button className="b3-btn b3-btn--ghost b3-btn--lg" onClick={onBook}>Book the 15-minute call</button>
        </div>
      </div>
      <PageBack label={t.nav.home} onHome={onHome} />
    </main>
  );
}

/* ============================================================ RELATIONSHIP READING (CHF 250) */
function RelationshipPage({ t, onBook, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      <div className="b3-shell">
        <div className="b3-offer-intro b3-measure" style={{ paddingTop: '34px' }}>
          <span className="b3-eyebrow">{t.nav.reading}</span>
          <h1 className="b3-band-title" style={{ color: 'var(--b3a-ink)', marginTop: '10px', maxWidth: '17ch' }}>Relationship &amp; couples reading <span className="b3-h1-price">— CHF 250</span></h1>
          <div className="b3-prose b3-measure" style={{ marginTop: '16px' }}>
            <p>Two charts, side by side. We look at how you and another person actually meet — where you flow easily, where you stretch each other, and what each of you needs to feel met and understood.</p>
            <p>It's the full natal reading, extended to two people: the same depth of preparation, a live 60-minute session on Google Meet, and a written summary — with a second chart added for <strong>CHF 70</strong> on top of the standard CHF 180.</p>
            <p>Good for couples, but just as valuable for any pairing that matters: a co-founder, a parent, a close friend.</p>
          </div>
          <div className="b3-offer-cta" style={{ marginTop: '24px' }}>
            <button className="b3-btn b3-btn--primary b3-btn--lg" onClick={onBook}>Book a relationship reading</button>
          </div>
        </div>
      </div>
      <PageBack label={t.nav.home} onHome={onHome} />
    </main>
  );
}

/* ============================================================ JOURNAL INDEX */
const PILLARS = [
  { route: 'free-birth-chart', slot: 'birthchart', kicker: 'Birth chart',
    title: 'Free Birth Chart: Your Big 3, Explained',
    blurb: 'What a birth chart is, why the Big 3 carry most of the signal, and how to get yours free.' },
  { route: 'rising-sign', slot: 'rising', kicker: 'Rising sign',
    title: 'Calculate Your Rising Sign — and What It Means',
    blurb: 'How the world first meets you, why it needs an exact birth time, and how to find yours.' },
  { route: 'moon-sign', slot: 'moon', kicker: 'Moon sign',
    title: 'Calculate Your Moon Sign — and What It Means',
    blurb: 'Your emotional inner world — what it means, and why you usually don\u2019t need a birth time.' },
];

function JournalPage({ t, go, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      <div className="b3-shell">
        <div className="b3-journal-head">
          <span className="b3-eyebrow b3-eyebrow--gold">✶ {t.nav.blog}</span>
          <h1>Guides to your Big 3</h1>
          <p>Answer-first reads on your birth chart, your Rising and your Moon — then calculate yours in seconds.</p>
        </div>
        <div className="b3-journal-grid">
          {PILLARS.map((p) => (
            <button key={p.route} className="b3-jcard" onClick={() => go(p.route)}>
              <Band slot={p.slot} />
              <div className="b3-jcard-body">
                <span className="b3-jcard-kicker">{p.kicker}</span>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <span className="more">Read the guide
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <PageBack label={t.nav.home} onHome={onHome} />
    </main>
  );
}

/* shared FAQ accordion */
function Faq({ items }) {
  return (
    <div className="b3-faq">
      {items.map((it, i) => (
        <details key={i}>
          <summary>{it.q}<span className="icn" aria-hidden="true"></span></summary>
          <div className="ans">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

/* shared inline CTA → full reading */
function PillarCta({ onBook }) {
  return (
    <div className="b3-inline-cta">
      <div className="txt">
        <h4>When you want the real thing</h4>
        <p>Your Big 3 is the start. A full natal reading turns your whole chart into something you can use.</p>
      </div>
      <button className="b3-btn b3-btn--primary" onClick={onBook}>Book a full reading — CHF 180</button>
    </div>
  );
}

const DISCLAIMER = 'Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.';

/* ============================================================ PILLAR 1 — FREE BIRTH CHART */
function FreeBirthChartPage({ t, go, onForm, onBook, onHome }) {
  useTop();
  return (
    <main className="b3-page">
      {/* decision rule: long title + busy illustration → title sits BELOW the
          decorative band (not overlaid) so it stays fully legible */}
      <Band slot="birthchart" />
      <div className="b3-shell">
        <div className="b3-offer-intro b3-measure" style={{ paddingTop: '24px' }}>
          <span className="b3-eyebrow b3-eyebrow--gold">{t.nav.blog}</span>
          <h1 className="b3-band-title" style={{ color: 'var(--b3a-ink)', marginTop: '8px', maxWidth: '18ch' }}>Free Birth Chart: Your Big 3, Explained</h1>
        </div>
        <p className="b3-shortanswer" style={{ marginTop: '18px' }}><span className="lbl">Short answer</span>a birth chart is a map of the sky at the exact moment you were born. The three most important points in it are your <strong>Sun, Moon and Rising sign</strong> — your “Big 3.” You can get all three free here in a few seconds by entering your birth date, time and place. <A onClick={onForm}>Get your Big 3 free.</A></p>
        <div className="b3-prose b3-measure b3-page-intro">
          <p>A full birth chart has dozens of pieces — planets, signs, houses, angles. But you don't need all of it to learn something real about yourself. The Big 3 carry most of the signal, which is why they're the right place to start.</p>

          <h2>What is a birth chart?</h2>
          <p>A birth chart (or natal chart) is a snapshot of where the Sun, Moon and planets were, from your point of view on Earth, at your moment of birth. Because the sky is always moving, your chart is essentially unique — even people born the same day in different places have different Rising signs.</p>
          <p>To calculate it accurately you need three things:</p>
          <ul>
            <li><strong>Date of birth</strong> — sets the Sun and most planet positions.</li>
            <li><strong>Time of birth</strong> — sets your Rising sign and the houses. This is the one people most often miss.</li>
            <li><strong>Place of birth</strong> — sets the chart to your spot on Earth.</li>
          </ul>

          <h2>Your Big 3: the three that matter most</h2>
          <ul>
            <li><strong>Sun — what drives you.</strong> Your core identity and what lights you up. The sign you already know (“I'm a Leo”).</li>
            <li><strong>Moon — what you need to feel safe.</strong> Your inner, emotional world: how you feel, soothe, and recharge.</li>
            <li><strong>Rising (Ascendant) — how the world first meets you.</strong> The impression you make and your instinctive way of approaching life.</li>
          </ul>
          <p>Together they explain why two people of the “same sign” can feel completely different. <A onClick={onForm}>See yours now.</A></p>

          <h2>Do I need my exact birth time?</h2>
          <p>For the Sun and Moon, usually no — your date is enough. For your <strong>Rising sign, yes</strong>: it changes roughly every two hours, so even a rough time helps and an exact one is best. Don't know it? You'll still get your Sun and Moon, and we can help you track the time down for a full reading.</p>

          <h2>What a free chart can and can't tell you</h2>
          <p>A free Big-3 is a genuine, accurate starting point — but it's a summary, not the whole story. It won't show how your placements interact, where your strengths and friction really sit, or what to do with any of it. That's the job of a full reading: a real astrologer taking your whole chart and turning it into something useful. <A onClick={() => go('reading')}>Learn about a full natal reading.</A></p>
        </div>

        <PillarCta onBook={onBook} />

        <div className="b3-prose b3-measure">
          <h2>Frequently asked questions</h2>
        </div>
        <Faq items={[
          { q: 'Is the birth chart really free?', a: 'Yes — your Big 3 (Sun, Moon and Rising) and a short synthesis are free, with no sign-up.' },
          { q: 'Is this accurate?', a: 'Yes. We calculate real planetary positions for your date, time and place — the same astronomy professional astrologers use.' },
          { q: "What if I don't know my birth time?", a: "You'll get your Sun and Moon. Your Rising needs an exact time — we can help you find it." },
          { q: "What's the difference between this and a reading?", a: 'The free chart is a summary you read yourself. A reading is a live conversation with an astrologer who interprets your whole chart for your actual life.' },
        ]} />
        <p className="b3-disclaimer">{DISCLAIMER}</p>
      </div>
      <PageBack label={t.nav.blog} onHome={() => go('journal')} />
    </main>
  );
}

/* ============================================================ PILLAR 2 — RISING SIGN */
function RisingPage({ t, go, onForm, onBook }) {
  useTop();
  return (
    <main className="b3-page">
      <PageHeader slot="rising" zone="left" tone="dark" eyebrow={t.nav.blog} title="Calculate Your Rising Sign — and What It Means" />
      <div className="b3-shell">
        <p className="b3-shortanswer"><span className="lbl">Short answer</span>your Rising sign (or Ascendant) is the zodiac sign that was coming up over the horizon at the exact minute you were born. To calculate it you need your birth date, <strong>exact time</strong>, and place. Enter them here and get it free in seconds. <A onClick={onForm}>Calculate your Rising sign.</A></p>
        <div className="b3-prose b3-measure b3-page-intro">
          <h2>What is a Rising sign?</h2>
          <p>While your Sun sign is about who you are at your core, your <strong>Rising sign is about how you come across</strong> — your instinctive style, your first impression, the “front door” people walk through to reach you. It also sets the structure of your whole chart (the houses), which is why astrologers care about it so much.</p>

          <h2>Why you need your exact birth time</h2>
          <p>The Ascendant moves fast — through all twelve signs in 24 hours, so roughly <strong>one new sign every two hours</strong>. That's why your date alone can't give it to you, and why a birth time that's off by even an hour can land you on the wrong sign. With an exact time, your Rising is accurate; with only an approximate time, treat the result as a strong guess.</p>
          <h3>How to find your birth time</h3>
          <ul>
            <li>Check your <strong>birth certificate</strong> — in many countries the time is recorded.</li>
            <li>Ask a <strong>parent or close family member</strong>.</li>
            <li>Request your <strong>birth record</strong> from the hospital or civil registry where you were born.</li>
          </ul>

          <h2>What your Rising sign means</h2>
          <p>Your Rising colours everything from your body language to how you handle new situations. A quick sketch by element:</p>
          <ul>
            <li><strong>Fire Rising (Aries, Leo, Sagittarius):</strong> you come across as direct, warm, energetic.</li>
            <li><strong>Earth Rising (Taurus, Virgo, Capricorn):</strong> you come across as grounded, capable, composed.</li>
            <li><strong>Air Rising (Gemini, Libra, Aquarius):</strong> you come across as sociable, curious, easy to talk to.</li>
            <li><strong>Water Rising (Cancer, Scorpio, Pisces):</strong> you come across as sensitive, magnetic, a little harder to read.</li>
          </ul>
          <p>Your free result gives you a fuller, personal description of your specific Rising sign. <A onClick={onForm}>See yours now.</A></p>

          <h2>Rising, Sun and Moon — the full picture</h2>
          <p>Your Rising is one third of your Big 3. Paired with your <strong>Sun</strong> (what drives you) and <strong>Moon</strong> (what you need), it explains the gap between how people first read you and who you actually are underneath. A full reading connects all three — and the rest of your chart — into something you can use. <A onClick={() => go('reading')}>Learn about a full natal reading.</A></p>
        </div>

        <PillarCta onBook={onBook} />

        <div className="b3-prose b3-measure"><h2>Frequently asked questions</h2></div>
        <Faq items={[
          { q: 'Can I find my Rising sign without a birth time?', a: "Not reliably. The Ascendant changes about every two hours, so an exact time is needed. Without it, we'll show your Sun and Moon instead." },
          { q: 'Is Rising sign the same as Ascendant?', a: 'Yes — “Rising sign” and “Ascendant” are two names for the same thing.' },
          { q: 'Why is my Rising sign different from my Sun sign?', a: "They measure different things: your Sun is your core self; your Rising is your outward style and the moment-by-moment setup of your chart. Most people's differ." },
        ]} />
        <p className="b3-disclaimer">{DISCLAIMER}</p>
      </div>
      <PageBack label={t.nav.blog} onHome={() => go('journal')} />
    </main>
  );
}

/* ============================================================ PILLAR 3 — MOON SIGN */
function MoonPage({ t, go, onForm, onBook }) {
  useTop();
  return (
    <main className="b3-page">
      <PageHeader slot="moon" zone="left" tone="light" eyebrow={t.nav.blog} title="Calculate Your Moon Sign — and What It Means" />
      <div className="b3-shell">
        <p className="b3-shortanswer"><span className="lbl">Short answer</span>your Moon sign is the zodiac sign the Moon was in when you were born. It represents your emotional inner world — what you feel and what you need to feel safe. Enter your birth date and place to get it free in seconds. <A onClick={onForm}>Calculate your Moon sign.</A></p>
        <div className="b3-prose b3-measure b3-page-intro">
          <h2>What is a Moon sign?</h2>
          <p>If your Sun sign is who you are in the daylight, your <strong>Moon sign is who you are in private</strong> — your feelings, your instincts, what soothes you and what you need from the people closest to you. It's often the placement people recognise themselves in most once they read it.</p>

          <h2>Do I need my exact birth time?</h2>
          <p>Usually not. The Moon moves through a sign in about <strong>two to two-and-a-half days</strong>, so your birth date is normally enough to place it. The exception: if you were born on a day the Moon changed signs, the time matters — when that's the case, we'll let you know. (Your <strong>Rising</strong> sign is the one that always needs an exact time.)</p>

          <h2>What your Moon sign means</h2>
          <p>Your Moon describes your emotional style — how you process feelings, comfort yourself, and bond with others. A quick sketch by element:</p>
          <ul>
            <li><strong>Fire Moon (Aries, Leo, Sagittarius):</strong> feelings are fast, warm, expressive.</li>
            <li><strong>Earth Moon (Taurus, Virgo, Capricorn):</strong> feelings are steady, practical, grounded.</li>
            <li><strong>Air Moon (Gemini, Libra, Aquarius):</strong> feelings are processed by thinking and talking.</li>
            <li><strong>Water Moon (Cancer, Scorpio, Pisces):</strong> feelings run deep, intuitive, and strong.</li>
          </ul>
          <p>Your free result gives you a personal description of your specific Moon sign — including its strengths and its growth edge. <A onClick={onForm}>See yours now.</A></p>

          <h2>Why your Moon sign can surprise you</h2>
          <p>Many people relate to their Moon sign more than their Sun. That's because your Sun sign is often the self you show, while your Moon is the self you actually feel — and the two aren't always the same. Seeing them side by side is where it gets interesting.</p>

          <h2>Moon, Sun and Rising — the full picture</h2>
          <p>Your Moon is one third of your Big 3, alongside your <strong>Sun</strong> (what drives you) and <strong>Rising</strong> (how the world meets you). A full reading takes all three — and the rest of your chart — and turns it into practical insight about your relationships, your patterns, and what you need to thrive. <A onClick={() => go('reading')}>Learn about a full natal reading.</A></p>
        </div>

        <PillarCta onBook={onBook} />

        <div className="b3-prose b3-measure"><h2>Frequently asked questions</h2></div>
        <Faq items={[
          { q: 'Can I find my Moon sign without a birth time?', a: 'Usually yes — the date is normally enough. Only if you were born on a day the Moon changed signs does the time matter.' },
          { q: 'Why does my Moon sign feel more “me” than my Sun sign?', a: 'Because your Moon is your private, emotional self, while your Sun is often the self you present. Many people identify with it strongly.' },
          { q: "What's the difference between a Moon sign and a Sun sign?", a: 'Your Sun is your core identity and drive; your Moon is your emotional needs and instincts. You have both, and they work together.' },
        ]} />
        <p className="b3-disclaimer">{DISCLAIMER}</p>
      </div>
      <PageBack label={t.nav.blog} onHome={() => go('journal')} />
    </main>
  );
}

Object.assign(window, {
  AboutPage, ReadingPage, CallPage, RelationshipPage, JournalPage,
  FreeBirthChartPage, RisingPage, MoonPage,
});
