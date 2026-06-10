/* ============================================================
   Big3 Astrology — Legal pages
   Legal notice · Terms · Cancellations & refunds · Privacy.
   Simple, readable long-form template (no bands). Copy is
   VERBATIM from the EN source set (09_EN v1.0).
   ============================================================ */
const { useEffect: useEffectL } = React;
function useTopL() { useEffectL(() => { window.scrollTo(0, 0); }, []); }

function LegalLayout({ t, eyebrow, title, onHome, children }) {
  useTopL();
  return (
    <main className="b3-page b3-legal">
      <div className="b3-shell">
        <div className="b3-legal-head">
          <span className="b3-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        <div className="b3-prose b3-measure">{children}</div>
        <div className="b3-page-back-wrap">
          <button className="b3-page-back" onClick={onHome}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {t.nav.home}
          </button>
        </div>
      </div>
    </main>
  );
}

const MAIL = 'info@big3astrology.com';
function Mail() { return <a href={`mailto:${MAIL}`}>{MAIL}</a>; }

/* ---- Legal notice ---- */
function LegalNoticePage({ t, onHome }) {
  return (
    <LegalLayout t={t} onHome={onHome} eyebrow={t.footer.links_legal} title="Legal Notice">
      <p><strong>Big Astrology GmbH</strong><br />Ränkestrasse 21<br />8700 Küsnacht ZH<br />Switzerland</p>
      <p>Email: <Mail /></p>
      <p>Managing Director: Gabriela Brecht<br />Commercial register / VAT: <span style={{ color: 'var(--text-muted)' }}>[UID CHE-___.___.___ — to be added once the GmbH is registered]</span></p>
      <p>Responsible for content: Gabriela Brecht, address as above.</p>
    </LegalLayout>
  );
}

/* ---- Terms ---- */
function TermsPage({ t, go, onHome }) {
  return (
    <LegalLayout t={t} onHome={onHome} eyebrow={t.footer.links_terms} title="Terms &amp; Conditions">
      <h2>1. Provider</h2>
      <p>These terms govern services offered by Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Switzerland (“we”, “us”). Contact: <Mail />.</p>
      <h2>2. Services</h2>
      <p>We offer astrological readings: a free Big-3 overview, a 15-minute intro call (CHF 20), a full natal reading (CHF 180), and a relationship reading (CHF 250). Readings are delivered live over Google Meet, with a written summary where stated.</p>
      <h2>3. Bookings &amp; payment</h2>
      <p>Bookings are made through our scheduling provider. Payment is due at booking, by card or TWINT, processed by our payment provider. Prices are in Swiss francs (CHF) and include any applicable Swiss VAT.</p>
      <h2>4. Cancellations &amp; rescheduling</h2>
      <p>See our <a href="#cancellations-refunds" onClick={(e) => { e.preventDefault(); go('cancellations-refunds'); }}>Cancellations &amp; Refunds</a> page.</p>
      <h2>5. Nature of services — important</h2>
      <p>Our readings are provided for insight, reflection and entertainment. They are <strong>not</strong> medical, psychological, financial or legal advice, and are no substitute for professional care. You remain responsible for your own decisions. Astrology does not predict or determine the future and never overrides your free will.</p>
      <h2>6. Liability</h2>
      <p>To the extent permitted by law, our liability is limited to intent and gross negligence. We are not liable for decisions you make based on a reading.</p>
      <h2>7. Governing law</h2>
      <p>Swiss law applies. Place of jurisdiction is Küsnacht ZH, Switzerland, to the extent permitted by law.</p>
    </LegalLayout>
  );
}

/* ---- Cancellations & refunds ---- */
function RefundsPage({ t, onHome }) {
  return (
    <LegalLayout t={t} onHome={onHome} eyebrow={t.footer.links_refund} title="Cancellations &amp; Refunds">
      <ul>
        <li><strong>Reschedule:</strong> free of charge up to 24 hours before your session, using the link in your confirmation email.</li>
        <li><strong>Cancel:</strong> at least 24 hours before your session for a full refund. Within 24 hours the fee is non-refundable, as the preparation time has been reserved for you.</li>
        <li><strong>No-show:</strong> if you miss your session without notice, the fee is non-refundable.</li>
        <li><strong>The 15-minute intro call (CHF 20)</strong> is non-refundable once it has taken place and is not credited toward other readings.</li>
        <li><strong>Problems on our side:</strong> if we need to cancel or reschedule, you're offered a new time or a full refund — your choice.</li>
      </ul>
      <p>Questions? Email <Mail />.</p>
    </LegalLayout>
  );
}

/* ---- Privacy ---- */
function PrivacyPage({ t, onHome }) {
  return (
    <LegalLayout t={t} onHome={onHome} eyebrow={t.footer.links_privacy} title="Privacy">
      <p>We keep this simple and collect as little as possible.</p>
      <ul>
        <li><strong>Your birth details</strong> (date, time, place) are used only to calculate your Big 3 and to prepare your reading. We don't sell them or share them for advertising.</li>
        <li><strong>Booking &amp; payment</strong> are handled by our scheduling and payment providers, who process your name, email and payment data to deliver the service.</li>
        <li><strong>Analytics:</strong> we use privacy-friendly, cookieless analytics. We don't use advertising cookies or cross-site tracking, so there's no cookie banner to click.</li>
        <li><strong>Your rights:</strong> email <Mail /> to ask what we hold about you, or to have it corrected or deleted.</li>
      </ul>
      <p>Controller: Big Astrology GmbH, Ränkestrasse 21, 8700 Küsnacht ZH, Switzerland.</p>
    </LegalLayout>
  );
}

Object.assign(window, { LegalNoticePage, TermsPage, RefundsPage, PrivacyPage });
