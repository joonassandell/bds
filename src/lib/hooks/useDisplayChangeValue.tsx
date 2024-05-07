import { animate, AnimatePresence, m } from 'framer-motion';
import { getSlideInAnimationVariants } from '../../components/Toast/Toast.utils';
import { isEmpty, isNil } from 'ramda';
import { isNumber, isNumeric } from '../utils';
import { Slot } from '@radix-ui/react-slot';
import { type TextProps } from '../../components/Text';
import { type ToastContextProps } from '../../components/Toast/Toast.types';
import { TRANS_DEFAULT_M } from '../config';
import c from 'clsx';
import React, {
  type FC,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface DisplayChangeValueOptions {
  /**
   * Slide animation of the change value.
   * The ChangeValue component will slide in opposite direction when exit.
   */
  animation?: ToastContextProps['animation'];

  /**
   * Color
   */
  color?: 'neutral' | 'default' | 'reverse';

  /**
   * Decimal places of the change value, default to 2
   */
  decimal?: number;

  /**
   * How long will the hook return the updated value. In other words, when new value comes in,
   * this will display the delta (for (delay - 500) ms), then delta removed from the DOM.
   * After that, we update the old value with new value
   */
  delay?: number | false | 'infinity';

  /**
   * Reset the delta in case other configurations keep the delta (instead of set it to '' after delay time)
   */
  reset?: boolean;

  /**
   * HTML tag use for render ChangeValue component. Default to 'span'.
   * This could be useful for animation inside svg (not tested yet).
   */
  tag?: keyof JSX.IntrinsicElements;

  /**
   * The value that will change. Expected a numeric value either as string or number
   */
  value: number | string;
}

/**
 * @param animation slide animation of the change value.
 * The ChangeValue component will slide in opposite direction when exit.
 * @param tag HTML tag use for render ChangeValue component. Default to 'span'.
 * This could be useful for animation inside svg (not tested yet).
 * @param value The value that will change.
 * @param delay How long will the hook return the updated value. In other words, when new value comes in,
 * this will display the delta (for (delay - 500) ms), then delta removed from the DOM.
 * After that, we update the old value with new value
 * @param decimal decimal places of the change value, default to 2
 * @returns ChangeValue: The component that will has the delta (old value - new value).
 * Should customise position inside the component that use this hook.
 * @return delta: The difference of the passed in value between renders
 * @return value: The new value
 * @example
 * const YourComponent: FC<YourComponentProps> = ({value}) => {
 * // Only value is required
 *  const { delta, value: updatedValue, ChangeComponent } = useWithChange({ value });
 * // ... your component logic
 *  return (
 *    <div>
 *        <span className="b-YourComponent-someMagicStuff">{ updatedValue }</span>
 *        <ChangeComponent className="b-YourComponent-changeValue" />
 *    </div>
 *  );
 * };
 *
 * @note See Digit component to see how this hook is used.
 */

export const useWithChange = ({
  animation = 'fromTop',
  color = 'default',
  tag = 'span',
  value,
  delay = 3000,
  decimal = 2,
  reset = false,
}: DisplayChangeValueOptions) => {
  const variants = getSlideInAnimationVariants('50%', 400, animation);
  const [prevValue, setPrevValue] = useState(value || '');
  const [delta, setDelta] = useState<number | string>('');
  const [display, setDisplay] = useState(false);
  const deltaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isValueValid = !isEmpty(value) && isNumeric(value) && !isNil(value);
    // If we don't delay, we just use this as a normal useState, so no need for animation
    if (delay === false) {
      setPrevValue(value);
      return;
    }
    // If there is no change, do nothing
    if (value === prevValue) return;
    // If either is null/undefined, or non-number input, do nothing
    if (!isValueValid || isNil(prevValue) || !isNumeric(prevValue)) {
      setPrevValue(value);
      return;
    } else {
      setDelta(+value - +prevValue); // These should be number, so casting them here won't cause issue
    }

    setDisplay(true);
    // Show the delta first, then change the value :)
    const timeout =
      delay !== 'infinity' &&
      setTimeout(() => {
        setDelta('');
        setPrevValue(value);
      }, delay || 0);

    return () => {
      timeout && clearTimeout(timeout);
      setDelta(0);
      setPrevValue(value);
      setDisplay(false);
    };

    // only run when value changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);

  useEffect(() => {
    if (
      deltaRef.current &&
      value !== prevValue &&
      // Again if there is no delay, we don't animate things
      typeof delay === 'number'
    ) {
      // Animate the change
      const anim = animate(0, delta, {
        duration: 0.5,
        onComplete() {
          setTimeout(() => {
            setDisplay(false);
          }, delay - 500);
        },
        onUpdate(value) {
          const content =
            typeof value === 'string'
              ? value
              : value > 0
                ? `+ ${(value as number).toFixed(decimal)}`
                : (value as number).toFixed(decimal);
          if (deltaRef.current && isNumber(value))
            deltaRef.current.textContent = `${content}`;
        },
      });

      return () => anim.stop();
    }
  }, [decimal, delay, delta, prevValue, value]);

  useEffect(() => {
    !!reset && setDelta('');
  }, [reset]);

  const ChangeValue: FC<
    PropsWithChildren<{ asChild?: boolean; className?: string }>
  > = ({ children, className, asChild }) => {
    const classes = c('b-ChangeValue', className);
    const MotionComponent = asChild ? m(Slot) : m(tag);

    return (
      <AnimatePresence>
        {display && (
          <MotionComponent
            animate="enter"
            className={classes}
            exit="exit"
            initial="initial"
            key="b-DeltaValue"
            ref={deltaRef}
            transition={TRANS_DEFAULT_M}
            variants={variants}
          >
            {children}
          </MotionComponent>
        )}
      </AnimatePresence>
    );
  };

  const textColor: TextProps['color'] = useMemo(() => {
    switch (color) {
      case 'neutral':
        return 'neutral';
      case 'default':
        return (delta as number) > 0 ? 'error' : 'success';
      case 'reverse':
        return (delta as number) < 0 ? 'error' : 'success';
      default:
        return (delta as number) > 0 ? 'error' : 'success';
    }
  }, [color, delta]);

  return { ChangeValue, delta, textColor, value: prevValue };
};
