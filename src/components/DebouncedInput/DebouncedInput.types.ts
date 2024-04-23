import { type ChangeEventHandler } from 'react';
import { type InputProps } from '../Input';

export interface DebouncedInputProps
  extends Omit<InputProps, 'onChange' | 'value'> {
  debounceTime?: number;

  /**
   * How to handle syncing of the initialValue
   *
   * @defaultValue true
   * @param true Sync initialValue and its inner state value on initial
   * mount, and when _initialValue and value_ don't match on rerender. Latter is
   * to prevent the latest change from the user to be overridden by the new
   * initialValue that may happen in some cases.
   * @param false DebouncedInput will sync initialValue and its inner state
   * value on initial mount only.
   * @example
   * The user enters 10000 kWh for Solar Power, then changes to 1000 kWh.
   * The query that fetches value for Solar Power gets invalidated and
   * re-fetches again. In this case, there are 2 re-fetches: 1st is for 10000
   * and the second one is for 1000. If the first one completes after the user
   * enters the 2nd input (1000), the input will stay as 10000 (stale) until
   * the 2nd re-fetch finishes.
   *
   * This can happen really fast, which causes the input to behavior weirdly and
   * confuse the user. In this case, set `enableInitialStateSync` to `false`
   * will make the input keep the latest input from the user.
   *
   * @note Remember to add `key` attribute to remount the debounce input when
   * enableInitialStateSync=false.
   */
  enableInitialStateSync?: boolean;

  initialValue: InputProps['value'];
  onChange: ChangeEventHandler<HTMLInputElement>;
}
