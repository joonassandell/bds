import { Content } from '@radix-ui/react-tabs';
import { type TabContentProps } from './';
import React, { type FC } from 'react';

export const TabContent: FC<TabContentProps> = ({ children, ...props }) => (
  <Content className="b-TabContent" {...props}>
    {children}
  </Content>
);
