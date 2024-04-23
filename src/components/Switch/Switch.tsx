import { Icon } from '../Icon';
import { Root, Thumb } from '@radix-ui/react-switch';
import { type SwitchProps } from './';
import c from 'clsx';
import React, { type FC, Fragment } from 'react';

export const Switch: FC<SwitchProps> = ({
  className,
  id,
  label,
  helpOnClick,
  HelpButtonWrapper = Fragment,
  ...props
}) => {
  const classes = c(className, 'b-Switch');

  return (
    <div className={classes}>
      <Root className="b-Switch-slider" id={id} name={id} {...props}>
        <Thumb className="b-Switch-thumb" />
      </Root>
      {label && (
        <label className="b-Switch-label" htmlFor={id}>
          {label}
        </label>
      )}
      {helpOnClick && (
        <HelpButtonWrapper>
          <button className="b-Switch-help" onClick={helpOnClick} type="button">
            <Icon name="help" size="xSmall" />
          </button>
        </HelpButtonWrapper>
      )}
    </div>
  );
};
