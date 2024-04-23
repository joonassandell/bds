import { Button } from '../Button';
import { Link } from '../Link';
import { type Meta, type StoryObj } from '@storybook/react';
import {
  Toast,
  ToastAction,
  ToastContent,
  ToastMain,
  type ToastProps,
  ToastTitle,
} from './';
import omit from 'ramda/es/omit';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Toast> = {
  component: Toast,
  parameters: {
    componentSubtitle:
      'The toast component is used to give feedback temporarily to users after an action has taken place.',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-toast` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/toast" target="_blank">@radix-ui/react-toast</a> for additional properties and information. **Toast needs to be refactored especially for accessibility/complexity reasons**',
      },
    },
  },
  subcomponents: {
    ToastAction,
    ToastContent,
    ToastMain,
    ToastTitle,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Feedback/Toast',
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const ToastComponent: Story = {
  args: {
    children: (
      <ToastContent>
        <ToastTitle>LCA update</ToastTitle>
        Calculation finished. Click here to see result.{' '}
        <Link asChild color="inherit" underline>
          <ToastAction altText="undo">Undo</ToastAction>
        </Link>
      </ToastContent>
    ),
  },
  name: 'Toast',
  render: function Component({ children, ...props }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button icon="sync" onClick={() => setOpen(true)}>
          Refresh result
        </Button>
        <Toast {...props}>
          {open && (
            <ToastMain label="Notification" onOpenChange={setOpen}>
              {children}
            </ToastMain>
          )}
        </Toast>
      </>
    );
  },
};

/* =======================================
 * Multiple
 * ======================================= */

export const MultipleToasts: Story = {
  render: function Component({ children, ...props }) {
    const [notifications, setNotifications] = useState<{
      [uniqueId: string]: (typeof notiLists)[0];
    }>({});

    const [count, setCount] = useState(0);

    const notiLists = [
      {
        message: 'Calculation finished. Click here to see the result',
        status: 'success',
        statusCode: 200,
        uniqueId: 'UniqueIdA',
      },
      {
        message: "I'm a teapot 🫖",
        status: 'error',
        statusCode: 418,
        uniqueId: 'UniqueIdB',
      },
      {
        message:
          'You are not authorized to access this content. Click here for more detail.',
        status: 'warning',
        statusCode: 403,
        uniqueId: 'UniqueIdC',
      },
      {
        message: 'Something went wrong :(',
        status: 'error',
        statusCode: 500,
        uniqueId: 'UniqueIdD',
      },
      {
        message: 'Lca not found.',
        status: 'error',
        statusCode: 404,
        uniqueId: 'UniqueIdE',
      },
      {
        message: 'Invalid Input.',
        status: 'default',
        statusCode: 400,
        uniqueId: 'UniqueIdF',
      },
      {
        message: "Can't create Lca.",
        status: 'error',
        statusCode: 500,
        uniqueId: 'UniqueIdG',
      },
      {
        message: 'You are unauthorized for this action',
        status: 'error',
        statusCode: 401,
        uniqueId: 'UniqueIdH',
      },
    ];

    const actionSync = (notification: (typeof notiLists)[0]) =>
      new Promise<(typeof notiLists)[0]>((resolve, reject) => {
        if (notification.status != 'error') {
          resolve(notification);
        }
        notification.status === 'error' && reject(notification);
      });

    const handleActionSync = async () => {
      try {
        const noti = await actionSync(notiLists[count]);
        setNotifications(prev => ({
          ...prev,
          [noti.uniqueId]: noti,
        }));
      } catch (error) {
        setNotifications(prev => ({
          ...prev,
          [error.uniqueId]: error,
        }));
      } finally {
        setCount(prev => (prev === notiLists.length - 1 ? 0 : prev + 1));
      }
    };

    return (
      <>
        <Button icon="sync" onClick={handleActionSync}>
          Do something
        </Button>
        <Toast {...props}>
          {Object.entries(notifications).map(
            ([key, { message, status, ...rest }]) => (
              <ToastMain
                key={key}
                label={props.label}
                onOpenChange={isOpen => {
                  !isOpen && setNotifications(prev => omit([key], prev));
                }}
                variant={status as ToastProps['variant']}
              >
                <ToastContent>
                  {message} {status === 'error' && `(${rest.statusCode})`}
                  {children}
                </ToastContent>
              </ToastMain>
            ),
          )}
        </Toast>
      </>
    );
  },
};
