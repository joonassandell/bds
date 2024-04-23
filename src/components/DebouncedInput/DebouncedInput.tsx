import { debounce } from '../../lib/utils';
import { type DebouncedInputProps } from './';
import { Input } from '../Input';
import isNil from 'ramda/es/isNil';
import React, {
  type ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const DebouncedInput = forwardRef<HTMLInputElement, DebouncedInputProps>(
  (
    {
      onChange,
      debounceTime = 1000,
      initialValue,
      enableInitialStateSync = true,
      ...props
    },
    forwardedRef,
  ) => {
    const [value, setValue] = useState<DebouncedInputProps['initialValue']>(
      isNil(initialValue) ? '' : initialValue,
    );
    const isInitialMount = useRef(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedFn = useCallback(
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
      }, debounceTime),
      [onChange, debounceTime],
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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedFn(e);
    };

    return (
      <Input
        onChange={handleInputChange}
        ref={forwardedRef}
        value={value}
        {...props}
      />
    );
  },
);
