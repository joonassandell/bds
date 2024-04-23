import { Avatar } from '../Avatar';
import { type TableCellNameProps } from './';
import React, { type FC } from 'react';

export const TableCellName: FC<TableCellNameProps> = ({
  href,
  name,
  onClick,
  target = '_self',
}) => {
  if (href) {
    return (
      <a
        className="b-Table-cell-content b-Table-cell-content--name"
        href={href}
        onClick={onClick}
        target={target}
      >
        <Avatar hover="parent" meta name={name} variant="secondary" />
      </a>
    );
  }

  return (
    <div className="b-Table-cell-content b-Table-cell-content--name">
      <Avatar hover="parent" meta name={name} variant="secondary" />
    </div>
  );
};
