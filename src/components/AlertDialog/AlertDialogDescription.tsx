import { type AlertDialogDescriptionProps } from './';
import { Description } from '@radix-ui/react-alert-dialog';
import { Text } from '../Text';
import React, { type FC } from 'react';

export const AlertDialogDescription: FC<AlertDialogDescriptionProps> = ({
  asChild,
  children,
}) => {
  if (asChild) {
    return <Description asChild>{children}</Description>;
  }

  return (
    <Text className="b-Dialog-description b-AlertDialog-description">
      <Description>{children}</Description>
    </Text>
  );
};
