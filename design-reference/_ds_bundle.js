/* @ds-bundle: {"format":3,"namespace":"Big3AstrologyDesignSystem_becd02","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CelestialDivider","sourcePath":"components/celestial/CelestialDivider.jsx"},{"name":"StarRating","sourcePath":"components/celestial/StarRating.jsx"},{"name":"TrinityMark","sourcePath":"components/celestial/TrinityMark.jsx"},{"name":"ZodiacGlyph","sourcePath":"components/celestial/ZodiacGlyph.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"}],"sourceHashes":{"archive/site v2026-06-10 (redesign standard)/app.jsx":"0ae64cb2b528","archive/site v2026-06-10 (redesign standard)/bands.jsx":"f834557bef3c","archive/site v2026-06-10 (redesign standard)/decor.jsx":"2fcc8d7182db","archive/site v2026-06-10 (redesign standard)/i18n.js":"c3aab2feff01","archive/site v2026-06-10 (redesign standard)/legal.jsx":"294dca867c00","archive/site v2026-06-10 (redesign standard)/pages.jsx":"abe98708a238","archive/site v2026-06-10 (redesign standard)/tweaks-panel.jsx":"6591467622ed","archive/site v2026-06-10 (redesign standard)/ui.jsx":"a66f597cff9c","components/brand/Logo.jsx":"fc7448cffde7","components/celestial/CelestialDivider.jsx":"4ac30e2f8f0a","components/celestial/StarRating.jsx":"01b390439c3c","components/celestial/TrinityMark.jsx":"7a48f503a816","components/celestial/ZodiacGlyph.jsx":"b87ad242227c","components/core/Badge.jsx":"0d3d2e12c17e","components/core/Button.jsx":"cb91abf98601","components/core/Card.jsx":"26dcbae2dc40","components/core/Eyebrow.jsx":"c6535263b567","pages.jsx":"b32594492bb0","site/app.jsx":"d1388ff129d5","site/bands.jsx":"f834557bef3c","site/decor.jsx":"2fcc8d7182db","site/i18n.js":"c3aab2feff01","site/legal.jsx":"294dca867c00","site/pages.jsx":"abe98708a238","site/tweaks-panel.jsx":"6591467622ed","site/ui.jsx":"a66f597cff9c","ui_kits/instagram/app.jsx":"ec733d0309a5","ui_kits/instagram/posts.jsx":"b8aeedc84b7f","ui_kits/instagram/shell.jsx":"37cd59f23a43","ui_kits/website/app.jsx":"66310f136fb5","ui_kits/website/app.standalone.jsx":"8add3d87e748"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Big3AstrologyDesignSystem_becd02 = window.Big3AstrologyDesignSystem_becd02 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// archive/site v2026-06-10 (redesign standard)/app.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — App (hero + form, sections, Big-3 result)
   ============================================================ */
const {
  useState: useStateA,
  useEffect: useEffectA,
  useRef: useRefA
} = React;
const ASSETP = window.B3A_ASSET;
const COUNTRIES = ['Switzerland', 'Germany', 'Austria', 'Spain', 'France', 'Italy', 'United Kingdom', 'United States', 'Venezuela', 'Mexico', 'Argentina', 'Other'];
const SAMPLE_CITIES = ['Zürich, Switzerland', 'Basel, Switzerland', 'Genève, Switzerland', 'Berlin, Germany', 'Wien, Austria', 'Madrid, Spain', 'Barcelona, Spain', 'Caracas, Venezuela'];

/* small inline glyph for hero eyebrow */
function Dot({
  c
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: c,
      display: 'inline-block'
    }
  });
}

/* ---------- BRAND HERO MEDIA (animation / still / none) ---------- */
function HeroMedia({
  media,
  layout
}) {
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
    const onTime = () => {
      if (v.currentTime > 0.05) setPlaying(true);
    };
    v.addEventListener('timeupdate', onTime);
    // defer the video fetch until AFTER first paint / LCP so it never blocks it
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      v.preload = 'auto';
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    const idle = window.requestIdleCallback ? window.requestIdleCallback(start, {
      timeout: 1800
    }) : setTimeout(start, 1200);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      if (window.cancelIdleCallback && window.requestIdleCallback) window.cancelIdleCallback(idle);else clearTimeout(idle);
    };
  }, [media]);
  if (media === 'none') return null;
  const cls = `b3-hero-media b3-hero-media--${layout}`;
  const poster = `${ASSETP}/brand/bg-hero-poster.jpg`;
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: `b3-hero-media-base${baseLoaded ? ' loaded' : ''}`,
    src: poster,
    alt: "",
    width: "960",
    height: "540",
    loading: "eager",
    decoding: "async",
    onLoad: () => setBaseLoaded(true),
    ref: el => {
      if (el && el.complete) setBaseLoaded(true);
    }
  }), media === 'animation' && /*#__PURE__*/React.createElement("video", {
    ref: vidRef,
    className: `b3-hero-media-vid${playing ? ' playing' : ''}`,
    poster: poster,
    width: "960",
    height: "540",
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none"
  }, /*#__PURE__*/React.createElement("source", {
    src: `${ASSETP}/brand/big3-bg-animation.mp4`,
    type: "video/mp4"
  })));
}

/* ---------- BIG-3 FORM (shared: inline + modal) ---------- */
function Big3Form({
  t,
  onReveal,
  idns = ''
}) {
  const [date, setDate] = useStateA('');
  const [time, setTime] = useStateA('');
  const [place, setPlace] = useStateA('');
  const [country, setCountry] = useStateA('');
  const [err, setErr] = useStateA({});
  const dateRef = useRefA(null);
  const placeRef = useRefA(null);
  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!date) next.date = true;
    if (!place.trim()) next.place = true;
    setErr(next);
    if (next.date) {
      dateRef.current && dateRef.current.focus();
      return;
    }
    if (next.place) {
      placeRef.current && placeRef.current.focus();
      return;
    }
    onReveal({
      hasTime: !!time
    });
  };
  const errStyle = {
    borderColor: 'var(--b3a-coral-600)',
    boxShadow: '0 0 0 3px rgba(232,95,97,0.16)'
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "b3-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bd${idns}`
  }, t.form.date_label), /*#__PURE__*/React.createElement("input", {
    ref: dateRef,
    id: `bd${idns}`,
    type: "date",
    className: "b3-input",
    value: date,
    onChange: e => setDate(e.target.value),
    style: err.date ? errStyle : null
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bt${idns}`
  }, t.form.time_label, " ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "\xB7 ", t.form.time_optional)), /*#__PURE__*/React.createElement("input", {
    id: `bt${idns}`,
    type: "time",
    className: "b3-input",
    value: time,
    onChange: e => setTime(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-help"
  }, t.form.time_helper)), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bp${idns}`
  }, t.form.place_label), /*#__PURE__*/React.createElement("input", {
    ref: placeRef,
    id: `bp${idns}`,
    type: "text",
    className: "b3-input",
    list: `cities${idns}`,
    placeholder: t.form.place_placeholder,
    value: place,
    onChange: e => setPlace(e.target.value),
    style: err.place ? errStyle : null
  }), /*#__PURE__*/React.createElement("datalist", {
    id: `cities${idns}`
  }, SAMPLE_CITIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }))), /*#__PURE__*/React.createElement("span", {
    className: "b3-help"
  }, t.form.place_helper)), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bc${idns}`
  }, t.form.country_label), /*#__PURE__*/React.createElement("select", {
    id: `bc${idns}`,
    className: "b3-select",
    value: country,
    onChange: e => setCountry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\u2014"), COUNTRIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), !time && /*#__PURE__*/React.createElement("div", {
    className: "b3-note"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4.4v4.2M8 11.2h.01",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", null, t.form.no_time_note)), /*#__PURE__*/React.createElement("div", {
    className: "b3-submit-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "b3-btn b3-btn--primary b3-btn--block"
  }, t.form.submit)));
}

/* form card wrapper (inline) */
function FormCard({
  t,
  onReveal
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-form-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-form-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-form-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-form-title"
  }, t.form.heading)), /*#__PURE__*/React.createElement(Big3Form, {
    t: t,
    onReveal: onReveal
  }));
}

/* CTA that opens the form modal (button mode) */
function FormCta({
  t,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-form-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--block b3-btn--lg",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-cta-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), t.hero.cta), /*#__PURE__*/React.createElement("p", {
    className: "b3-form-cta-sub"
  }, t.hero.cta_sub));
}

/* modal/bottom-sheet holding the form */
function FormModal({
  t,
  open,
  onClose,
  onReveal
}) {
  useEffectA(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-modal${open ? ' open' : ''}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-card",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": t.form.heading
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-form-head",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-form-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-form-title"
  }, t.form.heading)), /*#__PURE__*/React.createElement("button", {
    className: "b3-modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })))), open && /*#__PURE__*/React.createElement(Big3Form, {
    t: t,
    onReveal: onReveal,
    idns: "-m"
  })));
}

/* ---------- HERO ---------- */
function Hero({
  t,
  onReveal,
  media,
  layout,
  formMode,
  introMode,
  onOpenModal,
  showcase
}) {
  const [expanded, setExpanded] = useStateA(false);
  const show = showcase && media !== 'none' && layout !== 'bg';
  const heroCls = `b3-hero b3-hero--${layout} b3-hero--media-${media === 'none' ? 'off' : 'on'} b3-hero--form-${formMode}${show ? ' b3-hero--showcase' : ''}`;
  const copyTop = /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-copy b3-hero-copy--top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-coral)"
  }), " ", /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-wine)"
  }), " ", /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4
    }
  }, t.hero.eyebrow)), /*#__PURE__*/React.createElement("h1", {
    className: "b3-h1"
  }, t.hero.headline_a, " ", /*#__PURE__*/React.createElement("em", null, t.hero.headline_em)));
  return /*#__PURE__*/React.createElement("section", {
    className: heroCls
  }, layout === 'bg' && media !== 'none' && /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: "bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-hero-grid"
  }, show ? /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-media-slot b3-hero-stage"
  }, /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: layout
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-stage-copy"
  }, copyTop)) : /*#__PURE__*/React.createElement(React.Fragment, null, copyTop, layout !== 'bg' && media !== 'none' && /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-media-slot"
  }, /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: layout
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-copy b3-hero-copy--bot"
  }, introMode === 'full' && /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro
    }
  }), introMode === 'short' && /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_short
    }
  }), introMode === 'expand' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_lead
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `b3-more${expanded ? ' open' : ''}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-lede b3-lede--more",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_more
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "b3-more-toggle",
    onClick: () => setExpanded(v => !v),
    "aria-expanded": expanded
  }, expanded ? t.hero.less : t.hero.more, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      transform: expanded ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), formMode === 'button' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormCta, {
    t: t,
    onOpen: onOpenModal
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-hero-note"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 9.6A4.2 4.2 0 1 1 6.4 4.5a3.3 3.3 0 0 0 5.1 5.1Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, t.hero.note))), formMode === 'inline' && /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-formslot"
  }, /*#__PURE__*/React.createElement(FormCard, {
    t: t,
    onReveal: onReveal
  })))));
}

/* ---------- WHY ---------- */
const WHY_GLYPHS = [{
  src: 'icons/glyph-sun.png',
  variant: 'sun'
}, {
  src: 'icons/glyph-moon.png',
  variant: 'moon'
}, {
  src: 'icons/glyph-libra.png',
  variant: 'rising'
}];
function Why({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "b3-section b3-wash"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-section-head"
  }, /*#__PURE__*/React.createElement(ConstellationDivider, {
    variant: "trinity",
    className: "b3-section-cdiv"
  }), /*#__PURE__*/React.createElement("h2", null, t.why.heading)), /*#__PURE__*/React.createElement("div", {
    className: "b3-why-grid"
  }, t.why.items.map((it, i) => {
    const g = WHY_GLYPHS[i] || WHY_GLYPHS[0];
    return /*#__PURE__*/React.createElement("div", {
      className: `b3-why-item b3-why-item--${g.variant}`,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "b3-why-medallion"
    }, /*#__PURE__*/React.createElement("span", {
      className: "b3-why-orbit",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement(Luminary, {
      body: g.variant,
      size: 40
    })), /*#__PURE__*/React.createElement("div", {
      className: "b3-why-body"
    }, /*#__PURE__*/React.createElement("h3", null, it.t), /*#__PURE__*/React.createElement("p", null, it.b)));
  }))));
}

/* ---------- TALK TO A HUMAN ---------- */
function Talk({
  t,
  onBook,
  onCall
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "b3-talk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-talk-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.talk.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.talk.heading), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t.talk.body
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, t.talk.cta_primary), /*#__PURE__*/React.createElement("button", {
    className: "b3-link-cta",
    onClick: onCall
  }, t.talk.cta_secondary, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* ---------- TESTIMONIAL ---------- */
function Testimonial({
  t,
  compact,
  rotate
}) {
  const list = rotate && Array.isArray(t.testimonials) && t.testimonials.length > 1 ? t.testimonials : [t.testimonial];
  const [i, setI] = useStateA(0);
  const [show, setShow] = useStateA(true);
  const go = n => {
    setShow(false);
    setTimeout(() => {
      setI((n % list.length + list.length) % list.length);
      setShow(true);
    }, 300);
  };
  useEffectA(() => {
    if (list.length < 2) return;
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI(n => (n + 1) % list.length);
        setShow(true);
      }, 300);
    }, 6000);
    return () => clearInterval(id);
  }, [list.length]);
  const tm = list[Math.min(i, list.length - 1)];
  const fade = {
    opacity: show ? 1 : 0,
    transform: show ? 'none' : 'translateY(6px)',
    transition: 'opacity 0.34s var(--ease-out), transform 0.34s var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: `b3-tmt b3-wash${compact ? ' b3-tmt--compact' : ''}${list.length > 1 ? ' b3-tmt--rotating' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, t.reviews && /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.reviews.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.reviews.heading)), /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-tmt-quotemark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("p", {
    className: "b3-tmt-quote",
    style: fade
  }, "\u201C", tm.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-by",
    style: fade
  }, tm.name, " \xB7 ", tm.city), list.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-dots",
    role: "tablist",
    "aria-label": "Testimonials"
  }, list.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: `b3-tmt-dot${n === i ? ' on' : ''}`,
    role: "tab",
    "aria-selected": n === i,
    "aria-label": `Testimonial ${n + 1}`,
    onClick: () => go(n)
  }))))));
}

/* ---------- RESULT ---------- */
const UNI = {
  leo: '♌',
  cancer: '♋',
  libra: '♎'
};
function ResultCard({
  variant,
  glyph,
  eyebrow,
  sign,
  uni,
  sub,
  text
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `b3-card b3-card--${variant}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-card-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-card-glyph"
  }, /*#__PURE__*/React.createElement(Luminary, {
    body: variant,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-card-heads"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-card-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    className: "b3-card-sign"
  }, sign))), /*#__PURE__*/React.createElement("div", {
    className: "b3-card-sub"
  }, sub), /*#__PURE__*/React.createElement("p", null, text));
}
function Result({
  t,
  hasTime,
  onBack,
  onBook,
  onCall,
  resultCta
}) {
  const r = t.result;
  const a = t.archetype;
  const synth = hasTime ? t.synthesis : t.synthesisNoTime;
  const signsLine = hasTime ? `${t.signs.leo} · ${t.signs.cancer} · ${t.signs.libra}` : `${t.signs.leo} · ${t.signs.cancer}`;
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-result-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), r.back), /*#__PURE__*/React.createElement("div", {
    className: "b3-result-kicker"
  }, r.kicker), /*#__PURE__*/React.createElement("img", {
    className: "b3-result-tri",
    src: `${ASSETP}/logos/b3a-icon-color.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-result-signs"
  }, hasTime ? /*#__PURE__*/React.createElement("span", null, t.signs.leo, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.cancer, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.libra) : /*#__PURE__*/React.createElement("span", null, t.signs.leo, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.cancer)), r.sample_note ? /*#__PURE__*/React.createElement("p", {
    className: "b3-sample"
  }, r.sample_note) : null), /*#__PURE__*/React.createElement("div", {
    className: "b3-big3"
  }, /*#__PURE__*/React.createElement(ResultCard, {
    variant: "sun",
    glyph: `${ASSETP}/icons/glyph-sun.png`,
    eyebrow: r.sun_heading,
    sign: t.signs.leo,
    uni: UNI.leo,
    sub: r.sun_sub,
    text: a.sun_leo
  }), /*#__PURE__*/React.createElement(ResultCard, {
    variant: "moon",
    glyph: `${ASSETP}/icons/glyph-moon.png`,
    eyebrow: r.moon_heading,
    sign: t.signs.cancer,
    uni: UNI.cancer,
    sub: r.moon_sub,
    text: a.moon_cancer
  }), hasTime ? /*#__PURE__*/React.createElement(ResultCard, {
    variant: "rising",
    glyph: `${ASSETP}/icons/glyph-libra.png`,
    eyebrow: r.rising_heading,
    sign: t.signs.libra,
    uni: UNI.libra,
    sub: r.rising_sub,
    text: a.rising_libra
  }) : /*#__PURE__*/React.createElement("article", {
    className: "b3-card b3-card--rising b3-card--locked"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-card-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-lock-badge"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "9",
    height: "6",
    rx: "1.4",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6V4.5a2.5 2.5 0 015 0V6",
    stroke: "currentColor",
    strokeWidth: "1.3"
  })), r.rising_heading)), /*#__PURE__*/React.createElement("h4", null, r.locked_title), /*#__PURE__*/React.createElement("p", null, r.locked_body), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--sm",
    onClick: onCall
  }, t.nav.intro_call, " \xB7 CHF 20"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-synth"
  }, /*#__PURE__*/React.createElement("h3", null, r.synthesis_heading), synth.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--cream"
  }, "\u2736"), /*#__PURE__*/React.createElement("h3", null, r.cta_heading), /*#__PURE__*/React.createElement("p", null, r.cta_body), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: `b3-btn b3-btn--${resultCta || 'gold'}`,
    onClick: onBook
  }, r.cta_primary), /*#__PURE__*/React.createElement("button", {
    className: "b3-link-cta on-color",
    onClick: onCall
  }, r.cta_secondary, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
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
} /*EDITMODE-END*/;
const VEIL = {
  soft: 0.34,
  medium: 0.20,
  bold: 0.08
};
const BAND = {
  compact: [240, 300],
  standard: [280, 380],
  tall: [340, 520]
};
const RADII_SHARP = {
  '--radius-sm': '3px',
  '--radius-md': '4px',
  '--radius-lg': '6px',
  '--radius-xl': '8px',
  '--radius-pill': '7px'
};
const CTA_FG = {
  '#A4426C': 'var(--b3a-cream)',
  '#F27678': '#ffffff',
  '#1B1B1B': 'var(--b3a-cream)'
};
const ROUTES = ['home', 'about', 'reading', 'call', 'relationship', 'journal', 'free-birth-chart', 'rising-sign', 'moon-sign', 'legal-notice', 'terms', 'cancellations-refunds', 'privacy', 'result'];
const readHashView = () => {
  const h = (window.location.hash || '').replace(/^#\/?/, '');
  return ROUTES.indexOf(h) > 0 ? h : 'home';
};

/* ---------- APP ROOT ---------- */
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useStateA(() => {
    try {
      return localStorage.getItem('b3a-lang') || 'en';
    } catch (e) {
      return 'en';
    }
  });
  const [view, setView] = useStateA(readHashView); // 'home' | 'result' | page routes
  const [hasTime, setHasTime] = useStateA(true);
  const [consent, setConsent] = useStateA('hidden'); // hidden | shown | done
  const [modalOpen, setModalOpen] = useStateA(false);
  const t = window.B3A_I18N[lang];
  useEffectA(() => {
    document.documentElement.lang = t.htmlLang;
  }, [lang]);

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
  const setLang = code => {
    setLangState(code);
    try {
      localStorage.setItem('b3a-lang', code);
    } catch (e) {}
  };

  // consent banner: show once shortly after load unless already answered
  useEffectA(() => {
    let answered = false;
    try {
      answered = !!localStorage.getItem('b3a-consent');
    } catch (e) {}
    if (answered) return;
    const id = setTimeout(() => setConsent('shown'), 1100);
    return () => clearTimeout(id);
  }, []);
  const closeConsent = choice => {
    setConsent('done');
    try {
      localStorage.setItem('b3a-consent', choice);
    } catch (e) {}
  };
  const reveal = ({
    hasTime
  }) => {
    setHasTime(hasTime);
    setModalOpen(false);
    setView('result');
    window.scrollTo(0, 0);
  };
  const goHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };
  const goBook = () => {
    setView('result');
    setHasTime(true);
    window.scrollTo(0, 0);
  };
  const go = route => {
    setModalOpen(false);
    setView(route);
    window.scrollTo(0, 0);
  };
  const toForm = () => {
    setView('home');
    setTimeout(() => {
      if (tw.formMode === 'button') {
        setModalOpen(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const el = document.querySelector('.b3-form-card');
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }, 30);
  };
  const band = BAND[tw.bandHeight] || BAND.standard;
  const rootStyle = {
    '--cta-bg': tw.primaryCta,
    '--cta-fg': CTA_FG[tw.primaryCta] || 'var(--b3a-cream)',
    '--hero-veil': VEIL[tw.bandIntensity] != null ? VEIL[tw.bandIntensity] : 0.20,
    '--hero-band-m': band[0] + 'px',
    '--hero-band-d': band[1] + 'px',
    '--b3a-cream': tw.pageWarmth,
    '--surface-page': tw.pageWarmth,
    background: tw.pageWarmth,
    ...(tw.cornerRadius === 'sharp' ? RADII_SHARP : {})
  };
  const renderView = () => {
    switch (view) {
      case 'about':
        return /*#__PURE__*/React.createElement(AboutPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'reading':
        return /*#__PURE__*/React.createElement(ReadingPage, {
          t: t,
          go: go,
          onBook: goBook,
          onHome: goHome
        });
      case 'call':
        return /*#__PURE__*/React.createElement(CallPage, {
          t: t,
          go: go,
          onBook: goBook,
          onHome: goHome
        });
      case 'relationship':
        return /*#__PURE__*/React.createElement(RelationshipPage, {
          t: t,
          onBook: goBook,
          onHome: goHome
        });
      case 'journal':
        return /*#__PURE__*/React.createElement(JournalPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'free-birth-chart':
        return /*#__PURE__*/React.createElement(FreeBirthChartPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook,
          onHome: goHome
        });
      case 'rising-sign':
        return /*#__PURE__*/React.createElement(RisingPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook
        });
      case 'moon-sign':
        return /*#__PURE__*/React.createElement(MoonPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook
        });
      case 'legal-notice':
        return /*#__PURE__*/React.createElement(LegalNoticePage, {
          t: t,
          onHome: goHome
        });
      case 'terms':
        return /*#__PURE__*/React.createElement(TermsPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'cancellations-refunds':
        return /*#__PURE__*/React.createElement(RefundsPage, {
          t: t,
          onHome: goHome
        });
      case 'privacy':
        return /*#__PURE__*/React.createElement(PrivacyPage, {
          t: t,
          onHome: goHome
        });
      case 'result':
        return /*#__PURE__*/React.createElement(ResultView, {
          t: t,
          hasTime: hasTime,
          showNote: tw.showSampleNote,
          resultCta: tw.resultCta,
          onBack: toForm,
          onBook: goBook,
          onCall: goBook
        });
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
          t: t,
          onReveal: reveal,
          media: tw.heroMedia,
          layout: tw.heroLayout,
          formMode: tw.formMode,
          introMode: tw.introMode,
          onOpenModal: () => setModalOpen(true),
          showcase: tw.vxHero
        }), tw.socialProof === 'high' && /*#__PURE__*/React.createElement(Testimonial, {
          t: t,
          compact: true,
          rotate: tw.testimonials === 'rotating'
        }), /*#__PURE__*/React.createElement(Why, {
          t: t
        }), /*#__PURE__*/React.createElement(Talk, {
          t: t,
          onBook: goBook,
          onCall: goBook
        }), tw.socialProof === 'low' && /*#__PURE__*/React.createElement(Testimonial, {
          t: t,
          rotate: tw.testimonials === 'rotating'
        }));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-app${tw.vxDark ? ' vx-dark' : ''}${tw.vxTriad ? ' vx-triad' : ''}${tw.vxJournal ? ' vx-journal' : ''}${tw.vxType ? ' vx-type' : ''}`,
    "data-head": tw.headingFont,
    style: rootStyle
  }, /*#__PURE__*/React.createElement(Header, {
    t: t,
    lang: lang,
    setLang: setLang,
    onBook: goBook,
    onHome: goHome,
    onNav: go
  }), renderView(), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    lang: lang,
    setLang: setLang,
    onNav: go,
    divider: tw.vxFooter
  }), /*#__PURE__*/React.createElement(ConsentBanner, {
    t: t,
    show: consent === 'shown',
    onClose: closeConsent
  }), /*#__PURE__*/React.createElement(FormModal, {
    t: t,
    open: modalOpen,
    onClose: () => setModalOpen(false),
    onReveal: reveal
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Brand media",
    value: tw.heroMedia,
    options: ['animation', 'still', 'none'],
    onChange: v => setTweak('heroMedia', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero layout",
    value: tw.heroLayout,
    options: ['side', 'banner', 'bg'],
    onChange: v => setTweak('heroLayout', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Intro text",
    value: tw.introMode,
    options: ['expand', 'short', 'full'],
    onChange: v => setTweak('introMode', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Band intensity",
    value: tw.bandIntensity,
    options: ['soft', 'medium', 'bold'],
    onChange: v => setTweak('bandIntensity', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Band height",
    value: tw.bandHeight,
    options: ['compact', 'standard', 'tall'],
    onChange: v => setTweak('bandHeight', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Conversion"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Big-3 form",
    value: tw.formMode,
    options: ['inline', 'button'],
    onChange: v => setTweak('formMode', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Social proof",
    value: tw.socialProof,
    options: ['low', 'high'],
    onChange: v => setTweak('socialProof', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Testimonials",
    value: tw.testimonials,
    options: ['single', 'rotating'],
    onChange: v => setTweak('testimonials', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Primary CTA",
    value: tw.primaryCta,
    options: ['#A4426C', '#F27678', '#1B1B1B'],
    onChange: v => setTweak('primaryCta', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Result"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Sample-chart note",
    value: tw.showSampleNote,
    onChange: v => setTweak('showSampleNote', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Result CTA",
    value: tw.resultCta,
    options: ['gold', 'wine'],
    onChange: v => setTweak('resultCta', v)
  }), /*#__PURE__*/React.createElement(TweakButton, {
    label: "Preview result (no birth time)",
    onClick: () => {
      setHasTime(false);
      setView('result');
      window.scrollTo(0, 0);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Page warmth",
    value: tw.pageWarmth,
    options: ['#FEF9F5', '#FCF4EA', '#F5F3EE'],
    onChange: v => setTweak('pageWarmth', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Headings",
    value: tw.headingFont,
    options: ['serif', 'sans'],
    onChange: v => setTweak('headingFont', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Corners",
    value: tw.cornerRadius,
    options: ['soft', 'sharp'],
    onChange: v => setTweak('cornerRadius', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Redesign (vorher/nachher)"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Hero: Video-B\xFChne",
    value: tw.vxHero,
    onChange: v => setTweak('vxHero', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Reviews: dunkle Sektion",
    value: tw.vxDark,
    onChange: v => setTweak('vxDark', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Big-3-Karten: Triadenfarben",
    value: tw.vxTriad,
    onChange: v => setTweak('vxTriad', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Journal: gr\xF6\xDFere Bilder + Hover",
    value: tw.vxJournal,
    onChange: v => setTweak('vxJournal', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Typo-Feinschliff",
    value: tw.vxType,
    onChange: v => setTweak('vxType', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Footer: Constellation",
    value: tw.vxFooter,
    onChange: v => setTweak('vxFooter', v)
  })));
}

/* result wrapper that can hide the sample note via tweak */
function ResultView({
  t,
  hasTime,
  showNote,
  resultCta,
  onBack,
  onBook,
  onCall
}) {
  const t2 = showNote ? t : {
    ...t,
    result: {
      ...t.result,
      sample_note: ''
    }
  };
  return /*#__PURE__*/React.createElement(Result, {
    t: t2,
    hasTime: hasTime,
    resultCta: resultCta,
    onBack: onBack,
    onBook: onBook,
    onCall: onCall
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/app.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/bands.jsx
try { (() => {
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
    wide: 'brand/band-about-wide.webp',
    tall: 'brand/band-about-tall.webp',
    art: true,
    pos: 'center',
    posM: 'right center',
    heightM: 152,
    heightD: 228
  },
  reading: {
    wide: 'brand/band-reading-wide.webp',
    tall: 'brand/band-reading-tall.webp',
    art: true,
    pos: 'center 42%',
    posM: 'center 60%',
    heightM: 150,
    heightD: 236
  },
  birthchart: {
    wide: 'brand/band-birthchart.webp',
    art: false,
    pos: 'center 38%',
    posM: 'center 42%',
    heightM: 188,
    heightD: 250
  },
  moon: {
    wide: 'brand/band-moon.webp',
    art: false,
    pos: 'center 58%',
    posM: 'center 58%',
    heightM: 190,
    heightD: 250
  },
  rising: {
    wide: 'brand/band-rising.webp',
    art: false,
    pos: 'center 55%',
    posM: 'center 54%',
    heightM: 188,
    heightD: 246
  }
};

/* Decorative band image (no title). Used on its own or under PageHeader. */
function Band({
  slot,
  className = ''
}) {
  const b = BANDS[slot];
  if (!b) return null;
  const style = {
    '--bh-m': `${b.heightM}px`,
    '--bh-d': `${b.heightD}px`,
    '--bp': b.pos,
    '--bp-m': b.posM || b.pos
  };
  const pic = {
    backgroundImage: `url("${ASSETB}/${b.wide}")`,
    backgroundSize: 'cover',
    backgroundPosition: b.pos
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-band b3-band--${slot} ${className}`,
    style: style,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("picture", {
    style: pic
  }, b.art && /*#__PURE__*/React.createElement("source", {
    media: "(max-width: 640px)",
    srcSet: `${ASSETB}/${b.tall}`
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSETB}/${b.wide}`,
    alt: "",
    loading: "lazy",
    decoding: "async",
    width: "1376",
    height: "768"
  })));
}

/* Page header = decorative band + (optional) flexible title overlay.
   zone: 'left' | 'center'  ·  tone: 'dark' | 'light'
   Title + eyebrow flex for German; nothing is truncated. */
function PageHeader({
  slot,
  eyebrow,
  title,
  zone = 'left',
  tone = 'dark'
}) {
  const b = BANDS[slot];
  const style = {
    '--bh-m': `${b.heightM}px`,
    '--bh-d': `${b.heightD}px`,
    '--bp': b.pos,
    '--bp-m': b.posM || b.pos
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `b3-band b3-band--${slot} b3-band--header b3-band--${zone} b3-band--${tone}`,
    style: style
  }, /*#__PURE__*/React.createElement("picture", {
    "aria-hidden": "true",
    style: {
      backgroundImage: `url("${ASSETB}/${b.wide}")`,
      backgroundSize: 'cover',
      backgroundPosition: b.pos
    }
  }, b.art && /*#__PURE__*/React.createElement("source", {
    media: "(max-width: 640px)",
    srcSet: `${ASSETB}/${b.tall}`
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSETB}/${b.wide}`,
    alt: "",
    loading: "lazy",
    decoding: "async",
    width: "1376",
    height: "768"
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-band-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-band-inner b3-shell"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "b3-band-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title"
  }, title))));
}
Object.assign(window, {
  Band,
  PageHeader,
  B3A_BANDS: BANDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/bands.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/decor.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Decorative inline SVG + motifs (enrichment)
   All marks are SVGO-light, token-colored, and CSS-animatable.
   Decorative → aria-hidden; illustrative → role="img" + <title>.
   Brand triad: Sun = coral · Moon = wine · Ascendant = gold.
   Shared via window for app.jsx / pages.jsx (React + Babel).
   ============================================================ */
const {
  useId: useIdD
} = React;
const TRIAD = {
  sun: 'var(--b3a-coral)',
  moon: 'var(--b3a-wine)',
  rising: 'var(--b3a-gold)'
};

/* Sun — disc + eight rays */
function SunMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.sun;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: c
  }), /*#__PURE__*/React.createElement("g", {
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18.5",
    y1: "12",
    x2: "21.5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5.5",
    y1: "12",
    x2: "2.5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "18.5",
    x2: "12",
    y2: "21.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5.5",
    x2: "12",
    y2: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16.6",
    y1: "16.6",
    x2: "18.7",
    y2: "18.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.4",
    y1: "7.4",
    x2: "5.3",
    y2: "5.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16.6",
    y1: "7.4",
    x2: "18.7",
    y2: "5.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.4",
    y1: "16.6",
    x2: "5.3",
    y2: "18.7"
  })));
}

/* Moon — crescent via masked disc */
function MoonMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.moon;
  const id = useIdD();
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("mask", {
    id: id
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "8",
    fill: "#000"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8",
    fill: c,
    mask: `url(#${id})`
  }));
}

/* Ascendant / Rising — a sun cresting the horizon */
function RisingMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.rising;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 16a5 5 0 0 1 10 0",
    fill: c,
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "16.4",
    x2: "21",
    y2: "16.4",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    opacity: "0.85"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "6.4",
    x2: "12",
    y2: "4.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6.7",
    y1: "8.4",
    x2: "5.4",
    y2: "7.1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.3",
    y1: "8.4",
    x2: "18.6",
    y2: "7.1"
  })));
}
const MARKS = {
  sun: SunMarkSvg,
  moon: MoonMarkSvg,
  rising: RisingMarkSvg
};
function Luminary({
  body = 'sun',
  size = 24,
  color,
  className = ''
}) {
  const C = MARKS[body] || SunMarkSvg;
  return /*#__PURE__*/React.createElement("span", {
    className: `b3-luminary ${className}`
  }, /*#__PURE__*/React.createElement(C, {
    size: size,
    color: color
  }));
}

