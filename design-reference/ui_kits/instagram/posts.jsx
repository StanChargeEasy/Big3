/* Big3 Astrology — Instagram post templates (1080×1080 canvas).
   Faithful recreations of the delivered feed system. Self-contained
   (token-driven) so the kit renders standalone. Shared to window for
   the multi-file Babel setup. Asset base resolves from ui_kits/instagram/. */
const ASSET = '../../assets';
const ICON = (name, props = {}) => <img src={`${ASSET}/icons/glyph-${name}.png`} alt="" {...props} />;

/* 1080×1080 square canvas wrapper */
function Square({ bg = 'var(--b3a-cream)', children, style = {} }) {
  return (
    <div style={{ position: 'relative', width: 1080, height: 1080, background: bg, overflow: 'hidden',
      fontFamily: 'var(--font-body)', color: 'var(--b3a-ink)', ...style }}>
      {children}
    </div>
  );
}

/* thin rule flanked by two glyphs */
function Connector({ color = 'var(--b3a-wine)', size = 30, trinity = false }) {
  const rule = <span style={{ width: 90, height: 2, background: color, opacity: .55 }} />;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center' }}>
      {ICON('moon', { style: { height: size } })}
      {rule}
      {trinity && ICON('libra', { style: { height: size * 1.5 } })}
      {trinity && rule}
      {ICON('sun', { style: { height: size } })}
    </div>
  );
}

/* ---------- 1 · Affirmation (cream minimal) ---------- */
function PostAffirmation() {
  return (
    <Square bg="var(--b3a-cream)">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 60, padding: 120, textAlign: 'center' }}>
        <img src={`${ASSET}/logos/b3a-icon-color.png`} alt="" style={{ width: 150 }} />
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 78, lineHeight: 1.18,
          letterSpacing: '.01em', color: 'var(--b3a-ink)', margin: 0 }}>
          Sometimes<br />later becomes<br /><span style={{ color: 'var(--b3a-wine)' }}>never.</span><br />Do it now.
        </h2>
        <Connector color="var(--b3a-wine)" size={34} />
      </div>
    </Square>
  );
}

/* ---------- 2 · Mantra list (amber full bleed) ---------- */
function PostMantra() {
  const rows = [
    ['Align', 'I am aligned with my soul\u2019s journey'],
    ['Courage', 'I align with courage to face obstacles'],
    ['Intuition', 'My intuition is always leading me to the right place'],
    ['Strength', 'I am strong, I am capable, I am brave'],
    ['Knowledge', 'I am a source of inner knowledge'],
  ];
  return (
    <Square bg="var(--b3a-amber)">
      <div style={{ position: 'absolute', inset: 0, padding: '96px 120px', display: 'flex',
        flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <img src={`${ASSET}/icons/glyph-libra.png`} alt="" style={{ height: 80, filter: 'brightness(0) invert(1)', opacity: .9 }} />
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 40, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'var(--b3a-wine)', marginTop: 18, lineHeight: 1.3 }}>Mantras for<br />Aries Season</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 22, letterSpacing: '.22em', color: 'var(--b3a-cream)',
          textTransform: 'uppercase', marginTop: 10 }}>22 March / 21 April</div>
        <div style={{ marginTop: 54, display: 'flex', flexDirection: 'column', gap: 34, width: '100%' }}>
          {rows.map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 30, letterSpacing: '.2em',
                textTransform: 'uppercase', color: 'var(--b3a-ink)' }}>{k}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 27, color: '#5a4427', marginTop: 8 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 40 }}><Connector color="var(--b3a-wine)" size={26} trinity /></div>
      </div>
    </Square>
  );
}

