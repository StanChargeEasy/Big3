import * as React from 'react';

export interface CelestialDividerProps {
  /** duo = Moon — Sun · trinity = Moon — ASC — Sun */
  variant?: 'duo' | 'trinity';
  /** Path from the consuming HTML to the /assets folder */
  base?: string;
  color?: 'wine' | 'gold' | 'coral' | 'ink';
  glyphSize?: number;
  style?: React.CSSProperties;
}

/** Thin editorial rule flanked by luminary glyphs; separates feed sections. */
export function CelestialDivider(props: CelestialDividerProps): React.ReactElement;