/* Constellation divider — moon · rule · (libra) · rule · sun, with
   a couple of twinkling star dots. Decorative. */
function ConstellationDivider({
  variant = 'duo',
  className = '',
  tone
}) {
  const col = tone === 'gold' ? 'var(--b3a-gold)' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-cdiv ${className}`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Luminary, {
    body: "moon",
    size: 20,
    color: col
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-cdiv-rule"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "b3-cdiv-stars",
    viewBox: "0 0 100 8",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw1",
    cx: "26",
    cy: "4",
    r: "1.1",
    fill: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw2",
    cx: "62",
    cy: "3",
    r: "1.4",
    fill: col || 'var(--b3a-coral)'
  }), /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw3",
    cx: "82",
    cy: "5",
    r: "1",
    fill: col || 'var(--b3a-wine)'
  }))), variant === 'trinity' && /*#__PURE__*/React.createElement(Luminary, {
    body: "rising",
    size: 22,
    color: col
  }), variant === 'trinity' && /*#__PURE__*/React.createElement("span", {
    className: "b3-cdiv-rule"
  }), /*#__PURE__*/React.createElement(Luminary, {
    body: "sun",
    size: 20,
    color: col
  }));
}

/* Orbit motif — three luminaries travelling a shared arc. Illustrative,
   used as the "How it works" accent on the Full Reading page. */
function OrbitDiagram({
  className = ''
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: `b3-orbit-dia ${className}`,
    viewBox: "0 0 320 132",
    fill: "none",
    role: "img",
    "aria-label": "Three steps moving along one path: preparation, the live session, and a written summary."
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 104 Q160 4 304 104",
    stroke: "var(--b3a-wine)",
    strokeOpacity: "0.28",
    strokeWidth: "1.5",
    strokeDasharray: "2 7",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "104",
    r: "20",
    fill: "var(--b3a-plum-wash)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(4 92)"
  }, /*#__PURE__*/React.createElement(MoonMarkSvg, {
    size: 24
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "30",
    r: "22",
    fill: "var(--b3a-blush)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(147 17)"
  }, /*#__PURE__*/React.createElement(RisingMarkSvg, {
    size: 26
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "304",
    cy: "104",
    r: "20",
    fill: "#FCEBD6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(292 92)"
  }, /*#__PURE__*/React.createElement(SunMarkSvg, {
    size: 24
  }))));
}
Object.assign(window, {
  Luminary,
  SunMarkSvg,
  MoonMarkSvg,
  RisingMarkSvg,
  ConstellationDivider,
  OrbitDiagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/decor.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/i18n.js
try { (() => {
/* ============================================================
   Big3 Astrology — Trilingual copy (EN / DE / ES)
   VERBATIM from the locked copy files 09 (EN), 10 (DE), 11 (ES).
   The ONLY non-deck strings are `consent.*` — an explicit
   placeholder the design brief asks for (to be wired to the
   Cloudflare Zaraz CMP, which ships its own localized strings).
   ============================================================ */
window.B3A_LOCALES = ['en', 'de', 'es'];
window.B3A_LOCALE_LABEL = {
  en: 'EN',
  de: 'DE',
  es: 'ES'
};

/* Demo Big 3 used to populate the result CONTAINER (brief: design the
   container, the live engine fills real signs). Fixed sample:
   Sun in Leo · Moon in Cancer · Rising in Libra. */

window.B3A_I18N = {
  /* ------------------------------------------------------------------ EN */
  en: {
    htmlLang: 'en',
    nav: {
      home: 'Home',
      reading: 'Full Reading',
      intro_call: '15-min Call',
      about: 'About',
      blog: 'Journal',
      book: 'Book a reading'
    },
    hero: {
      eyebrow: 'Free Big 3 · Sun · Moon · Rising',
      headline_a: 'Your Sun, Moon and Rising —',
      headline_em: 'read by a person, not an algorithm',
      intro: "Enter your birth date, time and place. In a few seconds you'll get your <b>Big&nbsp;3</b> — the three placements that shape how you act, how you feel, and how the world first meets you. Free, and written to actually mean something.",
      note: "No exact birth time? You'll still get your Sun and Moon — we'll help you find the rest.",
      intro_short: "Enter your birth date, time and place. In a few seconds you'll get your <b>Big&nbsp;3</b> — free, and written to actually mean something.",
      intro_lead: "Enter your birth date, time and place — in a few seconds you'll get your <b>Big&nbsp;3</b>.",
      intro_more: 'The three placements that shape how you act, how you feel, and how the world first meets you. Free, and written to actually mean something.',
      more: 'What you get',
      less: 'Show less',
      cta: 'Reveal my Big 3 — free',
      cta_sub: 'Free · about 20 seconds · no sign-up'
    },
    form: {
      heading: 'Get your Big 3 — free',
      date_label: 'Date of birth',
      time_label: 'Time of birth',
      time_optional: 'optional',
      time_helper: "As exact as you can. Don't know it? Leave it blank — you'll still get your Sun and Moon.",
      place_label: 'Place of birth',
      place_helper: 'City and country — start typing and choose from the list.',
      place_placeholder: 'e.g. Zürich, Switzerland',
      country_label: 'Country',
      submit: 'Reveal my Big 3',
      no_time_note: "No birth time entered — we'll show your Sun and Moon. Your Rising needs an exact time."
    },
    talk: {
      eyebrow: 'The real thing',
      heading: 'When you want the real thing, you talk to a human',
      body: 'Your free Big 3 is a glimpse. A <b>full natal reading</b> with Gabriela is the real conversation — your whole chart, prepared in advance and talked through live, with a written summary to keep. This is the reading most people come for.',
      cta_primary: 'Book a full reading — CHF 180',
      cta_secondary: 'Not sure yet? Start with a 15-minute call (CHF 20)'
    },
    why: {
      heading: 'Why Big 3 Astrology',
      items: [{
        t: 'A real astrologer, not an app.',
        b: 'Gabriela reads your chart herself — grounded, specific, and on your side.'
      }, {
        t: 'Psychological, not fortune-telling.',
        b: 'Your chart is a map of patterns and potential, never a fixed fate.'
      }, {
        t: 'In your language.',
        b: 'Readings in English, German and Spanish.'
      }]
    },
    testimonial: {
      quote: "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism.",
      name: 'Anna',
      city: 'Zürich'
    },
    reviews: {
      eyebrow: 'Consultation reviews',
      heading: 'Written in the stars'
    },
    testimonials: [{
      quote: "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism.",
      name: 'Anna',
      city: 'Zürich'
    }, {
      quote: 'She explained my chart in a way that felt thoughtful, grounded, and deeply personal.',
      name: 'Marc',
      city: 'Basel'
    }, {
      quote: 'I felt understood within minutes. The session was calm, sharp, and genuinely helpful.',
      name: 'Sofia',
      city: 'Madrid'
    }, {
      quote: 'What I appreciated most was how practical it felt. It gave me language for things I had felt for years.',
      name: 'Lukas',
      city: 'Winterthur'
    }, {
      quote: 'Warm, intelligent, and very human. I came for curiosity and left with insight I could actually use.',
      name: 'Julia',
      city: 'Barcelona'
    }],
    result: {
      back: 'Edit birth details',
      kicker: 'Your Big 3',
      sample_note: 'Showing a sample reading (Leo · Cancer · Libra). The live engine reads your exact Sun, Moon and Rising from your birth data.',
      sun_heading: 'Your Sun',
      sun_sub: 'What drives you',
      moon_heading: 'Your Moon',
      moon_sub: 'What you need to feel safe',
      rising_heading: 'Your Rising',
      rising_sub: 'How the world first meets you',
      synthesis_heading: 'Putting it together',
      locked_heading: 'Your Rising',
      locked_sub: 'How the world first meets you',
      locked_title: 'Locked without a birth time',
      locked_body: 'Your Rising changes about every two hours, so it needs an exact time. We can track yours down together — it’s one of the first things we’d sort out.',
      cta_heading: "That's your Big 3 — now the real conversation",
      cta_body: 'This is the short version of three placements. Your full chart has far more to say — and a reading turns it into something you can use.',
      cta_primary: 'Book a full reading — CHF 180',
      cta_secondary: 'Prefer to meet first? Book a 15-minute call (CHF 20)'
    },
    footer: {
      tagline: 'Human astrology in English, German and Spanish — read by a real astrologer, not an algorithm.',
      disclaimer: 'Astrology is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your free will.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Legal notice',
      links_terms: 'Terms',
      links_privacy: 'Privacy',
      links_refund: 'Cancellations & refunds',
      nav_label: 'Pages',
      legal_label: 'Legal',
      guides_label: 'Guides',
      contact_label: 'Contact',
      follow_label: 'Follow',
      guide_birth: 'Free birth chart',
      guide_rising: 'Rising sign',
      guide_moon: 'Moon sign',
      email: 'info@big3astrology.com',
      email_label: 'Email us'
    },
    consent: {
      /* PLACEHOLDER — not from copy deck; to be wired to Zaraz CMP */
      title: 'Your privacy',
      body: 'We use cookieless analytics by default — no banner needed for that. With your consent we’d enable ad measurement to reach more people who’d value a reading.',
      accept: 'Accept',
      reject: 'Reject',
      prefs: 'Preferences'
    },
    signs: {
      leo: 'Leo',
      cancer: 'Cancer',
      libra: 'Libra'
    },
    archetype: {
      sun_leo: "With your Sun in Leo, you're meant to shine — warm, generous, and naturally drawn to create and lead. When you're in your element, people light up around you; your encouragement can change how someone sees themselves. The edge: when the spotlight feels like the point, your confidence gets fragile, and you can mistake applause for love. At your best, you use your warmth to make others feel like the main character, not just yourself.",
      moon_cancer: "With your Moon in Cancer, you feel everything deeply — this is the Moon at home. You need belonging and emotional safety the way others need air, and you nurture the people you love almost without thinking. The edge: your moods move in tides, and protecting your soft centre by retreating can leave others guessing. Day to day, you offer a rare kind of care — the sense of being truly looked after, remembered, and held.",
      rising_libra: "With Libra Rising, first impressions of you tend to be warm: poised, easy to talk to, with an eye for beauty and a gift for putting people at ease. You read a room and smooth its edges almost automatically. The edge: in keeping the peace, your own preference can go unspoken — \u201CI don't mind\u201D isn't always true. Underneath the diplomacy is someone who quietly loves to lead, once you let yourself claim it."
    },
    synthesis: ["Put together, your Big 3 aren't three separate labels — they're three layers of one person: what drives you (Sun), what you need to feel safe (Moon), and how the world first meets you (Rising). Here's how yours fit together.", "Your three signs pull from different elements, which makes you genuinely many-sided — you can act, feel, and connect in different registers depending on what a moment needs. The art is letting those sides work together rather than against each other. You're wired to initiate — to start things, set direction, and get others moving. Beginnings come naturally; the practice is seeing them through. Your Sun and Moon are made of different stuff — what drives you outwardly and what soothes you inwardly don't always speak the same language. That can feel like an inner tug-of-war, but it's also what gives you range: two very different strengths in one person.", "This is the short version. A full reading takes all three — and the rest of your chart — and turns it into something you can actually use: where these energies help you, where they trip you up, and what to do about it. When you're ready, that's the conversation to have."],
    synthesisNoTime: ["Without your exact birth time we can't pin down your Rising sign — that one needs the clock, not just the date. But your Sun and Moon already tell you a lot: what drives you, and what you need to feel safe.", "Your Sun and Moon are made of different stuff — what drives you outwardly and what soothes you inwardly don't always speak the same language. That can feel like an inner tug-of-war, but it's also what gives you range: two very different strengths in one person.", "Your Rising — how the world first meets you — is the missing piece, and it's worth finding. We can track down your birth time together; it's one of the first things we'd sort out. When you're ready, let's talk."]
  },
  /* ------------------------------------------------------------------ DE */
  de: {
    htmlLang: 'de',
    nav: {
      home: 'Start',
      reading: 'Beratung',
      intro_call: '15-Min-Gespräch',
      about: 'Über mich',
      blog: 'Journal',
      book: 'Beratung buchen'
    },
    hero: {
      eyebrow: 'Big 3 gratis · Sonne · Mond · Aszendent',
      headline_a: 'Deine Sonne, dein Mond und dein Aszendent —',
      headline_em: 'gelesen von einem Menschen, nicht von einem Algorithmus',
      intro: 'Gib dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort ein. In wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b> — die drei Stellungen, die prägen, wie du handelst, wie du fühlst und wie die Welt dir zuerst begegnet. Kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      note: 'Keine genaue Geburtszeit? Sonne und Mond bekommst du trotzdem — beim Rest helfen wir dir.',
      intro_short: 'Gib dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort ein. In wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b> — kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      intro_lead: 'Gib Geburtsdatum, -zeit und -ort ein — in wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b>.',
      intro_more: 'Die drei Stellungen, die prägen, wie du handelst, wie du fühlst und wie die Welt dir zuerst begegnet. Kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      more: 'Was du bekommst',
      less: 'Weniger',
      cta: 'Meine Big 3 zeigen — kostenlos',
      cta_sub: 'Kostenlos · etwa 20 Sekunden · ohne Anmeldung'
    },
    form: {
      heading: 'Deine Big 3 — kostenlos',
      date_label: 'Geburtsdatum',
      time_label: 'Geburtszeit',
      time_optional: 'optional',
      time_helper: 'So genau wie möglich. Weisst du sie nicht? Lass das Feld leer — Sonne und Mond bekommst du trotzdem.',
      place_label: 'Geburtsort',
      place_helper: 'Stadt und Land — tipp los und wähl aus der Liste.',
      place_placeholder: 'z.\u202FB. Zürich, Schweiz',
      country_label: 'Land',
      submit: 'Meine Big 3 zeigen',
      no_time_note: 'Keine Geburtszeit angegeben — wir zeigen dir Sonne und Mond. Dein Aszendent braucht eine genaue Zeit.'
    },
    talk: {
      eyebrow: 'Das Echte',
      heading: 'Wenn du das Echte willst, sprichst du mit einem Menschen',
      body: 'Deine kostenlosen Big 3 sind ein erster Blick. Eine <b>ausführliche Geburtshoroskop-Beratung</b> bei Gabriela ist das echte Gespräch — dein ganzes Horoskop, im Voraus vorbereitet und live besprochen, mit einer schriftlichen Zusammenfassung zum Behalten. Das ist die Beratung, für die die meisten kommen.',
      cta_primary: 'Ausführliche Beratung buchen — CHF 180',
      cta_secondary: 'Noch unsicher? Starte mit einem 15-Minuten-Gespräch (CHF 20)'
    },
    why: {
      heading: 'Warum Big 3 Astrologie',
      items: [{
        t: 'Eine echte Astrologin, keine App.',
        b: 'Gabriela liest dein Horoskop selbst — geerdet, konkret und auf deiner Seite.'
      }, {
        t: 'Psychologisch, keine Wahrsagerei.',
        b: 'Dein Horoskop ist eine Landkarte von Mustern und Potenzial, niemals ein festes Schicksal.'
      }, {
        t: 'In deiner Sprache.',
        b: 'Beratungen auf Deutsch, Englisch und Spanisch.'
      }]
    },
    testimonial: {
      quote: 'Gabrielas Beratung war überraschend präzise. Ich ging mit echter Klarheit, nicht mit vagem Mystizismus.',
      name: 'Anna',
      city: 'Zürich'
    },
    reviews: {
      eyebrow: 'Erfahrungsberichte',
      heading: 'In den Sternen geschrieben'
    },
    result: {
      back: 'Geburtsdaten ändern',
      kicker: 'Deine Big 3',
      sample_note: 'Beispiel-Reading (Löwe · Krebs · Waage). Die Live-Engine liest deine genaue Sonne, deinen Mond und Aszendenten aus deinen Geburtsdaten.',
      sun_heading: 'Deine Sonne',
      sun_sub: 'Was dich antreibt',
      moon_heading: 'Dein Mond',
      moon_sub: 'Was du brauchst, um dich sicher zu fühlen',
      rising_heading: 'Dein Aszendent',
      rising_sub: 'Wie die Welt dir zuerst begegnet',
      synthesis_heading: 'Alles zusammen',
      locked_heading: 'Dein Aszendent',
      locked_sub: 'Wie die Welt dir zuerst begegnet',
      locked_title: 'Ohne Geburtszeit gesperrt',
      locked_body: 'Dein Aszendent wechselt etwa alle zwei Stunden und braucht darum eine genaue Zeit. Wir können sie gemeinsam aufspüren — das ist eines der ersten Dinge, die wir klären würden.',
      cta_heading: 'Das sind deine Big 3 — jetzt das echte Gespräch',
      cta_body: 'Das ist die Kurzfassung von drei Stellungen. Dein ganzes Horoskop hat viel mehr zu sagen — und eine Beratung macht daraus etwas, das du nutzen kannst.',
      cta_primary: 'Ausführliche Beratung buchen — CHF 180',
      cta_secondary: 'Lieber erst kennenlernen? Buch ein 15-Minuten-Gespräch (CHF 20)'
    },
    footer: {
      tagline: 'Menschliche Astrologie auf Deutsch, Englisch und Spanisch — gelesen von einer echten Astrologin, nicht von einem Algorithmus.',
      disclaimer: 'Astrologie dient der Einsicht und Selbstreflexion. Sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung und hebt deinen freien Willen niemals auf.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Impressum',
      links_terms: 'AGB',
      links_privacy: 'Datenschutz',
      links_refund: 'Stornierung & Rückerstattung',
      nav_label: 'Seiten',
      legal_label: 'Rechtliches',
      guides_label: 'Ratgeber',
      contact_label: 'Kontakt',
      follow_label: 'Folgen',
      guide_birth: 'Geburtshoroskop',
      guide_rising: 'Aszendent',
      guide_moon: 'Mondzeichen',
      email: 'info@big3astrology.com',
      email_label: 'Schreib uns'
    },
    consent: {
      /* PLATZHALTER */
      title: 'Deine Privatsphäre',
      body: 'Wir nutzen standardmässig cookielose Analyse — dafür braucht es kein Banner. Mit deiner Zustimmung würden wir Werbe-Messung aktivieren, um mehr Menschen zu erreichen, denen eine Beratung guttäte.',
      accept: 'Annehmen',
      reject: 'Ablehnen',
      prefs: 'Einstellungen'
    },
    signs: {
      leo: 'Löwe',
      cancer: 'Krebs',
      libra: 'Waage'
    },
    archetype: {
      sun_leo: 'Mit der Sonne im Löwen bist du zum Leuchten gemacht — warm, grosszügig und ganz natürlich fürs Gestalten und Führen geschaffen. Wenn du in deinem Element bist, leben Menschen um dich herum auf; dein Zuspruch kann verändern, wie jemand sich selbst sieht. Die Kante: Wenn das Rampenlicht zum Sinn wird, wird dein Selbstvertrauen brüchig, und du verwechselst Applaus mit Liebe. Im besten Fall machst du mit deiner Wärme andere zur Hauptfigur, nicht nur dich.',
      moon_cancer: 'Mit dem Mond im Krebs fühlst du alles zutiefst — das ist der Mond zuhause. Du brauchst Zugehörigkeit und emotionale Sicherheit wie andere die Luft, und du umsorgst die Menschen, die du liebst, fast ohne nachzudenken. Die Kante: Deine Stimmungen bewegen sich in Gezeiten, und deinen weichen Kern durch Rückzug zu schützen lässt andere rätseln. Im Alltag schenkst du eine seltene Fürsorge — das Gefühl, wirklich umsorgt, erinnert und gehalten zu sein.',
      rising_libra: 'Mit Aszendent Waage ist der erste Eindruck von dir meist warm: ausgeglichen, leicht ansprechbar, mit einem Auge für Schönheit und einer Gabe, Menschen zu entspannen. Du liest einen Raum und glättest seine Kanten fast automatisch. Die Kante: Beim Friedenhalten bleibt deine eigene Vorliebe unausgesprochen — \u201Emir egal\u201C stimmt nicht immer. Unter der Diplomatie steckt jemand, der still gern führt, sobald du dir das zugestehst.'
    },
    synthesis: ['Zusammen sind deine Big 3 keine drei getrennten Etiketten — sie sind drei Schichten eines Menschen: was dich antreibt (Sonne), was du brauchst, um dich sicher zu fühlen (Mond), und wie die Welt dir zuerst begegnet (Aszendent). So passen deine zusammen.', 'Deine drei Zeichen schöpfen aus verschiedenen Elementen, was dich wirklich vielseitig macht — du kannst handeln, fühlen und dich verbinden, je nachdem, was ein Moment braucht. Die Kunst ist, diese Seiten zusammenwirken statt gegeneinander arbeiten zu lassen. Du bist fürs Initiieren gemacht — Dinge anzustossen, Richtung zu geben und andere in Bewegung zu bringen. Anfänge fallen dir leicht; die Übung ist, sie zu Ende zu bringen. Deine Sonne und dein Mond sind aus verschiedenem Stoff — was dich nach aussen antreibt und was dich innen beruhigt, sprechen nicht immer dieselbe Sprache. Das kann sich wie ein inneres Tauziehen anfühlen, gibt dir aber auch Bandbreite: zwei sehr verschiedene Stärken in einem Menschen.', 'Das ist die Kurzfassung. Eine ausführliche Beratung nimmt alle drei — und den Rest deines Horoskops — und macht daraus etwas, das du wirklich nutzen kannst: wo diese Energien dir helfen, wo sie dich stolpern lassen und was du damit tun kannst. Wenn du bereit bist, ist das das Gespräch dazu.'],
    synthesisNoTime: ['Ohne deine genaue Geburtszeit können wir deinen Aszendenten nicht festlegen — der braucht die Uhr, nicht nur das Datum. Aber deine Sonne und dein Mond erzählen schon viel: was dich antreibt und was du brauchst, um dich sicher zu fühlen.', 'Deine Sonne und dein Mond sind aus verschiedenem Stoff — was dich nach aussen antreibt und was dich innen beruhigt, sprechen nicht immer dieselbe Sprache. Das kann sich wie ein inneres Tauziehen anfühlen, gibt dir aber auch Bandbreite: zwei sehr verschiedene Stärken in einem Menschen.', 'Dein Aszendent — wie die Welt dir zuerst begegnet — ist das fehlende Stück, und es lohnt sich, es zu finden. Wir können deine Geburtszeit gemeinsam aufspüren; das ist eines der ersten Dinge, die wir klären würden. Wenn du bereit bist, lass uns reden.']
  },
  /* ------------------------------------------------------------------ ES */
  es: {
    htmlLang: 'es',
    nav: {
      home: 'Inicio',
      reading: 'Lectura',
      intro_call: 'Llamada de 15 min',
      about: 'Sobre mí',
      blog: 'Diario',
      book: 'Reservar lectura'
    },
    hero: {
      eyebrow: 'Big 3 gratis · Sol · Luna · Ascendente',
      headline_a: 'Tu Sol, tu Luna y tu Ascendente:',
      headline_em: 'leídos por una persona, no por un algoritmo',
      intro: 'Introduce tu fecha, hora y lugar de nacimiento. En unos segundos tendrás tus <b>Big&nbsp;3</b>: las tres posiciones que dan forma a cómo actúas, cómo sientes y cómo te encuentra el mundo al principio. Gratis, y escritas para que de verdad signifiquen algo.',
      note: '¿No sabes la hora exacta? Aun así tendrás tu Sol y tu Luna; con el resto te ayudamos.',
      intro_short: 'Introduce tu fecha, hora y lugar de nacimiento. En unos segundos tendrás tus <b>Big&nbsp;3</b> — gratis, y escritas para que de verdad signifiquen algo.',
      intro_lead: 'Introduce fecha, hora y lugar de nacimiento — en unos segundos tendrás tus <b>Big&nbsp;3</b>.',
      intro_more: 'Las tres posiciones que dan forma a cómo actúas, cómo sientes y cómo te encuentra el mundo al principio. Gratis, y escritas para que de verdad signifiquen algo.',
      more: 'Qué obtienes',
      less: 'Menos',
      cta: 'Ver mis Big 3 — gratis',
      cta_sub: 'Gratis · unos 20 segundos · sin registro'
    },
    form: {
      heading: 'Tus Big 3 — gratis',
      date_label: 'Fecha de nacimiento',
      time_label: 'Hora de nacimiento',
      time_optional: 'opcional',
      time_helper: 'Lo más exacta posible. ¿No la sabes? Déjala en blanco: aun así tendrás tu Sol y tu Luna.',
      place_label: 'Lugar de nacimiento',
      place_helper: 'Ciudad y país: empieza a escribir y elige de la lista.',
      place_placeholder: 'p.\u202Fej. Zúrich, Suiza',
      country_label: 'País',
      submit: 'Ver mis Big 3',
      no_time_note: 'No has indicado la hora de nacimiento: te mostramos el Sol y la Luna. Tu Ascendente necesita una hora exacta.'
    },
    talk: {
      eyebrow: 'Lo de verdad',
      heading: 'Cuando quieras lo de verdad, hablas con una persona',
      body: 'Tus Big 3 gratis son un vistazo. Una <b>lectura completa de tu carta astral</b> con Gabriela es la conversación de verdad: tu carta entera, preparada de antemano y conversada en directo, con un resumen escrito para conservar. Es la lectura por la que vienen la mayoría.',
      cta_primary: 'Reservar una lectura completa — CHF 180',
      cta_secondary: '¿Aún con dudas? Empieza con una llamada de 15 minutos (CHF 20)'
    },
    why: {
      heading: 'Por qué Astrología Big 3',
      items: [{
        t: 'Una astróloga real, no una app.',
        b: 'Gabriela lee tu carta ella misma: con los pies en la tierra, concreta y de tu lado.'
      }, {
        t: 'Psicológica, no adivinación.',
        b: 'Tu carta es un mapa de patrones y potencial, nunca un destino fijo.'
      }, {
        t: 'En tu idioma.',
        b: 'Lecturas en español, inglés y alemán.'
      }]
    },
    testimonial: {
      quote: 'La lectura de Gabriela fue sorprendentemente precisa. Salí con claridad real, no con misticismo vago.',
      name: 'Anna',
      city: 'Zúrich'
    },
    reviews: {
      eyebrow: 'Reseñas de consultas',
      heading: 'Escrito en las estrellas'
    },
    result: {
      back: 'Editar datos de nacimiento',
      kicker: 'Tus Big 3',
      sample_note: 'Lectura de ejemplo (Leo · Cáncer · Libra). El motor en vivo lee tu Sol, tu Luna y tu Ascendente exactos a partir de tus datos de nacimiento.',
      sun_heading: 'Tu Sol',
      sun_sub: 'Lo que te impulsa',
      moon_heading: 'Tu Luna',
      moon_sub: 'Lo que necesitas para sentirte seguro',
      rising_heading: 'Tu Ascendente',
      rising_sub: 'Cómo te encuentra el mundo al principio',
      synthesis_heading: 'Todo junto',
      locked_heading: 'Tu Ascendente',
      locked_sub: 'Cómo te encuentra el mundo al principio',
      locked_title: 'Bloqueado sin la hora de nacimiento',
      locked_body: 'Tu Ascendente cambia más o menos cada dos horas, así que necesita una hora exacta. Podemos rastrear la tuya juntos: es de las primeras cosas que resolveríamos.',
      cta_heading: 'Esos son tus Big 3: ahora la conversación de verdad',
      cta_body: 'Esta es la versión corta de tres posiciones. Tu carta completa tiene mucho más que decir, y una lectura la convierte en algo que puedes usar.',
      cta_primary: 'Reservar una lectura completa — CHF 180',
      cta_secondary: '¿Prefieres conocernos antes? Reserva una llamada de 15 minutos (CHF 20)'
    },
    footer: {
      tagline: 'Astrología humana en español, inglés y alemán: leída por una astróloga real, no por un algoritmo.',
      disclaimer: 'La astrología se ofrece para la introspección y la reflexión personal. No es asesoramiento médico, psicológico, financiero ni legal, y nunca anula tu libre albedrío.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Aviso legal',
      links_terms: 'Términos',
      links_privacy: 'Privacidad',
      links_refund: 'Cancelaciones y reembolsos',
      nav_label: 'Páginas',
      legal_label: 'Legal',
      guides_label: 'Guías',
      contact_label: 'Contacto',
      follow_label: 'Síguenos',
      guide_birth: 'Carta natal gratis',
      guide_rising: 'Ascendente',
      guide_moon: 'Signo lunar',
      email: 'info@big3astrology.com',
      email_label: 'Escríbenos'
    },
    consent: {
      /* MARCADOR DE POSICIÓN */
      title: 'Tu privacidad',
      body: 'Usamos analítica sin cookies por defecto: para eso no hace falta banner. Con tu consentimiento activaríamos la medición de anuncios para llegar a más personas a quienes les vendría bien una lectura.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      prefs: 'Preferencias'
    },
    signs: {
      leo: 'Leo',
      cancer: 'Cáncer',
      libra: 'Libra'
    },
    archetype: {
      sun_leo: 'Con el Sol en Leo, estás hecho para brillar: cálido, generoso y atraído de forma natural a crear y liderar. Cuando estás en tu elemento, la gente se enciende a tu alrededor; tu aliento puede cambiar cómo alguien se ve a sí mismo. El punto: cuando el foco se vuelve el objetivo, tu confianza se vuelve frágil, y puedes confundir el aplauso con el amor. En tu mejor versión, usas tu calidez para hacer protagonistas a los demás, no solo a ti.',
      moon_cancer: 'Con la Luna en Cáncer, lo sientes todo profundamente: esta es la Luna en casa. Necesitas pertenencia y seguridad emocional como otros necesitan el aire, y cuidas a quienes amas casi sin pensarlo. El punto: tus estados de ánimo se mueven como mareas, y proteger tu centro blando retirándote deja a otros adivinando. En el día a día, ofreces un cuidado poco común: la sensación de ser de verdad atendido, recordado y sostenido.',
      rising_libra: 'Con Ascendente Libra, la primera impresión de ti suele ser cálida: equilibrado, fácil de tratar, con ojo para la belleza y un don para poner a la gente a gusto. Lees una sala y suavizas sus aristas casi en automático. El punto: al mantener la paz, tu propia preferencia queda sin decir; «me da igual» no siempre es verdad. Bajo la diplomacia hay alguien que en silencio disfruta de liderar, en cuanto te lo permites.'
    },
    synthesis: ['Juntos, tus Big 3 no son tres etiquetas separadas, sino tres capas de una misma persona: lo que te impulsa (Sol), lo que necesitas para sentirte seguro (Luna) y cómo te encuentra el mundo al principio (Ascendente). Así encajan los tuyos.', 'Tus tres signos beben de elementos distintos, lo que te hace de verdad polifacético: puedes actuar, sentir y conectar en registros diferentes según lo que pida el momento. El arte está en dejar que esas facetas trabajen juntas, no una contra otra. Estás hecho para iniciar: arrancar cosas, marcar la dirección y poner a otros en marcha. Los comienzos te salen naturales; la práctica es llevarlos hasta el final. Tu Sol y tu Luna están hechos de materias distintas: lo que te impulsa hacia fuera y lo que te calma por dentro no siempre hablan el mismo idioma. Puede sentirse como un tira y afloja interior, pero también es lo que te da amplitud: dos fortalezas muy distintas en una persona.', 'Esta es la versión corta. Una lectura completa toma los tres —y el resto de tu carta— y los convierte en algo que de verdad puedes usar: dónde te ayudan estas energías, dónde te hacen tropezar y qué hacer al respecto. Cuando estés listo, esa es la conversación.'],
    synthesisNoTime: ['Sin tu hora exacta de nacimiento no podemos fijar tu Ascendente: ese necesita el reloj, no solo la fecha. Pero tu Sol y tu Luna ya dicen mucho: lo que te impulsa y lo que necesitas para sentirte seguro.', 'Tu Sol y tu Luna están hechos de materias distintas: lo que te impulsa hacia fuera y lo que te calma por dentro no siempre hablan el mismo idioma. Puede sentirse como un tira y afloja interior, pero también es lo que te da amplitud: dos fortalezas muy distintas en una persona.', 'Tu Ascendente —cómo te encuentra el mundo al principio— es la pieza que falta, y vale la pena hallarla. Podemos rastrear tu hora de nacimiento juntos; es de las primeras cosas que resolveríamos. Cuando estés listo, hablemos.']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/i18n.js", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/legal.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Legal pages
   Legal notice · Terms · Cancellations & refunds · Privacy.
   Simple, readable long-form template (no bands). Copy is
   VERBATIM from the EN source set (09_EN v1.0).
   ============================================================ */
const {
  useEffect: useEffectL
} = React;
function useTopL() {
  useEffectL(() => {
    window.scrollTo(0, 0);
  }, []);
}
function LegalLayout({
  t,
  eyebrow,
  title,
  onHome,
  children
}) {
  useTopL();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page b3-legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-legal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "b3-page-back-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-page-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), t.nav.home))));
}
const MAIL = 'info@big3astrology.com';
function Mail() {
  return /*#__PURE__*/React.createElement("a", {
    href: `mailto:${MAIL}`
  }, MAIL);
}

/* ---- Legal notice ---- */
function LegalNoticePage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_legal,
    title: "Legal Notice"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Big Astrology GmbH"), /*#__PURE__*/React.createElement("br", null), "R\xE4nkestrasse 21", /*#__PURE__*/React.createElement("br", null), "8700 K\xFCsnacht ZH", /*#__PURE__*/React.createElement("br", null), "Switzerland"), /*#__PURE__*/React.createElement("p", null, "Email: ", /*#__PURE__*/React.createElement(Mail, null)), /*#__PURE__*/React.createElement("p", null, "Managing Director: Gabriela Brecht", /*#__PURE__*/React.createElement("br", null), "Commercial register / VAT: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "[UID CHE-___.___.___ \u2014 to be added once the GmbH is registered]")), /*#__PURE__*/React.createElement("p", null, "Responsible for content: Gabriela Brecht, address as above."));
}

/* ---- Terms ---- */
function TermsPage({
  t,
  go,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_terms,
    title: "Terms & Conditions"
  }, /*#__PURE__*/React.createElement("h2", null, "1. Provider"), /*#__PURE__*/React.createElement("p", null, "These terms govern services offered by Big Astrology GmbH, R\xE4nkestrasse 21, 8700 K\xFCsnacht ZH, Switzerland (\u201Cwe\u201D, \u201Cus\u201D). Contact: ", /*#__PURE__*/React.createElement(Mail, null), "."), /*#__PURE__*/React.createElement("h2", null, "2. Services"), /*#__PURE__*/React.createElement("p", null, "We offer astrological readings: a free Big-3 overview, a 15-minute intro call (CHF 20), a full natal reading (CHF 180), and a relationship reading (CHF 250). Readings are delivered live over Google Meet, with a written summary where stated."), /*#__PURE__*/React.createElement("h2", null, "3. Bookings & payment"), /*#__PURE__*/React.createElement("p", null, "Bookings are made through our scheduling provider. Payment is due at booking, by card or TWINT, processed by our payment provider. Prices are in Swiss francs (CHF) and include any applicable Swiss VAT."), /*#__PURE__*/React.createElement("h2", null, "4. Cancellations & rescheduling"), /*#__PURE__*/React.createElement("p", null, "See our ", /*#__PURE__*/React.createElement("a", {
    href: "#cancellations-refunds",
    onClick: e => {
      e.preventDefault();
      go('cancellations-refunds');
    }
  }, "Cancellations & Refunds"), " page."), /*#__PURE__*/React.createElement("h2", null, "5. Nature of services \u2014 important"), /*#__PURE__*/React.createElement("p", null, "Our readings are provided for insight, reflection and entertainment. They are ", /*#__PURE__*/React.createElement("strong", null, "not"), " medical, psychological, financial or legal advice, and are no substitute for professional care. You remain responsible for your own decisions. Astrology does not predict or determine the future and never overrides your free will."), /*#__PURE__*/React.createElement("h2", null, "6. Liability"), /*#__PURE__*/React.createElement("p", null, "To the extent permitted by law, our liability is limited to intent and gross negligence. We are not liable for decisions you make based on a reading."), /*#__PURE__*/React.createElement("h2", null, "7. Governing law"), /*#__PURE__*/React.createElement("p", null, "Swiss law applies. Place of jurisdiction is K\xFCsnacht ZH, Switzerland, to the extent permitted by law."));
}

/* ---- Cancellations & refunds ---- */
function RefundsPage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_refund,
    title: "Cancellations & Refunds"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Reschedule:"), " free of charge up to 24 hours before your session, using the link in your confirmation email."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Cancel:"), " at least 24 hours before your session for a full refund. Within 24 hours the fee is non-refundable, as the preparation time has been reserved for you."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "No-show:"), " if you miss your session without notice, the fee is non-refundable."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "The 15-minute intro call (CHF 20)"), " is non-refundable once it has taken place and is not credited toward other readings."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Problems on our side:"), " if we need to cancel or reschedule, you're offered a new time or a full refund \u2014 your choice.")), /*#__PURE__*/React.createElement("p", null, "Questions? Email ", /*#__PURE__*/React.createElement(Mail, null), "."));
}

/* ---- Privacy ---- */
function PrivacyPage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_privacy,
    title: "Privacy"
  }, /*#__PURE__*/React.createElement("p", null, "We keep this simple and collect as little as possible."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Your birth details"), " (date, time, place) are used only to calculate your Big 3 and to prepare your reading. We don't sell them or share them for advertising."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Booking & payment"), " are handled by our scheduling and payment providers, who process your name, email and payment data to deliver the service."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Analytics:"), " we use privacy-friendly, cookieless analytics. We don't use advertising cookies or cross-site tracking, so there's no cookie banner to click."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Your rights:"), " email ", /*#__PURE__*/React.createElement(Mail, null), " to ask what we hold about you, or to have it corrected or deleted.")), /*#__PURE__*/React.createElement("p", null, "Controller: Big Astrology GmbH, R\xE4nkestrasse 21, 8700 K\xFCsnacht ZH, Switzerland."));
}
Object.assign(window, {
  LegalNoticePage,
  TermsPage,
  RefundsPage,
  PrivacyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/legal.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/pages.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Content page views
   About · Full natal reading · 15-min call · Relationship ·
   Journal index · 3 pillar articles.
   Copy is VERBATIM from the EN source set (09_EN v1.0) — not
   rewritten. Decorative brand bands via PageHeader / Band.
   ============================================================ */
const {
  useEffect: useEffectP
} = React;

/* in-prose SPA link */
function A({
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick();
    }
  }, children);
}

/* scroll to top whenever a page mounts */
function useTop() {
  useEffectP(() => {
    window.scrollTo(0, 0);
  }, []);
}

/* back-to-home affordance */
function PageBack({
  label,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-page-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), label));
}

/* ============================================================ ABOUT */
function AboutPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "about",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.about,
    title: "Gabriela Brecht"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--b3a-ink)',
      lineHeight: 1.45
    }
  }, "I read charts the way I once read teams \u2014 looking for what's really going on underneath, and what wants to happen next."), /*#__PURE__*/React.createElement("p", null, "Before astrology was my work, it was the lens I never put down. I spent years in business and hold two degrees \u2014 one in Switzerland, one from Cambridge \u2014 but the same question always pulled at me: ", /*#__PURE__*/React.createElement("em", null, "why do we move the way we move, and what are we each here to grow into?")), /*#__PURE__*/React.createElement("p", null, "Today I'm a ", /*#__PURE__*/React.createElement("strong", null, "psychological astrologer"), ": I treat your chart as a map of patterns, gifts and growth edges \u2014 never a fixed fate. My training is in psychological and archetypal astrology, including the ", /*#__PURE__*/React.createElement("strong", null, "Debra Silverman"), " method (USA)."), /*#__PURE__*/React.createElement("p", null, "Born in Caracas, living in Z\xFCrich, I work in ", /*#__PURE__*/React.createElement("strong", null, "English, German and Spanish"), " \u2014 drawn to where astrology meets real life: relationships, decisions, and how people work together."), /*#__PURE__*/React.createElement("p", null, "If that resonates, your Big 3 is a good first step. When you want the full picture, ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "let's talk"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, "Astrology here is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your own free will.")), /*#__PURE__*/React.createElement("aside", {
    className: "b3-about-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${window.B3A_ASSET}/brand/gabriela-portrait.webp`,
    alt: "Astrologer Gabriela Brecht",
    width: "860",
    height: "860",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("p", {
    className: "b3-portrait-cap"
  }, "Gabriela Brecht, psychological astrologer, Z\xFCrich.")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ FULL NATAL READING (CHF 180) */
function ReadingPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "reading"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '15ch'
    }
  }, "Your full natal reading ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 180")), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "The whole picture, read by a human and prepared just for you. Not a generated report \u2014 real preparation, a real conversation, and something to take away. This is the reading most people are really looking for."), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement(OrbitDiagram, {
    className: "b3-included-orbit"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "90+ minutes of preparation"), " before we meet \u2014 I study your chart in depth so our time together is about ", /*#__PURE__*/React.createElement("em", null, "you"), ", not setup."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A 60-minute live session"), " on Google Meet to talk it through, ask anything, and connect it to your real life."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A written summary"), " afterwards, so the insight stays with you long after the call.")), /*#__PURE__*/React.createElement("p", null, "This is psychological astrology: your strengths, your patterns, your growth edges \u2014 and how to actually work with them. You leave understanding yourself a little more clearly than you did before."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "Ready when you are"), /*#__PURE__*/React.createElement("p", null, "Reading for two? Add a ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('relationship')
  }, "relationship reading (CHF 250 total)"), ".")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ 15-MIN CALL (CHF 20, secondary) */
