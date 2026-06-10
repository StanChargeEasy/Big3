/* ============================================================
   Big3 Astrology — UI chrome (header, footer, consent, bits)
   Shared via window for app.jsx. React + Babel.
   ============================================================ */
const { useState, useEffect, useRef } = React;

const ASSET = '../assets';
const LOCALES = window.B3A_LOCALES;
const LABEL = window.B3A_LOCALE_LABEL;

/* ---- language switcher (pills — used in footer) ---- */
function LangSwitcher({ lang, setLang, idPrefix = 'lang' }) {
  return (
    <div className="b3-lang" role="group" aria-label="Language">
      {LOCALES.map((code) => (
        <button
          key={code}
          id={`${idPrefix}-${code}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {LABEL[code]}
        </button>
      ))}
    </div>
  );
}

/* ---- language dropdown (compact — used in header) ---- */
const LANG_NAMES = { en: 'English', de: 'Deutsch', es: 'Español' };
function LangDropdown({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  return (
    <div className="b3-langdd" ref={ref}>
      <button className="b3-langdd-btn" aria-haspopup="listbox" aria-expanded={open} aria-label="Language" onClick={() => setOpen((v) => !v)}>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.2"/><path d="M1.7 8h12.6M8 1.6c1.7 1.7 2.6 3.9 2.6 6.4S9.7 12.7 8 14.4C6.3 12.7 5.4 10.5 5.4 8S6.3 3.3 8 1.6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
        <span>{LABEL[lang]}</span>
        <svg className="b3-langdd-chev" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" style={{ transform: open ? 'rotate(180deg)' : 'none' }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className={`b3-langdd-menu${open ? ' open' : ''}`} role="listbox" aria-label="Language">
        {LOCALES.map((code) => (
          <button key={code} role="option" aria-selected={lang === code}
            className={`b3-langdd-opt${lang === code ? ' sel' : ''}`}
            onClick={() => { setLang(code); setOpen(false); }}>
            <span className="b3-langdd-code">{LABEL[code]}</span>
            <span className="b3-langdd-name">{LANG_NAMES[code]}</span>
            {lang === code && (
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---- 5 gold stars ---- */
function Stars() {
  return (
    <span className="b3-stars" aria-label="5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => <span key={i}>✶</span>)}
    </span>
  );
}

/* ---- small celestial sun-burst mark (for form heading) ---- */
function SunMark({ className }) {
  return (
    <img className={className} src={`${ASSET}/icons/glyph-sun.png`} alt="" aria-hidden="true" />
  );
}

/* ---- wordmark lockup (trinity mark + Jost word) ---- */
function Wordmark({ tone = 'ink' }) {
  return (
    <React.Fragment>
      <img className="b3-logo-mark" src={`${ASSET}/logos/b3a-icon-color.png`} alt="" aria-hidden="true"
        style={tone === 'cream' ? { filter: 'brightness(0) invert(1)' } : null} />
      <span className="b3-logo-word">Big&nbsp;3 Astrology</span>
    </React.Fragment>
  );
}

/* ---- header ---- */
const NAV_ROUTE = { home: 'home', reading: 'reading', intro_call: 'call', about: 'about', blog: 'journal' };
function Header({ t, lang, setLang, onBook, onHome, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    ['home', t.nav.home],
    ['reading', t.nav.reading],
    ['intro_call', t.nav.intro_call],
    ['about', t.nav.about],
    ['blog', t.nav.blog],
  ];

  const nav = (key) => (e) => { e.preventDefault(); setOpen(false); (onNav || onHome)(NAV_ROUTE[key] || 'home'); };

  return (
    <header className={`b3-hdr${scrolled ? ' scrolled' : ''}`}>
      <div className="b3-shell b3-hdr-inner">
        <button className="b3-logo" onClick={() => { setOpen(false); onHome && onHome(); }} aria-label="Big 3 Astrology — home">
          <Wordmark tone="ink" />
        </button>

        <nav className="b3-nav" aria-label="Primary">
          {navItems.map(([k, label]) => (
            <a key={k} href="#" onClick={nav(k)}>{label}</a>
          ))}
        </nav>

        <div className="b3-hdr-right">
          <LangDropdown lang={lang} setLang={setLang} />
          <button className="b3-btn b3-btn--primary b3-btn--sm b3-book" onClick={onBook}>{t.nav.book}</button>
          <button
            className={`b3-hamburger${open ? ' open' : ''}`}
            aria-label="Menu" aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={`b3-mobile-menu${open ? ' open' : ''}`}>
        <div className="b3-shell">
          <nav aria-label="Mobile">
            {navItems.map(([k, label]) => (
              <a key={k} href="#" onClick={nav(k)}>{label}</a>
            ))}
            <div className="b3-mm-actions">
              <button className="b3-btn b3-btn--primary b3-btn--block" onClick={() => { setOpen(false); onBook(); }}>
                {t.nav.book}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ---- footer ---- */
const LEGAL_ROUTE = { legal: 'legal-notice', terms: 'terms', privacy: 'privacy', refund: 'cancellations-refunds' };
function Footer({ t, lang, setLang, onNav, divider }) {
  const legal = [
    ['legal', t.footer.links_legal],
    ['terms', t.footer.links_terms],
    ['privacy', t.footer.links_privacy],
    ['refund', t.footer.links_refund],
  ];
  const pages = [
    ['home', t.nav.home], ['reading', t.nav.reading], ['intro_call', t.nav.intro_call],
    ['about', t.nav.about], ['blog', t.nav.blog],
  ];
  const guides = [
    ['free-birth-chart', t.footer.guide_birth],
    ['rising-sign', t.footer.guide_rising],
    ['moon-sign', t.footer.guide_moon],
  ];
  const f = t.footer;
  const navTo = (route) => (e) => { e.preventDefault(); (onNav || (() => {}))(route); };
  const go = (key) => navTo(NAV_ROUTE[key] || 'home');
  const goLegal = (key) => navTo(LEGAL_ROUTE[key] || 'home');
  return (
    <footer className="b3-ftr" role="contentinfo">
      <div className="b3-shell">
        {divider && window.ConstellationDivider && (
          <ConstellationDivider variant="trinity" tone="gold" className="b3-ftr-cdiv" />
        )}
        <div className="b3-ftr-top">
          <div className="b3-ftr-brand">
            <a className="b3-logo" href="#" onClick={navTo('home')} aria-label="Big 3 Astrology — home">
              <Wordmark tone="cream" />
            </a>
            <p className="b3-ftr-tag">{f.tagline}</p>
            <div className="b3-ftr-social" aria-label={f.follow_label}>
              <a href="https://instagram.com/big3astrology" target="_blank" rel="noopener noreferrer me" aria-label="Instagram">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>
              </a>
              <a href={`mailto:${f.email}`} aria-label={f.email_label}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
          <nav className="b3-ftr-cols" aria-label={f.nav_label}>
            <div className="b3-ftr-col">
              <h4>{f.nav_label}</h4>
              {pages.map(([k, label]) => <a key={k} href="#" onClick={go(k)}>{label}</a>)}
            </div>
            <div className="b3-ftr-col">
              <h4>{f.guides_label}</h4>
              {guides.map(([route, label]) => <a key={route} href="#" onClick={navTo(route)}>{label}</a>)}
            </div>
            <div className="b3-ftr-col">
              <h4>{f.legal_label}</h4>
              {legal.map(([k, label]) => <a key={k} href="#" onClick={goLegal(k)}>{label}</a>)}
            </div>
            <div className="b3-ftr-col b3-ftr-col--contact">
              <h4>{f.contact_label}</h4>
              <a href={`mailto:${f.email}`}>{f.email}</a>
              <address className="b3-ftr-addr">
                Big Astrology GmbH<br />Ränkestrasse 21<br />8700 Küsnacht ZH<br />Switzerland
              </address>
            </div>
          </nav>
        </div>
        <p className="b3-ftr-disc">{f.disclaimer}</p>
        <div className="b3-ftr-base">
          <span className="b3-ftr-rights">{f.rights} · Küsnacht ZH, Switzerland</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- consent banner (placeholder for Zaraz CMP) ---- */
function ConsentBanner({ t, show, onClose }) {
  return (
    <div className={`b3-consent${show ? ' show' : ''}`} role="dialog" aria-label={t.consent.title} aria-hidden={!show}>
      <div className="b3-consent-title">{t.consent.title}</div>
      <div className="b3-consent-body">{t.consent.body}</div>
      <div className="b3-consent-actions">
        <button className="b3-btn b3-btn--primary b3-btn--sm" onClick={() => onClose('accept')}>{t.consent.accept}</button>
        <button className="b3-btn b3-btn--ghost b3-btn--sm" onClick={() => onClose('reject')}>{t.consent.reject}</button>
        <button className="prefs" onClick={() => onClose('prefs')}>{t.consent.prefs}</button>
      </div>
      <div className="b3-consent-tag">Placeholder · Cloudflare Zaraz CMP</div>
    </div>
  );
}

Object.assign(window, { LangSwitcher, LangDropdown, Stars, SunMark, Header, Footer, ConsentBanner, B3A_ASSET: ASSET });
