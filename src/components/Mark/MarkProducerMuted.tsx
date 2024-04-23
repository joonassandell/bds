import { getId } from '../../lib/utils';
import { Mark } from './Mark';
import { type MarkProps } from './';
import React, { type FC } from 'react';

export const MarkProducerMuted: FC<MarkProps> = ({ ...props }) => {
  const id = getId();

  return (
    <Mark {...props}>
      <svg fill="none" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="72"
          cy="66"
          fill={`url(#paint0_linear_3704_607-${id})`}
          r="60"
        />
        <circle
          cx="86.2105"
          cy="79.2632"
          fill={`url(#paint1_linear_3704_607-${id})`}
          r="29.3684"
        />
        <path
          d="M139.71 90.5388C129.846 117.751 104.045 137.325 73.5856 137.983C55.2788 136.838 76.0031 114.419 90.5955 98.6337C92.2638 96.829 93.8519 95.1111 95.2923 93.5215C98.1432 90.3755 101.417 87.5333 105.099 84.9226C114.959 77.927 127.277 74.9871 136.481 77.4446C140.303 78.4623 142.319 80.2104 140.684 86.842C140.379 88.0786 140.055 89.3117 139.71 90.5388Z"
          fill={`url(#paint2_linear_3704_607-${id})`}
        />
        <path
          d="M2.30706 51.3599C1.39089 52.6043 0.957543 54.1266 0.737488 55.6561C0.251505 59.034 0 62.4876 0 66C0 105.765 32.2355 138 72 138C75.0635 138 78.0824 137.809 81.0452 137.437C83.6634 137.109 85.6483 134.959 85.6452 132.321C85.6307 119.792 81.3913 101.703 81.3913 101.703C68.659 62.1042 36.493 48 10.6365 48C6.79899 48 4.30437 48.6471 2.30706 51.3599Z"
          fill={`url(#paint3_linear_3704_607-${id})`}
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_3704_607-${id}`}
            x1="72"
            x2="72"
            y1="6"
            y2="126"
          >
            <stop stopColor="#DBE0EA" />
            <stop offset="0.734375" stopColor="#B1B7C5" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint1_linear_3704_607-${id}`}
            x1="80.8201"
            x2="99.4161"
            y1="104.814"
            y2="56.7905"
          >
            <stop stopColor="#727886" />
            <stop offset="1" stopColor="#A4AAB8" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint2_linear_3704_607-${id}`}
            x1="94.7368"
            x2="110.842"
            y1="134.21"
            y2="81.1578"
          >
            <stop stopColor="#717785" />
            <stop offset="1" stopColor="#A4AAB8" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint3_linear_3704_607-${id}`}
            x1="41.6842"
            x2="66.3158"
            y1="129.474"
            y2="72.6316"
          >
            <stop offset="0.13" stopColor="#9599A5" />
            <stop offset="1" stopColor="#A5ABB9" />
          </linearGradient>
        </defs>
      </svg>
    </Mark>
  );
};
