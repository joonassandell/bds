import { ConditionalWrapper } from '../ConditionalWrapper';
import { Flex } from '../Flex';
import { type ListItemValueProps } from './';
import { Text } from '../Text';
import { TooltipIfTruncated } from '../Tooltip';
import { useAnimateNumber, useWithChange } from '../../lib/hooks';
import c from 'clsx';
import React, { type FC } from 'react';

export const ListItemValue: FC<ListItemValueProps> = ({
  amountChange,
  children,
  className,
  number,
  truncate,
}) => {
  const classes = c('b-List-value', className, {
    'b-textTruncate': truncate,
  });

  const {
    ChangeValue,
    value: newVal,
    textColor,
  } = useWithChange({
    animation: 'fromRight',
    color: amountChange?.color,
    // Magic number
    delay: 3000,
    tag: 'span',
    value: number ?? '',
  });

  const { numberValueRef: amountRef } = useAnimateNumber({
    number: newVal,
  });

  return (
    <ConditionalWrapper
      condition={!!truncate}
      wrapper={wrapperChildren => (
        <TooltipIfTruncated tooltipContent={children}>
          {wrapperChildren}
        </TooltipIfTruncated>
      )}
    >
      <dd className={classes}>
        {number && (
          <Flex gap="xSmall">
            <ChangeValue asChild className="b-List-amountChange">
              <Text color={textColor} size={amountChange?.size} />
            </ChangeValue>
            <div ref={amountRef} />
          </Flex>
        )}
        {children}
      </dd>
    </ConditionalWrapper>
  );
};
