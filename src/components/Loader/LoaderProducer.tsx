import { m, type Variants } from 'framer-motion';
import { MarkProducer } from '../Mark';
import React, { type FC } from 'react';

/**
 * Let's animate this later in a more classy way
 */
export const LoaderProducer: FC = () => (
  <m.div
    animate="animate"
    className="b-Loader-loader--biocodeProducer"
    variants={variants}
  >
    <MarkProducer size="medium" />
  </m.div>
);

export const variants: Variants = {
  animate: {
    opacity: [0.7, 1],
    rotate: [0, -8],
    scale: [0.88, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};
