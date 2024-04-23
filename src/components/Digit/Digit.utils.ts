/* eslint-disable sort-keys-fix/sort-keys-fix */
type Size = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | '2xLarge';
type SizeSuffix = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export const getDigitSize = (
  size: Size,
  isScale: boolean,
  numberLength: number,
  scaleAfter: number,
) => {
  const sizeToSuffix: Record<Size, SizeSuffix> = {
    xSmall: 'xs',
    small: 's',
    medium: 'm',
    large: 'l',
    xLarge: 'xl',
    '2xLarge': '2xl',
  };

  const scaleFactors = {
    xSmall: 2,
    small: 1.75,
    medium: 1.5,
    large: 1.25,
  };

  const levelOrder: Size[] = [
    'xSmall',
    'small',
    'medium',
    'large',
    'xLarge',
    '2xLarge',
  ];

  if (!sizeToSuffix.hasOwnProperty(size)) {
    return '';
  }

  if (size === 'xLarge' || size === '2xLarge') {
    for (const [size, scaleFactor] of Object.entries(scaleFactors)) {
      if (numberLength > scaleAfter * scaleFactor) {
        return `-size:${sizeToSuffix[size as Size]}`;
      }
    }
  }

  if (isScale) {
    const sizeLevel = levelOrder.indexOf(size);
    return `-size:${sizeToSuffix[levelOrder[sizeLevel - 1]]}`;
  }

  return `-size:${sizeToSuffix[size]}`;
};