/* On-brand celestial illustration: orbit rings + a 15-minute quarter-arc
   accent, a crescent moon & a small sun "meeting". Pure primitives. */
function CallVisual() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "b3-call-art",
    viewBox: "0 0 260 260",
    role: "img",
    "aria-label": "A celestial illustration of a short fifteen-minute window between the moon and sun",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "b3callbg",
    cx: "50%",
    cy: "42%",
    r: "62%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--b3a-blush)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--b3a-sand)"
  })), /*#__PURE__*/React.createElement("mask", {
    id: "b3crescent"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "260",
    height: "260",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "142",
    cy: "120",
    r: "30",
    fill: "#000"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "118",
    fill: "url(#b3callbg)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "104",
    stroke: "var(--b3a-wine)",
    strokeOpacity: "0.16",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "78",
    stroke: "var(--b3a-gold-deep)",
    strokeOpacity: "0.30",
    strokeWidth: "1",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 26 A104 104 0 0 1 234 130",
    stroke: "var(--b3a-coral)",
    strokeWidth: "4.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "26",
    r: "4",
    fill: "var(--b3a-gold-deep)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "234",
    cy: "130",
    r: "5.5",
    fill: "var(--b3a-coral)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "120",
    r: "34",
    fill: "var(--b3a-wine)",
    mask: "url(#b3crescent)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--b3a-gold-deep)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "182",
    y1: "84",
    x2: "182",
    y2: "74"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "182",
    y1: "106",
    x2: "182",
    y2: "116"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "171",
    y1: "95",
    x2: "161",
    y2: "95"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "193",
    y1: "95",
    x2: "203",
    y2: "95"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "174",
    y1: "87",
    x2: "167",
    y2: "80"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "190",
    y1: "103",
    x2: "197",
    y2: "110"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "190",
    y1: "87",
    x2: "197",
    y2: "80"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "174",
    y1: "103",
    x2: "167",
    y2: "110"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "182",
    cy: "95",
    r: "9",
    fill: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "78",
    cy: "86",
    r: "2.2",
    fill: "var(--b3a-gold-deep)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "92",
    cy: "184",
    r: "1.8",
    fill: "var(--b3a-wine)",
    fillOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "186",
    cy: "176",
    r: "2.4",
    fill: "var(--b3a-coral)",
    fillOpacity: "0.75"
  }));
}
function CallPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-call-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.intro_call), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '16ch'
    }
  }, "Not sure yet? Let's meet first ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 20")), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "If a full reading feels like a big first step, start smaller. In 15 minutes you'll get a real feel for how I work and a mini-reading of something live in your chart right now \u2014 so you can decide about a full reading with no guesswork.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-call-aside",
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement(CallVisual, null), /*#__PURE__*/React.createElement("span", {
    className: "b3-call-art-cap"
  }, "A short 15-minute window"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "You get"), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A focused 15-minute video call on Google Meet"), /*#__PURE__*/React.createElement("li", null, "A mini-reading on one thing that matters to you now"), /*#__PURE__*/React.createElement("li", null, "An honest sense of whether a full reading is right for you")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Good to know:"), " this call is its own thing \u2014 the CHF 20 isn't credited toward a full reading. It's simply the easiest way to meet me before you commit. Ready for the full picture instead? ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Book a full reading (CHF 180)"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--lg",
    onClick: onBook
  }, "Book the 15-minute call"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ RELATIONSHIP READING (CHF 250) */
function RelationshipPage({
  t,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '17ch'
    }
  }, "Relationship & couples reading ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 250")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure",
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Two charts, side by side. We look at how you and another person actually meet \u2014 where you flow easily, where you stretch each other, and what each of you needs to feel met and understood."), /*#__PURE__*/React.createElement("p", null, "It's the full natal reading, extended to two people: the same depth of preparation, a live 60-minute session on Google Meet, and a written summary \u2014 with a second chart added for ", /*#__PURE__*/React.createElement("strong", null, "CHF 70"), " on top of the standard CHF 180."), /*#__PURE__*/React.createElement("p", null, "Good for couples, but just as valuable for any pairing that matters: a co-founder, a parent, a close friend.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a relationship reading")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ JOURNAL INDEX */
const PILLARS = [{
  route: 'free-birth-chart',
  slot: 'birthchart',
  kicker: 'Birth chart',
  title: 'Free Birth Chart: Your Big 3, Explained',
  blurb: 'What a birth chart is, why the Big 3 carry most of the signal, and how to get yours free.'
}, {
  route: 'rising-sign',
  slot: 'rising',
  kicker: 'Rising sign',
  title: 'Calculate Your Rising Sign — and What It Means',
  blurb: 'How the world first meets you, why it needs an exact birth time, and how to find yours.'
}, {
  route: 'moon-sign',
  slot: 'moon',
  kicker: 'Moon sign',
  title: 'Calculate Your Moon Sign — and What It Means',
  blurb: 'Your emotional inner world — what it means, and why you usually don\u2019t need a birth time.'
}];
function JournalPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, "\u2736 ", t.nav.blog), /*#__PURE__*/React.createElement("h1", null, "Guides to your Big 3"), /*#__PURE__*/React.createElement("p", null, "Answer-first reads on your birth chart, your Rising and your Moon \u2014 then calculate yours in seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-grid"
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.route,
    className: "b3-jcard",
    onClick: () => go(p.route)
  }, /*#__PURE__*/React.createElement(Band, {
    slot: p.slot
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-jcard-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-jcard-kicker"
  }, p.kicker), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.blurb), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Read the guide", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* shared FAQ accordion */
function Faq({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, it.q, /*#__PURE__*/React.createElement("span", {
    className: "icn",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ans"
  }, it.a))));
}

/* shared inline CTA → full reading */
function PillarCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "When you want the real thing"), /*#__PURE__*/React.createElement("p", null, "Your Big 3 is the start. A full natal reading turns your whole chart into something you can use.")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading \u2014 CHF 180"));
}
const DISCLAIMER = 'Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.';

/* ============================================================ PILLAR 1 — FREE BIRTH CHART */
function FreeBirthChartPage({
  t,
  go,
  onForm,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "birthchart"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, t.nav.blog), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '8px',
      maxWidth: '18ch'
    }
  }, "Free Birth Chart: Your Big 3, Explained")), /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer",
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "a birth chart is a map of the sky at the exact moment you were born. The three most important points in it are your ", /*#__PURE__*/React.createElement("strong", null, "Sun, Moon and Rising sign"), " \u2014 your \u201CBig 3.\u201D You can get all three free here in a few seconds by entering your birth date, time and place. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Get your Big 3 free.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("p", null, "A full birth chart has dozens of pieces \u2014 planets, signs, houses, angles. But you don't need all of it to learn something real about yourself. The Big 3 carry most of the signal, which is why they're the right place to start."), /*#__PURE__*/React.createElement("h2", null, "What is a birth chart?"), /*#__PURE__*/React.createElement("p", null, "A birth chart (or natal chart) is a snapshot of where the Sun, Moon and planets were, from your point of view on Earth, at your moment of birth. Because the sky is always moving, your chart is essentially unique \u2014 even people born the same day in different places have different Rising signs."), /*#__PURE__*/React.createElement("p", null, "To calculate it accurately you need three things:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Date of birth"), " \u2014 sets the Sun and most planet positions."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Time of birth"), " \u2014 sets your Rising sign and the houses. This is the one people most often miss."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Place of birth"), " \u2014 sets the chart to your spot on Earth.")), /*#__PURE__*/React.createElement("h2", null, "Your Big 3: the three that matter most"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sun \u2014 what drives you."), " Your core identity and what lights you up. The sign you already know (\u201CI'm a Leo\u201D)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Moon \u2014 what you need to feel safe."), " Your inner, emotional world: how you feel, soothe, and recharge."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Rising (Ascendant) \u2014 how the world first meets you."), " The impression you make and your instinctive way of approaching life.")), /*#__PURE__*/React.createElement("p", null, "Together they explain why two people of the \u201Csame sign\u201D can feel completely different. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "For the Sun and Moon, usually no \u2014 your date is enough. For your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign, yes"), ": it changes roughly every two hours, so even a rough time helps and an exact one is best. Don't know it? You'll still get your Sun and Moon, and we can help you track the time down for a full reading."), /*#__PURE__*/React.createElement("h2", null, "What a free chart can and can't tell you"), /*#__PURE__*/React.createElement("p", null, "A free Big-3 is a genuine, accurate starting point \u2014 but it's a summary, not the whole story. It won't show how your placements interact, where your strengths and friction really sit, or what to do with any of it. That's the job of a full reading: a real astrologer taking your whole chart and turning it into something useful. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Is the birth chart really free?',
      a: 'Yes — your Big 3 (Sun, Moon and Rising) and a short synthesis are free, with no sign-up.'
    }, {
      q: 'Is this accurate?',
      a: 'Yes. We calculate real planetary positions for your date, time and place — the same astronomy professional astrologers use.'
    }, {
      q: "What if I don't know my birth time?",
      a: "You'll get your Sun and Moon. Your Rising needs an exact time — we can help you find it."
    }, {
      q: "What's the difference between this and a reading?",
      a: 'The free chart is a summary you read yourself. A reading is a live conversation with an astrologer who interprets your whole chart for your actual life.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 2 — RISING SIGN */
function RisingPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "rising",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.blog,
    title: "Calculate Your Rising Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Rising sign (or Ascendant) is the zodiac sign that was coming up over the horizon at the exact minute you were born. To calculate it you need your birth date, ", /*#__PURE__*/React.createElement("strong", null, "exact time"), ", and place. Enter them here and get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Rising sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Rising sign?"), /*#__PURE__*/React.createElement("p", null, "While your Sun sign is about who you are at your core, your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign is about how you come across"), " \u2014 your instinctive style, your first impression, the \u201Cfront door\u201D people walk through to reach you. It also sets the structure of your whole chart (the houses), which is why astrologers care about it so much."), /*#__PURE__*/React.createElement("h2", null, "Why you need your exact birth time"), /*#__PURE__*/React.createElement("p", null, "The Ascendant moves fast \u2014 through all twelve signs in 24 hours, so roughly ", /*#__PURE__*/React.createElement("strong", null, "one new sign every two hours"), ". That's why your date alone can't give it to you, and why a birth time that's off by even an hour can land you on the wrong sign. With an exact time, your Rising is accurate; with only an approximate time, treat the result as a strong guess."), /*#__PURE__*/React.createElement("h3", null, "How to find your birth time"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check your ", /*#__PURE__*/React.createElement("strong", null, "birth certificate"), " \u2014 in many countries the time is recorded."), /*#__PURE__*/React.createElement("li", null, "Ask a ", /*#__PURE__*/React.createElement("strong", null, "parent or close family member"), "."), /*#__PURE__*/React.createElement("li", null, "Request your ", /*#__PURE__*/React.createElement("strong", null, "birth record"), " from the hospital or civil registry where you were born.")), /*#__PURE__*/React.createElement("h2", null, "What your Rising sign means"), /*#__PURE__*/React.createElement("p", null, "Your Rising colours everything from your body language to how you handle new situations. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Rising (Aries, Leo, Sagittarius):"), " you come across as direct, warm, energetic."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Rising (Taurus, Virgo, Capricorn):"), " you come across as grounded, capable, composed."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Rising (Gemini, Libra, Aquarius):"), " you come across as sociable, curious, easy to talk to."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Rising (Cancer, Scorpio, Pisces):"), " you come across as sensitive, magnetic, a little harder to read.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a fuller, personal description of your specific Rising sign. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Rising, Sun and Moon \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Rising is one third of your Big 3. Paired with your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Moon"), " (what you need), it explains the gap between how people first read you and who you actually are underneath. A full reading connects all three \u2014 and the rest of your chart \u2014 into something you can use. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Rising sign without a birth time?',
      a: "Not reliably. The Ascendant changes about every two hours, so an exact time is needed. Without it, we'll show your Sun and Moon instead."
    }, {
      q: 'Is Rising sign the same as Ascendant?',
      a: 'Yes — “Rising sign” and “Ascendant” are two names for the same thing.'
    }, {
      q: 'Why is my Rising sign different from my Sun sign?',
      a: "They measure different things: your Sun is your core self; your Rising is your outward style and the moment-by-moment setup of your chart. Most people's differ."
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 3 — MOON SIGN */
function MoonPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "moon",
    zone: "left",
    tone: "light",
    eyebrow: t.nav.blog,
    title: "Calculate Your Moon Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Moon sign is the zodiac sign the Moon was in when you were born. It represents your emotional inner world \u2014 what you feel and what you need to feel safe. Enter your birth date and place to get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Moon sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Moon sign?"), /*#__PURE__*/React.createElement("p", null, "If your Sun sign is who you are in the daylight, your ", /*#__PURE__*/React.createElement("strong", null, "Moon sign is who you are in private"), " \u2014 your feelings, your instincts, what soothes you and what you need from the people closest to you. It's often the placement people recognise themselves in most once they read it."), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "Usually not. The Moon moves through a sign in about ", /*#__PURE__*/React.createElement("strong", null, "two to two-and-a-half days"), ", so your birth date is normally enough to place it. The exception: if you were born on a day the Moon changed signs, the time matters \u2014 when that's the case, we'll let you know. (Your ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " sign is the one that always needs an exact time.)"), /*#__PURE__*/React.createElement("h2", null, "What your Moon sign means"), /*#__PURE__*/React.createElement("p", null, "Your Moon describes your emotional style \u2014 how you process feelings, comfort yourself, and bond with others. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Moon (Aries, Leo, Sagittarius):"), " feelings are fast, warm, expressive."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Moon (Taurus, Virgo, Capricorn):"), " feelings are steady, practical, grounded."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Moon (Gemini, Libra, Aquarius):"), " feelings are processed by thinking and talking."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Moon (Cancer, Scorpio, Pisces):"), " feelings run deep, intuitive, and strong.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a personal description of your specific Moon sign \u2014 including its strengths and its growth edge. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Why your Moon sign can surprise you"), /*#__PURE__*/React.createElement("p", null, "Many people relate to their Moon sign more than their Sun. That's because your Sun sign is often the self you show, while your Moon is the self you actually feel \u2014 and the two aren't always the same. Seeing them side by side is where it gets interesting."), /*#__PURE__*/React.createElement("h2", null, "Moon, Sun and Rising \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Moon is one third of your Big 3, alongside your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " (how the world meets you). A full reading takes all three \u2014 and the rest of your chart \u2014 and turns it into practical insight about your relationships, your patterns, and what you need to thrive. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Moon sign without a birth time?',
      a: 'Usually yes — the date is normally enough. Only if you were born on a day the Moon changed signs does the time matter.'
    }, {
      q: 'Why does my Moon sign feel more “me” than my Sun sign?',
      a: 'Because your Moon is your private, emotional self, while your Sun is often the self you present. Many people identify with it strongly.'
    }, {
      q: "What's the difference between a Moon sign and a Sun sign?",
      a: 'Your Sun is your core identity and drive; your Moon is your emotional needs and instincts. You have both, and they work together.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}
Object.assign(window, {
  AboutPage,
  ReadingPage,
  CallPage,
  RelationshipPage,
  JournalPage,
  FreeBirthChartPage,
  RisingPage,
  MoonPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/pages.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// archive/site v2026-06-10 (redesign standard)/ui.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — UI chrome (header, footer, consent, bits)
   Shared via window for app.jsx. React + Babel.
   ============================================================ */
const {
  useState,
  useEffect,
  useRef
} = React;
const ASSET = '../assets';
const LOCALES = window.B3A_LOCALES;
const LABEL = window.B3A_LOCALE_LABEL;

/* ---- language switcher (pills — used in footer) ---- */
function LangSwitcher({
  lang,
  setLang,
  idPrefix = 'lang'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-lang",
    role: "group",
    "aria-label": "Language"
  }, LOCALES.map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    id: `${idPrefix}-${code}`,
    "aria-pressed": lang === code,
    onClick: () => setLang(code)
  }, LABEL[code])));
}

/* ---- language dropdown (compact — used in header) ---- */
const LANG_NAMES = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español'
};
function LangDropdown({
  lang,
  setLang
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-langdd",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-langdd-btn",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-label": "Language",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.4",
    stroke: "currentColor",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.7 8h12.6M8 1.6c1.7 1.7 2.6 3.9 2.6 6.4S9.7 12.7 8 14.4C6.3 12.7 5.4 10.5 5.4 8S6.3 3.3 8 1.6Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, LABEL[lang]), /*#__PURE__*/React.createElement("svg", {
    className: "b3-langdd-chev",
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transform: open ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: `b3-langdd-menu${open ? ' open' : ''}`,
    role: "listbox",
    "aria-label": "Language"
  }, LOCALES.map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    role: "option",
    "aria-selected": lang === code,
    className: `b3-langdd-opt${lang === code ? ' sel' : ''}`,
    onClick: () => {
      setLang(code);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-langdd-code"
  }, LABEL[code]), /*#__PURE__*/React.createElement("span", {
    className: "b3-langdd-name"
  }, LANG_NAMES[code]), lang === code && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5l3 3 6-7",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* ---- 5 gold stars ---- */
function Stars() {
  return /*#__PURE__*/React.createElement("span", {
    className: "b3-stars",
    "aria-label": "5 out of 5"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i
  }, "\u2736")));
}

/* ---- small celestial sun-burst mark (for form heading) ---- */
function SunMark({
  className
}) {
  return /*#__PURE__*/React.createElement("img", {
    className: className,
    src: `${ASSET}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  });
}

/* ---- wordmark lockup (trinity mark + Jost word) ---- */
function Wordmark({
  tone = 'ink'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "b3-logo-mark",
    src: `${ASSET}/logos/b3a-icon-color.png`,
    alt: "",
    "aria-hidden": "true",
    style: tone === 'cream' ? {
      filter: 'brightness(0) invert(1)'
    } : null
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-logo-word"
  }, "Big\xA03 Astrology"));
}

/* ---- header ---- */
const NAV_ROUTE = {
  home: 'home',
  reading: 'reading',
  intro_call: 'call',
  about: 'about',
  blog: 'journal'
};
function Header({
  t,
  lang,
  setLang,
  onBook,
  onHome,
  onNav
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [['home', t.nav.home], ['reading', t.nav.reading], ['intro_call', t.nav.intro_call], ['about', t.nav.about], ['blog', t.nav.blog]];
  const nav = key => e => {
    e.preventDefault();
    setOpen(false);
    (onNav || onHome)(NAV_ROUTE[key] || 'home');
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `b3-hdr${scrolled ? ' scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-hdr-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-logo",
    onClick: () => {
      setOpen(false);
      onHome && onHome();
    },
    "aria-label": "Big 3 Astrology \u2014 home"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "b3-nav",
    "aria-label": "Primary"
  }, navItems.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: nav(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-hdr-right"
  }, /*#__PURE__*/React.createElement(LangDropdown, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--sm b3-book",
    onClick: onBook
  }, t.nav.book), /*#__PURE__*/React.createElement("button", {
    className: `b3-hamburger${open ? ' open' : ''}`,
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: `b3-mobile-menu${open ? ' open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile"
  }, navItems.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: nav(k)
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "b3-mm-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--block",
    onClick: () => {
      setOpen(false);
      onBook();
    }
  }, t.nav.book))))));
}

/* ---- footer ---- */
const LEGAL_ROUTE = {
  legal: 'legal-notice',
  terms: 'terms',
  privacy: 'privacy',
  refund: 'cancellations-refunds'
};
function Footer({
  t,
  lang,
  setLang,
  onNav,
  divider
}) {
  const legal = [['legal', t.footer.links_legal], ['terms', t.footer.links_terms], ['privacy', t.footer.links_privacy], ['refund', t.footer.links_refund]];
  const pages = [['home', t.nav.home], ['reading', t.nav.reading], ['intro_call', t.nav.intro_call], ['about', t.nav.about], ['blog', t.nav.blog]];
  const guides = [['free-birth-chart', t.footer.guide_birth], ['rising-sign', t.footer.guide_rising], ['moon-sign', t.footer.guide_moon]];
  const f = t.footer;
  const navTo = route => e => {
    e.preventDefault();
    (onNav || (() => {}))(route);
  };
  const go = key => navTo(NAV_ROUTE[key] || 'home');
  const goLegal = key => navTo(LEGAL_ROUTE[key] || 'home');
  return /*#__PURE__*/React.createElement("footer", {
    className: "b3-ftr",
    role: "contentinfo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, divider && window.ConstellationDivider && /*#__PURE__*/React.createElement(ConstellationDivider, {
    variant: "trinity",
    tone: "gold",
    className: "b3-ftr-cdiv"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "b3-logo",
    href: "#",
    onClick: navTo('home'),
    "aria-label": "Big 3 Astrology \u2014 home"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "cream"
  })), /*#__PURE__*/React.createElement("p", {
    className: "b3-ftr-tag"
  }, f.tagline), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-social",
    "aria-label": f.follow_label
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/big3astrology",
    target: "_blank",
    rel: "noopener noreferrer me",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.2",
    cy: "6.8",
    r: "1.2",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${f.email}`,
    "aria-label": f.email_label
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2.5",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l8 6 8-6",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("nav", {
    className: "b3-ftr-cols",
    "aria-label": f.nav_label
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.nav_label), pages.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: go(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.guides_label), guides.map(([route, label]) => /*#__PURE__*/React.createElement("a", {
    key: route,
    href: "#",
    onClick: navTo(route)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.legal_label), legal.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: goLegal(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col b3-ftr-col--contact"
  }, /*#__PURE__*/React.createElement("h4", null, f.contact_label), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${f.email}`
  }, f.email), /*#__PURE__*/React.createElement("address", {
    className: "b3-ftr-addr"
  }, "Big Astrology GmbH", /*#__PURE__*/React.createElement("br", null), "R\xE4nkestrasse 21", /*#__PURE__*/React.createElement("br", null), "8700 K\xFCsnacht ZH", /*#__PURE__*/React.createElement("br", null), "Switzerland")))), /*#__PURE__*/React.createElement("p", {
    className: "b3-ftr-disc"
  }, f.disclaimer), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-base"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-ftr-rights"
  }, f.rights, " \xB7 K\xFCsnacht ZH, Switzerland"))));
}

/* ---- consent banner (placeholder for Zaraz CMP) ---- */
function ConsentBanner({
  t,
  show,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-consent${show ? ' show' : ''}`,
    role: "dialog",
    "aria-label": t.consent.title,
    "aria-hidden": !show
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-title"
  }, t.consent.title), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-body"
  }, t.consent.body), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--sm",
    onClick: () => onClose('accept')
  }, t.consent.accept), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--sm",
    onClick: () => onClose('reject')
  }, t.consent.reject), /*#__PURE__*/React.createElement("button", {
    className: "prefs",
    onClick: () => onClose('prefs')
  }, t.consent.prefs)), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-tag"
  }, "Placeholder \xB7 Cloudflare Zaraz CMP"));
}
Object.assign(window, {
  LangSwitcher,
  LangDropdown,
  Stars,
  SunMark,
  Header,
  Footer,
  ConsentBanner,
  B3A_ASSET: ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/site v2026-06-10 (redesign standard)/ui.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — Logo
 * The full horizontal wordmark lockup. Pick the variant that reads cleanly
 * on your background. `base` is the path from the consuming HTML to /assets.
 */
function Logo({
  variant = 'colorDark',
  height = 48,
  base = 'assets',
  style = {},
  ...rest
}) {
  const files = {
    colorDark: 'b3a-full-color-black.png',
    // full color, for light backgrounds
    colorLight: 'b3a-full-color-white.png',
    // full color w/ white text, for dark backgrounds
    black: 'b3a-full-black.png',
    // solid black monochrome
    white: 'b3a-full-white.png' // solid white monochrome
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}/logos/${files[variant] || files.colorDark}`,
    alt: "Big 3 Astrology",
    style: {
      height,
      width: 'auto',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/celestial/CelestialDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — CelestialDivider
 * The thin editorial rule flanked by luminary glyphs that separates
 * sections across the feed. `duo` = Moon — Sun; `trinity` = Moon — ASC — Sun.
 *
 * `base` is the path (from the consuming HTML) to the /assets folder.
 */
function CelestialDivider({
  variant = 'duo',
  base = 'assets',
  color = 'wine',
  glyphSize = 18,
  style = {},
  ...rest
}) {
  const ruleColors = {
    wine: 'var(--b3a-wine)',
    gold: 'var(--b3a-gold)',
    coral: 'var(--b3a-coral)',
    ink: 'var(--b3a-ink)'
  };
  const c = ruleColors[color] || ruleColors.wine;
  const rule = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: `linear-gradient(90deg, transparent, ${c}, transparent)`,
      opacity: 0.55
    }
  });
  const img = (name, sz) => /*#__PURE__*/React.createElement("img", {
    src: `${base}/icons/glyph-${name}.png`,
    alt: "",
    style: {
      height: sz,
      width: 'auto',
      objectFit: 'contain',
      flex: 'none'
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      ...style
    }
  }, rest), img('moon', glyphSize), rule, variant === 'trinity' && img('libra', glyphSize * 1.5), variant === 'trinity' && rule, img('sun', glyphSize));
}
Object.assign(__ds_scope, { CelestialDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/celestial/CelestialDivider.jsx", error: String((e && e.message) || e) }); }

// components/celestial/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — StarRating
 * Gold five-star rating used on testimonial / consultation-review cards.
 * Read-only display by default.
 */
function StarRating({
  value = 5,
  max = 5,
  size = 18,
  gap = 4,
  color = 'gold',
  style = {},
  ...rest
}) {
  const colors = {
    gold: 'var(--b3a-gold)',
    coral: 'var(--b3a-coral)',
    wine: 'var(--b3a-wine)'
  };
  const filled = colors[color] || colors.gold;
  const empty = 'var(--b3a-line-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap,
      alignItems: 'center',
      ...style
    }
  }, rest), Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color: i < value ? filled : empty
    }
  }, '\u2605')));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/celestial/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/celestial/TrinityMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — TrinityMark
 * The brand's triangle icon: Moon · Sun · Ascendant joined into the
 * "Big 3" constellation. Renders the official icon asset.
 *
 * `base` is the path (from the consuming HTML file) to the /assets folder,
 * e.g. "../assets" or "../../assets".
 */
function TrinityMark({
  size = 56,
  base = 'assets',
  tone = 'color',
  style = {},
  ...rest
}) {
  const src = `${base}/logos/b3a-icon-color.png`;
  const filters = {
    color: 'none',
    white: 'brightness(0) invert(1)',
    ink: 'brightness(0)'
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Big 3 Astrology",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      filter: filters[tone] || 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TrinityMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/celestial/TrinityMark.jsx", error: String((e && e.message) || e) }); }

// components/celestial/ZodiacGlyph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIGNS = {
  aries: '\u2648',
  taurus: '\u2649',
  gemini: '\u264A',
  cancer: '\u264B',
  leo: '\u264C',
  virgo: '\u264D',
  libra: '\u264E',
  scorpio: '\u264F',
  sagittarius: '\u2650',
  capricorn: '\u2651',
  aquarius: '\u2652',
  pisces: '\u2653',
  sun: '\u2609',
  moon: '\u263D',
  mercury: '\u263F',
  venus: '\u2640',
  mars: '\u2642',
  jupiter: '\u2643',
  saturn: '\u2644'
};

/**
 * Big3 Astrology — ZodiacGlyph
 * A single zodiac sign or luminary symbol, rendered as a Unicode glyph in
 * a brand color. The brand leans on these astrological marks throughout
 * (month calendars, element legends, dividers).
 */
function ZodiacGlyph({
  sign = 'libra',
  color = 'ink',
  size = 22,
  style = {},
  ...rest
}) {
  const colors = {
    ink: 'var(--b3a-ink)',
    wine: 'var(--b3a-wine)',
    coral: 'var(--b3a-coral)',
    gold: 'var(--b3a-gold)',
    muted: 'var(--b3a-ink-400)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": sign,
    style: {
      fontFamily: '"Segoe UI Symbol", "Apple Symbols", "Noto Sans Symbols2", serif',
      fontSize: size,
      lineHeight: 1,
      color: colors[color] || colors.ink,
      display: 'inline-block',
      ...style
    }
  }, rest), SIGNS[sign] || SIGNS.libra);
}
Object.assign(__ds_scope, { ZodiacGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/celestial/ZodiacGlyph.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — Badge
 * Small status / category chip. Jost caps with tracking. Use for
 * post categories ("Aries Season"), tags, counts and pills.
 */
function Badge({
  children,
  variant = 'wine',
  size = 'md',
  pill = true,
  style = {},
  ...rest
}) {
  const palette = {
    wine: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)',
      border: 'transparent'
    },
    coral: {
      background: 'var(--b3a-coral)',
      color: '#fff',
      border: 'transparent'
    },
    gold: {
      background: 'var(--b3a-gold)',
      color: 'var(--b3a-ink)',
      border: 'transparent'
    },
    ink: {
      background: 'var(--b3a-ink)',
      color: 'var(--b3a-cream)',
      border: 'transparent'
    },
    softWine: {
      background: 'var(--b3a-plum-wash)',
      color: 'var(--b3a-wine-deep)',
      border: 'transparent'
    },
    softCoral: {
      background: 'var(--b3a-blush)',
      color: 'var(--b3a-coral-600)',
      border: 'transparent'
    },
    softGold: {
      background: 'var(--b3a-sand)',
      color: 'var(--b3a-gold-deep)',
      border: 'transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--b3a-ink)',
      border: 'var(--b3a-line-strong)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 10
    },
    md: {
      padding: '5px 12px',
      fontSize: 11
    },
    lg: {
      padding: '7px 16px',
      fontSize: 12
    }
  };
  const p = palette[variant] || palette.wine;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: s.padding,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-xs)',
      background: p.background,
      color: p.color,
      border: `1px solid ${p.border}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — Button
 * The brand's primary action control. Geometric Jost label with gentle
 * letter-spacing; restrained corners; soft wine-tinted lift on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  uppercase = false,
  pill = false,
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 12,
      gap: 7
    },
    md: {
      padding: '12px 24px',
      fontSize: 14,
      gap: 8
    },
    lg: {
      padding: '16px 32px',
      fontSize: 15,
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)',
      border: '1.5px solid var(--b3a-wine)'
    },
    accent: {
      background: 'var(--b3a-coral)',
      color: '#fff',
      border: '1.5px solid var(--b3a-coral)'
    },
    gold: {
      background: 'var(--b3a-gold)',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-gold)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-ink)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--b3a-wine)',
      border: '1.5px solid transparent'
    },
    inverse: {
      background: 'var(--b3a-cream)',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-cream)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: s.fontSize,
      letterSpacing: uppercase ? '0.14em' : '0.04em',
      textTransform: uppercase ? 'uppercase' : 'none',
      lineHeight: 1,
      padding: s.padding,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.99)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — Card
 * Warm editorial surface. Defaults to white paper with a hairline border
 * and soft wine-tinted shadow. Supports tinted and inverse fills.
 */
