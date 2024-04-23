import { Flex } from '../Flex';
import { type SkeletonProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Skeleton: FC<SkeletonProps> = ({
  className,
  children,
  height,
  lines,
  linesDirection = 'vertical',
  linesGap,
  linesProps,
  variant = 'text',
  width,
}) => {
  const horizontal = linesDirection === 'horizontal';
  const classes = c(className, 'b-Skeleton', {
    'b-Skeleton--circle': variant === 'circle',
    'b-Skeleton--rectangle': variant === 'rectangle',
    'b-Skeleton--round': variant === 'round',
    'b-Skeleton--text': variant === 'text',
  });
  const groupClasses = c(className, 'b-Skeletons', {
    'is-horizontal': horizontal,
  });
  linesGap = horizontal && linesGap === undefined ? 'small' : linesGap ?? 0;

  const SkeletonComponent = ({
    disableWidth,
    ...props
  }: {
    disableWidth?: boolean;
  }) => (
    <span
      className={classes}
      style={{
        height,
        width: disableWidth ? undefined : width,
      }}
      {...props}
    >
      {children}
    </span>
  );

  if (lines && variant === 'text') {
    return (
      <Flex
        aria-busy
        asChild
        className={groupClasses}
        flexDirection={linesDirection === 'vertical' ? 'column' : 'row'}
        gap={linesGap}
        style={{
          ['--b-Skeleton-width' as string]: width,
        }}
        {...(horizontal && { flexWrap: 'wrap' })}
        {...linesProps}
      >
        <span>
          {Array(lines)
            .fill('')
            .map((_, i, row) => (
              <SkeletonComponent disableWidth={i + 1 === row.length} key={i} />
            ))}
        </span>
      </Flex>
    );
  }

  return <SkeletonComponent aria-busy />;
};
