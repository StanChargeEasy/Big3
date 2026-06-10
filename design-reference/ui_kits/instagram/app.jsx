/* Big3 Astrology — Instagram kit interactive app */
const { useState } = React;

function Phone({ children }) {
  return (
    <div style={{ width: 412, background: '#000', borderRadius: 52, padding: 12, boxShadow: '0 40px 90px -30px rgba(58,30,44,.55)' }}>
      <div style={{ position: 'relative', background: '#fff', borderRadius: 42, overflow: 'hidden', height: 858 }}>
        <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 120, height: 28, background: '#000', borderRadius: 16, zIndex: 5 }} />
        {children}
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = useState('profile'); // 'profile' | 'feed'
  const [openId, setOpenId] = useState(null);
  const W = 388;
  const open = openId && POSTS.find(p => p.id === openId);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', gap: 40, alignItems: 'flex-start', justifyContent: 'center',
      padding: '48px 24px', background: 'var(--surface-page)' }}>
      <Phone>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
          <IGStatusBar />
          <IGTopBar />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {open ? (
              <PostFrame post={open} w={W} onBack={() => setOpenId(null)} />
            ) : view === 'profile' ? (
              <React.Fragment>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 18, color: '#111' }}>
                  <span style={{ fontSize: 18 }}>&#8592;</span> big3astrology <span style={{ marginLeft: 'auto', fontSize: 18 }}>&#8942;</span>
                </div>
                <ProfileHeader />
                <div style={{ display: 'flex', borderTop: '1px solid #efefef', marginTop: 12 }}>
                  <div style={{ flex: 1, textAlign: 'center', padding: 10, borderBottom: '2px solid #111', fontSize: 20 }}>&#9638;</div>
                  <div style={{ flex: 1, textAlign: 'center', padding: 10, color: '#aaa', fontSize: 20 }}>&#9783;</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
                  {POSTS.concat(POSTS).map((p, i) => (
                    <div key={i} onClick={() => setOpenId(p.id)} style={{ cursor: 'pointer' }}>
                      <PostScaler Comp={p.Comp} w={(W - 4) / 3} />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ) : (
              <div>
                {POSTS.map(p => (
                  <div key={p.id} onClick={() => setOpenId(p.id)} style={{ cursor: 'pointer', borderBottom: '1px solid #fafafa' }}>
                    <PostFrame post={p} w={W} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <IGBottomNav />
        </div>
      </Phone>

      {/* side controls */}
      <div style={{ width: 230, position: 'sticky', top: 48, fontFamily: 'var(--font-body)' }}>
        <img src={`${ASSET}/logos/b3a-full-color-black.png`} alt="Big 3 Astrology" style={{ width: 200, marginBottom: 18 }} />
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>Instagram Kit</div>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 18 }}>
          The Big 3 feed system. Switch between the profile grid and the scrolling feed; tap any post to open it.</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
          <button onClick={() => { setView('profile'); setOpenId(null); }} style={tab(view === 'profile')}>Profile grid</button>
          <button onClick={() => { setView('feed'); setOpenId(null); }} style={tab(view === 'feed')}>Feed</button>
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>Templates</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {POSTS.map(p => (
            <button key={p.id} onClick={() => setOpenId(p.id)} style={{ ...row, ...(openId === p.id ? rowActive : {}) }}>
              <span style={{ fontWeight: 700 }}>{p.label}</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--b3a-coral)' }}>{p.cat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const tab = (on) => ({ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1.5px solid ' + (on ? 'var(--b3a-wine)' : 'var(--b3a-line-strong)'),
  background: on ? 'var(--b3a-wine)' : 'transparent', color: on ? 'var(--b3a-cream)' : 'var(--b3a-ink)',
  fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 13, letterSpacing: '.04em', cursor: 'pointer' });
const row = { display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', borderRadius: 8, border: '1px solid var(--b3a-line)',
  background: '#fff', color: 'var(--b3a-ink)', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer', textAlign: 'left' };
const rowActive = { borderColor: 'var(--b3a-wine)', background: 'var(--b3a-plum-wash)' };

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