function Card({
  children,
  surface = 'paper',
  elevation = 'card',
  border = true,
  radius = 'md',
  padding = 24,
  style = {},
  ...rest
}) {
  const surfaces = {
    paper: {
      background: 'var(--b3a-white)',
      color: 'var(--b3a-ink)'
    },
    cream: {
      background: 'var(--b3a-cream)',
      color: 'var(--b3a-ink)'
    },
    sand: {
      background: 'var(--b3a-sand)',
      color: 'var(--b3a-ink)'
    },
    blush: {
      background: 'var(--b3a-blush)',
      color: 'var(--b3a-ink)'
    },
    plum: {
      background: 'var(--b3a-plum-wash)',
      color: 'var(--b3a-wine-deep)'
    },
    wine: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)'
    },
    charcoal: {
      background: 'var(--b3a-charcoal)',
      color: 'var(--b3a-cream)'
    }
  };
  const shadows = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    card: 'var(--shadow-card)',
    float: 'var(--shadow-float)',
    lg: 'var(--shadow-lg)'
  };
  const radii = {
    none: '0',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const sf = surfaces[surface] || surfaces.paper;
  const dark = surface === 'wine' || surface === 'charcoal';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: sf.background,
      color: sf.color,
      borderRadius: radii[radius] || radii.md,
      border: border ? `1px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--b3a-line)'}` : 'none',
      boxShadow: shadows[elevation] || shadows.card,
      padding: typeof padding === 'number' ? `${padding}px` : padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big3 Astrology — Eyebrow
 * The tracked ALL-CAPS Jost kicker that sits above headlines across the
 * feed ("CONSULTATION REVIEW", "MANTRAS FOR ARIES SEASON"). Optionally
 * flanked by short rules for the centered editorial treatment.
 */
function Eyebrow({
  children,
  color = 'coral',
  rules = false,
  align = 'left',
  style = {},
  ...rest
}) {
  const colors = {
    coral: 'var(--b3a-coral)',
    wine: 'var(--b3a-wine)',
    gold: 'var(--b3a-gold-deep)',
    ink: 'var(--b3a-ink)',
    muted: 'var(--b3a-ink-400)'
  };
  const c = colors[color] || colors.coral;
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--fs-label)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: c,
      whiteSpace: 'nowrap'
    }
  }, children);
  if (!rules) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        ...style
      }
    }, rest), label);
  }
  const rule = /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: c,
      opacity: 0.4,
      maxWidth: 64
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      justifyContent: 'center',
      ...style
    }
  }, rest), rule, label, rule);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// pages.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Content page views
   About · Full natal reading · 15-min call · Relationship ·
   Journal index · 3 pillar articles.
   Copy is VERBATIM from the EN source set (09_EN v1.0) — not
   rewritten. Decorative brand bands via PageHeader / Band.
   ============================================================ */
const {
  useEffect: useEffectP
} = React;

/* in-prose SPA link */
function A({
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick();
    }
  }, children);
}

/* scroll to top whenever a page mounts */
function useTop() {
  useEffectP(() => {
    window.scrollTo(0, 0);
  }, []);
}

/* back-to-home affordance */
function PageBack({
  label,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-page-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), label));
}

/* ============================================================ ABOUT */
function AboutPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "about",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.about,
    title: "Gabriela Brecht"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--b3a-ink)',
      lineHeight: 1.45
    }
  }, "I read charts the way I once read teams \u2014 looking for what's really going on underneath, and what wants to happen next."), /*#__PURE__*/React.createElement("p", null, "Before astrology was my work, it was the lens I never put down. I spent years in business and hold two degrees \u2014 one in Switzerland, one from Cambridge \u2014 but the same question always pulled at me: ", /*#__PURE__*/React.createElement("em", null, "why do we move the way we move, and what are we each here to grow into?")), /*#__PURE__*/React.createElement("p", null, "Today I'm a ", /*#__PURE__*/React.createElement("strong", null, "psychological astrologer"), ": I treat your chart as a map of patterns, gifts and growth edges \u2014 never a fixed fate. My training is in psychological and archetypal astrology, including the ", /*#__PURE__*/React.createElement("strong", null, "Debra Silverman"), " method (USA)."), /*#__PURE__*/React.createElement("p", null, "Born in Caracas, living in Z\xFCrich, I work in ", /*#__PURE__*/React.createElement("strong", null, "English, German and Spanish"), " \u2014 drawn to where astrology meets real life: relationships, decisions, and how people work together."), /*#__PURE__*/React.createElement("p", null, "If that resonates, your Big 3 is a good first step. When you want the full picture, ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "let's talk"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, "Astrology here is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your own free will.")), /*#__PURE__*/React.createElement("aside", {
    className: "b3-about-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${window.B3A_ASSET}/brand/gabriela-portrait.webp`,
    alt: "Astrologer Gabriela Brecht",
    width: "860",
    height: "860",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("p", {
    className: "b3-portrait-cap"
  }, "Gabriela Brecht, psychological astrologer, Z\xFCrich.")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ FULL NATAL READING (CHF 180) */
function ReadingPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "reading"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '15ch',
      fontSize: "45px"
    }
  }, "Your full natal reading \u2014 CHF 180"), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "The whole picture, read by a human and prepared just for you. Not a generated report \u2014 real preparation, a real conversation, and something to take away. This is the reading most people are really looking for."), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "90+ minutes of preparation"), " before we meet \u2014 I study your chart in depth so our time together is about ", /*#__PURE__*/React.createElement("em", null, "you"), ", not setup."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A 60-minute live session"), " on Google Meet to talk it through, ask anything, and connect it to your real life."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A written summary"), " afterwards, so the insight stays with you long after the call.")), /*#__PURE__*/React.createElement("p", null, "This is psychological astrology: your strengths, your patterns, your growth edges \u2014 and how to actually work with them. You leave understanding yourself a little more clearly than you did before."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "Ready when you are"), /*#__PURE__*/React.createElement("p", null, "Reading for two? Add a ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('relationship')
  }, "relationship reading (CHF 250 total)"), ".")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ 15-MIN CALL (CHF 20, secondary) */
function CallPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.intro_call), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '16ch'
    }
  }, "Not sure yet? Let's meet first \u2014 CHF 20"), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "If a full reading feels like a big first step, start smaller. In 15 minutes you'll get a real feel for how I work and a mini-reading of something live in your chart right now \u2014 so you can decide about a full reading with no guesswork.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "You get"), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A focused 15-minute video call on Google Meet"), /*#__PURE__*/React.createElement("li", null, "A mini-reading on one thing that matters to you now"), /*#__PURE__*/React.createElement("li", null, "An honest sense of whether a full reading is right for you")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Good to know:"), " this call is its own thing \u2014 the CHF 20 isn't credited toward a full reading. It's simply the easiest way to meet me before you commit. Ready for the full picture instead? ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Book a full reading (CHF 180)"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--lg",
    onClick: onBook
  }, "Book the 15-minute call"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ RELATIONSHIP READING (CHF 250) */
function RelationshipPage({
  t,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '17ch'
    }
  }, "Relationship & couples reading \u2014 CHF 250"), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure",
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Two charts, side by side. We look at how you and another person actually meet \u2014 where you flow easily, where you stretch each other, and what each of you needs to feel met and understood."), /*#__PURE__*/React.createElement("p", null, "It's the full natal reading, extended to two people: the same depth of preparation, a live 60-minute session on Google Meet, and a written summary \u2014 with a second chart added for ", /*#__PURE__*/React.createElement("strong", null, "CHF 70"), " on top of the standard CHF 180."), /*#__PURE__*/React.createElement("p", null, "Good for couples, but just as valuable for any pairing that matters: a co-founder, a parent, a close friend.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a relationship reading")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ JOURNAL INDEX */
const PILLARS = [{
  route: 'free-birth-chart',
  slot: 'birthchart',
  kicker: 'Birth chart',
  title: 'Free Birth Chart: Your Big 3, Explained',
  blurb: 'What a birth chart is, why the Big 3 carry most of the signal, and how to get yours free.'
}, {
  route: 'rising-sign',
  slot: 'rising',
  kicker: 'Rising sign',
  title: 'Calculate Your Rising Sign — and What It Means',
  blurb: 'How the world first meets you, why it needs an exact birth time, and how to find yours.'
}, {
  route: 'moon-sign',
  slot: 'moon',
  kicker: 'Moon sign',
  title: 'Calculate Your Moon Sign — and What It Means',
  blurb: 'Your emotional inner world — what it means, and why you usually don\u2019t need a birth time.'
}];
function JournalPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, "\u2736 ", t.nav.blog), /*#__PURE__*/React.createElement("h1", null, "Guides to your Big 3"), /*#__PURE__*/React.createElement("p", null, "Answer-first reads on your birth chart, your Rising and your Moon \u2014 then calculate yours in seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-grid"
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.route,
    className: "b3-jcard",
    onClick: () => go(p.route)
  }, /*#__PURE__*/React.createElement(Band, {
    slot: p.slot
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-jcard-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-jcard-kicker"
  }, p.kicker), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.blurb), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Read the guide", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* shared FAQ accordion */
function Faq({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, it.q, /*#__PURE__*/React.createElement("span", {
    className: "icn",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ans"
  }, it.a))));
}

/* shared inline CTA → full reading */
function PillarCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "When you want the real thing"), /*#__PURE__*/React.createElement("p", null, "Your Big 3 is the start. A full natal reading turns your whole chart into something you can use.")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading \u2014 CHF 180"));
}
const DISCLAIMER = 'Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.';

/* ============================================================ PILLAR 1 — FREE BIRTH CHART */
function FreeBirthChartPage({
  t,
  go,
  onForm,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "birthchart"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, t.nav.blog), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '8px',
      maxWidth: '18ch'
    }
  }, "Free Birth Chart: Your Big 3, Explained")), /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer",
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "a birth chart is a map of the sky at the exact moment you were born. The three most important points in it are your ", /*#__PURE__*/React.createElement("strong", null, "Sun, Moon and Rising sign"), " \u2014 your \u201CBig 3.\u201D You can get all three free here in a few seconds by entering your birth date, time and place. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Get your Big 3 free.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("p", null, "A full birth chart has dozens of pieces \u2014 planets, signs, houses, angles. But you don't need all of it to learn something real about yourself. The Big 3 carry most of the signal, which is why they're the right place to start."), /*#__PURE__*/React.createElement("h2", null, "What is a birth chart?"), /*#__PURE__*/React.createElement("p", null, "A birth chart (or natal chart) is a snapshot of where the Sun, Moon and planets were, from your point of view on Earth, at your moment of birth. Because the sky is always moving, your chart is essentially unique \u2014 even people born the same day in different places have different Rising signs."), /*#__PURE__*/React.createElement("p", null, "To calculate it accurately you need three things:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Date of birth"), " \u2014 sets the Sun and most planet positions."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Time of birth"), " \u2014 sets your Rising sign and the houses. This is the one people most often miss."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Place of birth"), " \u2014 sets the chart to your spot on Earth.")), /*#__PURE__*/React.createElement("h2", null, "Your Big 3: the three that matter most"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sun \u2014 what drives you."), " Your core identity and what lights you up. The sign you already know (\u201CI'm a Leo\u201D)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Moon \u2014 what you need to feel safe."), " Your inner, emotional world: how you feel, soothe, and recharge."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Rising (Ascendant) \u2014 how the world first meets you."), " The impression you make and your instinctive way of approaching life.")), /*#__PURE__*/React.createElement("p", null, "Together they explain why two people of the \u201Csame sign\u201D can feel completely different. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "For the Sun and Moon, usually no \u2014 your date is enough. For your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign, yes"), ": it changes roughly every two hours, so even a rough time helps and an exact one is best. Don't know it? You'll still get your Sun and Moon, and we can help you track the time down for a full reading."), /*#__PURE__*/React.createElement("h2", null, "What a free chart can and can't tell you"), /*#__PURE__*/React.createElement("p", null, "A free Big-3 is a genuine, accurate starting point \u2014 but it's a summary, not the whole story. It won't show how your placements interact, where your strengths and friction really sit, or what to do with any of it. That's the job of a full reading: a real astrologer taking your whole chart and turning it into something useful. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Is the birth chart really free?',
      a: 'Yes — your Big 3 (Sun, Moon and Rising) and a short synthesis are free, with no sign-up.'
    }, {
      q: 'Is this accurate?',
      a: 'Yes. We calculate real planetary positions for your date, time and place — the same astronomy professional astrologers use.'
    }, {
      q: "What if I don't know my birth time?",
      a: "You'll get your Sun and Moon. Your Rising needs an exact time — we can help you find it."
    }, {
      q: "What's the difference between this and a reading?",
      a: 'The free chart is a summary you read yourself. A reading is a live conversation with an astrologer who interprets your whole chart for your actual life.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 2 — RISING SIGN */
function RisingPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "rising",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.blog,
    title: "Calculate Your Rising Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Rising sign (or Ascendant) is the zodiac sign that was coming up over the horizon at the exact minute you were born. To calculate it you need your birth date, ", /*#__PURE__*/React.createElement("strong", null, "exact time"), ", and place. Enter them here and get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Rising sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Rising sign?"), /*#__PURE__*/React.createElement("p", null, "While your Sun sign is about who you are at your core, your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign is about how you come across"), " \u2014 your instinctive style, your first impression, the \u201Cfront door\u201D people walk through to reach you. It also sets the structure of your whole chart (the houses), which is why astrologers care about it so much."), /*#__PURE__*/React.createElement("h2", null, "Why you need your exact birth time"), /*#__PURE__*/React.createElement("p", null, "The Ascendant moves fast \u2014 through all twelve signs in 24 hours, so roughly ", /*#__PURE__*/React.createElement("strong", null, "one new sign every two hours"), ". That's why your date alone can't give it to you, and why a birth time that's off by even an hour can land you on the wrong sign. With an exact time, your Rising is accurate; with only an approximate time, treat the result as a strong guess."), /*#__PURE__*/React.createElement("h3", null, "How to find your birth time"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check your ", /*#__PURE__*/React.createElement("strong", null, "birth certificate"), " \u2014 in many countries the time is recorded."), /*#__PURE__*/React.createElement("li", null, "Ask a ", /*#__PURE__*/React.createElement("strong", null, "parent or close family member"), "."), /*#__PURE__*/React.createElement("li", null, "Request your ", /*#__PURE__*/React.createElement("strong", null, "birth record"), " from the hospital or civil registry where you were born.")), /*#__PURE__*/React.createElement("h2", null, "What your Rising sign means"), /*#__PURE__*/React.createElement("p", null, "Your Rising colours everything from your body language to how you handle new situations. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Rising (Aries, Leo, Sagittarius):"), " you come across as direct, warm, energetic."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Rising (Taurus, Virgo, Capricorn):"), " you come across as grounded, capable, composed."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Rising (Gemini, Libra, Aquarius):"), " you come across as sociable, curious, easy to talk to."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Rising (Cancer, Scorpio, Pisces):"), " you come across as sensitive, magnetic, a little harder to read.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a fuller, personal description of your specific Rising sign. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Rising, Sun and Moon \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Rising is one third of your Big 3. Paired with your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Moon"), " (what you need), it explains the gap between how people first read you and who you actually are underneath. A full reading connects all three \u2014 and the rest of your chart \u2014 into something you can use. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Rising sign without a birth time?',
      a: "Not reliably. The Ascendant changes about every two hours, so an exact time is needed. Without it, we'll show your Sun and Moon instead."
    }, {
      q: 'Is Rising sign the same as Ascendant?',
      a: 'Yes — “Rising sign” and “Ascendant” are two names for the same thing.'
    }, {
      q: 'Why is my Rising sign different from my Sun sign?',
      a: "They measure different things: your Sun is your core self; your Rising is your outward style and the moment-by-moment setup of your chart. Most people's differ."
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 3 — MOON SIGN */
function MoonPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "moon",
    zone: "left",
    tone: "light",
    eyebrow: t.nav.blog,
    title: "Calculate Your Moon Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Moon sign is the zodiac sign the Moon was in when you were born. It represents your emotional inner world \u2014 what you feel and what you need to feel safe. Enter your birth date and place to get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Moon sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Moon sign?"), /*#__PURE__*/React.createElement("p", null, "If your Sun sign is who you are in the daylight, your ", /*#__PURE__*/React.createElement("strong", null, "Moon sign is who you are in private"), " \u2014 your feelings, your instincts, what soothes you and what you need from the people closest to you. It's often the placement people recognise themselves in most once they read it."), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "Usually not. The Moon moves through a sign in about ", /*#__PURE__*/React.createElement("strong", null, "two to two-and-a-half days"), ", so your birth date is normally enough to place it. The exception: if you were born on a day the Moon changed signs, the time matters \u2014 when that's the case, we'll let you know. (Your ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " sign is the one that always needs an exact time.)"), /*#__PURE__*/React.createElement("h2", null, "What your Moon sign means"), /*#__PURE__*/React.createElement("p", null, "Your Moon describes your emotional style \u2014 how you process feelings, comfort yourself, and bond with others. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Moon (Aries, Leo, Sagittarius):"), " feelings are fast, warm, expressive."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Moon (Taurus, Virgo, Capricorn):"), " feelings are steady, practical, grounded."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Moon (Gemini, Libra, Aquarius):"), " feelings are processed by thinking and talking."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Moon (Cancer, Scorpio, Pisces):"), " feelings run deep, intuitive, and strong.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a personal description of your specific Moon sign \u2014 including its strengths and its growth edge. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Why your Moon sign can surprise you"), /*#__PURE__*/React.createElement("p", null, "Many people relate to their Moon sign more than their Sun. That's because your Sun sign is often the self you show, while your Moon is the self you actually feel \u2014 and the two aren't always the same. Seeing them side by side is where it gets interesting."), /*#__PURE__*/React.createElement("h2", null, "Moon, Sun and Rising \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Moon is one third of your Big 3, alongside your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " (how the world meets you). A full reading takes all three \u2014 and the rest of your chart \u2014 and turns it into practical insight about your relationships, your patterns, and what you need to thrive. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Moon sign without a birth time?',
      a: 'Usually yes — the date is normally enough. Only if you were born on a day the Moon changed signs does the time matter.'
    }, {
      q: 'Why does my Moon sign feel more “me” than my Sun sign?',
      a: 'Because your Moon is your private, emotional self, while your Sun is often the self you present. Many people identify with it strongly.'
    }, {
      q: "What's the difference between a Moon sign and a Sun sign?",
      a: 'Your Sun is your core identity and drive; your Moon is your emotional needs and instincts. You have both, and they work together.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}
Object.assign(window, {
  AboutPage,
  ReadingPage,
  CallPage,
  RelationshipPage,
  JournalPage,
  FreeBirthChartPage,
  RisingPage,
  MoonPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages.jsx", error: String((e && e.message) || e) }); }

// site/app.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — App (hero + form, sections, Big-3 result)
   ============================================================ */
const {
  useState: useStateA,
  useEffect: useEffectA,
  useRef: useRefA
} = React;
const ASSETP = window.B3A_ASSET;
const COUNTRIES = ['Switzerland', 'Germany', 'Austria', 'Spain', 'France', 'Italy', 'United Kingdom', 'United States', 'Venezuela', 'Mexico', 'Argentina', 'Other'];
const SAMPLE_CITIES = ['Zürich, Switzerland', 'Basel, Switzerland', 'Genève, Switzerland', 'Berlin, Germany', 'Wien, Austria', 'Madrid, Spain', 'Barcelona, Spain', 'Caracas, Venezuela'];

/* small inline glyph for hero eyebrow */
function Dot({
  c
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: c,
      display: 'inline-block'
    }
  });
}

/* ---------- BRAND HERO MEDIA (animation / still / none) ---------- */
function HeroMedia({
  media,
  layout
}) {
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
    const onTime = () => {
      if (v.currentTime > 0.05) setPlaying(true);
    };
    v.addEventListener('timeupdate', onTime);
    // defer the video fetch until AFTER first paint / LCP so it never blocks it
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      v.preload = 'auto';
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    const idle = window.requestIdleCallback ? window.requestIdleCallback(start, {
      timeout: 1800
    }) : setTimeout(start, 1200);
    return () => {
      v.removeEventListener('timeupdate', onTime);
      if (window.cancelIdleCallback && window.requestIdleCallback) window.cancelIdleCallback(idle);else clearTimeout(idle);
    };
  }, [media]);
  if (media === 'none') return null;
  const cls = `b3-hero-media b3-hero-media--${layout}`;
  const poster = `${ASSETP}/brand/bg-hero-poster.jpg`;
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: `b3-hero-media-base${baseLoaded ? ' loaded' : ''}`,
    src: poster,
    alt: "",
    width: "960",
    height: "540",
    loading: "eager",
    decoding: "async",
    onLoad: () => setBaseLoaded(true),
    ref: el => {
      if (el && el.complete) setBaseLoaded(true);
    }
  }), media === 'animation' && /*#__PURE__*/React.createElement("video", {
    ref: vidRef,
    className: `b3-hero-media-vid${playing ? ' playing' : ''}`,
    poster: poster,
    width: "960",
    height: "540",
    muted: true,
    loop: true,
    playsInline: true,
    preload: "none"
  }, /*#__PURE__*/React.createElement("source", {
    src: `${ASSETP}/brand/big3-bg-animation.mp4`,
    type: "video/mp4"
  })));
}

/* ---------- BIG-3 FORM (shared: inline + modal) ---------- */
function Big3Form({
  t,
  onReveal,
  idns = ''
}) {
  const [date, setDate] = useStateA('');
  const [time, setTime] = useStateA('');
  const [place, setPlace] = useStateA('');
  const [country, setCountry] = useStateA('');
  const [err, setErr] = useStateA({});
  const dateRef = useRefA(null);
  const placeRef = useRefA(null);
  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!date) next.date = true;
    if (!place.trim()) next.place = true;
    setErr(next);
    if (next.date) {
      dateRef.current && dateRef.current.focus();
      return;
    }
    if (next.place) {
      placeRef.current && placeRef.current.focus();
      return;
    }
    onReveal({
      hasTime: !!time
    });
  };
  const errStyle = {
    borderColor: 'var(--b3a-coral-600)',
    boxShadow: '0 0 0 3px rgba(232,95,97,0.16)'
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "b3-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bd${idns}`
  }, t.form.date_label), /*#__PURE__*/React.createElement("input", {
    ref: dateRef,
    id: `bd${idns}`,
    type: "date",
    className: "b3-input",
    value: date,
    onChange: e => setDate(e.target.value),
    style: err.date ? errStyle : null
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bt${idns}`
  }, t.form.time_label, " ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "\xB7 ", t.form.time_optional)), /*#__PURE__*/React.createElement("input", {
    id: `bt${idns}`,
    type: "time",
    className: "b3-input",
    value: time,
    onChange: e => setTime(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-help"
  }, t.form.time_helper)), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bp${idns}`
  }, t.form.place_label), /*#__PURE__*/React.createElement("input", {
    ref: placeRef,
    id: `bp${idns}`,
    type: "text",
    className: "b3-input",
    list: `cities${idns}`,
    placeholder: t.form.place_placeholder,
    value: place,
    onChange: e => setPlace(e.target.value),
    style: err.place ? errStyle : null
  }), /*#__PURE__*/React.createElement("datalist", {
    id: `cities${idns}`
  }, SAMPLE_CITIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }))), /*#__PURE__*/React.createElement("span", {
    className: "b3-help"
  }, t.form.place_helper)), /*#__PURE__*/React.createElement("div", {
    className: "b3-field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "b3-label",
    htmlFor: `bc${idns}`
  }, t.form.country_label), /*#__PURE__*/React.createElement("select", {
    id: `bc${idns}`,
    className: "b3-select",
    value: country,
    onChange: e => setCountry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "\u2014"), COUNTRIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), !time && /*#__PURE__*/React.createElement("div", {
    className: "b3-note"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 4.4v4.2M8 11.2h.01",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", null, t.form.no_time_note)), /*#__PURE__*/React.createElement("div", {
    className: "b3-submit-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "b3-btn b3-btn--primary b3-btn--block"
  }, t.form.submit)));
}

/* form card wrapper (inline) */
function FormCard({
  t,
  onReveal
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-form-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-form-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-form-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-form-title"
  }, t.form.heading)), /*#__PURE__*/React.createElement(Big3Form, {
    t: t,
    onReveal: onReveal
  }));
}

/* CTA that opens the form modal (button mode) */
function FormCta({
  t,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-form-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--block b3-btn--lg",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-cta-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), t.hero.cta), /*#__PURE__*/React.createElement("p", {
    className: "b3-form-cta-sub"
  }, t.hero.cta_sub));
}

/* modal/bottom-sheet holding the form */
function FormModal({
  t,
  open,
  onClose,
  onReveal
}) {
  useEffectA(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-modal${open ? ' open' : ''}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-card",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": t.form.heading
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-form-head",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "b3-form-star",
    src: `${ASSETP}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-form-title"
  }, t.form.heading)), /*#__PURE__*/React.createElement("button", {
    className: "b3-modal-close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })))), open && /*#__PURE__*/React.createElement(Big3Form, {
    t: t,
    onReveal: onReveal,
    idns: "-m"
  })));
}

/* ---------- HERO ---------- */
function Hero({
  t,
  onReveal,
  media,
  layout,
  formMode,
  introMode,
  onOpenModal,
  showcase,
  blend
}) {
  const [expanded, setExpanded] = useStateA(false);
  const show = showcase && media !== 'none' && layout !== 'bg';
  const doBlend = blend && media !== 'none' && layout !== 'bg';
  const heroCls = `b3-hero b3-hero--${layout} b3-hero--media-${media === 'none' ? 'off' : 'on'} b3-hero--form-${formMode}${show ? ' b3-hero--showcase' : ''}${doBlend ? ' b3-hero--blend' : ''}`;
  const eyebrowEl = /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-coral)"
  }), " ", /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-wine)"
  }), " ", /*#__PURE__*/React.createElement(Dot, {
    c: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4
    }
  }, t.hero.eyebrow));
  const h1El = /*#__PURE__*/React.createElement("h1", {
    className: "b3-h1"
  }, t.hero.headline_a, " ", /*#__PURE__*/React.createElement("em", null, t.hero.headline_em));
  const copyTop = /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-copy b3-hero-copy--top"
  }, eyebrowEl, h1El);
  return /*#__PURE__*/React.createElement("section", {
    className: heroCls
  }, layout === 'bg' && media !== 'none' && /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: "bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-hero-grid"
  }, show ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-copy b3-hero-copy--top"
  }, h1El), /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-media-slot b3-hero-stage"
  }, /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: layout
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, copyTop, layout !== 'bg' && media !== 'none' && /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-media-slot"
  }, /*#__PURE__*/React.createElement(HeroMedia, {
    media: media,
    layout: layout
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-copy b3-hero-copy--bot"
  }, show && /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-eyebrow-below"
  }, eyebrowEl), introMode === 'full' && /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro
    }
  }), introMode === 'short' && /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_short
    }
  }), introMode === 'expand' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "b3-lede",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_lead
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `b3-more${expanded ? ' open' : ''}`
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-lede b3-lede--more",
    dangerouslySetInnerHTML: {
      __html: t.hero.intro_more
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "b3-more-toggle",
    onClick: () => setExpanded(v => !v),
    "aria-expanded": expanded
  }, expanded ? t.hero.less : t.hero.more, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      transform: expanded ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), formMode === 'button' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormCta, {
    t: t,
    onOpen: onOpenModal
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-hero-note"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.5 9.6A4.2 4.2 0 1 1 6.4 4.5a3.3 3.3 0 0 0 5.1 5.1Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, t.hero.note))), formMode === 'inline' && /*#__PURE__*/React.createElement("div", {
    className: "b3-hero-formslot"
  }, /*#__PURE__*/React.createElement(FormCard, {
    t: t,
    onReveal: onReveal
  })))));
}

/* ---------- WHY ---------- */
const WHY_GLYPHS = [{
  src: 'icons/glyph-sun.png',
  variant: 'sun'
}, {
  src: 'icons/glyph-moon.png',
  variant: 'moon'
}, {
  src: 'icons/glyph-libra.png',
  variant: 'rising'
}];
function Why({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "b3-section b3-wash"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-section-head"
  }, /*#__PURE__*/React.createElement(ConstellationDivider, {
    variant: "trinity",
    className: "b3-section-cdiv"
  }), /*#__PURE__*/React.createElement("h2", null, t.why.heading)), /*#__PURE__*/React.createElement("div", {
    className: "b3-why-grid"
  }, t.why.items.map((it, i) => {
    const g = WHY_GLYPHS[i] || WHY_GLYPHS[0];
    return /*#__PURE__*/React.createElement("div", {
      className: `b3-why-item b3-why-item--${g.variant}`,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "b3-why-medallion"
    }, /*#__PURE__*/React.createElement("span", {
      className: "b3-why-orbit",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement(Luminary, {
      body: g.variant,
      size: 40
    })), /*#__PURE__*/React.createElement("div", {
      className: "b3-why-body"
    }, /*#__PURE__*/React.createElement("h3", null, it.t), /*#__PURE__*/React.createElement("p", null, it.b)));
  }))));
}

/* ---------- TALK TO A HUMAN ---------- */
function Talk({
  t,
  onBook,
  onCall
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "b3-talk"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-talk-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.talk.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.talk.heading), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t.talk.body
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, t.talk.cta_primary), /*#__PURE__*/React.createElement("button", {
    className: "b3-link-cta",
    onClick: onCall
  }, t.talk.cta_secondary, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* ---------- TESTIMONIAL ---------- */
function Testimonial({
  t,
  compact,
  rotate
}) {
  const list = rotate && Array.isArray(t.testimonials) && t.testimonials.length > 1 ? t.testimonials : [t.testimonial];
  const [i, setI] = useStateA(0);
  const [show, setShow] = useStateA(true);
  const go = n => {
    setShow(false);
    setTimeout(() => {
      setI((n % list.length + list.length) % list.length);
      setShow(true);
    }, 300);
  };
  useEffectA(() => {
    if (list.length < 2) return;
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI(n => (n + 1) % list.length);
        setShow(true);
      }, 300);
    }, 6000);
    return () => clearInterval(id);
  }, [list.length]);
  const tm = list[Math.min(i, list.length - 1)];
  const fade = {
    opacity: show ? 1 : 0,
    transform: show ? 'none' : 'translateY(6px)',
    transition: 'opacity 0.34s var(--ease-out), transform 0.34s var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("section", {
    className: `b3-tmt b3-wash${compact ? ' b3-tmt--compact' : ''}${list.length > 1 ? ' b3-tmt--rotating' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, t.reviews && /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.reviews.eyebrow), /*#__PURE__*/React.createElement("h2", null, t.reviews.heading)), /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-tmt-quotemark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("p", {
    className: "b3-tmt-quote",
    style: fade
  }, "\u201C", tm.quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-by",
    style: fade
  }, tm.name, " \xB7 ", tm.city), list.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "b3-tmt-dots",
    role: "tablist",
    "aria-label": "Testimonials"
  }, list.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    className: `b3-tmt-dot${n === i ? ' on' : ''}`,
    role: "tab",
    "aria-selected": n === i,
    "aria-label": `Testimonial ${n + 1}`,
    onClick: () => go(n)
  }))))));
}

