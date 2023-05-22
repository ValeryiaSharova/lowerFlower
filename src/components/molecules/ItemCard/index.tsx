import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Badge, Props as BadgeProps } from 'src/components/atoms/Badge';
import { Button } from 'src/components/molecules/Button';

import styles from 'src/components/molecules/ItemCard/styles.module.css';

export type Props = {
  title: string;
  price: number;
  sale?: number;
  imageSrc: string;
  type?: BadgeProps['type'];
  src?: string;
  isBigImg?: boolean;
};

export const ItemCard: React.FC<Props> = ({
  price,
  sale,
  title,
  imageSrc,
  type,
  src,
  isBigImg,
}) => (
  <div className={styles.wrapper}>
    {type && <Badge type={type} isAbsolute right={-10} top={-10} />}
    <img
      src={imageSrc}
      alt="itemCard"
      className={classNames({ [styles.cardImg]: isBigImg })}
    />
    {src ? (
      <Link to={src}>
        <span className={styles.title}>{title}</span>
      </Link>
    ) : (
      <span className={styles.title}>{title}</span>
    )}

    <div className={styles.priceWrapper}>
      <span className={styles.price}>{sale ? sale : price}&nbsp;р.</span>
      {sale && <span className={styles.sale}>{price}&nbsp;р.</span>}
    </div>
    <Button style="black" text="В корзину" />
  </div>
);
