/* Big3 Astrology — Marketing & booking site (brand extension).
   Self-contained, token-driven. Asset base from ui_kits/website/. */
const { useState, useRef, useEffect } = React;
const A = '../../assets';

const SIGNS = { aries:'\u2648',taurus:'\u2649',gemini:'\u264A',cancer:'\u264B',leo:'\u264C',virgo:'\u264D',libra:'\u264E',scorpio:'\u264F',sagittarius:'\u2650',capricorn:'\u2651',aquarius:'\u2652',pisces:'\u2653' };
const Glyph = ({ s, size=22, color='var(--b3a-wine)' }) => (
  <span style={{ fontFamily:'"Segoe UI Symbol","Noto Sans Symbols2",serif', fontSize:size, color, lineHeight:1 }}>{SIGNS[s]}</span>
);
const Eyebrow = ({ children, color='var(--b3a-coral)', center }) => (
  <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, fontSize:13, letterSpacing:'.2em', textTransform:'uppercase', color, textAlign: center?'center':'left' }}>{children}</div>
);
function Btn({ children, variant='primary', onClick, size='md' }) {
  const v = {
    primary:{ background:'var(--b3a-wine)', color:'var(--b3a-cream)', border:'1.5px solid var(--b3a-wine)' },
    accent:{ background:'var(--b3a-coral)', color:'#fff', border:'1.5px solid var(--b3a-coral)' },
    outline:{ background:'transparent', color:'var(--b3a-ink)', border:'1.5px solid var(--b3a-ink)' },
    inverse:{ background:'var(--b3a-cream)', color:'var(--b3a-ink)', border:'1.5px solid var(--b3a-cream)' },
  }[variant];
  const pad = size==='lg'?'16px 34px':'12px 26px';
  return <button onClick={onClick} style={{ ...v, padding:pad, borderRadius:'var(--radius-sm)', fontFamily:'var(--font-sans)', fontWeight:500, fontSize: size==='lg'?15:14, letterSpacing:'.06em', cursor:'pointer', whiteSpace:'nowrap', transition:'transform .14s, box-shadow .24s' }}
    onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='var(--shadow-card)';}}
    onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>{children}</button>;
}

function Nav({ onBook }) {
  const links = ['Readings','The Big 3','Journal','About'];
  return (
    <nav style={{ position:'sticky', top:0, zIndex:20, background:'rgba(254,249,245,.85)', backdropFilter:'blur(10px)', borderBottom:'1px solid var(--b3a-line)' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'14px 32px', display:'flex', alignItems:'center', gap:32 }}>
        <img src={window.__resources.logoBlack} alt="Big 3 Astrology" style={{ height:42 }} />
        <div style={{ display:'flex', gap:28, marginLeft:'auto' }}>
          {links.map(l=><a key={l} style={{ fontFamily:'var(--font-sans)', fontSize:14, letterSpacing:'.04em', color:'var(--b3a-ink)', cursor:'pointer' }}>{l}</a>)}
        </div>
        <Btn variant="primary" onClick={onBook}>Book a reading</Btn>
      </div>
    </nav>
  );
}

function Hero({ onBook }) {
  const vref = useRef(null);
  useEffect(() => {
    const v = vref.current; if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onTouch = () => { tryPlay(); window.removeEventListener('pointerdown', onTouch); };
    window.addEventListener('pointerdown', onTouch);
    return () => window.removeEventListener('pointerdown', onTouch);
  }, []);
  return (
    <header style={{ position:'relative', overflow:'hidden', background:'var(--b3a-cream)' }}>
      <div style={{ position:'relative', maxWidth:980, margin:'0 auto', padding:'40px 32px 104px', textAlign:'center' }}>
        <div style={{ marginBottom:8 }}><Eyebrow center>Astrology consulting · Geneva</Eyebrow></div>
        <video
          ref={vref}
          src={window.__resources.heroVideo}
          poster={window.__resources.heroPoster}
          autoPlay muted loop playsInline
          style={{ width:'100%', maxWidth:860, margin:'0 auto', display:'block', mixBlendMode:'multiply',
            WebkitMaskImage:'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)',
            maskImage:'radial-gradient(ellipse 72% 72% at 50% 50%, #000 56%, transparent 100%)' }}
        />
        <h1 style={{ fontFamily:'var(--font-serif)', fontWeight:700, fontSize:60, lineHeight:1.08, color:'var(--b3a-ink)', margin:'-28px 0 0' }}>
          Read the weather of your <span style={{ fontStyle:'italic', color:'var(--b3a-wine)' }}>life.</span></h1>
        <p style={{ fontFamily:'var(--font-body)', fontSize:19, lineHeight:1.65, color:'var(--b3a-ink-500)', maxWidth:560, margin:'22px auto 0' }}>
          Your Sun, Moon and Rising are the fastest way to understand who you are. Sit down with an astrologer and map your whole chart.</p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', marginTop:34 }}>
          <Btn variant="primary" size="lg" onClick={onBook}>Book a consultation</Btn>
          <Btn variant="outline" size="lg">Discover your Big 3</Btn>
        </div>
      </div>
    </header>
  );
}