/* ---------- RESULT ---------- */
const UNI = {
  leo: '♌',
  cancer: '♋',
  libra: '♎'
};
function ResultCard({
  variant,
  glyph,
  eyebrow,
  sign,
  uni,
  sub,
  text
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `b3-card b3-card--${variant}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-card-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-card-glyph"
  }, /*#__PURE__*/React.createElement(Luminary, {
    body: variant,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-card-heads"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-card-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    className: "b3-card-sign"
  }, sign))), /*#__PURE__*/React.createElement("div", {
    className: "b3-card-sub"
  }, sub), /*#__PURE__*/React.createElement("p", null, text));
}
function Result({
  t,
  hasTime,
  onBack,
  onBook,
  onCall,
  resultCta
}) {
  const r = t.result;
  const a = t.archetype;
  const synth = hasTime ? t.synthesis : t.synthesisNoTime;
  const signsLine = hasTime ? `${t.signs.leo} · ${t.signs.cancer} · ${t.signs.libra}` : `${t.signs.leo} · ${t.signs.cancer}`;
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-result"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-result-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), r.back), /*#__PURE__*/React.createElement("div", {
    className: "b3-result-kicker"
  }, r.kicker), /*#__PURE__*/React.createElement("img", {
    className: "b3-result-tri",
    src: `${ASSETP}/logos/b3a-icon-color.png`,
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-result-signs"
  }, hasTime ? /*#__PURE__*/React.createElement("span", null, t.signs.leo, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.cancer, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.libra) : /*#__PURE__*/React.createElement("span", null, t.signs.leo, /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "\u25C6"), t.signs.cancer)), r.sample_note ? /*#__PURE__*/React.createElement("p", {
    className: "b3-sample"
  }, r.sample_note) : null), /*#__PURE__*/React.createElement("div", {
    className: "b3-big3"
  }, /*#__PURE__*/React.createElement(ResultCard, {
    variant: "sun",
    glyph: `${ASSETP}/icons/glyph-sun.png`,
    eyebrow: r.sun_heading,
    sign: t.signs.leo,
    uni: UNI.leo,
    sub: r.sun_sub,
    text: a.sun_leo
  }), /*#__PURE__*/React.createElement(ResultCard, {
    variant: "moon",
    glyph: `${ASSETP}/icons/glyph-moon.png`,
    eyebrow: r.moon_heading,
    sign: t.signs.cancer,
    uni: UNI.cancer,
    sub: r.moon_sub,
    text: a.moon_cancer
  }), hasTime ? /*#__PURE__*/React.createElement(ResultCard, {
    variant: "rising",
    glyph: `${ASSETP}/icons/glyph-libra.png`,
    eyebrow: r.rising_heading,
    sign: t.signs.libra,
    uni: UNI.libra,
    sub: r.rising_sub,
    text: a.rising_libra
  }) : /*#__PURE__*/React.createElement("article", {
    className: "b3-card b3-card--rising b3-card--locked"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-card-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-lock-badge"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "6",
    width: "9",
    height: "6",
    rx: "1.4",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 6V4.5a2.5 2.5 0 015 0V6",
    stroke: "currentColor",
    strokeWidth: "1.3"
  })), r.rising_heading)), /*#__PURE__*/React.createElement("h4", null, r.locked_title), /*#__PURE__*/React.createElement("p", null, r.locked_body), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--sm",
    onClick: onCall
  }, t.nav.intro_call, " \xB7 CHF 20"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-synth"
  }, /*#__PURE__*/React.createElement("h3", null, r.synthesis_heading), synth.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--cream"
  }, "\u2736"), /*#__PURE__*/React.createElement("h3", null, r.cta_heading), /*#__PURE__*/React.createElement("p", null, r.cta_body), /*#__PURE__*/React.createElement("div", {
    className: "b3-cta-stack"
  }, /*#__PURE__*/React.createElement("button", {
    className: `b3-btn b3-btn--${resultCta || 'gold'}`,
    onClick: onBook
  }, r.cta_primary), /*#__PURE__*/React.createElement("button", {
    className: "b3-link-cta on-color",
    onClick: onCall
  }, r.cta_secondary, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
}

/* ---------- TWEAKS ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryCta": "#A4426C",
  "heroMedia": "animation",
  "heroLayout": "side",
  "formMode": "button",
  "introMode": "short",
  "socialProof": "high",
  "showSampleNote": true,
  "bandIntensity": "medium",
  "bandHeight": "compact",
  "pageWarmth": "#FEF9F5",
  "headingFont": "serif",
  "testimonials": "rotating",
  "cornerRadius": "soft",
  "resultCta": "gold",
  "vxHero": true,
  "vxDark": true,
  "vxTriad": true,
  "vxJournal": false,
  "vxType": true,
  "vxFooter": true,
  "vxBlend": true
} /*EDITMODE-END*/;
const VEIL = {
  soft: 0.34,
  medium: 0.20,
  bold: 0.08
};
const BAND = {
  compact: [240, 300],
  standard: [280, 380],
  tall: [340, 520]
};
const RADII_SHARP = {
  '--radius-sm': '3px',
  '--radius-md': '4px',
  '--radius-lg': '6px',
  '--radius-xl': '8px',
  '--radius-pill': '7px'
};
const CTA_FG = {
  '#A4426C': 'var(--b3a-cream)',
  '#F27678': '#ffffff',
  '#1B1B1B': 'var(--b3a-cream)'
};
const ROUTES = ['home', 'about', 'reading', 'call', 'relationship', 'journal', 'free-birth-chart', 'rising-sign', 'moon-sign', 'legal-notice', 'terms', 'cancellations-refunds', 'privacy', 'result'];
const readHashView = () => {
  const h = (window.location.hash || '').replace(/^#\/?/, '');
  return ROUTES.indexOf(h) > 0 ? h : 'home';
};

/* ---------- APP ROOT ---------- */
function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLangState] = useStateA(() => {
    try {
      return localStorage.getItem('b3a-lang') || 'en';
    } catch (e) {
      return 'en';
    }
  });
  const [view, setView] = useStateA(readHashView); // 'home' | 'result' | page routes
  const [hasTime, setHasTime] = useStateA(true);
  const [consent, setConsent] = useStateA('hidden'); // hidden | shown | done
  const [modalOpen, setModalOpen] = useStateA(false);
  const t = window.B3A_I18N[lang];
  useEffectA(() => {
    document.documentElement.lang = t.htmlLang;
  }, [lang]);

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
  const setLang = code => {
    setLangState(code);
    try {
      localStorage.setItem('b3a-lang', code);
    } catch (e) {}
  };

  // consent banner: show once shortly after load unless already answered
  useEffectA(() => {
    let answered = false;
    try {
      answered = !!localStorage.getItem('b3a-consent');
    } catch (e) {}
    if (answered) return;
    const id = setTimeout(() => setConsent('shown'), 1100);
    return () => clearTimeout(id);
  }, []);
  const closeConsent = choice => {
    setConsent('done');
    try {
      localStorage.setItem('b3a-consent', choice);
    } catch (e) {}
  };
  const reveal = ({
    hasTime
  }) => {
    setHasTime(hasTime);
    setModalOpen(false);
    setView('result');
    window.scrollTo(0, 0);
  };
  const goHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };
  const goBook = () => {
    setView('result');
    setHasTime(true);
    window.scrollTo(0, 0);
  };
  const go = route => {
    setModalOpen(false);
    setView(route);
    window.scrollTo(0, 0);
  };
  const toForm = () => {
    setView('home');
    setTimeout(() => {
      if (tw.formMode === 'button') {
        setModalOpen(true);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      const el = document.querySelector('.b3-form-card');
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }, 30);
  };
  const band = BAND[tw.bandHeight] || BAND.standard;
  const rootStyle = {
    '--cta-bg': tw.primaryCta,
    '--cta-fg': CTA_FG[tw.primaryCta] || 'var(--b3a-cream)',
    '--hero-veil': VEIL[tw.bandIntensity] != null ? VEIL[tw.bandIntensity] : 0.20,
    '--hero-band-m': band[0] + 'px',
    '--hero-band-d': band[1] + 'px',
    '--b3a-cream': tw.pageWarmth,
    '--surface-page': tw.pageWarmth,
    background: tw.pageWarmth,
    ...(tw.cornerRadius === 'sharp' ? RADII_SHARP : {})
  };
  const renderView = () => {
    switch (view) {
      case 'about':
        return /*#__PURE__*/React.createElement(AboutPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'reading':
        return /*#__PURE__*/React.createElement(ReadingPage, {
          t: t,
          go: go,
          onBook: goBook,
          onHome: goHome
        });
      case 'call':
        return /*#__PURE__*/React.createElement(CallPage, {
          t: t,
          go: go,
          onBook: goBook,
          onHome: goHome
        });
      case 'relationship':
        return /*#__PURE__*/React.createElement(RelationshipPage, {
          t: t,
          onBook: goBook,
          onHome: goHome
        });
      case 'journal':
        return /*#__PURE__*/React.createElement(JournalPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'free-birth-chart':
        return /*#__PURE__*/React.createElement(FreeBirthChartPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook,
          onHome: goHome
        });
      case 'rising-sign':
        return /*#__PURE__*/React.createElement(RisingPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook
        });
      case 'moon-sign':
        return /*#__PURE__*/React.createElement(MoonPage, {
          t: t,
          go: go,
          onForm: toForm,
          onBook: goBook
        });
      case 'legal-notice':
        return /*#__PURE__*/React.createElement(LegalNoticePage, {
          t: t,
          onHome: goHome
        });
      case 'terms':
        return /*#__PURE__*/React.createElement(TermsPage, {
          t: t,
          go: go,
          onHome: goHome
        });
      case 'cancellations-refunds':
        return /*#__PURE__*/React.createElement(RefundsPage, {
          t: t,
          onHome: goHome
        });
      case 'privacy':
        return /*#__PURE__*/React.createElement(PrivacyPage, {
          t: t,
          onHome: goHome
        });
      case 'result':
        return /*#__PURE__*/React.createElement(ResultView, {
          t: t,
          hasTime: hasTime,
          showNote: tw.showSampleNote,
          resultCta: tw.resultCta,
          onBack: toForm,
          onBook: goBook,
          onCall: goBook
        });
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
          t: t,
          onReveal: reveal,
          media: tw.heroMedia,
          layout: tw.heroLayout,
          formMode: tw.formMode,
          introMode: tw.introMode,
          onOpenModal: () => setModalOpen(true),
          showcase: tw.vxHero,
          blend: tw.vxBlend
        }), tw.socialProof === 'high' && /*#__PURE__*/React.createElement(Testimonial, {
          t: t,
          compact: true,
          rotate: tw.testimonials === 'rotating'
        }), /*#__PURE__*/React.createElement(Why, {
          t: t
        }), /*#__PURE__*/React.createElement(Talk, {
          t: t,
          onBook: goBook,
          onCall: goBook
        }), tw.socialProof === 'low' && /*#__PURE__*/React.createElement(Testimonial, {
          t: t,
          rotate: tw.testimonials === 'rotating'
        }));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-app${tw.vxDark ? ' vx-dark' : ''}${tw.vxTriad ? ' vx-triad' : ''}${tw.vxJournal ? ' vx-journal' : ''}${tw.vxType ? ' vx-type' : ''}`,
    "data-head": tw.headingFont,
    style: rootStyle
  }, /*#__PURE__*/React.createElement(Header, {
    t: t,
    lang: lang,
    setLang: setLang,
    onBook: goBook,
    onHome: goHome,
    onNav: go
  }), renderView(), /*#__PURE__*/React.createElement(Footer, {
    t: t,
    lang: lang,
    setLang: setLang,
    onNav: go,
    divider: tw.vxFooter
  }), /*#__PURE__*/React.createElement(ConsentBanner, {
    t: t,
    show: consent === 'shown',
    onClose: closeConsent
  }), /*#__PURE__*/React.createElement(FormModal, {
    t: t,
    open: modalOpen,
    onClose: () => setModalOpen(false),
    onReveal: reveal
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Brand media",
    value: tw.heroMedia,
    options: ['animation', 'still', 'none'],
    onChange: v => setTweak('heroMedia', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero layout",
    value: tw.heroLayout,
    options: ['side', 'banner', 'bg'],
    onChange: v => setTweak('heroLayout', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Intro text",
    value: tw.introMode,
    options: ['expand', 'short', 'full'],
    onChange: v => setTweak('introMode', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Band intensity",
    value: tw.bandIntensity,
    options: ['soft', 'medium', 'bold'],
    onChange: v => setTweak('bandIntensity', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Band height",
    value: tw.bandHeight,
    options: ['compact', 'standard', 'tall'],
    onChange: v => setTweak('bandHeight', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Conversion"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Big-3 form",
    value: tw.formMode,
    options: ['inline', 'button'],
    onChange: v => setTweak('formMode', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Social proof",
    value: tw.socialProof,
    options: ['low', 'high'],
    onChange: v => setTweak('socialProof', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Testimonials",
    value: tw.testimonials,
    options: ['single', 'rotating'],
    onChange: v => setTweak('testimonials', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Primary CTA",
    value: tw.primaryCta,
    options: ['#A4426C', '#F27678', '#1B1B1B'],
    onChange: v => setTweak('primaryCta', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Result"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Sample-chart note",
    value: tw.showSampleNote,
    onChange: v => setTweak('showSampleNote', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Result CTA",
    value: tw.resultCta,
    options: ['gold', 'wine'],
    onChange: v => setTweak('resultCta', v)
  }), /*#__PURE__*/React.createElement(TweakButton, {
    label: "Preview result (no birth time)",
    onClick: () => {
      setHasTime(false);
      setView('result');
      window.scrollTo(0, 0);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Page warmth",
    value: tw.pageWarmth,
    options: ['#FEF9F5', '#FCF4EA', '#F5F3EE'],
    onChange: v => setTweak('pageWarmth', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Headings",
    value: tw.headingFont,
    options: ['serif', 'sans'],
    onChange: v => setTweak('headingFont', v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Corners",
    value: tw.cornerRadius,
    options: ['soft', 'sharp'],
    onChange: v => setTweak('cornerRadius', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Redesign (vorher/nachher)"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Hero: Video-B\xFChne",
    value: tw.vxHero,
    onChange: v => setTweak('vxHero', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Headline \u2194 Video verschmelzen",
    value: tw.vxBlend,
    onChange: v => setTweak('vxBlend', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Reviews: dunkle Sektion",
    value: tw.vxDark,
    onChange: v => setTweak('vxDark', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Big-3-Karten: Triadenfarben",
    value: tw.vxTriad,
    onChange: v => setTweak('vxTriad', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Journal: gr\xF6\xDFere Bilder + Hover",
    value: tw.vxJournal,
    onChange: v => setTweak('vxJournal', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Typo-Feinschliff",
    value: tw.vxType,
    onChange: v => setTweak('vxType', v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Footer: Constellation",
    value: tw.vxFooter,
    onChange: v => setTweak('vxFooter', v)
  })));
}

/* result wrapper that can hide the sample note via tweak */
function ResultView({
  t,
  hasTime,
  showNote,
  resultCta,
  onBack,
  onBook,
  onCall
}) {
  const t2 = showNote ? t : {
    ...t,
    result: {
      ...t.result,
      sample_note: ''
    }
  };
  return /*#__PURE__*/React.createElement(Result, {
    t: t2,
    hasTime: hasTime,
    resultCta: resultCta,
    onBack: onBack,
    onBook: onBook,
    onCall: onCall
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app.jsx", error: String((e && e.message) || e) }); }

// site/bands.jsx
try { (() => {
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
    wide: 'brand/band-about-wide.webp',
    tall: 'brand/band-about-tall.webp',
    art: true,
    pos: 'center',
    posM: 'right center',
    heightM: 152,
    heightD: 228
  },
  reading: {
    wide: 'brand/band-reading-wide.webp',
    tall: 'brand/band-reading-tall.webp',
    art: true,
    pos: 'center 42%',
    posM: 'center 60%',
    heightM: 150,
    heightD: 236
  },
  birthchart: {
    wide: 'brand/band-birthchart.webp',
    art: false,
    pos: 'center 38%',
    posM: 'center 42%',
    heightM: 188,
    heightD: 250
  },
  moon: {
    wide: 'brand/band-moon.webp',
    art: false,
    pos: 'center 58%',
    posM: 'center 58%',
    heightM: 190,
    heightD: 250
  },
  rising: {
    wide: 'brand/band-rising.webp',
    art: false,
    pos: 'center 55%',
    posM: 'center 54%',
    heightM: 188,
    heightD: 246
  }
};

/* Decorative band image (no title). Used on its own or under PageHeader. */
function Band({
  slot,
  className = ''
}) {
  const b = BANDS[slot];
  if (!b) return null;
  const style = {
    '--bh-m': `${b.heightM}px`,
    '--bh-d': `${b.heightD}px`,
    '--bp': b.pos,
    '--bp-m': b.posM || b.pos
  };
  const pic = {
    backgroundImage: `url("${ASSETB}/${b.wide}")`,
    backgroundSize: 'cover',
    backgroundPosition: b.pos
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-band b3-band--${slot} ${className}`,
    style: style,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("picture", {
    style: pic
  }, b.art && /*#__PURE__*/React.createElement("source", {
    media: "(max-width: 640px)",
    srcSet: `${ASSETB}/${b.tall}`
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSETB}/${b.wide}`,
    alt: "",
    loading: "lazy",
    decoding: "async",
    width: "1376",
    height: "768"
  })));
}

/* Page header = decorative band + (optional) flexible title overlay.
   zone: 'left' | 'center'  ·  tone: 'dark' | 'light'
   Title + eyebrow flex for German; nothing is truncated. */
function PageHeader({
  slot,
  eyebrow,
  title,
  zone = 'left',
  tone = 'dark'
}) {
  const b = BANDS[slot];
  const style = {
    '--bh-m': `${b.heightM}px`,
    '--bh-d': `${b.heightD}px`,
    '--bp': b.pos,
    '--bp-m': b.posM || b.pos
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `b3-band b3-band--${slot} b3-band--header b3-band--${zone} b3-band--${tone}`,
    style: style
  }, /*#__PURE__*/React.createElement("picture", {
    "aria-hidden": "true",
    style: {
      backgroundImage: `url("${ASSETB}/${b.wide}")`,
      backgroundSize: 'cover',
      backgroundPosition: b.pos
    }
  }, b.art && /*#__PURE__*/React.createElement("source", {
    media: "(max-width: 640px)",
    srcSet: `${ASSETB}/${b.tall}`
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSETB}/${b.wide}`,
    alt: "",
    loading: "lazy",
    decoding: "async",
    width: "1376",
    height: "768"
  })), /*#__PURE__*/React.createElement("div", {
    className: "b3-band-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-band-inner b3-shell"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "b3-band-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title"
  }, title))));
}
Object.assign(window, {
  Band,
  PageHeader,
  B3A_BANDS: BANDS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/bands.jsx", error: String((e && e.message) || e) }); }

// site/decor.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Decorative inline SVG + motifs (enrichment)
   All marks are SVGO-light, token-colored, and CSS-animatable.
   Decorative → aria-hidden; illustrative → role="img" + <title>.
   Brand triad: Sun = coral · Moon = wine · Ascendant = gold.
   Shared via window for app.jsx / pages.jsx (React + Babel).
   ============================================================ */
const {
  useId: useIdD
} = React;
const TRIAD = {
  sun: 'var(--b3a-coral)',
  moon: 'var(--b3a-wine)',
  rising: 'var(--b3a-gold)'
};

/* Sun — disc + eight rays */
function SunMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.sun;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: c
  }), /*#__PURE__*/React.createElement("g", {
    stroke: c,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18.5",
    y1: "12",
    x2: "21.5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5.5",
    y1: "12",
    x2: "2.5",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "18.5",
    x2: "12",
    y2: "21.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5.5",
    x2: "12",
    y2: "2.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16.6",
    y1: "16.6",
    x2: "18.7",
    y2: "18.7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.4",
    y1: "7.4",
    x2: "5.3",
    y2: "5.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16.6",
    y1: "7.4",
    x2: "18.7",
    y2: "5.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7.4",
    y1: "16.6",
    x2: "5.3",
    y2: "18.7"
  })));
}

/* Moon — crescent via masked disc */
function MoonMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.moon;
  const id = useIdD();
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("mask", {
    id: id
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "10",
    r: "8",
    fill: "#000"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8",
    fill: c,
    mask: `url(#${id})`
  }));
}

/* Ascendant / Rising — a sun cresting the horizon */
function RisingMarkSvg({
  size = 24,
  color
}) {
  const c = color || TRIAD.rising;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 16a5 5 0 0 1 10 0",
    fill: c,
    fillOpacity: "0.9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "16.4",
    x2: "21",
    y2: "16.4",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: c,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    opacity: "0.85"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "6.4",
    x2: "12",
    y2: "4.2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6.7",
    y1: "8.4",
    x2: "5.4",
    y2: "7.1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "17.3",
    y1: "8.4",
    x2: "18.6",
    y2: "7.1"
  })));
}
const MARKS = {
  sun: SunMarkSvg,
  moon: MoonMarkSvg,
  rising: RisingMarkSvg
};
function Luminary({
  body = 'sun',
  size = 24,
  color,
  className = ''
}) {
  const C = MARKS[body] || SunMarkSvg;
  return /*#__PURE__*/React.createElement("span", {
    className: `b3-luminary ${className}`
  }, /*#__PURE__*/React.createElement(C, {
    size: size,
    color: color
  }));
}

/* Constellation divider — moon · rule · (libra) · rule · sun, with
   a couple of twinkling star dots. Decorative. */
function ConstellationDivider({
  variant = 'duo',
  className = '',
  tone
}) {
  const col = tone === 'gold' ? 'var(--b3a-gold)' : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-cdiv ${className}`,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Luminary, {
    body: "moon",
    size: 20,
    color: col
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-cdiv-rule"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "b3-cdiv-stars",
    viewBox: "0 0 100 8",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw1",
    cx: "26",
    cy: "4",
    r: "1.1",
    fill: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw2",
    cx: "62",
    cy: "3",
    r: "1.4",
    fill: col || 'var(--b3a-coral)'
  }), /*#__PURE__*/React.createElement("circle", {
    className: "b3-tw b3-tw3",
    cx: "82",
    cy: "5",
    r: "1",
    fill: col || 'var(--b3a-wine)'
  }))), variant === 'trinity' && /*#__PURE__*/React.createElement(Luminary, {
    body: "rising",
    size: 22,
    color: col
  }), variant === 'trinity' && /*#__PURE__*/React.createElement("span", {
    className: "b3-cdiv-rule"
  }), /*#__PURE__*/React.createElement(Luminary, {
    body: "sun",
    size: 20,
    color: col
  }));
}

/* Orbit motif — three luminaries travelling a shared arc. Illustrative,
   used as the "How it works" accent on the Full Reading page. */
function OrbitDiagram({
  className = ''
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: `b3-orbit-dia ${className}`,
    viewBox: "0 0 320 132",
    fill: "none",
    role: "img",
    "aria-label": "Three steps moving along one path: preparation, the live session, and a written summary."
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 104 Q160 4 304 104",
    stroke: "var(--b3a-wine)",
    strokeOpacity: "0.28",
    strokeWidth: "1.5",
    strokeDasharray: "2 7",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "104",
    r: "20",
    fill: "var(--b3a-plum-wash)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(4 92)"
  }, /*#__PURE__*/React.createElement(MoonMarkSvg, {
    size: 24
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "30",
    r: "22",
    fill: "var(--b3a-blush)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(147 17)"
  }, /*#__PURE__*/React.createElement(RisingMarkSvg, {
    size: 26
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "304",
    cy: "104",
    r: "20",
    fill: "#FCEBD6"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(292 92)"
  }, /*#__PURE__*/React.createElement(SunMarkSvg, {
    size: 24
  }))));
}
Object.assign(window, {
  Luminary,
  SunMarkSvg,
  MoonMarkSvg,
  RisingMarkSvg,
  ConstellationDivider,
  OrbitDiagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/decor.jsx", error: String((e && e.message) || e) }); }

// site/i18n.js
try { (() => {
/* ============================================================
   Big3 Astrology — Trilingual copy (EN / DE / ES)
   VERBATIM from the locked copy files 09 (EN), 10 (DE), 11 (ES).
   The ONLY non-deck strings are `consent.*` — an explicit
   placeholder the design brief asks for (to be wired to the
   Cloudflare Zaraz CMP, which ships its own localized strings).
   ============================================================ */
window.B3A_LOCALES = ['en', 'de', 'es'];
window.B3A_LOCALE_LABEL = {
  en: 'EN',
  de: 'DE',
  es: 'ES'
};

/* Demo Big 3 used to populate the result CONTAINER (brief: design the
   container, the live engine fills real signs). Fixed sample:
   Sun in Leo · Moon in Cancer · Rising in Libra. */

window.B3A_I18N = {
  /* ------------------------------------------------------------------ EN */
  en: {
    htmlLang: 'en',
    nav: {
      home: 'Home',
      reading: 'Full Reading',
      intro_call: '15-min Call',
      about: 'About',
      blog: 'Journal',
      book: 'Book a reading'
    },
    hero: {
      eyebrow: 'Free Big 3 · Sun · Moon · Rising',
      headline_a: 'Your Sun, Moon and Rising —',
      headline_em: 'read by a person, not an algorithm',
      intro: "Enter your birth date, time and place. In a few seconds you'll get your <b>Big&nbsp;3</b> — the three placements that shape how you act, how you feel, and how the world first meets you. Free, and written to actually mean something.",
      note: "No exact birth time? You'll still get your Sun and Moon — we'll help you find the rest.",
      intro_short: "Enter your birth date, time and place. In a few seconds you'll get your <b>Big&nbsp;3</b> — free, and written to actually mean something.",
      intro_lead: "Enter your birth date, time and place — in a few seconds you'll get your <b>Big&nbsp;3</b>.",
      intro_more: 'The three placements that shape how you act, how you feel, and how the world first meets you. Free, and written to actually mean something.',
      more: 'What you get',
      less: 'Show less',
      cta: 'Reveal my Big 3 — free',
      cta_sub: 'Free · about 20 seconds · no sign-up'
    },
    form: {
      heading: 'Get your Big 3 — free',
      date_label: 'Date of birth',
      time_label: 'Time of birth',
      time_optional: 'optional',
      time_helper: "As exact as you can. Don't know it? Leave it blank — you'll still get your Sun and Moon.",
      place_label: 'Place of birth',
      place_helper: 'City and country — start typing and choose from the list.',
      place_placeholder: 'e.g. Zürich, Switzerland',
      country_label: 'Country',
      submit: 'Reveal my Big 3',
      no_time_note: "No birth time entered — we'll show your Sun and Moon. Your Rising needs an exact time."
    },
    talk: {
      eyebrow: 'The real thing',
      heading: 'When you want the real thing, you talk to a human',
      body: 'Your free Big 3 is a glimpse. A <b>full natal reading</b> with Gabriela is the real conversation — your whole chart, prepared in advance and talked through live, with a written summary to keep. This is the reading most people come for.',
      cta_primary: 'Book a full reading — CHF 180',
      cta_secondary: 'Not sure yet? Start with a 15-minute call (CHF 20)'
    },
    why: {
      heading: 'Why Big 3 Astrology',
      items: [{
        t: 'A real astrologer, not an app.',
        b: 'Gabriela reads your chart herself — grounded, specific, and on your side.'
      }, {
        t: 'Psychological, not fortune-telling.',
        b: 'Your chart is a map of patterns and potential, never a fixed fate.'
      }, {
        t: 'In your language.',
        b: 'Readings in English, German and Spanish.'
      }]
    },
    testimonial: {
      quote: "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism.",
      name: 'Anna',
      city: 'Zürich'
    },
    reviews: {
      eyebrow: 'Consultation reviews',
      heading: 'Written in the stars'
    },
    testimonials: [{
      quote: "Gabriela's reading was surprisingly precise. I left with real clarity, not vague mysticism.",
      name: 'Anna',
      city: 'Zürich'
    }, {
      quote: 'She explained my chart in a way that felt thoughtful, grounded, and deeply personal.',
      name: 'Marc',
      city: 'Basel'
    }, {
      quote: 'I felt understood within minutes. The session was calm, sharp, and genuinely helpful.',
      name: 'Sofia',
      city: 'Madrid'
    }, {
      quote: 'What I appreciated most was how practical it felt. It gave me language for things I had felt for years.',
      name: 'Lukas',
      city: 'Winterthur'
    }, {
      quote: 'Warm, intelligent, and very human. I came for curiosity and left with insight I could actually use.',
      name: 'Julia',
      city: 'Barcelona'
    }],
    result: {
      back: 'Edit birth details',
      kicker: 'Your Big 3',
      sample_note: 'Showing a sample reading (Leo · Cancer · Libra). The live engine reads your exact Sun, Moon and Rising from your birth data.',
      sun_heading: 'Your Sun',
      sun_sub: 'What drives you',
      moon_heading: 'Your Moon',
      moon_sub: 'What you need to feel safe',
      rising_heading: 'Your Rising',
      rising_sub: 'How the world first meets you',
      synthesis_heading: 'Putting it together',
      locked_heading: 'Your Rising',
      locked_sub: 'How the world first meets you',
      locked_title: 'Locked without a birth time',
      locked_body: 'Your Rising changes about every two hours, so it needs an exact time. We can track yours down together — it’s one of the first things we’d sort out.',
      cta_heading: "That's your Big 3 — now the real conversation",
      cta_body: 'This is the short version of three placements. Your full chart has far more to say — and a reading turns it into something you can use.',
      cta_primary: 'Book a full reading — CHF 180',
      cta_secondary: 'Prefer to meet first? Book a 15-minute call (CHF 20)'
    },
    footer: {
      tagline: 'Human astrology in English, German and Spanish — read by a real astrologer, not an algorithm.',
      disclaimer: 'Astrology is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your free will.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Legal notice',
      links_terms: 'Terms',
      links_privacy: 'Privacy',
      links_refund: 'Cancellations & refunds',
      nav_label: 'Pages',
      legal_label: 'Legal',
      guides_label: 'Guides',
      contact_label: 'Contact',
      follow_label: 'Follow',
      guide_birth: 'Free birth chart',
      guide_rising: 'Rising sign',
      guide_moon: 'Moon sign',
      email: 'info@big3astrology.com',
      email_label: 'Email us'
    },
    consent: {
      /* PLACEHOLDER — not from copy deck; to be wired to Zaraz CMP */
      title: 'Your privacy',
      body: 'We use cookieless analytics by default — no banner needed for that. With your consent we’d enable ad measurement to reach more people who’d value a reading.',
      accept: 'Accept',
      reject: 'Reject',
      prefs: 'Preferences'
    },
    signs: {
      leo: 'Leo',
      cancer: 'Cancer',
      libra: 'Libra'
    },
    archetype: {
      sun_leo: "With your Sun in Leo, you're meant to shine — warm, generous, and naturally drawn to create and lead. When you're in your element, people light up around you; your encouragement can change how someone sees themselves. The edge: when the spotlight feels like the point, your confidence gets fragile, and you can mistake applause for love. At your best, you use your warmth to make others feel like the main character, not just yourself.",
      moon_cancer: "With your Moon in Cancer, you feel everything deeply — this is the Moon at home. You need belonging and emotional safety the way others need air, and you nurture the people you love almost without thinking. The edge: your moods move in tides, and protecting your soft centre by retreating can leave others guessing. Day to day, you offer a rare kind of care — the sense of being truly looked after, remembered, and held.",
      rising_libra: "With Libra Rising, first impressions of you tend to be warm: poised, easy to talk to, with an eye for beauty and a gift for putting people at ease. You read a room and smooth its edges almost automatically. The edge: in keeping the peace, your own preference can go unspoken — \u201CI don't mind\u201D isn't always true. Underneath the diplomacy is someone who quietly loves to lead, once you let yourself claim it."
    },
    synthesis: ["Put together, your Big 3 aren't three separate labels — they're three layers of one person: what drives you (Sun), what you need to feel safe (Moon), and how the world first meets you (Rising). Here's how yours fit together.", "Your three signs pull from different elements, which makes you genuinely many-sided — you can act, feel, and connect in different registers depending on what a moment needs. The art is letting those sides work together rather than against each other. You're wired to initiate — to start things, set direction, and get others moving. Beginnings come naturally; the practice is seeing them through. Your Sun and Moon are made of different stuff — what drives you outwardly and what soothes you inwardly don't always speak the same language. That can feel like an inner tug-of-war, but it's also what gives you range: two very different strengths in one person.", "This is the short version. A full reading takes all three — and the rest of your chart — and turns it into something you can actually use: where these energies help you, where they trip you up, and what to do about it. When you're ready, that's the conversation to have."],
    synthesisNoTime: ["Without your exact birth time we can't pin down your Rising sign — that one needs the clock, not just the date. But your Sun and Moon already tell you a lot: what drives you, and what you need to feel safe.", "Your Sun and Moon are made of different stuff — what drives you outwardly and what soothes you inwardly don't always speak the same language. That can feel like an inner tug-of-war, but it's also what gives you range: two very different strengths in one person.", "Your Rising — how the world first meets you — is the missing piece, and it's worth finding. We can track down your birth time together; it's one of the first things we'd sort out. When you're ready, let's talk."]
  },
  /* ------------------------------------------------------------------ DE */
  de: {
    htmlLang: 'de',
    nav: {
      home: 'Start',
      reading: 'Beratung',
      intro_call: '15-Min-Gespräch',
      about: 'Über mich',
      blog: 'Journal',
      book: 'Beratung buchen'
    },
    hero: {
      eyebrow: 'Big 3 gratis · Sonne · Mond · Aszendent',
      headline_a: 'Deine Sonne, dein Mond und dein Aszendent —',
      headline_em: 'gelesen von einem Menschen, nicht von einem Algorithmus',
      intro: 'Gib dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort ein. In wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b> — die drei Stellungen, die prägen, wie du handelst, wie du fühlst und wie die Welt dir zuerst begegnet. Kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      note: 'Keine genaue Geburtszeit? Sonne und Mond bekommst du trotzdem — beim Rest helfen wir dir.',
      intro_short: 'Gib dein Geburtsdatum, deine Geburtszeit und deinen Geburtsort ein. In wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b> — kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      intro_lead: 'Gib Geburtsdatum, -zeit und -ort ein — in wenigen Sekunden bekommst du deine <b>Big&nbsp;3</b>.',
      intro_more: 'Die drei Stellungen, die prägen, wie du handelst, wie du fühlst und wie die Welt dir zuerst begegnet. Kostenlos, und so geschrieben, dass es wirklich etwas bedeutet.',
      more: 'Was du bekommst',
      less: 'Weniger',
      cta: 'Meine Big 3 zeigen — kostenlos',
      cta_sub: 'Kostenlos · etwa 20 Sekunden · ohne Anmeldung'
    },
    form: {
      heading: 'Deine Big 3 — kostenlos',
      date_label: 'Geburtsdatum',
      time_label: 'Geburtszeit',
      time_optional: 'optional',
      time_helper: 'So genau wie möglich. Weisst du sie nicht? Lass das Feld leer — Sonne und Mond bekommst du trotzdem.',
      place_label: 'Geburtsort',
      place_helper: 'Stadt und Land — tipp los und wähl aus der Liste.',
      place_placeholder: 'z.\u202FB. Zürich, Schweiz',
      country_label: 'Land',
      submit: 'Meine Big 3 zeigen',
      no_time_note: 'Keine Geburtszeit angegeben — wir zeigen dir Sonne und Mond. Dein Aszendent braucht eine genaue Zeit.'
    },
    talk: {
      eyebrow: 'Das Echte',
      heading: 'Wenn du das Echte willst, sprichst du mit einem Menschen',
      body: 'Deine kostenlosen Big 3 sind ein erster Blick. Eine <b>ausführliche Geburtshoroskop-Beratung</b> bei Gabriela ist das echte Gespräch — dein ganzes Horoskop, im Voraus vorbereitet und live besprochen, mit einer schriftlichen Zusammenfassung zum Behalten. Das ist die Beratung, für die die meisten kommen.',
      cta_primary: 'Ausführliche Beratung buchen — CHF 180',
      cta_secondary: 'Noch unsicher? Starte mit einem 15-Minuten-Gespräch (CHF 20)'
    },
    why: {
      heading: 'Warum Big 3 Astrologie',
      items: [{
        t: 'Eine echte Astrologin, keine App.',
        b: 'Gabriela liest dein Horoskop selbst — geerdet, konkret und auf deiner Seite.'
      }, {
        t: 'Psychologisch, keine Wahrsagerei.',
        b: 'Dein Horoskop ist eine Landkarte von Mustern und Potenzial, niemals ein festes Schicksal.'
      }, {
        t: 'In deiner Sprache.',
        b: 'Beratungen auf Deutsch, Englisch und Spanisch.'
      }]
    },
    testimonial: {
      quote: 'Gabrielas Beratung war überraschend präzise. Ich ging mit echter Klarheit, nicht mit vagem Mystizismus.',
      name: 'Anna',
      city: 'Zürich'
    },
    reviews: {
      eyebrow: 'Erfahrungsberichte',
      heading: 'In den Sternen geschrieben'
    },
    result: {
      back: 'Geburtsdaten ändern',
      kicker: 'Deine Big 3',
      sample_note: 'Beispiel-Reading (Löwe · Krebs · Waage). Die Live-Engine liest deine genaue Sonne, deinen Mond und Aszendenten aus deinen Geburtsdaten.',
      sun_heading: 'Deine Sonne',
      sun_sub: 'Was dich antreibt',
      moon_heading: 'Dein Mond',
      moon_sub: 'Was du brauchst, um dich sicher zu fühlen',
      rising_heading: 'Dein Aszendent',
      rising_sub: 'Wie die Welt dir zuerst begegnet',
      synthesis_heading: 'Alles zusammen',
      locked_heading: 'Dein Aszendent',
      locked_sub: 'Wie die Welt dir zuerst begegnet',
      locked_title: 'Ohne Geburtszeit gesperrt',
      locked_body: 'Dein Aszendent wechselt etwa alle zwei Stunden und braucht darum eine genaue Zeit. Wir können sie gemeinsam aufspüren — das ist eines der ersten Dinge, die wir klären würden.',
      cta_heading: 'Das sind deine Big 3 — jetzt das echte Gespräch',
      cta_body: 'Das ist die Kurzfassung von drei Stellungen. Dein ganzes Horoskop hat viel mehr zu sagen — und eine Beratung macht daraus etwas, das du nutzen kannst.',
      cta_primary: 'Ausführliche Beratung buchen — CHF 180',
      cta_secondary: 'Lieber erst kennenlernen? Buch ein 15-Minuten-Gespräch (CHF 20)'
    },
    footer: {
      tagline: 'Menschliche Astrologie auf Deutsch, Englisch und Spanisch — gelesen von einer echten Astrologin, nicht von einem Algorithmus.',
      disclaimer: 'Astrologie dient der Einsicht und Selbstreflexion. Sie ist keine medizinische, psychologische, finanzielle oder rechtliche Beratung und hebt deinen freien Willen niemals auf.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Impressum',
      links_terms: 'AGB',
      links_privacy: 'Datenschutz',
      links_refund: 'Stornierung & Rückerstattung',
      nav_label: 'Seiten',
      legal_label: 'Rechtliches',
      guides_label: 'Ratgeber',
      contact_label: 'Kontakt',
      follow_label: 'Folgen',
      guide_birth: 'Geburtshoroskop',
      guide_rising: 'Aszendent',
      guide_moon: 'Mondzeichen',
      email: 'info@big3astrology.com',
      email_label: 'Schreib uns'
    },
    consent: {
      /* PLATZHALTER */
      title: 'Deine Privatsphäre',
      body: 'Wir nutzen standardmässig cookielose Analyse — dafür braucht es kein Banner. Mit deiner Zustimmung würden wir Werbe-Messung aktivieren, um mehr Menschen zu erreichen, denen eine Beratung guttäte.',
      accept: 'Annehmen',
      reject: 'Ablehnen',
      prefs: 'Einstellungen'
    },
    signs: {
      leo: 'Löwe',
      cancer: 'Krebs',
      libra: 'Waage'
    },
    archetype: {
      sun_leo: 'Mit der Sonne im Löwen bist du zum Leuchten gemacht — warm, grosszügig und ganz natürlich fürs Gestalten und Führen geschaffen. Wenn du in deinem Element bist, leben Menschen um dich herum auf; dein Zuspruch kann verändern, wie jemand sich selbst sieht. Die Kante: Wenn das Rampenlicht zum Sinn wird, wird dein Selbstvertrauen brüchig, und du verwechselst Applaus mit Liebe. Im besten Fall machst du mit deiner Wärme andere zur Hauptfigur, nicht nur dich.',
      moon_cancer: 'Mit dem Mond im Krebs fühlst du alles zutiefst — das ist der Mond zuhause. Du brauchst Zugehörigkeit und emotionale Sicherheit wie andere die Luft, und du umsorgst die Menschen, die du liebst, fast ohne nachzudenken. Die Kante: Deine Stimmungen bewegen sich in Gezeiten, und deinen weichen Kern durch Rückzug zu schützen lässt andere rätseln. Im Alltag schenkst du eine seltene Fürsorge — das Gefühl, wirklich umsorgt, erinnert und gehalten zu sein.',
      rising_libra: 'Mit Aszendent Waage ist der erste Eindruck von dir meist warm: ausgeglichen, leicht ansprechbar, mit einem Auge für Schönheit und einer Gabe, Menschen zu entspannen. Du liest einen Raum und glättest seine Kanten fast automatisch. Die Kante: Beim Friedenhalten bleibt deine eigene Vorliebe unausgesprochen — \u201Emir egal\u201C stimmt nicht immer. Unter der Diplomatie steckt jemand, der still gern führt, sobald du dir das zugestehst.'
    },
    synthesis: ['Zusammen sind deine Big 3 keine drei getrennten Etiketten — sie sind drei Schichten eines Menschen: was dich antreibt (Sonne), was du brauchst, um dich sicher zu fühlen (Mond), und wie die Welt dir zuerst begegnet (Aszendent). So passen deine zusammen.', 'Deine drei Zeichen schöpfen aus verschiedenen Elementen, was dich wirklich vielseitig macht — du kannst handeln, fühlen und dich verbinden, je nachdem, was ein Moment braucht. Die Kunst ist, diese Seiten zusammenwirken statt gegeneinander arbeiten zu lassen. Du bist fürs Initiieren gemacht — Dinge anzustossen, Richtung zu geben und andere in Bewegung zu bringen. Anfänge fallen dir leicht; die Übung ist, sie zu Ende zu bringen. Deine Sonne und dein Mond sind aus verschiedenem Stoff — was dich nach aussen antreibt und was dich innen beruhigt, sprechen nicht immer dieselbe Sprache. Das kann sich wie ein inneres Tauziehen anfühlen, gibt dir aber auch Bandbreite: zwei sehr verschiedene Stärken in einem Menschen.', 'Das ist die Kurzfassung. Eine ausführliche Beratung nimmt alle drei — und den Rest deines Horoskops — und macht daraus etwas, das du wirklich nutzen kannst: wo diese Energien dir helfen, wo sie dich stolpern lassen und was du damit tun kannst. Wenn du bereit bist, ist das das Gespräch dazu.'],
    synthesisNoTime: ['Ohne deine genaue Geburtszeit können wir deinen Aszendenten nicht festlegen — der braucht die Uhr, nicht nur das Datum. Aber deine Sonne und dein Mond erzählen schon viel: was dich antreibt und was du brauchst, um dich sicher zu fühlen.', 'Deine Sonne und dein Mond sind aus verschiedenem Stoff — was dich nach aussen antreibt und was dich innen beruhigt, sprechen nicht immer dieselbe Sprache. Das kann sich wie ein inneres Tauziehen anfühlen, gibt dir aber auch Bandbreite: zwei sehr verschiedene Stärken in einem Menschen.', 'Dein Aszendent — wie die Welt dir zuerst begegnet — ist das fehlende Stück, und es lohnt sich, es zu finden. Wir können deine Geburtszeit gemeinsam aufspüren; das ist eines der ersten Dinge, die wir klären würden. Wenn du bereit bist, lass uns reden.']
  },
  /* ------------------------------------------------------------------ ES */
  es: {
    htmlLang: 'es',
    nav: {
      home: 'Inicio',
      reading: 'Lectura',
      intro_call: 'Llamada de 15 min',
      about: 'Sobre mí',
      blog: 'Diario',
      book: 'Reservar lectura'
    },
    hero: {
      eyebrow: 'Big 3 gratis · Sol · Luna · Ascendente',
      headline_a: 'Tu Sol, tu Luna y tu Ascendente:',
      headline_em: 'leídos por una persona, no por un algoritmo',
      intro: 'Introduce tu fecha, hora y lugar de nacimiento. En unos segundos tendrás tus <b>Big&nbsp;3</b>: las tres posiciones que dan forma a cómo actúas, cómo sientes y cómo te encuentra el mundo al principio. Gratis, y escritas para que de verdad signifiquen algo.',
      note: '¿No sabes la hora exacta? Aun así tendrás tu Sol y tu Luna; con el resto te ayudamos.',
      intro_short: 'Introduce tu fecha, hora y lugar de nacimiento. En unos segundos tendrás tus <b>Big&nbsp;3</b> — gratis, y escritas para que de verdad signifiquen algo.',
      intro_lead: 'Introduce fecha, hora y lugar de nacimiento — en unos segundos tendrás tus <b>Big&nbsp;3</b>.',
      intro_more: 'Las tres posiciones que dan forma a cómo actúas, cómo sientes y cómo te encuentra el mundo al principio. Gratis, y escritas para que de verdad signifiquen algo.',
      more: 'Qué obtienes',
      less: 'Menos',
      cta: 'Ver mis Big 3 — gratis',
      cta_sub: 'Gratis · unos 20 segundos · sin registro'
    },
    form: {
      heading: 'Tus Big 3 — gratis',
      date_label: 'Fecha de nacimiento',
      time_label: 'Hora de nacimiento',
      time_optional: 'opcional',
      time_helper: 'Lo más exacta posible. ¿No la sabes? Déjala en blanco: aun así tendrás tu Sol y tu Luna.',
      place_label: 'Lugar de nacimiento',
      place_helper: 'Ciudad y país: empieza a escribir y elige de la lista.',
      place_placeholder: 'p.\u202Fej. Zúrich, Suiza',
      country_label: 'País',
      submit: 'Ver mis Big 3',
      no_time_note: 'No has indicado la hora de nacimiento: te mostramos el Sol y la Luna. Tu Ascendente necesita una hora exacta.'
    },
    talk: {
      eyebrow: 'Lo de verdad',
      heading: 'Cuando quieras lo de verdad, hablas con una persona',
      body: 'Tus Big 3 gratis son un vistazo. Una <b>lectura completa de tu carta astral</b> con Gabriela es la conversación de verdad: tu carta entera, preparada de antemano y conversada en directo, con un resumen escrito para conservar. Es la lectura por la que vienen la mayoría.',
      cta_primary: 'Reservar una lectura completa — CHF 180',
      cta_secondary: '¿Aún con dudas? Empieza con una llamada de 15 minutos (CHF 20)'
    },
    why: {
      heading: 'Por qué Astrología Big 3',
      items: [{
        t: 'Una astróloga real, no una app.',
        b: 'Gabriela lee tu carta ella misma: con los pies en la tierra, concreta y de tu lado.'
      }, {
        t: 'Psicológica, no adivinación.',
        b: 'Tu carta es un mapa de patrones y potencial, nunca un destino fijo.'
      }, {
        t: 'En tu idioma.',
        b: 'Lecturas en español, inglés y alemán.'
      }]
    },
    testimonial: {
      quote: 'La lectura de Gabriela fue sorprendentemente precisa. Salí con claridad real, no con misticismo vago.',
      name: 'Anna',
      city: 'Zúrich'
    },
    reviews: {
      eyebrow: 'Reseñas de consultas',
      heading: 'Escrito en las estrellas'
    },
    result: {
      back: 'Editar datos de nacimiento',
      kicker: 'Tus Big 3',
      sample_note: 'Lectura de ejemplo (Leo · Cáncer · Libra). El motor en vivo lee tu Sol, tu Luna y tu Ascendente exactos a partir de tus datos de nacimiento.',
      sun_heading: 'Tu Sol',
      sun_sub: 'Lo que te impulsa',
      moon_heading: 'Tu Luna',
      moon_sub: 'Lo que necesitas para sentirte seguro',
      rising_heading: 'Tu Ascendente',
      rising_sub: 'Cómo te encuentra el mundo al principio',
      synthesis_heading: 'Todo junto',
      locked_heading: 'Tu Ascendente',
      locked_sub: 'Cómo te encuentra el mundo al principio',
      locked_title: 'Bloqueado sin la hora de nacimiento',
      locked_body: 'Tu Ascendente cambia más o menos cada dos horas, así que necesita una hora exacta. Podemos rastrear la tuya juntos: es de las primeras cosas que resolveríamos.',
      cta_heading: 'Esos son tus Big 3: ahora la conversación de verdad',
      cta_body: 'Esta es la versión corta de tres posiciones. Tu carta completa tiene mucho más que decir, y una lectura la convierte en algo que puedes usar.',
      cta_primary: 'Reservar una lectura completa — CHF 180',
      cta_secondary: '¿Prefieres conocernos antes? Reserva una llamada de 15 minutos (CHF 20)'
    },
    footer: {
      tagline: 'Astrología humana en español, inglés y alemán: leída por una astróloga real, no por un algoritmo.',
      disclaimer: 'La astrología se ofrece para la introspección y la reflexión personal. No es asesoramiento médico, psicológico, financiero ni legal, y nunca anula tu libre albedrío.',
      rights: '© 2026 Big Astrology GmbH',
      links_legal: 'Aviso legal',
      links_terms: 'Términos',
      links_privacy: 'Privacidad',
      links_refund: 'Cancelaciones y reembolsos',
      nav_label: 'Páginas',
      legal_label: 'Legal',
      guides_label: 'Guías',
      contact_label: 'Contacto',
      follow_label: 'Síguenos',
      guide_birth: 'Carta natal gratis',
      guide_rising: 'Ascendente',
      guide_moon: 'Signo lunar',
      email: 'info@big3astrology.com',
      email_label: 'Escríbenos'
    },
    consent: {
      /* MARCADOR DE POSICIÓN */
      title: 'Tu privacidad',
      body: 'Usamos analítica sin cookies por defecto: para eso no hace falta banner. Con tu consentimiento activaríamos la medición de anuncios para llegar a más personas a quienes les vendría bien una lectura.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      prefs: 'Preferencias'
    },
    signs: {
      leo: 'Leo',
      cancer: 'Cáncer',
      libra: 'Libra'
    },
    archetype: {
      sun_leo: 'Con el Sol en Leo, estás hecho para brillar: cálido, generoso y atraído de forma natural a crear y liderar. Cuando estás en tu elemento, la gente se enciende a tu alrededor; tu aliento puede cambiar cómo alguien se ve a sí mismo. El punto: cuando el foco se vuelve el objetivo, tu confianza se vuelve frágil, y puedes confundir el aplauso con el amor. En tu mejor versión, usas tu calidez para hacer protagonistas a los demás, no solo a ti.',
      moon_cancer: 'Con la Luna en Cáncer, lo sientes todo profundamente: esta es la Luna en casa. Necesitas pertenencia y seguridad emocional como otros necesitan el aire, y cuidas a quienes amas casi sin pensarlo. El punto: tus estados de ánimo se mueven como mareas, y proteger tu centro blando retirándote deja a otros adivinando. En el día a día, ofreces un cuidado poco común: la sensación de ser de verdad atendido, recordado y sostenido.',
      rising_libra: 'Con Ascendente Libra, la primera impresión de ti suele ser cálida: equilibrado, fácil de tratar, con ojo para la belleza y un don para poner a la gente a gusto. Lees una sala y suavizas sus aristas casi en automático. El punto: al mantener la paz, tu propia preferencia queda sin decir; «me da igual» no siempre es verdad. Bajo la diplomacia hay alguien que en silencio disfruta de liderar, en cuanto te lo permites.'
    },
    synthesis: ['Juntos, tus Big 3 no son tres etiquetas separadas, sino tres capas de una misma persona: lo que te impulsa (Sol), lo que necesitas para sentirte seguro (Luna) y cómo te encuentra el mundo al principio (Ascendente). Así encajan los tuyos.', 'Tus tres signos beben de elementos distintos, lo que te hace de verdad polifacético: puedes actuar, sentir y conectar en registros diferentes según lo que pida el momento. El arte está en dejar que esas facetas trabajen juntas, no una contra otra. Estás hecho para iniciar: arrancar cosas, marcar la dirección y poner a otros en marcha. Los comienzos te salen naturales; la práctica es llevarlos hasta el final. Tu Sol y tu Luna están hechos de materias distintas: lo que te impulsa hacia fuera y lo que te calma por dentro no siempre hablan el mismo idioma. Puede sentirse como un tira y afloja interior, pero también es lo que te da amplitud: dos fortalezas muy distintas en una persona.', 'Esta es la versión corta. Una lectura completa toma los tres —y el resto de tu carta— y los convierte en algo que de verdad puedes usar: dónde te ayudan estas energías, dónde te hacen tropezar y qué hacer al respecto. Cuando estés listo, esa es la conversación.'],
    synthesisNoTime: ['Sin tu hora exacta de nacimiento no podemos fijar tu Ascendente: ese necesita el reloj, no solo la fecha. Pero tu Sol y tu Luna ya dicen mucho: lo que te impulsa y lo que necesitas para sentirte seguro.', 'Tu Sol y tu Luna están hechos de materias distintas: lo que te impulsa hacia fuera y lo que te calma por dentro no siempre hablan el mismo idioma. Puede sentirse como un tira y afloja interior, pero también es lo que te da amplitud: dos fortalezas muy distintas en una persona.', 'Tu Ascendente —cómo te encuentra el mundo al principio— es la pieza que falta, y vale la pena hallarla. Podemos rastrear tu hora de nacimiento juntos; es de las primeras cosas que resolveríamos. Cuando estés listo, hablemos.']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/i18n.js", error: String((e && e.message) || e) }); }

// site/legal.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Legal pages
   Legal notice · Terms · Cancellations & refunds · Privacy.
   Simple, readable long-form template (no bands). Copy is
   VERBATIM from the EN source set (09_EN v1.0).
   ============================================================ */
const {
  useEffect: useEffectL
} = React;
function useTopL() {
  useEffectL(() => {
    window.scrollTo(0, 0);
  }, []);
}
function LegalLayout({
  t,
  eyebrow,
  title,
  onHome,
  children
}) {
  useTopL();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page b3-legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-legal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "b3-page-back-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-page-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), t.nav.home))));
}
const MAIL = 'info@big3astrology.com';
function Mail() {
  return /*#__PURE__*/React.createElement("a", {
    href: `mailto:${MAIL}`
  }, MAIL);
}

/* ---- Legal notice ---- */
function LegalNoticePage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_legal,
    title: "Legal Notice"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Big Astrology GmbH"), /*#__PURE__*/React.createElement("br", null), "R\xE4nkestrasse 21", /*#__PURE__*/React.createElement("br", null), "8700 K\xFCsnacht ZH", /*#__PURE__*/React.createElement("br", null), "Switzerland"), /*#__PURE__*/React.createElement("p", null, "Email: ", /*#__PURE__*/React.createElement(Mail, null)), /*#__PURE__*/React.createElement("p", null, "Managing Director: Gabriela Brecht", /*#__PURE__*/React.createElement("br", null), "Commercial register / VAT: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "[UID CHE-___.___.___ \u2014 to be added once the GmbH is registered]")), /*#__PURE__*/React.createElement("p", null, "Responsible for content: Gabriela Brecht, address as above."));
}

/* ---- Terms ---- */
function TermsPage({
  t,
  go,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_terms,
    title: "Terms & Conditions"
  }, /*#__PURE__*/React.createElement("h2", null, "1. Provider"), /*#__PURE__*/React.createElement("p", null, "These terms govern services offered by Big Astrology GmbH, R\xE4nkestrasse 21, 8700 K\xFCsnacht ZH, Switzerland (\u201Cwe\u201D, \u201Cus\u201D). Contact: ", /*#__PURE__*/React.createElement(Mail, null), "."), /*#__PURE__*/React.createElement("h2", null, "2. Services"), /*#__PURE__*/React.createElement("p", null, "We offer astrological readings: a free Big-3 overview, a 15-minute intro call (CHF 20), a full natal reading (CHF 180), and a relationship reading (CHF 250). Readings are delivered live over Google Meet, with a written summary where stated."), /*#__PURE__*/React.createElement("h2", null, "3. Bookings & payment"), /*#__PURE__*/React.createElement("p", null, "Bookings are made through our scheduling provider. Payment is due at booking, by card or TWINT, processed by our payment provider. Prices are in Swiss francs (CHF) and include any applicable Swiss VAT."), /*#__PURE__*/React.createElement("h2", null, "4. Cancellations & rescheduling"), /*#__PURE__*/React.createElement("p", null, "See our ", /*#__PURE__*/React.createElement("a", {
    href: "#cancellations-refunds",
    onClick: e => {
      e.preventDefault();
      go('cancellations-refunds');
    }
  }, "Cancellations & Refunds"), " page."), /*#__PURE__*/React.createElement("h2", null, "5. Nature of services \u2014 important"), /*#__PURE__*/React.createElement("p", null, "Our readings are provided for insight, reflection and entertainment. They are ", /*#__PURE__*/React.createElement("strong", null, "not"), " medical, psychological, financial or legal advice, and are no substitute for professional care. You remain responsible for your own decisions. Astrology does not predict or determine the future and never overrides your free will."), /*#__PURE__*/React.createElement("h2", null, "6. Liability"), /*#__PURE__*/React.createElement("p", null, "To the extent permitted by law, our liability is limited to intent and gross negligence. We are not liable for decisions you make based on a reading."), /*#__PURE__*/React.createElement("h2", null, "7. Governing law"), /*#__PURE__*/React.createElement("p", null, "Swiss law applies. Place of jurisdiction is K\xFCsnacht ZH, Switzerland, to the extent permitted by law."));
}

/* ---- Cancellations & refunds ---- */
function RefundsPage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_refund,
    title: "Cancellations & Refunds"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Reschedule:"), " free of charge up to 24 hours before your session, using the link in your confirmation email."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Cancel:"), " at least 24 hours before your session for a full refund. Within 24 hours the fee is non-refundable, as the preparation time has been reserved for you."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "No-show:"), " if you miss your session without notice, the fee is non-refundable."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "The 15-minute intro call (CHF 20)"), " is non-refundable once it has taken place and is not credited toward other readings."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Problems on our side:"), " if we need to cancel or reschedule, you're offered a new time or a full refund \u2014 your choice.")), /*#__PURE__*/React.createElement("p", null, "Questions? Email ", /*#__PURE__*/React.createElement(Mail, null), "."));
}

/* ---- Privacy ---- */
function PrivacyPage({
  t,
  onHome
}) {
  return /*#__PURE__*/React.createElement(LegalLayout, {
    t: t,
    onHome: onHome,
    eyebrow: t.footer.links_privacy,
    title: "Privacy"
  }, /*#__PURE__*/React.createElement("p", null, "We keep this simple and collect as little as possible."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Your birth details"), " (date, time, place) are used only to calculate your Big 3 and to prepare your reading. We don't sell them or share them for advertising."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Booking & payment"), " are handled by our scheduling and payment providers, who process your name, email and payment data to deliver the service."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Analytics:"), " we use privacy-friendly, cookieless analytics. We don't use advertising cookies or cross-site tracking, so there's no cookie banner to click."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Your rights:"), " email ", /*#__PURE__*/React.createElement(Mail, null), " to ask what we hold about you, or to have it corrected or deleted.")), /*#__PURE__*/React.createElement("p", null, "Controller: Big Astrology GmbH, R\xE4nkestrasse 21, 8700 K\xFCsnacht ZH, Switzerland."));
}
Object.assign(window, {
  LegalNoticePage,
  TermsPage,
  RefundsPage,
  PrivacyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/legal.jsx", error: String((e && e.message) || e) }); }

// site/pages.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — Content page views
   About · Full natal reading · 15-min call · Relationship ·
   Journal index · 3 pillar articles.
   Copy is VERBATIM from the EN source set (09_EN v1.0) — not
   rewritten. Decorative brand bands via PageHeader / Band.
   ============================================================ */
const {
  useEffect: useEffectP
} = React;

/* in-prose SPA link */
function A({
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick();
    }
  }, children);
}

/* scroll to top whenever a page mounts */
function useTop() {
  useEffectP(() => {
    window.scrollTo(0, 0);
  }, []);
}

/* back-to-home affordance */
function PageBack({
  label,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-page-back",
    onClick: onHome
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3M6 4L3 7l3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), label));
}

/* ============================================================ ABOUT */
function AboutPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "about",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.about,
    title: "Gabriela Brecht"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-about-bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      color: 'var(--b3a-ink)',
      lineHeight: 1.45
    }
  }, "I read charts the way I once read teams \u2014 looking for what's really going on underneath, and what wants to happen next."), /*#__PURE__*/React.createElement("p", null, "Before astrology was my work, it was the lens I never put down. I spent years in business and hold two degrees \u2014 one in Switzerland, one from Cambridge \u2014 but the same question always pulled at me: ", /*#__PURE__*/React.createElement("em", null, "why do we move the way we move, and what are we each here to grow into?")), /*#__PURE__*/React.createElement("p", null, "Today I'm a ", /*#__PURE__*/React.createElement("strong", null, "psychological astrologer"), ": I treat your chart as a map of patterns, gifts and growth edges \u2014 never a fixed fate. My training is in psychological and archetypal astrology, including the ", /*#__PURE__*/React.createElement("strong", null, "Debra Silverman"), " method (USA)."), /*#__PURE__*/React.createElement("p", null, "Born in Caracas, living in Z\xFCrich, I work in ", /*#__PURE__*/React.createElement("strong", null, "English, German and Spanish"), " \u2014 drawn to where astrology meets real life: relationships, decisions, and how people work together."), /*#__PURE__*/React.createElement("p", null, "If that resonates, your Big 3 is a good first step. When you want the full picture, ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "let's talk"), ".")), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, "Astrology here is offered for insight and self-reflection. It is not medical, psychological, financial or legal advice, and it never overrides your own free will.")), /*#__PURE__*/React.createElement("aside", {
    className: "b3-about-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-portrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${window.B3A_ASSET}/brand/gabriela-portrait.webp`,
    alt: "Astrologer Gabriela Brecht",
    width: "860",
    height: "860",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("p", {
    className: "b3-portrait-cap"
  }, "Gabriela Brecht, psychological astrologer, Z\xFCrich.")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ FULL NATAL READING (CHF 180) */
function ReadingPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "reading"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '15ch'
    }
  }, "Your full natal reading ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 180")), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "The whole picture, read by a human and prepared just for you. Not a generated report \u2014 real preparation, a real conversation, and something to take away. This is the reading most people are really looking for."), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement(OrbitDiagram, {
    className: "b3-included-orbit"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "90+ minutes of preparation"), " before we meet \u2014 I study your chart in depth so our time together is about ", /*#__PURE__*/React.createElement("em", null, "you"), ", not setup."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A 60-minute live session"), " on Google Meet to talk it through, ask anything, and connect it to your real life."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "A written summary"), " afterwards, so the insight stays with you long after the call.")), /*#__PURE__*/React.createElement("p", null, "This is psychological astrology: your strengths, your patterns, your growth edges \u2014 and how to actually work with them. You leave understanding yourself a little more clearly than you did before."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "Ready when you are"), /*#__PURE__*/React.createElement("p", null, "Reading for two? Add a ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('relationship')
  }, "relationship reading (CHF 250 total)"), ".")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ 15-MIN CALL (CHF 20, secondary) */
/* On-brand celestial illustration: orbit rings + a 15-minute quarter-arc
   accent, a crescent moon & a small sun "meeting". Pure primitives. */
function CallVisual() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "b3-call-art",
    viewBox: "0 0 260 260",
    role: "img",
    "aria-label": "A celestial illustration of a short fifteen-minute window between the moon and sun",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "b3callbg",
    cx: "50%",
    cy: "42%",
    r: "62%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--b3a-blush)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--b3a-sand)"
  })), /*#__PURE__*/React.createElement("mask", {
    id: "b3crescent"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "260",
    height: "260",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "142",
    cy: "120",
    r: "30",
    fill: "#000"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "118",
    fill: "url(#b3callbg)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "104",
    stroke: "var(--b3a-wine)",
    strokeOpacity: "0.16",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "130",
    r: "78",
    stroke: "var(--b3a-gold-deep)",
    strokeOpacity: "0.30",
    strokeWidth: "1",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130 26 A104 104 0 0 1 234 130",
    stroke: "var(--b3a-coral)",
    strokeWidth: "4.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "26",
    r: "4",
    fill: "var(--b3a-gold-deep)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "234",
    cy: "130",
    r: "5.5",
    fill: "var(--b3a-coral)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "130",
    cy: "120",
    r: "34",
    fill: "var(--b3a-wine)",
    mask: "url(#b3crescent)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--b3a-gold-deep)",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "182",
    y1: "84",
    x2: "182",
    y2: "74"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "182",
    y1: "106",
    x2: "182",
    y2: "116"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "171",
    y1: "95",
    x2: "161",
    y2: "95"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "193",
    y1: "95",
    x2: "203",
    y2: "95"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "174",
    y1: "87",
    x2: "167",
    y2: "80"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "190",
    y1: "103",
    x2: "197",
    y2: "110"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "190",
    y1: "87",
    x2: "197",
    y2: "80"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "174",
    y1: "103",
    x2: "167",
    y2: "110"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "182",
    cy: "95",
    r: "9",
    fill: "var(--b3a-gold)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "78",
    cy: "86",
    r: "2.2",
    fill: "var(--b3a-gold-deep)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "92",
    cy: "184",
    r: "1.8",
    fill: "var(--b3a-wine)",
    fillOpacity: "0.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "186",
    cy: "176",
    r: "2.4",
    fill: "var(--b3a-coral)",
    fillOpacity: "0.75"
  }));
}
function CallPage({
  t,
  go,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-call-intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.intro_call), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '16ch'
    }
  }, "Not sure yet? Let's meet first ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 20")), /*#__PURE__*/React.createElement("p", {
    className: "b3-offer-lede"
  }, "If a full reading feels like a big first step, start smaller. In 15 minutes you'll get a real feel for how I work and a mini-reading of something live in your chart right now \u2014 so you can decide about a full reading with no guesswork.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-call-aside",
    "aria-hidden": "false"
  }, /*#__PURE__*/React.createElement(CallVisual, null), /*#__PURE__*/React.createElement("span", {
    className: "b3-call-art-cap"
  }, "A short 15-minute window"))), /*#__PURE__*/React.createElement("div", {
    className: "b3-included"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 'clamp(23px,5.4vw,29px)',
      color: 'var(--b3a-ink)'
    }
  }, "You get"), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "A focused 15-minute video call on Google Meet"), /*#__PURE__*/React.createElement("li", null, "A mini-reading on one thing that matters to you now"), /*#__PURE__*/React.createElement("li", null, "An honest sense of whether a full reading is right for you")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Good to know:"), " this call is its own thing \u2014 the CHF 20 isn't credited toward a full reading. It's simply the easiest way to meet me before you commit. Ready for the full picture instead? ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Book a full reading (CHF 180)"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--lg",
    onClick: onBook
  }, "Book the 15-minute call"))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ RELATIONSHIP READING (CHF 250) */
