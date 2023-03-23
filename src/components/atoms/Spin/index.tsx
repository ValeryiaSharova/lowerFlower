import SpinAnt from 'antd/lib/spin';
import React from 'react';

import { Icon, Props as IconProps } from 'src/components/atoms/Icon';

export type Props = {
  size?: IconProps['size'];
  color: 'black' | 'white';
};

export const Spin: React.FC<Props> = ({ color, size = 'l' }) => (
  <SpinAnt
    indicator={<Icon icon="loadingOutlined" size={size} color={color} />}
  />
);
