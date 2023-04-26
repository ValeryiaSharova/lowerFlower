import React from 'react';

import { Icon, Props as IconProps } from 'src/components/atoms/Icon';

export type Props = {
  size: 'small' | 'big';
  color: string;
  rotate?: number;
};

const sizeToIconSize: Record<Props['size'], IconProps['size']> = {
  big: 80,
  small: 40,
};

export const Arrow: React.FC<Props> = ({ size, color, rotate = 0 }) => (
  <div style={{ transform: `rotate(${rotate}deg)`, width: 'fit-content' }}>
    <Icon icon="arrow" size={sizeToIconSize[size]} color={color} />
  </div>
);
