import { Button } from '../Button';
import { Close, Description } from '@radix-ui/react-toast';
import { Icon } from '../Icon';
import { Subtitle } from '../Subtitle';
import { type ToastContentProps } from './';
import { ToastTitle } from './ToastTitle';
import { useToastMain } from './Toast.context';
import c from 'clsx';
import React, {
  Children,
  type FC,
  isValidElement,
  type ReactNode,
  useMemo,
} from 'react';

export const ToastContent: FC<ToastContentProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = c('b-Toast-content', className);
  const _children = useMemo(() => {
    const childrenObj: {
      description: ReactNode[];
      title: ReactNode[];
    } = {
      description: [],
      title: [],
    };
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (child.type == ToastTitle) return childrenObj.title.push(child);
      }
      return childrenObj.description.push(child);
    });
    return childrenObj;
  }, [children]);

  const { variant } = useToastMain();
  const def = variant === 'default';
  const info = variant === 'info';
  const error = variant === 'error';
  const success = variant === 'success';
  const warning = variant === 'warning';

  return (
    <div className={classes}>
      <div className="b-Toast-content-main">
        <span className="b-Toast-icon">
          {(def || !variant) && <Icon name="info" size="xSmall" />}
          {info && <Icon name="info" size="xSmall" />}
          {error && <Icon name="exclamation" size="xSmall" />}
          {warning && <Icon name="exclamation" size="xSmall" />}
          {success && <Icon name="checkCircle" size="xSmall" />}
        </span>
        <div className="b-Toast-text">
          {_children.title.length ? (
            <Subtitle className="b-Toast-subtitle" color="strong">
              {_children.title}
            </Subtitle>
          ) : (
            ''
          )}
          <Description className="b-Toast-description" {...props}>
            {_children.description}
          </Description>
        </div>
      </div>
      <Close asChild>
        <Button
          icon="close"
          iconSize="xxSmall"
          justify="block"
          size="xSmall"
          variant="plain"
        />
      </Close>
    </div>
  );
};