function BigThree() {
  const items = [
    { g:'sun', name:'Sun', sub:'Identity', text:'The core of who you are — your purpose, ego and the self you are growing into.', res:'glyphSun', color:'var(--b3a-coral)' },
    { g:'moon', name:'Moon', sub:'Emotion', text:'Your inner world — instincts, needs and the way you feel safe and soothed.', res:'glyphMoon', color:'var(--b3a-wine)' },
    { g:'libra', name:'Ascendant', sub:'Rising', text:'The mask you meet the world with — first impressions and how you move through life.', res:'glyphLibra', color:'var(--b3a-gold-deep)' },
  ];
  return (
    <section style={{ maxWidth:1180, margin:'0 auto', padding:'96px 32px' }}>
      <div style={{ textAlign:'center', marginBottom:54 }}>
        <Eyebrow center>The three pillars</Eyebrow>
        <h2 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:44, color:'var(--b3a-ink)', margin:'12px 0 0' }}>Your Big 3</h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
        {items.map(it=>(
          <div key={it.name} style={{ background:'#fff', border:'1px solid var(--b3a-line)', borderRadius:'var(--radius-lg)', padding:'40px 32px', textAlign:'center', boxShadow:'var(--shadow-card)' }}>
            <div style={{ width:88, height:88, borderRadius:'50%', background:'var(--b3a-cream)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 22px', border:'1px solid var(--b3a-line)' }}>
              <img src={window.__resources[it.res]} alt="" style={{ height:46 }} />
            </div>
            <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, fontSize:12, letterSpacing:'.18em', textTransform:'uppercase', color:it.color }}>{it.sub}</div>
            <h3 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:28, color:'var(--b3a-ink)', margin:'6px 0 12px' }}>{it.name}</h3>
            <p style={{ fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.6, color:'var(--b3a-ink-500)', margin:0 }}>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const READINGS = [
  { name:'The Big 3', dur:'45 min', price:'CHF 90', text:'Sun, Moon & Rising decoded — the perfect first session.' },
  { name:'Full Natal Chart', dur:'90 min', price:'CHF 160', text:'A complete reading of your birth chart, house by house.' },
  { name:'Synastry · Couples', dur:'90 min', price:'CHF 190', text:'Two charts side by side — compatibility, tension & growth.' },
  { name:'Solar Return', dur:'60 min', price:'CHF 120', text:'Your year ahead, mapped from your birthday forward.' },
];

