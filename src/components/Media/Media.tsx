import { type MediaProps } from './';
import { MediaQuery } from './Media.utils';
import { Slot } from '@radix-ui/react-slot';
import React, { type FC, type ReactNode } from 'react';

const { Media: MediaComponent } = MediaQuery;

export const Media: FC<MediaProps> = ({ asChild, children, ...props }) => {
  if (asChild) {
    return (
      <MediaComponent {...props}>
        {(c, render) => {
          if (render) {
            return <Slot className={c}>{children as ReactNode}</Slot>;
          }
        }}
      </MediaComponent>
    );
  }

  return <MediaComponent {...props}>{children}</MediaComponent>;
};
