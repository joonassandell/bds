import { debounce } from '../../lib/utils';
import { type DebouncedTextareaProps } from './';
import { Textarea } from '../Textarea';
import isNil from 'ramda/es/isNil';
import React, {
  type ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const DebouncedTextarea = forwardRef<
  HTMLTextAreaElement,
  DebouncedTextareaProps
>(
  (
    {
      onChange,
      debounceTime = 1000,
      initialValue,
      enableInitialStateSync,
      ...props
    },
    forwardedRef,
  ) => {
    const [value, setValue] = useState<DebouncedTextareaProps['initialValue']>(
      isNil(initialValue) ? '' : initialValue,
    );
    const isInitialMount = useRef(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedFn = useCallback(
      debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e);
      }, debounceTime),
      [onChange],
    );

    useEffect(() => {
      if (isInitialMount.current) {
        // On initial mount, sync with initialValue
        setValue(initialValue);
        isInitialMount.current = false;
      } else {
        // Only set the value if they are different
        if (enableInitialStateSync && initialValue !== value) {
          setValue(initialValue);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialValue]);

    return (
      <Textarea
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          const value = e.target.value;
          setValue(value);
          debouncedFn(e);
        }}
        ref={forwardedRef}
        value={value}
        {...props}
      />
    );
  },
);
