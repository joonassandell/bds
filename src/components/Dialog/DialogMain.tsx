import React, { type FC, type PropsWithChildren } from 'react';

export const DialogMain: FC<PropsWithChildren> = ({ children }) => (
  <div className="b-Dialog-main">{children}</div>
);
