import * as Marks from './';
import { getCssSpaceHelper } from '../../lib/utils';
import { type MarkProps, type MarkString } from './';
import c from 'clsx';
import React, { type FC } from 'react';

const Mark: FC<MarkProps> = ({
  children,
  className,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  size,
  unwrap,
  width,
}) => {
  const classes = c(className, 'b-Mark', {
    '-size:m': size === 'medium',
    '-size:s': size === 'small',
    ...getCssSpaceHelper('marginBottom', marginBottom),
    ...getCssSpaceHelper('marginLeft', marginLeft),
    ...getCssSpaceHelper('marginRight', marginRight),
    ...getCssSpaceHelper('marginTop', marginTop),
  });

  if (unwrap) {
    return <>{children}</>;
  }

  return (
    <span
      className={classes}
      style={{
        width,
      }}
    >
      {children}
    </span>
  );
};

const markByString = (mark?: MarkString) => {
  if (!mark) return undefined;
  switch (mark) {
    case 'biocode':
      return <Marks.MarkBiocode />;
    case 'biocodeIcon':
      return <Marks.MarkBiocodeIcon />;
    case 'producer':
      return <Marks.MarkProducer />;
    case 'producerMuted':
      return <Marks.MarkProducerMuted />;
    case 'product':
      return <Marks.MarkProduct />;
    case 'productMuted':
      return <Marks.MarkProductMuted />;
    case 'report':
      return <Marks.MarkReport />;
    case 'reportMuted':
      return <Marks.MarkReportMuted />;
    case 'reportSmall':
      return <Marks.MarkReportSmall />;
    case 'reportSmallMuted':
      return <Marks.MarkReportSmallMuted />;
    default:
      return undefined;
  }
};

export { Mark, markByString };
