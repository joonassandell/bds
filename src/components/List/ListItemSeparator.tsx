import { type ListItemSeparatorProps } from './';
import { Separator } from '../Separator';
import React, { type FC } from 'react';

export const ListItemSeparator: FC<ListItemSeparatorProps> = ({ ...props }) => (
  <Separator
    border="small"
    className="b-List-separator"
    decorative={false}
    {...props}
  />
);
