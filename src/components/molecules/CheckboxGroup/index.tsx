import classNames from 'classnames';
import React from 'react';

import { Checkbox } from 'src/components/atoms/Checkbox';

import styles from 'src/components/molecules/CheckboxGroup/styles.module.css';

export type Props = {
  title: string;
  checkboxes: string[];
};

export const CheckboxGroup: React.FC<Props> = ({ title, checkboxes }) => {
  const isScroll = checkboxes.length > 8;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div
        className={classNames(styles.container, {
          [styles.scroll]: isScroll,
        })}
      >
        {checkboxes.map((item) => (
          <Checkbox label={item} key={item} />
        ))}
      </div>
    </div>
  );
};
