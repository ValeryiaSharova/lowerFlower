import React from 'react';

import { Badge, Props as BadgeProps } from 'src/components/atoms/Badge';
import { Button } from 'src/components/molecules/Button';

import styles from 'src/components/molecules/ItemCard/styles.module.css';

export type Props = {
  title: string;
  price: number;
  sale?: number;
  imageSrc: string;
  type?: BadgeProps['type'];
};

export const ItemCard: React.FC<Props> = ({
  price,
  sale,
  title,
  imageSrc,
  type,
}) => (
  <div className={styles.wrapper}>
    {type && <Badge type={type} isAbsolute right={-10} top={-10} />}
    <img src={imageSrc} alt="itemCard" className={styles.cardImg} />
    <span className={styles.title}>{title}</span>
    <div className={styles.priceWrapper}>
      <span className={styles.price}>{sale ? sale : price}&nbsp;р.</span>
      {sale && <span className={styles.sale}>{price}&nbsp;р.</span>}
    </div>
    <Button style="black" text="В корзину" />
  </div>
);
