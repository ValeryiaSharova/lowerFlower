import React from 'react';

import { Arrow } from 'src/components/atoms/Arrow';
import {
  ItemCard,
  Props as ItemCardProps,
} from 'src/components/molecules/ItemCard';

import styles from 'src/components/atoms/Carousel/styles.module.css';

export type Props = {
  itemCardData: ItemCardProps[];
};

export const Carousel: React.FC<Props> = ({ itemCardData }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.arrow}>
      <Arrow size="big" color="var(--color-green)" rotate={-180} />
    </div>
    {itemCardData.map((item) => (
      <ItemCard {...item} key={item.imageSrc} />
    ))}
    <div className={styles.arrow}>
      <Arrow size="big" color="var(--color-green)" />
    </div>
  </div>
);
