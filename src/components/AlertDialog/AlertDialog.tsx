import { AlertDialogCancel, AlertDialogMain, type AlertDialogProps } from './';
import { AnimatePresence, m } from 'framer-motion';
import { animation } from '../Dialog/Dialog.animations';
import { Button } from '../Button';
import {
  Content,
  Portal,
  Overlay as RadixOverlay,
  Root,
} from '@radix-ui/react-alert-dialog';
import { Overlay } from '../Overlay';
import c from 'clsx';
import React, {
  Children,
  type FC,
  isValidElement,
  type ReactNode,
  useMemo,
} from 'react';

export const AlertDialog: FC<AlertDialogProps> = ({
  children,
  className,
  id,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onOpenAutoFocus,
  onOpenChange,
  open,
  triggerRef,
  ...props
}) => {
  const classes = c(className, 'b-Dialog b-AlertDialog');
  const _children = useMemo(() => {
    const childrenObj: {
      content: ReactNode[];
      trigger: ReactNode[];
    } = {
      content: [],
      trigger: [],
    };
    Children.forEach(children, child => {
      if (isValidElement(child)) {
        if (child.type != AlertDialogMain)
          return childrenObj.trigger.push(child);
        return childrenObj.content.push(child);
      }
    });
    return childrenObj;
  }, [children]);

  return (
    <Root onOpenChange={onOpenChange} open={open} {...props}>
      {_children.trigger}
      <AnimatePresence>
        {open && (
          <Portal forceMount>
            <RadixOverlay
              asChild
              className={classes}
              forceMount
              // Not really sure accessibility wise if this should be done
              onClick={e => {
                const target = e.target as Element;
                if (target.classList.contains('b-Overlay')) {
                  onOpenChange && open && onOpenChange(false);
                }
              }}
            >
              <Overlay>
                <Content
                  asChild
                  className="b-Dialog-inner b-AlertDialog-inner"
                  forceMount
                  onCloseAutoFocus={e => {
                    onCloseAutoFocus && onCloseAutoFocus(e);
                    triggerRef?.current?.focus();
                  }}
                  onEscapeKeyDown={onEscapeKeyDown}
                  onOpenAutoFocus={onOpenAutoFocus}
                  {...(id && { id })}
                >
                  <m.div {...animation}>
                    <div className="b-Dialog-close b-AlertDialog-close">
                      <AlertDialogCancel asChild>
                        <Button
                          aria-hidden
                          icon="close"
                          justify="block"
                          size="small"
                          tabIndex={-1}
                          variant="plain"
                        />
                      </AlertDialogCancel>
                    </div>
                    {_children.content}
                  </m.div>
                </Content>
              </Overlay>
            </RadixOverlay>
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
};
