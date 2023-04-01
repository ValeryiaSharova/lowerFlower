import React from 'react';

import { Icon, Props as IconProps } from 'src/components/atoms/Icon';

import styles from 'src/components/molecules/IconButton/styles.module.css';

export type Props = {
  color?: IconProps['color'];
  icon: IconProps['icon'];
  size: IconProps['size'];
  onClick: () => void;
};

export const IconButton: React.FC<Props> = ({ color, icon, size, onClick }) => (
  <button type="button" className={styles.wrapper} onClick={onClick}>
    <Icon color={color} icon={icon} size={size} />
  </button>
);
