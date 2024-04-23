import { animate, type ValueAnimationTransition } from 'framer-motion';
import { countDecimals, isNumber, isNumeric, toNumber } from '../utils';
import { type DigitProps } from '../../components/Digit';
import { isEmpty, isNil } from 'ramda';
import { useEffect, useRef, useState } from 'react';

interface UseAnimateNumberProps {
  animateOptions?: ValueAnimationTransition<number>;
  animation?: boolean;
  decimal?: DigitProps['decimal'];
  number: string | number | null;
  numberSuffix?: string;
}

export const useAnimateNumber = ({
  animation = true,
  number,
  decimal = 2,
  animateOptions,
  numberSuffix = '',
}: UseAnimateNumberProps) => {
  const validVal = !isEmpty(number) && isNumeric(number) && !isNil(number);
  const numVal = validVal ? toNumber(number) : '--.--';
  const amountOfDecimals = countDecimals(numVal);
  const decimals = decimal || decimal === 0 ? decimal : amountOfDecimals;

  const [prevNumVal, setPrevNumVal] = useState<any>(0);
  const numberValueRef = useRef<any>();

  useEffect(() => {
    const node = numberValueRef.current;
    if (!node) return;

    if (!isNumber(numVal)) {
      node.textContent = numVal;
      return;
    }

    if (isNumber(numVal) && animation) {
      const prevNum = isNumber(prevNumVal) ? prevNumVal : 0;
      const animation = animate(prevNum, numVal, {
        duration: 1,

        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + numberSuffix;
        },
        ...animateOptions,
      });

      if (prevNum != numVal) {
        setPrevNumVal(numVal);
      }

      return () => animation.stop();
    } else {
      node.textContent = numVal.toFixed(decimals) + numberSuffix;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return { numberValueRef, value: prevNumVal };
};
