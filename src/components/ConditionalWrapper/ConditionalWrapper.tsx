import { type ConditionalWrapperProps } from './';
import { type FC } from 'react';

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);
