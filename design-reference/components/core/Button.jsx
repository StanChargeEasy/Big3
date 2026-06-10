import React from 'react';

/**
 * Big3 Astrology — Button
 * The brand's primary action control. Geometric Jost label with gentle
 * letter-spacing; restrained corners; soft wine-tinted lift on hover.
 */
export function Button({
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
    sm: { padding: '8px 16px', fontSize: 12, gap: 7 },
    md: { padding: '12px 24px', fontSize: 14, gap: 8 },
    lg: { padding: '16px 32px', fontSize: 15, gap: 10 },
  };

  const variants = {
    primary: { background: 'var(--b3a-wine)', color: 'var(--b3a-cream)', border: '1.5px solid var(--b3a-wine)' },
    accent:  { background: 'var(--b3a-coral)', color: '#fff', border: '1.5px solid var(--b3a-coral)' },
    gold:    { background: 'var(--b3a-gold)', color: 'var(--b3a-ink)', border: '1.5px solid var(--b3a-gold)' },
    outline: { background: 'transparent', color: 'var(--b3a-ink)', border: '1.5px solid var(--b3a-ink)' },
    ghost:   { background: 'transparent', color: 'var(--b3a-wine)', border: '1.5px solid transparent' },
    inverse: { background: 'var(--b3a-cream)', color: 'var(--b3a-ink)', border: '1.5px solid var(--b3a-cream)' },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
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
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = 'var(--shadow-card)'; } }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.99)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)'; }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
