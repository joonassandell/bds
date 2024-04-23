import { getId } from '../../lib/utils';
import { Mark } from './Mark';
import { type MarkProps } from './';
import React, { type FC } from 'react';

const MarkBiocodeIcon: FC<MarkProps> = ({ ...props }) => {
  const id = getId();

  return (
    <Mark {...props}>
      <svg fill="none" viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M144 72C144 111.765 111.765 144 72 144C32.2355 144 0 111.765 0 72C0 32.2355 32.2355 0 72 0C111.765 0 144 32.2355 144 72Z"
          fill={`url(#paint0_linear_2620_15-${id})`}
        />
        <path
          clipRule="evenodd"
          d="M116 128.996V73.3361C116 64.4923 112.554 56.1597 106.316 49.8737C100.091 43.5998 91.7936 40.0923 82.9835 40.0182L80.812 40V52.7536L82.9364 52.7823C88.3598 52.8554 93.4419 55.0139 97.2812 58.8839C101.127 62.7607 103.234 67.8921 103.234 73.3361V136.891C107.775 134.701 112.05 132.049 116 128.996Z"
          fill="white"
          fillRule="evenodd"
        />
        <path
          clipRule="evenodd"
          d="M72.0873 83.7832L72.0693 96.9493L36.038 80.8639C31.1554 78.6836 28 73.8297 28 68.4786C28 63.1275 31.1552 58.2737 36.0378 56.0934L72.0854 40.0063V53.1517L40.9553 66.8914L40.9521 66.8928C40.3235 67.1748 39.9233 67.7947 39.9233 68.4671C39.9233 69.1487 40.3201 69.7612 40.9485 70.0397L72.0873 83.7832Z"
          fill="white"
          fillRule="evenodd"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_2620_15-${id}`}
            x1="72"
            x2="72"
            y1="0"
            y2="144"
          >
            <stop stopColor="#3757F9" />
            <stop offset="1" stopColor="#0520A3" />
          </linearGradient>
        </defs>
      </svg>
    </Mark>
  );
};

export { MarkBiocodeIcon };
