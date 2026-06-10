/* ============================================================
   Big3 Astrology — Decorative inline SVG + motifs (enrichment)
   All marks are SVGO-light, token-colored, and CSS-animatable.
   Decorative → aria-hidden; illustrative → role="img" + <title>.
   Brand triad: Sun = coral · Moon = wine · Ascendant = gold.
   Shared via window for app.jsx / pages.jsx (React + Babel).
   ============================================================ */
const { useId: useIdD } = React;

const TRIAD = { sun: 'var(--b3a-coral)', moon: 'var(--b3a-wine)', rising: 'var(--b3a-gold)' };

/* Sun — disc + eight rays */
function SunMarkSvg({ size = 24, color }) {
  const c = color || TRIAD.sun;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill={c} />
      <g stroke={c} strokeWidth="1.6" strokeLinecap="round">
        <line x1="18.5" y1="12" x2="21.5" y2="12" />
        <line x1="5.5" y1="12" x2="2.5" y2="12" />
        <line x1="12" y1="18.5" x2="12" y2="21.5" />
        <line x1="12" y1="5.5" x2="12" y2="2.5" />
        <line x1="16.6" y1="16.6" x2="18.7" y2="18.7" />
        <line x1="7.4" y1="7.4" x2="5.3" y2="5.3" />
        <line x1="16.6" y1="7.4" x2="18.7" y2="5.3" />
        <line x1="7.4" y1="16.6" x2="5.3" y2="18.7" />
      </g>
    </svg>
  );
}

/* Moon — crescent via masked disc */
function MoonMarkSvg({ size = 24, color }) {
  const c = color || TRIAD.moon;
  const id = useIdD();
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <mask id={id}>
        <rect width="24" height="24" fill="#fff" />
        <circle cx="16" cy="10" r="8" fill="#000" />
      </mask>
      <circle cx="12" cy="12" r="8" fill={c} mask={`url(#${id})`} />
    </svg>
  );
}

/* Ascendant / Rising — a sun cresting the horizon */
function RisingMarkSvg({ size = 24, color }) {
  const c = color || TRIAD.rising;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 16a5 5 0 0 1 10 0" fill={c} fillOpacity="0.9" />
      <line x1="3" y1="16.4" x2="21" y2="16.4" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
      <g stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <line x1="12" y1="6.4" x2="12" y2="4.2" />
        <line x1="6.7" y1="8.4" x2="5.4" y2="7.1" />
        <line x1="17.3" y1="8.4" x2="18.6" y2="7.1" />
      </g>
    </svg>
  );
}

const MARKS = { sun: SunMarkSvg, moon: MoonMarkSvg, rising: RisingMarkSvg };
function Luminary({ body = 'sun', size = 24, color, className = '' }) {
  const C = MARKS[body] || SunMarkSvg;
  return <span className={`b3-luminary ${className}`}><C size={size} color={color} /></span>;
}

/* Constellation divider — moon · rule · (libra) · rule · sun, with
   a couple of twinkling star dots. Decorative. */
function ConstellationDivider({ variant = 'duo', className = '', tone }) {
  const col = tone === 'gold' ? 'var(--b3a-gold)' : undefined;
  return (
    <div className={`b3-cdiv ${className}`} aria-hidden="true">
      <Luminary body="moon" size={20} color={col} />
      <span className="b3-cdiv-rule">
        <svg className="b3-cdiv-stars" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none">
          <circle className="b3-tw b3-tw1" cx="26" cy="4" r="1.1" fill="var(--b3a-gold)" />
          <circle className="b3-tw b3-tw2" cx="62" cy="3" r="1.4" fill={col || 'var(--b3a-coral)'} />
          <circle className="b3-tw b3-tw3" cx="82" cy="5" r="1" fill={col || 'var(--b3a-wine)'} />
        </svg>
      </span>
      {variant === 'trinity' && <Luminary body="rising" size={22} color={col} />}
      {variant === 'trinity' && <span className="b3-cdiv-rule" />}
      <Luminary body="sun" size={20} color={col} />
    </div>
  );
}

/* Orbit motif — three luminaries travelling a shared arc. Illustrative,
   used as the "How it works" accent on the Full Reading page. */
function OrbitDiagram({ className = '' }) {
  return (
    <svg className={`b3-orbit-dia ${className}`} viewBox="0 0 320 132" fill="none"
      role="img" aria-label="Three steps moving along one path: preparation, the live session, and a written summary.">
      <path d="M16 104 Q160 4 304 104" stroke="var(--b3a-wine)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="2 7" strokeLinecap="round" />
      <g>
        <circle cx="16" cy="104" r="20" fill="var(--b3a-plum-wash)" />
        <g transform="translate(4 92)"><MoonMarkSvg size={24} /></g>
      </g>
      <g>
        <circle cx="160" cy="30" r="22" fill="var(--b3a-blush)" />
        <g transform="translate(147 17)"><RisingMarkSvg size={26} /></g>
      </g>
      <g>
        <circle cx="304" cy="104" r="20" fill="#FCEBD6" />
        <g transform="translate(292 92)"><SunMarkSvg size={24} /></g>
      </g>
    </svg>
  );
}

Object.assign(window, {
  Luminary, SunMarkSvg, MoonMarkSvg, RisingMarkSvg,
  ConstellationDivider, OrbitDiagram,
});
