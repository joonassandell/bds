import { Alert, AlertContent, AlertText } from '../Alert';
import { AnimatePresence, m } from 'framer-motion';
import { Beacon } from '../Beacon';
import { DURATION_2XL, TRANS_DEFAULT_EASE_L } from '../../lib/config';
import { getCssSpaceHelper, getMilliSeconds, mergeRefs } from '../../lib/utils';
import { Icon } from '../Icon';
import { type InputProps } from './';
import { Tooltip } from '../Tooltip';
import c from 'clsx';
import React, {
  type ClipboardEvent,
  createRef,
  forwardRef,
  Fragment,
  type KeyboardEvent,
  useEffect,
  useState,
} from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoComplete = 'off',
      beacon,
      beaconProps,
      className,
      color,
      disabled,
      enableNegativeValues,
      error,
      HelpButtonWrapper = Fragment,
      helpOnClick,
      helpText,
      hint,
      id,
      label,
      labelSuffix,
      loading,
      marginBottom,
      marginTop,
      name,
      onChange,
      onKeyDown,
      onPaste,
      onWheel,
      pattern,
      placeholder,
      readOnly,
      type = 'number',
      unit,
      value,
      warning,
      ...props
    },
    forwardedRef,
  ) => {
    const isWarning = !error && warning;
    const controlledInput = !!onChange;
    const controlledNumberInput = controlledInput && type === 'number';
    const [isLoading, setIsLoading] = useState(false);
    const loadingExitDelay = getMilliSeconds(TRANS_DEFAULT_EASE_L.duration);
    const hasLabel = label || helpOnClick;
    const inputRef = createRef<HTMLInputElement>();

    const classes = c(className, 'b-Input', {
      '-color:surface:3': color === 'surface:3',
      'is-disabled': disabled,
      'is-error': error,
      'is-readOnly': readOnly,
      'is-warning': isWarning,
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    });

    const positiveNumberValues = controlledNumberInput && !enableNegativeValues;
    const negativeNumberValues = controlledNumberInput && enableNegativeValues;

    const defaultOnWheel = () => inputRef?.current?.blur();
    const defaultKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        inputRef?.current?.blur();
      }

      if (positiveNumberValues) {
        if (e.key === '-') e.preventDefault();
      }
    };
    const defaultPaste = (e: ClipboardEvent) => {
      if (type === 'number') {
        const text = e.clipboardData.getData('Text');
        if (!text.match(/^[0-9]|\.+$/)) e.preventDefault();

        if (positiveNumberValues) {
          if (text.match(/-/)) e.preventDefault();
        }
      }
    };

    /**
     * Delay the loading exit delay.
     */
    useEffect(() => {
      loading && setIsLoading(true);
      let timer: number;
      if (!loading && isLoading) {
        timer = window.setTimeout(() => setIsLoading(false), loadingExitDelay);
      }
      return () => {
        timer && clearTimeout(timer);
      };
    }, [loading, isLoading, loadingExitDelay]);

    return (
      <div className={classes}>
        {hasLabel && (
          <div className="b-Input-heading">
            {label && (
              <div className="b-Input-label">
                <label className="b-Input-label-label" htmlFor={id}>
                  {label}
                </label>
                {labelSuffix && (
                  <span className="b-Input-label-suffix"> {labelSuffix}</span>
                )}
                {beacon && beacon !== 'none' && (
                  <span className="b-Input-label-beacon">
                    <Beacon variant={beacon} {...beaconProps} />
                  </span>
                )}
              </div>
            )}
            {helpOnClick ? (
              <HelpButtonWrapper>
                <button
                  className="b-Input-help"
                  onClick={helpOnClick}
                  type="button"
                >
                  <Icon name="help" size="xSmall" />
                </button>
              </HelpButtonWrapper>
            ) : helpText ? (
              <Tooltip content={helpText}>
                <button
                  className="b-Input-help"
                  onClick={helpOnClick}
                  type="button"
                >
                  <Icon name="help" size="xSmall" />
                </button>
              </Tooltip>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="b-Input-item">
          <input
            aria-placeholder={props['aria-placeholder'] ?? placeholder}
            autoComplete={autoComplete}
            className="b-Input-input"
            disabled={disabled}
            id={id}
            name={name ?? id}
            onChange={e => {
              /**
               * Browsers such as Firefox and Safari allow unwanted text in number
               * inputs, so lets fix that by doing some filters for e.target.value.
               */
              if (controlledNumberInput) {
                const minusRegex = negativeNumberValues
                  ? new RegExp('(?!^)-', 'g')
                  : '-';

                // We filter the value instead of not allowing the onChange event.
                e.target.value = e.target.value
                  .replace(/,/g, '.') // Change all commas to periods
                  .replace(/\.(?=.*\.)/g, '') // Remove all periods except the last one
                  .replace(/[^\d,.-]/g, '') // Remove all text like value
                  .replace(minusRegex, ''); // Remove all minus, if enable negative value, skip the starting one.

                onChange(e);
              } else {
                onChange && onChange(e);
              }
            }}
            onKeyDown={e => {
              defaultKeys(e);
              onKeyDown && onKeyDown(e);
            }}
            onPaste={e => {
              defaultPaste(e);
              onPaste && onPaste(e);
            }}
            onWheel={e => {
              defaultOnWheel();
              onWheel && onWheel(e);
            }}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={mergeRefs(inputRef, forwardedRef)}
            type={controlledNumberInput ? 'text' : type}
            value={controlledInput ? value ?? '' : undefined}
            {...(unit && { 'aria-describedby': `${id}-unit` })}
            {...props}
          />
          {unit && (
            <div className="b-Input-unit" id={`${id}-unit`}>
              {unit}
            </div>
          )}
          <span className="b-Input-border" />
          <AnimatePresence>
            {isLoading && (
              <m.span
                animate={{ opacity: 1 }}
                className="b-Input-loader"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="b-Input-loader"
                transition={TRANS_DEFAULT_EASE_L}
              >
                <m.span
                  animate={{ backgroundPosition: ['0% 50%', '300% 50%'] }}
                  className="b-Input-loader-inner"
                  key="b-Input-loader-inner"
                  transition={{
                    duration: DURATION_2XL,
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
              </m.span>
            )}
          </AnimatePresence>
        </div>
        {error && (
          <Alert className="b-Input-error" size="small" variant="error">
            <AlertContent>
              <AlertText>{error}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {isWarning && (
          <Alert className="b-Input-warning" size="small" variant="warning">
            <AlertContent>
              <AlertText>{warning}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {hint && <div className="b-Input-hint">{hint}</div>}
      </div>
    );
  },
);
