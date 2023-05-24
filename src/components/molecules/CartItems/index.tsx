import React from 'react';

import { CountButton } from 'src/components/molecules/CountButton';

import styles from 'src/components/molecules/CartItems/styles.module.css';

export type Props = {
  items: { name: string; price: number; img: string; quantity: number }[];
};

export const CartItems: React.FC<Props> = ({ items }) => (
  <div className={styles.topBorder}>
    {items.map((item) => (
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <img src={item.img} alt={item.name} className={styles.img} />
          <div className={styles.infoWrapper}>
            <span className={styles.name}>{item.name}</span>
            <CountButton counter={item.quantity} size="xs" />
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <span className={styles.price}>{item.price} руб.</span>
          <span className={styles.delete}>Удалить</span>
        </div>
      </div>
    ))}
  </div>
);
