import { Root } from '@radix-ui/react-tabs';
import { TabsList, type TabsProps } from './';
import c from 'clsx';
import React, { Children, cloneElement, type FC, isValidElement } from 'react';

export const Tabs: FC<TabsProps> = ({
  children,
  className,
  mode = 'default',
  ...props
}) => {
  const classes = c(className, 'b-Tabs');

  if (mode === 'navigation') {
    return (
      <div className={classes}>
        <div className="b-Tabs-inner">
          {Children.map(children, child => {
            if (isValidElement(child)) {
              return (
                child.type === TabsList &&
                cloneElement(child, { mode } as TabsProps)
              );
            }
          })}
        </div>
      </div>
    );
  }

  return (
    <Root className={classes} {...props} orientation="horizontal">
      <div className="b-Tabs-inner">{children}</div>
    </Root>
  );
};
