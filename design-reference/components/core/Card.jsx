import React from 'react';

/**
 * Big3 Astrology — Card
 * Warm editorial surface. Defaults to white paper with a hairline border
 * and soft wine-tinted shadow. Supports tinted and inverse fills.
 */
export function Card({
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
    paper:    { background: 'var(--b3a-white)', color: 'var(--b3a-ink)' },
    cream:    { background: 'var(--b3a-cream)', color: 'var(--b3a-ink)' },
    sand:     { background: 'var(--b3a-sand)', color: 'var(--b3a-ink)' },
    blush:    { background: 'var(--b3a-blush)', color: 'var(--b3a-ink)' },
    plum:     { background: 'var(--b3a-plum-wash)', color: 'var(--b3a-wine-deep)' },
    wine:     { background: 'var(--b3a-wine)', color: 'var(--b3a-cream)' },
    charcoal: { background: 'var(--b3a-charcoal)', color: 'var(--b3a-cream)' },
  };
  const shadows = {
    none:  'none',
    sm:    'var(--shadow-sm)',
    card:  'var(--shadow-card)',
    float: 'var(--shadow-float)',
    lg:    'var(--shadow-lg)',
  };
  const radii = {
    none: '0', sm: 'var(--radius-sm)', md: 'var(--radius-md)',
    lg: 'var(--radius-lg)', xl: 'var(--radius-xl)',
  };
  const sf = surfaces[surface] || surfaces.paper;
  const dark = surface === 'wine' || surface === 'charcoal';
  return (
    <div
      style={{
        background: sf.background,
        color: sf.color,
        borderRadius: radii[radius] || radii.md,
        border: border ? `1px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--b3a-line)'}` : 'none',
        boxShadow: shadows[elevation] || shadows.card,
        padding: typeof padding === 'number' ? `${padding}px` : padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
