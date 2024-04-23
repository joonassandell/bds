import React, { type FC, type PropsWithChildren } from 'react';

export const AlertDialogFooter: FC<PropsWithChildren> = ({ children }) => (
  <footer className="b-Dialog-footer b-AlertDialog-footer">{children}</footer>
);