function RelationshipPage({
  t,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '34px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow"
  }, t.nav.reading), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '10px',
      maxWidth: '17ch'
    }
  }, "Relationship & couples reading ", /*#__PURE__*/React.createElement("span", {
    className: "b3-h1-price"
  }, "\u2014 CHF 250")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure",
    style: {
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Two charts, side by side. We look at how you and another person actually meet \u2014 where you flow easily, where you stretch each other, and what each of you needs to feel met and understood."), /*#__PURE__*/React.createElement("p", null, "It's the full natal reading, extended to two people: the same depth of preparation, a live 60-minute session on Google Meet, and a written summary \u2014 with a second chart added for ", /*#__PURE__*/React.createElement("strong", null, "CHF 70"), " on top of the standard CHF 180."), /*#__PURE__*/React.createElement("p", null, "Good for couples, but just as valuable for any pairing that matters: a co-founder, a parent, a close friend.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-cta",
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--lg",
    onClick: onBook
  }, "Book a relationship reading")))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* ============================================================ JOURNAL INDEX */
const PILLARS = [{
  route: 'free-birth-chart',
  slot: 'birthchart',
  kicker: 'Birth chart',
  title: 'Free Birth Chart: Your Big 3, Explained',
  blurb: 'What a birth chart is, why the Big 3 carry most of the signal, and how to get yours free.'
}, {
  route: 'rising-sign',
  slot: 'rising',
  kicker: 'Rising sign',
  title: 'Calculate Your Rising Sign — and What It Means',
  blurb: 'How the world first meets you, why it needs an exact birth time, and how to find yours.'
}, {
  route: 'moon-sign',
  slot: 'moon',
  kicker: 'Moon sign',
  title: 'Calculate Your Moon Sign — and What It Means',
  blurb: 'Your emotional inner world — what it means, and why you usually don\u2019t need a birth time.'
}];
function JournalPage({
  t,
  go,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, "\u2736 ", t.nav.blog), /*#__PURE__*/React.createElement("h1", null, "Guides to your Big 3"), /*#__PURE__*/React.createElement("p", null, "Answer-first reads on your birth chart, your Rising and your Moon \u2014 then calculate yours in seconds.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-journal-grid"
  }, PILLARS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.route,
    className: "b3-jcard",
    onClick: () => go(p.route)
  }, /*#__PURE__*/React.createElement(Band, {
    slot: p.slot
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-jcard-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-jcard-kicker"
  }, p.kicker), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.blurb), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Read the guide", /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8M8 4l3 3-3 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))))), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.home,
    onHome: onHome
  }));
}

