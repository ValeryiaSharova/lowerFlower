import React from 'react';

import { Link } from 'src/components/atoms/Link';

import styles from 'src/components/molecules/DropDownMenu/styles.module.css';

export type Props = {
  items: string[];
};

export const DropDownMenu: React.FC<Props> = ({ items }) => (
  <div className={styles.wrapper}>
    {items.map((item, index) => (
      <Link key={item + index} text={item} type="default" />
    ))}
  </div>
);
