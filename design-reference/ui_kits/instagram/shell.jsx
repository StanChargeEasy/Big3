/* Big3 Astrology — Instagram shell chrome (status bar, top bar, nav, profile,
   feed grid, single-post view). Self-contained; shared to window. */

const A = window.ASSET || '../../assets';

/* scale a 1080×1080 post into a box of `w` px */
function PostScaler({ Comp, w }) {
  const s = w / 1080;
  return (
    <div style={{ width: w, height: w, overflow: 'hidden' }}>
      <div style={{ width: 1080, height: 1080, transform: `scale(${s})`, transformOrigin: 'top left' }}>
        <Comp />
      </div>
    </div>
  );
}

function IGStatusBar() {
  return (
    <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 22px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#111' }}>
      <span>4:36</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 13 }}>
        <span>&#9851;</span><span>&#128246;</span><span>&#128267;</span>
      </div>
    </div>
  );
}

function IGTopBar() {
  return (
    <div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 16px', borderBottom: '1px solid #efefef' }}>
      <span style={{ fontSize: 22 }}>&#128247;</span>
      <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 24, fontWeight: 600, color: '#111' }}>Instagram</span>
      <span style={{ fontSize: 22 }}>&#9992;</span>
    </div>
  );
}

function IGBottomNav({ active = 'home' }) {
  const items = ['\u2302', '\u2315', '\u2295', '\u2606', '\u263A'];
  return (
    <div style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      borderTop: '1px solid #efefef', fontSize: 24, color: '#111', background: '#fff' }}>
      {items.map((g, i) => <span key={i} style={{ opacity: i === 0 ? 1 : .8 }}>{g}</span>)}
    </div>
  );
}

function GradientAvatar({ size = 86 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', padding: 3,
      background: 'conic-gradient(from 30deg, #f0a848, #f27678, #a4426c, #f0a848)' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', padding: 3 }}>
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src={`${A}/logos/b3a-icon-color.png`} alt="" style={{ width: '74%' }} />
        </div>
      </div>
    </div>
  );
}

function ProfileHeader() {
  const Stat = ({ n, l }) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 17, color: '#111' }}>{n}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#333' }}>{l}</div>
    </div>
  );
  return (
    <div style={{ padding: '16px 16px 4px', fontFamily: 'var(--font-body)', color: '#111' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <GradientAvatar />
        <div style={{ display: 'flex', gap: 26, flex: 1, justifyContent: 'space-around' }}>
          <Stat n="1,287" l="Posts" /><Stat n="4.8K" l="Followers" /><Stat n="110" l="Following" />
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.45 }}>
        <div style={{ fontWeight: 700 }}>BIG 3 ASTROLOGY</div>
        <div style={{ color: '#8e8e8e' }}>Consultant</div>
        <div>The information you should know!</div>
        <div>Book your appointment, just follow the link below</div>
        <a style={{ color: '#385898', fontWeight: 600 }}>www.big3astrology.com/</a>
        <div style={{ color: '#385898' }}>Geneva, Switzerland</div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
        <button style={btn}>Follow</button>
        <button style={{ ...btn, background: '#fff', border: '1px solid #dbdbdb', color: '#111' }}>Message</button>
        <button style={{ ...btn, flex: '0 0 auto', width: 38, background: '#fff', border: '1px solid #dbdbdb', color: '#111' }}>&#9662;</button>
      </div>
    </div>
  );
}
const btn = { flex: 1, height: 32, borderRadius: 8, border: 'none', background: '#A4426C', color: '#fff',
  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, cursor: 'pointer' };

/* like / comment / share frame around a single post */
function PostFrame({ post, w, onBack }) {
  return (
    <div style={{ background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}>
        {onBack && <span onClick={onBack} style={{ cursor: 'pointer', fontSize: 20, color: '#111', marginRight: 4 }}>&#8592;</span>}
        <GradientAvatar size={38} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#111' }}>big3astrology</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#444' }}>Lausanne, Suiza</div>
        </div>
        <span style={{ color: '#111' }}>&#8943;</span>
      </div>
      <PostScaler Comp={post.Comp} w={w} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 14px 6px', fontSize: 24, color: '#111' }}>
        <span>&#9825;</span><span>&#9863;</span><span>&#10148;</span>
        <span style={{ marginLeft: 'auto' }}>&#9634;</span>
      </div>
      <div style={{ padding: '0 14px 14px', fontFamily: 'var(--font-body)', color: '#111' }}>
        <div style={{ fontWeight: 700, fontSize: 14 }}>325 Likes</div>
        <div style={{ fontSize: 14, marginTop: 2 }}><b>big3astrology</b> {post.cat} &middot; {post.label.toLowerCase()}</div>
        <div style={{ fontSize: 13, color: '#8e8e8e', marginTop: 4 }}>View all 23 comments</div>
        <div style={{ fontSize: 12, color: '#8e8e8e', marginTop: 4 }}>1 day ago</div>
      </div>
    </div>
  );
}

Object.assign(window, { PostScaler, IGStatusBar, IGTopBar, IGBottomNav, GradientAvatar, ProfileHeader, PostFrame });
