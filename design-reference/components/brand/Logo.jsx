import React from 'react';

/**
 * Big3 Astrology — Logo
 * The full horizontal wordmark lockup. Pick the variant that reads cleanly
 * on your background. `base` is the path from the consuming HTML to /assets.
 */
export function Logo({ variant = 'colorDark', height = 48, base = 'assets', style = {}, ...rest }) {
  const files = {
    colorDark:  'b3a-full-color-black.png', // full color, for light backgrounds
    colorLight: 'b3a-full-color-white.png', // full color w/ white text, for dark backgrounds
    black:      'b3a-full-black.png',        // solid black monochrome
    white:      'b3a-full-white.png',        // solid white monochrome
  };
  return (
    <img
      src={`${base}/logos/${files[variant] || files.colorDark}`}
      alt="Big 3 Astrology"
      style={{ height, width: 'auto', objectFit: 'contain', ...style }}
      {...rest}
    />
  );
}
