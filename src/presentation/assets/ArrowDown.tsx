import React from 'react';

import { theme } from 'presentation/utils';

interface ArrowDownProps {
  width?: string;
  height?: string;
  fill?: string;
}

export const ArrowDown = ({
  fill = theme.black,
  width = '12',
  height = '8',
}: ArrowDownProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52865 7.13823L0.195313 1.8049L1.13812 0.862093L6.00005 5.72402L10.862 0.862094L11.8048 1.8049L6.47145 7.13823C6.21111 7.39858 5.789 7.39858 5.52865 7.13823Z"
        fill={fill}
      />
    </svg>
  );
};
