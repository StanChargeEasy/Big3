import React from 'react';

const SIGNS = {
  aries: '\u2648', taurus: '\u2649', gemini: '\u264A', cancer: '\u264B',
  leo: '\u264C', virgo: '\u264D', libra: '\u264E', scorpio: '\u264F',
  sagittarius: '\u2650', capricorn: '\u2651', aquarius: '\u2652', pisces: '\u2653',
  sun: '\u2609', moon: '\u263D', mercury: '\u263F', venus: '\u2640',
  mars: '\u2642', jupiter: '\u2643', saturn: '\u2644',
};

/**
 * Big3 Astrology — ZodiacGlyph
 * A single zodiac sign or luminary symbol, rendered as a Unicode glyph in
 * a brand color. The brand leans on these astrological marks throughout
 * (month calendars, element legends, dividers).
 */
export function ZodiacGlyph({ sign = 'libra', color = 'ink', size = 22, style = {}, ...rest }) {
  const colors = {
    ink: 'var(--b3a-ink)',
    wine: 'var(--b3a-wine)',
    coral: 'var(--b3a-coral)',
    gold: 'var(--b3a-gold)',
    muted: 'var(--b3a-ink-400)',
  };
  return (
    <span
      role="img"
      aria-label={sign}
      style={{
        fontFamily: '"Segoe UI Symbol", "Apple Symbols", "Noto Sans Symbols2", serif',
        fontSize: size,
        lineHeight: 1,
        color: colors[color] || colors.ink,
        display: 'inline-block',
        ...style,
      }}
      {...rest}
    >
      {SIGNS[sign] || SIGNS.libra}
    </span>
  );
}
