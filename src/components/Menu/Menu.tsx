import { AnimatePresence } from 'framer-motion';
import { MenuContent, type MenuProps, MenuTrigger } from './';
import { mergeRefs } from '../../lib/utils';
import { Portal, Root } from '@radix-ui/react-dropdown-menu';
import React, {
  Children,
  cloneElement,
  type FC,
  isValidElement,
  type ReactNode,
  useMemo,
  useRef,
} from 'react';

/**
 * 1. Viewport jumping bug: https://github.com/radix-ui/primitives/issues/1522
 *    This is the latest fix found from the issue.
 */
export const Menu: FC<MenuProps> = ({
  children,
  container = document.body,
  onOpenChange,
  open,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const _children = useMemo(() => {
    const childrenObj: {
      content: ReactNode[];
      trigger: ReactNode[];
    } = {
      content: [],
      trigger: [],
    };
    Children.forEach(children, (child, index) => {
      if (isValidElement(child)) {
        const { type } = child;
        if (type == MenuTrigger) {
          return childrenObj.trigger.push(child);
        }
        if (type == MenuContent) {
          return childrenObj.content.push(
            cloneElement(child, {
              ...child.props,
              key: index, // Usually menu content would be static, so setting they key by index shouldn't cause any issue
              ref: mergeRefs(child.props.ref, contentRef),
            }),
          );
        }
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
          // [1.]
          if (isOpen) {
            const contentEl = contentRef.current;
            if (!contentEl) return;
            const firstItem = contentEl.querySelector('[role="menuitem"]') as
              | HTMLDivElement
              | undefined;

            firstItem?.focus();
          }
        }, 0);
      }}
      open={open}
    >
      {_children.trigger}
      <AnimatePresence>
        {open && (
          <Portal container={container} forceMount>
            {_children.content[0]}
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
};
