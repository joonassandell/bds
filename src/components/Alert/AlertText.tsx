import { type AlertProps, type AlertTextProps } from './';
import { Text } from '../Text';
import React, { type FC } from 'react';

export const AlertText: FC<AlertTextProps> = ({
  children,
  truncate,
  ...props
}) => {
  const { _variant } = props as { _variant: AlertProps['variant'] };

  return (
    <Text
      className="b-Alert-text"
      color={_variant}
      tag="span"
      truncate={truncate}
    >
      {children}
    </Text>
  );
};
