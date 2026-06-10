import * as React from 'react';

/**
 * Props for the brand's primary action control.
 * @startingPoint section="Core" subtitle="Branded action button" viewport="700x150"
 */
export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Visual style. primary=wine, accent=coral, gold=gold, outline/ghost/inverse */
  variant?: 'primary' | 'accent' | 'gold' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Tracked ALL-CAPS treatment (boutique label feel) */
  uppercase?: boolean;
  /** Fully rounded pill shape */
  pill?: boolean;
  /** Stretch to container width */
  full?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * The brand's primary action control — geometric Jost label, restrained
 * corners, soft wine-tinted lift on hover.
 */
export function Button(props: ButtonProps): React.ReactElement;
