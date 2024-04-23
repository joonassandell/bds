import React, { type FC, type PropsWithChildren } from 'react';

export const DialogFooter: FC<PropsWithChildren> = ({ children }) => (
  <footer className="b-Dialog-footer">{children}</footer>
);
