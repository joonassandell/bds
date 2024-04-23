import { Description } from '@radix-ui/react-dialog';
import { type DialogDescriptionProps } from './';
import { Text } from '../Text';
import React, { type FC } from 'react';

export const DialogDescription: FC<DialogDescriptionProps> = ({
  asChild,
  children,
}) => {
  if (asChild) {
    return <Description asChild>{children}</Description>;
  }

  return (
    <Text className="b-Dialog-description">
      <Description>{children}</Description>
    </Text>
  );
};
