import * as React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  /** Kicker color */
  color?: 'coral' | 'wine' | 'gold' | 'ink' | 'muted';
  /** Flank the label with short centered rules */
  rules?: boolean;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * Tracked ALL-CAPS Jost kicker that sits above headlines across the feed.
 */
export function Eyebrow(props: EyebrowProps): React.ReactElement;
