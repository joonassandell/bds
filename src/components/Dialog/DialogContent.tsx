import React, { type FC, type PropsWithChildren, useEffect } from 'react';

export const DialogContent: FC<PropsWithChildren> = ({ children }) => {
  // Read Changelog 0.3.35 issue.
  useEffect(
    () => () => {
      document.body.style.pointerEvents = '';
    },
    [],
  );

  return <div className="b-Dialog-content">{children}</div>;
};
