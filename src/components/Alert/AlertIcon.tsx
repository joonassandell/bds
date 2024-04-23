import { type AlertProps } from './';
import { Icon, type IconProps } from '../Icon';
import React, { type FC } from 'react';

export const AlertIcon: FC = props => {
  const { _variant, _size } = props as {
    _size: IconProps['size'];
    _variant: AlertProps['variant'];
  };
  let name: IconProps['name'] = 'info';
  let size: IconProps['size'];

  switch (_variant) {
    case 'success':
      name = 'checkCircle';
      break;
    case 'warning':
      name = 'exclamation';
      break;
    case 'error':
      name = 'exclamationTriangle';
      break;
    case 'highlight':
      name = 'lightBulb';
      break;
  }

  switch (_size) {
    case 'medium':
      size = 'small';
      break;
    case 'small':
      size = 'xSmall';
      break;
  }

  return <Icon className="b-Alert-icon" name={name} size={size} />;
};
