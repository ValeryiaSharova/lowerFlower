import React from 'react';

import styles from 'src/components/atoms/CategoryItem/styles.module.css';

export type Props = {
  text: string;
};

export const CategoryItem: React.FC<Props> = ({ text }) => (
  <div className={styles.category}>{text}</div>
);
