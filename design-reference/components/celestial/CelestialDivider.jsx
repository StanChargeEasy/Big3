import React from 'react';

/**
 * Big3 Astrology — CelestialDivider
 * The thin editorial rule flanked by luminary glyphs that separates
 * sections across the feed. `duo` = Moon — Sun; `trinity` = Moon — ASC — Sun.
 *
 * `base` is the path (from the consuming HTML) to the /assets folder.
 */
export function CelestialDivider({
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
    ink: 'var(--b3a-ink)',
  };
  const c = ruleColors[color] || ruleColors.wine;
  const rule = (
    <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${c}, transparent)`, opacity: 0.55 }} />
  );
  const img = (name, sz) => (
    <img src={`${base}/icons/glyph-${name}.png`} alt="" style={{ height: sz, width: 'auto', objectFit: 'contain', flex: 'none' }} />
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', ...style }} {...rest}>
      {img('moon', glyphSize)}
      {rule}
      {variant === 'trinity' && img('libra', glyphSize * 1.5)}
      {variant === 'trinity' && rule}
      {img('sun', glyphSize)}
    </div>
  );
}
