import React from 'react';

/**
 * Big3 Astrology — Eyebrow
 * The tracked ALL-CAPS Jost kicker that sits above headlines across the
 * feed ("CONSULTATION REVIEW", "MANTRAS FOR ARIES SEASON"). Optionally
 * flanked by short rules for the centered editorial treatment.
 */
export function Eyebrow({
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
    muted: 'var(--b3a-ink-400)',
  };
  const c = colors[color] || colors.coral;
  const label = (
    <span
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 'var(--fs-label)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: c,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
  if (!rules) {
    return (
      <div style={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start', ...style }} {...rest}>
        {label}
      </div>
    );
  }
  const rule = <span style={{ flex: 1, height: 1, background: c, opacity: 0.4, maxWidth: 64 }} />;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', ...style }} {...rest}>
      {rule}{label}{rule}
    </div>
  );
}
