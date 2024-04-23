import { type TableCellButtonProps } from './';
import React, { type FC } from 'react';

export const TableCellButton: FC<TableCellButtonProps> = ({
  children,
  buttons,
}) => (
  <div className="b-Table-cell-content b-Table-cell-content--buttons">
    {children && <span>{children}</span>}
    {buttons && <div className="b-Buttons">{buttons}</div>}
  </div>
);
