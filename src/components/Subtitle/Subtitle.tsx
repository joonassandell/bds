import { getCssSpaceHelpers, isBoolean, isNumber } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { omit } from 'ramda';
import { type SubtitleProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

const Subtitle = forwardRef<HTMLHeadingElement, SubtitleProps>(
  (
    {
      color,
      className,
      children,
      subtitle,
      subtitleCase = true,
      subtitleSuffix,
      subtitleSuffixCase = true,
      tag,
      title,
      truncate,
      size = 'medium',
      ...props
    },
    ref,
  ) => {
    const isTextTruncateClamp = isNumber(truncate) && truncate >= 2;
    const subtitleClasses = c(className, 'b-Subtitle', {
      '-color:strong': color === 'strong',
      '-size:l': size === 'large',
      '-size:s': size === 'small',
      '-size:xs': size === 'xSmall',
      '-suffix:text:transform:none': !subtitleSuffixCase,
      '-text:transform:none': !subtitleCase,
      'b-textTruncate': (isBoolean(truncate) && truncate) || truncate === 1,
      'b-textTruncateClamp': isNumber(truncate) && truncate >= 2,
      ...getCssSpaceHelpers(props),
    });

    const Component = tag ? tag : 'div';

    const restProps = omit(HELPER, props);

    return (
      <Component
        className={subtitleClasses}
        ref={ref}
        style={{
          ['--b-textTruncateClamp' as string]: isTextTruncateClamp
            ? truncate
            : null,
        }}
        title={title}
        {...restProps}
      >
        {subtitle || children}
        {subtitleSuffix && (
          <span className="b-Subtitle-suffix"> {subtitleSuffix}</span>
        )}
      </Component>
    );
  },
);

export { Subtitle };
