import { type AlertDialogTitleProps } from './';
import { Heading } from '../Heading';
import { Title } from '@radix-ui/react-alert-dialog';
import React, { type FC } from 'react';

export const AlertDialogTitle: FC<AlertDialogTitleProps> = ({
  asChild,
  children,
}) => {
  if (asChild) {
    return <Title asChild>{children}</Title>;
  }

  return (
    <Heading
      className="b-Dialog-heading b-AlertDialog-heading"
      marginBottom="small"
      tag="h1"
    >
      <Title asChild>
        <span>{children}</span>
      </Title>
    </Heading>
  );
};
