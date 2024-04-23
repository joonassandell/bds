import { Badge } from '../Badge';
import { Buttons } from '../Button';
import { type CardPrimaryProps } from './';
import { Digit } from '../Digit';
import { Heading } from '../Heading';
import { isBoolean } from '../../lib/utils';
import { Subtitle } from '../Subtitle';
import c from 'clsx';
import isEmpty from 'ramda/es/isEmpty';
import React, { type ElementType, forwardRef, type RefObject } from 'react';

// Deprecated
export const CardPrimary = forwardRef<HTMLDivElement, CardPrimaryProps>(
  (
    {
      active,
      backgroundColor,
      badge,
      border,
      children,
      className,
      disabled,
      heading,
      headingCapitalize,
      headingResult = false,
      headingResultAnimation = true,
      headingResultUnit,
      headingSize,
      href,
      onClick,
      size,
      style,
      subtitles,
      toolbarButtons,
      ...props
    },
    forwardedRef,
  ) => {
    const hasToolbarButtons = toolbarButtons && !disabled;
    const classes = c('b-Card b-Card--primary', className, {
      '-heading:capitalize': headingCapitalize,
      '-size:s': size === 'small',
      'has-toolbarButtons': hasToolbarButtons,
      'is-active': active,
      'is-disabled': disabled,
    });
    const hasResult = !isEmpty(headingResult) && !isBoolean(headingResult);
    const Link = 'a' as ElementType;

    return (
      <div
        className={classes}
        ref={!href ? (forwardedRef as RefObject<HTMLDivElement>) : null}
        style={{
          ['--b-Card-background-color' as string]: backgroundColor,
          ['--b-Card-border-color' as string]: border?.color,
          ['--b-Card-border-style' as string]: border?.style,
          ...style,
        }}
        {...props}
      >
        {href && (
          <Link
            aria-label={props['aria-label'] ?? heading}
            className="b-Card-link"
            href={href}
            onClick={onClick}
            ref={forwardedRef}
          />
        )}
        <header className="b-Card-header">
          {hasResult && (
            <div className="b-Card-header-result">
              <Digit
                animation={headingResultAnimation}
                number={!isBoolean(headingResult) ? headingResult : null}
                size={size === 'small' ? 'small' : 'medium'}
                unit={headingResultUnit}
              />
            </div>
          )}
          {badge && !hasResult && (
            <div className="b-Card-header-badge">
              <Badge variant="info" {...badge} className="b-Card-badge" />
            </div>
          )}
          <div className="b-Card-heading">
            <Heading marginBottom={false} size={headingSize ?? 'h2'} tag="h2">
              {heading}
            </Heading>
            {subtitles && (
              <div className="b-Card-subtitles">
                {subtitles.map((subtitle, i: number) => (
                  <Subtitle
                    {...subtitle}
                    className="b-Card-subtitle"
                    key={i}
                    marginBottom={0}
                    tag="span"
                  />
                ))}
              </div>
            )}
          </div>
          {hasToolbarButtons && (
            <div className="b-Card-toolbar">
              <Buttons>{toolbarButtons}</Buttons>
            </div>
          )}
        </header>
        {children && <div className="b-Card-content">{children}</div>}
      </div>
    );
  },
);