/* ---------- 3 · Testimonial (nebula + white card) ---------- */
function PostTestimonial() {
  const stars = '\u2605\u2605\u2605\u2605\u2605';
  return (
    <Square bg="radial-gradient(120% 120% at 70% 30%, #6d4a6b 0%, #4a2f4d 45%, #2a1c30 100%)">
      {/* starfield */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage:
        'radial-gradient(1.5px 1.5px at 18% 22%, #fff7, transparent), radial-gradient(1.5px 1.5px at 82% 16%, #fff6, transparent), radial-gradient(2px 2px at 60% 70%, #fff8, transparent), radial-gradient(1px 1px at 30% 80%, #fff6, transparent), radial-gradient(1.5px 1.5px at 90% 60%, #fff5, transparent), radial-gradient(1px 1px at 45% 35%, #fff7, transparent)' }} />
      {/* corner constellation nodes */}
      <svg style={{ position: 'absolute', inset: 0 }} width="1080" height="1080">
        <line x1="760" y1="300" x2="850" y2="250" stroke="#fff" strokeWidth="1.5" opacity=".7" />
        <circle cx="855" cy="247" r="7" fill="none" stroke="#fff" strokeWidth="2" />
        <line x1="320" y1="780" x2="230" y2="830" stroke="#fff" strokeWidth="1.5" opacity=".7" />
        <circle cx="225" cy="833" r="7" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#fff', width: 620, padding: '64px 56px', textAlign: 'center', boxShadow: '0 30px 80px rgba(0,0,0,.4)' }}>
          <img src={`${ASSET}/logos/b3a-full-color-black.png`} alt="" style={{ width: 300, margin: '0 auto' }} />
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 24, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'var(--b3a-coral)', marginTop: 30 }}>Consultation Review</div>
          <div style={{ color: 'var(--b3a-gold)', fontSize: 38, letterSpacing: 8, marginTop: 18 }}>{stars}</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 30, lineHeight: 1.4, letterSpacing: '.04em',
            color: 'var(--b3a-ink)', marginTop: 26, textTransform: 'uppercase', fontWeight: 500 }}>
            Her advises were sooo great! Absolutely the best astrologer in town!</p>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 24, letterSpacing: '.22em',
            color: 'var(--b3a-gold-deep)', marginTop: 30, textTransform: 'uppercase' }}>Kimberly</div>
        </div>
      </div>
    </Square>
  );
}

/* ---------- 4 · Monthly calendar (Welcome October) ---------- */
function PostMonth() {
  const signs = ['libra', 'capricorn', 'mercury', 'aries', 'scorpio', 'leo'];
  const rows = [
    ['6th', 'New moon in Libra'],
    ['12th', 'First quarter moon in Capricorn'],
    ['18th', 'Mercury goes direct'],
    ['20th', 'Full moon in Aries'],
    ['22nd', 'Scorpio season begins'],
    ['28th', 'Last quarter moon in Leo'],
  ];
  const G = (s) => ({ aries: '\u2648', capricorn: '\u2651', mercury: '\u263F', scorpio: '\u264F', leo: '\u264C', libra: '\u264E' }[s]);
  return (
    <Square bg="var(--b3a-cream)" style={{ display: 'flex' }}>
      <div style={{ width: 300, background: 'var(--b3a-sand)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 46, padding: '80px 0' }}>
        <img src={`${ASSET}/logos/b3a-icon-color.png`} alt="" style={{ width: 130 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 34, fontSize: 44, color: 'var(--b3a-wine)' }}>
          {signs.map((s, i) => <span key={i} style={{ fontFamily: '"Segoe UI Symbol","Noto Sans Symbols2",serif' }}>{G(s)}</span>)}
        </div>
      </div>
      <div style={{ flex: 1, padding: '92px 70px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: 70, lineHeight: 1.04,
          textTransform: 'uppercase', color: 'var(--b3a-wine)', margin: 0 }}>Welcome<br />October</h2>
        <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column', gap: 26 }}>
          {rows.map(([d, t]) => (
            <div key={d} style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 38, color: 'var(--b3a-gold)', width: 84, flex: 'none' }}>{d}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 23, letterSpacing: '.08em',
                textTransform: 'uppercase', color: 'var(--b3a-ink)' }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 40, borderTop: '2px solid var(--b3a-line-strong)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 24, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'var(--b3a-ink)' }}>October Mantra</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 22, letterSpacing: '.16em',
            textTransform: 'uppercase', color: 'var(--b3a-coral)', marginTop: 8 }}>I am ready for peace</div>
        </div>
      </div>
    </Square>
  );
}

/* ---------- 5 · Editorial split (daily life) ---------- */
function PostEditorial() {
  return (
    <Square bg="var(--b3a-cream)" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: '0 0 58%', padding: '90px 90px 40px', position: 'relative' }}>
        <Connector color="var(--b3a-wine)" size={26} trinity />
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 76, lineHeight: 1.08,
          color: 'var(--b3a-wine)', margin: '48px 0 0', maxWidth: 720 }}>
          How to best make your bed if you are a virgo.</h2>
        {/* virgo constellation accent */}
        <svg style={{ position: 'absolute', top: 150, right: 70 }} width="240" height="160">
          <polyline points="20,40 70,30 120,60 160,40 200,80 175,120" fill="none" stroke="var(--b3a-gold)" strokeWidth="2" />
          {[[20,40],[70,30],[120,60],[160,40],[200,80],[175,120]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="5" fill="var(--b3a-gold)" />
          ))}
        </svg>
      </div>
      <div style={{ flex: 1, background: 'var(--b3a-wine)', color: 'var(--b3a-cream)', padding: '54px 90px' }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 26, opacity: .85, marginBottom: 18 }}>Being each sign in the daily life…</div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 38, lineHeight: 1.4, margin: 0, maxWidth: 640 }}>
          Use a ruler, count the seconds, have one sheet for every day of the week…</p>
      </div>
    </Square>
  );
}

