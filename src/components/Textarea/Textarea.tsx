import { Alert, AlertContent, AlertText } from '../Alert';
import { AnimatePresence, m } from 'framer-motion';
import { Beacon } from '../Beacon';
import { DURATION_2XL, TRANS_DEFAULT_EASE_L } from '../../lib/config';
import { getCssSpaceHelper, getMilliSeconds } from '../../lib/utils';
import { Icon } from '../Icon';
import { type TextareaProps } from './';
import c from 'clsx';
import React, {
  createRef,
  forwardRef,
  type KeyboardEvent,
  useEffect,
  useState,
} from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autoComplete = 'off',
      beacon,
      beaconProps,
      className,
      color,
      disabled,
      error,
      helpOnClick,
      hint,
      id,
      label,
      labelSuffix,
      loading,
      marginBottom,
      marginTop,
      minHeight,
      name,
      onKeyDown,
      onWheel,
      readOnly,
      resize,
      value,
      variant,
      warning,
      ...props
    },
    forwardedRef,
  ) => {
    const isWarning = !error && warning;
    const [isLoading, setIsLoading] = useState(false);
    const loadingExitDelay = getMilliSeconds(TRANS_DEFAULT_EASE_L.duration);
    const hasLabel = label || helpOnClick;
    const textareaRef = createRef<HTMLTextAreaElement>();

    const classes = c(className, 'b-Textarea', {
      '-color:surface:3': color === 'surface:3',
      'b-Textarea--plain': variant === 'plain',
      'is-disabled': disabled,
      'is-error': error,
      'is-readOnly': readOnly,
      'is-warning': isWarning,
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    });

    const defaultOnWheel = () => textareaRef?.current?.blur();
    const defaultKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        textareaRef?.current?.blur();
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, isLoading]);

    return (
      <div className={classes}>
        {hasLabel && (
          <div className="b-Textarea-heading">
            {label && (
              <div className="b-Input-label">
                <label className="b-Textarea-label-label" htmlFor={id}>
                  {label}
                </label>
                {labelSuffix && (
                  <span className="b-Textarea-label-suffix">
                    {' '}
                    {labelSuffix}
                  </span>
                )}
                {beacon && (
                  <span className="b-Textarea-label-beacon">
                    <Beacon variant={beacon} {...beaconProps} />
                  </span>
                )}
              </div>
            )}
            {helpOnClick && (
              <button
                className="b-Textarea-help"
                onClick={helpOnClick}
                type="button"
              >
                <Icon name="help" size="xSmall" />
              </button>
            )}
          </div>
        )}
        <div className="b-Textarea-item">
          <textarea
            autoComplete={autoComplete}
            className="b-Textarea-textarea b-scrollbar"
            disabled={disabled}
            id={id}
            name={name ?? id}
            onKeyDown={e => {
              defaultKeys(e);
              onKeyDown && onKeyDown(e);
            }}
            onWheel={e => {
              defaultOnWheel();
              onWheel && onWheel(e);
            }}
            readOnly={readOnly}
            ref={forwardedRef}
            style={{
              minHeight,
              resize,
              ...props.style,
            }}
            value={value}
            {...props}
          />
          <span className="b-Textarea-border" />
          <AnimatePresence>
            {isLoading && (
              <m.span
                animate={{ opacity: 1 }}
                className="b-Textarea-loader"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key="b-Textarea-loader"
                transition={TRANS_DEFAULT_EASE_L}
              >
                <m.span
                  animate={{ backgroundPosition: ['0% 50%', '300% 50%'] }}
                  className="b-Textarea-loader-inner"
                  key="b-Textarea-loader-inner"
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
          <Alert className="b-Textarea-error" size="small" variant="error">
            <AlertContent>
              <AlertText>{error}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {isWarning && (
          <Alert className="b-Textarea-warning" size="small" variant="warning">
            <AlertContent>
              <AlertText>{warning}</AlertText>
            </AlertContent>
          </Alert>
        )}
        {hint && <div className="b-Textarea-hint">{hint}</div>}
      </div>
    );
  },
);
