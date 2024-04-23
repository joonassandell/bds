import { m } from 'framer-motion';
import { MarkProduct } from '../Mark';
import { variants } from './LoaderProducer';
import React, { type FC } from 'react';

export const LoaderProduct: FC = () => (
  <m.div
    animate="animate"
    className="b-Loader-loader--biocodeProduct"
    variants={variants}
  >
    <MarkProduct size="medium" />
  </m.div>
);
