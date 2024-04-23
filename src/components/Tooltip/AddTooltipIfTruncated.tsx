import { ConditionalWrapper } from '../ConditionalWrapper';
import { mergeRefs } from '../../lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { Tooltip } from './Tooltip';
import { useIsTruncated } from '../../lib/hooks/useIsTruncated';
import React, {
  type FC,
  forwardRef,
  type PropsWithChildren,
  type ReactNode,
  useRef,
} from 'react';

interface AddTooltipIfTruncatedOptions {
  asChild?: boolean;
  delayDuration?: number;
  tooltipContent?: ReactNode;
  truncate?: 'clamp' | 'default';
}

/**
 * If the text inside an element is truncated, use this to add tooltips
 * for the full text.
 *
 * @param WrappedComponent React component that has forwarded ref
 * @returns Wrapped component
 */
export const addTooltipIfTruncated = <T,>(
  WrappedComponent: React.ComponentType<T>,
  {
    delayDuration,
    truncate = 'default',
    tooltipContent = null,
  }: AddTooltipIfTruncatedOptions = {},
) => {
  // Try to create a nice displayName for React Dev Tools
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Creating the inner component. The calculated Props type here is the
  // where the magic happens.
  const ComponentWithTruncateCheck = forwardRef<
    HTMLElement,
    PropsWithChildren<T>
  >((props, forwardedRef) => {
    const ref = useRef<HTMLElement>(null);
    const { isTruncated } = useIsTruncated(ref, truncate === 'clamp');

    return (
      <ConditionalWrapper
        condition={isTruncated}
        wrapper={children => (
          <Tooltip
            content={tooltipContent ?? props.children}
            delayDuration={delayDuration}
          >
            {children}
          </Tooltip>
        )}
      >
        <WrappedComponent
          ref={mergeRefs(forwardedRef, ref)}
          {...(props as T)}
        />
      </ConditionalWrapper>
    );
  });

  ComponentWithTruncateCheck.displayName = `withTruncateCheck(${displayName})`;

  return ComponentWithTruncateCheck;
};

export const TooltipIfTruncated: FC<
  PropsWithChildren<AddTooltipIfTruncatedOptions>
> = ({
  asChild = true,
  children,
  delayDuration,
  tooltipContent,
  truncate = 'default',
}) => {
  const ref = useRef<HTMLElement>(null);
  const { isTruncated } = useIsTruncated(ref, truncate === 'clamp');
  const Tag = asChild ? Slot : 'span';

  return (
    <ConditionalWrapper
      condition={isTruncated}
      wrapper={childs => (
        <Tooltip
          content={tooltipContent ?? children}
          delayDuration={delayDuration}
        >
          {childs}
        </Tooltip>
      )}
    >
      <Tag ref={ref}>{children}</Tag>
    </ConditionalWrapper>
  );
};
