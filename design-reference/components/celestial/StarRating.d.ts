import * as React from 'react';

export interface StarRatingProps {
  /** Number of filled stars */
  value?: number;
  max?: number;
  size?: number;
  gap?: number;
  color?: 'gold' | 'coral' | 'wine';
  style?: React.CSSProperties;
}

/** Gold five-star rating for testimonial / consultation-review cards. */
export function StarRating(props: StarRatingProps): React.ReactElement;
