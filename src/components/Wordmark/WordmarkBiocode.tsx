import { type WordmarkProps } from './';
import BiocodeWordmark from './biocode-wordmark.svg';
import c from 'clsx';
import React, { type FC } from 'react';

export const WordmarkBiocode: FC<WordmarkProps> = ({ className }) => {
  const classes = c(className, 'b-Wordmark b-Wordmark--biocode');

  return (
    <div className={classes}>
      <BiocodeWordmark />
    </div>
  );
};
