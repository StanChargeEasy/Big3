import * as React from 'react';

/**
 * Small tracked-caps category / status chip.
 * @startingPoint section="Core" subtitle="Category & status chip" viewport="700x140"
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** Solid brand fills, soft tinted washes, or hairline outline */
  variant?: 'wine' | 'coral' | 'gold' | 'ink' | 'softWine' | 'softCoral' | 'softGold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Pill shape (default) vs subtle squared corner */
  pill?: boolean;
  style?: React.CSSProperties;
}

/**
 * Small tracked-caps category / status chip.
 */
export function Badge(props: BadgeProps): React.ReactElement;
