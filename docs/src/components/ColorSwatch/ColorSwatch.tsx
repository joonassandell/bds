import { Box } from '@biocode/ds';
// import { useColorValuesFromCSSVar } from '@/components/Color';
import type { FC } from 'react';

export const ColorSwatch: FC<any> = ({
  // heading,
  border = 'small',
  borderColor,
  token,
  // ...props
}) => (
  // const { light, dark, singleColor } = useColorValuesFromCSSVar(token);

  <div className="ColorSwatch">
    <Box
      asChild
      backgroundColor={token}
      border={border}
      borderColor={borderColor ?? token}
      borderRadius
    />
  </div>
);
