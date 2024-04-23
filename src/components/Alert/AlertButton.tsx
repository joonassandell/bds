import { type AlertButtonProps, type AlertProps } from './';
import { Button, type ButtonProps } from '../Button';
import omit from 'ramda/es/omit';
import React, { type FC } from 'react';

export const AlertButton: FC<AlertButtonProps> = ({ children, ...props }) => {
  let variant: ButtonProps['variant'];
  let size: ButtonProps['size'];
  const { _variant, _size } = props as {
    _size: AlertProps['size'];
    _variant: AlertProps['variant'];
  };
  const restProps = omit(['_variant', '_size'], props);

  switch (_variant) {
    case 'info':
      variant = 'primary';
      break;
    case 'error':
      variant = 'error';
      break;
    case 'warning':
      variant = 'warning';
      break;
    case 'success':
      variant = 'success';
      break;
  }

  switch (_size) {
    case 'small':
      size = 'xSmall';
      break;
  }

  return (
    <Button
      {...restProps}
      className="b-Alert-button"
      size={size}
      variant={props.hasOwnProperty('variant') ? props.variant : variant}
    >
      {children}
    </Button>
  );
};
