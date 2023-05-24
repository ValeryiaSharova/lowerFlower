import React, { useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';
import { CartMenu } from 'src/components/organisms/CartMenu';

import styles from 'src/components/molecules/Cart/styles.module.css';

export type Props = {
  count: number;
};

export const Cart: React.FC<Props> = ({ count }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={styles.wrapper}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.count}>{count}</span>
        <Icon icon="bag" size={30} color="var(--color-white)" />
      </div>
      <CartMenu isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
    </>
  );
};