/* shared FAQ accordion */
function Faq({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i
  }, /*#__PURE__*/React.createElement("summary", null, it.q, /*#__PURE__*/React.createElement("span", {
    className: "icn",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ans"
  }, it.a))));
}

/* shared inline CTA → full reading */
function PillarCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-inline-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("h4", null, "When you want the real thing"), /*#__PURE__*/React.createElement("p", null, "Your Big 3 is the start. A full natal reading turns your whole chart into something you can use.")), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary",
    onClick: onBook
  }, "Book a full reading \u2014 CHF 180"));
}
const DISCLAIMER = 'Astrology is offered for insight and self-reflection — not medical, psychological, financial or legal advice.';

/* ============================================================ PILLAR 1 — FREE BIRTH CHART */
function FreeBirthChartPage({
  t,
  go,
  onForm,
  onBook,
  onHome
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(Band, {
    slot: "birthchart"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-offer-intro b3-measure",
    style: {
      paddingTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-eyebrow b3-eyebrow--gold"
  }, t.nav.blog), /*#__PURE__*/React.createElement("h1", {
    className: "b3-band-title",
    style: {
      color: 'var(--b3a-ink)',
      marginTop: '8px',
      maxWidth: '18ch'
    }
  }, "Free Birth Chart: Your Big 3, Explained")), /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer",
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "a birth chart is a map of the sky at the exact moment you were born. The three most important points in it are your ", /*#__PURE__*/React.createElement("strong", null, "Sun, Moon and Rising sign"), " \u2014 your \u201CBig 3.\u201D You can get all three free here in a few seconds by entering your birth date, time and place. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Get your Big 3 free.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("p", null, "A full birth chart has dozens of pieces \u2014 planets, signs, houses, angles. But you don't need all of it to learn something real about yourself. The Big 3 carry most of the signal, which is why they're the right place to start."), /*#__PURE__*/React.createElement("h2", null, "What is a birth chart?"), /*#__PURE__*/React.createElement("p", null, "A birth chart (or natal chart) is a snapshot of where the Sun, Moon and planets were, from your point of view on Earth, at your moment of birth. Because the sky is always moving, your chart is essentially unique \u2014 even people born the same day in different places have different Rising signs."), /*#__PURE__*/React.createElement("p", null, "To calculate it accurately you need three things:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Date of birth"), " \u2014 sets the Sun and most planet positions."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Time of birth"), " \u2014 sets your Rising sign and the houses. This is the one people most often miss."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Place of birth"), " \u2014 sets the chart to your spot on Earth.")), /*#__PURE__*/React.createElement("h2", null, "Your Big 3: the three that matter most"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Sun \u2014 what drives you."), " Your core identity and what lights you up. The sign you already know (\u201CI'm a Leo\u201D)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Moon \u2014 what you need to feel safe."), " Your inner, emotional world: how you feel, soothe, and recharge."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Rising (Ascendant) \u2014 how the world first meets you."), " The impression you make and your instinctive way of approaching life.")), /*#__PURE__*/React.createElement("p", null, "Together they explain why two people of the \u201Csame sign\u201D can feel completely different. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "For the Sun and Moon, usually no \u2014 your date is enough. For your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign, yes"), ": it changes roughly every two hours, so even a rough time helps and an exact one is best. Don't know it? You'll still get your Sun and Moon, and we can help you track the time down for a full reading."), /*#__PURE__*/React.createElement("h2", null, "What a free chart can and can't tell you"), /*#__PURE__*/React.createElement("p", null, "A free Big-3 is a genuine, accurate starting point \u2014 but it's a summary, not the whole story. It won't show how your placements interact, where your strengths and friction really sit, or what to do with any of it. That's the job of a full reading: a real astrologer taking your whole chart and turning it into something useful. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Is the birth chart really free?',
      a: 'Yes — your Big 3 (Sun, Moon and Rising) and a short synthesis are free, with no sign-up.'
    }, {
      q: 'Is this accurate?',
      a: 'Yes. We calculate real planetary positions for your date, time and place — the same astronomy professional astrologers use.'
    }, {
      q: "What if I don't know my birth time?",
      a: "You'll get your Sun and Moon. Your Rising needs an exact time — we can help you find it."
    }, {
      q: "What's the difference between this and a reading?",
      a: 'The free chart is a summary you read yourself. A reading is a live conversation with an astrologer who interprets your whole chart for your actual life.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 2 — RISING SIGN */
function RisingPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "rising",
    zone: "left",
    tone: "dark",
    eyebrow: t.nav.blog,
    title: "Calculate Your Rising Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Rising sign (or Ascendant) is the zodiac sign that was coming up over the horizon at the exact minute you were born. To calculate it you need your birth date, ", /*#__PURE__*/React.createElement("strong", null, "exact time"), ", and place. Enter them here and get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Rising sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Rising sign?"), /*#__PURE__*/React.createElement("p", null, "While your Sun sign is about who you are at your core, your ", /*#__PURE__*/React.createElement("strong", null, "Rising sign is about how you come across"), " \u2014 your instinctive style, your first impression, the \u201Cfront door\u201D people walk through to reach you. It also sets the structure of your whole chart (the houses), which is why astrologers care about it so much."), /*#__PURE__*/React.createElement("h2", null, "Why you need your exact birth time"), /*#__PURE__*/React.createElement("p", null, "The Ascendant moves fast \u2014 through all twelve signs in 24 hours, so roughly ", /*#__PURE__*/React.createElement("strong", null, "one new sign every two hours"), ". That's why your date alone can't give it to you, and why a birth time that's off by even an hour can land you on the wrong sign. With an exact time, your Rising is accurate; with only an approximate time, treat the result as a strong guess."), /*#__PURE__*/React.createElement("h3", null, "How to find your birth time"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Check your ", /*#__PURE__*/React.createElement("strong", null, "birth certificate"), " \u2014 in many countries the time is recorded."), /*#__PURE__*/React.createElement("li", null, "Ask a ", /*#__PURE__*/React.createElement("strong", null, "parent or close family member"), "."), /*#__PURE__*/React.createElement("li", null, "Request your ", /*#__PURE__*/React.createElement("strong", null, "birth record"), " from the hospital or civil registry where you were born.")), /*#__PURE__*/React.createElement("h2", null, "What your Rising sign means"), /*#__PURE__*/React.createElement("p", null, "Your Rising colours everything from your body language to how you handle new situations. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Rising (Aries, Leo, Sagittarius):"), " you come across as direct, warm, energetic."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Rising (Taurus, Virgo, Capricorn):"), " you come across as grounded, capable, composed."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Rising (Gemini, Libra, Aquarius):"), " you come across as sociable, curious, easy to talk to."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Rising (Cancer, Scorpio, Pisces):"), " you come across as sensitive, magnetic, a little harder to read.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a fuller, personal description of your specific Rising sign. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Rising, Sun and Moon \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Rising is one third of your Big 3. Paired with your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Moon"), " (what you need), it explains the gap between how people first read you and who you actually are underneath. A full reading connects all three \u2014 and the rest of your chart \u2014 into something you can use. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Rising sign without a birth time?',
      a: "Not reliably. The Ascendant changes about every two hours, so an exact time is needed. Without it, we'll show your Sun and Moon instead."
    }, {
      q: 'Is Rising sign the same as Ascendant?',
      a: 'Yes — “Rising sign” and “Ascendant” are two names for the same thing.'
    }, {
      q: 'Why is my Rising sign different from my Sun sign?',
      a: "They measure different things: your Sun is your core self; your Rising is your outward style and the moment-by-moment setup of your chart. Most people's differ."
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}

/* ============================================================ PILLAR 3 — MOON SIGN */
function MoonPage({
  t,
  go,
  onForm,
  onBook
}) {
  useTop();
  return /*#__PURE__*/React.createElement("main", {
    className: "b3-page"
  }, /*#__PURE__*/React.createElement(PageHeader, {
    slot: "moon",
    zone: "left",
    tone: "light",
    eyebrow: t.nav.blog,
    title: "Calculate Your Moon Sign \u2014 and What It Means"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "b3-shortanswer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Short answer"), "your Moon sign is the zodiac sign the Moon was in when you were born. It represents your emotional inner world \u2014 what you feel and what you need to feel safe. Enter your birth date and place to get it free in seconds. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "Calculate your Moon sign.")), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure b3-page-intro"
  }, /*#__PURE__*/React.createElement("h2", null, "What is a Moon sign?"), /*#__PURE__*/React.createElement("p", null, "If your Sun sign is who you are in the daylight, your ", /*#__PURE__*/React.createElement("strong", null, "Moon sign is who you are in private"), " \u2014 your feelings, your instincts, what soothes you and what you need from the people closest to you. It's often the placement people recognise themselves in most once they read it."), /*#__PURE__*/React.createElement("h2", null, "Do I need my exact birth time?"), /*#__PURE__*/React.createElement("p", null, "Usually not. The Moon moves through a sign in about ", /*#__PURE__*/React.createElement("strong", null, "two to two-and-a-half days"), ", so your birth date is normally enough to place it. The exception: if you were born on a day the Moon changed signs, the time matters \u2014 when that's the case, we'll let you know. (Your ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " sign is the one that always needs an exact time.)"), /*#__PURE__*/React.createElement("h2", null, "What your Moon sign means"), /*#__PURE__*/React.createElement("p", null, "Your Moon describes your emotional style \u2014 how you process feelings, comfort yourself, and bond with others. A quick sketch by element:"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Fire Moon (Aries, Leo, Sagittarius):"), " feelings are fast, warm, expressive."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Earth Moon (Taurus, Virgo, Capricorn):"), " feelings are steady, practical, grounded."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Air Moon (Gemini, Libra, Aquarius):"), " feelings are processed by thinking and talking."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Water Moon (Cancer, Scorpio, Pisces):"), " feelings run deep, intuitive, and strong.")), /*#__PURE__*/React.createElement("p", null, "Your free result gives you a personal description of your specific Moon sign \u2014 including its strengths and its growth edge. ", /*#__PURE__*/React.createElement(A, {
    onClick: onForm
  }, "See yours now.")), /*#__PURE__*/React.createElement("h2", null, "Why your Moon sign can surprise you"), /*#__PURE__*/React.createElement("p", null, "Many people relate to their Moon sign more than their Sun. That's because your Sun sign is often the self you show, while your Moon is the self you actually feel \u2014 and the two aren't always the same. Seeing them side by side is where it gets interesting."), /*#__PURE__*/React.createElement("h2", null, "Moon, Sun and Rising \u2014 the full picture"), /*#__PURE__*/React.createElement("p", null, "Your Moon is one third of your Big 3, alongside your ", /*#__PURE__*/React.createElement("strong", null, "Sun"), " (what drives you) and ", /*#__PURE__*/React.createElement("strong", null, "Rising"), " (how the world meets you). A full reading takes all three \u2014 and the rest of your chart \u2014 and turns it into practical insight about your relationships, your patterns, and what you need to thrive. ", /*#__PURE__*/React.createElement(A, {
    onClick: () => go('reading')
  }, "Learn about a full natal reading."))), /*#__PURE__*/React.createElement(PillarCta, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-prose b3-measure"
  }, /*#__PURE__*/React.createElement("h2", null, "Frequently asked questions")), /*#__PURE__*/React.createElement(Faq, {
    items: [{
      q: 'Can I find my Moon sign without a birth time?',
      a: 'Usually yes — the date is normally enough. Only if you were born on a day the Moon changed signs does the time matter.'
    }, {
      q: 'Why does my Moon sign feel more “me” than my Sun sign?',
      a: 'Because your Moon is your private, emotional self, while your Sun is often the self you present. Many people identify with it strongly.'
    }, {
      q: "What's the difference between a Moon sign and a Sun sign?",
      a: 'Your Sun is your core identity and drive; your Moon is your emotional needs and instincts. You have both, and they work together.'
    }]
  }), /*#__PURE__*/React.createElement("p", {
    className: "b3-disclaimer"
  }, DISCLAIMER)), /*#__PURE__*/React.createElement(PageBack, {
    label: t.nav.blog,
    onHome: () => go('journal')
  }));
}
Object.assign(window, {
  AboutPage,
  ReadingPage,
  CallPage,
  RelationshipPage,
  JournalPage,
  FreeBirthChartPage,
  RisingPage,
  MoonPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/pages.jsx", error: String((e && e.message) || e) }); }

// site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// site/ui.jsx
try { (() => {
/* ============================================================
   Big3 Astrology — UI chrome (header, footer, consent, bits)
   Shared via window for app.jsx. React + Babel.
   ============================================================ */
const {
  useState,
  useEffect,
  useRef
} = React;
const ASSET = '../assets';
const LOCALES = window.B3A_LOCALES;
const LABEL = window.B3A_LOCALE_LABEL;

/* ---- language switcher (pills — used in footer) ---- */
function LangSwitcher({
  lang,
  setLang,
  idPrefix = 'lang'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-lang",
    role: "group",
    "aria-label": "Language"
  }, LOCALES.map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    id: `${idPrefix}-${code}`,
    "aria-pressed": lang === code,
    onClick: () => setLang(code)
  }, LABEL[code])));
}

/* ---- language dropdown (compact — used in header) ---- */
const LANG_NAMES = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español'
};
function LangDropdown({
  lang,
  setLang
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "b3-langdd",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-langdd-btn",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-label": "Language",
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.4",
    stroke: "currentColor",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.7 8h12.6M8 1.6c1.7 1.7 2.6 3.9 2.6 6.4S9.7 12.7 8 14.4C6.3 12.7 5.4 10.5 5.4 8S6.3 3.3 8 1.6Z",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, LABEL[lang]), /*#__PURE__*/React.createElement("svg", {
    className: "b3-langdd-chev",
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transform: open ? 'rotate(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: `b3-langdd-menu${open ? ' open' : ''}`,
    role: "listbox",
    "aria-label": "Language"
  }, LOCALES.map(code => /*#__PURE__*/React.createElement("button", {
    key: code,
    role: "option",
    "aria-selected": lang === code,
    className: `b3-langdd-opt${lang === code ? ' sel' : ''}`,
    onClick: () => {
      setLang(code);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-langdd-code"
  }, LABEL[code]), /*#__PURE__*/React.createElement("span", {
    className: "b3-langdd-name"
  }, LANG_NAMES[code]), lang === code && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5l3 3 6-7",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}

/* ---- 5 gold stars ---- */
function Stars() {
  return /*#__PURE__*/React.createElement("span", {
    className: "b3-stars",
    "aria-label": "5 out of 5"
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i
  }, "\u2736")));
}

/* ---- small celestial sun-burst mark (for form heading) ---- */
function SunMark({
  className
}) {
  return /*#__PURE__*/React.createElement("img", {
    className: className,
    src: `${ASSET}/icons/glyph-sun.png`,
    alt: "",
    "aria-hidden": "true"
  });
}

/* ---- wordmark lockup (trinity mark + Jost word) ---- */
function Wordmark({
  tone = 'ink'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "b3-logo-mark",
    src: `${ASSET}/logos/b3a-icon-color.png`,
    alt: "",
    "aria-hidden": "true",
    style: tone === 'cream' ? {
      filter: 'brightness(0) invert(1)'
    } : null
  }), /*#__PURE__*/React.createElement("span", {
    className: "b3-logo-word"
  }, "Big\xA03 Astrology"));
}

/* ---- header ---- */
const NAV_ROUTE = {
  home: 'home',
  reading: 'reading',
  intro_call: 'call',
  about: 'about',
  blog: 'journal'
};
function Header({
  t,
  lang,
  setLang,
  onBook,
  onHome,
  onNav
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [['home', t.nav.home], ['reading', t.nav.reading], ['intro_call', t.nav.intro_call], ['about', t.nav.about], ['blog', t.nav.blog]];
  const nav = key => e => {
    e.preventDefault();
    setOpen(false);
    (onNav || onHome)(NAV_ROUTE[key] || 'home');
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `b3-hdr${scrolled ? ' scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell b3-hdr-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-logo",
    onClick: () => {
      setOpen(false);
      onHome && onHome();
    },
    "aria-label": "Big 3 Astrology \u2014 home"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "b3-nav",
    "aria-label": "Primary"
  }, navItems.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: nav(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-hdr-right"
  }, /*#__PURE__*/React.createElement(LangDropdown, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--sm b3-book",
    onClick: onBook
  }, t.nav.book), /*#__PURE__*/React.createElement("button", {
    className: `b3-hamburger${open ? ' open' : ''}`,
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: `b3-mobile-menu${open ? ' open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile"
  }, navItems.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: nav(k)
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "b3-mm-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--block",
    onClick: () => {
      setOpen(false);
      onBook();
    }
  }, t.nav.book))))));
}

/* ---- footer ---- */
const LEGAL_ROUTE = {
  legal: 'legal-notice',
  terms: 'terms',
  privacy: 'privacy',
  refund: 'cancellations-refunds'
};
function Footer({
  t,
  lang,
  setLang,
  onNav,
  divider
}) {
  const legal = [['legal', t.footer.links_legal], ['terms', t.footer.links_terms], ['privacy', t.footer.links_privacy], ['refund', t.footer.links_refund]];
  const pages = [['home', t.nav.home], ['reading', t.nav.reading], ['intro_call', t.nav.intro_call], ['about', t.nav.about], ['blog', t.nav.blog]];
  const guides = [['free-birth-chart', t.footer.guide_birth], ['rising-sign', t.footer.guide_rising], ['moon-sign', t.footer.guide_moon]];
  const f = t.footer;
  const navTo = route => e => {
    e.preventDefault();
    (onNav || (() => {}))(route);
  };
  const go = key => navTo(NAV_ROUTE[key] || 'home');
  const goLegal = key => navTo(LEGAL_ROUTE[key] || 'home');
  return /*#__PURE__*/React.createElement("footer", {
    className: "b3-ftr",
    role: "contentinfo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-shell"
  }, divider && window.ConstellationDivider && /*#__PURE__*/React.createElement(ConstellationDivider, {
    variant: "trinity",
    tone: "gold",
    className: "b3-ftr-cdiv"
  }), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "b3-logo",
    href: "#",
    onClick: navTo('home'),
    "aria-label": "Big 3 Astrology \u2014 home"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "cream"
  })), /*#__PURE__*/React.createElement("p", {
    className: "b3-ftr-tag"
  }, f.tagline), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-social",
    "aria-label": f.follow_label
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/big3astrology",
    target: "_blank",
    rel: "noopener noreferrer me",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.2",
    cy: "6.8",
    r: "1.2",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${f.email}`,
    "aria-label": f.email_label
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2.5",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l8 6 8-6",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement("nav", {
    className: "b3-ftr-cols",
    "aria-label": f.nav_label
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.nav_label), pages.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: go(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.guides_label), guides.map(([route, label]) => /*#__PURE__*/React.createElement("a", {
    key: route,
    href: "#",
    onClick: navTo(route)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col"
  }, /*#__PURE__*/React.createElement("h4", null, f.legal_label), legal.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: goLegal(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-col b3-ftr-col--contact"
  }, /*#__PURE__*/React.createElement("h4", null, f.contact_label), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${f.email}`
  }, f.email), /*#__PURE__*/React.createElement("address", {
    className: "b3-ftr-addr"
  }, "Big Astrology GmbH", /*#__PURE__*/React.createElement("br", null), "R\xE4nkestrasse 21", /*#__PURE__*/React.createElement("br", null), "8700 K\xFCsnacht ZH", /*#__PURE__*/React.createElement("br", null), "Switzerland")))), /*#__PURE__*/React.createElement("p", {
    className: "b3-ftr-disc"
  }, f.disclaimer), /*#__PURE__*/React.createElement("div", {
    className: "b3-ftr-base"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b3-ftr-rights"
  }, f.rights, " \xB7 K\xFCsnacht ZH, Switzerland"))));
}

/* ---- consent banner (placeholder for Zaraz CMP) ---- */
function ConsentBanner({
  t,
  show,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `b3-consent${show ? ' show' : ''}`,
    role: "dialog",
    "aria-label": t.consent.title,
    "aria-hidden": !show
  }, /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-title"
  }, t.consent.title), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-body"
  }, t.consent.body), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--primary b3-btn--sm",
    onClick: () => onClose('accept')
  }, t.consent.accept), /*#__PURE__*/React.createElement("button", {
    className: "b3-btn b3-btn--ghost b3-btn--sm",
    onClick: () => onClose('reject')
  }, t.consent.reject), /*#__PURE__*/React.createElement("button", {
    className: "prefs",
    onClick: () => onClose('prefs')
  }, t.consent.prefs)), /*#__PURE__*/React.createElement("div", {
    className: "b3-consent-tag"
  }, "Placeholder \xB7 Cloudflare Zaraz CMP"));
}
Object.assign(window, {
  LangSwitcher,
  LangDropdown,
  Stars,
  SunMark,
  Header,
  Footer,
  ConsentBanner,
  B3A_ASSET: ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/app.jsx
try { (() => {
/* Big3 Astrology — Instagram kit interactive app */
const {
  useState
} = React;
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 412,
      background: '#000',
      borderRadius: 52,
      padding: 12,
      boxShadow: '0 40px 90px -30px rgba(58,30,44,.55)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 42,
      overflow: 'hidden',
      height: 858
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 120,
      height: 28,
      background: '#000',
      borderRadius: 16,
      zIndex: 5
    }
  }), children));
}
function App() {
  const [view, setView] = useState('profile'); // 'profile' | 'feed'
  const [openId, setOpenId] = useState(null);
  const W = 388;
  const open = openId && POSTS.find(p => p.id === openId);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '48px 24px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(IGStatusBar, null), /*#__PURE__*/React.createElement(IGTopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, open ? /*#__PURE__*/React.createElement(PostFrame, {
    post: open,
    w: W,
    onBack: () => setOpenId(null)
  }) : view === 'profile' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 18,
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\u2190"), " big3astrology ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 18
    }
  }, "\u22EE")), /*#__PURE__*/React.createElement(ProfileHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid #efefef',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
      borderBottom: '2px solid #111',
      fontSize: 20
    }
  }, "\u25A6"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
      color: '#aaa',
      fontSize: 20
    }
  }, "\u2637")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 2
    }
  }, POSTS.concat(POSTS).map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setOpenId(p.id),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(PostScaler, {
    Comp: p.Comp,
    w: (W - 4) / 3
  }))))) : /*#__PURE__*/React.createElement("div", null, POSTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    onClick: () => setOpenId(p.id),
    style: {
      cursor: 'pointer',
      borderBottom: '1px solid #fafafa'
    }
  }, /*#__PURE__*/React.createElement(PostFrame, {
    post: p,
    w: W
  }))))), /*#__PURE__*/React.createElement(IGBottomNav, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230,
      position: 'sticky',
      top: 48,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/b3a-full-color-black.png`,
    alt: "Big 3 Astrology",
    style: {
      width: 200,
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Instagram Kit"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      marginBottom: 18
    }
  }, "The Big 3 feed system. Switch between the profile grid and the scrolling feed; tap any post to open it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setView('profile');
      setOpenId(null);
    },
    style: tab(view === 'profile')
  }, "Profile grid"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setView('feed');
      setOpenId(null);
    },
    style: tab(view === 'feed')
  }, "Feed")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Templates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setOpenId(p.id),
    style: {
      ...row,
      ...(openId === p.id ? rowActive : {})
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--b3a-coral)'
    }
  }, p.cat))))));
}
const tab = on => ({
  flex: 1,
  padding: '9px 12px',
  borderRadius: 8,
  border: '1.5px solid ' + (on ? 'var(--b3a-wine)' : 'var(--b3a-line-strong)'),
  background: on ? 'var(--b3a-wine)' : 'transparent',
  color: on ? 'var(--b3a-cream)' : 'var(--b3a-ink)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: '.04em',
  cursor: 'pointer'
});
const row = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '9px 12px',
  borderRadius: 8,
  border: '1px solid var(--b3a-line)',
  background: '#fff',
  color: 'var(--b3a-ink)',
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  cursor: 'pointer',
  textAlign: 'left'
};
const rowActive = {
  borderColor: 'var(--b3a-wine)',
  background: 'var(--b3a-plum-wash)'
};
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/posts.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Big3 Astrology — Instagram post templates (1080×1080 canvas).
   Faithful recreations of the delivered feed system. Self-contained
   (token-driven) so the kit renders standalone. Shared to window for
   the multi-file Babel setup. Asset base resolves from ui_kits/instagram/. */
const ASSET = '../../assets';
const ICON = (name, props = {}) => /*#__PURE__*/React.createElement("img", _extends({
  src: `${ASSET}/icons/glyph-${name}.png`,
  alt: ""
}, props));

/* 1080×1080 square canvas wrapper */
function Square({
  bg = 'var(--b3a-cream)',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      background: bg,
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--b3a-ink)',
      ...style
    }
  }, children);
}

/* thin rule flanked by two glyphs */
function Connector({
  color = 'var(--b3a-wine)',
  size = 30,
  trinity = false
}) {
  const rule = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      height: 2,
      background: color,
      opacity: .55
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      justifyContent: 'center'
    }
  }, ICON('moon', {
    style: {
      height: size
    }
  }), rule, trinity && ICON('libra', {
    style: {
      height: size * 1.5
    }
  }), trinity && rule, ICON('sun', {
    style: {
      height: size
    }
  }));
}

/* ---------- 1 · Affirmation (cream minimal) ---------- */
function PostAffirmation() {
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-cream)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 60,
      padding: 120,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/b3a-icon-color.png`,
    alt: "",
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontSize: 78,
      lineHeight: 1.18,
      letterSpacing: '.01em',
      color: 'var(--b3a-ink)',
      margin: 0
    }
  }, "Sometimes", /*#__PURE__*/React.createElement("br", null), "later becomes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--b3a-wine)'
    }
  }, "never."), /*#__PURE__*/React.createElement("br", null), "Do it now."), /*#__PURE__*/React.createElement(Connector, {
    color: "var(--b3a-wine)",
    size: 34
  })));
}

/* ---------- 2 · Mantra list (amber full bleed) ---------- */
function PostMantra() {
  const rows = [['Align', 'I am aligned with my soul\u2019s journey'], ['Courage', 'I align with courage to face obstacles'], ['Intuition', 'My intuition is always leading me to the right place'], ['Strength', 'I am strong, I am capable, I am brave'], ['Knowledge', 'I am a source of inner knowledge']];
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-amber)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '96px 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/icons/glyph-libra.png`,
    alt: "",
    style: {
      height: 80,
      filter: 'brightness(0) invert(1)',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--b3a-wine)',
      marginTop: 18,
      lineHeight: 1.3
    }
  }, "Mantras for", /*#__PURE__*/React.createElement("br", null), "Aries Season"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      letterSpacing: '.22em',
      color: 'var(--b3a-cream)',
      textTransform: 'uppercase',
      marginTop: 10
    }
  }, "22 March / 21 April"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 54,
      display: 'flex',
      flexDirection: 'column',
      gap: 34,
      width: '100%'
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 27,
      color: '#5a4427',
      marginTop: 8
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(Connector, {
    color: "var(--b3a-wine)",
    size: 26,
    trinity: true
  }))));
}

