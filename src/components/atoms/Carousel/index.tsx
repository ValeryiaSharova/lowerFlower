import React from 'react';

import {
  ItemCard,
  Props as ItemCardProps,
} from 'src/components/molecules/ItemCard';

import styles from 'src/components/atoms/Carousel/styles.module.css';

export type Props = {
  itemCardData: ItemCardProps[];
  isBigImg?: boolean;
};

export const Carousel: React.FC<Props> = ({ itemCardData, isBigImg }) => (
  <div className={styles.cardWrapper}>
    {itemCardData.map((item) => (
      <ItemCard {...item} key={item.imageSrc} isBigImg={isBigImg} />
    ))}
  </div>
);
