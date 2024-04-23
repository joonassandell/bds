import { Portal, Root } from '@radix-ui/react-tooltip';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { type TooltipProps } from './';
import { TooltipTrigger } from './TooltipTrigger';
import React, { type FC, useEffect, useState } from 'react';

export const Tooltip: FC<TooltipProps> = ({
  children,
  collisionPadding = 24,
  content,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  onOpenChange,
  open,
  sideOffset = 6,
  container,
  ...props
}) => {
  const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout>();
  const handleTouchStart = () => {
    if (onOpenChange) {
      const timer = setTimeout(() => {
        onOpenChange(true);
      }, 1000);
      setTouchTimer(timer);
    }
  };

  const handleTouchEnd = () => {
    clearTimeout(touchTimer);
    if (open) {
      onOpenChange && onOpenChange(false);
    }
  };

  useEffect(
    () => () => {
      clearTimeout(touchTimer);
    },
    [touchTimer],
  );

  return (
    <Root
      defaultOpen={defaultOpen}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      onOpenChange={onOpenChange}
      open={open}
    >
      <TooltipTrigger
        asChild
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        {children}
      </TooltipTrigger>
      <Portal container={container}>
        <div className="b-Tooltip">
          <TooltipContent
            collisionPadding={collisionPadding}
            sideOffset={sideOffset}
            {...props}
          >
            {content}
            <TooltipArrow />
          </TooltipContent>
        </div>
      </Portal>
    </Root>
  );
};
