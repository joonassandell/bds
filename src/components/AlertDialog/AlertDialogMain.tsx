import React, { type FC, type PropsWithChildren } from 'react';

export const AlertDialogMain: FC<PropsWithChildren> = ({ children }) => (
  <div className="b-Dialog-main b-AlertDialog-main">{children}</div>
);
