import { AnimatePresence, m } from 'framer-motion';
import { Flex } from '../Flex';
import {
  getCssSpaceHelper,
  isNumber,
  isNumeric,
  isString,
  toNumber,
} from '../../lib/utils';
import { type ProgressProps } from './';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import { TRANS_DEFAULT_L } from '../../lib/config';
import { useAnimateNumber, useWithChange } from '../../lib/hooks';
import c from 'clsx';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import React, { type FC } from 'react';

export const Progress: FC<ProgressProps> = ({
  amount,
  amountDecimal = 2,
  displayAmountChange = false,
  amountChange,
  className,
  loading,
  label,
  labelSuffix,
  loadingDelay,
  marginBottom,
  percent = 0,
  percentDecimal = 2,
  percentDelay,
  percentFrom,
  progressColor = '',
  subtitle,
  subtitleCase,
}) => {
  const classes = c(className, 'b-Progress', {
    ...getCssSpaceHelper('marginBottom', marginBottom),
  });
  const hasAmount = isString(amount) || isNumber(amount);
  const validPercentVal =
    !isEmpty(percent) && isNumeric(percent) && !isNil(percent);
  const percentVal = validPercentVal ? toNumber(percent) : 0;

  const { ChangeValue, value, textColor } = useWithChange({
    animation: 'fromRight',
    color: amountChange?.color,
    // Magic number
    delay: displayAmountChange ? 3000 : displayAmountChange,
    value: amount ?? '',
  });

  const { numberValueRef: percentRef } = useAnimateNumber({
    decimal: percentDecimal,
    number: percent,
    numberSuffix: '%',
  });

  const { numberValueRef: amountRef } = useAnimateNumber({
    decimal: amountDecimal,
    number: value,
  });

  return (
    <div className={classes}>
      {subtitle && (
        <div className="b-Progress-row b-Progress-row--subtitle">
          <Subtitle subtitle={subtitle} subtitleCase={subtitleCase} />
        </div>
      )}
      {(label || hasAmount) && (
        <div className="b-Progress-row Progress-row--amount">
          {label && (
            <div className="b-Progress-label">
              {label}
              {labelSuffix && (
                <span className="b-Progress-label-suffix">{labelSuffix}</span>
              )}
            </div>
          )}
          {hasAmount && (
            <Flex gap="xSmall">
              <ChangeValue asChild className="b-Progress-amountChange">
                <Text color={textColor} size={amountChange?.size} />
              </ChangeValue>
              <div className="b-Progress-amount" ref={amountRef} />
            </Flex>
          )}
        </div>
      )}
      <div className="b-Progress-row b-Progress-row--percent">
        <div className="b-Progress-progress">
          <AnimatePresence>
            {percentVal > 0 && (
              <m.div
                animate={{
                  width: `${percent}%`,
                }}
                className="b-Progress-progress-inner"
                initial={{
                  width: 0,
                }}
                key="b-Progress-progress-inner"
                style={{
                  backgroundColor: progressColor,
                  left: `${percentFrom}%`,
                }}
                transition={{ ...TRANS_DEFAULT_L, delay: percentDelay }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {loading && (
              <m.span
                animate={{ opacity: 1 }}
                className="b-Progress-loader"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="b-Progress-loader"
                transition={{ ...TRANS_DEFAULT_L, delay: loadingDelay }}
              >
                <m.span
                  animate={{
                    backgroundPosition: ['300% 50%', '0% 50%'],
                  }}
                  className="b-Progress-loader-inner"
                  transition={{
                    delay: loadingDelay,
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
              </m.span>
            )}
          </AnimatePresence>
        </div>
        <div className="b-Progress-percent-text" ref={percentRef} />
      </div>
    </div>
  );
};
