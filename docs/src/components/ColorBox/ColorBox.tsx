import { Box, Flex, Heading, Text } from '@biocode/ds';
import { useColorValuesFromCSSVar } from '@/components/Color';
import type {
  BoxBackgroundColor,
  BoxBorderColor,
  HeadingColor,
} from '@biocode/ds';
import type { ColorBoxProps } from './ColorBox.types';
import type { FC } from 'react';

export const ColorBox: FC<ColorBoxProps> = ({
  heading,
  border = 'small',
  borderColor,
  color,
  token,
  ...props
}) => {
  const { light, dark, singleColor } = useColorValuesFromCSSVar(token);

  return (
    <Box
      asChild
      backgroundColor={token as BoxBackgroundColor}
      border={border}
      borderColor={borderColor ?? (token as BoxBorderColor)}
      borderRadius
      color={color}
      padding="medium"
      {...props}
    >
      <Flex flexDirection="column">
        <Heading color={color as HeadingColor} margin={0} size="h2">
          {heading}
        </Heading>
        <Text>
          {singleColor ? (
            <p>
              {light.hex} <br />
              {light.hsl}
            </p>
          ) : (
            <p>
              Light theme: {light.hex} &middot; {light.hsl} <br />
              Dark theme: {dark.hex} &middot; {dark.hsl}
            </p>
          )}
          {token}
        </Text>
      </Flex>
    </Box>
  );
};
