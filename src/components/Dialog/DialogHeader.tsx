import React, { type FC, type PropsWithChildren } from 'react';

export const DialogHeader: FC<PropsWithChildren> = ({ children }) => (
  <header className="b-Dialog-header">{children}</header>
);
