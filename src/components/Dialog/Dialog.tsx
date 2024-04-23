import { AnimatePresence, m } from 'framer-motion';
import { animation } from './Dialog.animations';
import { Button } from '../Button';
import {
  Content,
  Portal,
  Overlay as RadixOverlay,
  Root,
} from '@radix-ui/react-dialog';
import { DialogClose, DialogMain, type DialogProps } from './';
import { Overlay } from '../Overlay';
import c from 'clsx';
import React, {
  Children,
  type FC,
  isValidElement,
  type ReactNode,
  useMemo,
} from 'react';

export const Dialog: FC<DialogProps> = ({
  children,
  className,
  closeAriaLabel = 'Close',
  id,
  open,
  triggerRef,
  onCloseAutoFocus,
  onOpenAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onInteractOutside,
  ...props
}) => {
  const classes = c(className, 'b-Dialog');
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
        if (child.type != DialogMain) return childrenObj.trigger.push(child);
        return childrenObj.content.push(child);
      }
    });
    return childrenObj;
  }, [children]);

  return (
    <Root open={open} {...props}>
      {_children.trigger}
      <AnimatePresence>
        {open && (
          <Portal forceMount>
            <RadixOverlay asChild className={classes} forceMount>
              <Overlay>
                <Content
                  asChild
                  className="b-Dialog-inner"
                  forceMount
                  onCloseAutoFocus={e => {
                    onCloseAutoFocus && onCloseAutoFocus(e);
                    triggerRef?.current?.focus();
                  }}
                  onEscapeKeyDown={onEscapeKeyDown}
                  onInteractOutside={onInteractOutside}
                  onOpenAutoFocus={onOpenAutoFocus}
                  onPointerDownOutside={onPointerDownOutside}
                  {...(props['aria-describedby'] && {
                    'aria-describedby': props['aria-describedby'],
                  })}
                  {...(id && { id })}
                >
                  <m.div {...animation}>
                    {_children.content}
                    <div className="b-Dialog-close">
                      <DialogClose asChild>
                        <Button
                          icon="close"
                          justify="block"
                          size="small"
                          variant="plain"
                        >
                          {closeAriaLabel}
                        </Button>
                      </DialogClose>
                    </div>
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
