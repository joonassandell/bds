import {
  countDecimals,
  getCssSpaceHelper,
  isNumber,
  isNumeric,
  toNumber,
} from '../../lib/utils';
import { type DigitProps } from './';
import { getDigitSize } from './Digit.utils';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import { useAnimateNumber, useWithChange } from '../../lib/hooks';
import { useResize } from '../../lib/hooks/useResize';
import c from 'clsx';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const Digit = forwardRef<HTMLDivElement, DigitProps>(
  (
    {
      animation = true,
      className,
      changeValue,
      decimal = 2,
      displayChangeValue = false,
      isActive,
      justify = 'left',
      marginBottom,
      number = '--.--',
      scale,
      size = 'medium',
      subtitle,
      truncate,
      unit = 'kg CO₂e \n/ kg',
      unitPosition = 'right',
      unitUppercase,
      weight = 'default',
    },
    forwardedRef,
  ) => {
    const validVal = !isEmpty(number) && isNumeric(number) && !isNil(number);
    const numVal = validVal ? toNumber(number) : '--.--';
    const amountOfDecimals = countDecimals(numVal);
    const decimals = decimal || decimal === 0 ? decimal : amountOfDecimals;
    const numberLength = numVal
      ? toNumber(numVal).toFixed().toString().length + decimals
      : 0;
    const [isEllipsis, setIsEllipsis] = useState(false);
    const truncateAfter = truncate && isNumber(truncate) ? truncate : 5;
    const isTruncate = truncate && numberLength > truncateAfter;
    const scaleAfter = scale && isNumber(scale) ? (scale as number) : 6;
    const isScale = !!scale && numberLength > scaleAfter;

    const unitPosBottom = unitPosition === 'bottom';
    const unitPosInNumber = unitPosition === 'inNumber';
    const classes = c(
      className,
      'b-Digit',
      getDigitSize(size, isScale, numberLength, scaleAfter),
      {
        '-justify:center': justify === 'center',
        '-unit:percent': unit === '%',
        '-unit:position:bottom': unitPosBottom,
        '-weight:strong': weight === 'strong',
        'is-inActive': isActive === false,
        'is-truncate': isTruncate,
        ...getCssSpaceHelper('marginBottom', marginBottom),
      },
    );
    const unitSingleLine = unit.replace(/(\r\n|\n|\r)/gm, '');

    const numberRef = useRef<HTMLDivElement>(null);
    const { ChangeValue, value, textColor } = useWithChange({
      animation: 'fromTop',
      color: changeValue?.color,
      // Magic number
      delay: displayChangeValue ? 3000 : displayChangeValue,
      value: numVal,
    });
    const { numberValueRef } = useAnimateNumber({
      animateOptions: {
        onComplete: () => {
          if (!truncate || !numberRef.current) return;
          const { clientWidth, scrollWidth } = numberRef.current;
          setIsEllipsis(scrollWidth > clientWidth);
        },
      },
      animation,
      decimal,
      number: value,
    });

    const unitVal = unit;
    const unitValUpper: any =
      unit === 'kg CO₂e \n/ kg'
        ? 'KG CO₂e / KG'
        : !unitUppercase
        ? unit
        : unitUppercase;

    const setTruncateOnResize = useCallback(() => {
      if (!numberRef.current || !truncate) return;
      const { clientWidth, scrollWidth } = numberRef.current;
      setIsEllipsis(scrollWidth > clientWidth);
    }, [numberRef, truncate]);

    useResize(setTruncateOnResize, [numberRef, truncate]);

    useEffect(() => {
      if (!animation) setTruncateOnResize();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animation]);

    return (
      <div
        className={classes}
        ref={forwardedRef}
        title={`${numVal} ${unitSingleLine}`}
      >
        {subtitle && <Subtitle className="b-Digit-subtitle" {...subtitle} />}
        <div className="b-Digit-inner">
          <div className="b-Digit-number" key="b-Digit-number" ref={numberRef}>
            <span ref={numberValueRef} />
            {unitPosInNumber && !isEmpty(numVal) && unitVal && (
              <span className="b-Digit-number-unit">{unitVal}</span>
            )}
          </div>
          {!unitPosBottom && !unitPosInNumber && unitVal && (
            <div className="b-Digit-unit">{unitVal}</div>
          )}
          {unitPosBottom && (
            <Subtitle
              className="b-Digit-unitBottom"
              marginBottom={false}
              subtitle={unitValUpper}
              subtitleCase={false}
            />
          )}
          {displayChangeValue && (
            <ChangeValue asChild className="b-Digit-changeValue">
              <Text color={textColor} size={changeValue?.size} />
            </ChangeValue>
          )}
        </div>
        {isEllipsis && isTruncate && (
          <Subtitle
            aria-hidden="true"
            className="b-Digit-numberDetailed"
            color="strong"
            marginBottom={false}
            subtitleSuffix={unitValUpper}
            subtitleSuffixCase={false}
          >
            {numVal}
          </Subtitle>
        )}
      </div>
    );
  },
);
