import React from 'react';

/**
 * Big3 Astrology — TrinityMark
 * The brand's triangle icon: Moon · Sun · Ascendant joined into the
 * "Big 3" constellation. Renders the official icon asset.
 *
 * `base` is the path (from the consuming HTML file) to the /assets folder,
 * e.g. "../assets" or "../../assets".
 */
export function TrinityMark({ size = 56, base = 'assets', tone = 'color', style = {}, ...rest }) {
  const src = `${base}/logos/b3a-icon-color.png`;
  const filters = {
    color: 'none',
    white: 'brightness(0) invert(1)',
    ink: 'brightness(0)',
  };
  return (
    <img
      src={src}
      alt="Big 3 Astrology"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain', filter: filters[tone] || 'none', ...style }}
      {...rest}
    />
  );
}