/* ---------- 3 · Testimonial (nebula + white card) ---------- */
function PostTestimonial() {
  const stars = '\u2605\u2605\u2605\u2605\u2605';
  return /*#__PURE__*/React.createElement(Square, {
    bg: "radial-gradient(120% 120% at 70% 30%, #6d4a6b 0%, #4a2f4d 45%, #2a1c30 100%)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(1.5px 1.5px at 18% 22%, #fff7, transparent), radial-gradient(1.5px 1.5px at 82% 16%, #fff6, transparent), radial-gradient(2px 2px at 60% 70%, #fff8, transparent), radial-gradient(1px 1px at 30% 80%, #fff6, transparent), radial-gradient(1.5px 1.5px at 90% 60%, #fff5, transparent), radial-gradient(1px 1px at 45% 35%, #fff7, transparent)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0
    },
    width: "1080",
    height: "1080"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "760",
    y1: "300",
    x2: "850",
    y2: "250",
    stroke: "#fff",
    strokeWidth: "1.5",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "855",
    cy: "247",
    r: "7",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "320",
    y1: "780",
    x2: "230",
    y2: "830",
    stroke: "#fff",
    strokeWidth: "1.5",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "225",
    cy: "833",
    r: "7",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      width: 620,
      padding: '64px 56px',
      textAlign: 'center',
      boxShadow: '0 30px 80px rgba(0,0,0,.4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/b3a-full-color-black.png`,
    alt: "",
    style: {
      width: 300,
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--b3a-coral)',
      marginTop: 30
    }
  }, "Consultation Review"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b3a-gold)',
      fontSize: 38,
      letterSpacing: 8,
      marginTop: 18
    }
  }, stars), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      lineHeight: 1.4,
      letterSpacing: '.04em',
      color: 'var(--b3a-ink)',
      marginTop: 26,
      textTransform: 'uppercase',
      fontWeight: 500
    }
  }, "Her advises were sooo great! Absolutely the best astrologer in town!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '.22em',
      color: 'var(--b3a-gold-deep)',
      marginTop: 30,
      textTransform: 'uppercase'
    }
  }, "Kimberly"))));
}

/* ---------- 4 · Monthly calendar (Welcome October) ---------- */
function PostMonth() {
  const signs = ['libra', 'capricorn', 'mercury', 'aries', 'scorpio', 'leo'];
  const rows = [['6th', 'New moon in Libra'], ['12th', 'First quarter moon in Capricorn'], ['18th', 'Mercury goes direct'], ['20th', 'Full moon in Aries'], ['22nd', 'Scorpio season begins'], ['28th', 'Last quarter moon in Leo']];
  const G = s => ({
    aries: '\u2648',
    capricorn: '\u2651',
    mercury: '\u263F',
    scorpio: '\u264F',
    leo: '\u264C',
    libra: '\u264E'
  })[s];
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-cream)",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      background: 'var(--b3a-sand)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 46,
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/b3a-icon-color.png`,
    alt: "",
    style: {
      width: 130
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 34,
      fontSize: 44,
      color: 'var(--b3a-wine)'
    }
  }, signs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: '"Segoe UI Symbol","Noto Sans Symbols2",serif'
    }
  }, G(s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '92px 70px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 800,
      fontSize: 70,
      lineHeight: 1.04,
      textTransform: 'uppercase',
      color: 'var(--b3a-wine)',
      margin: 0
    }
  }, "Welcome", /*#__PURE__*/React.createElement("br", null), "October"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 46,
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, rows.map(([d, t]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 38,
      color: 'var(--b3a-gold)',
      width: 84,
      flex: 'none'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 23,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 40,
      borderTop: '2px solid var(--b3a-line-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink)'
    }
  }, "October Mantra"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 22,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--b3a-coral)',
      marginTop: 8
    }
  }, "I am ready for peace"))));
}

/* ---------- 5 · Editorial split (daily life) ---------- */
function PostEditorial() {
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-cream)",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 58%',
      padding: '90px 90px 40px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Connector, {
    color: "var(--b3a-wine)",
    size: 26,
    trinity: true
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 76,
      lineHeight: 1.08,
      color: 'var(--b3a-wine)',
      margin: '48px 0 0',
      maxWidth: 720
    }
  }, "How to best make your bed if you are a virgo."), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      top: 150,
      right: 70
    },
    width: "240",
    height: "160"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20,40 70,30 120,60 160,40 200,80 175,120",
    fill: "none",
    stroke: "var(--b3a-gold)",
    strokeWidth: "2"
  }), [[20, 40], [70, 30], [120, 60], [160, 40], [200, 80], [175, 120]].map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "5",
    fill: "var(--b3a-gold)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)',
      padding: '54px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 26,
      opacity: .85,
      marginBottom: 18
    }
  }, "Being each sign in the daily life\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.4,
      margin: 0,
      maxWidth: 640
    }
  }, "Use a ruler, count the seconds, have one sheet for every day of the week\u2026")));
}

/* ---------- 6 · Quote box (coral) ---------- */
function PostQuote() {
  const dots = style => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      backgroundImage: 'radial-gradient(var(--b3a-gold) 3px, transparent 3px)',
      backgroundSize: '20px 20px',
      opacity: .7,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-cream)"
  }, ICON('moon', {
    style: {
      position: 'absolute',
      top: 250,
      left: 150,
      height: 60
    }
  }), ICON('sun', {
    style: {
      position: 'absolute',
      top: 200,
      right: 170,
      height: 70
    }
  }), dots({
    position: 'absolute',
    left: 110,
    top: 470
  }), dots({
    position: 'absolute',
    right: 110,
    top: 470
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 660
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-18px -18px 18px 18px',
      border: '4px solid var(--b3a-wine)',
      borderRadius: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--b3a-coral)',
      borderRadius: 28,
      padding: '70px 64px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -26,
      left: 40,
      fontFamily: 'var(--font-serif)',
      fontSize: 130,
      color: 'var(--b3a-coral-600)',
      lineHeight: 1
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.35,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: '#fff',
      margin: 0
    }
  }, "Astrology is science & art at the same time, is geometry, simbology and interpretation."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 26,
      color: '#fff',
      marginTop: 22
    }
  }, "Alfredo Rajoy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -70,
      right: 40,
      fontFamily: 'var(--font-serif)',
      fontSize: 130,
      color: 'var(--b3a-coral-600)',
      lineHeight: 1
    }
  }, "\u201D")))), ICON('libra', {
    style: {
      position: 'absolute',
      bottom: 150,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 90
    }
  }));
}

/* ---------- 7 · Dark quote (Draw your limits) ---------- */
function PostDark() {
  return /*#__PURE__*/React.createElement(Square, {
    bg: "var(--b3a-charcoal)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      textAlign: 'center',
      color: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 60
    }
  }, "Draw your"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 100,
      letterSpacing: '.12em',
      lineHeight: 1
    }
  }, "LIMITS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 150,
      height: 1,
      background: 'var(--b3a-cream)',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 56,
      color: 'var(--b3a-coral)'
    }
  }, "&"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 150,
      height: 1,
      background: 'var(--b3a-cream)',
      opacity: .5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 60
    }
  }, "grow with"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 130,
      letterSpacing: '.08em',
      lineHeight: 1
    }
  }, "GRACE"), /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logos/b3a-icon-color.png`,
    alt: "",
    style: {
      width: 120,
      marginTop: 50,
      filter: 'brightness(0) invert(1)',
      opacity: .9
    }
  })));
}
const POSTS = [{
  id: 'affirmation',
  label: 'Affirmation',
  cat: 'Frases',
  Comp: PostAffirmation
}, {
  id: 'mantra',
  label: 'Mantras',
  cat: 'Rituales',
  Comp: PostMantra
}, {
  id: 'testimonial',
  label: 'Testimonial',
  cat: 'Testimonios',
  Comp: PostTestimonial
}, {
  id: 'month',
  label: 'Month ahead',
  cat: 'Eventos',
  Comp: PostMonth
}, {
  id: 'editorial',
  label: 'Daily life',
  cat: 'Día a día',
  Comp: PostEditorial
}, {
  id: 'quote',
  label: 'Quote',
  cat: 'Citas',
  Comp: PostQuote
}, {
  id: 'dark',
  label: 'Limits',
  cat: 'Crecimiento',
  Comp: PostDark
}];
Object.assign(window, {
  Square,
  Connector,
  PostAffirmation,
  PostMantra,
  PostTestimonial,
  PostMonth,
  PostEditorial,
  PostQuote,
  PostDark,
  POSTS,
  ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram/shell.jsx
try { (() => {
/* Big3 Astrology — Instagram shell chrome (status bar, top bar, nav, profile,
   feed grid, single-post view). Self-contained; shared to window. */

const A = window.ASSET || '../../assets';

/* scale a 1080×1080 post into a box of `w` px */
function PostScaler({
  Comp,
  w
}) {
  const s = w / 1080;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: w,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1080,
      transform: `scale(${s})`,
      transformOrigin: 'top left'
    }
  }, /*#__PURE__*/React.createElement(Comp, null)));
}
function IGStatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("span", null, "4:36"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u267B"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF6"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD0B")));
}
function IGTopBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      borderBottom: '1px solid #efefef'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      fontSize: 24,
      fontWeight: 600,
      color: '#111'
    }
  }, "Instagram"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\u2708"));
}
function IGBottomNav({
  active = 'home'
}) {
  const items = ['\u2302', '\u2315', '\u2295', '\u2606', '\u263A'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderTop: '1px solid #efefef',
      fontSize: 24,
      color: '#111',
      background: '#fff'
    }
  }, items.map((g, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      opacity: i === 0 ? 1 : .8
    }
  }, g)));
}
function GradientAvatar({
  size = 86
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      padding: 3,
      background: 'conic-gradient(from 30deg, #f0a848, #f27678, #a4426c, #f0a848)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: '#fff',
      padding: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/b3a-icon-color.png`,
    alt: "",
    style: {
      width: '74%'
    }
  }))));
}
function ProfileHeader() {
  const Stat = ({
    n,
    l
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 17,
      color: '#111'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: '#333'
    }
  }, l));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 4px',
      fontFamily: 'var(--font-body)',
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(GradientAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      flex: 1,
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "1,287",
    l: "Posts"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4.8K",
    l: "Followers"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "110",
    l: "Following"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14,
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, "BIG 3 ASTROLOGY"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#8e8e8e'
    }
  }, "Consultant"), /*#__PURE__*/React.createElement("div", null, "The information you should know!"), /*#__PURE__*/React.createElement("div", null, "Book your appointment, just follow the link below"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: '#385898',
      fontWeight: 600
    }
  }, "www.big3astrology.com/"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#385898'
    }
  }, "Geneva, Switzerland")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn
  }, "Follow"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      background: '#fff',
      border: '1px solid #dbdbdb',
      color: '#111'
    }
  }, "Message"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      flex: '0 0 auto',
      width: 38,
      background: '#fff',
      border: '1px solid #dbdbdb',
      color: '#111'
    }
  }, "\u25BE")));
}
const btn = {
  flex: 1,
  height: 32,
  borderRadius: 8,
  border: 'none',
  background: '#A4426C',
  color: '#fff',
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 13,
  cursor: 'pointer'
};

/* like / comment / share frame around a single post */
function PostFrame({
  post,
  w,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px'
    }
  }, onBack && /*#__PURE__*/React.createElement("span", {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      fontSize: 20,
      color: '#111',
      marginRight: 4
    }
  }, "\u2190"), /*#__PURE__*/React.createElement(GradientAvatar, {
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      color: '#111'
    }
  }, "big3astrology"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: '#444'
    }
  }, "Lausanne, Suiza")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#111'
    }
  }, "\u22EF")), /*#__PURE__*/React.createElement(PostScaler, {
    Comp: post.Comp,
    w: w
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 14px 6px',
      fontSize: 24,
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2661"), /*#__PURE__*/React.createElement("span", null, "\u2687"), /*#__PURE__*/React.createElement("span", null, "\u27A4"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "\u25A2")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 14px 14px',
      fontFamily: 'var(--font-body)',
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "325 Likes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("b", null, "big3astrology"), " ", post.cat, " \xB7 ", post.label.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#8e8e8e',
      marginTop: 4
    }
  }, "View all 23 comments"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#8e8e8e',
      marginTop: 4
    }
  }, "1 day ago")));
}
Object.assign(window, {
  PostScaler,
  IGStatusBar,
  IGTopBar,
  IGBottomNav,
  GradientAvatar,
  ProfileHeader,
  PostFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Big3 Astrology — Marketing & booking site (brand extension).
   Self-contained, token-driven. Asset base from ui_kits/website/. */
const {
  useState,
  useRef,
  useEffect
} = React;
const A = '../../assets';
const SIGNS = {
  aries: '\u2648',
  taurus: '\u2649',
  gemini: '\u264A',
  cancer: '\u264B',
  leo: '\u264C',
  virgo: '\u264D',
  libra: '\u264E',
  scorpio: '\u264F',
  sagittarius: '\u2650',
  capricorn: '\u2651',
  aquarius: '\u2652',
  pisces: '\u2653'
};
const Glyph = ({
  s,
  size = 22,
  color = 'var(--b3a-wine)'
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: '"Segoe UI Symbol","Noto Sans Symbols2",serif',
    fontSize: size,
    color,
    lineHeight: 1
  }
}, SIGNS[s]);
const Eyebrow = ({
  children,
  color = 'var(--b3a-coral)',
  center
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color,
    textAlign: center ? 'center' : 'left'
  }
}, children);
function Btn({
  children,
  variant = 'primary',
  onClick,
  size = 'md'
}) {
  const v = {
    primary: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)',
      border: '1.5px solid var(--b3a-wine)'
    },
    accent: {
      background: 'var(--b3a-coral)',
      color: '#fff',
      border: '1.5px solid var(--b3a-coral)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-ink)'
    },
    inverse: {
      background: 'var(--b3a-cream)',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-cream)'
    }
  }[variant];
  const pad = size === 'lg' ? '16px 34px' : '12px 26px';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...v,
      padding: pad,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: size === 'lg' ? 15 : 14,
      letterSpacing: '.06em',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'transform .14s, box-shadow .24s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, children);
}
function Nav({
  onBook
}) {
  const links = ['Readings', 'The Big 3', 'Journal', 'About'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(254,249,245,.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/b3a-full-color-black.png`,
    alt: "Big 3 Astrology",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      letterSpacing: '.04em',
      color: 'var(--b3a-ink)',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onBook
  }, "Book a reading")));
}
function Hero({
  onBook
}) {
  const vref = useRef(null);
  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onTouch = () => {
      tryPlay();
      window.removeEventListener('pointerdown', onTouch);
    };
    window.addEventListener('pointerdown', onTouch);
    return () => window.removeEventListener('pointerdown', onTouch);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 980,
      margin: '0 auto',
      padding: '40px 32px 104px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Astrology consulting \xB7 Geneva")), /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: `${A}/brand/big3-logo-animation.mp4`,
    poster: `${A}/brand/watercolor-hero.jpg`,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: '100%',
      maxWidth: 860,
      margin: '0 auto',
      display: 'block',
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.08,
      color: 'var(--b3a-ink)',
      margin: '-28px 0 0'
    }
  }, "Read the weather of your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--b3a-wine)'
    }
  }, "life.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--b3a-ink-500)',
      maxWidth: 560,
      margin: '22px auto 0'
    }
  }, "Your Sun, Moon and Rising are the fastest way to understand who you are. Sit down with an astrologer and map your whole chart."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    size: "lg"
  }, "Discover your Big 3"))));
}
function BigThree() {
  const items = [{
    g: 'sun',
    name: 'Sun',
    sub: 'Identity',
    text: 'The core of who you are — your purpose, ego and the self you are growing into.',
    file: 'glyph-sun.png',
    color: 'var(--b3a-coral)'
  }, {
    g: 'moon',
    name: 'Moon',
    sub: 'Emotion',
    text: 'Your inner world — instincts, needs and the way you feel safe and soothed.',
    file: 'glyph-moon.png',
    color: 'var(--b3a-wine)'
  }, {
    g: 'libra',
    name: 'Ascendant',
    sub: 'Rising',
    text: 'The mask you meet the world with — first impressions and how you move through life.',
    file: 'glyph-libra.png',
    color: 'var(--b3a-gold-deep)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 54
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "The three pillars"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 0'
    }
  }, "Your Big 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 32px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--b3a-cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 22px',
      border: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/icons/${it.file}`,
    alt: "",
    style: {
      height: 46
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: it.color
    }
  }, it.sub), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--b3a-ink)',
      margin: '6px 0 12px'
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--b3a-ink-500)',
      margin: 0
    }
  }, it.text)))));
}
const READINGS = [{
  name: 'The Big 3',
  dur: '45 min',
  price: 'CHF 90',
  text: 'Sun, Moon & Rising decoded — the perfect first session.'
}, {
  name: 'Full Natal Chart',
  dur: '90 min',
  price: 'CHF 160',
  text: 'A complete reading of your birth chart, house by house.'
}, {
  name: 'Synastry · Couples',
  dur: '90 min',
  price: 'CHF 190',
  text: 'Two charts side by side — compatibility, tension & growth.'
}, {
  name: 'Solar Return',
  dur: '60 min',
  price: 'CHF 120',
  text: 'Your year ahead, mapped from your birthday forward.'
}];
function Readings({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--b3a-ivory)',
      borderTop: '1px solid var(--b3a-line)',
      borderBottom: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Consultations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 0'
    }
  }, "Book a reading")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--b3a-ink-500)',
      maxWidth: 380,
      margin: 0
    }
  }, "Every session is one-to-one, online or in Geneva, and recorded so you can return to it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, READINGS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-md)',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 23,
      color: 'var(--b3a-ink)',
      margin: 0
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink-400)'
    }
  }, r.dur)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink-500)',
      margin: '8px 0 0'
    }
  }, r.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      minWidth: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--b3a-wine)',
      whiteSpace: 'nowrap'
    }
  }, r.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPick(r.name),
    style: {
      marginTop: 10,
      background: 'transparent',
      border: '1.5px solid var(--b3a-wine)',
      color: 'var(--b3a-wine)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '.04em',
      cursor: 'pointer'
    }
  }, "Select")))))));
}
function Testimonials() {
  const items = [{
    q: 'Her advices were sooo great! Absolutely the best astrologer in town.',
    n: 'Kimberly',
    s: 'Geneva'
  }, {
    q: 'I finally understand my Moon. The reading was warm, precise and a little magical.',
    n: 'Laura',
    s: 'Lausanne'
  }, {
    q: 'Booked the couples synastry. We left with so much compassion for each other.',
    n: 'M. & T.',
    s: 'Zürich'
  }];
  const stars = '\u2605\u2605\u2605\u2605\u2605';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Consultation reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 48px'
    }
  }, "Written in the stars"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-lg)',
      padding: '34px 30px',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b3a-gold)',
      fontSize: 20,
      letterSpacing: 5
    }
  }, stars), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 19,
      lineHeight: 1.5,
      color: 'var(--b3a-ink)',
      margin: '18px 0 22px'
    }
  }, "\u201C", t.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--b3a-wine)'
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--b3a-ink-400)',
      marginTop: 3
    }
  }, t.s)))));
}
function ZodiacBand() {
  const order = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--b3a-charcoal)',
      padding: '26px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 38,
      flexWrap: 'wrap',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, order.map(s => /*#__PURE__*/React.createElement(Glyph, {
    key: s,
    s: s,
    size: 26,
    color: "var(--b3a-gold)"
  }))));
}
function BookingBand({
  selected,
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '90px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/icons/glyph-libra.png`,
    alt: "",
    style: {
      height: 60,
      filter: 'brightness(0) invert(1)',
      opacity: .9,
      margin: '0 auto 24px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 50,
      margin: 0
    }
  }, "Book your appointment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      opacity: .85,
      maxWidth: 520,
      margin: '18px auto 32px'
    }
  }, selected ? /*#__PURE__*/React.createElement("span", null, "You selected ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, selected), ". Pick a time and we\u2019ll meet under the same sky.") : 'Choose a reading, pick a time, and we\u2019ll meet under the same sky.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "inverse",
    size: "lg",
    onClick: onBook
  }, "Choose a time"), /*#__PURE__*/React.createElement(Btn, {
    variant: "accent",
    size: "lg"
  }, "Message on Instagram"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--b3a-cream)',
      borderTop: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '54px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/b3a-full-color-black.png`,
    alt: "Big 3 Astrology",
    style: {
      height: 46
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--b3a-ink-400)',
      marginTop: 14
    }
  }, "Geneva, Switzerland \xB7 www.big3astrology.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 54
    }
  }, [['Readings', ['The Big 3', 'Natal chart', 'Synastry', 'Solar return']], ['Studio', ['About', 'Journal', 'Contact', 'Instagram']]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink-400)',
      marginBottom: 12
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink)',
      marginBottom: 8,
      cursor: 'pointer'
    }
  }, l)))))));
}
function BookingModal({
  reading,
  onClose
}) {
  const [step, setStep] = useState(0);
  const times = ['Tue 10:00', 'Wed 14:30', 'Thu 18:00', 'Sat 11:00'];
  const [time, setTime] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(40,20,30,.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--b3a-cream)',
      width: 440,
      borderRadius: 'var(--radius-xl)',
      padding: '34px 34px 30px',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      border: 'none',
      background: 'transparent',
      fontSize: 22,
      color: 'var(--b3a-ink-400)',
      cursor: 'pointer'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/b3a-icon-color.png`,
    alt: "",
    style: {
      width: 54,
      margin: '0 auto 14px',
      display: 'block'
    }
  }), step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      textAlign: 'center',
      margin: '0 0 4px',
      color: 'var(--b3a-ink)'
    }
  }, reading || 'The Big 3'), /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Choose a time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      margin: '22px 0'
    }
  }, times.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTime(t),
    style: {
      padding: '14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (time === t ? 'var(--b3a-wine)' : 'var(--b3a-line-strong)'),
      background: time === t ? 'var(--b3a-plum-wash)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink)',
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => time && setStep(1)
  }, "Confirm ", time || '')) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--b3a-ink)',
      margin: '4px 0 8px'
    }
  }, "You\u2019re booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--b3a-ink-500)',
      margin: '0 0 20px'
    }
  }, reading || 'The Big 3', " \xB7 ", time, ". A confirmation is on its way to your inbox."), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onClose
  }, "Lovely, close"))));
}
function App() {
  const [modal, setModal] = useState(false);
  const [reading, setReading] = useState(null);
  const openBook = r => {
    if (typeof r === 'string') setReading(r);
    setModal(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(ZodiacBand, null), /*#__PURE__*/React.createElement(BigThree, null), /*#__PURE__*/React.createElement(Readings, {
    onPick: r => openBook(r)
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(BookingBand, {
    selected: reading,
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(Footer, null), modal && /*#__PURE__*/React.createElement(BookingModal, {
    reading: reading,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.standalone.jsx
try { (() => {
/* Big3 Astrology — Marketing & booking site (brand extension).
   Self-contained, token-driven. Asset base from ui_kits/website/. */
const {
  useState,
  useRef,
  useEffect
} = React;
const A = '../../assets';
const SIGNS = {
  aries: '\u2648',
  taurus: '\u2649',
  gemini: '\u264A',
  cancer: '\u264B',
  leo: '\u264C',
  virgo: '\u264D',
  libra: '\u264E',
  scorpio: '\u264F',
  sagittarius: '\u2650',
  capricorn: '\u2651',
  aquarius: '\u2652',
  pisces: '\u2653'
};
const Glyph = ({
  s,
  size = 22,
  color = 'var(--b3a-wine)'
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: '"Segoe UI Symbol","Noto Sans Symbols2",serif',
    fontSize: size,
    color,
    lineHeight: 1
  }
}, SIGNS[s]);
const Eyebrow = ({
  children,
  color = 'var(--b3a-coral)',
  center
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color,
    textAlign: center ? 'center' : 'left'
  }
}, children);
function Btn({
  children,
  variant = 'primary',
  onClick,
  size = 'md'
}) {
  const v = {
    primary: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)',
      border: '1.5px solid var(--b3a-wine)'
    },
    accent: {
      background: 'var(--b3a-coral)',
      color: '#fff',
      border: '1.5px solid var(--b3a-coral)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-ink)'
    },
    inverse: {
      background: 'var(--b3a-cream)',
      color: 'var(--b3a-ink)',
      border: '1.5px solid var(--b3a-cream)'
    }
  }[variant];
  const pad = size === 'lg' ? '16px 34px' : '12px 26px';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...v,
      padding: pad,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: size === 'lg' ? 15 : 14,
      letterSpacing: '.06em',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'transform .14s, box-shadow .24s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, children);
}
function Nav({
  onBook
}) {
  const links = ['Readings', 'The Big 3', 'Journal', 'About'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(254,249,245,.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoBlack,
    alt: "Big 3 Astrology",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      letterSpacing: '.04em',
      color: 'var(--b3a-ink)',
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onBook
  }, "Book a reading")));
}
function Hero({
  onBook
}) {
  const vref = useRef(null);
  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onTouch = () => {
      tryPlay();
      window.removeEventListener('pointerdown', onTouch);
    };
    window.addEventListener('pointerdown', onTouch);
    return () => window.removeEventListener('pointerdown', onTouch);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 980,
      margin: '0 auto',
      padding: '40px 32px 104px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Astrology consulting \xB7 Geneva")), /*#__PURE__*/React.createElement("video", {
    ref: vref,
    src: window.__resources.heroVideo,
    poster: window.__resources.heroPoster,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      width: '100%',
      maxWidth: 860,
      margin: '0 auto',
      display: 'block',
      mixBlendMode: 'multiply',
      WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)',
      maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.08,
      color: 'var(--b3a-ink)',
      margin: '-28px 0 0'
    }
  }, "Read the weather of your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--b3a-wine)'
    }
  }, "life.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--b3a-ink-500)',
      maxWidth: 560,
      margin: '22px auto 0'
    }
  }, "Your Sun, Moon and Rising are the fastest way to understand who you are. Sit down with an astrologer and map your whole chart."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "Book a consultation"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    size: "lg"
  }, "Discover your Big 3"))));
}
function BigThree() {
  const items = [{
    g: 'sun',
    name: 'Sun',
    sub: 'Identity',
    text: 'The core of who you are — your purpose, ego and the self you are growing into.',
    res: 'glyphSun',
    color: 'var(--b3a-coral)'
  }, {
    g: 'moon',
    name: 'Moon',
    sub: 'Emotion',
    text: 'Your inner world — instincts, needs and the way you feel safe and soothed.',
    res: 'glyphMoon',
    color: 'var(--b3a-wine)'
  }, {
    g: 'libra',
    name: 'Ascendant',
    sub: 'Rising',
    text: 'The mask you meet the world with — first impressions and how you move through life.',
    res: 'glyphLibra',
    color: 'var(--b3a-gold-deep)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 54
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "The three pillars"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 0'
    }
  }, "Your Big 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-lg)',
      padding: '40px 32px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'var(--b3a-cream)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 22px',
      border: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources[it.res],
    alt: "",
    style: {
      height: 46
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: it.color
    }
  }, it.sub), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--b3a-ink)',
      margin: '6px 0 12px'
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--b3a-ink-500)',
      margin: 0
    }
  }, it.text)))));
}
const READINGS = [{
  name: 'The Big 3',
  dur: '45 min',
  price: 'CHF 90',
  text: 'Sun, Moon & Rising decoded — the perfect first session.'
}, {
  name: 'Full Natal Chart',
  dur: '90 min',
  price: 'CHF 160',
  text: 'A complete reading of your birth chart, house by house.'
}, {
  name: 'Synastry · Couples',
  dur: '90 min',
  price: 'CHF 190',
  text: 'Two charts side by side — compatibility, tension & growth.'
}, {
  name: 'Solar Return',
  dur: '60 min',
  price: 'CHF 120',
  text: 'Your year ahead, mapped from your birthday forward.'
}];
function Readings({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--b3a-ivory)',
      borderTop: '1px solid var(--b3a-line)',
      borderBottom: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Consultations"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 0'
    }
  }, "Book a reading")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--b3a-ink-500)',
      maxWidth: 380,
      margin: 0
    }
  }, "Every session is one-to-one, online or in Geneva, and recorded so you can return to it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, READINGS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-md)',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 23,
      color: 'var(--b3a-ink)',
      margin: 0
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink-400)'
    }
  }, r.dur)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink-500)',
      margin: '8px 0 0'
    }
  }, r.text)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      minWidth: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--b3a-wine)',
      whiteSpace: 'nowrap'
    }
  }, r.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPick(r.name),
    style: {
      marginTop: 10,
      background: 'transparent',
      border: '1.5px solid var(--b3a-wine)',
      color: 'var(--b3a-wine)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '.04em',
      cursor: 'pointer'
    }
  }, "Select")))))));
}
function Testimonials() {
  const items = [{
    q: 'Her advices were sooo great! Absolutely the best astrologer in town.',
    n: 'Kimberly',
    s: 'Geneva'
  }, {
    q: 'I finally understand my Moon. The reading was warm, precise and a little magical.',
    n: 'Laura',
    s: 'Lausanne'
  }, {
    q: 'Booked the couples synastry. We left with so much compassion for each other.',
    n: 'M. & T.',
    s: 'Zürich'
  }];
  const stars = '\u2605\u2605\u2605\u2605\u2605';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Consultation reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 44,
      color: 'var(--b3a-ink)',
      margin: '12px 0 48px'
    }
  }, "Written in the stars"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#fff',
      border: '1px solid var(--b3a-line)',
      borderRadius: 'var(--radius-lg)',
      padding: '34px 30px',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--b3a-gold)',
      fontSize: 20,
      letterSpacing: 5
    }
  }, stars), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 500,
      fontStyle: 'italic',
      fontSize: 19,
      lineHeight: 1.5,
      color: 'var(--b3a-ink)',
      margin: '18px 0 22px'
    }
  }, "\u201C", t.q, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--b3a-wine)'
    }
  }, t.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--b3a-ink-400)',
      marginTop: 3
    }
  }, t.s)))));
}
function ZodiacBand() {
  const order = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--b3a-charcoal)',
      padding: '26px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 38,
      flexWrap: 'wrap',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, order.map(s => /*#__PURE__*/React.createElement(Glyph, {
    key: s,
    s: s,
    size: 26,
    color: "var(--b3a-gold)"
  }))));
}
function BookingBand({
  selected,
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      background: 'var(--b3a-wine)',
      color: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      padding: '90px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.glyphLibra,
    alt: "",
    style: {
      height: 60,
      filter: 'brightness(0) invert(1)',
      opacity: .9,
      margin: '0 auto 24px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 50,
      margin: 0
    }
  }, "Book your appointment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      opacity: .85,
      maxWidth: 520,
      margin: '18px auto 32px'
    }
  }, selected ? /*#__PURE__*/React.createElement("span", null, "You selected ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, selected), ". Pick a time and we\u2019ll meet under the same sky.") : 'Choose a reading, pick a time, and we\u2019ll meet under the same sky.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "inverse",
    size: "lg",
    onClick: onBook
  }, "Choose a time"), /*#__PURE__*/React.createElement(Btn, {
    variant: "accent",
    size: "lg"
  }, "Message on Instagram"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--b3a-cream)',
      borderTop: '1px solid var(--b3a-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '54px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoBlack,
    alt: "Big 3 Astrology",
    style: {
      height: 46
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--b3a-ink-400)',
      marginTop: 14
    }
  }, "Geneva, Switzerland \xB7 www.big3astrology.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 54
    }
  }, [['Readings', ['The Big 3', 'Natal chart', 'Synastry', 'Solar return']], ['Studio', ['About', 'Journal', 'Contact', 'Instagram']]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--b3a-ink-400)',
      marginBottom: 12
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink)',
      marginBottom: 8,
      cursor: 'pointer'
    }
  }, l)))))));
}
function BookingModal({
  reading,
  onClose
}) {
  const [step, setStep] = useState(0);
  const times = ['Tue 10:00', 'Wed 14:30', 'Thu 18:00', 'Sat 11:00'];
  const [time, setTime] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(40,20,30,.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--b3a-cream)',
      width: 440,
      borderRadius: 'var(--radius-xl)',
      padding: '34px 34px 30px',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      border: 'none',
      background: 'transparent',
      fontSize: 22,
      color: 'var(--b3a-ink-400)',
      cursor: 'pointer'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoIcon,
    alt: "",
    style: {
      width: 54,
      margin: '0 auto 14px',
      display: 'block'
    }
  }), step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      textAlign: 'center',
      margin: '0 0 4px',
      color: 'var(--b3a-ink)'
    }
  }, reading || 'The Big 3'), /*#__PURE__*/React.createElement(Eyebrow, {
    center: true
  }, "Choose a time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      margin: '22px 0'
    }
  }, times.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTime(t),
    style: {
      padding: '14px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid ' + (time === t ? 'var(--b3a-wine)' : 'var(--b3a-line-strong)'),
      background: time === t ? 'var(--b3a-plum-wash)' : '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--b3a-ink)',
      cursor: 'pointer'
    }
  }, t))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => time && setStep(1)
  }, "Confirm ", time || '')) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--b3a-ink)',
      margin: '4px 0 8px'
    }
  }, "You\u2019re booked."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--b3a-ink-500)',
      margin: '0 0 20px'
    }
  }, reading || 'The Big 3', " \xB7 ", time, ". A confirmation is on its way to your inbox."), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: onClose
  }, "Lovely, close"))));
}
function App() {
  const [modal, setModal] = useState(false);
  const [reading, setReading] = useState(null);
  const openBook = r => {
    if (typeof r === 'string') setReading(r);
    setModal(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--b3a-cream)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(ZodiacBand, null), /*#__PURE__*/React.createElement(BigThree, null), /*#__PURE__*/React.createElement(Readings, {
    onPick: r => openBook(r)
  }), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(BookingBand, {
    selected: reading,
    onBook: () => openBook()
  }), /*#__PURE__*/React.createElement(Footer, null), modal && /*#__PURE__*/React.createElement(BookingModal, {
    reading: reading,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.standalone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CelestialDivider = __ds_scope.CelestialDivider;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.TrinityMark = __ds_scope.TrinityMark;

__ds_ns.ZodiacGlyph = __ds_scope.ZodiacGlyph;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();