function Readings({ onPick }) {
  return (
    <section style={{ background:'var(--b3a-ivory)', borderTop:'1px solid var(--b3a-line)', borderBottom:'1px solid var(--b3a-line)' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'96px 32px' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
          <div>
            <Eyebrow>Consultations</Eyebrow>
            <h2 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:44, color:'var(--b3a-ink)', margin:'12px 0 0' }}>Book a reading</h2>
          </div>
          <p style={{ fontFamily:'var(--font-body)', fontSize:15, color:'var(--b3a-ink-500)', maxWidth:380, margin:0 }}>Every session is one-to-one, online or in Geneva, and recorded so you can return to it.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 }}>
          {READINGS.map(r=>(
            <div key={r.name} style={{ background:'#fff', border:'1px solid var(--b3a-line)', borderRadius:'var(--radius-md)', padding:'26px 28px', display:'flex', alignItems:'center', gap:20 }}>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:12 }}>
                  <h3 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:23, color:'var(--b3a-ink)', margin:0 }}>{r.name}</h3>
                  <span style={{ fontFamily:'var(--font-sans)', fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--b3a-ink-400)' }}>{r.dur}</span>
                </div>
                <p style={{ fontFamily:'var(--font-body)', fontSize:14, color:'var(--b3a-ink-500)', margin:'8px 0 0' }}>{r.text}</p>
              </div>
              <div style={{ textAlign:'right', minWidth:92 }}>
                <div style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:22, color:'var(--b3a-wine)', whiteSpace:'nowrap' }}>{r.price}</div>
                <button onClick={()=>onPick(r.name)} style={{ marginTop:10, background:'transparent', border:'1.5px solid var(--b3a-wine)', color:'var(--b3a-wine)', padding:'8px 16px', borderRadius:'var(--radius-sm)', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:500, letterSpacing:'.04em', cursor:'pointer' }}>Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q:'Her advices were sooo great! Absolutely the best astrologer in town.', n:'Kimberly', s:'Geneva' },
    { q:'I finally understand my Moon. The reading was warm, precise and a little magical.', n:'Laura', s:'Lausanne' },
    { q:'Booked the couples synastry. We left with so much compassion for each other.', n:'M. & T.', s:'Zürich' },
  ];
  const stars = '\u2605\u2605\u2605\u2605\u2605';
  return (
    <section style={{ maxWidth:1180, margin:'0 auto', padding:'96px 32px', textAlign:'center' }}>
      <Eyebrow center>Consultation reviews</Eyebrow>
      <h2 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:44, color:'var(--b3a-ink)', margin:'12px 0 48px' }}>Written in the stars</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
        {items.map((t,i)=>(
          <div key={i} style={{ background:'#fff', border:'1px solid var(--b3a-line)', borderRadius:'var(--radius-lg)', padding:'34px 30px', boxShadow:'var(--shadow-card)' }}>
            <div style={{ color:'var(--b3a-gold)', fontSize:20, letterSpacing:5 }}>{stars}</div>
            <p style={{ fontFamily:'var(--font-serif)', fontWeight:500, fontStyle:'italic', fontSize:19, lineHeight:1.5, color:'var(--b3a-ink)', margin:'18px 0 22px' }}>&ldquo;{t.q}&rdquo;</p>
            <div style={{ fontFamily:'var(--font-sans)', fontWeight:600, fontSize:13, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--b3a-wine)' }}>{t.n}</div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'var(--b3a-ink-400)', marginTop:3 }}>{t.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ZodiacBand() {
  const order = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
  return (
    <div style={{ background:'var(--b3a-charcoal)', padding:'26px 0', overflow:'hidden' }}>
      <div style={{ display:'flex', justifyContent:'center', gap:38, flexWrap:'wrap', maxWidth:1180, margin:'0 auto' }}>
        {order.map(s=><Glyph key={s} s={s} size={26} color="var(--b3a-gold)" />)}
      </div>
    </div>
  );
}

function BookingBand({ selected, onBook }) {
  return (
    <section id="book" style={{ background:'var(--b3a-wine)', color:'var(--b3a-cream)' }}>
      <div style={{ maxWidth:980, margin:'0 auto', padding:'90px 32px', textAlign:'center' }}>
        <img src={window.__resources.glyphLibra} alt="" style={{ height:60, filter:'brightness(0) invert(1)', opacity:.9, margin:'0 auto 24px' }} />
        <h2 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:50, margin:0 }}>Book your appointment</h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:18, opacity:.85, maxWidth:520, margin:'18px auto 32px' }}>
          {selected ? <span>You selected <b style={{ color:'#fff' }}>{selected}</b>. Pick a time and we&rsquo;ll meet under the same sky.</span>
            : 'Choose a reading, pick a time, and we\u2019ll meet under the same sky.'}</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
          <Btn variant="inverse" size="lg" onClick={onBook}>Choose a time</Btn>
          <Btn variant="accent" size="lg">Message on Instagram</Btn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background:'var(--b3a-cream)', borderTop:'1px solid var(--b3a-line)' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'54px 32px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:24 }}>
        <div>
          <img src={window.__resources.logoBlack} alt="Big 3 Astrology" style={{ height:46 }} />
          <p style={{ fontFamily:'var(--font-body)', fontSize:13, color:'var(--b3a-ink-400)', marginTop:14 }}>Geneva, Switzerland · www.big3astrology.com</p>
        </div>
        <div style={{ display:'flex', gap:54 }}>
          {[['Readings',['The Big 3','Natal chart','Synastry','Solar return']],['Studio',['About','Journal','Contact','Instagram']]].map(([h,ls])=>(
            <div key={h}>
              <div style={{ fontFamily:'var(--font-sans)', fontSize:11, fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--b3a-ink-400)', marginBottom:12 }}>{h}</div>
              {ls.map(l=><div key={l} style={{ fontFamily:'var(--font-body)', fontSize:14, color:'var(--b3a-ink)', marginBottom:8, cursor:'pointer' }}>{l}</div>)}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function BookingModal({ reading, onClose }) {
  const [step, setStep] = useState(0);
  const times = ['Tue 10:00','Wed 14:30','Thu 18:00','Sat 11:00'];
  const [time, setTime] = useState(null);
  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(40,20,30,.5)', backdropFilter:'blur(4px)', zIndex:50, display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:'var(--b3a-cream)', width:440, borderRadius:'var(--radius-xl)', padding:'34px 34px 30px', boxShadow:'var(--shadow-lg)', position:'relative' }}>
        <button onClick={onClose} style={{ position:'absolute', top:18, right:18, border:'none', background:'transparent', fontSize:22, color:'var(--b3a-ink-400)', cursor:'pointer' }}>&times;</button>
        <img src={window.__resources.logoIcon} alt="" style={{ width:54, margin:'0 auto 14px', display:'block' }} />
        {step===0 ? (
          <React.Fragment>
            <h3 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:26, textAlign:'center', margin:'0 0 4px', color:'var(--b3a-ink)' }}>{reading||'The Big 3'}</h3>
            <Eyebrow center>Choose a time</Eyebrow>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, margin:'22px 0' }}>
              {times.map(t=>(
                <button key={t} onClick={()=>setTime(t)} style={{ padding:'14px', borderRadius:'var(--radius-md)', border:'1.5px solid '+(time===t?'var(--b3a-wine)':'var(--b3a-line-strong)'), background:time===t?'var(--b3a-plum-wash)':'#fff', fontFamily:'var(--font-body)', fontSize:14, color:'var(--b3a-ink)', cursor:'pointer' }}>{t}</button>
              ))}
            </div>
            <Btn variant="primary" onClick={()=>time&&setStep(1)}>Confirm {time||''}</Btn>
          </React.Fragment>
        ) : (
          <div style={{ textAlign:'center' }}>
            <h3 style={{ fontFamily:'var(--font-serif)', fontWeight:600, fontSize:26, color:'var(--b3a-ink)', margin:'4px 0 8px' }}>You&rsquo;re booked.</h3>
            <p style={{ fontFamily:'var(--font-body)', fontSize:15, color:'var(--b3a-ink-500)', margin:'0 0 20px' }}>{reading||'The Big 3'} · {time}. A confirmation is on its way to your inbox.</p>
            <Btn variant="primary" onClick={onClose}>Lovely, close</Btn>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [modal, setModal] = useState(false);
  const [reading, setReading] = useState(null);
  const openBook = (r) => { if (typeof r === 'string') setReading(r); setModal(true); };
  return (
    <div style={{ background:'var(--b3a-cream)' }}>
      <Nav onBook={()=>openBook()} />
      <Hero onBook={()=>openBook()} />
      <ZodiacBand />
      <BigThree />
      <Readings onPick={(r)=>openBook(r)} />
      <Testimonials />
      <BookingBand selected={reading} onBook={()=>openBook()} />
      <Footer />
      {modal && <BookingModal reading={reading} onClose={()=>setModal(false)} />}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
