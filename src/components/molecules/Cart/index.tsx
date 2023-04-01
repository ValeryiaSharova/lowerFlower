import React from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/molecules/Cart/styles.module.css';

export type Props = {
  count: number;
};

export const Cart: React.FC<Props> = ({ count }) => (
  <div className={styles.wrapper}>
    <span className={styles.count}>{count}</span>
    <Icon icon="bag" size={30} color="var(--color-white)" />
  </div>
);
