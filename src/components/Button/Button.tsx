import { AnimatePresence, m } from 'framer-motion';
import { type ButtonProps } from './';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { getCssSpaceHelpers, isBoolean, isSvg } from '../../lib/utils';
import {
  HELPER_MARGIN,
  TRANS_DEFAULT_EASE,
  TRANS_DEFAULT_M,
} from '../../lib/config';
import { Icon, type IconProps } from '../Icon';
import { Spinner, type SpinnerProps } from '../Spinner';
import { Tooltip } from '../Tooltip';
import { useIsTruncated } from '../../lib/hooks';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { type FC, forwardRef, useRef } from 'react';

export const Button = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      active,
      children,
      className,
      color,
      disabled,
      flexShrink,
      href,
      icon,
      iconActive,
      iconLeft,
      iconSize,
      image,
      justify,
      loading,
      loadingText = 'Loading…',
      maxWidth,
      minWidth,
      onClick,
      size = 'small',
      target,
      textStyle,
      truncate = true,
      type = 'button',
      variant = 'default',
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Button', {
      '-justify:block': justify === 'block',
      '-justify:stretch': justify === 'stretch' || justify === 'stretchBetween',
      '-justify:stretch:between': justify === 'stretchBetween',
      '-size:s': size === 'small',
      '-size:xs': size === 'xSmall',
      '-text:subtitle': textStyle === 'subtitle',
      'b-Button--default':
        !variant || variant === 'default' || variant === 'plain',
      'b-Button--default--plain': variant === 'plain',
      'b-Button--error': variant === 'error',
      'b-Button--primary': variant === 'primary',
      'b-Button--secondary': variant === 'secondary',
      'b-Button--success': variant === 'success',
      'b-Button--warning': variant === 'warning',
      'is-active': active,
      'is-disabled': disabled,
      'is-loading': loading,
      ...getCssSpaceHelpers(props),
    });
    const restProps = omit(HELPER_MARGIN, props);

    if (href) {
      return (
        <a
          className={classes}
          href={href}
          onClick={onClick}
          ref={forwardedRef}
          style={{
            flexShrink,
            maxWidth,
            minWidth,
          }}
          target={target}
          {...(target === '_blank' && { rel: 'noreferrer' })}
        >
          <Item
            icon={icon}
            iconLeft={iconLeft}
            iconSize={iconSize}
            image={image}
            justify={justify}
            size={size}
            truncate={truncate}
          >
            {children}
          </Item>
        </a>
      );
    }

    return (
      <button
        className={classes}
        disabled={disabled ?? loading}
        onClick={onClick}
        ref={forwardedRef}
        style={{
          flexShrink,
          maxWidth,
          minWidth,
          ['--b-Button-color' as string]: color,
        }}
        type={type}
        {...restProps}
      >
        <Item
          active={active}
          icon={icon}
          iconActive={iconActive}
          iconLeft={iconLeft}
          iconSize={iconSize}
          image={image}
          justify={justify}
          key="b-Button-item"
          loading={loading}
          size={size}
          truncate={truncate}
        >
          {children}
        </Item>
        <AnimatePresence>
          {loading && (
            <m.span
              animate={{ opacity: 1 }}
              className="b-Button-loader"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={TRANS_DEFAULT_EASE}
            >
              <Spinner
                size={spinnerSize(size)}
                variant={spinnerVariant(variant)}
              />
              <span className="b-Button-loader-text b-hideVisually">
                {loadingText}
              </span>
            </m.span>
          )}
        </AnimatePresence>
      </button>
    );
  },
);

export const Item: FC<ButtonProps> = ({
  children,
  icon,
  iconActive,
  iconLeft,
  iconSize,
  image,
  justify,
  loading,
  size,
  truncate,
}) => {
  const svg = isSvg(image);
  const ref = useRef<HTMLSpanElement>(null);
  const { isTruncated } = useIsTruncated(ref, false);
  const truncated = !!truncate && isTruncated && justify != 'block';
  const animatableIcon =
    icon &&
    ['arrowUp', 'arrowDown', 'arrowLeft', 'arrowRight'].includes(icon) &&
    isBoolean(iconActive);

  const animatedIcon = () => {
    let iconAnimProps = {};
    if (iconActive) {
      iconAnimProps = {
        animate: { rotate: [0, 180] },
        initial: false,
        transition: TRANS_DEFAULT_M,
      };
    } else {
      iconAnimProps = {
        animate: { rotate: [-180, 0] },
        initial: false,
        transition: TRANS_DEFAULT_M,
      };
    }

    return (
      <m.span className="b-Button-icon" {...iconAnimProps}>
        <Icon name={icon} size={iconSize ?? defaultIconSize(size, justify)} />
      </m.span>
    );
  };

  const defaultIcon = () => (
    <span className="b-Button-icon">
      <Icon name={icon} size={iconSize ?? defaultIconSize(size, justify)} />
    </span>
  );

  return (
    <ConditionalWrapper
      condition={truncated}
      wrapper={childs => <Tooltip content={children}>{childs}</Tooltip>}
    >
      <div className="b-Button-item" {...(loading && { 'aria-hidden': true })}>
        {image && (
          <figure aria-hidden className="b-Button-figure">
            {!svg && (
              <img className="b-Button-figure-image" src={image as string} />
            )}
            {svg && image}
          </figure>
        )}
        {iconLeft && (
          <span className="b-Button-icon">
            <Icon
              name={iconLeft}
              size={iconSize ?? defaultIconSize(size, justify)}
            />
          </span>
        )}
        <span
          className={c('b-Button-text', {
            'b-hideVisually': justify === 'block',
            'b-textTruncate': truncate,
          })}
          ref={ref}
        >
          {children}
        </span>
        {icon && (animatableIcon ? animatedIcon() : defaultIcon())}
      </div>
    </ConditionalWrapper>
  );
};

const spinnerVariant = (
  variant: ButtonProps['variant'],
): SpinnerProps['variant'] =>
  variant === 'primary'
    ? 'primaryForeground'
    : variant === 'success'
      ? 'success'
      : variant === 'warning'
        ? 'warning'
        : variant === 'error'
          ? 'error'
          : 'primary';

const spinnerSize = (size: ButtonProps['size']): SpinnerProps['size'] => {
  if (size === 'small') return 'small';
  if (size === 'xSmall') return 'xSmall';
};

const defaultIconSize = (
  size: ButtonProps['size'],
  justify: ButtonProps['justify'],
): IconProps['size'] => {
  if (size === 'xSmall' && justify === 'block') {
    return 'xSmall';
  }

  // This is here as a reminder, since this could be useful but not sure yet
  // if (size === 'small' && justify === 'block') {
  //   return 'small';
  // }

  if (size === 'small') return 'xSmall';
  if (size === 'xSmall') return 'xxSmall';
};
