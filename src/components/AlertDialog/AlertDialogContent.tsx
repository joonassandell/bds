import React, { type FC, type PropsWithChildren, useEffect } from 'react';

export const AlertDialogContent: FC<PropsWithChildren> = ({ children }) => {
  // Read Changelog 0.3.35 issue.
  useEffect(
    () => () => {
      document.body.style.pointerEvents = '';
    },
    [],
  );

  return (
    <div className="b-Dialog-content b-AlertDialog-content">{children}</div>
  );
};
