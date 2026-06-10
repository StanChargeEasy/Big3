import * as React from 'react';

/**
 * The brand's triangle icon (Moon · Sun · Ascendant constellation).
 * @startingPoint section="Celestial" subtitle="Big 3 triangle icon mark" viewport="700x160"
 */
export interface TrinityMarkProps {
  /** Square render size in px */
  size?: number;
  /** Path from the consuming HTML to the /assets folder, e.g. "../assets" */
  base?: string;
  /** color (full brand), white (reversed), ink (monochrome black) */
  tone?: 'color' | 'white' | 'ink';
  style?: React.CSSProperties;
}
export function TrinityMark(props: TrinityMarkProps): React.ReactElement;
