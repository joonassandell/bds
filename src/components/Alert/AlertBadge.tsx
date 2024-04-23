import { type AlertBadgeProps, type AlertProps } from './';
import { Badge, type BadgeProps } from '../Badge';
import React, { type FC } from 'react';

export const AlertBadge: FC<AlertBadgeProps> = ({ children, ...props }) => {
  const { _size, _variant } = props as {
    _size: AlertProps['size'];
    _variant: AlertProps['variant'];
  };
  const variant: BadgeProps['variant'] = _variant;
  const size: BadgeProps['size'] = _size;

  return (
    <Badge
      className="b-Alert-badge"
      size={size}
      variant={props.hasOwnProperty('variant') ? props.variant : variant}
    >
      {children}
    </Badge>
  );
};
