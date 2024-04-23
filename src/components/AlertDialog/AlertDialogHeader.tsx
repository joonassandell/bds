import React, { type FC, type PropsWithChildren } from 'react';

export const AlertDialogHeader: FC<PropsWithChildren> = ({ children }) => (
  <header className="b-Dialog-header b-AlertDialog-header">{children}</header>
);
