import { getId } from '../../lib/utils';
import { Mark } from './Mark';
import { type MarkProps } from './';
import React, { type FC } from 'react';

export const MarkReportSmall: FC<MarkProps> = ({ ...props }) => {
  const id = getId();

  return (
    <Mark {...props}>
      <svg fill="none" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.6902 92.1999C32.0684 118.483 55.755 138 84 138C116.131 138 142.363 112.743 143.926 81H121.883C120.354 100.584 103.977 116 84 116C68.0333 116 54.3666 106.153 48.7419 92.1999L25.6902 92.1999Z"
          fill={`url(#paint0_linear_3515_881-${id})`}
        />
        <path
          d="M63.9677 21.4429L77.8142 40.501C79.8273 40.1714 81.8937 40 84 40C103.977 40 120.354 55.4155 121.883 75H143.925C143.46 65.7041 140.837 56.6289 136.247 48.5001C131.163 39.4957 123.838 31.9581 114.983 26.6185C106.128 21.2788 96.0427 18.3184 85.7064 18.0243C78.2865 17.8132 70.9178 18.9812 63.9677 21.4429Z"
          fill={`url(#paint1_linear_3515_881-${id})`}
        />
        <path
          clipRule="evenodd"
          d="M0.0803854 76.2151C-0.449849 81.7124 4.07714 86.1998 9.59999 86.1998L83.9739 86.1999C92.1446 86.1999 96.8667 76.9322 92.0641 70.322L48.3482 10.1522C45.1019 5.68417 38.8106 4.65941 34.6749 8.31963C24.9312 16.9429 16.8693 27.3388 10.9353 38.9848C5.00137 50.6309 1.32959 63.2636 0.0803854 76.2151Z"
          fill={`url(#paint2_linear_3515_881-${id})`}
          fillRule="evenodd"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_3515_881-${id}`}
            x1="67.9904"
            x2="67.9904"
            y1="78"
            y2="138"
          >
            <stop stopColor="#396055" />
            <stop offset="1" stopColor="#487A6D" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint1_linear_3515_881-${id}`}
            x1="64"
            x2="141.181"
            y1="21.5"
            y2="78.7974"
          >
            <stop offset="0.0140557" stopColor="#FFC91C" />
            <stop offset="1" stopColor="#FA3C11" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint2_linear_3515_881-${id}`}
            x1="92.329"
            x2="10.9195"
            y1="80.0522"
            y2="38.9403"
          >
            <stop stopColor="#2BCD28" />
            <stop offset="1" stopColor="#55E553" />
          </linearGradient>
        </defs>
      </svg>
    </Mark>
  );
};
