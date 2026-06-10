/* ============================================================
   Big3 Astrology — App (hero + form, sections, Big-3 result)
   ============================================================ */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;
const ASSETP = window.B3A_ASSET;

const COUNTRIES = [
  'Switzerland', 'Germany', 'Austria', 'Spain', 'France', 'Italy',
  'United Kingdom', 'United States', 'Venezuela', 'Mexico', 'Argentina', 'Other',
];
const SAMPLE_CITIES = ['Zürich, Switzerland', 'Basel, Switzerland', 'Genève, Switzerland', 'Berlin, Germany', 'Wien, Austria', 'Madrid, Spain', 'Barcelona, Spain', 'Caracas, Venezuela'];

/* small inline glyph for hero eyebrow */
function Dot({ c }) { return <span style={{ width: 5, height: 5, borderRadius: '50%', background: c, display: 'inline-block' }} />; }

/* ---------- BRAND HERO MEDIA (animation / still / none) ---------- */
function HeroMedia({ media, layout }) {
  const vidRef = useRefA(null);
  const [playing, setPlaying] = useStateA(false);
  const [baseLoaded, setBaseLoaded] = useStateA(false);

  useEffectA(() => {
    if (media !== 'animation') return;
    // respect reduced-motion: keep the still poster, never autoplay
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const v = vidRef.current;
    if (!v) return;
    const onTime = () => { if (v.currentTime > 0.05) setPlaying(true); };
    v.addEventListener('timeupdate', onTime);
    // defer the video fetch until AFTER first paint / LCP so it never blocks it
    let done = false;
    const start = () => { if (done) return; done = true; v.preload = 'auto'; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    const idle = window.requestIdleCallback ? window.requestIdleCallback(start, { timeout: 1800 }) : setTimeout(start, 1200);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      if (window.cancelIdleCallback && window.requestIdleCallback) window.cancelIdleCallback(idle); else clearTimeout(idle);
    };
  }, [media]);

  if (media === 'none') return null;
  const cls = `b3-hero-media b3-hero-media--${layout}`;
  const poster = `${ASSETP}/brand/bg-hero-poster.jpg`;

  return (
    <div className={cls} aria-hidden="true">
      {/* JPEG base — fades in over the container wash (LCP-safe, never black) */}
      <img className={`b3-hero-media-base${baseLoaded ? ' loaded' : ''}`} src={poster} alt=""
        width="960" height="540" loading="eager" decoding="async"
        onLoad={() => setBaseLoaded(true)}
        ref={(el) => { if (el && el.complete) setBaseLoaded(true); }} />
      {media === 'animation' && (
        <video
          ref={vidRef}
          className={`b3-hero-media-vid${playing ? ' playing' : ''}`}
          poster={poster}
          width="960" height="540"
          muted loop playsInline preload="none"
        >
          <source src={`${ASSETP}/brand/big3-bg-animation.mp4`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

/* ---------- BIG-3 FORM (shared: inline + modal) ---------- */
function Big3Form({ t, onReveal, idns = '' }) {
  const [date, setDate] = useStateA('');
  const [time, setTime] = useStateA('');
  const [place, setPlace] = useStateA('');
  const [country, setCountry] = useStateA('');
  const [err, setErr] = useStateA({});
  const dateRef = useRefA(null);
  const placeRef = useRefA(null);

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!date) next.date = true;
    if (!place.trim()) next.place = true;
    setErr(next);
    if (next.date) { dateRef.current && dateRef.current.focus(); return; }
    if (next.place) { placeRef.current && placeRef.current.focus(); return; }
    onReveal({ hasTime: !!time });
  };

  const errStyle = { borderColor: 'var(--b3a-coral-600)', boxShadow: '0 0 0 3px rgba(232,95,97,0.16)' };

  return (
    <form className="b3-form" onSubmit={submit} noValidate>
      <div className="b3-row">
        <div className="b3-field">
          <label className="b3-label" htmlFor={`bd${idns}`}>{t.form.date_label}</label>
          <input ref={dateRef} id={`bd${idns}`} type="date" className="b3-input"
            value={date} onChange={(e) => setDate(e.target.value)}
            style={err.date ? errStyle : null} />
        </div>
        <div className="b3-field">
          <label className="b3-label" htmlFor={`bt${idns}`}>{t.form.time_label} <span className="opt">· {t.form.time_optional}</span></label>
          <input id={`bt${idns}`} type="time" className="b3-input" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
      </div>
      <div className="b3-field">
        <span className="b3-help">{t.form.time_helper}</span>
      </div>

      <div className="b3-field">
        <label className="b3-label" htmlFor={`bp${idns}`}>{t.form.place_label}</label>
        <input ref={placeRef} id={`bp${idns}`} type="text" className="b3-input" list={`cities${idns}`}
          placeholder={t.form.place_placeholder}
          value={place} onChange={(e) => setPlace(e.target.value)}
          style={err.place ? errStyle : null} />
        <datalist id={`cities${idns}`}>{SAMPLE_CITIES.map((c) => <option key={c} value={c} />)}</datalist>
        <span className="b3-help">{t.form.place_helper}</span>
      </div>

      <div className="b3-field">
        <label className="b3-label" htmlFor={`bc${idns}`}>{t.form.country_label}</label>
        <select id={`bc${idns}`} className="b3-select" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="" disabled>—</option>
          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {!time && (
        <div className="b3-note">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3"/><path d="M8 4.4v4.2M8 11.2h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          <span>{t.form.no_time_note}</span>
        </div>
      )}

      <div className="b3-submit-wrap">
        <button type="submit" className="b3-btn b3-btn--primary b3-btn--block">{t.form.submit}</button>
      </div>
    </form>
  );
}

/* form card wrapper (inline) */
function FormCard({ t, onReveal }) {
  return (
    <div className="b3-form-card">
      <div className="b3-form-head">
        <img className="b3-form-star" src={`${ASSETP}/icons/glyph-sun.png`} alt="" aria-hidden="true" />
        <span className="b3-form-title">{t.form.heading}</span>
      </div>
      <Big3Form t={t} onReveal={onReveal} />
    </div>
  );
}

/* CTA that opens the form modal (button mode) */
function FormCta({ t, onOpen }) {
  return (
    <div className="b3-form-cta">
      <button className="b3-btn b3-btn--primary b3-btn--block b3-btn--lg" onClick={onOpen}>
        <img className="b3-cta-star" src={`${ASSETP}/icons/glyph-sun.png`} alt="" aria-hidden="true" />
        {t.hero.cta}
      </button>
      <p className="b3-form-cta-sub">{t.hero.cta_sub}</p>
    </div>
  );
}

/* modal/bottom-sheet holding the form */
function FormModal({ t, open, onClose, onReveal }) {
  useEffectA(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className={`b3-modal${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="b3-modal-scrim" onClick={onClose}></div>
      <div className="b3-modal-card" role="dialog" aria-modal="true" aria-label={t.form.heading}>
        <div className="b3-modal-head">
          <div className="b3-form-head" style={{ marginBottom: 0 }}>
            <img className="b3-form-star" src={`${ASSETP}/icons/glyph-sun.png`} alt="" aria-hidden="true" />
            <span className="b3-form-title">{t.form.heading}</span>
          </div>
          <button className="b3-modal-close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
        {open && <Big3Form t={t} onReveal={onReveal} idns="-m" />}
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero({ t, onReveal, media, layout, formMode, introMode, onOpenModal, showcase }) {
  const [expanded, setExpanded] = useStateA(false);
  const show = showcase && media !== 'none' && layout !== 'bg';
  const heroCls = `b3-hero b3-hero--${layout} b3-hero--media-${media === 'none' ? 'off' : 'on'} b3-hero--form-${formMode}${show ? ' b3-hero--showcase' : ''}`;

  const copyTop = (
    <div className="b3-hero-copy b3-hero-copy--top">
      <span className="b3-eyebrow">
        <Dot c="var(--b3a-coral)" /> <Dot c="var(--b3a-wine)" /> <Dot c="var(--b3a-gold)" />
        <span style={{ marginLeft: 4 }}>{t.hero.eyebrow}</span>
      </span>
      <h1 className="b3-h1">
        {t.hero.headline_a} <em>{t.hero.headline_em}</em>
      </h1>
    </div>
  );

  return (
    <section className={heroCls}>
      {layout === 'bg' && media !== 'none' && <HeroMedia media={media} layout="bg" />}
      <div className="b3-shell b3-hero-grid">
        {show ? (
          <div className="b3-hero-media-slot b3-hero-stage">
            <HeroMedia media={media} layout={layout} />
            <div className="b3-hero-stage-copy">{copyTop}</div>
          </div>
        ) : (
          <React.Fragment>
            {copyTop}
            {layout !== 'bg' && media !== 'none' && (
              <div className="b3-hero-media-slot">
                <HeroMedia media={media} layout={layout} />
              </div>
            )}
          </React.Fragment>
        )}

        <div className="b3-hero-copy b3-hero-copy--bot">
          {introMode === 'full' && (
            <p className="b3-lede" dangerouslySetInnerHTML={{ __html: t.hero.intro }} />
          )}
          {introMode === 'short' && (
            <p className="b3-lede" dangerouslySetInnerHTML={{ __html: t.hero.intro_short }} />
          )}
          {introMode === 'expand' && (
            <React.Fragment>
              <p className="b3-lede" dangerouslySetInnerHTML={{ __html: t.hero.intro_lead }} />
              <div className={`b3-more${expanded ? ' open' : ''}`}>
                <p className="b3-lede b3-lede--more" dangerouslySetInnerHTML={{ __html: t.hero.intro_more }} />
              </div>
              <button className="b3-more-toggle" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
                {expanded ? t.hero.less : t.hero.more}
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </React.Fragment>
          )}

          {formMode === 'button' && (
            <React.Fragment>
              <FormCta t={t} onOpen={onOpenModal} />
              <p className="b3-hero-note">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M11.5 9.6A4.2 4.2 0 1 1 6.4 4.5a3.3 3.3 0 0 0 5.1 5.1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                <span>{t.hero.note}</span>
              </p>
            </React.Fragment>
          )}

          {formMode === 'inline' && (
            <div className="b3-hero-formslot">
              <FormCard t={t} onReveal={onReveal} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
const WHY_GLYPHS = [
  { src: 'icons/glyph-sun.png', variant: 'sun' },
  { src: 'icons/glyph-moon.png', variant: 'moon' },
  { src: 'icons/glyph-libra.png', variant: 'rising' },
];
function Why({ t }) {
  return (
    <section className="b3-section b3-wash">
      <div className="b3-shell">
        <div className="b3-section-head">
          <ConstellationDivider variant="trinity" className="b3-section-cdiv" />
          <h2>{t.why.heading}</h2>
        </div>
        <div className="b3-why-grid">
          {t.why.items.map((it, i) => {
            const g = WHY_GLYPHS[i] || WHY_GLYPHS[0];
            return (
              <div className={`b3-why-item b3-why-item--${g.variant}`} key={i}>
                <div className="b3-why-medallion">
                  <span className="b3-why-orbit" aria-hidden="true"></span>
                  <Luminary body={g.variant} size={40} />
                </div>
                <div className="b3-why-body">
                  <h3>{it.t}</h3>
                  <p>{it.b}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- TALK TO A HUMAN ---------- */
function Talk({ t, onBook, onCall }) {
  return (
    <section className="b3-talk">
      <div className="b3-shell b3-talk-inner">
        <span className="b3-eyebrow">{t.talk.eyebrow}</span>
        <h2>{t.talk.heading}</h2>
        <p dangerouslySetInnerHTML={{ __html: t.talk.body }} />
        <div className="b3-cta-stack">
          <button className="b3-btn b3-btn--primary" onClick={onBook}>{t.talk.cta_primary}</button>
          <button className="b3-link-cta" onClick={onCall}>
            {t.talk.cta_secondary}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIAL ---------- */
function Testimonial({ t, compact, rotate }) {
  const list = (rotate && Array.isArray(t.testimonials) && t.testimonials.length > 1) ? t.testimonials : [t.testimonial];
  const [i, setI] = useStateA(0);
  const [show, setShow] = useStateA(true);
  const go = (n) => {
    setShow(false);
    setTimeout(() => { setI(((n % list.length) + list.length) % list.length); setShow(true); }, 300);
  };
  useEffectA(() => {
    if (list.length < 2) return;
    const id = setInterval(() => { setShow(false); setTimeout(() => { setI((n) => (n + 1) % list.length); setShow(true); }, 300); }, 6000);
    return () => clearInterval(id);
  }, [list.length]);
  const tm = list[Math.min(i, list.length - 1)];
  const fade = { opacity: show ? 1 : 0, transform: show ? 'none' : 'translateY(6px)', transition: 'opacity 0.34s var(--ease-out), transform 0.34s var(--ease-out)' };
  return (
    <section className={`b3-tmt b3-wash${compact ? ' b3-tmt--compact' : ''}${list.length > 1 ? ' b3-tmt--rotating' : ''}`}>
      <div className="b3-shell">
        {t.reviews && (
          <div className="b3-tmt-head">
            <span className="b3-eyebrow">{t.reviews.eyebrow}</span>
            <h2>{t.reviews.heading}</h2>
          </div>
        )}
        <div className="b3-tmt-card">
          <span className="b3-tmt-quotemark" aria-hidden="true">“</span>
          <Stars />
          <p className="b3-tmt-quote" style={fade}>“{tm.quote}”</p>
          <div className="b3-tmt-by" style={fade}>{tm.name} · {tm.city}</div>
          {list.length > 1 && (
            <div className="b3-tmt-dots" role="tablist" aria-label="Testimonials">
              {list.map((_, n) => (
                <button key={n} className={`b3-tmt-dot${n === i ? ' on' : ''}`} role="tab" aria-selected={n === i}
                  aria-label={`Testimonial ${n + 1}`} onClick={() => go(n)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESULT ---------- */
const UNI = { leo: '♌', cancer: '♋', libra: '♎' };

function ResultCard({ variant, glyph, eyebrow, sign, uni, sub, text }) {
  return (
    <article className={`b3-card b3-card--${variant}`}>
      <div className="b3-card-top">
        <span className="b3-card-glyph"><Luminary body={variant} size={36} /></span>
        <div className="b3-card-heads">
          <span className="b3-card-eyebrow">{eyebrow}</span>
          <span className="b3-card-sign">{sign}</span>
        </div>
      </div>
      <div className="b3-card-sub">{sub}</div>
      <p>{text}</p>
    </article>
  );
}

function Result({ t, hasTime, onBack, onBook, onCall, resultCta }) {
  const r = t.result;
  const a = t.archetype;
  const synth = hasTime ? t.synthesis : t.synthesisNoTime;
  const signsLine = hasTime
    ? `${t.signs.leo} · ${t.signs.cancer} · ${t.signs.libra}`
    : `${t.signs.leo} · ${t.signs.cancer}`;

  return (
    <main className="b3-result">
      <div className="b3-shell">
        <div className="b3-result-head">
          <button className="b3-back" onClick={onBack}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {r.back}
          </button>
          <div className="b3-result-kicker">{r.kicker}</div>
          <img className="b3-result-tri" src={`${ASSETP}/logos/b3a-icon-color.png`} alt="" aria-hidden="true" />
          <div className="b3-result-signs">
            {hasTime ? (
              <span>{t.signs.leo}<span className="sep">◆</span>{t.signs.cancer}<span className="sep">◆</span>{t.signs.libra}</span>
            ) : (
              <span>{t.signs.leo}<span className="sep">◆</span>{t.signs.cancer}</span>
            )}
          </div>
          {r.sample_note ? <p className="b3-sample">{r.sample_note}</p> : null}
        </div>

        <div className="b3-big3">
          <ResultCard variant="sun" glyph={`${ASSETP}/icons/glyph-sun.png`}
            eyebrow={r.sun_heading} sign={t.signs.leo} uni={UNI.leo} sub={r.sun_sub} text={a.sun_leo} />
          <ResultCard variant="moon" glyph={`${ASSETP}/icons/glyph-moon.png`}
            eyebrow={r.moon_heading} sign={t.signs.cancer} uni={UNI.cancer} sub={r.moon_sub} text={a.moon_cancer} />

          {hasTime ? (
            <ResultCard variant="rising" glyph={`${ASSETP}/icons/glyph-libra.png`}
              eyebrow={r.rising_heading} sign={t.signs.libra} uni={UNI.libra} sub={r.rising_sub} text={a.rising_libra} />
          ) : (
            <article className="b3-card b3-card--rising b3-card--locked">
              <div className="b3-card-top">
                <span className="b3-lock-badge">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="6" width="9" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.3"/><path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.3"/></svg>
                  {r.rising_heading}
                </span>
              </div>
              <h4>{r.locked_title}</h4>
              <p>{r.locked_body}</p>
              <button className="b3-btn b3-btn--ghost b3-btn--sm" onClick={onCall}>{t.nav.intro_call} · CHF 20</button>
            </article>
          )}
        </div>

        <div className="b3-synth">
          <h3>{r.synthesis_heading}</h3>
          {synth.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="b3-cta-block">
          <span className="b3-eyebrow b3-eyebrow--cream">✶</span>
          <h3>{r.cta_heading}</h3>
          <p>{r.cta_body}</p>
          <div className="b3-cta-stack">
            <button className={`b3-btn b3-btn--${resultCta || 'gold'}`} onClick={onBook}>{r.cta_primary}</button>
            <button className="b3-link-cta on-color" onClick={onCall}>
              {r.cta_secondary}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ---------- TWEAKS ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryCta": "#A4426C",
  "heroMedia": "animation",
  "heroLayout": "side",
  "formMode": "button",
  "introMode": "short",
  "socialProof": "low",
  "showSampleNote": true,
  "bandIntensity": "medium",
  "bandHeight": "standard",
  "pageWarmth": "#FEF9F5",
  "headingFont": "serif",
  "testimonials": "rotating",
  "cornerRadius": "soft",
  "resultCta": "gold",
  "vxHero": true,
  "vxDark": true,
  "vxTriad": true,
  "vxJournal": true,
  "vxType": true,
  "vxFooter": true
}/*EDITMODE-END*/;

const VEIL = { soft: 0.34, medium: 0.20, bold: 0.08 };
const BAND = { compact: [240, 300], standard: [280, 380], tall: [340, 520] };
const RADII_SHARP = { '--radius-sm': '3px', '--radius-md': '4px', '--radius-lg': '6px', '--radius-xl': '8px', '--radius-pill': '7px' };

const CTA_FG = { '#A4426C': 'var(--b3a-cream)', '#F27678': '#ffffff', '#1B1B1B': 'var(--b3a-cream)' };

const ROUTES = ['home', 'about', 'reading', 'call', 'relationship', 'journal', 'free-birth-chart', 'rising-sign', 'moon-sign', 'legal-notice', 'terms', 'cancellations-refunds', 'privacy', 'result'];
const readHashView = () => {
  const h = (window.location.hash || '').replace(/^#\/?/, '');
  return ROUTES.indexOf(h) > 0 ? h : 'home';
};

/* ---------- APP ROOT ---------- */
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useStateA(() => {
    try { return localStorage.getItem('b3a-lang') || 'en'; } catch (e) { return 'en'; }
  });
  const [view, setView] = useStateA(readHashView);      // 'home' | 'result' | page routes
  const [hasTime, setHasTime] = useStateA(true);
  const [consent, setConsent] = useStateA('hidden'); // hidden | shown | done
  const [modalOpen, setModalOpen] = useStateA(false);

  const t = window.B3A_I18N[lang];

  useEffectA(() => { document.documentElement.lang = t.htmlLang; }, [lang]);

  // keep the URL hash in sync with the view (shareable, refresh-safe)
  useEffectA(() => {
    const target = view === 'home' ? '' : `#${view}`;
    if ((window.location.hash || '') !== target) {
      window.history.replaceState(null, '', target || window.location.pathname + window.location.search);
    }
  }, [view]);
  useEffectA(() => {
    const onHash = () => setView(readHashView());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const setLang = (code) => {
    setLangState(code);
    try { localStorage.setItem('b3a-lang', code); } catch (e) {}
  };

  // consent banner: show once shortly after load unless already answered
  useEffectA(() => {
    let answered = false;
    try { answered = !!localStorage.getItem('b3a-consent'); } catch (e) {}
    if (answered) return;
    const id = setTimeout(() => setConsent('shown'), 1100);
    return () => clearTimeout(id);
  }, []);

  const closeConsent = (choice) => {
    setConsent('done');
    try { localStorage.setItem('b3a-consent', choice); } catch (e) {}
  };

  const reveal = ({ hasTime }) => { setHasTime(hasTime); setModalOpen(false); setView('result'); window.scrollTo(0, 0); };
  const goHome = () => { setView('home'); window.scrollTo(0, 0); };
  const goBook = () => { setView('result'); setHasTime(true); window.scrollTo(0, 0); };
  const go = (route) => { setModalOpen(false); setView(route); window.scrollTo(0, 0); };
  const toForm = () => {
    setView('home');
    setTimeout(() => {
      if (tw.formMode === 'button') { setModalOpen(true); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      const el = document.querySelector('.b3-form-card');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }, 30);
  };

  const band = BAND[tw.bandHeight] || BAND.standard;
  const rootStyle = {
    '--cta-bg': tw.primaryCta, '--cta-fg': CTA_FG[tw.primaryCta] || 'var(--b3a-cream)',
    '--hero-veil': VEIL[tw.bandIntensity] != null ? VEIL[tw.bandIntensity] : 0.20,
    '--hero-band-m': band[0] + 'px', '--hero-band-d': band[1] + 'px',
    '--b3a-cream': tw.pageWarmth, '--surface-page': tw.pageWarmth, background: tw.pageWarmth,
    ...(tw.cornerRadius === 'sharp' ? RADII_SHARP : {}),
  };

  const renderView = () => {
    switch (view) {
      case 'about': return <AboutPage t={t} go={go} onHome={goHome} />;
      case 'reading': return <ReadingPage t={t} go={go} onBook={goBook} onHome={goHome} />;
      case 'call': return <CallPage t={t} go={go} onBook={goBook} onHome={goHome} />;
      case 'relationship': return <RelationshipPage t={t} onBook={goBook} onHome={goHome} />;
      case 'journal': return <JournalPage t={t} go={go} onHome={goHome} />;
      case 'free-birth-chart': return <FreeBirthChartPage t={t} go={go} onForm={toForm} onBook={goBook} onHome={goHome} />;
      case 'rising-sign': return <RisingPage t={t} go={go} onForm={toForm} onBook={goBook} />;
      case 'moon-sign': return <MoonPage t={t} go={go} onForm={toForm} onBook={goBook} />;
      case 'legal-notice': return <LegalNoticePage t={t} onHome={goHome} />;
      case 'terms': return <TermsPage t={t} go={go} onHome={goHome} />;
      case 'cancellations-refunds': return <RefundsPage t={t} onHome={goHome} />;
      case 'privacy': return <PrivacyPage t={t} onHome={goHome} />;
      case 'result': return <ResultView t={t} hasTime={hasTime} showNote={tw.showSampleNote} resultCta={tw.resultCta} onBack={toForm} onBook={goBook} onCall={goBook} />;
      default: return (
        <React.Fragment>
          <Hero t={t} onReveal={reveal} media={tw.heroMedia} layout={tw.heroLayout}
            formMode={tw.formMode} introMode={tw.introMode} onOpenModal={() => setModalOpen(true)} showcase={tw.vxHero} />
          {tw.socialProof === 'high' && <Testimonial t={t} compact rotate={tw.testimonials === 'rotating'} />}
          <Why t={t} />
          <Talk t={t} onBook={goBook} onCall={goBook} />
          {tw.socialProof === 'low' && <Testimonial t={t} rotate={tw.testimonials === 'rotating'} />}
        </React.Fragment>
      );
    }
  };

  return (
    <div className={`b3-app${tw.vxDark ? ' vx-dark' : ''}${tw.vxTriad ? ' vx-triad' : ''}${tw.vxJournal ? ' vx-journal' : ''}${tw.vxType ? ' vx-type' : ''}`} data-head={tw.headingFont} style={rootStyle}>
      <Header t={t} lang={lang} setLang={setLang} onBook={goBook} onHome={goHome} onNav={go} />

      {renderView()}

      <Footer t={t} lang={lang} setLang={setLang} onNav={go} divider={tw.vxFooter} />
      <ConsentBanner t={t} show={consent === 'shown'} onClose={closeConsent} />
      <FormModal t={t} open={modalOpen} onClose={() => setModalOpen(false)} onReveal={reveal} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Brand media" value={tw.heroMedia}
          options={['animation', 'still', 'none']}
          onChange={(v) => setTweak('heroMedia', v)} />
        <TweakRadio label="Hero layout" value={tw.heroLayout}
          options={['side', 'banner', 'bg']}
          onChange={(v) => setTweak('heroLayout', v)} />
        <TweakRadio label="Intro text" value={tw.introMode}
          options={['expand', 'short', 'full']}
          onChange={(v) => setTweak('introMode', v)} />
        <TweakRadio label="Band intensity" value={tw.bandIntensity}
          options={['soft', 'medium', 'bold']}
          onChange={(v) => setTweak('bandIntensity', v)} />
        <TweakRadio label="Band height" value={tw.bandHeight}
          options={['compact', 'standard', 'tall']}
          onChange={(v) => setTweak('bandHeight', v)} />
        <TweakSection label="Conversion" />
        <TweakRadio label="Big-3 form" value={tw.formMode}
          options={['inline', 'button']}
          onChange={(v) => setTweak('formMode', v)} />
        <TweakRadio label="Social proof" value={tw.socialProof}
          options={['low', 'high']}
          onChange={(v) => setTweak('socialProof', v)} />
        <TweakRadio label="Testimonials" value={tw.testimonials}
          options={['single', 'rotating']}
          onChange={(v) => setTweak('testimonials', v)} />
        <TweakColor label="Primary CTA" value={tw.primaryCta}
          options={['#A4426C', '#F27678', '#1B1B1B']}
          onChange={(v) => setTweak('primaryCta', v)} />
        <TweakSection label="Result" />
        <TweakToggle label="Sample-chart note" value={tw.showSampleNote}
          onChange={(v) => setTweak('showSampleNote', v)} />
        <TweakRadio label="Result CTA" value={tw.resultCta}
          options={['gold', 'wine']}
          onChange={(v) => setTweak('resultCta', v)} />
        <TweakButton label="Preview result (no birth time)"
          onClick={() => { setHasTime(false); setView('result'); window.scrollTo(0, 0); }} />
        <TweakSection label="Theme" />
        <TweakColor label="Page warmth" value={tw.pageWarmth}
          options={['#FEF9F5', '#FCF4EA', '#F5F3EE']}
          onChange={(v) => setTweak('pageWarmth', v)} />
        <TweakRadio label="Headings" value={tw.headingFont}
          options={['serif', 'sans']}
          onChange={(v) => setTweak('headingFont', v)} />
        <TweakRadio label="Corners" value={tw.cornerRadius}
          options={['soft', 'sharp']}
          onChange={(v) => setTweak('cornerRadius', v)} />
        <TweakSection label="Redesign (vorher/nachher)" />
        <TweakToggle label="Hero: Video-Bühne" value={tw.vxHero}
          onChange={(v) => setTweak('vxHero', v)} />
        <TweakToggle label="Reviews: dunkle Sektion" value={tw.vxDark}
          onChange={(v) => setTweak('vxDark', v)} />
        <TweakToggle label="Big-3-Karten: Triadenfarben" value={tw.vxTriad}
          onChange={(v) => setTweak('vxTriad', v)} />
        <TweakToggle label="Journal: größere Bilder + Hover" value={tw.vxJournal}
          onChange={(v) => setTweak('vxJournal', v)} />
        <TweakToggle label="Typo-Feinschliff" value={tw.vxType}
          onChange={(v) => setTweak('vxType', v)} />
        <TweakToggle label="Footer: Constellation" value={tw.vxFooter}
          onChange={(v) => setTweak('vxFooter', v)} />
      </TweaksPanel>
    </div>
  );
}

/* result wrapper that can hide the sample note via tweak */
function ResultView({ t, hasTime, showNote, resultCta, onBack, onBook, onCall }) {
  const t2 = showNote ? t : { ...t, result: { ...t.result, sample_note: '' } };
  return <Result t={t2} hasTime={hasTime} resultCta={resultCta} onBack={onBack} onBook={onBook} onCall={onCall} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
