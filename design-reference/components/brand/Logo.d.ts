import * as React from 'react';

export interface LogoProps {
  /** colorDark (light bg) · colorLight (dark bg) · black · white */
  variant?: 'colorDark' | 'colorLight' | 'black' | 'white';
  /** Render height in px (width auto) */
  height?: number;
  /** Path from the consuming HTML to the /assets folder */
  base?: string;
  style?: React.CSSProperties;
}

/** Full horizontal Big 3 Astrology wordmark lockup. */
export function Logo(props: LogoProps): React.ReactElement;
