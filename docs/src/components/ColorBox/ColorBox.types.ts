import type { BoxProps, Color } from '@biocode/ds';

export interface ColorBoxProps extends BoxProps {
  color?: Color;
  heading?: string;
  token: Color;
}
