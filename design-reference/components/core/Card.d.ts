import * as React from 'react';

/**
 * Warm editorial surface card with hairline border + soft wine-tinted shadow.
 * @startingPoint section="Core" subtitle="Surface card container" viewport="700x220"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Fill surface */
  surface?: 'paper' | 'cream' | 'sand' | 'blush' | 'plum' | 'wine' | 'charcoal';
  /** Drop-shadow elevation */
  elevation?: 'none' | 'sm' | 'card' | 'float' | 'lg';
  border?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** px number or any CSS padding string */
  padding?: number | string;
  style?: React.CSSProperties;
}

/**
 * Warm editorial surface card with hairline border + soft wine-tinted shadow.
 */
export function Card(props: CardProps): React.ReactElement;
