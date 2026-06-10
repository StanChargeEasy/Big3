import * as React from 'react';

export interface ZodiacGlyphProps {
  /** Sign or luminary: aries…pisces, sun, moon, mercury, venus, mars, jupiter, saturn */
  sign?: 'aries' | 'taurus' | 'gemini' | 'cancer' | 'leo' | 'virgo' | 'libra' | 'scorpio' | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces' | 'sun' | 'moon' | 'mercury' | 'venus' | 'mars' | 'jupiter' | 'saturn';
  color?: 'ink' | 'wine' | 'coral' | 'gold' | 'muted';
  size?: number;
  style?: React.CSSProperties;
}

/** A single zodiac sign / luminary symbol as a Unicode glyph in a brand color. */
export function ZodiacGlyph(props: ZodiacGlyphProps): React.ReactElement;
