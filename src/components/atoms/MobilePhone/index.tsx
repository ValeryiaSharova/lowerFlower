import React from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/atoms/MobilePhone/styles.module.css';

export type Props = {
  isIcon?: boolean;
  phone: string;
};

export const MobilePhone: React.FC<Props> = ({ isIcon, phone }) => (
  <div className={styles.wrapper}>
    {isIcon && <Icon icon="phone" color="var(--color-green)" size={18} />}
    <span className={styles.phone}>{phone}</span>
  </div>
);
