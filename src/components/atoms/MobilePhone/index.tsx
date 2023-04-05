import classNames from 'classnames';
import React from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/atoms/MobilePhone/styles.module.css';

export type Props = {
  isIcon?: boolean;
  phone: string;
  size: 14 | 16;
};

const sizeStyles: Record<Props['size'], string> = {
  '14': styles.size14,
  '16': styles.size16,
};

export const MobilePhone: React.FC<Props> = ({ isIcon, phone, size }) => (
  <div className={styles.wrapper}>
    {isIcon && <Icon icon="phone" color="var(--color-green)" size={18} />}
    <span className={classNames(styles.phone, sizeStyles[size])}>{phone}</span>
  </div>
);
