import { type BreadcrumbItemProps } from './';
import { Tooltip } from '../Tooltip';
import React, { type FC, useEffect, useRef, useState } from 'react';

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  children,
  ...props
}) => {
  const [tooltip, setTooltip] = useState('');
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Although against the official example, this created less rerenders and
   * should update correctly as depencency is based on the current ref
   * dimensions.
   *
   * Note, this doesn't work currently with Badges.
   *
   * https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
   */
  useEffect(() => {
    if (!ref.current) return;
    ref.current.clientWidth < ref.current.scrollWidth &&
      setTooltip(ref.current.innerText);
  }, [ref.current?.innerText]);

  return tooltip ? (
    <Tooltip content={tooltip}>
      <div className="b-Breadcrumb-item" ref={ref} {...props}>
        {children}
      </div>
    </Tooltip>
  ) : (
    <div className="b-Breadcrumb-item" ref={ref} {...props}>
      {children}
    </div>
  );
};
