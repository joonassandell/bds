import { AnimatePresence, m } from 'framer-motion';
import { PopoverContent, type PopoverProps } from './';
import { PopoverTrigger } from './Trigger';
import { Portal, Root } from '@radix-ui/react-popover';
import { TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, {
  Children,
  cloneElement,
  type FC,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useMemo,
  useRef,
} from 'react';

// There is current bug/features that similar to Menu component: https://github.com/radix-ui/primitives/issues/1522.
// [1.] The hack/walk around for the issue above. Please don't enable autofocus for children of content. It will cause the issue again.

export const Popover: FC<PopoverProps> = ({
  className,
  children,
  open,
  onOpenChange,
  container = document.body,
  ...props
}) => {
  const classes = c(className, 'b-Popover');
  const firstContentChildRef = useRef<HTMLElement>(null);

  const _children = useMemo(() => {
    const childrenObj: {
      content: ReactNode[];
      others: ReactNode[];
      trigger: ReactNode[];
    } = {
      content: [],
      others: [],
      trigger: [],
    };
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (child.type == PopoverTrigger) {
          if (childrenObj.trigger.length > 0) {
            console.error('Popover should only have one trigger.');
            return;
          }
          return childrenObj.trigger.push(child);
        }
        if (child.type == PopoverContent) {
          if (childrenObj.content.length > 0) {
            console.error(
              'You should only use one PopoverContent inside the Popover',
            );
            return;
          }
          // [1.]
          const contentChildren = Children.toArray(child.props.children);
          if (contentChildren.length > 0) {
            const firstChild = contentChildren[0];
            // Clone the first child and attach the ref (expect the child to be able to receive ref)
            const firstChildWithRef = cloneElement(firstChild as ReactElement, {
              ref: firstContentChildRef,
            });
            const newPopoverContent = cloneElement(
              child,
              {},
              firstChildWithRef,
              ...contentChildren.slice(1),
            );

            return childrenObj.content.push(newPopoverContent);
          }
        }
        return childrenObj.others.push(child);
      }
    });
    return childrenObj;
  }, [children]);

  return (
    <Root
      {...props}
      onOpenChange={isOpen => {
        onOpenChange(isOpen);
        setTimeout(() => {
          if (isOpen && firstContentChildRef.current) {
            firstContentChildRef.current.focus();
          }
        }, 0);
      }}
      open={open}
    >
      {_children.trigger}
      <AnimatePresence>
        {open && (
          <Portal container={container} forceMount>
            <m.div
              animate={{
                opacity: 1,
                transition: TRANS_DEFAULT_M,
                y: 8,
              }}
              className={classes}
              exit={{
                opacity: 0,
                transition: TRANS_DEFAULT_M,
                y: 24,
              }}
              initial={{ opacity: 0, y: 24 }}
            >
              {_children.content}
              {_children.others}
            </m.div>
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
};
