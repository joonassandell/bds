import { type DialogTitleProps } from './';
import { Heading } from '../Heading';
import { Title } from '@radix-ui/react-dialog';
import React, { type FC } from 'react';

export const DialogTitle: FC<DialogTitleProps> = ({ asChild, children }) => {
  if (asChild) {
    return <Title asChild>{children}</Title>;
  }

  return (
    <Heading className="b-Dialog-heading" marginBottom="small" tag="h1">
      <Title asChild>
        <span>{children}</span>
      </Title>
    </Heading>
  );
};
