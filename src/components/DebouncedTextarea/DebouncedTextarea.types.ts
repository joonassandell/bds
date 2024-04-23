import { type ChangeEventHandler } from 'react';
import { type TextareaProps } from '../Textarea';

export interface DebouncedTextareaProps
  extends Omit<TextareaProps, 'onChange' | 'value'> {
  debounceTime?: number;

  /**
   * How to handle syncing of the initialValue
   *
   * @defaultValue true
   * @param true Sync initialValue and its inner state value on initial
   * mount, and when _initialValue and value_ don't match on rerender. Latter is
   * to prevent the latest change from the user to be overridden by the new
   * initialValue that may happen in some cases.
   * @param false DebouncedInput will sync initialValue and its inner state value
   * on initial mount only.
   *
   * @note The behaviour is similar to DebouncedInput, see example from
   * DebouncedInput.types.ts
   */
  enableInitialStateSync?: boolean;

  initialValue: TextareaProps['value'];
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}
