import { getId } from '../../lib/utils';
import { Mark } from './Mark';
import { type MarkProps } from './';
import React, { type FC } from 'react';

export const MarkProduct: FC<MarkProps> = ({ ...props }) => {
  const id = getId();

  return (
    <Mark {...props}>
      <svg fill="none" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M54.8823 124.461L77.1498 109.384C79.3718 109.789 81.6612 110 83.9999 110C103.977 110 120.354 94.5845 121.883 75H143.925C143.42 85.0968 140.37 94.9201 135.037 103.547C129.178 113.026 120.794 120.686 110.826 125.669C100.858 130.651 89.6996 132.759 78.6009 131.757C70.2428 131.001 62.1675 128.505 54.8823 124.461Z"
          fill={`url(#paint0_linear_3517_920-${id})`}
        />
        <path
          d="M40.8918 30.2664L57.867 44.4124C64.6777 37.9587 73.8765 34 84 34C103.977 34 120.354 49.4156 121.883 69H143.925C143.372 57.9478 139.771 47.242 133.493 38.0816C126.647 28.0929 116.94 20.4092 105.646 16.0406C94.3521 11.672 82.0007 10.8229 70.2154 13.6049C59.0364 16.2438 48.863 22.0326 40.8918 30.2664Z"
          fill={`url(#paint1_linear_3517_920-${id})`}
        />
        <path d="M72 105.625V64L36 88V130L72 105.625Z" fill="#43DE41" />
        <path d="M36 88L0 58L0 100L36 130V88Z" fill="#21B21F" />
        <path d="M72 64L36 34L0 58L36 88L72 64Z" fill="#43DE41" />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_3517_920-${id}`}
            x1="122"
            x2="42.162"
            y1="72"
            y2="85.5162"
          >
            <stop stopColor="#FFC91C" />
            <stop offset="1" stopColor="#EA9B00" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint1_linear_3517_920-${id}`}
            x1="144"
            x2="79.4604"
            y1="72"
            y2="-2.28408"
          >
            <stop stopColor="#E7D32E" />
            <stop offset="0.449098" stopColor="#BDE44E" />
            <stop offset="1" stopColor="#55E553" />
          </linearGradient>
        </defs>
      </svg>
    </Mark>
  );
};
