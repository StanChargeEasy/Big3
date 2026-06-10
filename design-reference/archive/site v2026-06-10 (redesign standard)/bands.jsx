/* ============================================================
   Big3 Astrology — Decorative brand bands + page headers
   Atmosphere strips that sit at the top of content pages.
   All bands are DECORATIVE: alt="", lazy-loaded, dimensions
   reserved (CLS-safe). Titles flex for DE/ES (no fixed widths).
   Shared via window for pages.jsx / app.jsx (React + Babel).
   ============================================================ */
const ASSETB = window.B3A_ASSET; // '../assets'

/* Per-slot band config. heightM/heightD = reserved min-heights.
   pos = object-position crop. art = has a tall mobile crop.
   overlay zone + tone drive the (optional) title placement. */
const BANDS = {
  about: {
    wide: 'brand/band-about-wide.webp', tall: 'brand/band-about-tall.webp', art: true,
    pos: 'center', posM: 'right center', heightM: 152, heightD: 228,
  },
  reading: {
    wide: 'brand/band-reading-wide.webp', tall: 'brand/band-reading-tall.webp', art: true,
    pos: 'center 42%', posM: 'center 60%', heightM: 150, heightD: 236,
  },
  birthchart: {
    wide: 'brand/band-birthchart.webp', art: false,
    pos: 'center 38%', posM: 'center 42%', heightM: 188, heightD: 250,
  },
  moon: {
    wide: 'brand/band-moon.webp', art: false,
    pos: 'center 58%', posM: 'center 58%', heightM: 190, heightD: 250,
  },
  rising: {
    wide: 'brand/band-rising.webp', art: false,
    pos: 'center 55%', posM: 'center 54%', heightM: 188, heightD: 246,
  },
};

/* Decorative band image (no title). Used on its own or under PageHeader. */
function Band({ slot, className = '' }) {
  const b = BANDS[slot];
  if (!b) return null;
  const style = {
    '--bh-m': `${b.heightM}px`, '--bh-d': `${b.heightD}px`,
    '--bp': b.pos, '--bp-m': b.posM || b.pos,
  };
  const pic = { backgroundImage: `url("${ASSETB}/${b.wide}")`, backgroundSize: 'cover', backgroundPosition: b.pos };
  return (
    <div className={`b3-band b3-band--${slot} ${className}`} style={style} aria-hidden="true">
      <picture style={pic}>
        {b.art && <source media="(max-width: 640px)" srcSet={`${ASSETB}/${b.tall}`} />}
        <img src={`${ASSETB}/${b.wide}`} alt="" loading="lazy" decoding="async"
          width="1376" height="768" />
      </picture>
    </div>
  );
}

/* Page header = decorative band + (optional) flexible title overlay.
   zone: 'left' | 'center'  ·  tone: 'dark' | 'light'
   Title + eyebrow flex for German; nothing is truncated. */
function PageHeader({ slot, eyebrow, title, zone = 'left', tone = 'dark' }) {
  const b = BANDS[slot];
  const style = {
    '--bh-m': `${b.heightM}px`, '--bh-d': `${b.heightD}px`,
    '--bp': b.pos, '--bp-m': b.posM || b.pos,
  };
  return (
    <header className={`b3-band b3-band--${slot} b3-band--header b3-band--${zone} b3-band--${tone}`} style={style}>
      <picture aria-hidden="true" style={{ backgroundImage: `url("${ASSETB}/${b.wide}")`, backgroundSize: 'cover', backgroundPosition: b.pos }}>
        {b.art && <source media="(max-width: 640px)" srcSet={`${ASSETB}/${b.tall}`} />}
        <img src={`${ASSETB}/${b.wide}`} alt="" loading="lazy" decoding="async"
          width="1376" height="768" />
      </picture>
      <div className="b3-band-overlay">
        <div className="b3-band-inner b3-shell">
          {eyebrow && <span className="b3-band-eyebrow">{eyebrow}</span>}
          <h1 className="b3-band-title">{title}</h1>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Band, PageHeader, B3A_BANDS: BANDS });
