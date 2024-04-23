import { Heading } from '../Heading';
import { TooltipIfTruncated } from '../Tooltip';
import React, { type FC, type PropsWithChildren } from 'react';

export const LayoutBarLabel: FC<PropsWithChildren> = ({ children }) => (
  <div className="b-Layout-bar-label">
    <TooltipIfTruncated tooltipContent={children}>
      <Heading
        className="b-Layout-bar-label-heading"
        marginBottom={false}
        size="h5"
        tag="span"
      >
        {children}
      </Heading>
    </TooltipIfTruncated>
  </div>
);
