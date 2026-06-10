import React from 'react';

/**
 * Big3 Astrology — StarRating
 * Gold five-star rating used on testimonial / consultation-review cards.
 * Read-only display by default.
 */
export function StarRating({ value = 5, max = 5, size = 18, gap = 4, color = 'gold', style = {}, ...rest }) {
  const colors = { gold: 'var(--b3a-gold)', coral: 'var(--b3a-coral)', wine: 'var(--b3a-wine)' };
  const filled = colors[color] || colors.gold;
  const empty = 'var(--b3a-line-strong)';
  return (
    <div style={{ display: 'inline-flex', gap, alignItems: 'center', ...style }} {...rest}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{ fontSize: size, lineHeight: 1, color: i < value ? filled : empty }}
        >
          {'\u2605'}
        </span>
      ))}
    </div>
  );
}
