import React from 'react';

import { CategoryItem } from 'src/components/atoms/CategoryItem';

import styles from 'src/components/organisms/Categories/styles.module.css';

export type Props = {
  listOfCategories: string[];
};

export const Categories: React.FC<Props> = ({ listOfCategories }) => (
  <div className={styles.categoriesWrapper}>
    {listOfCategories.map((item) => (
      <CategoryItem text={item} key={item} />
    ))}
  </div>
);
