import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'src/components/atoms/Icon';
import { Button } from 'src/components/molecules/Button';
import { CountButton } from 'src/components/molecules/CountButton';

import styles from 'src/components/molecules/FullItemCard/styles.module.css';

export type Props = {
  imageSrc: string;
  price: number;
  title: string;
  description: string;
  compound: string;
  categories: string[];
  labels: string[];
  sale?: number;
};

export const FullItemCard: React.FC<Props> = ({
  categories,
  compound,
  description,
  imageSrc,
  labels,
  price,
  title,
  sale,
}) => {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.wrapper}>
      <img src={imageSrc} alt={title} className={styles.img} />
      <div className={styles.descriptionContainer}>
        <Link className={styles.back} to="/catalog">
          <Icon icon="chevronLeft" size={16} color="var(--color-white)" />
          <span>назад</span>
        </Link>
        <div className={styles.mainContainer}>
          <span className={styles.title}>{title}</span>
          {sale ? (
            <div className={styles.priceContainer}>
              <span className={styles.price}>{sale} руб.</span>
              <span className={styles.sale}>{price} руб.</span>
            </div>
          ) : (
            <span className={styles.price}>{price} руб.</span>
          )}
        </div>
        <div className={styles.compoundContainer}>
          <span className={styles.compound}>состав:</span>
          &nbsp;
          <span>{compound}</span>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.labelContainer}>
          <span className={styles.categories}>
            <span className={styles.categoriesTitle}>Категории:</span>
            &nbsp;
            <span>{categories.join(', ')}</span>
          </span>
          <span className={styles.categories}>
            <span className={styles.categoriesTitle}>Метки:</span>
            &nbsp;
            <span>{labels.join(', ')}</span>
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <Button style="black" text="В корзину" />
          <CountButton counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>
  );
};
