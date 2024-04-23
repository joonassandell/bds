import { AnimatePresence, m } from 'framer-motion';
import { LoaderProducer } from './LoaderProducer';
import { LoaderProduct } from './LoaderProduct';
import { type LoaderProps } from './';
import { Spinner } from '../Spinner';
import { TRANS_DEFAULT, TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { type FC } from 'react';

export const Loader: FC<LoaderProps> = ({
  className,
  variant,
  name = 'default',
  unmount = false,
  unmountDelay = 0,
}) => {
  const classes = c(className, 'b-Loader', {
    'b-Loader--fullscreen': variant === 'fullscreen',
  });

  return (
    <AnimatePresence>
      {!unmount && (
        <m.div
          animate={{
            opacity: 1,
            transition: TRANS_DEFAULT_M,
          }}
          className={classes}
          exit={{
            opacity: 0,
            scale: 1.5,
            transition: {
              ...TRANS_DEFAULT,
              delay: unmountDelay ?? 0,
            },
          }}
          initial={{
            opacity: 0,
          }}
        >
          {name === 'producer' && <LoaderProducer />}
          {name === 'product' && <LoaderProduct />}
          {name === 'default' && <Spinner size="large" />}
        </m.div>
      )}
    </AnimatePresence>
  );
};
