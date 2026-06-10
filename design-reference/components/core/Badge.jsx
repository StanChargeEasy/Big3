import React from 'react';

/**
 * Big3 Astrology — Badge
 * Small status / category chip. Jost caps with tracking. Use for
 * post categories ("Aries Season"), tags, counts and pills.
 */
export function Badge({
  children,
  variant = 'wine',
  size = 'md',
  pill = true,
  style = {},
  ...rest
}) {
  const palette = {
    wine:    { background: 'var(--b3a-wine)', color: 'var(--b3a-cream)', border: 'transparent' },
    coral:   { background: 'var(--b3a-coral)', color: '#fff', border: 'transparent' },
    gold:    { background: 'var(--b3a-gold)', color: 'var(--b3a-ink)', border: 'transparent' },
    ink:     { background: 'var(--b3a-ink)', color: 'var(--b3a-cream)', border: 'transparent' },
    softWine:  { background: 'var(--b3a-plum-wash)', color: 'var(--b3a-wine-deep)', border: 'transparent' },
    softCoral: { background: 'var(--b3a-blush)', color: 'var(--b3a-coral-600)', border: 'transparent' },
    softGold:  { background: 'var(--b3a-sand)', color: 'var(--b3a-gold-deep)', border: 'transparent' },
    outline:   { background: 'transparent', color: 'var(--b3a-ink)', border: 'var(--b3a-line-strong)' },
  };
  const sizes = {
    sm: { padding: '3px 9px', fontSize: 10 },
    md: { padding: '5px 12px', fontSize: 11 },
    lg: { padding: '7px 16px', fontSize: 12 },
  };
  const p = palette[variant] || palette.wine;
  const s = sizes[size] || sizes.md;
  return (
    <span
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
