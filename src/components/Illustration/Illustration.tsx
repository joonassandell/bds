import { type IllustrationProps } from './';
import c from 'clsx';
import Consumption from './illustrations/consumption.svg';
import Delivery from './illustrations/delivery.svg';
import EndOfLife from './illustrations/end-of-life.svg';
import LandUse from './illustrations/land-use.svg';
import Packaging from './illustrations/packaging.svg';
import Production from './illustrations/production.svg';
import RawMaterials from './illustrations/raw-materials.svg';
import React, { type FC } from 'react';
import Retail from './illustrations/retail.svg';
import Sourcing from './illustrations/sourcing.svg';

export const Illustration: FC<IllustrationProps> = ({
  className,
  color,
  name,
  outline,
  width,
}) => {
  const classes = c(className, 'b-Illustration', {
    [`b-Illustration--${name}`]: name,
    '-color:accent:1':
      (!color && (name === 'rawMaterials' || name === 'endOfLife')) ||
      color === 'accent:1',
    '-color:accent:2':
      (!color && (name === 'production' || name === 'consumption')) ||
      color === 'accent:2',
    '-color:accent:3':
      (!color && (name === 'packaging' || name === 'landUse')) ||
      color === 'accent:3',
    '-color:accent:4':
      (!color && (name === 'sourcing' || name === 'retail')) ||
      color === 'accent:4',
    '-color:accent:5': (!color && name === 'delivery') || color === 'accent:5',
    '-outline': outline,
  });
  const n = name;

  if (!n) return null;

  return (
    <span
      className={classes}
      style={{
        width,
      }}
    >
      {n === 'consumption' && <Consumption />}
      {n === 'delivery' && <Delivery />}
      {n === 'endOfLife' && <EndOfLife />}
      {n === 'landUse' && <LandUse />}
      {n === 'packaging' && <Packaging />}
      {n === 'production' && <Production />}
      {n === 'rawMaterials' && <RawMaterials />}
      {n === 'retail' && <Retail />}
      {n === 'sourcing' && <Sourcing />}
    </span>
  );
};
