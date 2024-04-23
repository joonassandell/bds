import { ConditionalWrapper } from '../ConditionalWrapper';
import { type FieldsetProps } from './';
import { getCssSpaceHelpers } from '../../lib/utils';
import { Icon } from '../Icon';
import c from 'clsx';
import isNil from 'ramda/es/isNil';
import React, { type FC } from 'react';

export const Fieldset: FC<FieldsetProps> = ({
  className,
  children,
  helpButtonWrapper,
  helpOnClick,
  legend,
  ...props
}) => {
  const classes = c(className, 'b-Fieldset', {
    ...getCssSpaceHelpers(props),
  });

  return (
    <fieldset className={classes}>
      {legend && (
        <legend className="b-Fieldset-legend">
          {legend}
          {helpOnClick && (
            <ConditionalWrapper
              condition={!isNil(helpButtonWrapper) && !isNil(helpOnClick)}
              //@ts-ignore
              wrapper={helpButtonWrapper}
            >
              <button
                className="b-Fieldset-help"
                onClick={helpOnClick}
                type="button"
              >
                <Icon name="help" size="xxSmall" />
              </button>
            </ConditionalWrapper>
          )}
        </legend>
      )}
      {children}
    </fieldset>
  );
};
