import { AnimatePresence, m } from 'framer-motion';
import { AsideClose } from './AsideClose';
import { AsideMain } from './AsideMain';
import { type AsideProps } from './';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import {
  Content,
  Portal,
  Overlay as RadixOverlay,
  Root,
  Title,
} from '@radix-ui/react-dialog';
import { Heading } from '../Heading';
import { Overlay } from '../Overlay';
import { ScrollArea } from '../ScrollArea';
import { TRANS_DEFAULT_M } from '../../lib/config';
import { useMediaQueries } from '../Media';
import c from 'clsx';
import React, {
  Children,
  forwardRef,
  isValidElement,
  type ReactNode,
  useMemo,
} from 'react';

export const Aside = forwardRef<HTMLDivElement, AsideProps>(
  (
    {
      align = 'left',
      avatar,
      children,
      className,
      close,
      closeAlign = 'edge',
      closeAriaLabel = 'Close',
      id,
      layoutBreakpoint = 'l',
      layoutHeight = '100vh',
      layoutPosition,
      layoutTop,
      layoutWidth,
      modal = true,
      mode = 'drawer',
      onCloseAutoFocus,
      onEscapeKeyDown,
      onInteractOutside,
      onOpenAutoFocus,
      onOpenChange,
      open,
      overlay = true,
      titleAriaLabel,
      triggerRef,
      ...props
    },
    forwardedRef,
  ) => {
    const layoutMode = mode === 'layout';
    const alignRight = align === 'right';
    const { mq } = useMediaQueries();
    const classesClose = c('b-Aside-close', {
      '-align:inside': closeAlign === 'inside',
      'b-showInFocusVisibleWithin': close === undefined,
    });
    const classesLayout = c(className, 'b-Aside b-Aside--layout', {
      '-align:right': alignRight,
    });
    const classesDrawer = c(className, 'b-Aside b-Aside--drawer', {
      '-align:right': alignRight,
    });
    const animations = alignRight ? fromRight : fromLeft;
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
          if (child.type != AsideMain) return childrenObj.trigger.push(child);
          return childrenObj.content.push(child);
        }
      });
      return childrenObj;
    }, [children]);

    if (mq('greaterOrEqual', layoutBreakpoint) && layoutMode) {
      return (
        <div
          className={classesLayout}
          ref={forwardedRef}
          style={{
            height: layoutHeight,
            position: layoutPosition,
            top: layoutTop,
            width: layoutWidth,
          }}
        >
          <div className="b-Aside-inner">
            <ScrollArea>{_children.content}</ScrollArea>
            {avatar && (
              <div aria-hidden className="b-Aside-avatar">
                <Avatar {...avatar} size="xLarge" />
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <Root modal={modal} onOpenChange={onOpenChange} open={open} {...props}>
        {_children.trigger}
        <AnimatePresence>
          {open && (
            <Portal forceMount>
              {overlay && (
                <RadixOverlay asChild forceMount>
                  <Overlay className="b-Aside-overlay" transition="medium" />
                </RadixOverlay>
              )}
              <Content
                aria-describedby={undefined}
                asChild
                className={classesDrawer}
                forceMount
                onCloseAutoFocus={e => {
                  onCloseAutoFocus && onCloseAutoFocus(e);
                  triggerRef?.current?.focus();
                }}
                onEscapeKeyDown={e => {
                  onEscapeKeyDown && onEscapeKeyDown(e);
                  !modal && e.preventDefault();
                }}
                onInteractOutside={e => {
                  onInteractOutside && onInteractOutside(e);
                  !modal && e.preventDefault();
                }}
                onOpenAutoFocus={onOpenAutoFocus}
                ref={forwardedRef}
                {...(id && { id })}
              >
                <m.div {...animations}>
                  <div className="b-Aside-inner">
                    {titleAriaLabel && (
                      <Title asChild>
                        <Heading
                          className="b-Aside-heading b-hideVisually"
                          tag="h2"
                        >
                          {titleAriaLabel}
                        </Heading>
                      </Title>
                    )}
                    <ScrollArea>{_children.content}</ScrollArea>
                  </div>
                  {close != false && (
                    <div className={classesClose}>
                      <AsideClose asChild>
                        <Button
                          icon="close"
                          iconSize="xxSmall"
                          justify="block"
                          size="xSmall"
                        >
                          {closeAriaLabel}
                        </Button>
                      </AsideClose>
                    </div>
                  )}
                </m.div>
              </Content>
            </Portal>
          )}
        </AnimatePresence>
      </Root>
    );
  },
);

export const fromLeft = {
  animate: { x: 0 },
  exit: { x: '-105%' },
  initial: { x: '-105%' },
  transition: TRANS_DEFAULT_M,
};

export const fromRight = {
  animate: { x: 0 },
  exit: { x: '105%' },
  initial: { x: '105%' },
  transition: TRANS_DEFAULT_M,
};