/* ---------- 6 · Quote box (coral) ---------- */
function PostQuote() {
  const dots = (style) => <div style={{ width: 120, height: 120, backgroundImage: 'radial-gradient(var(--b3a-gold) 3px, transparent 3px)', backgroundSize: '20px 20px', opacity: .7, ...style }} />;
  return (
    <Square bg="var(--b3a-cream)">
      {ICON('moon', { style: { position: 'absolute', top: 250, left: 150, height: 60 } })}
      {ICON('sun', { style: { position: 'absolute', top: 200, right: 170, height: 70 } })}
      {dots({ position: 'absolute', left: 110, top: 470 })}
      {dots({ position: 'absolute', right: 110, top: 470 })}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 660 }}>
          <div style={{ position: 'absolute', inset: '-18px -18px 18px 18px', border: '4px solid var(--b3a-wine)', borderRadius: 28 }} />
          <div style={{ position: 'relative', background: 'var(--b3a-coral)', borderRadius: 28, padding: '70px 64px' }}>
            <span style={{ position: 'absolute', top: -26, left: 40, fontFamily: 'var(--font-serif)', fontSize: 130, color: 'var(--b3a-coral-600)', lineHeight: 1 }}>&ldquo;</span>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 38, lineHeight: 1.35,
              letterSpacing: '.02em', textTransform: 'uppercase', color: '#fff', margin: 0 }}>
              Astrology is science &amp; art at the same time, is geometry, simbology and interpretation.</p>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 26, color: '#fff', marginTop: 22 }}>Alfredo Rajoy</div>
            <span style={{ position: 'absolute', bottom: -70, right: 40, fontFamily: 'var(--font-serif)', fontSize: 130, color: 'var(--b3a-coral-600)', lineHeight: 1 }}>&rdquo;</span>
          </div>
        </div>
      </div>
      {ICON('libra', { style: { position: 'absolute', bottom: 150, left: '50%', transform: 'translateX(-50%)', height: 90 } })}
    </Square>
  );
}

/* ---------- 7 · Dark quote (Draw your limits) ---------- */
function PostDark() {
  return (
    <Square bg="var(--b3a-charcoal)">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 18, textAlign: 'center', color: 'var(--b3a-cream)' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 60 }}>Draw your</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 100, letterSpacing: '.12em', lineHeight: 1 }}>LIMITS</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, margin: '14px 0' }}>
          <span style={{ width: 150, height: 1, background: 'var(--b3a-cream)', opacity: .5 }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 56, color: 'var(--b3a-coral)' }}>&amp;</span>
          <span style={{ width: 150, height: 1, background: 'var(--b3a-cream)', opacity: .5 }} />
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 60 }}>grow with</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 130, letterSpacing: '.08em', lineHeight: 1 }}>GRACE</div>
        <img src={`${ASSET}/logos/b3a-icon-color.png`} alt="" style={{ width: 120, marginTop: 50, filter: 'brightness(0) invert(1)', opacity: .9 }} />
      </div>
    </Square>
  );
}

const POSTS = [
  { id: 'affirmation', label: 'Affirmation', cat: 'Frases', Comp: PostAffirmation },
  { id: 'mantra', label: 'Mantras', cat: 'Rituales', Comp: PostMantra },
  { id: 'testimonial', label: 'Testimonial', cat: 'Testimonios', Comp: PostTestimonial },
  { id: 'month', label: 'Month ahead', cat: 'Eventos', Comp: PostMonth },
  { id: 'editorial', label: 'Daily life', cat: 'Día a día', Comp: PostEditorial },
  { id: 'quote', label: 'Quote', cat: 'Citas', Comp: PostQuote },
  { id: 'dark', label: 'Limits', cat: 'Crecimiento', Comp: PostDark },
];

Object.assign(window, { Square, Connector, PostAffirmation, PostMantra, PostTestimonial, PostMonth, PostEditorial, PostQuote, PostDark, POSTS, ASSET });
