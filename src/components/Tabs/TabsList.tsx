import { ConditionalWrapper } from '../ConditionalWrapper';
import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER, HELPER_PADDING } from '../../lib/config';
import { List } from '@radix-ui/react-tabs';
import { ScrollArea } from '../ScrollArea';
import { type TabsListProps, type TabsProps } from './';
import c from 'clsx';
import omit from 'ramda/es/omit';
import pick from 'ramda/es/pick';
import React, { Children, cloneElement, type FC } from 'react';

export const TabsList: FC<TabsListProps> = ({
  border = true,
  borderColor = 'default',
  children,
  scrollArea = true,
  variant = 'default',
  ...props
}) => {
  const classes = c('b-Tabs-list', {
    '-border:color:strong': borderColor === 'strong',
    '-border:none': !border,
    'b-Tabs-list--default': !variant || variant === 'default',
    'b-Tabs-list--primary': variant === 'primary',
    ...getCssSpaceHelpers(omit(HELPER_PADDING, props)),
  });
  const innerClasses = c('b-Tabs-list-inner', {
    ...getCssSpaceHelpers(pick(HELPER_PADDING as any, props)),
  });
  const { mode, ...rest } = props as TabsProps;
  const restProps = omit(HELPER, rest);

  const tabs = Children.map(children, (child: any) =>
    cloneElement(child, { variant }),
  );

  return (
    <div className={classes}>
      <ConditionalWrapper
        condition={scrollArea}
        wrapper={children => (
          <ScrollArea orientation="horizontal">{children}</ScrollArea>
        )}
      >
        {!mode && (
          <List className={innerClasses} {...restProps}>
            {tabs}
          </List>
        )}
        {mode === 'navigation' && (
          <nav className={innerClasses} {...restProps}>
            {tabs}
          </nav>
        )}
      </ConditionalWrapper>
    </div>
  );
};
